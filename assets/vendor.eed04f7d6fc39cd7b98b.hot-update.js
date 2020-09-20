webpackHotUpdate("vendor",{

/***/ "./node_modules/reshow-flux/build/es/connect.js":
/*!******************************************************!*\
  !*** ./node_modules/reshow-flux/build/es/connect.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/get */ "./node_modules/reshow-runtime/es/helpers/get.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var array_dedup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! array.dedup */ "./node_modules/array.dedup/build/src/index.js");
/* harmony import */ var array_dedup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(array_dedup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reshow_flux_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reshow-flux-base */ "./node_modules/reshow-flux-base/build/es/index.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var DEFAULT_OPTIONS = {
  withProps: false
};
var keys = Object.keys;

var getProps = function getProps(props, opt) {
  return opt.withProps && props ? props : {};
};

var getState = function getState(self, prevState, maybeProps, opt) {
  return self.calculateState(prevState, getProps(maybeProps, opt));
};

var getStores = function getStores(self, maybeProps, opt) {
  return self.getStores(getProps(maybeProps, opt));
};

var connect = function connect(Base, options) {
  var thisOptions = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])({}, DEFAULT_OPTIONS), options || {});

  var ConnectedClass = /*#__PURE__*/function (_Base) {
    Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ConnectedClass, _Base);

    var _super = _createSuper(ConnectedClass);

    function ConnectedClass(props) {
      var _thisSuper, _thisSuper2, _this;

      Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConnectedClass);

      _this = _super.call(this, props);

      Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "__stores", []);

      Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "__handleChange", function () {
        if (!_this.__stores) {
          // avoid race condition
          return;
        }

        var con = _this.constructor;

        _this.setState(function (prevState, currentProps) {
          var calState = getState(con, prevState, currentProps, thisOptions);

          if (prevState.prevCalState !== calState) {
            return Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])({}, calState), {}, {
              prevCalState: calState
            });
          } else {
            return {};
          }
        });
      });

      Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "__setStores", function (stores) {
        if (_this.__stores) {
          _this.__resetStores();
        }

        stores = array_dedup__WEBPACK_IMPORTED_MODULE_9___default()(stores);
        (stores || []).forEach(function (store) {
          return store.addListener(_this.__handleChange, reshow_flux_base__WEBPACK_IMPORTED_MODULE_10__["CHANGE"]);
        });
        _this.__stores = stores;
      });

      Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "__resetStores", function () {
        if (!_this.__stores) {
          return;
        }

        _this.__stores.forEach(function (store) {
          return store.removeListener(_this.__handleChange, reshow_flux_base__WEBPACK_IMPORTED_MODULE_10__["CHANGE"]);
        });

        _this.__stores = null;
      });

      var _con = _this.constructor;

      if (!_con.calculateState) {
        _con.calculateState = Object(reshow_runtime_es_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])((_thisSuper = Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ConnectedClass.prototype)), "calculateState", _thisSuper);
      }

      if (!_con.getStores) {
        _con.getStores = Object(reshow_runtime_es_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])((_thisSuper2 = Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ConnectedClass.prototype)), "getStores", _thisSuper2);
      }

      _con.calculateState.bind(_con);

      _con.getStores.bind(_con);

      if (props.withConstructor) {
        _this.__setStores(getStores(_con, props, thisOptions));
      }

      if (!_this.state) {
        _this.state = {};
      }

      if (!thisOptions.withProps) {
        var calculatedState = getState(_con, undefined, props, thisOptions);

        if (calculatedState) {
          keys(calculatedState).forEach(function (key) {
            return _this.state[key] = calculatedState[key];
          });
        }
      }

      return _this;
    }

    Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ConnectedClass, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (Object(reshow_runtime_es_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ConnectedClass.prototype), "componentDidMount", this)) {
          Object(reshow_runtime_es_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ConnectedClass.prototype), "componentDidMount", this).call(this);
        }

        if (this.props && !this.props.withConstructor) {
          this.__setStores(getStores(this.constructor, this.props, thisOptions));
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (Object(reshow_runtime_es_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ConnectedClass.prototype), "componentDidUpdate", this)) {
          Object(reshow_runtime_es_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ConnectedClass.prototype), "componentDidUpdate", this).call(this, prevProps, prevState);
        }

        if (thisOptions.withProps) {
          this.__setStores(getStores(this.constructor, this.props, thisOptions));
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (Object(reshow_runtime_es_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ConnectedClass.prototype), "componentWillUnmount", this)) {
          Object(reshow_runtime_es_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ConnectedClass.prototype), "componentWillUnmount", this).call(this);
        }

        this.__resetStores();
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var thisStates = null;

        if (Object(reshow_runtime_es_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ConnectedClass), "getDerivedStateFromProps", this)) {
          thisStates = Object(reshow_runtime_es_helpers_get__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ConnectedClass), "getDerivedStateFromProps", this).call(this, nextProps, prevState);
        }

        if (thisOptions.withProps) {
          var calState = getState(ConnectedClass, Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])({}, prevState), thisStates), nextProps, thisOptions);

          if (prevState.prevCalState !== calState) {
            thisStates = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])({}, thisStates), calState), {}, {
              prevCalState: calState
            });
          }
        }

        return thisStates;
      }
    }]);

    return ConnectedClass;
  }(Base);

  var componentName = Base.displayName || Base.name;
  ConnectedClass.displayName = "FluxConnected(" + componentName + ")";
  return ConnectedClass;
};

/* harmony default export */ __webpack_exports__["default"] = (connect);

/***/ })

})
//# sourceMappingURL=vendor.eed04f7d6fc39cd7b98b.hot-update.js.map