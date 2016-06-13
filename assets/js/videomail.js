var VideomailFieldController = Marionette.Object.extend({

    initialize: function() {
        this.listenTo( Backbone.Radio.channel( 'videomail' ), 'init:model', this.register );
        Backbone.Radio.channel( 'videomail' ).reply( 'get:submitData',  this.getSubmitData );
    },

    register: function( model ) {

        console.log( model );
        
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

        videomailClient.on(
            videomailClient.events.SUBMITTED,
            onSubmitted.bind( videomailClient )
        );
        videomailClient.show()
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
    var videomailFieldController = new VideomailFieldController();
});