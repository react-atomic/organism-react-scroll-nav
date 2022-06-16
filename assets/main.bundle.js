/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 222:
/*!*********************************!*\
  !*** ./build/es/src/client.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var reshow_app_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-app/client */ 223);
/* harmony import */ var _ui_pages_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/pages/index.mjs */ 325);


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,reshow_app_client__WEBPACK_IMPORTED_MODULE_0__["default"])(_ui_pages_index_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ 145:
/*!********************************!*\
  !*** ./build/es/src/index.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollReceiver": () => (/* reexport safe */ _ui_organisms_ScrollReceiver_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "ScrollSpy": () => (/* reexport safe */ _ui_organisms_ScrollSpy_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "SmoothScrollLink": () => (/* reexport safe */ _ui_organisms_SmoothScrollLink_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stores/scrollStore.mjs */ 40);
/* harmony import */ var _stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores/fastScrollStore.mjs */ 47);
/* harmony import */ var _ui_organisms_ScrollSpy_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/organisms/ScrollSpy.mjs */ 108);
/* harmony import */ var _ui_organisms_ScrollReceiver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/organisms/ScrollReceiver.mjs */ 109);
/* harmony import */ var _ui_organisms_ScrollInfo_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/organisms/ScrollInfo.mjs */ 327);
/* harmony import */ var _ui_organisms_SmoothScrollLink_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/organisms/SmoothScrollLink.mjs */ 221);
// Stores

 // UI






/***/ }),

/***/ 47:
/*!*************************************************!*\
  !*** ./build/es/src/stores/fastScrollStore.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ 14);
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ 15);
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ 24);
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ 19);
/* harmony import */ var reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createSuper */ 20);
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ 13);
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-flux */ 16);
/* harmony import */ var _scrollStore_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scrollStore.mjs */ 40);









var FastScroller = /*#__PURE__*/function (_Scroller) {
  (0,reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FastScroller, _Scroller);

  var _super = (0,reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FastScroller);

  function FastScroller() {
    var _this;

    (0,reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FastScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "storeName", "fastScroll");

    return _this;
  }

  (0,reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FastScroller, [{
    key: "runScrollMonitor",
    value: function runScrollMonitor(e) {
      this.triggerScroll(e.target);
    }
  }]);

  return FastScroller;
}(_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_7__.Scroller);

var oFastScroller = new FastScroller();

var _ImmutableStore = (0,reshow_flux__WEBPACK_IMPORTED_MODULE_6__.ImmutableStore)(oFastScroller.reduce.bind(oFastScroller), oFastScroller.getInitialState.bind(oFastScroller)),
    store = _ImmutableStore[0],
    fastScrollDispatch = _ImmutableStore[1];

store.scroller = oFastScroller;
oFastScroller.dispatch = fastScrollDispatch;
oFastScroller.store = store;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ 40:
/*!*********************************************!*\
  !*** ./build/es/src/stores/scrollStore.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scroller": () => (/* binding */ Scroller),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ 0);
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ 14);
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ 15);
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ 13);
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-flux */ 16);
/* harmony import */ var get_scroll_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! get-scroll-info */ 30);
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! get-window-offset */ 141);
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! getoffset */ 32);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! get-object-value */ 6);
/* harmony import */ var reshow_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-constant */ 1);
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! call-func */ 7);
/* harmony import */ var win_doc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! win-doc */ 10);
/* harmony import */ var _testForPassiveScroll_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../testForPassiveScroll.mjs */ 326);













var incNum = 0;
var DEFAULT_SCROLL_ID = -1;

var Scroller = /*#__PURE__*/function () {
  function Scroller() {
    (0,reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Scroller);

    (0,reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "storeName", "delayScroll");

    (0,reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "isInitEvent", {});

    (0,reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "isInitResizeEvent", false);

    (0,reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "spys", {});
  }

  (0,reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Scroller, [{
    key: "initResizeEvent",
    value: function initResizeEvent() {
      var oWin = (0,win_doc__WEBPACK_IMPORTED_MODULE_11__.win)();

      if (!oWin.__null) {
        this.isInitResizeEvent = true;

        if (oWin.addEventListener) {
          oWin.addEventListener("resize", this.bindHandleResize);
        } else {
          oWin.attachEvent("onresize", this.bindHandleResize);
        }
      }
    }
  }, {
    key: "initEvent",
    value: function initEvent(el) {
      var _this = this;

      if ("undefined" !== typeof el) {
        if (el.addEventListener) {
          var supportsPassive = (0,_testForPassiveScroll_mjs__WEBPACK_IMPORTED_MODULE_12__["default"])();
          el.addEventListener("scroll", this.scrollMonitor, supportsPassive ? {
            passive: true
          } : false);
        } else {
          el.attachEvent("onscroll", this.scrollMonitor);
        }

        this.initTimer = setInterval( //for lazy content
        function () {
          return _this.trigger(el);
        }, 300);

        if (!this.isInitResizeEvent) {
          this.initResizeEvent();
        }
      }
    }
  }, {
    key: "removeEvent",
    value: function removeEvent(el) {
      if (el !== null && el !== void 0 && el.removeEventListener) {
        el.removeEventListener("scroll", this.scrollMonitor);
      } else {
        el === null || el === void 0 ? void 0 : el.deachEvent("onscroll", this.scrollMonitor);
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var _this2 = this;

      (0,reshow_constant__WEBPACK_IMPORTED_MODULE_9__.KEYS)(this.spys).forEach(function (scrollId) {
        return _this2.scrollMonitor({
          target: {
            id: scrollId
          }
        });
      });
    }
  }, {
    key: "runScrollMonitor",
    value: function runScrollMonitor(e) {
      this.clearInitTimer();
      var delay = this.store.getState().get("scrollDelay");
      this.scrollDebounce({
        delay: delay,
        args: [e === null || e === void 0 ? void 0 : e.target]
      });
    }
  }, {
    key: "triggerScroll",
    value: function triggerScroll(scrollNode) {
      var _this3 = this;

      var scrollId = (0,get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(scrollNode, ["id"]) || DEFAULT_SCROLL_ID;
      var defaultMargin = this.store.getState().get("scrollMargin");
      var actives = {
        mdefault: null
      };
      var offsetCache = {};
      var arrMonitorScroll = [];
      var scroll = (0,get_scroll_info__WEBPACK_IMPORTED_MODULE_5__["default"])();
      var scrollTop = scroll.top + defaultMargin;
      var margin;
      (this.spys[scrollId] || []).forEach(function (node) {
        var nodeEl = node.getOffsetEl();

        if (!nodeEl) {
          return;
        }

        var nodeId = _this3.getNodeId(node);

        var monitorScroll = (0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getMonitorScroll);
        var scrollMargin = (0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getScrollMargin);
        var pos = (0,getoffset__WEBPACK_IMPORTED_MODULE_7__["default"])(nodeEl);

        if (monitorScroll) {
          if (scrollTop >= pos.top && scrollTop < pos.bottom) {
            actives.mdefault = nodeId;
          }

          arrMonitorScroll.push(node);
        }

        margin = scrollMargin ? scrollMargin : defaultMargin;
        pos = (0,get_window_offset__WEBPACK_IMPORTED_MODULE_6__.isOnScreen)(pos, scroll, margin);
        offsetCache[nodeId] = pos;
      });
      var allMonitorNodeLen = arrMonitorScroll.length;
      this.margins.forEach(function (margin) {
        scrollTop = scroll.top + margin;
        actives["m" + margin] = null;
        var i = allMonitorNodeLen;

        while (i--) {
          var node = arrMonitorScroll[i];

          var nodeId = _this3.getNodeId(node);

          var pos = offsetCache[nodeId];

          if (scrollTop >= pos.top && scrollTop <= pos.bottom - 1) {
            actives["m" + margin] = nodeId;
            break;
          }
        }
      });
      this.margins = this.margins.clear();
      this.dispatch((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actives), {}, {
        nodes: offsetCache,
        scroll: scroll,
        storeName: this.storeName
      }));
    }
  }, {
    key: "getNode",
    value: function getNode(id) {
      if (this.arrMap && this.arrMap.get) {
        return (0,get_object_value__WEBPACK_IMPORTED_MODULE_8__.toJS)(this.arrMap.get(id));
      }
    }
  }, {
    key: "getOffset",
    value: function getOffset(id, callName) {
      var nodes = this.store.getMap("nodes");
      return nodes[id];
    }
  }, {
    key: "hasAttach",
    value: function hasAttach(node) {
      var attachToId = this.getAttachToId(node);

      if (this.spys[attachToId] && this.spys[attachToId].has(node)) {
        return attachToId;
      } else {
        return false;
      }
    }
  }, {
    key: "getNodeId",
    value: function getNodeId(node) {
      var id = (0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getId) || node.id;

      if (!id) {
        return this.setNodeId(node);
      } else {
        return id;
      }
    }
  }, {
    key: "setNodeId",
    value: function setNodeId(node) {
      var nextId = "spy-" + incNum;
      incNum++;

      if (node.setId) {
        node.setId(nextId);
      } else {
        node.id = nextId;
      }

      return nextId;
    }
  }, {
    key: "getAttachToId",
    value: function getAttachToId(node) {
      var attachTo = (0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getAttachTo);
      var attachToId;

      if (attachTo) {
        attachToId = this.getNodeId(attachTo);
      } else {
        var oWin = (0,win_doc__WEBPACK_IMPORTED_MODULE_11__.win)();

        if (!oWin.__null) {
          node.setAttachTo(oWin);
        }

        attachToId = DEFAULT_SCROLL_ID;
      }

      return attachToId;
    }
  }, {
    key: "attach",
    value: function attach(node) {
      var nodeId = this.getNodeId(node);
      var attachToId = this.getAttachToId(node);

      if (!this.spys[attachToId]) {
        this.spys[attachToId] = (0,reshow_flux__WEBPACK_IMPORTED_MODULE_4__.Set)().add(node);
      } else {
        this.spys[attachToId] = this.spys[attachToId].add(node);
      }

      this.arrNode = this.arrNode.set(nodeId, node);

      if (!this.isInitEvent[attachToId]) {
        this.isInitEvent[attachToId] = true;
        this.initEvent((0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getAttachTo));
      }

      return nodeId;
    }
  }, {
    key: "detach",
    value: function detach(node) {
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
    }
  }, {
    key: "addMargin",
    value: function addMargin(num) {
      this.margins = this.margins.add(num);
    }
  }, {
    key: "deleteMargin",
    value: function deleteMargin(num) {
      this.margins = this.margins.remove(num);
    }
  }, {
    key: "clearInitTimer",
    value: function clearInitTimer() {
      if (this.initTimer) {
        clearInterval(this.initTimer);
        this.initTimer = null;
      }
    }
  }, {
    key: "getInitialState",
    value: function getInitialState() {
      this.initTimer = null;
      this.trigger = this.triggerScroll.bind(this);
      this.arrNode = (0,reshow_flux__WEBPACK_IMPORTED_MODULE_4__.Map)();
      this.margins = (0,reshow_flux__WEBPACK_IMPORTED_MODULE_4__.Set)();
      this.scrollMonitor = this.runScrollMonitor.bind(this);
      this.scrollDebounce = (0,call_func__WEBPACK_IMPORTED_MODULE_10__.debounce)(this.trigger);
      this.bindHandleResize = this.handleResize.bind(this);
      return (0,reshow_flux__WEBPACK_IMPORTED_MODULE_4__.Map)({
        scrollDelay: 50,
        scrollMargin: 0
      });
    }
  }, {
    key: "reduce",
    value: function reduce(state, action) {
      return (0,reshow_flux__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(state, action);
    }
  }]);

  return Scroller;
}();

var oDelayScroller = new Scroller();

var _ImmutableStore = (0,reshow_flux__WEBPACK_IMPORTED_MODULE_4__.ImmutableStore)(oDelayScroller.reduce.bind(oDelayScroller), oDelayScroller.getInitialState.bind(oDelayScroller)),
    store = _ImmutableStore[0],
    delayScrollDispatch = _ImmutableStore[1];

store.scroller = oDelayScroller;
oDelayScroller.dispatch = delayScrollDispatch;
oDelayScroller.store = store;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ 326:
/*!***********************************************!*\
  !*** ./build/es/src/testForPassiveScroll.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testForPassiveScroll);

/***/ }),

/***/ 327:
/*!**********************************************!*\
  !*** ./build/es/ui/organisms/ScrollInfo.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ 0);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ 5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 3);
/* harmony import */ var _organisms_ScrollSpy_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisms/ScrollSpy.mjs */ 108);
/* harmony import */ var _organisms_ScrollReceiver_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/ScrollReceiver.mjs */ 109);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ 2);


var _excluded = ["children"];





var ScrollInfo = function ScrollInfo(_ref) {
  var children = _ref.children,
      others = (0,reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_organisms_ScrollSpy_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_organisms_ScrollReceiver_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: children
    })
  }));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (ScrollInfo);

/***/ }),

/***/ 109:
/*!**************************************************!*\
  !*** ./build/es/ui/organisms/ScrollReceiver.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ 0);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ 5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 3);
/* harmony import */ var reshow_return__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-return */ 23);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ 11);
/* harmony import */ var reshow_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-constant */ 1);
/* harmony import */ var _src_stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/stores/scrollStore.mjs */ 40);
/* harmony import */ var _src_stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/stores/fastScrollStore.mjs */ 47);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ 2);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



var _excluded = ["scrollMargin", "noDelay", "children", "targetId", "container"];








var ScrollReceiver = function ScrollReceiver(_ref) {
  var _ref$scrollMargin = _ref.scrollMargin,
      scrollMargin = _ref$scrollMargin === void 0 ? "default" : _ref$scrollMargin,
      _ref$noDelay = _ref.noDelay,
      noDelay = _ref$noDelay === void 0 ? false : _ref$noDelay,
      _children = _ref.children,
      targetId = _ref.targetId,
      container = _ref.container,
      resetProps = (0,reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var lastIsShown = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var store = noDelay ? _src_stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_7__["default"] : _src_stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_6__["default"];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reshow_return__WEBPACK_IMPORTED_MODULE_3__["default"], {
    store: store,
    initStates: ["scroll"],
    children: function children(_ref2) {
      var _ref2$scroll = _ref2.scroll,
          scrollInfo = _ref2$scroll === void 0 ? {} : _ref2$scroll;
      var activeId = store.getState().get("m" + scrollMargin);
      var scrollTop = scrollInfo.top;
      var pos = store.scroller.getOffset(targetId, store.storeName) || {};
      var isShown = lastIsShown.current || false;

      if (pos.isOnScreen) {
        isShown = true;
        lastIsShown.current = true;
      }

      var active = reshow_constant__WEBPACK_IMPORTED_MODULE_5__.UNDEFINED !== _typeof(targetId) && targetId === activeId;

      var targetInfo = (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pos), {}, {
        active: active,
        scrollTop: scrollTop,
        scrollInfo: scrollInfo,
        scrollMargin: scrollMargin,
        isShown: isShown,
        targetId: targetId
      });

      if (!isNaN(scrollMargin)) {
        store.scroller.addMargin(scrollMargin);
      }

      if (!container) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__.SemanticUI, (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, resetProps), {}, {
          children: _children
        }));
      }

      var thisChildren = _children;

      if (!thisChildren && /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.isValidElement)(container)) {
        thisChildren = container.props.children;
      }

      return (0,react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__.build)(container)((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, resetProps), {}, {
        targetInfo: targetInfo
      }), thisChildren);
    }
  });
};

ScrollReceiver.displayName = "ScrollReceiver";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollReceiver);

/***/ }),

/***/ 108:
/*!*********************************************!*\
  !*** ./build/es/ui/organisms/ScrollSpy.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ 0);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ 5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 3);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! get-object-value */ 6);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ 11);
/* harmony import */ var reshow_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-hooks */ 18);
/* harmony import */ var _src_stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/stores/scrollStore.mjs */ 40);
/* harmony import */ var _src_stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/stores/fastScrollStore.mjs */ 47);


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
      others = (0,reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(id),
      targetId = _useState[0],
      setTargetId = _useState[1];

  var lastEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var lastConfig = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});
  lastConfig.current = (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lastConfig.current), {}, {
    id: targetId,
    attachTo: attachTo,
    monitorScroll: monitorScroll,
    scrollMargin: scrollMargin
  });
  var thisClassName = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return (0,react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__.mixClass)(className, "spy-tar-" + targetId);
  }, [targetId, className]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var store = noDelay ? _src_stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_7__["default"] : _src_stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_6__["default"];
    var id = store.scroller.attach(expose);
    setTargetId(id);
    return function () {
      store.scroller.detach(expose);
    };
  }, []);
  var warnDebounce = (0,reshow_hooks__WEBPACK_IMPORTED_MODULE_5__.useDebounce)(function (args) {
    // for lazy render component, that warn delay 1 secs.
    if (!lastEl.current) {
      console.warn('Please use SemanticUI. props.container -> import {SemanticUI} from "react-atomic-molecule"', args);
    }
  }, 1000);
  var getOffsetEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
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
  var hasScrollReceiver = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return "ScrollReceiver" === (0,react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__.getDisplayName)(children) ? true : false;
  }, [children]);
  var nextContainer;
  var nextProps;

  var allProps = (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others), {}, {
    refCb: function refCb(el) {
      return el && (lastEl.current = el);
    },
    className: thisClassName,
    id: targetId
  });

  if (hasScrollReceiver) {
    nextContainer = children;
    nextProps = (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, children.props), allProps), {}, {
      targetId: targetId,
      container: container,
      noDelay: noDelay
    });
  } else {
    nextContainer = container || react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__.SemanticUI;
    nextProps = (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, allProps), {}, {
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

  return (0,react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__.build)(nextContainer)(nextProps);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollSpy);

/***/ }),

/***/ 221:
/*!****************************************************!*\
  !*** ./build/es/ui/organisms/SmoothScrollLink.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ 0);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ 5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 3);
/* harmony import */ var smooth_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smooth-scroll-to */ 62);
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! getoffset */ 32);
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! call-func */ 7);
/* harmony import */ var win_doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! win-doc */ 10);
/* harmony import */ var _src_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/index.mjs */ 145);
/* harmony import */ var _src_stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/stores/scrollStore.mjs */ 40);
/* harmony import */ var _src_stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/stores/fastScrollStore.mjs */ 47);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ 2);


var _excluded = ["targetId", "scrollRefLoc", "scrollRefId", "scrollMargin", "style", "preventDefault", "noDelay", "onClick"];









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
      onClick = props.onClick,
      others = (0,reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      scrollRefElement = _useState[0],
      setScrollRefElement = _useState[1];

  var scrollTo = function scrollTo(lazyScrollTime, duringTime) {
    if (lazyScrollTime === void 0) {
      lazyScrollTime = 500;
    }

    resetTimer();
    var store = getStore();
    var offset = store.scroller.getOffset(targetId);

    if (offset) {
      var _margin = getMargin();

      (0,smooth_scroll_to__WEBPACK_IMPORTED_MODULE_3__["default"])(offset.top - _margin, duringTime, null, function () {
        if (false !== lazyScrollTime) {
          scollTimer = setTimeout(function () {
            return scrollTo(false, 100);
          }, lazyScrollTime);
        }
      });
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var oDoc = (0,win_doc__WEBPACK_IMPORTED_MODULE_6__.doc)();

    if (!oDoc.__null) {
      var _win$location$hash;

      var dom = oDoc.getElementById(scrollRefId);

      if (dom) {
        setScrollRefElement(dom);
      }

      if (((_win$location$hash = (0,win_doc__WEBPACK_IMPORTED_MODULE_6__.win)().location.hash) === null || _win$location$hash === void 0 ? void 0 : _win$location$hash.substring(1)) === targetId) {
        setTimeout(function () {
          return scrollTo(1000);
        }, 1000);
      }
    }

    return function () {
      resetTimer();
    };
  }, []);
  var getMargin = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    var ref = scrollRefElement;
    var margin = 0;

    if (ref) {
      var refOffset = (0,getoffset__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, false);

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
    return noDelay ? _src_stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_9__["default"] : _src_stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_8__["default"];
  };

  var handler = {
    click: function click(e) {
      if (preventDefault) {
        e.preventDefault();
      }

      (0,call_func__WEBPACK_IMPORTED_MODULE_5__["default"])(onClick);
      setTimeout(scrollTo);
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_7__.ScrollReceiver, (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    atom: "a"
  }, others), {}, {
    targetId: targetId,
    scrollMargin: margin,
    style: (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.link), style),
    onClick: handler.click
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmoothScrollLink);
var Styles = {
  link: {
    cursor: "pointer"
  }
};

/***/ }),

/***/ 325:
/*!*************************************!*\
  !*** ./build/es/ui/pages/index.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ 14);
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ 15);
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ 19);
/* harmony import */ var reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/createSuper */ 20);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ 0);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ 5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ 3);
/* harmony import */ var _src_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/index.mjs */ 145);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-atomic-molecule */ 11);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ 2);







var _MenuItem, _MenuItem2, _MenuItem3;

var _excluded = ["targetInfo", "style"];

/**
 * Production please use
 * import {xxx} from 'organism-react-scroll-nav';
 */






var MenuItem = function MenuItem(_ref) {
  var targetInfo = _ref.targetInfo,
      style = _ref.style,
      reset = (0,reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, _excluded);

  var activeStyle = null;

  if (targetInfo.active) {
    activeStyle = Styles.active;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({
    style: (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Styles.link), style), activeStyle)
  }, reset));
};

var Index = /*#__PURE__*/function (_Component) {
  (0,reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, _Component);

  var _super = (0,reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(Index);

  function Index() {
    (0,reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return _super.apply(this, arguments);
  }

  (0,reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          id: "nav-parent",
          style: Styles.nav,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_7__.SmoothScrollLink, {
            scrollRefId: "nav-parent",
            container: _MenuItem || (_MenuItem = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(MenuItem, {})),
            targetId: "t1",
            style: {
              background: "#3498DB"
            },
            children: "test1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_7__.SmoothScrollLink, {
            scrollRefId: "nav-parent",
            container: _MenuItem2 || (_MenuItem2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(MenuItem, {})),
            targetId: "t2",
            style: {
              background: "#F1C40F"
            },
            children: "test2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_7__.SmoothScrollLink, {
            scrollRefId: "nav-parent",
            container: _MenuItem3 || (_MenuItem3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(MenuItem, {})),
            targetId: "t3",
            style: {
              background: "#2ECC71"
            },
            children: "test3"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          style: {
            paddingTop: 66
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_7__.ScrollSpy, {
            id: "t1",
            style: (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Styles.content), {}, {
              background: "#3498DB"
            }),
            children: "test111"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_7__.ScrollSpy, {
            id: "t2",
            style: (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Styles.content), {}, {
              background: "#F1C40F"
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_7__.ScrollSpy, {
              monitorScroll: false,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_7__.ScrollReceiver, {
                style: {
                  border: "1px solid #fff"
                },
                children: "test222"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_7__.ScrollSpy, {
            id: "t3",
            style: (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Styles.content), {}, {
              background: "#2ECC71"
            }),
            children: "test333"
          })]
        })]
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);
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
  body: (0,react_atomic_molecule__WEBPACK_IMPORTED_MODULE_8__.reactStyle)({
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
(0,react_atomic_molecule__WEBPACK_IMPORTED_MODULE_8__.injectStyle)();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h().slice(0, 7) + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0a647ad5d1e8663fc101")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "organism-react-scroll-nav:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			1: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkorganism_react_scroll_nav"] = self["webpackChunkorganism_react_scroll_nav"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [0,2], () => (__webpack_require__(222)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map