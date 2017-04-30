var VideomailClient = require('videomail-client')
var Marionette = window.Marionette
var Backbone = window.Backbone
var nfRadio = window.nfRadio
var jQuery = window.jQuery

// manual switch to have more stuff printed to console
var DEBUG = true

// good documentation on backbone event handling
// http://backbonejs.org/#Events

var VideomailFieldController = Marionette.Object.extend({

  videomailClient: null,

  initialize: function () {
    Backbone.Radio.DEBUG = DEBUG

    this.listenTo(Backbone.Radio.channel('videomail'), 'init:model', this.registerVideomailField)
  },

  registerVideomailField: function (fieldModel) {
    var formID = fieldModel.get('formID')

    this.loadVideomailClient(fieldModel)

    // custom field validation, since we aren't using a standard `value`
    Backbone.Radio.channel('videomail').reply('validate:required', this.validateRequired, this)
    Backbone.Radio.channel('videomail').reply('validate:modelData', this.validateVideomail, this)

    // pause submission so that we can POST to the Videomail server first
    Backbone.Radio.channel('form-' + formID).reply('maybe:submit', this.maybeSubmit, this, fieldModel)

    // at last, append additional field data to the submission
    Backbone.Radio.channel('videomail').reply('get:submitData', this.getSubmitData, this)
  },

  loadVideomailClient: function (fieldModel) {
    this.videomailClient = new VideomailClient({
      siteName: fieldModel.get('site_name'),
      video: {
        limitSeconds: fieldModel.get('limit_seconds') || 80,
        width: fieldModel.get('width') || 320,
        countdown: fieldModel.get('countdown') || false
      },
      audio: {
        enabled: fieldModel.get('audio_enabled') || false
      },
      selectors: {
        submitButtonSelector: '.submit-container input[type="button"]'
      },
      // leave it to ninja form to validate the inputs
      enableAutoValidation: false,
      // log actions/events to console
      verbose: fieldModel.get('verbose') || DEBUG
    })

    // needed to get the videomail key which is required before submission
    this.videomailClient.on(this.videomailClient.events.PREVIEW, function (key) {
      fieldModel.set('videomail-key', key)
      Backbone.Radio
        .channel('fields')
        // clears any previous errors
        .request('remove:error', fieldModel.get('id'), 'required-error')
    })

    // needed to invalidate form
    this.videomailClient.on(this.videomailClient.events.GOING_BACK, function () {
      console.log('VIDEOMAIL: GOING BACK')
    })

    this.videomailClient.on(this.videomailClient.events.SUBMITTED, function (videomail) {
      // restart submission
      var formID = fieldModel.get('formID')
      var formModel = nfRadio.channel('app').request('get:form', formID)

      // set a temporary videomail indicating that it has been submitted successfully
      nfRadio.channel('form-' + formModel.get('id')).request('add:extra', 'generatedVideomail', videomail)

      nfRadio.channel('form-' + formID).request('submit', formModel)
    })

    this.videomailClient.show()
  },

  validateRequired: function (el, fieldModel) {
    var valid = this.validateVideomail(fieldModel)

    // override default behaviour so that we can set our own error text here
    if (!valid) {
      Backbone.Radio.channel('fields').request(
        'add:error',
        fieldModel.get('id'),
        'required-error',
        'Record and click on stop to see a preview video.'
      )
    }

    return valid
  },

  validateVideomail: function (fieldModel) {
    return fieldModel.get('videomail-key') || false
  },

  maybeSubmit: function (formModel) {
    if (!formModel.getExtra('generatedVideomail')) {
      this.videomailClient.submit()
      return false
    }
    return true
  },

  onBeforeDestroy: function () {
    this.videomailClient.unload()
  }
})

jQuery(document).ready(function () {
  return new VideomailFieldController()
})
