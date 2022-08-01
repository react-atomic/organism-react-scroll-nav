/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 213:
/*!*********************************!*\
  !*** ./build/es/src/client.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var reshow_app_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-app/client */ 214);
/* harmony import */ var _ui_pages_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/pages/index.mjs */ 308);


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,reshow_app_client__WEBPACK_IMPORTED_MODULE_0__["default"])(_ui_pages_index_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ 127:
/*!********************************!*\
  !*** ./build/es/src/index.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollReceiver": () => (/* reexport safe */ _ui_organisms_ScrollReceiver_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "ScrollSpy": () => (/* reexport safe */ _ui_organisms_ScrollSpy_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "SmoothScrollLink": () => (/* reexport safe */ _ui_organisms_SmoothScrollLink_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stores/scrollStore.mjs */ 37);
/* harmony import */ var _stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores/fastScrollStore.mjs */ 45);
/* harmony import */ var _ui_organisms_ScrollSpy_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/organisms/ScrollSpy.mjs */ 92);
/* harmony import */ var _ui_organisms_ScrollReceiver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/organisms/ScrollReceiver.mjs */ 93);
/* harmony import */ var _ui_organisms_ScrollInfo_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/organisms/ScrollInfo.mjs */ 319);
/* harmony import */ var _ui_organisms_SmoothScrollLink_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/organisms/SmoothScrollLink.mjs */ 212);
// Stores

 // UI






/***/ }),

/***/ 45:
/*!*************************************************!*\
  !*** ./build/es/src/stores/fastScrollStore.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ 12);
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ 13);
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ 19);
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ 17);
/* harmony import */ var reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createSuper */ 18);
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ 14);
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-flux */ 16);
/* harmony import */ var _scrollStore_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scrollStore.mjs */ 37);








var FastScroller = /*#__PURE__*/ function(_Scroller) {
    (0,reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FastScroller1, _Scroller);
    var _super = (0,reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FastScroller1);
    function FastScroller1() {
        var _this;
        (0,reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FastScroller1);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0,reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "storeName", "fastScroll");
        return _this;
    }
    (0,reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FastScroller1, [
        {
            key: "runScrollMonitor",
            value: function runScrollMonitor(e) {
                this.triggerScroll(e.target);
            }
        }
    ]);
    return FastScroller1;
}(_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_7__.Scroller);
var oFastScroller = new FastScroller();
var _ImmutableStore = (0,reshow_flux__WEBPACK_IMPORTED_MODULE_6__.ImmutableStore)(oFastScroller.reduce.bind(oFastScroller), oFastScroller.getInitialState.bind(oFastScroller)), store = _ImmutableStore[0], fastScrollDispatch = _ImmutableStore[1];
store.scroller = oFastScroller;
oFastScroller.dispatch = fastScrollDispatch;
oFastScroller.store = store;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ 37:
/*!*********************************************!*\
  !*** ./build/es/src/stores/scrollStore.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scroller": () => (/* binding */ Scroller),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ 0);
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ 12);
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ 13);
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ 14);
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-flux */ 16);
/* harmony import */ var get_scroll_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! get-scroll-info */ 26);
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! get-window-offset */ 122);
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! getoffset */ 28);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! get-object-value */ 7);
/* harmony import */ var reshow_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-constant */ 1);
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! call-func */ 6);
/* harmony import */ var win_doc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! win-doc */ 11);
/* harmony import */ var css_query_selector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! css-query-selector */ 41);
/* harmony import */ var _testForPassiveScroll_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../testForPassiveScroll.mjs */ 318);














var incNum = 0;
var DEFAULT_SCROLL_ID = -1;
var Scroller = /*#__PURE__*/ function() {
    function Scroller1() {
        (0,reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Scroller1);
        (0,reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "storeName", "delayScroll");
        (0,reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "isInitResizeEvent", false);
        (0,reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "checkIsActive", function(scrollTop, pos) {
            return scrollTop >= pos.top - 1 && scrollTop <= pos.bottom - 2;
        });
    }
    (0,reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Scroller1, [
        {
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
        },
        {
            key: "initEvent",
            value: function initEvent(el, retry) {
                var _this = this;
                if ("undefined" !== typeof el) {
                    if (el.addEventListener) {
                        var supportsPassive = (0,_testForPassiveScroll_mjs__WEBPACK_IMPORTED_MODULE_13__["default"])();
                        el.addEventListener("scroll", this.scrollMonitor, supportsPassive ? {
                            passive: true
                        } : false);
                    } else {
                        el.attachEvent("onscroll", this.scrollMonitor);
                    }
                    var i = 0;
                    this.clearInitTimer();
                    this.initTimer = setInterval(function() {
                        _this.trigger(el);
                        i++;
                        if (i > retry) {
                            _this.clearInitTimer();
                        }
                    }, 300);
                    if (!this.isInitResizeEvent) {
                        this.initResizeEvent();
                    }
                }
            }
        },
        {
            key: "removeEvent",
            value: function removeEvent(el) {
                if (el !== null && el !== void 0 && el.removeEventListener) {
                    el.removeEventListener("scroll", this.scrollMonitor);
                } else {
                    el === null || el === void 0 ? void 0 : el.deachEvent("onscroll", this.scrollMonitor);
                }
            }
        },
        {
            key: "handleResize",
            value: function handleResize() {
                var _this2 = this;
                this.spys.forEach(function(v, scrollId) {
                    _this2.scrollMonitor({
                        target: {
                            id: scrollId
                        }
                    });
                });
            }
        },
        {
            key: "runScrollMonitor",
            value: function runScrollMonitor(e) {
                var delay = this.store.getState().get("scrollDelay");
                this.scrollDebounce({
                    delay: delay,
                    args: [
                        e === null || e === void 0 ? void 0 : e.target
                    ]
                });
            }
        },
        {
            key: "triggerScroll",
            value: function triggerScroll(scrollNode) {
                var _this3 = this;
                var scrollId = (0,get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(scrollNode, [
                    "id"
                ]) || DEFAULT_SCROLL_ID;
                var defaultMargin = this.store.getState().get("scrollMargin");
                var actives = {
                    mdefault: null
                };
                var offsetCache = {};
                var allMonitorNode = [];
                var scroll = (0,get_scroll_info__WEBPACK_IMPORTED_MODULE_5__["default"])();
                var scrollTop1 = scroll.top + defaultMargin;
                (this.spys.get(scrollId) || []).forEach(function(node) {
                    var nodeEl = node.getOffsetEl();
                    if (!nodeEl) {
                        return;
                    }
                    var nodeId = _this3.getNodeId(node);
                    var monitorScroll = (0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getMonitorScroll);
                    var scrollMargin = (0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getScrollMargin);
                    var pos = (0,getoffset__WEBPACK_IMPORTED_MODULE_7__["default"])(nodeEl);
                    if (monitorScroll) {
                        var isActive = _this3.checkIsActive(scrollTop1, pos);
                        if (isActive) {
                            actives.mdefault = nodeId;
                        }
                        allMonitorNode.unshift(node);
                    }
                    var margin = scrollMargin ? scrollMargin : defaultMargin;
                    pos = (0,get_window_offset__WEBPACK_IMPORTED_MODULE_6__.isOnScreen)(pos, scroll, margin);
                    offsetCache[nodeId] = pos;
                });
                var allMonitorNodeLen = allMonitorNode.length;
                this.margins.forEach(function(margin) {
                    var scrollTop = scroll.top + margin;
                    actives["m" + margin] = null;
                    var i = allMonitorNodeLen;
                    while(i--){
                        var node = allMonitorNode[i];
                        var nodeId = _this3.getNodeId(node);
                        var pos = offsetCache[nodeId];
                        var isActive = _this3.checkIsActive(scrollTop, pos);
                        if (isActive) {
                            actives["m" + margin] = nodeId;
                            break;
                        }
                    }
                });
                this.margins = this.margins.clear();
                this.dispatch((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actives), {}, {
                    offsetCache: offsetCache,
                    scroll: scroll,
                    storeName: this.storeName
                }));
            }
        },
        {
            key: "getOffset",
            value: function getOffset(id) {
                var offset = this.store.getMap("offsetCache")[id];
                if (offset && offset.h && offset.w) {
                    return offset;
                } else {
                    var node = this.getNode(id) || {};
                    var dom = (0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getOffsetEl) || css_query_selector__WEBPACK_IMPORTED_MODULE_12__["default"].one("#" + id);
                    var domOffset = dom && (0,getoffset__WEBPACK_IMPORTED_MODULE_7__["default"])(dom);
                    if (domOffset) {
                        var scrollInfo = (0,get_scroll_info__WEBPACK_IMPORTED_MODULE_5__["default"])();
                        var defaultMargin = this.store.getState().get("scrollMargin");
                        var margin = (0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getScrollMargin) || defaultMargin;
                        domOffset = (0,get_window_offset__WEBPACK_IMPORTED_MODULE_6__.isOnScreen)(domOffset, scrollInfo, margin);
                        return domOffset;
                    } else {
                        return offset;
                    }
                }
            }
        },
        {
            key: "hasAttach",
            value: function hasAttach(node) {
                var attachDestId = this.getAttachDestId(node);
                var attachDest = this.spys.get(attachDestId);
                if (attachDest && attachDest.has(node)) {
                    return attachDestId;
                } else {
                    return false;
                }
            }
        },
        {
            key: "getNodeId",
            value: function getNodeId(node) {
                var id = (0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getId) || node.id;
                if (!id) {
                    if (node === (0,win_doc__WEBPACK_IMPORTED_MODULE_11__.win)()) {
                        return DEFAULT_SCROLL_ID;
                    } else {
                        return this.setNodeId(node);
                    }
                } else {
                    return id;
                }
            }
        },
        {
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
        },
        {
            key: "getAttachDestId",
            value: function getAttachDestId(node) {
                var attachDest = (0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getAttachDest);
                var attachDestId;
                if (attachDest) {
                    attachDestId = this.getNodeId(attachDest);
                } else {
                    var oWin = (0,win_doc__WEBPACK_IMPORTED_MODULE_11__.win)();
                    if (!oWin.__null) {
                        node.setAttachDest(oWin);
                    }
                    attachDestId = DEFAULT_SCROLL_ID;
                }
                return attachDestId;
            }
        },
        {
            key: "getNode",
            value: function getNode(nodeId) {
                var node = this.arrNode.get(nodeId);
                return node;
            }
        },
        {
            key: "attach",
            value: function attach(node) {
                var nodeId = this.getNodeId(node);
                /**
       * if not set attachDest, the default attachDest is window.
       */ var attachDestId = this.getAttachDestId(node);
                var attachDest = this.spys.get(attachDestId);
                if (!attachDest) {
                    this.spys = this.spys.set(attachDestId, (0,reshow_flux__WEBPACK_IMPORTED_MODULE_4__.Set)().add(node));
                } else {
                    this.spys = this.spys.set(attachDestId, attachDest.add(node));
                }
                this.arrNode = this.arrNode.set(nodeId, node);
                if (!this.isInitEvent.get(attachDestId)) {
                    this.isInitEvent = this.isInitEvent.set(attachDestId, true);
                    this.initEvent((0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getAttachDest), (0,call_func__WEBPACK_IMPORTED_MODULE_10__["default"])(node.getAttachDestRetry));
                }
                return nodeId;
            }
        },
        {
            key: "detach",
            value: function detach(node) {
                var attachDestId = this.hasAttach(node);
                if (attachDestId) {
                    this.spys = this.spys.set(attachDestId, this.spys.get(attachDestId).remove(node));
                    this.arrNode = this.arrNode["delete"](this.getNodeId(node));
                    if (!this.spys.get(attachDestId).size) {
                        this.removeEvent(node.attachDestId);
                        this.spys = this.spys["delete"](attachDestId);
                        this.isInitEvent = this.isInitEvent["delete"](attachDestId);
                    }
                }
            }
        },
        {
            key: "addMargin",
            value: function addMargin(num) {
                this.margins = this.margins.add(num);
            }
        },
        {
            key: "deleteMargin",
            value: function deleteMargin(num) {
                this.margins = this.margins.remove(num);
            }
        },
        {
            key: "clearInitTimer",
            value: function clearInitTimer() {
                if (this.initTimer) {
                    clearInterval(this.initTimer);
                    this.initTimer = null;
                }
            }
        },
        {
            key: "getInitialState",
            value: function getInitialState() {
                this.initTimer = null;
                this.trigger = this.triggerScroll.bind(this);
                this.isInitEvent = (0,reshow_flux__WEBPACK_IMPORTED_MODULE_4__.Map)();
                this.spys = (0,reshow_flux__WEBPACK_IMPORTED_MODULE_4__.Map)();
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
        },
        {
            key: "reduce",
            value: function reduce(state, action) {
                return (0,reshow_flux__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(state, action);
            }
        }
    ]);
    return Scroller1;
}();
var oDelayScroller = new Scroller();
var _ImmutableStore = (0,reshow_flux__WEBPACK_IMPORTED_MODULE_4__.ImmutableStore)(oDelayScroller.reduce.bind(oDelayScroller), oDelayScroller.getInitialState.bind(oDelayScroller)), store = _ImmutableStore[0], delayScrollDispatch = _ImmutableStore[1];
store.scroller = oDelayScroller;
oDelayScroller.dispatch = delayScrollDispatch;
oDelayScroller.store = store;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);



/***/ }),

/***/ 318:
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

/***/ 319:
/*!**********************************************!*\
  !*** ./build/es/ui/organisms/ScrollInfo.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ 0);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ 4);
/* harmony import */ var _organisms_ScrollSpy_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organisms/ScrollSpy.mjs */ 92);
/* harmony import */ var _organisms_ScrollReceiver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisms/ScrollReceiver.mjs */ 93);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 3);





var _excluded = [
    "children"
];
var ScrollInfo = function ScrollInfo(_ref) {
    var children = _ref.children, others = (0,reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_organisms_ScrollSpy_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others), {}, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_organisms_ScrollReceiver_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], {
            children: children
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (ScrollInfo);


/***/ }),

/***/ 93:
/*!**************************************************!*\
  !*** ./build/es/ui/organisms/ScrollReceiver.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ 0);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ 4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var reshow_return__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-return */ 22);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ 8);
/* harmony import */ var reshow_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-constant */ 1);
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! call-func */ 6);
/* harmony import */ var _src_stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/stores/scrollStore.mjs */ 37);
/* harmony import */ var _src_stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/stores/fastScrollStore.mjs */ 45);
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};









var _excluded = [
    "scrollMargin",
    "noDelay",
    "targetId",
    "container",
    "children"
];
var useScrollReceiver = function useScrollReceiver(props) {
    var _props$scrollMargin = props.scrollMargin, scrollMargin = _props$scrollMargin === void 0 ? reshow_constant__WEBPACK_IMPORTED_MODULE_5__.DEFAULT : _props$scrollMargin, _props$noDelay = props.noDelay, noDelay = _props$noDelay === void 0 ? false : _props$noDelay, targetId = props.targetId, container = props.container, children = props.children, restProps = (0,reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
    var lastIsShown = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    var store = noDelay ? _src_stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_8__["default"] : _src_stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_7__["default"];
    var _useReturn = (0,reshow_return__WEBPACK_IMPORTED_MODULE_3__.useReturn)([
        "scroll"
    ], store), _useReturn$scroll = _useReturn.scroll, scrollInfo = _useReturn$scroll === void 0 ? {} : _useReturn$scroll;
    var activeId = store.getState().get("m" + scrollMargin);
    var scrollTop = scrollInfo.top;
    var pos = store.scroller.getOffset(targetId) || {};
    var isShown = lastIsShown.current || false;
    var active = reshow_constant__WEBPACK_IMPORTED_MODULE_5__.UNDEFINED !== (typeof targetId === "undefined" ? "undefined" : _typeof(targetId)) && targetId === activeId;
    var targetInfo = (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pos), {}, {
        active: active,
        scrollTop: scrollTop,
        scrollInfo: scrollInfo,
        scrollMargin: scrollMargin,
        isShown: isShown,
        targetId: targetId
    });
    if (pos.isOnScreen) {
        targetInfo.isShown = true;
        lastIsShown.current = true;
    }
    if (!isNaN(scrollMargin)) {
        store.scroller.addMargin(scrollMargin);
    }
    return {
        targetInfo: targetInfo,
        container: container,
        children: children,
        restProps: restProps
    };
};
var ScrollReceiver = function ScrollReceiver(props) {
    var _useScrollReceiver = useScrollReceiver(props), targetInfo = _useScrollReceiver.targetInfo, container = _useScrollReceiver.container, children = _useScrollReceiver.children, restProps = _useScrollReceiver.restProps;
    var nextContainer = container;
    var nextChildren = children;
    if (!nextContainer) {
        nextContainer = children;
        nextChildren = null;
    }
    if (!nextChildren && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.isValidElement)(nextContainer)) {
        nextChildren = nextContainer.props.children;
    }
    return (0,react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__.build)(nextContainer)((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps), {}, {
        targetInfo: targetInfo
    }), /**
   * sould not use build here, let nextContainer handle children by itself.
   */ nextChildren);
};
ScrollReceiver.displayName = "ScrollReceiver";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollReceiver);


/***/ }),

/***/ 92:
/*!*********************************************!*\
  !*** ./build/es/ui/organisms/ScrollSpy.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ 0);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ 4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! get-object-value */ 7);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ 8);
/* harmony import */ var reshow_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-hooks */ 21);
/* harmony import */ var _src_stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/stores/scrollStore.mjs */ 37);
/* harmony import */ var _src_stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/stores/fastScrollStore.mjs */ 45);








var _excluded = [
    "noDelay",
    "monitorScroll",
    "attachDestRetry",
    "id",
    "scrollMargin",
    "children",
    "container",
    "className",
    "attachDest"
];
var useScrollSpy = function useScrollSpy(props) {
    /**
   * monitorScroll use in store, in component just for reset props.
   */ var _props$noDelay = props.noDelay, noDelay = _props$noDelay === void 0 ? false : _props$noDelay, _props$monitorScroll = props.monitorScroll, monitorScroll = _props$monitorScroll === void 0 ? true : _props$monitorScroll, _props$attachDestRetr = props.attachDestRetry, attachDestRetry = _props$attachDestRetr === void 0 ? 20 : _props$attachDestRetr, id1 = props.id, scrollMargin = props.scrollMargin, children = props.children, container = props.container, className = props.className, attachDest1 = props.attachDest, restProps = (0,reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(id1), targetId = _useState[0], setTargetId = _useState[1];
    var _mount = (0,reshow_hooks__WEBPACK_IMPORTED_MODULE_5__.useMounted)();
    var lastEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    var lastConfig = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});
    lastConfig.current = (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lastConfig.current), {}, {
        id: targetId,
        attachDest: lastConfig.current.attachDest || attachDest1,
        monitorScroll: monitorScroll,
        scrollMargin: scrollMargin
    });
    var nextContainer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {
        var store = noDelay ? _src_stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_7__["default"] : _src_stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_6__["default"];
        var id = store.scroller.attach(expose);
        lastConfig.current.store = store;
        setTargetId(id);
        return function() {
            store.scroller.detach(expose);
        };
    }, []);
    var warnDebounce = (0,reshow_hooks__WEBPACK_IMPORTED_MODULE_5__.useDebounce)(function(args) {
        // for lazy render component, that warn delay 1.5 secs.
        if (!lastEl.current && _mount()) {
            // maybe could get lastEl late.
            console.warn('Please use SemanticUI. props.container -> import {SemanticUI} from "react-atomic-molecule"', args);
        }
    }, 1500);
    var getOffsetEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {
        if (lastEl.current) {
            return lastEl.current;
        } else {
            warnDebounce({
                targetId: targetId,
                container: nextContainer.current
            });
        }
    }, [
        targetId
    ]);
    var expose = {
        lastConfig: lastConfig,
        getOffsetEl: getOffsetEl,
        detach: function detach() {
            return lastConfig.current.store.scroller.detach(expose);
        },
        getId: function getId() {
            return lastConfig.current.id;
        },
        setId: setTargetId,
        getAttachDest: function getAttachDest() {
            return lastConfig.current.attachDest;
        },
        setAttachDest: function setAttachDest(attachDest) {
            return lastConfig.current.attachDest = attachDest;
        },
        getMonitorScroll: function getMonitorScroll() {
            return lastConfig.current.monitorScroll;
        },
        getScrollMargin: function getScrollMargin() {
            return lastConfig.current.scrollMargin;
        },
        getAttachDestRetry: function getAttachDestRetry() {
            return attachDestRetry;
        }
    };
    restProps.id = targetId;
    restProps.refCb = lastEl;
    restProps.className = (0,react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__.mixClass)(className, "spy-tar-" + targetId);
    return {
        targetId: targetId,
        className: className,
        children: children,
        container: container,
        noDelay: noDelay,
        nextContainer: nextContainer,
        restProps: restProps
    };
};
var ScrollSpy = function ScrollSpy(props) {
    var _useScrollSpy = useScrollSpy(props), targetId = _useScrollSpy.targetId, className = _useScrollSpy.className, children = _useScrollSpy.children, container = _useScrollSpy.container, noDelay = _useScrollSpy.noDelay, nextContainer = _useScrollSpy.nextContainer, restProps = _useScrollSpy.restProps;
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {
        var hasScrollReceiver = "ScrollReceiver" === (0,react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__.getDisplayName)(children) ? true : false;
        var nextProps;
        if (hasScrollReceiver) {
            nextContainer.current = children;
            nextProps = (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, children.props), restProps), {}, {
                targetId: targetId,
                container: container,
                noDelay: noDelay
            });
        } else {
            nextContainer.current = container || react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__.SemanticUI;
            nextProps = (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps), {}, {
                children: children
            });
        }
        return (0,react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__.build)(nextContainer.current)(nextProps);
    }, [
        children,
        targetId
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollSpy);


/***/ }),

/***/ 212:
/*!****************************************************!*\
  !*** ./build/es/ui/organisms/SmoothScrollLink.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ 0);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ 4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var smooth_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smooth-scroll-to */ 54);
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! getoffset */ 28);
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! call-func */ 6);
/* harmony import */ var win_doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! win-doc */ 11);
/* harmony import */ var reshow_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-url */ 99);
/* harmony import */ var _src_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/index.mjs */ 127);
/* harmony import */ var _src_stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/stores/scrollStore.mjs */ 37);
/* harmony import */ var _src_stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/stores/fastScrollStore.mjs */ 45);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ 3);












var _excluded = [
    "targetId",
    "scrollRefLoc",
    "scrollRefId",
    "scrollMargin",
    "style",
    "preventDefault",
    "noDelay",
    "onClick"
];
var scollTimer = null;
var resetTimer = function resetTimer() {
    if (scollTimer) {
        clearTimeout(scollTimer);
        scollTimer = null;
    }
};
var useSmoothScrollLink = function useSmoothScrollLink(props) {
    var targetId = props.targetId, _props$scrollRefLoc = props.scrollRefLoc, scrollRefLoc = _props$scrollRefLoc === void 0 ? "bottom" : _props$scrollRefLoc, _props$scrollRefId = props.scrollRefId, scrollRefId = _props$scrollRefId === void 0 ? "" : _props$scrollRefId, scrollMargin = props.scrollMargin, style = props.style, _props$preventDefault = props.preventDefault, preventDefault = _props$preventDefault === void 0 ? true : _props$preventDefault, _props$noDelay = props.noDelay, noDelay = _props$noDelay === void 0 ? false : _props$noDelay, onClick = props.onClick, restProps = (0,reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), scrollRefElement = _useState[0], setScrollRefElement = _useState[1];
    var lastScroll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    var scrollTo1 = function scrollTo(duringTime) {
        var getStore = function getStore() {
            return noDelay ? _src_stores_fastScrollStore_mjs__WEBPACK_IMPORTED_MODULE_10__["default"] : _src_stores_scrollStore_mjs__WEBPACK_IMPORTED_MODULE_9__["default"];
        };
        var offset = getStore().scroller.getOffset(targetId);
        if (offset) {
            var margin = getMargin();
            var to = offset.top - margin;
            /**
       * Let user could cancel scroll with different direction.
       */ if (lastScroll.current === to) {
                return;
            }
            setTimeout(function() {
                return lastScroll.current = to;
            });
            (0,smooth_scroll_to__WEBPACK_IMPORTED_MODULE_3__["default"])(to, duringTime, null, function() {
                resetTimer();
                scollTimer = setTimeout(function() {
                    return scrollTo(duringTime);
                }, 800);
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {
        var dom = (0,win_doc__WEBPACK_IMPORTED_MODULE_6__.doc)().getElementById(scrollRefId);
        if (dom) {
            setScrollRefElement(dom);
        }
        if ((0,reshow_url__WEBPACK_IMPORTED_MODULE_7__.getAnchorPath)().anchor.substring(1) === targetId) {
            setTimeout(function() {
                return scrollTo1(1);
            });
        }
        return function() {
            resetTimer();
        };
    }, []);
    /**
   * When modify getMargin number, should also take care store isActive logic.
   *
   * https://github.com/react-atomic/organism-react-scroll-nav/blob/main/src/stores/scrollStore.js#L119
   */ var getMargin = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {
        var margin = 0;
        if (scrollRefElement) {
            var refOffset = (0,getoffset__WEBPACK_IMPORTED_MODULE_4__["default"])(scrollRefElement, false);
            switch(scrollRefLoc){
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
        margin -= 2;
        return margin;
    }, [
        scrollRefLoc,
        scrollMargin,
        scrollRefElement
    ]);
    var handler = {
        click: function click(e) {
            lastScroll.current = null;
            if (preventDefault) {
                e.preventDefault();
            }
            (0,call_func__WEBPACK_IMPORTED_MODULE_5__["default"])(onClick);
            scrollTo1();
        }
    };
    return {
        restProps: restProps,
        handler: handler,
        targetId: targetId,
        margin: getMargin(),
        style: style
    };
};
var SmoothScrollLink = function SmoothScrollLink(props) {
    var _useSmoothScrollLink = useSmoothScrollLink(props), restProps = _useSmoothScrollLink.restProps, handler = _useSmoothScrollLink.handler, margin = _useSmoothScrollLink.margin, style = _useSmoothScrollLink.style, targetId = _useSmoothScrollLink.targetId;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_8__.ScrollReceiver, (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        atom: "a"
    }, restProps), {}, {
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

/***/ 308:
/*!*************************************!*\
  !*** ./build/es/ui/pages/index.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ 0);
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ 4);
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-organism */ 125);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ 8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var _src_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/index.mjs */ 127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 3);





/**
 * Production please use
 * import {xxx} from 'organism-react-scroll-nav';
 */ 


var _excluded = [
    "targetInfo",
    "style"
];
var MenuItem = function MenuItem(_ref) {
    var targetInfo = _ref.targetInfo, style = _ref.style, reset = (0,reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
    var activeStyle = null;
    if (targetInfo.active) {
        activeStyle = Styles.active;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        style: (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.link), style), activeStyle)
    }, reset));
};
var Index = function Index() {
    var _Checkbox;
    injects = (0,react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__.useLazyInject)(InjectStyles, injects);
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), isMonitor = _useState[0], setIsMonitor = _useState[1];
    var handleEnable = function handleEnable(e) {
        if (e.checked) {
            setIsMonitor(true);
        } else {
            setIsMonitor(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                id: "nav-parent",
                style: Styles.nav,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_5__.SmoothScrollLink, {
                        scrollRefId: "nav-parent",
                        container: MenuItem,
                        targetId: "t1",
                        style: {
                            background: "#3498DB"
                        },
                        children: "test1"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_5__.SmoothScrollLink, {
                        scrollRefId: "nav-parent",
                        container: MenuItem,
                        targetId: "t2",
                        style: {
                            background: "#F1C40F"
                        },
                        children: "test2"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_5__.SmoothScrollLink, {
                        scrollRefId: "nav-parent",
                        container: MenuItem,
                        targetId: "t3",
                        style: {
                            background: "#2ECC71"
                        },
                        children: "test3"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                style: {
                    paddingTop: 66
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_5__.ScrollSpy, {
                        id: "t1",
                        style: (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.content), {}, {
                            background: "#3498DB"
                        }),
                        children: "test111"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_5__.ScrollSpy, {
                        id: "t2",
                        style: (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.content), {}, {
                            background: "#F1C40F"
                        }),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_5__.ScrollSpy, {
                            monitorScroll: isMonitor,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_5__.ScrollReceiver, {
                                style: {
                                    border: "1px solid #fff"
                                },
                                children: function children(_ref2) {
                                    var targetInfo = _ref2.targetInfo, refCb = _ref2.refCb;
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                                        ref: refCb,
                                        style: {
                                            border: "1px solid hsl(242, 100%, 50%)"
                                        },
                                        children: [
                                            "test222 scrollUp: " + targetInfo.scrollInfo.isScrollUp + " scrollDown: " + targetInfo.scrollInfo.isScrollDown,
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                                                style: {
                                                    fontSize: "1.2rem"
                                                },
                                                children: [
                                                    _Checkbox || (_Checkbox = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_atomic_organism__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
                                                        label: "enable monitor this area",
                                                        toggle: true,
                                                        onChange: handleEnable
                                                    })),
                                                    "When enable and you scroll over here will make test2 button miss actived."
                                                ]
                                            })
                                        ]
                                    });
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_index_mjs__WEBPACK_IMPORTED_MODULE_5__.ScrollSpy, {
                        id: "t3",
                        style: (0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.content), {}, {
                            background: "#2ECC71"
                        }),
                        children: "test333"
                    })
                ]
            })
        ]
    });
};
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
    nav: {
        position: "fixed",
        background: "#fff",
        textAlign: "center",
        width: "100%",
        padding: "10px 0",
        top: 0,
        zIndex: 999
    }
};
var injects;
var InjectStyles = {
    body: [
        {
            margin: 0,
            padding: 0
        },
        "body"
    ]
};


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
/******/ 		__webpack_require__.h = () => ("5067faf3fe18d8c65b07")
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
/******/ 		__webpack_require__.p = "./assets/";
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [0,2], () => (__webpack_require__(213)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map