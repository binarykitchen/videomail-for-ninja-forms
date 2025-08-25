(function(root, factory) {
    if ('object' == typeof exports && 'object' == typeof module) module.exports = factory();
    else if ('function' == typeof define && define.amd) define([], factory);
    else if ('object' == typeof exports) exports["VideomailClient"] = factory();
    else root["VideomailClient"] = factory();
})(globalThis, ()=>(()=>{
        "use strict";
        var __webpack_modules__ = {
            "./node_modules/@rslib/core/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[12].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[12].use[2]!./node_modules/stylus-loader/dist/cjs.js??ruleSet[1].rules[12].use[3]!./src/styles/main.styl": function(module1, __webpack_exports__, __webpack_require__) {
                __webpack_require__.d(__webpack_exports__, {
                    A: ()=>__WEBPACK_DEFAULT_EXPORT__
                });
                var _node_modules_rslib_core_node_modules_rsbuild_core_compiled_css_loader_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@rslib/core/node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js");
                var _node_modules_rslib_core_node_modules_rsbuild_core_compiled_css_loader_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_rslib_core_node_modules_rsbuild_core_compiled_css_loader_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
                var _node_modules_rslib_core_node_modules_rsbuild_core_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@rslib/core/node_modules/@rsbuild/core/compiled/css-loader/api.js");
                var _node_modules_rslib_core_node_modules_rsbuild_core_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_rslib_core_node_modules_rsbuild_core_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_1__);
                var ___CSS_LOADER_EXPORT___ = _node_modules_rslib_core_node_modules_rsbuild_core_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_rslib_core_node_modules_rsbuild_core_compiled_css_loader_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
                ___CSS_LOADER_EXPORT___.push([
                    module1.id,
                    `@keyframes blink {
  0% {
    opacity: .9;
  }

  35% {
    opacity: .9;
  }

  50% {
    opacity: .1;
  }

  85% {
    opacity: .1;
  }

  100% {
    opacity: .9;
  }
}

.videomail .visuals {
  position: relative;
}

.videomail .visuals video.replay {
  width: 100%;
  height: 100%;
}

.videomail .countdown, .videomail .recordTimer, .videomail .recordNote, .videomail .pausedHeader, .videomail .pausedHint {
  height: auto;
  margin: 0;
}

.videomail .countdown, .videomail .recordTimer, .videomail .recordNote, .videomail .paused, .videomail .facingMode, .videomail noscript {
  z-index: 100;
  position: absolute;
}

.videomail .countdown, .videomail .recordTimer, .videomail .recordNote, .videomail .pausedHeader, .videomail .pausedHint, .videomail noscript {
  font-weight: bold;
}

.videomail .countdown, .videomail .paused, .videomail noscript {
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.videomail .pausedHeader, .videomail .pausedHint, .videomail .countdown {
  text-align: center;
  letter-spacing: 4px;
  text-shadow: -2px 0 #fff, 0 2px #fff, 2px 0 #fff, 0 -2px #fff;
}

.videomail .pausedHeader, .videomail .countdown {
  opacity: .9;
  font-size: 460%;
}

.videomail .pausedHint {
  font-size: 150%;
}

.videomail .facingMode {
  color: #f5f5f5e6;
  z-index: 10;
  background: #1e1e1e80;
  border: none;
  outline: none;
  padding: .1em .3em;
  font-family: monospace;
  font-size: 1.2em;
  transition: all .2s;
  bottom: .6em;
  right: .7em;
}

.videomail .facingMode:hover {
  cursor: pointer;
  background: #323232b3;
}

.videomail .recordTimer, .videomail .recordNote {
  color: #00d814;
  opacity: .9;
  background: #0a0a0acc;
  padding: .3em .4em;
  font-family: monospace;
  transition: all 1s;
  right: .7em;
}

.videomail .recordTimer.near, .videomail .recordNote.near {
  color: #eb9369;
}

.videomail .recordTimer.nigh, .videomail .recordNote.nigh {
  color: #ea4b2a;
}

.videomail .recordTimer {
  top: .7em;
}

.videomail .recordNote {
  top: 3.6em;
}

.videomail .recordNote:before {
  content: "REC";
  animation: 1s infinite blink;
}

.videomail .notifier {
  box-sizing: border-box;
  overflow: hidden;
}

.videomail .radioGroup {
  display: block;
}

.videomail .radioGroup label {
  cursor: pointer;
}

.videomail video {
  margin-bottom: 0;
}

.videomail video.userMedia {
  background-color: #3232321a;
}
`,
                    ""
                ]);
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            },
            "./src/index.ts": function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                __webpack_require__.r(__webpack_exports__);
                __webpack_require__.d(__webpack_exports__, {
                    VideomailClient: ()=>src_client,
                    VideoType: ()=>VideoType_VideoType
                });
                const constants = {
                    SITE_NAME_LABEL: "x-videomail-site-name",
                    VERSION_LABEL: "videomailClientVersion",
                    public: {
                        ENC_TYPE_APP_JSON: "application/json",
                        ENC_TYPE_FORM: "application/x-www-form-urlencoded"
                    }
                };
                var serialize_error = __webpack_require__("./node_modules/serialize-error/index.js");
                var client = __webpack_require__("./node_modules/superagent/lib/client.js");
                var client_default = /*#__PURE__*/ __webpack_require__.n(client);
                var package_namespaceObject = {
                    rE: "11.0.4"
                };
                var defined = __webpack_require__("./node_modules/defined/index.js");
                var defined_default = /*#__PURE__*/ __webpack_require__.n(defined);
                var ua_parser = __webpack_require__("./node_modules/ua-parser-js/src/main/ua-parser.mjs");
                var VideoType_VideoType = /*#__PURE__*/ function(VideoType) {
                    VideoType["WebM"] = "webm";
                    VideoType["MP4"] = "mp4";
                    return VideoType;
                }({});
                function canPlayType_canPlayType(video, type) {
                    const canPlayType = video.canPlayType(`video/${type}`);
                    if ("" === canPlayType) return false;
                    return canPlayType;
                }
                const media_canPlayType = canPlayType_canPlayType;
                const FALLBACK_VIDEO_TYPE = VideoType_VideoType.MP4;
                class Browser {
                    options;
                    result;
                    videoType;
                    constructor(options){
                        this.options = options;
                        const ua = defined_default()(options.fakeUaString, window.navigator.userAgent, "");
                        const userAgentParser = new ua_parser.O(ua);
                        this.result = userAgentParser.getResult();
                    }
                    isIOS() {
                        return "iOS" === this.result.os.name;
                    }
                    getBrowserVersion() {
                        return this.result.browser.version;
                    }
                    isChrome() {
                        return "Chrome" === this.result.browser.name;
                    }
                    isChromium() {
                        return "Chromium" === this.result.browser.name;
                    }
                    isFirefox() {
                        return "Firefox" === this.result.browser.name;
                    }
                    isSafari() {
                        if (!this.result.browser.name) return false;
                        return this.result.browser.name.includes("Safari");
                    }
                    isAndroid() {
                        if (!this.result.os.name) return false;
                        return this.result.os.name.includes("Android");
                    }
                    isChromeBased() {
                        return this.isChrome() || this.isChromium();
                    }
                    isMobile() {
                        return this.isIOS() || this.isAndroid();
                    }
                    isOkSafari() {
                        const version = this.getBrowserVersion();
                        if (!version) return false;
                        return this.isSafari() && parseFloat(version) >= 11;
                    }
                    getVideoType(video) {
                        if (!this.videoType) {
                            if (media_canPlayType(video, VideoType_VideoType.MP4)) this.videoType = VideoType_VideoType.MP4;
                            else if (media_canPlayType(video, VideoType_VideoType.WebM)) this.videoType = VideoType_VideoType.WebM;
                        }
                        if (this.videoType !== VideoType_VideoType.WebM && this.videoType !== VideoType_VideoType.MP4) this.videoType = FALLBACK_VIDEO_TYPE;
                        if ("" === this.videoType.trim()) this.videoType = FALLBACK_VIDEO_TYPE;
                        return this.videoType;
                    }
                    getNoAccessIssue() {
                        const message = "Unable to access webcam";
                        let explanation;
                        explanation = this.isChromeBased() ? "Click on the allow button to grant access to your webcam" : this.isFirefox() ? "Please grant Firefox access to your webcam" : "Your system does not let your browser access your webcam";
                        return error_createError({
                            message,
                            explanation,
                            options: this.options
                        });
                    }
                    getUsefulData() {
                        return {
                            ua: this.result.ua,
                            browser: this.result.browser,
                            cpu: this.result.cpu,
                            device: this.result.device,
                            engine: this.result.engine,
                            os: this.result.os
                        };
                    }
                }
                const util_Browser = Browser;
                let getBrowser_browser;
                function getBrowser(localOptions) {
                    if (!getBrowser_browser) getBrowser_browser = new util_Browser(localOptions);
                    return getBrowser_browser;
                }
                const util_getBrowser = getBrowser;
                function isAudioEnabled(options) {
                    return Boolean(options.audio.enabled);
                }
                function setAudioEnabled(enabled, options) {
                    options.audio.enabled = enabled;
                    return options;
                }
                function isAutoPauseEnabled(options) {
                    return options.enableAutoPause && options.enablePause;
                }
                var util = __webpack_require__("./node_modules/util/util.js");
                var util_default = /*#__PURE__*/ __webpack_require__.n(util);
                function inspect(element) {
                    return util_default().inspect(element, {
                        colors: false,
                        compact: true,
                        depth: 4,
                        breakLength: 1 / 0
                    }).replace(/\s+/gu, " ").replace(/\r?\n/gu, "");
                }
                function pretty(anything) {
                    if (anything instanceof HTMLElement) {
                        if (anything.id) return `#${anything.id}`;
                        if (anything.className) return `.${anything.className}`;
                        return "(No HTML identifier available)";
                    }
                    return inspect(anything);
                }
                const util_pretty = pretty;
                class HTTPVideomailError_HTTPVideomailError extends Error {
                    code;
                    status;
                    explanation;
                }
                const HTTPVideomailError = HTTPVideomailError_HTTPVideomailError;
                class VideomailError extends HTTPVideomailError {
                    title = "Error from videomail-client npm package";
                    location = window.location.href;
                    logLines;
                    siteName;
                    cookie;
                    err;
                    promise;
                    reason;
                    browser;
                    cpu;
                    device;
                    engine;
                    os;
                    screen;
                    orientation;
                    classList;
                    static PERMISSION_DENIED = "PERMISSION_DENIED";
                    static NOT_ALLOWED_ERROR = "NotAllowedError";
                    static DOM_EXCEPTION = "DOMException";
                    static STARTING_FAILED = "Starting video failed";
                    static MEDIA_DEVICE_NOT_SUPPORTED = "MediaDeviceNotSupported";
                    static BROWSER_PROBLEM = "browser-problem";
                    static WEBCAM_PROBLEM = "webcam-problem";
                    static OVERCONSTRAINED = "OverconstrainedError";
                    static NOT_READABLE_ERROR = "NotReadableError";
                    static SECURITY_ERROR = "SecurityError";
                    static TRACK_START_ERROR = "TrackStartError";
                    static INVALID_STATE_ERROR = "InvalidStateError";
                    constructor(message, options, classList, errData){
                        super(message, errData);
                        this.explanation = errData?.explanation;
                        this.logLines = errData?.logLines;
                        this.siteName = options.siteName;
                        this.classList = classList;
                        const browser = util_getBrowser(options);
                        const usefulClientData = browser.getUsefulData();
                        this.browser = usefulClientData.browser;
                        if (usefulClientData.cpu.architecture) this.cpu = usefulClientData.cpu;
                        this.device = usefulClientData.device.type ? usefulClientData.device : void 0;
                        this.engine = usefulClientData.engine;
                        this.os = usefulClientData.os;
                        let cookie;
                        if (__webpack_require__.g.document.cookie.length > 0) cookie = __webpack_require__.g.document.cookie.split(",").map((c)=>c.trim());
                        this.cookie = cookie && cookie.length > 0 ? cookie : void 0;
                        this.screen = [
                            screen.width,
                            screen.height,
                            screen.colorDepth
                        ].join("\xd7");
                        if (screen.orientation) this.orientation = screen.orientation.type;
                        this.err = errData?.err;
                        const stackTarget = errData?.cause ?? errData?.err;
                        if (stackTarget) {
                            if ("captureStackTrace" in Error) Error.captureStackTrace(stackTarget, VideomailError);
                        }
                    }
                    hasClass(name) {
                        return this.classList?.includes(name);
                    }
                    isBrowserProblem() {
                        return this.hasClass(VideomailError.BROWSER_PROBLEM);
                    }
                    getClassList() {
                        return this.classList;
                    }
                }
                const error_VideomailError = VideomailError;
                function createError(errorParams) {
                    const { exc, options } = errorParams;
                    let err = errorParams.err;
                    if (!err && exc instanceof Error) err = exc;
                    if (err instanceof error_VideomailError) return err;
                    let message = errorParams.message;
                    let explanation = errorParams.explanation;
                    const classList = errorParams.classList ?? [];
                    const audioEnabled = isAudioEnabled(options);
                    const browser = util_getBrowser(options);
                    const errName = err?.name ?? err?.constructor.name;
                    switch(errName){
                        case error_VideomailError.SECURITY_ERROR:
                            message = "The operation was insecure";
                            explanation = "Probably you have disallowed Cookies for this page?";
                            classList.push(error_VideomailError.BROWSER_PROBLEM);
                            break;
                        case error_VideomailError.OVERCONSTRAINED:
                            message = "Invalid webcam constraints";
                            if (err && "constraint" in err) {
                                const overconstrainedError = err;
                                const constraint = overconstrainedError.constraint;
                                explanation = "width" === constraint ? "Your webcam does not meet the width requirement." : constraint ? `Unmet constraint: ${constraint}` : err.message;
                            } else explanation = err?.message;
                            break;
                        case "MediaDeviceFailedDueToShutdown":
                            message = "Webcam is shutting down";
                            explanation = "This happens your webcam is already switching off and not giving you permission to use it.";
                            break;
                        case "SourceUnavailableError":
                            message = "Source of your webcam cannot be accessed";
                            explanation = "Probably it is locked from another process or has a hardware error.";
                            break;
                        case "NO_DEVICES_FOUND":
                            if (audioEnabled) {
                                message = "No webcam nor microphone found";
                                explanation = "Your browser cannot find a webcam with microphone attached to your machine.";
                            } else {
                                message = "No webcam found";
                                explanation = "Your browser cannot find a webcam attached to your machine.";
                            }
                            classList.push(error_VideomailError.WEBCAM_PROBLEM);
                            break;
                        case "PermissionDismissedError":
                            message = "Ooops, you didn't give me any permissions?";
                            explanation = "Looks like you skipped the webcam permission dialogue.<br/>Please grant access next time the dialogue appears.";
                            classList.push(error_VideomailError.WEBCAM_PROBLEM);
                            break;
                        case error_VideomailError.NOT_ALLOWED_ERROR:
                        case error_VideomailError.PERMISSION_DENIED:
                        case "PermissionDeniedError":
                            message = "Permission denied";
                            explanation = "Cannot access your webcam. This can have two reasons:<br/>a) you blocked access to webcam; or<br/>b) your webcam is already in use.";
                            classList.push(error_VideomailError.WEBCAM_PROBLEM);
                            break;
                        case "HARDWARE_UNAVAILABLE":
                            message = "Webcam is unavailable";
                            explanation = "Maybe it is already busy in another window?";
                            if (browser.isChromeBased() || browser.isFirefox()) explanation += " Or you have to allow access above?";
                            classList.push(error_VideomailError.WEBCAM_PROBLEM);
                            break;
                        case "NO_VIDEO_FEED":
                            message = "No video feed found!";
                            explanation = "Your webcam is already used in another browser.";
                            classList.push(error_VideomailError.WEBCAM_PROBLEM);
                            break;
                        case error_VideomailError.STARTING_FAILED:
                            message = "Starting video failed";
                            explanation = "Most likely this happens when the webcam is already active in another browser";
                            classList.push(error_VideomailError.WEBCAM_PROBLEM);
                            break;
                        case "DevicesNotFoundError":
                            message = "No available webcam could be found";
                            explanation = "Looks like you do not have any webcam attached to your machine; or the one you plugged in is already used.";
                            classList.push(error_VideomailError.WEBCAM_PROBLEM);
                            break;
                        case error_VideomailError.NOT_READABLE_ERROR:
                        case error_VideomailError.TRACK_START_ERROR:
                            message = "No access to webcam";
                            explanation = "A hardware error occurred which prevented access to your webcam";
                            classList.push(error_VideomailError.WEBCAM_PROBLEM);
                            break;
                        case error_VideomailError.INVALID_STATE_ERROR:
                            message = "Invalid state";
                            explanation = "Video recording stream from your webcam already has finished";
                            classList.push(error_VideomailError.WEBCAM_PROBLEM);
                            break;
                        case error_VideomailError.DOM_EXCEPTION:
                            message = "DOM Exception";
                            explanation = util_pretty(err);
                            break;
                        case error_VideomailError.MEDIA_DEVICE_NOT_SUPPORTED:
                            message = "Media device not supported";
                            explanation = util_pretty(err);
                            break;
                        default:
                            {
                                const originalExplanation = explanation;
                                if (explanation && "object" == typeof explanation) explanation = util_pretty(explanation);
                                if (!explanation && originalExplanation) explanation = `Inspected: ${originalExplanation}`;
                                if (!explanation && err?.explanation) explanation = err.explanation;
                                if (!message && err?.message) message = err.message;
                                if (!message) {
                                    if (errName) message = `${errName} (weird)`;
                                    if (!explanation) explanation = util_pretty(err);
                                    if (util_pretty(message) === explanation) explanation = void 0;
                                }
                                break;
                            }
                    }
                    let logLines;
                    if (options.logger.getLines) logLines = options.logger.getLines();
                    const args = [
                        message,
                        explanation
                    ].filter(Boolean).join(", ");
                    options.logger.debug(`VideomailError: create(${args})`);
                    const errData = {
                        explanation,
                        logLines,
                        err
                    };
                    const videomailError = new error_VideomailError(message ?? "(undefined message)", options, classList, errData);
                    if (err) {
                        videomailError.status = err.status;
                        videomailError.code = err.code;
                    }
                    if (options.reportErrors) {
                        const resource = new src_resource(options);
                        resource.reportError(videomailError).catch((reason)=>{
                            console.error(reason);
                        });
                    }
                    return videomailError;
                }
                const error_createError = createError;
                var es = __webpack_require__("./node_modules/get-form-data/es/index.js");
                var node_modules_hidden = __webpack_require__("./node_modules/hidden/index.js");
                var hidden_default = /*#__PURE__*/ __webpack_require__.n(node_modules_hidden);
                var nanoevents = __webpack_require__("./node_modules/nanoevents/index.js");
                class Despot {
                    name;
                    options;
                    static EMITTER = (0, nanoevents.G)();
                    constructor(name, options){
                        this.name = name;
                        this.options = options;
                    }
                    emit(eventName, ...params) {
                        const firstParam = params[0];
                        const showParams = firstParam && ("object" != typeof firstParam || "object" == typeof firstParam && Object.keys(firstParam).filter(Boolean).length > 0);
                        if (showParams) this.options.logger.debug(`${this.name} emits ${eventName} with ${util_pretty(params)}`);
                        else this.options.logger.debug(`${this.name} emits ${eventName}`);
                        try {
                            Despot.EMITTER.emit(eventName, ...params);
                        } catch (exc) {
                            if (exc instanceof error_VideomailError) Despot.EMITTER.emit("ERROR", {
                                err: exc
                            });
                            else Despot.EMITTER.emit("ERROR", {
                                exc
                            });
                        }
                    }
                    on(eventName, callback) {
                        return Despot.EMITTER.on(eventName, callback);
                    }
                    once(eventName, listener) {
                        const callback = (...params)=>{
                            unbind();
                            params.length > 0 ? listener(...params) : listener();
                        };
                        const unbind = this.on(eventName, callback);
                        return unbind;
                    }
                    static getListeners(eventName) {
                        return Despot.EMITTER.events[eventName];
                    }
                    static removeListener(eventName) {
                        delete Despot.EMITTER.events[eventName];
                    }
                    static removeAllListeners() {
                        Despot.EMITTER.events = {};
                    }
                }
                const util_Despot = Despot;
                function isNotButton(element) {
                    return "BUTTON" !== element.tagName && "submit" !== element.getAttribute("type");
                }
                const html_isNotButton = isNotButton;
                const REGEX = /[ ,]+/u;
                function trimEmail(email) {
                    return email.replace(REGEX, "");
                }
                function trimEmails(emails) {
                    const trimmedEmails = emails.split(REGEX).map((item)=>item.trim()).filter(Boolean);
                    return trimmedEmails;
                }
                class Form extends util_Despot {
                    container;
                    formElement;
                    keyInput;
                    FORM_FIELDS = {};
                    constructor(container, formElement, options){
                        super("Form", options);
                        this.container = container;
                        this.formElement = formElement;
                        this.FORM_FIELDS = {
                            subject: options.selectors.subjectInputName,
                            from: options.selectors.fromInputName,
                            to: options.selectors.toInputName,
                            cc: options.selectors.ccInputName,
                            bcc: options.selectors.bccInputName,
                            body: options.selectors.bodyInputName,
                            key: options.selectors.keyInputName,
                            parentKey: options.selectors.parentKeyInputName,
                            sendCopy: options.selectors.sendCopyInputName
                        };
                    }
                    getData() {
                        return (0, es.A)(this.formElement, {
                            includeDisabled: true
                        });
                    }
                    transformFormData(formInputs) {
                        const transformedVideomail = {};
                        Object.keys(this.FORM_FIELDS).forEach((key)=>{
                            const formFieldValue = this.FORM_FIELDS[key];
                            if (formFieldValue in formInputs) {
                                const value = formInputs[formFieldValue];
                                if (void 0 !== value) switch(key){
                                    case "from":
                                        transformedVideomail[key] = trimEmail(value);
                                        break;
                                    case "to":
                                    case "cc":
                                    case "bcc":
                                        transformedVideomail[key] = trimEmails(value);
                                        break;
                                    default:
                                        transformedVideomail[key] = value;
                                }
                            }
                        });
                        return transformedVideomail;
                    }
                    getRecipients() {
                        const partialVideomail = this.getData();
                        const videomail = this.transformFormData(partialVideomail);
                        const recipients = {};
                        if (videomail.to) recipients.to = videomail.to;
                        if (videomail.cc) recipients.cc = videomail.cc;
                        if (videomail.bcc) recipients.bcc = videomail.bcc;
                        return recipients;
                    }
                    loadVideomail(videomail) {
                        this.options.logger.debug("Form: loadVideomail()");
                        for (const formControl of this.formElement.elements){
                            const name = formControl.getAttribute("name");
                            if (name) {
                                const value = videomail[name];
                                const tagName = formControl.tagName;
                                switch(tagName){
                                    case "INPUT":
                                        {
                                            const inputControl = formControl;
                                            if (Array.isArray(value)) inputControl.value = value.join(", ");
                                            else inputControl.value = value;
                                            break;
                                        }
                                    case "TEXTAREA":
                                        {
                                            const textArea = formControl;
                                            textArea.value = value;
                                            break;
                                        }
                                    default:
                                        throw error_createError({
                                            message: `Unsupported form control tag name $${tagName} found`,
                                            options: this.options
                                        });
                                }
                                if (name === this.options.selectors.toInputName || name === this.options.selectors.subjectInputName || name === this.options.selectors.bodyInputName) formControl.setAttribute("disabled", "disabled");
                            }
                        }
                        this.formElement.setAttribute("method", "put");
                    }
                    setDisabled(disabled, buttonsToo) {
                        for (const formControl of this.formElement.elements)if (buttonsToo || html_isNotButton(formControl)) if (disabled) formControl.setAttribute("disabled", "disabled");
                        else formControl.removeAttribute("disabled");
                    }
                    hideAll() {
                        for (const formElement of this.formElement.elements)hidden_default()(formElement, true);
                        if (!this.formElement.classList.contains(this.options.selectors.containerClass)) hidden_default()(this.formElement, true);
                    }
                    isRegisteredFormField(formElement) {
                        const formElementName = formElement.getAttribute("name");
                        const registeredFormFieldNames = Object.values(this.FORM_FIELDS);
                        const isRegistered = registeredFormFieldNames.includes(formElementName);
                        return isRegistered;
                    }
                    getRegisteredFormElements() {
                        const elements = this.formElement.querySelectorAll("input, textarea, select");
                        const registeredElements = [];
                        for (const element of elements)if (this.isRegisteredFormField(element)) registeredElements.push(element);
                        return registeredElements;
                    }
                    disable(buttonsToo) {
                        this.setDisabled(true, buttonsToo);
                    }
                    enable(buttonsToo) {
                        this.setDisabled(false, buttonsToo);
                    }
                    build() {
                        this.options.logger.debug("Form: build()");
                        this.keyInput = this.formElement.querySelector(`input[name="${this.options.selectors.keyInputName}"]`);
                        if (!this.keyInput) {
                            this.keyInput = document.createElement("input");
                            this.keyInput.type = "hidden";
                            this.keyInput.name = this.options.selectors.keyInputName;
                            this.formElement.appendChild(this.keyInput);
                        }
                        if (this.options.enableAutoValidation) {
                            const inputElements = this.getRegisteredFormElements();
                            for(let i = 0, len = inputElements.length; i < len; i++){
                                const inputElement = inputElements[i];
                                const type = inputElement?.getAttribute("type");
                                if ("radio" === type || "select" === type) inputElement?.addEventListener("change", this.container.validate.bind(this.container));
                                else inputElement?.addEventListener("input", this.container.validate.bind(this.container));
                            }
                        }
                        this.on("PREVIEW", (params)=>{
                            if (params?.key || this.keyInput?.value) {
                                if (params?.key && this.keyInput) {
                                    this.keyInput.value = params.key;
                                    this.keyInput.dispatchEvent(new Event("input", {
                                        bubbles: true
                                    }));
                                }
                            } else {
                                const err = error_createError({
                                    message: "Videomail key for preview is missing!",
                                    options: this.options
                                });
                                this.emit("ERROR", {
                                    err
                                });
                            }
                        });
                        this.on("STARTING_OVER", ()=>{
                            this.resetForm();
                        });
                        this.on("INVALID", ()=>{
                            this.formElement.classList.add("invalid");
                        });
                        this.on("VALID", ()=>{
                            this.formElement.classList.remove("invalid");
                        });
                        this.on("ERROR", (params)=>{
                            const isBrowserProblem = params.err?.isBrowserProblem();
                            if (isBrowserProblem && this.options.adjustFormOnBrowserError) this.hideAll();
                            if (isBrowserProblem) this.hideSubmitButton();
                        });
                        this.on("BUILT", ()=>{
                            this.startListeningToSubmitEvents();
                        });
                    }
                    removeAllInputListeners() {
                        const inputElements = this.getRegisteredFormElements();
                        for (const inputElement of inputElements){
                            const type = inputElement.getAttribute("type");
                            if ("radio" === type || "select" === type) inputElement.removeEventListener("change", this.container.validate.bind(this.container));
                            else inputElement.removeEventListener("input", this.container.validate.bind(this.container));
                        }
                    }
                    hideSubmitButton() {
                        const submitButton = this.findSubmitButton();
                        hidden_default()(submitButton, true);
                    }
                    unload() {
                        this.options.logger.debug("Form: unload()");
                        this.removeAllInputListeners();
                        util_Despot.removeAllListeners();
                        this.stopListeningToSubmitEvents();
                        this.resetForm();
                    }
                    resetForm() {
                        this.formElement.setAttribute("method", "");
                        this.formElement.reset();
                        const inputElements = this.getRegisteredFormElements();
                        for (const inputElement of inputElements){
                            const type = inputElement.getAttribute("type");
                            if (type?.toLowerCase() === "hidden") inputElement.setAttribute("value", "");
                        }
                    }
                    startListeningToSubmitEvents() {
                        const submitButton = this.container.getSubmitButton();
                        if (submitButton) submitButton.onclick = this.doTheSubmit.bind(this);
                    }
                    stopListeningToSubmitEvents() {
                        const submitButton = this.container.getSubmitButton();
                        if (submitButton) submitButton.onclick = null;
                    }
                    async doTheSubmit(e) {
                        if (e) {
                            this.options.logger.debug(`Form: doTheSubmit(${util_pretty(e)})`);
                            e.preventDefault();
                        } else this.options.logger.debug("Form: doTheSubmit()");
                        const url = this.formElement.getAttribute("action") ?? this.options.baseUrl;
                        const method = this.formElement.getAttribute("method");
                        let chosenMethod;
                        switch(method){
                            case "post":
                                chosenMethod = "post";
                                break;
                            case "put":
                                chosenMethod = "put";
                                break;
                            default:
                                chosenMethod = "post";
                        }
                        if (this.container.hasElement()) await this.container.submitAll(this.getData(), chosenMethod, url);
                        return false;
                    }
                    getInvalidElement() {
                        const elements = this.getRegisteredFormElements();
                        for (const element of elements){
                            const validity = "validity" in element ? element.validity : void 0;
                            if (!validity?.valid) return element;
                        }
                        return null;
                    }
                    findSubmitButton() {
                        return this.formElement.querySelector("[type='submit']");
                    }
                    hide() {
                        hidden_default()(this.formElement, true);
                    }
                    show() {
                        hidden_default()(this.formElement, false);
                    }
                }
                const wrappers_form = Form;
                function findOriginalExc(exc) {
                    if (exc instanceof Error && "response" in exc) {
                        const response = exc.response;
                        const body = response.body;
                        if ("error" in body) {
                            const message = body.error.message;
                            const cause = body.error.cause;
                            const error = new HTTPVideomailError(message, {
                                cause
                            });
                            if (body.error.name) error.name = body.error.name;
                            if (body.error.explanation) error.explanation = body.error.explanation;
                            if (body.error.stack) error.stack = body.error.stack;
                            if (body.error.status) error.status = body.error.status;
                            if (body.error.code) error.code = body.error.code;
                            return error;
                        }
                    }
                    return exc;
                }
                class Resource {
                    options;
                    timezoneId;
                    constructor(options){
                        this.options = options;
                        this.timezoneId = window.Intl.DateTimeFormat().resolvedOptions().timeZone;
                    }
                    applyDefaultValue(videomail, name) {
                        if (this.options.defaults[name] && !videomail[name]) videomail[name] = this.options.defaults[name];
                        return videomail;
                    }
                    applyDefaultValues(videomail) {
                        let newVideomail = {
                            ...videomail
                        };
                        newVideomail = this.applyDefaultValue(newVideomail, "from");
                        newVideomail = this.applyDefaultValue(newVideomail, "to");
                        newVideomail = this.applyDefaultValue(newVideomail, "cc");
                        newVideomail = this.applyDefaultValue(newVideomail, "bcc");
                        newVideomail = this.applyDefaultValue(newVideomail, "subject");
                        newVideomail = this.applyDefaultValue(newVideomail, "body");
                        return newVideomail;
                    }
                    async get(identifierName, identifierValue) {
                        const url = `${this.options.baseUrl}/videomail/${identifierName}/${identifierValue}/snapshot`;
                        try {
                            const request = await client_default()("get", url).type("json").set("Accept", "application/json").withCredentials().set("Timezone-Id", this.timezoneId).set(constants.SITE_NAME_LABEL, this.options.siteName).timeout(this.options.timeouts.connection);
                            const videomail = request.body;
                            return videomail;
                        } catch (exc) {
                            throw error_createError({
                                exc: findOriginalExc(exc),
                                options: this.options
                            });
                        }
                    }
                    async write(method, videomail) {
                        const queryParams = {
                            [constants.SITE_NAME_LABEL]: this.options.siteName
                        };
                        let url = `${this.options.baseUrl}/videomail/`;
                        if ("put" === method && videomail.key) url += videomail.key;
                        try {
                            const request = await client_default()(method, url).query(queryParams).set("Timezone-Id", this.timezoneId).withCredentials().send(videomail).timeout(this.options.timeouts.connection);
                            return request;
                        } catch (exc) {
                            throw error_createError({
                                exc: findOriginalExc(exc),
                                options: this.options
                            });
                        }
                    }
                    async getByAlias(alias) {
                        return await this.get("alias", alias);
                    }
                    async getByKey(key) {
                        return await this.get("key", key);
                    }
                    async reportError(err) {
                        const queryParams = {
                            [constants.SITE_NAME_LABEL]: this.options.siteName
                        };
                        const url = `${this.options.baseUrl}/client-error/`;
                        try {
                            const fullVideomailErrorData = {
                                browser: err.browser,
                                code: err.code,
                                cookie: err.cookie,
                                cpu: err.cpu,
                                device: err.device,
                                engine: err.engine,
                                err: (0, serialize_error.P5)(err.err),
                                explanation: err.explanation,
                                location: err.location,
                                logLines: err.logLines,
                                orientation: err.orientation,
                                os: err.os,
                                screen: err.screen,
                                siteName: err.siteName,
                                status: err.status,
                                title: err.title,
                                message: err.message,
                                stack: err.stack,
                                versions: {
                                    videomailClient: package_namespaceObject.rE,
                                    videomailNinjaFormPlugin: this.options.versions?.videomailNinjaFormPlugin
                                }
                            };
                            await client_default()("post", url).query(queryParams).set("Timezone-Id", this.timezoneId).withCredentials().send(fullVideomailErrorData).timeout(this.options.timeouts.connection);
                        } catch (exc) {
                            console.error(exc);
                        }
                    }
                    async post(videomail) {
                        const newVideomail = this.applyDefaultValues(videomail);
                        newVideomail[constants.VERSION_LABEL] = package_namespaceObject.rE;
                        try {
                            let res;
                            if (this.options.callbacks.adjustFormDataBeforePosting) {
                                const adjustedVideomail = this.options.callbacks.adjustFormDataBeforePosting(newVideomail);
                                res = await this.write("post", adjustedVideomail);
                            } else res = await this.write("post", newVideomail);
                            return res;
                        } catch (exc) {
                            throw error_createError({
                                exc: findOriginalExc(exc),
                                options: this.options
                            });
                        }
                    }
                    async put(videomail) {
                        return await this.write("put", videomail);
                    }
                    async form(formData, url) {
                        let formType;
                        switch(this.options.enctype){
                            case constants["public"].ENC_TYPE_APP_JSON:
                                formType = "json";
                                break;
                            case constants["public"].ENC_TYPE_FORM:
                                formType = "form";
                                break;
                            default:
                                throw error_createError({
                                    err: new Error(`Invalid enctype given: ${this.options.enctype}`),
                                    options: this.options
                                });
                        }
                        try {
                            const res = await client_default().post(url).type(formType).set("Timezone-Id", this.timezoneId).send(formData).timeout(this.options.timeouts.connection);
                            return res;
                        } catch (exc) {
                            throw error_createError({
                                exc: findOriginalExc(exc),
                                options: this.options
                            });
                        }
                    }
                }
                const src_resource = Resource;
                var cjs = __webpack_require__("./node_modules/deepmerge/dist/cjs.js");
                var cjs_default = /*#__PURE__*/ __webpack_require__.n(cjs);
                const NodeEnvType = {
                    DEVELOPMENT: "development",
                    PRODUCTION: "production"
                };
                function getNodeEnv() {
                    return "production";
                }
                const util_getNodeEnv = getNodeEnv;
                function isProductionMode() {
                    return util_getNodeEnv() === NodeEnvType.PRODUCTION;
                }
                const util_isProductionMode = isProductionMode;
                const PRODUCTION = util_isProductionMode();
                const options_options = {
                    logger: console,
                    logStackSize: 30,
                    verbose: !PRODUCTION,
                    baseUrl: "https://videomail.io",
                    socketUrl: "wss://videomail.io",
                    siteName: "videomail-client-demo",
                    enablePause: true,
                    enableAutoPause: true,
                    enableSpace: true,
                    submitWithVideomail: false,
                    disableSubmit: false,
                    enableAutoValidation: true,
                    enableAutoUnload: true,
                    enableAutoSubmission: true,
                    enctype: "application/json",
                    selectors: {
                        containerId: void 0,
                        containerClass: "videomail",
                        replayClass: "replay",
                        userMediaClass: "userMedia",
                        visualsClass: "visuals",
                        buttonClass: void 0,
                        buttonsClass: "buttons",
                        recordButtonClass: "record",
                        pauseButtonClass: "pause",
                        resumeButtonClass: "resume",
                        previewButtonClass: "preview",
                        recordAgainButtonClass: "recordAgain",
                        submitButtonClass: "submit",
                        subjectInputName: "subject",
                        fromInputName: "from",
                        toInputName: "to",
                        ccInputName: "cc",
                        bccInputName: "bcc",
                        bodyInputName: "body",
                        sendCopyInputName: "sendCopy",
                        keyInputName: "videomail_key",
                        parentKeyInputName: "videomail_parent_key",
                        formId: void 0,
                        submitButtonId: void 0,
                        submitButtonSelector: void 0
                    },
                    audio: {
                        enabled: false,
                        switch: false,
                        volume: 0.2,
                        bufferSize: "auto"
                    },
                    video: {
                        fps: 15,
                        limitSeconds: 30,
                        countdown: 3,
                        width: void 0,
                        height: void 0,
                        facingMode: "user",
                        facingModeButton: false,
                        stretch: false
                    },
                    image: {
                        quality: 0.42,
                        types: [
                            "webp",
                            "jpeg"
                        ]
                    },
                    text: {
                        pausedHeader: "Paused",
                        pausedHint: void 0,
                        sending: "Teleporting",
                        encoding: "Encoding",
                        limitReached: "Limit reached",
                        audioOff: "Audio off",
                        audioOn: "Audio on",
                        buttons: {
                            record: "Record video",
                            recordAgain: "Record again",
                            resume: "Resume",
                            pause: "Pause",
                            preview: "Preview"
                        }
                    },
                    notifier: {
                        entertain: false,
                        entertainClass: "bg",
                        entertainLimit: 6,
                        entertainInterval: 9000
                    },
                    timeouts: {
                        userMedia: 20e3,
                        connection: 1e4,
                        pingInterval: 30e3
                    },
                    loadUserMediaOnRecord: false,
                    callbacks: {
                        adjustFormDataBeforePosting: void 0
                    },
                    defaults: {
                        from: void 0,
                        to: void 0,
                        cc: void 0,
                        bcc: void 0,
                        subject: void 0,
                        body: void 0
                    },
                    displayErrors: true,
                    adjustFormOnBrowserError: true,
                    reportErrors: true,
                    fakeUaString: void 0,
                    versions: {
                        videomailNinjaFormPlugin: void 0
                    }
                };
                const src_options = options_options;
                class CollectLogger_CollectLogger {
                    browser;
                    logger;
                    stack = [];
                    options;
                    constructor(options){
                        this.options = options;
                        this.browser = util_getBrowser(options);
                        this.logger = options.logger;
                    }
                    lifo(level, parameters) {
                        const line = parameters.join();
                        if (this.stack.length > this.options.logStackSize) this.stack.pop();
                        this.stack.push(`[${level}] ${line}`);
                        return line;
                    }
                    debug(...args) {
                        const output = this.lifo("debug", args);
                        if (this.options.verbose) if (this.browser.isFirefox()) this.logger.debug(output);
                        else if (this.logger.groupCollapsed) {
                            this.logger.groupCollapsed(output);
                            this.logger.trace("Trace");
                            this.logger.groupEnd();
                        } else if (this.logger.debug) this.logger.debug(output);
                        else console.log(output);
                    }
                    error(...args) {
                        this.logger.error(this.lifo("error", args));
                    }
                    warn(...args) {
                        this.logger.warn(this.lifo("warn", args));
                    }
                    info(...args) {
                        this.logger.info(this.lifo("info", args));
                    }
                    getLines() {
                        return this.stack;
                    }
                }
                const CollectLogger = CollectLogger_CollectLogger;
                var process = __webpack_require__("./node_modules/process/browser.js");
                function isTest() {
                    return "test" === process.env.ENVIRON;
                }
                const util_isTest = isTest;
                function mergeWithDefaultOptions_mergeWithDefaultOptions(options = {}) {
                    const newOptions = cjs_default()(src_options, options, {
                        arrayMerge (_destination, source) {
                            return source;
                        }
                    });
                    const collectLogger = new CollectLogger(newOptions);
                    newOptions.logger = collectLogger;
                    if (util_isTest()) newOptions.verbose = false;
                    return newOptions;
                }
                const mergeWithDefaultOptions = mergeWithDefaultOptions_mergeWithDefaultOptions;
                var injectStylesIntoStyleTag = __webpack_require__("./node_modules/@rslib/core/node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js");
                var injectStylesIntoStyleTag_default = /*#__PURE__*/ __webpack_require__.n(injectStylesIntoStyleTag);
                var styleDomAPI = __webpack_require__("./node_modules/@rslib/core/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js");
                var styleDomAPI_default = /*#__PURE__*/ __webpack_require__.n(styleDomAPI);
                var insertBySelector = __webpack_require__("./node_modules/@rslib/core/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js");
                var insertBySelector_default = /*#__PURE__*/ __webpack_require__.n(insertBySelector);
                var setAttributesWithoutAttributes = __webpack_require__("./node_modules/@rslib/core/node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js");
                var setAttributesWithoutAttributes_default = /*#__PURE__*/ __webpack_require__.n(setAttributesWithoutAttributes);
                var insertStyleElement = __webpack_require__("./node_modules/@rslib/core/node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js");
                var insertStyleElement_default = /*#__PURE__*/ __webpack_require__.n(insertStyleElement);
                var styleTagTransform = __webpack_require__("./node_modules/@rslib/core/node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js");
                var styleTagTransform_default = /*#__PURE__*/ __webpack_require__.n(styleTagTransform);
                var main = __webpack_require__("./node_modules/@rslib/core/node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[12].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[12].use[2]!./node_modules/stylus-loader/dist/cjs.js??ruleSet[1].rules[12].use[3]!./src/styles/main.styl");
                var main_options = {};
                main_options.styleTagTransform = styleTagTransform_default();
                main_options.setAttributes = setAttributesWithoutAttributes_default();
                main_options.insert = insertBySelector_default().bind(null, "head");
                main_options.domAPI = styleDomAPI_default();
                main_options.insertStyleElement = insertStyleElement_default();
                injectStylesIntoStyleTag_default()(main.A, main_options);
                main.A && main.A.locals && main.A.locals;
                var document_visibility = __webpack_require__("./node_modules/document-visibility/index.js");
                var document_visibility_default = /*#__PURE__*/ __webpack_require__.n(document_visibility);
                function limitHeight(height, options, calledFrom) {
                    let limitedHeight = document.documentElement.clientHeight;
                    if (height) limitedHeight = Math.min(height, limitedHeight);
                    if (limitedHeight < 1) throw error_createError({
                        message: `Limited height ${limitedHeight} cannot be less than 1! (Called from ${calledFrom})`,
                        options
                    });
                    return limitedHeight;
                }
                const dimensions_limitHeight = limitHeight;
                function getOuterWidth_getOuterWidth(element) {
                    let rect = element.getBoundingClientRect();
                    let outerWidth = rect.right - rect.left;
                    if (outerWidth < 1) {
                        rect = document.body.getBoundingClientRect();
                        outerWidth = rect.right - rect.left;
                    }
                    return outerWidth;
                }
                const getOuterWidth = getOuterWidth_getOuterWidth;
                function limitWidth_limitWidth(element, options, width) {
                    let limitedWidth;
                    const outerWidth = getOuterWidth(element);
                    limitedWidth = width && "number" == typeof width ? outerWidth > 0 && outerWidth < width ? outerWidth : width : outerWidth;
                    if (Number.isInteger(limitedWidth) && limitedWidth < 1) throw error_createError({
                        message: "Limited width cannot be less than 1!",
                        options
                    });
                    return limitedWidth;
                }
                const limitWidth = limitWidth_limitWidth;
                var contains = __webpack_require__("./node_modules/contains/index.js");
                var contains_default = /*#__PURE__*/ __webpack_require__.n(contains);
                function disableElement(element) {
                    if (!element) return;
                    if ("INPUT" === element.tagName || "BUTTON" === element.tagName) element.setAttribute("disabled", "true");
                    else element.classList.add("disabled");
                }
                const html_disableElement = disableElement;
                function hideElement(element) {
                    if (!element) return;
                    hidden_default()(element, true);
                }
                const html_hideElement = hideElement;
                function adjustButton(buttonElement, show, type, disabled) {
                    if (disabled) html_disableElement(buttonElement);
                    if (type) buttonElement.type = type;
                    if (!show) html_hideElement(buttonElement);
                    return buttonElement;
                }
                const html_adjustButton = adjustButton;
                function enableElement(element) {
                    if (!element) return;
                    if ("INPUT" === element.tagName || "BUTTON" === element.tagName) element.removeAttribute("disabled");
                    else element.classList.remove("disabled");
                }
                const html_enableElement = enableElement;
                function isShown(element) {
                    if (!element) return false;
                    return !hidden_default()(element);
                }
                const html_isShown = isShown;
                function showElement(element) {
                    if (!element) return;
                    hidden_default()(element, false);
                }
                const html_showElement = showElement;
                class Buttons extends util_Despot {
                    container;
                    buttonsElement;
                    recordButton;
                    pauseButton;
                    resumeButton;
                    previewButton;
                    recordAgainButton;
                    submitButton;
                    audioOnRadioPair;
                    audioOffRadioPair;
                    built = false;
                    constructor(container, options){
                        super("Buttons", options);
                        this.container = container;
                    }
                    replaceClickHandler(element, clickHandler) {
                        const wrappedClickHandler = (ev)=>{
                            ev.preventDefault();
                            try {
                                clickHandler({
                                    event: ev
                                });
                            } catch (exc) {
                                this.emit("ERROR", {
                                    exc
                                });
                            }
                        };
                        element.onclick = wrappedClickHandler;
                    }
                    makeRadioButtonPair(options) {
                        let radioButtonElement;
                        let radioButtonGroup;
                        if (options.id) radioButtonElement = document.querySelector(`#${options.id}`);
                        if (!radioButtonElement) {
                            radioButtonElement = document.createElement("input");
                            radioButtonElement.id = options.id;
                            radioButtonElement.type = "radio";
                            radioButtonElement.name = options.name;
                            radioButtonElement.value = options.value;
                            radioButtonElement.checked = options.checked;
                            radioButtonGroup = document.createElement("span");
                            radioButtonGroup.classList.add("radioGroup");
                            radioButtonGroup.appendChild(radioButtonElement);
                            const radioLabel = document.createElement("label");
                            radioLabel.htmlFor = options.id;
                            radioLabel.textContent = options.label;
                            radioButtonGroup.appendChild(radioLabel);
                            if (this.submitButton && contains_default()(this.buttonsElement, this.submitButton)) this.buttonsElement?.insertBefore(radioButtonGroup, this.submitButton);
                            else this.buttonsElement?.appendChild(radioButtonGroup);
                        }
                        radioButtonElement.onchange = options.changeHandler;
                        html_disableElement(radioButtonElement);
                        return radioButtonElement;
                    }
                    makeButton(buttonClass, text, clickHandler, show, id, type, selector, disabled = true) {
                        let buttonElement;
                        buttonElement = id ? document.querySelector(`#${id}`) : selector ? document.querySelector(selector) : this.buttonsElement?.querySelector(`.${buttonClass}`);
                        if (buttonElement) buttonElement = html_adjustButton(buttonElement, show, type, disabled);
                        else {
                            buttonElement = document.createElement("button");
                            buttonElement.classList.add(buttonClass);
                            if (this.options.selectors.buttonClass) buttonElement.classList.add(this.options.selectors.buttonClass);
                            buttonElement = html_adjustButton(buttonElement, show, type, disabled);
                            buttonElement.innerHTML = text;
                            if (this.submitButton && contains_default()(this.buttonsElement, this.submitButton)) this.buttonsElement?.insertBefore(buttonElement, this.submitButton);
                            else this.buttonsElement?.appendChild(buttonElement);
                        }
                        if (clickHandler) this.replaceClickHandler(buttonElement, clickHandler);
                        return buttonElement;
                    }
                    buildButtons() {
                        if (!this.options.disableSubmit) {
                            if (this.submitButton) html_disableElement(this.submitButton);
                            else this.submitButton = this.makeButton(this.options.selectors.submitButtonClass, "Submit", void 0, true, this.options.selectors.submitButtonId, "submit", this.options.selectors.submitButtonSelector, this.options.enableAutoValidation);
                            if (!this.container.hasForm()) this.replaceClickHandler(this.submitButton, this.submit.bind(this));
                        }
                        this.recordButton = this.makeButton(this.options.selectors.recordButtonClass, this.options.text.buttons.record, this.record.bind(this), false);
                        if (this.options.enablePause) this.pauseButton = this.makeButton(this.options.selectors.pauseButtonClass, this.options.text.buttons.pause, this.container.pause.bind(this.container), false);
                        if (this.options.enablePause) this.resumeButton = this.makeButton(this.options.selectors.resumeButtonClass, this.options.text.buttons.resume, this.container.resume.bind(this.container), false);
                        this.previewButton = this.makeButton(this.options.selectors.previewButtonClass, this.options.text.buttons.preview, this.container.stop.bind(this.container), false);
                        this.recordAgainButton = this.makeButton(this.options.selectors.recordAgainButtonClass, this.options.text.buttons.recordAgain, this.recordAgain.bind(this), false);
                        if (this.options.audio.switch) {
                            this.audioOffRadioPair = this.makeRadioButtonPair({
                                id: "audioOffOption",
                                name: "audio",
                                value: "off",
                                label: this.options.text.audioOff,
                                checked: !isAudioEnabled(this.options),
                                changeHandler: ()=>{
                                    this.container.disableAudio();
                                }
                            });
                            this.audioOnRadioPair = this.makeRadioButtonPair({
                                id: "audioOnOption",
                                name: "audio",
                                value: "on",
                                label: this.options.text.audioOn,
                                checked: isAudioEnabled(this.options),
                                changeHandler: ()=>{
                                    this.container.enableAudio();
                                }
                            });
                        }
                    }
                    onFormReady(params) {
                        if (!html_isShown(this.recordAgainButton)) {
                            if (!params?.paused) html_showElement(this.recordButton);
                        }
                        if (!params?.paused) {
                            html_disableElement(this.previewButton);
                            html_hideElement(this.previewButton);
                        }
                        if (!this.options.enableAutoValidation) html_enableElement(this.submitButton);
                    }
                    onGoingBack() {
                        html_hideElement(this.recordAgainButton);
                        html_showElement(this.recordButton);
                        html_showElement(this.submitButton);
                    }
                    onReplayShown() {
                        this.hide();
                    }
                    onUserMediaReady(params) {
                        this.onFormReady();
                        html_showElement(this.buttonsElement);
                        html_showElement(this.audioOnRadioPair);
                        html_showElement(this.audioOffRadioPair);
                        if (html_isShown(this.recordButton) && !params.recordWhenReady) html_enableElement(this.recordButton);
                        else if (html_isShown(this.recordAgainButton) && !params.recordWhenReady) html_enableElement(this.recordAgainButton);
                        if (this.options.enableAutoValidation) html_disableElement(this.submitButton);
                        if (!params.recordWhenReady) {
                            if (html_isShown(this.audioOnRadioPair)) html_enableElement(this.audioOnRadioPair);
                            if (html_isShown(this.audioOffRadioPair)) html_enableElement(this.audioOffRadioPair);
                        }
                    }
                    onResetting() {
                        html_disableElement(this.submitButton);
                        this.reset();
                    }
                    onPreview() {
                        html_hideElement(this.recordButton);
                        html_hideElement(this.previewButton);
                        html_disableElement(this.audioOnRadioPair);
                        html_disableElement(this.audioOffRadioPair);
                        html_showElement(this.recordAgainButton);
                        html_enableElement(this.recordAgainButton);
                        if (!this.options.enableAutoValidation) html_enableElement(this.submitButton);
                    }
                    enableSubmit() {
                        html_enableElement(this.submitButton);
                    }
                    adjustButtonsForPause() {
                        if (!this.isCountingDown()) {
                            if (this.pauseButton) html_hideElement(this.pauseButton);
                            html_showElement(this.resumeButton);
                            html_enableElement(this.resumeButton);
                            html_hideElement(this.recordButton);
                            html_showElement(this.previewButton);
                            html_enableElement(this.previewButton);
                        }
                    }
                    onFirstFrameSent() {
                        html_hideElement(this.recordButton);
                        html_hideElement(this.recordAgainButton);
                        if (this.pauseButton) {
                            html_showElement(this.pauseButton);
                            html_enableElement(this.pauseButton);
                        }
                        html_enableElement(this.previewButton);
                        html_showElement(this.previewButton);
                    }
                    onRecording(params) {
                        if (params.framesCount > 1) this.onFirstFrameSent();
                        else {
                            html_disableElement(this.audioOffRadioPair);
                            html_disableElement(this.audioOnRadioPair);
                            html_disableElement(this.recordAgainButton);
                            html_disableElement(this.recordButton);
                        }
                    }
                    onResuming() {
                        html_hideElement(this.resumeButton);
                        html_hideElement(this.recordButton);
                        if (this.pauseButton) {
                            html_enableElement(this.pauseButton);
                            html_showElement(this.pauseButton);
                        }
                    }
                    onStopping() {
                        html_disableElement(this.previewButton);
                        html_disableElement(this.recordButton);
                        html_hideElement(this.pauseButton);
                        html_hideElement(this.resumeButton);
                    }
                    onCountdown() {
                        html_disableElement(this.recordButton);
                        html_disableElement(this.audioOffRadioPair);
                        html_disableElement(this.audioOnRadioPair);
                    }
                    onSubmitting() {
                        this.options.logger.debug("Buttons: onSubmitting()");
                        html_disableElement(this.submitButton);
                        html_disableElement(this.recordAgainButton);
                    }
                    onSubmitted() {
                        html_disableElement(this.previewButton);
                        html_disableElement(this.recordAgainButton);
                        html_disableElement(this.recordButton);
                        html_disableElement(this.submitButton);
                    }
                    onInvalid() {
                        if (this.options.enableAutoValidation) html_disableElement(this.submitButton);
                    }
                    onValid() {
                        if (this.options.enableAutoValidation) html_enableElement(this.submitButton);
                    }
                    onHidden() {
                        html_hideElement(this.recordButton);
                        html_hideElement(this.previewButton);
                        html_hideElement(this.recordAgainButton);
                        html_hideElement(this.resumeButton);
                        html_hideElement(this.audioOnRadioPair);
                        html_hideElement(this.audioOffRadioPair);
                    }
                    onEnablingAudio() {
                        this.options.logger.debug("Buttons: onEnablingAudio()");
                        html_disableElement(this.recordButton);
                        html_disableElement(this.audioOnRadioPair);
                        html_disableElement(this.audioOffRadioPair);
                    }
                    onDisablingAudio() {
                        this.options.logger.debug("Buttons: onDisablingAudio()");
                        html_disableElement(this.recordButton);
                        html_disableElement(this.audioOnRadioPair);
                        html_disableElement(this.audioOffRadioPair);
                    }
                    recordAgain() {
                        html_disableElement(this.recordAgainButton);
                        this.container.beginWaiting();
                        this.container.recordAgain();
                    }
                    onStartingOver() {
                        html_showElement(this.submitButton);
                    }
                    submit() {
                        this.container.submit();
                    }
                    record() {
                        html_disableElement(this.recordButton);
                        this.container.record();
                    }
                    initEvents() {
                        this.options.logger.debug("Buttons: initEvents()");
                        this.on("USER_MEDIA_READY", (params)=>{
                            if (!params.switchingFacingMode) this.onUserMediaReady(params);
                        });
                        this.on("PREVIEW", ()=>{
                            this.onPreview();
                        });
                        this.on("PAUSED", ()=>{
                            this.adjustButtonsForPause();
                        });
                        this.on("RECORDING", (params)=>{
                            this.onRecording(params);
                        });
                        this.on("FIRST_FRAME_SENT", ()=>{
                            this.onFirstFrameSent();
                        });
                        this.on("RESUMING", ()=>{
                            this.onResuming();
                        });
                        this.on("STOPPING", ()=>{
                            this.onStopping();
                        });
                        this.on("COUNTDOWN", ()=>{
                            this.onCountdown();
                        });
                        this.on("SUBMITTING", ()=>{
                            this.onSubmitting();
                        });
                        this.on("RESETTING", ()=>{
                            this.onResetting();
                        });
                        this.on("INVALID", ()=>{
                            this.onInvalid();
                        });
                        this.on("VALID", ()=>{
                            this.onValid();
                        });
                        this.on("SUBMITTED", ()=>{
                            this.onSubmitted();
                        });
                        this.on("HIDE", ()=>{
                            this.onHidden();
                        });
                        this.on("FORM_READY", (params)=>{
                            this.onFormReady(params);
                        });
                        this.on("REPLAY_SHOWN", ()=>{
                            this.onReplayShown();
                        });
                        this.on("GOING_BACK", ()=>{
                            this.onGoingBack();
                        });
                        this.on("ENABLING_AUDIO", ()=>{
                            this.onEnablingAudio();
                        });
                        this.on("DISABLING_AUDIO", ()=>{
                            this.onDisablingAudio();
                        });
                        this.on("STARTING_OVER", ()=>{
                            this.onStartingOver();
                        });
                        this.on("CONNECTED", ()=>{
                            if (this.options.loadUserMediaOnRecord) {
                                if (html_isShown(this.recordButton)) html_enableElement(this.recordButton);
                            }
                        });
                        this.on("DISCONNECTED", ()=>{
                            html_disableElement(this.recordButton);
                            html_disableElement(this.audioOnRadioPair);
                            html_disableElement(this.audioOffRadioPair);
                        });
                        this.on("ERROR", (params)=>{
                            if (params.err?.isBrowserProblem() && this.options.adjustFormOnBrowserError) this.hide();
                        });
                    }
                    reset() {
                        this.options.logger.debug("Buttons: reset()");
                        html_disableElement(this.pauseButton);
                        html_disableElement(this.resumeButton);
                        html_disableElement(this.recordButton);
                        html_disableElement(this.previewButton);
                        html_disableElement(this.recordAgainButton);
                        html_disableElement(this.audioOnRadioPair);
                        html_disableElement(this.audioOffRadioPair);
                    }
                    isRecordAgainButtonEnabled() {
                        return !this.recordAgainButton?.disabled;
                    }
                    isReady() {
                        if (!this.recordButton) return false;
                        return this.isRecordButtonEnabled();
                    }
                    isRecordButtonEnabled() {
                        return !this.recordButton?.disabled;
                    }
                    setSubmitButton(newSubmitButton) {
                        this.submitButton = newSubmitButton;
                    }
                    getSubmitButton() {
                        return this.submitButton;
                    }
                    build() {
                        this.buttonsElement = this.container.querySelector(`.${this.options.selectors.buttonsClass}`);
                        if (!this.buttonsElement) {
                            this.buttonsElement = document.createElement("div");
                            this.buttonsElement.classList.add(this.options.selectors.buttonsClass);
                            this.container.appendChild(this.buttonsElement);
                        }
                        html_hideElement(this.buttonsElement);
                        this.buildButtons();
                        if (!this.built) this.initEvents();
                        this.built = true;
                    }
                    unload() {
                        if (this.built) {
                            this.reset();
                            this.options.logger.debug("Buttons: unload()");
                            util_Despot.removeAllListeners();
                            this.hide();
                            this.built = false;
                        }
                    }
                    hide(deep = false) {
                        html_hideElement(this.buttonsElement);
                        if (deep) {
                            html_hideElement(this.recordButton);
                            html_hideElement(this.pauseButton);
                            html_hideElement(this.resumeButton);
                            html_hideElement(this.previewButton);
                            html_hideElement(this.recordAgainButton);
                            html_hideElement(this.submitButton);
                            html_hideElement(this.audioOnRadioPair);
                            html_hideElement(this.audioOffRadioPair);
                        }
                    }
                    show() {
                        html_showElement(this.buttonsElement);
                    }
                    isCountingDown() {
                        return this.container.isCountingDown();
                    }
                }
                const buttons = Buttons;
                class Countdown {
                    visuals;
                    options;
                    countdownElement;
                    intervalId;
                    countdown;
                    paused = false;
                    constructor(visuals, options){
                        this.visuals = visuals;
                        this.options = options;
                    }
                    fire(cb) {
                        this.unload();
                        this.hide();
                        setTimeout(function() {
                            cb();
                        }, 0);
                    }
                    countBackward(cb) {
                        if (!this.paused) {
                            this.options.logger.debug(`Countdown ${this.countdown}`);
                            if (void 0 !== this.countdown) {
                                this.countdown--;
                                if (this.countdown < 1) this.fire(cb);
                                else if (this.countdownElement) this.countdownElement.innerHTML = this.countdown.toString();
                            }
                        }
                    }
                    start(cb) {
                        if (!this.countdownElement) throw new Error("Unable to start countdown without an element");
                        if ("number" != typeof this.options.video.countdown) throw new Error(`The defined countdown is not a valid number: ${this.options.video.countdown}`);
                        this.countdown = this.options.video.countdown;
                        this.countdownElement.innerHTML = this.countdown.toString();
                        this.show();
                        this.intervalId = window.setInterval(this.countBackward.bind(this, cb), 950);
                    }
                    pause() {
                        this.paused = true;
                    }
                    resume() {
                        this.paused = false;
                    }
                    build() {
                        this.countdownElement = this.visuals.getElement()?.querySelector(".countdown");
                        if (this.countdownElement) this.hide();
                        else {
                            this.countdownElement = document.createElement("p");
                            this.countdownElement.className = "countdown";
                            this.hide();
                            this.visuals.appendChild(this.countdownElement);
                        }
                    }
                    show() {
                        hidden_default()(this.countdownElement, false);
                    }
                    isCountingDown() {
                        return Boolean(this.intervalId);
                    }
                    unload() {
                        clearInterval(this.intervalId);
                        this.paused = false;
                        this.intervalId = void 0;
                    }
                    hide() {
                        hidden_default()(this.countdownElement, true);
                        this.unload();
                    }
                }
                const countdown = Countdown;
                class FacingMode extends util_Despot {
                    visuals;
                    facingModeElement;
                    constructor(visuals, options){
                        super("Facing Mode", options);
                        this.visuals = visuals;
                    }
                    initEvents() {
                        this.on("ERROR", ()=>{
                            this.hide();
                        });
                    }
                    build() {
                        this.facingModeElement = this.visuals.getElement()?.querySelector(".facingMode");
                        if (this.facingModeElement) this.hide();
                        else {
                            this.facingModeElement = document.createElement("button");
                            this.facingModeElement.classList.add("facingMode");
                            this.facingModeElement.innerHTML = "\u293E";
                            this.facingModeElement.onclick = (e)=>{
                                e?.preventDefault();
                                try {
                                    this.emit("SWITCH_FACING_MODE");
                                } catch (exc) {
                                    this.emit("ERROR", {
                                        exc
                                    });
                                }
                            };
                            this.hide();
                            this.visuals.appendChild(this.facingModeElement);
                        }
                        this.initEvents();
                    }
                    hide() {
                        hidden_default()(this.facingModeElement, true);
                    }
                    show() {
                        hidden_default()(this.facingModeElement, false);
                    }
                }
                const facingMode = FacingMode;
                class PausedNote {
                    visuals;
                    options;
                    pausedBlockElement;
                    pausedHeaderElement;
                    pausedHintElement;
                    constructor(visuals, options){
                        this.visuals = visuals;
                        this.options = options;
                    }
                    hasPausedHintText() {
                        return this.options.text.pausedHint;
                    }
                    build() {
                        this.pausedBlockElement = this.visuals.getElement()?.querySelector(".paused");
                        this.pausedHeaderElement = this.visuals.getElement()?.querySelector(".pausedHeader");
                        if (this.pausedHeaderElement) {
                            this.hide();
                            this.pausedHeaderElement.innerHTML = this.options.text.pausedHeader;
                            if (this.options.text.pausedHint && this.pausedHintElement) this.pausedHintElement.innerHTML = this.options.text.pausedHint;
                        } else {
                            this.pausedBlockElement = document.createElement("div");
                            this.pausedBlockElement.classList.add("paused");
                            this.pausedHeaderElement = document.createElement("p");
                            this.pausedHeaderElement.classList.add("pausedHeader");
                            this.hide();
                            this.pausedHeaderElement.innerHTML = this.options.text.pausedHeader;
                            this.pausedBlockElement.appendChild(this.pausedHeaderElement);
                            if (this.hasPausedHintText()) {
                                this.pausedHintElement = this.visuals.getElement()?.querySelector(".pausedHint");
                                if (!this.pausedHintElement) {
                                    this.pausedHintElement = document.createElement("p");
                                    this.pausedHintElement.classList.add("pausedHint");
                                    this.pausedBlockElement.appendChild(this.pausedHintElement);
                                }
                                if (this.options.text.pausedHint) this.pausedHintElement.innerHTML = this.options.text.pausedHint;
                            }
                            this.visuals.appendChild(this.pausedBlockElement);
                        }
                    }
                    hide() {
                        hidden_default()(this.pausedBlockElement, true);
                    }
                    show() {
                        hidden_default()(this.pausedBlockElement, false);
                    }
                }
                const pausedNote = PausedNote;
                class RecordNote {
                    visuals;
                    recordNoteElement;
                    constructor(visuals){
                        this.visuals = visuals;
                    }
                    build() {
                        this.recordNoteElement = this.visuals.getElement()?.querySelector(".recordNote");
                        if (this.recordNoteElement) this.hide();
                        else {
                            this.recordNoteElement = document.createElement("p");
                            this.recordNoteElement.classList.add("recordNote");
                            this.hide();
                            this.visuals.appendChild(this.recordNoteElement);
                        }
                    }
                    stop() {
                        this.hide();
                        this.recordNoteElement?.classList.remove("near");
                        this.recordNoteElement?.classList.remove("nigh");
                    }
                    setNear() {
                        this.recordNoteElement?.classList.add("near");
                    }
                    setNigh() {
                        this.recordNoteElement?.classList.add("nigh");
                    }
                    hide() {
                        hidden_default()(this.recordNoteElement, true);
                    }
                    show() {
                        hidden_default()(this.recordNoteElement, false);
                    }
                }
                const recorder_recordNote = RecordNote;
                function pad(n) {
                    const absNum = Math.abs(n);
                    if (absNum < 10) return n < 0 ? `-0${absNum}` : `0${absNum}`;
                    return String(n);
                }
                const util_pad = pad;
                class RecordTimer {
                    visuals;
                    recordNote;
                    options;
                    recordTimerElement;
                    nearComputed = false;
                    endNighComputed = false;
                    started = false;
                    countdown;
                    constructor(visuals, recordNote, options){
                        this.visuals = visuals;
                        this.recordNote = recordNote;
                        this.options = options;
                    }
                    thresholdReached(secs, threshold) {
                        return secs >= this.options.video.limitSeconds * threshold;
                    }
                    isNear(secs) {
                        if (!this.nearComputed && this.thresholdReached(secs, 0.6)) {
                            this.nearComputed = true;
                            return true;
                        }
                        return false;
                    }
                    endIsNigh(secs) {
                        if (!this.endNighComputed && this.thresholdReached(secs, 0.8)) {
                            this.endNighComputed = true;
                            return true;
                        }
                        return false;
                    }
                    setNear() {
                        this.recordTimerElement?.classList.add("near");
                    }
                    setNigh() {
                        this.recordTimerElement?.classList.add("nigh");
                    }
                    check(elapsedTime) {
                        const newCountdown = this.getStartSeconds() - Math.floor(elapsedTime / 1e3);
                        if (newCountdown !== this.countdown) {
                            this.countdown = newCountdown;
                            this.update();
                            if (this.countdown < 1) this.visuals.stop(true);
                        }
                    }
                    update() {
                        if (void 0 === this.countdown) throw new Error("Countdown is set to undefined, unable to update timer");
                        const mins = Math.floor(this.countdown / 60);
                        const secs = this.countdown - 60 * mins;
                        if (!this.nearComputed || !this.endNighComputed) {
                            const remainingSeconds = this.options.video.limitSeconds - this.countdown;
                            if (this.isNear(remainingSeconds)) {
                                this.recordNote.setNear();
                                this.setNear();
                                this.options.logger.debug(`End is near, ${this.countdown} seconds to go`);
                            } else if (this.endIsNigh(remainingSeconds)) {
                                this.recordNote.setNigh();
                                this.setNigh();
                                this.options.logger.debug(`End is nigh, ${this.countdown} seconds to go`);
                            }
                        }
                        if (this.recordTimerElement) this.recordTimerElement.innerHTML = `${mins}:${util_pad(secs)}`;
                    }
                    hide() {
                        hidden_default()(this.recordTimerElement, true);
                    }
                    show() {
                        this.recordTimerElement?.classList.remove("near");
                        this.recordTimerElement?.classList.remove("nigh");
                        hidden_default()(this.recordTimerElement, false);
                    }
                    getSecondsRecorded() {
                        if (void 0 === this.countdown) return this.getSecondsRecorded();
                        return this.getStartSeconds() - this.countdown;
                    }
                    getStartSeconds() {
                        return this.options.video.limitSeconds;
                    }
                    start() {
                        this.countdown = this.getStartSeconds();
                        this.nearComputed = this.endNighComputed = false;
                        this.started = true;
                        this.update();
                        this.show();
                    }
                    pause() {
                        this.recordNote.hide();
                    }
                    resume() {
                        this.recordNote.show();
                    }
                    isStopped() {
                        return void 0 === this.countdown;
                    }
                    stop() {
                        if (!this.isStopped() && this.started) {
                            this.options.logger.debug(`Stopping record timer. Was recording for about ~${this.getSecondsRecorded()} seconds.`);
                            this.hide();
                            this.recordNote.stop();
                            this.countdown = void 0;
                            this.started = false;
                        }
                    }
                    build() {
                        this.recordTimerElement = this.visuals.getElement()?.querySelector(".recordTimer");
                        if (this.recordTimerElement) this.hide();
                        else {
                            this.recordTimerElement = document.createElement("p");
                            this.recordTimerElement.classList.add("recordTimer");
                            this.hide();
                            this.visuals.appendChild(this.recordTimerElement);
                        }
                    }
                }
                const recordTimer = RecordTimer;
                class RecorderInsides extends util_Despot {
                    recordNote;
                    recordTimer;
                    countdown;
                    facingMode;
                    pausedNote;
                    built = false;
                    constructor(visuals, options){
                        super("RecorderInsides", options);
                        this.recordNote = new recorder_recordNote(visuals);
                        this.recordTimer = new recordTimer(visuals, this.recordNote, options);
                        const browser = util_getBrowser(options);
                        if (options.video.countdown) this.countdown = new countdown(visuals, options);
                        if (options.video.facingModeButton && browser.isMobile()) this.facingMode = new facingMode(visuals, options);
                        if (options.enablePause) this.pausedNote = new pausedNote(visuals, options);
                    }
                    startRecording() {
                        this.recordTimer.start();
                    }
                    resumeRecording() {
                        this.recordTimer.resume();
                    }
                    stopRecording() {
                        this.recordTimer.stop();
                    }
                    pauseRecording() {
                        if (this.isCountingDown()) this.countdown?.pause();
                        else this.recordTimer.pause();
                    }
                    onResetting() {
                        this.hidePause();
                        this.hideCountdown();
                        this.recordTimer.stop();
                        this.facingMode?.hide();
                    }
                    initEvents() {
                        this.options.logger.debug("RecorderInsides: initEvents()");
                        this.on("USER_MEDIA_READY", ()=>{
                            this.facingMode?.show();
                        });
                        this.on("RECORDING", ()=>{
                            this.startRecording();
                        });
                        this.on("RESUMING", ()=>{
                            this.resumeRecording();
                        });
                        this.on("STOPPING", ()=>{
                            this.stopRecording();
                        });
                        this.on("PAUSED", ()=>{
                            this.pauseRecording();
                        });
                        this.on("ERROR", ()=>{
                            this.onResetting();
                        });
                        this.on("RESETTING", ()=>{
                            this.onResetting();
                        });
                        this.on("HIDE", ()=>{
                            this.hideCountdown();
                        });
                    }
                    build() {
                        this.options.logger.debug("RecorderInsides: build()");
                        this.countdown?.build();
                        this.pausedNote?.build();
                        this.facingMode?.build();
                        this.recordNote.build();
                        this.recordTimer.build();
                        if (!this.built) this.initEvents();
                        this.built = true;
                    }
                    unload() {
                        this.countdown?.unload();
                        this.built = false;
                    }
                    showPause() {
                        this.pausedNote?.show();
                    }
                    hidePause() {
                        this.pausedNote?.hide();
                    }
                    hideCountdown() {
                        this.countdown?.hide();
                    }
                    startCountdown(cb) {
                        this.countdown?.start(cb);
                    }
                    resumeCountdown() {
                        this.countdown?.resume();
                    }
                    isCountingDown() {
                        return this.countdown?.isCountingDown();
                    }
                    checkTimer(elapsedTime) {
                        this.recordTimer.check(elapsedTime);
                    }
                }
                const recorderInsides = RecorderInsides;
                const NOTIFIER_MESSAGE_ID = "notifierMessage";
                class Notifier extends util_Despot {
                    visuals;
                    notifyElement;
                    messageElement;
                    explanationElement;
                    entertainTimeoutId;
                    entertaining = false;
                    built = false;
                    constructor(visuals, options){
                        super("Notifier", options);
                        this.visuals = visuals;
                    }
                    onStopping(limitReached = false) {
                        let lead = "";
                        this.visuals.beginWaiting();
                        if (limitReached) {
                            this.options.logger.debug("Limit reached");
                            lead += `${this.options.text.limitReached}.<br/>`;
                        }
                        lead += `${this.options.text.sending} \u{2026}`;
                        this.notify(lead, void 0, {
                            stillWait: true,
                            entertain: this.options.notifier.entertain
                        });
                    }
                    onConnecting() {
                        this.notify("Connecting \u2026");
                    }
                    onLoadingUserMedia() {
                        this.notify("Loading webcam \u2026");
                    }
                    onProgress(frameProgress, sampleProgress) {
                        let overallProgress;
                        if (isAudioEnabled(this.options)) {
                            overallProgress = `Video: ${frameProgress}`;
                            if (sampleProgress) overallProgress += `, Audio: ${sampleProgress}`;
                        } else overallProgress = frameProgress;
                        this.setExplanation(overallProgress);
                    }
                    onBeginVideoEncoding() {
                        this.visuals.beginWaiting();
                        const lead = `${this.options.text.encoding} \u{2026}`;
                        this.notify(lead, void 0, {
                            stillWait: true,
                            entertain: this.options.notifier.entertain
                        });
                        this.hideExplanation();
                    }
                    initEvents() {
                        this.options.logger.debug("Notifier: initEvents()");
                        this.on("CONNECTING", ()=>{
                            this.onConnecting();
                        });
                        this.on("LOADING_USER_MEDIA", ()=>{
                            this.onLoadingUserMedia();
                        });
                        this.on("USER_MEDIA_READY", ()=>{
                            this.correctNotifierDimensions();
                            this.hide();
                        });
                        this.on("PREVIEW", ()=>{
                            this.hide();
                        });
                        this.on("STOPPING", (params)=>{
                            this.onStopping(params.limitReached);
                        });
                        this.on("PROGRESS", (params)=>{
                            this.onProgress(params.frameProgress, params.sampleProgress);
                        });
                        this.on("BEGIN_VIDEO_ENCODING", ()=>{
                            this.onBeginVideoEncoding();
                        });
                        this.on("UNLOADING", ()=>{
                            this.notify("Unloading \u2026");
                        });
                        this.on("DISCONNECTED", ()=>{
                            this.notify("Disconnected");
                        });
                        this.on("CONNECTED", ()=>{
                            this.notify("Connected");
                            if (this.options.loadUserMediaOnRecord) this.hide();
                        });
                    }
                    correctNotifierDimensions() {
                        if (!this.notifyElement) return;
                        if (this.options.video.stretch) {
                            this.notifyElement.style.width = "auto";
                            this.notifyElement.style.height = `${this.visuals.getRecorderHeight(true, true)}px`;
                        } else {
                            this.notifyElement.style.width = `${this.visuals.getRecorderWidth(true)}px`;
                            this.notifyElement.style.height = `${this.visuals.getRecorderHeight(true)}px`;
                        }
                    }
                    show() {
                        if (this.notifyElement) hidden_default()(this.notifyElement, false);
                    }
                    runEntertainment() {
                        if (this.options.notifier.entertain) {
                            if (!this.entertaining) {
                                const randomBackgroundClass = Math.floor(Math.random() * this.options.notifier.entertainLimit + 1);
                                if (this.notifyElement) this.notifyElement.className = `notifier entertain ${this.options.notifier.entertainClass}${randomBackgroundClass}`;
                                this.entertainTimeoutId = window.setTimeout(this.runEntertainment.bind(this), this.options.notifier.entertainInterval);
                                this.entertaining = true;
                            }
                        } else this.cancelEntertainment();
                    }
                    cancelEntertainment() {
                        if (this.notifyElement) this.notifyElement.classList.remove("entertain");
                        clearTimeout(this.entertainTimeoutId);
                        this.entertainTimeoutId = void 0;
                        this.entertaining = false;
                    }
                    error(err) {
                        const message = err.message;
                        const explanation = err.explanation;
                        if (!message) this.options.logger.debug(`Weird empty error message generated for error ${util_pretty(err)}`);
                        this.notify(message, explanation, {
                            blocking: true,
                            problem: true,
                            classList: err.getClassList(),
                            removeDimensions: util_getBrowser(this.options).isMobile()
                        });
                    }
                    getMessageElement() {
                        if (this.messageElement) return this.messageElement;
                        this.messageElement = document.querySelector(`#${NOTIFIER_MESSAGE_ID}`);
                        return this.messageElement;
                    }
                    setMessage(message, messageOptions) {
                        this.options.logger.debug(`Notifier: setMessage(${message})`);
                        if (!this.getMessageElement()) {
                            this.messageElement = document.createElement("h2");
                            this.messageElement.id = NOTIFIER_MESSAGE_ID;
                            if (this.notifyElement) if (this.explanationElement) this.notifyElement.insertBefore(this.messageElement, this.explanationElement);
                            else this.notifyElement.appendChild(this.messageElement);
                            else this.options.logger.warn(`Unable to show message ${message} because notifyElement is empty`);
                        }
                        if (message.length > 0) if (this.messageElement) {
                            const problem = messageOptions?.problem;
                            this.messageElement.innerHTML = (problem ? "&#x2639; " : "") + message;
                        } else this.options.logger.warn("There is no message element for displaying a message");
                        else this.options.logger.warn("Not going to update notifierMessage element because message is empty");
                        hidden_default()(this.messageElement, false);
                    }
                    setExplanation(explanation) {
                        this.options.logger.debug(`Notifier: setExplanation(${explanation})`);
                        if (!this.explanationElement) {
                            this.explanationElement = document.createElement("p");
                            this.explanationElement.classList.add("explanation");
                            if (this.notifyElement) this.notifyElement.appendChild(this.explanationElement);
                            else this.options.logger.warn(`Unable to show explanation because notifyElement is empty: ${explanation}`);
                        }
                        this.explanationElement.innerHTML = explanation;
                        hidden_default()(this.explanationElement, false);
                    }
                    build() {
                        this.options.logger.debug("Notifier: build()");
                        this.notifyElement = this.visuals.getElement()?.querySelector(".notifier");
                        if (this.notifyElement) this.hide();
                        else {
                            this.notifyElement = document.createElement("div");
                            this.hide();
                            this.visuals.appendChild(this.notifyElement);
                        }
                        if (!this.built) this.initEvents();
                        this.built = true;
                    }
                    hideMessage() {
                        if (this.getMessageElement()) hidden_default()(this.messageElement, true);
                    }
                    hideExplanation() {
                        if (this.explanationElement) hidden_default()(this.explanationElement, true);
                    }
                    hide() {
                        this.cancelEntertainment();
                        if (this.notifyElement) {
                            hidden_default()(this.notifyElement, true);
                            this.notifyElement.classList.remove("blocking");
                        }
                        this.hideMessage();
                        this.hideExplanation();
                    }
                    isVisible() {
                        if (!this.built) return false;
                        return this.notifyElement && !hidden_default()(this.notifyElement);
                    }
                    isBuilt() {
                        return this.built;
                    }
                    notify(message, explanation, notifyOptions = {}) {
                        const params = [
                            message,
                            explanation
                        ].filter(Boolean);
                        this.options.logger.debug(`Notifier: notify(${params.join(", ")})`);
                        const stillWait = notifyOptions.stillWait ?? false;
                        const entertain = notifyOptions.entertain ?? false;
                        const blocking = notifyOptions.blocking ?? false;
                        const classList = notifyOptions.classList ?? false;
                        const removeDimensions = notifyOptions.removeDimensions ?? false;
                        if (this.notifyElement) {
                            if (!entertain) this.notifyElement.className = "notifier";
                            if (classList) classList.forEach((className)=>{
                                this.notifyElement?.classList.add(className);
                            });
                            if (removeDimensions) {
                                this.notifyElement.style.width = "auto";
                                this.notifyElement.style.height = "auto";
                            }
                        }
                        if (blocking) {
                            this.notifyElement?.classList.add("blocking");
                            this.emit("BLOCKING");
                        } else this.emit("NOTIFYING");
                        this.visuals.hideReplay();
                        this.visuals.hideRecorder();
                        this.setMessage(message, notifyOptions);
                        if (explanation && explanation.length > 0) this.setExplanation(explanation);
                        if (entertain) this.runEntertainment();
                        else this.cancelEntertainment();
                        this.visuals.showVisuals();
                        this.show();
                        if (!stillWait) this.visuals.endWaiting();
                    }
                }
                const notifier = Notifier;
                var animitter = __webpack_require__("./node_modules/animitter/index.js");
                var animitter_default = /*#__PURE__*/ __webpack_require__.n(animitter);
                var canvas_to_buffer_modern = __webpack_require__("./node_modules/canvas-to-buffer/dist/canvas-to-buffer.modern.js");
                var websocket_stream_stream = __webpack_require__("./node_modules/websocket-stream/stream.js");
                var stream_default = /*#__PURE__*/ __webpack_require__.n(websocket_stream_stream);
                function figureMinHeight(height, options) {
                    let minHeight;
                    if (options.video.height) {
                        minHeight = Math.min(options.video.height, height);
                        if (minHeight < 1) throw error_createError({
                            message: `Got a min height less than 1 (${minHeight})!`,
                            options
                        });
                    } else minHeight = height;
                    return minHeight;
                }
                const dimensions_figureMinHeight = figureMinHeight;
                function getRatio_getRatio(options, videoHeight, videoWidth) {
                    let ratio = 1;
                    const hasVideoDimensions = videoHeight && videoWidth;
                    const desiredHeight = options.video.height;
                    const desiredWidth = options.video.width;
                    const hasDesiredDimensions = desiredHeight && desiredWidth;
                    if (hasDesiredDimensions) ratio = hasVideoDimensions ? videoHeight < desiredHeight || videoWidth < desiredWidth ? videoHeight / videoWidth : desiredHeight / desiredWidth : desiredHeight / desiredWidth;
                    else if (hasVideoDimensions) ratio = videoHeight / videoWidth;
                    return ratio;
                }
                const getRatio = getRatio_getRatio;
                function calculateHeight(responsive, videoWidth, options, target, ratio, element) {
                    let width = videoWidth;
                    if (width < 1) throw error_createError({
                        message: `Unable to calculate height for target ${target} when width is less than 1 (= ${width}) and responsive mode is set to ${responsive}`,
                        options
                    });
                    if (responsive && element) width = limitWidth(element, options, width);
                    const chosenRatio = ratio ?? getRatio(options, void 0, videoWidth);
                    const height = Math.round(width * chosenRatio);
                    if (Number.isInteger(height) && height < 1) throw error_createError({
                        message: "Just calculated a height less than 1 which is wrong.",
                        options
                    });
                    return dimensions_figureMinHeight(height, options);
                }
                const dimensions_calculateHeight = calculateHeight;
                function calculateWidth(responsive, videoHeight, options, ratio) {
                    let height = dimensions_figureMinHeight(videoHeight, options);
                    if (responsive) height = dimensions_limitHeight(height, options, "calculateWidth");
                    if (!height || height < 1) throw error_createError({
                        message: `Height ${height} cannot be smaller than 1 when calculating width.`,
                        options
                    });
                    const chosenRatio = ratio ?? getRatio(options, videoHeight);
                    const calculatedWidth = Math.round(height / chosenRatio);
                    if (calculatedWidth < 1) throw error_createError({
                        message: "Calculated width cannot be smaller than 1!",
                        options
                    });
                    return calculatedWidth;
                }
                const dimensions_calculateWidth = calculateWidth;
                var audio_sample_modern = __webpack_require__("./node_modules/audio-sample/dist/audio-sample.modern.js");
                var is_power_of_two = __webpack_require__("./node_modules/is-power-of-two/index.js");
                var is_power_of_two_default = /*#__PURE__*/ __webpack_require__.n(is_power_of_two);
                const CHANNELS = 1;
                function getAudioContextClass() {
                    return window.AudioContext;
                }
                class AudioRecorder_AudioRecorder {
                    scriptProcessor;
                    audioInput;
                    vcAudioContext;
                    userMedia;
                    options;
                    constructor(userMedia, options){
                        this.options = options;
                        this.userMedia = userMedia;
                    }
                    hasAudioContext() {
                        return Boolean(getAudioContextClass()) && Boolean(this.getAudioContext());
                    }
                    getAudioContext() {
                        if (!this.vcAudioContext) {
                            const AudioContext = getAudioContextClass();
                            this.vcAudioContext = new AudioContext();
                        }
                        return this.vcAudioContext;
                    }
                    onAudioProcess(e, cb) {
                        if (!this.userMedia.isRecording() || this.userMedia.isPaused()) return;
                        const float32Array = e.inputBuffer.getChannelData(0);
                        cb(new audio_sample_modern.A(float32Array));
                    }
                    init(localMediaStream) {
                        this.options.logger.debug("AudioRecorder: init()");
                        const volume = this.getAudioContext().createGain();
                        try {
                            this.audioInput = this.getAudioContext().createMediaStreamSource(localMediaStream);
                        } catch (exc) {
                            throw error_createError({
                                message: "Webcam has no audio",
                                exc,
                                options: this.options
                            });
                        }
                        let { bufferSize } = this.options.audio;
                        if ("auto" === bufferSize) bufferSize = util_getBrowser(this.options).isFirefox() ? 512 : 2048;
                        if (!is_power_of_two_default()(bufferSize)) throw error_createError({
                            message: "Audio buffer size must be a power of two.",
                            options: this.options
                        });
                        if (!this.options.audio.volume || src_options.audio.volume > 1) throw error_createError({
                            message: "Audio volume must be between zero and one.",
                            options: this.options
                        });
                        volume.gain.value = this.options.audio.volume;
                        this.scriptProcessor = this.getAudioContext().createScriptProcessor(bufferSize, CHANNELS, CHANNELS);
                        this.audioInput.connect(this.scriptProcessor);
                        this.scriptProcessor.connect(this.getAudioContext().destination);
                        this.audioInput.connect(volume);
                        volume.connect(this.scriptProcessor);
                    }
                    record(cb) {
                        this.options.logger.debug("AudioRecorder: record()");
                        if (this.scriptProcessor) this.scriptProcessor.onaudioprocess = (e)=>{
                            this.onAudioProcess(e, cb);
                        };
                    }
                    stop() {
                        this.options.logger.debug("AudioRecorder: stop()");
                        if (this.scriptProcessor) this.scriptProcessor.onaudioprocess = null;
                        if (this.audioInput) this.audioInput.disconnect();
                        if (this.hasAudioContext()) this.getAudioContext().close().then(()=>{
                            this.options.logger.debug("AudioRecorder: audio context is closed");
                            this.vcAudioContext = void 0;
                        }).catch(function(err) {
                            if (err instanceof Error) throw error_createError({
                                err,
                                options: src_options
                            });
                            throw err;
                        });
                    }
                    getSampleRate() {
                        if (this.hasAudioContext()) return this.getAudioContext().sampleRate;
                        return -1;
                    }
                }
                const AudioRecorder = AudioRecorder_AudioRecorder;
                function getFirstVideoTrack(localMediaStream) {
                    const videoTracks = localMediaStream.getVideoTracks();
                    let videoTrack;
                    if (videoTracks[0]) videoTrack = videoTracks[0];
                    return videoTrack;
                }
                const media_getFirstVideoTrack = getFirstVideoTrack;
                const MEDIA_EVENTS = [
                    "loadstart",
                    "suspend",
                    "progress",
                    "abort",
                    "emptied",
                    "stalled",
                    "pause",
                    "loadeddata",
                    "waiting",
                    "playing",
                    "canplay",
                    "canplaythrough",
                    "seeking",
                    "seeked",
                    "ended",
                    "ratechange",
                    "durationchange",
                    "volumechange"
                ];
                const mediaEvents = MEDIA_EVENTS;
                function isPromise_isPromise(anything) {
                    return Boolean(anything && "undefined" != typeof Promise && "[object Promise]" === Object.prototype.toString.call(anything));
                }
                const isPromise = isPromise_isPromise;
                const EVENT_ASCII = "|\u2014O\u2014|";
                class UserMedia extends util_Despot {
                    recorder;
                    rawVisualUserMedia;
                    paused = false;
                    recording = false;
                    audioRecorder;
                    currentVisualStream;
                    onPlayReached = false;
                    onLoadedMetaDataReached = false;
                    playingPromiseReached = false;
                    constructor(recorder, options){
                        super("UserMedia", options);
                        this.recorder = recorder;
                        this.rawVisualUserMedia = recorder.getRawVisualUserMedia();
                        mediaEvents.forEach((eventName)=>{
                            this.rawVisualUserMedia?.addEventListener(eventName, this.outputEvent.bind(this), false);
                        });
                    }
                    attachMediaStream(stream) {
                        this.currentVisualStream = stream;
                        if (this.rawVisualUserMedia) this.rawVisualUserMedia.srcObject = stream;
                        else throw error_createError({
                            message: "Error attaching stream to element.",
                            explanation: "Contact the developer about this",
                            options: this.options
                        });
                    }
                    setVisualStream(localMediaStream) {
                        if (localMediaStream) this.attachMediaStream(localMediaStream);
                        else {
                            this.rawVisualUserMedia?.removeAttribute("srcObject");
                            this.rawVisualUserMedia?.removeAttribute("src");
                            this.currentVisualStream = void 0;
                        }
                    }
                    hasEnded() {
                        if (this.rawVisualUserMedia?.ended) return this.rawVisualUserMedia.ended;
                        return !this.currentVisualStream?.active;
                    }
                    hasInvalidDimensions() {
                        if (this.rawVisualUserMedia?.videoWidth && this.rawVisualUserMedia.videoWidth < 3 || this.rawVisualUserMedia?.height && this.rawVisualUserMedia.height < 3) return true;
                        return false;
                    }
                    logEvent(eventType, params) {
                        this.options.logger.debug(`UserMedia: ... ${EVENT_ASCII} event ${eventType}: ${util_pretty(params)}`);
                    }
                    outputEvent(e) {
                        this.logEvent(e.type, {
                            readyState: this.rawVisualUserMedia?.readyState
                        });
                        this.rawVisualUserMedia?.removeEventListener(e.type, this.outputEvent.bind(this));
                    }
                    unloadRemainingEventListeners() {
                        this.options.logger.debug("UserMedia: unloadRemainingEventListeners()");
                        mediaEvents.forEach((eventName)=>{
                            this.rawVisualUserMedia?.removeEventListener(eventName, this.outputEvent.bind(this));
                        });
                    }
                    audioRecord(audioCallback) {
                        util_Despot.removeListener("SENDING_FIRST_FRAME");
                        this.audioRecorder?.record(audioCallback);
                    }
                    init(localMediaStream, videoCallback, audioCallback, endedEarlyCallback, switchingFacingMode) {
                        this.stop(localMediaStream, {
                            aboutToInitialize: true,
                            switchingFacingMode
                        });
                        this.onPlayReached = false;
                        this.onLoadedMetaDataReached = false;
                        this.playingPromiseReached = false;
                        if (isAudioEnabled(this.options)) this.audioRecorder ??= new AudioRecorder(this, this.options);
                        const unloadAllEventListeners = ()=>{
                            this.options.logger.debug("UserMedia: unloadAllEventListeners()");
                            this.unloadRemainingEventListeners();
                            util_Despot.removeListener("SENDING_FIRST_FRAME");
                            this.rawVisualUserMedia?.removeEventListener("play", onPlay);
                            this.rawVisualUserMedia?.removeEventListener("loadedmetadata", onLoadedMetaData);
                        };
                        const play = ()=>{
                            try {
                                this.rawVisualUserMedia?.load();
                                if (this.rawVisualUserMedia?.paused) {
                                    this.options.logger.debug(`UserMedia: play(): media.readyState=${this.rawVisualUserMedia.readyState}, media.paused=${this.rawVisualUserMedia.paused}, media.ended=${this.rawVisualUserMedia.ended}, media.played=${util_pretty(this.rawVisualUserMedia.played)}`);
                                    let p;
                                    try {
                                        p = this.rawVisualUserMedia.play();
                                    } catch (exc) {
                                        this.options.logger.warn(`Caught raw user media play exception: ${exc}`);
                                    }
                                    if (isPromise(p)) p.then(()=>{
                                        if (!this.playingPromiseReached) {
                                            this.options.logger.debug("UserMedia: play promise successful. Playing now.");
                                            this.playingPromiseReached = true;
                                        }
                                    }).catch((reason)=>{
                                        this.options.logger.warn(`Caught pending user media promise exception: ${reason.toString()}`);
                                    });
                                }
                            } catch (exc) {
                                unloadAllEventListeners();
                                endedEarlyCallback(exc);
                            }
                        };
                        const fireCallbacks = ()=>{
                            const readyState = this.rawVisualUserMedia?.readyState;
                            this.options.logger.debug(`UserMedia: fireCallbacks(readyState=${readyState}, onPlayReached=${this.onPlayReached}, onLoadedMetaDataReached=${this.onLoadedMetaDataReached})`);
                            if (this.onPlayReached && this.onLoadedMetaDataReached) {
                                videoCallback();
                                if (this.audioRecorder) try {
                                    this.audioRecorder.init(localMediaStream);
                                    this.on("SENDING_FIRST_FRAME", ()=>{
                                        this.audioRecord(audioCallback);
                                    });
                                } catch (exc) {
                                    unloadAllEventListeners();
                                    endedEarlyCallback(exc);
                                }
                            }
                        };
                        const onPlay = ()=>{
                            try {
                                this.logEvent("play", {
                                    readyState: this.rawVisualUserMedia?.readyState,
                                    audio: isAudioEnabled(this.options),
                                    width: this.rawVisualUserMedia?.width,
                                    height: this.rawVisualUserMedia?.height,
                                    videoWidth: this.rawVisualUserMedia?.videoWidth,
                                    videoHeight: this.rawVisualUserMedia?.videoHeight
                                });
                                this.rawVisualUserMedia?.removeEventListener("play", onPlay);
                                if (this.hasEnded() || this.hasInvalidDimensions()) endedEarlyCallback(error_createError({
                                    message: "Already busy",
                                    explanation: "Probably another browser window is using your webcam?",
                                    options: this.options
                                }));
                                else {
                                    this.onPlayReached = true;
                                    fireCallbacks();
                                }
                            } catch (exc) {
                                unloadAllEventListeners();
                                endedEarlyCallback(exc);
                            }
                        };
                        const onLoadedMetaData = ()=>{
                            this.logEvent("loadedmetadata", {
                                readyState: this.rawVisualUserMedia?.readyState,
                                paused: this.rawVisualUserMedia?.paused,
                                width: this.rawVisualUserMedia?.width,
                                height: this.rawVisualUserMedia?.height,
                                videoWidth: this.rawVisualUserMedia?.videoWidth,
                                videoHeight: this.rawVisualUserMedia?.videoHeight
                            });
                            this.rawVisualUserMedia?.removeEventListener("loadedmetadata", onLoadedMetaData);
                            if (!this.hasEnded() && !this.hasInvalidDimensions()) {
                                this.emit("LOADED_META_DATA");
                                this.onLoadedMetaDataReached = true;
                                fireCallbacks();
                            }
                        };
                        try {
                            const videoTrack = media_getFirstVideoTrack(localMediaStream);
                            if (videoTrack) if (videoTrack.enabled) {
                                let description = "";
                                if (videoTrack.label && videoTrack.label.length > 0) description = description.concat(videoTrack.label);
                                description = description.concat(` with enabled=${videoTrack.enabled}, muted=${videoTrack.muted}, readyState=${videoTrack.readyState}`);
                                this.options.logger.debug(`UserMedia: ${videoTrack.kind} detected. ${description}`);
                            } else throw error_createError({
                                message: "Webcam is disabled",
                                explanation: "The video track seems to be disabled. Enable it in your system.",
                                options: this.options
                            });
                            else this.options.logger.debug("UserMedia: detected (but no video tracks exist");
                            this.rawVisualUserMedia?.addEventListener("loadedmetadata", onLoadedMetaData);
                            this.rawVisualUserMedia?.addEventListener("play", onPlay);
                            this.rawVisualUserMedia?.addEventListener("error", (err)=>{
                                this.options.logger.warn(`Caught video element error event: ${util_pretty(err)}`);
                            });
                            this.setVisualStream(localMediaStream);
                            play();
                        } catch (exc) {
                            this.emit("ERROR", {
                                exc
                            });
                        }
                    }
                    isReady() {
                        return Boolean(this.rawVisualUserMedia?.src);
                    }
                    stop(visualStream, params) {
                        try {
                            let chosenStream = visualStream;
                            if (!params?.aboutToInitialize) {
                                if (!chosenStream) chosenStream = this.currentVisualStream;
                                const tracks = chosenStream?.getTracks();
                                if (tracks) tracks.forEach((track)=>{
                                    track.stop();
                                });
                                this.setVisualStream(void 0);
                                this.audioRecorder?.stop();
                                this.audioRecorder = void 0;
                            }
                            if (!params?.switchingFacingMode) this.paused = this.recording = false;
                        } catch (exc) {
                            this.emit("ERROR", {
                                exc
                            });
                        }
                    }
                    createCanvas() {
                        const canvas = document.createElement("canvas");
                        const rawWidth = this.getRawWidth(true);
                        if (rawWidth) canvas.width = rawWidth;
                        const rawHeight = this.getRawHeight(true);
                        if (rawHeight) canvas.height = rawHeight;
                        return canvas;
                    }
                    getVideoHeight() {
                        if (!this.rawVisualUserMedia) return;
                        return this.rawVisualUserMedia.videoHeight || this.rawVisualUserMedia.height;
                    }
                    getVideoWidth() {
                        if (!this.rawVisualUserMedia) return;
                        return this.rawVisualUserMedia.videoWidth || this.rawVisualUserMedia.width;
                    }
                    hasVideoWidth() {
                        const videoWidth = this.getVideoWidth();
                        return videoWidth && videoWidth > 0;
                    }
                    getRawWidth(responsive) {
                        let rawWidth = this.getVideoWidth();
                        if (this.options.video.width || this.options.video.height) rawWidth = responsive ? this.recorder.calculateWidth(responsive) : this.options.video.width;
                        if (responsive) rawWidth = this.recorder.limitWidth(rawWidth);
                        return rawWidth;
                    }
                    getRawHeight(responsive) {
                        let rawHeight;
                        if (this.options.video.width || this.options.video.height) {
                            rawHeight = this.recorder.calculateHeight(responsive);
                            if (!rawHeight || rawHeight < 1) throw error_createError({
                                message: "Bad dimensions",
                                explanation: "Calculated raw height cannot be less than 1!",
                                options: this.options
                            });
                        } else {
                            rawHeight = this.getVideoHeight();
                            if (!rawHeight || rawHeight < 1) throw error_createError({
                                message: "Bad dimensions",
                                explanation: "Raw video height from DOM element cannot be less than 1!",
                                options: this.options
                            });
                        }
                        if (responsive) rawHeight = this.recorder.limitHeight(rawHeight);
                        return rawHeight;
                    }
                    getRawVisuals() {
                        return this.rawVisualUserMedia;
                    }
                    pause() {
                        this.paused = true;
                    }
                    isPaused() {
                        return this.paused;
                    }
                    resume() {
                        this.paused = false;
                    }
                    record() {
                        this.recording = true;
                    }
                    isRecording() {
                        return this.recording;
                    }
                    getAudioSampleRate() {
                        if (this.audioRecorder) return this.audioRecorder.getSampleRate();
                        return -1;
                    }
                    getCharacteristics() {
                        return {
                            audioSampleRate: this.getAudioSampleRate(),
                            muted: this.rawVisualUserMedia?.muted,
                            width: this.rawVisualUserMedia?.width,
                            height: this.rawVisualUserMedia?.height,
                            videoWidth: this.rawVisualUserMedia?.videoWidth,
                            videoHeight: this.rawVisualUserMedia?.videoHeight
                        };
                    }
                }
                const visuals_userMedia = UserMedia;
                var Buffer = __webpack_require__("./node_modules/buffer/index.js")["Buffer"];
                const PIPE_SYMBOL = "\xb0\xba\xa4\xf8,\xb8\xb8,\xf8\xa4\xba\xb0`\xb0\xba\xa4\xf8,\xb8,\xf8\xa4\xb0\xba\xa4\xf8,\xb8\xb8,\xf8\xa4\xba\xb0`\xb0\xba\xa4\xf8,\xb8 ";
                class Recorder extends util_Despot {
                    visuals;
                    replay;
                    loop;
                    originalAnimationFrameObject;
                    samplesCount = 0;
                    framesCount = 0;
                    recordingStats;
                    confirmedFrameNumber = 0;
                    confirmedSampleNumber = 0;
                    recorderElement;
                    userMedia;
                    userMediaTimeout;
                    retryTimeout;
                    frameProgress;
                    sampleProgress;
                    canvas;
                    ctx;
                    userMediaLoaded;
                    userMediaLoading = false;
                    submitting = false;
                    unloaded;
                    stopTime;
                    stream;
                    connecting = false;
                    connected = false;
                    blocking = false;
                    built = false;
                    key;
                    waitingTime;
                    pingInterval;
                    frame;
                    recordingBuffer;
                    facingMode;
                    constructor(visuals, replay, options){
                        super("Recorder", options);
                        this.visuals = visuals;
                        this.replay = replay;
                        this.facingMode = options.video.facingMode;
                    }
                    writeStream(buffer, opts) {
                        if (this.stream) if (this.stream.destroyed) {
                            this.stopPings();
                            const err = error_createError({
                                message: "Already disconnected",
                                explanation: "Sorry, connection to the server has been destroyed. Please reload.",
                                options: this.options
                            });
                            this.emit("ERROR", {
                                err
                            });
                        } else {
                            const onFlushedCallback = opts?.onFlushedCallback;
                            try {
                                this.stream.write(buffer, ()=>{
                                    if (!onFlushedCallback) return;
                                    try {
                                        onFlushedCallback(opts);
                                    } catch (exc) {
                                        const err = error_createError({
                                            message: "Failed to write stream buffer",
                                            explanation: `stream.write() failed because of ${util_pretty(exc)}`,
                                            options: this.options,
                                            exc
                                        });
                                        this.emit("ERROR", {
                                            err
                                        });
                                    }
                                });
                            } catch (exc) {
                                const err = error_createError({
                                    message: "Failed writing to server",
                                    explanation: `stream.write() failed because of ${util_pretty(exc)}`,
                                    options: this.options,
                                    exc
                                });
                                this.emit("ERROR", {
                                    err
                                });
                            }
                        }
                    }
                    sendPings() {
                        this.pingInterval = window.setInterval(()=>{
                            this.options.logger.debug("Recorder: pinging...");
                            this.writeStream(Buffer.from(""));
                        }, this.options.timeouts.pingInterval);
                    }
                    stopPings() {
                        clearInterval(this.pingInterval);
                    }
                    onAudioSample(audioSample) {
                        this.samplesCount++;
                        const audioBuffer = audioSample.toBuffer();
                        this.writeStream(audioBuffer);
                    }
                    show() {
                        if (this.recorderElement) hidden_default()(this.recorderElement, false);
                    }
                    onUserMediaReady(params) {
                        try {
                            this.options.logger.debug(`Recorder: onUserMediaReady(${params ? util_pretty(params) : ""})`);
                            const switchingFacingMode = params?.switchingFacingMode;
                            this.userMediaLoading = this.blocking = this.unloaded = this.submitting = false;
                            this.userMediaLoaded = true;
                            if (!switchingFacingMode) this.loop = this.createLoop();
                            this.show();
                            if (params?.recordWhenReady) this.record();
                            this.emit("USER_MEDIA_READY", {
                                switchingFacingMode: params?.switchingFacingMode,
                                paused: this.isPaused(),
                                recordWhenReady: params?.recordWhenReady
                            });
                        } catch (exc) {
                            this.emit("ERROR", {
                                exc
                            });
                        }
                    }
                    clearRetryTimeout() {
                        if (!this.retryTimeout) return;
                        this.options.logger.debug("Recorder: clearRetryTimeout()");
                        window.clearTimeout(this.retryTimeout);
                        this.retryTimeout = void 0;
                    }
                    calculateFrameProgress() {
                        return `${(this.confirmedFrameNumber / (this.framesCount || 1) * 100).toFixed(2)}%`;
                    }
                    calculateSampleProgress() {
                        return `${(this.confirmedSampleNumber / (this.samplesCount || 1) * 100).toFixed(2)}%`;
                    }
                    updateOverallProgress() {
                        this.frameProgress = this.calculateFrameProgress();
                        if (isAudioEnabled(this.options)) this.sampleProgress = this.calculateSampleProgress();
                        this.emit("PROGRESS", {
                            frameProgress: this.frameProgress,
                            sampleProgress: this.sampleProgress
                        });
                    }
                    updateFrameProgress(args) {
                        if (args) {
                            if (!args.frame) throw error_createError({
                                message: "The frame number is missing",
                                options: this.options
                            });
                        } else throw error_createError({
                            message: "Arguments are missing for updating the frame progress",
                            options: this.options
                        });
                        this.confirmedFrameNumber = args.frame;
                        this.frameProgress = this.calculateFrameProgress();
                        this.updateOverallProgress();
                    }
                    updateSampleProgress(args) {
                        if (args) {
                            if (!args.sample) throw error_createError({
                                message: "The audio sample number is missing",
                                options: this.options
                            });
                        } else throw error_createError({
                            message: "Arguments are missing for updating the audio sample progress",
                            options: this.options
                        });
                        this.confirmedSampleNumber = args.sample;
                        this.sampleProgress = this.calculateSampleProgress();
                        this.updateOverallProgress();
                    }
                    preview(args) {
                        if (!args) throw error_createError({
                            message: "Preview arguments are missing.",
                            options: this.options
                        });
                        const hasAudio = this.samplesCount > 0;
                        this.confirmedFrameNumber = this.confirmedSampleNumber = this.samplesCount = this.framesCount = 0;
                        this.sampleProgress = this.frameProgress = void 0;
                        this.key = args.key;
                        if (args.mp4) this.replay.setMp4Source(`${args.mp4 + constants.SITE_NAME_LABEL}/${this.options.siteName}/videomail.mp4`, true);
                        if (args.webm) this.replay.setWebMSource(`${args.webm + constants.SITE_NAME_LABEL}/${this.options.siteName}/videomail.webm`, true);
                        this.hide();
                        const width = this.getRecorderWidth(true);
                        const height = this.getRecorderHeight(true);
                        this.emit("PREVIEW", {
                            key: this.key,
                            width,
                            height,
                            hasAudio
                        });
                        if (this.stopTime) this.waitingTime = Date.now() - this.stopTime;
                        if (!this.recordingStats) this.recordingStats = {};
                        this.recordingStats.waitingTime = this.waitingTime;
                    }
                    initSocket(cb) {
                        if (!this.connected) {
                            this.connecting = true;
                            this.options.logger.debug(`Recorder: initializing web socket to ${this.options.socketUrl}`);
                            this.emit("CONNECTING");
                            const url2Connect = `${this.options.socketUrl}?${encodeURIComponent(constants.SITE_NAME_LABEL)}=${encodeURIComponent(this.options.siteName)}`;
                            try {
                                this.stream = stream_default()(url2Connect, {
                                    perMessageDeflate: false,
                                    objectMode: true
                                });
                            } catch (exc) {
                                this.connecting = this.connected = false;
                                const err = error_createError({
                                    message: "Failed to connect to server",
                                    explanation: "Please upgrade your browser. Your current version does not seem to support websockets.",
                                    options: this.options,
                                    exc
                                });
                                this.emit("ERROR", {
                                    err
                                });
                            }
                            if (this.stream) {
                                this.stream.on("close", (err)=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream has closed`);
                                    this.connecting = this.connected = false;
                                    if (err) this.emit("ERROR", {
                                        err
                                    });
                                    else if (this.userMediaLoaded) this.initSocket();
                                });
                                this.stream.on("connect", ()=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *connect* event emitted`);
                                    const isClosing = this.stream?.socket.readyState === WebSocket.CLOSING;
                                    if (!this.connected && !isClosing && !this.unloaded) {
                                        this.connected = true;
                                        this.connecting = this.unloaded = false;
                                        this.emit("CONNECTED");
                                        cb?.();
                                    }
                                });
                                this.stream.on("data", (data)=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *data* event emitted`);
                                    let command;
                                    try {
                                        command = JSON.parse(data.toString());
                                    } catch (exc) {
                                        this.options.logger.debug(`Failed to parse command: ${exc}`);
                                        const err = error_createError({
                                            message: "Invalid server command",
                                            explanation: `Contact us asap. Bad command was ${data.toString()}. `,
                                            options: this.options,
                                            exc
                                        });
                                        this.emit("ERROR", {
                                            err
                                        });
                                    } finally{
                                        this.executeCommand(command);
                                    }
                                });
                                this.stream.on("error", (err)=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *error* event emitted: ${util_pretty(err)}`);
                                });
                                this.stream.on("drain", ()=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *drain* event emitted (should not happen!)`);
                                });
                                this.stream.on("preend", ()=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *preend* event emitted`);
                                });
                                this.stream.on("end", ()=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *end* event emitted`);
                                });
                                this.stream.on("drain", ()=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *drain* event emitted`);
                                });
                                this.stream.on("pipe", ()=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *pipe* event emitted`);
                                });
                                this.stream.on("unpipe", ()=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *unpipe* event emitted`);
                                });
                                this.stream.on("resume", ()=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *resume* event emitted`);
                                });
                                this.stream.on("uncork", ()=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *uncork* event emitted`);
                                });
                                this.stream.on("readable", ()=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *preend* event emitted`);
                                });
                                this.stream.on("prefinish", ()=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *preend* event emitted`);
                                });
                                this.stream.on("finish", ()=>{
                                    this.options.logger.debug(`${PIPE_SYMBOL}Stream *preend* event emitted`);
                                });
                            }
                        }
                    }
                    showUserMedia() {
                        if (!this.connected) return false;
                        const hidden = this.isHidden();
                        if (!hidden) return true;
                        const notifying = this.isNotifying();
                        if (notifying) return true;
                        return this.blocking;
                    }
                    userMediaErrorCallback(err) {
                        this.userMediaLoading = false;
                        this.clearUserMediaTimeout();
                        const characteristics = this.userMedia?.getCharacteristics();
                        this.options.logger.debug(`Recorder: userMediaErrorCallback(), name: ${err.name}, message: ${err.message} and Webcam characteristics: ${characteristics ? util_pretty(characteristics) : "none"}`);
                        const errorListeners = util_Despot.getListeners("ERROR");
                        if (errorListeners?.length) {
                            if (err.name !== error_VideomailError.MEDIA_DEVICE_NOT_SUPPORTED) {
                                const videomailError = error_createError({
                                    err,
                                    options: this.options
                                });
                                this.emit("ERROR", {
                                    err: videomailError
                                });
                            } else this.options.logger.debug(`Recorder: ignore user media error ${util_pretty(err)}`);
                            this.retryTimeout = window.setTimeout(this.initSocket.bind(this), this.options.timeouts.userMedia);
                        } else if (this.unloaded) this.options.logger.debug(`Recorder: already unloaded. Not going to throw error ${util_pretty(err)}`);
                        else {
                            this.options.logger.debug(`Recorder: no error listeners attached but throwing error ${util_pretty(err)}`);
                            throw error_createError({
                                err,
                                message: "Unable to process this error since there are no error listeners anymore.",
                                options: this.options
                            });
                        }
                    }
                    getUserMediaCallback(localStream, params) {
                        if (!this.userMedia) throw new Error("No user media is defined");
                        this.options.logger.debug(`Recorder: getUserMediaCallback(${params ? util_pretty(params) : ""})`);
                        if (this.showUserMedia()) try {
                            this.clearUserMediaTimeout();
                            this.userMedia.init(localStream, ()=>{
                                this.onUserMediaReady(params);
                            }, this.onAudioSample.bind(this), (err)=>{
                                this.emit("ERROR", {
                                    err
                                });
                            }, params?.switchingFacingMode);
                        } catch (exc) {
                            this.emit("ERROR", {
                                exc
                            });
                        }
                    }
                    loadGenuineUserMedia(params) {
                        this.options.logger.debug(`Recorder: loadGenuineUserMedia(${params ? util_pretty(params) : ""})`);
                        this.emit("ASKING_WEBCAM_PERMISSION");
                        const constraints = {
                            video: {
                                frameRate: {
                                    ideal: this.options.video.fps
                                }
                            },
                            audio: isAudioEnabled(this.options)
                        };
                        if (params?.switchingFacingMode && constraints.video && true !== constraints.video) constraints.video.facingMode = params.switchingFacingMode;
                        if (this.options.video.width && constraints.video && true !== constraints.video) {
                            const idealWidth = this.options.video.width;
                            if (idealWidth) constraints.video.width = {
                                ideal: idealWidth
                            };
                        } else if (constraints.video && true !== constraints.video) {
                            const limitedWidth = this.limitWidth();
                            if (limitedWidth) constraints.video.width = {
                                ideal: limitedWidth
                            };
                        }
                        if (this.options.video.height && constraints.video && true !== constraints.video) {
                            const idealHeight = this.options.video.height;
                            if (idealHeight) constraints.video.height = {
                                ideal: idealHeight
                            };
                        }
                        this.options.logger.debug(`Recorder: our webcam constraints are: ${util_pretty(constraints)}`);
                        this.options.logger.debug(`Recorder: available webcam constraints are: ${util_pretty(navigator.mediaDevices.getSupportedConstraints())}`);
                        const genuineUserMediaRequest = navigator.mediaDevices.getUserMedia(constraints);
                        genuineUserMediaRequest.then((localStream)=>{
                            this.getUserMediaCallback(localStream, params);
                        }).catch((reason)=>{
                            this.userMediaErrorCallback(reason);
                        });
                    }
                    loadUserMedia(params) {
                        if (this.userMediaLoaded) {
                            this.options.logger.debug("Recorder: skipping loadUserMedia() because it is already loaded");
                            this.onUserMediaReady(params);
                            return;
                        }
                        if (this.userMediaLoading) return void this.options.logger.debug("Recorder: skipping loadUserMedia() because it is already asking for permission");
                        this.options.logger.debug(`Recorder: loadUserMedia(${params ? util_pretty(params) : ""})`);
                        this.emit("LOADING_USER_MEDIA");
                        try {
                            if (!navigator.mediaDevices) throw new Error("No media devices are available.");
                            this.userMediaTimeout = window.setTimeout(()=>{
                                if (!this.isReady()) {
                                    const err = util_getBrowser(this.options).getNoAccessIssue();
                                    this.emit("ERROR", {
                                        err
                                    });
                                }
                            }, this.options.timeouts.userMedia);
                            this.userMediaLoading = true;
                            this.loadGenuineUserMedia(params);
                        } catch (exc) {
                            this.clearUserMediaTimeout();
                            this.options.logger.debug("Recorder: failed to load genuine user media");
                            this.userMediaLoading = false;
                            const errorListeners = util_Despot.getListeners("ERROR");
                            if (errorListeners?.length) this.emit("ERROR", {
                                exc
                            });
                            else {
                                this.options.logger.debug("Recorder: no error listeners attached but throwing exception further");
                                throw exc;
                            }
                        }
                    }
                    executeCommand(command) {
                        if (this.unloaded) return;
                        try {
                            if (command.args) this.options.logger.debug(`Server commanded: ${command.command} with ${util_pretty(command.args)}`);
                            else this.options.logger.debug(`Server commanded: ${command.command}`);
                            switch(command.command){
                                case "ready":
                                    this.emit("SERVER_READY");
                                    if (!this.userMediaTimeout) if (this.options.loadUserMediaOnRecord) this.show();
                                    else this.loadUserMedia();
                                    break;
                                case "preview":
                                    this.preview(command.args);
                                    break;
                                case "error":
                                    {
                                        let explanation = "(No explanation given)";
                                        if (command.args?.err?.message) explanation = command.args.err.message;
                                        const err = error_createError({
                                            message: "Websocket error from Videomail server",
                                            explanation,
                                            err: (0, serialize_error.cy)(command.args?.err),
                                            options: this.options
                                        });
                                        this.emit("ERROR", {
                                            err
                                        });
                                        break;
                                    }
                                case "confirmFrame":
                                    this.updateFrameProgress(command.args);
                                    break;
                                case "confirmSample":
                                    this.updateSampleProgress(command.args);
                                    break;
                                case "beginAudioEncoding":
                                    this.emit("BEGIN_AUDIO_ENCODING");
                                    break;
                                case "beginVideoEncoding":
                                    this.emit("BEGIN_VIDEO_ENCODING");
                                    break;
                                default:
                                    {
                                        const err = error_createError({
                                            message: `Unknown server command: ${command.command}`,
                                            options: this.options
                                        });
                                        this.emit("ERROR", {
                                            err
                                        });
                                        break;
                                    }
                            }
                        } catch (exc) {
                            this.emit("ERROR", {
                                exc
                            });
                        }
                    }
                    isNotifying() {
                        return this.visuals.isNotifying();
                    }
                    isHidden() {
                        return !this.recorderElement || hidden_default()(this.recorderElement);
                    }
                    writeCommand(command, args, cb) {
                        if (this.connected) {
                            if (this.stream) {
                                if (args) this.options.logger.debug(`$ ${command} with ${util_pretty(args)}`);
                                else this.options.logger.debug(`$ ${command}`);
                                const commandObj = {
                                    command,
                                    args
                                };
                                this.writeStream(Buffer.from(JSON.stringify(commandObj)));
                                if (cb) setTimeout(function() {
                                    cb();
                                }, 0);
                            }
                        } else {
                            this.options.logger.debug(`Reconnecting for the command ${command} \u{2026}`);
                            this.initSocket(()=>{
                                this.writeCommand(command, args);
                                cb?.();
                            });
                        }
                    }
                    cancelAnimationFrame() {
                        this.loop?.dispose();
                    }
                    getIntervalSum() {
                        return this.loop.getElapsedTime();
                    }
                    getAvgInterval() {
                        return this.getIntervalSum() / this.framesCount;
                    }
                    getAvgFps() {
                        const intervalSum = this.getIntervalSum();
                        if (0 === intervalSum || null == intervalSum) return;
                        return this.framesCount / intervalSum * 1000;
                    }
                    getRecordingStats() {
                        return this.recordingStats;
                    }
                    getAudioSampleRate() {
                        return this.userMedia?.getAudioSampleRate();
                    }
                    stop(params) {
                        if (!this.userMedia) throw new Error("No user media defined, unable to stop");
                        this.options.logger.debug(`Recorder: stop(${params ? util_pretty(params) : ""})`);
                        const limitReached = params?.limitReached;
                        this.emit("STOPPING", {
                            limitReached
                        });
                        this.loop?.complete();
                        setTimeout(()=>{
                            this.stopTime = Date.now();
                            const videoType = this.replay.getVideoType();
                            if (!videoType) throw new Error("Unable to video record when no video type is defined.");
                            this.recordingStats = {
                                avgFps: this.getAvgFps(),
                                wantedFps: this.options.video.fps,
                                avgInterval: this.getAvgInterval(),
                                wantedInterval: 1e3 / this.options.video.fps,
                                intervalSum: this.getIntervalSum(),
                                framesCount: this.framesCount,
                                videoType
                            };
                            if (isAudioEnabled(this.options) && this.userMedia) {
                                this.recordingStats.samplesCount = this.samplesCount;
                                this.recordingStats.sampleRate = this.userMedia.getAudioSampleRate();
                            }
                            this.writeCommand("stop", this.recordingStats, ()=>{
                                this.emit("STOPPED", {
                                    recordingStats: this.recordingStats
                                });
                            });
                            this.reset();
                        }, 60);
                    }
                    back(cb) {
                        this.emit("GOING_BACK");
                        this.unloaded = false;
                        this.show();
                        this.writeCommand("back", void 0, cb);
                    }
                    reInitializeAudio() {
                        this.options.logger.debug("Recorder: reInitializeAudio()");
                        this.clearUserMediaTimeout();
                        this.userMedia?.stop();
                        this.userMediaLoaded = this.key = this.canvas = this.ctx = void 0;
                        this.loadUserMedia();
                    }
                    unload(params) {
                        if (this.unloaded || !this.built) return;
                        const e = params?.e;
                        let cause;
                        if (e) cause = e.type;
                        const prettyCause = cause ? `, cause: ${cause}` : "";
                        this.options.logger.debug(`Recorder: unload()${prettyCause}`);
                        this.reset();
                        this.clearUserMediaTimeout();
                        if (this.userMedia) this.userMedia.unloadRemainingEventListeners();
                        if (this.submitting) ;
                        else if (this.stream) {
                            this.options.logger.debug("Recorder: ending stream ...");
                            this.stream.destroy();
                            this.stream = void 0;
                        }
                        this.unloaded = true;
                        this.built = this.connecting = this.connected = false;
                    }
                    reset() {
                        if (!this.unloaded) {
                            this.options.logger.debug("Recorder: reset()");
                            this.emit("RESETTING");
                            this.cancelAnimationFrame();
                            this.userMedia?.stop();
                            this.replay.reset();
                            this.userMediaLoaded = this.key = this.canvas = this.ctx = this.recordingBuffer = void 0;
                        }
                    }
                    clearUserMediaTimeout() {
                        if (this.userMediaTimeout) {
                            this.options.logger.debug("Recorder: clearUserMediaTimeout()");
                            window.clearTimeout(this.userMediaTimeout);
                            this.userMediaTimeout = void 0;
                        }
                    }
                    validate() {
                        return this.connected && void 0 === this.canvas;
                    }
                    isReady() {
                        return this.userMedia?.isReady();
                    }
                    pause(params) {
                        if (params) this.options.logger.debug(`pause() at frame ${this.framesCount} with ${util_pretty(params)}`);
                        else this.options.logger.debug(`pause() at frame ${this.framesCount}`);
                        this.userMedia?.pause();
                        this.loop.stop();
                        this.emit("PAUSED");
                        this.sendPings();
                    }
                    resume() {
                        this.options.logger.debug(`Recorder: resume() with frame ${this.framesCount}`);
                        this.stopPings();
                        this.emit("RESUMING");
                        this.userMedia?.resume();
                        this.loop.start();
                    }
                    onFlushed(opts) {
                        const frameNumber = opts.frameNumber;
                        if (1 === frameNumber) this.emit("FIRST_FRAME_SENT");
                    }
                    draw(_deltaTime, elapsedTime) {
                        if (!this.userMedia) throw new Error("No user media defined, unable to draw on canvas");
                        try {
                            if (!this.isPaused() && this.stream && this.ctx) {
                                if (0 === this.framesCount) this.emit("SENDING_FIRST_FRAME");
                                this.framesCount++;
                                const imageSource = this.userMedia.getRawVisuals();
                                if (this.canvas && imageSource) this.ctx.drawImage(imageSource, 0, 0, this.canvas.width, this.canvas.height);
                                else throw new Error("Unable to draw an image without a defined canvas");
                                this.recordingBuffer = this.frame?.toBuffer();
                                const recordingBufferLength = this.recordingBuffer?.length;
                                if (recordingBufferLength) {
                                    if (this.recordingBuffer) {
                                        const frameControlBuffer = Buffer.from(JSON.stringify({
                                            frameNumber: this.framesCount
                                        }));
                                        const frameBuffer = Buffer.concat([
                                            this.recordingBuffer,
                                            frameControlBuffer
                                        ]);
                                        this.writeStream(frameBuffer, {
                                            frameNumber: this.framesCount,
                                            onFlushedCallback: this.onFlushed.bind(this)
                                        });
                                        this.visuals.checkTimer(elapsedTime);
                                    }
                                } else throw error_createError({
                                    message: "Failed to extract webcam data.",
                                    options: this.options
                                });
                            }
                        } catch (exc) {
                            this.emit("ERROR", {
                                exc
                            });
                        }
                    }
                    createLoop() {
                        const newLoop = animitter_default()({
                            fps: this.options.video.fps
                        }, this.draw.bind(this));
                        this.originalAnimationFrameObject = newLoop.getRequestAnimationFrameObject();
                        return newLoop;
                    }
                    record() {
                        if (this.unloaded) return;
                        if (!this.connected) {
                            this.options.logger.debug("Recorder: reconnecting before recording ...");
                            this.initSocket(()=>{
                                this.once("USER_MEDIA_READY", this.record.bind(this));
                            });
                            return;
                        }
                        if (!this.userMediaLoaded) {
                            if (this.options.loadUserMediaOnRecord) this.loadUserMedia({
                                recordWhenReady: true
                            });
                            else {
                                const err = error_createError({
                                    message: "Load and enable your camera first",
                                    options: this.options
                                });
                                this.emit("ERROR", {
                                    err
                                });
                            }
                            return;
                        }
                        try {
                            if (!this.userMedia) throw new Error("No user media defined, unable to create canvas");
                            this.canvas = this.userMedia.createCanvas();
                        } catch (exc) {
                            const err = error_createError({
                                exc,
                                options: this.options
                            });
                            this.emit("ERROR", {
                                err
                            });
                            return;
                        }
                        this.ctx = this.canvas.getContext("2d");
                        if (!this.canvas.width) {
                            const err = error_createError({
                                message: "Canvas has an invalid width.",
                                options: this.options
                            });
                            this.emit("ERROR", {
                                err
                            });
                            return;
                        }
                        if (!this.canvas.height) {
                            const err = error_createError({
                                message: "Canvas has an invalid height.",
                                options: this.options
                            });
                            this.emit("ERROR", {
                                err
                            });
                            return;
                        }
                        this.frame = new canvas_to_buffer_modern.A(this.canvas, this.options.image.types, this.options.image.quality);
                        this.options.logger.debug("Recorder: record()");
                        this.userMedia.record();
                        this.emit("RECORDING", {
                            framesCount: this.framesCount
                        });
                        this.loop.on("update", (_deltaTime, elapsedTime)=>{
                            let avgFPS;
                            avgFPS = 0 !== elapsedTime ? Math.round(this.framesCount / elapsedTime * 1000) : void 0;
                            this.options.logger.debug(`Recorder: avgFps = ${avgFPS}, framesCount = ${this.framesCount}`);
                        });
                        this.loop.start();
                    }
                    setAnimationFrameObject(newObj) {
                        if (this.loop) {
                            const isRecording = this.isRecording();
                            this.loop.stop();
                            this.loop.setRequestAnimationFrameObject(newObj);
                            if (isRecording) this.loop.start();
                        }
                    }
                    restoreAnimationFrameObject() {
                        this.options.logger.debug("Recorder: restoreAnimationFrameObject()");
                        this.setAnimationFrameObject(this.originalAnimationFrameObject);
                    }
                    loopWithTimeouts() {
                        this.options.logger.debug("Recorder: loopWithTimeouts()");
                        const wantedInterval = 1e3 / this.options.video.fps;
                        let processingTime = 0;
                        let start;
                        const raf = (fn)=>setTimeout(()=>{
                                start = Date.now();
                                fn();
                                processingTime = Date.now() - start;
                            }, wantedInterval - processingTime);
                        const cancel = (id)=>{
                            window.clearTimeout(id);
                        };
                        this.setAnimationFrameObject({
                            requestAnimationFrame: raf,
                            cancelAnimationFrame: cancel
                        });
                    }
                    correctDimensions() {
                        if (!this.recorderElement) return;
                        if (this.options.video.width) {
                            const recorderWidth = this.getRecorderWidth(true);
                            if (recorderWidth) this.recorderElement.width = recorderWidth;
                        }
                        if (this.options.video.height) {
                            const recorderHeight = this.getRecorderHeight(true);
                            if (recorderHeight) this.recorderElement.height = recorderHeight;
                        }
                    }
                    switchFacingMode() {
                        if (!util_getBrowser(this.options).isMobile()) return;
                        if ("user" === this.facingMode) this.facingMode = "environment";
                        else if ("environment" === this.facingMode) this.facingMode = "user";
                        else this.options.logger.warn(`Recorder: unsupported facing mode ${util_pretty(this.facingMode)}`);
                        this.loadGenuineUserMedia({
                            switchingFacingMode: this.facingMode
                        });
                    }
                    initEvents() {
                        this.options.logger.debug("Recorder: initEvents()");
                        this.on("SUBMITTING", ()=>{
                            this.submitting = true;
                        });
                        this.on("SUBMITTED", ()=>{
                            this.submitting = false;
                        });
                        this.on("BLOCKING", ()=>{
                            this.blocking = true;
                            this.clearUserMediaTimeout();
                        });
                        this.on("PREVIEW", ()=>{
                            this.hide();
                        });
                        this.on("HIDE", ()=>{
                            this.hide();
                        });
                        this.on("LOADED_META_DATA", ()=>{
                            this.correctDimensions();
                        });
                        this.on("DISABLING_AUDIO", ()=>{
                            this.reInitializeAudio();
                        });
                        this.on("ENABLING_AUDIO", ()=>{
                            this.reInitializeAudio();
                        });
                        this.on("INVISIBLE", ()=>{
                            this.loopWithTimeouts();
                        });
                        this.on("VISIBLE", ()=>{
                            this.restoreAnimationFrameObject();
                        });
                        this.on("SWITCH_FACING_MODE", ()=>{
                            this.switchFacingMode();
                        });
                    }
                    buildElement() {
                        this.recorderElement = document.createElement("video");
                        this.recorderElement.classList.add(this.options.selectors.userMediaClass);
                        this.visuals.appendChild(this.recorderElement);
                    }
                    build() {
                        this.recorderElement = this.visuals.getElement()?.querySelector(`video.${this.options.selectors.userMediaClass}`);
                        if (!this.recorderElement) this.buildElement();
                        if (!this.recorderElement) throw new Error(`There is still no video element with class ${this.options.selectors.userMediaClass}`);
                        this.correctDimensions();
                        this.recorderElement.muted = true;
                        this.recorderElement.setAttribute("playsinline", "true");
                        this.recorderElement.setAttribute("webkit-playsinline", "webkit-playsinline");
                        this.recorderElement.style.transform = "rotateY(180deg)";
                        this.recorderElement.style["-webkit-transform"] = "rotateY(180deg)";
                        this.recorderElement.style["-moz-transform"] = "rotateY(180deg)";
                        if (this.options.video.stretch) this.recorderElement.style.width = "100%";
                        if (!this.userMedia) this.userMedia = new visuals_userMedia(this, this.options);
                        this.show();
                        if (this.built) {
                            if (this.options.loadUserMediaOnRecord) this.loadUserMedia();
                        } else {
                            this.initEvents();
                            if (this.connected) {
                                if (!this.options.loadUserMediaOnRecord) this.loadUserMedia();
                            } else this.initSocket();
                        }
                        this.built = true;
                    }
                    isPaused() {
                        return this.userMedia?.isPaused() && !this.loop.isRunning();
                    }
                    isRecording() {
                        return Boolean(this.loop?.isRunning() && !this.isPaused() && !this.isNotifying() && this.stream && !this.stream.destroyed);
                    }
                    hide() {
                        if (!this.isHidden()) {
                            if (this.recorderElement) hidden_default()(this.recorderElement, true);
                            this.clearUserMediaTimeout();
                            this.clearRetryTimeout();
                        }
                    }
                    isUnloaded() {
                        return this.unloaded;
                    }
                    getRecorderWidth(responsive) {
                        if (this.userMedia?.hasVideoWidth()) return this.userMedia.getRawWidth(responsive);
                        if (responsive && this.options.video.width) return this.limitWidth(this.options.video.width);
                        return this.options.video.width;
                    }
                    getRecorderHeight(responsive, useBoundingClientRect) {
                        if (this.recorderElement && useBoundingClientRect) return this.recorderElement.getBoundingClientRect().height;
                        if (this.userMedia) return this.userMedia.getRawHeight(responsive);
                        if (responsive && this.options.video.height) return this.calculateHeight(responsive);
                        return this.options.video.height;
                    }
                    getRatio() {
                        let ratio;
                        if (this.userMedia) {
                            const userMediaVideoWidth = this.userMedia.getVideoWidth();
                            const userMediaVideoHeight = this.userMedia.getVideoHeight();
                            if (!userMediaVideoWidth || userMediaVideoWidth < 1) ratio = this.visuals.getRatio();
                            else if (userMediaVideoHeight) ratio = userMediaVideoHeight / userMediaVideoWidth;
                        } else ratio = getRatio(this.options);
                        return ratio;
                    }
                    calculateWidth(responsive) {
                        let videoHeight;
                        if (this.userMedia) videoHeight = this.userMedia.getVideoHeight();
                        else if (this.recorderElement) videoHeight = this.recorderElement.videoHeight || this.recorderElement.height;
                        return dimensions_calculateWidth(responsive, videoHeight, this.options, this.getRatio());
                    }
                    calculateHeight(responsive) {
                        let videoWidth;
                        let target;
                        if (this.userMedia) {
                            target = "userMedia";
                            videoWidth = this.userMedia.getVideoWidth();
                        } else if (this.recorderElement) {
                            target = "recorderElement";
                            videoWidth = this.recorderElement.videoWidth || this.recorderElement.width;
                        }
                        return dimensions_calculateHeight(responsive, videoWidth, this.options, target, this.getRatio(), this.recorderElement);
                    }
                    getRawVisualUserMedia() {
                        return this.recorderElement;
                    }
                    isConnected() {
                        return this.connected;
                    }
                    isConnecting() {
                        return this.connecting;
                    }
                    limitWidth(width) {
                        return this.visuals.limitWidth(width);
                    }
                    limitHeight(height) {
                        return this.visuals.limitHeight(height);
                    }
                    isUserMediaLoaded() {
                        return this.userMediaLoaded;
                    }
                }
                const visuals_recorder = Recorder;
                class Replay extends util_Despot {
                    visuals;
                    built = false;
                    replayElement;
                    videomail;
                    constructor(visuals, options){
                        super("Replay", options);
                        this.visuals = visuals;
                    }
                    buildElement(replayParentElement) {
                        const videoSelector = `video.${this.options.selectors.replayClass}`;
                        this.replayElement = replayParentElement.querySelector(videoSelector);
                        if (!this.replayElement) {
                            this.replayElement = document.createElement("video");
                            this.replayElement.classList.add(this.options.selectors.replayClass);
                            replayParentElement.appendChild(this.replayElement);
                        }
                    }
                    isStandalone() {
                        return "HTMLDivElement" === this.visuals.constructor.name;
                    }
                    copyAttributes(newVideomail) {
                        let attributeContainer;
                        Object.keys(newVideomail).forEach((attribute)=>{
                            attributeContainer = this.replayElement?.parentNode?.querySelector(`.${attribute}`);
                            if (attributeContainer) {
                                const empty = !attributeContainer.innerHTML || attributeContainer.innerHTML.length < 1;
                                if (empty) attributeContainer.innerHTML = newVideomail[attribute];
                            }
                        });
                    }
                    correctDimensions(responsive, videoWidth, videoHeight) {
                        if (!this.replayElement) throw new Error("There is no replay element to correct dimensions for.");
                        let height;
                        let width;
                        let ratio;
                        if (this.videomail) {
                            width = this.videomail.width;
                            height = this.videomail.height;
                            if (width) ratio = height / width;
                        }
                        if (!width) width = dimensions_calculateWidth(responsive, videoHeight, this.options, ratio);
                        if (!height) {
                            let element = this.visuals.getElement();
                            let target;
                            if (element) target = "visualsElement";
                            else {
                                element = document.body;
                                target = "document body";
                            }
                            height = dimensions_calculateHeight(responsive, videoWidth, this.options, target, ratio, element);
                        }
                        if (width > 0) this.replayElement.style.width = `${width}px`;
                        else this.replayElement.style.width = "auto";
                        if (height > 0) this.replayElement.style.height = `${height}px`;
                        else this.replayElement.style.height = "auto";
                    }
                    setVideomail(newVideomail, playerOnly = false) {
                        this.videomail = newVideomail;
                        if (this.videomail.mp4) this.setMp4Source(this.videomail.mp4);
                        if (this.videomail.webm) this.setWebMSource(this.videomail.webm);
                        if (this.videomail.vtt) this.setTrackSource(this.videomail.vtt);
                        if (this.videomail.poster) this.replayElement?.setAttribute("poster", this.videomail.poster);
                        this.copyAttributes(this.videomail);
                        const sampleRate = this.videomail.recordingStats?.sampleRate;
                        const width = this.videomail.width;
                        const height = this.videomail.height;
                        const hasAudio = void 0 !== sampleRate ? sampleRate > 0 : false;
                        this.show(width, height, hasAudio, playerOnly);
                    }
                    show(videomailWidth, videomailHeight, hasAudio, playerOnly = false) {
                        if (!this.replayElement) return;
                        if (this.isShown()) return;
                        this.options.logger.debug(`Replay: show(playerOnly=${playerOnly})`);
                        const hasMedia = Boolean(this.videomail?.webm) || Boolean(this.videomail?.mp4) || Boolean(this.videomail?.poster);
                        if (hasMedia) this.correctDimensions(true, videomailWidth ?? this.replayElement.videoWidth, videomailHeight ?? this.replayElement.videoHeight);
                        if (playerOnly) {
                            if (hasMedia) hidden_default()(this.replayElement, false);
                        } else hidden_default()(this.replayElement, false);
                        if (playerOnly) hidden_default()(this.replayElement.parentNode, false);
                        else this.visuals.show();
                        if (hasAudio) this.replayElement.setAttribute("volume", "1");
                        else if (!isAudioEnabled(this.options)) this.replayElement.setAttribute("muted", "true");
                        this.replayElement.load();
                        if (this.videomail) this.replayElement.addEventListener("canplaythrough", ()=>{
                            this.emit("REPLAY_SHOWN");
                        }, {
                            once: true
                        });
                        else this.replayElement.addEventListener("canplaythrough", ()=>{
                            this.emit("PREVIEW_SHOWN");
                        }, {
                            once: true
                        });
                    }
                    build(replayParentElement) {
                        this.options.logger.debug(`Replay: build (replayParentElement="${util_pretty(replayParentElement)}")`);
                        this.replayElement = this.visuals.getElement()?.querySelector(`video.${this.options.selectors.replayClass}`);
                        if (!this.replayElement) this.buildElement(replayParentElement);
                        if (!this.replayElement) throw new Error("There is no replayElement to build on");
                        this.hide();
                        this.replayElement.setAttribute("autoplay", "true");
                        this.replayElement.setAttribute("autostart", "true");
                        this.replayElement.setAttribute("autobuffer", "true");
                        this.replayElement.setAttribute("playsinline", "true");
                        this.replayElement.setAttribute("webkit-playsinline", "webkit-playsinline");
                        this.replayElement.setAttribute("controls", "controls");
                        this.replayElement.setAttribute("preload", "auto");
                        if (!this.built) {
                            if (!this.isStandalone()) this.on("PREVIEW", (params)=>{
                                this.show(params?.width, params?.height, params?.hasAudio);
                            });
                            this.replayElement.addEventListener("touchstart", (e)=>{
                                e.preventDefault();
                                if (this.replayElement?.paused) this.replayElement.play().catch((err)=>{
                                    throw err;
                                });
                                else this.replayElement?.pause();
                            }, {
                                passive: true
                            });
                            this.replayElement.addEventListener("click", (e)=>{
                                e.preventDefault();
                                if (this.replayElement?.paused) this.replayElement.play().catch((err)=>{
                                    throw err;
                                });
                                else this.replayElement?.pause();
                            });
                        }
                        this.built = true;
                        this.options.logger.debug("Replay: built.");
                    }
                    unload(params) {
                        this.options.logger.debug("Replay: unload()");
                        util_Despot.removeAllListeners();
                        if (params?.startingOver) this.hide();
                        else {
                            this.replayElement?.remove();
                            this.replayElement = void 0;
                        }
                        this.videomail = void 0;
                        this.built = false;
                    }
                    getVideoSource(type) {
                        if (!this.replayElement) return;
                        const sources = this.replayElement.getElementsByTagName("source");
                        const l = sources.length;
                        const videoType = `video/${type}`;
                        let source;
                        if (l) {
                            let i;
                            for(i = 0; i < l && !source; i++)if (sources[i]?.getAttribute("type") === videoType) source = sources[i];
                        }
                        return source;
                    }
                    setTrackSource(src) {
                        if (!this.replayElement) return;
                        const tracks = this.replayElement.getElementsByTagName("track");
                        const firstTrack = tracks[0];
                        if (firstTrack) if (src) firstTrack.setAttribute("src", src);
                        else this.replayElement.removeChild(firstTrack);
                        else {
                            const track = document.createElement("track");
                            track.setAttribute("src", src);
                            track.src = src;
                            track.kind = "captions";
                            track.default = true;
                            this.replayElement.appendChild(track);
                            this.replayElement.setAttribute("crossorigin", "anonymous");
                        }
                    }
                    setVideoSource(type, src, bustCache) {
                        if (!this.replayElement) throw new Error("There is no replay element for appending a video source");
                        let source = this.getVideoSource(type);
                        let url = src;
                        if (url && bustCache) url += `?${Date.now()}`;
                        if (source) if (src) source.setAttribute("src", src);
                        else this.replayElement.removeChild(source);
                        else if (src) {
                            const { fps } = this.options.video;
                            const t = 1 / fps * 2;
                            source = document.createElement("source");
                            source.src = `${url}#t=${t}`;
                            source.type = `video/${type}`;
                            this.replayElement.appendChild(source);
                        }
                    }
                    setMp4Source(src, bustCache) {
                        this.setVideoSource(VideoType_VideoType.MP4, src, bustCache);
                    }
                    setWebMSource(src, bustCache) {
                        this.setVideoSource(VideoType_VideoType.WebM, src, bustCache);
                    }
                    getVideoType() {
                        if (!this.replayElement) return;
                        return util_getBrowser(this.options).getVideoType(this.replayElement);
                    }
                    pause(cb) {
                        window.setTimeout(()=>{
                            try {
                                if (this.replayElement) this.replayElement.pause();
                            } catch (exc) {
                                this.options.logger.warn(exc);
                            }
                            cb();
                        }, 15);
                    }
                    reset(cb) {
                        this.pause(()=>{
                            if (this.replayElement) {
                                this.setMp4Source(void 0);
                                this.setWebMSource(void 0);
                            }
                            this.videomail = void 0;
                            cb?.();
                        });
                    }
                    hide() {
                        if (this.isStandalone()) hidden_default()(this.visuals, true);
                        else if (this.replayElement) {
                            hidden_default()(this.replayElement, true);
                            hidden_default()(this.replayElement.parentNode, true);
                        }
                    }
                    isShown() {
                        if (!this.replayElement) return false;
                        return !hidden_default()(this.replayElement) && !this.visuals.isHidden();
                    }
                    getVisuals() {
                        return this.visuals;
                    }
                    getElement() {
                        return this.replayElement;
                    }
                }
                const visuals_replay = Replay;
                class Visuals extends util_Despot {
                    container;
                    replay;
                    recorder;
                    recorderInsides;
                    notifier;
                    visualsElement;
                    built = false;
                    constructor(container, options){
                        super("Visuals", options);
                        this.container = container;
                        this.replay = new visuals_replay(this, options);
                        this.recorder = new visuals_recorder(this, this.replay, options);
                        this.recorderInsides = new recorderInsides(this, options);
                        this.notifier = new notifier(this, options);
                    }
                    buildNoScriptTag() {
                        let noScriptElement = this.container.querySelector("noscript");
                        if (noScriptElement) {
                            noScriptElement = document.createElement("noscript");
                            noScriptElement.innerHTML = "Please enable Javascript";
                            this.visualsElement?.appendChild(noScriptElement);
                        }
                    }
                    buildChildren(playerOnly = false, visualsElement) {
                        if (!visualsElement) throw new Error("Unable to build children without a visuals element");
                        this.options.logger.debug(`Visuals: buildChildren (playerOnly = ${playerOnly}, visualsElement="${util_pretty(visualsElement)}"})`);
                        this.buildNoScriptTag();
                        if (!playerOnly) {
                            this.notifier.build();
                            this.recorderInsides.build();
                        }
                        this.replay.build(visualsElement);
                    }
                    initEvents(playerOnly = false) {
                        if (!playerOnly) {
                            this.options.logger.debug(`Visuals: initEvents (playerOnly = ${playerOnly})`);
                            this.on("USER_MEDIA_READY", ()=>{
                                this.built = true;
                                this.endWaiting();
                                this.container.enableForm(false);
                            });
                            this.on("PREVIEW", ()=>{
                                this.endWaiting();
                            });
                            this.on("BLOCKING", ()=>{
                                if (this.options.adjustFormOnBrowserError) this.container.disableForm(true);
                            });
                            this.on("PREVIEW_SHOWN", ()=>{
                                this.container.validate(void 0, true);
                            });
                            this.on("LOADED_META_DATA", ()=>{
                                this.correctDimensions();
                            });
                            this.on("ERROR", ()=>{
                                if (util_getBrowser(this.options).isMobile()) this.removeDimensions();
                            });
                        }
                    }
                    correctDimensions() {
                        if (this.options.video.stretch) this.removeDimensions();
                        else if (this.visualsElement) {
                            this.visualsElement.style.width = `${this.getRecorderWidth(true)}px`;
                            this.visualsElement.style.height = `${this.getRecorderHeight(true)}px`;
                        }
                    }
                    removeDimensions() {
                        if (!this.visualsElement) return;
                        this.visualsElement.style.width = "auto";
                        this.visualsElement.style.height = "auto";
                    }
                    getRatio() {
                        if (this.visualsElement?.clientWidth) return this.visualsElement.clientHeight / this.visualsElement.clientWidth;
                        return 0;
                    }
                    isRecordable() {
                        return !this.isNotifying() && !this.replay.isShown() && !this.isCountingDown();
                    }
                    isCountingDown() {
                        return this.recorderInsides.isCountingDown();
                    }
                    build(playerOnly = false, parentElement) {
                        this.options.logger.debug(`Visuals: build (playerOnly = ${playerOnly}${parentElement ? `, parentElement="${util_pretty(parentElement)}"` : ""})`);
                        if (parentElement) this.visualsElement = parentElement.querySelector(`.${this.options.selectors.visualsClass}`);
                        else this.visualsElement = this.container.querySelector(`.${this.options.selectors.visualsClass}`);
                        if (!this.visualsElement) if (playerOnly && parentElement) this.visualsElement = parentElement;
                        else {
                            this.visualsElement = document.createElement("div");
                            this.visualsElement.classList.add(this.options.selectors.visualsClass);
                            const buttonsElement = this.container.querySelector(`.${this.options.selectors.buttonsClass}`);
                            if (buttonsElement && !this.container.isOutsideElementOf(buttonsElement)) this.container.insertBefore(this.visualsElement, buttonsElement);
                            else this.container.appendChild(this.visualsElement);
                        }
                        this.visualsElement.classList.add("visuals");
                        this.correctDimensions();
                        if (!this.built) this.initEvents(playerOnly);
                        this.buildChildren(playerOnly, this.visualsElement);
                        this.built = true;
                    }
                    appendChild(child) {
                        this.visualsElement?.appendChild(child);
                    }
                    removeChild(child) {
                        this.visualsElement?.removeChild(child);
                    }
                    reset() {
                        this.endWaiting();
                        this.recorder.reset();
                    }
                    beginWaiting() {
                        this.container.beginWaiting();
                    }
                    endWaiting() {
                        this.container.endWaiting();
                    }
                    stop(params) {
                        this.recorder.stop(params);
                        this.recorderInsides.hidePause();
                    }
                    back(keepHidden = false, cb) {
                        this.options.logger.debug(`Visuals: back(keepHidden = ${keepHidden})`);
                        this.replay.hide();
                        this.notifier.hide();
                        if (keepHidden) {
                            this.recorder.hide();
                            cb?.();
                        } else this.recorder.back(cb);
                    }
                    recordAgain() {
                        this.back(false, ()=>{
                            if (this.options.loadUserMediaOnRecord) this.once("SERVER_READY", ()=>{
                                this.recorder.record();
                            });
                            else this.once("USER_MEDIA_READY", ()=>{
                                this.recorder.record();
                            });
                        });
                    }
                    unload(params) {
                        if (!this.built) return;
                        const e = params?.e;
                        this.options.logger.debug(`Visuals: unload(${e ? util_pretty(e) : ""})`);
                        this.recorder.unload(params);
                        this.recorderInsides.unload();
                        this.replay.unload(params);
                        e instanceof Error || this.hide();
                        this.built = false;
                    }
                    isNotifying() {
                        return this.notifier.isVisible();
                    }
                    pause(params) {
                        this.recorder.pause(params);
                        this.recorderInsides.showPause();
                    }
                    resume() {
                        if (this.recorderInsides.isCountingDown()) this.recorderInsides.resumeCountdown();
                        else this.recorder.resume();
                        this.recorderInsides.hidePause();
                    }
                    pauseOrResume() {
                        if (this.isRecordable()) {
                            if (this.isRecording()) this.pause();
                            else if (this.recorder.isPaused()) this.resume();
                            else if (this.recorder.isReady()) this.recorder.record();
                        }
                    }
                    recordOrStop() {
                        if (this.isRecordable()) {
                            if (this.isRecording()) this.stop();
                            else if (this.recorder.isReady()) this.recorder.record();
                        }
                    }
                    getRecorder() {
                        return this.recorder;
                    }
                    validate() {
                        return this.recorder.validate() && this.isReplayShown();
                    }
                    getRecordingStats() {
                        return this.recorder.getRecordingStats();
                    }
                    getAudioSampleRate() {
                        return this.recorder.getAudioSampleRate();
                    }
                    isPaused() {
                        return this.recorder.isPaused();
                    }
                    error(err) {
                        this.notifier.error(err);
                    }
                    hide() {
                        if (this.visualsElement) {
                            hidden_default()(this.visualsElement, true);
                            this.emit("HIDE");
                        }
                    }
                    isHidden() {
                        if (!this.built) return true;
                        if (this.visualsElement) return hidden_default()(this.visualsElement);
                    }
                    showVisuals() {
                        hidden_default()(this.visualsElement, false);
                    }
                    show(params) {
                        if (!params?.playerOnly) if (this.isReplayShown()) {
                            if (params?.goBack) this.recorder.show();
                        } else this.recorder.build();
                        this.showVisuals();
                    }
                    showReplayOnly() {
                        this.show({
                            playerOnly: true
                        });
                        this.recorder.hide();
                        this.notifier.hide();
                    }
                    isRecorderUnloaded() {
                        return this.recorder.isUnloaded();
                    }
                    isConnecting() {
                        return this.recorder.isConnecting();
                    }
                    getRecorderWidth(responsive) {
                        return this.recorder.getRecorderWidth(responsive);
                    }
                    getRecorderHeight(responsive, useBoundingClientRect = false) {
                        return this.recorder.getRecorderHeight(responsive, useBoundingClientRect);
                    }
                    limitWidth(width) {
                        return this.container.limitWidth(width);
                    }
                    limitHeight(height) {
                        return this.container.limitHeight(height);
                    }
                    getReplay() {
                        return this.replay;
                    }
                    getBoundingClientRect() {
                        return this.visualsElement?.getBoundingClientRect();
                    }
                    checkTimer(elapsedTime) {
                        this.recorderInsides.checkTimer(elapsedTime);
                    }
                    isNotifierBuilt() {
                        return this.notifier.isBuilt();
                    }
                    isReplayShown() {
                        return this.replay.isShown();
                    }
                    hideReplay() {
                        this.replay.hide();
                    }
                    hideRecorder() {
                        this.recorder.hide();
                    }
                    isRecording() {
                        return this.recorder.isRecording();
                    }
                    isUserMediaLoaded() {
                        return this.recorder.isUserMediaLoaded();
                    }
                    isConnected() {
                        return this.recorder.isConnected();
                    }
                    record() {
                        if (this.options.video.countdown) {
                            this.emit("COUNTDOWN");
                            this.recorderInsides.startCountdown(this.recorder.record.bind(this.recorder));
                        } else this.recorder.record();
                    }
                    getElement() {
                        return this.visualsElement;
                    }
                }
                const wrappers_visuals = Visuals;
                class Container extends util_Despot {
                    visibility = document_visibility_default()();
                    htmlElement = document.querySelector("html");
                    visuals;
                    buttons;
                    resource;
                    form;
                    hasError = false;
                    submitted = false;
                    lastValidation = false;
                    containerElement;
                    built = false;
                    constructor(options){
                        super("Container", options);
                        this.visuals = new wrappers_visuals(this, options);
                        this.buttons = new buttons(this, options);
                        this.resource = new src_resource(options);
                    }
                    buildChildren(playerOnly = false, parentElement) {
                        this.options.logger.debug(`Container: buildChildren (playerOnly = ${playerOnly}${parentElement ? `, parentElement="${util_pretty(parentElement)}"` : ""})`);
                        if (this.containerElement) this.containerElement.classList.add(this.options.selectors.containerClass);
                        if (!playerOnly) this.buttons.build();
                        this.visuals.build(playerOnly, parentElement);
                    }
                    build(buildOptions) {
                        this.options.logger.debug(`Container: build (${buildOptions ? util_pretty(buildOptions) : ""})`);
                        try {
                            const containerId = this.options.selectors.containerId;
                            if (containerId) this.containerElement = document.getElementById(containerId);
                            else this.containerElement = document.createElement("div");
                            this.containerElement?.classList.add(this.options.selectors.containerClass);
                            let replayParentElement = null;
                            if (buildOptions?.replayParentElement) replayParentElement = buildOptions.replayParentElement;
                            else if (buildOptions?.replayParentElementId) replayParentElement = document.getElementById(buildOptions.replayParentElementId);
                            if (!this.containerElement && replayParentElement) {
                                if (replayParentElement.classList.contains(this.options.selectors.containerClass)) this.containerElement = replayParentElement;
                            }
                            if (!this.built) this.initEvents(buildOptions?.playerOnly);
                            if (!buildOptions?.playerOnly) this.correctDimensions();
                            this.buildForm();
                            let parentElement;
                            parentElement = buildOptions?.playerOnly ? replayParentElement ?? this.containerElement : this.containerElement;
                            this.buildChildren(buildOptions?.playerOnly, parentElement);
                            if (this.hasError) this.options.logger.debug("Container: building failed due to an error.");
                            else {
                                this.options.logger.debug("Container: built.");
                                this.built = true;
                                this.emit("BUILT");
                            }
                        } catch (exc) {
                            this.emit("ERROR", {
                                exc
                            });
                        }
                        return this.containerElement;
                    }
                    findParentFormElement() {
                        if (!this.containerElement) return;
                        return this.containerElement.closest("form");
                    }
                    getFormElement() {
                        let formElement;
                        if (this.containerElement && "FORM" === this.containerElement.tagName) formElement = this.containerElement;
                        else if (this.options.selectors.formId) {
                            formElement = document.querySelector(`#${this.options.selectors.formId}`);
                            if (formElement && "FORM" !== formElement.tagName) throw new Error(`HTML element with ID ${this.options.selectors.formId} is not a form.`);
                        } else formElement = this.findParentFormElement();
                        return formElement;
                    }
                    buildForm() {
                        if (this.form) return;
                        const formElement = this.getFormElement();
                        if (formElement) {
                            this.form = new wrappers_form(this, formElement, this.options);
                            const submitButton = this.form.findSubmitButton();
                            if (submitButton) this.buttons.setSubmitButton(submitButton);
                            this.form.build();
                        }
                    }
                    processError(params) {
                        this.hasError = true;
                        if (params.err?.stack) this.options.logger.error(params.err.stack);
                        else if (params.err?.message) this.options.logger.error(params.err.message);
                        else if (params.exc) if (params.exc instanceof Error) {
                            if (params.exc.stack) this.options.logger.error(params.exc.stack);
                            else if (params.exc.message) this.options.logger.error(params.exc.message);
                        } else this.options.logger.error(params.exc);
                        if (this.options.displayErrors && params.err) this.visuals.error(params.err);
                        else this.visuals.reset();
                    }
                    initEvents(playerOnly = false) {
                        this.options.logger.debug(`Container: initEvents (playerOnly = ${playerOnly})`);
                        if (this.options.enableAutoUnload) window.addEventListener("beforeunload", (e)=>{
                            this.unload({
                                e
                            });
                        }, {
                            once: true
                        });
                        if (!playerOnly) this.visibility.onChange((visible)=>{
                            if (this.built) if (visible) {
                                if (isAutoPauseEnabled(this.options) && this.isCountingDown()) this.resume();
                                this.emit("VISIBLE");
                            } else {
                                if (isAutoPauseEnabled(this.options) && (this.isCountingDown() || this.isRecording())) this.pause();
                                this.emit("INVISIBLE");
                            }
                        });
                        if (this.options.enableSpace) {
                            if (!playerOnly) window.addEventListener("keydown", (e)=>{
                                const element = e.target;
                                const tagName = element.tagName;
                                const isEditable = element.isContentEditable || "true" === element.contentEditable;
                                if (!isEditable && tagName && "INPUT" !== tagName.toUpperCase() && "TEXTAREA" !== tagName.toUpperCase()) {
                                    const code = e.code;
                                    if ("Space" === code) {
                                        e.preventDefault();
                                        if (this.options.enablePause) this.visuals.pauseOrResume();
                                        else this.visuals.recordOrStop();
                                    }
                                }
                            });
                        }
                        this.on("ERROR", (params)=>{
                            this.processError(params);
                            this.endWaiting();
                            const browser = util_getBrowser(this.options);
                            if (browser.isMobile()) this.removeDimensions();
                        });
                        if (!playerOnly) this.on("LOADED_META_DATA", ()=>{
                            this.correctDimensions();
                        });
                    }
                    correctDimensions() {
                        if (this.options.video.stretch) this.removeDimensions();
                        else if (this.containerElement) {
                            const width = this.visuals.getRecorderWidth(true);
                            if (width) this.containerElement.style.width = `${width}px`;
                        }
                    }
                    removeDimensions() {
                        if (!this.containerElement) return;
                        this.containerElement.style.width = "auto";
                    }
                    unloadChildren(params) {
                        this.visuals.unload(params);
                        this.buttons.unload();
                        if (this.form) {
                            this.form.unload();
                            this.form = void 0;
                        }
                        this.endWaiting();
                    }
                    hideMySelf() {
                        hidden_default()(this.containerElement, true);
                    }
                    async submitVideomail(formInputs, method) {
                        const videomailFormData = this.form?.transformFormData(formInputs);
                        if (!videomailFormData) throw new Error("No videomail form data defined");
                        if ("post" === method) {
                            videomailFormData.recordingStats = this.visuals.getRecordingStats();
                            videomailFormData.width = this.visuals.getRecorderWidth(true);
                            videomailFormData.height = this.visuals.getRecorderHeight(true);
                            return await this.resource.post(videomailFormData);
                        }
                        if ("put" === method) return await this.resource.put(videomailFormData);
                        throw error_createError({
                            message: `Unsupported form method ${method}, unable to submit videomail.`,
                            options: this.options
                        });
                    }
                    limitWidth(width) {
                        if (!this.containerElement) return;
                        return limitWidth(this.containerElement, this.options, width);
                    }
                    limitHeight(height) {
                        return dimensions_limitHeight(height, this.options, "containers limitHeight fn");
                    }
                    areVisualsHidden() {
                        return this.visuals.isHidden();
                    }
                    hasElement() {
                        return Boolean(this.containerElement);
                    }
                    getSubmitButton() {
                        return this.buttons.getSubmitButton();
                    }
                    querySelector(selector) {
                        if (!this.containerElement) return;
                        return this.containerElement.querySelector(selector);
                    }
                    beginWaiting() {
                        this.htmlElement?.classList.add("wait");
                    }
                    endWaiting() {
                        this.htmlElement?.classList.remove("wait");
                    }
                    appendChild(child) {
                        if (!this.containerElement || this.containerElement === child) return;
                        this.containerElement.appendChild(child);
                    }
                    insertBefore(child, reference) {
                        if (!this.containerElement) return;
                        this.containerElement.insertBefore(child, reference);
                    }
                    unload(params) {
                        try {
                            if (!this.built) return;
                            const e = params?.e;
                            this.options.logger.debug(`Container: unload(${e ? util_pretty(e) : ""})`);
                            this.emit("UNLOADING");
                            this.unloadChildren(params);
                            this.hide();
                        } catch (exc) {
                            this.emit("ERROR", {
                                exc
                            });
                        } finally{
                            util_Despot.removeAllListeners();
                            this.built = this.submitted = false;
                        }
                    }
                    show(params) {
                        if (!this.containerElement) throw error_createError({
                            message: "No container element exists.",
                            options: this.options
                        });
                        hidden_default()(this.containerElement, false);
                        this.visuals.show(params);
                        if (!this.hasError) {
                            const paused = this.isPaused();
                            if (paused) this.buttons.adjustButtonsForPause();
                            this.buttons.show();
                            if (this.isReplayShown()) this.emit("PREVIEW");
                            else this.emit("FORM_READY", {
                                paused
                            });
                        }
                        return this.containerElement;
                    }
                    hide() {
                        this.options.logger.debug("Container: hide()");
                        this.hasError = false;
                        if (this.isRecording()) this.pause();
                        this.visuals.hide();
                        if (this.submitted) {
                            this.buttons.hide();
                            this.hideMySelf();
                        }
                    }
                    startOver(params) {
                        try {
                            const keepHidden = params?.keepHidden;
                            this.options.logger.debug(`Container: startOver(keepHidden = ${keepHidden})`);
                            this.submitted = false;
                            const replay = this.getReplay();
                            replay.hide();
                            replay.reset();
                            this.build();
                            this.emit("STARTING_OVER");
                            this.visuals.back(keepHidden, ()=>{
                                this.enableForm(true);
                                keepHidden || this.show();
                            });
                        } catch (exc) {
                            this.emit("ERROR", {
                                exc
                            });
                        }
                    }
                    showReplayOnly() {
                        this.hasError = false;
                        if (this.isRecording()) this.pause();
                        this.visuals.showReplayOnly();
                        if (this.submitted) this.buttons.hide();
                    }
                    isNotifying() {
                        return this.visuals.isNotifying();
                    }
                    isPaused() {
                        return this.visuals.isPaused();
                    }
                    pause(params) {
                        this.visuals.pause(params);
                    }
                    validate(event, force = false) {
                        let runValidation = true;
                        let valid = true;
                        if (this.options.enableAutoValidation) {
                            if (force) runValidation = force;
                            else if (this.isNotifying()) runValidation = false;
                            else if (this.visuals.isConnected()) runValidation = this.visuals.isUserMediaLoaded() ?? this.visuals.isReplayShown();
                            else if (this.visuals.isConnecting()) runValidation = false;
                        } else {
                            runValidation = false;
                            this.lastValidation = true;
                        }
                        if (runValidation) {
                            const targetName = event?.target?.name;
                            if (targetName) this.emit("VALIDATING", {
                                targetName
                            });
                            else if (event) this.emit("VALIDATING", {
                                event
                            });
                            else this.emit("VALIDATING");
                            const visualsValid = this.visuals.validate() && this.buttons.isRecordAgainButtonEnabled();
                            let whyInvalid;
                            let invalidData;
                            if (this.form) {
                                const invalidInput = this.form.getInvalidElement();
                                if (invalidInput) {
                                    const name = invalidInput.getAttribute("name");
                                    valid = false;
                                    if (name) {
                                        whyInvalid = `Input "${name}" seems wrong \u{1F914}`;
                                        invalidData = {
                                            [name]: invalidInput.getAttribute("value")
                                        };
                                    }
                                } else if (!this.areVisualsHidden() && !visualsValid) {
                                    if (this.buttonsAreReady() || this.isRecording() || this.isPaused() || this.isCountingDown()) {
                                        valid = false;
                                        whyInvalid = "Don't forget to record a video \uD83D\uDE09";
                                        invalidData = {
                                            key: void 0
                                        };
                                    }
                                }
                                if (valid) {
                                    const recipients = this.form.getRecipients();
                                    const toIsConfigured = "to" in recipients;
                                    const ccIsConfigured = "cc" in recipients;
                                    const bccIsConfigured = "bcc" in recipients;
                                    const hasTo = recipients.to && recipients.to.length > 0;
                                    const hasCc = recipients.cc && recipients.cc.length > 0;
                                    const hasBcc = recipients.bcc && recipients.bcc.length > 0;
                                    if (toIsConfigured) {
                                        if (!hasTo) if (ccIsConfigured && bccIsConfigured) {
                                            if (!hasCc && !hasBcc) valid = false;
                                        } else if (ccIsConfigured) {
                                            if (!hasCc) valid = false;
                                        } else if (bccIsConfigured) {
                                            if (!hasBcc) valid = false;
                                        } else valid = false;
                                    } else if (ccIsConfigured) {
                                        if (!hasCc) {
                                            if (bccIsConfigured && !hasBcc) valid = false;
                                        }
                                    }
                                    if (!valid) whyInvalid = "At least one recipient is required";
                                }
                            } else valid = visualsValid;
                            if (valid) this.emit("VALID");
                            else if (invalidData) this.emit("INVALID", {
                                whyInvalid,
                                invalidData
                            });
                            else this.emit("INVALID", {
                                whyInvalid
                            });
                            this.lastValidation = valid;
                        }
                        return valid;
                    }
                    disableForm(buttonsToo) {
                        this.form?.disable(buttonsToo);
                    }
                    enableForm(buttonsToo) {
                        this.form?.enable(buttonsToo);
                    }
                    hasForm() {
                        return Boolean(this.form);
                    }
                    buttonsAreReady() {
                        return this.buttons.isReady();
                    }
                    async submitAll(formData, method, url) {
                        let response;
                        try {
                            const hasVideomailKey = Boolean(formData[this.options.selectors.keyInputName]);
                            if (!hasVideomailKey && !this.options.enableAutoSubmission) return;
                            const output = [
                                method,
                                url
                            ].filter(Boolean).join(": ");
                            this.options.logger.debug(`Container: submitAll(${output})`);
                            this.beginWaiting();
                            this.disableForm(true);
                            this.emit("SUBMITTING");
                            if (hasVideomailKey) {
                                response = await this.submitVideomail(formData, method);
                                this.submitted = true;
                                this.emit("SUBMITTED", {
                                    videomail: response.body.videomail,
                                    response
                                });
                            } else {
                                response = await this.resource.form(formData, url);
                                this.submitted = true;
                                this.emit("SUBMITTED", {
                                    videomail: response.body,
                                    response
                                });
                            }
                        } catch (exc) {
                            const err = error_createError({
                                exc,
                                options: this.options
                            });
                            this.emit("ERROR", {
                                err
                            });
                        } finally{
                            if (response?.text && "text/html" === response.type) document.body.innerHTML = response.text;
                            this.endWaiting();
                        }
                    }
                    isBuilt() {
                        return this.built;
                    }
                    isReplayShown() {
                        return this.visuals.isReplayShown();
                    }
                    isDirty() {
                        let isDirty = false;
                        if (this.form) {
                            if (this.visuals.isRecorderUnloaded()) isDirty = false;
                            else if (this.submitted) isDirty = false;
                            else if (this.isReplayShown() || this.isPaused()) isDirty = true;
                        }
                        return isDirty;
                    }
                    getReplay() {
                        return this.visuals.getReplay();
                    }
                    isOutsideElementOf(element) {
                        return element.parentNode !== this.containerElement && element !== this.containerElement;
                    }
                    loadForm(videomail) {
                        if (this.form) {
                            this.form.loadVideomail(videomail);
                            this.validate();
                        }
                    }
                    enableAudio() {
                        this.options = setAudioEnabled(true, this.options);
                        this.emit("ENABLING_AUDIO");
                    }
                    disableAudio() {
                        this.options = setAudioEnabled(false, this.options);
                        this.emit("DISABLING_AUDIO");
                    }
                    async submit() {
                        this.options.logger.debug("Container: submit()");
                        if (this.lastValidation) return await this.form?.doTheSubmit();
                        return false;
                    }
                    isCountingDown() {
                        return this.visuals.isCountingDown();
                    }
                    isRecording() {
                        return this.visuals.isRecording();
                    }
                    record() {
                        this.visuals.record();
                    }
                    resume() {
                        this.visuals.resume();
                    }
                    stop() {
                        this.visuals.stop();
                    }
                    recordAgain() {
                        this.visuals.recordAgain();
                    }
                }
                const wrappers_container = Container;
                class VideomailClient extends util_Despot {
                    container;
                    static ENC_TYPE_APP_JSON = constants["public"].ENC_TYPE_APP_JSON;
                    static ENC_TYPE_FORM = constants["public"].ENC_TYPE_FORM;
                    constructor(options = {}){
                        super("VideomailClient", mergeWithDefaultOptions(options));
                        this.validateOptions();
                        util_Despot.removeAllListeners();
                        this.container = new wrappers_container(this.options);
                    }
                    validateOptions() {
                        const width = this.options.video.width;
                        if (void 0 !== width && width % 2 !== 0) throw error_createError({
                            message: "Width must be divisible by two.",
                            options: this.options
                        });
                        const height = this.options.video.height;
                        if (void 0 !== height && height % 2 !== 0) throw error_createError({
                            message: "Height must be divisible by two.",
                            options: this.options
                        });
                    }
                    build() {
                        if (!this.container.isBuilt()) {
                            this.options.logger.debug("Client: build()");
                            return this.container.build();
                        }
                    }
                    show(params) {
                        this.build();
                        return this.container.show(params);
                    }
                    startOver(params) {
                        this.unload(true);
                        this.container.startOver(params);
                    }
                    unload(startingOver = false) {
                        this.container.unload({
                            startingOver
                        });
                    }
                    replay(videomail, replayParentElementId) {
                        if (this.container.isBuilt()) this.container.unload();
                        this.container.build({
                            playerOnly: true,
                            replayParentElementId
                        });
                        this.container.buildForm();
                        this.container.loadForm(videomail);
                        this.once("REPLAY_SHOWN", ()=>{
                            this.container.showReplayOnly();
                        });
                        const replay = this.container.getReplay();
                        replay.setVideomail(videomail, true);
                        const playerElement = replay.getElement();
                        if (!playerElement) throw new Error("Failed to build a player element");
                        return playerElement;
                    }
                    hide() {
                        this.container.hide();
                    }
                    async getByAlias(alias) {
                        const resource = new src_resource(this.options);
                        return await resource.getByAlias(alias);
                    }
                    async getByKey(key) {
                        const resource = new src_resource(this.options);
                        return await resource.getByKey(key);
                    }
                    isDirty() {
                        return this.container.isDirty();
                    }
                    isBuilt() {
                        return this.container.isBuilt();
                    }
                    isRecording() {
                        return this.container.isRecording();
                    }
                    submit() {
                        this.container.submit();
                    }
                    record() {
                        this.container.record();
                    }
                    getLogLines() {
                        if (this.options.logger.getLines) return this.options.logger.getLines();
                    }
                }
                const src_client = VideomailClient;
            },
            "?82dc": function() {},
            "?2927": function() {},
            "?7a90": function() {},
            "?aa23": function() {},
            "?9936": function() {},
            "?5f55": function() {}
        };
        var __webpack_module_cache__ = {};
        function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (void 0 !== cachedModule) return cachedModule.exports;
            var module1 = __webpack_module_cache__[moduleId] = {
                id: moduleId,
                exports: {}
            };
            __webpack_modules__[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            return module1.exports;
        }
        __webpack_require__.m = __webpack_modules__;
        (()=>{
            __webpack_require__.n = (module1)=>{
                var getter = module1 && module1.__esModule ? ()=>module1['default'] : ()=>module1;
                __webpack_require__.d(getter, {
                    a: getter
                });
                return getter;
            };
        })();
        (()=>{
            __webpack_require__.d = (exports1, definition)=>{
                for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
                    enumerable: true,
                    get: definition[key]
                });
            };
        })();
        (()=>{
            __webpack_require__.g = (()=>{
                if ('object' == typeof globalThis) return globalThis;
                try {
                    return this || new Function('return this')();
                } catch (e) {
                    if ('object' == typeof window) return window;
                }
            })();
        })();
        (()=>{
            __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
        })();
        (()=>{
            __webpack_require__.r = (exports1)=>{
                if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
                    value: 'Module'
                });
                Object.defineProperty(exports1, '__esModule', {
                    value: true
                });
            };
        })();
        (()=>{
            __webpack_require__.nc = void 0;
        })();
        (()=>{
            var deferred = [];
            __webpack_require__.O = (result, chunkIds, fn, priority)=>{
                if (chunkIds) {
                    priority = priority || 0;
                    for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)deferred[i] = deferred[i - 1];
                    deferred[i] = [
                        chunkIds,
                        fn,
                        priority
                    ];
                    return;
                }
                var notFulfilled = 1 / 0;
                for(var i = 0; i < deferred.length; i++){
                    var [chunkIds, fn, priority] = deferred[i];
                    var fulfilled = true;
                    for(var j = 0; j < chunkIds.length; j++)if ((false & priority || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key)=>__webpack_require__.O[key](chunkIds[j]))) chunkIds.splice(j--, 1);
                    else {
                        fulfilled = false;
                        if (priority < notFulfilled) notFulfilled = priority;
                    }
                    if (fulfilled) {
                        deferred.splice(i--, 1);
                        var r = fn();
                        if (void 0 !== r) result = r;
                    }
                }
                return result;
            };
        })();
        (()=>{
            var installedChunks = {
                410: 0
            };
            __webpack_require__.O.j = (chunkId)=>0 === installedChunks[chunkId];
            var webpackJsonpCallback = (parentChunkLoadingFunction, data)=>{
                var [chunkIds, moreModules, runtime] = data;
                var moduleId, chunkId, i = 0;
                if (chunkIds.some((id)=>0 !== installedChunks[id])) {
                    for(moduleId in moreModules)if (__webpack_require__.o(moreModules, moduleId)) __webpack_require__.m[moduleId] = moreModules[moduleId];
                    if (runtime) var result = runtime(__webpack_require__);
                }
                if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
                for(; i < chunkIds.length; i++){
                    chunkId = chunkIds[i];
                    if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) installedChunks[chunkId][0]();
                    installedChunks[chunkId] = 0;
                }
                return __webpack_require__.O(result);
            };
            var chunkLoadingGlobal = globalThis["webpackChunkVideomailClient"] = globalThis["webpackChunkVideomailClient"] || [];
            chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
            chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
        })();
        var __webpack_exports__ = __webpack_require__.O(void 0, [
            "99"
        ], function() {
            return __webpack_require__("./src/index.ts");
        });
        __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
        return __webpack_exports__;
    })());
