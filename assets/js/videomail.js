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
                verbose: model.get( 'verbose' ) || false,
                video: {
                    limitSeconds: model.get( 'limit_seconds' ) || 80,
                    width: model.get( 'width' ) || 320,
                    countdown: ( model.get( 'countdown' ) ) || false
                }
            }
        );

        var startOverButton = document.getElementById('startOver');

        var onSubmitted = function(videomail) {
            model.set( 'url', videomail[ 'url' ] );
            model.set( 'webm', videomail[ 'webm' ] );
            model.set( 'mp4', videomail[ 'mp4' ] );
            model.set( 'poster', videomail[ 'poster' ] );
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
        fieldData.value = fieldModel.get( 'url' );
        fieldData.url = fieldModel.get( 'url' );
        fieldData.webm = fieldModel.get( 'webm' );
        fieldData.mp4 = fieldModel.get( 'mp4' );
        fieldData.poster = fieldModel.get( 'poster' );
        return fieldData;
    }

});

jQuery( document ).ready( function( $ ) {
    var videomailFieldController = new VideomailFieldController();
});