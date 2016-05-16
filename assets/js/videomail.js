var VideomailFieldController = Marionette.Object.extend({

    initialize: function() {
        this.listenTo( Backbone.Radio.channel( 'videomail' ), 'init:model', this.register );
    },

    register: function( model ) {
        var VideomailClient = require('videomail-client'), // load videomail client package
            videomailClient = new VideomailClient({        // instantiate with some options
                verbose:       true,                         // prints additional info to console
                disableSubmit: true                          // disable submissions to keep example simple
            });

        // this will load your webcam, fill the placeholder containing
        // the `id="videomail"` with HTML and CSS code, place buttons and much more.
        videomailClient.show();
    }

});

jQuery( document ).ready( function( $ ) {
    var videomailFieldController = new VideomailFieldController();
});