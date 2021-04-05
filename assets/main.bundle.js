/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + "." + "88c2f81c308441208925" + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./assets/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./build/es/src/client.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/es/src/client.js":
/*!********************************!*\
  !*** ./build/es/src/client.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_app_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-app/client */ "../hillliu.github.io/node_modules/reshow-app/client.js");
/* harmony import */ var _ui_pages_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/pages/index */ "./build/es/ui/pages/index.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(reshow_app_client__WEBPACK_IMPORTED_MODULE_0__["default"])(_ui_pages_index__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./build/es/src/index.js":
/*!*******************************!*\
  !*** ./build/es/src/index.js ***!
  \*******************************/
/*! exports provided: scrollStore, fastScrollStore, ScrollSpy, ScrollReceiver, ScrollInfo, SmoothScrollLink, scrollDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stores_scrollStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stores/scrollStore */ "./build/es/src/stores/scrollStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollStore", function() { return _stores_scrollStore__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores/fastScrollStore */ "./build/es/src/stores/fastScrollStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fastScrollStore", function() { return _stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ui_organisms_ScrollSpy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/organisms/ScrollSpy */ "./build/es/ui/organisms/ScrollSpy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollSpy", function() { return _ui_organisms_ScrollSpy__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ui_organisms_ScrollReceiver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/organisms/ScrollReceiver */ "./build/es/ui/organisms/ScrollReceiver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollReceiver", function() { return _ui_organisms_ScrollReceiver__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ui_organisms_ScrollInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/organisms/ScrollInfo */ "./build/es/ui/organisms/ScrollInfo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollInfo", function() { return _ui_organisms_ScrollInfo__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ui_organisms_SmoothScrollLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/organisms/SmoothScrollLink */ "./build/es/ui/organisms/SmoothScrollLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SmoothScrollLink", function() { return _ui_organisms_SmoothScrollLink__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _scrollDispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scrollDispatcher */ "./build/es/src/scrollDispatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollDispatch", function() { return _scrollDispatcher__WEBPACK_IMPORTED_MODULE_6__["scrollDispatch"]; });

// Stores

 // UI




 // Dispatch



/***/ }),

/***/ "./build/es/src/scrollDispatcher.js":
/*!******************************************!*\
  !*** ./build/es/src/scrollDispatcher.js ***!
  \******************************************/
/*! exports provided: default, scrollDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollDispatch", function() { return scrollDispatch; });
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-flux */ "../hillliu.github.io/node_modules/reshow-flux/build/es/index.js");



var instance = new reshow_flux__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"]();
/* harmony default export */ __webpack_exports__["default"] = (instance);
var scrollDispatch = instance.dispatch.bind(instance);

/***/ }),

/***/ "./build/es/src/stores/fastScrollStore.js":
/*!************************************************!*\
  !*** ./build/es/src/stores/fastScrollStore.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var _scrollDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scrollDispatcher */ "./build/es/src/scrollDispatcher.js");
/* harmony import */ var _scrollStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollStore */ "./build/es/src/stores/scrollStore.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! get-object-value */ "../hillliu.github.io/node_modules/get-object-value/build/es/src/index.js");







var fastScrollStore = /*#__PURE__*/function (_scrollStore) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(fastScrollStore, _scrollStore);

  function fastScrollStore() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _scrollStore.call.apply(_scrollStore, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "storeName", 'fastScroll');

    return _this;
  }

  var _proto = fastScrollStore.prototype;

  _proto.runScrollMonitor = function runScrollMonitor(e) {
    this.triggerScroll(e.target);
  };

  return fastScrollStore;
}(_scrollStore__WEBPACK_IMPORTED_MODULE_4__["scrollStore"]);

/* harmony default export */ __webpack_exports__["default"] = (new fastScrollStore(_scrollDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./build/es/src/stores/scrollStore.js":
/*!********************************************!*\
  !*** ./build/es/src/stores/scrollStore.js ***!
  \********************************************/
/*! exports provided: default, scrollStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollStore", function() { return scrollStore; });
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "../hillliu.github.io/node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-flux */ "../hillliu.github.io/node_modules/reshow-flux/build/es/index.js");
/* harmony import */ var get_scroll_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! get-scroll-info */ "../hillliu.github.io/node_modules/get-scroll-info/build/es/src/index.js");
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! get-window-offset */ "../hillliu.github.io/node_modules/get-window-offset/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! getoffset */ "../hillliu.github.io/node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! get-object-value */ "../hillliu.github.io/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var _scrollDispatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scrollDispatcher */ "./build/es/src/scrollDispatcher.js");
/* harmony import */ var _testForPassiveScroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../testForPassiveScroll */ "./build/es/src/testForPassiveScroll.js");












var incNum = 0;
var DEFAULT_SCROLL_ID = -1;
var keys = Object.keys;

var scrollStore = /*#__PURE__*/function (_ReduceStore) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollStore, _ReduceStore);

  function scrollStore() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ReduceStore.call.apply(_ReduceStore, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "storeName", 'delayScroll');

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "isInitEvent", {});

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "isInitResizeEvent", false);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "spys", {});

    return _this;
  }

  var _proto = scrollStore.prototype;

  _proto.getInitialState = function getInitialState() {
    this.trigger = this.triggerScroll.bind(this);
    this.arrNode = Object(immutable__WEBPACK_IMPORTED_MODULE_4__["Map"])();
    this.margins = Object(immutable__WEBPACK_IMPORTED_MODULE_4__["Set"])();
    this.scrollMonitor = this.runScrollMonitor.bind(this);
    this.bindHandleResize = this.handleResize.bind(this);
    return Object(immutable__WEBPACK_IMPORTED_MODULE_4__["Map"])({
      scrollDelay: 50,
      scrollMargin: 0
    });
  };

  _proto.initResizeEvent = function initResizeEvent() {
    if ('undefined' !== typeof window) {
      this.isInitResizeEvent = true;
      var win = window;

      if (win.addEventListener) {
        win.addEventListener('resize', this.bindHandleResize);
      } else {
        win.attachEvent('onresize', this.bindHandleResize);
      }
    }
  };

  _proto.initEvent = function initEvent(el) {
    var _this2 = this;

    if ('undefined' !== typeof el) {
      if (el.addEventListener) {
        var supportsPassive = Object(_testForPassiveScroll__WEBPACK_IMPORTED_MODULE_11__["default"])();
        el.addEventListener('scroll', this.scrollMonitor, supportsPassive ? {
          passive: true
        } : false);
      } else {
        el.attachEvent('onscroll', this.scrollMonitor);
      }

      setTimeout(function () {
        _this2.trigger(el); //for lazy content


        setTimeout(function () {
          return _this2.trigger(el);
        }, 777);
      });

      if (!this.isInitResizeEvent) {
        this.initResizeEvent();
      }
    }
  };

  _proto.removeEvent = function removeEvent(el) {
    el.removeEventListener('scroll', this.scrollMonitor);
  };

  _proto.handleResize = function handleResize() {
    var _this3 = this;

    keys(this.spys).forEach(function (scrollId) {
      return _this3.scrollMonitor({
        target: {
          id: scrollId
        }
      });
    });
  };

  _proto.runScrollMonitor = function runScrollMonitor(e) {
    var _this4 = this;

    clearTimeout(this._scrollTimeout);
    var self = this;
    var delay = self.getState().get('scrollDelay');
    self._scrollTimeout = setTimeout(function () {
      return _this4.trigger(e && e.target);
    }, delay);
  };

  _proto.triggerScroll = function triggerScroll(scrollNode) {
    var scrollId = Object(get_object_value__WEBPACK_IMPORTED_MODULE_9__["default"])(scrollNode, ['id']) || DEFAULT_SCROLL_ID;
    var defaultMargin = this.getState().get('scrollMargin');
    var actives = {
      mdefault: null
    };
    var offsetCache = {};
    var arrMonitorScroll = [];
    var scroll = Object(get_scroll_info__WEBPACK_IMPORTED_MODULE_6__["default"])();
    var scrollTop = scroll.top + defaultMargin;
    var margin;
    (this.spys[scrollId] || []).forEach(function (node) {
      var nodeEl = node.getOffsetEl();

      if (!nodeEl) {
        return;
      }

      var _get = Object(get_object_value__WEBPACK_IMPORTED_MODULE_9__["default"])(node, ['props'], {}),
          monitorScroll = _get.monitorScroll,
          scrollMargin = _get.scrollMargin;

      var pos = Object(getoffset__WEBPACK_IMPORTED_MODULE_8__["default"])(nodeEl);

      if (monitorScroll) {
        if (scrollTop >= pos.top && scrollTop < pos.bottom) {
          actives.mdefault = node.id;
        }

        arrMonitorScroll.push(node);
      }

      margin = scrollMargin ? scrollMargin : defaultMargin;
      pos = Object(get_window_offset__WEBPACK_IMPORTED_MODULE_7__["isOnScreen"])(pos, scroll, margin);
      offsetCache[node.id] = pos;
    });
    this.margins.forEach(function (margin) {
      scrollTop = scroll.top + margin;
      actives['m' + margin] = null;
      arrMonitorScroll.every(function (node) {
        var pos = offsetCache[node.id];

        if (scrollTop >= pos.top && scrollTop < pos.bottom - 1) {
          actives['m' + margin] = node.id;
          return false;
        }

        return true;
      });
    });
    this.margins = this.margins.clear();
    Object(_scrollDispatcher__WEBPACK_IMPORTED_MODULE_10__["scrollDispatch"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actives), {}, {
      nodes: offsetCache,
      scroll: scroll,
      storeName: this.storeName
    }));
  };

  _proto.getNode = function getNode(id) {
    if (this.arrMap && this.arrMap.get) {
      return Object(get_object_value__WEBPACK_IMPORTED_MODULE_9__["toJS"])(this.arrMap.get(id));
    }
  };

  _proto.getOffset = function getOffset(id, callName) {
    var nodes = this.getMap('nodes');
    return nodes[id];
  };

  _proto.hasAttach = function hasAttach(node) {
    var attachToId = this.getAttachToId(node);

    if (this.spys[attachToId] && this.spys[attachToId].has(node)) {
      return attachToId;
    } else {
      return false;
    }
  };

  _proto.getNodeId = function getNodeId(node) {
    if (!node.id) {
      if (node.props && node.props.id) {
        node.id = node.props.id;
      } else {
        node.id = 'spy-' + incNum;
        incNum++;
      }
    }

    return node.id;
  };

  _proto.getAttachToId = function getAttachToId(node) {
    var attachTo = Object(get_object_value__WEBPACK_IMPORTED_MODULE_9__["default"])(node, ['props', 'attachTo']);
    var attachToId;

    if (attachTo) {
      node.attachTo = attachTo;
      attachToId = this.getNodeId(attachTo);
    } else {
      if ('undefined' !== typeof window) {
        node.attachTo = window;
      }

      attachToId = DEFAULT_SCROLL_ID;
    }

    return attachToId;
  };

  _proto.attach = function attach(node) {
    var nodeId = this.getNodeId(node);
    var attachToId = this.getAttachToId(node);

    if (!this.spys[attachToId]) {
      this.spys[attachToId] = Object(immutable__WEBPACK_IMPORTED_MODULE_4__["Set"])().add(node);
    } else {
      this.spys[attachToId] = this.spys[attachToId].add(node);
    }

    this.arrNode = this.arrNode.set(nodeId, node);

    if (!this.isInitEvent[attachToId]) {
      this.isInitEvent[attachToId] = true;
      this.initEvent(node.attachTo);
    }

    return nodeId;
  };

  _proto.detach = function detach(node) {
    var attachToId = this.hasAttach(node);

    if (attachToId) {
      this.spys[attachToId] = this.spys[attachToId].remove(node);
      this.arrNode = this.arrNode["delete"](node.id);

      if (!this.spys[attachToId].size) {
        this.removeEvent(node.attachTo);
        delete this.spys[attachToId];
        this.isInitEvent[attachToId] = false;
      }
    }
  };

  _proto.addMargin = function addMargin(num) {
    this.margins = this.margins.add(num);
  };

  _proto.deleteMargin = function deleteMargin(num) {
    this.margins = this.margins.remove(num);
  };

  _proto.reduce = function reduce(state, action) {
    var storeName = Object(get_object_value__WEBPACK_IMPORTED_MODULE_9__["default"])(action, ['storeName'], 'delayScroll');

    if (storeName === this.storeName) {
      return state.merge(action);
    } else {
      return state;
    }
  };

  return scrollStore;
}(reshow_flux__WEBPACK_IMPORTED_MODULE_5__["ReduceStore"]);

/* harmony default export */ __webpack_exports__["default"] = (new scrollStore(_scrollDispatcher__WEBPACK_IMPORTED_MODULE_10__["default"]));


/***/ }),

/***/ "./build/es/src/testForPassiveScroll.js":
/*!**********************************************!*\
  !*** ./build/es/src/testForPassiveScroll.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var testForPassiveScroll = function testForPassiveScroll() {
  var win = window;
  var supportsPassiveOption = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassiveOption = true;
      }
    });
    win.addEventListener('test', null, opts);
    win.removeEventListener('test', null, opts);
  } catch (e) {}

  return supportsPassiveOption;
};

/* harmony default export */ __webpack_exports__["default"] = (testForPassiveScroll);

/***/ }),

/***/ "./build/es/ui/organisms/ScrollInfo.js":
/*!*********************************************!*\
  !*** ./build/es/ui/organisms/ScrollInfo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../hillliu.github.io/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _organisms_ScrollSpy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organisms/ScrollSpy */ "./build/es/ui/organisms/ScrollSpy.js");
/* harmony import */ var _organisms_ScrollReceiver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisms/ScrollReceiver */ "./build/es/ui/organisms/ScrollReceiver.js");





var ScrollInfo = function ScrollInfo(_ref) {
  var children = _ref.children,
      others = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_organisms_ScrollSpy__WEBPACK_IMPORTED_MODULE_2__["default"], others, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_organisms_ScrollReceiver__WEBPACK_IMPORTED_MODULE_3__["default"], null, children));
};

_c = ScrollInfo;
/* harmony default export */ __webpack_exports__["default"] = (ScrollInfo);

var _c;

$RefreshReg$(_c, "ScrollInfo");

/***/ }),

/***/ "./build/es/ui/organisms/ScrollReceiver.js":
/*!*************************************************!*\
  !*** ./build/es/ui/organisms/ScrollReceiver.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../hillliu.github.io/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-flux */ "../hillliu.github.io/node_modules/reshow-flux/build/es/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-atomic-molecule */ "../hillliu.github.io/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/stores/scrollStore */ "./build/es/src/stores/scrollStore.js");
/* harmony import */ var _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/stores/fastScrollStore */ "./build/es/src/stores/fastScrollStore.js");










var ScrollReceiver = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ScrollReceiver, _Component);

  function ScrollReceiver() {
    return _Component.apply(this, arguments) || this;
  }

  ScrollReceiver.getStores = function getStores(props) {
    return props.noDelay ? [_src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_8__["default"]] : [_src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_7__["default"]];
  };

  ScrollReceiver.calculateState = function calculateState(prevState, props) {
    var noDelay = props.noDelay,
        targetId = props.targetId,
        scrollMargin = props.scrollMargin;
    var store = noDelay ? _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_8__["default"] : _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_7__["default"];
    var state = store.getState();
    var isShown = prevState && prevState.isShown || false;
    var pos = store.getOffset(targetId, store.storeName) || {};
    var scrollInfo = store.getMap('scroll');
    var scrollTop = scrollInfo.top;

    if (pos.isOnScreen) {
      isShown = true;
    }

    var active = 'undefined' !== typeof targetId && targetId === state.get('m' + scrollMargin);

    if (!isNaN(scrollMargin)) {
      store.addMargin(scrollMargin);
    }

    return Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pos), {}, {
      active: active,
      scrollTop: scrollTop,
      scrollInfo: scrollInfo,
      isShown: isShown
    });
  };

  var _proto = ScrollReceiver.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        atom = _this$props.atom,
        container = _this$props.container,
        scrollMargin = _this$props.scrollMargin,
        targetId = _this$props.targetId,
        isScrollReceiver = _this$props.isScrollReceiver,
        noDelay = _this$props.noDelay,
        children = _this$props.children,
        resetProps = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["atom", "container", "scrollMargin", "targetId", "isScrollReceiver", "noDelay", "children"]);

    if (!container) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_6__["SemanticUI"], resetProps, children);
    }

    var targetInfo = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state), {}, {
      targetId: targetId
    });

    var thisChildren = children;

    if (!thisChildren && /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["isValidElement"])(container)) {
      thisChildren = container.props.children;
    }

    return Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_6__["build"])(container)(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, resetProps), {}, {
      targetInfo: targetInfo
    }), thisChildren);
  };

  return ScrollReceiver;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(ScrollReceiver, "defaultProps", {
  scrollMargin: 'default',
  isScrollReceiver: true,
  noDelay: false
});

/* harmony default export */ __webpack_exports__["default"] = (Object(reshow_flux__WEBPACK_IMPORTED_MODULE_5__["connect"])(ScrollReceiver, {
  withProps: true
}));

/***/ }),

/***/ "./build/es/ui/organisms/ScrollSpy.js":
/*!********************************************!*\
  !*** ./build/es/ui/organisms/ScrollSpy.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../hillliu.github.io/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! get-object-value */ "../hillliu.github.io/node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-atomic-molecule */ "../hillliu.github.io/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/stores/scrollStore */ "./build/es/src/stores/scrollStore.js");
/* harmony import */ var _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/stores/fastScrollStore */ "./build/es/src/stores/fastScrollStore.js");






var _SemanticUI;







var ScrollSpy = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ScrollSpy, _PureComponent);

  function ScrollSpy() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {});

    return _this;
  }

  var _proto = ScrollSpy.prototype;

  _proto.getOffsetEl = function getOffsetEl() {
    var _this2 = this;

    if (this.el) {
      return this.el;
    } else {
      // for lazy render component, that warn delay 3 secs.
      if (this.warnTimeout) {
        clearTimeout(this.warnTimeout);
      }

      this.warnTimeout = setTimeout(function () {
        if (!_this2.el) {
          console.warn('Please use SemanticUI. props.container -> import {SemanticUI} from "react-atomic-molecule"', [_this2.classes, _this2, _this2.el]);
        }
      }, 3000);
    }
  };

  _proto.useStore = function useStore() {
    var noDelay = this.props.noDelay;
    return noDelay ? _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_9__["default"] : _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_8__["default"];
  };

  _proto.attach = function attach() {
    if (this.useStore().hasAttach(this)) {
      return this.state.id;
    }

    var id = this.useStore().attach(this);
    this.setState({
      id: id
    });
    return id;
  };

  _proto.detach = function detach() {
    return this.useStore().detach(this);
  };

  _proto.isScrollReceiver = function isScrollReceiver(el) {
    if (Object(get_object_value__WEBPACK_IMPORTED_MODULE_6__["default"])(el, ["props", "isScrollReceiver"])) {
      return true;
    }

    return false;
  };

  _proto.componentDidMount = function componentDidMount() {
    this.attach();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.detach();
  };

  _proto.render = function render() {
    var _this3 = this;
    /**
     * monitorScroll use in store, in component just for reset props.
     */


    var _this$props = this.props,
        className = _this$props.className,
        monitorScroll = _this$props.monitorScroll,
        children = _this$props.children,
        container = _this$props.container,
        noDelay = _this$props.noDelay,
        others = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["className", "monitorScroll", "children", "container", "noDelay"]);

    var isScrollReceiver = this.isScrollReceiver(children);
    var targetId = this.state.id;
    this.classes = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["mixClass"])(className, "spy-tar-" + targetId);
    var cookChildren;
    var thisContainer;
    var thisProps;

    if (isScrollReceiver) {
      thisContainer = children;
      thisProps = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others), children.props), {}, {
        className: this.classes,
        targetId: targetId,
        container: container,
        noDelay: noDelay
      });
    } else {
      thisProps = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        children: children,
        className: this.classes
      }, others);

      if (container) {
        thisContainer = container;
      } else {
        thisContainer = _SemanticUI || (_SemanticUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["SemanticUI"], null));
      }
    }

    thisProps = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, thisProps), {}, {
      refCb: function refCb(el) {
        _this3.el = el;
      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(thisContainer, thisProps);
  };

  return ScrollSpy;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(ScrollSpy, "defaultProps", {
  monitorScroll: true,
  noDelay: false
});

/* harmony default export */ __webpack_exports__["default"] = (ScrollSpy);

/***/ }),

/***/ "./build/es/ui/organisms/SmoothScrollLink.js":
/*!***************************************************!*\
  !*** ./build/es/ui/organisms/SmoothScrollLink.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../hillliu.github.io/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var smooth_scroll_to__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! smooth-scroll-to */ "../hillliu.github.io/node_modules/smooth-scroll-to/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! getoffset */ "../hillliu.github.io/node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/index */ "./build/es/src/index.js");
/* harmony import */ var _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/stores/scrollStore */ "./build/es/src/stores/scrollStore.js");
/* harmony import */ var _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/stores/fastScrollStore */ "./build/es/src/stores/fastScrollStore.js");












var scollTimer = null;

var resetTimer = function resetTimer() {
  if (scollTimer) {
    clearTimeout(scollTimer);
    scollTimer = false;
  }
};

var SmoothScrollLink = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(SmoothScrollLink, _PureComponent);

  function SmoothScrollLink() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      scrollRefElement: null
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleClick", function (e) {
      var props = _this.props;

      var store = _this.useStore();

      var preventDefault = props.preventDefault,
          targetId = props.targetId;
      var scrollRefElement = _this.state.scrollRefElement;

      if (preventDefault) {
        e.preventDefault();
      }

      resetTimer();
      var offset = store.getOffset(targetId);

      if (offset) {
        var margin = _this.getMargin(props, scrollRefElement);

        scollTimer = true;
        Object(smooth_scroll_to__WEBPACK_IMPORTED_MODULE_7__["default"])(offset.top - margin, null, null, function () {
          if (true !== scollTimer) {
            return;
          }

          scollTimer = setTimeout(function () {
            margin = _this.getMargin(props, scrollRefElement);
            offset = store.getOffset(targetId);
            Object(smooth_scroll_to__WEBPACK_IMPORTED_MODULE_7__["default"])(offset.top - margin, 100);
          }, 500);
        });
      }
    });

    return _this;
  }

  var _proto = SmoothScrollLink.prototype;

  _proto.useStore = function useStore() {
    var noDelay = this.props.noDelay;
    return noDelay ? _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_11__["default"] : _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_10__["default"];
  };

  _proto.getMargin = function getMargin(props, ref) {
    var scrollRefLoc = props.scrollRefLoc,
        scrollMargin = props.scrollMargin;
    var margin = 0;

    if (ref) {
      var refOffset = Object(getoffset__WEBPACK_IMPORTED_MODULE_8__["default"])(ref, false);

      switch (scrollRefLoc) {
        case 'bottom':
          margin += refOffset.bottom - refOffset.top;
          break;

        default:
        case 'top':
          break;
      }
    }

    if (!isNaN(scrollMargin)) {
      margin += scrollMargin;
    }

    margin--;
    return margin;
  };

  _proto.componentDidMount = function componentDidMount() {
    var dom = document.getElementById(this.props.scrollRefId);

    if (dom) {
      this.setState({
        scrollRefElement: dom
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    resetTimer();
  };

  _proto.render = function render() {
    var props = this.props;

    var targetId = props.targetId,
        scrollRefLoc = props.scrollRefLoc,
        scrollMargin = props.scrollMargin,
        scrollRefId = props.scrollRefId,
        style = props.style,
        preventDefault = props.preventDefault,
        others = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["targetId", "scrollRefLoc", "scrollMargin", "scrollRefId", "style", "preventDefault"]);

    var scrollRefElement = this.state.scrollRefElement;
    var margin = this.getMargin(props, scrollRefElement);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_9__["ScrollReceiver"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      atom: "a"
    }, others, {
      targetId: targetId,
      scrollMargin: margin,
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.link), style),
      onClick: this.handleClick
    }));
  };

  return SmoothScrollLink;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(SmoothScrollLink, "defaultProps", {
  scrollRefId: '',
  scrollRefLoc: 'bottom',
  preventDefault: true,
  noDelay: false
});

/* harmony default export */ __webpack_exports__["default"] = (SmoothScrollLink);
var Styles = {
  link: {
    cursor: 'pointer'
  }
};

/***/ }),

/***/ "./build/es/ui/pages/index.js":
/*!************************************!*\
  !*** ./build/es/ui/pages/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "../hillliu.github.io/node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../hillliu.github.io/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/index */ "./build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-atomic-molecule */ "../hillliu.github.io/node_modules/react-atomic-molecule/build/es/src/index.js");





var _MenuItem, _MenuItem2, _MenuItem3;


/**
 * Production please use
 * import {xxx} from 'organism-react-scroll-nav';
 */


/*Test only*/

Object(_src_index__WEBPACK_IMPORTED_MODULE_5__["scrollDispatch"])({
  scrollMargin: 100
});


var MenuItem = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuItem, _Component);

  function MenuItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MenuItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        targetInfo = _this$props.targetInfo,
        style = _this$props.style,
        reset = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["targetInfo", "style"]);

    var activeStyle = null;

    if (targetInfo.active) {
      activeStyle = Styles.active;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.link), style), activeStyle)
    }, reset));
  };

  return MenuItem;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var Index = /*#__PURE__*/function (_Component2) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _Component2);

  function Index() {
    return _Component2.apply(this, arguments) || this;
  }

  var _proto2 = Index.prototype;

  _proto2.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      id: "nav-parent",
      style: Styles.nav
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__["SmoothScrollLink"], {
      scrollRefId: "nav-parent",
      container: _MenuItem || (_MenuItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, null)),
      targetId: "t1",
      style: {
        background: '#3498DB'
      }
    }, "test1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__["SmoothScrollLink"], {
      scrollRefId: "nav-parent",
      container: _MenuItem2 || (_MenuItem2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, null)),
      targetId: "t2",
      style: {
        background: '#F1C40F'
      }
    }, "test2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__["SmoothScrollLink"], {
      scrollRefId: "nav-parent",
      container: _MenuItem3 || (_MenuItem3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, null)),
      targetId: "t3",
      style: {
        background: '#2ECC71'
      }
    }, "test3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: {
        paddingTop: 66
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__["ScrollSpy"], {
      id: "t1",
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.content), {}, {
        background: "#3498DB"
      })
    }, "test111"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__["ScrollSpy"], {
      id: "t2",
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.content), {}, {
        background: "#F1C40F"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__["ScrollSpy"], {
      monitorScroll: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__["ScrollReceiver"], {
      style: {
        border: "1px solid #fff"
      }
    }, "test222"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__["ScrollSpy"], {
      id: "t3",
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.content), {}, {
        background: "#2ECC71"
      })
    }, "test333")));
  };

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
var Styles = {
  content: {
    height: "110vh",
    textAlign: "center",
    paddingTop: "10%",
    fontSize: "4rem",
    color: "#fff"
  },
  link: {
    display: "inline-block",
    padding: "0.3rem 0.5rem",
    fontSize: "2rem",
    color: "#fff",
    marginRight: "10px",
    opacity: "0.5",
    cursor: "pointer"
  },
  active: {
    opacity: 1
  },
  body: Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_6__["reactStyle"])({
    margin: 0,
    padding: 0
  }, 'body'),
  nav: {
    position: 'fixed',
    background: '#fff',
    textAlign: 'center',
    width: "100%",
    padding: "10px 0",
    top: 0
  }
};
Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_6__["injectStyle"])();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map