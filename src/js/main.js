// manual switch to have more stuff printed to console
var DEBUG = false

// good documentation on backbone event handling
// http://backbonejs.org/#Events

var VideomailFieldController = Marionette.Object.extend({

  videomailClient: null,

  // not sure if this is a good idea, but i need a reference to it
  fieldModel: null,

  initialize: function () {
    Backbone.Radio.DEBUG = DEBUG

    this.listenTo(
      Backbone.Radio.channel('videomail'),
      'init:model',
      this.registerVideomailField
    )
  },

  getFormId: function () {
    return this.fieldModel.get('formID')
  },

  registerVideomailField: function (fieldModel) {
    // workaround for https://github.com/wpninjas/ninja-forms/issues/2675
    // also prevents from event emitter leaks under race conditions
    if (!this.videomailClient) {
      this.fieldModel = fieldModel

      this.loadVideomailClient()

      // custom field validation, since we aren't using a standard `value`
      // for the videomail input
      Backbone.Radio.channel('videomail').reply(
        'validate:required',
        this.validateRequired,
        this
      )

      Backbone.Radio.channel('videomail').reply(
        'validate:modelData',
        this.validateVideomail,
        this
      )

      // control submission progress,
      // so that we can POST to the Videomail server first
      Backbone.Radio.channel('form-' + this.getFormId()).reply(
        'maybe:submit',
        this.maybeSubmit,
        this,
        fieldModel
      )
    }
  },

  loadVideomailClient: function () {
    this.videomailClient = new VideomailClient({
      siteName: this.fieldModel.get('site_name'),
      video: {
        limitSeconds: this.fieldModel.get('limit_seconds') || 90,
        width: this.fieldModel.get('width') || 320,
        countdown: this.fieldModel.get('countdown') || false
      },
      audio: {
        enabled: this.fieldModel.get('audio_enabled') || false
      },
      image: {
        quality: this.fieldModel.get('image_quality') || 0.4
      },
      selectors: {
        submitButtonSelector: '.submit-wrap input'
      },
      callbacks: {
        // ugly name eh?
        adjustFormDataBeforePosting: this.adjustFormDataBeforePostingToVideomailServer.bind(this)
      },
      // leave it to ninja form to validate the inputs
      enableAutoValidation: false,
      // leave it to ninja form to deal with form submissions
      enableAutoSubmission: false,
      // log actions/events to console
      verbose: this.fieldModel.get('verbose') || DEBUG
    })

    this.videomailClient.on(this.videomailClient.events.PREVIEW, this.onPreview.bind(this))
    this.videomailClient.on(this.videomailClient.events.SUBMITTED, this.onSubmitted.bind(this))
    this.videomailClient.on(this.videomailClient.events.GOING_BACK, this.onGoingBack.bind(this))

    this.videomailClient.show()
  },

  // needed to get the videomail key which is required before
  // submitting to the videomail server
  onPreview: function (key) {
    this.fieldModel.set('videomail-key', key)
    Backbone.Radio
      .channel('fields')
      // clears any previous errors
      .request('remove:error', this.fieldModel.get('id'), 'required-error')
  },

  onSubmitted: function (videomail) {
    var formModel = nfRadio.channel('app').request('get:form', this.getFormId())

    // todo isnt 'form-' + formModel.get('id') the same as the formID already?
    nfRadio.channel('form-' + formModel.get('id')).request('add:extra', 'videomail', videomail)

    // restart submission again, this time to the real wp site
    nfRadio.channel('form-' + this.getFormId()).request('submit', formModel)
  },

  onGoingBack: function () {
    this.fieldModel.set('videomail-key', null)
    this.invalidate()
  },

  validateRequired: function (el, fieldModel) {
    var valid = this.validateVideomail(fieldModel)

    if (!valid) {
      this.invalidate()
    }

    return valid
  },

  invalidate: function () {
    // override default behaviour so that we can set our own error text here
    Backbone.Radio.channel('fields').request(
      'add:error',
      this.fieldModel.get('id'),
      'required-error',
      'Record and click on stop to see a preview video.'
    )
  },

  validateVideomail: function (fieldModel) {
    fieldModel = fieldModel || this.fieldModel
    return fieldModel.get('videomail-key') || false
  },

  hasErrors: function (formModel) {
    return formModel.get('errors').length > 0
  },

  maybeSubmit: function (formModel) {
    var maybe = true
    var videomailSubmitted = formModel.getExtra('videomail')
    var videomailRecorded = this.validateVideomail()
    var errorneous = this.hasErrors(formModel)

    // hold on with final form submission when one was recorded
    // but hasn't been submitted to the videomail server yet
    if (!videomailSubmitted && !errorneous && videomailRecorded) {
      this.videomailClient.submit()
      maybe = false
    }

    return maybe
  },

  getMergeTagValue: function (fieldKey, formValues) {
    var value = this.fieldModel.get(fieldKey)

    // it can happen that the user has configured something wrong,
    // i.E. an empty email_from. in that case just ignore ...
    if (value) {
      // admin email localized from backend, a bit ugly
      // todo ask for an endpoint to process those special merge tags
      // https://github.com/wpninjas/ninja-forms-videomail/issues/30
      if (value === '{wp:admin_email}') {
        value = window.nfVideomail.admin_email
      } else {
        var rawFieldKey = value.replace('{field:', '').replace('}', '')

        if (rawFieldKey !== value) {
          // yes it was a merge tag, so use it
          value = formValues[rawFieldKey]
        }
      }
    }

    return value
  },

  getFormValues: function () {
    var formModel = Backbone.Radio.channel('app').request('get:form', this.getFormId())
    var fieldsCollection = formModel.get('fields')

    return fieldsCollection.reduce(function (memo, field) {
      memo[field.get('key')] = field.get('value')
      return memo
    }, {})
  },

  adjustFormDataBeforePostingToVideomailServer: function (videomail, cb) {
    var formValues = this.getFormValues()

    videomail.from = this.getMergeTagValue('email_from', formValues)
    videomail.to = this.getMergeTagValue('email_to', formValues)
    videomail.subject = this.getMergeTagValue('email_subject', formValues)
    videomail.body = this.getMergeTagValue('email_body', formValues)

    cb(null, videomail)
  },

  onBeforeDestroy: function () {
    this.videomailClient.unload()
    delete this.videomailClient
  }
})

jQuery(document).ready(function () {
  return new VideomailFieldController()
})
