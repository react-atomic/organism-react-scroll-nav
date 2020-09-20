webpackHotUpdate("main",{

/***/ "./build/cjs/ui/organisms/SmoothScrollLink.js":
/*!****************************************************!*\
  !*** ./build/cjs/ui/organisms/SmoothScrollLink.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var smooth_scroll_to__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! smooth-scroll-to */ "./node_modules/smooth-scroll-to/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! getoffset */ "./node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/index */ "./build/cjs/src/index.js");
/* harmony import */ var _src_stores_scrollStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/stores/scrollStore */ "./build/cjs/src/stores/scrollStore.js");
/* harmony import */ var _src_stores_fastScrollStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/stores/fastScrollStore */ "./build/cjs/src/stores/fastScrollStore.js");












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
    var _s = $RefreshSig$();

    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      scrollRefElement: null
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleClick", _s(function (e) {
      _s();

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
    }, "lacCqcEtsbxX3PAG/fPlTuRiPg0=", false, function () {
      return [_this.useStore];
    }));

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
    var margin = this.getMargin(props, scrollRefElement) + 1;
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
//# sourceMappingURL=main.b781ddcca7286ac05d19.hot-update.js.map