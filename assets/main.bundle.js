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
/******/ 		return __webpack_require__.p + "" + chunkId + "." + "2b20655a9ca2725237ce" + ".bundle.js"
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
/* harmony import */ var reshow_app_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-app/client */ "./node_modules/reshow-app/client.js");
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
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-flux */ "./node_modules/reshow-flux/build/es/index.js");



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
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var _scrollDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scrollDispatcher */ "./build/es/src/scrollDispatcher.js");
/* harmony import */ var _scrollStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollStore */ "./build/es/src/stores/scrollStore.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");







var fastScrollStore = /*#__PURE__*/function (_scrollStore) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(fastScrollStore, _scrollStore);

  function fastScrollStore() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _scrollStore.call.apply(_scrollStore, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "storeName", "fastScroll");

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
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-flux */ "./node_modules/reshow-flux/build/es/index.js");
/* harmony import */ var get_scroll_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! get-scroll-info */ "./node_modules/get-scroll-info/build/es/src/index.js");
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! get-window-offset */ "./node_modules/get-window-offset/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! getoffset */ "./node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var reshow_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-constant */ "./node_modules/reshow-constant/build/es/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! call-func */ "./node_modules/call-func/build/es/src/index.js");
/* harmony import */ var win_doc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! win-doc */ "./node_modules/win-doc/build/es/src/index.js");
/* harmony import */ var _scrollDispatcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scrollDispatcher */ "./build/es/src/scrollDispatcher.js");
/* harmony import */ var _testForPassiveScroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../testForPassiveScroll */ "./build/es/src/testForPassiveScroll.js");














var incNum = 0;
var DEFAULT_SCROLL_ID = -1;

var scrollStore = /*#__PURE__*/function (_ReduceStore) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollStore, _ReduceStore);

  function scrollStore() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ReduceStore.call.apply(_ReduceStore, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "storeName", "delayScroll");

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "isInitEvent", {});

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "isInitResizeEvent", false);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "spys", {});

    return _this;
  }

  var _proto = scrollStore.prototype;

  _proto.getInitialState = function getInitialState() {
    this.trigger = this.triggerScroll.bind(this);
    this.arrNode = Object(reshow_flux__WEBPACK_IMPORTED_MODULE_4__["Map"])();
    this.margins = Object(reshow_flux__WEBPACK_IMPORTED_MODULE_4__["Set"])();
    this.scrollMonitor = this.runScrollMonitor.bind(this);
    this.scrollDebounce = Object(call_func__WEBPACK_IMPORTED_MODULE_10__["debounce"])(this.trigger);
    this.bindHandleResize = this.handleResize.bind(this);
    return Object(reshow_flux__WEBPACK_IMPORTED_MODULE_4__["Map"])({
      scrollDelay: 50,
      scrollMargin: 0
    });
  };

  _proto.initResizeEvent = function initResizeEvent() {
    var oWin = Object(win_doc__WEBPACK_IMPORTED_MODULE_11__["win"])();

    if (!oWin.__null) {
      this.isInitResizeEvent = true;

      if (oWin.addEventListener) {
        oWin.addEventListener("resize", this.bindHandleResize);
      } else {
        oWin.attachEvent("onresize", this.bindHandleResize);
      }
    }
  };

  _proto.initEvent = function initEvent(el) {
    var _this2 = this;

    if ("undefined" !== typeof el) {
      if (el.addEventListener) {
        var supportsPassive = Object(_testForPassiveScroll__WEBPACK_IMPORTED_MODULE_13__["default"])();
        el.addEventListener("scroll", this.scrollMonitor, supportsPassive ? {
          passive: true
        } : false);
      } else {
        el.attachEvent("onscroll", this.scrollMonitor);
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
    if (el !== null && el !== void 0 && el.removeEventListener) {
      el.removeEventListener("scroll", this.scrollMonitor);
    } else {
      el === null || el === void 0 ? void 0 : el.deachEvent("onscroll", this.scrollMonitor);
    }
  };

  _proto.handleResize = function handleResize() {
    var _this3 = this;

    Object(reshow_constant__WEBPACK_IMPORTED_MODULE_9__["KEYS"])(this.spys).forEach(function (scrollId) {
      return _this3.scrollMonitor({
        target: {
          id: scrollId
        }
      });
    });
  };

  _proto.runScrollMonitor = function runScrollMonitor(e) {
    var delay = this.getState().get("scrollDelay");
    this.scrollDebounce({
      delay: delay,
      args: [e === null || e === void 0 ? void 0 : e.target]
    });
  };

  _proto.triggerScroll = function triggerScroll(scrollNode) {
    var _this4 = this;

    var scrollId = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(scrollNode, ["id"]) || DEFAULT_SCROLL_ID;
    var defaultMargin = this.getState().get("scrollMargin");
    var actives = {
      mdefault: null
    };
    var offsetCache = {};
    var arrMonitorScroll = [];
    var scroll = Object(get_scroll_info__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var scrollTop = scroll.top + defaultMargin;
    var margin;
    (this.spys[scrollId] || []).forEach(function (node) {
      var nodeEl = node.getOffsetEl();

      if (!nodeEl) {
        return;
      }

      var nodeId = _this4.getNodeId(node);

      var monitorScroll = Object(call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getMonitorScroll);
      var scrollMargin = Object(call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getScrollMargin);
      var pos = Object(getoffset__WEBPACK_IMPORTED_MODULE_7__["default"])(nodeEl);

      if (monitorScroll) {
        if (scrollTop >= pos.top && scrollTop < pos.bottom) {
          actives.mdefault = nodeId;
        }

        arrMonitorScroll.push(node);
      }

      margin = scrollMargin ? scrollMargin : defaultMargin;
      pos = Object(get_window_offset__WEBPACK_IMPORTED_MODULE_6__["isOnScreen"])(pos, scroll, margin);
      offsetCache[nodeId] = pos;
    });
    this.margins.forEach(function (margin) {
      scrollTop = scroll.top + margin;
      actives["m" + margin] = null;
      arrMonitorScroll.every(function (node) {
        var nodeId = _this4.getNodeId(node);

        var pos = offsetCache[nodeId];

        if (scrollTop >= pos.top && scrollTop < pos.bottom - 1) {
          actives["m" + margin] = nodeId;
          return false;
        }

        return true;
      });
    });
    this.margins = this.margins.clear();
    Object(_scrollDispatcher__WEBPACK_IMPORTED_MODULE_12__["scrollDispatch"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actives), {}, {
      nodes: offsetCache,
      scroll: scroll,
      storeName: this.storeName
    }));
  };

  _proto.getNode = function getNode(id) {
    if (this.arrMap && this.arrMap.get) {
      return Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["toJS"])(this.arrMap.get(id));
    }
  };

  _proto.getOffset = function getOffset(id, callName) {
    var nodes = this.getMap("nodes");
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
    var id = Object(call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getId) || node.id;

    if (!id) {
      return this.setNodeId(node);
    } else {
      return id;
    }
  };

  _proto.setNodeId = function setNodeId(node) {
    var nextId = "spy-" + incNum;
    incNum++;

    if (node.setId) {
      node.setId(nextId);
    } else {
      node.id = nextId;
    }

    return nextId;
  };

  _proto.getAttachToId = function getAttachToId(node) {
    var attachTo = Object(call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getAttachTo);
    var attachToId;

    if (attachTo) {
      attachToId = this.getNodeId(attachTo);
    } else {
      var oWin = Object(win_doc__WEBPACK_IMPORTED_MODULE_11__["win"])();

      if (!oWin.__null) {
        node.setAttachTo(oWin);
      }

      attachToId = DEFAULT_SCROLL_ID;
    }

    return attachToId;
  };

  _proto.attach = function attach(node) {
    var nodeId = this.getNodeId(node);
    var attachToId = this.getAttachToId(node);

    if (!this.spys[attachToId]) {
      this.spys[attachToId] = Object(reshow_flux__WEBPACK_IMPORTED_MODULE_4__["Set"])().add(node);
    } else {
      this.spys[attachToId] = this.spys[attachToId].add(node);
    }

    this.arrNode = this.arrNode.set(nodeId, node);

    if (!this.isInitEvent[attachToId]) {
      this.isInitEvent[attachToId] = true;
      this.initEvent(Object(call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getAttachTo));
    }

    return nodeId;
  };

  _proto.detach = function detach(node) {
    var attachToId = this.hasAttach(node);

    if (attachToId) {
      this.spys[attachToId] = this.spys[attachToId].remove(node);
      this.arrNode = this.arrNode["delete"](this.getNodeId(node));

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
    var storeName = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(action, ["storeName"], "delayScroll");

    if (storeName === this.storeName) {
      return this.mergeMap(state, action);
    } else {
      return state;
    }
  };

  return scrollStore;
}(reshow_flux__WEBPACK_IMPORTED_MODULE_4__["ReduceStore"]);

/* harmony default export */ __webpack_exports__["default"] = (new scrollStore(_scrollDispatcher__WEBPACK_IMPORTED_MODULE_12__["default"]));


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
    var opts = Object.defineProperty({}, "passive", {
      get: function get() {
        supportsPassiveOption = true;
      }
    });
    win.addEventListener("test", null, opts);
    win.removeEventListener("test", null, opts);
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
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _organisms_ScrollSpy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisms/ScrollSpy */ "./build/es/ui/organisms/ScrollSpy.js");
/* harmony import */ var _organisms_ScrollReceiver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/ScrollReceiver */ "./build/es/ui/organisms/ScrollReceiver.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


var _excluded = ["children"];





var ScrollInfo = function ScrollInfo(_ref) {
  var children = _ref.children,
      others = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_organisms_ScrollSpy__WEBPACK_IMPORTED_MODULE_3__["default"], Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_organisms_ScrollReceiver__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: children
    })
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollInfo);

/***/ }),

/***/ "./build/es/ui/organisms/ScrollReceiver.js":
/*!*************************************************!*\
  !*** ./build/es/ui/organisms/ScrollReceiver.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reshow_return__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-return */ "./node_modules/reshow-return/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var reshow_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-constant */ "./node_modules/reshow-constant/build/es/index.js");
/* harmony import */ var _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/stores/scrollStore */ "./build/es/src/stores/scrollStore.js");
/* harmony import */ var _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/stores/fastScrollStore */ "./build/es/src/stores/fastScrollStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var _excluded = ["scrollMargin", "noDelay", "children", "targetId", "container"];








var ScrollReceiver = function ScrollReceiver(_ref) {
  var _ref$scrollMargin = _ref.scrollMargin,
      scrollMargin = _ref$scrollMargin === void 0 ? "default" : _ref$scrollMargin,
      _ref$noDelay = _ref.noDelay,
      noDelay = _ref$noDelay === void 0 ? false : _ref$noDelay,
      _children = _ref.children,
      targetId = _ref.targetId,
      container = _ref.container,
      resetProps = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var lastIsShown = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var store = noDelay ? _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_7__["default"] : _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_6__["default"];
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(reshow_return__WEBPACK_IMPORTED_MODULE_3__["default"], {
    stores: [store],
    initStates: ["scroll"],
    children: function children(_ref2) {
      var _ref2$scroll = _ref2.scroll,
          scrollInfo = _ref2$scroll === void 0 ? {} : _ref2$scroll;
      var activeId = store.getState().get("m" + scrollMargin);
      var scrollTop = scrollInfo.top;
      var pos = store.getOffset(targetId, store.storeName) || {};
      var isShown = lastIsShown.current || false;

      if (pos.isOnScreen) {
        isShown = true;
        lastIsShown.current = true;
      }

      var active = reshow_constant__WEBPACK_IMPORTED_MODULE_5__["UNDEFINED"] !== _typeof(targetId) && targetId === activeId;

      var targetInfo = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pos), {}, {
        active: active,
        scrollTop: scrollTop,
        scrollInfo: scrollInfo,
        scrollMargin: scrollMargin,
        isShown: isShown,
        targetId: targetId
      });

      if (!isNaN(scrollMargin)) {
        store.addMargin(scrollMargin);
      }

      if (!container) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["SemanticUI"], Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, resetProps), {}, {
          children: _children
        }));
      }

      var thisChildren = _children;

      if (!thisChildren && /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"])(container)) {
        thisChildren = container.props.children;
      }

      return Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["build"])(container)(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, resetProps), {}, {
        targetInfo: targetInfo
      }), thisChildren);
    }
  });
};

ScrollReceiver.displayName = "ScrollReceiver";
/* harmony default export */ __webpack_exports__["default"] = (ScrollReceiver);

/***/ }),

/***/ "./build/es/ui/organisms/ScrollSpy.js":
/*!********************************************!*\
  !*** ./build/es/ui/organisms/ScrollSpy.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var reshow_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-hooks */ "./node_modules/reshow-hooks/build/es/src/index.js");
/* harmony import */ var _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/stores/scrollStore */ "./build/es/src/stores/scrollStore.js");
/* harmony import */ var _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/stores/fastScrollStore */ "./build/es/src/stores/fastScrollStore.js");


var _excluded = ["noDelay", "monitorScroll", "id", "scrollMargin", "children", "container", "className", "attachTo"];







var useScrollSpy = function useScrollSpy(props) {
  /**
   * monitorScroll use in store, in component just for reset props.
   */
  var _props$noDelay = props.noDelay,
      noDelay = _props$noDelay === void 0 ? false : _props$noDelay,
      _props$monitorScroll = props.monitorScroll,
      monitorScroll = _props$monitorScroll === void 0 ? true : _props$monitorScroll,
      id = props.id,
      scrollMargin = props.scrollMargin,
      children = props.children,
      container = props.container,
      className = props.className,
      attachTo = props.attachTo,
      others = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(id),
      targetId = _useState[0],
      setTargetId = _useState[1];

  var lastEl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var lastConfig = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({});
  lastConfig.current = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lastConfig.current), {}, {
    id: targetId,
    attachTo: attachTo,
    monitorScroll: monitorScroll,
    scrollMargin: scrollMargin
  });
  var thisClassName = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["mixClass"])(className, "spy-tar-" + targetId);
  }, [targetId, className]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var store = noDelay ? _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_7__["default"] : _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_6__["default"];
    var id = store.attach(expose);
    setTargetId(id);
    return function () {
      store.detach(expose);
    };
  }, []);
  var warnDebounce = Object(reshow_hooks__WEBPACK_IMPORTED_MODULE_5__["useDebounce"])(function (args) {
    // for lazy render component, that warn delay 1 secs.
    if (!lastEl.current) {
      console.warn('Please use SemanticUI. props.container -> import {SemanticUI} from "react-atomic-molecule"', args);
    }
  }, 1000);
  var getOffsetEl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (lastEl.current) {
      return lastEl.current;
    } else {
      warnDebounce({
        thisClassName: thisClassName,
        nextContainer: nextContainer
      });
    }
  }, [thisClassName, nextContainer]);
  var expose = {
    getOffsetEl: getOffsetEl,
    getId: function getId() {
      return lastConfig.current.id;
    },
    setId: setTargetId,
    getAttachTo: function getAttachTo() {
      return lastConfig.current.attachTo;
    },
    setAttachTo: function setAttachTo(attachTo) {
      return lastConfig.current.attachTo = attachTo;
    },
    getMonitorScroll: function getMonitorScroll() {
      return lastConfig.current.monitorScroll;
    },
    getScrollMargin: function getScrollMargin() {
      return lastConfig.current.scrollMargin;
    }
  };
  var hasScrollReceiver = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return "ScrollReceiver" === Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["getDisplayName"])(children) ? true : false;
  }, [children]);
  var nextContainer;
  var nextProps;

  var allProps = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others), {}, {
    refCb: function refCb(el) {
      return lastEl.current = el;
    },
    className: thisClassName,
    id: targetId
  });

  if (hasScrollReceiver) {
    nextContainer = children;
    nextProps = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, children.props), allProps), {}, {
      targetId: targetId,
      container: container,
      noDelay: noDelay
    });
  } else {
    nextContainer = container || react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["SemanticUI"];
    nextProps = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, allProps), {}, {
      children: children
    });
  }

  return {
    nextContainer: nextContainer,
    nextProps: nextProps
  };
};

var ScrollSpy = function ScrollSpy(props) {
  var _useScrollSpy = useScrollSpy(props),
      nextContainer = _useScrollSpy.nextContainer,
      nextProps = _useScrollSpy.nextProps;

  return Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["build"])(nextContainer)(nextProps);
};

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
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var smooth_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smooth-scroll-to */ "./node_modules/smooth-scroll-to/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! getoffset */ "./node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var win_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! win-doc */ "./node_modules/win-doc/build/es/src/index.js");
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/index */ "./build/es/src/index.js");
/* harmony import */ var _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/stores/scrollStore */ "./build/es/src/stores/scrollStore.js");
/* harmony import */ var _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/stores/fastScrollStore */ "./build/es/src/stores/fastScrollStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);


var _excluded = ["targetId", "scrollRefLoc", "scrollRefId", "scrollMargin", "style", "preventDefault", "noDelay"];








var scollTimer = null;

var resetTimer = function resetTimer() {
  if (scollTimer) {
    clearTimeout(scollTimer);
    scollTimer = false;
  }
};

var useSmoothScrollLink = function useSmoothScrollLink(props) {
  var targetId = props.targetId,
      _props$scrollRefLoc = props.scrollRefLoc,
      scrollRefLoc = _props$scrollRefLoc === void 0 ? "bottom" : _props$scrollRefLoc,
      _props$scrollRefId = props.scrollRefId,
      scrollRefId = _props$scrollRefId === void 0 ? "" : _props$scrollRefId,
      scrollMargin = props.scrollMargin,
      style = props.style,
      _props$preventDefault = props.preventDefault,
      preventDefault = _props$preventDefault === void 0 ? true : _props$preventDefault,
      _props$noDelay = props.noDelay,
      noDelay = _props$noDelay === void 0 ? false : _props$noDelay,
      others = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      scrollRefElement = _useState[0],
      setScrollRefElement = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var oDoc = Object(win_doc__WEBPACK_IMPORTED_MODULE_5__["doc"])();

    if (!oDoc.__null) {
      var dom = oDoc.getElementById(scrollRefId);

      if (dom) {
        setScrollRefElement(dom);
      }
    }

    return function () {
      resetTimer();
    };
  });
  var getMargin = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var ref = scrollRefElement;
    var margin = 0;

    if (ref) {
      var refOffset = Object(getoffset__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, false);

      switch (scrollRefLoc) {
        case "bottom":
          margin += refOffset.bottom - refOffset.top;
          break;

        default:
        case "top":
          break;
      }
    }

    if (!isNaN(scrollMargin)) {
      margin += scrollMargin;
    }

    margin--;
    return margin;
  }, [scrollRefLoc, scrollMargin, scrollRefElement]);

  var getStore = function getStore() {
    return noDelay ? _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_8__["default"] : _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_7__["default"];
  };

  var handler = {
    click: function click(e) {
      var store = getStore();

      if (preventDefault) {
        e.preventDefault();
      }

      resetTimer();
      var offset = store.getOffset(targetId);

      if (offset) {
        var _margin = getMargin();

        scollTimer = true;
        Object(smooth_scroll_to__WEBPACK_IMPORTED_MODULE_3__["default"])(offset.top - _margin, null, null, function () {
          if (true !== scollTimer) {
            return;
          }

          scollTimer = setTimeout(function () {
            _margin = getMargin();
            offset = store.getOffset(targetId);
            Object(smooth_scroll_to__WEBPACK_IMPORTED_MODULE_3__["default"])(offset.top - _margin, 100);
          }, 500);
        });
      }
    }
  };
  var margin = getMargin();
  return {
    others: others,
    handler: handler,
    targetId: targetId,
    margin: margin,
    style: style
  };
};

var SmoothScrollLink = function SmoothScrollLink(props) {
  var _useSmoothScrollLink = useSmoothScrollLink(props),
      others = _useSmoothScrollLink.others,
      handler = _useSmoothScrollLink.handler,
      margin = _useSmoothScrollLink.margin,
      style = _useSmoothScrollLink.style,
      targetId = _useSmoothScrollLink.targetId;

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_src_index__WEBPACK_IMPORTED_MODULE_6__["ScrollReceiver"], Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    atom: "a"
  }, others), {}, {
    targetId: targetId,
    scrollMargin: margin,
    style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.link), style),
    onClick: handler.click
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SmoothScrollLink);
var Styles = {
  link: {
    cursor: "pointer"
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
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/index */ "./build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);




var _MenuItem, _MenuItem2, _MenuItem3;

var _excluded = ["targetInfo", "style"];

/**
 * Production please use
 * import {xxx} from 'organism-react-scroll-nav';
 */


/*Test only*/

Object(_src_index__WEBPACK_IMPORTED_MODULE_4__["scrollDispatch"])({
  scrollMargin: 100
});




var MenuItem = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(MenuItem, _Component);

  function MenuItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MenuItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        targetInfo = _this$props.targetInfo,
        style = _this$props.style,
        reset = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, _excluded);

    var activeStyle = null;

    if (targetInfo.active) {
      activeStyle = Styles.active;
    }

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.link), style), activeStyle)
    }, reset));
  };

  return MenuItem;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var Index = /*#__PURE__*/function (_Component2) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, _Component2);

  function Index() {
    return _Component2.apply(this, arguments) || this;
  }

  var _proto2 = Index.prototype;

  _proto2.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
        id: "nav-parent",
        style: Styles.nav,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_src_index__WEBPACK_IMPORTED_MODULE_4__["SmoothScrollLink"], {
          scrollRefId: "nav-parent",
          container: _MenuItem || (_MenuItem = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(MenuItem, {})),
          targetId: "t1",
          style: {
            background: "#3498DB"
          },
          children: "test1"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_src_index__WEBPACK_IMPORTED_MODULE_4__["SmoothScrollLink"], {
          scrollRefId: "nav-parent",
          container: _MenuItem2 || (_MenuItem2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(MenuItem, {})),
          targetId: "t2",
          style: {
            background: "#F1C40F"
          },
          children: "test2"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_src_index__WEBPACK_IMPORTED_MODULE_4__["SmoothScrollLink"], {
          scrollRefId: "nav-parent",
          container: _MenuItem3 || (_MenuItem3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(MenuItem, {})),
          targetId: "t3",
          style: {
            background: "#2ECC71"
          },
          children: "test3"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
        style: {
          paddingTop: 66
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_src_index__WEBPACK_IMPORTED_MODULE_4__["ScrollSpy"], {
          id: "t1",
          style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.content), {}, {
            background: "#3498DB"
          }),
          children: "test111"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_src_index__WEBPACK_IMPORTED_MODULE_4__["ScrollSpy"], {
          id: "t2",
          style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.content), {}, {
            background: "#F1C40F"
          }),
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_src_index__WEBPACK_IMPORTED_MODULE_4__["ScrollSpy"], {
            monitorScroll: false,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_src_index__WEBPACK_IMPORTED_MODULE_4__["ScrollReceiver"], {
              style: {
                border: "1px solid #fff"
              },
              children: "test222"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_src_index__WEBPACK_IMPORTED_MODULE_4__["ScrollSpy"], {
          id: "t3",
          style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.content), {}, {
            background: "#2ECC71"
          }),
          children: "test333"
        })]
      })]
    });
  };

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

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
  body: Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["reactStyle"])({
    margin: 0,
    padding: 0
  }, "body"),
  nav: {
    position: "fixed",
    background: "#fff",
    textAlign: "center",
    width: "100%",
    padding: "10px 0",
    top: 0
  }
};
Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["injectStyle"])();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map