webpackHotUpdate("main",{

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
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-flux */ "./node_modules/reshow-flux/build/es/index.js");
/* harmony import */ var get_scroll_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! get-scroll-info */ "./node_modules/get-scroll-info/build/es/src/index.js");
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! get-window-offset */ "./node_modules/get-window-offset/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! getoffset */ "./node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
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
      var self = this;

      if (el.addEventListener) {
        var supportsPassive = Object(_testForPassiveScroll__WEBPACK_IMPORTED_MODULE_11__["default"])();
        el.addEventListener('scroll', self.scrollMonitor, supportsPassive ? {
          passive: true
        } : false);
      } else {
        el.attachEvent('onscroll', self.scrollMonitor);
      }

      setTimeout(function () {
        _this2.trigger(el); //for lazy content


        setTimeout(function () {
          return _this2.trigger(el);
        }, 777);
      });

      if (!self.isInitResizeEvent) {
        self.initResizeEvent();
      }
    }
  };

  _proto.removeEvent = function removeEvent(el) {
    el.removeEventListener('scroll', this.scrollMonitor);
  };

  _proto.handleResize = function handleResize() {
    var _this3 = this;

    keys(this.spys).forEach(function (scrollId) {
      return _this3.runScrollMonitor({
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
    console.warn("ffffffffffire");
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
    console.warn({
      node: node
    });
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
    console.warn({
      node: node
    });
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


/***/ })

})
//# sourceMappingURL=main.d9ab92fa322ff9804cc7.hot-update.js.map