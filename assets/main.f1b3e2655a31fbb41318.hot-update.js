webpackHotUpdate("main",{

/***/ "./build/es/ui/pages/index.js":
/*!************************************!*\
  !*** ./build/es/ui/pages/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/index */ "./build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");





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

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, null);

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, null);

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
      container: _ref,
      targetId: "t1",
      style: {
        background: '#3498DB'
      }
    }, "test1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__["SmoothScrollLink"], {
      scrollRefId: "nav-parent",
      container: _ref2,
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
//# sourceMappingURL=main.f1b3e2655a31fbb41318.hot-update.js.map