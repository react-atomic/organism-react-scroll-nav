webpackHotUpdate("main",{

/***/ "./build/es/ui/organisms/ScrollReceiver.js":
/*!*************************************************!*\
  !*** ./build/es/ui/organisms/ScrollReceiver.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-flux */ "./node_modules/reshow-flux/build/es/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
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
    console.warn({
      targetId: targetId
    });
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

/* harmony default export */ __webpack_exports__["default"] = (_c = Object(reshow_flux__WEBPACK_IMPORTED_MODULE_5__["connect"])(ScrollReceiver, {
  withProps: true
}));

var _c;

$RefreshReg$(_c, "%default%");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.7f80a19e8164a251ffe7.hot-update.js.map