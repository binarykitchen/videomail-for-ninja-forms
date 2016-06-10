var VideomailFieldController = Marionette.Object.extend({

    initialize: function() {
        this.listenTo( Backbone.Radio.channel( 'videomail' ), 'init:model', this.register );
    },

    register: function( model ) {

        var VideomailClient = require('videomail-client');

        var videomailClient = new VideomailClient(
            {
                verbose: false,
                video: {
                    limitSeconds: 80,
                    width: 240,
                    countdown: false
                }
            }
        );

        var startOverButton = document.getElementById('startOver');

        var onSubmitted = function(videomail) {

            if( videomail[ 'url' ] ) {
                model.set( 'url', videomail[ 'url' ] ); // Submit the Video URL with the form.
                model.set( 'value', videomail[ 'url' ] );
            }

            if( videomail[ 'webm' ] ) {
                model.set( 'webm', videomail[ 'webm' ] );
            }

            if( videomail[ 'mp4' ] ) {
                model.set( 'mp4', videomail[ 'mp4' ] );
            }

            this.replay(videomail, 'viewVideo');
            startOverButton.onclick = this.startOver
        };

        videomailClient.on(
            videomailClient.events.SUBMITTED,
            onSubmitted.bind( videomailClient )
        );
        videomailClient.show()
    },

});

jQuery( document ).ready( function( $ ) {
    var videomailFieldController = new VideomailFieldController();
});