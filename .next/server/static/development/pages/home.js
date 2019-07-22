module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AttachmentWithLabel.js":
/*!*******************************************!*\
  !*** ./components/AttachmentWithLabel.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Schematics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Schematics */ "./components/Schematics/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/semurnabiev/Zadachi/Portfolio/components/AttachmentWithLabel.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var label = _ref.label,
      left = _ref.left,
      right = _ref.right,
      _ref$fadeIn = _ref.fadeIn,
      fadeIn = _ref$fadeIn === void 0 ? true : _ref$fadeIn,
      style = _ref.style,
      labelStyle = _ref.labelStyle,
      svgStyle = _ref.svgStyle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    fadeIn: fadeIn,
    left: left,
    right: right,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Schematics__WEBPACK_IMPORTED_MODULE_1__["default"].Attachment, {
    style: svgStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: labelStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, label));
});

var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "AttachmentWithLabel__Wrap",
  componentId: "sc-1wu2qxb-0"
})(["display:flex;flex-direction:column;position:relative;transition:opacity 0.1s;opacity:", ";svg{margin-left:auto;}span{margin-left:auto;display:block;}"], function (props) {
  return props.fadeIn ? 1 : 0;
});

/***/ }),

/***/ "./components/Layout/Main.js":
/*!***********************************!*\
  !*** ./components/Layout/Main.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "Main",
  componentId: "xop1hx-0"
})(["display:flex;flex-direction:column;max-width:100rem;max-width:60rem;width:100%;margin:0 auto;margin-top:2rem;"]));

/***/ }),

/***/ "./components/Line.js":
/*!****************************!*\
  !*** ./components/Line.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-gsap */ "react-gsap");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/semurnabiev/Zadachi/Portfolio/components/Line.js";



var Component =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Component, _React$Component);

  function Component() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Component);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Component).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Component, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(StyledSVG, {
        pathLength: this.props.pathLength,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(this.props.width, " ").concat(this.props.height),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_gsap__WEBPACK_IMPORTED_MODULE_6__["Tween"], {
        from: {
          css: {
            strokeDashoffset: this.props.pathLength
          } // ease: `Strong.easeOut`,

        },
        to: {
          css: {
            strokeDashoffset: 0
          } // ease: `Strong.easeOut`,

        },
        totalProgress: this.props.progress,
        paused: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        id: this.props.id,
        fill: "none",
        stroke: "black",
        strokeWidth: "4",
        d: this.props.d,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })));
    }
  }]);

  return Component;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Component);

var StyledSVG = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.svg.withConfig({
  displayName: "Line__StyledSVG",
  componentId: "fflre-0"
})(["display:flex;margin:0 auto;width:100%;path{stroke-dasharray:", ";}"], function (props) {
  return "".concat(props.pathLength, " ").concat(props.pathLength);
});

/***/ }),

/***/ "./components/Schematics/And.js":
/*!**************************************!*\
  !*** ./components/Schematics/And.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/semurnabiev/Zadachi/Portfolio/components/Schematics/And.js";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#000" : _ref$color,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100",
    height: "50",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: color,
    stroke: color,
    strokeWidth: "2",
    d: "M70 25M31 15H5M32 35H5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: color,
    stroke: color,
    d: "M30 5V45H50.47619c11.267908 0 20-9.000045 20-20s-8.732091-20-20-20H30zm2.857143 2.857143H50.47619c9.760663 0 16.666667 7.639955 16.666667 17.142857 0 9.502902-7.382195 17.142857-17.142857 17.142857H32.857143V7.857143z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
});

/***/ }),

/***/ "./components/Schematics/Attachment.js":
/*!*********************************************!*\
  !*** ./components/Schematics/Attachment.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/semurnabiev/Zadachi/Portfolio/components/Schematics/Attachment.js";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var style = _ref.style,
      _ref$fadeIn = _ref.fadeIn,
      fadeIn = _ref$fadeIn === void 0 ? true : _ref$fadeIn,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    style: style,
    fadeIn: fadeIn,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "50",
    height: "60",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "27",
    cy: "45",
    r: "5",
    stroke: "black",
    strokeWidth: "2",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: " M 2, 0 l 25, 25 v 15 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })));
});

var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Attachment__Wrap",
  componentId: "d0tmnw-0"
})(["  transition:opacity 0.1s;opacity:", ";svg{display:block;}"], function (props) {
  return props.fadeIn ? 1 : 0;
});

/***/ }),

/***/ "./components/Schematics/index.js":
/*!****************************************!*\
  !*** ./components/Schematics/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _And_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./And.js */ "./components/Schematics/And.js");
/* harmony import */ var _Attachment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Attachment.js */ "./components/Schematics/Attachment.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ "./components/Schematics/index.js");




var Components = {
  And: _And_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  Attachment: _Attachment_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  index: _index_js__WEBPACK_IMPORTED_MODULE_3__["default"]
};

_babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_0___default()(Components);

/* harmony default export */ __webpack_exports__["default"] = (Components);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/home/Header.js":
/*!******************************!*\
  !*** ./pages/home/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollmagic */ "react-scrollmagic");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/semurnabiev/Zadachi/Portfolio/pages/home/Header.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Hello"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "I am a full-stack engineer, with a passion for technology and people"));
});

var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section.withConfig({
  displayName: "Header__Wrap",
  componentId: "sc-34d2x3-0"
})(["display:flex;flex-direction:column;margin:auto;padding-bottom:15rem;h1{font-size:2rem;margin:0;margin-left:auto;}h2{font-size:10rem;margin:0;padding-top:10rem;padding-bottom:5rem;}"]);

/***/ }),

/***/ "./pages/home/Overview/About.js":
/*!**************************************!*\
  !*** ./pages/home/Overview/About.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollmagic */ "react-scrollmagic");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-gsap */ "react-gsap");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Schematics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Schematics */ "./components/Schematics/index.js");
/* harmony import */ var _components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/AttachmentWithLabel */ "./components/AttachmentWithLabel.js");
/* harmony import */ var _components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Schematics/And.js */ "./components/Schematics/And.js");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Line */ "./components/Line.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/semurnabiev/Zadachi/Portfolio/pages/home/Overview/About.js";







var DBUG = "development" === "development";
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var progress = _ref.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CenterWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAnd, {
    rotationDegrees: 90,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pathLength: 420,
    progress: progress,
    width: "1000",
    height: "172",
    id: "line-0",
    d: " M 500, 0 v 20 h 20 v 10 h -40 v 10 h 20 h 20 v 10 h -40 v 10 h 20 h 20 v 10 h -40 v 10 h 20 v 100 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
    fadeIn: progress > .9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Having developed an appreciation for design through my work at IBM, I strive to approach every problem with the end-user in mind.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), "On the back-end, I strive to improve upon the development processes and tooling for my team. On the front-end, I seek to gain a deeper understanding of the user to be able to build better experiences."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }));
});

var CenterWrap = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "About__CenterWrap",
  componentId: "pgjmt0-0"
})(["display:block;margin:0 auto;width:100%;"]);
var StyledAnd = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "About__StyledAnd",
  componentId: "pgjmt0-1"
})(["  transform:rotate(", "deg);margin:0 auto;display:block;height:50px;width:72px;margin-top:-12px;margin-bottom:10px;"], function (props) {
  return props.rotationDegrees || 0;
});
var Box = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "About__Box",
  componentId: "pgjmt0-2"
})(["border:4px solid black;border-radius:.5rem;margin:0 auto;text-align:left;padding:1rem;display:table;max-width:30rem;width:100%;line-height:1.5rem;opacity:", ";"], function (props) {
  return props.fadeIn ? 1 : 0;
});

/***/ }),

/***/ "./pages/home/Overview/Competencies.js":
/*!*********************************************!*\
  !*** ./pages/home/Overview/Competencies.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollmagic */ "react-scrollmagic");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-gsap */ "react-gsap");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Schematics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Schematics */ "./components/Schematics/index.js");
/* harmony import */ var _components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/AttachmentWithLabel */ "./components/AttachmentWithLabel.js");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Line */ "./components/Line.js");
/* harmony import */ var _components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Schematics/And.js */ "./components/Schematics/And.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/semurnabiev/Zadachi/Portfolio/pages/home/Overview/Competencies.js";







var DBUG = "development" === "development"; // { /* <Box>Projects (list of 9, which shift the screen to the right where you can view them. with history shifts )</Box> */ }
// the line will squiggle into right, then left, then right again
// on each end, there will be a box with nodes stretching otu into tech i know

var FrontEndWrap = function FrontEndWrap(_ref) {
  var progress = _ref.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxWrap, {
    fadeIn: progress > .05,
    style: {
      marginTop: "18%",
      marginLeft: "19%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "0rem",
      marginTop: "4rem"
    },
    svgStyle: {
      transform: "rotate(-180deg)",
      marginLeft: "-3rem",
      marginTop: "-5rem"
    },
    labelStyle: {
      marginLeft: "-15rem",
      marginTop: "-10rem"
    },
    label: "StyledComponents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "3rem",
      marginTop: "4rem"
    },
    svgStyle: {
      transform: "rotate(-180deg)",
      marginLeft: "-3rem",
      marginTop: "-5rem"
    },
    labelStyle: {
      marginLeft: "-10rem",
      marginTop: "-12rem"
    },
    label: "NextJS/Gatsby",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "6rem",
      marginTop: "4rem"
    },
    svgStyle: {
      transform: "rotate(-180deg)",
      marginLeft: "-3rem",
      marginTop: "-5rem"
    },
    labelStyle: {
      marginLeft: "-8rem",
      marginTop: "-10rem"
    },
    label: "Webpack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "9rem",
      marginTop: "4rem"
    },
    svgStyle: {
      transform: "rotate(-180deg)",
      marginLeft: "-3rem",
      marginTop: "-5rem"
    },
    labelStyle: {
      marginLeft: "-10rem",
      marginTop: "-12rem"
    },
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bubble, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "React"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "9.5rem",
      marginTop: "4.5rem"
    },
    svgStyle: {
      transform: "rotate(-90deg)",
      marginLeft: "-1rem",
      marginTop: "-5rem"
    },
    labelStyle: {
      marginLeft: "3rem",
      marginTop: "-8rem"
    },
    label: "Apollo Client",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "9.5rem",
      marginTop: "7rem"
    },
    svgStyle: {
      transform: "rotate(-90deg)",
      marginLeft: "-1rem",
      marginTop: "-5rem"
    },
    labelStyle: {
      marginLeft: "3rem",
      marginTop: "-8rem"
    },
    label: "Redux",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), "Front-End");
};

var BackEndWrap = function BackEndWrap(_ref2) {
  var progress = _ref2.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxWrap, {
    fadeIn: progress > .19,
    style: {
      marginTop: "26%",
      marginLeft: "-39%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "0rem",
      marginTop: "4rem"
    },
    svgStyle: {
      transform: "rotate(-180deg)",
      marginLeft: "-3rem",
      marginTop: "-5rem"
    },
    labelStyle: {
      marginLeft: "-10rem",
      marginTop: "-10rem"
    },
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bubble, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "Node"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "9rem",
      marginTop: "4rem"
    },
    svgStyle: {
      transform: "rotate(-90deg)",
      marginLeft: "-0.6rem",
      marginTop: "-4rem"
    },
    labelStyle: {
      marginLeft: "1rem",
      marginTop: "-8rem",
      whiteSpace: "nowrap"
    },
    label: "GraphQL & Apollo Server",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "4rem",
      marginTop: "4rem"
    },
    svgStyle: {
      transform: "rotate(-180deg)",
      marginLeft: "-3rem",
      marginTop: "-5rem"
    },
    labelStyle: {
      marginLeft: "-8rem",
      marginTop: "-10rem"
    },
    label: "SocketIO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "11rem",
      marginTop: "4rem"
    },
    svgStyle: {
      transform: "rotate(-180deg)",
      marginLeft: "-3rem",
      marginTop: "-5rem"
    },
    labelStyle: {
      marginLeft: "-10rem",
      marginTop: "-10rem"
    },
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bubble, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, "Postgres"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "-3.5rem",
      marginTop: "2.5rem"
    },
    svgStyle: {
      transform: "rotate(90deg)",
      marginLeft: "-.5rem",
      marginTop: "-3rem"
    },
    labelStyle: {
      marginLeft: "-13rem",
      marginTop: "-2rem"
    },
    label: "MongoDB",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "-3.5rem",
      marginTop: "4.5rem"
    },
    svgStyle: {
      transform: "rotate(90deg)",
      marginLeft: "-.5rem",
      marginTop: "-3rem"
    },
    labelStyle: {
      marginLeft: "-14rem",
      marginTop: "-2rem"
    },
    label: "ElasticSearch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), "Back-End");
};

var DevOpsWrap = function DevOpsWrap(_ref3) {
  var progress = _ref3.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxWrap, {
    fadeIn: progress > .43,
    style: {
      marginTop: "45%",
      marginLeft: "11%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "0rem",
      marginTop: "4rem"
    },
    svgStyle: {
      transform: "rotate(-180deg)",
      marginLeft: "-3rem",
      marginTop: "-5rem"
    },
    labelStyle: {
      marginLeft: "-15rem",
      marginTop: "-10rem"
    },
    label: "Docker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "3rem",
      marginTop: "4rem"
    },
    svgStyle: {
      transform: "rotate(-180deg)",
      marginLeft: "-3rem",
      marginTop: "-5rem"
    },
    labelStyle: {
      marginLeft: "-10rem",
      marginTop: "-10rem"
    },
    label: "AWS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "6rem",
      marginTop: "4rem"
    },
    svgStyle: {
      transform: "rotate(-180deg)",
      marginLeft: "-3rem",
      marginTop: "-5rem"
    },
    labelStyle: {
      marginLeft: "-8rem",
      marginTop: "-10rem"
    },
    label: "TravisCI",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      marginLeft: "9rem",
      marginTop: "4rem"
    },
    svgStyle: {
      transform: "rotate(-90deg)",
      marginLeft: "-1.5rem",
      marginTop: "-4rem"
    },
    labelStyle: {
      marginLeft: "1rem",
      marginTop: "-8rem",
      whiteSpace: "nowrap"
    },
    label: "IBM Cloud",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }), "DevOps");
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref4) {
  var progress = _ref4.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CenterWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAnd, {
    rotationDegrees: 90,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Line__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pathLength: 2200,
    progress: progress,
    width: "1000",
    height: "710",
    id: "line-2",
    d: " M 500, 0 v 140 h 230 v 100 h -600 v 150 h 500 v 50 h -130 v 300 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FrontEndWrap, {
    progress: progress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackEndWrap, {
    progress: progress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DevOpsWrap, {
    progress: progress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
    fadeIn: progress > .9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, "Examples on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/sockol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, "GitHub"))));
});

var StyledAnd = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "Competencies__StyledAnd",
  componentId: "sc-11pw20u-0"
})(["  transform:rotate(", "deg);margin:0 auto;display:block;height:50px;width:72px;margin-top:2px;margin-bottom:10px;"], function (props) {
  return props.rotationDegrees || 0;
});
var CenterWrap = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Competencies__CenterWrap",
  componentId: "sc-11pw20u-1"
})(["display:block;margin:0 auto;width:100%;"]);
var Competences = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Competencies__Competences",
  componentId: "sc-11pw20u-2"
})(["position:absolute;width:100%;"]);
var Attachments = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Competencies__Attachments",
  componentId: "sc-11pw20u-3"
})(["position:absolute;display:flex;margin:0 auto;& > div{width:7rem;}"]);
var Box = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Competencies__Box",
  componentId: "sc-11pw20u-4"
})(["transition:opacity 0.1s;opacity:", ";z-index:1;text-align:center;font-weight:bold;display:table;background:white;border:4px solid black;border-radius:.5rem;margin:0 auto;padding:1rem;"], function (props) {
  return props.fadeIn ? 1 : 0;
});
var BoxWrap = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Competencies__BoxWrap",
  componentId: "sc-11pw20u-5"
})(["position:absolute;top:0;left:50%;transition:opacity 0.1s;opacity:", ";z-index:1;text-align:center;font-weight:bold;display:block;background:white;border:4px solid black;border-radius:.5rem;margin:0 auto;padding:1rem 4rem;div{position:absolute;display:block;height:0;width:0;}"], function (props) {
  return props.fadeIn ? 1 : 0;
});
var Bubble = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.span.withConfig({
  displayName: "Competencies__Bubble",
  componentId: "sc-11pw20u-6"
})(["border:4px solid black;font-weight:bold;display:inline-block !important;width:auto;padding:.05rem 1rem;border-radius:1rem;"]);

/***/ }),

/***/ "./pages/home/Overview/Intro.js":
/*!**************************************!*\
  !*** ./pages/home/Overview/Intro.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollmagic */ "react-scrollmagic");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-gsap */ "react-gsap");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Schematics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Schematics */ "./components/Schematics/index.js");
/* harmony import */ var _components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/AttachmentWithLabel */ "./components/AttachmentWithLabel.js");
/* harmony import */ var _components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Schematics/And.js */ "./components/Schematics/And.js");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Line */ "./components/Line.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/semurnabiev/Zadachi/Portfolio/pages/home/Overview/Intro.js";







var DBUG = "development" === "development";
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var progress = _ref.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CenterWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAnd, {
    rotationDegrees: 90,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IntroWrapAttachments, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      left: "50%",
      marginLeft: "10%",
      marginTop: "23%"
    },
    labelStyle: {
      marginLeft: "4rem",
      marginTop: "-2.8rem"
    },
    svgStyle: {
      transform: "rotate(-90deg)"
    },
    fadeIn: progress > .07,
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BubbleLink, {
      target: "_blank",
      href: "https://github.com/sockol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Github profile"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      left: "50%",
      marginLeft: "-10%",
      marginTop: "28%"
    },
    labelStyle: {
      marginLeft: "-13rem",
      marginTop: "-1.5rem"
    },
    svgStyle: {
      transform: "rotate(-226deg)"
    },
    fadeIn: progress > .12,
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BubbleLink, {
      target: "_blank",
      href: "https://medium.com/@semur.nabiev",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Medium articles"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      left: "50%",
      marginLeft: "20%",
      marginTop: "33%"
    },
    labelStyle: {
      marginLeft: "4.5rem",
      marginTop: "0rem"
    },
    svgStyle: {
      transform: "rotate(-45deg)"
    },
    fadeIn: progress > .23,
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BubbleLink, {
      target: "_blank",
      href: "https://www.linkedin.com/in/semur-nabiev-15305382/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "LinkedIn"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      left: "50%",
      marginLeft: "-20%",
      marginTop: "38%"
    },
    labelStyle: {
      marginLeft: "-14rem",
      marginTop: "-1.5rem"
    },
    svgStyle: {
      transform: "rotate(-226deg)"
    },
    fadeIn: progress > .23,
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BubbleLink, {
      target: "_blank",
      href: "https://www.npmjs.com/~sockol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "My NPM Modules"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pathLength: 1700,
    progress: progress,
    width: "1000",
    height: "480",
    id: "line-1",
    d: " M 500, 0 v 200 h 100 v 50 h -200 v 50 h 300 v 50 h -400 v 50 h 200 v 100 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }));
});

var CenterWrap = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Intro__CenterWrap",
  componentId: "sc-7vr4ik-0"
})(["display:block;margin:0 auto;width:100%;"]);
var StyledAnd = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "Intro__StyledAnd",
  componentId: "sc-7vr4ik-1"
})(["  transform:rotate(", "deg);margin:0 auto;display:block;height:50px;width:72px;margin-top:-12px;margin-bottom:10px;"], function (props) {
  return props.rotationDegrees || 0;
});
var IntroWrapAttachments = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Intro__IntroWrapAttachments",
  componentId: "sc-7vr4ik-2"
})(["  position:relative;div{position:absolute;display:block;height:0;width:0;span{white-space:nowrap;display:block;}}"]);
var Box = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Intro__Box",
  componentId: "sc-7vr4ik-3"
})(["border:4px solid black;border-radius:.5rem;margin:0 auto;text-align:left;padding:1rem;display:table;max-width:30rem;width:100%;line-height:1.5rem;"]);
var BubbleLink = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.a.withConfig({
  displayName: "Intro__BubbleLink",
  componentId: "sc-7vr4ik-4"
})(["background:black;font-weight:bold;color:white;display:inline-block;text-decoration:none;width:auto;padding:.05rem 1rem;border-radius:1rem;&:hover{background:#333;border-color:#333;}"]);

/***/ }),

/***/ "./pages/home/Overview/ResumeBox.js":
/*!******************************************!*\
  !*** ./pages/home/Overview/ResumeBox.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scrollmagic */ "react-scrollmagic");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-gsap */ "react-gsap");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Schematics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Schematics */ "./components/Schematics/index.js");
/* harmony import */ var _components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/AttachmentWithLabel */ "./components/AttachmentWithLabel.js");
/* harmony import */ var _components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Schematics/And.js */ "./components/Schematics/And.js");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Line */ "./components/Line.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/semurnabiev/Zadachi/Portfolio/pages/home/Overview/ResumeBox.js";







var DBUG = "development" === "development";
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref2;

  var fadeIn = _ref.fadeIn;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ResumeBoxWrap, {
    fadeIn: fadeIn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Schematics__WEBPACK_IMPORTED_MODULE_4__["default"].Attachment, {
    style: {
      left: "50%",
      top: "50%",
      marginLeft: "6rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Schematics__WEBPACK_IMPORTED_MODULE_4__["default"].Attachment, {
    style: {
      left: "50%",
      top: "50%",
      marginLeft: "-6rem",
      transform: "rotate(180deg)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Schematics__WEBPACK_IMPORTED_MODULE_4__["default"].Attachment, {
    style: (_ref2 = {
      left: "50%",
      top: "50%",
      marginTop: "6rem"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "marginTop", "1.7rem"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "marginLeft", "4rem"), _ref2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Schematics__WEBPACK_IMPORTED_MODULE_4__["default"].Attachment, {
    style: {
      left: "50%",
      top: "50%",
      marginTop: "1.7rem",
      marginLeft: "-5rem",
      transform: "rotate(90deg)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), "Resume");
});

var Box = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "ResumeBox__Box",
  componentId: "sc-48xp10-0"
})(["border:4px solid black;border-radius:.5rem;margin:0 auto;text-align:left;padding:1rem;display:table;max-width:30rem;width:100%;"]);
var ResumeBoxWrap = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(Box).withConfig({
  displayName: "ResumeBox__ResumeBoxWrap",
  componentId: "sc-48xp10-1"
})(["max-width:10rem;transition:opacity 0.1s;opacity:", ";z-index:1;text-align:center;position:relative;cursor:pointer;font-weight:bold;background:black;color:white;&:hover{background:#333;border-color:#333;}div{position:absolute;display:block;height:0;width:0;}"], function (props) {
  return props.fadeIn ? 1 : 0;
});

/***/ }),

/***/ "./pages/home/Overview/index.js":
/*!**************************************!*\
  !*** ./pages/home/Overview/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scrollmagic */ "react-scrollmagic");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-gsap */ "react-gsap");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Schematics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Schematics */ "./components/Schematics/index.js");
/* harmony import */ var _components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/AttachmentWithLabel */ "./components/AttachmentWithLabel.js");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Line */ "./components/Line.js");
/* harmony import */ var _components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Schematics/And.js */ "./components/Schematics/And.js");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Intro */ "./pages/home/Overview/Intro.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./About */ "./pages/home/Overview/About.js");
/* harmony import */ var _ResumeBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ResumeBox */ "./pages/home/Overview/ResumeBox.js");
/* harmony import */ var _Competencies__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Competencies */ "./pages/home/Overview/Competencies.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_16__);





var _jsxFileName = "/Users/semurnabiev/Zadachi/Portfolio/pages/home/Overview/index.js";











/*
https://github.com/bitworking/react-scrollmagic

i am
  - from uzbekistan
  - a UTexas graduate
  - a naturalized citizen
  - a fan of: Node/React/PG

  line going down, with lbocks popping up


  make this look like a cpu schema. throw in db and other cloud logos into project pages

-----

rework this. in the intro write a shift overview instead of the line
shift paragraph

then squggle line. small loop for main technologies (node react postgres mongo).
bigger for supporting tech like Docker/DockerCompose Graphql Redux Apollo AWS
and biggest for ternary things like StyledComponents and what not.

bio with overview.

timeline of what i have done. no. liks to profiles. github, linkedin, medium, resume

technologies, with an increasing squjggle.

projects


I am a full stack developer, with a passion for people and technology.
Having developed an appreciation for design through my work at IBM, I beleieve that engineering,
when enhanced by a deep understanding of the user, leads to real impact for the product.
I strive to improve upon my craft as an front-end developer by closely collaborating with Research and UX.
As a back-end developer, I make it a point to seek out and improve upon any inefficiencies in the development process.

As a front-end engineer, my responsibility is to the user.
As a back-end engineer, my responsibility is to my engineering team.


FINAL:

I am a full stack developer, with a passion for people and technology.
Having developed an appreciation for design through my work at IBM, I beleieve that engineering,
when enhanced by a deep understanding of the user, leads to real impact for the product.
*/

/*
I am a full-stack engineer, with a passion for people and technology. <br/><br/>
Having developed an appreciation for design through my work at IBM,
I believe that engineering, when enhanced by a deep understanding of the user,
leads to real impact for the product.
*/

var DBUG = "development" === "development";

var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _React$Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Wrap, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Box, {
        style: {
          marginBottom: "1rem"
        },
        ref: function ref(e) {
          return _this.introRef = e;
        },
        id: "introRef",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "About me"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_6__["Scene"], {
        duration: 200,
        offset: window.innerHeight / 2,
        indicators: DBUG,
        pin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, function (progress) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_About__WEBPACK_IMPORTED_MODULE_13__["default"], {
          progress: progress,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_6__["Scene"], {
        duration: 1000,
        offset: window.innerHeight / 2,
        indicators: DBUG,
        pin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, function (progress) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            marginTop: "25vh"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Intro__WEBPACK_IMPORTED_MODULE_12__["default"], {
          progress: progress,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ResumeBox__WEBPACK_IMPORTED_MODULE_14__["default"], {
          fadeIn: progress > .9,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Box, {
        style: {
          marginTop: "25vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "I have worked the most with Node, React & Postgres"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_6__["Scene"], {
        duration: 1000,
        offset: window.innerHeight / 2,
        indicators: DBUG,
        pin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, function (progress) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Competencies__WEBPACK_IMPORTED_MODULE_15__["default"], {
          progress: progress,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }));
      })));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);

var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_16___default.a.section.withConfig({
  displayName: "Overview__Wrap",
  componentId: "qilx7x-0"
})(["display:flex;flex-direction:column;"]);
var Box = styled_components__WEBPACK_IMPORTED_MODULE_16___default.a.div.withConfig({
  displayName: "Overview__Box",
  componentId: "qilx7x-1"
})(["border:4px solid black;border-radius:.5rem;margin:0 auto;text-align:left;padding:1rem;display:table;max-width:30rem;"]);

/***/ }),

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout/Main */ "./components/Layout/Main.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ "./pages/home/Header.js");
/* harmony import */ var _Overview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Overview */ "./pages/home/Overview/index.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "/Users/semurnabiev/Zadachi/Portfolio/pages/home/index.js";







var Page = function Page() {
  return Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_8__["isServer"])() ? null : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout_Main__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Overview__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Construction, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "My projects - This part is under construction")));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

Page.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, req.params));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();


var Construction = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "home__Construction",
  componentId: "tls23u-0"
})(["display:block;margin:0 auto;width:100%;margin-top:10rem;margin-bottom:10rem;text-align:center;opacity:0.5;font-size:2rem;"]);

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: isServer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
var isServer = function isServer() {
  return typeof window === "undefined";
};
/* harmony default export */ __webpack_exports__["default"] = ({
  isServer: isServer
});

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./pages/home/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/semurnabiev/Zadachi/Portfolio/pages/home/index.js */"./pages/home/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-gsap":
/*!*****************************!*\
  !*** external "react-gsap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-gsap");

/***/ }),

/***/ "react-scrollmagic":
/*!************************************!*\
  !*** external "react-scrollmagic" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollmagic");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map