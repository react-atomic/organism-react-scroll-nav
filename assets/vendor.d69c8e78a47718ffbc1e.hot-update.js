webpackHotUpdate("vendor",{

/***/ "./node_modules/reshow-flux-base/build/es/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/reshow-flux-base/build/es/mitt.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var type = function type(all) {
  return function (t) {
    console.lor(all);
    return all[t] || (all[t] = []);
  };
};

var mitt = function mitt() {
  var all = type({});
  return {
    on: function on(t, handler) {
      return all(t).push(handler);
    },
    off: function off(t, handler) {
      return all(t).splice(all(t).indexOf(handler) >>> 0, 1);
    },
    emit: function emit(t, state) {
      return all(t).forEach(function (func) {
        return func(state);
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (mitt);


/***/ })

})
//# sourceMappingURL=vendor.d69c8e78a47718ffbc1e.hot-update.js.map