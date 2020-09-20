webpackHotUpdate("main",{

/***/ "../reshow/packages/reshow-flux/build/es/ReduceStore.js":
/*!**************************************************************!*\
  !*** ../reshow/packages/reshow-flux/build/es/ReduceStore.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "../reshow/packages/reshow-flux/node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reshow_flux_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-flux-base */ "../reshow/packages/reshow-flux/node_modules/reshow-flux-base/build/es/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! get-object-value */ "../reshow/packages/reshow-flux/node_modules/get-object-value/build/es/src/index.js");






function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}





var ReduceStore = /*#__PURE__*/function (_Store) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ReduceStore, _Store);

  var _super = _createSuper(ReduceStore);

  function ReduceStore() {
    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReduceStore);

    return _super.apply(this, arguments);
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ReduceStore, [{
    key: "getInitialState",
    value: function getInitialState() {
      return Object(immutable__WEBPACK_IMPORTED_MODULE_5__["Map"])();
    }
  }, {
    key: "getMap",
    value: function getMap(k) {
      return Object(get_object_value__WEBPACK_IMPORTED_MODULE_7__["toJS"])(this.getState().get(k)) || {};
    }
  }]);

  return ReduceStore;
}(reshow_flux_base__WEBPACK_IMPORTED_MODULE_6__["Store"]);

/* harmony default export */ __webpack_exports__["default"] = (ReduceStore);

/***/ }),

/***/ "../reshow/packages/reshow-flux/build/es/connect.js":
/*!**********************************************************!*\
  !*** ../reshow/packages/reshow-flux/build/es/connect.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/get */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/get.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var array_dedup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! array.dedup */ "../reshow/packages/reshow-flux/node_modules/array.dedup/build/src/index.js");
/* harmony import */ var array_dedup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(array_dedup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reshow_flux_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reshow-flux-base */ "../reshow/packages/reshow-flux/node_modules/reshow-flux-base/build/es/index.js");










function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}



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
          return getState(con, prevState, currentProps, thisOptions);
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

        if (thisOptions.withProps && prevState.prevProps !== nextProps) {
          var calState = getState(ConnectedClass, Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])({}, prevState), thisStates), nextProps, thisOptions);
          thisStates = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])({}, thisStates), calState), {}, {
            prevProps: nextProps
          });
        }

        return thisStates;
      }
    }]);

    return ConnectedClass;
  }(Base);

  var componentName = Base.displayName || Base.name;
  ConnectedClass.displayName = 'FluxConnected(' + componentName + ')';
  return ConnectedClass;
};

/* harmony default export */ __webpack_exports__["default"] = (connect);

/***/ }),

/***/ "../reshow/packages/reshow-flux/build/es/connectFunctional.js":
/*!********************************************************************!*\
  !*** ../reshow/packages/reshow-flux/build/es/connectFunctional.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connect */ "../reshow/packages/reshow-flux/build/es/connect.js");






function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}




var connectFunctional = function connectFunctional(viewFn, _getStores, _calculateState, options) {
  var FunctionalConnected = /*#__PURE__*/function (_PureComponent) {
    Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(FunctionalConnected, _PureComponent);

    var _super = _createSuper(FunctionalConnected);

    function FunctionalConnected() {
      Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FunctionalConnected);

      return _super.apply(this, arguments);
    }

    Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FunctionalConnected, [{
      key: "render",
      value: function render() {
        return viewFn(this.state);
      }
    }], [{
      key: "getStores",
      value: function getStores(props) {
        return _getStores(props);
      }
    }, {
      key: "calculateState",
      value: function calculateState(prevState, props) {
        return _calculateState(prevState, props);
      }
    }]);

    return FunctionalConnected;
  }(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

  var viewFnName = viewFn.displayName || viewFn.name || 'FunctionalConnected';
  FunctionalConnected.displayName = viewFnName;
  return Object(_connect__WEBPACK_IMPORTED_MODULE_6__["default"])(FunctionalConnected, options);
};

/* harmony default export */ __webpack_exports__["default"] = (connectFunctional);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../organism-react-scroll-nav/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../reshow/packages/reshow-flux/build/es/connectHook.js":
/*!**************************************************************!*\
  !*** ../reshow/packages/reshow-flux/build/es/connectHook.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate, __react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/slicedToArray */ "../reshow/packages/reshow-flux/node_modules/reshow-runtime/es/helpers/slicedToArray.js");
/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! setimmediate */ "../reshow/packages/reshow-flux/node_modules/setimmediate/setImmediate.js");
/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(setimmediate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reshow_build__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-build */ "../reshow/packages/reshow-flux/node_modules/reshow-build/build/es/src/index.js");
/* harmony import */ var array_dedup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! array.dedup */ "../reshow/packages/reshow-flux/node_modules/array.dedup/build/src/index.js");
/* harmony import */ var array_dedup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(array_dedup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reshow_flux_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-flux-base */ "../reshow/packages/reshow-flux/node_modules/reshow-flux-base/build/es/index.js");







var keys = Object.keys;

var cleanKeys = function cleanKeys(props, state) {
  if (state) {
    keys(props || {}).forEach(function (key) {
      return delete state[key];
    });
    return state;
  }
};

var connectHook = function connectHook(Base, options) {
  var _s = $RefreshSig$();

  var _ref = options || {},
      getStores = _ref.getStores,
      calculateState = _ref.calculateState,
      defaultProps = _ref.defaultProps,
      displayName = _ref.displayName;

  var Connected = function Connected(props) {
    _s();

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(function () {
      return {
        state: calculateState({}, props),
        props: props
      };
    }),
        _useState2 = Object(reshow_runtime_es_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1];

    var _mount = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(true);

    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
      var stores = array_dedup__WEBPACK_IMPORTED_MODULE_5___default()(getStores(props)) || [];

      if (stores && stores.length) {
        var handleChange = function handleChange() {
          if (_mount.current) {
            setData(function (prev) {
              return {
                __init__: true,
                props: props,
                state: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cleanKeys(prev.props, prev.state)), props), calculateState(prev.state, props))
              };
            });
          }
        };

        var asyncHandleChange = function asyncHandleChange() {
          return setImmediate(handleChange);
        };

        if (!data.__init__ || data.props !== props) {
          handleChange();
        }

        stores.forEach(function (store) {
          return store.addListener(asyncHandleChange, reshow_flux_base__WEBPACK_IMPORTED_MODULE_6__["CHANGE"]);
        });
        return function () {
          stores.forEach(function (store) {
            return store.removeListener(asyncHandleChange, reshow_flux_base__WEBPACK_IMPORTED_MODULE_6__["CHANGE"]);
          });
        };
      }
    }, [props]);
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
      return function () {
        return _mount.current = false;
      };
    }, []);
    return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
      return Object(reshow_build__WEBPACK_IMPORTED_MODULE_4__["default"])(Base)(data.state);
    }, [data.state]);
  };

  _s(Connected, "ueMMp9trlq+SfgLTdnTcNvkxrkc=");

  var componentName = displayName || Base.displayName || Base.name;
  Connected.displayName = "HookConnected(" + componentName + ")";

  if (defaultProps) {
    Connected.defaultProps = defaultProps;
  }

  return Connected;
};

/* harmony default export */ __webpack_exports__["default"] = (connectHook);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../organism-react-scroll-nav/node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../organism-react-scroll-nav/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../reshow/packages/reshow-flux/build/es/index.js":
/*!********************************************************!*\
  !*** ../reshow/packages/reshow-flux/build/es/index.js ***!
  \********************************************************/
/*! exports provided: connect, connectFunctional, connectHook, ReduceStore, Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect */ "../reshow/packages/reshow-flux/build/es/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _connectFunctional__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connectFunctional */ "../reshow/packages/reshow-flux/build/es/connectFunctional.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectFunctional", function() { return _connectFunctional__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _connectHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectHook */ "../reshow/packages/reshow-flux/build/es/connectHook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectHook", function() { return _connectHook__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ReduceStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReduceStore */ "../reshow/packages/reshow-flux/build/es/ReduceStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReduceStore", function() { return _ReduceStore__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var reshow_flux_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-flux-base */ "../reshow/packages/reshow-flux/node_modules/reshow-flux-base/build/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return reshow_flux_base__WEBPACK_IMPORTED_MODULE_4__["Dispatcher"]; });







/***/ })

})
//# sourceMappingURL=main.ee18f0a009c96d3ad053.hot-update.js.map