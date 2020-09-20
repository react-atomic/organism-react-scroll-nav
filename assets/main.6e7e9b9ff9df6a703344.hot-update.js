webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.6e7e9b9ff9df6a703344.hot-update.js.map