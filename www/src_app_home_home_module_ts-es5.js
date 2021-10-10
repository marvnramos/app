(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkdevdacticExplorer"] = self["webpackChunkdevdacticExplorer"] || []).push([["src_app_home_home_module_ts"], {
    /***/
    68384:
    /*!****************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/index.js ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Capacitor": function Capacitor() {
          return (
            /* binding */
            _Capacitor
          );
        },

        /* harmony export */
        "CapacitorException": function CapacitorException() {
          return (
            /* binding */
            _CapacitorException
          );
        },

        /* harmony export */
        "CapacitorPlatforms": function CapacitorPlatforms() {
          return (
            /* binding */
            _CapacitorPlatforms
          );
        },

        /* harmony export */
        "ExceptionCode": function ExceptionCode() {
          return (
            /* binding */
            _ExceptionCode
          );
        },

        /* harmony export */
        "Plugins": function Plugins() {
          return (
            /* binding */
            _Plugins
          );
        },

        /* harmony export */
        "WebPlugin": function WebPlugin() {
          return (
            /* binding */
            _WebPlugin
          );
        },

        /* harmony export */
        "WebView": function WebView() {
          return (
            /* binding */
            _WebView
          );
        },

        /* harmony export */
        "addPlatform": function addPlatform() {
          return (
            /* binding */
            _addPlatform
          );
        },

        /* harmony export */
        "registerPlugin": function registerPlugin() {
          return (
            /* binding */
            _registerPlugin
          );
        },

        /* harmony export */
        "registerWebPlugin": function registerWebPlugin() {
          return (
            /* binding */
            _registerWebPlugin
          );
        },

        /* harmony export */
        "setPlatform": function setPlatform() {
          return (
            /* binding */
            _setPlatform
          );
        }
        /* harmony export */

      });
      /*! Capacitor: https://capacitorjs.com/ - MIT License */


      var createCapacitorPlatforms = function createCapacitorPlatforms(win) {
        var defaultPlatformMap = new Map();
        defaultPlatformMap.set('web', {
          name: 'web'
        });
        var capPlatforms = win.CapacitorPlatforms || {
          currentPlatform: {
            name: 'web'
          },
          platforms: defaultPlatformMap
        };

        var addPlatform = function addPlatform(name, platform) {
          capPlatforms.platforms.set(name, platform);
        };

        var setPlatform = function setPlatform(name) {
          if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
          }
        };

        capPlatforms.addPlatform = addPlatform;
        capPlatforms.setPlatform = setPlatform;
        return capPlatforms;
      };

      var initPlatforms = function initPlatforms(win) {
        return win.CapacitorPlatforms = createCapacitorPlatforms(win);
      };

      var _CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});

      var _addPlatform = _CapacitorPlatforms.addPlatform;
      var _setPlatform = _CapacitorPlatforms.setPlatform;

      var legacyRegisterWebPlugin = function legacyRegisterWebPlugin(cap, webPlugin) {
        var _a;

        var config = webPlugin.config;
        var Plugins = cap.Plugins;

        if (!config || !config.name) {
          // TODO: add link to upgrade guide
          throw new Error("Capacitor WebPlugin is using the deprecated \"registerWebPlugin()\" function, but without the config. Please use \"registerPlugin()\" instead to register this web plugin.\"");
        } // TODO: add link to upgrade guide


        console.warn("Capacitor plugin \"".concat(config.name, "\" is using the deprecated \"registerWebPlugin()\" function"));

        if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
          // Add the web plugin into the plugins registry if there already isn't
          // an existing one. If it doesn't already exist, that means
          // there's no existing native implementation for it.
          // - OR -
          // If we already have a plugin registered (meaning it was defined in the native layer),
          // then we should only overwrite it if the corresponding web plugin activates on
          // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
          Plugins[config.name] = webPlugin;
        }
      };

      var _ExceptionCode;

      (function (ExceptionCode) {
        /**
         * API is not implemented.
         *
         * This usually means the API can't be used because it is not implemented for
         * the current platform.
         */
        ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
        /**
         * API is not available.
         *
         * This means the API can't be used right now because:
         *   - it is currently missing a prerequisite, such as network connectivity
         *   - it requires a particular platform or browser version
         */

        ExceptionCode["Unavailable"] = "UNAVAILABLE";
      })(_ExceptionCode || (_ExceptionCode = {}));

      var _CapacitorException = /*#__PURE__*/function (_Error) {
        _inherits(_CapacitorException, _Error);

        var _super = _createSuper(_CapacitorException);

        function _CapacitorException(message, code) {
          var _this;

          _classCallCheck(this, _CapacitorException);

          _this = _super.call(this, message);
          _this.message = message;
          _this.code = code;
          return _this;
        }

        return _CapacitorException;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var getPlatformId = function getPlatformId(win) {
        var _a, _b;

        if (win === null || win === void 0 ? void 0 : win.androidBridge) {
          return 'android';
        } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
          return 'ios';
        } else {
          return 'web';
        }
      };

      var createCapacitor = function createCapacitor(win) {
        var _a, _b, _c, _d, _e;

        var cap = win.Capacitor || {};
        var Plugins = cap.Plugins = cap.Plugins || {};
        var capPlatforms = win.CapacitorPlatforms;

        var defaultGetPlatform = function defaultGetPlatform() {
          return getPlatformId(win);
        };

        var getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

        var defaultIsNativePlatform = function defaultIsNativePlatform() {
          return getPlatformId(win) !== 'web';
        };

        var isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

        var defaultIsPluginAvailable = function defaultIsPluginAvailable(pluginName) {
          var plugin = registeredPlugins.get(pluginName);

          if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
          }

          if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
          }

          return false;
        };

        var isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

        var defaultGetPluginHeader = function defaultGetPluginHeader(pluginName) {
          var _a;

          return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(function (h) {
            return h.name === pluginName;
          });
        };

        var getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

        var handleError = function handleError(err) {
          return win.console.error(err);
        };

        var pluginMethodNoop = function pluginMethodNoop(_target, prop, pluginName) {
          return Promise.reject("".concat(pluginName, " does not have an implementation of \"").concat(prop, "\"."));
        };

        var registeredPlugins = new Map();

        var defaultRegisterPlugin = function defaultRegisterPlugin(pluginName) {
          var jsImplementations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var registeredPlugin = registeredPlugins.get(pluginName);

          if (registeredPlugin) {
            console.warn("Capacitor plugin \"".concat(pluginName, "\" already registered. Cannot register plugins twice."));
            return registeredPlugin.proxy;
          }

          var platform = getPlatform();
          var pluginHeader = getPluginHeader(pluginName);
          var jsImplementation;

          var loadPluginImplementation = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(!jsImplementation && platform in jsImplementations)) {
                        _context.next = 9;
                        break;
                      }

                      if (!(typeof jsImplementations[platform] === 'function')) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 4;
                      return jsImplementations[platform]();

                    case 4:
                      _context.t0 = jsImplementation = _context.sent;
                      _context.next = 8;
                      break;

                    case 7:
                      _context.t0 = jsImplementation = jsImplementations[platform];

                    case 8:
                      jsImplementation = _context.t0;

                    case 9:
                      return _context.abrupt("return", jsImplementation);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function loadPluginImplementation() {
              return _ref.apply(this, arguments);
            };
          }();

          var createPluginMethod = function createPluginMethod(impl, prop) {
            var _a, _b;

            if (pluginHeader) {
              var methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(function (m) {
                return prop === m.name;
              });

              if (methodHeader) {
                if (methodHeader.rtype === 'promise') {
                  return function (options) {
                    return cap.nativePromise(pluginName, prop.toString(), options);
                  };
                } else {
                  return function (options, callback) {
                    return cap.nativeCallback(pluginName, prop.toString(), options, callback);
                  };
                }
              } else if (impl) {
                return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
              }
            } else if (impl) {
              return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            } else {
              throw new _CapacitorException("\"".concat(pluginName, "\" plugin is not implemented on ").concat(platform), _ExceptionCode.Unimplemented);
            }
          };

          var createPluginMethodWrapper = function createPluginMethodWrapper(prop) {
            var remove;

            var wrapper = function wrapper() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var p = loadPluginImplementation().then(function (impl) {
                var fn = createPluginMethod(impl, prop);

                if (fn) {
                  var _p = fn.apply(void 0, args);

                  remove = _p === null || _p === void 0 ? void 0 : _p.remove;
                  return _p;
                } else {
                  throw new _CapacitorException("\"".concat(pluginName, ".").concat(prop, "()\" is not implemented on ").concat(platform), _ExceptionCode.Unimplemented);
                }
              });

              if (prop === 'addListener') {
                p.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          return _context2.abrupt("return", remove());

                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
              }

              return p;
            }; // Some flair ✨


            wrapper.toString = function () {
              return "".concat(prop.toString(), "() { [capacitor code] }");
            };

            Object.defineProperty(wrapper, 'name', {
              value: prop,
              writable: false,
              configurable: false
            });
            return wrapper;
          };

          var addListener = createPluginMethodWrapper('addListener');
          var removeListener = createPluginMethodWrapper('removeListener');

          var addListenerNative = function addListenerNative(eventName, callback) {
            var call = addListener({
              eventName: eventName
            }, callback);

            var remove = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var callbackId;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return call;

                      case 2:
                        callbackId = _context3.sent;
                        removeListener({
                          eventName: eventName,
                          callbackId: callbackId
                        }, callback);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function remove() {
                return _ref3.apply(this, arguments);
              };
            }();

            var p = new Promise(function (resolve) {
              return call.then(function () {
                return resolve({
                  remove: remove
                });
              });
            });
            p.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.warn("Using addListener() without 'await' is deprecated.");
                      _context4.next = 3;
                      return remove();

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
            return p;
          };

          var proxy = new Proxy({}, {
            get: function get(_, prop) {
              switch (prop) {
                // https://github.com/facebook/react/issues/20030
                case '$$typeof':
                  return undefined;

                case 'addListener':
                  return pluginHeader ? addListenerNative : addListener;

                case 'removeListener':
                  return removeListener;

                default:
                  return createPluginMethodWrapper(prop);
              }
            }
          });
          Plugins[pluginName] = proxy;
          registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy: proxy,
            platforms: new Set([].concat(_toConsumableArray(Object.keys(jsImplementations)), _toConsumableArray(pluginHeader ? [platform] : [])))
          });
          return proxy;
        };

        var registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

        if (!cap.convertFileSrc) {
          cap.convertFileSrc = function (filePath) {
            return filePath;
          };
        }

        cap.getPlatform = getPlatform;
        cap.handleError = handleError;
        cap.isNativePlatform = isNativePlatform;
        cap.isPluginAvailable = isPluginAvailable;
        cap.pluginMethodNoop = pluginMethodNoop;
        cap.registerPlugin = registerPlugin;
        cap.Exception = _CapacitorException;
        cap.DEBUG = !!cap.DEBUG;
        cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

        cap.platform = cap.getPlatform();
        cap.isNative = cap.isNativePlatform();
        return cap;
      };

      var initCapacitorGlobal = function initCapacitorGlobal(win) {
        return win.Capacitor = createCapacitor(win);
      };

      var _Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});

      var _registerPlugin = _Capacitor.registerPlugin;
      /**
       * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
       * Capacitor v3 plugins should import the plugin directly. This "Plugins"
       * export is deprecated in v3, and will be removed in v4.
       */

      var _Plugins = _Capacitor.Plugins;
      /**
       * Provided for backwards compatibility. Use the registerPlugin() API
       * instead, and provide the web plugin as the "web" implmenetation.
       * For example
       *
       * export const Example = registerPlugin('Example', {
       *   web: () => import('./web').then(m => new m.Example())
       * })
       *
       * @deprecated Deprecated in v3, will be removed from v4.
       */

      var _registerWebPlugin = function _registerWebPlugin(plugin) {
        return legacyRegisterWebPlugin(_Capacitor, plugin);
      };
      /**
       * Base class web plugins should extend.
       */


      var _WebPlugin = /*#__PURE__*/function () {
        function _WebPlugin(config) {
          _classCallCheck(this, _WebPlugin);

          this.listeners = {};
          this.windowListeners = {};

          if (config) {
            // TODO: add link to upgrade guide
            console.warn("Capacitor WebPlugin \"".concat(config.name, "\" config object was deprecated in v3 and will be removed in v4."));
            this.config = config;
          }
        }

        _createClass(_WebPlugin, [{
          key: "addListener",
          value: function addListener(eventName, listenerFunc) {
            var _this2 = this;

            var listeners = this.listeners[eventName];

            if (!listeners) {
              this.listeners[eventName] = [];
            }

            this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
            // go ahead and add it

            var windowListener = this.windowListeners[eventName];

            if (windowListener && !windowListener.registered) {
              this.addWindowListener(windowListener);
            }

            var remove = /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", _this2.removeListener(eventName, listenerFunc));

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function remove() {
                return _ref5.apply(this, arguments);
              };
            }();

            var p = Promise.resolve({
              remove: remove
            });
            Object.defineProperty(p, 'remove', {
              value: function () {
                var _value = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          console.warn("Using addListener() without 'await' is deprecated.");
                          _context6.next = 3;
                          return remove();

                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                function value() {
                  return _value.apply(this, arguments);
                }

                return value;
              }()
            });
            return p;
          }
        }, {
          key: "removeAllListeners",
          value: function () {
            var _removeAllListeners = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var listener;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.listeners = {};

                      for (listener in this.windowListeners) {
                        this.removeWindowListener(this.windowListeners[listener]);
                      }

                      this.windowListeners = {};

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function removeAllListeners() {
              return _removeAllListeners.apply(this, arguments);
            }

            return removeAllListeners;
          }()
        }, {
          key: "notifyListeners",
          value: function notifyListeners(eventName, data) {
            var listeners = this.listeners[eventName];

            if (listeners) {
              listeners.forEach(function (listener) {
                return listener(data);
              });
            }
          }
        }, {
          key: "hasListeners",
          value: function hasListeners(eventName) {
            return !!this.listeners[eventName].length;
          }
        }, {
          key: "registerWindowListener",
          value: function registerWindowListener(windowEventName, pluginEventName) {
            var _this3 = this;

            this.windowListeners[pluginEventName] = {
              registered: false,
              windowEventName: windowEventName,
              pluginEventName: pluginEventName,
              handler: function handler(event) {
                _this3.notifyListeners(pluginEventName, event);
              }
            };
          }
        }, {
          key: "unimplemented",
          value: function unimplemented() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not implemented';
            return new _Capacitor.Exception(msg, _ExceptionCode.Unimplemented);
          }
        }, {
          key: "unavailable",
          value: function unavailable() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not available';
            return new _Capacitor.Exception(msg, _ExceptionCode.Unavailable);
          }
        }, {
          key: "removeListener",
          value: function () {
            var _removeListener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(eventName, listenerFunc) {
              var listeners, index;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      listeners = this.listeners[eventName];

                      if (listeners) {
                        _context8.next = 3;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 3:
                      index = listeners.indexOf(listenerFunc);
                      this.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
                      // remove the window listener

                      if (!this.listeners[eventName].length) {
                        this.removeWindowListener(this.windowListeners[eventName]);
                      }

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function removeListener(_x, _x2) {
              return _removeListener.apply(this, arguments);
            }

            return removeListener;
          }()
        }, {
          key: "addWindowListener",
          value: function addWindowListener(handle) {
            window.addEventListener(handle.windowEventName, handle.handler);
            handle.registered = true;
          }
        }, {
          key: "removeWindowListener",
          value: function removeWindowListener(handle) {
            if (!handle) {
              return;
            }

            window.removeEventListener(handle.windowEventName, handle.handler);
            handle.registered = false;
          }
        }]);

        return _WebPlugin;
      }();

      var _WebView = /*#__PURE__*/_registerPlugin('WebView'); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    45458:
    /*!********************************************************************!*\
      !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Directory": function Directory() {
          return (
            /* binding */
            _Directory
          );
        },

        /* harmony export */
        "Encoding": function Encoding() {
          return (
            /* binding */
            _Encoding
          );
        },

        /* harmony export */
        "FilesystemDirectory": function FilesystemDirectory() {
          return (
            /* binding */
            _FilesystemDirectory
          );
        },

        /* harmony export */
        "FilesystemEncoding": function FilesystemEncoding() {
          return (
            /* binding */
            _FilesystemEncoding
          );
        }
        /* harmony export */

      });

      var _Directory;

      (function (Directory) {
        /**
         * The Documents directory
         * On iOS it's the app's documents directory.
         * Use this directory to store user-generated content.
         * On Android it's the Public Documents folder, so it's accessible from other apps.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`.
         * It's not accesible on Android 11 or newer.
         *
         * @since 1.0.0
         */
        Directory["Documents"] = "DOCUMENTS";
        /**
         * The Data directory
         * On iOS it will use the Documents directory
         * On Android it's the directory holding application files.
         * Files will be deleted when the application is uninstalled.
         *
         * @since 1.0.0
         */

        Directory["Data"] = "DATA";
        /**
         * The Cache directory
         * Can be deleted in cases of low memory, so use this directory to write app-specific files
         * that your app can re-create easily.
         *
         * @since 1.0.0
         */

        Directory["Cache"] = "CACHE";
        /**
         * The external directory
         * On iOS it will use the Documents directory
         * On Android it's the directory on the primary shared/external
         * storage device where the application can place persistent files it owns.
         * These files are internal to the applications, and not typically visible
         * to the user as media.
         * Files will be deleted when the application is uninstalled.
         *
         * @since 1.0.0
         */

        Directory["External"] = "EXTERNAL";
        /**
         * The external storage directory
         * On iOS it will use the Documents directory
         * On Android it's the primary shared/external storage directory.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`.
         * It's not accesible on Android 11 or newer.
         *
         * @since 1.0.0
         */

        Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
      })(_Directory || (_Directory = {}));

      var _Encoding;

      (function (Encoding) {
        /**
         * Eight-bit UCS Transformation Format
         *
         * @since 1.0.0
         */
        Encoding["UTF8"] = "utf8";
        /**
         * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
         * Unicode character set
         * This encoding is only supported on Android.
         *
         * @since 1.0.0
         */

        Encoding["ASCII"] = "ascii";
        /**
         * Sixteen-bit UCS Transformation Format, byte order identified by an
         * optional byte-order mark
         * This encoding is only supported on Android.
         *
         * @since 1.0.0
         */

        Encoding["UTF16"] = "utf16";
      })(_Encoding || (_Encoding = {}));
      /**
       * @deprecated Use `Directory`.
       * @since 1.0.0
       */


      var _FilesystemDirectory = _Directory;
      /**
       * @deprecated Use `Encoding`.
       * @since 1.0.0
       */

      var _FilesystemEncoding = _Encoding; //# sourceMappingURL=definitions.js.map

      /***/
    },

    /***/
    61977:
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Directory": function Directory() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory
          );
        },

        /* harmony export */
        "Encoding": function Encoding() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding
          );
        },

        /* harmony export */
        "FilesystemDirectory": function FilesystemDirectory() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory
          );
        },

        /* harmony export */
        "FilesystemEncoding": function FilesystemEncoding() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding
          );
        },

        /* harmony export */
        "Filesystem": function Filesystem() {
          return (
            /* binding */
            _Filesystem
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      45458);

      var _Filesystem = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          85143)).then(function (m) {
            return new m.FilesystemWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    86208:
    /*!***********************************************************!*\
      !*** ./node_modules/capacitor-blob-writer/blob_writer.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @capacitor/filesystem */
      61977);
      /*jslint browser */


      var BlobWriter = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)("BlobWriter");

      function array_buffer_to_base64(buffer) {
        var bytes = new Uint8Array(buffer);
        var binary_string = "";
        var byte_nr = 0;

        while (true) {
          if (byte_nr >= bytes.byteLength) {
            break;
          }

          binary_string += String.fromCharCode(bytes[byte_nr]);
          byte_nr += 1;
        }

        return window.btoa(binary_string);
      }

      function append_blob(directory, path, blob) {
        if (blob.size === 0) {
          return Promise.resolve();
        } // By choosing a chunk size which is a multiple of 3, we avoid a bug in
        // Filesystem.appendFile, only on the web platform, which corrupts files by
        // inserting Base64 padding characters within the file. See
        // https://github.com/ionic-team/capacitor-plugins/issues/649.


        var chunk_size = 3 * 128 * 1024;
        var chunk_blob = blob.slice(0, chunk_size); // Read the Blob as an ArrayBuffer, then append it to the file on disk.

        return new window.Response(chunk_blob).arrayBuffer().then(function append_chunk_to_file(buffer) {
          return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.appendFile({
            directory: directory,
            path: path,
            data: array_buffer_to_base64(buffer)
          });
        }).then(function write_remaining() {
          return append_blob(directory, path, blob.slice(chunk_size));
        });
      }

      function write_file_via_bridge(_ref6) {
        var path = _ref6.path,
            directory = _ref6.directory,
            blob = _ref6.blob,
            recursive = _ref6.recursive;
        // Firstly, create & truncate the file.
        return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
          directory: directory,
          path: path,
          recursive: recursive,
          data: ""
        }).then(function (_ref7) {
          var uri = _ref7.uri;
          // Now write the file incrementally so we do not exceed our memory limits when
          // attempting to Base64 encode the entire Blob at once.
          return append_blob(directory, path, blob).then(function () {
            return uri;
          });
        });
      }

      function write_blob(options) {
        var path = options.path,
            directory = options.directory,
            blob = options.blob,
            recursive = options.recursive,
            on_fallback = options.on_fallback;

        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.platform !== "ios" && _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.platform !== "android") {
          return write_file_via_bridge(options);
        }

        return Promise.all([BlobWriter.get_config(), _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.getUri({
          path: path,
          directory: directory
        })]).then(function on_success(_ref8) {
          var _ref9 = _slicedToArray(_ref8, 2),
              config = _ref9[0],
              file_info = _ref9[1];

          var base_url = config.base_url,
              auth_token = config.auth_token;
          var absolute_path = file_info.uri.replace("file://", "");
          return Promise.all([fetch(base_url + absolute_path + (recursive ? "?recursive=true" : ""), {
            headers: {
              authorization: auth_token
            },
            method: "put",
            body: blob
          }), Promise.resolve(file_info)]);
        }).then(function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 2),
              response = _ref11[0],
              file_info = _ref11[1];

          if (response.status !== 204) {
            throw new Error("Bad HTTP status: " + response.status);
          }

          return file_info.uri;
        })["catch"](function on_fail(error) {
          if (on_fallback !== undefined) {
            on_fallback(error);
          }

          return write_file_via_bridge(options);
        });
      }
      /* harmony default export */


      __webpack_exports__["default"] = Object.freeze(write_blob);
      /***/
    },

    /***/
    52003:
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      62267);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }];

      var _HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      _HomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HomePageRoutingModule);
      /***/
    },

    /***/
    3467:
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      62267);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-routing.module */
      52003);

      var _HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
      })], _HomePageModule);
      /***/
    },

    /***/
    62267:
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./home.page.html */
      49764);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      2610);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/filesystem */
      61977);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      76461);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var capacitor_blob_writer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! capacitor-blob-writer */
      86208);
      /* harmony import */


      var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/preview-any-file/ngx */
      85838);

      var APP_DIRECTORY = _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Documents;

      var _HomePage = /*#__PURE__*/function () {
        function HomePage(route, alertCtrl, router, previewAnyFile, toastCtrl
        /*yo*/
        ) {
          _classCallCheck(this, HomePage);

          this.route = route;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.previewAnyFile = previewAnyFile;
          this.toastCtrl = toastCtrl;
          this.folderContent = [];
          this.currentFolder = '';
          this.copyFile = null;

          this.b64toBlob = function (b64Data) {
            var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, {
              type: contentType
            });
            return blob;
          };
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentFolder = this.route.snapshot.paramMap.get('folder') || '';
            this.loadDocuments();
          }
        }, {
          key: "loadDocuments",
          value: function loadDocuments() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var folderContent;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readdir({
                        directory: APP_DIRECTORY,
                        path: this.currentFolder
                      });

                    case 2:
                      folderContent = _context9.sent;
                      // The directory array is just strings
                      // We add the information isFile to make life easier
                      this.folderContent = folderContent.files.map(function (file) {
                        return {
                          name: file,
                          isFile: file.includes('.')
                        };
                      });

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "createFolder",
          value: function createFolder() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.alertCtrl.create({
                        header: 'Crear folder',
                        message: 'Por favor, especifique el nombre del nuevo folder',
                        inputs: [{
                          name: 'name',
                          type: 'text',
                          placeholder: 'Nuevo folder'
                        }],
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel'
                        }, {
                          text: 'Crear',
                          handler: function handler(data) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                while (1) {
                                  switch (_context10.prev = _context10.next) {
                                    case 0:
                                      _context10.next = 2;
                                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.mkdir({
                                        directory: APP_DIRECTORY,
                                        path: "".concat(this.currentFolder, "/").concat(data.name)
                                      });

                                    case 2:
                                      this.loadDocuments();

                                    case 3:
                                    case "end":
                                      return _context10.stop();
                                  }
                                }
                              }, _callee10, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context11.sent;
                      _context11.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "addFile",
          value: function addFile() {
            this.uploader.nativeElement.click();
            var aa = this.uploader.nativeElement.click();
            console.log(this.folderContent[0].name);
          }
        }, {
          key: "fileSelected",
          value: function fileSelected($event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var selected;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      selected = $event.target.files[0];
                      _context12.next = 3;
                      return (0, capacitor_blob_writer__WEBPACK_IMPORTED_MODULE_3__["default"])({
                        directory: APP_DIRECTORY,
                        path: "".concat(this.currentFolder, "/").concat(selected.name),
                        blob: selected,
                        on_fallback: function on_fallback(error) {
                          console.error('error: ', error);
                        }
                      });

                    case 3:
                      this.loadDocuments();

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "itemClicked",
          value: function itemClicked(entry) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var toast, pathToOpen, folder;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!this.copyFile) {
                        _context13.next = 11;
                        break;
                      }

                      if (!entry.isFile) {
                        _context13.next = 8;
                        break;
                      }

                      _context13.next = 4;
                      return this.toastCtrl.create({
                        message: 'Please select a folder for your operation'
                      });

                    case 4:
                      toast = _context13.sent;
                      _context13.next = 7;
                      return toast.present();

                    case 7:
                      return _context13.abrupt("return");

                    case 8:
                      this.finishCopyFile(entry);
                      _context13.next = 12;
                      break;

                    case 11:
                      // Open the file or folder
                      if (entry.isFile) {
                        this.openFile(entry);
                      } else {
                        pathToOpen = this.currentFolder != '' ? this.currentFolder + '/' + entry.name : entry.name;
                        folder = encodeURIComponent(pathToOpen);
                        this.router.navigateByUrl("/home/".concat(folder));
                      }

                    case 12:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "openFile",
          value: function openFile(entry) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var file_uri, file, blob, blobUrl, a;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      if (!(0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.isPlatform)('hybrid')) {
                        _context14.next = 7;
                        break;
                      }

                      _context14.next = 3;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.getUri({
                        directory: APP_DIRECTORY,
                        path: this.currentFolder + '/' + entry.name
                      });

                    case 3:
                      file_uri = _context14.sent;
                      this.previewAnyFile.preview(file_uri.uri).then(function (res) {
                        return console.log(res);
                      })["catch"](function (error) {
                        return console.error(error);
                      });
                      _context14.next = 20;
                      break;

                    case 7:
                      _context14.next = 9;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                        directory: APP_DIRECTORY,
                        path: this.currentFolder + '/' + entry.name
                      });

                    case 9:
                      file = _context14.sent;
                      blob = this.b64toBlob(file.data, '');
                      blobUrl = URL.createObjectURL(blob);
                      a = document.createElement('a');
                      document.body.appendChild(a);
                      a.setAttribute('style', 'display: none');
                      a.href = blobUrl;
                      a.download = entry.name;
                      a.click();
                      window.URL.revokeObjectURL(blobUrl);
                      a.remove();

                    case 20:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "delete",
          value: function _delete(entry) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      if (!entry.isFile) {
                        _context15.next = 5;
                        break;
                      }

                      _context15.next = 3;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.deleteFile({
                        directory: APP_DIRECTORY,
                        path: this.currentFolder + '/' + entry.name
                      });

                    case 3:
                      _context15.next = 7;
                      break;

                    case 5:
                      _context15.next = 7;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.rmdir({
                        directory: APP_DIRECTORY,
                        path: this.currentFolder + '/' + entry.name,
                        recursive: true // Removes all files as well!

                      });

                    case 7:
                      this.loadDocuments();

                    case 8:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "startCopy",
          value: function startCopy(file) {
            this.copyFile = file;
          }
        }, {
          key: "finishCopyFile",
          value: function finishCopyFile(entry) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var current, from_uri, dest_uri;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      // Make sure we don't have any additional slash in our path
                      current = this.currentFolder != '' ? "/".concat(this.currentFolder) : '';
                      _context16.next = 3;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.getUri({
                        directory: APP_DIRECTORY,
                        path: "".concat(current, "/").concat(this.copyFile.name)
                      });

                    case 3:
                      from_uri = _context16.sent;
                      _context16.next = 6;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.getUri({
                        directory: APP_DIRECTORY,
                        path: "".concat(current, "/").concat(entry.name, "/").concat(this.copyFile.name)
                      });

                    case 6:
                      dest_uri = _context16.sent;
                      _context16.next = 9;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.copy({
                        from: from_uri.uri,
                        to: dest_uri.uri
                      });

                    case 9:
                      this["delete"](this.copyFile);
                      this.copyFile = null;
                      this.loadDocuments();

                    case 12:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }]);

        return HomePage;
      }();

      _HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_4__.PreviewAnyFile
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
        }];
      };

      _HomePage.propDecorators = {
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: ['filepicker']
        }]
      };
      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HomePage);
      /***/
    },

    /***/
    2610:
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
      /***/
    },

    /***/
    49764:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar [color]=\"copyFile ? 'secondary' : 'primary'\">\n    <ion-buttons slot=\"start\" *ngIf=\"currentFolder != ''\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{ currentFolder || 'Archivos' }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n <!-- For opening a standard file picker -->\n <input hidden type=\"file\" #filepicker (change)=\"fileSelected($event)\" />\n \n <!-- Info if the directory is empty -->\n <ion-text color=\"medium\" *ngIf=\"folderContent.length == 0\" class=\"ion-padding ion-text-center\">\n   <p>No se encontraron documentos</p>\n </ion-text>\n\n <ion-list>\n   <ion-item-sliding *ngFor=\"let f of folderContent\">\n     <!-- The actual file/folder item with click event -->\n     <ion-item (click)=\"itemClicked(f)\">\n       <ion-icon [name]=\"f.isFile ? 'document-outline' : 'folder-outline'\" slot=\"start\"></ion-icon>\n       {{ f.name }}\n     </ion-item>\n\n     <!-- The start/end option buttons for all operations -->\n     <ion-item-options side=\"start\">\n       <ion-item-option (click)=\"delete(f)\" color=\"danger\">\n         <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n       </ion-item-option>\n     </ion-item-options>\n\n     <ion-item-options side=\"end\">\n       <ion-item-option (click)=\"startCopy(f)\" color=\"success\">\n         Copiar\n       </ion-item-option>\n     </ion-item-options>\n\n   </ion-item-sliding>\n   \n </ion-list>\n\n <!-- Fab to add files & folders -->\n <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n   <ion-fab-button>\n     <ion-icon name=\"add\"></ion-icon>\n   </ion-fab-button>\n   <ion-fab-list side=\"top\">\n     <ion-fab-button (click)=\"createFolder()\">\n       <ion-icon name=\"folder\"></ion-icon>\n     </ion-fab-button>\n     <ion-fab-button (click)=\"addFile()\">\n       <ion-icon name=\"document\"></ion-icon>\n     </ion-fab-button>\n   </ion-fab-list>\n </ion-fab>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_home_home_module_ts-es5.js.map