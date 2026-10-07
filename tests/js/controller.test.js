import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";

const sourceUrl = new URL("../../src/js/main.js", import.meta.url);
const source = readFileSync(sourceUrl, "utf8");

function model(values = {}, cid = "video-field") {
  return {
    cid,
    get: (key) => values[key],
    set: (key, value) => {
      values[key] = value;
    },
    getExtra: (key) => values.extra?.[key],
  };
}

function setup(values = {}) {
  const channels = new Map();
  const clients = [];
  const listeners = [];
  let controller;
  function channel(name) {
    if (!channels.has(name)) {
      channels.set(name, {
        requests: [],
        replies: [],
        responses: {},
        request(...args) {
          this.requests.push(args);
          return this.responses[args[0]];
        },
        reply(...args) {
          this.replies.push(args);
        },
      });
    }
    return channels.get(name);
  }
  class Client {
    constructor(options) {
      this.options = options;
      this.events = {};
      this.shown = 0;
      this.unloaded = 0;
      this.submitted = 0;
      clients.push(this);
    }
    on(name, callback) {
      this.events[name] = callback;
    }
    show() {
      this.shown++;
    }
    unload() {
      this.unloaded++;
    }
    submit() {
      this.submitted++;
    }
  }
  const radio = { channel, DEBUG: false };
  vm.runInNewContext(
    source,
    {
      Backbone: { Radio: radio },
      nfRadio: radio,
      Marionette: {
        Object: {
          extend(methods) {
            return function () {
              controller = Object.assign(
                {
                  listenTo: (...args) => listeners.push(["on", ...args]),
                  listenToOnce: (...args) => listeners.push(["once", ...args]),
                },
                methods,
              );
              controller.initialize();
              return controller;
            };
          },
        },
      },
      VideomailClient: { VideomailClient: Client },
      window: { nfVideomail: { admin_email: "admin@example.test" } },
      document: {},
      jQuery: () => ({ ready: (callback) => callback() }),
      console,
    },
    { filename: sourceUrl.pathname },
  );
  const field = model({ id: 7, formID: 3, ...values });
  return { controller, field, channel, clients, listeners, radio };
}

function registered(values) {
  const state = setup(values);
  state.controller.registerVideomailField(state.field);
  return state;
}

test("registers lifecycle, validation and form submission listeners", () => {
  const { controller, field, channel, listeners } = registered();
  assert.deepEqual(
    listeners.map(([type, , event]) => [type, event]),
    [
      ["once", "init:model"],
      ["once", "attach:view"],
      ["on", "all"],
      ["on", "change:part"],
    ],
  );
  assert.equal(controller.getFormId(), 3);
  assert.deepEqual(channel("videomail").replies[0], [
    "validate:required",
    controller.validateRequired,
    controller,
  ]);
  assert.equal(channel("videomail").replies[1][1], controller.validateVideomail);
  assert.deepEqual(channel("form-3").replies[0], [
    "maybe:submit",
    controller.maybeSubmit,
    controller,
    field,
  ]);
});

for (const [quality, expected] of [
  [undefined, 0.4],
  [200, 1],
  [-1, 0.01],
  [75, 0.75],
]) {
  test(`client image quality ${quality} becomes ${expected}`, () => {
    const { controller, clients } = registered({ image_quality: quality });
    controller.loadVideomailClient();
    const client = clients[0];
    assert.equal(client.options.image.quality, expected);
    assert.equal(client.options.video.limitSeconds, 90);
    assert.equal(client.options.video.width, 320);
    assert.equal(client.options.enableAutoSubmission, false);
    assert.equal(client.options.enableAutoValidation, false);
    assert.equal(client.options.selectors.containerId, "videomail");
    assert.equal(
      client.options.versions.videomailNinjaFormPlugin,
      JSON.parse(readFileSync(new URL("../../package.json", import.meta.url))).version,
    );
    assert.equal(client.shown, 1);
  });
}

test("passes configured options and reloads the client without leaking it", () => {
  const { controller, clients, radio } = registered({
    whitelist_key: "new-key",
    site_name: "old-key",
    limit_seconds: 25,
    width: 640,
    stretch: true,
    countdown: 3,
    audio_enabled: false,
    load_user_media_on_record: true,
    disable_form_when_submitting: true,
    verbose: true,
  });
  controller.loadVideomailClient();
  controller.loadVideomailClient();
  assert.equal(clients[0].unloaded, 1);
  const { options } = clients[1];
  assert.equal(options.whitelistKey, "new-key");
  assert.deepEqual(
    { ...options.video },
    {
      limitSeconds: 25,
      width: 640,
      stretch: true,
      countdown: 3,
    },
  );
  assert.equal(options.audio.enabled, false);
  assert.equal(options.loadUserMediaOnRecord, true);
  assert.equal(options.disableFormWhenSubmitting, true);
  assert.equal(radio.DEBUG, true);
});

test("supports legacy whitelist keys", () => {
  const { controller, clients } = registered({ site_name: "legacy-key" });
  controller.loadVideomailClient();
  assert.equal(clients[0].options.whitelistKey, "legacy-key");
});

test("preview and going back update required validation and errors", () => {
  const { controller, field, channel, clients } = registered();
  controller.loadVideomailClient();
  assert.equal(controller.validateRequired(null, field), false);
  assert.equal(channel("fields").requests.at(-1)[0], "add:error");
  clients[0].events.PREVIEW("recording-key");
  assert.equal(field.get("value"), "recording-key");
  assert.equal(controller.validateRequired(null, field), "recording-key");
  assert.deepEqual(channel("fields").requests.at(-1), [
    "remove:error",
    7,
    "required-error",
  ]);
  clients[0].events.GOING_BACK();
  assert.equal(field.get("videomail-key"), null);
  assert.equal(controller.validateVideomail(), false);
  assert.equal(channel("fields").requests.at(-1)[0], "add:error");
});

for (const [recorded, submitted, errors, shouldUpload] of [
  [false, false, [], false],
  ["key", false, [], true],
  ["key", true, [], false],
  ["key", false, ["required-error"], false],
]) {
  test(`submission gate: recorded=${recorded}, submitted=${submitted}, errors=${errors.length}`, () => {
    const { controller, clients } = registered({ "videomail-key": recorded });
    controller.loadVideomailClient();
    const form = model({ errors, extra: { videomail: submitted } });
    assert.equal(controller.maybeSubmit(form), !shouldUpload);
    assert.equal(clients[0].submitted, Number(shouldUpload));
  });
}

for (const legacy of [false, true]) {
  test(`resumes Ninja Forms submission after server response (legacy=${legacy})`, () => {
    const { controller, field, channel, clients } = registered();
    const form = model({ id: 3 });
    if (legacy) field.collection = { options: { formModel: form } };
    else channel("app").responses["get:form"] = form;
    controller.loadVideomailClient();
    const videomail = { url: "https://videomail.io/videomail/example" };
    clients[0].events.SUBMITTED({ videomail });
    assert.deepEqual(channel("form-3").requests, [
      ["add:extra", "videomail", videomail],
      ["submit", form],
    ]);
  });
}

test("multipart navigation only loads media when the video field is present", () => {
  const { controller, field, clients } = setup();
  controller.onPartChange({});
  assert.equal(clients.length, 0);
  controller.registerVideomailField(field);
  controller.onPartChange({});
  assert.equal(clients.length, 0);
  controller.onPartChange({
    currentElement: { attributes: { formContentData: { models: [field] } } },
  });
  assert.equal(clients.length, 1);
  controller.onPartChange({
    currentElement: { attributes: { formContentData: { models: [model({}, "other")] } } },
  });
  assert.equal(clients[0].unloaded, 1);
});

for (const legacy of [false, true]) {
  test(`builds server payload using form fields and merge tags (legacy=${legacy})`, () => {
    const { controller, field, channel, clients } = registered({
      email_from: "{field:sender}",
      email_to: "{wp:admin_email}",
      email_subject: "Message from {field:name}",
      email_body: "{field:message}",
    });
    const fields = [
      model({ key: "sender", value: "sender@example.test" }),
      model({ key: "name", value: "Alice" }),
      model({ key: "message", value: "Hello" }),
    ];
    if (legacy) {
      field.collection = {
        options: { formModel: model({ fields: { models: fields } }) },
      };
    } else channel("app").responses["get:form"] = model({ fields });
    controller.loadVideomailClient();
    const payload = { key: "recording-key" };
    assert.equal(
      clients[0].options.callbacks.adjustFormDataBeforePosting(payload),
      payload,
    );
    assert.deepEqual(payload, {
      key: "recording-key",
      from: "sender@example.test",
      to: "admin@example.test",
      subject: "Message from Alice",
      body: "Hello",
    });
  });
}

test("merge tags preserve literals and omit unset or missing fields", () => {
  const { controller } = registered({
    literal: "Static subject",
    empty: "",
    missing: "{field:absent}",
  });
  assert.equal(controller.getMergeTagValue("literal", {}), "Static subject");
  assert.equal(controller.getMergeTagValue("empty", {}), "");
  assert.equal(controller.getMergeTagValue("unset", {}), undefined);
  assert.equal(controller.getMergeTagValue("missing", {}), undefined);
});

test("destroy handles both unloaded and active controllers", () => {
  const { controller, clients } = registered();
  controller.onBeforeDestroy();
  controller.loadVideomailClient();
  controller.onBeforeDestroy();
  assert.equal(clients[0].unloaded, 1);
  assert.equal(controller.videomailClient, undefined);
});
