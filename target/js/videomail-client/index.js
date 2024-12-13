(function(root, factory) {
    if ('object' == typeof exports && 'object' == typeof module) module.exports = factory(require("get-form-data"), require("document-visibility"), require("ua-parser-js"), require("animitter"), require("canvas-to-buffer"), require("audio-sample"), require("websocket-stream"), require("deepmerge"), require("superagent"), require("defined"), require("hidden"), require("is-power-of-two"), require("contains"), require("nanoevents"));
    else if ('function' == typeof define && define.amd) define([
        "get-form-data",
        "document-visibility",
        "ua-parser-js",
        "animitter",
        "canvas-to-buffer",
        "audio-sample",
        "websocket-stream",
        "deepmerge",
        "superagent",
        "defined",
        "hidden",
        "is-power-of-two",
        "contains",
        "nanoevents"
    ], factory);
    else if ('object' == typeof exports) exports["VideomailClient"] = factory(require("get-form-data"), require("document-visibility"), require("ua-parser-js"), require("animitter"), require("canvas-to-buffer"), require("audio-sample"), require("websocket-stream"), require("deepmerge"), require("superagent"), require("defined"), require("hidden"), require("is-power-of-two"), require("contains"), require("nanoevents"));
    else root["VideomailClient"] = factory(root["get-form-data"], root["document-visibility"], root["ua-parser-js"], root["animitter"], root["canvas-to-buffer"], root["audio-sample"], root["websocket-stream"], root["deepmerge"], root["superagent"], root["defined"], root["hidden"], root["is-power-of-two"], root["contains"], root["nanoevents"]);
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_get_form_data__, __WEBPACK_EXTERNAL_MODULE_document_visibility__, __WEBPACK_EXTERNAL_MODULE_ua_parser_js__, __WEBPACK_EXTERNAL_MODULE_animitter__, __WEBPACK_EXTERNAL_MODULE_canvas_to_buffer__, __WEBPACK_EXTERNAL_MODULE_audio_sample__, __WEBPACK_EXTERNAL_MODULE_websocket_stream__, __WEBPACK_EXTERNAL_MODULE_deepmerge__, __WEBPACK_EXTERNAL_MODULE_superagent__, __WEBPACK_EXTERNAL_MODULE_defined__, __WEBPACK_EXTERNAL_MODULE_hidden__, __WEBPACK_EXTERNAL_MODULE_is_power_of_two__, __WEBPACK_EXTERNAL_MODULE_contains__, __WEBPACK_EXTERNAL_MODULE_nanoevents__)=>(()=>{
        var __webpack_modules__ = {
            "./node_modules/base64-js/index.js": function(__unused_webpack_module, exports1) {
                "use strict";
                exports1.byteLength = byteLength;
                exports1.toByteArray = toByteArray;
                exports1.fromByteArray = fromByteArray;
                var lookup = [];
                var revLookup = [];
                var Arr = 'undefined' != typeof Uint8Array ? Uint8Array : Array;
                var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                for(var i = 0, len = code.length; i < len; ++i){
                    lookup[i] = code[i];
                    revLookup[code.charCodeAt(i)] = i;
                }
                // Support decoding URL-safe base64 strings, as Node.js does.
                // See: https://en.wikipedia.org/wiki/Base64#URL_applications
                revLookup['-'.charCodeAt(0)] = 62;
                revLookup['_'.charCodeAt(0)] = 63;
                function getLens(b64) {
                    var len = b64.length;
                    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
                    // Trim off extra bytes after placeholder bytes are found
                    // See: https://github.com/beatgammit/base64-js/issues/42
                    var validLen = b64.indexOf('=');
                    if (-1 === validLen) validLen = len;
                    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
                    return [
                        validLen,
                        placeHoldersLen
                    ];
                }
                // base64 is 4/3 + up to two characters of the original data
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
                    // if there are placeholders, only get up to the last complete 4 chars
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
                    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
                    ;
                    var parts = [];
                    var maxChunkLength = 16383 // must be multiple of 3
                    ;
                    // go through the array every three bytes, we'll deal with trailing stuff later
                    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
                    // pad the end with zeros, but make sure to not forget the extra bytes
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
            "./node_modules/buffer/index.js": function(__unused_webpack_module, exports1, __webpack_require__) {
                "use strict";
                /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ var base64 = __webpack_require__("./node_modules/base64-js/index.js");
                var ieee754 = __webpack_require__("./node_modules/ieee754/index.js");
                var customInspectSymbol = 'function' == typeof Symbol && 'function' // eslint-disable-line dot-notation
                 == typeof Symbol['for'] ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
                 : null;
                exports1.Buffer = Buffer;
                exports1.INSPECT_MAX_BYTES = 50;
                var K_MAX_LENGTH = 0x7fffffff;
                /**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
                if (!Buffer.TYPED_ARRAY_SUPPORT && 'undefined' != typeof console && 'function' == typeof console.error) console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
                function typedArraySupport() {
                    // Can typed array instances can be augmented?
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
                    // Return an augmented `Uint8Array` instance
                    var buf = new Uint8Array(length);
                    Object.setPrototypeOf(buf, Buffer.prototype);
                    return buf;
                }
                /**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
                    // Common case.
                    if ('number' == typeof arg) {
                        if ('string' == typeof encodingOrOffset) throw new TypeError('The "string" argument must be of type string. Received type number');
                        return allocUnsafe(arg);
                    }
                    return from(arg, encodingOrOffset, length);
                }
                Buffer.poolSize = 8192 // not used by this implementation
                ;
                function from(value, encodingOrOffset, length) {
                    if ('string' == typeof value) return fromString(value, encodingOrOffset);
                    if (ArrayBuffer.isView(value)) return fromArrayView(value);
                    if (null == value) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
                    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
                    if ('undefined' != typeof SharedArrayBuffer && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
                    if ('number' == typeof value) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    var valueOf = value.valueOf && value.valueOf();
                    if (null != valueOf && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
                    var b = fromObject(value);
                    if (b) return b;
                    if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof value[Symbol.toPrimitive]) return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
                }
                /**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
                    return from(value, encodingOrOffset, length);
                };
                // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
                // https://github.com/feross/buffer/pull/148
                Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
                Object.setPrototypeOf(Buffer, Uint8Array);
                function assertSize(size) {
                    if ('number' != typeof size) throw new TypeError('"size" argument must be of type number');
                    if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
                }
                function alloc(size, fill, encoding) {
                    assertSize(size);
                    if (size <= 0) return createBuffer(size);
                    if (void 0 !== fill) // Only pay attention to encoding if it's a string. This
                    // prevents accidentally sending in a number that would
                    // be interpreted as a start offset.
                    return 'string' == typeof encoding ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
                    return createBuffer(size);
                }
                /**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
                    return alloc(size, fill, encoding);
                };
                function allocUnsafe(size) {
                    assertSize(size);
                    return createBuffer(size < 0 ? 0 : 0 | checked(size));
                }
                /**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
                    return allocUnsafe(size);
                };
                /**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
                    return allocUnsafe(size);
                };
                function fromString(string, encoding) {
                    if ('string' != typeof encoding || '' === encoding) encoding = 'utf8';
                    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
                    var length = 0 | byteLength(string, encoding);
                    var buf = createBuffer(length);
                    var actual = buf.write(string, encoding);
                    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
                    // cause everything after the first invalid character to be ignored. (e.g.
                    // 'abxxcd' will be treated as 'ab')
                    buf = buf.slice(0, actual);
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
                    // Return an augmented `Uint8Array` instance
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
                    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
                    // length is NaN (which is otherwise coerced to zero.)
                    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
                    return 0 | length;
                }
                Buffer.isBuffer = function(b) {
                    return null != b && true === b._isBuffer && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
                    ;
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
                        if (isInstance(buf, Uint8Array)) {
                            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
                            else Uint8Array.prototype.set.call(buffer, buf, pos);
                        } else if (Buffer.isBuffer(buf)) buf.copy(buffer, pos);
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
                    // Use a for loop to avoid recursion
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
                            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
                            ;
                            encoding = ('' + encoding).toLowerCase();
                            loweredCase = true;
                    }
                }
                Buffer.byteLength = byteLength;
                function slowToString(encoding, start, end) {
                    var loweredCase = false;
                    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
                    // property of a typed array.
                    // This behaves neither like String nor Uint8Array in that we set start/end
                    // to their upper/lower bounds if the value passed is out of range.
                    // undefined is handled specially as per ECMA-262 6th Edition,
                    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
                    if (void 0 === start || start < 0) start = 0;
                    // Return early if start > this.length. Done here to prevent potential uint32
                    // coercion fail below.
                    if (start > this.length) return '';
                    if (void 0 === end || end > this.length) end = this.length;
                    if (end <= 0) return '';
                    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
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
                // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
                // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
                // reliably in a browserify context because there could be multiple different
                // copies of the 'buffer' package in use. This method works even for Buffer
                // instances that were created from another copy of the `buffer` package.
                // See: https://github.com/feross/buffer/issues/154
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
                // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
                // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
                //
                // Arguments:
                // - buffer - a Buffer to search
                // - val - a string, Buffer, or number
                // - byteOffset - an index into `buffer`; will be clamped to an int32
                // - encoding - an optional encoding, relevant is val is a string
                // - dir - true for indexOf, false for lastIndexOf
                function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                    // Empty buffer means no match
                    if (0 === buffer.length) return -1;
                    // Normalize byteOffset
                    if ('string' == typeof byteOffset) {
                        encoding = byteOffset;
                        byteOffset = 0;
                    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
                    else if (byteOffset < -2147483648) byteOffset = -2147483648;
                    byteOffset = +byteOffset // Coerce to Number.
                    ;
                    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
                    byteOffset = dir ? 0 : buffer.length - 1;
                    // Normalize byteOffset: negative offsets start from the end of the buffer
                    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                    if (byteOffset >= buffer.length) {
                        if (dir) return -1;
                        byteOffset = buffer.length - 1;
                    } else if (byteOffset < 0) {
                        if (!dir) return -1;
                        byteOffset = 0;
                    }
                    // Normalize val
                    if ('string' == typeof val) val = Buffer.from(val, encoding);
                    // Finally, search either indexOf (if dir is true) or lastIndexOf
                    if (Buffer.isBuffer(val)) {
                        // Special case: looking for empty string/buffer always fails
                        if (0 === val.length) return -1;
                        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                    }
                    if ('number' == typeof val) {
                        val &= 0xFF // Search for a byte value [0-255]
                        ;
                        if ('function' == typeof Uint8Array.prototype.indexOf) {
                            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                        }
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
                    // Buffer#write(string)
                    if (void 0 === offset) {
                        encoding = 'utf8';
                        length = this.length;
                        offset = 0;
                    // Buffer#write(string, encoding)
                    } else if (void 0 === length && 'string' == typeof offset) {
                        encoding = offset;
                        length = this.length;
                        offset = 0;
                    // Buffer#write(string, offset[, length][, encoding])
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
                            // Warning: maxLength not taken into account in base64Write
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
                            // we did not generate a valid codePoint so insert a
                            // replacement char (U+FFFD) and advance only 1 byte
                            codePoint = 0xFFFD;
                            bytesPerSequence = 1;
                        } else if (codePoint > 0xFFFF) {
                            // encode to utf16 (surrogate pair dance)
                            codePoint -= 0x10000;
                            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
                            codePoint = 0xDC00 | 0x3FF & codePoint;
                        }
                        res.push(codePoint);
                        i += bytesPerSequence;
                    }
                    return decodeCodePointsArray(res);
                }
                // Based on http://stackoverflow.com/a/22747272/680742, the browser with
                // the lowest limit is Chrome, with 0x10000 args.
                // We go 1 magnitude less, for safety
                var MAX_ARGUMENTS_LENGTH = 0x1000;
                function decodeCodePointsArray(codePoints) {
                    var len = codePoints.length;
                    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
                    ;
                    // Decode in chunks to avoid "call stack size exceeded".
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
                    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
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
                    // Return an augmented `Uint8Array` instance
                    Object.setPrototypeOf(newBuf, Buffer.prototype);
                    return newBuf;
                };
                /*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
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
                    value = +value;
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
                    value = +value;
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
                    value = +value;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
                    this[offset] = 0xff & value;
                    return offset + 1;
                };
                Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
                    value = +value;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
                    this[offset] = 0xff & value;
                    this[offset + 1] = value >>> 8;
                    return offset + 2;
                };
                Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
                    value = +value;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
                    this[offset] = value >>> 8;
                    this[offset + 1] = 0xff & value;
                    return offset + 2;
                };
                Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
                    value = +value;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
                    this[offset + 3] = value >>> 24;
                    this[offset + 2] = value >>> 16;
                    this[offset + 1] = value >>> 8;
                    this[offset] = 0xff & value;
                    return offset + 4;
                };
                Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
                    value = +value;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = 0xff & value;
                    return offset + 4;
                };
                Buffer.prototype.writeIntLE = function(value, offset, byteLength, noAssert) {
                    value = +value;
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
                        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
                    }
                    return offset + byteLength;
                };
                Buffer.prototype.writeIntBE = function(value, offset, byteLength, noAssert) {
                    value = +value;
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
                        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
                    }
                    return offset + byteLength;
                };
                Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
                    value = +value;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
                    if (value < 0) value = 0xff + value + 1;
                    this[offset] = 0xff & value;
                    return offset + 1;
                };
                Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
                    value = +value;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
                    this[offset] = 0xff & value;
                    this[offset + 1] = value >>> 8;
                    return offset + 2;
                };
                Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
                    value = +value;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
                    this[offset] = value >>> 8;
                    this[offset + 1] = 0xff & value;
                    return offset + 2;
                };
                Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
                    value = +value;
                    offset >>>= 0;
                    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
                    this[offset] = 0xff & value;
                    this[offset + 1] = value >>> 8;
                    this[offset + 2] = value >>> 16;
                    this[offset + 3] = value >>> 24;
                    return offset + 4;
                };
                Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
                    value = +value;
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
                    value = +value;
                    offset >>>= 0;
                    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
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
                    value = +value;
                    offset >>>= 0;
                    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
                    ieee754.write(buf, value, offset, littleEndian, 52, 8);
                    return offset + 8;
                }
                Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
                    return writeDouble(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
                    return writeDouble(this, value, offset, false, noAssert);
                };
                // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
                Buffer.prototype.copy = function(target, targetStart, start, end) {
                    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
                    if (!start) start = 0;
                    if (!end && 0 !== end) end = this.length;
                    if (targetStart >= target.length) targetStart = target.length;
                    if (!targetStart) targetStart = 0;
                    if (end > 0 && end < start) end = start;
                    // Copy 0 bytes; we're done
                    if (end === start) return 0;
                    if (0 === target.length || 0 === this.length) return 0;
                    // Fatal error conditions
                    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
                    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
                    if (end < 0) throw new RangeError('sourceEnd out of bounds');
                    // Are we oob?
                    if (end > this.length) end = this.length;
                    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
                    var len = end - start;
                    if (this === target && 'function' == typeof Uint8Array.prototype.copyWithin) // Use built-in when available, missing from IE11
                    this.copyWithin(targetStart, start, end);
                    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
                    return len;
                };
                // Usage:
                //    buffer.fill(number[, offset[, end]])
                //    buffer.fill(buffer[, offset[, end]])
                //    buffer.fill(string[, offset[, end]][, encoding])
                Buffer.prototype.fill = function(val, start, end, encoding) {
                    // Handle string cases:
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
                            if ('utf8' === encoding && code < 128 || 'latin1' === encoding) // Fast path: If `val` fits into a single byte, use that numeric value.
                            val = code;
                        }
                    } else if ('number' == typeof val) val &= 255;
                    else if ('boolean' == typeof val) val = Number(val);
                    // Invalid ranges are not set to a default, so can range check early.
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
                // HELPER FUNCTIONS
                // ================
                var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
                function base64clean(str) {
                    // Node takes equal signs as end of the Base64 encoding
                    str = str.split('=')[0];
                    // Node strips out invalid characters like \n and \t from the string, base64-js does not
                    str = str.trim().replace(INVALID_BASE64_RE, '');
                    // Node converts strings with length < 2 to ''
                    if (str.length < 2) return '';
                    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
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
                        // is surrogate component
                        if (codePoint > 0xD7FF && codePoint < 0xE000) {
                            // last char was a lead
                            if (!leadSurrogate) {
                                // no lead yet
                                if (codePoint > 0xDBFF) {
                                    // unexpected trail
                                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                                    continue;
                                }
                                if (i + 1 === length) {
                                    // unpaired lead
                                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                                    continue;
                                }
                                // valid lead
                                leadSurrogate = codePoint;
                                continue;
                            }
                            // 2 leads in a row
                            if (codePoint < 0xDC00) {
                                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                                leadSurrogate = codePoint;
                                continue;
                            }
                            // valid surrogate pair
                            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
                        } else if (leadSurrogate) // valid bmp char, but last char was a lead
                        {
                            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                        }
                        leadSurrogate = null;
                        // encode utf8
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
                    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
                    byteArray.push(0xFF & str.charCodeAt(i));
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
                // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
                // the `instanceof` check but they should be treated as of that type.
                // See: https://github.com/feross/buffer/issues/166
                function isInstance(obj, type) {
                    return obj instanceof type || null != obj && null != obj.constructor && null != obj.constructor.name && obj.constructor.name === type.name;
                }
                function numberIsNaN(obj) {
                    // For IE11 support
                    return obj !== obj // eslint-disable-line no-self-compare
                    ;
                }
                // Create lookup table for `toString('hex')`
                // See: https://github.com/feross/buffer/issues/219
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
            "./node_modules/call-bind/callBound.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var GetIntrinsic = __webpack_require__("./node_modules/get-intrinsic/index.js");
                var callBind = __webpack_require__("./node_modules/call-bind/index.js");
                var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));
                module1.exports = function(name, allowMissing) {
                    var intrinsic = GetIntrinsic(name, !!allowMissing);
                    if ('function' == typeof intrinsic && $indexOf(name, '.prototype.') > -1) return callBind(intrinsic);
                    return intrinsic;
                };
            },
            "./node_modules/call-bind/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var bind = __webpack_require__("./node_modules/function-bind/index.js");
                var GetIntrinsic = __webpack_require__("./node_modules/get-intrinsic/index.js");
                var setFunctionLength = __webpack_require__("./node_modules/set-function-length/index.js");
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                var $apply = GetIntrinsic('%Function.prototype.apply%');
                var $call = GetIntrinsic('%Function.prototype.call%');
                var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
                var $defineProperty = __webpack_require__("./node_modules/es-define-property/index.js");
                var $max = GetIntrinsic('%Math.max%');
                module1.exports = function(originalFunction) {
                    if ('function' != typeof originalFunction) throw new $TypeError('a function is required');
                    var func = $reflectApply(bind, $call, arguments);
                    return setFunctionLength(func, 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
                };
                var applyBind = function() {
                    return $reflectApply(bind, $apply, arguments);
                };
                if ($defineProperty) $defineProperty(module1.exports, 'apply', {
                    value: applyBind
                });
                else module1.exports.apply = applyBind;
            },
            "./node_modules/define-data-property/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $defineProperty = __webpack_require__("./node_modules/es-define-property/index.js");
                var $SyntaxError = __webpack_require__("./node_modules/es-errors/syntax.js");
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                var gopd = __webpack_require__("./node_modules/gopd/index.js");
                /** @type {import('.')} */ module1.exports = function(obj, property, value) {
                    if (!obj || 'object' != typeof obj && 'function' != typeof obj) throw new $TypeError('`obj` must be an object or a function`');
                    if ('string' != typeof property && 'symbol' != typeof property) throw new $TypeError('`property` must be a string or a symbol`');
                    if (arguments.length > 3 && 'boolean' != typeof arguments[3] && null !== arguments[3]) throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
                    if (arguments.length > 4 && 'boolean' != typeof arguments[4] && null !== arguments[4]) throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
                    if (arguments.length > 5 && 'boolean' != typeof arguments[5] && null !== arguments[5]) throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
                    if (arguments.length > 6 && 'boolean' != typeof arguments[6]) throw new $TypeError('`loose`, if provided, must be a boolean');
                    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
                    var nonWritable = arguments.length > 4 ? arguments[4] : null;
                    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
                    var loose = arguments.length > 6 && arguments[6];
                    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!gopd && gopd(obj, property);
                    if ($defineProperty) $defineProperty(obj, property, {
                        configurable: null === nonConfigurable && desc ? desc.configurable : !nonConfigurable,
                        enumerable: null === nonEnumerable && desc ? desc.enumerable : !nonEnumerable,
                        value: value,
                        writable: null === nonWritable && desc ? desc.writable : !nonWritable
                    });
                    else if (!loose && (nonEnumerable || nonWritable || nonConfigurable)) throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
                    else // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
                    obj[property] = value; // eslint-disable-line no-param-reassign
                };
            },
            "./node_modules/es-define-property/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var GetIntrinsic = __webpack_require__("./node_modules/get-intrinsic/index.js");
                /** @type {import('.')} */ var $defineProperty = GetIntrinsic('%Object.defineProperty%', true) || false;
                if ($defineProperty) try {
                    $defineProperty({}, 'a', {
                        value: 1
                    });
                } catch (e) {
                    // IE 8 has a broken defineProperty
                    $defineProperty = false;
                }
                module1.exports = $defineProperty;
            },
            "./node_modules/es-errors/eval.js": function(module1) {
                "use strict";
                /** @type {import('./eval')} */ module1.exports = EvalError;
            },
            "./node_modules/es-errors/index.js": function(module1) {
                "use strict";
                /** @type {import('.')} */ module1.exports = Error;
            },
            "./node_modules/es-errors/range.js": function(module1) {
                "use strict";
                /** @type {import('./range')} */ module1.exports = RangeError;
            },
            "./node_modules/es-errors/ref.js": function(module1) {
                "use strict";
                /** @type {import('./ref')} */ module1.exports = ReferenceError;
            },
            "./node_modules/es-errors/syntax.js": function(module1) {
                "use strict";
                /** @type {import('./syntax')} */ module1.exports = SyntaxError;
            },
            "./node_modules/es-errors/type.js": function(module1) {
                "use strict";
                /** @type {import('./type')} */ module1.exports = TypeError;
            },
            "./node_modules/es-errors/uri.js": function(module1) {
                "use strict";
                /** @type {import('./uri')} */ module1.exports = URIError;
            },
            "./node_modules/for-each/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var isCallable = __webpack_require__("./node_modules/is-callable/index.js");
                var toStr = Object.prototype.toString;
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                var forEachArray = function(array, iterator, receiver) {
                    for(var i = 0, len = array.length; i < len; i++)if (hasOwnProperty.call(array, i)) {
                        if (null == receiver) iterator(array[i], i, array);
                        else iterator.call(receiver, array[i], i, array);
                    }
                };
                var forEachString = function(string, iterator, receiver) {
                    for(var i = 0, len = string.length; i < len; i++)// no such thing as a sparse string.
                    if (null == receiver) iterator(string.charAt(i), i, string);
                    else iterator.call(receiver, string.charAt(i), i, string);
                };
                var forEachObject = function(object, iterator, receiver) {
                    for(var k in object)if (hasOwnProperty.call(object, k)) {
                        if (null == receiver) iterator(object[k], k, object);
                        else iterator.call(receiver, object[k], k, object);
                    }
                };
                var forEach = function(list, iterator, thisArg) {
                    if (!isCallable(iterator)) throw new TypeError('iterator must be a function');
                    var receiver;
                    if (arguments.length >= 3) receiver = thisArg;
                    if ('[object Array]' === toStr.call(list)) forEachArray(list, iterator, receiver);
                    else if ('string' == typeof list) forEachString(list, iterator, receiver);
                    else forEachObject(list, iterator, receiver);
                };
                module1.exports = forEach;
            },
            "./node_modules/function-bind/implementation.js": function(module1) {
                "use strict";
                /* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
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
            "./node_modules/function-bind/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");
                module1.exports = Function.prototype.bind || implementation;
            },
            "./node_modules/get-intrinsic/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var undefined;
                var $Error = __webpack_require__("./node_modules/es-errors/index.js");
                var $EvalError = __webpack_require__("./node_modules/es-errors/eval.js");
                var $RangeError = __webpack_require__("./node_modules/es-errors/range.js");
                var $ReferenceError = __webpack_require__("./node_modules/es-errors/ref.js");
                var $SyntaxError = __webpack_require__("./node_modules/es-errors/syntax.js");
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                var $URIError = __webpack_require__("./node_modules/es-errors/uri.js");
                var $Function = Function;
                // eslint-disable-next-line consistent-return
                var getEvalledConstructor = function(expressionSyntax) {
                    try {
                        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
                    } catch (e) {}
                };
                var $gOPD = Object.getOwnPropertyDescriptor;
                if ($gOPD) try {
                    $gOPD({}, '');
                } catch (e) {
                    $gOPD = null; // this is IE 8, which has a broken gOPD
                }
                var throwTypeError = function() {
                    throw new $TypeError();
                };
                var ThrowTypeError = $gOPD ? function() {
                    try {
                        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
                        arguments.callee; // IE 8 does not throw here
                        return throwTypeError;
                    } catch (calleeThrows) {
                        try {
                            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
                            return $gOPD(arguments, 'callee').get;
                        } catch (gOPDthrows) {
                            return throwTypeError;
                        }
                    }
                }() : throwTypeError;
                var hasSymbols = __webpack_require__("./node_modules/has-symbols/index.js")();
                var hasProto = __webpack_require__("./node_modules/has-proto/index.js")();
                var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
                    return x.__proto__;
                } // eslint-disable-line no-proto
                 : null);
                var needsEval = {};
                var TypedArray = 'undefined' != typeof Uint8Array && getProto ? getProto(Uint8Array) : undefined;
                var INTRINSICS = {
                    __proto__: null,
                    '%AggregateError%': 'undefined' == typeof AggregateError ? undefined : AggregateError,
                    '%Array%': Array,
                    '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? undefined : ArrayBuffer,
                    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
                    '%AsyncFromSyncIteratorPrototype%': undefined,
                    '%AsyncFunction%': needsEval,
                    '%AsyncGenerator%': needsEval,
                    '%AsyncGeneratorFunction%': needsEval,
                    '%AsyncIteratorPrototype%': needsEval,
                    '%Atomics%': 'undefined' == typeof Atomics ? undefined : Atomics,
                    '%BigInt%': 'undefined' == typeof BigInt ? undefined : BigInt,
                    '%BigInt64Array%': 'undefined' == typeof BigInt64Array ? undefined : BigInt64Array,
                    '%BigUint64Array%': 'undefined' == typeof BigUint64Array ? undefined : BigUint64Array,
                    '%Boolean%': Boolean,
                    '%DataView%': 'undefined' == typeof DataView ? undefined : DataView,
                    '%Date%': Date,
                    '%decodeURI%': decodeURI,
                    '%decodeURIComponent%': decodeURIComponent,
                    '%encodeURI%': encodeURI,
                    '%encodeURIComponent%': encodeURIComponent,
                    '%Error%': $Error,
                    '%eval%': eval,
                    '%EvalError%': $EvalError,
                    '%Float32Array%': 'undefined' == typeof Float32Array ? undefined : Float32Array,
                    '%Float64Array%': 'undefined' == typeof Float64Array ? undefined : Float64Array,
                    '%FinalizationRegistry%': 'undefined' == typeof FinalizationRegistry ? undefined : FinalizationRegistry,
                    '%Function%': $Function,
                    '%GeneratorFunction%': needsEval,
                    '%Int8Array%': 'undefined' == typeof Int8Array ? undefined : Int8Array,
                    '%Int16Array%': 'undefined' == typeof Int16Array ? undefined : Int16Array,
                    '%Int32Array%': 'undefined' == typeof Int32Array ? undefined : Int32Array,
                    '%isFinite%': isFinite,
                    '%isNaN%': isNaN,
                    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
                    '%JSON%': 'object' == typeof JSON ? JSON : undefined,
                    '%Map%': 'undefined' == typeof Map ? undefined : Map,
                    '%MapIteratorPrototype%': 'undefined' != typeof Map && hasSymbols && getProto ? getProto(new Map()[Symbol.iterator]()) : undefined,
                    '%Math%': Math,
                    '%Number%': Number,
                    '%Object%': Object,
                    '%parseFloat%': parseFloat,
                    '%parseInt%': parseInt,
                    '%Promise%': 'undefined' == typeof Promise ? undefined : Promise,
                    '%Proxy%': 'undefined' == typeof Proxy ? undefined : Proxy,
                    '%RangeError%': $RangeError,
                    '%ReferenceError%': $ReferenceError,
                    '%Reflect%': 'undefined' == typeof Reflect ? undefined : Reflect,
                    '%RegExp%': RegExp,
                    '%Set%': 'undefined' == typeof Set ? undefined : Set,
                    '%SetIteratorPrototype%': 'undefined' != typeof Set && hasSymbols && getProto ? getProto(new Set()[Symbol.iterator]()) : undefined,
                    '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? undefined : SharedArrayBuffer,
                    '%String%': String,
                    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
                    '%Symbol%': hasSymbols ? Symbol : undefined,
                    '%SyntaxError%': $SyntaxError,
                    '%ThrowTypeError%': ThrowTypeError,
                    '%TypedArray%': TypedArray,
                    '%TypeError%': $TypeError,
                    '%Uint8Array%': 'undefined' == typeof Uint8Array ? undefined : Uint8Array,
                    '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? undefined : Uint8ClampedArray,
                    '%Uint16Array%': 'undefined' == typeof Uint16Array ? undefined : Uint16Array,
                    '%Uint32Array%': 'undefined' == typeof Uint32Array ? undefined : Uint32Array,
                    '%URIError%': $URIError,
                    '%WeakMap%': 'undefined' == typeof WeakMap ? undefined : WeakMap,
                    '%WeakRef%': 'undefined' == typeof WeakRef ? undefined : WeakRef,
                    '%WeakSet%': 'undefined' == typeof WeakSet ? undefined : WeakSet
                };
                if (getProto) try {
                    null.error; // eslint-disable-line no-unused-expressions
                } catch (e) {
                    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
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
                var $concat = bind.call(Function.call, Array.prototype.concat);
                var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
                var $replace = bind.call(Function.call, String.prototype.replace);
                var $strSlice = bind.call(Function.call, String.prototype.slice);
                var $exec = bind.call(Function.call, RegExp.prototype.exec);
                /* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
                var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
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
                /* end adaptation */ var getBaseIntrinsic = function(name, allowMissing) {
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
                                // By convention, when a data property is converted to an accessor
                                // property to emulate a data property that does not suffer from
                                // the override mistake, that accessor's getter is marked with
                                // an `originalValue` property. Here, when we detect this, we
                                // uphold the illusion by pretending to see that original data
                                // property, i.e., returning the value rather than the getter
                                // itself.
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
            "./node_modules/gopd/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var GetIntrinsic = __webpack_require__("./node_modules/get-intrinsic/index.js");
                var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
                if ($gOPD) try {
                    $gOPD([], 'length');
                } catch (e) {
                    // IE 8 has a broken gOPD
                    $gOPD = null;
                }
                module1.exports = $gOPD;
            },
            "./node_modules/has-property-descriptors/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $defineProperty = __webpack_require__("./node_modules/es-define-property/index.js");
                var hasPropertyDescriptors = function() {
                    return !!$defineProperty;
                };
                hasPropertyDescriptors.hasArrayLengthDefineBug = function() {
                    // node v0.6 has a bug where array lengths can be Set but not Defined
                    if (!$defineProperty) return null;
                    try {
                        return 1 !== $defineProperty([], 'length', {
                            value: 1
                        }).length;
                    } catch (e) {
                        // In Firefox 4-22, defining length on an array throws an exception.
                        return true;
                    }
                };
                module1.exports = hasPropertyDescriptors;
            },
            "./node_modules/has-proto/index.js": function(module1) {
                "use strict";
                var test = {
                    __proto__: null,
                    foo: {}
                };
                var $Object = Object;
                /** @type {import('.')} */ module1.exports = function() {
                    // @ts-expect-error: TS errors on an inherited property for some reason
                    return ({
                        __proto__: test
                    }).foo === test.foo && !(test instanceof $Object);
                };
            },
            "./node_modules/has-symbols/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var origSymbol = 'undefined' != typeof Symbol && Symbol;
                var hasSymbolSham = __webpack_require__("./node_modules/has-symbols/shams.js");
                module1.exports = function() {
                    if ('function' != typeof origSymbol) return false;
                    if ('function' != typeof Symbol) return false;
                    if ('symbol' != typeof origSymbol('foo')) return false;
                    if ('symbol' != typeof Symbol('bar')) return false;
                    return hasSymbolSham();
                };
            },
            "./node_modules/has-symbols/shams.js": function(module1) {
                "use strict";
                /* eslint complexity: [2, 18], max-statements: [2, 33] */ module1.exports = function() {
                    if ('function' != typeof Symbol || 'function' != typeof Object.getOwnPropertySymbols) return false;
                    if ('symbol' == typeof Symbol.iterator) return true;
                    var obj = {};
                    var sym = Symbol('test');
                    var symObj = Object(sym);
                    if ('string' == typeof sym) return false;
                    if ('[object Symbol]' !== Object.prototype.toString.call(sym)) return false;
                    if ('[object Symbol]' !== Object.prototype.toString.call(symObj)) return false;
                    // temp disabled per https://github.com/ljharb/object.assign/issues/17
                    // if (sym instanceof Symbol) { return false; }
                    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
                    // if (!(symObj instanceof Symbol)) { return false; }
                    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
                    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
                    var symVal = 42;
                    obj[sym] = symVal;
                    for(sym in obj)return false;
                     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
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
            "./node_modules/has-tostringtag/shams.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js");
                /** @type {import('.')} */ module1.exports = function() {
                    return hasSymbols() && !!Symbol.toStringTag;
                };
            },
            "./node_modules/hasown/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var call = Function.prototype.call;
                var $hasOwn = Object.prototype.hasOwnProperty;
                var bind = __webpack_require__("./node_modules/function-bind/index.js");
                /** @type {import('.')} */ module1.exports = bind.call(call, $hasOwn);
            },
            "./node_modules/ieee754/index.js": function(__unused_webpack_module, exports1) {
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
            "./node_modules/inherits/inherits_browser.js": function(module1) {
                if ('function' == typeof Object.create) // implementation from standard node.js 'util' module
                module1.exports = function(ctor, superCtor) {
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
                else // old school shim for old browsers
                module1.exports = function(ctor, superCtor) {
                    if (superCtor) {
                        ctor.super_ = superCtor;
                        var TempCtor = function() {};
                        TempCtor.prototype = superCtor.prototype;
                        ctor.prototype = new TempCtor();
                        ctor.prototype.constructor = ctor;
                    }
                };
            },
            "./node_modules/is-arguments/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var hasToStringTag = __webpack_require__("./node_modules/has-tostringtag/shams.js")();
                var callBound = __webpack_require__("./node_modules/call-bind/callBound.js");
                var $toString = callBound('Object.prototype.toString');
                var isStandardArguments = function(value) {
                    if (hasToStringTag && value && 'object' == typeof value && Symbol.toStringTag in value) return false;
                    return '[object Arguments]' === $toString(value);
                };
                var isLegacyArguments = function(value) {
                    if (isStandardArguments(value)) return true;
                    return null !== value && 'object' == typeof value && 'number' == typeof value.length && value.length >= 0 && '[object Array]' !== $toString(value) && '[object Function]' === $toString(value.callee);
                };
                var supportsStandardArguments = function() {
                    return isStandardArguments(arguments);
                }();
                isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
                module1.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
            },
            "./node_modules/is-callable/index.js": function(module1) {
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
                    // eslint-disable-next-line no-throw-literal
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
                        return false; // not a function
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
                var ddaClass = '[object HTMLAllCollection]'; // IE 11
                var ddaClass2 = '[object HTML document.all class]';
                var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
                var hasToStringTag = 'function' == typeof Symbol && !!Symbol.toStringTag; // better: use `has-tostringtag`
                var isIE68 = !(0 in [
                    , 
                ]); // eslint-disable-line no-sparse-arrays, comma-spacing
                var isDDA = function() {
                    return false;
                };
                if ('object' == typeof document) {
                    // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
                    var all = document.all;
                    if (toStr.call(all) === toStr.call(document.all)) isDDA = function(value) {
                        /* globals document: false */ // in IE 6-8, typeof document.all is "object" and it's truthy
                        if ((isIE68 || !value) && (void 0 === value || 'object' == typeof value)) try {
                            var str = toStr.call(value);
                            return (str === ddaClass || str === ddaClass2 || str === ddaClass3 // opera 12.16
                             || str === objectClass // IE 6-8
                            ) && null == value(''); // eslint-disable-line eqeqeq
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
            "./node_modules/is-generator-function/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var toStr = Object.prototype.toString;
                var fnToStr = Function.prototype.toString;
                var isFnRegex = /^\s*(?:function)?\*/;
                var hasToStringTag = __webpack_require__("./node_modules/has-tostringtag/shams.js")();
                var getProto = Object.getPrototypeOf;
                var getGeneratorFunc = function() {
                    if (!hasToStringTag) return false;
                    try {
                        return Function('return function*() {}')();
                    } catch (e) {}
                };
                var GeneratorFunction;
                module1.exports = function(fn) {
                    if ('function' != typeof fn) return false;
                    if (isFnRegex.test(fnToStr.call(fn))) return true;
                    if (!hasToStringTag) {
                        var str = toStr.call(fn);
                        return '[object GeneratorFunction]' === str;
                    }
                    if (!getProto) return false;
                    if (void 0 === GeneratorFunction) {
                        var generatorFunc = getGeneratorFunc();
                        GeneratorFunction = !!generatorFunc && getProto(generatorFunc);
                    }
                    return getProto(fn) === GeneratorFunction;
                };
            },
            "./node_modules/is-typed-array/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var whichTypedArray = __webpack_require__("./node_modules/which-typed-array/index.js");
                /** @type {import('.')} */ module1.exports = function(value) {
                    return !!whichTypedArray(value);
                };
            },
            "./node_modules/possible-typed-array-names/index.js": function(module1) {
                "use strict";
                /** @type {import('.')} */ module1.exports = [
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
            "./node_modules/process/browser.js": function(module1) {
                // shim for using process in browser
                var process = module1.exports = {};
                // cached from whatever global is present so that test runners that stub it
                // don't break things.  But we need to wrap it in a try catch in case it is
                // wrapped in strict mode code which doesn't define any globals.  It's inside a
                // function because try/catches deoptimize in certain engines.
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
                    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
                    return setTimeout(fun, 0);
                    // if setTimeout wasn't available but was latter defined
                    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                        cachedSetTimeout = setTimeout;
                        return setTimeout(fun, 0);
                    }
                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        return cachedSetTimeout(fun, 0);
                    } catch (e) {
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                            return cachedSetTimeout.call(null, fun, 0);
                        } catch (e) {
                            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                            return cachedSetTimeout.call(this, fun, 0);
                        }
                    }
                }
                function runClearTimeout(marker) {
                    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
                    return clearTimeout(marker);
                    // if clearTimeout wasn't available but was latter defined
                    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                        cachedClearTimeout = clearTimeout;
                        return clearTimeout(marker);
                    }
                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        return cachedClearTimeout(marker);
                    } catch (e) {
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                            return cachedClearTimeout.call(null, marker);
                        } catch (e) {
                            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
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
                // v8 likes predictible objects
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
                process.version = ''; // empty string to avoid regexp issues
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
            "./node_modules/set-function-length/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var GetIntrinsic = __webpack_require__("./node_modules/get-intrinsic/index.js");
                var define1 = __webpack_require__("./node_modules/define-data-property/index.js");
                var hasDescriptors = __webpack_require__("./node_modules/has-property-descriptors/index.js")();
                var gOPD = __webpack_require__("./node_modules/gopd/index.js");
                var $TypeError = __webpack_require__("./node_modules/es-errors/type.js");
                var $floor = GetIntrinsic('%Math.floor%');
                /** @type {import('.')} */ module1.exports = function(fn, length) {
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
                    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) hasDescriptors ? define1(/** @type {Parameters<define>[0]} */ fn, 'length', length, true, true) : define1(/** @type {Parameters<define>[0]} */ fn, 'length', length);
                    return fn;
                };
            },
            "./node_modules/util/support/isBufferBrowser.js": function(module1) {
                module1.exports = function(arg) {
                    return arg && 'object' == typeof arg && 'function' == typeof arg.copy && 'function' == typeof arg.fill && 'function' == typeof arg.readUInt8;
                };
            },
            "./node_modules/util/support/types.js": function(__unused_webpack_module, exports1, __webpack_require__) {
                "use strict";
                // Currently in sync with Node.js lib/internal/util/types.js
                // https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
                var isArgumentsObject = __webpack_require__("./node_modules/is-arguments/index.js");
                var isGeneratorFunction = __webpack_require__("./node_modules/is-generator-function/index.js");
                var whichTypedArray = __webpack_require__("./node_modules/which-typed-array/index.js");
                var isTypedArray = __webpack_require__("./node_modules/is-typed-array/index.js");
                function uncurryThis(f) {
                    return f.call.bind(f);
                }
                var BigIntSupported = 'undefined' != typeof BigInt;
                var SymbolSupported = 'undefined' != typeof Symbol;
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
                // Taken from here and modified for better browser support
                // https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
                function isPromise(input) {
                    return 'undefined' != typeof Promise && input instanceof Promise || null !== input && 'object' == typeof input && 'function' == typeof input.then && 'function' == typeof input.catch;
                }
                exports1.isPromise = isPromise;
                function isArrayBufferView(value) {
                    if ('undefined' != typeof ArrayBuffer && ArrayBuffer.isView) return ArrayBuffer.isView(value);
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
                isMapToString.working = 'undefined' != typeof Map && isMapToString(new Map());
                function isMap(value) {
                    if ('undefined' == typeof Map) return false;
                    return isMapToString.working ? isMapToString(value) : value instanceof Map;
                }
                exports1.isMap = isMap;
                function isSetToString(value) {
                    return '[object Set]' === ObjectToString(value);
                }
                isSetToString.working = 'undefined' != typeof Set && isSetToString(new Set());
                function isSet(value) {
                    if ('undefined' == typeof Set) return false;
                    return isSetToString.working ? isSetToString(value) : value instanceof Set;
                }
                exports1.isSet = isSet;
                function isWeakMapToString(value) {
                    return '[object WeakMap]' === ObjectToString(value);
                }
                isWeakMapToString.working = 'undefined' != typeof WeakMap && isWeakMapToString(new WeakMap());
                function isWeakMap(value) {
                    if ('undefined' == typeof WeakMap) return false;
                    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
                }
                exports1.isWeakMap = isWeakMap;
                function isWeakSetToString(value) {
                    return '[object WeakSet]' === ObjectToString(value);
                }
                isWeakSetToString.working = 'undefined' != typeof WeakSet && isWeakSetToString(new WeakSet());
                function isWeakSet(value) {
                    return isWeakSetToString(value);
                }
                exports1.isWeakSet = isWeakSet;
                function isArrayBufferToString(value) {
                    return '[object ArrayBuffer]' === ObjectToString(value);
                }
                isArrayBufferToString.working = 'undefined' != typeof ArrayBuffer && isArrayBufferToString(new ArrayBuffer());
                function isArrayBuffer(value) {
                    if ('undefined' == typeof ArrayBuffer) return false;
                    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
                }
                exports1.isArrayBuffer = isArrayBuffer;
                function isDataViewToString(value) {
                    return '[object DataView]' === ObjectToString(value);
                }
                isDataViewToString.working = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
                function isDataView(value) {
                    if ('undefined' == typeof DataView) return false;
                    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
                }
                exports1.isDataView = isDataView;
                // Store a copy of SharedArrayBuffer in case it's deleted elsewhere
                var SharedArrayBufferCopy = 'undefined' != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
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
                    return 'undefined' != typeof Uint8Array && (isArrayBuffer(value) || isSharedArrayBuffer(value));
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
            "./node_modules/util/util.js": function(__unused_webpack_module, exports1, __webpack_require__) {
                /* provided dependency */ var process = __webpack_require__("./node_modules/process/browser.js");
                // Copyright Joyent, Inc. and other Node contributors.
                //
                // Permission is hereby granted, free of charge, to any person obtaining a
                // copy of this software and associated documentation files (the
                // "Software"), to deal in the Software without restriction, including
                // without limitation the rights to use, copy, modify, merge, publish,
                // distribute, sublicense, and/or sell copies of the Software, and to permit
                // persons to whom the Software is furnished to do so, subject to the
                // following conditions:
                //
                // The above copyright notice and this permission notice shall be included
                // in all copies or substantial portions of the Software.
                //
                // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
                // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
                // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
                // USE OR OTHER DEALINGS IN THE SOFTWARE.
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
                // Mark that a method should not be used.
                // Returns a modified function which warns once by default.
                // If --no-deprecation is set, then it is a no-op.
                exports1.deprecate = function(fn, msg) {
                    if (void 0 !== process && true === process.noDeprecation) return fn;
                    // Allow for deprecating things in the process of starting up.
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
                    if (!debugs[set]) {
                        if (debugEnvRegex.test(set)) {
                            var pid = process.pid;
                            debugs[set] = function() {
                                var msg = exports1.format.apply(exports1, arguments);
                                console.error('%s %d: %s', set, pid, msg);
                            };
                        } else debugs[set] = function() {};
                    }
                    return debugs[set];
                };
                /**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function inspect(obj, opts) {
                    // default options
                    var ctx = {
                        seen: [],
                        stylize: stylizeNoColor
                    };
                    // legacy...
                    if (arguments.length >= 3) ctx.depth = arguments[2];
                    if (arguments.length >= 4) ctx.colors = arguments[3];
                    if (isBoolean(opts)) // legacy...
                    ctx.showHidden = opts;
                    else if (opts) // got an "options" object
                    exports1._extend(ctx, opts);
                    // set default options
                    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
                    if (isUndefined(ctx.depth)) ctx.depth = 2;
                    if (isUndefined(ctx.colors)) ctx.colors = false;
                    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
                    if (ctx.colors) ctx.stylize = stylizeWithColor;
                    return formatValue(ctx, obj, ctx.depth);
                }
                exports1.inspect = inspect;
                // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
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
                // Don't use 'blue' not visible on cmd.exe
                inspect.styles = {
                    special: 'cyan',
                    number: 'yellow',
                    boolean: 'yellow',
                    undefined: 'grey',
                    null: 'bold',
                    string: 'green',
                    date: 'magenta',
                    // "name": intentionally not styling
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
                    // Provide a hook for user-specified inspect functions.
                    // Check that value is an object with an inspect function on it
                    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
                    value.inspect !== exports1.inspect && // Also filter out any prototype objects using the circular check.
                    !(value.constructor && value.constructor.prototype === value)) {
                        var ret = value.inspect(recurseTimes, ctx);
                        if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
                        return ret;
                    }
                    // Primitive types cannot have properties
                    var primitive = formatPrimitive(ctx, value);
                    if (primitive) return primitive;
                    // Look up the keys of the object.
                    var keys = Object.keys(value);
                    var visibleKeys = arrayToHash(keys);
                    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
                    // IE doesn't make error fields non-enumerable
                    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
                    if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) return formatError(value);
                    // Some type of object without properties can be shortcutted.
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
                    // Make Array say that they are Array
                    if (isArray(value)) {
                        array = true;
                        braces = [
                            '[',
                            ']'
                        ];
                    }
                    // Make functions say that they are functions
                    if (isFunction(value)) {
                        var n = value.name ? ': ' + value.name : '';
                        base = ' [Function' + n + ']';
                    }
                    // Make RegExps say that they are RegExps
                    if (isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
                    // Make dates with properties first say the date
                    if (isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
                    // Make error with message first say the error
                    if (isError(value)) base = ' ' + formatError(value);
                    if (0 === keys.length && (!array || 0 == value.length)) return braces[0] + base + braces[1];
                    if (recurseTimes < 0) {
                        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                        return ctx.stylize('[Object]', 'special');
                    }
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
                    // For some reason typeof null is "object", so special case here.
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
                    if (!str) {
                        if (ctx.seen.indexOf(desc.value) < 0) {
                            str = isNull(recurseTimes) ? formatValue(ctx, desc.value, null) : formatValue(ctx, desc.value, recurseTimes - 1);
                            if (str.indexOf('\n') > -1) str = array ? str.split('\n').map(function(line) {
                                return '  ' + line;
                            }).join('\n').slice(2) : '\n' + str.split('\n').map(function(line) {
                                return '   ' + line;
                            }).join('\n');
                        } else str = ctx.stylize('[Circular]', 'special');
                    }
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
                // NOTE: These type checking functions intentionally don't use `instanceof`
                // because it is fragile and can be easily faked with `Object.create()`.
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
                    return null === arg || 'boolean' == typeof arg || 'number' == typeof arg || 'string' == typeof arg || 'symbol' == typeof arg || // ES6 symbol
                    void 0 === arg;
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
                // 26 Feb 16:19:34
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
                // log is just a thin wrapper to console.log that prepends a timestamp
                exports1.log = function() {
                    console.log('%s - %s', timestamp(), exports1.format.apply(exports1, arguments));
                };
                /**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */ exports1.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
                exports1._extend = function(origin, add) {
                    // Don't do anything if add isn't an object
                    if (!add || !isObject(add)) return origin;
                    var keys = Object.keys(add);
                    var i = keys.length;
                    while(i--)origin[keys[i]] = add[keys[i]];
                    return origin;
                };
                function hasOwnProperty(obj, prop) {
                    return Object.prototype.hasOwnProperty.call(obj, prop);
                }
                var kCustomPromisifiedSymbol = 'undefined' != typeof Symbol ? Symbol('util.promisify.custom') : void 0;
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
                    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
                    // Because `null` is a special error value in callbacks which means "no error
                    // occurred", we error-wrap so the callback consumer can distinguish between
                    // "the promise rejected with null" or "the promise fulfilled with undefined".
                    if (!reason) {
                        var newReason = new Error('Promise was rejected with a falsy value');
                        newReason.reason = reason;
                        reason = newReason;
                    }
                    return cb(reason);
                }
                function callbackify(original) {
                    if ('function' != typeof original) throw new TypeError('The "original" argument must be of type Function');
                    // We DO NOT return the promise as it gives the user a false sense that
                    // the promise is actually somehow related to the callback's execution
                    // and that the callback throwing will reject the promise.
                    function callbackified() {
                        var args = [];
                        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
                        var maybeCb = args.pop();
                        if ('function' != typeof maybeCb) throw new TypeError('The last argument must be of type Function');
                        var self = this;
                        var cb = function() {
                            return maybeCb.apply(self, arguments);
                        };
                        // In true node style we process the callback on `nextTick` with all the
                        // implications (stack, `uncaughtException`, `async_hooks`)
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
            "./node_modules/which-typed-array/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var forEach = __webpack_require__("./node_modules/for-each/index.js");
                var availableTypedArrays = __webpack_require__("./node_modules/available-typed-arrays/index.js");
                var callBind = __webpack_require__("./node_modules/call-bind/index.js");
                var callBound = __webpack_require__("./node_modules/call-bind/callBound.js");
                var gOPD = __webpack_require__("./node_modules/gopd/index.js");
                /** @type {(O: object) => string} */ var $toString = callBound('Object.prototype.toString');
                var hasToStringTag = __webpack_require__("./node_modules/has-tostringtag/shams.js")();
                var g = 'undefined' == typeof globalThis ? __webpack_require__.g : globalThis;
                var typedArrays = availableTypedArrays();
                var $slice = callBound('String.prototype.slice');
                var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
                /** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */ var $indexOf = callBound('Array.prototype.indexOf', true) || function(array, value) {
                    for(var i = 0; i < array.length; i += 1)if (array[i] === value) return i;
                    return -1;
                };
                /** @typedef {(receiver: import('.').TypedArray) => string | typeof Uint8Array.prototype.slice.call | typeof Uint8Array.prototype.set.call} Getter */ /** @type {{ [k in `\$${import('.').TypedArrayName}`]?: Getter } & { __proto__: null }} */ var cache = {
                    __proto__: null
                };
                hasToStringTag && gOPD && getPrototypeOf ? forEach(typedArrays, function(typedArray) {
                    var arr = new g[typedArray]();
                    if (Symbol.toStringTag in arr) {
                        var proto = getPrototypeOf(arr);
                        // @ts-expect-error TS won't narrow inside a closure
                        var descriptor = gOPD(proto, Symbol.toStringTag);
                        if (!descriptor) {
                            var superProto = getPrototypeOf(proto);
                            // @ts-expect-error TS won't narrow inside a closure
                            descriptor = gOPD(superProto, Symbol.toStringTag);
                        }
                        // @ts-expect-error TODO: fix
                        cache['$' + typedArray] = callBind(descriptor.get);
                    }
                }) : forEach(typedArrays, function(typedArray) {
                    var arr = new g[typedArray]();
                    var fn = arr.slice || arr.set;
                    if (fn) // @ts-expect-error TODO: fix
                    cache['$' + typedArray] = callBind(fn);
                });
                /** @type {(value: object) => false | import('.').TypedArrayName} */ var tryTypedArrays = function(value) {
                    /** @type {ReturnType<typeof tryAllTypedArrays>} */ var found = false;
                    forEach(// eslint-disable-next-line no-extra-parens
                    /** @type {Record<`\$${TypedArrayName}`, Getter>} */ /** @type {any} */ cache, /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function(getter, typedArray) {
                        if (!found) try {
                            // @ts-expect-error TODO: fix
                            if ('$' + getter(value) === typedArray) found = $slice(typedArray, 1);
                        } catch (e) {}
                    });
                    return found;
                };
                /** @type {(value: object) => false | import('.').TypedArrayName} */ var trySlices = function(value) {
                    /** @type {ReturnType<typeof tryAllSlices>} */ var found = false;
                    forEach(// eslint-disable-next-line no-extra-parens
                    /** @type {Record<`\$${TypedArrayName}`, Getter>} */ /** @type {any} */ cache, /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */ function(getter, name) {
                        if (!found) try {
                            // @ts-expect-error TODO: fix
                            getter(value);
                            found = $slice(name, 1);
                        } catch (e) {}
                    });
                    return found;
                };
                /** @type {import('.')} */ module1.exports = function(value) {
                    if (!value || 'object' != typeof value) return false;
                    if (!hasToStringTag) {
                        /** @type {string} */ var tag = $slice($toString(value), 8, -1);
                        if ($indexOf(typedArrays, tag) > -1) return tag;
                        if ('Object' !== tag) return false;
                        // node < 0.6 hits here on real Typed Arrays
                        return trySlices(value);
                    }
                    if (!gOPD) return null;
                     // unknown engine
                    return tryTypedArrays(value);
                };
            },
            "../../node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[9].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[9].use[2]!../../node_modules/stylus-loader/dist/cjs.js??ruleSet[1].rules[9].use[3]!./src/styles/main.styl": function(module1, __webpack_exports__, __webpack_require__) {
                "use strict";
                __webpack_require__.d(__webpack_exports__, {
                    Z: function() {
                        return __WEBPACK_DEFAULT_EXPORT__;
                    }
                });
                /* ESM import */ var _node_modules_rsbuild_core_compiled_css_loader_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js");
                /* ESM import */ var _node_modules_rsbuild_core_compiled_css_loader_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_rsbuild_core_compiled_css_loader_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
                /* ESM import */ var _node_modules_rsbuild_core_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@rsbuild/core/compiled/css-loader/api.js");
                /* ESM import */ var _node_modules_rsbuild_core_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_rsbuild_core_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_1__);
                // Imports
                var ___CSS_LOADER_EXPORT___ = _node_modules_rsbuild_core_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_rsbuild_core_compiled_css_loader_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
                // Module
                ___CSS_LOADER_EXPORT___.push([
                    module1.id,
                    '@keyframes blink{0%{opacity:.9}35%{opacity:.9}50%{opacity:.1}85%{opacity:.1}to{opacity:.9}}.videomail .visuals{position:relative}.videomail .visuals video.replay{width:100%;height:100%}.videomail .countdown,.videomail .recordTimer,.videomail .recordNote,.videomail .pausedHeader,.videomail .pausedHint{height:auto;margin:0}.videomail .countdown,.videomail .recordTimer,.videomail .recordNote,.videomail .paused,.videomail .facingMode,.videomail noscript{z-index:100;position:absolute}.videomail .countdown,.videomail .recordTimer,.videomail .recordNote,.videomail .pausedHeader,.videomail .pausedHint,.videomail noscript{font-weight:700}.videomail .countdown,.videomail .paused,.videomail noscript{width:100%;top:50%;transform:translateY(-50%)}.videomail .pausedHeader,.videomail .pausedHint,.videomail .countdown{text-align:center;letter-spacing:4px;text-shadow:-2px 0 #fff,0 2px #fff,2px 0 #fff,0 -2px #fff}.videomail .pausedHeader,.videomail .countdown{opacity:.9;font-size:460%}.videomail .pausedHint{font-size:150%}.videomail .facingMode{color:#f5f5f5e6;z-index:10;background:#1e1e1e80;border:none;outline:none;padding:.1em .3em;font-family:monospace;font-size:1.2em;transition:all .2s;bottom:.6em;right:.7em}.videomail .facingMode:hover{cursor:pointer;background:#323232b3}.videomail .recordTimer,.videomail .recordNote{color:#00d814;opacity:.9;background:#0a0a0acc;padding:.3em .4em;font-family:monospace;transition:all 1s;right:.7em}.videomail .recordTimer.near,.videomail .recordNote.near{color:#eb9369}.videomail .recordTimer.nigh,.videomail .recordNote.nigh{color:#ea4b2a}.videomail .recordTimer{top:.7em}.videomail .recordNote{top:3.6em}.videomail .recordNote:before{content:"REC";animation:1s infinite blink}.videomail .notifier{box-sizing:border-box;overflow:hidden}.videomail .radioGroup{display:block}.videomail .radioGroup label{cursor:pointer}.videomail video{margin-bottom:0}.videomail video.userMedia{background-color:#3232321a}',
                    ""
                ]);
                // Exports
                /* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
            },
            animitter: function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_animitter__;
            },
            "audio-sample": function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_audio_sample__;
            },
            "canvas-to-buffer": function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_canvas_to_buffer__;
            },
            contains: function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_contains__;
            },
            deepmerge: function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_deepmerge__;
            },
            defined: function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_defined__;
            },
            "document-visibility": function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_document_visibility__;
            },
            "get-form-data": function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_get_form_data__;
            },
            hidden: function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_hidden__;
            },
            "is-power-of-two": function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_is_power_of_two__;
            },
            nanoevents: function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_nanoevents__;
            },
            superagent: function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_superagent__;
            },
            "ua-parser-js": function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_ua_parser_js__;
            },
            "websocket-stream": function(module1) {
                "use strict";
                module1.exports = __WEBPACK_EXTERNAL_MODULE_websocket_stream__;
            },
            "./node_modules/@rsbuild/core/compiled/css-loader/api.js": function(module1) {
                "use strict";
                /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/ module1.exports = function(cssWithMappingToString) {
                    var list = [];
                    // return the list of modules as css string
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
                    // import a list of modules into the list
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
                                if (void 0 !== layer) {
                                    if (void 0 === item[5]) item[5] = layer;
                                    else {
                                        item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
                                        item[5] = layer;
                                    }
                                }
                                if (media) {
                                    if (item[2]) {
                                        item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                                        item[2] = media;
                                    } else item[2] = media;
                                }
                                if (supports) {
                                    if (item[4]) {
                                        item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
                                        item[4] = supports;
                                    } else item[4] = "".concat(supports);
                                }
                                list.push(item);
                            }
                        }
                    };
                    return list;
                };
            },
            "./node_modules/@rsbuild/core/compiled/css-loader/noSourceMaps.js": function(module1) {
                "use strict";
                module1.exports = function(i) {
                    return i[1];
                };
            },
            "./node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js": function(module1) {
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
            "./node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js": function(module1) {
                "use strict";
                var memo = {};
                /* istanbul ignore next  */ function getTarget(target) {
                    if (void 0 === memo[target]) {
                        var styleTarget = document.querySelector(target);
                        // Special case to return head of iframe instead of iframe itself
                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) try {
                            // This will throw an exception if access to iframe is blocked
                            // due to cross-origin restrictions
                            styleTarget = styleTarget.contentDocument.head;
                        } catch (e) {
                            // istanbul ignore next
                            styleTarget = null;
                        }
                        memo[target] = styleTarget;
                    }
                    return memo[target];
                }
                /* istanbul ignore next  */ function insertBySelector(insert, style) {
                    var target = getTarget(insert);
                    if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    target.appendChild(style);
                }
                module1.exports = insertBySelector;
            },
            "./node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js": function(module1) {
                "use strict";
                /* istanbul ignore next  */ function insertStyleElement(options) {
                    var element = document.createElement("style");
                    options.setAttributes(element, options.attributes);
                    options.insert(element, options.options);
                    return element;
                }
                module1.exports = insertStyleElement;
            },
            "./node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                /* istanbul ignore next  */ function setAttributesWithoutAttributes(styleElement) {
                    var nonce = __webpack_require__.nc;
                    if (nonce) styleElement.setAttribute("nonce", nonce);
                }
                module1.exports = setAttributesWithoutAttributes;
            },
            "./node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js": function(module1) {
                "use strict";
                /* istanbul ignore next  */ function apply(styleElement, options, obj) {
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
                    if (sourceMap && "undefined" != typeof btoa) css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                    // For old IE
                    /* istanbul ignore if  */ options.styleTagTransform(css, styleElement, options.options);
                }
                function removeStyleElement(styleElement) {
                    // istanbul ignore if
                    if (null === styleElement.parentNode) return false;
                    styleElement.parentNode.removeChild(styleElement);
                }
                /* istanbul ignore next  */ function domAPI(options) {
                    if ("undefined" == typeof document) return {
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
            "./node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js": function(module1) {
                "use strict";
                /* istanbul ignore next  */ function styleTagTransform(css, styleElement) {
                    if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
                    else {
                        while(styleElement.firstChild)styleElement.removeChild(styleElement.firstChild);
                        styleElement.appendChild(document.createTextNode(css));
                    }
                }
                module1.exports = styleTagTransform;
            },
            "./node_modules/available-typed-arrays/index.js": function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var possibleNames = __webpack_require__("./node_modules/possible-typed-array-names/index.js");
                var g = 'undefined' == typeof globalThis ? __webpack_require__.g : globalThis;
                /** @type {import('.')} */ module1.exports = function() {
                    var /** @type {ReturnType<typeof availableTypedArrays>} */ out = [];
                    for(var i = 0; i < possibleNames.length; i++)if ('function' == typeof g[possibleNames[i]]) // @ts-expect-error
                    out[out.length] = possibleNames[i];
                    return out;
                };
            }
        };
        /************************************************************************/ // The module cache
        var __webpack_module_cache__ = {};
        // The require function
        function __webpack_require__(moduleId) {
            // Check if module is in cache
            var cachedModule = __webpack_module_cache__[moduleId];
            if (void 0 !== cachedModule) return cachedModule.exports;
            // Create a new module (and put it into the cache)
            var module1 = __webpack_module_cache__[moduleId] = {
                id: moduleId,
                exports: {}
            };
            // Execute the module function
            __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__);
            // Return the exports of the module
            return module1.exports;
        }
        /************************************************************************/ // webpack/runtime/compat_get_default_export
        (()=>{
            // getDefaultExport function for compatibility with non-ESM modules
            __webpack_require__.n = function(module1) {
                var getter = module1 && module1.__esModule ? function() {
                    return module1['default'];
                } : function() {
                    return module1;
                };
                __webpack_require__.d(getter, {
                    a: getter
                });
                return getter;
            };
        })();
        // webpack/runtime/define_property_getters
        (()=>{
            __webpack_require__.d = function(exports1, definition) {
                for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
                    enumerable: true,
                    get: definition[key]
                });
            };
        })();
        // webpack/runtime/global
        (()=>{
            __webpack_require__.g = function() {
                if ('object' == typeof globalThis) return globalThis;
                try {
                    return this || new Function('return this')();
                } catch (e) {
                    if ('object' == typeof window) return window;
                }
            }();
        })();
        // webpack/runtime/has_own_property
        (()=>{
            __webpack_require__.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            };
        })();
        // webpack/runtime/make_namespace_object
        (()=>{
            // define __esModule on exports
            __webpack_require__.r = function(exports1) {
                if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
                    value: 'Module'
                });
                Object.defineProperty(exports1, '__esModule', {
                    value: true
                });
            };
        })();
        // webpack/runtime/nonce
        (()=>{
            __webpack_require__.nc = void 0;
        })();
        /************************************************************************/ var __webpack_exports__ = {};
        // This entry need to be wrapped in an IIFE because it need to be in strict mode.
        (()=>{
            "use strict";
            // ESM COMPAT FLAG
            __webpack_require__.r(__webpack_exports__);
            // EXPORTS
            __webpack_require__.d(__webpack_exports__, {
                VideoType: ()=>/* reexport */ VideoType_VideoType,
                VideomailClient: ()=>/* reexport */ client
            });
            // constants (changing these only break down functionality, so be careful)
            /* ESM default export */ const constants = {
                SITE_NAME_LABEL: "x-videomail-site-name",
                VERSION_LABEL: "videomailClientVersion",
                public: {
                    ENC_TYPE_APP_JSON: "application/json",
                    ENC_TYPE_FORM: "application/x-www-form-urlencoded"
                }
            };
            // EXTERNAL MODULE: external "superagent"
            var external_superagent_ = __webpack_require__("superagent");
            var external_superagent_default = /*#__PURE__*/ __webpack_require__.n(external_superagent_);
            // EXTERNAL MODULE: ./node_modules/util/util.js
            var util = __webpack_require__("./node_modules/util/util.js");
            var util_default = /*#__PURE__*/ __webpack_require__.n(util);
            function inspect(element) {
                return util_default().inspect(element, {
                    colors: true,
                    compact: true,
                    depth: 4,
                    breakLength: 1 / 0
                }).replace(/\s+/gu, " ").replace(/\r?\n/gu, "");
            }
            function pretty_pretty(anything) {
                if (anything instanceof HTMLElement) {
                    if (anything.id) return `#${anything.id}`;
                    if (anything.className) return `.${anything.className}`;
                    return "(No HTML identifier available)";
                }
                return inspect(anything);
            }
            /* ESM default export */ const pretty = pretty_pretty;
            function isAudioEnabled(options) {
                return options.audio.enabled;
            }
            // TODO Change to state
            function setAudioEnabled(enabled, options) {
                options.audio.enabled = enabled;
                return options;
            }
            function isAutoPauseEnabled(options) {
                return options.enableAutoPause && options.enablePause;
            }
            // EXTERNAL MODULE: external "defined"
            var external_defined_ = __webpack_require__("defined");
            var external_defined_default = /*#__PURE__*/ __webpack_require__.n(external_defined_);
            // EXTERNAL MODULE: external "ua-parser-js"
            var external_ua_parser_js_ = __webpack_require__("ua-parser-js");
            function canPlayType_canPlayType(video, type) {
                const canPlayType = video.canPlayType(`video/${type}`);
                // definitely cannot be played here
                if ("" === canPlayType) return false;
                return canPlayType;
            }
            /* ESM default export */ const media_canPlayType = canPlayType_canPlayType;
            var VideoType_VideoType = /*#__PURE__*/ function(VideoType) {
                VideoType["WebM"] = "webm";
                VideoType["MP4"] = "mp4";
                return VideoType;
            }({});
            const FALLBACK_VIDEO_TYPE = VideoType_VideoType.MP4;
            class Browser_Browser {
                options;
                result;
                videoType;
                constructor(options){
                    this.options = options;
                    const ua = external_defined_default()(options.fakeUaString, window.navigator.userAgent, "");
                    const userAgentParser = new external_ua_parser_js_.UAParser(ua);
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
                // TODO What if there are any other mobile OS out there?
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
                    if (this.videoType !== VideoType_VideoType.WebM && this.videoType !== VideoType_VideoType.MP4) // We only support these two. Anything else defaults to the fallback
                    this.videoType = FALLBACK_VIDEO_TYPE;
                    if ("" === this.videoType.trim()) // Just as a fallback
                    this.videoType = FALLBACK_VIDEO_TYPE;
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
            /* ESM default export */ const Browser = Browser_Browser;
            let getBrowser_browser;
            function getBrowser_getBrowser(localOptions) {
                if (!getBrowser_browser) getBrowser_browser = new Browser(localOptions);
                return getBrowser_browser;
            }
            /* ESM default export */ const getBrowser = getBrowser_getBrowser;
            class HTTPError extends Error {
                code;
                status;
            }
            /* ESM default export */ const error_HTTPError = HTTPError;
            class VideomailError extends error_HTTPError {
                title = "videomail-client error";
                location = window.location.href;
                explanation;
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
                    const browser = getBrowser(options);
                    const usefulClientData = browser.getUsefulData();
                    this.browser = usefulClientData.browser;
                    // Only when architecture is set, pass it over
                    if (usefulClientData.cpu.architecture) this.cpu = usefulClientData.cpu;
                    this.device = usefulClientData.device.type ? usefulClientData.device : void 0;
                    this.engine = usefulClientData.engine;
                    this.os = usefulClientData.os;
                    const cookie = __webpack_require__.g.document.cookie.split("; ");
                    this.cookie = cookie.length > 0 ? cookie.join(",\n") : void 0;
                    this.screen = [
                        screen.width,
                        screen.height,
                        screen.colorDepth
                    ].join("×");
                    // Needed for unit tests
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                    if (screen.orientation) this.orientation = screen.orientation.type.toString();
                    this.err = errData?.err;
                    const stackTarget = errData?.cause || errData?.err;
                    if (stackTarget) // Maintains proper stack trace for where our error was thrown (only available on V8)
                    Error.captureStackTrace(stackTarget, VideomailError);
                }
                hasClass(name) {
                    return this.classList?.includes(name);
                }
                isBrowserProblem() {
                    return this.hasClass(VideomailError.BROWSER_PROBLEM);
                }
                // this one is useful so that the notifier can have different css classes
                getClassList() {
                    return this.classList;
                }
            }
            /* ESM default export */ const error_VideomailError = VideomailError;
            function createError(errorParams) {
                const { exc, options } = errorParams;
                let err = errorParams.err;
                if (!err && exc instanceof Error) err = exc;
                if (err instanceof error_VideomailError) return err;
                let message = errorParams.message;
                let explanation = errorParams.explanation;
                const classList = errorParams.classList ?? [];
                const audioEnabled = isAudioEnabled(options);
                const browser = getBrowser(options);
                const errName = err?.name ?? err?.constructor.name;
                switch(errName){
                    case error_VideomailError.SECURITY_ERROR:
                        message = "The operation was insecure";
                        explanation = "Probably you have disallowed Cookies for this page?";
                        classList.push(error_VideomailError.BROWSER_PROBLEM);
                        break;
                    case error_VideomailError.OVERCONSTRAINED:
                        message = "Invalid webcam constraints";
                        explanation = err && "constraint" in err ? "width" === err.constraint ? "Your webcam does not meet the width requirement." : `Unmet constraint: ${err.constraint}` : err?.message;
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
                        explanation = pretty(err);
                        break;
                    /*
     * Chrome has a weird problem where if you try to do a getUserMedia request too early, it
     * can return a MediaDeviceNotSupported error (even though nothing is wrong and permission
     * has been granted). Look at userMediaErrorCallback() in recorder, there we do not
     * emit those kind of errors further and just retry.
     *
     * but for whatever reasons, if it happens to reach this code, then investigate this further.
     */ case error_VideomailError.MEDIA_DEVICE_NOT_SUPPORTED:
                        message = "Media device not supported";
                        explanation = pretty(err);
                        break;
                    default:
                        {
                            const originalExplanation = explanation;
                            if (explanation && "object" == typeof explanation) explanation = pretty(explanation);
                            /*
       * it can be that explanation itself is an error object
       * error objects can be prettified to undefined sometimes
       */ if (!explanation && originalExplanation) explanation = `Inspected: ${originalExplanation}`;
                            if (!message && err?.message) message = err.message;
                            // for weird, undefined cases
                            if (!message) {
                                if (errName) message = `${errName} (weird)`;
                                if (!explanation) explanation = pretty(err);
                                // avoid dupes
                                if (pretty(message) === explanation) explanation = void 0;
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
            /* ESM default export */ const error_createError = createError;
            // EXTERNAL MODULE: external "get-form-data"
            var external_get_form_data_ = __webpack_require__("get-form-data");
            var external_get_form_data_default = /*#__PURE__*/ __webpack_require__.n(external_get_form_data_);
            // EXTERNAL MODULE: external "hidden"
            var external_hidden_ = __webpack_require__("hidden");
            var external_hidden_default = /*#__PURE__*/ __webpack_require__.n(external_hidden_);
            // EXTERNAL MODULE: external "nanoevents"
            var external_nanoevents_ = __webpack_require__("nanoevents");
            class Despot {
                name;
                options;
                // The one and only, instantiate it only once and keep it global.
                // https://github.com/ai/nanoevents
                static EMITTER = (0, external_nanoevents_.createNanoEvents)();
                constructor(name, options){
                    this.name = name;
                    this.options = options;
                }
                emit(eventName, ...params) {
                    const firstParam = params[0];
                    const showParams = firstParam && ("object" != typeof firstParam || "object" == typeof firstParam && Object.keys(firstParam).filter(Boolean).length > 0);
                    if (showParams) this.options.logger.debug(`${this.name} emits ${eventName} with ${pretty(params)}`);
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
                // eslint-disable-next-line class-methods-use-this
                on(eventName, callback) {
                    return Despot.EMITTER.on(eventName, callback);
                }
                once(eventName, listener) {
                    const callback = (...params)=>{
                        unbind();
                        params.length > 0 ? // Safely call listener with params
                        listener(...params) : // Safely call listener with no params
                        listener();
                    };
                    // TODO Fix force typing later
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
            /* ESM default export */ const util_Despot = Despot;
            const REGEX = /^[\s,]+|[\s,]+$/gu;
            // fixes https://github.com/binarykitchen/videomail-client/issues/71
            function trimEmail(email) {
                return email.replace(REGEX, "");
            }
            function trimEmails(emails) {
                return emails.split(REGEX).map((email)=>trimEmail(email));
            }
            function isNotButton_isNotButton(element) {
                return "BUTTON" !== element.tagName && "submit" !== element.getAttribute("type");
            }
            /* ESM default export */ const isNotButton = isNotButton_isNotButton;
            var form_FormMethod = /*#__PURE__*/ function(FormMethod) {
                FormMethod["POST"] = "post";
                FormMethod["PUT"] = "put";
                FormMethod["GET"] = "get";
                return FormMethod;
            }({});
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
                    return external_get_form_data_default()(this.formElement, {
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
                            // Always disable them, they can't be changed
                            if (name === this.options.selectors.toInputName || name === this.options.selectors.subjectInputName || name === this.options.selectors.bodyInputName) formControl.setAttribute("disabled", "disabled");
                        }
                    }
                    this.formElement.setAttribute("method", "put");
                }
                setDisabled(disabled, buttonsToo) {
                    for (const formControl of this.formElement.elements)if (buttonsToo || isNotButton(formControl)) {
                        if (disabled) formControl.setAttribute("disabled", "disabled");
                        else formControl.removeAttribute("disabled");
                    }
                }
                hideAll() {
                    for (const formElement of this.formElement.elements)external_hidden_default()(formElement, true);
                    // Just do not hide the form itself when it act as a container
                    if (!this.formElement.classList.contains(this.options.selectors.containerClass)) external_hidden_default()(this.formElement, true);
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
                        /*
       * beware that preview doesn't always come with a key, i.E.
       * container.show() can emit PREVIEW without a key when a replay already exists
       * (can happen when showing - hiding - showing videomail over again)
       */ // only emit error if key is missing AND the input has no key (value) yet
                        if (params?.key || this.keyInput?.value) {
                            if (params?.key && this.keyInput) {
                                this.keyInput.value = params.key;
                                // Important so that any other JS framework can detect changes
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
                    /*
       * else leave as it and use existing keyInput.value
       */ });
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
                        /*
       * since https://github.com/binarykitchen/videomail-client/issues/60
       * we hide areas to make it easier for the user to process an error
       * (= less distractions)
       */ if (this.options.adjustFormOnBrowserError) this.hideAll();
                        else if (params.err?.isBrowserProblem()) this.hideSubmitButton();
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
                    external_hidden_default()(submitButton, true);
                }
                unload() {
                    this.options.logger.debug("Form: unload()");
                    this.removeAllInputListeners();
                    util_Despot.removeAllListeners();
                    this.stopListeningToSubmitEvents();
                    this.resetForm();
                }
                resetForm() {
                    // It can be set to put before when e.g. correcting, so revert to default
                    this.formElement.setAttribute("method", "");
                    // This resets all except hidden inputs
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
                        this.options.logger.debug(`Form: doTheSubmit(${pretty(e)})`);
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
                    // important to stop submission
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
                    external_hidden_default()(this.formElement, true);
                }
                show() {
                    external_hidden_default()(this.formElement, false);
                }
            }
            /* ESM default export */ const wrappers_form = Form;
            function findOriginalExc(exc) {
                if (exc instanceof Error && "response" in exc) {
                    const response = exc.response;
                    const body = response.body;
                    if ("error" in body) {
                        const message = body.error.message;
                        const cause = body.error.cause;
                        const error = new error_HTTPError(message, {
                            cause
                        });
                        if (body.error.name) error.name = body.error.name;
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
                        const request = await external_superagent_default()("get", url).type("json").set("Accept", "application/json").set("Timezone-Id", this.timezoneId).set(constants.SITE_NAME_LABEL, this.options.siteName).timeout(this.options.timeouts.connection);
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
                    if (method === form_FormMethod.PUT && videomail.key) url += videomail.key;
                    try {
                        const request = await external_superagent_default()(method, url).query(queryParams).set("Timezone-Id", this.timezoneId).send(videomail).timeout(this.options.timeouts.connection);
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
                            err: err.err,
                            explanation: err.explanation,
                            location: err.location,
                            logLines: err.logLines,
                            orientation: err.orientation,
                            os: err.os,
                            promise: err.promise,
                            reason: err.reason,
                            screen: err.screen,
                            siteName: err.siteName,
                            status: err.status,
                            title: err.title,
                            message: err.message,
                            stack: err.stack
                        };
                        await external_superagent_default()(form_FormMethod.POST, url).query(queryParams).set("Timezone-Id", this.timezoneId) // Note you cant send the Error instance itself, it has to be a plain JSON
                        .send(fullVideomailErrorData).timeout(this.options.timeouts.connection);
                    } catch (exc) {
                        // Can't throw it again, so just print and do nothing else further.
                        console.error(exc);
                    }
                }
                async post(videomail) {
                    const newVideomail = this.applyDefaultValues(videomail);
                    /*
     * always good to know the version of the client
     * the videomail was submitted with
     */ newVideomail[constants.VERSION_LABEL] = this.options.version;
                    try {
                        let res;
                        if (this.options.callbacks.adjustFormDataBeforePosting) {
                            const adjustedVideomail = this.options.callbacks.adjustFormDataBeforePosting(newVideomail);
                            res = await this.write(form_FormMethod.POST, adjustedVideomail);
                        } else res = await this.write(form_FormMethod.POST, newVideomail);
                        return res;
                    } catch (exc) {
                        throw error_createError({
                            exc: findOriginalExc(exc),
                            options: this.options
                        });
                    }
                }
                async put(videomail) {
                    return await this.write(form_FormMethod.PUT, videomail);
                }
                async form(formData, url) {
                    let formType;
                    switch(this.options.enctype){
                        case constants.public.ENC_TYPE_APP_JSON:
                            formType = "json";
                            break;
                        case constants.public.ENC_TYPE_FORM:
                            formType = "form";
                            break;
                        default:
                            throw error_createError({
                                err: new Error(`Invalid enctype given: ${this.options.enctype}`),
                                options: this.options
                            });
                    }
                    try {
                        const res = await external_superagent_default().post(url).type(formType).set("Timezone-Id", this.timezoneId).send(formData).timeout(this.options.timeouts.connection);
                        return res;
                    } catch (exc) {
                        throw error_createError({
                            exc: findOriginalExc(exc),
                            options: this.options
                        });
                    }
                }
            }
            /* ESM default export */ const src_resource = Resource;
            // EXTERNAL MODULE: external "document-visibility"
            var external_document_visibility_ = __webpack_require__("document-visibility");
            var external_document_visibility_default = /*#__PURE__*/ __webpack_require__.n(external_document_visibility_);
            // EXTERNAL MODULE: external "contains"
            var external_contains_ = __webpack_require__("contains");
            var external_contains_default = /*#__PURE__*/ __webpack_require__.n(external_contains_);
            function disableElement_disableElement(element) {
                if (!element) return;
                if ("INPUT" === element.tagName || "BUTTON" === element.tagName) element.setAttribute("disabled", "true");
                else element.classList.add("disabled");
            }
            /* ESM default export */ const disableElement = disableElement_disableElement;
            function enableElement(element) {
                if (!element) return;
                if ("INPUT" === element.tagName || "BUTTON" === element.tagName) element.removeAttribute("disabled");
                else element.classList.remove("disabled");
            }
            /* ESM default export */ const html_enableElement = enableElement;
            function hideElement_hideElement(element) {
                if (!element) return;
                external_hidden_default()(element, true);
            }
            /* ESM default export */ const hideElement = hideElement_hideElement;
            function showElement_showElement(element) {
                if (!element) return;
                external_hidden_default()(element, false);
            }
            /* ESM default export */ const showElement = showElement_showElement;
            function isShown(element) {
                if (!element) return false;
                return !external_hidden_default()(element);
            }
            /* ESM default export */ const html_isShown = isShown;
            function adjustButton_adjustButton(buttonElement, show, type, disabled) {
                if (disabled) disableElement(buttonElement);
                if (type) buttonElement.type = type;
                if (!show) hideElement(buttonElement);
                return buttonElement;
            }
            /* ESM default export */ const adjustButton = adjustButton_adjustButton;
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
                        // double check that submit button is already in the buttonsElement container as a child?
                        if (this.submitButton && external_contains_default()(this.buttonsElement, this.submitButton)) this.buttonsElement?.insertBefore(radioButtonGroup, this.submitButton);
                        else this.buttonsElement?.appendChild(radioButtonGroup);
                    }
                    radioButtonElement.onchange = options.changeHandler;
                    disableElement(radioButtonElement);
                    return radioButtonElement;
                }
                makeButton(buttonClass, text, clickHandler, show, id, type, selector, disabled = true) {
                    let buttonElement;
                    buttonElement = id ? document.querySelector(`#${id}`) : selector ? document.querySelector(selector) : this.buttonsElement?.querySelector(`.${buttonClass}`);
                    if (buttonElement) buttonElement = adjustButton(buttonElement, show, type, disabled);
                    else {
                        buttonElement = document.createElement("button");
                        buttonElement.classList.add(buttonClass);
                        if (this.options.selectors.buttonClass) buttonElement.classList.add(this.options.selectors.buttonClass);
                        buttonElement = adjustButton(buttonElement, show, type, disabled);
                        buttonElement.innerHTML = text;
                        // double check that submit button is already in the buttonsElement container
                        if (this.submitButton && external_contains_default()(this.buttonsElement, this.submitButton)) this.buttonsElement?.insertBefore(buttonElement, this.submitButton);
                        else this.buttonsElement?.appendChild(buttonElement);
                    }
                    if (clickHandler) this.replaceClickHandler(buttonElement, clickHandler);
                    return buttonElement;
                }
                buildButtons() {
                    if (!this.options.disableSubmit) {
                        if (this.submitButton) disableElement(this.submitButton);
                        else this.submitButton = this.makeButton(this.options.selectors.submitButtonClass, "Submit", void 0, true, this.options.selectors.submitButtonId, "submit", this.options.selectors.submitButtonSelector, this.options.enableAutoValidation);
                        /*
       * no need to listen to the submit event when it's already listened
       * within the form element class
       */ if (!this.container.hasForm()) this.replaceClickHandler(this.submitButton, this.submit.bind(this));
                    }
                    this.recordButton = this.makeButton(this.options.selectors.recordButtonClass, this.options.text.buttons.record, this.record.bind(this), false);
                    if (this.options.enablePause) this.pauseButton = this.makeButton(this.options.selectors.pauseButtonClass, this.options.text.buttons.pause, this.container.pause.bind(this.container), false);
                    if (this.options.enablePause) this.resumeButton = this.makeButton(this.options.selectors.resumeButtonClass, this.options.text.buttons.resume, this.container.resume.bind(this.container), false);
                    /*
     * show stop only when pause is enabled - looks better that way otherwise button
     * move left and right between record and stop (preview)
     */ this.previewButton = this.makeButton(this.options.selectors.previewButtonClass, this.options.text.buttons.preview, this.container.stop.bind(this.container), false);
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
                    // no need to show record button when doing a record again
                    if (!html_isShown(this.recordAgainButton)) {
                        if (!params?.paused) showElement(this.recordButton);
                    }
                    if (!params?.paused) {
                        disableElement(this.previewButton);
                        hideElement(this.previewButton);
                    }
                    if (!this.options.enableAutoValidation) html_enableElement(this.submitButton);
                }
                onGoingBack() {
                    hideElement(this.recordAgainButton);
                    showElement(this.recordButton);
                    showElement(this.submitButton);
                }
                onReplayShown() {
                    this.hide();
                }
                onUserMediaReady(params) {
                    this.onFormReady();
                    if (html_isShown(this.recordButton) && !params.recordWhenReady) html_enableElement(this.recordButton);
                    else if (html_isShown(this.recordAgainButton) && !params.recordWhenReady) html_enableElement(this.recordAgainButton);
                    if (this.options.enableAutoValidation) disableElement(this.submitButton);
                    if (!params.recordWhenReady) {
                        if (html_isShown(this.audioOnRadioPair)) html_enableElement(this.audioOnRadioPair);
                        if (html_isShown(this.audioOffRadioPair)) html_enableElement(this.audioOffRadioPair);
                    }
                }
                onResetting() {
                    disableElement(this.submitButton);
                    this.reset();
                }
                onPreview() {
                    hideElement(this.recordButton);
                    hideElement(this.previewButton);
                    disableElement(this.audioOnRadioPair);
                    disableElement(this.audioOffRadioPair);
                    showElement(this.recordAgainButton);
                    html_enableElement(this.recordAgainButton);
                    if (!this.options.enableAutoValidation) html_enableElement(this.submitButton);
                }
                enableSubmit() {
                    html_enableElement(this.submitButton);
                }
                adjustButtonsForPause() {
                    if (!this.isCountingDown()) {
                        if (this.pauseButton) hideElement(this.pauseButton);
                        showElement(this.resumeButton);
                        html_enableElement(this.resumeButton);
                        hideElement(this.recordButton);
                        showElement(this.previewButton);
                        html_enableElement(this.previewButton);
                    }
                }
                onFirstFrameSent() {
                    hideElement(this.recordButton);
                    hideElement(this.recordAgainButton);
                    if (this.pauseButton) {
                        showElement(this.pauseButton);
                        html_enableElement(this.pauseButton);
                    }
                    html_enableElement(this.previewButton);
                    showElement(this.previewButton);
                }
                onRecording(params) {
                    /*
     * it is possible to hide while recording, hence
     * check framesCount first (coming from recorder)
     */ if (params.framesCount > 1) this.onFirstFrameSent();
                    else {
                        disableElement(this.audioOffRadioPair);
                        disableElement(this.audioOnRadioPair);
                        disableElement(this.recordAgainButton);
                        disableElement(this.recordButton);
                    }
                }
                onResuming() {
                    hideElement(this.resumeButton);
                    hideElement(this.recordButton);
                    if (this.pauseButton) {
                        html_enableElement(this.pauseButton);
                        showElement(this.pauseButton);
                    }
                }
                onStopping() {
                    disableElement(this.previewButton);
                    disableElement(this.recordButton);
                    hideElement(this.pauseButton);
                    hideElement(this.resumeButton);
                }
                onCountdown() {
                    disableElement(this.recordButton);
                    disableElement(this.audioOffRadioPair);
                    disableElement(this.audioOnRadioPair);
                }
                onSubmitting() {
                    this.options.logger.debug("Buttons: onSubmitting()");
                    disableElement(this.submitButton);
                    disableElement(this.recordAgainButton);
                }
                onSubmitted() {
                    disableElement(this.previewButton);
                    disableElement(this.recordAgainButton);
                    disableElement(this.recordButton);
                    disableElement(this.submitButton);
                }
                onInvalid() {
                    if (this.options.enableAutoValidation) disableElement(this.submitButton);
                }
                onValid() {
                    if (this.options.enableAutoValidation) html_enableElement(this.submitButton);
                }
                onHidden() {
                    hideElement(this.recordButton);
                    hideElement(this.previewButton);
                    hideElement(this.recordAgainButton);
                    hideElement(this.resumeButton);
                    hideElement(this.audioOnRadioPair);
                    hideElement(this.audioOffRadioPair);
                }
                onEnablingAudio() {
                    this.options.logger.debug("Buttons: onEnablingAudio()");
                    disableElement(this.recordButton);
                    disableElement(this.audioOnRadioPair);
                    disableElement(this.audioOffRadioPair);
                }
                onDisablingAudio() {
                    this.options.logger.debug("Buttons: onDisablingAudio()");
                    disableElement(this.recordButton);
                    disableElement(this.audioOnRadioPair);
                    disableElement(this.audioOffRadioPair);
                }
                recordAgain() {
                    disableElement(this.recordAgainButton);
                    this.container.beginWaiting();
                    this.container.recordAgain();
                }
                onStartingOver() {
                    showElement(this.submitButton);
                }
                submit() {
                    this.container.submit();
                }
                record() {
                    disableElement(this.recordButton);
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
                        disableElement(this.recordButton);
                        disableElement(this.audioOnRadioPair);
                        disableElement(this.audioOffRadioPair);
                    });
                    this.on("ERROR", (params)=>{
                        /*
       * since https://github.com/binarykitchen/videomail-client/issues/60
       * we hide areas to make it easier for the user
       */ if (params.err?.isBrowserProblem() && this.options.adjustFormOnBrowserError) this.hide();
                    });
                }
                reset() {
                    this.options.logger.debug("Buttons: reset()");
                    disableElement(this.pauseButton);
                    disableElement(this.resumeButton);
                    disableElement(this.recordButton);
                    disableElement(this.previewButton);
                    disableElement(this.recordAgainButton);
                    disableElement(this.audioOnRadioPair);
                    disableElement(this.audioOffRadioPair);
                }
                isRecordAgainButtonEnabled() {
                    return !this.recordAgainButton?.disabled;
                }
                isReady() {
                    if (!this.recordButton) // No recordButton? Ok, must be in playerOnly mode. So, not ready for recording
                    return false;
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
                    this.buildButtons();
                    if (!this.built) this.initEvents();
                    this.built = true;
                }
                unload() {
                    if (this.built) {
                        // Disables all buttons
                        this.reset();
                        this.options.logger.debug("Buttons: unload()");
                        util_Despot.removeAllListeners();
                        this.hide();
                        this.built = false;
                    }
                }
                hide(deep = false) {
                    hideElement(this.buttonsElement);
                    if (deep) {
                        hideElement(this.recordButton);
                        hideElement(this.pauseButton);
                        hideElement(this.resumeButton);
                        hideElement(this.previewButton);
                        hideElement(this.recordAgainButton);
                        hideElement(this.submitButton);
                        hideElement(this.audioOnRadioPair);
                        hideElement(this.audioOffRadioPair);
                    }
                }
                show() {
                    showElement(this.buttonsElement);
                }
                isCountingDown() {
                    return this.container.isCountingDown();
                }
            }
            /* ESM default export */ const buttons = Buttons;
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
                    // keep all callbacks async
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
                    external_hidden_default()(this.countdownElement, false);
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
                    external_hidden_default()(this.countdownElement, true);
                    this.unload();
                }
            }
            /* ESM default export */ const countdown = Countdown;
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
                    external_hidden_default()(this.facingModeElement, true);
                }
                show() {
                    external_hidden_default()(this.facingModeElement, false);
                }
            }
            /* ESM default export */ const facingMode = FacingMode;
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
                    external_hidden_default()(this.pausedBlockElement, true);
                }
                show() {
                    external_hidden_default()(this.pausedBlockElement, false);
                }
            }
            /* ESM default export */ const pausedNote = PausedNote;
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
                    external_hidden_default()(this.recordNoteElement, true);
                }
                show() {
                    external_hidden_default()(this.recordNoteElement, false);
                }
            }
            /* ESM default export */ const recorder_recordNote = RecordNote;
            function pad(n) {
                return n < 10 ? `0${n}` : n;
            }
            /* ESM default export */ const util_pad = pad;
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
                    // performance optimization (another reason we need react here!)
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
                    external_hidden_default()(this.recordTimerElement, true);
                }
                show() {
                    this.recordTimerElement?.classList.remove("near");
                    this.recordTimerElement?.classList.remove("nigh");
                    external_hidden_default()(this.recordTimerElement, false);
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
            /* ESM default export */ const recordTimer = RecordTimer;
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
                    const browser = getBrowser(options);
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
                    this.on("ERROR", this.onResetting.bind(this));
                    this.on("RESETTING", this.onResetting.bind(this));
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
            /* ESM default export */ const recorderInsides = RecorderInsides;
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
                    this.on("USER_MEDIA_READY", ()=>{
                        // Ensure notifier has correct dimensions, especially when stretched
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
                    if (this.notifyElement) external_hidden_default()(this.notifyElement, false);
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
                    const explanation = err.explanation ? err.explanation.toString() : void 0;
                    if (!message) this.options.logger.debug(`Weird empty error message generated for error ${pretty(err)}`);
                    this.notify(message, explanation, {
                        blocking: true,
                        problem: true,
                        classList: err.getClassList(),
                        removeDimensions: getBrowser(this.options).isMobile()
                    });
                }
                // Special treatment to deal with race conditions
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
                        if (this.notifyElement) {
                            if (this.explanationElement) // For rare cases, shouldn't happen to set an explanation without a message
                            this.notifyElement.insertBefore(this.messageElement, this.explanationElement);
                            else this.notifyElement.appendChild(this.messageElement);
                        } else this.options.logger.warn(`Unable to show message ${message} because notifyElement is empty`);
                    }
                    if (message.length > 0) {
                        if (this.messageElement) {
                            const problem = messageOptions?.problem;
                            this.messageElement.innerHTML = (problem ? "&#x2639; " : "") + message;
                        } else this.options.logger.warn("There is no message element for displaying a message");
                    } else this.options.logger.warn("Not going to update notifierMessage element because message is empty");
                    external_hidden_default()(this.messageElement, false);
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
                    external_hidden_default()(this.explanationElement, false);
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
                    if (this.getMessageElement()) external_hidden_default()(this.messageElement, true);
                }
                hideExplanation() {
                    if (this.explanationElement) external_hidden_default()(this.explanationElement, true);
                }
                hide() {
                    this.cancelEntertainment();
                    if (this.notifyElement) {
                        external_hidden_default()(this.notifyElement, true);
                        this.notifyElement.classList.remove("blocking");
                    }
                    this.hideMessage();
                    this.hideExplanation();
                }
                isVisible() {
                    if (!this.built) return false;
                    return this.notifyElement && !external_hidden_default()(this.notifyElement);
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
                    const stillWait = !!notifyOptions.stillWait && notifyOptions.stillWait;
                    const entertain = !!notifyOptions.entertain && notifyOptions.entertain;
                    const blocking = !!notifyOptions.blocking && notifyOptions.blocking;
                    const classList = !!notifyOptions.classList && notifyOptions.classList;
                    const removeDimensions = !!notifyOptions.removeDimensions && notifyOptions.removeDimensions;
                    if (this.notifyElement) {
                        // reset
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
                    /*
     * just as a safety in case if an error is thrown in the middle of the build process
     * and visuals aren't built/shown yet.
     */ this.visuals.showVisuals();
                    this.show();
                    if (!stillWait) this.visuals.endWaiting();
                }
            }
            /* ESM default export */ const notifier = Notifier;
            // EXTERNAL MODULE: external "animitter"
            var external_animitter_ = __webpack_require__("animitter");
            var external_animitter_default = /*#__PURE__*/ __webpack_require__.n(external_animitter_);
            // EXTERNAL MODULE: external "canvas-to-buffer"
            var external_canvas_to_buffer_ = __webpack_require__("canvas-to-buffer");
            var external_canvas_to_buffer_default = /*#__PURE__*/ __webpack_require__.n(external_canvas_to_buffer_);
            // EXTERNAL MODULE: external "websocket-stream"
            var external_websocket_stream_ = __webpack_require__("websocket-stream");
            var external_websocket_stream_default = /*#__PURE__*/ __webpack_require__.n(external_websocket_stream_);
            function isPromise_isPromise(anything) {
                return anything && "undefined" != typeof Promise && anything instanceof Promise;
            }
            /* ESM default export */ const isPromise = isPromise_isPromise;
            // EXTERNAL MODULE: external "audio-sample"
            var external_audio_sample_ = __webpack_require__("audio-sample");
            var external_audio_sample_default = /*#__PURE__*/ __webpack_require__.n(external_audio_sample_);
            // EXTERNAL MODULE: external "is-power-of-two"
            var external_is_power_of_two_ = __webpack_require__("is-power-of-two");
            var external_is_power_of_two_default = /*#__PURE__*/ __webpack_require__.n(external_is_power_of_two_);
            var package_namespaceObject = {
                i8: "10.0.19"
            }; // CONCATENATED MODULE: ./src/util/getNodeEnv.ts
            function getNodeEnv() {
                return "production";
            }
            /* ESM default export */ const util_getNodeEnv = getNodeEnv;
            // ... and these actually define the runtime mode of Node.js and are
            // set either in package.json, via Jest or in the Dockerfile
            const NodeEnvType = {
                DEVELOPMENT: "development",
                PRODUCTION: "production"
            };
            function isProductionMode_isProductionMode() {
                return util_getNodeEnv() === NodeEnvType.PRODUCTION;
            }
            /* ESM default export */ const isProductionMode = isProductionMode_isProductionMode;
            const PRODUCTION = isProductionMode();
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
                // under the `videomail` key inside the form data body.
                disableSubmit: false,
                // but just want to record and replay these temporarily
                enableAutoValidation: true,
                enableAutoUnload: true,
                /*
   * does not /enable disable submit button after recording
   * when something else seems invalid.
   */ enableAutoSubmission: true,
                /*
   * appears upon press of submit button. disable it when
   * you want a framework to deal with the form submission itself.
   */ enctype: "application/json",
                // 'application/json' and 'application/x-www-form-urlencoded'
                // default CSS selectors you can alter, see examples
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
                    // but if that does not work, try using the
                    submitButtonSelector: void 0
                },
                audio: {
                    enabled: false,
                    switch: false,
                    volume: 0.2,
                    // distorting at the higher volume peaks
                    bufferSize: "auto"
                },
                video: {
                    fps: 15,
                    limitSeconds: 30,
                    countdown: 3,
                    /*
     * it is recommended to set one dimension only and leave the other one to auto
     * because each webcam has a different aspect ratio
     */ width: void 0,
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
                // alter these text for internationalization
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
                    /*
     * a custom callback to tweak form data before posting to server
     * this is for advanced use only and shouldn't be used if possible
     */ adjustFormDataBeforePosting: void 0
                },
                defaults: {
                    from: void 0,
                    to: void 0,
                    cc: void 0,
                    bcc: void 0,
                    subject: void 0,
                    body: void 0
                },
                // show errors inside the container?
                displayErrors: true,
                // true = all form inputs get disabled and disappear when browser can't record
                adjustFormOnBrowserError: true,
                // when true, any errors will be sent to the videomail server for analysis
                reportErrors: true,
                // just for testing purposes to simulate browser agent handling
                fakeUaString: void 0,
                version: package_namespaceObject.i8
            };
            /* ESM default export */ const src_options = options_options;
            const CHANNELS = 1;
            /*
 * for inspiration see
 * https://github.com/saebekassebil/microphone-stream
 */ function getAudioContextClass() {
                return window.AudioContext;
            }
            class AudioRecorder {
                // eslint-disable-next-line @typescript-eslint/no-deprecated
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
                    // instantiate only once
                    if (!this.vcAudioContext) {
                        const AudioContext = getAudioContextClass();
                        this.vcAudioContext = new AudioContext();
                    }
                    return this.vcAudioContext;
                }
                onAudioProcess(e, cb) {
                    if (!this.userMedia.isRecording() || this.userMedia.isPaused()) return;
                    /*
     * Returns a Float32Array containing the PCM data associated with the channel,
     * defined by the channel parameter (with 0 representing the first channel)
     */ const float32Array = e.inputBuffer.getChannelData(0);
                    cb(new (external_audio_sample_default())(float32Array));
                }
                init(localMediaStream) {
                    this.options.logger.debug("AudioRecorder: init()");
                    // creates an audio node from the microphone incoming stream
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
                    // see https://github.com/binarykitchen/videomail-client/issues/184
                    if ("auto" === bufferSize) bufferSize = getBrowser(this.options).isFirefox() ? 512 : 2048;
                    if (!external_is_power_of_two_default()(bufferSize)) throw error_createError({
                        message: "Audio buffer size must be a power of two.",
                        options: this.options
                    });
                    if (!this.options.audio.volume || src_options.audio.volume > 1) throw error_createError({
                        message: "Audio volume must be between zero and one.",
                        options: this.options
                    });
                    volume.gain.value = this.options.audio.volume;
                    /*
     * Create a ScriptProcessorNode with the given bufferSize and
     * a single input and output channel
     */ // eslint-disable-next-line @typescript-eslint/no-deprecated
                    this.scriptProcessor = this.getAudioContext().createScriptProcessor(bufferSize, CHANNELS, CHANNELS);
                    // connect stream to our scriptProcessor
                    this.audioInput.connect(this.scriptProcessor);
                    // connect our scriptProcessor to the previous destination
                    this.scriptProcessor.connect(this.getAudioContext().destination);
                    // connect volume
                    this.audioInput.connect(volume);
                    volume.connect(this.scriptProcessor);
                }
                record(cb) {
                    this.options.logger.debug("AudioRecorder: record()");
                    if (this.scriptProcessor) // eslint-disable-next-line @typescript-eslint/no-deprecated
                    this.scriptProcessor.onaudioprocess = (e)=>{
                        this.onAudioProcess(e, cb);
                    };
                }
                stop() {
                    this.options.logger.debug("AudioRecorder: stop()");
                    if (this.scriptProcessor) // eslint-disable-next-line @typescript-eslint/no-deprecated
                    this.scriptProcessor.onaudioprocess = null;
                    if (this.audioInput) this.audioInput.disconnect();
                    // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/close
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
            /* ESM default export */ const media_AudioRecorder = AudioRecorder;
            /*
 * taken from
 * https://bbc.github.io/tal/jsdoc/events_mediaevent.js.html
 */ const MEDIA_EVENTS = [
                /*
   * The user agent begins looking for media data, as part of
   * the resource selection algorithm.
   */ "loadstart",
                /*
   * The user agent is intentionally not currently fetching media data,
   * but does not have the entire media resource downloaded. networkState equals NETWORK_IDLE
   */ "suspend",
                /*
   * Playback has begun. Fired after the play() method has returned,
   * or when the autoplay attribute has caused playback to begin.
   * paused is newly false.
   * 'play', commented out since it has special treatment
   */ /*
   * The user agent has just determined the duration and dimensions of the
   * media resource and the timed tracks are ready.
   * readyState is newly equal to HAVE_METADATA or greater for the first time.
   * 'loadedmetadata', commented out since it has special treatment
   */ // The user agent is fetching media data.
                "progress",
                /*
   * The user agent is intentionally not currently fetching media data,
   * but does not have the entire media resource downloaded.
   * 'suspend', // commented out, we are already listening to it in code
   */ /*
   * Event The user agent stops fetching the media data before it is completely downloaded,
   * but not due to an error.  error is an object with the code MEDIA_ERR_ABORTED.
   */ "abort",
                /*
   * A media element whose networkState was previously not in the NETWORK_EMPTY
   * state has just switched to that state (either because of a fatal error
   * during load that's about to be reported, or because the load() method was
   * invoked while the resource selection algorithm was already running).
   */ "emptied",
                /*
   * The user agent is trying to fetch media data, but data is
   * unexpectedly not forthcoming
   */ "stalled",
                /*
   * Playback has been paused. Fired after the pause() method has returned.
   * paused is newly true.
   */ "pause",
                /*
   * The user agent can render the media data at the current playback position
   * for the first time.
   * readyState newly increased to HAVE_CURRENT_DATA or greater for the first time.
   */ "loadeddata",
                /*
   * Playback has stopped because the next frame is not available, but the user
   * agent expects that frame to become available in due course.
   * readyState is newly equal to or less than HAVE_CURRENT_DATA,
   * and paused is false. Either seeking is true, or the current playback
   * position is not contained in any of the ranges in buffered.
   * It is possible for playback to stop for two other reasons without
   * paused being false, but those two reasons do not fire this event:
   * maybe playback ended, or playback stopped due to errors.
   */ "waiting",
                /*
   * Playback has started. readyState is newly equal to or greater than
   * HAVE_FUTURE_DATA, paused is false, seeking is false,
   * or the current playback position is contained in one of the ranges in buffered.
   */ "playing",
                /*
   * The user agent can resume playback of the media data,
   * but estimates that if playback were to be started now, the media resource
   * could not be rendered at the current playback rate up to its end without
   * having to stop for further buffering of content.
   * readyState newly increased to HAVE_FUTURE_DATA or greater.
   */ "canplay",
                /*
   * The user agent estimates that if playback were to be started now,
   * the media resource could be rendered at the current playback rate
   * all the way to its end without having to stop for further buffering.
   * readyState is newly equal to HAVE_ENOUGH_DATA.
   */ "canplaythrough",
                /*
   * The seeking IDL attribute changed to true and the seek operation is
   * taking long enough that the user agent has time to fire the event.
   */ "seeking",
                // The seeking IDL attribute changed to false.
                "seeked",
                /*
   * Playback has stopped because the end of the media resource was reached.
   * currentTime equals the end of the media resource; ended is true.
   */ "ended",
                /*
   * Either the defaultPlaybackRate or the playbackRate attribute
   * has just been updated.
   */ "ratechange",
                // The duration attribute has just been updated.
                "durationchange",
                /*
   * Either the volume attribute or the muted attribute has changed.
   * Fired after the relevant attribute's setter has returned.
   */ "volumechange"
            ];
            /* ESM default export */ const mediaEvents = MEDIA_EVENTS;
            function getFirstVideoTrack(localMediaStream) {
                const videoTracks = localMediaStream.getVideoTracks();
                let videoTrack;
                if (videoTracks[0]) videoTrack = videoTracks[0];
                return videoTrack;
            }
            /* ESM default export */ const media_getFirstVideoTrack = getFirstVideoTrack;
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
                    this.options.logger.debug(`UserMedia: ... ${EVENT_ASCII} event ${eventType}: ${pretty(params)}`);
                }
                outputEvent(e) {
                    this.logEvent(e.type, {
                        readyState: this.rawVisualUserMedia?.readyState
                    });
                    // remove myself
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
                    // Reset states
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
                        // Resets the media element and restarts the media resource. Any pending events are discarded.
                        try {
                            this.rawVisualUserMedia?.load();
                            /*
         * fixes https://github.com/binarykitchen/videomail.io/issues/401
         * see https://github.com/MicrosoftEdge/Demos/blob/master/photocapture/scripts/demo.js#L27
         */ if (this.rawVisualUserMedia?.paused) {
                                this.options.logger.debug(`UserMedia: play(): media.readyState=${this.rawVisualUserMedia.readyState}, media.paused=${this.rawVisualUserMedia.paused}, media.ended=${this.rawVisualUserMedia.ended}, media.played=${pretty(this.rawVisualUserMedia.played)}`);
                                let p;
                                try {
                                    p = this.rawVisualUserMedia.play();
                                } catch (exc) {
                                    /*
             * this in the hope to catch InvalidStateError, see
             * https://github.com/binarykitchen/videomail-client/issues/149
             */ this.options.logger.warn(`Caught raw user media play exception: ${exc}`);
                                }
                                /*
           * using the promise here just experimental for now
           * and this to catch any weird errors early if possible
           */ if (isPromise(p)) p.then(()=>{
                                    if (!this.playingPromiseReached) {
                                        this.options.logger.debug("UserMedia: play promise successful. Playing now.");
                                        this.playingPromiseReached = true;
                                    }
                                }).catch((reason)=>{
                                    /*
               * promise can be interrupted, i.E. when switching tabs
               * and promise can get resumed when switching back to tab, hence
               * do not treat this like an error
               */ this.options.logger.warn(`Caught pending user media promise exception: ${reason.toString()}`);
                                });
                            }
                        } catch (exc) {
                            unloadAllEventListeners();
                            endedEarlyCallback(exc);
                        }
                    };
                    const fireCallbacks = ()=>{
                        const readyState = this.rawVisualUserMedia?.readyState;
                        // ready state, see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
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
                    // player modifications to perform that must wait until `loadedmetadata` has been triggered
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
                        if (videoTrack) {
                            if (videoTrack.enabled) {
                                let description = "";
                                if (videoTrack.label && videoTrack.label.length > 0) description = description.concat(videoTrack.label);
                                description = description.concat(` with enabled=${videoTrack.enabled}, muted=${videoTrack.muted}, readyState=${videoTrack.readyState}`);
                                this.options.logger.debug(`UserMedia: ${videoTrack.kind} detected. ${description}`);
                            } else throw error_createError({
                                message: "Webcam is disabled",
                                explanation: "The video track seems to be disabled. Enable it in your system.",
                                options: this.options
                            });
                        } else this.options.logger.debug("UserMedia: detected (but no video tracks exist");
                        this.rawVisualUserMedia?.addEventListener("loadedmetadata", onLoadedMetaData);
                        this.rawVisualUserMedia?.addEventListener("play", onPlay);
                        /*
       * experimental, not sure if this is ever needed/called? since 2 apr 2017
       * An error occurs while fetching the media data.
       * Error can be an object with the code MEDIA_ERR_NETWORK or higher.
       * networkState equals either NETWORK_EMPTY or NETWORK_IDLE, depending on when the download was aborted.
       */ this.rawVisualUserMedia?.addEventListener("error", (err)=>{
                            this.options.logger.warn(`Caught video element error event: ${pretty(err)}`);
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
                        // do not stop "too much" when going to initialize anyway
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
                        /*
       * don't have to reset these states when just switching camera
       * while still recording or pausing
       */ if (!params?.switchingFacingMode) this.paused = this.recording = false;
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
            /* ESM default export */ const visuals_userMedia = UserMedia;
            function figureMinHeight_figureMinHeight(height, options) {
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
            /* ESM default export */ const figureMinHeight = figureMinHeight_figureMinHeight;
            function getRatio_getRatio(options, videoHeight, videoWidth) {
                // just a default one when no computations are possible
                let ratio = 1;
                const hasVideoDimensions = videoHeight && videoWidth;
                const desiredHeight = options.video.height;
                const desiredWidth = options.video.width;
                const hasDesiredDimensions = desiredHeight && desiredWidth;
                if (hasDesiredDimensions) ratio = hasVideoDimensions ? videoHeight < desiredHeight || videoWidth < desiredWidth ? videoHeight / videoWidth : desiredHeight / desiredWidth : desiredHeight / desiredWidth;
                else if (hasVideoDimensions) ratio = videoHeight / videoWidth;
                return ratio;
            }
            /* ESM default export */ const getRatio = getRatio_getRatio;
            /*
 * this is difficult to compute and is not entirely correct.
 * but good enough for now to ensure some stability.
 */ function limitHeight_limitHeight(height, options) {
                if (!height || height < 1) throw error_createError({
                    message: "Passed limit-height argument cannot be less than 1!",
                    options
                });
                const limitedHeight = Math.min(height, document.documentElement.clientHeight);
                if (limitedHeight < 1) throw error_createError({
                    message: "Limited height cannot be less than 1!",
                    options
                });
                return limitedHeight;
            }
            /* ESM default export */ const limitHeight = limitHeight_limitHeight;
            function calculateWidth_calculateWidth(responsive, videoHeight, options, ratio) {
                let height = figureMinHeight(videoHeight, options);
                if (responsive) height = limitHeight(height, options);
                if (!height || height < 1) throw error_createError({
                    message: "Height cannot be smaller than 1 when calculating width.",
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
            /* ESM default export */ const calculateWidth = calculateWidth_calculateWidth;
            function getOuterWidth_getOuterWidth(element) {
                let rect = element.getBoundingClientRect();
                let outerWidth = rect.right - rect.left;
                if (outerWidth < 1) {
                    // last effort, can happen when replaying only
                    rect = document.body.getBoundingClientRect();
                    outerWidth = rect.right - rect.left;
                }
                return outerWidth;
            }
            /* ESM default export */ const getOuterWidth = getOuterWidth_getOuterWidth;
            function limitWidth_limitWidth(element, options, width) {
                let limitedWidth;
                const outerWidth = getOuterWidth(element);
                // only when that element has a defined width, apply this logic
                limitedWidth = width && "number" == typeof width ? outerWidth > 0 && outerWidth < width ? outerWidth : width : outerWidth;
                if (Number.isInteger(limitedWidth) && limitedWidth < 1) throw error_createError({
                    message: "Limited width cannot be less than 1!",
                    options
                });
                return limitedWidth;
            }
            /* ESM default export */ const limitWidth = limitWidth_limitWidth;
            function calculateHeight_calculateHeight(responsive, videoWidth, options, target, ratio, element) {
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
                return figureMinHeight(height, options);
            }
            /* ESM default export */ const calculateHeight = calculateHeight_calculateHeight;
            /* provided dependency */ var Buffer = __webpack_require__("./node_modules/buffer/index.js")["Buffer"];
            // credits http://1lineart.kulaone.com/#/
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
                    if (this.stream) {
                        if (this.stream.destroyed) {
                            // prevents https://github.com/binarykitchen/videomail.io/issues/393
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
                                            explanation: `stream.write() failed because of ${pretty(exc)}`,
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
                                    explanation: `stream.write() failed because of ${pretty(exc)}`,
                                    options: this.options,
                                    exc
                                });
                                this.emit("ERROR", {
                                    err
                                });
                            }
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
                    /*
     * if (this.options.verbose) {
     *     this.options.logger.debug(
     *         'Sample #' + samplesCount + ' (' + audioBuffer.length + ' bytes):'
     *     )
     * }
     */ this.writeStream(audioBuffer);
                }
                show() {
                    if (this.recorderElement) external_hidden_default()(this.recorderElement, false);
                }
                onUserMediaReady(params) {
                    try {
                        this.options.logger.debug(`Recorder: onUserMediaReady(${params ? pretty(params) : ""})`);
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
                    /*
     * when progresses aren't initialized,
     * then do a first calculation to avoid `infinite` or `null` displays
     */ this.frameProgress = this.calculateFrameProgress();
                    if (isAudioEnabled(this.options)) this.sampleProgress = this.calculateSampleProgress();
                    this.emit("PROGRESS", {
                        frameProgress: this.frameProgress,
                        sampleProgress: this.sampleProgress
                    });
                }
                updateFrameProgress(args) {
                    this.confirmedFrameNumber = args.frame;
                    this.frameProgress = this.calculateFrameProgress();
                    this.updateOverallProgress();
                }
                updateSampleProgress(args) {
                    this.confirmedSampleNumber = args.sample;
                    this.sampleProgress = this.calculateSampleProgress();
                    this.updateOverallProgress();
                }
                preview(args) {
                    const hasAudio = this.samplesCount > 0;
                    this.confirmedFrameNumber = this.confirmedSampleNumber = this.samplesCount = this.framesCount = 0;
                    this.sampleProgress = this.frameProgress = void 0;
                    this.key = args.key;
                    /*
     * We are not serving MP4 videos anymore due to licensing but are keeping code
     * for compatibility and documentation
     */ if (args.mp4) this.replay.setMp4Source(`${args.mp4 + constants.SITE_NAME_LABEL}/${this.options.siteName}/videomail.mp4`, true);
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
                    // keep it for recording stats
                    if (this.stopTime) this.waitingTime = Date.now() - this.stopTime;
                    if (!this.recordingStats) this.recordingStats = {};
                    this.recordingStats.waitingTime = this.waitingTime;
                }
                initSocket(cb) {
                    if (!this.connected) {
                        this.connecting = true;
                        this.options.logger.debug(`Recorder: initializing web socket to ${this.options.socketUrl}`);
                        this.emit("CONNECTING");
                        // https://github.com/maxogden/websocket-stream#binary-sockets
                        /*
       * we use query parameters here because we cannot set custom headers in web sockets,
       * see https://github.com/websockets/ws/issues/467
       */ const url2Connect = `${this.options.socketUrl}?${encodeURIComponent(constants.SITE_NAME_LABEL)}=${encodeURIComponent(this.options.siteName)}`;
                        try {
                            /*
         * websocket options cannot be set on client side, only on server, see
         * https://github.com/maxogden/websocket-stream/issues/116#issuecomment-296421077
         */ this.stream = external_websocket_stream_default()(url2Connect, {
                                perMessageDeflate: false,
                                // see https://github.com/maxogden/websocket-stream/issues/117#issuecomment-298826011
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
                            // useful for debugging streams
                            /*
         * if (!stream.originalEmit) {
         *   stream.originalEmit = stream.emit
         * }
         */ /*
         * stream.emit = function (type) {
         *   if (stream) {
         *     this.options.logger.debug(PIPE_SYMBOL + 'Debugging stream event:', type)
         *     var args = Array.prototype.slice.call(arguments, 0)
         *     return stream.originalEmit.apply(stream, args)
         *   }
         * }
         */ this.stream.on("close", (err)=>{
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
                                        // toString() since https://github.com/binarykitchen/videomail.io/issues/288
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
                                this.options.logger.debug(`${PIPE_SYMBOL}Stream *error* event emitted: ${pretty(err)}`);
                            });
                            // just experimental
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
                    /*
     * use connected flag to prevent this from happening
     * https://github.com/binarykitchen/videomail.io/issues/323
     */ if (!this.connected) return false;
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
                    this.options.logger.debug(`Recorder: userMediaErrorCallback(), name: ${err.name}, message: ${err.message} and Webcam characteristics: ${characteristics ? pretty(characteristics) : "none"}`);
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
                        } else // do not emit but retry since MEDIA_DEVICE_NOT_SUPPORTED can be a race condition
                        this.options.logger.debug(`Recorder: ignore user media error ${pretty(err)}`);
                        // retry after a while
                        this.retryTimeout = window.setTimeout(this.initSocket.bind(this), this.options.timeouts.userMedia);
                    } else if (this.unloaded) /*
       * This can happen when a container is unloaded but some user media related callbacks
       * are still in process. In that case ignore error.
       */ this.options.logger.debug(`Recorder: already unloaded. Not going to throw error ${pretty(err)}`);
                    else {
                        this.options.logger.debug(`Recorder: no error listeners attached but throwing error ${pretty(err)}`);
                        // weird situation, throw it instead of emitting since there are no error listeners
                        throw error_createError({
                            err,
                            message: "Unable to process this error since there are no error listeners anymore.",
                            options: this.options
                        });
                    }
                }
                getUserMediaCallback(localStream, params) {
                    if (!this.userMedia) throw new Error("No user media is defined");
                    this.options.logger.debug(`Recorder: getUserMediaCallback(${params ? pretty(params) : ""})`);
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
                    this.options.logger.debug(`Recorder: loadGenuineUserMedia(${params ? pretty(params) : ""})`);
                    this.emit("ASKING_WEBCAM_PERMISSION");
                    const constraints = {
                        video: {
                            frameRate: {
                                ideal: this.options.video.fps
                            }
                        },
                        audio: isAudioEnabled(this.options)
                    };
                    // TODO Improve typings or add an external library for that
                    if (params?.switchingFacingMode && constraints.video && true !== constraints.video) constraints.video.facingMode = params.switchingFacingMode;
                    if (this.options.video.width && constraints.video && true !== constraints.video) {
                        const idealWidth = this.options.video.width;
                        if (idealWidth) constraints.video.width = {
                            ideal: idealWidth
                        };
                    } else if (constraints.video && true !== constraints.video) {
                        /*
       * otherwise try to apply the same width as the element is having
       * but there is no 100% guarantee that this will happen. not
       * all webcam drivers behave the same way
       */ const limitedWidth = this.limitWidth();
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
                    this.options.logger.debug(`Recorder: navigator.mediaDevices.getUserMedia() ${pretty(constraints)}`);
                    this.options.logger.debug(`Recorder: navigator.mediaDevices.getSupportedConstraints() ${pretty(navigator.mediaDevices.getSupportedConstraints())}`);
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
                    if (this.userMediaLoading) {
                        this.options.logger.debug("Recorder: skipping loadUserMedia() because it is already asking for permission");
                        return;
                    }
                    this.options.logger.debug(`Recorder: loadUserMedia(${params ? pretty(params) : ""})`);
                    this.emit("LOADING_USER_MEDIA");
                    try {
                        this.userMediaTimeout = window.setTimeout(()=>{
                            if (!this.isReady()) {
                                const err = getBrowser(this.options).getNoAccessIssue();
                                this.emit("ERROR", {
                                    err
                                });
                            }
                        }, this.options.timeouts.userMedia);
                        this.userMediaLoading = true;
                        this.loadGenuineUserMedia(params);
                    } catch (exc) {
                        this.options.logger.debug("Recorder: failed to load genuine user media");
                        this.userMediaLoading = false;
                        const errorListeners = util_Despot.getListeners("ERROR");
                        if (errorListeners?.length) this.emit("ERROR", {
                            exc
                        });
                        else {
                            this.options.logger.debug("Recorder: no error listeners attached but throwing exception further");
                            throw exc; // throw it further
                        }
                    }
                }
                executeCommand(command) {
                    if (this.unloaded) // Skip
                    return;
                    try {
                        if (command.args) this.options.logger.debug(`Server commanded: ${command.command} with ${pretty(command.args)}`);
                        else this.options.logger.debug(`Server commanded: ${command.command}`);
                        switch(command.command){
                            case "ready":
                                this.emit("SERVER_READY");
                                if (!this.userMediaTimeout) {
                                    if (this.options.loadUserMediaOnRecord) // Still show it but have it blank
                                    this.show();
                                    else this.loadUserMedia();
                                }
                                break;
                            case "preview":
                                this.preview(command.args);
                                break;
                            case "error":
                                {
                                    const err = error_createError({
                                        message: "Oh no, server error!",
                                        explanation: command.args.err.toString() || "(No message given)",
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
                    return !this.recorderElement || external_hidden_default()(this.recorderElement);
                }
                writeCommand(command, args, cb) {
                    if (this.connected) {
                        if (this.stream) {
                            if (args) this.options.logger.debug(`$ ${command} with ${pretty(args)}`);
                            else this.options.logger.debug(`$ ${command}`);
                            const commandObj = {
                                command,
                                args
                            };
                            /*
       * todo commented out because for some reasons server does
       * not accept such a long array of many log lines. to examine later.
       *
       * add some useful debug info to examine weird stuff like this one
       * UnprocessableError: Unable to encode a video with FPS near zero.
       * todo consider removing this later or have it for debug=1 only?
       *
       * if (this.options.logger && options.logger.getLines) {
       *   commandObj.logLines = options.logger.getLines()
       * }
       */ this.writeStream(Buffer.from(JSON.stringify(commandObj)));
                            if (cb) // keep all callbacks async
                            setTimeout(function() {
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
                    if (0 === intervalSum) return;
                    return this.framesCount / this.getIntervalSum() * 1000;
                }
                getRecordingStats() {
                    return this.recordingStats;
                }
                getAudioSampleRate() {
                    return this.userMedia?.getAudioSampleRate();
                }
                stop(params) {
                    if (!this.userMedia) throw new Error("No user media defined, unable to stop");
                    this.options.logger.debug(`Recorder: stop(${params ? pretty(params) : ""})`);
                    const limitReached = params?.limitReached;
                    this.emit("STOPPING", {
                        limitReached
                    });
                    this.loop?.complete();
                    /*
     * needed to give dom enough time to prepare the replay element
     * to show up upon the STOPPING event so that we can evaluate
     * the right video type
     */ setTimeout(()=>{
                        this.stopTime = Date.now();
                        const videoType = this.replay.getVideoType();
                        if (!videoType) throw new Error("Unable to video record when no video type is defined.");
                        this.recordingStats = {
                            /*
         * do not use loop.getFPS() as this will only return the fps from the last delta,
         * not the average. see https://github.com/hapticdata/animitter/issues/3
         */ avgFps: this.getAvgFps(),
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
                        // beware, resetting will set framesCount to zero, so leave this here
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
                    // important to free memory
                    this.userMedia?.stop();
                    this.userMediaLoaded = this.key = this.canvas = this.ctx = void 0;
                    this.loadUserMedia();
                }
                unload(params) {
                    if (this.unloaded || !this.built) return; // already unloaded
                    const e = params?.e;
                    let cause;
                    if (e) cause = e.type;
                    this.options.logger.debug(`Recorder: unload()${cause ? `, cause: ${cause}` : ""}`);
                    this.reset();
                    this.clearUserMediaTimeout();
                    if (this.userMedia) // prevents https://github.com/binarykitchen/videomail-client/issues/114
                    this.userMedia.unloadRemainingEventListeners();
                    if (this.submitting) ;
                    else if (this.stream) {
                        /*
       * force to disconnect socket right now to clean temp files on server
       * event listeners will do the rest
       */ this.options.logger.debug("Recorder: ending stream ...");
                        this.stream.destroy();
                        this.stream = void 0;
                    }
                    this.unloaded = true;
                    this.built = this.connecting = this.connected = false;
                }
                reset() {
                    // no need to reset when already unloaded
                    if (!this.unloaded) {
                        this.options.logger.debug("Recorder: reset()");
                        this.emit("RESETTING");
                        this.cancelAnimationFrame();
                        // important to free memory
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
                    if (params) this.options.logger.debug(`pause() at frame ${this.framesCount} with ${pretty(params)}`);
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
                        // ctx and stream might become null while unloading
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
                    const newLoop = external_animitter_default()({
                        fps: this.options.video.fps
                    }, this.draw.bind(this));
                    // remember it first
                    this.originalAnimationFrameObject = newLoop.getRequestAnimationFrameObject();
                    return newLoop;
                }
                record() {
                    if (this.unloaded) return;
                    // reconnect when needed
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
                        // do nothing further
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
                    this.frame = new (external_canvas_to_buffer_default())(this.canvas, this.options.image.types, this.options.image.quality);
                    this.options.logger.debug("Recorder: record()");
                    this.userMedia.record();
                    this.emit("RECORDING", {
                        framesCount: this.framesCount
                    });
                    // see https://github.com/hapticdata/animitter/issues/3
                    this.loop.on("update", (_deltaTime, elapsedTime)=>{
                        let avgFPS;
                        // x1000 because of milliseconds
                        avgFPS = 0 !== elapsedTime ? Math.round(this.framesCount / elapsedTime * 1000) : void 0;
                        this.options.logger.debug(`Recorder: avgFps = ${avgFPS}, framesCount = ${this.framesCount}`);
                    });
                    this.loop.start();
                }
                setAnimationFrameObject(newObj) {
                    /*
     * must stop and then start to make it become effective, see
     * https://github.com/hapticdata/animitter/issues/5#issuecomment-292019168
     */ if (this.loop) {
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
                        }, /*
         * reducing wanted interval by respecting the time it takes to
         * compute internally since this is not multi-threaded like
         * requestAnimationFrame
         */ wantedInterval - processingTime);
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
                    if (!getBrowser(this.options).isMobile()) return;
                    if ("user" === this.facingMode) this.facingMode = "environment";
                    else if ("environment" === this.facingMode) this.facingMode = "user";
                    else this.options.logger.warn(`Recorder: unsupported facing mode ${pretty(this.facingMode)}`);
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
                    /*
     * prevent audio feedback, see
     * https://github.com/binarykitchen/videomail-client/issues/35
     */ this.recorderElement.muted = true;
                    // for iPhones, see https://github.com/webrtc/samples/issues/929
                    this.recorderElement.setAttribute("playsinline", "true");
                    this.recorderElement.setAttribute("webkit-playsinline", "webkit-playsinline");
                    /*
     * add these here, not in CSS because users can configure custom
     * class names
     */ this.recorderElement.style.transform = "rotateY(180deg)";
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
                    /*
     * checking for stream.destroyed needed since
     * https://github.com/binarykitchen/videomail.io/issues/296
     */ return this.loop?.isRunning() && !this.isPaused() && !this.isNotifying() && this.stream && !this.stream.destroyed;
                }
                hide() {
                    if (!this.isHidden()) {
                        if (this.recorderElement) external_hidden_default()(this.recorderElement, true);
                        this.clearUserMediaTimeout();
                        this.clearRetryTimeout();
                    }
                }
                isUnloaded() {
                    return this.unloaded;
                }
                /*
   * these two return the true dimensions of the webcam area.
   * needed because on mobiles they might be different.
   */ getRecorderWidth(responsive) {
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
                        // avoid division by zero
                        if (!userMediaVideoWidth || userMediaVideoWidth < 1) // use as a last resort fallback computation (needed for safari 11)
                        ratio = this.visuals.getRatio();
                        else if (userMediaVideoHeight) ratio = userMediaVideoHeight / userMediaVideoWidth;
                    } else ratio = getRatio(this.options);
                    return ratio;
                }
                calculateWidth(responsive) {
                    let videoHeight;
                    if (this.userMedia) videoHeight = this.userMedia.getVideoHeight();
                    else if (this.recorderElement) videoHeight = this.recorderElement.videoHeight || this.recorderElement.height;
                    return calculateWidth(responsive, videoHeight, this.options, this.getRatio());
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
                    return calculateHeight(responsive, videoWidth, this.options, target, this.getRatio(), this.recorderElement);
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
            /* ESM default export */ const visuals_recorder = Recorder;
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
                    // If none exists, create one then
                    if (!this.replayElement) {
                        this.replayElement = document.createElement("video");
                        this.replayElement.classList.add(this.options.selectors.replayClass);
                        replayParentElement.appendChild(this.replayElement);
                    }
                }
                // Questionable, does not make sense
                isStandalone() {
                    return "HTMLDivElement" === this.visuals.constructor.name;
                }
                copyAttributes(newVideomail) {
                    let attributeContainer;
                    Object.keys(newVideomail).forEach((attribute)=>{
                        attributeContainer = this.replayElement?.parentNode?.querySelector(`.${attribute}`);
                        if (attributeContainer) {
                            const empty = !attributeContainer.innerHTML || attributeContainer.innerHTML.length < 1;
                            // Do not overwrite when already set before, e
                            // e.g. with a React component adding links to the body
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
                    if (!width) width = calculateWidth(responsive, videoHeight, this.options, ratio);
                    if (!height) {
                        let element = this.visuals.getElement();
                        let target;
                        if (element) target = "visualsElement";
                        else {
                            element = document.body;
                            target = "document body";
                        }
                        height = calculateHeight(responsive, videoWidth, this.options, target, ratio, element);
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
                    const hasAudio = void 0 !== sampleRate && sampleRate > 0;
                    this.show(width, height, hasAudio, playerOnly);
                }
                show(videomailWidth, videomailHeight, hasAudio, playerOnly = false) {
                    if (!this.replayElement) return;
                    if (this.isShown()) // Skip, already shown
                    return;
                    this.options.logger.debug(`Replay: show(playerOnly=${playerOnly})`);
                    const hasMedia = Boolean(this.videomail?.webm) || Boolean(this.videomail?.mp4) || Boolean(this.videomail?.poster);
                    if (hasMedia) this.correctDimensions(true, videomailWidth ? videomailWidth : this.replayElement.videoWidth, videomailHeight ? videomailHeight : this.replayElement.videoHeight);
                    if (playerOnly) {
                        if (hasMedia) external_hidden_default()(this.replayElement, false);
                    } else external_hidden_default()(this.replayElement, false);
                    if (playerOnly) external_hidden_default()(this.replayElement.parentNode, false);
                    else this.visuals.show();
                    if (hasAudio) /*
       * https://github.com/binarykitchen/videomail-client/issues/115
       * do not set mute to false as this will mess up. just do not mention this attribute at all
       */ this.replayElement.setAttribute("volume", "1");
                    else if (!isAudioEnabled(this.options)) this.replayElement.setAttribute("muted", "true");
                    // this forces to actually fetch the videos from the server
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
                    this.options.logger.debug(`Replay: build (replayParentElement="${pretty(replayParentElement)}")`);
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
                    if (firstTrack) {
                        if (src) firstTrack.setAttribute("src", src);
                        else // Remove when no captions available
                        this.replayElement.removeChild(firstTrack);
                    } else {
                        // Insert one then
                        const track = document.createElement("track");
                        track.setAttribute("src", src);
                        track.src = src;
                        // It's captions, not subtitles. Because for subtitles you must define the language, see
                        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
                        track.kind = "captions";
                        track.default = true;
                        this.replayElement.appendChild(track);
                        // Because the local videomail server for development uses a different port, see
                        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
                        this.replayElement.setAttribute("crossorigin", "anonymous");
                    }
                }
                setVideoSource(type, src, bustCache) {
                    if (!this.replayElement) throw new Error("There is no replay element for appending a video source");
                    let source = this.getVideoSource(type);
                    let url = src;
                    if (url && bustCache) url += `?${Date.now()}`;
                    if (source) {
                        if (src) source.setAttribute("src", src);
                        else this.replayElement.removeChild(source);
                    } else if (src) {
                        const { fps } = this.options.video;
                        // Ensure it's greater than the frame duration itself
                        const t = 1 / fps * 2;
                        source = document.createElement("source");
                        /*
         * Ensures HTML video thumbnail turns up on iOS, see
         * https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/
         */ source.src = `${url}#t=${t}`;
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
                    return getBrowser(this.options).getVideoType(this.replayElement);
                }
                pause(cb) {
                    /*
     * avoids race condition, inspired by
     * http://stackoverflow.com/questions/36803176/how-to-prevent-the-play-request-was-interrupted-by-a-call-to-pause-error
     */ window.setTimeout(()=>{
                        try {
                            if (this.replayElement) this.replayElement.pause();
                        } catch (exc) {
                            // just ignore, see https://github.com/binarykitchen/videomail.io/issues/386
                            this.options.logger.warn(exc);
                        }
                        cb();
                    }, 15);
                }
                reset(cb) {
                    // pause video to make sure it won't consume any memory
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
                    if (this.isStandalone()) external_hidden_default()(this.visuals, true);
                    else if (this.replayElement) {
                        external_hidden_default()(this.replayElement, true);
                        external_hidden_default()(this.replayElement.parentNode, true);
                    }
                }
                isShown() {
                    if (!this.replayElement) return false;
                    return !external_hidden_default()(this.replayElement) && !this.visuals.isHidden();
                }
                getVisuals() {
                    return this.visuals;
                }
                getElement() {
                    return this.replayElement;
                }
            }
            /* ESM default export */ const visuals_replay = Replay;
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
                    // can be overwritten with setter fn
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
                    this.options.logger.debug(`Visuals: buildChildren (playerOnly = ${playerOnly}, visualsElement="${pretty(visualsElement)}"})`);
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
                            if (getBrowser(this.options).isMobile()) this.removeDimensions();
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
                    if (this.visualsElement?.clientWidth) // special case for safari, see getRatio() in recorder
                    return this.visualsElement.clientHeight / this.visualsElement.clientWidth;
                    return 0;
                }
                isRecordable() {
                    return !this.isNotifying() && !this.replay.isShown() && !this.isCountingDown();
                }
                isCountingDown() {
                    return this.recorderInsides.isCountingDown();
                }
                build(playerOnly = false, parentElement) {
                    this.options.logger.debug(`Visuals: build (playerOnly = ${playerOnly}${parentElement ? `, parentElement="${pretty(parentElement)}"` : ""})`);
                    if (parentElement) this.visualsElement = parentElement.querySelector(`.${this.options.selectors.visualsClass}`);
                    else this.visualsElement = this.container.querySelector(`.${this.options.selectors.visualsClass}`);
                    if (!this.visualsElement) {
                        if (playerOnly && parentElement) this.visualsElement = parentElement;
                        else {
                            this.visualsElement = document.createElement("div");
                            this.visualsElement.classList.add(this.options.selectors.visualsClass);
                            const buttonsElement = this.container.querySelector(`.${this.options.selectors.buttonsClass}`);
                            /*
         * Make sure it's placed before the buttons, but only if it's a child
         * element of the container = inside the container
         */ if (buttonsElement && !this.container.isOutsideElementOf(buttonsElement)) this.container.insertBefore(this.visualsElement, buttonsElement);
                            else this.container.appendChild(this.visualsElement);
                        }
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
                    this.options.logger.debug(`Visuals: unload(${e ? pretty(e) : ""})`);
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
                        external_hidden_default()(this.visualsElement, true);
                        this.emit("HIDE");
                    }
                }
                isHidden() {
                    if (!this.built) return true;
                    if (this.visualsElement) return external_hidden_default()(this.visualsElement);
                }
                showVisuals() {
                    external_hidden_default()(this.visualsElement, false);
                }
                show(params) {
                    if (!params?.playerOnly) {
                        if (this.isReplayShown()) {
                            if (params?.goBack) this.recorder.show();
                        } else this.recorder.build();
                    }
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
                    // fixes https://github.com/binarykitchen/videomail-client/issues/126
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
            /* ESM default export */ const wrappers_visuals = Visuals;
            // EXTERNAL MODULE: ./node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js
            var injectStylesIntoStyleTag = __webpack_require__("./node_modules/@rsbuild/core/compiled/style-loader/runtime/injectStylesIntoStyleTag.js");
            var injectStylesIntoStyleTag_default = /*#__PURE__*/ __webpack_require__.n(injectStylesIntoStyleTag);
            // EXTERNAL MODULE: ./node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js
            var styleDomAPI = __webpack_require__("./node_modules/@rsbuild/core/compiled/style-loader/runtime/styleDomAPI.js");
            var styleDomAPI_default = /*#__PURE__*/ __webpack_require__.n(styleDomAPI);
            // EXTERNAL MODULE: ./node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js
            var insertBySelector = __webpack_require__("./node_modules/@rsbuild/core/compiled/style-loader/runtime/insertBySelector.js");
            var insertBySelector_default = /*#__PURE__*/ __webpack_require__.n(insertBySelector);
            // EXTERNAL MODULE: ./node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js
            var setAttributesWithoutAttributes = __webpack_require__("./node_modules/@rsbuild/core/compiled/style-loader/runtime/setAttributesWithoutAttributes.js");
            var setAttributesWithoutAttributes_default = /*#__PURE__*/ __webpack_require__.n(setAttributesWithoutAttributes);
            // EXTERNAL MODULE: ./node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js
            var insertStyleElement = __webpack_require__("./node_modules/@rsbuild/core/compiled/style-loader/runtime/insertStyleElement.js");
            var insertStyleElement_default = /*#__PURE__*/ __webpack_require__.n(insertStyleElement);
            // EXTERNAL MODULE: ./node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js
            var styleTagTransform = __webpack_require__("./node_modules/@rsbuild/core/compiled/style-loader/runtime/styleTagTransform.js");
            var styleTagTransform_default = /*#__PURE__*/ __webpack_require__.n(styleTagTransform);
            // EXTERNAL MODULE: ../../node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[9].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[9].use[2]!../../node_modules/stylus-loader/dist/cjs.js??ruleSet[1].rules[9].use[3]!./src/styles/main.styl
            var main = __webpack_require__("../../node_modules/@rsbuild/core/compiled/css-loader/index.js??ruleSet[1].rules[9].use[1]!builtin:lightningcss-loader??ruleSet[1].rules[9].use[2]!../../node_modules/stylus-loader/dist/cjs.js??ruleSet[1].rules[9].use[3]!./src/styles/main.styl");
            var main_options = {};
            main_options.styleTagTransform = styleTagTransform_default();
            main_options.setAttributes = setAttributesWithoutAttributes_default();
            main_options.insert = insertBySelector_default().bind(null, "head");
            main_options.domAPI = styleDomAPI_default();
            main_options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(main /* default */ .Z, main_options);
            /* ESM default export */ main /* default */ .Z && main /* default,locals */ .Z.locals && main /* default,locals */ .Z.locals;
            class Container extends util_Despot {
                visibility = external_document_visibility_default()();
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
                    this.options.logger.debug(`Container: buildChildren (playerOnly = ${playerOnly}${parentElement ? `, parentElement="${pretty(parentElement)}"` : ""})`);
                    if (this.containerElement) this.containerElement.classList.add(this.options.selectors.containerClass);
                    if (!playerOnly) this.buttons.build();
                    this.visuals.build(playerOnly, parentElement);
                }
                build(buildOptions) {
                    this.options.logger.debug(`Container: build (${buildOptions ? pretty(buildOptions) : ""})`);
                    try {
                        const containerId = this.options.selectors.containerId;
                        if (containerId) // Note, it can be undefined when e.g. just replaying a videomail or for storybooks
                        this.containerElement = document.getElementById(containerId);
                        else this.containerElement = document.createElement("div");
                        this.containerElement?.classList.add(this.options.selectors.containerClass);
                        let replayParentElement = null;
                        if (buildOptions?.replayParentElement) replayParentElement = buildOptions.replayParentElement;
                        else if (buildOptions?.replayParentElementId) replayParentElement = document.getElementById(buildOptions.replayParentElementId);
                        // Check if the replayParentElement could act as the container element perhaps?
                        if (!this.containerElement && replayParentElement) {
                            if (replayParentElement.classList.contains(this.options.selectors.containerClass)) this.containerElement = replayParentElement;
                        }
                        if (!this.built) this.initEvents(buildOptions?.playerOnly);
                        if (!buildOptions?.playerOnly) this.correctDimensions();
                        // Building form also applies for when `playerOnly` because of
                        // correcting mode on Videomail. This function will skip if there is no form. Easy.
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
                // since https://github.com/binarykitchen/videomail-client/issues/87
                findParentFormElement() {
                    if (!this.containerElement) // Must be in player only mode
                    return;
                    return this.containerElement.closest("form");
                }
                getFormElement() {
                    // It's ok to return no form, especially when in replay mode
                    let formElement;
                    if (this.containerElement && "FORM" === this.containerElement.tagName) formElement = this.containerElement;
                    else if (this.options.selectors.formId) {
                        formElement = document.querySelector(`#${this.options.selectors.formId}`);
                        if (formElement && "FORM" !== formElement.tagName) throw new Error(`HTML element with ID ${this.options.selectors.formId} is not a form.`);
                    } else formElement = this.findParentFormElement();
                    return formElement;
                }
                buildForm() {
                    if (this.form) // already built
                    return;
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
                    else if (params.exc) {
                        if (params.exc instanceof Error) {
                            if (params.exc.stack) this.options.logger.error(params.exc.stack);
                            else if (params.exc.message) this.options.logger.error(params.exc.message);
                        } else this.options.logger.error(params.exc);
                    }
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
                        // built? see https://github.com/binarykitchen/videomail.io/issues/326
                        if (this.built) {
                            if (visible) {
                                if (isAutoPauseEnabled(this.options) && this.isCountingDown()) this.resume();
                                this.emit("VISIBLE");
                            } else {
                                if (isAutoPauseEnabled(this.options) && (this.isCountingDown() || this.isRecording())) this.pause();
                                this.emit("INVISIBLE");
                            }
                        }
                    });
                    if (this.options.enableSpace) {
                        if (!playerOnly) window.addEventListener("keydown", (e)=>{
                            const element = e.target;
                            const tagName = element.tagName;
                            const isEditable = element.isContentEditable || "true" === element.contentEditable;
                            // beware of rich text editors, hence the isEditable check (wordpress plugin issue)
                            if (!isEditable && "INPUT" !== tagName.toUpperCase() && "TEXTAREA" !== tagName.toUpperCase()) {
                                const code = e.code;
                                if ("Space" === code) {
                                    e.preventDefault();
                                    if (this.options.enablePause) this.visuals.pauseOrResume();
                                    else this.visuals.recordOrStop();
                                }
                            }
                        });
                    }
                    /*
     * better to keep the one and only error listeners
     * at one spot, here, because unload() will do a removeAllListeners()
     */ this.on("ERROR", (params)=>{
                        this.processError(params);
                        this.endWaiting();
                        const browser = getBrowser(this.options);
                        if (browser.isMobile()) this.removeDimensions();
                    });
                    if (!playerOnly) this.on("LOADED_META_DATA", ()=>{
                        this.correctDimensions();
                    });
                }
                /*
   * This will just set the width but not the height because
   * it can be a form with more inputs elements
   */ correctDimensions() {
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
                    external_hidden_default()(this.containerElement, true);
                }
                async submitVideomail(formInputs, method) {
                    const videomailFormData = this.form?.transformFormData(formInputs);
                    if (!videomailFormData) throw new Error("No videomail form data defined");
                    if (method === form_FormMethod.POST) {
                        videomailFormData.recordingStats = this.visuals.getRecordingStats();
                        videomailFormData.width = this.visuals.getRecorderWidth(true);
                        videomailFormData.height = this.visuals.getRecorderHeight(true);
                        return await this.resource.post(videomailFormData);
                    }
                    if (method === form_FormMethod.PUT) return await this.resource.put(videomailFormData);
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
                    return limitHeight(height, this.options);
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
                    if (!this.containerElement) // Must be in player only mode
                    return;
                    return this.containerElement.querySelector(selector);
                }
                beginWaiting() {
                    this.htmlElement?.classList.add("wait");
                }
                endWaiting() {
                    this.htmlElement?.classList.remove("wait");
                }
                appendChild(child) {
                    if (!this.containerElement || this.containerElement === child) // Must be in player only mode
                    return;
                    this.containerElement.appendChild(child);
                }
                insertBefore(child, reference) {
                    if (!this.containerElement) // Must be in player only mode
                    return;
                    this.containerElement.insertBefore(child, reference);
                }
                unload(params) {
                    try {
                        if (!this.built) return;
                        const e = params?.e;
                        this.options.logger.debug(`Container: unload(${e ? pretty(e) : ""})`);
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
                    external_hidden_default()(this.containerElement, false);
                    this.visuals.show(params);
                    if (!this.hasError) {
                        const paused = this.isPaused();
                        if (paused) this.buttons.adjustButtonsForPause();
                        /*
       * since https://github.com/binarykitchen/videomail-client/issues/60
       * we hide areas to make it easier for the user
       */ this.buttons.show();
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
                        // Rebuild all again and initialise events again
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
                // this code needs a good rewrite :(
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
                        this.lastValidation = true; // needed so that it can be submitted anyway, see submit()
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
                                    whyInvalid = `Input "${name}" seems wrong 🤔`;
                                    invalidData = {
                                        [name]: invalidInput.getAttribute("value")
                                    };
                                }
                            } else if (!this.areVisualsHidden() && !visualsValid) // TODO Improve this check to have this based on `key`
                            {
                                if (this.buttonsAreReady() || this.isRecording() || this.isPaused() || this.isCountingDown()) {
                                    valid = false;
                                    whyInvalid = "Don't forget to record a video 😉";
                                    invalidData = {
                                        key: void 0
                                    };
                                }
                            }
                            if (valid) {
                                /*
           * If CC and/or BCC exist, validate one more time to ensure at least
           * one recipient is given
           */ const recipients = this.form.getRecipients();
                                const toIsConfigured = "to" in recipients;
                                const ccIsConfigured = "cc" in recipients;
                                const bccIsConfigured = "bcc" in recipients;
                                const hasTo = recipients.to && recipients.to.length > 0;
                                const hasCc = recipients.cc && recipients.cc.length > 0;
                                const hasBcc = recipients.bcc && recipients.bcc.length > 0;
                                if (toIsConfigured) {
                                    if (!hasTo) {
                                        if (ccIsConfigured && bccIsConfigured) {
                                            if (!hasCc && !hasBcc) valid = false;
                                        } else if (ccIsConfigured) {
                                            if (!hasCc) valid = false;
                                        } else if (bccIsConfigured) {
                                            if (!hasBcc) valid = false;
                                        } else valid = false;
                                    }
                                } else if (ccIsConfigured) {
                                    if (!hasCc) {
                                        if (bccIsConfigured && !hasBcc) valid = false;
                                    }
                                } else ;
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
                        /*
       * !hasVideomailKey makes it possible to submit form when videomail itself
       * is not optional
       */ if (!hasVideomailKey && !this.options.enableAutoSubmission) return;
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
                        /*
         * ... and when the enableAutoSubmission option is false,
         * then that can mean, leave it to the framework to process with the form
         * validation/handling/submission itself. for example the ninja form
         * will want to highlight which one input are wrong.
         */ }
                    } catch (exc) {
                        const err = error_createError({
                            exc,
                            options: this.options
                        });
                        this.emit("ERROR", {
                            err
                        });
                    } finally{
                        if (response?.text && "text/html" === response.type) // server replied with HTML contents - display these
                        document.body.innerHTML = response.text;
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
                // Only used for replays
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
            /* ESM default export */ const wrappers_container = Container;
            // EXTERNAL MODULE: external "deepmerge"
            var external_deepmerge_ = __webpack_require__("deepmerge");
            var external_deepmerge_default = /*#__PURE__*/ __webpack_require__.n(external_deepmerge_);
            class CollectLogger_CollectLogger {
                browser;
                logger;
                stack = [];
                options;
                constructor(options){
                    this.options = options;
                    this.browser = getBrowser(options);
                    this.logger = options.logger;
                }
                lifo(level, parameters) {
                    const line = parameters.join();
                    if (this.stack.length > this.options.logStackSize) this.stack.pop();
                    this.stack.push(`[${level}] ${line}`);
                    return line;
                }
                /*
   * workaround: since we cannot overwrite console.log without having the correct file and line number
   * we'll use groupCollapsed() and trace() instead to get these.
   */ debug(...args) {
                    const output = this.lifo("debug", args);
                    if (this.options.verbose) {
                        if (this.browser.isFirefox()) this.logger.debug(output);
                        else if (this.logger.groupCollapsed) {
                            this.logger.groupCollapsed(output);
                            this.logger.trace("Trace");
                            this.logger.groupEnd();
                        } else if (this.logger.debug) this.logger.debug(output);
                        else // last resort if everything else fails for any weird reasons
                        console.log(output);
                    }
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
            /* ESM default export */ const CollectLogger = CollectLogger_CollectLogger;
            /* provided dependency */ var process = __webpack_require__("./node_modules/process/browser.js");
            function isTest_isTest() {
                return "test" === process.env.ENVIRON;
            }
            /* ESM default export */ const isTest = isTest_isTest;
            function mergeWithDefaultOptions_mergeWithDefaultOptions(options = {}) {
                const newOptions = external_deepmerge_default()(src_options, options, {
                    arrayMerge (_destination, source) {
                        return source;
                    }
                });
                // Repack logger instance
                const collectLogger = new CollectLogger(newOptions);
                newOptions.logger = collectLogger;
                if (isTest()) newOptions.verbose = false;
                return newOptions;
            }
            /* ESM default export */ const mergeWithDefaultOptions = mergeWithDefaultOptions_mergeWithDefaultOptions;
            class VideomailClient extends util_Despot {
                container;
                static ENC_TYPE_APP_JSON = constants.public.ENC_TYPE_APP_JSON;
                static ENC_TYPE_FORM = constants.public.ENC_TYPE_FORM;
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
                    /*
     * it can happen that it gets called twice, i.E. when an error is thrown
     * in the middle of the build() fn
     */ if (!this.container.isBuilt()) {
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
                /*
   * Automatically adds a <video> element inside the given parentElement and
   * loads it with the videomail
   */ replay(videomail, replayParentElementId) {
                    if (this.container.isBuilt()) // Auto unload
                    this.container.unload();
                    this.container.build({
                        playerOnly: true,
                        replayParentElementId
                    });
                    this.container.buildForm();
                    this.container.loadForm(videomail);
                    // Wait until ready to avoid HTTP 416 errors (request range unavailable)
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
                // Returns true when a video has been recorded but is not submitted yet
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
                getLogLines() {
                    if (this.options.logger.getLines) return this.options.logger.getLines();
                }
            }
            /* ESM default export */ const client = VideomailClient;
        })();
        return __webpack_exports__;
    })());
