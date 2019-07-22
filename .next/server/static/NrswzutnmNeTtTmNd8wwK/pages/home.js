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

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/Y8Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yBWC");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("eqbg");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Schematics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ScEV");
/* harmony import */ var _components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jUYA");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("6rCm");
/* harmony import */ var _components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("WbzW");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);







var DBUG = "production" === "development"; // { /* <Box>Projects (list of 9, which shift the screen to the right where you can view them. with history shifts )</Box> */ }
// the line will squiggle into right, then left, then right again
// on each end, there will be a box with nodes stretching otu into tech i know

var FrontEndWrap = function FrontEndWrap(_ref) {
  var progress = _ref.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxWrap, {
    fadeIn: progress > .05,
    style: {
      marginTop: "18%",
      marginLeft: "19%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "StyledComponents"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "NextJS/Gatsby"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "Webpack"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bubble, null, "React")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "Apollo Client"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "Redux"
  }), "Front-End");
};

var BackEndWrap = function BackEndWrap(_ref2) {
  var progress = _ref2.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxWrap, {
    fadeIn: progress > .19,
    style: {
      marginTop: "26%",
      marginLeft: "-39%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bubble, null, "Node")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "GraphQL & Apollo Server"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "SocketIO"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bubble, null, "Postgres")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "MongoDB"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "ElasticSearch"
  }), "Back-End");
};

var DevOpsWrap = function DevOpsWrap(_ref3) {
  var progress = _ref3.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxWrap, {
    fadeIn: progress > .43,
    style: {
      marginTop: "45%",
      marginLeft: "11%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "Docker"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "AWS"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "TravisCI"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
    label: "IBM Cloud"
  }), "DevOps");
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref4) {
  var progress = _ref4.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CenterWrap, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAnd, {
    rotationDegrees: 90
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Line__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    pathLength: 2200,
    progress: progress,
    width: "1000",
    height: "710",
    id: "line-2",
    d: " M 500, 0 v 140 h 230 v 100 h -600 v 150 h 500 v 50 h -130 v 300 "
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FrontEndWrap, {
    progress: progress
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackEndWrap, {
    progress: progress
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DevOpsWrap, {
    progress: progress
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
    fadeIn: progress > .9
  }, "Examples on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/sockol"
  }, "GitHub"))));
});

var StyledAnd = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).withConfig({
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

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "10MZ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("BRyB")


/***/ }),

/***/ "2t+L":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JN4l");


/***/ }),

/***/ "3ecc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6rCm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eqbg");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);








var Component =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Component, _React$Component);

  function Component() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Component);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Component).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Component, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(StyledSVG, {
        pathLength: this.props.pathLength,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(this.props.width, " ").concat(this.props.height)
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
        paused: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        id: this.props.id,
        fill: "none",
        stroke: "black",
        strokeWidth: "4",
        d: this.props.d
      })));
    }
  }]);

  return Component;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Component);

var StyledSVG = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.svg.withConfig({
  displayName: "Line__StyledSVG",
  componentId: "fflre-0"
})(["display:flex;margin:0 auto;width:100%;path{stroke-dasharray:", ";}"], function (props) {
  return "".concat(props.pathLength, " ").concat(props.pathLength);
});

/***/ }),

/***/ "89jb":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("czDT");

var _Symbol = __webpack_require__("NB5k");

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

/***/ "BRyB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("OgLj");

var _stringify = _interopRequireDefault(__webpack_require__("d7sg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("M7Bt"));

var _createClass2 = _interopRequireDefault(__webpack_require__("qFAv"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("QUaM"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("NU6h"));

var _inherits2 = _interopRequireDefault(__webpack_require__("K0Fi"));

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

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

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

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "JN4l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/semurnabiev/.nvm/versions/node/v10.5.0/lib/node_modules/next/link.js
var next_link = __webpack_require__("10MZ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Layout/Main.js

/* harmony default export */ var Main = (external_styled_components_default.a.main.withConfig({
  displayName: "Main",
  componentId: "xop1hx-0"
})(["display:flex;flex-direction:column;max-width:100rem;max-width:60rem;width:100%;margin:0 auto;margin-top:2rem;"]));
// EXTERNAL MODULE: ./pages/home/Header.js
var Header = __webpack_require__("mCkw");

// EXTERNAL MODULE: ./pages/home/Overview/index.js
var Overview = __webpack_require__("xGAr");

// CONCATENATED MODULE: ./utils/helpers.js
var isServer = function isServer() {
  return typeof window === "undefined";
};
/* harmony default export */ var helpers = ({
  isServer: isServer
});
// CONCATENATED MODULE: ./pages/home/index.js










var home_Page = function Page() {
  return isServer() ? null : external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Main, null, external_react_default.a.createElement(Header["default"], null), external_react_default.a.createElement(Overview["default"], null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(Construction, null, "My projects - This part is under construction")));
};

/* harmony default export */ var home = __webpack_exports__["default"] = (home_Page);

home_Page.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(_ref) {
    var req;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            return _context.abrupt("return", Object(objectSpread["a" /* default */])({}, req.params));

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


var Construction = external_styled_components_default.a.div.withConfig({
  displayName: "home__Construction",
  componentId: "tls23u-0"
})(["display:block;margin:0 auto;width:100%;margin-top:10rem;margin-bottom:10rem;text-align:center;opacity:0.5;font-size:2rem;"]);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K0Fi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("rndb");

var setPrototypeOf = __webpack_require__("qDuo");

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

/***/ "LeFx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yBWC");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("eqbg");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Schematics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ScEV");
/* harmony import */ var _components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jUYA");
/* harmony import */ var _components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("WbzW");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6rCm");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);







var DBUG = "production" === "development";
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var progress = _ref.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CenterWrap, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAnd, {
    rotationDegrees: 90
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Line__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    pathLength: 420,
    progress: progress,
    width: "1000",
    height: "172",
    id: "line-0",
    d: " M 500, 0 v 20 h 20 v 10 h -40 v 10 h 20 h 20 v 10 h -40 v 10 h 20 h 20 v 10 h -40 v 10 h 20 v 100 "
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
    fadeIn: progress > .9
  }, "Having developed an appreciation for design through my work at IBM, I strive to approach every problem with the end-user in mind.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "On the back-end, I strive to improve upon the development processes and tooling for my team. On the front-end, I seek to gain a deeper understanding of the user to be able to build better experiences."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
});

var CenterWrap = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "About__CenterWrap",
  componentId: "pgjmt0-0"
})(["display:block;margin:0 auto;width:100%;"]);
var StyledAnd = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).withConfig({
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

/***/ "M7Bt":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "NB5k":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "NU6h":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("vF8N");

var _Object$setPrototypeOf = __webpack_require__("2t+L");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
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

/***/ "OgLj":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "QUaM":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("89jb");

var assertThisInitialized = __webpack_require__("p3ig");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "ScEV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js
var freeze = __webpack_require__("FbiP");
var freeze_default = /*#__PURE__*/__webpack_require__.n(freeze);

// EXTERNAL MODULE: ./components/Schematics/And.js
var And = __webpack_require__("WbzW");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Schematics/Attachment.js

/* harmony default export */ var Attachment = (function (_ref) {
  var style = _ref.style,
      _ref$fadeIn = _ref.fadeIn,
      fadeIn = _ref$fadeIn === void 0 ? true : _ref$fadeIn,
      className = _ref.className;
  return external_react_default.a.createElement(Wrap, {
    style: style,
    fadeIn: fadeIn,
    className: className
  }, external_react_default.a.createElement("svg", {
    width: "50",
    height: "60",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("circle", {
    cx: "27",
    cy: "45",
    r: "5",
    stroke: "black",
    strokeWidth: "2",
    fill: "none"
  }), external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: " M 2, 0 l 25, 25 v 15 "
  })));
});

var Wrap = external_styled_components_default.a.div.withConfig({
  displayName: "Attachment__Wrap",
  componentId: "d0tmnw-0"
})(["  transition:opacity 0.1s;opacity:", ";svg{display:block;}"], function (props) {
  return props.fadeIn ? 1 : 0;
});
// CONCATENATED MODULE: ./components/Schematics/index.js




var Components = {
  And: And["a" /* default */],
  Attachment: Attachment,
  index: Schematics
};

freeze_default()(Components);

/* harmony default export */ var Schematics = __webpack_exports__["a"] = (Components);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WbzW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#000" : _ref$color,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100",
    height: "50",
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: color,
    stroke: color,
    strokeWidth: "2",
    d: "M70 25M31 15H5M32 35H5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: color,
    stroke: color,
    d: "M30 5V45H50.47619c11.267908 0 20-9.000045 20-20s-8.732091-20-20-20H30zm2.857143 2.857143H50.47619c9.760663 0 16.666667 7.639955 16.666667 17.142857 0 9.502902-7.382195 17.142857-17.142857 17.142857H32.857143V7.857143z"
  }));
});

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "czDT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "d7sg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "eqbg":
/***/ (function(module, exports) {

module.exports = require("react-gsap");

/***/ }),

/***/ "fLqu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yBWC");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eqbg");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Schematics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ScEV");
/* harmony import */ var _components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("jUYA");
/* harmony import */ var _components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("WbzW");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("6rCm");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);








var DBUG = "production" === "development";
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref2;

  var fadeIn = _ref.fadeIn;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ResumeBoxWrap, {
    fadeIn: fadeIn
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Schematics__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].Attachment, {
    style: {
      left: "50%",
      top: "50%",
      marginLeft: "6rem"
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Schematics__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].Attachment, {
    style: {
      left: "50%",
      top: "50%",
      marginLeft: "-6rem",
      transform: "rotate(180deg)"
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Schematics__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].Attachment, {
    style: (_ref2 = {
      left: "50%",
      top: "50%",
      marginTop: "6rem"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, "marginTop", "1.7rem"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, "marginLeft", "4rem"), _ref2)
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Schematics__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].Attachment, {
    style: {
      left: "50%",
      top: "50%",
      marginTop: "1.7rem",
      marginLeft: "-5rem",
      transform: "rotate(90deg)"
    }
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

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "jUYA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Schematics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ScEV");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
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
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Schematics__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Attachment, {
    style: svgStyle
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: labelStyle
  }, label));
});

var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "AttachmentWithLabel__Wrap",
  componentId: "sc-1wu2qxb-0"
})(["display:flex;flex-direction:column;position:relative;transition:opacity 0.1s;opacity:", ";svg{margin-left:auto;}span{margin-left:auto;display:block;}"], function (props) {
  return props.fadeIn ? 1 : 0;
});

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mCkw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yBWC");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Hello"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "I am a full-stack engineer, with a passion for technology and people"));
});

var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section.withConfig({
  displayName: "Header__Wrap",
  componentId: "sc-34d2x3-0"
})(["display:flex;flex-direction:column;margin:auto;padding-bottom:15rem;h1{font-size:2rem;margin:0;margin-left:auto;}h2{font-size:10rem;margin:0;padding-top:10rem;padding-bottom:5rem;}"]);

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p3ig":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qDuo":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("2t+L");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "qFAv":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("3ecc");

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

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rAwe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yBWC");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("eqbg");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Schematics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ScEV");
/* harmony import */ var _components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jUYA");
/* harmony import */ var _components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("WbzW");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6rCm");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);







var DBUG = "production" === "development";
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var progress = _ref.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CenterWrap, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAnd, {
    rotationDegrees: 90
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IntroWrapAttachments, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
      href: "https://github.com/sockol"
    }, "Github profile")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
      href: "https://medium.com/@semur.nabiev"
    }, "Medium articles")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
      href: "https://www.linkedin.com/in/semur-nabiev-15305382/"
    }, "LinkedIn")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
      href: "https://www.npmjs.com/~sockol"
    }, "My NPM Modules")
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Line__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    pathLength: 1700,
    progress: progress,
    width: "1000",
    height: "480",
    id: "line-1",
    d: " M 500, 0 v 200 h 100 v 50 h -200 v 50 h 300 v 50 h -400 v 50 h 200 v 100 "
  }));
});

var CenterWrap = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Intro__CenterWrap",
  componentId: "sc-7vr4ik-0"
})(["display:block;margin:0 auto;width:100%;"]);
var StyledAnd = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).withConfig({
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

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rndb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "vF8N":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xGAr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("yBWC");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("eqbg");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Schematics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ScEV");
/* harmony import */ var _components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("jUYA");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("6rCm");
/* harmony import */ var _components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("WbzW");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("rAwe");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("LeFx");
/* harmony import */ var _ResumeBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("fLqu");
/* harmony import */ var _Competencies__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("/Y8Q");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_16__);
















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

var DBUG = "production" === "development";

var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Page, _React$Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Page, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Wrap, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Box, {
        style: {
          marginBottom: "1rem"
        },
        ref: function ref(e) {
          return _this.introRef = e;
        },
        id: "introRef"
      }, "About me"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_6__["Controller"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_6__["Scene"], {
        duration: 200,
        offset: window.innerHeight / 2,
        indicators: DBUG,
        pin: true
      }, function (progress) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_About__WEBPACK_IMPORTED_MODULE_13__["default"], {
          progress: progress
        }));
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_6__["Scene"], {
        duration: 1000,
        offset: window.innerHeight / 2,
        indicators: DBUG,
        pin: true
      }, function (progress) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            marginTop: "25vh"
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Intro__WEBPACK_IMPORTED_MODULE_12__["default"], {
          progress: progress
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ResumeBox__WEBPACK_IMPORTED_MODULE_14__["default"], {
          fadeIn: progress > .9
        }));
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Box, {
        style: {
          marginTop: "25vh"
        }
      }, "I have worked the most with Node, React & Postgres"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_6__["Scene"], {
        duration: 1000,
        offset: window.innerHeight / 2,
        indicators: DBUG,
        pin: true
      }, function (progress) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Competencies__WEBPACK_IMPORTED_MODULE_15__["default"], {
          progress: progress
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

/***/ "yBWC":
/***/ (function(module, exports) {

module.exports = require("react-scrollmagic");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });