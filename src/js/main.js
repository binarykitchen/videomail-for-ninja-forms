var VideomailClient = require('videomail-client')
var Marionette = window.Marionette
var Backbone = window.Backbone
var nfRadio = window.nfRadio // todo is this the same as Backbone.Radio ??
var jQuery = window.jQuery

// manual switch to have more stuff printed to console
var DEBUG = true

// good documentation on backbone event handling
// http://backbonejs.org/#Events

var VideomailFieldController = Marionette.Object.extend({

  videomailClient: null,

  // not sure if this is a good idea, but i need a reference to it
  formID: null,

  initialize: function () {
    Backbone.Radio.DEBUG = DEBUG

    // TODO do not load anything, nor do any event handling
    // when no fields are of type videomail
    // easy to reproduce: create a default contact form without
    // videomail and it's still loaded ...
    // see https://github.com/wpninjas/ninja-forms-videomail/issues/29
    this.listenTo(Backbone.Radio.channel('videomail'), 'init:model', this.registerVideomailField)
  },

  registerVideomailField: function (fieldModel) {
    // workaround for https://github.com/wpninjas/ninja-forms/issues/2675
    // also prevents from event emitter leaks under race conditions
    if (!this.videomailClient) {
      this.loadVideomailClient(fieldModel)

      // custom field validation, since we aren't using a standard `value`
      Backbone.Radio.channel('videomail').reply('validate:required', this.validateRequired, this)
      Backbone.Radio.channel('videomail').reply('validate:modelData', this.validateVideomail, this)

      this.formID = fieldModel.get('formID')

      // pause submission so that we can POST to the Videomail server first
      Backbone.Radio.channel('form-' + this.formID).reply('maybe:submit', this.maybeSubmit, this, fieldModel)

      // at last, append additional field data to the submission
      Backbone.Radio.channel('videomail').reply('get:submitData', function () {
        console.log('get:submitData callback here!')
      }, this)
    }
  },

  loadVideomailClient: function (fieldModel) {
    this.videomailClient = new VideomailClient({
      siteName: fieldModel.get('site_name'),
      video: {
        limitSeconds: fieldModel.get('limit_seconds') || 90,
        width: fieldModel.get('width') || 320,
        countdown: fieldModel.get('countdown') || false
      },
      audio: {
        enabled: fieldModel.get('audio_enabled') || false
      },
      selectors: {
        submitButtonSelector: '.submit-container input[type="button"]'
      },
      callbacks: {
        // ugly name eh?
        adjustFormDataBeforePosting: this.adjustFormDataBeforePostingToVideomailServer.bind(this)
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

    this.videomailClient.on(this.videomailClient.events.SUBMITTED, function (videomail) {
      // restart submission
      var formModel = nfRadio.channel('app').request('get:form', this.formID)

      // todo isnt 'form-' + formModel.get('id') the same as the formID already?
      nfRadio.channel('form-' + formModel.get('id')).request('add:extra', 'videomail', videomail)
      nfRadio.channel('form-' + this.formID).request('submit', formModel)
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
    if (!formModel.getExtra('videomail')) {
      this.videomailClient.submit()
      return false
    } else {
      return true
    }
  },

  // TODO UNTESTED, CHECK THIS
  // PROBABLY BROKEN OR OBSOLETE
  // COPIED FROM OLD COMMIT AT https://github.com/wpninjas/ninja-forms-videomail/blob/4ed9a5f433ee9e9a8c9bde9a001b1f0ed73c53f3/assets/js/main.js
  getVideomailValue: function (fieldKey) {
    var fieldValue = this.fieldModel.get(fieldKey)
    var rawValue = null

    // it can happen that the user has configured something wrong,
    // i.E. an empty email_from. in that case just ignore ...
    if (fieldValue) {
      // extract the key from the merge tag.
      // todo: make it work for i.E. {system:admin_email} as well, see
      // https://github.com/wpninjas/ninja-forms-videomail/issues/30
      rawValue = fieldValue.replace('{field:', '').replace('}', '')

      if (rawValue !== fieldValue) {
        // yes it was a merge tag, so resolve it again
        rawValue = this.getFieldValueByKey(rawValue)
      }
    }

    return rawValue
  },

  getFormValues: function () {
    var formModel = Backbone.Radio.channel('app').request('get:form', this.formID)
    var fieldsCollection = formModel.get('fields')

    return fieldsCollection.reduce(function (memo, field) {
      console.log(field.attributes)
      memo[field.get('key')] = field.get('value')
      return memo
    }, {})
  },

  getVideomailField: function () {
    var formModel = Backbone.Radio.channel('app').request('get:form', this.formID)
    var anything = Backbone.Radio.channel('form-' + formModel.get('id')).request('get:extra', 'videomail')

    // stuck here and have asked questions on slack
    console.log(anything)
  },

  // TODO UNTESTED, CHECK THIS
  adjustFormDataBeforePostingToVideomailServer: function (videomail, cb) {
    this.getVideomailField()
    console.log(this.getFormValues())
    // videomail.from = this.getVideomailValue('email_from')
    // videomail.to = this.getVideomailValue('email_to')
    // videomail.subject = this.getVideomailValue('email_subject')
    // videomail.body = this.getVideomailValue('email_body')

    // cb(null, videomail)
  },

  // never gets called, why?
  // related to https://github.com/wpninjas/ninja-forms/issues/2675
  onBeforeDestroy: function () {
    this.videomailClient.unload()
    delete this.videomailClient
  }
})

jQuery(document).ready(function () {
  return new VideomailFieldController()
})
