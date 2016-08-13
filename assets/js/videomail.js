var VideomailClient = require('videomail-client')

var VideomailFieldController = Marionette.Object.extend({

    initialize: function() {

        // Radio Listeners
        this.listenTo(
            Backbone.Radio.channel('videomail'),
            'init:model',
            this.register
        );

        // Radio Responses
        Backbone.Radio.channel('videomail').reply('get:submitData', this.getSubmitData);
        Backbone.Radio.channel('videomail').reply('validate:required', this.validateRequired);
    },

    register: function(fieldModel) {

        var that = this;

        var formID = 'form-' + fieldModel.get('formID')

        var adjustFormDataBeforePosting = function(videomail, cb) {
            var email_from = fieldModel.get('email_from')
            var email_to = fieldModel.get('email_to')
            var email_subject = fieldModel.get('email_subject')
            var email_body = fieldModel.get('email_body')

            // todo figure out how to resolve those four fields above into
            // real values before assigning them to the videomail object

            cb(null, videomail)
        }

        this.videomailClient = new VideomailClient({
            siteName: fieldModel.get('site_name'),
            video: {
                limitSeconds:   fieldModel.get('limit_seconds') || 80,
                width:          fieldModel.get('width') || 320,
                countdown:      fieldModel.get('countdown') || false
            },
            selectors: {
                submitButtonId:     null, // todo
                subjectInputName:   null, // todo
                toInputName:        null, // todo
                bodyInputName:      null, // todo
                fromInputName:      null  // todo
            },
            audio: {
                enabled: fieldModel.get('audio_enabled') || false
            },
            callbacks: {
                adjustFormDataBeforePosting: adjustFormDataBeforePosting // todo
            },
            defaults: {
                from: null // todo set to default contact admin email address
            },
            verbose: fieldModel.get('verbose') || false
        });

        // is that really needed?
        this.videomailClient.on(this.videomailClient.events.COUNTDOWN, function() {
            that.disableSubmit('form-' + formID);
        });

        // is that really needed?
        this.videomailClient.on(this.videomailClient.events.RECORDING, function() {
            that.disableSubmit('form-' + formID);
        });

        this.videomailClient.on(this.videomailClient.events.SUBMITTED, function(videomail) {
            fieldModel.set('value', videomail.url);
            fieldModel.set('videomail-url', videomail.url);
            fieldModel.set('videomail-webm', videomail.webm);
            fieldModel.set('videomail-mp4', videomail.mp4);
            fieldModel.set('videomail-poster', videomail.poster);
            fieldModel.set('videomail-alias', videomail.alias);
            fieldModel.set('videomail-key', videomail.key);

            that.enableSubmit(formID);
        });

        this.videomailClient.show();
    },

    enableSubmit: function(formID) {
        Backbone.Radio.channel(formID).trigger('enable:submit');
    },

    disableSubmit: function(formID) {
        Backbone.Radio.channel(formID).trigger('disable:submit');
    },

    validateRequired: function() {
        /*
         * Override required validation, in favor of a submission error.
         * Since a value is not available until submission, this avoids the nagging field error.
         */
        return true;
    },

    getSubmitData: function(fieldData, fieldModel) {
        fieldData.value = fieldModel.get('videomail-url');
        fieldData.url = fieldModel.get('videomail-url');
        fieldData.webm = fieldModel.get('videomail-webm');
        fieldData.mp4 = fieldModel.get('videomail-mp4');
        fieldData.poster = fieldModel.get('videomail-poster');
        fieldData.alias = fieldModel.get('videomail-alias');
        fieldData.key = fieldModel.get('videomail-key');
        return fieldData;
    },

    onBeforeDestroy: function() {
        this.videomailClient.unload()
    }
});

jQuery(document).ready(function() {
    new VideomailFieldController();
});
