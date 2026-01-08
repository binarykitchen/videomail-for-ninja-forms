(function(root, factory) {
    if ('object' == typeof exports && 'object' == typeof module) module.exports = factory();
    else if ('function' == typeof define && define.amd) define([], factory);
    else if ('object' == typeof exports) exports["VideomailClient"] = factory();
    else root["VideomailClient"] = factory();
})(globalThis, ()=>(()=>{
        var __webpack_modules__ = {
            "./node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[13].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[13].use[2]!./node_modules/stylus-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/styles/main.styl" (module1, __webpack_exports__, __webpack_require__) {
                "use strict";
                __webpack_require__.d(__webpack_exports__, {
                    A: ()=>__rspack_default_export
                });
                var _node_modules_rsbuild_core_compiled_css_loader_noSourceMaps_js__rspack_import_0 = __webpack_require__("./node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js");
                var _node_modules_rsbuild_core_compiled_css_loader_noSourceMaps_js__rspack_import_0_default = /*#__PURE__*/ __webpack_require__.n(_node_modules_rsbuild_core_compiled_css_loader_noSourceMaps_js__rspack_import_0);
                var _node_modules_rsbuild_core_compiled_css_loader_api_js__rspack_import_1 = __webpack_require__("./node_modules/@rsbuild/core/compiled/css-loader/api.js");
                var _node_modules_rsbuild_core_compiled_css_loader_api_js__rspack_import_1_default = /*#__PURE__*/ __webpack_require__.n(_node_modules_rsbuild_core_compiled_css_loader_api_js__rspack_import_1);
                var ___CSS_LOADER_EXPORT___ = _node_modules_rsbuild_core_compiled_css_loader_api_js__rspack_import_1_default()(_node_modules_rsbuild_core_compiled_css_loader_noSourceMaps_js__rspack_import_0_default());
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
                const __rspack_default_export = ___CSS_LOADER_EXPORT___;
            },
            "./node_modules/animitter/index.js" (module1, exports1, __webpack_require__) {
                var EventEmitter = __webpack_require__("./node_modules/events/events.js").EventEmitter, inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js"), raf = __webpack_require__("./node_modules/raf/index.js"), methods;
                var defaultRAFObject = {
                    requestAnimationFrame: raf,
                    cancelAnimationFrame: raf.cancel
                };
                function returnTrue() {
                    return true;
                }
                function makeThrottle(fps) {
                    var delay = 1000 / fps;
                    var lastTime = Date.now();
                    if (fps <= 0 || fps === 1 / 0) return returnTrue;
                    var half = Math.ceil(1000 / 60) / 2;
                    return function() {
                        var now = Date.now();
                        if (now - lastTime < delay - half) return false;
                        lastTime = now;
                        return true;
                    };
                }
                function Animitter(opts) {
                    opts = opts || {};
                    this.__delay = opts.delay || 0;
                    this.fixedDelta = !!opts.fixedDelta;
                    this.frameCount = 0;
                    this.deltaTime = 0;
                    this.elapsedTime = 0;
                    this.__running = false;
                    this.__completed = false;
                    this.setFPS(opts.fps || 1 / 0);
                    this.setRequestAnimationFrameObject(opts.requestAnimationFrameObject || defaultRAFObject);
                }
                inherits(Animitter, EventEmitter);
                function onStart(scope) {
                    var now = Date.now();
                    var rAFID;
                    if (scope.__running) return scope;
                    exports1.running += 1;
                    scope.__running = true;
                    scope.__lastTime = now;
                    scope.deltaTime = 0;
                    scope.emit('start', scope.deltaTime, 0, scope.frameCount);
                    var lastRAFObject = scope.requestAnimationFrameObject;
                    var drawFrame = function() {
                        if (lastRAFObject !== scope.requestAnimationFrameObject) {
                            lastRAFObject = scope.requestAnimationFrameObject;
                            scope.requestAnimationFrameObject.requestAnimationFrame(drawFrame);
                            return;
                        }
                        if (scope.__isReadyForUpdate()) scope.update();
                        if (scope.__running) rAFID = scope.requestAnimationFrameObject.requestAnimationFrame(drawFrame);
                        else scope.requestAnimationFrameObject.cancelAnimationFrame(rAFID);
                    };
                    scope.requestAnimationFrameObject.requestAnimationFrame(drawFrame);
                    return scope;
                }
                methods = {
                    off: EventEmitter.prototype.removeListener,
                    trigger: EventEmitter.prototype.emit,
                    complete: function() {
                        this.stop();
                        this.__completed = true;
                        this.emit('complete', this.frameCount, this.deltaTime);
                        return this;
                    },
                    dispose: function() {
                        this.stop();
                        this.removeAllListeners();
                        return this;
                    },
                    getDeltaTime: function() {
                        return this.deltaTime;
                    },
                    getElapsedTime: function() {
                        return this.elapsedTime;
                    },
                    getFPS: function() {
                        return this.deltaTime > 0 ? 1000 / this.deltaTime : 0;
                    },
                    getFPSLimit: function() {
                        return this.__fps;
                    },
                    getFrameCount: function() {
                        return this.frameCount;
                    },
                    getRequestAnimationFrameObject: function() {
                        return this.requestAnimationFrameObject;
                    },
                    isRunning: function() {
                        return this.__running;
                    },
                    isCompleted: function() {
                        return this.__completed;
                    },
                    reset: function() {
                        this.stop();
                        this.__completed = false;
                        this.__lastTime = 0;
                        this.deltaTime = 0;
                        this.elapsedTime = 0;
                        this.frameCount = 0;
                        this.emit('reset', 0, 0, this.frameCount);
                        return this;
                    },
                    setFPS: function(fps) {
                        this.__fps = fps;
                        this.__isReadyForUpdate = makeThrottle(fps);
                        return this;
                    },
                    setRequestAnimationFrameObject: function(object) {
                        if ('function' != typeof object.requestAnimationFrame || 'function' != typeof object.cancelAnimationFrame) throw new Error("Invalid object provide to `setRequestAnimationFrameObject`");
                        this.requestAnimationFrameObject = object;
                        return this;
                    },
                    start: function() {
                        var self1 = this;
                        if (this.__delay) setTimeout(function() {
                            onStart(self1);
                        }, this.__delay);
                        else onStart(this);
                        return this;
                    },
                    stop: function() {
                        if (this.__running) {
                            this.__running = false;
                            exports1.running -= 1;
                            this.emit('stop', this.deltaTime, this.elapsedTime, this.frameCount);
                        }
                        return this;
                    },
                    update: function() {
                        this.frameCount++;
                        var now = Date.now();
                        this.__lastTime = this.__lastTime || now;
                        this.deltaTime = this.fixedDelta || exports1.globalFixedDelta ? 1000 / Math.min(60, this.__fps) : now - this.__lastTime;
                        this.elapsedTime += this.deltaTime;
                        this.__lastTime = now;
                        this.emit('update', this.deltaTime, this.elapsedTime, this.frameCount);
                        return this;
                    }
                };
                for(var method in methods)Animitter.prototype[method] = methods[method];
                function createAnimitter(options, fn) {
                    if (1 === arguments.length && 'function' == typeof options) {
                        fn = options;
                        options = {};
                    }
                    var _instance = new Animitter(options);
                    if (fn) _instance.on('update', fn);
                    return _instance;
                }
                module1.exports = exports1 = createAnimitter;
                exports1.bound = function(options, fn) {
                    var loop = createAnimitter(options, fn), functionKeys = functions(Animitter.prototype), hasBind = !!Function.prototype.bind, fnKey;
                    for(var i = 0; i < functionKeys.length; i++){
                        fnKey = functionKeys[i];
                        loop[fnKey] = hasBind ? loop[fnKey].bind(loop) : bind(loop[fnKey], loop);
                    }
                    return loop;
                };
                exports1.Animitter = Animitter;
                exports1.globalFixedDelta = false;
                exports1.EventEmitter = EventEmitter;
                exports1.running = 0;
                function bind(fn, scope) {
                    if ('function' == typeof fn.bind) return fn.bind(scope);
                    return function() {
                        return fn.apply(scope, arguments);
                    };
                }
                function functions(obj) {
                    var keys = Object.keys(obj);
                    var arr = [];
                    for(var i = 0; i < keys.length; i++)if ('function' == typeof obj[keys[i]]) arr.push(keys[i]);
                    return arr;
                }
                Date.now = Date.now || function() {
                    return new Date().getTime();
                };
            },
            "./node_modules/base64-js/index.js" (__unused_rspack_module, exports1) {
                "use strict";
                exports1.byteLength = byteLength;
                exports1.toByteArray = toByteArray;
                exports1.fromByteArray = fromByteArray;
                var lookup = [];
                var revLookup = [];
                var Arr = "u" > typeof Uint8Array ? Uint8Array : Array;
                var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                for(var i = 0, len = code.length; i < len; ++i){
                    lookup[i] = code[i];
                    revLookup[code.charCodeAt(i)] = i;
                }
                revLookup['-'.charCodeAt(0)] = 62;
                revLookup['_'.charCodeAt(0)] = 63;
                function getLens(b64) {
                    var len = b64.length;
                    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
                    var validLen = b64.indexOf('=');
                    if (-1 === validLen) validLen = len;
                    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
                    return [
                        validLen,
                        placeHoldersLen
                    ];
                }
                function byteLength(b64) {
                    var lens = getLens(b64);
                    var validLen = lens[0];
                    var placeHoldersLen = lens[1];
                    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
                }
                function _byteLength(b64, validLen, placeHoldersLen) {
                    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
                }
                function toByteArray(b64) {
                    var tmp;
                    var lens = getLens(b64);
                    var validLen = lens[0];
                    var placeHoldersLen = lens[1];
                    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
                    var curByte = 0;
                    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
                    var i;
                    for(i = 0; i < len; i += 4){
                        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
                        arr[curByte++] = tmp >> 16 & 0xFF;
                        arr[curByte++] = tmp >> 8 & 0xFF;
                        arr[curByte++] = 0xFF & tmp;
                    }
                    if (2 === placeHoldersLen) {
                        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
                        arr[curByte++] = 0xFF & tmp;
                    }
                    if (1 === placeHoldersLen) {
                        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
                        arr[curByte++] = tmp >> 8 & 0xFF;
                        arr[curByte++] = 0xFF & tmp;
                    }
                    return arr;
                }
                function tripletToBase64(num) {
                    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[0x3F & num];
                }
                function encodeChunk(uint8, start, end) {
                    var tmp;
                    var output = [];
                    for(var i = start; i < end; i += 3){
                        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (0xFF & uint8[i + 2]);
                        output.push(tripletToBase64(tmp));
                    }
                    return output.join('');
                }
                function fromByteArray(uint8) {
                    var tmp;
                    var len = uint8.length;
                    var extraBytes = len % 3;
                    var parts = [];
                    var maxChunkLength = 16383;
                    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
                    if (1 === extraBytes) {
                        tmp = uint8[len - 1];
                        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
                    } else if (2 === extraBytes) {
                        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
                        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
                    }
                    return parts.join('');
                }
            },
            "./node_modules/buffer/index.js" (__unused_rspack_module, exports1, __webpack_require__) {
                "use strict";
                /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var base64 = __webpack_require__("./node_modules/base64-js/index.js");
                var ieee754 = __webpack_require__("./node_modules/ieee754/index.js");
                var customInspectSymbol = 'function' == typeof Symbol && 'function' == typeof Symbol['for'] ? Symbol['for']('nodejs.util.inspect.custom') : null;
                exports1.Buffer = Buffer;
                exports1.SlowBuffer = SlowBuffer;
                exports1.INSPECT_MAX_BYTES = 50;
                var K_MAX_LENGTH = 0x7fffffff;
                exports1.kMaxLength = K_MAX_LENGTH;
                Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
                if (!Buffer.TYPED_ARRAY_SUPPORT && "u" > typeof console && 'function' == typeof console.error) console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
                function typedArraySupport() {
                    try {
                        var arr = new Uint8Array(1);
                        var proto = {
                            foo: function() {
                                return 42;
                            }
                        };
                        Object.setPrototypeOf(proto, Uint8Array.prototype);
                        Object.setPrototypeOf(arr, proto);
                        return 42 === arr.foo();
                    } catch (e) {
                        return false;
                    }
                }
                Object.defineProperty(Buffer.prototype, 'parent', {
                    enumerable: true,
                    get: function() {
                        if (!Buffer.isBuffer(this)) return;
                        return this.buffer;
                    }
                });
                Object.defineProperty(Buffer.prototype, 'offset', {
                    enumerable: true,
                    get: function() {
                        if (!Buffer.isBuffer(this)) return;
                        return this.byteOffset;
                    }
                });
                function createBuffer(length) {
                    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
                    var buf = new Uint8Array(length);
                    Object.setPrototypeOf(buf, Buffer.prototype);
                    return buf;
                }
                function Buffer(arg, encodingOrOffset, length) {
                    if ('number' == typeof arg) {
                        if ('string' == typeof encodingOrOffset) throw new TypeError('The "string" argument must be of type string. Received type number');
                        return allocUnsafe(arg);
                    }
                    return from(arg, encodingOrOffset, length);
                }
                Buffer.poolSize = 8192;
                function from(value, encodingOrOffset, length) {
                    if ('string' == typeof value) return fromString(value, encodingOrOffset);
                    if (ArrayBuffer.isView(value)) return fromArrayView(value);
                    if (null == value) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
                    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
                    if ("u" > typeof SharedArrayBuffer && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
                    if ('number' == typeof value) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    var valueOf = value.valueOf && value.valueOf();
                    if (null != valueOf && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
                    var b = fromObject(value);
                    if (b) return b;
                    if ("u" > typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof value[Symbol.toPrimitive]) return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
                }
                Buffer.from = function(value, encodingOrOffset, length) {
                    return from(value, encodingOrOffset, length);
                };
                Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
                Object.setPrototypeOf(Buffer, Uint8Array);
                function assertSize(size) {
                    if ('number' != typeof size) throw new TypeError('"size" argument must be of type number');
                    if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
                }
                function alloc(size, fill, encoding) {
                    assertSize(size);
                    if (size <= 0) return createBuffer(size);
                    if (void 0 !== fill) return 'string' == typeof encoding ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
                    return createBuffer(size);
                }
                Buffer.alloc = function(size, fill, encoding) {
                    return alloc(size, fill, encoding);
                };
                function allocUnsafe(size) {
                    assertSize(size);
                    return createBuffer(size < 0 ? 0 : 0 | checked(size));
                }
                Buffer.allocUnsafe = function(size) {
                    return allocUnsafe(size);
                };
                Buffer.allocUnsafeSlow = function(size) {
                    return allocUnsafe(size);
                };
                function fromString(string, encoding) {
                    if ('string' != typeof encoding || '' === encoding) encoding = 'utf8';
                    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
                    var length = 0 | byteLength(string, encoding);
                    var buf = createBuffer(length);
                    var actual = buf.write(string, encoding);
                    if (actual !== length) buf = buf.slice(0, actual);
                    return buf;
                }
                function fromArrayLike(array) {
                    var length = array.length < 0 ? 0 : 0 | checked(array.length);
                    var buf = createBuffer(length);
                    for(var i = 0; i < length; i += 1)buf[i] = 255 & array[i];
                    return buf;
                }
                function fromArrayView(arrayView) {
                    if (isInstance(arrayView, Uint8Array)) {
                        var copy = new Uint8Array(arrayView);
                        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
                    }
                    return fromArrayLike(arrayView);
                }
                function fromArrayBuffer(array, byteOffset, length) {
                    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
                    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    var buf;
                    buf = void 0 === byteOffset && void 0 === length ? new Uint8Array(array) : void 0 === length ? new Uint8Array(array, byteOffset) : new Uint8Array(array, byteOffset, length);
                    Object.setPrototypeOf(buf, Buffer.prototype);
                    return buf;
                }
                function fromObject(obj) {
                    if (Buffer.isBuffer(obj)) {
                        var len = 0 | checked(obj.length);
                        var buf = createBuffer(len);
                        if (0 === buf.length) return buf;
                        obj.copy(buf, 0, 0, len);
                        return buf;
                    }
                    if (void 0 !== obj.length) {
                        if ('number' != typeof obj.length || numberIsNaN(obj.length)) return createBuffer(0);
                        return fromArrayLike(obj);
                    }
                    if ('Buffer' === obj.type && Array.isArray(obj.data)) return fromArrayLike(obj.data);
                }
                function checked(length) {
                    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
                    return 0 | length;
                }
                function SlowBuffer(length) {
                    if (+length != length) length = 0;
                    return Buffer.alloc(+length);
                }
                Buffer.isBuffer = function(b) {
                    return null != b && true === b._isBuffer && b !== Buffer.prototype;
                };
                Buffer.compare = function(a, b) {
                    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
                    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
                    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (a === b) return 0;
                    var x = a.length;
                    var y = b.length;
                    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
                        x = a[i];
                        y = b[i];
                        break;
                    }
                    if (x < y) return -1;
                    if (y < x) return 1;
                    return 0;
                };
                Buffer.isEncoding = function(encoding) {
                    switch(String(encoding).toLowerCase()){
                        case 'hex':
                        case 'utf8':
                        case 'utf-8':
                        case 'ascii':
                        case 'latin1':
                        case 'binary':
                        case 'base64':
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return true;
                        default:
                            return false;
                    }
                };
                Buffer.concat = function(list, length) {
                    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === list.length) return Buffer.alloc(0);
                    var i;
                    if (void 0 === length) {
                        length = 0;
                        for(i = 0; i < list.length; ++i)length += list[i].length;
                    }
                    var buffer = Buffer.allocUnsafe(length);
                    var pos = 0;
                    for(i = 0; i < list.length; ++i){
                        var buf = list[i];
                        if (isInstance(buf, Uint8Array)) if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
                        else Uint8Array.prototype.set.call(buffer, buf, pos);
                        else if (Buffer.isBuffer(buf)) buf.copy(buffer, pos);
                        else throw new TypeError('"list" argument must be an Array of Buffers');
                        pos += buf.length;
                    }
                    return buffer;
                };
                function byteLength(string, encoding) {
                    if (Buffer.isBuffer(string)) return string.length;
                    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
                    if ('string' != typeof string) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
                    var len = string.length;
                    var mustMatch = arguments.length > 2 && true === arguments[2];
                    if (!mustMatch && 0 === len) return 0;
                    var loweredCase = false;
                    for(;;)switch(encoding){
                        case 'ascii':
                        case 'latin1':
                        case 'binary':
                            return len;
                        case 'utf8':
                        case 'utf-8':
                            return utf8ToBytes(string).length;
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return 2 * len;
                        case 'hex':
                            return len >>> 1;
                        case 'base64':
                            return base64ToBytes(string).length;
                        default:
                            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length;
                            encoding = ('' + encoding).toLowerCase();
                            loweredCase = true;
                    }
                }
                Buffer.byteLength = byteLength;
                function slowToString(encoding, start, end) {
                    var loweredCase = false;
                    if (void 0 === start || start < 0) start = 0;
                    if (start > this.length) return '';
                    if (void 0 === end || end > this.length) end = this.length;
                    if (end <= 0) return '';
                    end >>>= 0;
                    start >>>= 0;
                    if (end <= start) return '';
                    if (!encoding) encoding = 'utf8';
                    while(true)switch(encoding){
                        case 'hex':
                            return hexSlice(this, start, end);
                        case 'utf8':
                        case 'utf-8':
                            return utf8Slice(this, start, end);
                        case 'ascii':
                            return asciiSlice(this, start, end);
                        case 'latin1':
                        case 'binary':
                            return latin1Slice(this, start, end);
                        case 'base64':
                            return base64Slice(this, start, end);
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return utf16leSlice(this, start, end);
                        default:
                            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                            encoding = (encoding + '').toLowerCase();
                            loweredCase = true;
                    }
                }
                Buffer.prototype._isBuffer = true;
                function swap(b, n, m) {
                    var i = b[n];
                    b[n] = b[m];
                    b[m] = i;
                }
                Buffer.prototype.swap16 = function() {
                    var len = this.length;
                    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
                    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
                    return this;
                };
                Buffer.prototype.swap32 = function() {
                    var len = this.length;
                    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
                    for(var i = 0; i < len; i += 4){
                        swap(this, i, i + 3);
                        swap(this, i + 1, i + 2);
                    }
                    return this;
                };
                Buffer.prototype.swap64 = function() {
                    var len = this.length;
                    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
                    for(var i = 0; i < len; i += 8){
                        swap(this, i, i + 7);
                        swap(this, i + 1, i + 6);
                        swap(this, i + 2, i + 5);
                        swap(this, i + 3, i + 4);
                    }
                    return this;
                };
                Buffer.prototype.toString = function() {
                    var length = this.length;
                    if (0 === length) return '';
                    if (0 === arguments.length) return utf8Slice(this, 0, length);
                    return slowToString.apply(this, arguments);
                };
                Buffer.prototype.toLocaleString = Buffer.prototype.toString;
                Buffer.prototype.equals = function(b) {
                    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
                    if (this === b) return true;
                    return 0 === Buffer.compare(this, b);
                };
                Buffer.prototype.inspect = function() {
                    var str = '';
                    var max = exports1.INSPECT_MAX_BYTES;
                    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
                    if (this.length > max) str += ' ... ';
                    return '<Buffer ' + str + '>';
                };
                if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
                Buffer.prototype.compare = function(target, start, end, thisStart, thisEnd) {
                    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
                    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
                    if (void 0 === start) start = 0;
                    if (void 0 === end) end = target ? target.length : 0;
                    if (void 0 === thisStart) thisStart = 0;
                    if (void 0 === thisEnd) thisEnd = this.length;
                    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
                    if (thisStart >= thisEnd && start >= end) return 0;
                    if (thisStart >= thisEnd) return -1;
                    if (start >= end) return 1;
                    start >>>= 0;
                    end >>>= 0;
                    thisStart >>>= 0;
                    thisEnd >>>= 0;
                    if (this === target) return 0;
                    var x = thisEnd - thisStart;
                    var y = end - start;
                    var len = Math.min(x, y);
                    var thisCopy = this.slice(thisStart, thisEnd);
                    var targetCopy = target.slice(start, end);
                    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
                        x = thisCopy[i];
                        y = targetCopy[i];
                        break;
                    }
                    if (x < y) return -1;
                    if (y < x) return 1;
                    return 0;
                };
                function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                    if (0 === buffer.length) return -1;
                    if ('string' == typeof byteOffset) {
                        encoding = byteOffset;
                        byteOffset = 0;
                    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
                    else if (byteOffset < -2147483648) byteOffset = -2147483648;
                    byteOffset *= 1;
                    if (numberIsNaN(byteOffset)) byteOffset = dir ? 0 : buffer.length - 1;
                    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                    if (byteOffset >= buffer.length) if (dir) return -1;
                    else byteOffset = buffer.length - 1;
                    else if (byteOffset < 0) if (!dir) return -1;
                    else byteOffset = 0;
                    if ('string' == typeof val) val = Buffer.from(val, encoding);
                    if (Buffer.isBuffer(val)) {
                        if (0 === val.length) return -1;
                        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                    }
                    if ('number' == typeof val) {
                        val &= 0xFF;
                        if ('function' == typeof Uint8Array.prototype.indexOf) if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                        else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                        return arrayIndexOf(buffer, [
                            val
                        ], byteOffset, encoding, dir);
                    }
                    throw new TypeError('val must be string, number or Buffer');
                }
                function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                    var indexSize = 1;
                    var arrLength = arr.length;
                    var valLength = val.length;
                    if (void 0 !== encoding) {
                        encoding = String(encoding).toLowerCase();
                        if ('ucs2' === encoding || 'ucs-2' === encoding || 'utf16le' === encoding || 'utf-16le' === encoding) {
                            if (arr.length < 2 || val.length < 2) return -1;
                            indexSize = 2;
                            arrLength /= 2;
                            valLength /= 2;
                            byteOffset /= 2;
                        }
                    }
                    function read(buf, i) {
                        if (1 === indexSize) return buf[i];
                        return buf.readUInt16BE(i * indexSize);
                    }
                    var i;
                    if (dir) {
                        var foundIndex = -1;
                        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, -1 === foundIndex ? 0 : i - foundIndex)) {
                            if (-1 === foundIndex) foundIndex = i;
                            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                        } else {
                            if (-1 !== foundIndex) i -= i - foundIndex;
                            foundIndex = -1;
                        }
                    } else {
                        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                        for(i = byteOffset; i >= 0; i--){
                            var found = true;
                            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                                found = false;
                                break;
                            }
                            if (found) return i;
                        }
                    }
                    return -1;
                }
                Buffer.prototype.includes = function(val, byteOffset, encoding) {
                    return -1 !== this.indexOf(val, byteOffset, encoding);
                };
                Buffer.prototype.indexOf = function(val, byteOffset, encoding) {
                    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
                };
                Buffer.prototype.lastIndexOf = function(val, byteOffset, encoding) {
                    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
                };
                function hexWrite(buf, string, offset, length) {
                    offset = Number(offset) || 0;
                    var remaining = buf.length - offset;
                    if (length) {
                        length = Number(length);
                        if (length > remaining) length = remaining;
                    } else length = remaining;
                    var strLen = string.length;
                    if (length > strLen / 2) length = strLen / 2;
                    for(var i = 0; i < length; ++i){
                        var parsed = parseInt(string.substr(2 * i, 2), 16);
                        if (numberIsNaN(parsed)) break;
                        buf[offset + i] = parsed;
                    }
                    return i;
                }
                function utf8Write(buf, string, offset, length) {
                    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
                }
                function asciiWrite(buf, string, offset, length) {
                    return blitBuffer(asciiToBytes(string), buf, offset, length);
                }
                function base64Write(buf, string, offset, length) {
                    return blitBuffer(base64ToBytes(string), buf, offset, length);
                }
                function ucs2Write(buf, string, offset, length) {
                    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
                }
                Buffer.prototype.write = function(string, offset, length, encoding) {
                    if (void 0 === offset) {
                        encoding = 'utf8';
                        length = this.length;
                        offset = 0;
                    } else if (void 0 === length && 'string' == typeof offset) {
                        encoding = offset;
                        length = this.length;
                        offset = 0;
                    } else if (isFinite(offset)) {
                        offset >>>= 0;
                        if (isFinite(length)) {
                            length >>>= 0;
                            if (void 0 === encoding) encoding = 'utf8';
                        } else {
                            encoding = length;
                            length = void 0;
                        }
                    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
                    var remaining = this.length - offset;
                    if (void 0 === length || length > remaining) length = remaining;
                    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
                    if (!encoding) encoding = 'utf8';
                    var loweredCase = false;
                    for(;;)switch(encoding){
                        case 'hex':
                            return hexWrite(this, string, offset, length);
                        case 'utf8':
                        case 'utf-8':
                            return utf8Write(this, string, offset, length);
                        case 'ascii':
                        case 'latin1':
                        case 'binary':
                            return asciiWrite(this, string, offset, length);
                        case 'base64':
                            return base64Write(this, string, offset, length);
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return ucs2Write(this, string, offset, length);
                        default:
                            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                            encoding = ('' + encoding).toLowerCase();
                            loweredCase = true;
                    }
                };
                Buffer.prototype.toJSON = function() {
                    return {
                        type: 'Buffer',
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    };
                };
                function base64Slice(buf, start, end) {
                    if (0 === start && end === buf.length) return base64.fromByteArray(buf);
                    return base64.fromByteArray(buf.slice(start, end));
                }
                function utf8Slice(buf, start, end) {
                    end = Math.min(buf.length, end);
                    var res = [];
                    var i = start;
                    while(i < end){
                        var firstByte = buf[i];
                        var codePoint = null;
                        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
                        if (i + bytesPerSequence <= end) {
                            var secondByte, thirdByte, fourthByte, tempCodePoint;
                            switch(bytesPerSequence){
                                case 1:
                                    if (firstByte < 0x80) codePoint = firstByte;
                                    break;
                                case 2:
                                    secondByte = buf[i + 1];
                                    if ((0xC0 & secondByte) === 0x80) {
                                        tempCodePoint = (0x1F & firstByte) << 0x6 | 0x3F & secondByte;
                                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                                    }
                                    break;
                                case 3:
                                    secondByte = buf[i + 1];
                                    thirdByte = buf[i + 2];
                                    if ((0xC0 & secondByte) === 0x80 && (0xC0 & thirdByte) === 0x80) {
                                        tempCodePoint = (0xF & firstByte) << 0xC | (0x3F & secondByte) << 0x6 | 0x3F & thirdByte;
                                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                                    }
                                    break;
                                case 4:
                                    secondByte = buf[i + 1];
                                    thirdByte = buf[i + 2];
                                    fourthByte = buf[i + 3];
                                    if ((0xC0 & secondByte) === 0x80 && (0xC0 & thirdByte) === 0x80 && (0xC0 & fourthByte) === 0x80) {
                                        tempCodePoint = (0xF & firstByte) << 0x12 | (0x3F & secondByte) << 0xC | (0x3F & thirdByte) << 0x6 | 0x3F & fourthByte;
                                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                                    }
                            }
                        }
                        if (null === codePoint) {
                            codePoint = 0xFFFD;
                            bytesPerSequence = 1;
                        } else if (codePoint > 0xFFFF) {
                            codePoint -= 0x10000;
                            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
                            codePoint = 0xDC00 | 0x3FF & codePoint;
                        }
                        res.push(codePoint);
                        i += bytesPerSequence;
                    }
                    return decodeCodePointsArray(res);
                }
                var MAX_ARGUMENTS_LENGTH = 0x1000;
                function decodeCodePointsArray(codePoints) {
                    var len = codePoints.length;
                    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
                    var res = '';
                    var i = 0;
                    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                    return res;
                }
                function asciiSlice(buf, start, end) {
                    var ret = '';
                    end = Math.min(buf.length, end);
                    for(var i = start; i < end; ++i)ret += String.fromCharCode(0x7F & buf[i]);
                    return ret;
                }
                function latin1Slice(buf, start, end) {
                    var ret = '';
                    end = Math.min(buf.length, end);
                    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
                    return ret;
                }
                function hexSlice(buf, start, end) {
                    var len = buf.length;
                    if (!start || start < 0) start = 0;
                    if (!end || end < 0 || end > len) end = len;
                    var out = '';
                    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
                    return out;
                }
                function utf16leSlice(buf, start, end) {
                    var bytes = buf.slice(start, end);
                    var res = '';
                    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + 256 * bytes[i + 1]);
                    return res;
                }
                Buffer.prototype.slice = function(start, end) {
                    var len = this.length;
                    start = ~~start;
                    end = void 0 === end ? len : ~~end;
                    if (start < 0) {
                        start += len;
                        if (start < 0) start = 0;
                    } else if (start > len) start = len;
                    if (end < 0) {
                        end += len;
                        if (end < 0) end = 0;
                    } else if (end > len) end = len;
                    if (end < start) end = start;
                    var newBuf = this.subarray(start, end);
                    Object.setPrototypeOf(newBuf, Buffer.prototype);
                    return newBuf;
                };
                function checkOffset(offset, ext, length) {
                    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
                    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
                }
                Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function(offset, byteLength, noAssert) {
                    offset >>>= 0;
                    byteLength >>>= 0;
                    if (!noAssert) checkOffset(offset, byteLength, this.length);
                    var val = this[offset];
                    var mul = 1;
                    var i = 0;
                    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
                    return val;
                };
                Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function(offset, byteLength, noAssert) {
                    offset >>>= 0;
                    byteLength >>>= 0;
                    if (!noAssert) checkOffset(offset, byteLength, this.length);
                    var val = this[offset + --byteLength];
                    var mul = 1;
                    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
                    return val;
                };
                Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 1, this.length);
                    return this[offset];
                };
                Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 2, this.length);
                    return this[offset] | this[offset + 1] << 8;
                };
                Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 2, this.length);
                    return this[offset] << 8 | this[offset + 1];
                };
                Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 4, this.length);
                    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + 0x1000000 * this[offset + 3];
                };
                Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 4, this.length);
                    return 0x1000000 * this[offset] + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
                };
                Buffer.prototype.readIntLE = function(offset, byteLength, noAssert) {
                    offset >>>= 0;
                    byteLength >>>= 0;
                    if (!noAssert) checkOffset(offset, byteLength, this.length);
                    var val = this[offset];
                    var mul = 1;
                    var i = 0;
                    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
                    mul *= 0x80;
                    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                    return val;
                };
                Buffer.prototype.readIntBE = function(offset, byteLength, noAssert) {
                    offset >>>= 0;
                    byteLength >>>= 0;
                    if (!noAssert) checkOffset(offset, byteLength, this.length);
                    var i = byteLength;
                    var mul = 1;
                    var val = this[offset + --i];
                    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
                    mul *= 0x80;
                    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                    return val;
                };
                Buffer.prototype.readInt8 = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 1, this.length);
                    if (!(0x80 & this[offset])) return this[offset];
                    return (0xff - this[offset] + 1) * -1;
                };
                Buffer.prototype.readInt16LE = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 2, this.length);
                    var val = this[offset] | this[offset + 1] << 8;
                    return 0x8000 & val ? 0xFFFF0000 | val : val;
                };
                Buffer.prototype.readInt16BE = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 2, this.length);
                    var val = this[offset + 1] | this[offset] << 8;
                    return 0x8000 & val ? 0xFFFF0000 | val : val;
                };
                Buffer.prototype.readInt32LE = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 4, this.length);
                    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
                };
                Buffer.prototype.readInt32BE = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 4, this.length);
                    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
                };
                Buffer.prototype.readFloatLE = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 4, this.length);
                    return ieee754.read(this, offset, true, 23, 4);
                };
                Buffer.prototype.readFloatBE = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 4, this.length);
                    return ieee754.read(this, offset, false, 23, 4);
                };
                Buffer.prototype.readDoubleLE = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 8, this.length);
                    return ieee754.read(this, offset, true, 52, 8);
                };
                Buffer.prototype.readDoubleBE = function(offset, noAssert) {
                    offset >>>= 0;
                    if (!noAssert) checkOffset(offset, 8, this.length);
                    return ieee754.read(this, offset, false, 52, 8);
                };
                function checkInt(buf, value, offset, ext, max, min) {
                    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                    if (offset + ext > buf.length) throw new RangeError('Index out of range');
                }
                Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function(value, offset, byteLength, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    byteLength >>>= 0;
                    if (!noAssert) {
                        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                        checkInt(this, value, offset, byteLength, maxBytes, 0);
                    }
                    var mul = 1;
                    var i = 0;
                    this[offset] = 0xFF & value;
                    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
                    return offset + byteLength;
                };
                Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function(value, offset, byteLength, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    byteLength >>>= 0;
                    if (!noAssert) {
                        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                        checkInt(this, value, offset, byteLength, maxBytes, 0);
                    }
                    var i = byteLength - 1;
                    var mul = 1;
                    this[offset + i] = 0xFF & value;
                    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
                    return offset + byteLength;
                };
                Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
                    this[offset] = 0xff & value;
                    return offset + 1;
                };
                Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
                    this[offset] = 0xff & value;
                    this[offset + 1] = value >>> 8;
                    return offset + 2;
                };
                Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
                    this[offset] = value >>> 8;
                    this[offset + 1] = 0xff & value;
                    return offset + 2;
                };
                Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
                    this[offset + 3] = value >>> 24;
                    this[offset + 2] = value >>> 16;
                    this[offset + 1] = value >>> 8;
                    this[offset] = 0xff & value;
                    return offset + 4;
                };
                Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = 0xff & value;
                    return offset + 4;
                };
                Buffer.prototype.writeIntLE = function(value, offset, byteLength, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) {
                        var limit = Math.pow(2, 8 * byteLength - 1);
                        checkInt(this, value, offset, byteLength, limit - 1, -limit);
                    }
                    var i = 0;
                    var mul = 1;
                    var sub = 0;
                    this[offset] = 0xFF & value;
                    while(++i < byteLength && (mul *= 0x100)){
                        if (value < 0 && 0 === sub && 0 !== this[offset + i - 1]) sub = 1;
                        this[offset + i] = (value / mul | 0) - sub & 0xFF;
                    }
                    return offset + byteLength;
                };
                Buffer.prototype.writeIntBE = function(value, offset, byteLength, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) {
                        var limit = Math.pow(2, 8 * byteLength - 1);
                        checkInt(this, value, offset, byteLength, limit - 1, -limit);
                    }
                    var i = byteLength - 1;
                    var mul = 1;
                    var sub = 0;
                    this[offset + i] = 0xFF & value;
                    while(--i >= 0 && (mul *= 0x100)){
                        if (value < 0 && 0 === sub && 0 !== this[offset + i + 1]) sub = 1;
                        this[offset + i] = (value / mul | 0) - sub & 0xFF;
                    }
                    return offset + byteLength;
                };
                Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
                    if (value < 0) value = 0xff + value + 1;
                    this[offset] = 0xff & value;
                    return offset + 1;
                };
                Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
                    this[offset] = 0xff & value;
                    this[offset + 1] = value >>> 8;
                    return offset + 2;
                };
                Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
                    this[offset] = value >>> 8;
                    this[offset + 1] = 0xff & value;
                    return offset + 2;
                };
                Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
                    this[offset] = 0xff & value;
                    this[offset + 1] = value >>> 8;
                    this[offset + 2] = value >>> 16;
                    this[offset + 3] = value >>> 24;
                    return offset + 4;
                };
                Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
                    if (value < 0) value = 0xffffffff + value + 1;
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = 0xff & value;
                    return offset + 4;
                };
                function checkIEEE754(buf, value, offset, ext, max, min) {
                    if (offset + ext > buf.length) throw new RangeError('Index out of range');
                    if (offset < 0) throw new RangeError('Index out of range');
                }
                function writeFloat(buf, value, offset, littleEndian, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
                    ieee754.write(buf, value, offset, littleEndian, 23, 4);
                    return offset + 4;
                }
                Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {
                    return writeFloat(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {
                    return writeFloat(this, value, offset, false, noAssert);
                };
                function writeDouble(buf, value, offset, littleEndian, noAssert) {
                    value *= 1;
                    offset >>>= 0;
                    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157e+308);
                    ieee754.write(buf, value, offset, littleEndian, 52, 8);
                    return offset + 8;
                }
                Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
                    return writeDouble(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
                    return writeDouble(this, value, offset, false, noAssert);
                };
                Buffer.prototype.copy = function(target, targetStart, start, end) {
                    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
                    if (!start) start = 0;
                    if (!end && 0 !== end) end = this.length;
                    if (targetStart >= target.length) targetStart = target.length;
                    if (!targetStart) targetStart = 0;
                    if (end > 0 && end < start) end = start;
                    if (end === start) return 0;
                    if (0 === target.length || 0 === this.length) return 0;
                    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
                    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
                    if (end < 0) throw new RangeError('sourceEnd out of bounds');
                    if (end > this.length) end = this.length;
                    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
                    var len = end - start;
                    if (this === target && 'function' == typeof Uint8Array.prototype.copyWithin) this.copyWithin(targetStart, start, end);
                    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
                    return len;
                };
                Buffer.prototype.fill = function(val, start, end, encoding) {
                    if ('string' == typeof val) {
                        if ('string' == typeof start) {
                            encoding = start;
                            start = 0;
                            end = this.length;
                        } else if ('string' == typeof end) {
                            encoding = end;
                            end = this.length;
                        }
                        if (void 0 !== encoding && 'string' != typeof encoding) throw new TypeError('encoding must be a string');
                        if ('string' == typeof encoding && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
                        if (1 === val.length) {
                            var code = val.charCodeAt(0);
                            if ('utf8' === encoding && code < 128 || 'latin1' === encoding) val = code;
                        }
                    } else if ('number' == typeof val) val &= 255;
                    else if ('boolean' == typeof val) val = Number(val);
                    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
                    if (end <= start) return this;
                    start >>>= 0;
                    end = void 0 === end ? this.length : end >>> 0;
                    if (!val) val = 0;
                    var i;
                    if ('number' == typeof val) for(i = start; i < end; ++i)this[i] = val;
                    else {
                        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
                        var len = bytes.length;
                        if (0 === len) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
                        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
                    }
                    return this;
                };
                var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
                function base64clean(str) {
                    str = str.split('=')[0];
                    str = str.trim().replace(INVALID_BASE64_RE, '');
                    if (str.length < 2) return '';
                    while(str.length % 4 !== 0)str += '=';
                    return str;
                }
                function utf8ToBytes(string, units) {
                    units = units || 1 / 0;
                    var codePoint;
                    var length = string.length;
                    var leadSurrogate = null;
                    var bytes = [];
                    for(var i = 0; i < length; ++i){
                        codePoint = string.charCodeAt(i);
                        if (codePoint > 0xD7FF && codePoint < 0xE000) {
                            if (!leadSurrogate) {
                                if (codePoint > 0xDBFF) {
                                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                                    continue;
                                }
                                if (i + 1 === length) {
                                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                                    continue;
                                }
                                leadSurrogate = codePoint;
                                continue;
                            }
                            if (codePoint < 0xDC00) {
                                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                                leadSurrogate = codePoint;
                                continue;
                            }
                            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
                        } else if (leadSurrogate) {
                            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                        }
                        leadSurrogate = null;
                        if (codePoint < 0x80) {
                            if ((units -= 1) < 0) break;
                            bytes.push(codePoint);
                        } else if (codePoint < 0x800) {
                            if ((units -= 2) < 0) break;
                            bytes.push(codePoint >> 0x6 | 0xC0, 0x3F & codePoint | 0x80);
                        } else if (codePoint < 0x10000) {
                            if ((units -= 3) < 0) break;
                            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, 0x3F & codePoint | 0x80);
                        } else if (codePoint < 0x110000) {
                            if ((units -= 4) < 0) break;
                            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, 0x3F & codePoint | 0x80);
                        } else throw new Error('Invalid code point');
                    }
                    return bytes;
                }
                function asciiToBytes(str) {
                    var byteArray = [];
                    for(var i = 0; i < str.length; ++i)byteArray.push(0xFF & str.charCodeAt(i));
                    return byteArray;
                }
                function utf16leToBytes(str, units) {
                    var c, hi, lo;
                    var byteArray = [];
                    for(var i = 0; i < str.length; ++i){
                        if ((units -= 2) < 0) break;
                        c = str.charCodeAt(i);
                        hi = c >> 8;
                        lo = c % 256;
                        byteArray.push(lo);
                        byteArray.push(hi);
                    }
                    return byteArray;
                }
                function base64ToBytes(str) {
                    return base64.toByteArray(base64clean(str));
                }
                function blitBuffer(src, dst, offset, length) {
                    for(var i = 0; i < length; ++i){
                        if (i + offset >= dst.length || i >= src.length) break;
                        dst[i + offset] = src[i];
                    }
                    return i;
                }
                function isInstance(obj, type) {
                    return obj instanceof type || null != obj && null != obj.constructor && null != obj.constructor.name && obj.constructor.name === type.name;
                }
                function numberIsNaN(obj) {
                    return obj !== obj;
                }
                var hexSliceLookupTable = function() {
                    var alphabet = '0123456789abcdef';
                    var table = new Array(256);
                    for(var i = 0; i < 16; ++i){
                        var i16 = 16 * i;
                        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
                    }
                    return table;
                }();
            },
            "./node_modules/call-bind-apply-helpers/actualApply.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var bind = __webpack_require__("./node_modules/function-bind/index.js");
                var $apply = __webpack_require__("./node_modules/call-bind-apply-helpers/functionApply.js");
                var $call = __webpack_require__("./node_modules/call-bind-apply-helpers/functionCall.js");
                var $reflectApply = __webpack_require__("./node_modules/call-bind-apply-helpers/reflectApply.js");
                module1.exports = $reflectApply || bind.call($call, $apply);
            },
            "./node_modules/call-bind-apply-helpers/applyBind.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var bind = __webpack_require__("./node_modules/function-bind/index.js");
                var $apply = __webpack_require__("./node_modules/call-bind-apply-helpers/functionApply.js");
                var actualApply = __webpack_require__("./node_modules/call-bind-apply-helpers/actualApply.js");
                module1.exports = function() {
                    return actualApply(bind, $apply, arguments);
                };
            },
            "./node_modules/call-bind-apply-helpers/functionApply.js" (module1) {
                "use strict";
                module1.exports = Function.prototype.apply;
            },
            "./node_modules/call-bind-apply-helpers/functionCall.js" (module1) {
                "use strict";
                module1.exports = Function.prototype.call;
            },
            "./node_modules/call-bind-apply-helpers/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var bind = __webpack_require__("./node_modules/function-bind/index.js");
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                var $call = __webpack_require__("./node_modules/call-bind-apply-helpers/functionCall.js");
                var $actualApply = __webpack_require__("./node_modules/call-bind-apply-helpers/actualApply.js");
                module1.exports = function(args) {
                    if (args.length < 1 || 'function' != typeof args[0]) throw new $TypeError('a function is required');
                    return $actualApply(bind, $call, args);
                };
            },
            "./node_modules/call-bind-apply-helpers/reflectApply.js" (module1) {
                "use strict";
                module1.exports = "u" > typeof Reflect && Reflect && Reflect.apply;
            },
            "./node_modules/call-bind/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var setFunctionLength = __webpack_require__("./node_modules/set-function-length/index.js");
                var $defineProperty = __webpack_require__("./node_modules/es-define-property/index.js");
                var callBindBasic = __webpack_require__("./node_modules/call-bind-apply-helpers/index.js");
                var applyBind = __webpack_require__("./node_modules/call-bind-apply-helpers/applyBind.js");
                module1.exports = function(originalFunction) {
                    var func = callBindBasic(arguments);
                    var adjustedLength = originalFunction.length - (arguments.length - 1);
                    return setFunctionLength(func, 1 + (adjustedLength > 0 ? adjustedLength : 0), true);
                };
                if ($defineProperty) $defineProperty(module1.exports, 'apply', {
                    value: applyBind
                });
                else module1.exports.apply = applyBind;
            },
            "./node_modules/call-bound/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var GetIntrinsic = __webpack_require__("./node_modules/get-intrinsic/index.js");
                var callBindBasic = __webpack_require__("./node_modules/call-bind-apply-helpers/index.js");
                var $indexOf = callBindBasic([
                    GetIntrinsic('%String.prototype.indexOf%')
                ]);
                module1.exports = function(name, allowMissing) {
                    var intrinsic = GetIntrinsic(name, !!allowMissing);
                    if ('function' == typeof intrinsic && $indexOf(name, '.prototype.') > -1) return callBindBasic([
                        intrinsic
                    ]);
                    return intrinsic;
                };
            },
            "./node_modules/component-emitter/index.js" (module1) {
                module1.exports = Emitter;
                function Emitter(obj) {
                    if (obj) return mixin(obj);
                }
                function mixin(obj) {
                    for(var key in Emitter.prototype)obj[key] = Emitter.prototype[key];
                    return obj;
                }
                Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
                    this._callbacks = this._callbacks || {};
                    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
                    return this;
                };
                Emitter.prototype.once = function(event, fn) {
                    function on() {
                        this.off(event, on);
                        fn.apply(this, arguments);
                    }
                    on.fn = fn;
                    this.on(event, on);
                    return this;
                };
                Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
                    this._callbacks = this._callbacks || {};
                    if (0 == arguments.length) {
                        this._callbacks = {};
                        return this;
                    }
                    var callbacks = this._callbacks['$' + event];
                    if (!callbacks) return this;
                    if (1 == arguments.length) {
                        delete this._callbacks['$' + event];
                        return this;
                    }
                    var cb;
                    for(var i = 0; i < callbacks.length; i++){
                        cb = callbacks[i];
                        if (cb === fn || cb.fn === fn) {
                            callbacks.splice(i, 1);
                            break;
                        }
                    }
                    if (0 === callbacks.length) delete this._callbacks['$' + event];
                    return this;
                };
                Emitter.prototype.emit = function(event) {
                    this._callbacks = this._callbacks || {};
                    var args = new Array(arguments.length - 1), callbacks = this._callbacks['$' + event];
                    for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
                    if (callbacks) {
                        callbacks = callbacks.slice(0);
                        for(var i = 0, len = callbacks.length; i < len; ++i)callbacks[i].apply(this, args);
                    }
                    return this;
                };
                Emitter.prototype.listeners = function(event) {
                    this._callbacks = this._callbacks || {};
                    return this._callbacks['$' + event] || [];
                };
                Emitter.prototype.hasListeners = function(event) {
                    return !!this.listeners(event).length;
                };
            },
            "./node_modules/contains/index.js" (module1) {
                var DOCUMENT_POSITION_CONTAINED_BY = 16;
                module1.exports = contains;
                function contains(container, elem) {
                    if (container.contains) return container.contains(elem);
                    var comparison = container.compareDocumentPosition(elem);
                    return 0 === comparison || comparison & DOCUMENT_POSITION_CONTAINED_BY;
                }
            },
            "./node_modules/core-util-is/lib/util.js" (__unused_rspack_module, exports1, __webpack_require__) {
                function isArray(arg) {
                    if (Array.isArray) return Array.isArray(arg);
                    return '[object Array]' === objectToString(arg);
                }
                exports1.isArray = isArray;
                function isBoolean(arg) {
                    return 'boolean' == typeof arg;
                }
                exports1.isBoolean = isBoolean;
                function isNull(arg) {
                    return null === arg;
                }
                exports1.isNull = isNull;
                function isNullOrUndefined(arg) {
                    return null == arg;
                }
                exports1.isNullOrUndefined = isNullOrUndefined;
                function isNumber(arg) {
                    return 'number' == typeof arg;
                }
                exports1.isNumber = isNumber;
                function isString(arg) {
                    return 'string' == typeof arg;
                }
                exports1.isString = isString;
                function isSymbol(arg) {
                    return 'symbol' == typeof arg;
                }
                exports1.isSymbol = isSymbol;
                function isUndefined(arg) {
                    return void 0 === arg;
                }
                exports1.isUndefined = isUndefined;
                function isRegExp(re) {
                    return '[object RegExp]' === objectToString(re);
                }
                exports1.isRegExp = isRegExp;
                function isObject(arg) {
                    return 'object' == typeof arg && null !== arg;
                }
                exports1.isObject = isObject;
                function isDate(d) {
                    return '[object Date]' === objectToString(d);
                }
                exports1.isDate = isDate;
                function isError(e) {
                    return '[object Error]' === objectToString(e) || e instanceof Error;
                }
                exports1.isError = isError;
                function isFunction(arg) {
                    return 'function' == typeof arg;
                }
                exports1.isFunction = isFunction;
                function isPrimitive(arg) {
                    return null === arg || 'boolean' == typeof arg || 'number' == typeof arg || 'string' == typeof arg || 'symbol' == typeof arg || void 0 === arg;
                }
                exports1.isPrimitive = isPrimitive;
                exports1.isBuffer = __webpack_require__("./node_modules/buffer/index.js").Buffer.isBuffer;
                function objectToString(o) {
                    return Object.prototype.toString.call(o);
                }
            },
            "./node_modules/deepmerge/dist/cjs.js" (module1) {
                "use strict";
                var isMergeableObject = function(value) {
                    return isNonNullObject(value) && !isSpecial(value);
                };
                function isNonNullObject(value) {
                    return !!value && 'object' == typeof value;
                }
                function isSpecial(value) {
                    var stringValue = Object.prototype.toString.call(value);
                    return '[object RegExp]' === stringValue || '[object Date]' === stringValue || isReactElement(value);
                }
                var canUseSymbol = 'function' == typeof Symbol && Symbol.for;
                var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
                function isReactElement(value) {
                    return value.$$typeof === REACT_ELEMENT_TYPE;
                }
                function emptyTarget(val) {
                    return Array.isArray(val) ? [] : {};
                }
                function cloneUnlessOtherwiseSpecified(value, options) {
                    return false !== options.clone && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
                }
                function defaultArrayMerge(target, source, options) {
                    return target.concat(source).map(function(element) {
                        return cloneUnlessOtherwiseSpecified(element, options);
                    });
                }
                function getMergeFunction(key, options) {
                    if (!options.customMerge) return deepmerge;
                    var customMerge = options.customMerge(key);
                    return 'function' == typeof customMerge ? customMerge : deepmerge;
                }
                function getEnumerableOwnPropertySymbols(target) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
                        return Object.propertyIsEnumerable.call(target, symbol);
                    }) : [];
                }
                function getKeys(target) {
                    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
                }
                function propertyIsOnObject(object, property) {
                    try {
                        return property in object;
                    } catch (_) {
                        return false;
                    }
                }
                function propertyIsUnsafe(target, key) {
                    return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
                }
                function mergeObject(target, source, options) {
                    var destination = {};
                    if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
                        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                    });
                    getKeys(source).forEach(function(key) {
                        if (propertyIsUnsafe(target, key)) return;
                        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
                        else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                    });
                    return destination;
                }
                function deepmerge(target, source, options) {
                    options = options || {};
                    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                    var sourceIsArray = Array.isArray(source);
                    var targetIsArray = Array.isArray(target);
                    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                    if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options);
                    if (sourceIsArray) return options.arrayMerge(target, source, options);
                    return mergeObject(target, source, options);
                }
                deepmerge.all = function(array, options) {
                    if (!Array.isArray(array)) throw new Error('first argument should be an array');
                    return array.reduce(function(prev, next) {
                        return deepmerge(prev, next, options);
                    }, {});
                };
                var deepmerge_1 = deepmerge;
                module1.exports = deepmerge_1;
            },
            "./node_modules/define-data-property/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var $defineProperty = __webpack_require__("./node_modules/es-define-property/index.js");
                var $SyntaxError = __webpack_require__("./node_modules/es-errors/syntax.js");
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                var gopd = __webpack_require__("./node_modules/gopd/index.js");
                module1.exports = function(obj, property, value) {
                    if (!obj || 'object' != typeof obj && 'function' != typeof obj) throw new $TypeError('`obj` must be an object or a function`');
                    if ('string' != typeof property && 'symbol' != typeof property) throw new $TypeError('`property` must be a string or a symbol`');
                    if (arguments.length > 3 && 'boolean' != typeof arguments[3] && null !== arguments[3]) throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
                    if (arguments.length > 4 && 'boolean' != typeof arguments[4] && null !== arguments[4]) throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
                    if (arguments.length > 5 && 'boolean' != typeof arguments[5] && null !== arguments[5]) throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
                    if (arguments.length > 6 && 'boolean' != typeof arguments[6]) throw new $TypeError('`loose`, if provided, must be a boolean');
                    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
                    var nonWritable = arguments.length > 4 ? arguments[4] : null;
                    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
                    var loose = arguments.length > 6 ? arguments[6] : false;
                    var desc = !!gopd && gopd(obj, property);
                    if ($defineProperty) $defineProperty(obj, property, {
                        configurable: null === nonConfigurable && desc ? desc.configurable : !nonConfigurable,
                        enumerable: null === nonEnumerable && desc ? desc.enumerable : !nonEnumerable,
                        value: value,
                        writable: null === nonWritable && desc ? desc.writable : !nonWritable
                    });
                    else if (!loose && (nonEnumerable || nonWritable || nonConfigurable)) throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
                    else obj[property] = value;
                };
            },
            "./node_modules/defined/index.js" (module1) {
                "use strict";
                module1.exports = function() {
                    for(var i = 0; i < arguments.length; i++)if (void 0 !== arguments[i]) return arguments[i];
                };
            },
            "./node_modules/document-visibility/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var document1 = __webpack_require__("./node_modules/global/document.js");
                var Event1 = __webpack_require__("./node_modules/geval/source.js");
                var Keys = __webpack_require__("./node_modules/document-visibility/keys.js");
                module1.exports = Visibility;
                function Visibility() {
                    var keys = Keys(document1);
                    if (!keys) return noopShim();
                    return {
                        visible: visible,
                        onChange: Event1(listen)
                    };
                    function visible() {
                        return !document1[keys.hidden];
                    }
                    function listen(broadcast) {
                        document1.addEventListener(keys.event, function() {
                            broadcast(visible());
                        });
                    }
                }
                function noopShim() {
                    return {
                        visible: function() {
                            return true;
                        },
                        onChange: noop
                    };
                }
                function noop() {}
            },
            "./node_modules/document-visibility/keys.js" (module1) {
                "use strict";
                module1.exports = keys;
                function keys(document1) {
                    var prefix = detectPrefix(document1);
                    if (null == prefix) return;
                    return {
                        hidden: lowercaseFirst(prefix + 'Hidden'),
                        event: prefix + 'visibilitychange'
                    };
                }
                function detectPrefix(document1) {
                    if (null != document1.hidden) return '';
                    if (null != document1.mozHidden) return 'moz';
                    if (null != document1.msHidden) return 'ms';
                    if (null != document1.webkitHidden) return 'webkit';
                }
                function lowercaseFirst(string) {
                    return string.substring(0, 1).toLowerCase() + string.substring(1);
                }
            },
            "./node_modules/dunder-proto/get.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var callBind = __webpack_require__("./node_modules/call-bind-apply-helpers/index.js");
                var gOPD = __webpack_require__("./node_modules/gopd/index.js");
                var hasProtoAccessor;
                try {
                    hasProtoAccessor = [].__proto__ === Array.prototype;
                } catch (e) {
                    if (!e || 'object' != typeof e || !('code' in e) || 'ERR_PROTO_ACCESS' !== e.code) throw e;
                }
                var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
                var $Object = Object;
                var $getPrototypeOf = $Object.getPrototypeOf;
                module1.exports = desc && 'function' == typeof desc.get ? callBind([
                    desc.get
                ]) : 'function' == typeof $getPrototypeOf ? function(value) {
                    return $getPrototypeOf(null == value ? value : $Object(value));
                } : false;
            },
            "./node_modules/duplexify/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                var Buffer = __webpack_require__("./node_modules/buffer/index.js")["Buffer"];
                var process = __webpack_require__("./node_modules/process/browser.js");
                var stream = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/readable-browser.js");
                var eos = __webpack_require__("./node_modules/end-of-stream/index.js");
                var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                var shift = __webpack_require__("./node_modules/stream-shift/index.js");
                var SIGNAL_FLUSH = Buffer.from && Buffer.from !== Uint8Array.from ? Buffer.from([
                    0
                ]) : new Buffer([
                    0
                ]);
                var onuncork = function(self1, fn) {
                    if (self1._corked) self1.once('uncork', fn);
                    else fn();
                };
                var autoDestroy = function(self1, err) {
                    if (self1._autoDestroy) self1.destroy(err);
                };
                var destroyer = function(self1, end) {
                    return function(err) {
                        if (err) autoDestroy(self1, 'premature close' === err.message ? null : err);
                        else if (end && !self1._ended) self1.end();
                    };
                };
                var end = function(ws, fn) {
                    if (!ws) return fn();
                    if (ws._writableState && ws._writableState.finished) return fn();
                    if (ws._writableState) return ws.end(fn);
                    ws.end();
                    fn();
                };
                var toStreams2 = function(rs) {
                    return new stream.Readable({
                        objectMode: true,
                        highWaterMark: 16
                    }).wrap(rs);
                };
                var Duplexify = function(writable, readable, opts) {
                    if (!(this instanceof Duplexify)) return new Duplexify(writable, readable, opts);
                    stream.Duplex.call(this, opts);
                    this._writable = null;
                    this._readable = null;
                    this._readable2 = null;
                    this._autoDestroy = !opts || false !== opts.autoDestroy;
                    this._forwardDestroy = !opts || false !== opts.destroy;
                    this._forwardEnd = !opts || false !== opts.end;
                    this._corked = 1;
                    this._ondrain = null;
                    this._drained = false;
                    this._forwarding = false;
                    this._unwrite = null;
                    this._unread = null;
                    this._ended = false;
                    this.destroyed = false;
                    if (writable) this.setWritable(writable);
                    if (readable) this.setReadable(readable);
                };
                inherits(Duplexify, stream.Duplex);
                Duplexify.obj = function(writable, readable, opts) {
                    if (!opts) opts = {};
                    opts.objectMode = true;
                    opts.highWaterMark = 16;
                    return new Duplexify(writable, readable, opts);
                };
                Duplexify.prototype.cork = function() {
                    if (1 === ++this._corked) this.emit('cork');
                };
                Duplexify.prototype.uncork = function() {
                    if (this._corked && 0 === --this._corked) this.emit('uncork');
                };
                Duplexify.prototype.setWritable = function(writable) {
                    if (this._unwrite) this._unwrite();
                    if (this.destroyed) {
                        if (writable && writable.destroy) writable.destroy();
                        return;
                    }
                    if (null === writable || false === writable) return void this.end();
                    var self1 = this;
                    var unend = eos(writable, {
                        writable: true,
                        readable: false
                    }, destroyer(this, this._forwardEnd));
                    var ondrain = function() {
                        var ondrain = self1._ondrain;
                        self1._ondrain = null;
                        if (ondrain) ondrain();
                    };
                    var clear = function() {
                        self1._writable.removeListener('drain', ondrain);
                        unend();
                    };
                    if (this._unwrite) process.nextTick(ondrain);
                    this._writable = writable;
                    this._writable.on('drain', ondrain);
                    this._unwrite = clear;
                    this.uncork();
                };
                Duplexify.prototype.setReadable = function(readable) {
                    if (this._unread) this._unread();
                    if (this.destroyed) {
                        if (readable && readable.destroy) readable.destroy();
                        return;
                    }
                    if (null === readable || false === readable) {
                        this.push(null);
                        this.resume();
                        return;
                    }
                    var self1 = this;
                    var unend = eos(readable, {
                        writable: false,
                        readable: true
                    }, destroyer(this));
                    var onreadable = function() {
                        self1._forward();
                    };
                    var onend = function() {
                        self1.push(null);
                    };
                    var clear = function() {
                        self1._readable2.removeListener('readable', onreadable);
                        self1._readable2.removeListener('end', onend);
                        unend();
                    };
                    this._drained = true;
                    this._readable = readable;
                    this._readable2 = readable._readableState ? readable : toStreams2(readable);
                    this._readable2.on('readable', onreadable);
                    this._readable2.on('end', onend);
                    this._unread = clear;
                    this._forward();
                };
                Duplexify.prototype._read = function() {
                    this._drained = true;
                    this._forward();
                };
                Duplexify.prototype._forward = function() {
                    if (this._forwarding || !this._readable2 || !this._drained) return;
                    this._forwarding = true;
                    var data;
                    while(this._drained && null !== (data = shift(this._readable2))){
                        if (this.destroyed) continue;
                        this._drained = this.push(data);
                    }
                    this._forwarding = false;
                };
                Duplexify.prototype.destroy = function(err) {
                    if (this.destroyed) return;
                    this.destroyed = true;
                    var self1 = this;
                    process.nextTick(function() {
                        self1._destroy(err);
                    });
                };
                Duplexify.prototype._destroy = function(err) {
                    if (err) {
                        var ondrain = this._ondrain;
                        this._ondrain = null;
                        if (ondrain) ondrain(err);
                        else this.emit('error', err);
                    }
                    if (this._forwardDestroy) {
                        if (this._readable && this._readable.destroy) this._readable.destroy();
                        if (this._writable && this._writable.destroy) this._writable.destroy();
                    }
                    this.emit('close');
                };
                Duplexify.prototype._write = function(data, enc, cb) {
                    if (this.destroyed) return cb();
                    if (this._corked) return onuncork(this, this._write.bind(this, data, enc, cb));
                    if (data === SIGNAL_FLUSH) return this._finish(cb);
                    if (!this._writable) return cb();
                    if (false === this._writable.write(data)) this._ondrain = cb;
                    else cb();
                };
                Duplexify.prototype._finish = function(cb) {
                    var self1 = this;
                    this.emit('preend');
                    onuncork(this, function() {
                        end(self1._forwardEnd && self1._writable, function() {
                            if (false === self1._writableState.prefinished) self1._writableState.prefinished = true;
                            self1.emit('prefinish');
                            onuncork(self1, cb);
                        });
                    });
                };
                Duplexify.prototype.end = function(data, enc, cb) {
                    if ('function' == typeof data) return this.end(null, null, data);
                    if ('function' == typeof enc) return this.end(data, null, enc);
                    this._ended = true;
                    if (data) this.write(data);
                    if (!this._writableState.ending) this.write(SIGNAL_FLUSH);
                    return stream.Writable.prototype.end.call(this, cb);
                };
                module1.exports = Duplexify;
            },
            "./node_modules/duplexify/node_modules/isarray/index.js" (module1) {
                var toString = {}.toString;
                module1.exports = Array.isArray || function(arr) {
                    return '[object Array]' == toString.call(arr);
                };
            },
            "./node_modules/duplexify/node_modules/readable-stream/lib/_stream_duplex.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var pna = __webpack_require__("./node_modules/process-nextick-args/index.js");
                var objectKeys = Object.keys || function(obj) {
                    var keys = [];
                    for(var key in obj)keys.push(key);
                    return keys;
                };
                module1.exports = Duplex;
                var util = Object.create(__webpack_require__("./node_modules/core-util-is/lib/util.js"));
                util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                var Readable = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_readable.js");
                var Writable = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_writable.js");
                util.inherits(Duplex, Readable);
                var keys = objectKeys(Writable.prototype);
                for(var v = 0; v < keys.length; v++){
                    var method = keys[v];
                    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
                }
                function Duplex(options) {
                    if (!(this instanceof Duplex)) return new Duplex(options);
                    Readable.call(this, options);
                    Writable.call(this, options);
                    if (options && false === options.readable) this.readable = false;
                    if (options && false === options.writable) this.writable = false;
                    this.allowHalfOpen = true;
                    if (options && false === options.allowHalfOpen) this.allowHalfOpen = false;
                    this.once('end', onend);
                }
                Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
                    enumerable: false,
                    get: function() {
                        return this._writableState.highWaterMark;
                    }
                });
                function onend() {
                    if (this.allowHalfOpen || this._writableState.ended) return;
                    pna.nextTick(onEndNT, this);
                }
                function onEndNT(self1) {
                    self1.end();
                }
                Object.defineProperty(Duplex.prototype, 'destroyed', {
                    get: function() {
                        if (void 0 === this._readableState || void 0 === this._writableState) return false;
                        return this._readableState.destroyed && this._writableState.destroyed;
                    },
                    set: function(value) {
                        if (void 0 === this._readableState || void 0 === this._writableState) return;
                        this._readableState.destroyed = value;
                        this._writableState.destroyed = value;
                    }
                });
                Duplex.prototype._destroy = function(err, cb) {
                    this.push(null);
                    this.end();
                    pna.nextTick(cb, err);
                };
            },
            "./node_modules/duplexify/node_modules/readable-stream/lib/_stream_passthrough.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                module1.exports = PassThrough;
                var Transform = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_transform.js");
                var util = Object.create(__webpack_require__("./node_modules/core-util-is/lib/util.js"));
                util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                util.inherits(PassThrough, Transform);
                function PassThrough(options) {
                    if (!(this instanceof PassThrough)) return new PassThrough(options);
                    Transform.call(this, options);
                }
                PassThrough.prototype._transform = function(chunk, encoding, cb) {
                    cb(null, chunk);
                };
            },
            "./node_modules/duplexify/node_modules/readable-stream/lib/_stream_readable.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var process = __webpack_require__("./node_modules/process/browser.js");
                var pna = __webpack_require__("./node_modules/process-nextick-args/index.js");
                module1.exports = Readable;
                var isArray = __webpack_require__("./node_modules/duplexify/node_modules/isarray/index.js");
                var Duplex;
                Readable.ReadableState = ReadableState;
                __webpack_require__("./node_modules/events/events.js").EventEmitter;
                var EElistenerCount = function(emitter, type) {
                    return emitter.listeners(type).length;
                };
                var Stream = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/internal/streams/stream-browser.js");
                var Buffer = __webpack_require__("./node_modules/duplexify/node_modules/safe-buffer/index.js").Buffer;
                var OurUint8Array = (void 0 !== __webpack_require__.g ? __webpack_require__.g : "u" > typeof window ? window : "u" > typeof self ? self : {}).Uint8Array || function() {};
                function _uint8ArrayToBuffer(chunk) {
                    return Buffer.from(chunk);
                }
                function _isUint8Array(obj) {
                    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
                }
                var util = Object.create(__webpack_require__("./node_modules/core-util-is/lib/util.js"));
                util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                var debugUtil = __webpack_require__("?c5fd");
                var debug = void 0;
                debug = debugUtil && debugUtil.debuglog ? debugUtil.debuglog('stream') : function() {};
                var BufferList = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/internal/streams/BufferList.js");
                var destroyImpl = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/internal/streams/destroy.js");
                var StringDecoder;
                util.inherits(Readable, Stream);
                var kProxyEvents = [
                    'error',
                    'close',
                    'destroy',
                    'pause',
                    'resume'
                ];
                function prependListener(emitter, event, fn) {
                    if ('function' == typeof emitter.prependListener) return emitter.prependListener(event, fn);
                    if (emitter._events && emitter._events[event]) if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);
                    else emitter._events[event] = [
                        fn,
                        emitter._events[event]
                    ];
                    else emitter.on(event, fn);
                }
                function ReadableState(options, stream) {
                    Duplex = Duplex || __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_duplex.js");
                    options = options || {};
                    var isDuplex = stream instanceof Duplex;
                    this.objectMode = !!options.objectMode;
                    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
                    var hwm = options.highWaterMark;
                    var readableHwm = options.readableHighWaterMark;
                    var defaultHwm = this.objectMode ? 16 : 16384;
                    if (hwm || 0 === hwm) this.highWaterMark = hwm;
                    else if (isDuplex && (readableHwm || 0 === readableHwm)) this.highWaterMark = readableHwm;
                    else this.highWaterMark = defaultHwm;
                    this.highWaterMark = Math.floor(this.highWaterMark);
                    this.buffer = new BufferList();
                    this.length = 0;
                    this.pipes = null;
                    this.pipesCount = 0;
                    this.flowing = null;
                    this.ended = false;
                    this.endEmitted = false;
                    this.reading = false;
                    this.sync = true;
                    this.needReadable = false;
                    this.emittedReadable = false;
                    this.readableListening = false;
                    this.resumeScheduled = false;
                    this.destroyed = false;
                    this.defaultEncoding = options.defaultEncoding || 'utf8';
                    this.awaitDrain = 0;
                    this.readingMore = false;
                    this.decoder = null;
                    this.encoding = null;
                    if (options.encoding) {
                        if (!StringDecoder) StringDecoder = __webpack_require__("./node_modules/duplexify/node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
                        this.decoder = new StringDecoder(options.encoding);
                        this.encoding = options.encoding;
                    }
                }
                function Readable(options) {
                    Duplex = Duplex || __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_duplex.js");
                    if (!(this instanceof Readable)) return new Readable(options);
                    this._readableState = new ReadableState(options, this);
                    this.readable = true;
                    if (options) {
                        if ('function' == typeof options.read) this._read = options.read;
                        if ('function' == typeof options.destroy) this._destroy = options.destroy;
                    }
                    Stream.call(this);
                }
                Object.defineProperty(Readable.prototype, 'destroyed', {
                    get: function() {
                        if (void 0 === this._readableState) return false;
                        return this._readableState.destroyed;
                    },
                    set: function(value) {
                        if (!this._readableState) return;
                        this._readableState.destroyed = value;
                    }
                });
                Readable.prototype.destroy = destroyImpl.destroy;
                Readable.prototype._undestroy = destroyImpl.undestroy;
                Readable.prototype._destroy = function(err, cb) {
                    this.push(null);
                    cb(err);
                };
                Readable.prototype.push = function(chunk, encoding) {
                    var state = this._readableState;
                    var skipChunkCheck;
                    if (state.objectMode) skipChunkCheck = true;
                    else if ('string' == typeof chunk) {
                        encoding = encoding || state.defaultEncoding;
                        if (encoding !== state.encoding) {
                            chunk = Buffer.from(chunk, encoding);
                            encoding = '';
                        }
                        skipChunkCheck = true;
                    }
                    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
                };
                Readable.prototype.unshift = function(chunk) {
                    return readableAddChunk(this, chunk, null, true, false);
                };
                function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
                    var state = stream._readableState;
                    if (null === chunk) {
                        state.reading = false;
                        onEofChunk(stream, state);
                    } else {
                        var er;
                        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
                        if (er) stream.emit('error', er);
                        else if (state.objectMode || chunk && chunk.length > 0) {
                            if ('string' != typeof chunk && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) chunk = _uint8ArrayToBuffer(chunk);
                            if (addToFront) if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));
                            else addChunk(stream, state, chunk, true);
                            else if (state.ended) stream.emit('error', new Error('stream.push() after EOF'));
                            else {
                                state.reading = false;
                                if (state.decoder && !encoding) {
                                    chunk = state.decoder.write(chunk);
                                    if (state.objectMode || 0 !== chunk.length) addChunk(stream, state, chunk, false);
                                    else maybeReadMore(stream, state);
                                } else addChunk(stream, state, chunk, false);
                            }
                        } else if (!addToFront) state.reading = false;
                    }
                    return needMoreData(state);
                }
                function addChunk(stream, state, chunk, addToFront) {
                    if (state.flowing && 0 === state.length && !state.sync) {
                        stream.emit('data', chunk);
                        stream.read(0);
                    } else {
                        state.length += state.objectMode ? 1 : chunk.length;
                        if (addToFront) state.buffer.unshift(chunk);
                        else state.buffer.push(chunk);
                        if (state.needReadable) emitReadable(stream);
                    }
                    maybeReadMore(stream, state);
                }
                function chunkInvalid(state, chunk) {
                    var er;
                    if (!_isUint8Array(chunk) && 'string' != typeof chunk && void 0 !== chunk && !state.objectMode) er = new TypeError('Invalid non-string/buffer chunk');
                    return er;
                }
                function needMoreData(state) {
                    return !state.ended && (state.needReadable || state.length < state.highWaterMark || 0 === state.length);
                }
                Readable.prototype.isPaused = function() {
                    return false === this._readableState.flowing;
                };
                Readable.prototype.setEncoding = function(enc) {
                    if (!StringDecoder) StringDecoder = __webpack_require__("./node_modules/duplexify/node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
                    this._readableState.decoder = new StringDecoder(enc);
                    this._readableState.encoding = enc;
                    return this;
                };
                var MAX_HWM = 0x800000;
                function computeNewHighWaterMark(n) {
                    if (n >= MAX_HWM) n = MAX_HWM;
                    else {
                        n--;
                        n |= n >>> 1;
                        n |= n >>> 2;
                        n |= n >>> 4;
                        n |= n >>> 8;
                        n |= n >>> 16;
                        n++;
                    }
                    return n;
                }
                function howMuchToRead(n, state) {
                    if (n <= 0 || 0 === state.length && state.ended) return 0;
                    if (state.objectMode) return 1;
                    if (n !== n) if (state.flowing && state.length) return state.buffer.head.data.length;
                    else return state.length;
                    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
                    if (n <= state.length) return n;
                    if (!state.ended) {
                        state.needReadable = true;
                        return 0;
                    }
                    return state.length;
                }
                Readable.prototype.read = function(n) {
                    debug('read', n);
                    n = parseInt(n, 10);
                    var state = this._readableState;
                    var nOrig = n;
                    if (0 !== n) state.emittedReadable = false;
                    if (0 === n && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
                        debug('read: emitReadable', state.length, state.ended);
                        if (0 === state.length && state.ended) endReadable(this);
                        else emitReadable(this);
                        return null;
                    }
                    n = howMuchToRead(n, state);
                    if (0 === n && state.ended) {
                        if (0 === state.length) endReadable(this);
                        return null;
                    }
                    var doRead = state.needReadable;
                    debug('need readable', doRead);
                    if (0 === state.length || state.length - n < state.highWaterMark) {
                        doRead = true;
                        debug('length less than watermark', doRead);
                    }
                    if (state.ended || state.reading) {
                        doRead = false;
                        debug('reading or ended', doRead);
                    } else if (doRead) {
                        debug('do read');
                        state.reading = true;
                        state.sync = true;
                        if (0 === state.length) state.needReadable = true;
                        this._read(state.highWaterMark);
                        state.sync = false;
                        if (!state.reading) n = howMuchToRead(nOrig, state);
                    }
                    var ret;
                    ret = n > 0 ? fromList(n, state) : null;
                    if (null === ret) {
                        state.needReadable = true;
                        n = 0;
                    } else state.length -= n;
                    if (0 === state.length) {
                        if (!state.ended) state.needReadable = true;
                        if (nOrig !== n && state.ended) endReadable(this);
                    }
                    if (null !== ret) this.emit('data', ret);
                    return ret;
                };
                function onEofChunk(stream, state) {
                    if (state.ended) return;
                    if (state.decoder) {
                        var chunk = state.decoder.end();
                        if (chunk && chunk.length) {
                            state.buffer.push(chunk);
                            state.length += state.objectMode ? 1 : chunk.length;
                        }
                    }
                    state.ended = true;
                    emitReadable(stream);
                }
                function emitReadable(stream) {
                    var state = stream._readableState;
                    state.needReadable = false;
                    if (!state.emittedReadable) {
                        debug('emitReadable', state.flowing);
                        state.emittedReadable = true;
                        if (state.sync) pna.nextTick(emitReadable_, stream);
                        else emitReadable_(stream);
                    }
                }
                function emitReadable_(stream) {
                    debug('emit readable');
                    stream.emit('readable');
                    flow(stream);
                }
                function maybeReadMore(stream, state) {
                    if (!state.readingMore) {
                        state.readingMore = true;
                        pna.nextTick(maybeReadMore_, stream, state);
                    }
                }
                function maybeReadMore_(stream, state) {
                    var len = state.length;
                    while(!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark){
                        debug('maybeReadMore read 0');
                        stream.read(0);
                        if (len === state.length) break;
                        len = state.length;
                    }
                    state.readingMore = false;
                }
                Readable.prototype._read = function(n) {
                    this.emit('error', new Error('_read() is not implemented'));
                };
                Readable.prototype.pipe = function(dest, pipeOpts) {
                    var src = this;
                    var state = this._readableState;
                    switch(state.pipesCount){
                        case 0:
                            state.pipes = dest;
                            break;
                        case 1:
                            state.pipes = [
                                state.pipes,
                                dest
                            ];
                            break;
                        default:
                            state.pipes.push(dest);
                            break;
                    }
                    state.pipesCount += 1;
                    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
                    var doEnd = (!pipeOpts || false !== pipeOpts.end) && dest !== process.stdout && dest !== process.stderr;
                    var endFn = doEnd ? onend : unpipe;
                    if (state.endEmitted) pna.nextTick(endFn);
                    else src.once('end', endFn);
                    dest.on('unpipe', onunpipe);
                    function onunpipe(readable, unpipeInfo) {
                        debug('onunpipe');
                        if (readable === src) {
                            if (unpipeInfo && false === unpipeInfo.hasUnpiped) {
                                unpipeInfo.hasUnpiped = true;
                                cleanup();
                            }
                        }
                    }
                    function onend() {
                        debug('onend');
                        dest.end();
                    }
                    var ondrain = pipeOnDrain(src);
                    dest.on('drain', ondrain);
                    var cleanedUp = false;
                    function cleanup() {
                        debug('cleanup');
                        dest.removeListener('close', onclose);
                        dest.removeListener('finish', onfinish);
                        dest.removeListener('drain', ondrain);
                        dest.removeListener('error', onerror);
                        dest.removeListener('unpipe', onunpipe);
                        src.removeListener('end', onend);
                        src.removeListener('end', unpipe);
                        src.removeListener('data', ondata);
                        cleanedUp = true;
                        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
                    }
                    var increasedAwaitDrain = false;
                    src.on('data', ondata);
                    function ondata(chunk) {
                        debug('ondata');
                        increasedAwaitDrain = false;
                        var ret = dest.write(chunk);
                        if (false === ret && !increasedAwaitDrain) {
                            if ((1 === state.pipesCount && state.pipes === dest || state.pipesCount > 1 && -1 !== indexOf(state.pipes, dest)) && !cleanedUp) {
                                debug('false write response, pause', state.awaitDrain);
                                state.awaitDrain++;
                                increasedAwaitDrain = true;
                            }
                            src.pause();
                        }
                    }
                    function onerror(er) {
                        debug('onerror', er);
                        unpipe();
                        dest.removeListener('error', onerror);
                        if (0 === EElistenerCount(dest, 'error')) dest.emit('error', er);
                    }
                    prependListener(dest, 'error', onerror);
                    function onclose() {
                        dest.removeListener('finish', onfinish);
                        unpipe();
                    }
                    dest.once('close', onclose);
                    function onfinish() {
                        debug('onfinish');
                        dest.removeListener('close', onclose);
                        unpipe();
                    }
                    dest.once('finish', onfinish);
                    function unpipe() {
                        debug('unpipe');
                        src.unpipe(dest);
                    }
                    dest.emit('pipe', src);
                    if (!state.flowing) {
                        debug('pipe resume');
                        src.resume();
                    }
                    return dest;
                };
                function pipeOnDrain(src) {
                    return function() {
                        var state = src._readableState;
                        debug('pipeOnDrain', state.awaitDrain);
                        if (state.awaitDrain) state.awaitDrain--;
                        if (0 === state.awaitDrain && EElistenerCount(src, 'data')) {
                            state.flowing = true;
                            flow(src);
                        }
                    };
                }
                Readable.prototype.unpipe = function(dest) {
                    var state = this._readableState;
                    var unpipeInfo = {
                        hasUnpiped: false
                    };
                    if (0 === state.pipesCount) return this;
                    if (1 === state.pipesCount) {
                        if (dest && dest !== state.pipes) return this;
                        if (!dest) dest = state.pipes;
                        state.pipes = null;
                        state.pipesCount = 0;
                        state.flowing = false;
                        if (dest) dest.emit('unpipe', this, unpipeInfo);
                        return this;
                    }
                    if (!dest) {
                        var dests = state.pipes;
                        var len = state.pipesCount;
                        state.pipes = null;
                        state.pipesCount = 0;
                        state.flowing = false;
                        for(var i = 0; i < len; i++)dests[i].emit('unpipe', this, {
                            hasUnpiped: false
                        });
                        return this;
                    }
                    var index = indexOf(state.pipes, dest);
                    if (-1 === index) return this;
                    state.pipes.splice(index, 1);
                    state.pipesCount -= 1;
                    if (1 === state.pipesCount) state.pipes = state.pipes[0];
                    dest.emit('unpipe', this, unpipeInfo);
                    return this;
                };
                Readable.prototype.on = function(ev, fn) {
                    var res = Stream.prototype.on.call(this, ev, fn);
                    if ('data' === ev) {
                        if (false !== this._readableState.flowing) this.resume();
                    } else if ('readable' === ev) {
                        var state = this._readableState;
                        if (!state.endEmitted && !state.readableListening) {
                            state.readableListening = state.needReadable = true;
                            state.emittedReadable = false;
                            if (state.reading) {
                                if (state.length) emitReadable(this);
                            } else pna.nextTick(nReadingNextTick, this);
                        }
                    }
                    return res;
                };
                Readable.prototype.addListener = Readable.prototype.on;
                function nReadingNextTick(self1) {
                    debug('readable nexttick read 0');
                    self1.read(0);
                }
                Readable.prototype.resume = function() {
                    var state = this._readableState;
                    if (!state.flowing) {
                        debug('resume');
                        state.flowing = true;
                        resume(this, state);
                    }
                    return this;
                };
                function resume(stream, state) {
                    if (!state.resumeScheduled) {
                        state.resumeScheduled = true;
                        pna.nextTick(resume_, stream, state);
                    }
                }
                function resume_(stream, state) {
                    if (!state.reading) {
                        debug('resume read 0');
                        stream.read(0);
                    }
                    state.resumeScheduled = false;
                    state.awaitDrain = 0;
                    stream.emit('resume');
                    flow(stream);
                    if (state.flowing && !state.reading) stream.read(0);
                }
                Readable.prototype.pause = function() {
                    debug('call pause flowing=%j', this._readableState.flowing);
                    if (false !== this._readableState.flowing) {
                        debug('pause');
                        this._readableState.flowing = false;
                        this.emit('pause');
                    }
                    return this;
                };
                function flow(stream) {
                    var state = stream._readableState;
                    debug('flow', state.flowing);
                    while(state.flowing && null !== stream.read());
                }
                Readable.prototype.wrap = function(stream) {
                    var _this = this;
                    var state = this._readableState;
                    var paused = false;
                    stream.on('end', function() {
                        debug('wrapped end');
                        if (state.decoder && !state.ended) {
                            var chunk = state.decoder.end();
                            if (chunk && chunk.length) _this.push(chunk);
                        }
                        _this.push(null);
                    });
                    stream.on('data', function(chunk) {
                        debug('wrapped data');
                        if (state.decoder) chunk = state.decoder.write(chunk);
                        if (state.objectMode && null == chunk) return;
                        if (!state.objectMode && (!chunk || !chunk.length)) return;
                        var ret = _this.push(chunk);
                        if (!ret) {
                            paused = true;
                            stream.pause();
                        }
                    });
                    for(var i in stream)if (void 0 === this[i] && 'function' == typeof stream[i]) this[i] = function(method) {
                        return function() {
                            return stream[method].apply(stream, arguments);
                        };
                    }(i);
                    for(var n = 0; n < kProxyEvents.length; n++)stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
                    this._read = function(n) {
                        debug('wrapped _read', n);
                        if (paused) {
                            paused = false;
                            stream.resume();
                        }
                    };
                    return this;
                };
                Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
                    enumerable: false,
                    get: function() {
                        return this._readableState.highWaterMark;
                    }
                });
                Readable._fromList = fromList;
                function fromList(n, state) {
                    if (0 === state.length) return null;
                    var ret;
                    if (state.objectMode) ret = state.buffer.shift();
                    else if (!n || n >= state.length) {
                        ret = state.decoder ? state.buffer.join('') : 1 === state.buffer.length ? state.buffer.head.data : state.buffer.concat(state.length);
                        state.buffer.clear();
                    } else ret = fromListPartial(n, state.buffer, state.decoder);
                    return ret;
                }
                function fromListPartial(n, list, hasStrings) {
                    var ret;
                    if (n < list.head.data.length) {
                        ret = list.head.data.slice(0, n);
                        list.head.data = list.head.data.slice(n);
                    } else ret = n === list.head.data.length ? list.shift() : hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
                    return ret;
                }
                function copyFromBufferString(n, list) {
                    var p = list.head;
                    var c = 1;
                    var ret = p.data;
                    n -= ret.length;
                    while(p = p.next){
                        var str = p.data;
                        var nb = n > str.length ? str.length : n;
                        if (nb === str.length) ret += str;
                        else ret += str.slice(0, n);
                        n -= nb;
                        if (0 === n) {
                            if (nb === str.length) {
                                ++c;
                                if (p.next) list.head = p.next;
                                else list.head = list.tail = null;
                            } else {
                                list.head = p;
                                p.data = str.slice(nb);
                            }
                            break;
                        }
                        ++c;
                    }
                    list.length -= c;
                    return ret;
                }
                function copyFromBuffer(n, list) {
                    var ret = Buffer.allocUnsafe(n);
                    var p = list.head;
                    var c = 1;
                    p.data.copy(ret);
                    n -= p.data.length;
                    while(p = p.next){
                        var buf = p.data;
                        var nb = n > buf.length ? buf.length : n;
                        buf.copy(ret, ret.length - n, 0, nb);
                        n -= nb;
                        if (0 === n) {
                            if (nb === buf.length) {
                                ++c;
                                if (p.next) list.head = p.next;
                                else list.head = list.tail = null;
                            } else {
                                list.head = p;
                                p.data = buf.slice(nb);
                            }
                            break;
                        }
                        ++c;
                    }
                    list.length -= c;
                    return ret;
                }
                function endReadable(stream) {
                    var state = stream._readableState;
                    if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                    if (!state.endEmitted) {
                        state.ended = true;
                        pna.nextTick(endReadableNT, state, stream);
                    }
                }
                function endReadableNT(state, stream) {
                    if (!state.endEmitted && 0 === state.length) {
                        state.endEmitted = true;
                        stream.readable = false;
                        stream.emit('end');
                    }
                }
                function indexOf(xs, x) {
                    for(var i = 0, l = xs.length; i < l; i++)if (xs[i] === x) return i;
                    return -1;
                }
            },
            "./node_modules/duplexify/node_modules/readable-stream/lib/_stream_transform.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                module1.exports = Transform;
                var Duplex = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_duplex.js");
                var util = Object.create(__webpack_require__("./node_modules/core-util-is/lib/util.js"));
                util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                util.inherits(Transform, Duplex);
                function afterTransform(er, data) {
                    var ts = this._transformState;
                    ts.transforming = false;
                    var cb = ts.writecb;
                    if (!cb) return this.emit('error', new Error('write callback called multiple times'));
                    ts.writechunk = null;
                    ts.writecb = null;
                    if (null != data) this.push(data);
                    cb(er);
                    var rs = this._readableState;
                    rs.reading = false;
                    if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
                }
                function Transform(options) {
                    if (!(this instanceof Transform)) return new Transform(options);
                    Duplex.call(this, options);
                    this._transformState = {
                        afterTransform: afterTransform.bind(this),
                        needTransform: false,
                        transforming: false,
                        writecb: null,
                        writechunk: null,
                        writeencoding: null
                    };
                    this._readableState.needReadable = true;
                    this._readableState.sync = false;
                    if (options) {
                        if ('function' == typeof options.transform) this._transform = options.transform;
                        if ('function' == typeof options.flush) this._flush = options.flush;
                    }
                    this.on('prefinish', prefinish);
                }
                function prefinish() {
                    var _this = this;
                    if ('function' == typeof this._flush) this._flush(function(er, data) {
                        done(_this, er, data);
                    });
                    else done(this, null, null);
                }
                Transform.prototype.push = function(chunk, encoding) {
                    this._transformState.needTransform = false;
                    return Duplex.prototype.push.call(this, chunk, encoding);
                };
                Transform.prototype._transform = function(chunk, encoding, cb) {
                    throw new Error('_transform() is not implemented');
                };
                Transform.prototype._write = function(chunk, encoding, cb) {
                    var ts = this._transformState;
                    ts.writecb = cb;
                    ts.writechunk = chunk;
                    ts.writeencoding = encoding;
                    if (!ts.transforming) {
                        var rs = this._readableState;
                        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
                    }
                };
                Transform.prototype._read = function(n) {
                    var ts = this._transformState;
                    if (null !== ts.writechunk && ts.writecb && !ts.transforming) {
                        ts.transforming = true;
                        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
                    } else ts.needTransform = true;
                };
                Transform.prototype._destroy = function(err, cb) {
                    var _this2 = this;
                    Duplex.prototype._destroy.call(this, err, function(err2) {
                        cb(err2);
                        _this2.emit('close');
                    });
                };
                function done(stream, er, data) {
                    if (er) return stream.emit('error', er);
                    if (null != data) stream.push(data);
                    if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');
                    if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');
                    return stream.push(null);
                }
            },
            "./node_modules/duplexify/node_modules/readable-stream/lib/_stream_writable.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var process = __webpack_require__("./node_modules/process/browser.js");
                var pna = __webpack_require__("./node_modules/process-nextick-args/index.js");
                module1.exports = Writable;
                function CorkedRequest(state) {
                    var _this = this;
                    this.next = null;
                    this.entry = null;
                    this.finish = function() {
                        onCorkedFinish(_this, state);
                    };
                }
                var asyncWrite = !process.browser && [
                    'v0.10',
                    'v0.9.'
                ].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
                var Duplex;
                Writable.WritableState = WritableState;
                var util = Object.create(__webpack_require__("./node_modules/core-util-is/lib/util.js"));
                util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                var internalUtil = {
                    deprecate: __webpack_require__("./node_modules/util-deprecate/browser.js")
                };
                var Stream = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/internal/streams/stream-browser.js");
                var Buffer = __webpack_require__("./node_modules/duplexify/node_modules/safe-buffer/index.js").Buffer;
                var OurUint8Array = (void 0 !== __webpack_require__.g ? __webpack_require__.g : "u" > typeof window ? window : "u" > typeof self ? self : {}).Uint8Array || function() {};
                function _uint8ArrayToBuffer(chunk) {
                    return Buffer.from(chunk);
                }
                function _isUint8Array(obj) {
                    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
                }
                var destroyImpl = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/internal/streams/destroy.js");
                util.inherits(Writable, Stream);
                function nop() {}
                function WritableState(options, stream) {
                    Duplex = Duplex || __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_duplex.js");
                    options = options || {};
                    var isDuplex = stream instanceof Duplex;
                    this.objectMode = !!options.objectMode;
                    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
                    var hwm = options.highWaterMark;
                    var writableHwm = options.writableHighWaterMark;
                    var defaultHwm = this.objectMode ? 16 : 16384;
                    if (hwm || 0 === hwm) this.highWaterMark = hwm;
                    else if (isDuplex && (writableHwm || 0 === writableHwm)) this.highWaterMark = writableHwm;
                    else this.highWaterMark = defaultHwm;
                    this.highWaterMark = Math.floor(this.highWaterMark);
                    this.finalCalled = false;
                    this.needDrain = false;
                    this.ending = false;
                    this.ended = false;
                    this.finished = false;
                    this.destroyed = false;
                    var noDecode = false === options.decodeStrings;
                    this.decodeStrings = !noDecode;
                    this.defaultEncoding = options.defaultEncoding || 'utf8';
                    this.length = 0;
                    this.writing = false;
                    this.corked = 0;
                    this.sync = true;
                    this.bufferProcessing = false;
                    this.onwrite = function(er) {
                        onwrite(stream, er);
                    };
                    this.writecb = null;
                    this.writelen = 0;
                    this.bufferedRequest = null;
                    this.lastBufferedRequest = null;
                    this.pendingcb = 0;
                    this.prefinished = false;
                    this.errorEmitted = false;
                    this.bufferedRequestCount = 0;
                    this.corkedRequestsFree = new CorkedRequest(this);
                }
                WritableState.prototype.getBuffer = function() {
                    var current = this.bufferedRequest;
                    var out = [];
                    while(current){
                        out.push(current);
                        current = current.next;
                    }
                    return out;
                };
                (function() {
                    try {
                        Object.defineProperty(WritableState.prototype, 'buffer', {
                            get: internalUtil.deprecate(function() {
                                return this.getBuffer();
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", 'DEP0003')
                        });
                    } catch (_) {}
                })();
                var realHasInstance;
                if ('function' == typeof Symbol && Symbol.hasInstance && 'function' == typeof Function.prototype[Symbol.hasInstance]) {
                    realHasInstance = Function.prototype[Symbol.hasInstance];
                    Object.defineProperty(Writable, Symbol.hasInstance, {
                        value: function(object) {
                            if (realHasInstance.call(this, object)) return true;
                            if (this !== Writable) return false;
                            return object && object._writableState instanceof WritableState;
                        }
                    });
                } else realHasInstance = function(object) {
                    return object instanceof this;
                };
                function Writable(options) {
                    Duplex = Duplex || __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_duplex.js");
                    if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) return new Writable(options);
                    this._writableState = new WritableState(options, this);
                    this.writable = true;
                    if (options) {
                        if ('function' == typeof options.write) this._write = options.write;
                        if ('function' == typeof options.writev) this._writev = options.writev;
                        if ('function' == typeof options.destroy) this._destroy = options.destroy;
                        if ('function' == typeof options.final) this._final = options.final;
                    }
                    Stream.call(this);
                }
                Writable.prototype.pipe = function() {
                    this.emit('error', new Error('Cannot pipe, not readable'));
                };
                function writeAfterEnd(stream, cb) {
                    var er = new Error('write after end');
                    stream.emit('error', er);
                    pna.nextTick(cb, er);
                }
                function validChunk(stream, state, chunk, cb) {
                    var valid = true;
                    var er = false;
                    if (null === chunk) er = new TypeError('May not write null values to stream');
                    else if ('string' != typeof chunk && void 0 !== chunk && !state.objectMode) er = new TypeError('Invalid non-string/buffer chunk');
                    if (er) {
                        stream.emit('error', er);
                        pna.nextTick(cb, er);
                        valid = false;
                    }
                    return valid;
                }
                Writable.prototype.write = function(chunk, encoding, cb) {
                    var state = this._writableState;
                    var ret = false;
                    var isBuf = !state.objectMode && _isUint8Array(chunk);
                    if (isBuf && !Buffer.isBuffer(chunk)) chunk = _uint8ArrayToBuffer(chunk);
                    if ('function' == typeof encoding) {
                        cb = encoding;
                        encoding = null;
                    }
                    if (isBuf) encoding = 'buffer';
                    else if (!encoding) encoding = state.defaultEncoding;
                    if ('function' != typeof cb) cb = nop;
                    if (state.ended) writeAfterEnd(this, cb);
                    else if (isBuf || validChunk(this, state, chunk, cb)) {
                        state.pendingcb++;
                        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
                    }
                    return ret;
                };
                Writable.prototype.cork = function() {
                    var state = this._writableState;
                    state.corked++;
                };
                Writable.prototype.uncork = function() {
                    var state = this._writableState;
                    if (state.corked) {
                        state.corked--;
                        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
                    }
                };
                Writable.prototype.setDefaultEncoding = function(encoding) {
                    if ('string' == typeof encoding) encoding = encoding.toLowerCase();
                    if (!([
                        'hex',
                        'utf8',
                        'utf-8',
                        'ascii',
                        'binary',
                        'base64',
                        'ucs2',
                        'ucs-2',
                        'utf16le',
                        'utf-16le',
                        'raw'
                    ].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
                    this._writableState.defaultEncoding = encoding;
                    return this;
                };
                function decodeChunk(state, chunk, encoding) {
                    if (!state.objectMode && false !== state.decodeStrings && 'string' == typeof chunk) chunk = Buffer.from(chunk, encoding);
                    return chunk;
                }
                Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
                    enumerable: false,
                    get: function() {
                        return this._writableState.highWaterMark;
                    }
                });
                function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
                    if (!isBuf) {
                        var newChunk = decodeChunk(state, chunk, encoding);
                        if (chunk !== newChunk) {
                            isBuf = true;
                            encoding = 'buffer';
                            chunk = newChunk;
                        }
                    }
                    var len = state.objectMode ? 1 : chunk.length;
                    state.length += len;
                    var ret = state.length < state.highWaterMark;
                    if (!ret) state.needDrain = true;
                    if (state.writing || state.corked) {
                        var last = state.lastBufferedRequest;
                        state.lastBufferedRequest = {
                            chunk: chunk,
                            encoding: encoding,
                            isBuf: isBuf,
                            callback: cb,
                            next: null
                        };
                        if (last) last.next = state.lastBufferedRequest;
                        else state.bufferedRequest = state.lastBufferedRequest;
                        state.bufferedRequestCount += 1;
                    } else doWrite(stream, state, false, len, chunk, encoding, cb);
                    return ret;
                }
                function doWrite(stream, state, writev, len, chunk, encoding, cb) {
                    state.writelen = len;
                    state.writecb = cb;
                    state.writing = true;
                    state.sync = true;
                    if (writev) stream._writev(chunk, state.onwrite);
                    else stream._write(chunk, encoding, state.onwrite);
                    state.sync = false;
                }
                function onwriteError(stream, state, sync, er, cb) {
                    --state.pendingcb;
                    if (sync) {
                        pna.nextTick(cb, er);
                        pna.nextTick(finishMaybe, stream, state);
                        stream._writableState.errorEmitted = true;
                        stream.emit('error', er);
                    } else {
                        cb(er);
                        stream._writableState.errorEmitted = true;
                        stream.emit('error', er);
                        finishMaybe(stream, state);
                    }
                }
                function onwriteStateUpdate(state) {
                    state.writing = false;
                    state.writecb = null;
                    state.length -= state.writelen;
                    state.writelen = 0;
                }
                function onwrite(stream, er) {
                    var state = stream._writableState;
                    var sync = state.sync;
                    var cb = state.writecb;
                    onwriteStateUpdate(state);
                    if (er) onwriteError(stream, state, sync, er, cb);
                    else {
                        var finished = needFinish(state);
                        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(stream, state);
                        if (sync) asyncWrite(afterWrite, stream, state, finished, cb);
                        else afterWrite(stream, state, finished, cb);
                    }
                }
                function afterWrite(stream, state, finished, cb) {
                    if (!finished) onwriteDrain(stream, state);
                    state.pendingcb--;
                    cb();
                    finishMaybe(stream, state);
                }
                function onwriteDrain(stream, state) {
                    if (0 === state.length && state.needDrain) {
                        state.needDrain = false;
                        stream.emit('drain');
                    }
                }
                function clearBuffer(stream, state) {
                    state.bufferProcessing = true;
                    var entry = state.bufferedRequest;
                    if (stream._writev && entry && entry.next) {
                        var l = state.bufferedRequestCount;
                        var buffer = new Array(l);
                        var holder = state.corkedRequestsFree;
                        holder.entry = entry;
                        var count = 0;
                        var allBuffers = true;
                        while(entry){
                            buffer[count] = entry;
                            if (!entry.isBuf) allBuffers = false;
                            entry = entry.next;
                            count += 1;
                        }
                        buffer.allBuffers = allBuffers;
                        doWrite(stream, state, true, state.length, buffer, '', holder.finish);
                        state.pendingcb++;
                        state.lastBufferedRequest = null;
                        if (holder.next) {
                            state.corkedRequestsFree = holder.next;
                            holder.next = null;
                        } else state.corkedRequestsFree = new CorkedRequest(state);
                        state.bufferedRequestCount = 0;
                    } else {
                        while(entry){
                            var chunk = entry.chunk;
                            var encoding = entry.encoding;
                            var cb = entry.callback;
                            var len = state.objectMode ? 1 : chunk.length;
                            doWrite(stream, state, false, len, chunk, encoding, cb);
                            entry = entry.next;
                            state.bufferedRequestCount--;
                            if (state.writing) break;
                        }
                        if (null === entry) state.lastBufferedRequest = null;
                    }
                    state.bufferedRequest = entry;
                    state.bufferProcessing = false;
                }
                Writable.prototype._write = function(chunk, encoding, cb) {
                    cb(new Error('_write() is not implemented'));
                };
                Writable.prototype._writev = null;
                Writable.prototype.end = function(chunk, encoding, cb) {
                    var state = this._writableState;
                    if ('function' == typeof chunk) {
                        cb = chunk;
                        chunk = null;
                        encoding = null;
                    } else if ('function' == typeof encoding) {
                        cb = encoding;
                        encoding = null;
                    }
                    if (null != chunk) this.write(chunk, encoding);
                    if (state.corked) {
                        state.corked = 1;
                        this.uncork();
                    }
                    if (!state.ending) endWritable(this, state, cb);
                };
                function needFinish(state) {
                    return state.ending && 0 === state.length && null === state.bufferedRequest && !state.finished && !state.writing;
                }
                function callFinal(stream, state) {
                    stream._final(function(err) {
                        state.pendingcb--;
                        if (err) stream.emit('error', err);
                        state.prefinished = true;
                        stream.emit('prefinish');
                        finishMaybe(stream, state);
                    });
                }
                function prefinish(stream, state) {
                    if (!state.prefinished && !state.finalCalled) if ('function' == typeof stream._final) {
                        state.pendingcb++;
                        state.finalCalled = true;
                        pna.nextTick(callFinal, stream, state);
                    } else {
                        state.prefinished = true;
                        stream.emit('prefinish');
                    }
                }
                function finishMaybe(stream, state) {
                    var need = needFinish(state);
                    if (need) {
                        prefinish(stream, state);
                        if (0 === state.pendingcb) {
                            state.finished = true;
                            stream.emit('finish');
                        }
                    }
                    return need;
                }
                function endWritable(stream, state, cb) {
                    state.ending = true;
                    finishMaybe(stream, state);
                    if (cb) if (state.finished) pna.nextTick(cb);
                    else stream.once('finish', cb);
                    state.ended = true;
                    stream.writable = false;
                }
                function onCorkedFinish(corkReq, state, err) {
                    var entry = corkReq.entry;
                    corkReq.entry = null;
                    while(entry){
                        var cb = entry.callback;
                        state.pendingcb--;
                        cb(err);
                        entry = entry.next;
                    }
                    state.corkedRequestsFree.next = corkReq;
                }
                Object.defineProperty(Writable.prototype, 'destroyed', {
                    get: function() {
                        if (void 0 === this._writableState) return false;
                        return this._writableState.destroyed;
                    },
                    set: function(value) {
                        if (!this._writableState) return;
                        this._writableState.destroyed = value;
                    }
                });
                Writable.prototype.destroy = destroyImpl.destroy;
                Writable.prototype._undestroy = destroyImpl.undestroy;
                Writable.prototype._destroy = function(err, cb) {
                    this.end();
                    cb(err);
                };
            },
            "./node_modules/duplexify/node_modules/readable-stream/lib/internal/streams/BufferList.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                var Buffer = __webpack_require__("./node_modules/duplexify/node_modules/safe-buffer/index.js").Buffer;
                var util = __webpack_require__("?6dfc");
                function copyBuffer(src, target, offset) {
                    src.copy(target, offset);
                }
                module1.exports = function() {
                    function BufferList() {
                        _classCallCheck(this, BufferList);
                        this.head = null;
                        this.tail = null;
                        this.length = 0;
                    }
                    BufferList.prototype.push = function(v) {
                        var entry = {
                            data: v,
                            next: null
                        };
                        if (this.length > 0) this.tail.next = entry;
                        else this.head = entry;
                        this.tail = entry;
                        ++this.length;
                    };
                    BufferList.prototype.unshift = function(v) {
                        var entry = {
                            data: v,
                            next: this.head
                        };
                        if (0 === this.length) this.tail = entry;
                        this.head = entry;
                        ++this.length;
                    };
                    BufferList.prototype.shift = function() {
                        if (0 === this.length) return;
                        var ret = this.head.data;
                        if (1 === this.length) this.head = this.tail = null;
                        else this.head = this.head.next;
                        --this.length;
                        return ret;
                    };
                    BufferList.prototype.clear = function() {
                        this.head = this.tail = null;
                        this.length = 0;
                    };
                    BufferList.prototype.join = function(s) {
                        if (0 === this.length) return '';
                        var p = this.head;
                        var ret = '' + p.data;
                        while(p = p.next)ret += s + p.data;
                        return ret;
                    };
                    BufferList.prototype.concat = function(n) {
                        if (0 === this.length) return Buffer.alloc(0);
                        var ret = Buffer.allocUnsafe(n >>> 0);
                        var p = this.head;
                        var i = 0;
                        while(p){
                            copyBuffer(p.data, ret, i);
                            i += p.data.length;
                            p = p.next;
                        }
                        return ret;
                    };
                    return BufferList;
                }();
                if (util && util.inspect && util.inspect.custom) module1.exports.prototype[util.inspect.custom] = function() {
                    var obj = util.inspect({
                        length: this.length
                    });
                    return this.constructor.name + ' ' + obj;
                };
            },
            "./node_modules/duplexify/node_modules/readable-stream/lib/internal/streams/destroy.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var pna = __webpack_require__("./node_modules/process-nextick-args/index.js");
                function destroy(err, cb) {
                    var _this = this;
                    var readableDestroyed = this._readableState && this._readableState.destroyed;
                    var writableDestroyed = this._writableState && this._writableState.destroyed;
                    if (readableDestroyed || writableDestroyed) {
                        if (cb) cb(err);
                        else if (err) if (this._writableState) {
                            if (!this._writableState.errorEmitted) {
                                this._writableState.errorEmitted = true;
                                pna.nextTick(emitErrorNT, this, err);
                            }
                        } else pna.nextTick(emitErrorNT, this, err);
                        return this;
                    }
                    if (this._readableState) this._readableState.destroyed = true;
                    if (this._writableState) this._writableState.destroyed = true;
                    this._destroy(err || null, function(err) {
                        if (!cb && err) if (_this._writableState) {
                            if (!_this._writableState.errorEmitted) {
                                _this._writableState.errorEmitted = true;
                                pna.nextTick(emitErrorNT, _this, err);
                            }
                        } else pna.nextTick(emitErrorNT, _this, err);
                        else if (cb) cb(err);
                    });
                    return this;
                }
                function undestroy() {
                    if (this._readableState) {
                        this._readableState.destroyed = false;
                        this._readableState.reading = false;
                        this._readableState.ended = false;
                        this._readableState.endEmitted = false;
                    }
                    if (this._writableState) {
                        this._writableState.destroyed = false;
                        this._writableState.ended = false;
                        this._writableState.ending = false;
                        this._writableState.finalCalled = false;
                        this._writableState.prefinished = false;
                        this._writableState.finished = false;
                        this._writableState.errorEmitted = false;
                    }
                }
                function emitErrorNT(self1, err) {
                    self1.emit('error', err);
                }
                module1.exports = {
                    destroy: destroy,
                    undestroy: undestroy
                };
            },
            "./node_modules/duplexify/node_modules/readable-stream/lib/internal/streams/stream-browser.js" (module1, __unused_rspack_exports, __webpack_require__) {
                module1.exports = __webpack_require__("./node_modules/events/events.js").EventEmitter;
            },
            "./node_modules/duplexify/node_modules/readable-stream/readable-browser.js" (module1, exports1, __webpack_require__) {
                exports1 = module1.exports = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_readable.js");
                exports1.Stream = exports1;
                exports1.Readable = exports1;
                exports1.Writable = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_writable.js");
                exports1.Duplex = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_duplex.js");
                exports1.Transform = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_transform.js");
                exports1.PassThrough = __webpack_require__("./node_modules/duplexify/node_modules/readable-stream/lib/_stream_passthrough.js");
            },
            "./node_modules/duplexify/node_modules/safe-buffer/index.js" (module1, exports1, __webpack_require__) {
                var buffer = __webpack_require__("./node_modules/buffer/index.js");
                var Buffer = buffer.Buffer;
                function copyProps(src, dst) {
                    for(var key in src)dst[key] = src[key];
                }
                if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) module1.exports = buffer;
                else {
                    copyProps(buffer, exports1);
                    exports1.Buffer = SafeBuffer;
                }
                function SafeBuffer(arg, encodingOrOffset, length) {
                    return Buffer(arg, encodingOrOffset, length);
                }
                copyProps(Buffer, SafeBuffer);
                SafeBuffer.from = function(arg, encodingOrOffset, length) {
                    if ('number' == typeof arg) throw new TypeError('Argument must not be a number');
                    return Buffer(arg, encodingOrOffset, length);
                };
                SafeBuffer.alloc = function(size, fill, encoding) {
                    if ('number' != typeof size) throw new TypeError('Argument must be a number');
                    var buf = Buffer(size);
                    if (void 0 !== fill) if ('string' == typeof encoding) buf.fill(fill, encoding);
                    else buf.fill(fill);
                    else buf.fill(0);
                    return buf;
                };
                SafeBuffer.allocUnsafe = function(size) {
                    if ('number' != typeof size) throw new TypeError('Argument must be a number');
                    return Buffer(size);
                };
                SafeBuffer.allocUnsafeSlow = function(size) {
                    if ('number' != typeof size) throw new TypeError('Argument must be a number');
                    return buffer.SlowBuffer(size);
                };
            },
            "./node_modules/duplexify/node_modules/string_decoder/lib/string_decoder.js" (__unused_rspack_module, exports1, __webpack_require__) {
                "use strict";
                var Buffer = __webpack_require__("./node_modules/duplexify/node_modules/safe-buffer/index.js").Buffer;
                var isEncoding = Buffer.isEncoding || function(encoding) {
                    encoding = '' + encoding;
                    switch(encoding && encoding.toLowerCase()){
                        case 'hex':
                        case 'utf8':
                        case 'utf-8':
                        case 'ascii':
                        case 'binary':
                        case 'base64':
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                        case 'raw':
                            return true;
                        default:
                            return false;
                    }
                };
                function _normalizeEncoding(enc) {
                    if (!enc) return 'utf8';
                    var retried;
                    while(true)switch(enc){
                        case 'utf8':
                        case 'utf-8':
                            return 'utf8';
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return 'utf16le';
                        case 'latin1':
                        case 'binary':
                            return 'latin1';
                        case 'base64':
                        case 'ascii':
                        case 'hex':
                            return enc;
                        default:
                            if (retried) return;
                            enc = ('' + enc).toLowerCase();
                            retried = true;
                    }
                }
                function normalizeEncoding(enc) {
                    var nenc = _normalizeEncoding(enc);
                    if ('string' != typeof nenc && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
                    return nenc || enc;
                }
                exports1.StringDecoder = StringDecoder;
                function StringDecoder(encoding) {
                    this.encoding = normalizeEncoding(encoding);
                    var nb;
                    switch(this.encoding){
                        case 'utf16le':
                            this.text = utf16Text;
                            this.end = utf16End;
                            nb = 4;
                            break;
                        case 'utf8':
                            this.fillLast = utf8FillLast;
                            nb = 4;
                            break;
                        case 'base64':
                            this.text = base64Text;
                            this.end = base64End;
                            nb = 3;
                            break;
                        default:
                            this.write = simpleWrite;
                            this.end = simpleEnd;
                            return;
                    }
                    this.lastNeed = 0;
                    this.lastTotal = 0;
                    this.lastChar = Buffer.allocUnsafe(nb);
                }
                StringDecoder.prototype.write = function(buf) {
                    if (0 === buf.length) return '';
                    var r;
                    var i;
                    if (this.lastNeed) {
                        r = this.fillLast(buf);
                        if (void 0 === r) return '';
                        i = this.lastNeed;
                        this.lastNeed = 0;
                    } else i = 0;
                    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
                    return r || '';
                };
                StringDecoder.prototype.end = utf8End;
                StringDecoder.prototype.text = utf8Text;
                StringDecoder.prototype.fillLast = function(buf) {
                    if (this.lastNeed <= buf.length) {
                        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
                        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
                    }
                    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
                    this.lastNeed -= buf.length;
                };
                function utf8CheckByte(byte) {
                    if (byte <= 0x7F) return 0;
                    if (byte >> 5 === 0x06) return 2;
                    if (byte >> 4 === 0x0E) return 3;
                    if (byte >> 3 === 0x1E) return 4;
                    return byte >> 6 === 0x02 ? -1 : -2;
                }
                function utf8CheckIncomplete(self1, buf, i) {
                    var j = buf.length - 1;
                    if (j < i) return 0;
                    var nb = utf8CheckByte(buf[j]);
                    if (nb >= 0) {
                        if (nb > 0) self1.lastNeed = nb - 1;
                        return nb;
                    }
                    if (--j < i || -2 === nb) return 0;
                    nb = utf8CheckByte(buf[j]);
                    if (nb >= 0) {
                        if (nb > 0) self1.lastNeed = nb - 2;
                        return nb;
                    }
                    if (--j < i || -2 === nb) return 0;
                    nb = utf8CheckByte(buf[j]);
                    if (nb >= 0) {
                        if (nb > 0) if (2 === nb) nb = 0;
                        else self1.lastNeed = nb - 3;
                        return nb;
                    }
                    return 0;
                }
                function utf8CheckExtraBytes(self1, buf, p) {
                    if ((0xC0 & buf[0]) !== 0x80) {
                        self1.lastNeed = 0;
                        return '\ufffd';
                    }
                    if (self1.lastNeed > 1 && buf.length > 1) {
                        if ((0xC0 & buf[1]) !== 0x80) {
                            self1.lastNeed = 1;
                            return '\ufffd';
                        }
                        if (self1.lastNeed > 2 && buf.length > 2) {
                            if ((0xC0 & buf[2]) !== 0x80) {
                                self1.lastNeed = 2;
                                return '\ufffd';
                            }
                        }
                    }
                }
                function utf8FillLast(buf) {
                    var p = this.lastTotal - this.lastNeed;
                    var r = utf8CheckExtraBytes(this, buf, p);
                    if (void 0 !== r) return r;
                    if (this.lastNeed <= buf.length) {
                        buf.copy(this.lastChar, p, 0, this.lastNeed);
                        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
                    }
                    buf.copy(this.lastChar, p, 0, buf.length);
                    this.lastNeed -= buf.length;
                }
                function utf8Text(buf, i) {
                    var total = utf8CheckIncomplete(this, buf, i);
                    if (!this.lastNeed) return buf.toString('utf8', i);
                    this.lastTotal = total;
                    var end = buf.length - (total - this.lastNeed);
                    buf.copy(this.lastChar, 0, end);
                    return buf.toString('utf8', i, end);
                }
                function utf8End(buf) {
                    var r = buf && buf.length ? this.write(buf) : '';
                    if (this.lastNeed) return r + '\ufffd';
                    return r;
                }
                function utf16Text(buf, i) {
                    if ((buf.length - i) % 2 === 0) {
                        var r = buf.toString('utf16le', i);
                        if (r) {
                            var c = r.charCodeAt(r.length - 1);
                            if (c >= 0xD800 && c <= 0xDBFF) {
                                this.lastNeed = 2;
                                this.lastTotal = 4;
                                this.lastChar[0] = buf[buf.length - 2];
                                this.lastChar[1] = buf[buf.length - 1];
                                return r.slice(0, -1);
                            }
                        }
                        return r;
                    }
                    this.lastNeed = 1;
                    this.lastTotal = 2;
                    this.lastChar[0] = buf[buf.length - 1];
                    return buf.toString('utf16le', i, buf.length - 1);
                }
                function utf16End(buf) {
                    var r = buf && buf.length ? this.write(buf) : '';
                    if (this.lastNeed) {
                        var end = this.lastTotal - this.lastNeed;
                        return r + this.lastChar.toString('utf16le', 0, end);
                    }
                    return r;
                }
                function base64Text(buf, i) {
                    var n = (buf.length - i) % 3;
                    if (0 === n) return buf.toString('base64', i);
                    this.lastNeed = 3 - n;
                    this.lastTotal = 3;
                    if (1 === n) this.lastChar[0] = buf[buf.length - 1];
                    else {
                        this.lastChar[0] = buf[buf.length - 2];
                        this.lastChar[1] = buf[buf.length - 1];
                    }
                    return buf.toString('base64', i, buf.length - n);
                }
                function base64End(buf) {
                    var r = buf && buf.length ? this.write(buf) : '';
                    if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
                    return r;
                }
                function simpleWrite(buf) {
                    return buf.toString(this.encoding);
                }
                function simpleEnd(buf) {
                    return buf && buf.length ? this.write(buf) : '';
                }
            },
            "./node_modules/end-of-stream/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                var process = __webpack_require__("./node_modules/process/browser.js");
                var once = __webpack_require__("./node_modules/once/once.js");
                var noop = function() {};
                var qnt = __webpack_require__.g.Bare ? queueMicrotask : process.nextTick.bind(process);
                var isRequest = function(stream) {
                    return stream.setHeader && 'function' == typeof stream.abort;
                };
                var isChildProcess = function(stream) {
                    return stream.stdio && Array.isArray(stream.stdio) && 3 === stream.stdio.length;
                };
                var eos = function(stream, opts, callback) {
                    if ('function' == typeof opts) return eos(stream, null, opts);
                    if (!opts) opts = {};
                    callback = once(callback || noop);
                    var ws = stream._writableState;
                    var rs = stream._readableState;
                    var readable = opts.readable || false !== opts.readable && stream.readable;
                    var writable = opts.writable || false !== opts.writable && stream.writable;
                    var cancelled = false;
                    var onlegacyfinish = function() {
                        if (!stream.writable) onfinish();
                    };
                    var onfinish = function() {
                        writable = false;
                        if (!readable) callback.call(stream);
                    };
                    var onend = function() {
                        readable = false;
                        if (!writable) callback.call(stream);
                    };
                    var onexit = function(exitCode) {
                        callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
                    };
                    var onerror = function(err) {
                        callback.call(stream, err);
                    };
                    var onclose = function() {
                        qnt(onclosenexttick);
                    };
                    var onclosenexttick = function() {
                        if (cancelled) return;
                        if (readable && !(rs && rs.ended && !rs.destroyed)) return callback.call(stream, new Error('premature close'));
                        if (writable && !(ws && ws.ended && !ws.destroyed)) return callback.call(stream, new Error('premature close'));
                    };
                    var onrequest = function() {
                        stream.req.on('finish', onfinish);
                    };
                    if (isRequest(stream)) {
                        stream.on('complete', onfinish);
                        stream.on('abort', onclose);
                        if (stream.req) onrequest();
                        else stream.on('request', onrequest);
                    } else if (writable && !ws) {
                        stream.on('end', onlegacyfinish);
                        stream.on('close', onlegacyfinish);
                    }
                    if (isChildProcess(stream)) stream.on('exit', onexit);
                    stream.on('end', onend);
                    stream.on('finish', onfinish);
                    if (false !== opts.error) stream.on('error', onerror);
                    stream.on('close', onclose);
                    return function() {
                        cancelled = true;
                        stream.removeListener('complete', onfinish);
                        stream.removeListener('abort', onclose);
                        stream.removeListener('request', onrequest);
                        if (stream.req) stream.req.removeListener('finish', onfinish);
                        stream.removeListener('end', onlegacyfinish);
                        stream.removeListener('close', onlegacyfinish);
                        stream.removeListener('finish', onfinish);
                        stream.removeListener('exit', onexit);
                        stream.removeListener('end', onend);
                        stream.removeListener('error', onerror);
                        stream.removeListener('close', onclose);
                    };
                };
                module1.exports = eos;
            },
            "./node_modules/es-define-property/index.js" (module1) {
                "use strict";
                var $defineProperty = Object.defineProperty || false;
                if ($defineProperty) try {
                    $defineProperty({}, 'a', {
                        value: 1
                    });
                } catch (e) {
                    $defineProperty = false;
                }
                module1.exports = $defineProperty;
            },
            "./node_modules/es-errors/eval.js" (module1) {
                "use strict";
                module1.exports = EvalError;
            },
            "./node_modules/es-errors/index.js" (module1) {
                "use strict";
                module1.exports = Error;
            },
            "./node_modules/es-errors/range.js" (module1) {
                "use strict";
                module1.exports = RangeError;
            },
            "./node_modules/es-errors/ref.js" (module1) {
                "use strict";
                module1.exports = ReferenceError;
            },
            "./node_modules/es-errors/syntax.js" (module1) {
                "use strict";
                module1.exports = SyntaxError;
            },
            "./node_modules/es-errors/type.js" (module1) {
                "use strict";
                module1.exports = TypeError;
            },
            "./node_modules/es-errors/uri.js" (module1) {
                "use strict";
                module1.exports = URIError;
            },
            "./node_modules/es-object-atoms/index.js" (module1) {
                "use strict";
                module1.exports = Object;
            },
            "./node_modules/events/events.js" (module1) {
                "use strict";
                var R = 'object' == typeof Reflect ? Reflect : null;
                var ReflectApply = R && 'function' == typeof R.apply ? R.apply : function(target, receiver, args) {
                    return Function.prototype.apply.call(target, receiver, args);
                };
                var ReflectOwnKeys;
                ReflectOwnKeys = R && 'function' == typeof R.ownKeys ? R.ownKeys : Object.getOwnPropertySymbols ? function(target) {
                    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
                } : function(target) {
                    return Object.getOwnPropertyNames(target);
                };
                function ProcessEmitWarning(warning) {
                    if (console && console.warn) console.warn(warning);
                }
                var NumberIsNaN = Number.isNaN || function(value) {
                    return value !== value;
                };
                function EventEmitter() {
                    EventEmitter.init.call(this);
                }
                module1.exports = EventEmitter;
                module1.exports.once = once;
                EventEmitter.EventEmitter = EventEmitter;
                EventEmitter.prototype._events = void 0;
                EventEmitter.prototype._eventsCount = 0;
                EventEmitter.prototype._maxListeners = void 0;
                var defaultMaxListeners = 10;
                function checkListener(listener) {
                    if ('function' != typeof listener) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
                }
                Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
                    enumerable: true,
                    get: function() {
                        return defaultMaxListeners;
                    },
                    set: function(arg) {
                        if ('number' != typeof arg || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
                        defaultMaxListeners = arg;
                    }
                });
                EventEmitter.init = function() {
                    if (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) {
                        this._events = Object.create(null);
                        this._eventsCount = 0;
                    }
                    this._maxListeners = this._maxListeners || void 0;
                };
                EventEmitter.prototype.setMaxListeners = function(n) {
                    if ('number' != typeof n || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
                    this._maxListeners = n;
                    return this;
                };
                function _getMaxListeners(that) {
                    if (void 0 === that._maxListeners) return EventEmitter.defaultMaxListeners;
                    return that._maxListeners;
                }
                EventEmitter.prototype.getMaxListeners = function() {
                    return _getMaxListeners(this);
                };
                EventEmitter.prototype.emit = function(type) {
                    var args = [];
                    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
                    var doError = 'error' === type;
                    var events = this._events;
                    if (void 0 !== events) doError = doError && void 0 === events.error;
                    else if (!doError) return false;
                    if (doError) {
                        var er;
                        if (args.length > 0) er = args[0];
                        if (er instanceof Error) throw er;
                        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
                        err.context = er;
                        throw err;
                    }
                    var handler = events[type];
                    if (void 0 === handler) return false;
                    if ('function' == typeof handler) ReflectApply(handler, this, args);
                    else {
                        var len = handler.length;
                        var listeners = arrayClone(handler, len);
                        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
                    }
                    return true;
                };
                function _addListener(target, type, listener, prepend) {
                    var m;
                    var events;
                    var existing;
                    checkListener(listener);
                    events = target._events;
                    if (void 0 === events) {
                        events = target._events = Object.create(null);
                        target._eventsCount = 0;
                    } else {
                        if (void 0 !== events.newListener) {
                            target.emit('newListener', type, listener.listener ? listener.listener : listener);
                            events = target._events;
                        }
                        existing = events[type];
                    }
                    if (void 0 === existing) {
                        existing = events[type] = listener;
                        ++target._eventsCount;
                    } else {
                        if ('function' == typeof existing) existing = events[type] = prepend ? [
                            listener,
                            existing
                        ] : [
                            existing,
                            listener
                        ];
                        else if (prepend) existing.unshift(listener);
                        else existing.push(listener);
                        m = _getMaxListeners(target);
                        if (m > 0 && existing.length > m && !existing.warned) {
                            existing.warned = true;
                            var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                            w.name = 'MaxListenersExceededWarning';
                            w.emitter = target;
                            w.type = type;
                            w.count = existing.length;
                            ProcessEmitWarning(w);
                        }
                    }
                    return target;
                }
                EventEmitter.prototype.addListener = function(type, listener) {
                    return _addListener(this, type, listener, false);
                };
                EventEmitter.prototype.on = EventEmitter.prototype.addListener;
                EventEmitter.prototype.prependListener = function(type, listener) {
                    return _addListener(this, type, listener, true);
                };
                function onceWrapper() {
                    if (!this.fired) {
                        this.target.removeListener(this.type, this.wrapFn);
                        this.fired = true;
                        if (0 === arguments.length) return this.listener.call(this.target);
                        return this.listener.apply(this.target, arguments);
                    }
                }
                function _onceWrap(target, type, listener) {
                    var state = {
                        fired: false,
                        wrapFn: void 0,
                        target: target,
                        type: type,
                        listener: listener
                    };
                    var wrapped = onceWrapper.bind(state);
                    wrapped.listener = listener;
                    state.wrapFn = wrapped;
                    return wrapped;
                }
                EventEmitter.prototype.once = function(type, listener) {
                    checkListener(listener);
                    this.on(type, _onceWrap(this, type, listener));
                    return this;
                };
                EventEmitter.prototype.prependOnceListener = function(type, listener) {
                    checkListener(listener);
                    this.prependListener(type, _onceWrap(this, type, listener));
                    return this;
                };
                EventEmitter.prototype.removeListener = function(type, listener) {
                    var list, events, position, i, originalListener;
                    checkListener(listener);
                    events = this._events;
                    if (void 0 === events) return this;
                    list = events[type];
                    if (void 0 === list) return this;
                    if (list === listener || list.listener === listener) if (0 === --this._eventsCount) this._events = Object.create(null);
                    else {
                        delete events[type];
                        if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
                    }
                    else if ('function' != typeof list) {
                        position = -1;
                        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
                            originalListener = list[i].listener;
                            position = i;
                            break;
                        }
                        if (position < 0) return this;
                        if (0 === position) list.shift();
                        else spliceOne(list, position);
                        if (1 === list.length) events[type] = list[0];
                        if (void 0 !== events.removeListener) this.emit('removeListener', type, originalListener || listener);
                    }
                    return this;
                };
                EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
                EventEmitter.prototype.removeAllListeners = function(type) {
                    var listeners, events, i;
                    events = this._events;
                    if (void 0 === events) return this;
                    if (void 0 === events.removeListener) {
                        if (0 === arguments.length) {
                            this._events = Object.create(null);
                            this._eventsCount = 0;
                        } else if (void 0 !== events[type]) if (0 === --this._eventsCount) this._events = Object.create(null);
                        else delete events[type];
                        return this;
                    }
                    if (0 === arguments.length) {
                        var keys = Object.keys(events);
                        var key;
                        for(i = 0; i < keys.length; ++i){
                            key = keys[i];
                            if ('removeListener' !== key) this.removeAllListeners(key);
                        }
                        this.removeAllListeners('removeListener');
                        this._events = Object.create(null);
                        this._eventsCount = 0;
                        return this;
                    }
                    listeners = events[type];
                    if ('function' == typeof listeners) this.removeListener(type, listeners);
                    else if (void 0 !== listeners) for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
                    return this;
                };
                function _listeners(target, type, unwrap) {
                    var events = target._events;
                    if (void 0 === events) return [];
                    var evlistener = events[type];
                    if (void 0 === evlistener) return [];
                    if ('function' == typeof evlistener) return unwrap ? [
                        evlistener.listener || evlistener
                    ] : [
                        evlistener
                    ];
                    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
                }
                EventEmitter.prototype.listeners = function(type) {
                    return _listeners(this, type, true);
                };
                EventEmitter.prototype.rawListeners = function(type) {
                    return _listeners(this, type, false);
                };
                EventEmitter.listenerCount = function(emitter, type) {
                    if ('function' == typeof emitter.listenerCount) return emitter.listenerCount(type);
                    return listenerCount.call(emitter, type);
                };
                EventEmitter.prototype.listenerCount = listenerCount;
                function listenerCount(type) {
                    var events = this._events;
                    if (void 0 !== events) {
                        var evlistener = events[type];
                        if ('function' == typeof evlistener) return 1;
                        if (void 0 !== evlistener) return evlistener.length;
                    }
                    return 0;
                }
                EventEmitter.prototype.eventNames = function() {
                    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
                };
                function arrayClone(arr, n) {
                    var copy = new Array(n);
                    for(var i = 0; i < n; ++i)copy[i] = arr[i];
                    return copy;
                }
                function spliceOne(list, index) {
                    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
                    list.pop();
                }
                function unwrapListeners(arr) {
                    var ret = new Array(arr.length);
                    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
                    return ret;
                }
                function once(emitter, name) {
                    return new Promise(function(resolve, reject) {
                        function errorListener(err) {
                            emitter.removeListener(name, resolver);
                            reject(err);
                        }
                        function resolver() {
                            if ('function' == typeof emitter.removeListener) emitter.removeListener('error', errorListener);
                            resolve([].slice.call(arguments));
                        }
                        eventTargetAgnosticAddListener(emitter, name, resolver, {
                            once: true
                        });
                        if ('error' !== name) addErrorHandlerIfEventEmitter(emitter, errorListener, {
                            once: true
                        });
                    });
                }
                function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
                    if ('function' == typeof emitter.on) eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
                }
                function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
                    if ('function' == typeof emitter.on) if (flags.once) emitter.once(name, listener);
                    else emitter.on(name, listener);
                    else if ('function' == typeof emitter.addEventListener) emitter.addEventListener(name, function wrapListener(arg) {
                        if (flags.once) emitter.removeEventListener(name, wrapListener);
                        listener(arg);
                    });
                    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
                }
            },
            "./node_modules/fast-safe-stringify/index.js" (module1) {
                module1.exports = stringify;
                stringify.default = stringify;
                stringify.stable = deterministicStringify;
                stringify.stableStringify = deterministicStringify;
                var LIMIT_REPLACE_NODE = '[...]';
                var CIRCULAR_REPLACE_NODE = '[Circular]';
                var arr = [];
                var replacerStack = [];
                function defaultOptions() {
                    return {
                        depthLimit: Number.MAX_SAFE_INTEGER,
                        edgesLimit: Number.MAX_SAFE_INTEGER
                    };
                }
                function stringify(obj, replacer, spacer, options) {
                    if (void 0 === options) options = defaultOptions();
                    decirc(obj, '', 0, [], void 0, 0, options);
                    var res;
                    try {
                        res = 0 === replacerStack.length ? JSON.stringify(obj, replacer, spacer) : JSON.stringify(obj, replaceGetterValues(replacer), spacer);
                    } catch (_) {
                        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
                    } finally{
                        while(0 !== arr.length){
                            var part = arr.pop();
                            if (4 === part.length) Object.defineProperty(part[0], part[1], part[3]);
                            else part[0][part[1]] = part[2];
                        }
                    }
                    return res;
                }
                function setReplace(replace, val, k, parent) {
                    var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
                    if (void 0 !== propertyDescriptor.get) if (propertyDescriptor.configurable) {
                        Object.defineProperty(parent, k, {
                            value: replace
                        });
                        arr.push([
                            parent,
                            k,
                            val,
                            propertyDescriptor
                        ]);
                    } else replacerStack.push([
                        val,
                        k,
                        replace
                    ]);
                    else {
                        parent[k] = replace;
                        arr.push([
                            parent,
                            k,
                            val
                        ]);
                    }
                }
                function decirc(val, k, edgeIndex, stack, parent, depth, options) {
                    depth += 1;
                    var i;
                    if ('object' == typeof val && null !== val) {
                        for(i = 0; i < stack.length; i++)if (stack[i] === val) return void setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
                        if (void 0 !== options.depthLimit && depth > options.depthLimit) return void setReplace(LIMIT_REPLACE_NODE, val, k, parent);
                        if (void 0 !== options.edgesLimit && edgeIndex + 1 > options.edgesLimit) return void setReplace(LIMIT_REPLACE_NODE, val, k, parent);
                        stack.push(val);
                        if (Array.isArray(val)) for(i = 0; i < val.length; i++)decirc(val[i], i, i, stack, val, depth, options);
                        else {
                            var keys = Object.keys(val);
                            for(i = 0; i < keys.length; i++){
                                var key = keys[i];
                                decirc(val[key], key, i, stack, val, depth, options);
                            }
                        }
                        stack.pop();
                    }
                }
                function compareFunction(a, b) {
                    if (a < b) return -1;
                    if (a > b) return 1;
                    return 0;
                }
                function deterministicStringify(obj, replacer, spacer, options) {
                    if (void 0 === options) options = defaultOptions();
                    var tmp = deterministicDecirc(obj, '', 0, [], void 0, 0, options) || obj;
                    var res;
                    try {
                        res = 0 === replacerStack.length ? JSON.stringify(tmp, replacer, spacer) : JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
                    } catch (_) {
                        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
                    } finally{
                        while(0 !== arr.length){
                            var part = arr.pop();
                            if (4 === part.length) Object.defineProperty(part[0], part[1], part[3]);
                            else part[0][part[1]] = part[2];
                        }
                    }
                    return res;
                }
                function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options) {
                    depth += 1;
                    var i;
                    if ('object' == typeof val && null !== val) {
                        for(i = 0; i < stack.length; i++)if (stack[i] === val) return void setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
                        try {
                            if ('function' == typeof val.toJSON) return;
                        } catch (_) {
                            return;
                        }
                        if (void 0 !== options.depthLimit && depth > options.depthLimit) return void setReplace(LIMIT_REPLACE_NODE, val, k, parent);
                        if (void 0 !== options.edgesLimit && edgeIndex + 1 > options.edgesLimit) return void setReplace(LIMIT_REPLACE_NODE, val, k, parent);
                        stack.push(val);
                        if (Array.isArray(val)) for(i = 0; i < val.length; i++)deterministicDecirc(val[i], i, i, stack, val, depth, options);
                        else {
                            var tmp = {};
                            var keys = Object.keys(val).sort(compareFunction);
                            for(i = 0; i < keys.length; i++){
                                var key = keys[i];
                                deterministicDecirc(val[key], key, i, stack, val, depth, options);
                                tmp[key] = val[key];
                            }
                            if (void 0 === parent) return tmp;
                            arr.push([
                                parent,
                                k,
                                val
                            ]);
                            parent[k] = tmp;
                        }
                        stack.pop();
                    }
                }
                function replaceGetterValues(replacer) {
                    replacer = void 0 !== replacer ? replacer : function(k, v) {
                        return v;
                    };
                    return function(key, val) {
                        if (replacerStack.length > 0) for(var i = 0; i < replacerStack.length; i++){
                            var part = replacerStack[i];
                            if (part[1] === key && part[0] === val) {
                                val = part[2];
                                replacerStack.splice(i, 1);
                                break;
                            }
                        }
                        return replacer.call(this, key, val);
                    };
                }
            },
            "./node_modules/for-each/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var isCallable = __webpack_require__("./node_modules/is-callable/index.js");
                var toStr = Object.prototype.toString;
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                var forEachArray = function(array, iterator, receiver) {
                    for(var i = 0, len = array.length; i < len; i++)if (hasOwnProperty.call(array, i)) if (null == receiver) iterator(array[i], i, array);
                    else iterator.call(receiver, array[i], i, array);
                };
                var forEachString = function(string, iterator, receiver) {
                    for(var i = 0, len = string.length; i < len; i++)if (null == receiver) iterator(string.charAt(i), i, string);
                    else iterator.call(receiver, string.charAt(i), i, string);
                };
                var forEachObject = function(object, iterator, receiver) {
                    for(var k in object)if (hasOwnProperty.call(object, k)) if (null == receiver) iterator(object[k], k, object);
                    else iterator.call(receiver, object[k], k, object);
                };
                function isArray(x) {
                    return '[object Array]' === toStr.call(x);
                }
                module1.exports = function(list, iterator, thisArg) {
                    if (!isCallable(iterator)) throw new TypeError('iterator must be a function');
                    var receiver;
                    if (arguments.length >= 3) receiver = thisArg;
                    if (isArray(list)) forEachArray(list, iterator, receiver);
                    else if ('string' == typeof list) forEachString(list, iterator, receiver);
                    else forEachObject(list, iterator, receiver);
                };
            },
            "./node_modules/function-bind/implementation.js" (module1) {
                "use strict";
                var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
                var toStr = Object.prototype.toString;
                var max = Math.max;
                var funcType = '[object Function]';
                var concatty = function(a, b) {
                    var arr = [];
                    for(var i = 0; i < a.length; i += 1)arr[i] = a[i];
                    for(var j = 0; j < b.length; j += 1)arr[j + a.length] = b[j];
                    return arr;
                };
                var slicy = function(arrLike, offset) {
                    var arr = [];
                    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)arr[j] = arrLike[i];
                    return arr;
                };
                var joiny = function(arr, joiner) {
                    var str = '';
                    for(var i = 0; i < arr.length; i += 1){
                        str += arr[i];
                        if (i + 1 < arr.length) str += joiner;
                    }
                    return str;
                };
                module1.exports = function(that) {
                    var target = this;
                    if ('function' != typeof target || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
                    var args = slicy(arguments, 1);
                    var bound;
                    var binder = function() {
                        if (this instanceof bound) {
                            var result = target.apply(this, concatty(args, arguments));
                            if (Object(result) === result) return result;
                            return this;
                        }
                        return target.apply(that, concatty(args, arguments));
                    };
                    var boundLength = max(0, target.length - args.length);
                    var boundArgs = [];
                    for(var i = 0; i < boundLength; i++)boundArgs[i] = '$' + i;
                    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
                    if (target.prototype) {
                        var Empty = function() {};
                        Empty.prototype = target.prototype;
                        bound.prototype = new Empty();
                        Empty.prototype = null;
                    }
                    return bound;
                };
            },
            "./node_modules/function-bind/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");
                module1.exports = Function.prototype.bind || implementation;
            },
            "./node_modules/generator-function/index.js" (module1) {
                "use strict";
                const cached = (function*() {}).constructor;
                module1.exports = ()=>cached;
            },
            "./node_modules/get-intrinsic/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var undefined;
                var $Object = __webpack_require__("./node_modules/es-object-atoms/index.js");
                var $Error = __webpack_require__("./node_modules/es-errors/index.js");
                var $EvalError = __webpack_require__("./node_modules/es-errors/eval.js");
                var $RangeError = __webpack_require__("./node_modules/es-errors/range.js");
                var $ReferenceError = __webpack_require__("./node_modules/es-errors/ref.js");
                var $SyntaxError = __webpack_require__("./node_modules/es-errors/syntax.js");
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                var $URIError = __webpack_require__("./node_modules/es-errors/uri.js");
                var abs = __webpack_require__("./node_modules/math-intrinsics/abs.js");
                var floor = __webpack_require__("./node_modules/math-intrinsics/floor.js");
                var max = __webpack_require__("./node_modules/math-intrinsics/max.js");
                var min = __webpack_require__("./node_modules/math-intrinsics/min.js");
                var pow = __webpack_require__("./node_modules/math-intrinsics/pow.js");
                var round = __webpack_require__("./node_modules/math-intrinsics/round.js");
                var sign = __webpack_require__("./node_modules/math-intrinsics/sign.js");
                var $Function = Function;
                var getEvalledConstructor = function(expressionSyntax) {
                    try {
                        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
                    } catch (e) {}
                };
                var $gOPD = __webpack_require__("./node_modules/gopd/index.js");
                var $defineProperty = __webpack_require__("./node_modules/es-define-property/index.js");
                var throwTypeError = function() {
                    throw new $TypeError();
                };
                var ThrowTypeError = $gOPD ? function() {
                    try {
                        arguments.callee;
                        return throwTypeError;
                    } catch (calleeThrows) {
                        try {
                            return $gOPD(arguments, 'callee').get;
                        } catch (gOPDthrows) {
                            return throwTypeError;
                        }
                    }
                }() : throwTypeError;
                var hasSymbols = __webpack_require__("./node_modules/has-symbols/index.js")();
                var getProto = __webpack_require__("./node_modules/get-proto/index.js");
                var $ObjectGPO = __webpack_require__("./node_modules/get-proto/Object.getPrototypeOf.js");
                var $ReflectGPO = __webpack_require__("./node_modules/get-proto/Reflect.getPrototypeOf.js");
                var $apply = __webpack_require__("./node_modules/call-bind-apply-helpers/functionApply.js");
                var $call = __webpack_require__("./node_modules/call-bind-apply-helpers/functionCall.js");
                var needsEval = {};
                var TypedArray = "u" > typeof Uint8Array && getProto ? getProto(Uint8Array) : undefined;
                var INTRINSICS = {
                    __proto__: null,
                    '%AggregateError%': "u" < typeof AggregateError ? undefined : AggregateError,
                    '%Array%': Array,
                    '%ArrayBuffer%': "u" < typeof ArrayBuffer ? undefined : ArrayBuffer,
                    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
                    '%AsyncFromSyncIteratorPrototype%': undefined,
                    '%AsyncFunction%': needsEval,
                    '%AsyncGenerator%': needsEval,
                    '%AsyncGeneratorFunction%': needsEval,
                    '%AsyncIteratorPrototype%': needsEval,
                    '%Atomics%': "u" < typeof Atomics ? undefined : Atomics,
                    '%BigInt%': "u" < typeof BigInt ? undefined : BigInt,
                    '%BigInt64Array%': "u" < typeof BigInt64Array ? undefined : BigInt64Array,
                    '%BigUint64Array%': "u" < typeof BigUint64Array ? undefined : BigUint64Array,
                    '%Boolean%': Boolean,
                    '%DataView%': "u" < typeof DataView ? undefined : DataView,
                    '%Date%': Date,
                    '%decodeURI%': decodeURI,
                    '%decodeURIComponent%': decodeURIComponent,
                    '%encodeURI%': encodeURI,
                    '%encodeURIComponent%': encodeURIComponent,
                    '%Error%': $Error,
                    '%eval%': eval,
                    '%EvalError%': $EvalError,
                    '%Float16Array%': "u" < typeof Float16Array ? undefined : Float16Array,
                    '%Float32Array%': "u" < typeof Float32Array ? undefined : Float32Array,
                    '%Float64Array%': "u" < typeof Float64Array ? undefined : Float64Array,
                    '%FinalizationRegistry%': "u" < typeof FinalizationRegistry ? undefined : FinalizationRegistry,
                    '%Function%': $Function,
                    '%GeneratorFunction%': needsEval,
                    '%Int8Array%': "u" < typeof Int8Array ? undefined : Int8Array,
                    '%Int16Array%': "u" < typeof Int16Array ? undefined : Int16Array,
                    '%Int32Array%': "u" < typeof Int32Array ? undefined : Int32Array,
                    '%isFinite%': isFinite,
                    '%isNaN%': isNaN,
                    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
                    '%JSON%': 'object' == typeof JSON ? JSON : undefined,
                    '%Map%': "u" < typeof Map ? undefined : Map,
                    '%MapIteratorPrototype%': "u" > typeof Map && hasSymbols && getProto ? getProto(new Map()[Symbol.iterator]()) : undefined,
                    '%Math%': Math,
                    '%Number%': Number,
                    '%Object%': $Object,
                    "%Object.getOwnPropertyDescriptor%": $gOPD,
                    '%parseFloat%': parseFloat,
                    '%parseInt%': parseInt,
                    '%Promise%': "u" < typeof Promise ? undefined : Promise,
                    '%Proxy%': "u" < typeof Proxy ? undefined : Proxy,
                    '%RangeError%': $RangeError,
                    '%ReferenceError%': $ReferenceError,
                    '%Reflect%': "u" < typeof Reflect ? undefined : Reflect,
                    '%RegExp%': RegExp,
                    '%Set%': "u" < typeof Set ? undefined : Set,
                    '%SetIteratorPrototype%': "u" > typeof Set && hasSymbols && getProto ? getProto(new Set()[Symbol.iterator]()) : undefined,
                    '%SharedArrayBuffer%': "u" < typeof SharedArrayBuffer ? undefined : SharedArrayBuffer,
                    '%String%': String,
                    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
                    '%Symbol%': hasSymbols ? Symbol : undefined,
                    '%SyntaxError%': $SyntaxError,
                    '%ThrowTypeError%': ThrowTypeError,
                    '%TypedArray%': TypedArray,
                    '%TypeError%': $TypeError,
                    '%Uint8Array%': "u" < typeof Uint8Array ? undefined : Uint8Array,
                    '%Uint8ClampedArray%': "u" < typeof Uint8ClampedArray ? undefined : Uint8ClampedArray,
                    '%Uint16Array%': "u" < typeof Uint16Array ? undefined : Uint16Array,
                    '%Uint32Array%': "u" < typeof Uint32Array ? undefined : Uint32Array,
                    '%URIError%': $URIError,
                    '%WeakMap%': "u" < typeof WeakMap ? undefined : WeakMap,
                    '%WeakRef%': "u" < typeof WeakRef ? undefined : WeakRef,
                    '%WeakSet%': "u" < typeof WeakSet ? undefined : WeakSet,
                    '%Function.prototype.call%': $call,
                    '%Function.prototype.apply%': $apply,
                    '%Object.defineProperty%': $defineProperty,
                    '%Object.getPrototypeOf%': $ObjectGPO,
                    '%Math.abs%': abs,
                    '%Math.floor%': floor,
                    '%Math.max%': max,
                    '%Math.min%': min,
                    '%Math.pow%': pow,
                    '%Math.round%': round,
                    '%Math.sign%': sign,
                    '%Reflect.getPrototypeOf%': $ReflectGPO
                };
                if (getProto) try {
                    null.error;
                } catch (e) {
                    var errorProto = getProto(getProto(e));
                    INTRINSICS['%Error.prototype%'] = errorProto;
                }
                var doEval = function doEval(name) {
                    var value;
                    if ('%AsyncFunction%' === name) value = getEvalledConstructor('async function () {}');
                    else if ('%GeneratorFunction%' === name) value = getEvalledConstructor('function* () {}');
                    else if ('%AsyncGeneratorFunction%' === name) value = getEvalledConstructor('async function* () {}');
                    else if ('%AsyncGenerator%' === name) {
                        var fn = doEval('%AsyncGeneratorFunction%');
                        if (fn) value = fn.prototype;
                    } else if ('%AsyncIteratorPrototype%' === name) {
                        var gen = doEval('%AsyncGenerator%');
                        if (gen && getProto) value = getProto(gen.prototype);
                    }
                    INTRINSICS[name] = value;
                    return value;
                };
                var LEGACY_ALIASES = {
                    __proto__: null,
                    '%ArrayBufferPrototype%': [
                        'ArrayBuffer',
                        'prototype'
                    ],
                    '%ArrayPrototype%': [
                        'Array',
                        'prototype'
                    ],
                    '%ArrayProto_entries%': [
                        'Array',
                        'prototype',
                        'entries'
                    ],
                    '%ArrayProto_forEach%': [
                        'Array',
                        'prototype',
                        'forEach'
                    ],
                    '%ArrayProto_keys%': [
                        'Array',
                        'prototype',
                        'keys'
                    ],
                    '%ArrayProto_values%': [
                        'Array',
                        'prototype',
                        'values'
                    ],
                    '%AsyncFunctionPrototype%': [
                        'AsyncFunction',
                        'prototype'
                    ],
                    '%AsyncGenerator%': [
                        'AsyncGeneratorFunction',
                        'prototype'
                    ],
                    '%AsyncGeneratorPrototype%': [
                        'AsyncGeneratorFunction',
                        'prototype',
                        'prototype'
                    ],
                    '%BooleanPrototype%': [
                        'Boolean',
                        'prototype'
                    ],
                    '%DataViewPrototype%': [
                        'DataView',
                        'prototype'
                    ],
                    '%DatePrototype%': [
                        'Date',
                        'prototype'
                    ],
                    '%ErrorPrototype%': [
                        'Error',
                        'prototype'
                    ],
                    '%EvalErrorPrototype%': [
                        'EvalError',
                        'prototype'
                    ],
                    '%Float32ArrayPrototype%': [
                        'Float32Array',
                        'prototype'
                    ],
                    '%Float64ArrayPrototype%': [
                        'Float64Array',
                        'prototype'
                    ],
                    '%FunctionPrototype%': [
                        'Function',
                        'prototype'
                    ],
                    '%Generator%': [
                        'GeneratorFunction',
                        'prototype'
                    ],
                    '%GeneratorPrototype%': [
                        'GeneratorFunction',
                        'prototype',
                        'prototype'
                    ],
                    '%Int8ArrayPrototype%': [
                        'Int8Array',
                        'prototype'
                    ],
                    '%Int16ArrayPrototype%': [
                        'Int16Array',
                        'prototype'
                    ],
                    '%Int32ArrayPrototype%': [
                        'Int32Array',
                        'prototype'
                    ],
                    '%JSONParse%': [
                        'JSON',
                        'parse'
                    ],
                    '%JSONStringify%': [
                        'JSON',
                        'stringify'
                    ],
                    '%MapPrototype%': [
                        'Map',
                        'prototype'
                    ],
                    '%NumberPrototype%': [
                        'Number',
                        'prototype'
                    ],
                    '%ObjectPrototype%': [
                        'Object',
                        'prototype'
                    ],
                    '%ObjProto_toString%': [
                        'Object',
                        'prototype',
                        'toString'
                    ],
                    '%ObjProto_valueOf%': [
                        'Object',
                        'prototype',
                        'valueOf'
                    ],
                    '%PromisePrototype%': [
                        'Promise',
                        'prototype'
                    ],
                    '%PromiseProto_then%': [
                        'Promise',
                        'prototype',
                        'then'
                    ],
                    '%Promise_all%': [
                        'Promise',
                        'all'
                    ],
                    '%Promise_reject%': [
                        'Promise',
                        'reject'
                    ],
                    '%Promise_resolve%': [
                        'Promise',
                        'resolve'
                    ],
                    '%RangeErrorPrototype%': [
                        'RangeError',
                        'prototype'
                    ],
                    '%ReferenceErrorPrototype%': [
                        'ReferenceError',
                        'prototype'
                    ],
                    '%RegExpPrototype%': [
                        'RegExp',
                        'prototype'
                    ],
                    '%SetPrototype%': [
                        'Set',
                        'prototype'
                    ],
                    '%SharedArrayBufferPrototype%': [
                        'SharedArrayBuffer',
                        'prototype'
                    ],
                    '%StringPrototype%': [
                        'String',
                        'prototype'
                    ],
                    '%SymbolPrototype%': [
                        'Symbol',
                        'prototype'
                    ],
                    '%SyntaxErrorPrototype%': [
                        'SyntaxError',
                        'prototype'
                    ],
                    '%TypedArrayPrototype%': [
                        'TypedArray',
                        'prototype'
                    ],
                    '%TypeErrorPrototype%': [
                        'TypeError',
                        'prototype'
                    ],
                    '%Uint8ArrayPrototype%': [
                        'Uint8Array',
                        'prototype'
                    ],
                    '%Uint8ClampedArrayPrototype%': [
                        'Uint8ClampedArray',
                        'prototype'
                    ],
                    '%Uint16ArrayPrototype%': [
                        'Uint16Array',
                        'prototype'
                    ],
                    '%Uint32ArrayPrototype%': [
                        'Uint32Array',
                        'prototype'
                    ],
                    '%URIErrorPrototype%': [
                        'URIError',
                        'prototype'
                    ],
                    '%WeakMapPrototype%': [
                        'WeakMap',
                        'prototype'
                    ],
                    '%WeakSetPrototype%': [
                        'WeakSet',
                        'prototype'
                    ]
                };
                var bind = __webpack_require__("./node_modules/function-bind/index.js");
                var hasOwn = __webpack_require__("./node_modules/hasown/index.js");
                var $concat = bind.call($call, Array.prototype.concat);
                var $spliceApply = bind.call($apply, Array.prototype.splice);
                var $replace = bind.call($call, String.prototype.replace);
                var $strSlice = bind.call($call, String.prototype.slice);
                var $exec = bind.call($call, RegExp.prototype.exec);
                var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
                var reEscapeChar = /\\(\\)?/g;
                var stringToPath = function(string) {
                    var first = $strSlice(string, 0, 1);
                    var last = $strSlice(string, -1);
                    if ('%' === first && '%' !== last) throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
                    if ('%' === last && '%' !== first) throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
                    var result = [];
                    $replace(string, rePropName, function(match, number, quote, subString) {
                        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
                    });
                    return result;
                };
                var getBaseIntrinsic = function(name, allowMissing) {
                    var intrinsicName = name;
                    var alias;
                    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
                        alias = LEGACY_ALIASES[intrinsicName];
                        intrinsicName = '%' + alias[0] + '%';
                    }
                    if (hasOwn(INTRINSICS, intrinsicName)) {
                        var value = INTRINSICS[intrinsicName];
                        if (value === needsEval) value = doEval(intrinsicName);
                        if (void 0 === value && !allowMissing) throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
                        return {
                            alias: alias,
                            name: intrinsicName,
                            value: value
                        };
                    }
                    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
                };
                module1.exports = function(name, allowMissing) {
                    if ('string' != typeof name || 0 === name.length) throw new $TypeError('intrinsic name must be a non-empty string');
                    if (arguments.length > 1 && 'boolean' != typeof allowMissing) throw new $TypeError('"allowMissing" argument must be a boolean');
                    if (null === $exec(/^%?[^%]*%?$/, name)) throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
                    var parts = stringToPath(name);
                    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
                    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
                    var intrinsicRealName = intrinsic.name;
                    var value = intrinsic.value;
                    var skipFurtherCaching = false;
                    var alias = intrinsic.alias;
                    if (alias) {
                        intrinsicBaseName = alias[0];
                        $spliceApply(parts, $concat([
                            0,
                            1
                        ], alias));
                    }
                    for(var i = 1, isOwn = true; i < parts.length; i += 1){
                        var part = parts[i];
                        var first = $strSlice(part, 0, 1);
                        var last = $strSlice(part, -1);
                        if (('"' === first || "'" === first || '`' === first || '"' === last || "'" === last || '`' === last) && first !== last) throw new $SyntaxError('property names with quotes must have matching quotes');
                        if ('constructor' === part || !isOwn) skipFurtherCaching = true;
                        intrinsicBaseName += '.' + part;
                        intrinsicRealName = '%' + intrinsicBaseName + '%';
                        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
                        else if (null != value) {
                            if (!(part in value)) {
                                if (!allowMissing) throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                                return;
                            }
                            if ($gOPD && i + 1 >= parts.length) {
                                var desc = $gOPD(value, part);
                                isOwn = !!desc;
                                value = isOwn && 'get' in desc && !('originalValue' in desc.get) ? desc.get : value[part];
                            } else {
                                isOwn = hasOwn(value, part);
                                value = value[part];
                            }
                            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
                        }
                    }
                    return value;
                };
            },
            "./node_modules/get-proto/Object.getPrototypeOf.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var $Object = __webpack_require__("./node_modules/es-object-atoms/index.js");
                module1.exports = $Object.getPrototypeOf || null;
            },
            "./node_modules/get-proto/Reflect.getPrototypeOf.js" (module1) {
                "use strict";
                module1.exports = "u" > typeof Reflect && Reflect.getPrototypeOf || null;
            },
            "./node_modules/get-proto/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var reflectGetProto = __webpack_require__("./node_modules/get-proto/Reflect.getPrototypeOf.js");
                var originalGetProto = __webpack_require__("./node_modules/get-proto/Object.getPrototypeOf.js");
                var getDunderProto = __webpack_require__("./node_modules/dunder-proto/get.js");
                module1.exports = reflectGetProto ? function(O) {
                    return reflectGetProto(O);
                } : originalGetProto ? function(O) {
                    if (!O || 'object' != typeof O && 'function' != typeof O) throw new TypeError('getProto: not an object');
                    return originalGetProto(O);
                } : getDunderProto ? function(O) {
                    return getDunderProto(O);
                } : null;
            },
            "./node_modules/geval/event.js" (module1) {
                module1.exports = Event1;
                function Event1() {
                    var listeners = [];
                    return {
                        broadcast: broadcast,
                        listen: event
                    };
                    function broadcast(value) {
                        for(var i = 0; i < listeners.length; i++)listeners[i](value);
                    }
                    function event(listener) {
                        listeners.push(listener);
                        return removeListener;
                        function removeListener() {
                            var index = listeners.indexOf(listener);
                            if (-1 !== index) listeners.splice(index, 1);
                        }
                    }
                }
            },
            "./node_modules/geval/source.js" (module1, __unused_rspack_exports, __webpack_require__) {
                var Event1 = __webpack_require__("./node_modules/geval/event.js");
                module1.exports = Source;
                function Source(broadcaster) {
                    var tuple = Event1();
                    broadcaster(tuple.broadcast);
                    return tuple.listen;
                }
            },
            "./node_modules/global/document.js" (module1, __unused_rspack_exports, __webpack_require__) {
                var topLevel = void 0 !== __webpack_require__.g ? __webpack_require__.g : "u" > typeof window ? window : {};
                var minDoc = __webpack_require__("?a7ce");
                var doccy;
                if ("u" > typeof document) doccy = document;
                else {
                    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];
                    if (!doccy) doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
                }
                module1.exports = doccy;
            },
            "./node_modules/gopd/gOPD.js" (module1) {
                "use strict";
                module1.exports = Object.getOwnPropertyDescriptor;
            },
            "./node_modules/gopd/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var $gOPD = __webpack_require__("./node_modules/gopd/gOPD.js");
                if ($gOPD) try {
                    $gOPD([], 'length');
                } catch (e) {
                    $gOPD = null;
                }
                module1.exports = $gOPD;
            },
            "./node_modules/has-property-descriptors/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var $defineProperty = __webpack_require__("./node_modules/es-define-property/index.js");
                var hasPropertyDescriptors = function() {
                    return !!$defineProperty;
                };
                hasPropertyDescriptors.hasArrayLengthDefineBug = function() {
                    if (!$defineProperty) return null;
                    try {
                        return 1 !== $defineProperty([], 'length', {
                            value: 1
                        }).length;
                    } catch (e) {
                        return true;
                    }
                };
                module1.exports = hasPropertyDescriptors;
            },
            "./node_modules/has-symbols/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var origSymbol = "u" > typeof Symbol && Symbol;
                var hasSymbolSham = __webpack_require__("./node_modules/has-symbols/shams.js");
                module1.exports = function() {
                    if ('function' != typeof origSymbol) return false;
                    if ('function' != typeof Symbol) return false;
                    if ('symbol' != typeof origSymbol('foo')) return false;
                    if ('symbol' != typeof Symbol('bar')) return false;
                    return hasSymbolSham();
                };
            },
            "./node_modules/has-symbols/shams.js" (module1) {
                "use strict";
                module1.exports = function() {
                    if ('function' != typeof Symbol || 'function' != typeof Object.getOwnPropertySymbols) return false;
                    if ('symbol' == typeof Symbol.iterator) return true;
                    var obj = {};
                    var sym = Symbol('test');
                    var symObj = Object(sym);
                    if ('string' == typeof sym) return false;
                    if ('[object Symbol]' !== Object.prototype.toString.call(sym)) return false;
                    if ('[object Symbol]' !== Object.prototype.toString.call(symObj)) return false;
                    var symVal = 42;
                    obj[sym] = symVal;
                    for(var _ in obj)return false;
                    if ('function' == typeof Object.keys && 0 !== Object.keys(obj).length) return false;
                    if ('function' == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(obj).length) return false;
                    var syms = Object.getOwnPropertySymbols(obj);
                    if (1 !== syms.length || syms[0] !== sym) return false;
                    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
                    if ('function' == typeof Object.getOwnPropertyDescriptor) {
                        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
                        if (descriptor.value !== symVal || true !== descriptor.enumerable) return false;
                    }
                    return true;
                };
            },
            "./node_modules/has-tostringtag/shams.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js");
                module1.exports = function() {
                    return hasSymbols() && !!Symbol.toStringTag;
                };
            },
            "./node_modules/hasown/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var call = Function.prototype.call;
                var $hasOwn = Object.prototype.hasOwnProperty;
                var bind = __webpack_require__("./node_modules/function-bind/index.js");
                module1.exports = bind.call(call, $hasOwn);
            },
            "./node_modules/ieee754/index.js" (__unused_rspack_module, exports1) {
                /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports1.read = function(buffer, offset, isLE, mLen, nBytes) {
                    var e, m;
                    var eLen = 8 * nBytes - mLen - 1;
                    var eMax = (1 << eLen) - 1;
                    var eBias = eMax >> 1;
                    var nBits = -7;
                    var i = isLE ? nBytes - 1 : 0;
                    var d = isLE ? -1 : 1;
                    var s = buffer[offset + i];
                    i += d;
                    e = s & (1 << -nBits) - 1;
                    s >>= -nBits;
                    nBits += eLen;
                    for(; nBits > 0; e = 256 * e + buffer[offset + i], i += d, nBits -= 8);
                    m = e & (1 << -nBits) - 1;
                    e >>= -nBits;
                    nBits += mLen;
                    for(; nBits > 0; m = 256 * m + buffer[offset + i], i += d, nBits -= 8);
                    if (0 === e) e = 1 - eBias;
                    else {
                        if (e === eMax) return m ? NaN : 1 / 0 * (s ? -1 : 1);
                        m += Math.pow(2, mLen);
                        e -= eBias;
                    }
                    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
                };
                exports1.write = function(buffer, value, offset, isLE, mLen, nBytes) {
                    var e, m, c;
                    var eLen = 8 * nBytes - mLen - 1;
                    var eMax = (1 << eLen) - 1;
                    var eBias = eMax >> 1;
                    var rt = 23 === mLen ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                    var i = isLE ? 0 : nBytes - 1;
                    var d = isLE ? 1 : -1;
                    var s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
                    value = Math.abs(value);
                    if (isNaN(value) || value === 1 / 0) {
                        m = isNaN(value) ? 1 : 0;
                        e = eMax;
                    } else {
                        e = Math.floor(Math.log(value) / Math.LN2);
                        if (value * (c = Math.pow(2, -e)) < 1) {
                            e--;
                            c *= 2;
                        }
                        if (e + eBias >= 1) value += rt / c;
                        else value += rt * Math.pow(2, 1 - eBias);
                        if (value * c >= 2) {
                            e++;
                            c /= 2;
                        }
                        if (e + eBias >= eMax) {
                            m = 0;
                            e = eMax;
                        } else if (e + eBias >= 1) {
                            m = (value * c - 1) * Math.pow(2, mLen);
                            e += eBias;
                        } else {
                            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                            e = 0;
                        }
                    }
                    for(; mLen >= 8; buffer[offset + i] = 0xff & m, i += d, m /= 256, mLen -= 8);
                    e = e << mLen | m;
                    eLen += mLen;
                    for(; eLen > 0; buffer[offset + i] = 0xff & e, i += d, e /= 256, eLen -= 8);
                    buffer[offset + i - d] |= 128 * s;
                };
            },
            "./node_modules/inherits/inherits_browser.js" (module1) {
                if ('function' == typeof Object.create) module1.exports = function(ctor, superCtor) {
                    if (superCtor) {
                        ctor.super_ = superCtor;
                        ctor.prototype = Object.create(superCtor.prototype, {
                            constructor: {
                                value: ctor,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        });
                    }
                };
                else module1.exports = function(ctor, superCtor) {
                    if (superCtor) {
                        ctor.super_ = superCtor;
                        var TempCtor = function() {};
                        TempCtor.prototype = superCtor.prototype;
                        ctor.prototype = new TempCtor();
                        ctor.prototype.constructor = ctor;
                    }
                };
            },
            "./node_modules/is-arguments/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var hasToStringTag = __webpack_require__("./node_modules/has-tostringtag/shams.js")();
                var callBound = __webpack_require__("./node_modules/call-bound/index.js");
                var $toString = callBound('Object.prototype.toString');
                var isStandardArguments = function(value) {
                    if (hasToStringTag && value && 'object' == typeof value && Symbol.toStringTag in value) return false;
                    return '[object Arguments]' === $toString(value);
                };
                var isLegacyArguments = function(value) {
                    if (isStandardArguments(value)) return true;
                    return null !== value && 'object' == typeof value && 'length' in value && 'number' == typeof value.length && value.length >= 0 && '[object Array]' !== $toString(value) && 'callee' in value && '[object Function]' === $toString(value.callee);
                };
                var supportsStandardArguments = function() {
                    return isStandardArguments(arguments);
                }();
                isStandardArguments.isLegacyArguments = isLegacyArguments;
                module1.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
            },
            "./node_modules/is-callable/index.js" (module1) {
                "use strict";
                var fnToStr = Function.prototype.toString;
                var reflectApply = 'object' == typeof Reflect && null !== Reflect && Reflect.apply;
                var badArrayLike;
                var isCallableMarker;
                if ('function' == typeof reflectApply && 'function' == typeof Object.defineProperty) try {
                    badArrayLike = Object.defineProperty({}, 'length', {
                        get: function() {
                            throw isCallableMarker;
                        }
                    });
                    isCallableMarker = {};
                    reflectApply(function() {
                        throw 42;
                    }, null, badArrayLike);
                } catch (_) {
                    if (_ !== isCallableMarker) reflectApply = null;
                }
                else reflectApply = null;
                var constructorRegex = /^\s*class\b/;
                var isES6ClassFn = function(value) {
                    try {
                        var fnStr = fnToStr.call(value);
                        return constructorRegex.test(fnStr);
                    } catch (e) {
                        return false;
                    }
                };
                var tryFunctionObject = function(value) {
                    try {
                        if (isES6ClassFn(value)) return false;
                        fnToStr.call(value);
                        return true;
                    } catch (e) {
                        return false;
                    }
                };
                var toStr = Object.prototype.toString;
                var objectClass = '[object Object]';
                var fnClass = '[object Function]';
                var genClass = '[object GeneratorFunction]';
                var ddaClass = '[object HTMLAllCollection]';
                var ddaClass2 = '[object HTML document.all class]';
                var ddaClass3 = '[object HTMLCollection]';
                var hasToStringTag = 'function' == typeof Symbol && !!Symbol.toStringTag;
                var isIE68 = !(0 in [
                    , 
                ]);
                var isDDA = function() {
                    return false;
                };
                if ('object' == typeof document) {
                    var all = document.all;
                    if (toStr.call(all) === toStr.call(document.all)) isDDA = function(value) {
                        if ((isIE68 || !value) && (void 0 === value || 'object' == typeof value)) try {
                            var str = toStr.call(value);
                            return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && null == value('');
                        } catch (e) {}
                        return false;
                    };
                }
                module1.exports = reflectApply ? function(value) {
                    if (isDDA(value)) return true;
                    if (!value) return false;
                    if ('function' != typeof value && 'object' != typeof value) return false;
                    try {
                        reflectApply(value, null, badArrayLike);
                    } catch (e) {
                        if (e !== isCallableMarker) return false;
                    }
                    return !isES6ClassFn(value) && tryFunctionObject(value);
                } : function(value) {
                    if (isDDA(value)) return true;
                    if (!value) return false;
                    if ('function' != typeof value && 'object' != typeof value) return false;
                    if (hasToStringTag) return tryFunctionObject(value);
                    if (isES6ClassFn(value)) return false;
                    var strClass = toStr.call(value);
                    if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) return false;
                    return tryFunctionObject(value);
                };
            },
            "./node_modules/is-generator-function/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var callBound = __webpack_require__("./node_modules/call-bound/index.js");
                var safeRegexTest = __webpack_require__("./node_modules/safe-regex-test/index.js");
                var isFnRegex = safeRegexTest(/^\s*(?:function)?\*/);
                var hasToStringTag = __webpack_require__("./node_modules/has-tostringtag/shams.js")();
                var getProto = __webpack_require__("./node_modules/get-proto/index.js");
                var toStr = callBound('Object.prototype.toString');
                var fnToStr = callBound('Function.prototype.toString');
                var getGeneratorFunction = __webpack_require__("./node_modules/generator-function/index.js");
                module1.exports = function(fn) {
                    if ('function' != typeof fn) return false;
                    if (isFnRegex(fnToStr(fn))) return true;
                    if (!hasToStringTag) {
                        var str = toStr(fn);
                        return '[object GeneratorFunction]' === str;
                    }
                    if (!getProto) return false;
                    var GeneratorFunction = getGeneratorFunction();
                    return GeneratorFunction && getProto(fn) === GeneratorFunction.prototype;
                };
            },
            "./node_modules/is-power-of-two/index.js" (module1) {
                module1.exports = isPowerOfTwo;
                function isPowerOfTwo(n) {
                    return 0 !== n && (n & n - 1) === 0;
                }
            },
            "./node_modules/is-regex/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var callBound = __webpack_require__("./node_modules/call-bound/index.js");
                var hasToStringTag = __webpack_require__("./node_modules/has-tostringtag/shams.js")();
                var hasOwn = __webpack_require__("./node_modules/hasown/index.js");
                var gOPD = __webpack_require__("./node_modules/gopd/index.js");
                var fn;
                if (hasToStringTag) {
                    var $exec = callBound('RegExp.prototype.exec');
                    var isRegexMarker = {};
                    var throwRegexMarker = function() {
                        throw isRegexMarker;
                    };
                    var badStringifier = {
                        toString: throwRegexMarker,
                        valueOf: throwRegexMarker
                    };
                    if ('symbol' == typeof Symbol.toPrimitive) badStringifier[Symbol.toPrimitive] = throwRegexMarker;
                    fn = function(value) {
                        if (!value || 'object' != typeof value) return false;
                        var descriptor = gOPD(value, 'lastIndex');
                        var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, 'value');
                        if (!hasLastIndexDataProperty) return false;
                        try {
                            $exec(value, badStringifier);
                        } catch (e) {
                            return e === isRegexMarker;
                        }
                    };
                } else {
                    var $toString = callBound('Object.prototype.toString');
                    var regexClass = '[object RegExp]';
                    fn = function(value) {
                        if (!value || 'object' != typeof value && 'function' != typeof value) return false;
                        return $toString(value) === regexClass;
                    };
                }
                module1.exports = fn;
            },
            "./node_modules/is-typed-array/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var whichTypedArray = __webpack_require__("./node_modules/which-typed-array/index.js");
                module1.exports = function(value) {
                    return !!whichTypedArray(value);
                };
            },
            "./node_modules/math-intrinsics/abs.js" (module1) {
                "use strict";
                module1.exports = Math.abs;
            },
            "./node_modules/math-intrinsics/floor.js" (module1) {
                "use strict";
                module1.exports = Math.floor;
            },
            "./node_modules/math-intrinsics/isNaN.js" (module1) {
                "use strict";
                module1.exports = Number.isNaN || function(a) {
                    return a !== a;
                };
            },
            "./node_modules/math-intrinsics/max.js" (module1) {
                "use strict";
                module1.exports = Math.max;
            },
            "./node_modules/math-intrinsics/min.js" (module1) {
                "use strict";
                module1.exports = Math.min;
            },
            "./node_modules/math-intrinsics/pow.js" (module1) {
                "use strict";
                module1.exports = Math.pow;
            },
            "./node_modules/math-intrinsics/round.js" (module1) {
                "use strict";
                module1.exports = Math.round;
            },
            "./node_modules/math-intrinsics/sign.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var $isNaN = __webpack_require__("./node_modules/math-intrinsics/isNaN.js");
                module1.exports = function(number) {
                    if ($isNaN(number) || 0 === number) return number;
                    return number < 0 ? -1 : 1;
                };
            },
            "./node_modules/object-inspect/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                var hasMap = 'function' == typeof Map && Map.prototype;
                var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
                var mapSize = hasMap && mapSizeDescriptor && 'function' == typeof mapSizeDescriptor.get ? mapSizeDescriptor.get : null;
                var mapForEach = hasMap && Map.prototype.forEach;
                var hasSet = 'function' == typeof Set && Set.prototype;
                var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
                var setSize = hasSet && setSizeDescriptor && 'function' == typeof setSizeDescriptor.get ? setSizeDescriptor.get : null;
                var setForEach = hasSet && Set.prototype.forEach;
                var hasWeakMap = 'function' == typeof WeakMap && WeakMap.prototype;
                var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
                var hasWeakSet = 'function' == typeof WeakSet && WeakSet.prototype;
                var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
                var hasWeakRef = 'function' == typeof WeakRef && WeakRef.prototype;
                var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
                var booleanValueOf = Boolean.prototype.valueOf;
                var objectToString = Object.prototype.toString;
                var functionToString = Function.prototype.toString;
                var $match = String.prototype.match;
                var $slice = String.prototype.slice;
                var $replace = String.prototype.replace;
                var $toUpperCase = String.prototype.toUpperCase;
                var $toLowerCase = String.prototype.toLowerCase;
                var $test = RegExp.prototype.test;
                var $concat = Array.prototype.concat;
                var $join = Array.prototype.join;
                var $arrSlice = Array.prototype.slice;
                var $floor = Math.floor;
                var bigIntValueOf = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null;
                var gOPS = Object.getOwnPropertySymbols;
                var symToString = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? Symbol.prototype.toString : null;
                var hasShammedSymbols = 'function' == typeof Symbol && 'object' == typeof Symbol.iterator;
                var toStringTag = 'function' == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
                var isEnumerable = Object.prototype.propertyIsEnumerable;
                var gPO = ('function' == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
                    return O.__proto__;
                } : null);
                function addNumericSeparator(num, str) {
                    if (num === 1 / 0 || num === -1 / 0 || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) return str;
                    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                    if ('number' == typeof num) {
                        var int = num < 0 ? -$floor(-num) : $floor(num);
                        if (int !== num) {
                            var intStr = String(int);
                            var dec = $slice.call(str, intStr.length + 1);
                            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
                        }
                    }
                    return $replace.call(str, sepRegex, '$&_');
                }
                var utilInspect = __webpack_require__("?3f0e");
                var inspectCustom = utilInspect.custom;
                var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
                var quotes = {
                    __proto__: null,
                    double: '"',
                    single: "'"
                };
                var quoteREs = {
                    __proto__: null,
                    double: /(["\\])/g,
                    single: /(['\\])/g
                };
                module1.exports = function inspect_(obj, options, depth, seen) {
                    var opts = options || {};
                    if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                    if (has(opts, 'maxStringLength') && ('number' == typeof opts.maxStringLength ? opts.maxStringLength < 0 && opts.maxStringLength !== 1 / 0 : null !== opts.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
                    if ('boolean' != typeof customInspect && 'symbol' !== customInspect) throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
                    if (has(opts, 'indent') && null !== opts.indent && '\t' !== opts.indent && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                    if (has(opts, 'numericSeparator') && 'boolean' != typeof opts.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                    var numericSeparator = opts.numericSeparator;
                    if (void 0 === obj) return 'undefined';
                    if (null === obj) return 'null';
                    if ('boolean' == typeof obj) return obj ? 'true' : 'false';
                    if ('string' == typeof obj) return inspectString(obj, opts);
                    if ('number' == typeof obj) {
                        if (0 === obj) return 1 / 0 / obj > 0 ? '0' : '-0';
                        var str = String(obj);
                        return numericSeparator ? addNumericSeparator(obj, str) : str;
                    }
                    if ('bigint' == typeof obj) {
                        var bigIntStr = String(obj) + 'n';
                        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
                    }
                    var maxDepth = void 0 === opts.depth ? 5 : opts.depth;
                    if (void 0 === depth) depth = 0;
                    if (depth >= maxDepth && maxDepth > 0 && 'object' == typeof obj) return isArray(obj) ? '[Array]' : '[Object]';
                    var indent = getIndent(opts, depth);
                    if (void 0 === seen) seen = [];
                    else if (indexOf(seen, obj) >= 0) return '[Circular]';
                    function inspect(value, from, noIndent) {
                        if (from) {
                            seen = $arrSlice.call(seen);
                            seen.push(from);
                        }
                        if (noIndent) {
                            var newOpts = {
                                depth: opts.depth
                            };
                            if (has(opts, 'quoteStyle')) newOpts.quoteStyle = opts.quoteStyle;
                            return inspect_(value, newOpts, depth + 1, seen);
                        }
                        return inspect_(value, opts, depth + 1, seen);
                    }
                    if ('function' == typeof obj && !isRegExp(obj)) {
                        var name = nameOf(obj);
                        var keys = arrObjKeys(obj, inspect);
                        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
                    }
                    if (isSymbol(obj)) {
                        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
                        return 'object' != typeof obj || hasShammedSymbols ? symString : markBoxed(symString);
                    }
                    if (isElement(obj)) {
                        var s = '<' + $toLowerCase.call(String(obj.nodeName));
                        var attrs = obj.attributes || [];
                        for(var i = 0; i < attrs.length; i++)s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
                        s += '>';
                        if (obj.childNodes && obj.childNodes.length) s += '...';
                        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
                        return s;
                    }
                    if (isArray(obj)) {
                        if (0 === obj.length) return '[]';
                        var xs = arrObjKeys(obj, inspect);
                        if (indent && !singleLineValues(xs)) return '[' + indentedJoin(xs, indent) + ']';
                        return '[ ' + $join.call(xs, ', ') + ' ]';
                    }
                    if (isError(obj)) {
                        var parts = arrObjKeys(obj, inspect);
                        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
                        if (0 === parts.length) return '[' + String(obj) + ']';
                        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
                    }
                    if ('object' == typeof obj && customInspect) {
                        if (inspectSymbol && 'function' == typeof obj[inspectSymbol] && utilInspect) return utilInspect(obj, {
                            depth: maxDepth - depth
                        });
                        else if ('symbol' !== customInspect && 'function' == typeof obj.inspect) return obj.inspect();
                    }
                    if (isMap(obj)) {
                        var mapParts = [];
                        if (mapForEach) mapForEach.call(obj, function(value, key) {
                            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
                        });
                        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
                    }
                    if (isSet(obj)) {
                        var setParts = [];
                        if (setForEach) setForEach.call(obj, function(value) {
                            setParts.push(inspect(value, obj));
                        });
                        return collectionOf('Set', setSize.call(obj), setParts, indent);
                    }
                    if (isWeakMap(obj)) return weakCollectionOf('WeakMap');
                    if (isWeakSet(obj)) return weakCollectionOf('WeakSet');
                    if (isWeakRef(obj)) return weakCollectionOf('WeakRef');
                    if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
                    if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
                    if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
                    if (isString(obj)) return markBoxed(inspect(String(obj)));
                    if ("u" > typeof window && obj === window) return '{ [object Window] }';
                    if ("u" > typeof globalThis && obj === globalThis || void 0 !== __webpack_require__.g && obj === __webpack_require__.g) return '{ [object globalThis] }';
                    if (!isDate(obj) && !isRegExp(obj)) {
                        var ys = arrObjKeys(obj, inspect);
                        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
                        var protoTag = obj instanceof Object ? '' : 'null prototype';
                        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
                        var constructorTag = isPlainObject || 'function' != typeof obj.constructor ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
                        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
                        if (0 === ys.length) return tag + '{}';
                        if (indent) return tag + '{' + indentedJoin(ys, indent) + '}';
                        return tag + '{ ' + $join.call(ys, ', ') + ' }';
                    }
                    return String(obj);
                };
                function wrapQuotes(s, defaultStyle, opts) {
                    var style = opts.quoteStyle || defaultStyle;
                    var quoteChar = quotes[style];
                    return quoteChar + s + quoteChar;
                }
                function quote(s) {
                    return $replace.call(String(s), /"/g, '&quot;');
                }
                function canTrustToString(obj) {
                    return !toStringTag || !('object' == typeof obj && (toStringTag in obj || void 0 !== obj[toStringTag]));
                }
                function isArray(obj) {
                    return '[object Array]' === toStr(obj) && canTrustToString(obj);
                }
                function isDate(obj) {
                    return '[object Date]' === toStr(obj) && canTrustToString(obj);
                }
                function isRegExp(obj) {
                    return '[object RegExp]' === toStr(obj) && canTrustToString(obj);
                }
                function isError(obj) {
                    return '[object Error]' === toStr(obj) && canTrustToString(obj);
                }
                function isString(obj) {
                    return '[object String]' === toStr(obj) && canTrustToString(obj);
                }
                function isNumber(obj) {
                    return '[object Number]' === toStr(obj) && canTrustToString(obj);
                }
                function isBoolean(obj) {
                    return '[object Boolean]' === toStr(obj) && canTrustToString(obj);
                }
                function isSymbol(obj) {
                    if (hasShammedSymbols) return obj && 'object' == typeof obj && obj instanceof Symbol;
                    if ('symbol' == typeof obj) return true;
                    if (!obj || 'object' != typeof obj || !symToString) return false;
                    try {
                        symToString.call(obj);
                        return true;
                    } catch (e) {}
                    return false;
                }
                function isBigInt(obj) {
                    if (!obj || 'object' != typeof obj || !bigIntValueOf) return false;
                    try {
                        bigIntValueOf.call(obj);
                        return true;
                    } catch (e) {}
                    return false;
                }
                var hasOwn = Object.prototype.hasOwnProperty || function(key) {
                    return key in this;
                };
                function has(obj, key) {
                    return hasOwn.call(obj, key);
                }
                function toStr(obj) {
                    return objectToString.call(obj);
                }
                function nameOf(f) {
                    if (f.name) return f.name;
                    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
                    if (m) return m[1];
                    return null;
                }
                function indexOf(xs, x) {
                    if (xs.indexOf) return xs.indexOf(x);
                    for(var i = 0, l = xs.length; i < l; i++)if (xs[i] === x) return i;
                    return -1;
                }
                function isMap(x) {
                    if (!mapSize || !x || 'object' != typeof x) return false;
                    try {
                        mapSize.call(x);
                        try {
                            setSize.call(x);
                        } catch (s) {
                            return true;
                        }
                        return x instanceof Map;
                    } catch (e) {}
                    return false;
                }
                function isWeakMap(x) {
                    if (!weakMapHas || !x || 'object' != typeof x) return false;
                    try {
                        weakMapHas.call(x, weakMapHas);
                        try {
                            weakSetHas.call(x, weakSetHas);
                        } catch (s) {
                            return true;
                        }
                        return x instanceof WeakMap;
                    } catch (e) {}
                    return false;
                }
                function isWeakRef(x) {
                    if (!weakRefDeref || !x || 'object' != typeof x) return false;
                    try {
                        weakRefDeref.call(x);
                        return true;
                    } catch (e) {}
                    return false;
                }
                function isSet(x) {
                    if (!setSize || !x || 'object' != typeof x) return false;
                    try {
                        setSize.call(x);
                        try {
                            mapSize.call(x);
                        } catch (m) {
                            return true;
                        }
                        return x instanceof Set;
                    } catch (e) {}
                    return false;
                }
                function isWeakSet(x) {
                    if (!weakSetHas || !x || 'object' != typeof x) return false;
                    try {
                        weakSetHas.call(x, weakSetHas);
                        try {
                            weakMapHas.call(x, weakMapHas);
                        } catch (s) {
                            return true;
                        }
                        return x instanceof WeakSet;
                    } catch (e) {}
                    return false;
                }
                function isElement(x) {
                    if (!x || 'object' != typeof x) return false;
                    if ("u" > typeof HTMLElement && x instanceof HTMLElement) return true;
                    return 'string' == typeof x.nodeName && 'function' == typeof x.getAttribute;
                }
                function inspectString(str, opts) {
                    if (str.length > opts.maxStringLength) {
                        var remaining = str.length - opts.maxStringLength;
                        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
                        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
                    }
                    var quoteRE = quoteREs[opts.quoteStyle || 'single'];
                    quoteRE.lastIndex = 0;
                    var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
                    return wrapQuotes(s, 'single', opts);
                }
                function lowbyte(c) {
                    var n = c.charCodeAt(0);
                    var x = {
                        8: 'b',
                        9: 't',
                        10: 'n',
                        12: 'f',
                        13: 'r'
                    }[n];
                    if (x) return '\\' + x;
                    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
                }
                function markBoxed(str) {
                    return 'Object(' + str + ')';
                }
                function weakCollectionOf(type) {
                    return type + ' { ? }';
                }
                function collectionOf(type, size, entries, indent) {
                    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
                    return type + ' (' + size + ') {' + joinedEntries + '}';
                }
                function singleLineValues(xs) {
                    for(var i = 0; i < xs.length; i++)if (indexOf(xs[i], '\n') >= 0) return false;
                    return true;
                }
                function getIndent(opts, depth) {
                    var baseIndent;
                    if ('\t' === opts.indent) baseIndent = '\t';
                    else {
                        if ('number' != typeof opts.indent || !(opts.indent > 0)) return null;
                        baseIndent = $join.call(Array(opts.indent + 1), ' ');
                    }
                    return {
                        base: baseIndent,
                        prev: $join.call(Array(depth + 1), baseIndent)
                    };
                }
                function indentedJoin(xs, indent) {
                    if (0 === xs.length) return '';
                    var lineJoiner = '\n' + indent.prev + indent.base;
                    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
                }
                function arrObjKeys(obj, inspect) {
                    var isArr = isArray(obj);
                    var xs = [];
                    if (isArr) {
                        xs.length = obj.length;
                        for(var i = 0; i < obj.length; i++)xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
                    }
                    var syms = 'function' == typeof gOPS ? gOPS(obj) : [];
                    var symMap;
                    if (hasShammedSymbols) {
                        symMap = {};
                        for(var k = 0; k < syms.length; k++)symMap['$' + syms[k]] = syms[k];
                    }
                    for(var key in obj)if (has(obj, key)) {
                        if (!isArr || String(Number(key)) !== key || !(key < obj.length)) if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) continue;
                        else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
                        else xs.push(key + ': ' + inspect(obj[key], obj));
                    }
                    if ('function' == typeof gOPS) {
                        for(var j = 0; j < syms.length; j++)if (isEnumerable.call(obj, syms[j])) xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
                    }
                    return xs;
                }
            },
            "./node_modules/once/once.js" (module1, __unused_rspack_exports, __webpack_require__) {
                var wrappy = __webpack_require__("./node_modules/wrappy/wrappy.js");
                module1.exports = wrappy(once);
                module1.exports.strict = wrappy(onceStrict);
                once.proto = once(function() {
                    Object.defineProperty(Function.prototype, 'once', {
                        value: function() {
                            return once(this);
                        },
                        configurable: true
                    });
                    Object.defineProperty(Function.prototype, 'onceStrict', {
                        value: function() {
                            return onceStrict(this);
                        },
                        configurable: true
                    });
                });
                function once(fn) {
                    var f = function() {
                        if (f.called) return f.value;
                        f.called = true;
                        return f.value = fn.apply(this, arguments);
                    };
                    f.called = false;
                    return f;
                }
                function onceStrict(fn) {
                    var f = function() {
                        if (f.called) throw new Error(f.onceError);
                        f.called = true;
                        return f.value = fn.apply(this, arguments);
                    };
                    var name = fn.name || 'Function wrapped with `once`';
                    f.onceError = name + " shouldn't be called more than once";
                    f.called = false;
                    return f;
                }
            },
            "./node_modules/performance-now/lib/performance-now.js" (module1, __unused_rspack_exports, __webpack_require__) {
                var process = __webpack_require__("./node_modules/process/browser.js");
                (function() {
                    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
                    if ("u" > typeof performance && null !== performance && performance.now) module1.exports = function() {
                        return performance.now();
                    };
                    else if (null != process && process.hrtime) {
                        module1.exports = function() {
                            return (getNanoSeconds() - nodeLoadTime) / 1e6;
                        };
                        hrtime = process.hrtime;
                        getNanoSeconds = function() {
                            var hr;
                            hr = hrtime();
                            return 1e9 * hr[0] + hr[1];
                        };
                        moduleLoadTime = getNanoSeconds();
                        upTime = 1e9 * process.uptime();
                        nodeLoadTime = moduleLoadTime - upTime;
                    } else if (Date.now) {
                        module1.exports = function() {
                            return Date.now() - loadTime;
                        };
                        loadTime = Date.now();
                    } else {
                        module1.exports = function() {
                            return new Date().getTime() - loadTime;
                        };
                        loadTime = new Date().getTime();
                    }
                }).call(this);
            },
            "./node_modules/possible-typed-array-names/index.js" (module1) {
                "use strict";
                module1.exports = [
                    'Float16Array',
                    'Float32Array',
                    'Float64Array',
                    'Int8Array',
                    'Int16Array',
                    'Int32Array',
                    'Uint8Array',
                    'Uint8ClampedArray',
                    'Uint16Array',
                    'Uint32Array',
                    'BigInt64Array',
                    'BigUint64Array'
                ];
            },
            "./node_modules/process-nextick-args/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var process = __webpack_require__("./node_modules/process/browser.js");
                if (void 0 !== process && process.version && 0 !== process.version.indexOf('v0.') && (0 !== process.version.indexOf('v1.') || 0 === process.version.indexOf('v1.8.'))) module1.exports = process;
                else module1.exports = {
                    nextTick: nextTick
                };
                function nextTick(fn, arg1, arg2, arg3) {
                    if ('function' != typeof fn) throw new TypeError('"callback" argument must be a function');
                    var len = arguments.length;
                    var args, i;
                    switch(len){
                        case 0:
                        case 1:
                            return process.nextTick(fn);
                        case 2:
                            return process.nextTick(function() {
                                fn.call(null, arg1);
                            });
                        case 3:
                            return process.nextTick(function() {
                                fn.call(null, arg1, arg2);
                            });
                        case 4:
                            return process.nextTick(function() {
                                fn.call(null, arg1, arg2, arg3);
                            });
                        default:
                            args = new Array(len - 1);
                            i = 0;
                            while(i < args.length)args[i++] = arguments[i];
                            return process.nextTick(function() {
                                fn.apply(null, args);
                            });
                    }
                }
            },
            "./node_modules/process/browser.js" (module1) {
                var process = module1.exports = {};
                var cachedSetTimeout;
                var cachedClearTimeout;
                function defaultSetTimout() {
                    throw new Error('setTimeout has not been defined');
                }
                function defaultClearTimeout() {
                    throw new Error('clearTimeout has not been defined');
                }
                (function() {
                    try {
                        cachedSetTimeout = 'function' == typeof setTimeout ? setTimeout : defaultSetTimout;
                    } catch (e) {
                        cachedSetTimeout = defaultSetTimout;
                    }
                    try {
                        cachedClearTimeout = 'function' == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
                    } catch (e) {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                })();
                function runTimeout(fun) {
                    if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
                    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                        cachedSetTimeout = setTimeout;
                        return setTimeout(fun, 0);
                    }
                    try {
                        return cachedSetTimeout(fun, 0);
                    } catch (e) {
                        try {
                            return cachedSetTimeout.call(null, fun, 0);
                        } catch (e) {
                            return cachedSetTimeout.call(this, fun, 0);
                        }
                    }
                }
                function runClearTimeout(marker) {
                    if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
                    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                        cachedClearTimeout = clearTimeout;
                        return clearTimeout(marker);
                    }
                    try {
                        return cachedClearTimeout(marker);
                    } catch (e) {
                        try {
                            return cachedClearTimeout.call(null, marker);
                        } catch (e) {
                            return cachedClearTimeout.call(this, marker);
                        }
                    }
                }
                var queue = [];
                var draining = false;
                var currentQueue;
                var queueIndex = -1;
                function cleanUpNextTick() {
                    if (!draining || !currentQueue) return;
                    draining = false;
                    if (currentQueue.length) queue = currentQueue.concat(queue);
                    else queueIndex = -1;
                    if (queue.length) drainQueue();
                }
                function drainQueue() {
                    if (draining) return;
                    var timeout = runTimeout(cleanUpNextTick);
                    draining = true;
                    var len = queue.length;
                    while(len){
                        currentQueue = queue;
                        queue = [];
                        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
                        queueIndex = -1;
                        len = queue.length;
                    }
                    currentQueue = null;
                    draining = false;
                    runClearTimeout(timeout);
                }
                process.nextTick = function(fun) {
                    var args = new Array(arguments.length - 1);
                    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
                    queue.push(new Item(fun, args));
                    if (1 === queue.length && !draining) runTimeout(drainQueue);
                };
                function Item(fun, array) {
                    this.fun = fun;
                    this.array = array;
                }
                Item.prototype.run = function() {
                    this.fun.apply(null, this.array);
                };
                process.title = 'browser';
                process.browser = true;
                process.env = {};
                process.argv = [];
                process.version = '';
                process.versions = {};
                function noop() {}
                process.on = noop;
                process.addListener = noop;
                process.once = noop;
                process.off = noop;
                process.removeListener = noop;
                process.removeAllListeners = noop;
                process.emit = noop;
                process.prependListener = noop;
                process.prependOnceListener = noop;
                process.listeners = function(name) {
                    return [];
                };
                process.binding = function(name) {
                    throw new Error('process.binding is not supported');
                };
                process.cwd = function() {
                    return '/';
                };
                process.chdir = function(dir) {
                    throw new Error('process.chdir is not supported');
                };
                process.umask = function() {
                    return 0;
                };
            },
            "./node_modules/qs/lib/formats.js" (module1) {
                "use strict";
                var replace = String.prototype.replace;
                var percentTwenties = /%20/g;
                var Format = {
                    RFC1738: 'RFC1738',
                    RFC3986: 'RFC3986'
                };
                module1.exports = {
                    default: Format.RFC3986,
                    formatters: {
                        RFC1738: function(value) {
                            return replace.call(value, percentTwenties, '+');
                        },
                        RFC3986: function(value) {
                            return String(value);
                        }
                    },
                    RFC1738: Format.RFC1738,
                    RFC3986: Format.RFC3986
                };
            },
            "./node_modules/qs/lib/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var stringify = __webpack_require__("./node_modules/qs/lib/stringify.js");
                var parse = __webpack_require__("./node_modules/qs/lib/parse.js");
                var formats = __webpack_require__("./node_modules/qs/lib/formats.js");
                module1.exports = {
                    formats: formats,
                    parse: parse,
                    stringify: stringify
                };
            },
            "./node_modules/qs/lib/parse.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var utils = __webpack_require__("./node_modules/qs/lib/utils.js");
                var has = Object.prototype.hasOwnProperty;
                var isArray = Array.isArray;
                var defaults = {
                    allowDots: false,
                    allowEmptyArrays: false,
                    allowPrototypes: false,
                    allowSparse: false,
                    arrayLimit: 20,
                    charset: 'utf-8',
                    charsetSentinel: false,
                    comma: false,
                    decodeDotInKeys: false,
                    decoder: utils.decode,
                    delimiter: '&',
                    depth: 5,
                    duplicates: 'combine',
                    ignoreQueryPrefix: false,
                    interpretNumericEntities: false,
                    parameterLimit: 1000,
                    parseArrays: true,
                    plainObjects: false,
                    strictDepth: false,
                    strictNullHandling: false,
                    throwOnLimitExceeded: false
                };
                var interpretNumericEntities = function(str) {
                    return str.replace(/&#(\d+);/g, function($0, numberStr) {
                        return String.fromCharCode(parseInt(numberStr, 10));
                    });
                };
                var parseArrayValue = function(val, options, currentArrayLength) {
                    if (val && 'string' == typeof val && options.comma && val.indexOf(',') > -1) return val.split(',');
                    if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) throw new RangeError('Array limit exceeded. Only ' + options.arrayLimit + ' element' + (1 === options.arrayLimit ? '' : 's') + ' allowed in an array.');
                    return val;
                };
                var isoSentinel = 'utf8=%26%2310003%3B';
                var charsetSentinel = 'utf8=%E2%9C%93';
                var parseValues = function(str, options) {
                    var obj = {
                        __proto__: null
                    };
                    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
                    cleanStr = cleanStr.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
                    var limit = options.parameterLimit === 1 / 0 ? void 0 : options.parameterLimit;
                    var parts = cleanStr.split(options.delimiter, options.throwOnLimitExceeded ? limit + 1 : limit);
                    if (options.throwOnLimitExceeded && parts.length > limit) throw new RangeError('Parameter limit exceeded. Only ' + limit + ' parameter' + (1 === limit ? '' : 's') + ' allowed.');
                    var skipIndex = -1;
                    var i;
                    var charset = options.charset;
                    if (options.charsetSentinel) {
                        for(i = 0; i < parts.length; ++i)if (0 === parts[i].indexOf('utf8=')) {
                            if (parts[i] === charsetSentinel) charset = 'utf-8';
                            else if (parts[i] === isoSentinel) charset = 'iso-8859-1';
                            skipIndex = i;
                            i = parts.length;
                        }
                    }
                    for(i = 0; i < parts.length; ++i)if (i !== skipIndex) {
                        var part = parts[i];
                        var bracketEqualsPos = part.indexOf(']=');
                        var pos = -1 === bracketEqualsPos ? part.indexOf('=') : bracketEqualsPos + 1;
                        var key;
                        var val;
                        if (-1 === pos) {
                            key = options.decoder(part, defaults.decoder, charset, 'key');
                            val = options.strictNullHandling ? null : '';
                        } else {
                            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
                            if (null !== key) val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options, isArray(obj[key]) ? obj[key].length : 0), function(encodedVal) {
                                return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                            });
                        }
                        if (val && options.interpretNumericEntities && 'iso-8859-1' === charset) val = interpretNumericEntities(String(val));
                        if (part.indexOf('[]=') > -1) val = isArray(val) ? [
                            val
                        ] : val;
                        if (null !== key) {
                            var existing = has.call(obj, key);
                            if (existing && 'combine' === options.duplicates) obj[key] = utils.combine(obj[key], val, options.arrayLimit, options.plainObjects);
                            else if (!existing || 'last' === options.duplicates) obj[key] = val;
                        }
                    }
                    return obj;
                };
                var parseObject = function(chain, val, options, valuesParsed) {
                    var currentArrayLength = 0;
                    if (chain.length > 0 && '[]' === chain[chain.length - 1]) {
                        var parentKey = chain.slice(0, -1).join('');
                        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
                    }
                    var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
                    for(var i = chain.length - 1; i >= 0; --i){
                        var obj;
                        var root = chain[i];
                        if ('[]' === root && options.parseArrays) obj = utils.isOverflow(leaf) ? leaf : options.allowEmptyArrays && ('' === leaf || options.strictNullHandling && null === leaf) ? [] : utils.combine([], leaf, options.arrayLimit, options.plainObjects);
                        else {
                            obj = options.plainObjects ? {
                                __proto__: null
                            } : {};
                            var cleanRoot = '[' === root.charAt(0) && ']' === root.charAt(root.length - 1) ? root.slice(1, -1) : root;
                            var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, '.') : cleanRoot;
                            var index = parseInt(decodedRoot, 10);
                            if (options.parseArrays || '' !== decodedRoot) {
                                if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                                    obj = [];
                                    obj[index] = leaf;
                                } else if ('__proto__' !== decodedRoot) obj[decodedRoot] = leaf;
                            } else obj = {
                                0: leaf
                            };
                        }
                        leaf = obj;
                    }
                    return leaf;
                };
                var splitKeyIntoSegments = function(givenKey, options) {
                    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
                    if (options.depth <= 0) {
                        if (!options.plainObjects && has.call(Object.prototype, key)) {
                            if (!options.allowPrototypes) return;
                        }
                        return [
                            key
                        ];
                    }
                    var brackets = /(\[[^[\]]*])/;
                    var child = /(\[[^[\]]*])/g;
                    var segment = brackets.exec(key);
                    var parent = segment ? key.slice(0, segment.index) : key;
                    var keys = [];
                    if (parent) {
                        if (!options.plainObjects && has.call(Object.prototype, parent)) {
                            if (!options.allowPrototypes) return;
                        }
                        keys.push(parent);
                    }
                    var i = 0;
                    while(null !== (segment = child.exec(key)) && i < options.depth){
                        i += 1;
                        var segmentContent = segment[1].slice(1, -1);
                        if (!options.plainObjects && has.call(Object.prototype, segmentContent)) {
                            if (!options.allowPrototypes) return;
                        }
                        keys.push(segment[1]);
                    }
                    if (segment) {
                        if (true === options.strictDepth) throw new RangeError('Input depth exceeded depth option of ' + options.depth + ' and strictDepth is true');
                        keys.push('[' + key.slice(segment.index) + ']');
                    }
                    return keys;
                };
                var parseKeys = function(givenKey, val, options, valuesParsed) {
                    if (!givenKey) return;
                    var keys = splitKeyIntoSegments(givenKey, options);
                    if (!keys) return;
                    return parseObject(keys, val, options, valuesParsed);
                };
                var normalizeParseOptions = function(opts) {
                    if (!opts) return defaults;
                    if (void 0 !== opts.allowEmptyArrays && 'boolean' != typeof opts.allowEmptyArrays) throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
                    if (void 0 !== opts.decodeDotInKeys && 'boolean' != typeof opts.decodeDotInKeys) throw new TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
                    if (null !== opts.decoder && void 0 !== opts.decoder && 'function' != typeof opts.decoder) throw new TypeError('Decoder has to be a function.');
                    if (void 0 !== opts.charset && 'utf-8' !== opts.charset && 'iso-8859-1' !== opts.charset) throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
                    if (void 0 !== opts.throwOnLimitExceeded && 'boolean' != typeof opts.throwOnLimitExceeded) throw new TypeError('`throwOnLimitExceeded` option must be a boolean');
                    var charset = void 0 === opts.charset ? defaults.charset : opts.charset;
                    var duplicates = void 0 === opts.duplicates ? defaults.duplicates : opts.duplicates;
                    if ('combine' !== duplicates && 'first' !== duplicates && 'last' !== duplicates) throw new TypeError('The duplicates option must be either combine, first, or last');
                    var allowDots = void 0 === opts.allowDots ? true === opts.decodeDotInKeys ? true : defaults.allowDots : !!opts.allowDots;
                    return {
                        allowDots: allowDots,
                        allowEmptyArrays: 'boolean' == typeof opts.allowEmptyArrays ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
                        allowPrototypes: 'boolean' == typeof opts.allowPrototypes ? opts.allowPrototypes : defaults.allowPrototypes,
                        allowSparse: 'boolean' == typeof opts.allowSparse ? opts.allowSparse : defaults.allowSparse,
                        arrayLimit: 'number' == typeof opts.arrayLimit ? opts.arrayLimit : defaults.arrayLimit,
                        charset: charset,
                        charsetSentinel: 'boolean' == typeof opts.charsetSentinel ? opts.charsetSentinel : defaults.charsetSentinel,
                        comma: 'boolean' == typeof opts.comma ? opts.comma : defaults.comma,
                        decodeDotInKeys: 'boolean' == typeof opts.decodeDotInKeys ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
                        decoder: 'function' == typeof opts.decoder ? opts.decoder : defaults.decoder,
                        delimiter: 'string' == typeof opts.delimiter || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
                        depth: 'number' == typeof opts.depth || false === opts.depth ? +opts.depth : defaults.depth,
                        duplicates: duplicates,
                        ignoreQueryPrefix: true === opts.ignoreQueryPrefix,
                        interpretNumericEntities: 'boolean' == typeof opts.interpretNumericEntities ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
                        parameterLimit: 'number' == typeof opts.parameterLimit ? opts.parameterLimit : defaults.parameterLimit,
                        parseArrays: false !== opts.parseArrays,
                        plainObjects: 'boolean' == typeof opts.plainObjects ? opts.plainObjects : defaults.plainObjects,
                        strictDepth: 'boolean' == typeof opts.strictDepth ? !!opts.strictDepth : defaults.strictDepth,
                        strictNullHandling: 'boolean' == typeof opts.strictNullHandling ? opts.strictNullHandling : defaults.strictNullHandling,
                        throwOnLimitExceeded: 'boolean' == typeof opts.throwOnLimitExceeded ? opts.throwOnLimitExceeded : false
                    };
                };
                module1.exports = function(str, opts) {
                    var options = normalizeParseOptions(opts);
                    if ('' === str || null == str) return options.plainObjects ? {
                        __proto__: null
                    } : {};
                    var tempObj = 'string' == typeof str ? parseValues(str, options) : str;
                    var obj = options.plainObjects ? {
                        __proto__: null
                    } : {};
                    var keys = Object.keys(tempObj);
                    for(var i = 0; i < keys.length; ++i){
                        var key = keys[i];
                        var newObj = parseKeys(key, tempObj[key], options, 'string' == typeof str);
                        obj = utils.merge(obj, newObj, options);
                    }
                    if (true === options.allowSparse) return obj;
                    return utils.compact(obj);
                };
            },
            "./node_modules/qs/lib/stringify.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var getSideChannel = __webpack_require__("./node_modules/side-channel/index.js");
                var utils = __webpack_require__("./node_modules/qs/lib/utils.js");
                var formats = __webpack_require__("./node_modules/qs/lib/formats.js");
                var has = Object.prototype.hasOwnProperty;
                var arrayPrefixGenerators = {
                    brackets: function(prefix) {
                        return prefix + '[]';
                    },
                    comma: 'comma',
                    indices: function(prefix, key) {
                        return prefix + '[' + key + ']';
                    },
                    repeat: function(prefix) {
                        return prefix;
                    }
                };
                var isArray = Array.isArray;
                var push = Array.prototype.push;
                var pushToArray = function(arr, valueOrArray) {
                    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
                        valueOrArray
                    ]);
                };
                var toISO = Date.prototype.toISOString;
                var defaultFormat = formats['default'];
                var defaults = {
                    addQueryPrefix: false,
                    allowDots: false,
                    allowEmptyArrays: false,
                    arrayFormat: 'indices',
                    charset: 'utf-8',
                    charsetSentinel: false,
                    commaRoundTrip: false,
                    delimiter: '&',
                    encode: true,
                    encodeDotInKeys: false,
                    encoder: utils.encode,
                    encodeValuesOnly: false,
                    filter: void 0,
                    format: defaultFormat,
                    formatter: formats.formatters[defaultFormat],
                    indices: false,
                    serializeDate: function(date) {
                        return toISO.call(date);
                    },
                    skipNulls: false,
                    strictNullHandling: false
                };
                var isNonNullishPrimitive = function(v) {
                    return 'string' == typeof v || 'number' == typeof v || 'boolean' == typeof v || 'symbol' == typeof v || 'bigint' == typeof v;
                };
                var sentinel = {};
                var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
                    var obj = object;
                    var tmpSc = sideChannel;
                    var step = 0;
                    var findFlag = false;
                    while(void 0 !== (tmpSc = tmpSc.get(sentinel)) && !findFlag){
                        var pos = tmpSc.get(object);
                        step += 1;
                        if (void 0 !== pos) if (pos === step) throw new RangeError('Cyclic object value');
                        else findFlag = true;
                        if (void 0 === tmpSc.get(sentinel)) step = 0;
                    }
                    if ('function' == typeof filter) obj = filter(prefix, obj);
                    else if (obj instanceof Date) obj = serializeDate(obj);
                    else if ('comma' === generateArrayPrefix && isArray(obj)) obj = utils.maybeMap(obj, function(value) {
                        if (value instanceof Date) return serializeDate(value);
                        return value;
                    });
                    if (null === obj) {
                        if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
                        obj = '';
                    }
                    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
                        if (encoder) {
                            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
                            return [
                                formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))
                            ];
                        }
                        return [
                            formatter(prefix) + '=' + formatter(String(obj))
                        ];
                    }
                    var values = [];
                    if (void 0 === obj) return values;
                    var objKeys;
                    if ('comma' === generateArrayPrefix && isArray(obj)) {
                        if (encodeValuesOnly && encoder) obj = utils.maybeMap(obj, encoder);
                        objKeys = [
                            {
                                value: obj.length > 0 ? obj.join(',') || null : void 0
                            }
                        ];
                    } else if (isArray(filter)) objKeys = filter;
                    else {
                        var keys = Object.keys(obj);
                        objKeys = sort ? keys.sort(sort) : keys;
                    }
                    var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, '%2E') : String(prefix);
                    var adjustedPrefix = commaRoundTrip && isArray(obj) && 1 === obj.length ? encodedPrefix + '[]' : encodedPrefix;
                    if (allowEmptyArrays && isArray(obj) && 0 === obj.length) return adjustedPrefix + '[]';
                    for(var j = 0; j < objKeys.length; ++j){
                        var key = objKeys[j];
                        var value = 'object' == typeof key && key && void 0 !== key.value ? key.value : obj[key];
                        if (!skipNulls || null !== value) {
                            var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, '%2E') : String(key);
                            var keyPrefix = isArray(obj) ? 'function' == typeof generateArrayPrefix ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? '.' + encodedKey : '[' + encodedKey + ']');
                            sideChannel.set(object, step);
                            var valueSideChannel = getSideChannel();
                            valueSideChannel.set(sentinel, sideChannel);
                            pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, 'comma' === generateArrayPrefix && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
                        }
                    }
                    return values;
                };
                var normalizeStringifyOptions = function(opts) {
                    if (!opts) return defaults;
                    if (void 0 !== opts.allowEmptyArrays && 'boolean' != typeof opts.allowEmptyArrays) throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
                    if (void 0 !== opts.encodeDotInKeys && 'boolean' != typeof opts.encodeDotInKeys) throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
                    if (null !== opts.encoder && void 0 !== opts.encoder && 'function' != typeof opts.encoder) throw new TypeError('Encoder has to be a function.');
                    var charset = opts.charset || defaults.charset;
                    if (void 0 !== opts.charset && 'utf-8' !== opts.charset && 'iso-8859-1' !== opts.charset) throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
                    var format = formats['default'];
                    if (void 0 !== opts.format) {
                        if (!has.call(formats.formatters, opts.format)) throw new TypeError('Unknown format option provided.');
                        format = opts.format;
                    }
                    var formatter = formats.formatters[format];
                    var filter = defaults.filter;
                    if ('function' == typeof opts.filter || isArray(opts.filter)) filter = opts.filter;
                    var arrayFormat;
                    arrayFormat = opts.arrayFormat in arrayPrefixGenerators ? opts.arrayFormat : 'indices' in opts ? opts.indices ? 'indices' : 'repeat' : defaults.arrayFormat;
                    if ('commaRoundTrip' in opts && 'boolean' != typeof opts.commaRoundTrip) throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
                    var allowDots = void 0 === opts.allowDots ? true === opts.encodeDotInKeys ? true : defaults.allowDots : !!opts.allowDots;
                    return {
                        addQueryPrefix: 'boolean' == typeof opts.addQueryPrefix ? opts.addQueryPrefix : defaults.addQueryPrefix,
                        allowDots: allowDots,
                        allowEmptyArrays: 'boolean' == typeof opts.allowEmptyArrays ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
                        arrayFormat: arrayFormat,
                        charset: charset,
                        charsetSentinel: 'boolean' == typeof opts.charsetSentinel ? opts.charsetSentinel : defaults.charsetSentinel,
                        commaRoundTrip: !!opts.commaRoundTrip,
                        delimiter: void 0 === opts.delimiter ? defaults.delimiter : opts.delimiter,
                        encode: 'boolean' == typeof opts.encode ? opts.encode : defaults.encode,
                        encodeDotInKeys: 'boolean' == typeof opts.encodeDotInKeys ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
                        encoder: 'function' == typeof opts.encoder ? opts.encoder : defaults.encoder,
                        encodeValuesOnly: 'boolean' == typeof opts.encodeValuesOnly ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
                        filter: filter,
                        format: format,
                        formatter: formatter,
                        serializeDate: 'function' == typeof opts.serializeDate ? opts.serializeDate : defaults.serializeDate,
                        skipNulls: 'boolean' == typeof opts.skipNulls ? opts.skipNulls : defaults.skipNulls,
                        sort: 'function' == typeof opts.sort ? opts.sort : null,
                        strictNullHandling: 'boolean' == typeof opts.strictNullHandling ? opts.strictNullHandling : defaults.strictNullHandling
                    };
                };
                module1.exports = function(object, opts) {
                    var obj = object;
                    var options = normalizeStringifyOptions(opts);
                    var objKeys;
                    var filter;
                    if ('function' == typeof options.filter) {
                        filter = options.filter;
                        obj = filter('', obj);
                    } else if (isArray(options.filter)) {
                        filter = options.filter;
                        objKeys = filter;
                    }
                    var keys = [];
                    if ('object' != typeof obj || null === obj) return '';
                    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
                    var commaRoundTrip = 'comma' === generateArrayPrefix && options.commaRoundTrip;
                    if (!objKeys) objKeys = Object.keys(obj);
                    if (options.sort) objKeys.sort(options.sort);
                    var sideChannel = getSideChannel();
                    for(var i = 0; i < objKeys.length; ++i){
                        var key = objKeys[i];
                        var value = obj[key];
                        if (!options.skipNulls || null !== value) pushToArray(keys, stringify(value, key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
                    }
                    var joined = keys.join(options.delimiter);
                    var prefix = true === options.addQueryPrefix ? '?' : '';
                    if (options.charsetSentinel) if ('iso-8859-1' === options.charset) prefix += 'utf8=%26%2310003%3B&';
                    else prefix += 'utf8=%E2%9C%93&';
                    return joined.length > 0 ? prefix + joined : '';
                };
            },
            "./node_modules/qs/lib/utils.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var formats = __webpack_require__("./node_modules/qs/lib/formats.js");
                var getSideChannel = __webpack_require__("./node_modules/side-channel/index.js");
                var has = Object.prototype.hasOwnProperty;
                var isArray = Array.isArray;
                var overflowChannel = getSideChannel();
                var markOverflow = function(obj, maxIndex) {
                    overflowChannel.set(obj, maxIndex);
                    return obj;
                };
                var isOverflow = function(obj) {
                    return overflowChannel.has(obj);
                };
                var getMaxIndex = function(obj) {
                    return overflowChannel.get(obj);
                };
                var setMaxIndex = function(obj, maxIndex) {
                    overflowChannel.set(obj, maxIndex);
                };
                var hexTable = function() {
                    var array = [];
                    for(var i = 0; i < 256; ++i)array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
                    return array;
                }();
                var compactQueue = function(queue) {
                    while(queue.length > 1){
                        var item = queue.pop();
                        var obj = item.obj[item.prop];
                        if (isArray(obj)) {
                            var compacted = [];
                            for(var j = 0; j < obj.length; ++j)if (void 0 !== obj[j]) compacted.push(obj[j]);
                            item.obj[item.prop] = compacted;
                        }
                    }
                };
                var arrayToObject = function(source, options) {
                    var obj = options && options.plainObjects ? {
                        __proto__: null
                    } : {};
                    for(var i = 0; i < source.length; ++i)if (void 0 !== source[i]) obj[i] = source[i];
                    return obj;
                };
                var merge = function merge(target, source, options) {
                    if (!source) return target;
                    if ('object' != typeof source && 'function' != typeof source) {
                        if (isArray(target)) target.push(source);
                        else if (!target || 'object' != typeof target) return [
                            target,
                            source
                        ];
                        else if (isOverflow(target)) {
                            var newIndex = getMaxIndex(target) + 1;
                            target[newIndex] = source;
                            setMaxIndex(target, newIndex);
                        } else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) target[source] = true;
                        return target;
                    }
                    if (!target || 'object' != typeof target) {
                        if (isOverflow(source)) {
                            var sourceKeys = Object.keys(source);
                            var result = options && options.plainObjects ? {
                                __proto__: null,
                                0: target
                            } : {
                                0: target
                            };
                            for(var m = 0; m < sourceKeys.length; m++){
                                var oldKey = parseInt(sourceKeys[m], 10);
                                result[oldKey + 1] = source[sourceKeys[m]];
                            }
                            return markOverflow(result, getMaxIndex(source) + 1);
                        }
                        return [
                            target
                        ].concat(source);
                    }
                    var mergeTarget = target;
                    if (isArray(target) && !isArray(source)) mergeTarget = arrayToObject(target, options);
                    if (isArray(target) && isArray(source)) {
                        source.forEach(function(item, i) {
                            if (has.call(target, i)) {
                                var targetItem = target[i];
                                if (targetItem && 'object' == typeof targetItem && item && 'object' == typeof item) target[i] = merge(targetItem, item, options);
                                else target.push(item);
                            } else target[i] = item;
                        });
                        return target;
                    }
                    return Object.keys(source).reduce(function(acc, key) {
                        var value = source[key];
                        if (has.call(acc, key)) acc[key] = merge(acc[key], value, options);
                        else acc[key] = value;
                        return acc;
                    }, mergeTarget);
                };
                var assign = function(target, source) {
                    return Object.keys(source).reduce(function(acc, key) {
                        acc[key] = source[key];
                        return acc;
                    }, target);
                };
                var decode = function(str, defaultDecoder, charset) {
                    var strWithoutPlus = str.replace(/\+/g, ' ');
                    if ('iso-8859-1' === charset) return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(strWithoutPlus);
                    } catch (e) {
                        return strWithoutPlus;
                    }
                };
                var limit = 1024;
                var encode = function(str, defaultEncoder, charset, kind, format) {
                    if (0 === str.length) return str;
                    var string = str;
                    if ('symbol' == typeof str) string = Symbol.prototype.toString.call(str);
                    else if ('string' != typeof str) string = String(str);
                    if ('iso-8859-1' === charset) return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
                        return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
                    });
                    var out = '';
                    for(var j = 0; j < string.length; j += limit){
                        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
                        var arr = [];
                        for(var i = 0; i < segment.length; ++i){
                            var c = segment.charCodeAt(i);
                            if (0x2D === c || 0x2E === c || 0x5F === c || 0x7E === c || c >= 0x30 && c <= 0x39 || c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A || format === formats.RFC1738 && (0x28 === c || 0x29 === c)) {
                                arr[arr.length] = segment.charAt(i);
                                continue;
                            }
                            if (c < 0x80) {
                                arr[arr.length] = hexTable[c];
                                continue;
                            }
                            if (c < 0x800) {
                                arr[arr.length] = hexTable[0xC0 | c >> 6] + hexTable[0x80 | 0x3F & c];
                                continue;
                            }
                            if (c < 0xD800 || c >= 0xE000) {
                                arr[arr.length] = hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | 0x3F & c];
                                continue;
                            }
                            i += 1;
                            c = 0x10000 + ((0x3FF & c) << 10 | 0x3FF & segment.charCodeAt(i));
                            arr[arr.length] = hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | 0x3F & c];
                        }
                        out += arr.join('');
                    }
                    return out;
                };
                var compact = function(value) {
                    var queue = [
                        {
                            obj: {
                                o: value
                            },
                            prop: 'o'
                        }
                    ];
                    var refs = [];
                    for(var i = 0; i < queue.length; ++i){
                        var item = queue[i];
                        var obj = item.obj[item.prop];
                        var keys = Object.keys(obj);
                        for(var j = 0; j < keys.length; ++j){
                            var key = keys[j];
                            var val = obj[key];
                            if ('object' == typeof val && null !== val && -1 === refs.indexOf(val)) {
                                queue.push({
                                    obj: obj,
                                    prop: key
                                });
                                refs.push(val);
                            }
                        }
                    }
                    compactQueue(queue);
                    return value;
                };
                var isRegExp = function(obj) {
                    return '[object RegExp]' === Object.prototype.toString.call(obj);
                };
                var isBuffer = function(obj) {
                    if (!obj || 'object' != typeof obj) return false;
                    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
                };
                var combine = function(a, b, arrayLimit, plainObjects) {
                    if (isOverflow(a)) {
                        var newIndex = getMaxIndex(a) + 1;
                        a[newIndex] = b;
                        setMaxIndex(a, newIndex);
                        return a;
                    }
                    var result = [].concat(a, b);
                    if (result.length > arrayLimit) return markOverflow(arrayToObject(result, {
                        plainObjects: plainObjects
                    }), result.length - 1);
                    return result;
                };
                var maybeMap = function(val, fn) {
                    if (isArray(val)) {
                        var mapped = [];
                        for(var i = 0; i < val.length; i += 1)mapped.push(fn(val[i]));
                        return mapped;
                    }
                    return fn(val);
                };
                module1.exports = {
                    arrayToObject: arrayToObject,
                    assign: assign,
                    combine: combine,
                    compact: compact,
                    decode: decode,
                    encode: encode,
                    isBuffer: isBuffer,
                    isOverflow: isOverflow,
                    isRegExp: isRegExp,
                    maybeMap: maybeMap,
                    merge: merge
                };
            },
            "./node_modules/raf/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                var now = __webpack_require__("./node_modules/performance-now/lib/performance-now.js"), root = "u" < typeof window ? __webpack_require__.g : window, vendors = [
                    'moz',
                    'webkit'
                ], suffix = 'AnimationFrame', raf = root['request' + suffix], caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
                for(var i = 0; !raf && i < vendors.length; i++){
                    raf = root[vendors[i] + 'Request' + suffix];
                    caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
                }
                if (!raf || !caf) {
                    var last = 0, id = 0, queue = [], frameDuration = 1000 / 60;
                    raf = function(callback) {
                        if (0 === queue.length) {
                            var _now = now(), next = Math.max(0, frameDuration - (_now - last));
                            last = next + _now;
                            setTimeout(function() {
                                var cp = queue.slice(0);
                                queue.length = 0;
                                for(var i = 0; i < cp.length; i++)if (!cp[i].cancelled) try {
                                    cp[i].callback(last);
                                } catch (e) {
                                    setTimeout(function() {
                                        throw e;
                                    }, 0);
                                }
                            }, Math.round(next));
                        }
                        queue.push({
                            handle: ++id,
                            callback: callback,
                            cancelled: false
                        });
                        return id;
                    };
                    caf = function(handle) {
                        for(var i = 0; i < queue.length; i++)if (queue[i].handle === handle) queue[i].cancelled = true;
                    };
                }
                module1.exports = function(fn) {
                    return raf.call(root, fn);
                };
                module1.exports.cancel = function() {
                    caf.apply(root, arguments);
                };
                module1.exports.polyfill = function(object) {
                    if (!object) object = root;
                    object.requestAnimationFrame = raf;
                    object.cancelAnimationFrame = caf;
                };
            },
            "./node_modules/safe-regex-test/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var callBound = __webpack_require__("./node_modules/call-bound/index.js");
                var isRegex = __webpack_require__("./node_modules/is-regex/index.js");
                var $exec = callBound('RegExp.prototype.exec');
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                module1.exports = function(regex) {
                    if (!isRegex(regex)) throw new $TypeError('`regex` must be a RegExp');
                    return function(s) {
                        return null !== $exec(regex, s);
                    };
                };
            },
            "./node_modules/set-function-length/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var GetIntrinsic = __webpack_require__("./node_modules/get-intrinsic/index.js");
                var define1 = __webpack_require__("./node_modules/define-data-property/index.js");
                var hasDescriptors = __webpack_require__("./node_modules/has-property-descriptors/index.js")();
                var gOPD = __webpack_require__("./node_modules/gopd/index.js");
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                var $floor = GetIntrinsic('%Math.floor%');
                module1.exports = function(fn, length) {
                    if ('function' != typeof fn) throw new $TypeError('`fn` is not a function');
                    if ('number' != typeof length || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) throw new $TypeError('`length` must be a positive 32-bit integer');
                    var loose = arguments.length > 2 && !!arguments[2];
                    var functionLengthIsConfigurable = true;
                    var functionLengthIsWritable = true;
                    if ('length' in fn && gOPD) {
                        var desc = gOPD(fn, 'length');
                        if (desc && !desc.configurable) functionLengthIsConfigurable = false;
                        if (desc && !desc.writable) functionLengthIsWritable = false;
                    }
                    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) hasDescriptors ? define1(fn, 'length', length, true, true) : define1(fn, 'length', length);
                    return fn;
                };
            },
            "./node_modules/side-channel-list/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var inspect = __webpack_require__("./node_modules/object-inspect/index.js");
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                var listGetNode = function(list, key, isDelete) {
                    var prev = list;
                    var curr;
                    for(; null != (curr = prev.next); prev = curr)if (curr.key === key) {
                        prev.next = curr.next;
                        if (!isDelete) {
                            curr.next = list.next;
                            list.next = curr;
                        }
                        return curr;
                    }
                };
                var listGet = function(objects, key) {
                    if (!objects) return;
                    var node = listGetNode(objects, key);
                    return node && node.value;
                };
                var listSet = function(objects, key, value) {
                    var node = listGetNode(objects, key);
                    if (node) node.value = value;
                    else objects.next = {
                        key: key,
                        next: objects.next,
                        value: value
                    };
                };
                var listHas = function(objects, key) {
                    if (!objects) return false;
                    return !!listGetNode(objects, key);
                };
                var listDelete = function(objects, key) {
                    if (objects) return listGetNode(objects, key, true);
                };
                module1.exports = function() {
                    var $o;
                    var channel = {
                        assert: function(key) {
                            if (!channel.has(key)) throw new $TypeError('Side channel does not contain ' + inspect(key));
                        },
                        delete: function(key) {
                            var root = $o && $o.next;
                            var deletedNode = listDelete($o, key);
                            if (deletedNode && root && root === deletedNode) $o = void 0;
                            return !!deletedNode;
                        },
                        get: function(key) {
                            return listGet($o, key);
                        },
                        has: function(key) {
                            return listHas($o, key);
                        },
                        set: function(key, value) {
                            if (!$o) $o = {
                                next: void 0
                            };
                            listSet($o, key, value);
                        }
                    };
                    return channel;
                };
            },
            "./node_modules/side-channel-map/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var GetIntrinsic = __webpack_require__("./node_modules/get-intrinsic/index.js");
                var callBound = __webpack_require__("./node_modules/call-bound/index.js");
                var inspect = __webpack_require__("./node_modules/object-inspect/index.js");
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                var $Map = GetIntrinsic('%Map%', true);
                var $mapGet = callBound('Map.prototype.get', true);
                var $mapSet = callBound('Map.prototype.set', true);
                var $mapHas = callBound('Map.prototype.has', true);
                var $mapDelete = callBound('Map.prototype.delete', true);
                var $mapSize = callBound('Map.prototype.size', true);
                module1.exports = !!$Map && function() {
                    var $m;
                    var channel = {
                        assert: function(key) {
                            if (!channel.has(key)) throw new $TypeError('Side channel does not contain ' + inspect(key));
                        },
                        delete: function(key) {
                            if ($m) {
                                var result = $mapDelete($m, key);
                                if (0 === $mapSize($m)) $m = void 0;
                                return result;
                            }
                            return false;
                        },
                        get: function(key) {
                            if ($m) return $mapGet($m, key);
                        },
                        has: function(key) {
                            if ($m) return $mapHas($m, key);
                            return false;
                        },
                        set: function(key, value) {
                            if (!$m) $m = new $Map();
                            $mapSet($m, key, value);
                        }
                    };
                    return channel;
                };
            },
            "./node_modules/side-channel-weakmap/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var GetIntrinsic = __webpack_require__("./node_modules/get-intrinsic/index.js");
                var callBound = __webpack_require__("./node_modules/call-bound/index.js");
                var inspect = __webpack_require__("./node_modules/object-inspect/index.js");
                var getSideChannelMap = __webpack_require__("./node_modules/side-channel-map/index.js");
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                var $WeakMap = GetIntrinsic('%WeakMap%', true);
                var $weakMapGet = callBound('WeakMap.prototype.get', true);
                var $weakMapSet = callBound('WeakMap.prototype.set', true);
                var $weakMapHas = callBound('WeakMap.prototype.has', true);
                var $weakMapDelete = callBound('WeakMap.prototype.delete', true);
                module1.exports = $WeakMap ? function() {
                    var $wm;
                    var $m;
                    var channel = {
                        assert: function(key) {
                            if (!channel.has(key)) throw new $TypeError('Side channel does not contain ' + inspect(key));
                        },
                        delete: function(key) {
                            if ($WeakMap && key && ('object' == typeof key || 'function' == typeof key)) {
                                if ($wm) return $weakMapDelete($wm, key);
                            } else if (getSideChannelMap) {
                                if ($m) return $m['delete'](key);
                            }
                            return false;
                        },
                        get: function(key) {
                            if ($WeakMap && key && ('object' == typeof key || 'function' == typeof key)) {
                                if ($wm) return $weakMapGet($wm, key);
                            }
                            return $m && $m.get(key);
                        },
                        has: function(key) {
                            if ($WeakMap && key && ('object' == typeof key || 'function' == typeof key)) {
                                if ($wm) return $weakMapHas($wm, key);
                            }
                            return !!$m && $m.has(key);
                        },
                        set: function(key, value) {
                            if ($WeakMap && key && ('object' == typeof key || 'function' == typeof key)) {
                                if (!$wm) $wm = new $WeakMap();
                                $weakMapSet($wm, key, value);
                            } else if (getSideChannelMap) {
                                if (!$m) $m = getSideChannelMap();
                                $m.set(key, value);
                            }
                        }
                    };
                    return channel;
                } : getSideChannelMap;
            },
            "./node_modules/side-channel/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                var inspect = __webpack_require__("./node_modules/object-inspect/index.js");
                var getSideChannelList = __webpack_require__("./node_modules/side-channel-list/index.js");
                var getSideChannelMap = __webpack_require__("./node_modules/side-channel-map/index.js");
                var getSideChannelWeakMap = __webpack_require__("./node_modules/side-channel-weakmap/index.js");
                var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
                module1.exports = function() {
                    var $channelData;
                    var channel = {
                        assert: function(key) {
                            if (!channel.has(key)) throw new $TypeError('Side channel does not contain ' + inspect(key));
                        },
                        delete: function(key) {
                            return !!$channelData && $channelData['delete'](key);
                        },
                        get: function(key) {
                            return $channelData && $channelData.get(key);
                        },
                        has: function(key) {
                            return !!$channelData && $channelData.has(key);
                        },
                        set: function(key, value) {
                            if (!$channelData) $channelData = makeChannel();
                            $channelData.set(key, value);
                        }
                    };
                    return channel;
                };
            },
            "./node_modules/stream-shift/index.js" (module1) {
                module1.exports = shift;
                function shift(stream) {
                    var rs = stream._readableState;
                    if (!rs) return null;
                    return rs.objectMode || 'number' == typeof stream._duplexState ? stream.read() : stream.read(getStateLength(rs));
                }
                function getStateLength(state) {
                    if (state.buffer.length) {
                        var idx = state.bufferIndex || 0;
                        if (state.buffer.head) return state.buffer.head.data.length;
                        if (state.buffer.length - idx > 0 && state.buffer[idx]) return state.buffer[idx].length;
                    }
                    return state.length;
                }
            },
            "./node_modules/superagent/lib/agent-base.js" (module1) {
                "use strict";
                const defaults = [
                    'use',
                    'on',
                    'once',
                    'set',
                    'query',
                    'type',
                    'accept',
                    'auth',
                    'withCredentials',
                    'sortQuery',
                    'retry',
                    'ok',
                    'redirects',
                    'timeout',
                    'buffer',
                    'serialize',
                    'parse',
                    'ca',
                    'key',
                    'pfx',
                    'cert',
                    'disableTLSCerts'
                ];
                class Agent {
                    constructor(){
                        this._defaults = [];
                    }
                    _setDefaults(request) {
                        for (const def of this._defaults)request[def.fn](...def.args);
                    }
                }
                for (const fn of defaults)Agent.prototype[fn] = function(...args) {
                    this._defaults.push({
                        fn,
                        args
                    });
                    return this;
                };
                module1.exports = Agent;
            },
            "./node_modules/superagent/lib/client.js" (module1, exports1, __webpack_require__) {
                "use strict";
                let root;
                if ("u" > typeof window) root = window;
                else if ("u" < typeof self) {
                    console.warn('Using browser-only version of superagent in non-browser environment');
                    root = void 0;
                } else root = self;
                const Emitter = __webpack_require__("./node_modules/component-emitter/index.js");
                const safeStringify = __webpack_require__("./node_modules/fast-safe-stringify/index.js");
                const qs = __webpack_require__("./node_modules/qs/lib/index.js");
                const RequestBase = __webpack_require__("./node_modules/superagent/lib/request-base.js");
                const { isObject, mixin, hasOwn } = __webpack_require__("./node_modules/superagent/lib/utils.js");
                const ResponseBase = __webpack_require__("./node_modules/superagent/lib/response-base.js");
                const Agent = __webpack_require__("./node_modules/superagent/lib/agent-base.js");
                function noop() {}
                module1.exports = function(method, url) {
                    if ('function' == typeof url) return new exports1.Request('GET', method).end(url);
                    if (1 === arguments.length) return new exports1.Request('GET', method);
                    return new exports1.Request(method, url);
                };
                exports1 = module1.exports;
                const request = exports1;
                exports1.Request = Request;
                request.getXHR = ()=>{
                    if (root.XMLHttpRequest) return new root.XMLHttpRequest();
                    throw new Error('Browser-only version of superagent could not find XHR');
                };
                const trim = ''.trim ? (s)=>s.trim() : (s)=>s.replace(/(^\s*|\s*$)/g, '');
                function serialize(object) {
                    if (!isObject(object)) return object;
                    const pairs = [];
                    for(const key in object)if (hasOwn(object, key)) pushEncodedKeyValuePair(pairs, key, object[key]);
                    return pairs.join('&');
                }
                function pushEncodedKeyValuePair(pairs, key, value) {
                    if (void 0 === value) return;
                    if (null === value) return void pairs.push(encodeURI(key));
                    if (Array.isArray(value)) for (const v of value)pushEncodedKeyValuePair(pairs, key, v);
                    else if (isObject(value)) {
                        for(const subkey in value)if (hasOwn(value, subkey)) pushEncodedKeyValuePair(pairs, `${key}[${subkey}]`, value[subkey]);
                    } else pairs.push(encodeURI(key) + '=' + encodeURIComponent(value));
                }
                request.serializeObject = serialize;
                function parseString(string_) {
                    const object = {};
                    const pairs = string_.split('&');
                    let pair;
                    let pos;
                    for(let i = 0, length_ = pairs.length; i < length_; ++i){
                        pair = pairs[i];
                        pos = pair.indexOf('=');
                        if (-1 === pos) object[decodeURIComponent(pair)] = '';
                        else object[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
                    }
                    return object;
                }
                request.parseString = parseString;
                request.types = {
                    html: 'text/html',
                    json: 'application/json',
                    xml: 'text/xml',
                    urlencoded: 'application/x-www-form-urlencoded',
                    form: 'application/x-www-form-urlencoded',
                    'form-data': 'application/x-www-form-urlencoded'
                };
                request.serialize = {
                    'application/x-www-form-urlencoded': (obj)=>qs.stringify(obj, {
                            indices: false,
                            strictNullHandling: true
                        }),
                    'application/json': safeStringify
                };
                request.parse = {
                    'application/x-www-form-urlencoded': parseString,
                    'application/json': JSON.parse
                };
                function parseHeader(string_) {
                    const lines = string_.split(/\r?\n/);
                    const fields = {};
                    let index;
                    let line;
                    let field;
                    let value;
                    for(let i = 0, length_ = lines.length; i < length_; ++i){
                        line = lines[i];
                        index = line.indexOf(':');
                        if (-1 !== index) {
                            field = line.slice(0, index).toLowerCase();
                            value = trim(line.slice(index + 1));
                            fields[field] = value;
                        }
                    }
                    return fields;
                }
                function isJSON(mime) {
                    return /[/+]json($|[^-\w])/i.test(mime);
                }
                function Response(request_) {
                    this.req = request_;
                    this.xhr = this.req.xhr;
                    this.text = 'HEAD' !== this.req.method && ('' === this.xhr.responseType || 'text' === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null;
                    this.statusText = this.req.xhr.statusText;
                    let { status } = this.xhr;
                    if (1223 === status) status = 204;
                    this._setStatusProperties(status);
                    this.headers = parseHeader(this.xhr.getAllResponseHeaders());
                    this.header = this.headers;
                    this.header['content-type'] = this.xhr.getResponseHeader('content-type');
                    this._setHeaderProperties(this.header);
                    if (null === this.text && request_._responseType) this.body = this.xhr.response;
                    else this.body = 'HEAD' === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response);
                }
                mixin(Response.prototype, ResponseBase.prototype);
                Response.prototype._parseBody = function(string_) {
                    let parse = request.parse[this.type];
                    if (this.req._parser) return this.req._parser(this, string_);
                    if (!parse && isJSON(this.type)) parse = request.parse['application/json'];
                    return parse && string_ && (string_.length > 0 || string_ instanceof Object) ? parse(string_) : null;
                };
                Response.prototype.toError = function() {
                    const { req } = this;
                    const { method } = req;
                    const { url } = req;
                    const message = `cannot ${method} ${url} (${this.status})`;
                    const error = new Error(message);
                    error.status = this.status;
                    error.method = method;
                    error.url = url;
                    return error;
                };
                request.Response = Response;
                function Request(method, url) {
                    const self1 = this;
                    this._query = this._query || [];
                    this.method = method;
                    this.url = url;
                    this.header = {};
                    this._header = {};
                    this.on('end', ()=>{
                        let error = null;
                        let res = null;
                        try {
                            res = new Response(self1);
                        } catch (err) {
                            error = new Error('Parser is unable to parse the response');
                            error.parse = true;
                            error.original = err;
                            if (self1.xhr) {
                                error.rawResponse = void 0 === self1.xhr.responseType ? self1.xhr.responseText : self1.xhr.response;
                                error.status = self1.xhr.status ? self1.xhr.status : null;
                                error.statusCode = error.status;
                            } else {
                                error.rawResponse = null;
                                error.status = null;
                            }
                            return self1.callback(error);
                        }
                        self1.emit('response', res);
                        let new_error;
                        try {
                            if (!self1._isResponseOK(res)) new_error = new Error(res.statusText || res.text || 'Unsuccessful HTTP response');
                        } catch (err) {
                            new_error = err;
                        }
                        if (new_error) {
                            new_error.original = error;
                            new_error.response = res;
                            new_error.status = new_error.status || res.status;
                            self1.callback(new_error, res);
                        } else self1.callback(null, res);
                    });
                }
                Emitter(Request.prototype);
                mixin(Request.prototype, RequestBase.prototype);
                Request.prototype.type = function(type) {
                    this.set('Content-Type', request.types[type] || type);
                    return this;
                };
                Request.prototype.accept = function(type) {
                    this.set('Accept', request.types[type] || type);
                    return this;
                };
                Request.prototype.auth = function(user, pass, options) {
                    if (1 === arguments.length) pass = '';
                    if ('object' == typeof pass && null !== pass) {
                        options = pass;
                        pass = '';
                    }
                    if (!options) options = {
                        type: 'function' == typeof btoa ? 'basic' : 'auto'
                    };
                    const encoder = options.encoder ? options.encoder : (string)=>{
                        if ('function' == typeof btoa) return btoa(string);
                        throw new Error('Cannot use basic auth, btoa is not a function');
                    };
                    return this._auth(user, pass, options, encoder);
                };
                Request.prototype.query = function(value) {
                    if ('string' != typeof value) value = serialize(value);
                    if (value) this._query.push(value);
                    return this;
                };
                Request.prototype.attach = function(field, file, options) {
                    if (file) {
                        if (this._data) throw new Error("superagent can't mix .send() and .attach()");
                        this._getFormData().append(field, file, options || file.name);
                    }
                    return this;
                };
                Request.prototype._getFormData = function() {
                    if (!this._formData) this._formData = new root.FormData();
                    return this._formData;
                };
                Request.prototype.callback = function(error, res) {
                    if (this._shouldRetry(error, res)) return this._retry();
                    const fn = this._callback;
                    this.clearTimeout();
                    if (error) {
                        if (this._maxRetries) error.retries = this._retries - 1;
                        this.emit('error', error);
                    }
                    fn(error, res);
                };
                Request.prototype.crossDomainError = function() {
                    const error = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
                    error.crossDomain = true;
                    error.status = this.status;
                    error.method = this.method;
                    error.url = this.url;
                    this.callback(error);
                };
                Request.prototype.agent = function() {
                    console.warn('This is not supported in browser version of superagent');
                    return this;
                };
                Request.prototype.ca = Request.prototype.agent;
                Request.prototype.buffer = Request.prototype.ca;
                Request.prototype.write = ()=>{
                    throw new Error('Streaming is not supported in browser version of superagent');
                };
                Request.prototype.pipe = Request.prototype.write;
                Request.prototype._isHost = function(object) {
                    return object && 'object' == typeof object && !Array.isArray(object) && '[object Object]' !== Object.prototype.toString.call(object);
                };
                Request.prototype.end = function(fn) {
                    if (this._endCalled) console.warn('Warning: .end() was called twice. This is not supported in superagent');
                    this._endCalled = true;
                    this._callback = fn || noop;
                    this._finalizeQueryString();
                    this._end();
                };
                Request.prototype._setUploadTimeout = function() {
                    const self1 = this;
                    if (this._uploadTimeout && !this._uploadTimeoutTimer) this._uploadTimeoutTimer = setTimeout(()=>{
                        self1._timeoutError('Upload timeout of ', self1._uploadTimeout, 'ETIMEDOUT');
                    }, this._uploadTimeout);
                };
                Request.prototype._end = function() {
                    if (this._aborted) return this.callback(new Error('The request has been aborted even before .end() was called'));
                    const self1 = this;
                    this.xhr = request.getXHR();
                    const { xhr } = this;
                    let data = this._formData || this._data;
                    this._setTimeouts();
                    xhr.addEventListener('readystatechange', ()=>{
                        const { readyState } = xhr;
                        if (readyState >= 2 && self1._responseTimeoutTimer) clearTimeout(self1._responseTimeoutTimer);
                        if (4 !== readyState) return;
                        let status;
                        try {
                            status = xhr.status;
                        } catch (err) {
                            status = 0;
                        }
                        if (!status) {
                            if (self1.timedout || self1._aborted) return;
                            return self1.crossDomainError();
                        }
                        self1.emit('end');
                    });
                    const handleProgress = (direction, e)=>{
                        if (e.total > 0) {
                            e.percent = e.loaded / e.total * 100;
                            if (100 === e.percent) clearTimeout(self1._uploadTimeoutTimer);
                        }
                        e.direction = direction;
                        self1.emit('progress', e);
                    };
                    if (this.hasListeners('progress')) try {
                        xhr.addEventListener('progress', handleProgress.bind(null, 'download'));
                        if (xhr.upload) xhr.upload.addEventListener('progress', handleProgress.bind(null, 'upload'));
                    } catch (err) {}
                    if (xhr.upload) this._setUploadTimeout();
                    try {
                        if (this.username && this.password) xhr.open(this.method, this.url, true, this.username, this.password);
                        else xhr.open(this.method, this.url, true);
                    } catch (err) {
                        return this.callback(err);
                    }
                    if (this._withCredentials) xhr.withCredentials = true;
                    if (!this._formData && 'GET' !== this.method && 'HEAD' !== this.method && 'string' != typeof data && !this._isHost(data)) {
                        const contentType = this._header['content-type'];
                        let serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
                        if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
                        if (serialize) data = serialize(data);
                    }
                    for(const field in this.header)if (null !== this.header[field]) {
                        if (hasOwn(this.header, field)) xhr.setRequestHeader(field, this.header[field]);
                    }
                    if (this._responseType) xhr.responseType = this._responseType;
                    this.emit('request', this);
                    xhr.send(void 0 === data ? null : data);
                };
                const proxyAgent = new Proxy(Agent, {
                    apply (target, thisArg, argumentsList) {
                        return new target(...argumentsList);
                    }
                });
                request.agent = proxyAgent;
                for (const method of [
                    'GET',
                    'POST',
                    'OPTIONS',
                    'PATCH',
                    'PUT',
                    'DELETE'
                ])Agent.prototype[method.toLowerCase()] = function(url, fn) {
                    const request_ = new request.Request(method, url);
                    this._setDefaults(request_);
                    if (fn) request_.end(fn);
                    return request_;
                };
                Agent.prototype.del = Agent.prototype.delete;
                request.get = (url, data, fn)=>{
                    const request_ = request('GET', url);
                    if ('function' == typeof data) {
                        fn = data;
                        data = null;
                    }
                    if (data) request_.query(data);
                    if (fn) request_.end(fn);
                    return request_;
                };
                request.head = (url, data, fn)=>{
                    const request_ = request('HEAD', url);
                    if ('function' == typeof data) {
                        fn = data;
                        data = null;
                    }
                    if (data) request_.query(data);
                    if (fn) request_.end(fn);
                    return request_;
                };
                request.options = (url, data, fn)=>{
                    const request_ = request('OPTIONS', url);
                    if ('function' == typeof data) {
                        fn = data;
                        data = null;
                    }
                    if (data) request_.send(data);
                    if (fn) request_.end(fn);
                    return request_;
                };
                function del(url, data, fn) {
                    const request_ = request('DELETE', url);
                    if ('function' == typeof data) {
                        fn = data;
                        data = null;
                    }
                    if (data) request_.send(data);
                    if (fn) request_.end(fn);
                    return request_;
                }
                request.del = del;
                request.delete = del;
                request.patch = (url, data, fn)=>{
                    const request_ = request('PATCH', url);
                    if ('function' == typeof data) {
                        fn = data;
                        data = null;
                    }
                    if (data) request_.send(data);
                    if (fn) request_.end(fn);
                    return request_;
                };
                request.post = (url, data, fn)=>{
                    const request_ = request('POST', url);
                    if ('function' == typeof data) {
                        fn = data;
                        data = null;
                    }
                    if (data) request_.send(data);
                    if (fn) request_.end(fn);
                    return request_;
                };
                request.put = (url, data, fn)=>{
                    const request_ = request('PUT', url);
                    if ('function' == typeof data) {
                        fn = data;
                        data = null;
                    }
                    if (data) request_.send(data);
                    if (fn) request_.end(fn);
                    return request_;
                };
            },
            "./node_modules/superagent/lib/request-base.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                const { isObject, hasOwn } = __webpack_require__("./node_modules/superagent/lib/utils.js");
                module1.exports = RequestBase;
                function RequestBase() {}
                RequestBase.prototype.clearTimeout = function() {
                    clearTimeout(this._timer);
                    clearTimeout(this._responseTimeoutTimer);
                    clearTimeout(this._uploadTimeoutTimer);
                    delete this._timer;
                    delete this._responseTimeoutTimer;
                    delete this._uploadTimeoutTimer;
                    return this;
                };
                RequestBase.prototype.parse = function(fn) {
                    this._parser = fn;
                    return this;
                };
                RequestBase.prototype.responseType = function(value) {
                    this._responseType = value;
                    return this;
                };
                RequestBase.prototype.serialize = function(fn) {
                    this._serializer = fn;
                    return this;
                };
                RequestBase.prototype.timeout = function(options) {
                    if (!options || 'object' != typeof options) {
                        this._timeout = options;
                        this._responseTimeout = 0;
                        this._uploadTimeout = 0;
                        return this;
                    }
                    for(const option in options)if (hasOwn(options, option)) switch(option){
                        case 'deadline':
                            this._timeout = options.deadline;
                            break;
                        case 'response':
                            this._responseTimeout = options.response;
                            break;
                        case 'upload':
                            this._uploadTimeout = options.upload;
                            break;
                        default:
                            console.warn('Unknown timeout option', option);
                    }
                    return this;
                };
                RequestBase.prototype.retry = function(count, fn) {
                    if (0 === arguments.length || true === count) count = 1;
                    if (count <= 0) count = 0;
                    this._maxRetries = count;
                    this._retries = 0;
                    this._retryCallback = fn;
                    return this;
                };
                const ERROR_CODES = new Set([
                    'ETIMEDOUT',
                    'ECONNRESET',
                    'EADDRINUSE',
                    'ECONNREFUSED',
                    'EPIPE',
                    'ENOTFOUND',
                    'ENETUNREACH',
                    'EAI_AGAIN'
                ]);
                const STATUS_CODES = new Set([
                    408,
                    413,
                    429,
                    500,
                    502,
                    503,
                    504,
                    521,
                    522,
                    524
                ]);
                RequestBase.prototype._shouldRetry = function(error, res) {
                    if (!this._maxRetries || this._retries++ >= this._maxRetries) return false;
                    if (this._retryCallback) try {
                        const override = this._retryCallback(error, res);
                        if (true === override) return true;
                        if (false === override) return false;
                    } catch (err) {
                        console.error(err);
                    }
                    if (res && res.status && STATUS_CODES.has(res.status)) return true;
                    if (error) {
                        if (error.code && ERROR_CODES.has(error.code)) return true;
                        if (error.timeout && 'ECONNABORTED' === error.code) return true;
                        if (error.crossDomain) return true;
                    }
                    return false;
                };
                RequestBase.prototype._retry = function() {
                    this.clearTimeout();
                    if (this.req) {
                        this.req = null;
                        this.req = this.request();
                    }
                    this._aborted = false;
                    this.timedout = false;
                    this.timedoutError = null;
                    return this._end();
                };
                RequestBase.prototype.then = function(resolve, reject) {
                    if (!this._fullfilledPromise) {
                        const self1 = this;
                        if (this._endCalled) console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises');
                        this._fullfilledPromise = new Promise((resolve, reject)=>{
                            self1.on('abort', ()=>{
                                if (this._maxRetries && this._maxRetries > this._retries) return;
                                if (this.timedout && this.timedoutError) return void reject(this.timedoutError);
                                const error = new Error('Aborted');
                                error.code = 'ABORTED';
                                error.status = this.status;
                                error.method = this.method;
                                error.url = this.url;
                                reject(error);
                            });
                            self1.end((error, res)=>{
                                if (error) reject(error);
                                else resolve(res);
                            });
                        });
                    }
                    return this._fullfilledPromise.then(resolve, reject);
                };
                RequestBase.prototype.catch = function(callback) {
                    return this.then(void 0, callback);
                };
                RequestBase.prototype.use = function(fn) {
                    fn(this);
                    return this;
                };
                RequestBase.prototype.ok = function(callback) {
                    if ('function' != typeof callback) throw new Error('Callback required');
                    this._okCallback = callback;
                    return this;
                };
                RequestBase.prototype._isResponseOK = function(res) {
                    if (!res) return false;
                    if (this._okCallback) return this._okCallback(res);
                    return res.status >= 200 && res.status < 300;
                };
                RequestBase.prototype.get = function(field) {
                    return this._header[field.toLowerCase()];
                };
                RequestBase.prototype.getHeader = RequestBase.prototype.get;
                RequestBase.prototype.set = function(field, value) {
                    if (isObject(field)) {
                        for(const key in field)if (hasOwn(field, key)) this.set(key, field[key]);
                        return this;
                    }
                    this._header[field.toLowerCase()] = value;
                    this.header[field] = value;
                    return this;
                };
                RequestBase.prototype.unset = function(field) {
                    delete this._header[field.toLowerCase()];
                    delete this.header[field];
                    return this;
                };
                RequestBase.prototype.field = function(name, value, options) {
                    if (null == name) throw new Error('.field(name, val) name can not be empty');
                    if (this._data) throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
                    if (isObject(name)) {
                        for(const key in name)if (hasOwn(name, key)) this.field(key, name[key]);
                        return this;
                    }
                    if (Array.isArray(value)) {
                        for(const i in value)if (hasOwn(value, i)) this.field(name, value[i]);
                        return this;
                    }
                    if (null == value) throw new Error('.field(name, val) val can not be empty');
                    if ('boolean' == typeof value) value = String(value);
                    if (options) this._getFormData().append(name, value, options);
                    else this._getFormData().append(name, value);
                    return this;
                };
                RequestBase.prototype.abort = function() {
                    if (this._aborted) return this;
                    this._aborted = true;
                    if (this.xhr) this.xhr.abort();
                    if (this.req) this.req.abort();
                    this.clearTimeout();
                    this.emit('abort');
                    return this;
                };
                RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
                    switch(options.type){
                        case 'basic':
                            this.set('Authorization', `Basic ${base64Encoder(`${user}:${pass}`)}`);
                            break;
                        case 'auto':
                            this.username = user;
                            this.password = pass;
                            break;
                        case 'bearer':
                            this.set('Authorization', `Bearer ${user}`);
                            break;
                        default:
                            break;
                    }
                    return this;
                };
                RequestBase.prototype.withCredentials = function(on) {
                    if (void 0 === on) on = true;
                    this._withCredentials = on;
                    return this;
                };
                RequestBase.prototype.redirects = function(n) {
                    this._maxRedirects = n;
                    return this;
                };
                RequestBase.prototype.maxResponseSize = function(n) {
                    if ('number' != typeof n) throw new TypeError('Invalid argument');
                    this._maxResponseSize = n;
                    return this;
                };
                RequestBase.prototype.toJSON = function() {
                    return {
                        method: this.method,
                        url: this.url,
                        data: this._data,
                        headers: this._header
                    };
                };
                RequestBase.prototype.send = function(data) {
                    const isObject_ = isObject(data);
                    let type = this._header['content-type'];
                    if (this._formData) throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
                    if (isObject_ && !this._data) {
                        if (Array.isArray(data)) this._data = [];
                        else if (!this._isHost(data)) this._data = {};
                    } else if (data && this._data && this._isHost(this._data)) throw new Error("Can't merge these send calls");
                    if (isObject_ && isObject(this._data)) for(const key in data){
                        if ('bigint' == typeof data[key] && !data[key].toJSON) throw new Error('Cannot serialize BigInt value to json');
                        if (hasOwn(data, key)) this._data[key] = data[key];
                    }
                    else if ('bigint' == typeof data) throw new Error("Cannot send value of type BigInt");
                    else if ('string' == typeof data) {
                        if (!type) this.type('form');
                        type = this._header['content-type'];
                        if (type) type = type.toLowerCase().trim();
                        if ('application/x-www-form-urlencoded' === type) this._data = this._data ? `${this._data}&${data}` : data;
                        else this._data = (this._data || '') + data;
                    } else this._data = data;
                    if (!isObject_ || this._isHost(data)) return this;
                    if (!type) this.type('json');
                    return this;
                };
                RequestBase.prototype.sortQuery = function(sort) {
                    this._sort = void 0 === sort ? true : sort;
                    return this;
                };
                RequestBase.prototype._finalizeQueryString = function() {
                    const query = this._query.join('&');
                    if (query) this.url += (this.url.includes('?') ? '&' : '?') + query;
                    this._query.length = 0;
                    if (this._sort) {
                        const index = this.url.indexOf('?');
                        if (index >= 0) {
                            const queryArray = this.url.slice(index + 1).split('&');
                            if ('function' == typeof this._sort) queryArray.sort(this._sort);
                            else queryArray.sort();
                            this.url = this.url.slice(0, index) + '?' + queryArray.join('&');
                        }
                    }
                };
                RequestBase.prototype._appendQueryString = ()=>{
                    console.warn('Unsupported');
                };
                RequestBase.prototype._timeoutError = function(reason, timeout, errno) {
                    if (this._aborted) return;
                    const error = new Error(`${reason + timeout}ms exceeded`);
                    error.timeout = timeout;
                    error.code = 'ECONNABORTED';
                    error.errno = errno;
                    this.timedout = true;
                    this.timedoutError = error;
                    this.abort();
                    this.callback(error);
                };
                RequestBase.prototype._setTimeouts = function() {
                    const self1 = this;
                    if (this._timeout && !this._timer) this._timer = setTimeout(()=>{
                        self1._timeoutError('Timeout of ', self1._timeout, 'ETIME');
                    }, this._timeout);
                    if (this._responseTimeout && !this._responseTimeoutTimer) this._responseTimeoutTimer = setTimeout(()=>{
                        self1._timeoutError('Response timeout of ', self1._responseTimeout, 'ETIMEDOUT');
                    }, this._responseTimeout);
                };
            },
            "./node_modules/superagent/lib/response-base.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                const utils = __webpack_require__("./node_modules/superagent/lib/utils.js");
                module1.exports = ResponseBase;
                function ResponseBase() {}
                ResponseBase.prototype.get = function(field) {
                    return this.header[field.toLowerCase()];
                };
                ResponseBase.prototype._setHeaderProperties = function(header) {
                    const ct = header['content-type'] || '';
                    this.type = utils.type(ct);
                    const parameters = utils.params(ct);
                    for(const key in parameters)if (Object.prototype.hasOwnProperty.call(parameters, key)) this[key] = parameters[key];
                    this.links = {};
                    try {
                        if (header.link) this.links = utils.parseLinks(header.link);
                    } catch (err) {}
                };
                ResponseBase.prototype._setStatusProperties = function(status) {
                    const type = Math.trunc(status / 100);
                    this.statusCode = status;
                    this.status = this.statusCode;
                    this.statusType = type;
                    this.info = 1 === type;
                    this.ok = 2 === type;
                    this.redirect = 3 === type;
                    this.clientError = 4 === type;
                    this.serverError = 5 === type;
                    this.error = 4 === type || 5 === type ? this.toError() : false;
                    this.created = 201 === status;
                    this.accepted = 202 === status;
                    this.noContent = 204 === status;
                    this.badRequest = 400 === status;
                    this.unauthorized = 401 === status;
                    this.notAcceptable = 406 === status;
                    this.forbidden = 403 === status;
                    this.notFound = 404 === status;
                    this.unprocessableEntity = 422 === status;
                };
            },
            "./node_modules/superagent/lib/utils.js" (__unused_rspack_module, exports1) {
                "use strict";
                exports1.type = (string_)=>string_.split(/ *; */).shift();
                exports1.params = (value)=>{
                    const object = {};
                    for (const string_ of value.split(/ *; */)){
                        const parts = string_.split(/ *= */);
                        const key = parts.shift();
                        const value = parts.shift();
                        if (key && value) object[key] = value;
                    }
                    return object;
                };
                exports1.parseLinks = (value)=>{
                    const object = {};
                    for (const string_ of value.split(/ *, */)){
                        const parts = string_.split(/ *; */);
                        const url = parts[0].slice(1, -1);
                        const rel = parts[1].split(/ *= */)[1].slice(1, -1);
                        object[rel] = url;
                    }
                    return object;
                };
                exports1.cleanHeader = (header, changesOrigin)=>{
                    delete header['content-type'];
                    delete header['content-length'];
                    delete header['transfer-encoding'];
                    delete header.host;
                    if (changesOrigin) {
                        delete header.authorization;
                        delete header.cookie;
                    }
                    return header;
                };
                exports1.normalizeHostname = (hostname)=>{
                    const [, normalized] = hostname.match(/^\[([^\]]+)\]$/) || [];
                    return normalized || hostname;
                };
                exports1.isObject = (object)=>null !== object && 'object' == typeof object;
                exports1.hasOwn = Object.hasOwn || function(object, property) {
                    if (null == object) throw new TypeError('Cannot convert undefined or null to object');
                    return Object.prototype.hasOwnProperty.call(new Object(object), property);
                };
                exports1.mixin = (target, source)=>{
                    for(const key in source)if (exports1.hasOwn(source, key)) target[key] = source[key];
                };
                exports1.isGzipOrDeflateEncoding = (res)=>new RegExp(/^\s*(?:deflate|gzip)\s*$/).test(res.headers['content-encoding']);
                exports1.isBrotliEncoding = (res)=>new RegExp(/^\s*(?:br)\s*$/).test(res.headers['content-encoding']);
            },
            "./node_modules/typedarray-to-buffer/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                var Buffer = __webpack_require__("./node_modules/buffer/index.js")["Buffer"];
                /*! typedarray-to-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ module1.exports = function(arr) {
                    return ArrayBuffer.isView(arr) ? Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength) : Buffer.from(arr);
                };
            },
            "./node_modules/util-deprecate/browser.js" (module1, __unused_rspack_exports, __webpack_require__) {
                module1.exports = deprecate;
                function deprecate(fn, msg) {
                    if (config('noDeprecation')) return fn;
                    var warned = false;
                    function deprecated() {
                        if (!warned) {
                            if (config('throwDeprecation')) throw new Error(msg);
                            if (config('traceDeprecation')) console.trace(msg);
                            else console.warn(msg);
                            warned = true;
                        }
                        return fn.apply(this, arguments);
                    }
                    return deprecated;
                }
                function config(name) {
                    try {
                        if (!__webpack_require__.g.localStorage) return false;
                    } catch (_) {
                        return false;
                    }
                    var val = __webpack_require__.g.localStorage[name];
                    if (null == val) return false;
                    return 'true' === String(val).toLowerCase();
                }
            },
            "./node_modules/util/support/isBufferBrowser.js" (module1) {
                module1.exports = function(arg) {
                    return arg && 'object' == typeof arg && 'function' == typeof arg.copy && 'function' == typeof arg.fill && 'function' == typeof arg.readUInt8;
                };
            },
            "./node_modules/util/support/types.js" (__unused_rspack_module, exports1, __webpack_require__) {
                "use strict";
                var isArgumentsObject = __webpack_require__("./node_modules/is-arguments/index.js");
                var isGeneratorFunction = __webpack_require__("./node_modules/is-generator-function/index.js");
                var whichTypedArray = __webpack_require__("./node_modules/which-typed-array/index.js");
                var isTypedArray = __webpack_require__("./node_modules/is-typed-array/index.js");
                function uncurryThis(f) {
                    return f.call.bind(f);
                }
                var BigIntSupported = "u" > typeof BigInt;
                var SymbolSupported = "u" > typeof Symbol;
                var ObjectToString = uncurryThis(Object.prototype.toString);
                var numberValue = uncurryThis(Number.prototype.valueOf);
                var stringValue = uncurryThis(String.prototype.valueOf);
                var booleanValue = uncurryThis(Boolean.prototype.valueOf);
                if (BigIntSupported) var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
                if (SymbolSupported) var symbolValue = uncurryThis(Symbol.prototype.valueOf);
                function checkBoxedPrimitive(value, prototypeValueOf) {
                    if ('object' != typeof value) return false;
                    try {
                        prototypeValueOf(value);
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
                exports1.isArgumentsObject = isArgumentsObject;
                exports1.isGeneratorFunction = isGeneratorFunction;
                exports1.isTypedArray = isTypedArray;
                function isPromise(input) {
                    return "u" > typeof Promise && input instanceof Promise || null !== input && 'object' == typeof input && 'function' == typeof input.then && 'function' == typeof input.catch;
                }
                exports1.isPromise = isPromise;
                function isArrayBufferView(value) {
                    if ("u" > typeof ArrayBuffer && ArrayBuffer.isView) return ArrayBuffer.isView(value);
                    return isTypedArray(value) || isDataView(value);
                }
                exports1.isArrayBufferView = isArrayBufferView;
                function isUint8Array(value) {
                    return 'Uint8Array' === whichTypedArray(value);
                }
                exports1.isUint8Array = isUint8Array;
                function isUint8ClampedArray(value) {
                    return 'Uint8ClampedArray' === whichTypedArray(value);
                }
                exports1.isUint8ClampedArray = isUint8ClampedArray;
                function isUint16Array(value) {
                    return 'Uint16Array' === whichTypedArray(value);
                }
                exports1.isUint16Array = isUint16Array;
                function isUint32Array(value) {
                    return 'Uint32Array' === whichTypedArray(value);
                }
                exports1.isUint32Array = isUint32Array;
                function isInt8Array(value) {
                    return 'Int8Array' === whichTypedArray(value);
                }
                exports1.isInt8Array = isInt8Array;
                function isInt16Array(value) {
                    return 'Int16Array' === whichTypedArray(value);
                }
                exports1.isInt16Array = isInt16Array;
                function isInt32Array(value) {
                    return 'Int32Array' === whichTypedArray(value);
                }
                exports1.isInt32Array = isInt32Array;
                function isFloat32Array(value) {
                    return 'Float32Array' === whichTypedArray(value);
                }
                exports1.isFloat32Array = isFloat32Array;
                function isFloat64Array(value) {
                    return 'Float64Array' === whichTypedArray(value);
                }
                exports1.isFloat64Array = isFloat64Array;
                function isBigInt64Array(value) {
                    return 'BigInt64Array' === whichTypedArray(value);
                }
                exports1.isBigInt64Array = isBigInt64Array;
                function isBigUint64Array(value) {
                    return 'BigUint64Array' === whichTypedArray(value);
                }
                exports1.isBigUint64Array = isBigUint64Array;
                function isMapToString(value) {
                    return '[object Map]' === ObjectToString(value);
                }
                isMapToString.working = "u" > typeof Map && isMapToString(new Map());
                function isMap(value) {
                    if ("u" < typeof Map) return false;
                    return isMapToString.working ? isMapToString(value) : value instanceof Map;
                }
                exports1.isMap = isMap;
                function isSetToString(value) {
                    return '[object Set]' === ObjectToString(value);
                }
                isSetToString.working = "u" > typeof Set && isSetToString(new Set());
                function isSet(value) {
                    if ("u" < typeof Set) return false;
                    return isSetToString.working ? isSetToString(value) : value instanceof Set;
                }
                exports1.isSet = isSet;
                function isWeakMapToString(value) {
                    return '[object WeakMap]' === ObjectToString(value);
                }
                isWeakMapToString.working = "u" > typeof WeakMap && isWeakMapToString(new WeakMap());
                function isWeakMap(value) {
                    if ("u" < typeof WeakMap) return false;
                    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
                }
                exports1.isWeakMap = isWeakMap;
                function isWeakSetToString(value) {
                    return '[object WeakSet]' === ObjectToString(value);
                }
                isWeakSetToString.working = "u" > typeof WeakSet && isWeakSetToString(new WeakSet());
                function isWeakSet(value) {
                    return isWeakSetToString(value);
                }
                exports1.isWeakSet = isWeakSet;
                function isArrayBufferToString(value) {
                    return '[object ArrayBuffer]' === ObjectToString(value);
                }
                isArrayBufferToString.working = "u" > typeof ArrayBuffer && isArrayBufferToString(new ArrayBuffer());
                function isArrayBuffer(value) {
                    if ("u" < typeof ArrayBuffer) return false;
                    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
                }
                exports1.isArrayBuffer = isArrayBuffer;
                function isDataViewToString(value) {
                    return '[object DataView]' === ObjectToString(value);
                }
                isDataViewToString.working = "u" > typeof ArrayBuffer && "u" > typeof DataView && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
                function isDataView(value) {
                    if ("u" < typeof DataView) return false;
                    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
                }
                exports1.isDataView = isDataView;
                var SharedArrayBufferCopy = "u" > typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
                function isSharedArrayBufferToString(value) {
                    return '[object SharedArrayBuffer]' === ObjectToString(value);
                }
                function isSharedArrayBuffer(value) {
                    if (void 0 === SharedArrayBufferCopy) return false;
                    if (void 0 === isSharedArrayBufferToString.working) isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
                    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
                }
                exports1.isSharedArrayBuffer = isSharedArrayBuffer;
                function isAsyncFunction(value) {
                    return '[object AsyncFunction]' === ObjectToString(value);
                }
                exports1.isAsyncFunction = isAsyncFunction;
                function isMapIterator(value) {
                    return '[object Map Iterator]' === ObjectToString(value);
                }
                exports1.isMapIterator = isMapIterator;
                function isSetIterator(value) {
                    return '[object Set Iterator]' === ObjectToString(value);
                }
                exports1.isSetIterator = isSetIterator;
                function isGeneratorObject(value) {
                    return '[object Generator]' === ObjectToString(value);
                }
                exports1.isGeneratorObject = isGeneratorObject;
                function isWebAssemblyCompiledModule(value) {
                    return '[object WebAssembly.Module]' === ObjectToString(value);
                }
                exports1.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
                function isNumberObject(value) {
                    return checkBoxedPrimitive(value, numberValue);
                }
                exports1.isNumberObject = isNumberObject;
                function isStringObject(value) {
                    return checkBoxedPrimitive(value, stringValue);
                }
                exports1.isStringObject = isStringObject;
                function isBooleanObject(value) {
                    return checkBoxedPrimitive(value, booleanValue);
                }
                exports1.isBooleanObject = isBooleanObject;
                function isBigIntObject(value) {
                    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
                }
                exports1.isBigIntObject = isBigIntObject;
                function isSymbolObject(value) {
                    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
                }
                exports1.isSymbolObject = isSymbolObject;
                function isBoxedPrimitive(value) {
                    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
                }
                exports1.isBoxedPrimitive = isBoxedPrimitive;
                function isAnyArrayBuffer(value) {
                    return "u" > typeof Uint8Array && (isArrayBuffer(value) || isSharedArrayBuffer(value));
                }
                exports1.isAnyArrayBuffer = isAnyArrayBuffer;
                [
                    'isProxy',
                    'isExternal',
                    'isModuleNamespaceObject'
                ].forEach(function(method) {
                    Object.defineProperty(exports1, method, {
                        enumerable: false,
                        value: function() {
                            throw new Error(method + ' is not supported in userland');
                        }
                    });
                });
            },
            "./node_modules/util/util.js" (__unused_rspack_module, exports1, __webpack_require__) {
                var process = __webpack_require__("./node_modules/process/browser.js");
                var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function(obj) {
                    var keys = Object.keys(obj);
                    var descriptors = {};
                    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
                    return descriptors;
                };
                var formatRegExp = /%[sdj%]/g;
                exports1.format = function(f) {
                    if (!isString(f)) {
                        var objects = [];
                        for(var i = 0; i < arguments.length; i++)objects.push(inspect(arguments[i]));
                        return objects.join(' ');
                    }
                    var i = 1;
                    var args = arguments;
                    var len = args.length;
                    var str = String(f).replace(formatRegExp, function(x) {
                        if ('%%' === x) return '%';
                        if (i >= len) return x;
                        switch(x){
                            case '%s':
                                return String(args[i++]);
                            case '%d':
                                return Number(args[i++]);
                            case '%j':
                                try {
                                    return JSON.stringify(args[i++]);
                                } catch (_) {
                                    return '[Circular]';
                                }
                            default:
                                return x;
                        }
                    });
                    for(var x = args[i]; i < len; x = args[++i])if (isNull(x) || !isObject(x)) str += ' ' + x;
                    else str += ' ' + inspect(x);
                    return str;
                };
                exports1.deprecate = function(fn, msg) {
                    if (void 0 !== process && true === process.noDeprecation) return fn;
                    if (void 0 === process) return function() {
                        return exports1.deprecate(fn, msg).apply(this, arguments);
                    };
                    var warned = false;
                    function deprecated() {
                        if (!warned) {
                            if (process.throwDeprecation) throw new Error(msg);
                            if (process.traceDeprecation) console.trace(msg);
                            else console.error(msg);
                            warned = true;
                        }
                        return fn.apply(this, arguments);
                    }
                    return deprecated;
                };
                var debugs = {};
                var debugEnvRegex = /^$/;
                if (process.env.NODE_DEBUG) {
                    var debugEnv = process.env.NODE_DEBUG;
                    debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, '\\$&').replace(/\*/g, '.*').replace(/,/g, '$|^').toUpperCase();
                    debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
                }
                exports1.debuglog = function(set) {
                    set = set.toUpperCase();
                    if (!debugs[set]) if (debugEnvRegex.test(set)) {
                        var pid = process.pid;
                        debugs[set] = function() {
                            var msg = exports1.format.apply(exports1, arguments);
                            console.error('%s %d: %s', set, pid, msg);
                        };
                    } else debugs[set] = function() {};
                    return debugs[set];
                };
                function inspect(obj, opts) {
                    var ctx = {
                        seen: [],
                        stylize: stylizeNoColor
                    };
                    if (arguments.length >= 3) ctx.depth = arguments[2];
                    if (arguments.length >= 4) ctx.colors = arguments[3];
                    if (isBoolean(opts)) ctx.showHidden = opts;
                    else if (opts) exports1._extend(ctx, opts);
                    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
                    if (isUndefined(ctx.depth)) ctx.depth = 2;
                    if (isUndefined(ctx.colors)) ctx.colors = false;
                    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
                    if (ctx.colors) ctx.stylize = stylizeWithColor;
                    return formatValue(ctx, obj, ctx.depth);
                }
                exports1.inspect = inspect;
                inspect.colors = {
                    bold: [
                        1,
                        22
                    ],
                    italic: [
                        3,
                        23
                    ],
                    underline: [
                        4,
                        24
                    ],
                    inverse: [
                        7,
                        27
                    ],
                    white: [
                        37,
                        39
                    ],
                    grey: [
                        90,
                        39
                    ],
                    black: [
                        30,
                        39
                    ],
                    blue: [
                        34,
                        39
                    ],
                    cyan: [
                        36,
                        39
                    ],
                    green: [
                        32,
                        39
                    ],
                    magenta: [
                        35,
                        39
                    ],
                    red: [
                        31,
                        39
                    ],
                    yellow: [
                        33,
                        39
                    ]
                };
                inspect.styles = {
                    special: 'cyan',
                    number: 'yellow',
                    boolean: 'yellow',
                    undefined: 'grey',
                    null: 'bold',
                    string: 'green',
                    date: 'magenta',
                    regexp: 'red'
                };
                function stylizeWithColor(str, styleType) {
                    var style = inspect.styles[styleType];
                    if (style) return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
                    return str;
                }
                function stylizeNoColor(str, styleType) {
                    return str;
                }
                function arrayToHash(array) {
                    var hash = {};
                    array.forEach(function(val, idx) {
                        hash[val] = true;
                    });
                    return hash;
                }
                function formatValue(ctx, value, recurseTimes) {
                    if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports1.inspect && !(value.constructor && value.constructor.prototype === value)) {
                        var ret = value.inspect(recurseTimes, ctx);
                        if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
                        return ret;
                    }
                    var primitive = formatPrimitive(ctx, value);
                    if (primitive) return primitive;
                    var keys = Object.keys(value);
                    var visibleKeys = arrayToHash(keys);
                    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
                    if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf("description") >= 0)) return formatError(value);
                    if (0 === keys.length) {
                        if (isFunction(value)) {
                            var name = value.name ? ': ' + value.name : '';
                            return ctx.stylize('[Function' + name + ']', 'special');
                        }
                        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                        if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
                        if (isError(value)) return formatError(value);
                    }
                    var base = '', array = false, braces = [
                        '{',
                        '}'
                    ];
                    if (isArray(value)) {
                        array = true;
                        braces = [
                            '[',
                            ']'
                        ];
                    }
                    if (isFunction(value)) {
                        var n = value.name ? ': ' + value.name : '';
                        base = ' [Function' + n + ']';
                    }
                    if (isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
                    if (isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
                    if (isError(value)) base = ' ' + formatError(value);
                    if (0 === keys.length && (!array || 0 == value.length)) return braces[0] + base + braces[1];
                    if (recurseTimes < 0) if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                    else return ctx.stylize('[Object]', 'special');
                    ctx.seen.push(value);
                    var output;
                    output = array ? formatArray(ctx, value, recurseTimes, visibleKeys, keys) : keys.map(function(key) {
                        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
                    });
                    ctx.seen.pop();
                    return reduceToSingleString(output, base, braces);
                }
                function formatPrimitive(ctx, value) {
                    if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
                    if (isString(value)) {
                        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
                        return ctx.stylize(simple, 'string');
                    }
                    if (isNumber(value)) return ctx.stylize('' + value, 'number');
                    if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
                    if (isNull(value)) return ctx.stylize('null', 'null');
                }
                function formatError(value) {
                    return '[' + Error.prototype.toString.call(value) + ']';
                }
                function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
                    var output = [];
                    for(var i = 0, l = value.length; i < l; ++i)if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
                    else output.push('');
                    keys.forEach(function(key) {
                        if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
                    });
                    return output;
                }
                function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
                    var name, str, desc;
                    desc = Object.getOwnPropertyDescriptor(value, key) || {
                        value: value[key]
                    };
                    if (desc.get) str = desc.set ? ctx.stylize('[Getter/Setter]', 'special') : ctx.stylize('[Getter]', 'special');
                    else if (desc.set) str = ctx.stylize('[Setter]', 'special');
                    if (!hasOwnProperty(visibleKeys, key)) name = '[' + key + ']';
                    if (!str) if (ctx.seen.indexOf(desc.value) < 0) {
                        str = isNull(recurseTimes) ? formatValue(ctx, desc.value, null) : formatValue(ctx, desc.value, recurseTimes - 1);
                        if (str.indexOf('\n') > -1) str = array ? str.split('\n').map(function(line) {
                            return '  ' + line;
                        }).join('\n').slice(2) : '\n' + str.split('\n').map(function(line) {
                            return '   ' + line;
                        }).join('\n');
                    } else str = ctx.stylize('[Circular]', 'special');
                    if (isUndefined(name)) {
                        if (array && key.match(/^\d+$/)) return str;
                        name = JSON.stringify('' + key);
                        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                            name = name.slice(1, -1);
                            name = ctx.stylize(name, 'name');
                        } else {
                            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                            name = ctx.stylize(name, 'string');
                        }
                    }
                    return name + ': ' + str;
                }
                function reduceToSingleString(output, base, braces) {
                    var numLinesEst = 0;
                    var length = output.reduce(function(prev, cur) {
                        numLinesEst++;
                        if (cur.indexOf('\n') >= 0) numLinesEst++;
                        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
                    }, 0);
                    if (length > 60) return braces[0] + ('' === base ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
                    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
                }
                exports1.types = __webpack_require__("./node_modules/util/support/types.js");
                function isArray(ar) {
                    return Array.isArray(ar);
                }
                exports1.isArray = isArray;
                function isBoolean(arg) {
                    return 'boolean' == typeof arg;
                }
                exports1.isBoolean = isBoolean;
                function isNull(arg) {
                    return null === arg;
                }
                exports1.isNull = isNull;
                function isNullOrUndefined(arg) {
                    return null == arg;
                }
                exports1.isNullOrUndefined = isNullOrUndefined;
                function isNumber(arg) {
                    return 'number' == typeof arg;
                }
                exports1.isNumber = isNumber;
                function isString(arg) {
                    return 'string' == typeof arg;
                }
                exports1.isString = isString;
                function isSymbol(arg) {
                    return 'symbol' == typeof arg;
                }
                exports1.isSymbol = isSymbol;
                function isUndefined(arg) {
                    return void 0 === arg;
                }
                exports1.isUndefined = isUndefined;
                function isRegExp(re) {
                    return isObject(re) && '[object RegExp]' === objectToString(re);
                }
                exports1.isRegExp = isRegExp;
                exports1.types.isRegExp = isRegExp;
                function isObject(arg) {
                    return 'object' == typeof arg && null !== arg;
                }
                exports1.isObject = isObject;
                function isDate(d) {
                    return isObject(d) && '[object Date]' === objectToString(d);
                }
                exports1.isDate = isDate;
                exports1.types.isDate = isDate;
                function isError(e) {
                    return isObject(e) && ('[object Error]' === objectToString(e) || e instanceof Error);
                }
                exports1.isError = isError;
                exports1.types.isNativeError = isError;
                function isFunction(arg) {
                    return 'function' == typeof arg;
                }
                exports1.isFunction = isFunction;
                function isPrimitive(arg) {
                    return null === arg || 'boolean' == typeof arg || 'number' == typeof arg || 'string' == typeof arg || 'symbol' == typeof arg || void 0 === arg;
                }
                exports1.isPrimitive = isPrimitive;
                exports1.isBuffer = __webpack_require__("./node_modules/util/support/isBufferBrowser.js");
                function objectToString(o) {
                    return Object.prototype.toString.call(o);
                }
                function pad(n) {
                    return n < 10 ? '0' + n.toString(10) : n.toString(10);
                }
                var months = [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ];
                function timestamp() {
                    var d = new Date();
                    var time = [
                        pad(d.getHours()),
                        pad(d.getMinutes()),
                        pad(d.getSeconds())
                    ].join(':');
                    return [
                        d.getDate(),
                        months[d.getMonth()],
                        time
                    ].join(' ');
                }
                exports1.log = function() {
                    console.log('%s - %s', timestamp(), exports1.format.apply(exports1, arguments));
                };
                exports1.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                exports1._extend = function(origin, add) {
                    if (!add || !isObject(add)) return origin;
                    var keys = Object.keys(add);
                    var i = keys.length;
                    while(i--)origin[keys[i]] = add[keys[i]];
                    return origin;
                };
                function hasOwnProperty(obj, prop) {
                    return Object.prototype.hasOwnProperty.call(obj, prop);
                }
                var kCustomPromisifiedSymbol = "u" > typeof Symbol ? Symbol('util.promisify.custom') : void 0;
                exports1.promisify = function(original) {
                    if ('function' != typeof original) throw new TypeError('The "original" argument must be of type Function');
                    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
                        var fn = original[kCustomPromisifiedSymbol];
                        if ('function' != typeof fn) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
                            value: fn,
                            enumerable: false,
                            writable: false,
                            configurable: true
                        });
                        return fn;
                    }
                    function fn() {
                        var promiseResolve, promiseReject;
                        var promise = new Promise(function(resolve, reject) {
                            promiseResolve = resolve;
                            promiseReject = reject;
                        });
                        var args = [];
                        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
                        args.push(function(err, value) {
                            if (err) promiseReject(err);
                            else promiseResolve(value);
                        });
                        try {
                            original.apply(this, args);
                        } catch (err) {
                            promiseReject(err);
                        }
                        return promise;
                    }
                    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
                    if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
                        value: fn,
                        enumerable: false,
                        writable: false,
                        configurable: true
                    });
                    return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
                };
                exports1.promisify.custom = kCustomPromisifiedSymbol;
                function callbackifyOnRejected(reason, cb) {
                    if (!reason) {
                        var newReason = new Error('Promise was rejected with a falsy value');
                        newReason.reason = reason;
                        reason = newReason;
                    }
                    return cb(reason);
                }
                function callbackify(original) {
                    if ('function' != typeof original) throw new TypeError('The "original" argument must be of type Function');
                    function callbackified() {
                        var args = [];
                        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
                        var maybeCb = args.pop();
                        if ('function' != typeof maybeCb) throw new TypeError('The last argument must be of type Function');
                        var self1 = this;
                        var cb = function() {
                            return maybeCb.apply(self1, arguments);
                        };
                        original.apply(this, args).then(function(ret) {
                            process.nextTick(cb.bind(null, null, ret));
                        }, function(rej) {
                            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
                        });
                    }
                    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
                    Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
                    return callbackified;
                }
                exports1.callbackify = callbackify;
            },
            "./node_modules/websocket-stream/node_modules/isarray/index.js" (module1) {
                var toString = {}.toString;
                module1.exports = Array.isArray || function(arr) {
                    return '[object Array]' == toString.call(arr);
                };
            },
            "./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_duplex.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var pna = __webpack_require__("./node_modules/process-nextick-args/index.js");
                var objectKeys = Object.keys || function(obj) {
                    var keys = [];
                    for(var key in obj)keys.push(key);
                    return keys;
                };
                module1.exports = Duplex;
                var util = Object.create(__webpack_require__("./node_modules/core-util-is/lib/util.js"));
                util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                var Readable = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_readable.js");
                var Writable = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_writable.js");
                util.inherits(Duplex, Readable);
                var keys = objectKeys(Writable.prototype);
                for(var v = 0; v < keys.length; v++){
                    var method = keys[v];
                    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
                }
                function Duplex(options) {
                    if (!(this instanceof Duplex)) return new Duplex(options);
                    Readable.call(this, options);
                    Writable.call(this, options);
                    if (options && false === options.readable) this.readable = false;
                    if (options && false === options.writable) this.writable = false;
                    this.allowHalfOpen = true;
                    if (options && false === options.allowHalfOpen) this.allowHalfOpen = false;
                    this.once('end', onend);
                }
                Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
                    enumerable: false,
                    get: function() {
                        return this._writableState.highWaterMark;
                    }
                });
                function onend() {
                    if (this.allowHalfOpen || this._writableState.ended) return;
                    pna.nextTick(onEndNT, this);
                }
                function onEndNT(self1) {
                    self1.end();
                }
                Object.defineProperty(Duplex.prototype, 'destroyed', {
                    get: function() {
                        if (void 0 === this._readableState || void 0 === this._writableState) return false;
                        return this._readableState.destroyed && this._writableState.destroyed;
                    },
                    set: function(value) {
                        if (void 0 === this._readableState || void 0 === this._writableState) return;
                        this._readableState.destroyed = value;
                        this._writableState.destroyed = value;
                    }
                });
                Duplex.prototype._destroy = function(err, cb) {
                    this.push(null);
                    this.end();
                    pna.nextTick(cb, err);
                };
            },
            "./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_passthrough.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                module1.exports = PassThrough;
                var Transform = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_transform.js");
                var util = Object.create(__webpack_require__("./node_modules/core-util-is/lib/util.js"));
                util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                util.inherits(PassThrough, Transform);
                function PassThrough(options) {
                    if (!(this instanceof PassThrough)) return new PassThrough(options);
                    Transform.call(this, options);
                }
                PassThrough.prototype._transform = function(chunk, encoding, cb) {
                    cb(null, chunk);
                };
            },
            "./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_readable.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var process = __webpack_require__("./node_modules/process/browser.js");
                var pna = __webpack_require__("./node_modules/process-nextick-args/index.js");
                module1.exports = Readable;
                var isArray = __webpack_require__("./node_modules/websocket-stream/node_modules/isarray/index.js");
                var Duplex;
                Readable.ReadableState = ReadableState;
                __webpack_require__("./node_modules/events/events.js").EventEmitter;
                var EElistenerCount = function(emitter, type) {
                    return emitter.listeners(type).length;
                };
                var Stream = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/internal/streams/stream-browser.js");
                var Buffer = __webpack_require__("./node_modules/websocket-stream/node_modules/safe-buffer/index.js").Buffer;
                var OurUint8Array = (void 0 !== __webpack_require__.g ? __webpack_require__.g : "u" > typeof window ? window : "u" > typeof self ? self : {}).Uint8Array || function() {};
                function _uint8ArrayToBuffer(chunk) {
                    return Buffer.from(chunk);
                }
                function _isUint8Array(obj) {
                    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
                }
                var util = Object.create(__webpack_require__("./node_modules/core-util-is/lib/util.js"));
                util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                var debugUtil = __webpack_require__("?3152");
                var debug = void 0;
                debug = debugUtil && debugUtil.debuglog ? debugUtil.debuglog('stream') : function() {};
                var BufferList = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/internal/streams/BufferList.js");
                var destroyImpl = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/internal/streams/destroy.js");
                var StringDecoder;
                util.inherits(Readable, Stream);
                var kProxyEvents = [
                    'error',
                    'close',
                    'destroy',
                    'pause',
                    'resume'
                ];
                function prependListener(emitter, event, fn) {
                    if ('function' == typeof emitter.prependListener) return emitter.prependListener(event, fn);
                    if (emitter._events && emitter._events[event]) if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);
                    else emitter._events[event] = [
                        fn,
                        emitter._events[event]
                    ];
                    else emitter.on(event, fn);
                }
                function ReadableState(options, stream) {
                    Duplex = Duplex || __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_duplex.js");
                    options = options || {};
                    var isDuplex = stream instanceof Duplex;
                    this.objectMode = !!options.objectMode;
                    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
                    var hwm = options.highWaterMark;
                    var readableHwm = options.readableHighWaterMark;
                    var defaultHwm = this.objectMode ? 16 : 16384;
                    if (hwm || 0 === hwm) this.highWaterMark = hwm;
                    else if (isDuplex && (readableHwm || 0 === readableHwm)) this.highWaterMark = readableHwm;
                    else this.highWaterMark = defaultHwm;
                    this.highWaterMark = Math.floor(this.highWaterMark);
                    this.buffer = new BufferList();
                    this.length = 0;
                    this.pipes = null;
                    this.pipesCount = 0;
                    this.flowing = null;
                    this.ended = false;
                    this.endEmitted = false;
                    this.reading = false;
                    this.sync = true;
                    this.needReadable = false;
                    this.emittedReadable = false;
                    this.readableListening = false;
                    this.resumeScheduled = false;
                    this.destroyed = false;
                    this.defaultEncoding = options.defaultEncoding || 'utf8';
                    this.awaitDrain = 0;
                    this.readingMore = false;
                    this.decoder = null;
                    this.encoding = null;
                    if (options.encoding) {
                        if (!StringDecoder) StringDecoder = __webpack_require__("./node_modules/websocket-stream/node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
                        this.decoder = new StringDecoder(options.encoding);
                        this.encoding = options.encoding;
                    }
                }
                function Readable(options) {
                    Duplex = Duplex || __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_duplex.js");
                    if (!(this instanceof Readable)) return new Readable(options);
                    this._readableState = new ReadableState(options, this);
                    this.readable = true;
                    if (options) {
                        if ('function' == typeof options.read) this._read = options.read;
                        if ('function' == typeof options.destroy) this._destroy = options.destroy;
                    }
                    Stream.call(this);
                }
                Object.defineProperty(Readable.prototype, 'destroyed', {
                    get: function() {
                        if (void 0 === this._readableState) return false;
                        return this._readableState.destroyed;
                    },
                    set: function(value) {
                        if (!this._readableState) return;
                        this._readableState.destroyed = value;
                    }
                });
                Readable.prototype.destroy = destroyImpl.destroy;
                Readable.prototype._undestroy = destroyImpl.undestroy;
                Readable.prototype._destroy = function(err, cb) {
                    this.push(null);
                    cb(err);
                };
                Readable.prototype.push = function(chunk, encoding) {
                    var state = this._readableState;
                    var skipChunkCheck;
                    if (state.objectMode) skipChunkCheck = true;
                    else if ('string' == typeof chunk) {
                        encoding = encoding || state.defaultEncoding;
                        if (encoding !== state.encoding) {
                            chunk = Buffer.from(chunk, encoding);
                            encoding = '';
                        }
                        skipChunkCheck = true;
                    }
                    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
                };
                Readable.prototype.unshift = function(chunk) {
                    return readableAddChunk(this, chunk, null, true, false);
                };
                function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
                    var state = stream._readableState;
                    if (null === chunk) {
                        state.reading = false;
                        onEofChunk(stream, state);
                    } else {
                        var er;
                        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
                        if (er) stream.emit('error', er);
                        else if (state.objectMode || chunk && chunk.length > 0) {
                            if ('string' != typeof chunk && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) chunk = _uint8ArrayToBuffer(chunk);
                            if (addToFront) if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));
                            else addChunk(stream, state, chunk, true);
                            else if (state.ended) stream.emit('error', new Error('stream.push() after EOF'));
                            else {
                                state.reading = false;
                                if (state.decoder && !encoding) {
                                    chunk = state.decoder.write(chunk);
                                    if (state.objectMode || 0 !== chunk.length) addChunk(stream, state, chunk, false);
                                    else maybeReadMore(stream, state);
                                } else addChunk(stream, state, chunk, false);
                            }
                        } else if (!addToFront) state.reading = false;
                    }
                    return needMoreData(state);
                }
                function addChunk(stream, state, chunk, addToFront) {
                    if (state.flowing && 0 === state.length && !state.sync) {
                        stream.emit('data', chunk);
                        stream.read(0);
                    } else {
                        state.length += state.objectMode ? 1 : chunk.length;
                        if (addToFront) state.buffer.unshift(chunk);
                        else state.buffer.push(chunk);
                        if (state.needReadable) emitReadable(stream);
                    }
                    maybeReadMore(stream, state);
                }
                function chunkInvalid(state, chunk) {
                    var er;
                    if (!_isUint8Array(chunk) && 'string' != typeof chunk && void 0 !== chunk && !state.objectMode) er = new TypeError('Invalid non-string/buffer chunk');
                    return er;
                }
                function needMoreData(state) {
                    return !state.ended && (state.needReadable || state.length < state.highWaterMark || 0 === state.length);
                }
                Readable.prototype.isPaused = function() {
                    return false === this._readableState.flowing;
                };
                Readable.prototype.setEncoding = function(enc) {
                    if (!StringDecoder) StringDecoder = __webpack_require__("./node_modules/websocket-stream/node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
                    this._readableState.decoder = new StringDecoder(enc);
                    this._readableState.encoding = enc;
                    return this;
                };
                var MAX_HWM = 0x800000;
                function computeNewHighWaterMark(n) {
                    if (n >= MAX_HWM) n = MAX_HWM;
                    else {
                        n--;
                        n |= n >>> 1;
                        n |= n >>> 2;
                        n |= n >>> 4;
                        n |= n >>> 8;
                        n |= n >>> 16;
                        n++;
                    }
                    return n;
                }
                function howMuchToRead(n, state) {
                    if (n <= 0 || 0 === state.length && state.ended) return 0;
                    if (state.objectMode) return 1;
                    if (n !== n) if (state.flowing && state.length) return state.buffer.head.data.length;
                    else return state.length;
                    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
                    if (n <= state.length) return n;
                    if (!state.ended) {
                        state.needReadable = true;
                        return 0;
                    }
                    return state.length;
                }
                Readable.prototype.read = function(n) {
                    debug('read', n);
                    n = parseInt(n, 10);
                    var state = this._readableState;
                    var nOrig = n;
                    if (0 !== n) state.emittedReadable = false;
                    if (0 === n && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
                        debug('read: emitReadable', state.length, state.ended);
                        if (0 === state.length && state.ended) endReadable(this);
                        else emitReadable(this);
                        return null;
                    }
                    n = howMuchToRead(n, state);
                    if (0 === n && state.ended) {
                        if (0 === state.length) endReadable(this);
                        return null;
                    }
                    var doRead = state.needReadable;
                    debug('need readable', doRead);
                    if (0 === state.length || state.length - n < state.highWaterMark) {
                        doRead = true;
                        debug('length less than watermark', doRead);
                    }
                    if (state.ended || state.reading) {
                        doRead = false;
                        debug('reading or ended', doRead);
                    } else if (doRead) {
                        debug('do read');
                        state.reading = true;
                        state.sync = true;
                        if (0 === state.length) state.needReadable = true;
                        this._read(state.highWaterMark);
                        state.sync = false;
                        if (!state.reading) n = howMuchToRead(nOrig, state);
                    }
                    var ret;
                    ret = n > 0 ? fromList(n, state) : null;
                    if (null === ret) {
                        state.needReadable = true;
                        n = 0;
                    } else state.length -= n;
                    if (0 === state.length) {
                        if (!state.ended) state.needReadable = true;
                        if (nOrig !== n && state.ended) endReadable(this);
                    }
                    if (null !== ret) this.emit('data', ret);
                    return ret;
                };
                function onEofChunk(stream, state) {
                    if (state.ended) return;
                    if (state.decoder) {
                        var chunk = state.decoder.end();
                        if (chunk && chunk.length) {
                            state.buffer.push(chunk);
                            state.length += state.objectMode ? 1 : chunk.length;
                        }
                    }
                    state.ended = true;
                    emitReadable(stream);
                }
                function emitReadable(stream) {
                    var state = stream._readableState;
                    state.needReadable = false;
                    if (!state.emittedReadable) {
                        debug('emitReadable', state.flowing);
                        state.emittedReadable = true;
                        if (state.sync) pna.nextTick(emitReadable_, stream);
                        else emitReadable_(stream);
                    }
                }
                function emitReadable_(stream) {
                    debug('emit readable');
                    stream.emit('readable');
                    flow(stream);
                }
                function maybeReadMore(stream, state) {
                    if (!state.readingMore) {
                        state.readingMore = true;
                        pna.nextTick(maybeReadMore_, stream, state);
                    }
                }
                function maybeReadMore_(stream, state) {
                    var len = state.length;
                    while(!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark){
                        debug('maybeReadMore read 0');
                        stream.read(0);
                        if (len === state.length) break;
                        len = state.length;
                    }
                    state.readingMore = false;
                }
                Readable.prototype._read = function(n) {
                    this.emit('error', new Error('_read() is not implemented'));
                };
                Readable.prototype.pipe = function(dest, pipeOpts) {
                    var src = this;
                    var state = this._readableState;
                    switch(state.pipesCount){
                        case 0:
                            state.pipes = dest;
                            break;
                        case 1:
                            state.pipes = [
                                state.pipes,
                                dest
                            ];
                            break;
                        default:
                            state.pipes.push(dest);
                            break;
                    }
                    state.pipesCount += 1;
                    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
                    var doEnd = (!pipeOpts || false !== pipeOpts.end) && dest !== process.stdout && dest !== process.stderr;
                    var endFn = doEnd ? onend : unpipe;
                    if (state.endEmitted) pna.nextTick(endFn);
                    else src.once('end', endFn);
                    dest.on('unpipe', onunpipe);
                    function onunpipe(readable, unpipeInfo) {
                        debug('onunpipe');
                        if (readable === src) {
                            if (unpipeInfo && false === unpipeInfo.hasUnpiped) {
                                unpipeInfo.hasUnpiped = true;
                                cleanup();
                            }
                        }
                    }
                    function onend() {
                        debug('onend');
                        dest.end();
                    }
                    var ondrain = pipeOnDrain(src);
                    dest.on('drain', ondrain);
                    var cleanedUp = false;
                    function cleanup() {
                        debug('cleanup');
                        dest.removeListener('close', onclose);
                        dest.removeListener('finish', onfinish);
                        dest.removeListener('drain', ondrain);
                        dest.removeListener('error', onerror);
                        dest.removeListener('unpipe', onunpipe);
                        src.removeListener('end', onend);
                        src.removeListener('end', unpipe);
                        src.removeListener('data', ondata);
                        cleanedUp = true;
                        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
                    }
                    var increasedAwaitDrain = false;
                    src.on('data', ondata);
                    function ondata(chunk) {
                        debug('ondata');
                        increasedAwaitDrain = false;
                        var ret = dest.write(chunk);
                        if (false === ret && !increasedAwaitDrain) {
                            if ((1 === state.pipesCount && state.pipes === dest || state.pipesCount > 1 && -1 !== indexOf(state.pipes, dest)) && !cleanedUp) {
                                debug('false write response, pause', state.awaitDrain);
                                state.awaitDrain++;
                                increasedAwaitDrain = true;
                            }
                            src.pause();
                        }
                    }
                    function onerror(er) {
                        debug('onerror', er);
                        unpipe();
                        dest.removeListener('error', onerror);
                        if (0 === EElistenerCount(dest, 'error')) dest.emit('error', er);
                    }
                    prependListener(dest, 'error', onerror);
                    function onclose() {
                        dest.removeListener('finish', onfinish);
                        unpipe();
                    }
                    dest.once('close', onclose);
                    function onfinish() {
                        debug('onfinish');
                        dest.removeListener('close', onclose);
                        unpipe();
                    }
                    dest.once('finish', onfinish);
                    function unpipe() {
                        debug('unpipe');
                        src.unpipe(dest);
                    }
                    dest.emit('pipe', src);
                    if (!state.flowing) {
                        debug('pipe resume');
                        src.resume();
                    }
                    return dest;
                };
                function pipeOnDrain(src) {
                    return function() {
                        var state = src._readableState;
                        debug('pipeOnDrain', state.awaitDrain);
                        if (state.awaitDrain) state.awaitDrain--;
                        if (0 === state.awaitDrain && EElistenerCount(src, 'data')) {
                            state.flowing = true;
                            flow(src);
                        }
                    };
                }
                Readable.prototype.unpipe = function(dest) {
                    var state = this._readableState;
                    var unpipeInfo = {
                        hasUnpiped: false
                    };
                    if (0 === state.pipesCount) return this;
                    if (1 === state.pipesCount) {
                        if (dest && dest !== state.pipes) return this;
                        if (!dest) dest = state.pipes;
                        state.pipes = null;
                        state.pipesCount = 0;
                        state.flowing = false;
                        if (dest) dest.emit('unpipe', this, unpipeInfo);
                        return this;
                    }
                    if (!dest) {
                        var dests = state.pipes;
                        var len = state.pipesCount;
                        state.pipes = null;
                        state.pipesCount = 0;
                        state.flowing = false;
                        for(var i = 0; i < len; i++)dests[i].emit('unpipe', this, {
                            hasUnpiped: false
                        });
                        return this;
                    }
                    var index = indexOf(state.pipes, dest);
                    if (-1 === index) return this;
                    state.pipes.splice(index, 1);
                    state.pipesCount -= 1;
                    if (1 === state.pipesCount) state.pipes = state.pipes[0];
                    dest.emit('unpipe', this, unpipeInfo);
                    return this;
                };
                Readable.prototype.on = function(ev, fn) {
                    var res = Stream.prototype.on.call(this, ev, fn);
                    if ('data' === ev) {
                        if (false !== this._readableState.flowing) this.resume();
                    } else if ('readable' === ev) {
                        var state = this._readableState;
                        if (!state.endEmitted && !state.readableListening) {
                            state.readableListening = state.needReadable = true;
                            state.emittedReadable = false;
                            if (state.reading) {
                                if (state.length) emitReadable(this);
                            } else pna.nextTick(nReadingNextTick, this);
                        }
                    }
                    return res;
                };
                Readable.prototype.addListener = Readable.prototype.on;
                function nReadingNextTick(self1) {
                    debug('readable nexttick read 0');
                    self1.read(0);
                }
                Readable.prototype.resume = function() {
                    var state = this._readableState;
                    if (!state.flowing) {
                        debug('resume');
                        state.flowing = true;
                        resume(this, state);
                    }
                    return this;
                };
                function resume(stream, state) {
                    if (!state.resumeScheduled) {
                        state.resumeScheduled = true;
                        pna.nextTick(resume_, stream, state);
                    }
                }
                function resume_(stream, state) {
                    if (!state.reading) {
                        debug('resume read 0');
                        stream.read(0);
                    }
                    state.resumeScheduled = false;
                    state.awaitDrain = 0;
                    stream.emit('resume');
                    flow(stream);
                    if (state.flowing && !state.reading) stream.read(0);
                }
                Readable.prototype.pause = function() {
                    debug('call pause flowing=%j', this._readableState.flowing);
                    if (false !== this._readableState.flowing) {
                        debug('pause');
                        this._readableState.flowing = false;
                        this.emit('pause');
                    }
                    return this;
                };
                function flow(stream) {
                    var state = stream._readableState;
                    debug('flow', state.flowing);
                    while(state.flowing && null !== stream.read());
                }
                Readable.prototype.wrap = function(stream) {
                    var _this = this;
                    var state = this._readableState;
                    var paused = false;
                    stream.on('end', function() {
                        debug('wrapped end');
                        if (state.decoder && !state.ended) {
                            var chunk = state.decoder.end();
                            if (chunk && chunk.length) _this.push(chunk);
                        }
                        _this.push(null);
                    });
                    stream.on('data', function(chunk) {
                        debug('wrapped data');
                        if (state.decoder) chunk = state.decoder.write(chunk);
                        if (state.objectMode && null == chunk) return;
                        if (!state.objectMode && (!chunk || !chunk.length)) return;
                        var ret = _this.push(chunk);
                        if (!ret) {
                            paused = true;
                            stream.pause();
                        }
                    });
                    for(var i in stream)if (void 0 === this[i] && 'function' == typeof stream[i]) this[i] = function(method) {
                        return function() {
                            return stream[method].apply(stream, arguments);
                        };
                    }(i);
                    for(var n = 0; n < kProxyEvents.length; n++)stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
                    this._read = function(n) {
                        debug('wrapped _read', n);
                        if (paused) {
                            paused = false;
                            stream.resume();
                        }
                    };
                    return this;
                };
                Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
                    enumerable: false,
                    get: function() {
                        return this._readableState.highWaterMark;
                    }
                });
                Readable._fromList = fromList;
                function fromList(n, state) {
                    if (0 === state.length) return null;
                    var ret;
                    if (state.objectMode) ret = state.buffer.shift();
                    else if (!n || n >= state.length) {
                        ret = state.decoder ? state.buffer.join('') : 1 === state.buffer.length ? state.buffer.head.data : state.buffer.concat(state.length);
                        state.buffer.clear();
                    } else ret = fromListPartial(n, state.buffer, state.decoder);
                    return ret;
                }
                function fromListPartial(n, list, hasStrings) {
                    var ret;
                    if (n < list.head.data.length) {
                        ret = list.head.data.slice(0, n);
                        list.head.data = list.head.data.slice(n);
                    } else ret = n === list.head.data.length ? list.shift() : hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
                    return ret;
                }
                function copyFromBufferString(n, list) {
                    var p = list.head;
                    var c = 1;
                    var ret = p.data;
                    n -= ret.length;
                    while(p = p.next){
                        var str = p.data;
                        var nb = n > str.length ? str.length : n;
                        if (nb === str.length) ret += str;
                        else ret += str.slice(0, n);
                        n -= nb;
                        if (0 === n) {
                            if (nb === str.length) {
                                ++c;
                                if (p.next) list.head = p.next;
                                else list.head = list.tail = null;
                            } else {
                                list.head = p;
                                p.data = str.slice(nb);
                            }
                            break;
                        }
                        ++c;
                    }
                    list.length -= c;
                    return ret;
                }
                function copyFromBuffer(n, list) {
                    var ret = Buffer.allocUnsafe(n);
                    var p = list.head;
                    var c = 1;
                    p.data.copy(ret);
                    n -= p.data.length;
                    while(p = p.next){
                        var buf = p.data;
                        var nb = n > buf.length ? buf.length : n;
                        buf.copy(ret, ret.length - n, 0, nb);
                        n -= nb;
                        if (0 === n) {
                            if (nb === buf.length) {
                                ++c;
                                if (p.next) list.head = p.next;
                                else list.head = list.tail = null;
                            } else {
                                list.head = p;
                                p.data = buf.slice(nb);
                            }
                            break;
                        }
                        ++c;
                    }
                    list.length -= c;
                    return ret;
                }
                function endReadable(stream) {
                    var state = stream._readableState;
                    if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                    if (!state.endEmitted) {
                        state.ended = true;
                        pna.nextTick(endReadableNT, state, stream);
                    }
                }
                function endReadableNT(state, stream) {
                    if (!state.endEmitted && 0 === state.length) {
                        state.endEmitted = true;
                        stream.readable = false;
                        stream.emit('end');
                    }
                }
                function indexOf(xs, x) {
                    for(var i = 0, l = xs.length; i < l; i++)if (xs[i] === x) return i;
                    return -1;
                }
            },
            "./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_transform.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                module1.exports = Transform;
                var Duplex = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_duplex.js");
                var util = Object.create(__webpack_require__("./node_modules/core-util-is/lib/util.js"));
                util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                util.inherits(Transform, Duplex);
                function afterTransform(er, data) {
                    var ts = this._transformState;
                    ts.transforming = false;
                    var cb = ts.writecb;
                    if (!cb) return this.emit('error', new Error('write callback called multiple times'));
                    ts.writechunk = null;
                    ts.writecb = null;
                    if (null != data) this.push(data);
                    cb(er);
                    var rs = this._readableState;
                    rs.reading = false;
                    if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
                }
                function Transform(options) {
                    if (!(this instanceof Transform)) return new Transform(options);
                    Duplex.call(this, options);
                    this._transformState = {
                        afterTransform: afterTransform.bind(this),
                        needTransform: false,
                        transforming: false,
                        writecb: null,
                        writechunk: null,
                        writeencoding: null
                    };
                    this._readableState.needReadable = true;
                    this._readableState.sync = false;
                    if (options) {
                        if ('function' == typeof options.transform) this._transform = options.transform;
                        if ('function' == typeof options.flush) this._flush = options.flush;
                    }
                    this.on('prefinish', prefinish);
                }
                function prefinish() {
                    var _this = this;
                    if ('function' == typeof this._flush) this._flush(function(er, data) {
                        done(_this, er, data);
                    });
                    else done(this, null, null);
                }
                Transform.prototype.push = function(chunk, encoding) {
                    this._transformState.needTransform = false;
                    return Duplex.prototype.push.call(this, chunk, encoding);
                };
                Transform.prototype._transform = function(chunk, encoding, cb) {
                    throw new Error('_transform() is not implemented');
                };
                Transform.prototype._write = function(chunk, encoding, cb) {
                    var ts = this._transformState;
                    ts.writecb = cb;
                    ts.writechunk = chunk;
                    ts.writeencoding = encoding;
                    if (!ts.transforming) {
                        var rs = this._readableState;
                        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
                    }
                };
                Transform.prototype._read = function(n) {
                    var ts = this._transformState;
                    if (null !== ts.writechunk && ts.writecb && !ts.transforming) {
                        ts.transforming = true;
                        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
                    } else ts.needTransform = true;
                };
                Transform.prototype._destroy = function(err, cb) {
                    var _this2 = this;
                    Duplex.prototype._destroy.call(this, err, function(err2) {
                        cb(err2);
                        _this2.emit('close');
                    });
                };
                function done(stream, er, data) {
                    if (er) return stream.emit('error', er);
                    if (null != data) stream.push(data);
                    if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');
                    if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');
                    return stream.push(null);
                }
            },
            "./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_writable.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var process = __webpack_require__("./node_modules/process/browser.js");
                var pna = __webpack_require__("./node_modules/process-nextick-args/index.js");
                module1.exports = Writable;
                function CorkedRequest(state) {
                    var _this = this;
                    this.next = null;
                    this.entry = null;
                    this.finish = function() {
                        onCorkedFinish(_this, state);
                    };
                }
                var asyncWrite = !process.browser && [
                    'v0.10',
                    'v0.9.'
                ].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
                var Duplex;
                Writable.WritableState = WritableState;
                var util = Object.create(__webpack_require__("./node_modules/core-util-is/lib/util.js"));
                util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                var internalUtil = {
                    deprecate: __webpack_require__("./node_modules/util-deprecate/browser.js")
                };
                var Stream = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/internal/streams/stream-browser.js");
                var Buffer = __webpack_require__("./node_modules/websocket-stream/node_modules/safe-buffer/index.js").Buffer;
                var OurUint8Array = (void 0 !== __webpack_require__.g ? __webpack_require__.g : "u" > typeof window ? window : "u" > typeof self ? self : {}).Uint8Array || function() {};
                function _uint8ArrayToBuffer(chunk) {
                    return Buffer.from(chunk);
                }
                function _isUint8Array(obj) {
                    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
                }
                var destroyImpl = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/internal/streams/destroy.js");
                util.inherits(Writable, Stream);
                function nop() {}
                function WritableState(options, stream) {
                    Duplex = Duplex || __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_duplex.js");
                    options = options || {};
                    var isDuplex = stream instanceof Duplex;
                    this.objectMode = !!options.objectMode;
                    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
                    var hwm = options.highWaterMark;
                    var writableHwm = options.writableHighWaterMark;
                    var defaultHwm = this.objectMode ? 16 : 16384;
                    if (hwm || 0 === hwm) this.highWaterMark = hwm;
                    else if (isDuplex && (writableHwm || 0 === writableHwm)) this.highWaterMark = writableHwm;
                    else this.highWaterMark = defaultHwm;
                    this.highWaterMark = Math.floor(this.highWaterMark);
                    this.finalCalled = false;
                    this.needDrain = false;
                    this.ending = false;
                    this.ended = false;
                    this.finished = false;
                    this.destroyed = false;
                    var noDecode = false === options.decodeStrings;
                    this.decodeStrings = !noDecode;
                    this.defaultEncoding = options.defaultEncoding || 'utf8';
                    this.length = 0;
                    this.writing = false;
                    this.corked = 0;
                    this.sync = true;
                    this.bufferProcessing = false;
                    this.onwrite = function(er) {
                        onwrite(stream, er);
                    };
                    this.writecb = null;
                    this.writelen = 0;
                    this.bufferedRequest = null;
                    this.lastBufferedRequest = null;
                    this.pendingcb = 0;
                    this.prefinished = false;
                    this.errorEmitted = false;
                    this.bufferedRequestCount = 0;
                    this.corkedRequestsFree = new CorkedRequest(this);
                }
                WritableState.prototype.getBuffer = function() {
                    var current = this.bufferedRequest;
                    var out = [];
                    while(current){
                        out.push(current);
                        current = current.next;
                    }
                    return out;
                };
                (function() {
                    try {
                        Object.defineProperty(WritableState.prototype, 'buffer', {
                            get: internalUtil.deprecate(function() {
                                return this.getBuffer();
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", 'DEP0003')
                        });
                    } catch (_) {}
                })();
                var realHasInstance;
                if ('function' == typeof Symbol && Symbol.hasInstance && 'function' == typeof Function.prototype[Symbol.hasInstance]) {
                    realHasInstance = Function.prototype[Symbol.hasInstance];
                    Object.defineProperty(Writable, Symbol.hasInstance, {
                        value: function(object) {
                            if (realHasInstance.call(this, object)) return true;
                            if (this !== Writable) return false;
                            return object && object._writableState instanceof WritableState;
                        }
                    });
                } else realHasInstance = function(object) {
                    return object instanceof this;
                };
                function Writable(options) {
                    Duplex = Duplex || __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_duplex.js");
                    if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) return new Writable(options);
                    this._writableState = new WritableState(options, this);
                    this.writable = true;
                    if (options) {
                        if ('function' == typeof options.write) this._write = options.write;
                        if ('function' == typeof options.writev) this._writev = options.writev;
                        if ('function' == typeof options.destroy) this._destroy = options.destroy;
                        if ('function' == typeof options.final) this._final = options.final;
                    }
                    Stream.call(this);
                }
                Writable.prototype.pipe = function() {
                    this.emit('error', new Error('Cannot pipe, not readable'));
                };
                function writeAfterEnd(stream, cb) {
                    var er = new Error('write after end');
                    stream.emit('error', er);
                    pna.nextTick(cb, er);
                }
                function validChunk(stream, state, chunk, cb) {
                    var valid = true;
                    var er = false;
                    if (null === chunk) er = new TypeError('May not write null values to stream');
                    else if ('string' != typeof chunk && void 0 !== chunk && !state.objectMode) er = new TypeError('Invalid non-string/buffer chunk');
                    if (er) {
                        stream.emit('error', er);
                        pna.nextTick(cb, er);
                        valid = false;
                    }
                    return valid;
                }
                Writable.prototype.write = function(chunk, encoding, cb) {
                    var state = this._writableState;
                    var ret = false;
                    var isBuf = !state.objectMode && _isUint8Array(chunk);
                    if (isBuf && !Buffer.isBuffer(chunk)) chunk = _uint8ArrayToBuffer(chunk);
                    if ('function' == typeof encoding) {
                        cb = encoding;
                        encoding = null;
                    }
                    if (isBuf) encoding = 'buffer';
                    else if (!encoding) encoding = state.defaultEncoding;
                    if ('function' != typeof cb) cb = nop;
                    if (state.ended) writeAfterEnd(this, cb);
                    else if (isBuf || validChunk(this, state, chunk, cb)) {
                        state.pendingcb++;
                        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
                    }
                    return ret;
                };
                Writable.prototype.cork = function() {
                    var state = this._writableState;
                    state.corked++;
                };
                Writable.prototype.uncork = function() {
                    var state = this._writableState;
                    if (state.corked) {
                        state.corked--;
                        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
                    }
                };
                Writable.prototype.setDefaultEncoding = function(encoding) {
                    if ('string' == typeof encoding) encoding = encoding.toLowerCase();
                    if (!([
                        'hex',
                        'utf8',
                        'utf-8',
                        'ascii',
                        'binary',
                        'base64',
                        'ucs2',
                        'ucs-2',
                        'utf16le',
                        'utf-16le',
                        'raw'
                    ].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
                    this._writableState.defaultEncoding = encoding;
                    return this;
                };
                function decodeChunk(state, chunk, encoding) {
                    if (!state.objectMode && false !== state.decodeStrings && 'string' == typeof chunk) chunk = Buffer.from(chunk, encoding);
                    return chunk;
                }
                Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
                    enumerable: false,
                    get: function() {
                        return this._writableState.highWaterMark;
                    }
                });
                function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
                    if (!isBuf) {
                        var newChunk = decodeChunk(state, chunk, encoding);
                        if (chunk !== newChunk) {
                            isBuf = true;
                            encoding = 'buffer';
                            chunk = newChunk;
                        }
                    }
                    var len = state.objectMode ? 1 : chunk.length;
                    state.length += len;
                    var ret = state.length < state.highWaterMark;
                    if (!ret) state.needDrain = true;
                    if (state.writing || state.corked) {
                        var last = state.lastBufferedRequest;
                        state.lastBufferedRequest = {
                            chunk: chunk,
                            encoding: encoding,
                            isBuf: isBuf,
                            callback: cb,
                            next: null
                        };
                        if (last) last.next = state.lastBufferedRequest;
                        else state.bufferedRequest = state.lastBufferedRequest;
                        state.bufferedRequestCount += 1;
                    } else doWrite(stream, state, false, len, chunk, encoding, cb);
                    return ret;
                }
                function doWrite(stream, state, writev, len, chunk, encoding, cb) {
                    state.writelen = len;
                    state.writecb = cb;
                    state.writing = true;
                    state.sync = true;
                    if (writev) stream._writev(chunk, state.onwrite);
                    else stream._write(chunk, encoding, state.onwrite);
                    state.sync = false;
                }
                function onwriteError(stream, state, sync, er, cb) {
                    --state.pendingcb;
                    if (sync) {
                        pna.nextTick(cb, er);
                        pna.nextTick(finishMaybe, stream, state);
                        stream._writableState.errorEmitted = true;
                        stream.emit('error', er);
                    } else {
                        cb(er);
                        stream._writableState.errorEmitted = true;
                        stream.emit('error', er);
                        finishMaybe(stream, state);
                    }
                }
                function onwriteStateUpdate(state) {
                    state.writing = false;
                    state.writecb = null;
                    state.length -= state.writelen;
                    state.writelen = 0;
                }
                function onwrite(stream, er) {
                    var state = stream._writableState;
                    var sync = state.sync;
                    var cb = state.writecb;
                    onwriteStateUpdate(state);
                    if (er) onwriteError(stream, state, sync, er, cb);
                    else {
                        var finished = needFinish(state);
                        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(stream, state);
                        if (sync) asyncWrite(afterWrite, stream, state, finished, cb);
                        else afterWrite(stream, state, finished, cb);
                    }
                }
                function afterWrite(stream, state, finished, cb) {
                    if (!finished) onwriteDrain(stream, state);
                    state.pendingcb--;
                    cb();
                    finishMaybe(stream, state);
                }
                function onwriteDrain(stream, state) {
                    if (0 === state.length && state.needDrain) {
                        state.needDrain = false;
                        stream.emit('drain');
                    }
                }
                function clearBuffer(stream, state) {
                    state.bufferProcessing = true;
                    var entry = state.bufferedRequest;
                    if (stream._writev && entry && entry.next) {
                        var l = state.bufferedRequestCount;
                        var buffer = new Array(l);
                        var holder = state.corkedRequestsFree;
                        holder.entry = entry;
                        var count = 0;
                        var allBuffers = true;
                        while(entry){
                            buffer[count] = entry;
                            if (!entry.isBuf) allBuffers = false;
                            entry = entry.next;
                            count += 1;
                        }
                        buffer.allBuffers = allBuffers;
                        doWrite(stream, state, true, state.length, buffer, '', holder.finish);
                        state.pendingcb++;
                        state.lastBufferedRequest = null;
                        if (holder.next) {
                            state.corkedRequestsFree = holder.next;
                            holder.next = null;
                        } else state.corkedRequestsFree = new CorkedRequest(state);
                        state.bufferedRequestCount = 0;
                    } else {
                        while(entry){
                            var chunk = entry.chunk;
                            var encoding = entry.encoding;
                            var cb = entry.callback;
                            var len = state.objectMode ? 1 : chunk.length;
                            doWrite(stream, state, false, len, chunk, encoding, cb);
                            entry = entry.next;
                            state.bufferedRequestCount--;
                            if (state.writing) break;
                        }
                        if (null === entry) state.lastBufferedRequest = null;
                    }
                    state.bufferedRequest = entry;
                    state.bufferProcessing = false;
                }
                Writable.prototype._write = function(chunk, encoding, cb) {
                    cb(new Error('_write() is not implemented'));
                };
                Writable.prototype._writev = null;
                Writable.prototype.end = function(chunk, encoding, cb) {
                    var state = this._writableState;
                    if ('function' == typeof chunk) {
                        cb = chunk;
                        chunk = null;
                        encoding = null;
                    } else if ('function' == typeof encoding) {
                        cb = encoding;
                        encoding = null;
                    }
                    if (null != chunk) this.write(chunk, encoding);
                    if (state.corked) {
                        state.corked = 1;
                        this.uncork();
                    }
                    if (!state.ending) endWritable(this, state, cb);
                };
                function needFinish(state) {
                    return state.ending && 0 === state.length && null === state.bufferedRequest && !state.finished && !state.writing;
                }
                function callFinal(stream, state) {
                    stream._final(function(err) {
                        state.pendingcb--;
                        if (err) stream.emit('error', err);
                        state.prefinished = true;
                        stream.emit('prefinish');
                        finishMaybe(stream, state);
                    });
                }
                function prefinish(stream, state) {
                    if (!state.prefinished && !state.finalCalled) if ('function' == typeof stream._final) {
                        state.pendingcb++;
                        state.finalCalled = true;
                        pna.nextTick(callFinal, stream, state);
                    } else {
                        state.prefinished = true;
                        stream.emit('prefinish');
                    }
                }
                function finishMaybe(stream, state) {
                    var need = needFinish(state);
                    if (need) {
                        prefinish(stream, state);
                        if (0 === state.pendingcb) {
                            state.finished = true;
                            stream.emit('finish');
                        }
                    }
                    return need;
                }
                function endWritable(stream, state, cb) {
                    state.ending = true;
                    finishMaybe(stream, state);
                    if (cb) if (state.finished) pna.nextTick(cb);
                    else stream.once('finish', cb);
                    state.ended = true;
                    stream.writable = false;
                }
                function onCorkedFinish(corkReq, state, err) {
                    var entry = corkReq.entry;
                    corkReq.entry = null;
                    while(entry){
                        var cb = entry.callback;
                        state.pendingcb--;
                        cb(err);
                        entry = entry.next;
                    }
                    state.corkedRequestsFree.next = corkReq;
                }
                Object.defineProperty(Writable.prototype, 'destroyed', {
                    get: function() {
                        if (void 0 === this._writableState) return false;
                        return this._writableState.destroyed;
                    },
                    set: function(value) {
                        if (!this._writableState) return;
                        this._writableState.destroyed = value;
                    }
                });
                Writable.prototype.destroy = destroyImpl.destroy;
                Writable.prototype._undestroy = destroyImpl.undestroy;
                Writable.prototype._destroy = function(err, cb) {
                    this.end();
                    cb(err);
                };
            },
            "./node_modules/websocket-stream/node_modules/readable-stream/lib/internal/streams/BufferList.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                var Buffer = __webpack_require__("./node_modules/websocket-stream/node_modules/safe-buffer/index.js").Buffer;
                var util = __webpack_require__("?3412");
                function copyBuffer(src, target, offset) {
                    src.copy(target, offset);
                }
                module1.exports = function() {
                    function BufferList() {
                        _classCallCheck(this, BufferList);
                        this.head = null;
                        this.tail = null;
                        this.length = 0;
                    }
                    BufferList.prototype.push = function(v) {
                        var entry = {
                            data: v,
                            next: null
                        };
                        if (this.length > 0) this.tail.next = entry;
                        else this.head = entry;
                        this.tail = entry;
                        ++this.length;
                    };
                    BufferList.prototype.unshift = function(v) {
                        var entry = {
                            data: v,
                            next: this.head
                        };
                        if (0 === this.length) this.tail = entry;
                        this.head = entry;
                        ++this.length;
                    };
                    BufferList.prototype.shift = function() {
                        if (0 === this.length) return;
                        var ret = this.head.data;
                        if (1 === this.length) this.head = this.tail = null;
                        else this.head = this.head.next;
                        --this.length;
                        return ret;
                    };
                    BufferList.prototype.clear = function() {
                        this.head = this.tail = null;
                        this.length = 0;
                    };
                    BufferList.prototype.join = function(s) {
                        if (0 === this.length) return '';
                        var p = this.head;
                        var ret = '' + p.data;
                        while(p = p.next)ret += s + p.data;
                        return ret;
                    };
                    BufferList.prototype.concat = function(n) {
                        if (0 === this.length) return Buffer.alloc(0);
                        var ret = Buffer.allocUnsafe(n >>> 0);
                        var p = this.head;
                        var i = 0;
                        while(p){
                            copyBuffer(p.data, ret, i);
                            i += p.data.length;
                            p = p.next;
                        }
                        return ret;
                    };
                    return BufferList;
                }();
                if (util && util.inspect && util.inspect.custom) module1.exports.prototype[util.inspect.custom] = function() {
                    var obj = util.inspect({
                        length: this.length
                    });
                    return this.constructor.name + ' ' + obj;
                };
            },
            "./node_modules/websocket-stream/node_modules/readable-stream/lib/internal/streams/destroy.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var pna = __webpack_require__("./node_modules/process-nextick-args/index.js");
                function destroy(err, cb) {
                    var _this = this;
                    var readableDestroyed = this._readableState && this._readableState.destroyed;
                    var writableDestroyed = this._writableState && this._writableState.destroyed;
                    if (readableDestroyed || writableDestroyed) {
                        if (cb) cb(err);
                        else if (err) if (this._writableState) {
                            if (!this._writableState.errorEmitted) {
                                this._writableState.errorEmitted = true;
                                pna.nextTick(emitErrorNT, this, err);
                            }
                        } else pna.nextTick(emitErrorNT, this, err);
                        return this;
                    }
                    if (this._readableState) this._readableState.destroyed = true;
                    if (this._writableState) this._writableState.destroyed = true;
                    this._destroy(err || null, function(err) {
                        if (!cb && err) if (_this._writableState) {
                            if (!_this._writableState.errorEmitted) {
                                _this._writableState.errorEmitted = true;
                                pna.nextTick(emitErrorNT, _this, err);
                            }
                        } else pna.nextTick(emitErrorNT, _this, err);
                        else if (cb) cb(err);
                    });
                    return this;
                }
                function undestroy() {
                    if (this._readableState) {
                        this._readableState.destroyed = false;
                        this._readableState.reading = false;
                        this._readableState.ended = false;
                        this._readableState.endEmitted = false;
                    }
                    if (this._writableState) {
                        this._writableState.destroyed = false;
                        this._writableState.ended = false;
                        this._writableState.ending = false;
                        this._writableState.finalCalled = false;
                        this._writableState.prefinished = false;
                        this._writableState.finished = false;
                        this._writableState.errorEmitted = false;
                    }
                }
                function emitErrorNT(self1, err) {
                    self1.emit('error', err);
                }
                module1.exports = {
                    destroy: destroy,
                    undestroy: undestroy
                };
            },
            "./node_modules/websocket-stream/node_modules/readable-stream/lib/internal/streams/stream-browser.js" (module1, __unused_rspack_exports, __webpack_require__) {
                module1.exports = __webpack_require__("./node_modules/events/events.js").EventEmitter;
            },
            "./node_modules/websocket-stream/node_modules/readable-stream/readable-browser.js" (module1, exports1, __webpack_require__) {
                exports1 = module1.exports = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_readable.js");
                exports1.Stream = exports1;
                exports1.Readable = exports1;
                exports1.Writable = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_writable.js");
                exports1.Duplex = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_duplex.js");
                exports1.Transform = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_transform.js");
                exports1.PassThrough = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/lib/_stream_passthrough.js");
            },
            "./node_modules/websocket-stream/node_modules/safe-buffer/index.js" (module1, exports1, __webpack_require__) {
                var buffer = __webpack_require__("./node_modules/buffer/index.js");
                var Buffer = buffer.Buffer;
                function copyProps(src, dst) {
                    for(var key in src)dst[key] = src[key];
                }
                if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) module1.exports = buffer;
                else {
                    copyProps(buffer, exports1);
                    exports1.Buffer = SafeBuffer;
                }
                function SafeBuffer(arg, encodingOrOffset, length) {
                    return Buffer(arg, encodingOrOffset, length);
                }
                copyProps(Buffer, SafeBuffer);
                SafeBuffer.from = function(arg, encodingOrOffset, length) {
                    if ('number' == typeof arg) throw new TypeError('Argument must not be a number');
                    return Buffer(arg, encodingOrOffset, length);
                };
                SafeBuffer.alloc = function(size, fill, encoding) {
                    if ('number' != typeof size) throw new TypeError('Argument must be a number');
                    var buf = Buffer(size);
                    if (void 0 !== fill) if ('string' == typeof encoding) buf.fill(fill, encoding);
                    else buf.fill(fill);
                    else buf.fill(0);
                    return buf;
                };
                SafeBuffer.allocUnsafe = function(size) {
                    if ('number' != typeof size) throw new TypeError('Argument must be a number');
                    return Buffer(size);
                };
                SafeBuffer.allocUnsafeSlow = function(size) {
                    if ('number' != typeof size) throw new TypeError('Argument must be a number');
                    return buffer.SlowBuffer(size);
                };
            },
            "./node_modules/websocket-stream/node_modules/string_decoder/lib/string_decoder.js" (__unused_rspack_module, exports1, __webpack_require__) {
                "use strict";
                var Buffer = __webpack_require__("./node_modules/websocket-stream/node_modules/safe-buffer/index.js").Buffer;
                var isEncoding = Buffer.isEncoding || function(encoding) {
                    encoding = '' + encoding;
                    switch(encoding && encoding.toLowerCase()){
                        case 'hex':
                        case 'utf8':
                        case 'utf-8':
                        case 'ascii':
                        case 'binary':
                        case 'base64':
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                        case 'raw':
                            return true;
                        default:
                            return false;
                    }
                };
                function _normalizeEncoding(enc) {
                    if (!enc) return 'utf8';
                    var retried;
                    while(true)switch(enc){
                        case 'utf8':
                        case 'utf-8':
                            return 'utf8';
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return 'utf16le';
                        case 'latin1':
                        case 'binary':
                            return 'latin1';
                        case 'base64':
                        case 'ascii':
                        case 'hex':
                            return enc;
                        default:
                            if (retried) return;
                            enc = ('' + enc).toLowerCase();
                            retried = true;
                    }
                }
                function normalizeEncoding(enc) {
                    var nenc = _normalizeEncoding(enc);
                    if ('string' != typeof nenc && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
                    return nenc || enc;
                }
                exports1.StringDecoder = StringDecoder;
                function StringDecoder(encoding) {
                    this.encoding = normalizeEncoding(encoding);
                    var nb;
                    switch(this.encoding){
                        case 'utf16le':
                            this.text = utf16Text;
                            this.end = utf16End;
                            nb = 4;
                            break;
                        case 'utf8':
                            this.fillLast = utf8FillLast;
                            nb = 4;
                            break;
                        case 'base64':
                            this.text = base64Text;
                            this.end = base64End;
                            nb = 3;
                            break;
                        default:
                            this.write = simpleWrite;
                            this.end = simpleEnd;
                            return;
                    }
                    this.lastNeed = 0;
                    this.lastTotal = 0;
                    this.lastChar = Buffer.allocUnsafe(nb);
                }
                StringDecoder.prototype.write = function(buf) {
                    if (0 === buf.length) return '';
                    var r;
                    var i;
                    if (this.lastNeed) {
                        r = this.fillLast(buf);
                        if (void 0 === r) return '';
                        i = this.lastNeed;
                        this.lastNeed = 0;
                    } else i = 0;
                    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
                    return r || '';
                };
                StringDecoder.prototype.end = utf8End;
                StringDecoder.prototype.text = utf8Text;
                StringDecoder.prototype.fillLast = function(buf) {
                    if (this.lastNeed <= buf.length) {
                        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
                        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
                    }
                    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
                    this.lastNeed -= buf.length;
                };
                function utf8CheckByte(byte) {
                    if (byte <= 0x7F) return 0;
                    if (byte >> 5 === 0x06) return 2;
                    if (byte >> 4 === 0x0E) return 3;
                    if (byte >> 3 === 0x1E) return 4;
                    return byte >> 6 === 0x02 ? -1 : -2;
                }
                function utf8CheckIncomplete(self1, buf, i) {
                    var j = buf.length - 1;
                    if (j < i) return 0;
                    var nb = utf8CheckByte(buf[j]);
                    if (nb >= 0) {
                        if (nb > 0) self1.lastNeed = nb - 1;
                        return nb;
                    }
                    if (--j < i || -2 === nb) return 0;
                    nb = utf8CheckByte(buf[j]);
                    if (nb >= 0) {
                        if (nb > 0) self1.lastNeed = nb - 2;
                        return nb;
                    }
                    if (--j < i || -2 === nb) return 0;
                    nb = utf8CheckByte(buf[j]);
                    if (nb >= 0) {
                        if (nb > 0) if (2 === nb) nb = 0;
                        else self1.lastNeed = nb - 3;
                        return nb;
                    }
                    return 0;
                }
                function utf8CheckExtraBytes(self1, buf, p) {
                    if ((0xC0 & buf[0]) !== 0x80) {
                        self1.lastNeed = 0;
                        return '\ufffd';
                    }
                    if (self1.lastNeed > 1 && buf.length > 1) {
                        if ((0xC0 & buf[1]) !== 0x80) {
                            self1.lastNeed = 1;
                            return '\ufffd';
                        }
                        if (self1.lastNeed > 2 && buf.length > 2) {
                            if ((0xC0 & buf[2]) !== 0x80) {
                                self1.lastNeed = 2;
                                return '\ufffd';
                            }
                        }
                    }
                }
                function utf8FillLast(buf) {
                    var p = this.lastTotal - this.lastNeed;
                    var r = utf8CheckExtraBytes(this, buf, p);
                    if (void 0 !== r) return r;
                    if (this.lastNeed <= buf.length) {
                        buf.copy(this.lastChar, p, 0, this.lastNeed);
                        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
                    }
                    buf.copy(this.lastChar, p, 0, buf.length);
                    this.lastNeed -= buf.length;
                }
                function utf8Text(buf, i) {
                    var total = utf8CheckIncomplete(this, buf, i);
                    if (!this.lastNeed) return buf.toString('utf8', i);
                    this.lastTotal = total;
                    var end = buf.length - (total - this.lastNeed);
                    buf.copy(this.lastChar, 0, end);
                    return buf.toString('utf8', i, end);
                }
                function utf8End(buf) {
                    var r = buf && buf.length ? this.write(buf) : '';
                    if (this.lastNeed) return r + '\ufffd';
                    return r;
                }
                function utf16Text(buf, i) {
                    if ((buf.length - i) % 2 === 0) {
                        var r = buf.toString('utf16le', i);
                        if (r) {
                            var c = r.charCodeAt(r.length - 1);
                            if (c >= 0xD800 && c <= 0xDBFF) {
                                this.lastNeed = 2;
                                this.lastTotal = 4;
                                this.lastChar[0] = buf[buf.length - 2];
                                this.lastChar[1] = buf[buf.length - 1];
                                return r.slice(0, -1);
                            }
                        }
                        return r;
                    }
                    this.lastNeed = 1;
                    this.lastTotal = 2;
                    this.lastChar[0] = buf[buf.length - 1];
                    return buf.toString('utf16le', i, buf.length - 1);
                }
                function utf16End(buf) {
                    var r = buf && buf.length ? this.write(buf) : '';
                    if (this.lastNeed) {
                        var end = this.lastTotal - this.lastNeed;
                        return r + this.lastChar.toString('utf16le', 0, end);
                    }
                    return r;
                }
                function base64Text(buf, i) {
                    var n = (buf.length - i) % 3;
                    if (0 === n) return buf.toString('base64', i);
                    this.lastNeed = 3 - n;
                    this.lastTotal = 3;
                    if (1 === n) this.lastChar[0] = buf[buf.length - 1];
                    else {
                        this.lastChar[0] = buf[buf.length - 2];
                        this.lastChar[1] = buf[buf.length - 1];
                    }
                    return buf.toString('base64', i, buf.length - n);
                }
                function base64End(buf) {
                    var r = buf && buf.length ? this.write(buf) : '';
                    if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
                    return r;
                }
                function simpleWrite(buf) {
                    return buf.toString(this.encoding);
                }
                function simpleEnd(buf) {
                    return buf && buf.length ? this.write(buf) : '';
                }
            },
            "./node_modules/websocket-stream/stream.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var process = __webpack_require__("./node_modules/process/browser.js");
                var Transform = __webpack_require__("./node_modules/websocket-stream/node_modules/readable-stream/readable-browser.js").Transform;
                var duplexify = __webpack_require__("./node_modules/duplexify/index.js");
                var WS = __webpack_require__("./node_modules/websocket-stream/ws-fallback.js");
                var Buffer = __webpack_require__("./node_modules/websocket-stream/node_modules/safe-buffer/index.js").Buffer;
                module1.exports = WebSocketStream;
                function buildProxy(options, socketWrite, socketEnd) {
                    var proxy = new Transform({
                        objectMode: options.objectMode
                    });
                    proxy._write = socketWrite;
                    proxy._flush = socketEnd;
                    return proxy;
                }
                function WebSocketStream(target, protocols, options) {
                    var stream, socket;
                    var isBrowser = 'browser' === process.title;
                    var isNative = !!__webpack_require__.g.WebSocket;
                    var socketWrite = isBrowser ? socketWriteBrowser : socketWriteNode;
                    if (protocols && !Array.isArray(protocols) && 'object' == typeof protocols) {
                        options = protocols;
                        protocols = null;
                        if ('string' == typeof options.protocol || Array.isArray(options.protocol)) protocols = options.protocol;
                    }
                    if (!options) options = {};
                    if (void 0 === options.objectMode) options.objectMode = !(true === options.binary || void 0 === options.binary);
                    var proxy = buildProxy(options, socketWrite, socketEnd);
                    if (!options.objectMode) proxy._writev = writev;
                    var bufferSize = options.browserBufferSize || 524288;
                    var bufferTimeout = options.browserBufferTimeout || 1000;
                    if ('object' == typeof target) socket = target;
                    else {
                        socket = isNative && isBrowser ? new WS(target, protocols) : new WS(target, protocols, options);
                        socket.binaryType = 'arraybuffer';
                    }
                    var eventListenerSupport = void 0 === socket.addEventListener;
                    if (socket.readyState === socket.OPEN) stream = proxy;
                    else {
                        stream = stream = duplexify(void 0, void 0, options);
                        if (!options.objectMode) stream._writev = writev;
                        if (eventListenerSupport) socket.addEventListener('open', onopen);
                        else socket.onopen = onopen;
                    }
                    stream.socket = socket;
                    if (eventListenerSupport) {
                        socket.addEventListener('close', onclose);
                        socket.addEventListener('error', onerror);
                        socket.addEventListener('message', onmessage);
                    } else {
                        socket.onclose = onclose;
                        socket.onerror = onerror;
                        socket.onmessage = onmessage;
                    }
                    proxy.on('close', destroy);
                    var coerceToBuffer = !options.objectMode;
                    function socketWriteNode(chunk, enc, next) {
                        if (socket.readyState !== socket.OPEN) return void next();
                        if (coerceToBuffer && 'string' == typeof chunk) chunk = Buffer.from(chunk, 'utf8');
                        socket.send(chunk, next);
                    }
                    function socketWriteBrowser(chunk, enc, next) {
                        if (socket.bufferedAmount > bufferSize) return void setTimeout(socketWriteBrowser, bufferTimeout, chunk, enc, next);
                        if (coerceToBuffer && 'string' == typeof chunk) chunk = Buffer.from(chunk, 'utf8');
                        try {
                            socket.send(chunk);
                        } catch (err) {
                            return next(err);
                        }
                        next();
                    }
                    function socketEnd(done) {
                        socket.close();
                        done();
                    }
                    function onopen() {
                        stream.setReadable(proxy);
                        stream.setWritable(proxy);
                        stream.emit('connect');
                    }
                    function onclose() {
                        stream.end();
                        stream.destroy();
                    }
                    function onerror(err) {
                        stream.destroy(err);
                    }
                    function onmessage(event) {
                        var data = event.data;
                        data = data instanceof ArrayBuffer ? Buffer.from(data) : Buffer.from(data, 'utf8');
                        proxy.push(data);
                    }
                    function destroy() {
                        socket.close();
                    }
                    function writev(chunks, cb) {
                        var buffers = new Array(chunks.length);
                        for(var i = 0; i < chunks.length; i++)if ('string' == typeof chunks[i].chunk) buffers[i] = Buffer.from(chunks[i], 'utf8');
                        else buffers[i] = chunks[i].chunk;
                        this._write(Buffer.concat(buffers), 'binary', cb);
                    }
                    return stream;
                }
            },
            "./node_modules/websocket-stream/ws-fallback.js" (module1) {
                var ws = null;
                if ("u" > typeof WebSocket) ws = WebSocket;
                else if ("u" > typeof MozWebSocket) ws = MozWebSocket;
                else if ("u" > typeof window) ws = window.WebSocket || window.MozWebSocket;
                module1.exports = ws;
            },
            "./node_modules/which-typed-array/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var forEach = __webpack_require__("./node_modules/for-each/index.js");
                var availableTypedArrays = __webpack_require__("./node_modules/available-typed-arrays/index.js");
                var callBind = __webpack_require__("./node_modules/call-bind/index.js");
                var callBound = __webpack_require__("./node_modules/call-bound/index.js");
                var gOPD = __webpack_require__("./node_modules/gopd/index.js");
                var getProto = __webpack_require__("./node_modules/get-proto/index.js");
                var $toString = callBound('Object.prototype.toString');
                var hasToStringTag = __webpack_require__("./node_modules/has-tostringtag/shams.js")();
                var g = "u" < typeof globalThis ? __webpack_require__.g : globalThis;
                var typedArrays = availableTypedArrays();
                var $slice = callBound('String.prototype.slice');
                var $indexOf = callBound('Array.prototype.indexOf', true) || function(array, value) {
                    for(var i = 0; i < array.length; i += 1)if (array[i] === value) return i;
                    return -1;
                };
                var cache = {
                    __proto__: null
                };
                hasToStringTag && gOPD && getProto ? forEach(typedArrays, function(typedArray) {
                    var arr = new g[typedArray]();
                    if (Symbol.toStringTag in arr && getProto) {
                        var proto = getProto(arr);
                        var descriptor = gOPD(proto, Symbol.toStringTag);
                        if (!descriptor && proto) {
                            var superProto = getProto(proto);
                            descriptor = gOPD(superProto, Symbol.toStringTag);
                        }
                        cache['$' + typedArray] = callBind(descriptor.get);
                    }
                }) : forEach(typedArrays, function(typedArray) {
                    var arr = new g[typedArray]();
                    var fn = arr.slice || arr.set;
                    if (fn) cache['$' + typedArray] = callBind(fn);
                });
                var tryTypedArrays = function(value) {
                    var found = false;
                    forEach(cache, function(getter, typedArray) {
                        if (!found) try {
                            if ('$' + getter(value) === typedArray) found = $slice(typedArray, 1);
                        } catch (e) {}
                    });
                    return found;
                };
                var trySlices = function(value) {
                    var found = false;
                    forEach(cache, function(getter, name) {
                        if (!found) try {
                            getter(value);
                            found = $slice(name, 1);
                        } catch (e) {}
                    });
                    return found;
                };
                module1.exports = function(value) {
                    if (!value || 'object' != typeof value) return false;
                    if (!hasToStringTag) {
                        var tag = $slice($toString(value), 8, -1);
                        if ($indexOf(typedArrays, tag) > -1) return tag;
                        if ('Object' !== tag) return false;
                        return trySlices(value);
                    }
                    if (!gOPD) return null;
                    return tryTypedArrays(value);
                };
            },
            "./node_modules/wrappy/wrappy.js" (module1) {
                module1.exports = wrappy;
                function wrappy(fn, cb) {
                    if (fn && cb) return wrappy(fn)(cb);
                    if ('function' != typeof fn) throw new TypeError('need wrapper function');
                    Object.keys(fn).forEach(function(k) {
                        wrapper[k] = fn[k];
                    });
                    return wrapper;
                    function wrapper() {
                        var args = new Array(arguments.length);
                        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
                        var ret = fn.apply(this, args);
                        var cb = args[args.length - 1];
                        if ('function' == typeof ret && ret !== cb) Object.keys(cb).forEach(function(k) {
                            ret[k] = cb[k];
                        });
                        return ret;
                    }
                }
            },
            "?6dfc" () {},
            "?c5fd" () {},
            "?a7ce" () {},
            "?3f0e" () {},
            "?3412" () {},
            "?3152" () {},
            "./node_modules/@rsbuild/core/compiled/css-loader/api.js" (module1) {
                "use strict";
                module1.exports = function(cssWithMappingToString) {
                    var list = [];
                    list.toString = function() {
                        return this.map(function(item) {
                            var content = "";
                            var needLayer = void 0 !== item[5];
                            if (item[4]) content += "@supports (".concat(item[4], ") {");
                            if (item[2]) content += "@media ".concat(item[2], " {");
                            if (needLayer) content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
                            content += cssWithMappingToString(item);
                            if (needLayer) content += "}";
                            if (item[2]) content += "}";
                            if (item[4]) content += "}";
                            return content;
                        }).join("");
                    };
                    list.i = function(modules, media, dedupe, supports, layer) {
                        if ("string" == typeof modules) modules = [
                            [
                                null,
                                modules,
                                void 0
                            ]
                        ];
                        var alreadyImportedModules = {};
                        if (dedupe) for(var k = 0; k < this.length; k++){
                            var id = this[k][0];
                            if (null != id) alreadyImportedModules[id] = true;
                        }
                        for(var _k = 0; _k < modules.length; _k++){
                            var item = [].concat(modules[_k]);
                            if (!dedupe || !alreadyImportedModules[item[0]]) {
                                if (void 0 !== layer) if (void 0 === item[5]) item[5] = layer;
                                else {
                                    item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
                                    item[5] = layer;
                                }
                                if (media) if (item[2]) {
                                    item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                                    item[2] = media;
                                } else item[2] = media;
                                if (supports) if (item[4]) {
                                    item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
                                    item[4] = supports;
                                } else item[4] = "".concat(supports);
                                list.push(item);
                            }
                        }
                    };
                    return list;
                };
            },
            "./node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js" (module1) {
                "use strict";
                module1.exports = function(i) {
                    return i[1];
                };
            },
            "./node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js" (module1) {
                "use strict";
                var stylesInDOM = [];
                function getIndexByIdentifier(identifier) {
                    var result = -1;
                    for(var i = 0; i < stylesInDOM.length; i++)if (stylesInDOM[i].identifier === identifier) {
                        result = i;
                        break;
                    }
                    return result;
                }
                function modulesToDom(list, options) {
                    var idCountMap = {};
                    var identifiers = [];
                    for(var i = 0; i < list.length; i++){
                        var item = list[i];
                        var id = options.base ? item[0] + options.base : item[0];
                        var count = idCountMap[id] || 0;
                        var identifier = "".concat(id, " ").concat(count);
                        idCountMap[id] = count + 1;
                        var indexByIdentifier = getIndexByIdentifier(identifier);
                        var obj = {
                            css: item[1],
                            media: item[2],
                            sourceMap: item[3],
                            supports: item[4],
                            layer: item[5]
                        };
                        if (-1 !== indexByIdentifier) {
                            stylesInDOM[indexByIdentifier].references++;
                            stylesInDOM[indexByIdentifier].updater(obj);
                        } else {
                            var updater = addElementStyle(obj, options);
                            options.byIndex = i;
                            stylesInDOM.splice(i, 0, {
                                identifier: identifier,
                                updater: updater,
                                references: 1
                            });
                        }
                        identifiers.push(identifier);
                    }
                    return identifiers;
                }
                function addElementStyle(obj, options) {
                    var api = options.domAPI(options);
                    api.update(obj);
                    var updater = function(newObj) {
                        if (newObj) {
                            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) return;
                            api.update(obj = newObj);
                        } else api.remove();
                    };
                    return updater;
                }
                module1.exports = function(list, options) {
                    options = options || {};
                    list = list || [];
                    var lastIdentifiers = modulesToDom(list, options);
                    return function(newList) {
                        newList = newList || [];
                        for(var i = 0; i < lastIdentifiers.length; i++){
                            var identifier = lastIdentifiers[i];
                            var index = getIndexByIdentifier(identifier);
                            stylesInDOM[index].references--;
                        }
                        var newLastIdentifiers = modulesToDom(newList, options);
                        for(var _i = 0; _i < lastIdentifiers.length; _i++){
                            var _identifier = lastIdentifiers[_i];
                            var _index = getIndexByIdentifier(_identifier);
                            if (0 === stylesInDOM[_index].references) {
                                stylesInDOM[_index].updater();
                                stylesInDOM.splice(_index, 1);
                            }
                        }
                        lastIdentifiers = newLastIdentifiers;
                    };
                };
            },
            "./node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js" (module1) {
                "use strict";
                var memo = {};
                function getTarget(target) {
                    if (void 0 === memo[target]) {
                        var styleTarget = document.querySelector(target);
                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) try {
                            styleTarget = styleTarget.contentDocument.head;
                        } catch (e) {
                            styleTarget = null;
                        }
                        memo[target] = styleTarget;
                    }
                    return memo[target];
                }
                function insertBySelector(insert, style) {
                    var target = getTarget(insert);
                    if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    target.appendChild(style);
                }
                module1.exports = insertBySelector;
            },
            "./node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js" (module1) {
                "use strict";
                function insertStyleElement(options) {
                    var element = document.createElement("style");
                    options.setAttributes(element, options.attributes);
                    options.insert(element, options.options);
                    return element;
                }
                module1.exports = insertStyleElement;
            },
            "./node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                function setAttributesWithoutAttributes(styleElement) {
                    var nonce = __webpack_require__.nc;
                    if (nonce) styleElement.setAttribute("nonce", nonce);
                }
                module1.exports = setAttributesWithoutAttributes;
            },
            "./node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js" (module1) {
                "use strict";
                function apply(styleElement, options, obj) {
                    var css = "";
                    if (obj.supports) css += "@supports (".concat(obj.supports, ") {");
                    if (obj.media) css += "@media ".concat(obj.media, " {");
                    var needLayer = void 0 !== obj.layer;
                    if (needLayer) css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
                    css += obj.css;
                    if (needLayer) css += "}";
                    if (obj.media) css += "}";
                    if (obj.supports) css += "}";
                    var sourceMap = obj.sourceMap;
                    if (sourceMap && "u" > typeof btoa) css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                    options.styleTagTransform(css, styleElement, options.options);
                }
                function removeStyleElement(styleElement) {
                    if (null === styleElement.parentNode) return false;
                    styleElement.parentNode.removeChild(styleElement);
                }
                function domAPI(options) {
                    if ("u" < typeof document) return {
                        update: function() {},
                        remove: function() {}
                    };
                    var styleElement = options.insertStyleElement(options);
                    return {
                        update: function(obj) {
                            apply(styleElement, options, obj);
                        },
                        remove: function() {
                            removeStyleElement(styleElement);
                        }
                    };
                }
                module1.exports = domAPI;
            },
            "./node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js" (module1) {
                "use strict";
                function styleTagTransform(css, styleElement) {
                    if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
                    else {
                        while(styleElement.firstChild)styleElement.removeChild(styleElement.firstChild);
                        styleElement.appendChild(document.createTextNode(css));
                    }
                }
                module1.exports = styleTagTransform;
            },
            "./node_modules/available-typed-arrays/index.js" (module1, __unused_rspack_exports, __webpack_require__) {
                "use strict";
                var possibleNames = __webpack_require__("./node_modules/possible-typed-array-names/index.js");
                var g = "u" < typeof globalThis ? __webpack_require__.g : globalThis;
                module1.exports = function() {
                    var out = [];
                    for(var i = 0; i < possibleNames.length; i++)if ('function' == typeof g[possibleNames[i]]) out[out.length] = possibleNames[i];
                    return out;
                };
            }
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
                if ("u" > typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
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
        var __webpack_exports__ = {};
        (()=>{
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
                VideomailClient: ()=>VideomailClient,
                VideoType: ()=>VideoType
            });
            const VideoType = {
                WebM: "webm",
                MP4: "mp4"
            };
            const constants = {
                SITE_NAME_LABEL: "x-videomail-site-name",
                VERSION_LABEL: "videomailClientVersion",
                public: {
                    ENC_TYPE_APP_JSON: "application/json",
                    ENC_TYPE_FORM: "application/x-www-form-urlencoded"
                }
            };
            const list = [
                Error,
                EvalError,
                RangeError,
                ReferenceError,
                SyntaxError,
                TypeError,
                URIError,
                AggregateError,
                globalThis.DOMException,
                globalThis.AssertionError,
                globalThis.SystemError
            ].filter(Boolean).map((constructor)=>[
                    constructor.name,
                    constructor
                ]);
            const errorConstructors = new Map(list);
            class NonError extends Error {
                name = 'NonError';
                constructor(message){
                    super(NonError._prepareSuperMessage(message));
                }
                static _prepareSuperMessage(message) {
                    try {
                        return JSON.stringify(message);
                    } catch  {
                        return String(message);
                    }
                }
            }
            const errorProperties = [
                {
                    property: 'name',
                    enumerable: false
                },
                {
                    property: 'message',
                    enumerable: false
                },
                {
                    property: 'stack',
                    enumerable: false
                },
                {
                    property: 'code',
                    enumerable: true
                },
                {
                    property: 'cause',
                    enumerable: false
                },
                {
                    property: 'errors',
                    enumerable: false
                }
            ];
            const toJsonWasCalled = new WeakSet();
            const toJSON = (from)=>{
                toJsonWasCalled.add(from);
                const json = from.toJSON();
                toJsonWasCalled.delete(from);
                return json;
            };
            const newError = (name)=>{
                const ErrorConstructor = errorConstructors.get(name) ?? Error;
                return ErrorConstructor === AggregateError ? new ErrorConstructor([]) : new ErrorConstructor();
            };
            const destroyCircular = ({ from, seen, to, forceEnumerable, maxDepth, depth, useToJSON, serialize })=>{
                if (!to) to = Array.isArray(from) ? [] : !serialize && isErrorLike(from) ? newError(from.name) : {};
                seen.push(from);
                if (depth >= maxDepth) return to;
                if (useToJSON && 'function' == typeof from.toJSON && !toJsonWasCalled.has(from)) return toJSON(from);
                const continueDestroyCircular = (value)=>destroyCircular({
                        from: value,
                        seen: [
                            ...seen
                        ],
                        forceEnumerable,
                        maxDepth,
                        depth,
                        useToJSON,
                        serialize
                    });
                for (const [key, value] of Object.entries(from)){
                    if (value && value instanceof Uint8Array && 'Buffer' === value.constructor.name) {
                        to[key] = '[object Buffer]';
                        continue;
                    }
                    if (null !== value && 'object' == typeof value && 'function' == typeof value.pipe) {
                        to[key] = '[object Stream]';
                        continue;
                    }
                    if ('function' != typeof value) {
                        if (!value || 'object' != typeof value) {
                            try {
                                to[key] = value;
                            } catch  {}
                            continue;
                        }
                        if (!seen.includes(from[key])) {
                            depth++;
                            to[key] = continueDestroyCircular(from[key]);
                            continue;
                        }
                        to[key] = '[Circular]';
                    }
                }
                if (serialize || to instanceof Error) {
                    for (const { property, enumerable } of errorProperties)if (void 0 !== from[property] && null !== from[property]) Object.defineProperty(to, property, {
                        value: isErrorLike(from[property]) || Array.isArray(from[property]) ? continueDestroyCircular(from[property]) : from[property],
                        enumerable: forceEnumerable ? true : enumerable,
                        configurable: true,
                        writable: true
                    });
                }
                return to;
            };
            function serializeError(value, options = {}) {
                const { maxDepth = 1 / 0, useToJSON = true } = options;
                if ('object' == typeof value && null !== value) return destroyCircular({
                    from: value,
                    seen: [],
                    forceEnumerable: true,
                    maxDepth,
                    depth: 0,
                    useToJSON,
                    serialize: true
                });
                if ('function' == typeof value) return `[Function: ${value.name || 'anonymous'}]`;
                return value;
            }
            function deserializeError(value, options = {}) {
                const { maxDepth = 1 / 0 } = options;
                if (value instanceof Error) return value;
                if (isMinimumViableSerializedError(value)) return destroyCircular({
                    from: value,
                    seen: [],
                    to: newError(value.name),
                    maxDepth,
                    depth: 0,
                    serialize: false
                });
                return new NonError(value);
            }
            function isErrorLike(value) {
                return Boolean(value) && 'object' == typeof value && 'string' == typeof value.name && 'string' == typeof value.message && 'string' == typeof value.stack;
            }
            function isMinimumViableSerializedError(value) {
                return Boolean(value) && 'object' == typeof value && 'string' == typeof value.message && !Array.isArray(value);
            }
            var client = __webpack_require__("./node_modules/superagent/lib/client.js");
            var client_default = /*#__PURE__*/ __webpack_require__.n(client);
            var package_namespaceObject = {
                rE: "13.6.11"
            };
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
            var defined = __webpack_require__("./node_modules/defined/index.js");
            var defined_default = /*#__PURE__*/ __webpack_require__.n(defined);
            var LIBVERSION = '2.0.7', UA_MAX_LENGTH = 500, USER_AGENT = 'user-agent', EMPTY = '', UNKNOWN = '?', TYPEOF = {
                FUNCTION: 'function',
                OBJECT: 'object',
                STRING: 'string',
                UNDEFINED: 'undefined'
            }, BROWSER = 'browser', CPU = 'cpu', DEVICE = 'device', ENGINE = 'engine', OS = 'os', RESULT = 'result', NAME = 'name', TYPE = 'type', VENDOR = 'vendor', VERSION = 'version', ARCHITECTURE = 'architecture', MAJOR = 'major', MODEL = 'model', CONSOLE = 'console', MOBILE = 'mobile', TABLET = 'tablet', SMARTTV = 'smarttv', WEARABLE = 'wearable', XR = 'xr', EMBEDDED = 'embedded', INAPP = 'inapp', BRANDS = 'brands', FORMFACTORS = 'formFactors', FULLVERLIST = 'fullVersionList', PLATFORM = 'platform', PLATFORMVER = 'platformVersion', BITNESS = 'bitness', CH = 'sec-ch-ua', CH_FULL_VER_LIST = CH + '-full-version-list', CH_ARCH = CH + '-arch', CH_BITNESS = CH + '-' + BITNESS, CH_FORM_FACTORS = CH + '-form-factors', CH_MOBILE = CH + '-' + MOBILE, CH_MODEL = CH + '-' + MODEL, CH_PLATFORM = CH + '-' + PLATFORM, CH_PLATFORM_VER = CH_PLATFORM + '-version', CH_ALL_VALUES = [
                BRANDS,
                FULLVERLIST,
                MOBILE,
                MODEL,
                PLATFORM,
                PLATFORMVER,
                ARCHITECTURE,
                FORMFACTORS,
                BITNESS
            ], AMAZON = 'Amazon', APPLE = 'Apple', ASUS = 'ASUS', BLACKBERRY = 'BlackBerry', GOOGLE = 'Google', HUAWEI = 'Huawei', LENOVO = 'Lenovo', HONOR = 'Honor', LG = 'LG', MICROSOFT = 'Microsoft', MOTOROLA = 'Motorola', NVIDIA = 'Nvidia', ONEPLUS = 'OnePlus', OPPO = 'OPPO', SAMSUNG = 'Samsung', SHARP = 'Sharp', SONY = 'Sony', XIAOMI = 'Xiaomi', ZEBRA = 'Zebra', CHROME = 'Chrome', CHROMIUM = 'Chromium', CHROMECAST = 'Chromecast', EDGE = 'Edge', FIREFOX = 'Firefox', OPERA = 'Opera', FACEBOOK = 'Facebook', SOGOU = 'Sogou', PREFIX_MOBILE = 'Mobile ', SUFFIX_BROWSER = ' Browser', WINDOWS = 'Windows';
            var isWindow = typeof window !== TYPEOF.UNDEFINED, NAVIGATOR = isWindow && window.navigator ? window.navigator : void 0, NAVIGATOR_UADATA = NAVIGATOR && NAVIGATOR.userAgentData ? NAVIGATOR.userAgentData : void 0;
            var extend = function(defaultRgx, extensions) {
                var mergedRgx = {};
                var extraRgx = extensions;
                if (!isExtensions(extensions)) {
                    extraRgx = {};
                    for(var i in extensions)for(var j in extensions[i])extraRgx[j] = extensions[i][j].concat(extraRgx[j] ? extraRgx[j] : []);
                }
                for(var k in defaultRgx)mergedRgx[k] = extraRgx[k] && extraRgx[k].length % 2 === 0 ? extraRgx[k].concat(defaultRgx[k]) : defaultRgx[k];
                return mergedRgx;
            }, enumerize = function(arr) {
                var enums = {};
                for(var i = 0; i < arr.length; i++)enums[arr[i].toUpperCase()] = arr[i];
                return enums;
            }, has = function(str1, str2) {
                if (typeof str1 === TYPEOF.OBJECT && str1.length > 0) {
                    for(var i in str1)if (lowerize(str2) == lowerize(str1[i])) return true;
                    return false;
                }
                return isString(str1) ? lowerize(str2) == lowerize(str1) : false;
            }, isExtensions = function(obj, deep) {
                for(var prop in obj)return /^(browser|cpu|device|engine|os)$/.test(prop) || (deep ? isExtensions(obj[prop]) : false);
            }, isString = function(val) {
                return typeof val === TYPEOF.STRING;
            }, itemListToArray = function(header) {
                if (!header) return;
                var arr = [];
                var tokens = strip(/\\?\"/g, header).split(',');
                for(var i = 0; i < tokens.length; i++)if (tokens[i].indexOf(';') > -1) {
                    var token = ua_parser_trim(tokens[i]).split(';v=');
                    arr[i] = {
                        brand: token[0],
                        version: token[1]
                    };
                } else arr[i] = ua_parser_trim(tokens[i]);
                return arr;
            }, lowerize = function(str) {
                return isString(str) ? str.toLowerCase() : str;
            }, majorize = function(version) {
                return isString(version) ? strip(/[^\d\.]/g, version).split('.')[0] : void 0;
            }, setProps = function(arr) {
                for(var i in arr)if (arr.hasOwnProperty(i)) {
                    var propName = arr[i];
                    if (typeof propName == TYPEOF.OBJECT && 2 == propName.length) this[propName[0]] = propName[1];
                    else this[propName] = void 0;
                }
                return this;
            }, strip = function(pattern, str) {
                return isString(str) ? str.replace(pattern, EMPTY) : str;
            }, stripQuotes = function(str) {
                return strip(/\\?\"/g, str);
            }, ua_parser_trim = function(str, len) {
                str = strip(/^\s\s*/, String(str));
                return typeof len === TYPEOF.UNDEFINED ? str : str.substring(0, len);
            };
            var rgxMapper = function(ua, arrays) {
                if (!ua || !arrays) return;
                var i = 0, j, k, p, q, matches, match;
                while(i < arrays.length && !matches){
                    var regex = arrays[i], props = arrays[i + 1];
                    j = k = 0;
                    while(j < regex.length && !matches){
                        if (!regex[j]) break;
                        matches = regex[j++].exec(ua);
                        if (!!matches) for(p = 0; p < props.length; p++){
                            match = matches[++k];
                            q = props[p];
                            if (typeof q === TYPEOF.OBJECT && q.length > 0) {
                                if (2 === q.length) if (typeof q[1] == TYPEOF.FUNCTION) this[q[0]] = q[1].call(this, match);
                                else this[q[0]] = q[1];
                                else if (q.length >= 3) if (typeof q[1] !== TYPEOF.FUNCTION || q[1].exec && q[1].test) {
                                    if (3 == q.length) this[q[0]] = match ? match.replace(q[1], q[2]) : void 0;
                                    else if (4 == q.length) this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : void 0;
                                    else if (q.length > 4) this[q[0]] = match ? q[3].apply(this, [
                                        match.replace(q[1], q[2])
                                    ].concat(q.slice(4))) : void 0;
                                } else if (q.length > 3) this[q[0]] = match ? q[1].apply(this, q.slice(2)) : void 0;
                                else this[q[0]] = match ? q[1].call(this, match, q[2]) : void 0;
                            } else this[q] = match ? match : void 0;
                        }
                    }
                    i += 2;
                }
            }, strMapper = function(str, map) {
                for(var i in map)if (typeof map[i] === TYPEOF.OBJECT && map[i].length > 0) {
                    for(var j = 0; j < map[i].length; j++)if (has(map[i][j], str)) return i === UNKNOWN ? void 0 : i;
                } else if (has(map[i], str)) return i === UNKNOWN ? void 0 : i;
                return map.hasOwnProperty('*') ? map['*'] : str;
            };
            var windowsVersionMap = {
                ME: '4.90',
                'NT 3.51': '3.51',
                'NT 4.0': '4.0',
                2000: [
                    '5.0',
                    '5.01'
                ],
                XP: [
                    '5.1',
                    '5.2'
                ],
                Vista: '6.0',
                7: '6.1',
                8: '6.2',
                '8.1': '6.3',
                10: [
                    '6.4',
                    '10.0'
                ],
                NT: ''
            }, formFactorsMap = {
                embedded: 'Automotive',
                mobile: 'Mobile',
                tablet: [
                    'Tablet',
                    'EInk'
                ],
                smarttv: 'TV',
                wearable: 'Watch',
                xr: [
                    'VR',
                    'XR'
                ],
                '?': [
                    'Desktop',
                    'Unknown'
                ],
                '*': void 0
            }, browserHintsMap = {
                Chrome: 'Google Chrome',
                Edge: 'Microsoft Edge',
                'Edge WebView2': 'Microsoft Edge WebView2',
                'Chrome WebView': 'Android WebView',
                'Chrome Headless': 'HeadlessChrome',
                'Huawei Browser': 'HuaweiBrowser',
                'MIUI Browser': 'Miui Browser',
                'Opera Mobi': 'OperaMobile',
                Yandex: 'YaBrowser'
            };
            var defaultRegexes = {
                browser: [
                    [
                        /\b(?:crmo|crios)\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            PREFIX_MOBILE + 'Chrome'
                        ]
                    ],
                    [
                        /webview.+edge\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            EDGE + ' WebView'
                        ]
                    ],
                    [
                        /edg(?:e|ios|a)?\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'Edge'
                        ]
                    ],
                    [
                        /(opera mini)\/([-\w\.]+)/i,
                        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /opios[\/ ]+([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            OPERA + ' Mini'
                        ]
                    ],
                    [
                        /\bop(?:rg)?x\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            OPERA + ' GX'
                        ]
                    ],
                    [
                        /\bopr\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            OPERA
                        ]
                    ],
                    [
                        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'Baidu'
                        ]
                    ],
                    [
                        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'Maxthon'
                        ]
                    ],
                    [
                        /(kindle)\/([\w\.]+)/i,
                        /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                        /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                        /(?:ms|\()(ie) ([\w\.]+)/i,
                        /(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser|palemoon)\/([-\w\.]+)/i,
                        /(heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
                        /(qwant)(?:ios|mobile)\/([\d\.]+)/i,
                        /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /quark(?:pc)?\/([-\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'Quark'
                        ]
                    ],
                    [
                        /\bddg\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'DuckDuckGo'
                        ]
                    ],
                    [
                        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'UCBrowser'
                        ]
                    ],
                    [
                        /microm.+\bqbcore\/([\w\.]+)/i,
                        /\bqbcore\/([\w\.]+).+microm/i,
                        /micromessenger\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'WeChat'
                        ]
                    ],
                    [
                        /konqueror\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'Konqueror'
                        ]
                    ],
                    [
                        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'IE'
                        ]
                    ],
                    [
                        /ya(?:search)?browser\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'Yandex'
                        ]
                    ],
                    [
                        /slbrowser\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'Smart ' + LENOVO + SUFFIX_BROWSER
                        ]
                    ],
                    [
                        /(avast|avg)\/([\w\.]+)/i
                    ],
                    [
                        [
                            NAME,
                            /(.+)/,
                            '$1 Secure' + SUFFIX_BROWSER
                        ],
                        VERSION
                    ],
                    [
                        /\bfocus\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            FIREFOX + ' Focus'
                        ]
                    ],
                    [
                        /\bopt\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            OPERA + ' Touch'
                        ]
                    ],
                    [
                        /coc_coc\w+\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'Coc Coc'
                        ]
                    ],
                    [
                        /dolfin\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'Dolphin'
                        ]
                    ],
                    [
                        /coast\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            OPERA + ' Coast'
                        ]
                    ],
                    [
                        /miuibrowser\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'MIUI' + SUFFIX_BROWSER
                        ]
                    ],
                    [
                        /fxios\/([\w\.-]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            PREFIX_MOBILE + FIREFOX
                        ]
                    ],
                    [
                        /\bqihoobrowser\/?([\w\.]*)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            '360'
                        ]
                    ],
                    [
                        /\b(qq)\/([\w\.]+)/i
                    ],
                    [
                        [
                            NAME,
                            /(.+)/,
                            '$1Browser'
                        ],
                        VERSION
                    ],
                    [
                        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
                    ],
                    [
                        [
                            NAME,
                            /(.+)/,
                            '$1' + SUFFIX_BROWSER
                        ],
                        VERSION
                    ],
                    [
                        /samsungbrowser\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            SAMSUNG + ' Internet'
                        ]
                    ],
                    [
                        /metasr[\/ ]?([\d\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            SOGOU + ' Explorer'
                        ]
                    ],
                    [
                        /(sogou)mo\w+\/([\d\.]+)/i
                    ],
                    [
                        [
                            NAME,
                            SOGOU + ' Mobile'
                        ],
                        VERSION
                    ],
                    [
                        /(electron)\/([\w\.]+) safari/i,
                        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /(lbbrowser|rekonq|steam(?= (clie|tenf|gameo)))/i
                    ],
                    [
                        NAME
                    ],
                    [
                        /ome\/([\w\.]+) \w* ?(iron) saf/i,
                        /ome\/([\w\.]+).+qihu (360)[es]e/i
                    ],
                    [
                        VERSION,
                        NAME
                    ],
                    [
                        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
                    ],
                    [
                        [
                            NAME,
                            FACEBOOK
                        ],
                        VERSION,
                        [
                            TYPE,
                            INAPP
                        ]
                    ],
                    [
                        /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                        /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                        /(daum)apps[\/ ]([\w\.]+)/i,
                        /safari (line)\/([\w\.]+)/i,
                        /\b(line)\/([\w\.]+)\/iab/i,
                        /(alipay)client\/([\w\.]+)/i,
                        /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                        /(bing)(?:web|sapphire)\/([\w\.]+)/i,
                        /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i
                    ],
                    [
                        NAME,
                        VERSION,
                        [
                            TYPE,
                            INAPP
                        ]
                    ],
                    [
                        /\bgsa\/([\w\.]+) .*safari\//i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'GSA'
                        ],
                        [
                            TYPE,
                            INAPP
                        ]
                    ],
                    [
                        /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'TikTok'
                        ],
                        [
                            TYPE,
                            INAPP
                        ]
                    ],
                    [
                        /\[(linkedin)app\]/i
                    ],
                    [
                        NAME,
                        [
                            TYPE,
                            INAPP
                        ]
                    ],
                    [
                        /(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i
                    ],
                    [
                        [
                            NAME,
                            /(.+)/,
                            'Zalo'
                        ],
                        VERSION,
                        [
                            TYPE,
                            INAPP
                        ]
                    ],
                    [
                        /(chromium)[\/ ]([-\w\.]+)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /headlesschrome(?:\/([\w\.]+)| )/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            CHROME + ' Headless'
                        ]
                    ],
                    [
                        /wv\).+chrome\/([\w\.]+).+edgw\//i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            EDGE + ' WebView2'
                        ]
                    ],
                    [
                        / wv\).+(chrome)\/([\w\.]+)/i
                    ],
                    [
                        [
                            NAME,
                            CHROME + ' WebView'
                        ],
                        VERSION
                    ],
                    [
                        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'Android' + SUFFIX_BROWSER
                        ]
                    ],
                    [
                        /chrome\/([\w\.]+) mobile/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            PREFIX_MOBILE + 'Chrome'
                        ]
                    ],
                    [
                        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            PREFIX_MOBILE + 'Safari'
                        ]
                    ],
                    [
                        /iphone .*mobile(?:\/\w+ | ?)safari/i
                    ],
                    [
                        [
                            NAME,
                            PREFIX_MOBILE + 'Safari'
                        ]
                    ],
                    [
                        /version\/([\w\.\,]+) .*(safari)/i
                    ],
                    [
                        VERSION,
                        NAME
                    ],
                    [
                        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
                    ],
                    [
                        NAME,
                        [
                            VERSION,
                            '1'
                        ]
                    ],
                    [
                        /(webkit|khtml)\/([\w\.]+)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
                    ],
                    [
                        [
                            NAME,
                            PREFIX_MOBILE + FIREFOX
                        ],
                        VERSION
                    ],
                    [
                        /(navigator|netscape\d?)\/([-\w\.]+)/i
                    ],
                    [
                        [
                            NAME,
                            'Netscape'
                        ],
                        VERSION
                    ],
                    [
                        /(wolvic|librewolf)\/([\w\.]+)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /mobile vr; rv:([\w\.]+)\).+firefox/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            FIREFOX + ' Reality'
                        ]
                    ],
                    [
                        /ekiohf.+(flow)\/([\w\.]+)/i,
                        /(swiftfox)/i,
                        /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                        /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,
                        /(firefox)\/([\w\.]+)/i,
                        /(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,
                        /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                        /\b(links) \(([\w\.]+)/i
                    ],
                    [
                        NAME,
                        [
                            VERSION,
                            /_/g,
                            '.'
                        ]
                    ],
                    [
                        /(cobalt)\/([\w\.]+)/i
                    ],
                    [
                        NAME,
                        [
                            VERSION,
                            /[^\d\.]+./,
                            EMPTY
                        ]
                    ]
                ],
                cpu: [
                    [
                        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
                    ],
                    [
                        [
                            ARCHITECTURE,
                            'amd64'
                        ]
                    ],
                    [
                        /(ia32(?=;))/i,
                        /\b((i[346]|x)86)(pc)?\b/i
                    ],
                    [
                        [
                            ARCHITECTURE,
                            'ia32'
                        ]
                    ],
                    [
                        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
                    ],
                    [
                        [
                            ARCHITECTURE,
                            'arm64'
                        ]
                    ],
                    [
                        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
                    ],
                    [
                        [
                            ARCHITECTURE,
                            'armhf'
                        ]
                    ],
                    [
                        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
                    ],
                    [
                        [
                            ARCHITECTURE,
                            'arm'
                        ]
                    ],
                    [
                        / sun4\w[;\)]/i
                    ],
                    [
                        [
                            ARCHITECTURE,
                            'sparc'
                        ]
                    ],
                    [
                        /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
                        /((ppc|powerpc)(64)?)( mac|;|\))/i,
                        /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i
                    ],
                    [
                        [
                            ARCHITECTURE,
                            /ower/,
                            EMPTY,
                            lowerize
                        ]
                    ],
                    [
                        /mc680.0/i
                    ],
                    [
                        [
                            ARCHITECTURE,
                            '68k'
                        ]
                    ],
                    [
                        /winnt.+\[axp/i
                    ],
                    [
                        [
                            ARCHITECTURE,
                            'alpha'
                        ]
                    ]
                ],
                device: [
                    [
                        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            SAMSUNG
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                        /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
                        /sec-(sgh\w+)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            SAMSUNG
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            APPLE
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
                        /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            APPLE
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /(macintosh);/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            APPLE
                        ]
                    ],
                    [
                        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            SHARP
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            HONOR
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /honor([-\w ]+)[;\)]/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            HONOR
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            HUAWEI
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /(?:huawei) ?([-\w ]+)[;\)]/i,
                        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            HUAWEI
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
                        /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
                    ],
                    [
                        [
                            MODEL,
                            /_/g,
                            ' '
                        ],
                        [
                            VENDOR,
                            XIAOMI
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /\b; (\w+) build\/hm\1/i,
                        /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                        /oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
                        /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
                        / ([\w ]+) miui\/v?\d/i
                    ],
                    [
                        [
                            MODEL,
                            /_/g,
                            ' '
                        ],
                        [
                            VENDOR,
                            XIAOMI
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
                        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            ONEPLUS
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /; (\w+) bui.+ oppo/i,
                        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            OPPO
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /\b(opd2(\d{3}a?))(?: bui|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            strMapper,
                            {
                                OnePlus: [
                                    '203',
                                    '304',
                                    '403',
                                    '404',
                                    '413',
                                    '415'
                                ],
                                '*': OPPO
                            }
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'BLU'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /; vivo (\w+)(?: bui|\))/i,
                        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Vivo'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Realme'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
                        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            LENOVO
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            LENOVO
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                        /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
                        /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            MOTOROLA
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            MOTOROLA
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            LG
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
                        /\blg-?([\d\w]+) bui/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            LG
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /(nokia) (t[12][01])/i
                    ],
                    [
                        VENDOR,
                        MODEL,
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
                        /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i
                    ],
                    [
                        [
                            MODEL,
                            /_/g,
                            ' '
                        ],
                        [
                            TYPE,
                            MOBILE
                        ],
                        [
                            VENDOR,
                            'Nokia'
                        ]
                    ],
                    [
                        /(pixel (c|tablet))\b/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            GOOGLE
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            GOOGLE
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /(google) (pixelbook( go)?)/i
                    ],
                    [
                        VENDOR,
                        MODEL
                    ],
                    [
                        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            SONY
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /sony tablet [ps]/i,
                        /\b(?:sony)?sgp\w+(?: bui|\))/i
                    ],
                    [
                        [
                            MODEL,
                            'Xperia Tablet'
                        ],
                        [
                            VENDOR,
                            SONY
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /(alexa)webm/i,
                        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                        /(kf[a-z]+)( bui|\)).+silk\//i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            AMAZON
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
                    ],
                    [
                        [
                            MODEL,
                            /(.+)/g,
                            'Fire Phone $1'
                        ],
                        [
                            VENDOR,
                            AMAZON
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /(playbook);[-\w\),; ]+(rim)/i
                    ],
                    [
                        MODEL,
                        VENDOR,
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /\b((?:bb[a-f]|st[hv])100-\d)/i,
                        /(?:blackberry|\(bb10;) (\w+)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            BLACKBERRY
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            ASUS
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            ASUS
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /(nexus 9)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'HTC'
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                    ],
                    [
                        VENDOR,
                        [
                            MODEL,
                            /_/g,
                            ' '
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /tcl (xess p17aa)/i,
                        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'TCL'
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'TCL'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /(itel) ((\w+))/i
                    ],
                    [
                        [
                            VENDOR,
                            lowerize
                        ],
                        MODEL,
                        [
                            TYPE,
                            strMapper,
                            {
                                tablet: [
                                    'p10001l',
                                    'w7001'
                                ],
                                '*': 'mobile'
                            }
                        ]
                    ],
                    [
                        /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Acer'
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /droid.+; (m[1-5] note) bui/i,
                        /\bmz-([-\w]{2,})/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Meizu'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Ulefone'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /; (energy ?\w+)(?: bui|\))/i,
                        /; energizer ([\w ]+)(?: bui|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Energizer'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /; cat (b35);/i,
                        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Cat'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Smartfren'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Nothing'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
                        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Archos'
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /archos ([\w ]+)( b|\))/i,
                        /; (ac[3-6]\d\w{2,8})( b|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Archos'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /; (n159v)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'HMD'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /(imo) (tab \w+)/i,
                        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
                    ],
                    [
                        VENDOR,
                        MODEL,
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                        /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
                        /(hp) ([\w ]+\w)/i,
                        /(microsoft); (lumia[\w ]+)/i,
                        /(oppo) ?([\w ]+) bui/i,
                        /(hisense) ([ehv][\w ]+)\)/i,
                        /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i
                    ],
                    [
                        VENDOR,
                        MODEL,
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /(kobo)\s(ereader|touch)/i,
                        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                        /(kindle)\/([\w\.]+)/i
                    ],
                    [
                        VENDOR,
                        MODEL,
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /(surface duo)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            MICROSOFT
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /droid [\d\.]+; (fp\du?)(?: b|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Fairphone'
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            NVIDIA
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /(sprint) (\w+)/i
                    ],
                    [
                        VENDOR,
                        MODEL,
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /(kin\.[onetw]{3})/i
                    ],
                    [
                        [
                            MODEL,
                            /\./g,
                            ' '
                        ],
                        [
                            VENDOR,
                            MICROSOFT
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            ZEBRA
                        ],
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            ZEBRA
                        ],
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /(philips)[\w ]+tv/i,
                        /smart-tv.+(samsung)/i
                    ],
                    [
                        VENDOR,
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /hbbtv.+maple;(\d+)/i
                    ],
                    [
                        [
                            MODEL,
                            /^/,
                            'SmartTV'
                        ],
                        [
                            VENDOR,
                            SAMSUNG
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
                        /tcast.+(lg)e?. ([-\w]+)/i
                    ],
                    [
                        VENDOR,
                        MODEL,
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
                    ],
                    [
                        [
                            VENDOR,
                            LG
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /(apple) ?tv/i
                    ],
                    [
                        VENDOR,
                        [
                            MODEL,
                            APPLE + ' TV'
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /crkey.*devicetype\/chromecast/i
                    ],
                    [
                        [
                            MODEL,
                            CHROMECAST + ' Third Generation'
                        ],
                        [
                            VENDOR,
                            GOOGLE
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /crkey.*devicetype\/([^/]*)/i
                    ],
                    [
                        [
                            MODEL,
                            /^/,
                            'Chromecast '
                        ],
                        [
                            VENDOR,
                            GOOGLE
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /fuchsia.*crkey/i
                    ],
                    [
                        [
                            MODEL,
                            CHROMECAST + ' Nest Hub'
                        ],
                        [
                            VENDOR,
                            GOOGLE
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /crkey/i
                    ],
                    [
                        [
                            MODEL,
                            CHROMECAST
                        ],
                        [
                            VENDOR,
                            GOOGLE
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /(portaltv)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            FACEBOOK
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /droid.+aft(\w+)( bui|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            AMAZON
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /(shield \w+ tv)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            NVIDIA
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /\(dtv[\);].+(aquos)/i,
                        /(aquos-tv[\w ]+)\)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            SHARP
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /(bravia[\w ]+)( bui|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            SONY
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /(mi(tv|box)-?\w+) bui/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            XIAOMI
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /Hbbtv.*(technisat) (.*);/i
                    ],
                    [
                        VENDOR,
                        MODEL,
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
                    ],
                    [
                        [
                            VENDOR,
                            /.+\/(\w+)/,
                            '$1',
                            strMapper,
                            {
                                LG: 'lge'
                            }
                        ],
                        [
                            MODEL,
                            ua_parser_trim
                        ],
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /(playstation \w+)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            SONY
                        ],
                        [
                            TYPE,
                            CONSOLE
                        ]
                    ],
                    [
                        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            MICROSOFT
                        ],
                        [
                            TYPE,
                            CONSOLE
                        ]
                    ],
                    [
                        /(ouya)/i,
                        /(nintendo) (\w+)/i,
                        /(retroid) (pocket ([^\)]+))/i,
                        /(valve).+(steam deck)/i,
                        /droid.+; ((shield|rgcube|gr0006))( bui|\))/i
                    ],
                    [
                        [
                            VENDOR,
                            strMapper,
                            {
                                Nvidia: 'Shield',
                                Anbernic: 'RGCUBE',
                                Logitech: 'GR0006'
                            }
                        ],
                        MODEL,
                        [
                            TYPE,
                            CONSOLE
                        ]
                    ],
                    [
                        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            SAMSUNG
                        ],
                        [
                            TYPE,
                            WEARABLE
                        ]
                    ],
                    [
                        /((pebble))app/i,
                        /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i
                    ],
                    [
                        VENDOR,
                        MODEL,
                        [
                            TYPE,
                            WEARABLE
                        ]
                    ],
                    [
                        /(ow(?:19|20)?we?[1-3]{1,3})/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            OPPO
                        ],
                        [
                            TYPE,
                            WEARABLE
                        ]
                    ],
                    [
                        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            APPLE
                        ],
                        [
                            TYPE,
                            WEARABLE
                        ]
                    ],
                    [
                        /(opwwe\d{3})/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            ONEPLUS
                        ],
                        [
                            TYPE,
                            WEARABLE
                        ]
                    ],
                    [
                        /(moto 360)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            MOTOROLA
                        ],
                        [
                            TYPE,
                            WEARABLE
                        ]
                    ],
                    [
                        /(smartwatch 3)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            SONY
                        ],
                        [
                            TYPE,
                            WEARABLE
                        ]
                    ],
                    [
                        /(g watch r)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            LG
                        ],
                        [
                            TYPE,
                            WEARABLE
                        ]
                    ],
                    [
                        /droid.+; (wt63?0{2,3})\)/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            ZEBRA
                        ],
                        [
                            TYPE,
                            WEARABLE
                        ]
                    ],
                    [
                        /droid.+; (glass) \d/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            GOOGLE
                        ],
                        [
                            TYPE,
                            XR
                        ]
                    ],
                    [
                        /(pico) ([\w ]+) os\d/i
                    ],
                    [
                        VENDOR,
                        MODEL,
                        [
                            TYPE,
                            XR
                        ]
                    ],
                    [
                        /(quest( \d| pro)?s?).+vr/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            FACEBOOK
                        ],
                        [
                            TYPE,
                            XR
                        ]
                    ],
                    [
                        /mobile vr; rv.+firefox/i
                    ],
                    [
                        [
                            TYPE,
                            XR
                        ]
                    ],
                    [
                        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
                    ],
                    [
                        VENDOR,
                        [
                            TYPE,
                            EMBEDDED
                        ]
                    ],
                    [
                        /(aeobc)\b/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            AMAZON
                        ],
                        [
                            TYPE,
                            EMBEDDED
                        ]
                    ],
                    [
                        /(homepod).+mac os/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            APPLE
                        ],
                        [
                            TYPE,
                            EMBEDDED
                        ]
                    ],
                    [
                        /windows iot/i
                    ],
                    [
                        [
                            TYPE,
                            EMBEDDED
                        ]
                    ],
                    [
                        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
                    ],
                    [
                        MODEL,
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
                    ],
                    [
                        [
                            TYPE,
                            SMARTTV
                        ]
                    ],
                    [
                        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
                    ],
                    [
                        MODEL,
                        [
                            TYPE,
                            strMapper,
                            {
                                mobile: 'Mobile',
                                xr: 'VR',
                                '*': TABLET
                            }
                        ]
                    ],
                    [
                        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
                    ],
                    [
                        [
                            TYPE,
                            TABLET
                        ]
                    ],
                    [
                        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
                    ],
                    [
                        [
                            TYPE,
                            MOBILE
                        ]
                    ],
                    [
                        /droid .+?; ([\w\. -]+)( bui|\))/i
                    ],
                    [
                        MODEL,
                        [
                            VENDOR,
                            'Generic'
                        ]
                    ]
                ],
                engine: [
                    [
                        /windows.+ edge\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            EDGE + 'HTML'
                        ]
                    ],
                    [
                        /(arkweb)\/([\w\.]+)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'Blink'
                        ]
                    ],
                    [
                        /(presto)\/([\w\.]+)/i,
                        /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                        /ekioh(flow)\/([\w\.]+)/i,
                        /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                        /(icab)[\/ ]([23]\.[\d\.]+)/i,
                        /\b(libweb)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /ladybird\//i
                    ],
                    [
                        [
                            NAME,
                            'LibWeb'
                        ]
                    ],
                    [
                        /rv\:([\w\.]{1,9})\b.+(gecko)/i
                    ],
                    [
                        VERSION,
                        NAME
                    ]
                ],
                os: [
                    [
                        /(windows nt) (6\.[23]); arm/i
                    ],
                    [
                        [
                            NAME,
                            /N/,
                            'R'
                        ],
                        [
                            VERSION,
                            strMapper,
                            windowsVersionMap
                        ]
                    ],
                    [
                        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
                        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
                        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
                    ],
                    [
                        [
                            VERSION,
                            /(;|\))/g,
                            '',
                            strMapper,
                            windowsVersionMap
                        ],
                        [
                            NAME,
                            WINDOWS
                        ]
                    ],
                    [
                        /(windows ce)\/?([\d\.]*)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
                        /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
                        /\btvos ?([\w\.]+)/i,
                        /cfnetwork\/.+darwin/i
                    ],
                    [
                        [
                            VERSION,
                            /_/g,
                            '.'
                        ],
                        [
                            NAME,
                            'iOS'
                        ]
                    ],
                    [
                        /(mac os x) ?([\w\. ]*)/i,
                        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
                    ],
                    [
                        [
                            NAME,
                            'macOS'
                        ],
                        [
                            VERSION,
                            /_/g,
                            '.'
                        ]
                    ],
                    [
                        /android ([\d\.]+).*crkey/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            CHROMECAST + ' Android'
                        ]
                    ],
                    [
                        /fuchsia.*crkey\/([\d\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            CHROMECAST + ' Fuchsia'
                        ]
                    ],
                    [
                        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            CHROMECAST + ' SmartSpeaker'
                        ]
                    ],
                    [
                        /linux.*crkey\/([\d\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            CHROMECAST + ' Linux'
                        ]
                    ],
                    [
                        /crkey\/([\d\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            CHROMECAST
                        ]
                    ],
                    [
                        /droid ([\w\.]+)\b.+(android[- ]x86)/i
                    ],
                    [
                        VERSION,
                        NAME
                    ],
                    [
                        /(ubuntu) ([\w\.]+) like android/i
                    ],
                    [
                        [
                            NAME,
                            /(.+)/,
                            '$1 Touch'
                        ],
                        VERSION
                    ],
                    [
                        /(harmonyos)[\/ ]?([\d\.]*)/i,
                        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /\(bb(10);/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            BLACKBERRY
                        ]
                    ],
                    [
                        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'Symbian'
                        ]
                    ],
                    [
                        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            FIREFOX + ' OS'
                        ]
                    ],
                    [
                        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
                        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'webOS'
                        ]
                    ],
                    [
                        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
                    ],
                    [
                        [
                            VERSION,
                            strMapper,
                            {
                                25: '120',
                                24: '108',
                                23: '94',
                                22: '87',
                                6: '79',
                                5: '68',
                                4: '53',
                                3: '38',
                                2: '538',
                                1: '537',
                                '*': 'TV'
                            }
                        ],
                        [
                            NAME,
                            'webOS'
                        ]
                    ],
                    [
                        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
                    ],
                    [
                        VERSION,
                        [
                            NAME,
                            'watchOS'
                        ]
                    ],
                    [
                        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
                    ],
                    [
                        [
                            NAME,
                            "Chrome OS"
                        ],
                        VERSION
                    ],
                    [
                        /panasonic;(viera)/i,
                        /(netrange)mmh/i,
                        /(nettv)\/(\d+\.[\w\.]+)/i,
                        /(nintendo|playstation) (\w+)/i,
                        /(xbox); +xbox ([^\);]+)/i,
                        /(pico) .+os([\w\.]+)/i,
                        /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                        /linux.+(mint)[\/\(\) ]?([\w\.]*)/i,
                        /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,
                        /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                        /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                        /\b(aix)[; ]([1-9\.]{0,4})/i,
                        /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,
                        /(gnu) ?([\w\.]*)/i,
                        /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                        /(haiku) ?(r\d)?/i
                    ],
                    [
                        NAME,
                        VERSION
                    ],
                    [
                        /(sunos) ?([\d\.]*)/i
                    ],
                    [
                        [
                            NAME,
                            'Solaris'
                        ],
                        VERSION
                    ],
                    [
                        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
                        /(unix) ?([\w\.]*)/i
                    ],
                    [
                        NAME,
                        VERSION
                    ]
                ]
            };
            var defaultProps = function() {
                var props = {
                    init: {},
                    isIgnore: {},
                    isIgnoreRgx: {},
                    toString: {}
                };
                setProps.call(props.init, [
                    [
                        BROWSER,
                        [
                            NAME,
                            VERSION,
                            MAJOR,
                            TYPE
                        ]
                    ],
                    [
                        CPU,
                        [
                            ARCHITECTURE
                        ]
                    ],
                    [
                        DEVICE,
                        [
                            TYPE,
                            MODEL,
                            VENDOR
                        ]
                    ],
                    [
                        ENGINE,
                        [
                            NAME,
                            VERSION
                        ]
                    ],
                    [
                        OS,
                        [
                            NAME,
                            VERSION
                        ]
                    ]
                ]);
                setProps.call(props.isIgnore, [
                    [
                        BROWSER,
                        [
                            VERSION,
                            MAJOR
                        ]
                    ],
                    [
                        ENGINE,
                        [
                            VERSION
                        ]
                    ],
                    [
                        OS,
                        [
                            VERSION
                        ]
                    ]
                ]);
                setProps.call(props.isIgnoreRgx, [
                    [
                        BROWSER,
                        / ?browser$/i
                    ],
                    [
                        OS,
                        / ?os$/i
                    ]
                ]);
                setProps.call(props.toString, [
                    [
                        BROWSER,
                        [
                            NAME,
                            VERSION
                        ]
                    ],
                    [
                        CPU,
                        [
                            ARCHITECTURE
                        ]
                    ],
                    [
                        DEVICE,
                        [
                            VENDOR,
                            MODEL
                        ]
                    ],
                    [
                        ENGINE,
                        [
                            NAME,
                            VERSION
                        ]
                    ],
                    [
                        OS,
                        [
                            NAME,
                            VERSION
                        ]
                    ]
                ]);
                return props;
            }();
            var createIData = function(item, itemType) {
                var init_props = defaultProps.init[itemType], is_ignoreProps = defaultProps.isIgnore[itemType] || 0, is_ignoreRgx = defaultProps.isIgnoreRgx[itemType] || 0, toString_props = defaultProps.toString[itemType] || 0;
                function IData() {
                    setProps.call(this, init_props);
                }
                IData.prototype.getItem = function() {
                    return item;
                };
                IData.prototype.withClientHints = function() {
                    if (!NAVIGATOR_UADATA) return item.parseCH().get();
                    return NAVIGATOR_UADATA.getHighEntropyValues(CH_ALL_VALUES).then(function(res) {
                        return item.setCH(new UACHData(res, false)).parseCH().get();
                    });
                };
                IData.prototype.withFeatureCheck = function() {
                    return item.detectFeature().get();
                };
                if (itemType != RESULT) {
                    IData.prototype.is = function(strToCheck) {
                        var is = false;
                        for(var i in this)if (this.hasOwnProperty(i) && !has(is_ignoreProps, i) && lowerize(is_ignoreRgx ? strip(is_ignoreRgx, this[i]) : this[i]) == lowerize(is_ignoreRgx ? strip(is_ignoreRgx, strToCheck) : strToCheck)) {
                            is = true;
                            if (strToCheck != TYPEOF.UNDEFINED) break;
                        } else if (strToCheck == TYPEOF.UNDEFINED && is) {
                            is = !is;
                            break;
                        }
                        return is;
                    };
                    IData.prototype.toString = function() {
                        var str = EMPTY;
                        for(var i in toString_props)if (typeof this[toString_props[i]] !== TYPEOF.UNDEFINED) str += (str ? ' ' : EMPTY) + this[toString_props[i]];
                        return str || TYPEOF.UNDEFINED;
                    };
                }
                IData.prototype.then = function(cb) {
                    var that = this;
                    var IDataResolve = function() {
                        for(var prop in that)if (that.hasOwnProperty(prop)) this[prop] = that[prop];
                    };
                    IDataResolve.prototype = {
                        is: IData.prototype.is,
                        toString: IData.prototype.toString,
                        withClientHints: IData.prototype.withClientHints,
                        withFeatureCheck: IData.prototype.withFeatureCheck
                    };
                    var resolveData = new IDataResolve();
                    cb(resolveData);
                    return resolveData;
                };
                return new IData();
            };
            function UACHData(uach, isHttpUACH) {
                uach = uach || {};
                setProps.call(this, CH_ALL_VALUES);
                if (isHttpUACH) setProps.call(this, [
                    [
                        BRANDS,
                        itemListToArray(uach[CH])
                    ],
                    [
                        FULLVERLIST,
                        itemListToArray(uach[CH_FULL_VER_LIST])
                    ],
                    [
                        MOBILE,
                        /\?1/.test(uach[CH_MOBILE])
                    ],
                    [
                        MODEL,
                        stripQuotes(uach[CH_MODEL])
                    ],
                    [
                        PLATFORM,
                        stripQuotes(uach[CH_PLATFORM])
                    ],
                    [
                        PLATFORMVER,
                        stripQuotes(uach[CH_PLATFORM_VER])
                    ],
                    [
                        ARCHITECTURE,
                        stripQuotes(uach[CH_ARCH])
                    ],
                    [
                        FORMFACTORS,
                        itemListToArray(uach[CH_FORM_FACTORS])
                    ],
                    [
                        BITNESS,
                        stripQuotes(uach[CH_BITNESS])
                    ]
                ]);
                else for(var prop in uach)if (this.hasOwnProperty(prop) && typeof uach[prop] !== TYPEOF.UNDEFINED) this[prop] = uach[prop];
            }
            function UAItem(itemType, ua, rgxMap, uaCH) {
                setProps.call(this, [
                    [
                        'itemType',
                        itemType
                    ],
                    [
                        'ua',
                        ua
                    ],
                    [
                        'uaCH',
                        uaCH
                    ],
                    [
                        'rgxMap',
                        rgxMap
                    ],
                    [
                        'data',
                        createIData(this, itemType)
                    ]
                ]);
                return this;
            }
            UAItem.prototype.get = function(prop) {
                if (!prop) return this.data;
                return this.data.hasOwnProperty(prop) ? this.data[prop] : void 0;
            };
            UAItem.prototype.set = function(prop, val) {
                this.data[prop] = val;
                return this;
            };
            UAItem.prototype.setCH = function(ch) {
                this.uaCH = ch;
                return this;
            };
            UAItem.prototype.detectFeature = function() {
                if (NAVIGATOR && NAVIGATOR.userAgent == this.ua) switch(this.itemType){
                    case BROWSER:
                        if (NAVIGATOR.brave && typeof NAVIGATOR.brave.isBrave == TYPEOF.FUNCTION) this.set(NAME, 'Brave');
                        break;
                    case DEVICE:
                        if (!this.get(TYPE) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[MOBILE]) this.set(TYPE, MOBILE);
                        if ('Macintosh' == this.get(MODEL) && NAVIGATOR && typeof NAVIGATOR.standalone !== TYPEOF.UNDEFINED && NAVIGATOR.maxTouchPoints && NAVIGATOR.maxTouchPoints > 2) this.set(MODEL, 'iPad').set(TYPE, TABLET);
                        break;
                    case OS:
                        if (!this.get(NAME) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[PLATFORM]) this.set(NAME, NAVIGATOR_UADATA[PLATFORM]);
                        break;
                    case RESULT:
                        var data = this.data;
                        var detect = function(itemType) {
                            return data[itemType].getItem().detectFeature().get();
                        };
                        this.set(BROWSER, detect(BROWSER)).set(CPU, detect(CPU)).set(DEVICE, detect(DEVICE)).set(ENGINE, detect(ENGINE)).set(OS, detect(OS));
                }
                return this;
            };
            UAItem.prototype.parseUA = function() {
                if (this.itemType != RESULT) rgxMapper.call(this.data, this.ua, this.rgxMap);
                switch(this.itemType){
                    case BROWSER:
                        this.set(MAJOR, majorize(this.get(VERSION)));
                        break;
                    case OS:
                        if ('iOS' == this.get(NAME) && '18.6' == this.get(VERSION)) {
                            var realVersion = /\) Version\/([\d\.]+)/.exec(this.ua);
                            if (realVersion && parseInt(realVersion[1].substring(0, 2), 10) >= 26) this.set(VERSION, realVersion[1]);
                        }
                        break;
                }
                return this;
            };
            UAItem.prototype.parseCH = function() {
                var uaCH = this.uaCH, rgxMap = this.rgxMap;
                switch(this.itemType){
                    case BROWSER:
                    case ENGINE:
                        var brands = uaCH[FULLVERLIST] || uaCH[BRANDS], prevName;
                        if (brands) for(var i = 0; i < brands.length; i++){
                            var brandName = brands[i].brand || brands[i], brandVersion = brands[i].version;
                            if (this.itemType == BROWSER && !/not.a.brand/i.test(brandName) && (!prevName || /Chrom/.test(prevName) && brandName != CHROMIUM || prevName == EDGE && /WebView2/.test(brandName))) {
                                brandName = strMapper(brandName, browserHintsMap);
                                prevName = this.get(NAME);
                                if (!(prevName && !/Chrom/.test(prevName) && /Chrom/.test(brandName))) this.set(NAME, brandName).set(VERSION, brandVersion).set(MAJOR, majorize(brandVersion));
                                prevName = brandName;
                            }
                            if (this.itemType == ENGINE && brandName == CHROMIUM) this.set(VERSION, brandVersion);
                        }
                        break;
                    case CPU:
                        var archName = uaCH[ARCHITECTURE];
                        if (archName) {
                            if (archName && '64' == uaCH[BITNESS]) archName += '64';
                            rgxMapper.call(this.data, archName + ';', rgxMap);
                        }
                        break;
                    case DEVICE:
                        if (uaCH[MOBILE]) this.set(TYPE, MOBILE);
                        if (uaCH[MODEL]) {
                            this.set(MODEL, uaCH[MODEL]);
                            if (!this.get(TYPE) || !this.get(VENDOR)) {
                                var reParse = {};
                                rgxMapper.call(reParse, 'droid 9; ' + uaCH[MODEL] + ')', rgxMap);
                                if (!this.get(TYPE) && !!reParse.type) this.set(TYPE, reParse.type);
                                if (!this.get(VENDOR) && !!reParse.vendor) this.set(VENDOR, reParse.vendor);
                            }
                        }
                        if (uaCH[FORMFACTORS]) {
                            var ff;
                            if ('string' != typeof uaCH[FORMFACTORS]) {
                                var idx = 0;
                                while(!ff && idx < uaCH[FORMFACTORS].length)ff = strMapper(uaCH[FORMFACTORS][idx++], formFactorsMap);
                            } else ff = strMapper(uaCH[FORMFACTORS], formFactorsMap);
                            this.set(TYPE, ff);
                        }
                        break;
                    case OS:
                        var osName = uaCH[PLATFORM];
                        if (osName) {
                            var osVersion = uaCH[PLATFORMVER];
                            if (osName == WINDOWS) osVersion = parseInt(majorize(osVersion), 10) >= 13 ? '11' : '10';
                            this.set(NAME, osName).set(VERSION, osVersion);
                        }
                        if (this.get(NAME) == WINDOWS && 'Xbox' == uaCH[MODEL]) this.set(NAME, 'Xbox').set(VERSION, void 0);
                        break;
                    case RESULT:
                        var data = this.data;
                        var parse = function(itemType) {
                            return data[itemType].getItem().setCH(uaCH).parseCH().get();
                        };
                        this.set(BROWSER, parse(BROWSER)).set(CPU, parse(CPU)).set(DEVICE, parse(DEVICE)).set(ENGINE, parse(ENGINE)).set(OS, parse(OS));
                }
                return this;
            };
            function UAParser(ua, extensions, headers) {
                if (typeof ua === TYPEOF.OBJECT) {
                    if (isExtensions(ua, true)) {
                        if (typeof extensions === TYPEOF.OBJECT) headers = extensions;
                        extensions = ua;
                    } else {
                        headers = ua;
                        extensions = void 0;
                    }
                    ua = void 0;
                } else if (typeof ua === TYPEOF.STRING && !isExtensions(extensions, true)) {
                    headers = extensions;
                    extensions = void 0;
                }
                if (headers) if (typeof headers.append === TYPEOF.FUNCTION) {
                    var kv = {};
                    headers.forEach(function(v, k) {
                        kv[String(k).toLowerCase()] = v;
                    });
                    headers = kv;
                } else {
                    var normalized = {};
                    for(var header in headers)if (headers.hasOwnProperty(header)) normalized[String(header).toLowerCase()] = headers[header];
                    headers = normalized;
                }
                if (!(this instanceof UAParser)) return new UAParser(ua, extensions, headers).getResult();
                var userAgent = typeof ua === TYPEOF.STRING ? ua : headers && headers[USER_AGENT] ? headers[USER_AGENT] : NAVIGATOR && NAVIGATOR.userAgent ? NAVIGATOR.userAgent : EMPTY, httpUACH = new UACHData(headers, true), regexMap = extensions ? extend(defaultRegexes, extensions) : defaultRegexes, createItemFunc = function(itemType) {
                    if (itemType == RESULT) return function() {
                        return new UAItem(itemType, userAgent, regexMap, httpUACH).set('ua', userAgent).set(BROWSER, this.getBrowser()).set(CPU, this.getCPU()).set(DEVICE, this.getDevice()).set(ENGINE, this.getEngine()).set(OS, this.getOS()).get();
                    };
                    return function() {
                        return new UAItem(itemType, userAgent, regexMap[itemType], httpUACH).parseUA().get();
                    };
                };
                setProps.call(this, [
                    [
                        'getBrowser',
                        createItemFunc(BROWSER)
                    ],
                    [
                        'getCPU',
                        createItemFunc(CPU)
                    ],
                    [
                        'getDevice',
                        createItemFunc(DEVICE)
                    ],
                    [
                        'getEngine',
                        createItemFunc(ENGINE)
                    ],
                    [
                        'getOS',
                        createItemFunc(OS)
                    ],
                    [
                        'getResult',
                        createItemFunc(RESULT)
                    ],
                    [
                        'getUA',
                        function() {
                            return userAgent;
                        }
                    ],
                    [
                        'setUA',
                        function(ua) {
                            if (isString(ua)) userAgent = ua_parser_trim(ua, UA_MAX_LENGTH);
                            return this;
                        }
                    ]
                ]).setUA(userAgent);
                return this;
            }
            UAParser.VERSION = LIBVERSION;
            UAParser.BROWSER = enumerize([
                NAME,
                VERSION,
                MAJOR,
                TYPE
            ]);
            UAParser.CPU = enumerize([
                ARCHITECTURE
            ]);
            UAParser.DEVICE = enumerize([
                MODEL,
                VENDOR,
                TYPE,
                CONSOLE,
                MOBILE,
                SMARTTV,
                TABLET,
                WEARABLE,
                EMBEDDED
            ]);
            UAParser.ENGINE = UAParser.OS = enumerize([
                NAME,
                VERSION
            ]);
            function canPlayType_canPlayType(video, type) {
                const canPlayType = video.canPlayType(`video/${type}`);
                if ("" === canPlayType) return false;
                return canPlayType;
            }
            const media_canPlayType = canPlayType_canPlayType;
            const FALLBACK_VIDEO_TYPE = VideoType.MP4;
            class Browser {
                options;
                result;
                videoType;
                constructor(options){
                    this.options = options;
                    const ua = defined_default()(options.fakeUaString, window.navigator.userAgent, "");
                    const userAgentParser = new UAParser(ua);
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
                    return this.isSafari() && Number.parseFloat(version) >= 11;
                }
                getVideoType(video) {
                    if (!this.videoType) {
                        if (media_canPlayType(video, VideoType.MP4)) this.videoType = VideoType.MP4;
                        else if (media_canPlayType(video, VideoType.WebM)) this.videoType = VideoType.WebM;
                    }
                    if (this.videoType !== VideoType.WebM && this.videoType !== VideoType.MP4) this.videoType = FALLBACK_VIDEO_TYPE;
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
                    const data = {
                        ua: this.result.ua,
                        browser: this.result.browser,
                        cpu: this.result.cpu,
                        device: this.result.device,
                        engine: this.result.engine,
                        os: this.result.os
                    };
                    return data;
                }
            }
            const util_Browser = Browser;
            let getBrowser_browser;
            function getBrowser(localOptions) {
                if (!getBrowser_browser) getBrowser_browser = new util_Browser(localOptions);
                return getBrowser_browser;
            }
            const util_getBrowser = getBrowser;
            class HTTPVideomailError extends Error {
                code;
                status;
                explanation;
            }
            const error_HTTPVideomailError = HTTPVideomailError;
            class VideomailError extends error_HTTPVideomailError {
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
                    ].join("×");
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
                    case "AbortError":
                        message = "Webcam is unavailable";
                        explanation = "Maybe it is already busy in another window?";
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
                        explanation = "Perhaps you are already using it in another browser?";
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
            function _extends() {
                _extends = Object.assign || function(target) {
                    for(var i = 1; i < arguments.length; i++){
                        var source = arguments[i];
                        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                    }
                    return target;
                };
                return _extends.apply(this, arguments);
            }
            var NODE_LIST_CLASSES = {
                '[object HTMLCollection]': true,
                '[object NodeList]': true,
                '[object RadioNodeList]': true
            };
            var IGNORED_ELEMENT_TYPES = {
                button: true,
                fieldset: true,
                reset: true,
                submit: true
            };
            var CHECKED_INPUT_TYPES = {
                checkbox: true,
                radio: true
            };
            var TRIM_RE = /^\s+|\s+$/g;
            var slice = Array.prototype.slice;
            var es_toString = Object.prototype.toString;
            function getFormData(form, options) {
                if (!form) throw new Error("A form is required by getFormData, was given form=" + form);
                options = _extends({
                    includeDisabled: false,
                    trim: false
                }, options);
                var data = {};
                var elementName;
                var elementNames = [];
                var elementNameLookup = {};
                for(var i = 0, l = form.elements.length; i < l; i++){
                    var element = form.elements[i];
                    if (!IGNORED_ELEMENT_TYPES[element.type] && (!element.disabled || options.includeDisabled)) {
                        elementName = element.name || element.id;
                        if (elementName && !elementNameLookup[elementName]) {
                            elementNames.push(elementName);
                            elementNameLookup[elementName] = true;
                        }
                    }
                }
                for(var _i = 0, _l = elementNames.length; _i < _l; _i++){
                    elementName = elementNames[_i];
                    var value = getFieldData(form, elementName, options);
                    if (null != value) data[elementName] = value;
                }
                return data;
            }
            function getFieldData(form, fieldName, options) {
                if (!form) throw new Error("A form is required by getFieldData, was given form=" + form);
                if (!fieldName && '[object String]' !== es_toString.call(fieldName)) throw new Error("A field name is required by getFieldData, was given fieldName=" + fieldName);
                options = _extends({
                    includeDisabled: false,
                    trim: false
                }, options);
                var element = form.elements[fieldName];
                if (!element || element.disabled && !options.includeDisabled) return null;
                if (!NODE_LIST_CLASSES[es_toString.call(element)]) return getFormElementValue(element, options.trim);
                var data = [];
                var allRadios = true;
                for(var i = 0, l = element.length; i < l; i++)if (!element[i].disabled || options.includeDisabled) {
                    if (allRadios && 'radio' !== element[i].type) allRadios = false;
                    var value = getFormElementValue(element[i], options.trim);
                    if (null != value) data = data.concat(value);
                }
                if (allRadios && 1 === data.length) return data[0];
                return data.length > 0 ? data : null;
            }
            function getFormElementValue(element, trim) {
                var value = null;
                var type = element.type;
                if ('select-one' === type) {
                    if (element.options.length) value = element.options[element.selectedIndex].value;
                    return value;
                }
                if ('select-multiple' === type) {
                    value = [];
                    for(var i = 0, l = element.options.length; i < l; i++)if (element.options[i].selected) value.push(element.options[i].value);
                    if (0 === value.length) value = null;
                    return value;
                }
                if ('file' === type && 'files' in element) {
                    if (element.multiple) {
                        value = slice.call(element.files);
                        if (0 === value.length) value = null;
                    } else value = element.files[0];
                    return value;
                }
                if (CHECKED_INPUT_TYPES[type]) {
                    if (element.checked) value = 'checkbox' !== type || element.hasAttribute('value') ? element.value : true;
                } else value = trim ? element.value.replace(TRIM_RE, '') : element.value;
                return value;
            }
            getFormData.getFieldData = getFieldData;
            let createNanoEvents = ()=>({
                    emit (event, ...args) {
                        for(let callbacks = this.events[event] || [], i = 0, length = callbacks.length; i < length; i++)callbacks[i](...args);
                    },
                    events: {},
                    on (event, cb) {
                        (this.events[event] ||= []).push(cb);
                        return ()=>{
                            this.events[event] = this.events[event]?.filter((i)=>cb !== i);
                        };
                    }
                });
            class Despot {
                name;
                options;
                static EMITTER = createNanoEvents();
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
            function getValidity(element) {
                const validity = "validity" in element ? element.validity : void 0;
                return validity;
            }
            const util_getValidity = getValidity;
            function hideElement(element) {
                if (!element) return;
                element.style.setProperty("display", "none", "important");
            }
            const html_hideElement = hideElement;
            function isNotButton(element) {
                return "BUTTON" !== element.tagName && "submit" !== element.getAttribute("type");
            }
            const html_isNotButton = isNotButton;
            function showElement(element) {
                if (!element) return;
                element.style.removeProperty("display");
            }
            const html_showElement = showElement;
            const REGEX = /[ ,]+/u;
            function trimEmail(email) {
                return email.replace(REGEX, "");
            }
            function trimEmails(emails) {
                const trimmedEmails = emails.split(REGEX).map((item)=>item.trim()).filter(Boolean);
                return trimmedEmails;
            }
            const FormMethod = {
                POST: "post",
                PUT: "put",
                GET: "get"
            };
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
                    return getFormData(this.formElement, {
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
                            let value = videomail[name];
                            const tagName = formControl.tagName;
                            if (this.options.callbacks.adjustFormValueBeforePopulating) value = this.options.callbacks.adjustFormValueBeforePopulating(name, value, videomail);
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
                    this.formElement.setAttribute("method", FormMethod.PUT);
                }
                setDisabled(disabled, buttonsToo) {
                    for (const formControl of this.formElement.elements)if (buttonsToo || html_isNotButton(formControl)) if (disabled) formControl.setAttribute("disabled", "disabled");
                    else formControl.removeAttribute("disabled");
                }
                hideAll() {
                    for (const formElement of this.formElement.elements)html_hideElement(formElement);
                    if (!this.formElement.classList.contains(this.options.selectors.containerClass)) html_hideElement(this.formElement);
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
                                message: "Videomail key and its value for previewing is missing",
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
                    html_hideElement(submitButton);
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
                    const url = this.formElement.getAttribute("action") ?? this.options.apiUrl;
                    const method = this.formElement.getAttribute("method");
                    let chosenMethod;
                    switch(method){
                        case FormMethod.POST:
                            chosenMethod = FormMethod.POST;
                            break;
                        case FormMethod.PUT:
                            chosenMethod = FormMethod.PUT;
                            break;
                        default:
                            chosenMethod = FormMethod.POST;
                    }
                    if (this.container.hasElement()) await this.container.submitAll(this.getData(), chosenMethod, url);
                    return false;
                }
                getInvalidElement() {
                    const elements = this.getRegisteredFormElements();
                    for (const element of elements){
                        const validity = util_getValidity(element);
                        if (!validity?.valid) return element;
                    }
                    return null;
                }
                findSubmitButton() {
                    return this.formElement.querySelector("[type='submit']");
                }
                hide() {
                    html_hideElement(this.formElement);
                }
                show() {
                    html_showElement(this.formElement);
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
                        const error = new error_HTTPVideomailError(message, {
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
                    const url = `${this.options.apiUrl}/videomail/${identifierName}/${identifierValue}/snapshot`;
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
                    let url = `${this.options.apiUrl}/videomail/`;
                    if (method === FormMethod.PUT && videomail.key) url += videomail.key;
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
                    const url = `${this.options.apiUrl}/client-error/`;
                    try {
                        const fullVideomailErrorData = {
                            browser: err.browser,
                            code: err.code,
                            cookie: err.cookie,
                            cpu: err.cpu,
                            device: err.device,
                            engine: err.engine,
                            err: serializeError(err.err),
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
                        await client_default()(FormMethod.POST, url).query(queryParams).set("Timezone-Id", this.timezoneId).withCredentials().send(fullVideomailErrorData).timeout(this.options.timeouts.connection);
                    } catch (exc) {
                        console.error(exc);
                    }
                }
                async post(videomail) {
                    const newVideomail = this.applyDefaultValues(videomail);
                    if (!newVideomail.versions) newVideomail.versions = {};
                    newVideomail.versions.videomailClient = package_namespaceObject.rE;
                    newVideomail.recordLocation = window.location.href;
                    const browser = util_getBrowser(this.options);
                    newVideomail.browserStats = browser.getUsefulData();
                    try {
                        let res;
                        if (this.options.callbacks.adjustFormDataBeforePosting) {
                            const adjustedVideomail = this.options.callbacks.adjustFormDataBeforePosting(newVideomail);
                            res = await this.write(FormMethod.POST, adjustedVideomail);
                        } else res = await this.write(FormMethod.POST, newVideomail);
                        return res;
                    } catch (exc) {
                        throw error_createError({
                            exc: findOriginalExc(exc),
                            options: this.options
                        });
                    }
                }
                async put(videomail) {
                    return await this.write(FormMethod.PUT, videomail);
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
                apiUrl: "https://videomail.io/api",
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
                    stretch: false,
                    mobileBreakPoint: void 0,
                    autoPlay: void 0
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
                    adjustFormDataBeforePosting: void 0,
                    adjustFormValueBeforePopulating: void 0
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
                disableFormWhenSubmitting: true,
                fakeUaString: void 0,
                recalculateDimensionsOnWindowResize: false,
                versions: {
                    videomailNinjaFormPlugin: void 0
                }
            };
            const src_options = options_options;
            class CollectLogger {
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
            const util_CollectLogger = CollectLogger;
            var process = __webpack_require__("./node_modules/process/browser.js");
            function isTest() {
                return "test" === process.env.ENVIRON;
            }
            const util_isTest = isTest;
            function mergeWithDefaultOptions(options = {}) {
                const newOptions = cjs_default()(src_options, options, {
                    arrayMerge (_destination, source) {
                        return source;
                    }
                });
                const collectLogger = new util_CollectLogger(newOptions);
                newOptions.logger = collectLogger;
                if (util_isTest()) newOptions.verbose = false;
                return newOptions;
            }
            const options_mergeWithDefaultOptions = mergeWithDefaultOptions;
            var injectStylesIntoStyleTag = __webpack_require__("./node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js");
            var injectStylesIntoStyleTag_default = /*#__PURE__*/ __webpack_require__.n(injectStylesIntoStyleTag);
            var styleDomAPI = __webpack_require__("./node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js");
            var styleDomAPI_default = /*#__PURE__*/ __webpack_require__.n(styleDomAPI);
            var insertBySelector = __webpack_require__("./node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js");
            var insertBySelector_default = /*#__PURE__*/ __webpack_require__.n(insertBySelector);
            var setAttributesWithoutAttributes = __webpack_require__("./node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js");
            var setAttributesWithoutAttributes_default = /*#__PURE__*/ __webpack_require__.n(setAttributesWithoutAttributes);
            var insertStyleElement = __webpack_require__("./node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js");
            var insertStyleElement_default = /*#__PURE__*/ __webpack_require__.n(insertStyleElement);
            var styleTagTransform = __webpack_require__("./node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js");
            var styleTagTransform_default = /*#__PURE__*/ __webpack_require__.n(styleTagTransform);
            var main = __webpack_require__("./node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[13].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[13].use[2]!./node_modules/stylus-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/styles/main.styl");
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
                const dimension = {
                    unit: "px"
                };
                let limitedHeight = document.documentElement.clientHeight;
                if (height) limitedHeight = Math.min(height, limitedHeight);
                if (limitedHeight < 1) throw error_createError({
                    message: `Limited height ${limitedHeight} cannot be less than 1! (Called from ${calledFrom})`,
                    options
                });
                dimension.value = limitedHeight;
                return dimension;
            }
            const dimensions_limitHeight = limitHeight;
            function getOuterWidth(element) {
                let rect = element.getBoundingClientRect();
                let outerWidth = rect.right - rect.left;
                if (outerWidth < 1) {
                    rect = document.body.getBoundingClientRect();
                    outerWidth = rect.right - rect.left;
                }
                return outerWidth;
            }
            const dimensions_getOuterWidth = getOuterWidth;
            function limitWidth(element, options, width) {
                const limitedDimension = {
                    unit: "px"
                };
                let limitedWidth;
                const outerWidth = dimensions_getOuterWidth(element);
                limitedWidth = width && "number" == typeof width ? outerWidth > 0 && outerWidth < width ? outerWidth : width : outerWidth;
                if (Number.isInteger(limitedWidth) && limitedWidth < 1) throw error_createError({
                    message: "Limited width cannot be less than 1!",
                    options
                });
                limitedDimension.value = limitedWidth;
                return limitedDimension;
            }
            const dimensions_limitWidth = limitWidth;
            function useFullWidth(mobileBreakPoint) {
                if (void 0 === mobileBreakPoint) return;
                const viewportWidth = window.innerWidth;
                if (viewportWidth < mobileBreakPoint) {
                    const dimension = {
                        unit: "%",
                        value: 100
                    };
                    return dimension;
                }
            }
            const dimensions_useFullWidth = useFullWidth;
            var contains = __webpack_require__("./node_modules/contains/index.js");
            var contains_default = /*#__PURE__*/ __webpack_require__.n(contains);
            function disableElement(element) {
                if (!element) return;
                if ("INPUT" === element.tagName || "BUTTON" === element.tagName) element.setAttribute("disabled", "true");
                else element.classList.add("disabled");
            }
            const html_disableElement = disableElement;
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
                const display = element.style.getPropertyValue("display");
                return !display.includes("none");
            }
            const html_isShown = isShown;
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
            function isHidden(element) {
                if (!element) return true;
                const display = element.style.getPropertyValue("display");
                return display.includes("none");
            }
            const html_isHidden = isHidden;
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
                    if ("number" != typeof this.options.video.countdown) throw new TypeError(`The defined countdown is not a valid number: ${this.options.video.countdown}`);
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
                    html_showElement(this.countdownElement);
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
                    html_hideElement(this.countdownElement);
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
                        this.facingModeElement.innerHTML = "⤾";
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
                    html_hideElement(this.facingModeElement);
                }
                show() {
                    html_showElement(this.facingModeElement);
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
                    html_hideElement(this.pausedBlockElement);
                }
                show() {
                    html_showElement(this.pausedBlockElement);
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
                    html_hideElement(this.recordNoteElement);
                }
                show() {
                    html_showElement(this.recordNoteElement);
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
                        if (this.countdown < 1) this.visuals.stop();
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
                    html_hideElement(this.recordTimerElement);
                }
                show() {
                    this.recordTimerElement?.classList.remove("near");
                    this.recordTimerElement?.classList.remove("nigh");
                    html_showElement(this.recordTimerElement);
                }
                getSecondsRecorded() {
                    if (void 0 === this.countdown) return this.getSecondsRecorded();
                    return this.getStartSeconds() - this.countdown;
                }
                getStartSeconds() {
                    return this.options.video.limitSeconds;
                }
                setLimitSeconds(limitSeconds) {
                    this.options.video.limitSeconds = limitSeconds;
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
                setLimitSeconds(limitSeconds) {
                    this.options.video.limitSeconds = limitSeconds;
                    this.recordTimer.setLimitSeconds(limitSeconds);
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
                    lead += `${this.options.text.sending} …`;
                    this.notify(lead, void 0, {
                        stillWait: true,
                        entertain: this.options.notifier.entertain
                    });
                }
                onConnecting() {
                    this.notify("Connecting …");
                }
                onLoadingUserMedia() {
                    this.notify("Loading webcam …");
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
                    const lead = `${this.options.text.encoding} …`;
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
                    this.on("USER_MEDIA_READY", (_params)=>{
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
                        this.notify("Unloading …");
                    });
                    this.on("DISCONNECTED", ()=>{
                        this.notify("Disconnected");
                    });
                    this.on("CONNECTED", ()=>{
                        this.notify("Connected");
                        if (this.options.loadUserMediaOnRecord) this.hide();
                    });
                    this.on("WINDOW_RESIZE", ()=>{
                        this.correctNotifierDimensions();
                    });
                }
                correctNotifierDimensions() {
                    if (!this.notifyElement) return;
                    if (this.options.video.stretch) {
                        const heightDimension = this.visuals.getRecorderHeight(true, true);
                        this.notifyElement.style.width = "auto";
                        if (heightDimension) this.notifyElement.style.height = `${heightDimension.value}${heightDimension.unit}`;
                    } else {
                        let heightDimension;
                        let widthDimension = dimensions_useFullWidth(this.options.video.mobileBreakPoint);
                        if (!widthDimension) {
                            widthDimension = this.visuals.getRecorderWidth(true);
                            heightDimension = this.visuals.getRecorderHeight(true);
                        }
                        if (widthDimension) this.notifyElement.style.width = `${widthDimension.value}${widthDimension.unit}`;
                        else this.notifyElement.style.removeProperty("width");
                        if (heightDimension) this.notifyElement.style.height = `${heightDimension.value}${heightDimension.unit}`;
                        else this.notifyElement.style.removeProperty("height");
                    }
                }
                show() {
                    html_showElement(this.notifyElement);
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
                    html_showElement(this.messageElement);
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
                    html_showElement(this.explanationElement);
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
                    html_hideElement(this.getMessageElement());
                }
                hideExplanation() {
                    html_hideElement(this.explanationElement);
                }
                hide() {
                    this.cancelEntertainment();
                    if (this.notifyElement) {
                        html_hideElement(this.notifyElement);
                        this.notifyElement.classList.remove("blocking");
                    }
                    this.hideMessage();
                    this.hideExplanation();
                }
                isVisible() {
                    if (!this.built) return false;
                    return this.notifyElement && !html_isHidden(this.notifyElement);
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
            var typedarray_to_buffer = __webpack_require__("./node_modules/typedarray-to-buffer/index.js");
            const canvas_to_buffer_modern_e = "u" > typeof document && "function" == typeof document.createElement, canvas_to_buffer_modern_i = canvas_to_buffer_modern_e ? [
                "webp",
                "jpeg"
            ] : [
                "png"
            ];
            let canvas_to_buffer_modern_s;
            class canvas_to_buffer_modern_r {
                constructor(t, e = canvas_to_buffer_modern_i, s = .5){
                    if (this.quality = void 0, this.types = void 0, this.canvas = void 0, e.length > 2) throw new Error("Too many image types are specified!");
                    this.canvas = t, this.quality = s, this.types = e;
                }
                composeMimeType(t) {
                    let e;
                    return this.types[t] && (e = "image/" + this.types[t]), e;
                }
                isMatch(t, e) {
                    return t.match(e);
                }
                getTestCanvas() {
                    let t;
                    return canvas_to_buffer_modern_e ? (t = document.createElement("canvas"), t.width = t.height = 1) : t = this.canvas, t;
                }
                canvasSupportsMimeType(t) {
                    try {
                        const e = this.getTestCanvas(), i = e.toDataURL && e.toDataURL(t);
                        return this.isMatch(i, t);
                    } catch (t) {
                        return !1;
                    }
                }
                figureMimeType() {
                    let t = this.composeMimeType(0);
                    return t && this.canvasSupportsMimeType(t) || (this.types[1] ? (t = this.composeMimeType(1), t && !this.canvasSupportsMimeType(t) && (t = void 0)) : t = void 0), t;
                }
                uriToBuffer(i) {
                    const s = i.split(",")[1];
                    let o;
                    if (!s) throw new Error("Empty uri string given!");
                    if (o = canvas_to_buffer_modern_e ? window.atob(s) : null == canvas_to_buffer_modern_r.atob ? void 0 : canvas_to_buffer_modern_r.atob(s), !o) throw new Error("Byte are empty, something within atob went wrong.");
                    const n = new Uint8Array(o.length);
                    for(let t = 0, e = o.length; t < e; t++)n[t] = o.charCodeAt(t);
                    return typedarray_to_buffer(n);
                }
                toBuffer() {
                    const t = this.getMimeType();
                    let e;
                    if (t) {
                        const i = this.canvas.toDataURL(t, this.quality);
                        e = this.uriToBuffer(i);
                    }
                    return e;
                }
                getMimeType() {
                    return canvas_to_buffer_modern_s && canvas_to_buffer_modern_e || (canvas_to_buffer_modern_s = this.figureMimeType()), canvas_to_buffer_modern_s;
                }
            }
            canvas_to_buffer_modern_r.atob = void 0;
            var websocket_stream_stream = __webpack_require__("./node_modules/websocket-stream/stream.js");
            var stream_default = /*#__PURE__*/ __webpack_require__.n(websocket_stream_stream);
            function figureMinHeight(height, options) {
                let minHeight;
                if (options.video.height) {
                    minHeight = height ? Math.min(options.video.height, height) : options.video.height;
                    if (minHeight < 1) throw error_createError({
                        message: `Got a min height less than 1 (${minHeight})!`,
                        options
                    });
                } else minHeight = height;
                return minHeight;
            }
            const dimensions_figureMinHeight = figureMinHeight;
            function getRatio(options, videoHeight, videoWidth) {
                let ratio = 1;
                const hasVideoDimensions = videoHeight && videoWidth;
                const desiredHeight = options.video.height;
                const desiredWidth = options.video.width;
                const hasDesiredDimensions = desiredHeight && desiredWidth;
                if (hasDesiredDimensions) ratio = hasVideoDimensions ? videoHeight < desiredHeight || videoWidth < desiredWidth ? videoHeight / videoWidth : desiredHeight / desiredWidth : desiredHeight / desiredWidth;
                else if (hasVideoDimensions) ratio = videoHeight / videoWidth;
                return ratio;
            }
            const dimensions_getRatio = getRatio;
            function calculateHeight(responsive, videoWidth, options, ratio, element) {
                const dimension = {
                    unit: "px"
                };
                let width = videoWidth;
                if (responsive && element) {
                    const limitedDimension = dimensions_limitWidth(element, options, width);
                    width = limitedDimension.value;
                }
                const chosenRatio = ratio ?? dimensions_getRatio(options, void 0, videoWidth);
                const height = width ? Math.round(width * chosenRatio) : void 0;
                if (height && Number.isInteger(height) && height < 1) throw error_createError({
                    message: "Just calculated a height less than 1 which is wrong.",
                    options
                });
                const minHeight = dimensions_figureMinHeight(height, options);
                dimension.value = minHeight;
                return dimension;
            }
            const dimensions_calculateHeight = calculateHeight;
            function calculateWidth(responsive, options, videoHeight, ratio) {
                const dimension = {
                    unit: "px"
                };
                let height = dimensions_figureMinHeight(videoHeight, options);
                if (responsive) {
                    const limitedDimension = dimensions_limitHeight(height, options, "calculateWidth");
                    height = limitedDimension.value;
                }
                if (!height || height < 1) throw error_createError({
                    message: `Height ${height} cannot be smaller than 1 when calculating width.`,
                    options
                });
                const chosenRatio = ratio ?? dimensions_getRatio(options, videoHeight);
                const calculatedWidth = Math.round(height / chosenRatio);
                if (calculatedWidth < 1) throw error_createError({
                    message: "Calculated width cannot be smaller than 1!",
                    options
                });
                dimension.value = calculatedWidth;
                return dimension;
            }
            const dimensions_calculateWidth = calculateWidth;
            class audio_sample_modern_t {
                constructor(r){
                    this.float32Array = void 0, this.float32Array = r;
                }
                toBuffer() {
                    const t = new Int16Array(this.float32Array.length);
                    return this.float32Array.forEach((r, a)=>{
                        t[a] = 32767 * Math.min(1, r);
                    }), typedarray_to_buffer(t);
                }
            }
            var is_power_of_two = __webpack_require__("./node_modules/is-power-of-two/index.js");
            var is_power_of_two_default = /*#__PURE__*/ __webpack_require__.n(is_power_of_two);
            const CHANNELS = 1;
            function getAudioContextClass() {
                return window.AudioContext;
            }
            class AudioRecorder {
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
                    cb(new audio_sample_modern_t(float32Array));
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
            const media_AudioRecorder = AudioRecorder;
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
            const EVENT_ASCII = "|—O—|";
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
                    if (isAudioEnabled(this.options)) this.audioRecorder ??= new media_AudioRecorder(this, this.options);
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
                                this.rawVisualUserMedia.play().then(()=>{
                                    if (!this.playingPromiseReached) {
                                        this.options.logger.debug("UserMedia: play promise successful. Playing now.");
                                        this.playingPromiseReached = true;
                                    }
                                }).catch((exc)=>{
                                    if (exc instanceof Error) this.options.logger.warn(`Caught pending user media promise exception: ${exc.toString()}`);
                                    else throw error_createError({
                                        message: "Failed to play user media upon play event.",
                                        exc,
                                        options: this.options
                                    });
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
                            chosenStream ??= this.currentVisualStream;
                            const tracks = chosenStream?.getTracks();
                            if (tracks) tracks.forEach((track)=>{
                                track.stop();
                            });
                            this.setVisualStream();
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
                    const rawWidthDimension = this.getRawWidth(true);
                    if (rawWidthDimension.value) canvas.width = rawWidthDimension.value;
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
                    let rawWidth;
                    const widthDimension = {
                        unit: "px"
                    };
                    rawWidth = responsive ? this.getVideoWidth() : this.options.video.width ? this.options.video.width : this.getVideoWidth();
                    if (responsive) {
                        const widthDimension = this.recorder.limitWidth(rawWidth);
                        rawWidth = widthDimension?.value;
                    }
                    widthDimension.value = rawWidth;
                    return widthDimension;
                }
                getRawHeight(responsive) {
                    let rawHeight;
                    if (responsive) {
                        rawHeight = this.options.video.height || this.getVideoHeight();
                        const ratio = this.recorder.getRatio();
                        const rawWidth = this.getRawWidth(responsive);
                        if (void 0 !== ratio && rawWidth.value) rawHeight = rawWidth.value * ratio;
                    } else rawHeight = this.options.video.height ? this.options.video.height : this.getVideoHeight();
                    if (responsive) {
                        const heightDimension = this.recorder.limitHeight(rawHeight);
                        rawHeight = heightDimension.value;
                    }
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
            const PIPE_SYMBOL = "°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸ ";
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
                    html_showElement(this.recorderElement);
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
                    const widthDimension = this.getRecorderWidth(true);
                    const heightDimension = this.getRecorderHeight(true);
                    const duration = args.duration ?? -1;
                    this.emit("PREVIEW", {
                        key: this.key,
                        width: widthDimension?.value,
                        height: heightDimension?.value,
                        hasAudio,
                        duration
                    });
                    if (this.stopTime) this.waitingTime = Date.now() - this.stopTime;
                    this.recordingStats ??= {};
                    this.recordingStats.waitingTime = this.waitingTime;
                }
                initSocket(cb) {
                    if (!this.connected) {
                        this.connecting = true;
                        this.emit("CONNECTING");
                        const url2Connect = `${this.options.socketUrl}?${encodeURIComponent(constants.SITE_NAME_LABEL)}=${encodeURIComponent(this.options.siteName)}`;
                        this.options.logger.debug(`Recorder: initializing web socket to ${url2Connect}`);
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
                        if (limitedWidth?.value) constraints.video.width = {
                            ideal: limitedWidth.value
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
                                        err: deserializeError(command.args?.err),
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
                    return !this.recorderElement || html_isHidden(this.recorderElement);
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
                        this.options.logger.debug(`Reconnecting for the command ${command} …`);
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
                        this.options.logger.debug("Recorder: destroying stream ...");
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
                    this.frame = new canvas_to_buffer_modern_r(this.canvas, this.options.image.types, this.options.image.quality);
                    this.options.logger.debug("Recorder: record()");
                    this.userMedia.record();
                    this.emit("RECORDING", {
                        framesCount: this.framesCount
                    });
                    this.loop.on("update", (_deltaTime, elapsedTime)=>{
                        let avgFPS;
                        avgFPS = 0 !== elapsedTime ? Math.round(this.framesCount / elapsedTime * 1000) : void 0;
                        this.options.logger.debug(`Recorder updates avgFps = ${avgFPS} at frame ${this.framesCount}`);
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
                    const widthDimension = dimensions_useFullWidth(this.options.video.mobileBreakPoint);
                    if (this.options.video.stretch || widthDimension) {
                        this.recorderElement.style.width = "100%";
                        this.recorderElement.style.removeProperty("height");
                    } else {
                        if (this.options.video.width) {
                            const recorderWidth = this.getRecorderWidth(true);
                            if (recorderWidth?.value) this.recorderElement.width = recorderWidth.value;
                            else this.recorderElement.style.removeProperty("width");
                        }
                        if (this.options.video.height) {
                            const recorderHeight = this.getRecorderHeight(true);
                            if (recorderHeight?.value) this.recorderElement.height = recorderHeight.value;
                            else this.recorderElement.style.removeProperty("height");
                        }
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
                    this.on("WINDOW_RESIZE", ()=>{
                        this.correctDimensions();
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
                    this.userMedia ??= new visuals_userMedia(this, this.options);
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
                        if (this.recorderElement) html_hideElement(this.recorderElement);
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
                    const dimension = {
                        unit: "px",
                        value: this.options.video.width
                    };
                    return dimension;
                }
                getRecorderHeight(responsive, useBoundingClientRect) {
                    let recorderHeight;
                    if (this.recorderElement && useBoundingClientRect) {
                        const height = this.recorderElement.getBoundingClientRect().height;
                        recorderHeight = {
                            unit: "px",
                            value: height
                        };
                    } else if (this.userMedia) {
                        let height = this.userMedia.getRawHeight(responsive);
                        if (void 0 !== height && this.options.video.width) {
                            const ratio = this.getRatio();
                            if (void 0 !== ratio) {
                                const idealHeight = this.options.video.width * ratio;
                                height = Math.min(idealHeight, height);
                            }
                        }
                        recorderHeight = {
                            unit: "px",
                            value: height
                        };
                    } else if (responsive && this.options.video.height) recorderHeight = this.calculateHeight(responsive);
                    else if (this.options.video.height) {
                        const height = this.options.video.height;
                        recorderHeight = {
                            unit: "px",
                            value: height
                        };
                    }
                    return recorderHeight;
                }
                getRatio() {
                    let ratio;
                    if (this.userMedia) {
                        const userMediaVideoWidth = this.userMedia.getVideoWidth();
                        const userMediaVideoHeight = this.userMedia.getVideoHeight();
                        if (!userMediaVideoWidth || userMediaVideoWidth < 1) ratio = this.visuals.getRatio();
                        else if (userMediaVideoHeight) ratio = userMediaVideoHeight / userMediaVideoWidth;
                    } else ratio = dimensions_getRatio(this.options);
                    return ratio;
                }
                calculateWidth(responsive) {
                    let videoHeight;
                    if (this.userMedia) videoHeight = this.userMedia.getVideoHeight();
                    else if (this.recorderElement) videoHeight = this.recorderElement.videoHeight || this.recorderElement.height;
                    const ratio = this.getRatio();
                    return dimensions_calculateWidth(responsive, this.options, videoHeight, ratio);
                }
                calculateHeight(responsive) {
                    let videoDimension;
                    if (this.userMedia) {
                        const videoHeight = this.userMedia.getVideoHeight();
                        videoDimension = {
                            value: videoHeight,
                            unit: "px"
                        };
                    } else if (this.recorderElement) {
                        const videoHeight = this.recorderElement.videoHeight || this.recorderElement.height;
                        videoDimension = {
                            value: videoHeight,
                            unit: "px"
                        };
                    } else videoDimension = dimensions_calculateHeight(responsive, void 0, this.options, this.getRatio(), this.recorderElement);
                    return videoDimension;
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
                    if (!width) width = dimensions_calculateWidth(responsive, this.options, videoHeight, ratio);
                    if (!height) {
                        let element = this.visuals.getElement();
                        if (!element) element = document.body;
                        height = dimensions_calculateHeight(responsive, videoWidth, this.options, ratio, element);
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
                        if (hasMedia) html_showElement(this.replayElement);
                    } else html_showElement(this.replayElement);
                    if (playerOnly) html_showElement(this.replayElement.parentElement);
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
                    if (this.options.video.autoPlay) this.replayElement.setAttribute("autoplay", this.options.video.autoPlay.toString());
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
                            if (this.replayElement?.paused) this.replayElement.play().catch((exc)=>{
                                throw error_createError({
                                    message: "Failed to play replay video while paused upon touchstart event.",
                                    exc,
                                    options: this.options
                                });
                            });
                            else this.replayElement?.pause();
                        }, {
                            passive: true
                        });
                        this.replayElement.addEventListener("click", (e)=>{
                            e.preventDefault();
                            if (this.replayElement?.paused) this.replayElement.play().catch((exc)=>{
                                throw error_createError({
                                    message: "Failed to play replay video while paused upon click event.",
                                    exc,
                                    options: this.options
                                });
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
                    else firstTrack.remove();
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
                    else source.remove();
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
                    this.setVideoSource(VideoType.MP4, src, bustCache);
                }
                setWebMSource(src, bustCache) {
                    this.setVideoSource(VideoType.WebM, src, bustCache);
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
                    if (this.isStandalone()) this.visuals.hide();
                    else if (this.replayElement) {
                        html_hideElement(this.replayElement);
                        html_hideElement(this.replayElement.parentElement);
                    }
                }
                isShown() {
                    if (!this.replayElement) return false;
                    return !html_isHidden(this.replayElement) && !this.visuals.isHidden();
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
                        this.on("WINDOW_RESIZE", ()=>{
                            this.correctDimensions();
                        });
                    }
                }
                correctDimensions() {
                    if (this.options.video.stretch) this.removeDimensions();
                    else if (this.visualsElement) {
                        let heightDimension;
                        let widthDimension = dimensions_useFullWidth(this.options.video.mobileBreakPoint);
                        if (!widthDimension) {
                            widthDimension = this.getRecorderWidth(true);
                            heightDimension = this.getRecorderHeight(true);
                        }
                        if (widthDimension?.value) this.visualsElement.style.width = `${widthDimension.value}${widthDimension.unit}`;
                        else this.visualsElement.style.removeProperty("width");
                        if (heightDimension?.value) {
                            const height = `${heightDimension.value}${heightDimension.unit}`;
                            this.visualsElement.style.height = height;
                        } else this.visualsElement.style.removeProperty("height");
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
                    const parentElementInfo = parentElement ? `, parentElement="${util_pretty(parentElement)}"` : "";
                    this.options.logger.debug(`Visuals: build (playerOnly = ${playerOnly}${parentElementInfo})`);
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
                    child.remove();
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
                    if (this.isReplayShown()) return true;
                    return this.recorder.validate();
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
                        html_hideElement(this.visualsElement);
                        this.emit("HIDE");
                    }
                }
                isHidden() {
                    if (!this.built) return true;
                    return html_isHidden(this.visualsElement);
                }
                showVisuals() {
                    html_showElement(this.visualsElement);
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
                setLimitSeconds(limitSeconds) {
                    this.options.video.limitSeconds = limitSeconds;
                    this.recorderInsides.setLimitSeconds(limitSeconds);
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
                    const parentElementInfo = parentElement ? `, parentElement="${util_pretty(parentElement)}"` : "";
                    this.options.logger.debug(`Container: buildChildren (playerOnly = ${playerOnly}${parentElementInfo})`);
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
                    if (this.containerElement?.tagName === "FORM") formElement = this.containerElement;
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
                    if (this.options.recalculateDimensionsOnWindowResize) window.addEventListener("resize", ()=>{
                        if (!this.built) return;
                        this.emit("WINDOW_RESIZE", "container");
                    });
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
                    this.on("WINDOW_RESIZE", ()=>{
                        this.correctDimensions();
                    });
                    if (!playerOnly) this.on("LOADED_META_DATA", ()=>{
                        this.correctDimensions();
                    });
                }
                correctDimensions() {
                    if (this.options.video.stretch) this.removeDimensions();
                    else if (this.containerElement) {
                        let widthDimension = dimensions_useFullWidth(this.options.video.mobileBreakPoint);
                        if (!widthDimension) widthDimension = this.visuals.getRecorderWidth(true);
                        if (widthDimension?.value) this.containerElement.style.width = `${widthDimension.value}${widthDimension.unit}`;
                        else this.containerElement.style.removeProperty("width");
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
                    html_hideElement(this.containerElement);
                }
                async submitVideomail(formInputs, method) {
                    const videomailFormData = this.form?.transformFormData(formInputs);
                    if (!videomailFormData) throw new Error("No videomail form data defined");
                    if (method === FormMethod.POST) {
                        videomailFormData.recordingStats = this.visuals.getRecordingStats();
                        const widthDimension = this.visuals.getRecorderWidth(true);
                        const heightDimension = this.visuals.getRecorderHeight(true);
                        videomailFormData.width = widthDimension?.value;
                        videomailFormData.height = heightDimension?.value;
                        return await this.resource.post(videomailFormData);
                    }
                    if (method === FormMethod.PUT) return await this.resource.put(videomailFormData);
                    throw error_createError({
                        message: `Unsupported form method ${method}, unable to submit videomail.`,
                        options: this.options
                    });
                }
                limitWidth(width) {
                    if (!this.containerElement) return;
                    return dimensions_limitWidth(this.containerElement, this.options, width);
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
                    html_showElement(this.containerElement);
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
                    if (this.built) if (this.options.enableAutoValidation) {
                        if (force) runValidation = force;
                        else if (this.isNotifying()) runValidation = false;
                        else if (this.visuals.isConnected()) runValidation = this.visuals.isUserMediaLoaded() ?? this.visuals.isReplayShown();
                        else if (this.visuals.isConnecting()) runValidation = false;
                    } else {
                        runValidation = false;
                        this.lastValidation = true;
                    }
                    else runValidation = false;
                    if (runValidation) {
                        const targetName = event?.target?.name;
                        if (targetName) this.emit("VALIDATING", {
                            targetName
                        });
                        else if (event) this.emit("VALIDATING", {
                            event
                        });
                        else this.emit("VALIDATING");
                        let whyInvalid;
                        const isRecordAgainButtonEnabled = this.buttons.isRecordAgainButtonEnabled();
                        const visualsValid = this.visuals.validate() && isRecordAgainButtonEnabled;
                        let invalidData;
                        if (this.form) {
                            const invalidInput = this.form.getInvalidElement();
                            if (invalidInput) {
                                const name = invalidInput.getAttribute("name");
                                const validity = util_getValidity(invalidInput);
                                valid = false;
                                if (name) if (validity?.valueMissing) whyInvalid = `Please fill out field "${name}" ⚠️`;
                                else {
                                    whyInvalid = `Input "${name}" seems wrong 🤔`;
                                    invalidData = {
                                        [name]: invalidInput.getAttribute("value")
                                    };
                                }
                            } else if (!this.areVisualsHidden() && !visualsValid) {
                                if (this.buttonsAreReady() || this.isRecording() || this.isPaused() || this.isCountingDown()) {
                                    valid = false;
                                    whyInvalid = "Don't forget to record a video 😉";
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
                        } else {
                            valid = visualsValid;
                            whyInvalid = "Because visuals aren't valid";
                        }
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
                        if (this.options.disableFormWhenSubmitting) this.disableForm(true);
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
                    if (!this.form) return;
                    this.form.loadVideomail(videomail);
                    this.validate();
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
                setLimitSeconds(limitSeconds) {
                    this.options.video.limitSeconds = limitSeconds;
                    this.visuals.setLimitSeconds(limitSeconds);
                }
            }
            const wrappers_container = Container;
            class VideomailClient extends util_Despot {
                container;
                static ENC_TYPE_APP_JSON = constants["public"].ENC_TYPE_APP_JSON;
                static ENC_TYPE_FORM = constants["public"].ENC_TYPE_FORM;
                constructor(options = {}){
                    super("VideomailClient", options_mergeWithDefaultOptions(options));
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
                setLimitSeconds(limitSeconds) {
                    if (this.options.video.limitSeconds === limitSeconds) return void this.options.logger.debug(`Client: setLimitSeconds called but limitSeconds is already ${limitSeconds}, doing nothing.`);
                    this.options.video.limitSeconds = limitSeconds;
                    this.options.logger.debug(`Client: setLimitSeconds (limitSeconds = ${limitSeconds})`);
                    this.container.setLimitSeconds(limitSeconds);
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
                    this.once("REPLAY_SHOWN", ()=>{
                        this.container.showReplayOnly();
                        this.container.loadForm(videomail);
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
        })();
        return __webpack_exports__;
    })());
