// Remember, you can't use any import/require statements here
const PLUGIN_VERSION = "7.0.4";

// manual switch to have more stuff printed to console
let DEBUG = false;

// good documentation on backbone event handling
// http://backbonejs.org/#Events

const VideomailFieldController = Marionette.Object.extend({
  videomailClient: null,

  fieldModel: null,

  channel: Backbone.Radio.channel("videomail"),

  initialize: function () {
    Backbone.Radio.DEBUG = DEBUG;

    this.listenToOnce(this.channel, "init:model", this.registerVideomailField);
    this.listenToOnce(this.channel, "attach:view", this.loadVideomailClient);

    // ugly workaround to make it work with the conditional plugin
    this.listenTo(this.channel, "all", function (eventName) {
      DEBUG && console.log("Videomail channel event triggered:", eventName);

      // must be coming back from a multi-step where
      // videomail has already been initialised. so just resume it.
      this.listenTo(nfRadio.channel("nfMP"), "change:part", function (params) {
        DEBUG && console.log("nfMP channel event triggered:", "change:part");

        const currentModels =
          params.currentElement?.attributes?.formContentData?.models || [];

        const currentCid = this.fieldModel.cid;

        const currentModel = currentModels.find(function (model) {
          return model.cid === currentCid;
        });

        if (currentModel) {
          this.loadVideomailClient();
        } else {
          this.videomailClient.unload();
        }
      });
    });
  },

  getFormId: function () {
    return this.fieldModel.get("formID");
  },

  registerVideomailField: function (fieldModel) {
    this.fieldModel = fieldModel;

    // custom field validation, since we aren't using a standard `value`
    // for the videomail input
    this.channel.reply("validate:required", this.validateRequired, this);

    this.channel.reply("validate:modelData", this.validateVideomail, this);

    // control submission progress,
    // so that we can POST to the Videomail server first
    Backbone.Radio.channel("form-" + this.getFormId()).reply(
      "maybe:submit",
      this.maybeSubmit,
      this,
      fieldModel,
    );
  },

  loadVideomailClient: function () {
    let imageQualityPercentage = this.fieldModel.get("image_quality") || 40;

    if (imageQualityPercentage > 100) {
      imageQualityPercentage = 100;
    } else if (imageQualityPercentage < 1) {
      imageQualityPercentage = 1;
    }

    const verbose = this.fieldModel.get("verbose") || DEBUG;

    // late overrides
    DEBUG = DEBUG || verbose;
    Backbone.Radio.DEBUG = Backbone.Radio.DEBUG || verbose;

    this.videomailClient = new VideomailClient.VideomailClient({
      siteName: this.fieldModel.get("site_name"),
      video: {
        limitSeconds: this.fieldModel.get("limit_seconds") || 90,
        width: this.fieldModel.get("width") || 320,
        // TODO Implement on VC side
        stretch: this.fieldModel.get("stretch") || false,
        countdown: this.fieldModel.get("countdown") || false,
      },
      audio: {
        enabled: this.fieldModel.get("audio_enabled"),
      },
      image: {
        quality: imageQualityPercentage / 100, // must be a float
      },
      selectors: {
        containerId: "videomail",
        submitButtonSelector: ".submit-wrap input",
      },
      callbacks: {
        // ugly name eh?
        adjustFormDataBeforePosting:
          this.adjustFormDataBeforePostingToVideomailServer.bind(this),
      },
      // when true, user media is loaded only when record button is pressed
      loadUserMediaOnRecord: this.fieldModel.get("load_user_media_on_record"),

      // leave it to ninja form to validate the inputs
      enableAutoValidation: false,

      // leave it to ninja form to deal with form submissions
      enableAutoSubmission: false,

      // log actions/events to console
      verbose,

      versions: {
        ninjaFormPlugin: PLUGIN_VERSION,
      },
    });

    this.videomailClient.on("PREVIEW", this.onPreview.bind(this));
    this.videomailClient.on("SUBMITTED", this.onSubmitted.bind(this));
    this.videomailClient.on("GOING_BACK", this.onGoingBack.bind(this));

    this.videomailClient.show();
  },

  // needed to get the videomail key which is required before
  // submitting to the videomail server
  onPreview: function (key) {
    this.fieldModel.set("videomail-key", key);
    this.fieldModel.set("value", key);

    Backbone.Radio.channel("fields")
      // clears any previous errors
      .request("remove:error", this.fieldModel.get("id"), "required-error");
  },

  onSubmitted: function (result) {
    let formModel = Backbone.Radio.channel("app").request("get:form", this.getFormId());

    if (!formModel) {
      // fallback for older versions
      formModel = this.fieldModel.collection.options.formModel;
    }

    // TODO Isn't 'form-' + formModel.get('id') the same as the formID already?
    Backbone.Radio.channel("form-" + formModel.get("id")).request(
      "add:extra",
      "videomail",
      result.videomail,
    );

    // restart submission again, this time to the real wp site
    Backbone.Radio.channel("form-" + this.getFormId()).request("submit", formModel);
  },

  onGoingBack: function () {
    this.fieldModel.set("videomail-key", null);
    this.invalidate();
  },

  validateRequired: function (el, fieldModel) {
    const valid = this.validateVideomail(fieldModel);

    if (!valid) {
      this.invalidate();
    }

    return valid;
  },

  invalidate: function () {
    // override default behavior so that we can set our own error text here
    Backbone.Radio.channel("fields").request(
      "add:error",
      this.fieldModel.get("id"),
      "required-error",
      "Record and click on stop to see a preview video.",
    );
  },

  validateVideomail: function (fieldModel) {
    fieldModel = fieldModel || this.fieldModel;
    return fieldModel.get("videomail-key") || false;
  },

  hasErrors: function (formModel) {
    return formModel.get("errors").length > 0;
  },

  maybeSubmit: function (formModel) {
    let maybe = true;
    const videomailSubmitted = formModel.getExtra("videomail");
    const videomailRecorded = this.validateVideomail();
    const error = this.hasErrors(formModel);

    // hold on with final form submission when one was recorded
    // but hasn't been submitted to the videomail server yet
    if (!videomailSubmitted && !error && videomailRecorded) {
      this.videomailClient.submit();
      maybe = false;
    }

    return maybe;
  },

  getMergeTagValue: function (fieldKey, formValues) {
    let value = this.fieldModel.get(fieldKey);

    // it can happen that the user has configured something wrong,
    // i.E. an empty email_from. in that case just ignore ...
    if (value) {
      // admin email localized from backend, a bit ugly
      // todo ask for an endpoint to process those special merge tags
      // https://github.com/binarykitchen/videomail-for-ninja-forms/issues/30
      if (value === "{wp:admin_email}") {
        value = window.nfVideomail.admin_email;
      } else {
        const rawFieldKeyMatches = value.match(/{field:(.*)}/i);
        const rawFieldKey = rawFieldKeyMatches && rawFieldKeyMatches[1];

        if (rawFieldKey !== value) {
          // yes it was a merge tag, so use it
          value = value.replace(/{field:(.*)}/i, formValues[rawFieldKey]);
        }
      }
    }

    if (value === "undefined") {
      return undefined;
    }

    return value;
  },

  // returns a map like this:
  // {
  //   from_email: "micK@deafonz.eh"
  //   from_name: "MH"
  //   message: "sdfsdfsdf"
  //   subject: "sdfsdf"
  //   submit: ""
  //   video_message: "11eb-61d7-dd583320-ae61-2b82be6c6e3e"
  // }
  getFormValues: function () {
    let collection;
    const formModel = Backbone.Radio.channel("app").request("get:form", this.getFormId());

    if (formModel) {
      collection = formModel.get("fields");
      // fallback for older versions
    } else if (this.fieldModel.collection.options.formModel.get("fields").models) {
      collection = this.fieldModel.collection.options.formModel.get("fields").models;
    }

    const formValues = collection.reduce(function (memo, field) {
      memo[field.get("key")] = field.get("value");
      return memo;
    }, {});

    return formValues;
  },

  adjustFormDataBeforePostingToVideomailServer: function (videomail) {
    const formValues = this.getFormValues();

    videomail.from = this.getMergeTagValue("email_from", formValues);
    videomail.to = this.getMergeTagValue("email_to", formValues);
    videomail.subject = this.getMergeTagValue("email_subject", formValues);
    videomail.body = this.getMergeTagValue("email_body", formValues);

    return videomail;
  },

  onBeforeDestroy: function () {
    this.videomailClient.unload();
    delete this.videomailClient;
  },
});

jQuery(document).ready(function () {
  return new VideomailFieldController();
});
