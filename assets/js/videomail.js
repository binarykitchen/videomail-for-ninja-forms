var VideomailClient = require('videomail-client')

// manual switch to have more stuff printed to console
var DEBUG = false

// good documentation on backbone event handling
// http://backbonejs.org/#Events

var VideomailFieldController = Marionette.Object.extend({

    submitButtonId:     null,
    videomailClient:    null,
    fieldModel:         null,
    formModel:          null,

    initialize: function() {
        Backbone.Radio.DEBUG = DEBUG

        var submitChannel    = Backbone.Radio.channel('submit')
        var videomailChannel = Backbone.Radio.channel('videomail')

        // Backbone Radio Listeners
        // see https://github.com/marionettejs/backbone.radio

        this.listenTo(
            submitChannel,
            'init:model',
            this.registerSubmitModel
        )

        this.listenTo(
            videomailChannel,
            'init:model',
            this.registerFieldModel
        )

        // Radio Responses, see http://developer.ninjaforms.com/codex/field-submission-data/
        videomailChannel.reply('get:submitData',     this.getSubmitData, this)
        videomailChannel.reply('validate:modelData', this.validateModelData, this)
        videomailChannel.reply('validate:required',  this.validateRequired, this)
    },

    // is called every time a ‘videomail’ field is initialized
    // but since we only have one instance per form, it is okay to do it like that for
    // todo add new ninja form configuration to limit instances to 1
    registerFieldModel: function(videomailFieldModel) {
        this.fieldModel = videomailFieldModel
    },

    // called when submit button has been laid out internally.
    // we have to listen to that to obtain its ID before we can initialize
    // the videomail client
    registerSubmitModel: function(submitFieldModel) {
        if (!this.fieldModel) {
            // can happen when order of events is not correct
            console.error('Videomail field has not been initialized.')
        } else {

            // abort when already initialized.
            // shouldnt' happen but for stability does not hurt.
            // also solves this one bug:
            // https://github.com/wpninjas/ninja-forms/issues/1639
            if (this.videomailClient)
                return

            var formID = "form-" + submitFieldModel.get('formID')

            // remember it first
            this.submitButtonId = "nf-field-" + submitFieldModel.get('id')

            Backbone.Radio.channel(formID).reply(
                'maybe:submit',
                this.beforeSubmit,
                this,
                formID
            )

            this.loadVideomailClient()
        }
    },

    validateRequired: function() {
        /*
         * Override required validation, in favor of a submission error.
         * Since a value is not available until submission,
         * this avoids the nagging field error.
         */
        return true
    },

    // how to start/stop submission?
    // http://developer.ninjaforms.com/codex/startstop-submission/
    beforeSubmit: function(formID) {
        // remember form model for some submission-related functions further below
        this.formModel = Backbone.Radio.channel('app').request('get:form', formID)

        if (this.formModel.getExtra('videomail_submitted')) {
            // yes, videomail is on the videomail server, so
            // proceed with the normal ninja form submission routine
            return true
        } else {
            // manually trigger mouse click event on ninja form submit button
            // the videomail client itself is listening to as well.
            // this will automtically trigger the whole videomail submission
            document.getElementById(this.submitButtonId).click()

            // important :halt the normal ninja form submission
            return false
        }
    },

    getOption: function(name, defaultOption) {
        return this.fieldModel.get(name) || defaultOption
    },

    loadVideomailClient: function() {
        this.videomailClient = new VideomailClient({
            siteName: this.getOption('site_name'),
            video: {
                limitSeconds:   this.getOption('limit_seconds', 80),
                width:          this.getOption('width', 320),
                countdown:      this.getOption('countdown', false)
            },
            selectors: {
                submitButtonId: this.submitButtonId
            },
            audio: {
                enabled: this.getOption('audio_enabled', false)
            },
            callbacks: {
                adjustFormDataBeforePosting:
                // ugly name eh?
                this.adjustFormDataBeforePostingToVideomailServer.bind(this)
            },
            defaults: {
                to: null // todo set to default wordpress contact admin email address
            },
            verbose: this.getOption('verbose', DEBUG)
        })

        // needed to get the videomail key which is required before submission
        this.videomailClient.on(
            this.videomailClient.events.PREVIEW,
            this.setVideomailKey.bind(this)
        )

        this.videomailClient.on(
            this.videomailClient.events.SUBMITTED,
            this.videomailSubmitted.bind(this)
        )

        this.videomailClient.show()
    },

    setVideomailKey: function(key) {
        this.fieldModel.set('videomail-key', key)
    },

    getFormID: function() {
        return 'form-' + this.formModel.get('id')
    },

    validateModelData: function() {
        var videomailKey = this.fieldModel.get('videomail-key')

        return !!videomailKey
    },

    getFieldValueByKey: function(key) {
        var field = Backbone.Radio.channel(this.getFormID()).request('get:fieldByKey', key)

        return field.get('value')
    },

    getVideomailValue: function(fieldKey) {
        var fieldValue = this.fieldModel.get(fieldKey)

        // extract the key from the merge tag.
        var rawValue = fieldValue.replace('{field:', '').replace('}', '')

        if (rawValue != fieldValue) {
            // yes it was a merge tag, so resolve it again
            rawValue = this.getFieldValueByKey(rawValue)
        }

        return rawValue
    },

    adjustFormDataBeforePostingToVideomailServer: function(videomail, cb) {
        videomail.from    = this.getVideomailValue('email_from')
        videomail.to      = this.getVideomailValue('email_to')
        videomail.subject = this.getVideomailValue('email_subject')
        videomail.body    = this.getVideomailValue('email_body')

        cb(null, videomail)
    },

    videomailSubmitted: function(videomail) {
        // pass on some videomail attributes to the field model
        this.fieldModel.set('value', videomail.url)
        this.fieldModel.set('videomail-url', videomail.url)
        this.fieldModel.set('videomail-webm', videomail.webm)
        this.fieldModel.set('videomail-mp4', videomail.mp4)
        this.fieldModel.set('videomail-poster', videomail.poster)
        this.fieldModel.set('videomail-alias', videomail.alias)
        this.fieldModel.set('videomail-key', videomail.key)

        var formID = this.getFormID()

        // set re-videomail_submitted flag so that we can continue
        // with the normal ninja form submission
        Backbone.Radio.channel(formID).request('add:extra', 'videomail_submitted', true)

        // re-start submission
        Backbone.Radio.channel(formID).request('submit', this.formModel)
    },

    getSubmitData: function(fieldData, fieldModel) {
        fieldData.key       = fieldModel.get('videomail-key')
        fieldData.value     = fieldModel.get('videomail-url')
        fieldData.url       = fieldModel.get('videomail-url')
        fieldData.webm      = fieldModel.get('videomail-webm')
        fieldData.mp4       = fieldModel.get('videomail-mp4')
        fieldData.poster    = fieldModel.get('videomail-poster')
        fieldData.alias     = fieldModel.get('videomail-alias')

        return fieldData
    },

    onBeforeDestroy: function() {
        this.videomailClient.unload()
    }
})

jQuery(document).ready(function() {
    new VideomailFieldController()
})
