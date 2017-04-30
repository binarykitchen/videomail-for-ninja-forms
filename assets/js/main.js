var VideomailClient = require('videomail-client')

// manual switch to have more stuff printed to console
var DEBUG = false;

// good documentation on backbone event handling
// http://backbonejs.org/#Events

var VideomailFieldController = Marionette.Object.extend({

    videomailClient:    null,

    initialize: function() {
        Backbone.Radio.DEBUG = DEBUG;

        // Listen to Videomail fieldModel `init`, before setting up Videomail-Client.
        this.listenTo( Backbone.Radio.channel( 'videomail' ), 'init:model', this.registerVideomailField );
    },

    registerVideomailField: function( fieldModel ){

        var formID = fieldModel.get( 'formID' );

        this.loadVideomailClient( fieldModel );

        // Custom field validation, since we aren't using a standard `value`.
        Backbone.Radio.channel( 'videomail'      ).reply( 'validate:required',  this.validateRequired,  this             );
        Backbone.Radio.channel( 'videomail'      ).reply( 'validate:modelData', this.validateVideomail, this             );

        // Pause submission so that we can POST to the Videomail server.
        Backbone.Radio.channel( 'form-' + formID ).reply( 'maybe:submit',       this.maybeSubmit,       this, fieldModel );

        // Append additional field data to the submission. By default, only `value` is sent.
        Backbone.Radio.channel( 'videomail'      ).reply( 'get:submitData',     this.getSubmitData,     this             );
    },

    /*
     * Load Videomail Client
     * Use the fieldModel's settings to init the Videomail Client.
     *
     * @param fieldModel
     */
    loadVideomailClient: function( fieldModel ) {
        this.videomailClient = new VideomailClient({
            siteName: fieldModel.get( 'site_name' ),
            video: {
                limitSeconds:   fieldModel.get( 'limit_seconds' ) || 80,
                width:          fieldModel.get( 'width' ) || 320,
                countdown:      fieldModel.get( 'countdown' ) || false,
            },
            audio: {
                enabled: fieldModel.get( 'audio_enabled' ) || false,
            },
            selectors: {
                submitButtonSelector: '.submit-container input[type="button"]'
            },
            // callbacks: {
            //     adjustFormDataBeforePosting:
            //     // ugly name eh?
            //     this.adjustFormDataBeforePostingToVideomailServer.bind(this)
            // },
            // leave it to ninja form to validate the inputs
            enableAutoValidation: false,
            // log actions/events to console
            verbose: fieldModel.get( 'verbose' ) || DEBUG
        });

        // needed to get the videomail key which is required before submission
        this.videomailClient.on( this.videomailClient.events.PREVIEW, function( key ){
            console.log( 'VIDEOMAIL: PREVIEW' );
            console.log( key );
            fieldModel.set( 'videomail-key', key );
            Backbone.Radio.channel('fields').request( 'remove:error', fieldModel.get('id'), 'required-error' ); // Clear any previous errors.
        });

        // needed to invalidate form
        this.videomailClient.on( this.videomailClient.events.GOING_BACK,function(){
            console.log( 'VIDEOMAIL: GOING BACK' );
        });

        this.videomailClient.on( this.videomailClient.events.SUBMITTED, function( videomail ){
            // Restart Submission
            var formID = fieldModel.get( 'formID' );
            var formModel = nfRadio.channel( 'app' ).request( 'get:form', formID );

            // set a temporary videomail indicating that it has been submitted successfully
            nfRadio.channel( 'form-' + formModel.get( 'id' ) ).request( 'add:extra', 'generatedVideomail', videomail );

            nfRadio.channel( 'form-' + formID ).request( 'submit', formModel );
        });

        this.videomailClient.show()
    },

    /*
     * Validate Requried
     *
     * @channel videomail fieldType
     * @request validate:required
     */
    validateRequired: function( el, fieldModel ) {
        var valid = this.validateVideomail( fieldModel );

        // override default behaviour so that we can set our own error text here
        if (!valid) {
            Backbone.Radio.channel('fields').request(
                'add:error',
                fieldModel.get('id'),
                'required-error',
                "Record and click on stop to see a preview video."
            )
        }

        return valid
    },

    /*
     * Validate Videomail
     *
     * @channel videomail fieldType
     * @request validate:modelData
     * @param   fieldModel
     */
    validateVideomail: function( fieldModel ) {
        return fieldModel.get( 'videomail-key' ) || false;
    },

    /*
     * Maybe Submit
     *
     * @channel form-{formID}
     * @request maybe:submit
     * @param   formModel
     */
    maybeSubmit: function(formModel) {
        if ( ! formModel.getExtra( 'generatedVideomail' ) ) {
            this.videomailClient.submit();
            return false;
        }
        return true;
    },

    onBeforeDestroy: function() {
        this.videomailClient.unload()
    }
});

jQuery(document).ready(function() {
    new VideomailFieldController();
});
