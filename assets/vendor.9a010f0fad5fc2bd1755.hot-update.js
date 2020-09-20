webpackHotUpdate("vendor",{

/***/ "./node_modules/reshow-flux-base/build/es/Store.js":
/*!*********************************************************!*\
  !*** ./node_modules/reshow-flux-base/build/es/Store.js ***!
  \*********************************************************/
/*! exports provided: default, CHANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE", function() { return CHANGE; });
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var _mitt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mitt */ "./node_modules/reshow-flux-base/build/es/mitt.js");




var CHANGE = "chg";

var Store = /*#__PURE__*/function () {
  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Store, [{
    key: "reduce",
    value: function reduce() {
      console.error("Not override reduce().");
    }
  }, {
    key: "getInitialState",
    value: function getInitialState() {
      console.error("Not override getInitialState().");
    }
  }, {
    key: "equals",
    value: function equals(one, two) {
      return one === two;
    }
  }]);

  function Store(dispatcher) {
    var _this = this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Store);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "__invokeOnDispatch", function (action) {
      var startingState = _this._state;

      var endingState = _this.reduce(startingState, action);

      if (endingState === undefined) {
        console.error("reduce() return undefined.");
      }

      if (!_this.equals(startingState, endingState)) {
        _this._state = endingState;

        _this.emit(CHANGE);
      }

      if (_this.nextEmits.length) {
        var nextRun = function nextRun() {
          var dedup = {};

          while (_this.nextEmits.length) {
            var emitType = _this.nextEmits.shift();

            if (!dedup[emitType]) {
              dedup[emitType] = true;

              _this.emit(emitType, {
                state: endingState,
                action: action
              });
            }
          }
        };

        if (_this.nextAsync) {
          _this.nextAsync = false;
          setTimeout(nextRun);
        } else {
          nextRun();
        }
      }
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "emit", function (e, payload) {
      return _this.mitt.emit(e, payload);
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "addListener", function (listener, e) {
      console.log(_this.mitt);
      return _this.mitt.on(e, listener);
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "removeListener", function (listener, e) {
      return _this.mitt.off(e, listener);
    });

    dispatcher.register(this.__invokeOnDispatch);
    this._state = this.reset();
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Store, [{
    key: "reset",
    value: function reset() {
      this.mitt = new _mitt__WEBPACK_IMPORTED_MODULE_3__["default"]();
      this.nextEmits = [];
      this.nextAsync = false;
      return this.getInitialState();
    }
  }, {
    key: "getState",
    value: function getState() {
      return this._state;
    }
    /* Following not extendable */

  }]);

  return Store;
}();

/* harmony default export */ __webpack_exports__["default"] = (Store);



/***/ })

})
//# sourceMappingURL=vendor.9a010f0fad5fc2bd1755.hot-update.js.map