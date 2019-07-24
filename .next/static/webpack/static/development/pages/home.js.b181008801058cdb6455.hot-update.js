webpackHotUpdate("static/development/pages/home.js",{

/***/ "./utils/analyticsAdapter.js":
/*!***********************************!*\
  !*** ./utils/analyticsAdapter.js ***!
  \***********************************/
/*! exports provided: recordAction, recordClick, recordResumeDownload, recordLinkClick, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordAction", function() { return recordAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordClick", function() { return recordClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordResumeDownload", function() { return recordResumeDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordLinkClick", function() { return recordLinkClick; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./utils/helpers.js");


var DBUG = "development" === "stage";

var recordAction = function recordAction() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "action";
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["isServer"])()) return DBUG && console.warn("Error - analytics not enabled on server");
  if (typeof heap === undefined) return DBUG && console.warn("Error - analytics not enabled");

  try {
    DBUG && console.warn("Analytics [".concat(key, "] - "), data ? _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data) : "");
    heap.track(key, data);
  } catch (error) {
    DBUG && console.warn("Error - ".concat(error));
  }
};
var recordClick = function recordClick() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return recordAction("Click", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data));
};
var recordResumeDownload = function recordResumeDownload() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return recordAction("Resume Download", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data));
};
var recordLinkClick = function recordLinkClick() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return recordAction("Click Link", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  recordClick: recordClick,
  recordResumeDownload: recordResumeDownload,
  recordLinkClick: recordLinkClick
});

/***/ })

})
//# sourceMappingURL=home.js.b181008801058cdb6455.hot-update.js.map