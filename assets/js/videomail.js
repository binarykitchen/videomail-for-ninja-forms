var VideomailFieldController = Marionette.Object.extend({

    initialize: function() {
        this.listenTo( Backbone.Radio.channel( 'videomail' ), 'init:model', this.register );
        Backbone.Radio.channel( 'videomail' ).reply( 'get:submitData',  this.getSubmitData );
        Backbone.Radio.channel( 'videomail' ).reply( 'validate:required', this.validateRequired );
    },

    register: function( model ) {
        
        var VideomailClient = require('videomail-client');

        var videomailClient = new VideomailClient(
            {
                siteName: model.get( 'site_name' ),
                video: {
                    limitSeconds: model.get( 'limit_seconds' ) || 80,
                    width: model.get( 'width' ) || 320,
                    countdown: ( model.get( 'countdown' ) ) || false
                },
                verbose: model.get( 'verbose' ) || false,
            }
        );

        var startOverButton = document.getElementById('startOver');

        var onSubmitted = function(videomail) {
            model.set( 'videomail-url', videomail[ 'url' ] );
            model.set( 'videomail-webm', videomail[ 'webm' ] );
            model.set( 'videomail-mp4', videomail[ 'mp4' ] );
            model.set( 'videomail-poster', videomail[ 'poster' ] );
            model.set( 'videomail-alias', videomail[ 'alias' ] );
            model.set( 'videomail-key', videomail[ 'key' ] );
            this.replay(videomail, 'viewVideo');
            startOverButton.onclick = this.startOver
        };

        var formID = model.get( 'formID' );

        var that = this;

        videomailClient.on( videomailClient.events.FORM_READY, function() {
            if( 1 == model.get( 'required' ) ) {
                that.disableSubmit(formID);
            }
        } );

        videomailClient.on( videomailClient.events.COUNTDOWN, function() {
            that.disableSubmit( formID );
        } );

        videomailClient.on( videomailClient.events.RECORDING, function () {
            that.disableSubmit( formID );
        } );

        videomailClient.on( videomailClient.events.SUBMITTED, function() {
            that.enableSubmit(formID);
            onSubmitted.bind( videomailClient );
        } );

        videomailClient.show()
    },

    enableSubmit: function( formID ) {
        Backbone.Radio.channel( 'form-' + formID ).trigger( 'enable:submit' );
    },

    disableSubmit: function( formID ) {
        Backbone.Radio.channel( 'form-' + formID ).trigger( 'disable:submit' );
    },

    validateRequired: function( el, fieldModel ) {
        /*
         * Override Custom Required Validation.
         * Enable/Disable the submit button instead.
         * Since a value is not available until submission, this avoids the nagging field error.
         */
        return true;
    },

    getSubmitData: function( fieldData, fieldModel ) {
        fieldData.value = fieldModel.get( 'videomail-url' );
        fieldData.url = fieldModel.get( 'videomail-url' );
        fieldData.webm = fieldModel.get( 'videomail-webm' );
        fieldData.mp4 = fieldModel.get( 'videomail-mp4' );
        fieldData.poster = fieldModel.get( 'videomail-poster' );
        fieldData.alias = fieldModel.get( 'videomail-alias' );
        fieldData.key = fieldModel.get( 'videomail-key' );
        return fieldData;
    }

});

jQuery( document ).ready( function( $ ) {
    new VideomailFieldController();
});