var VideomailClient = require('videomail-client')

// manual switch to have more stuff printed to console
var DEBUG = false

// good documentation on backbone event handling
// http://backbonejs.org/#Events

var VideomailFieldController = Marionette.Object.extend({

    submitButtonId:     null,
    videomailClient:    null,
    fieldModel:         null,

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
            var formID = "form-" + submitFieldModel.get('formID')

            Backbone.Radio.channel(formID).reply(
                'maybe:submit',
                this.beforeSubmit,
                this,
                formID
            )

            this.loadVideomailClient(submitFieldModel)
        }
    },

    // how to start/stop submission?
    // http://developer.ninjaforms.com/codex/startstop-submission/
    beforeSubmit: function(formID) {
        var formModel = nfRadio.channel('app').request('get:form', formID)

        if (formModel.getExtra('processed'))
            return true

        this.otherProcessing(formModel)

        // halt form submission
        return false
    },

    otherProcessing: function(formModel) {
        var formID = 'form-' + formModel.get('id')

        // set re-start flag
        nfRadio.channel(formID).request('add:extra', 'processed', true)

        // re-start submission
        nfRadio.channel(formID).request('submit', formModel)
    },

    getOption: function(name, defaultOption) {
        return this.fieldModel.get(name) || defaultOption
    },

    loadVideomailClient: function(submitFieldModel) {
        var submitButtonId = "nf-field-" + submitFieldModel.get('id')

        this.videomailClient = new VideomailClient({
            siteName: this.getOption('site_name'),
            video: {
                limitSeconds:   this.getOption('limit_seconds', 80),
                width:          this.getOption('width', 320),
                countdown:      this.getOption('countdown', false)
            },
            selectors: {
                submitButtonId: submitButtonId
            },
            audio: {
                enabled: this.getOption('audio_enabled', false)
            },
            callbacks: {
                adjustFormDataBeforePosting: this.adjustFormDataBeforePosting.bind(this)
            },
            defaults: {
                to: null // todo set to default contact admin email address
            },
            verbose: this.getOption('verbose', DEBUG)
        })

        this.videomailClient.on(
            this.videomailClient.events.PREVIEW,
            this.setVideomailKey.bind(this)
        )

        this.videomailClient.show()
    },

    setVideomailKey: function(key) {
        this.fieldModel.set('videomail-key', key)
    },

    validateModelData: function() {
        var videomailKey = this.fieldModel.get('videomail-key')

        return !!videomailKey
    },

    getVideomailFieldName: function(fieldKey) {
        return this.fieldModel.get(fieldKey)
    },

    adjustFormDataBeforePosting: function(videomail, cb) {
        var emailFromFieldName    = this.getVideomailFieldName('email_from')
        var emailToFieldName      = this.getVideomailFieldName('email_to')
        var emailSubjectFieldName = this.getVideomailFieldName('email_subject')
        var emailBodyFieldName    = this.getVideomailFieldName('email_body')

        // todo figure out how to resolve those four fields above into
        // real values before assigning them to the videomail object??
        // for example emailFromFieldName has the value "{field:email_2}"
        // --> how to get its value???
        // @see https://github.com/kjohnson/ninja-forms-videomail/issues/24

        // videomail.from = emailFromValue?????

        // tried anything possible, but still dont get the value :(
        // var test1 = getFieldName(emailFromFieldName)
        // var test2 = getFieldName('email_from')
        // var test3 = fieldModel.toJSON()
        // var test4 = fieldModel.values()
        // var test5 = fieldModel.keys()

        cb(null, videomail)
    },

    validateRequired: function() {
        /*
         * Override required validation, in favor of a submission error.
         * Since a value is not available until submission,
         * this avoids the nagging field error.
         */
        return true
    },

    getSubmitData: function(fieldData, fieldModel) {
        fieldData.value     = fieldModel.get('videomail-key')
        fieldData.key       = fieldModel.get('videomail-key')
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
