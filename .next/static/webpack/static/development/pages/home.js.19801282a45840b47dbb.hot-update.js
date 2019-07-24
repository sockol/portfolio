webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home/Overview/Intro.js":
/*!**************************************!*\
  !*** ./pages/home/Overview/Intro.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollmagic */ "./node_modules/react-scrollmagic/dist/index.es.js");
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-gsap */ "./node_modules/react-gsap/dist/index.es.js");
/* harmony import */ var _components_Schematics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Schematics */ "./components/Schematics/index.js");
/* harmony import */ var _components_AttachmentWithLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/AttachmentWithLabel */ "./components/AttachmentWithLabel.js");
/* harmony import */ var _components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Schematics/And.js */ "./components/Schematics/And.js");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Line */ "./components/Line.js");
/* harmony import */ var _utils_analyticsAdapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/analyticsAdapter */ "./utils/analyticsAdapter.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/semurnabiev/Zadachi/Portfolio/pages/home/Overview/Intro.js";








var DBUG = "development" === "development";
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var progress = _ref.progress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CenterWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAnd, {
    rotationDegrees: 90,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IntroWrapAttachments, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
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
      onClick: function onClick(e) {
        return _utils_analyticsAdapter__WEBPACK_IMPORTED_MODULE_7__["default"].recordLinkClick({
          type: "github"
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Github profile"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
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
      onClick: function onClick(e) {
        return _utils_analyticsAdapter__WEBPACK_IMPORTED_MODULE_7__["default"].recordLinkClick({
          type: "medium"
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Medium articles"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
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
      onClick: function onClick(e) {
        return _utils_analyticsAdapter__WEBPACK_IMPORTED_MODULE_7__["default"].recordLinkClick({
          type: "linkedin"
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "LinkedIn"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
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
    fadeIn: progress > .56,
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BubbleLink, {
      target: "_blank",
      href: "https://www.npmjs.com/~sockol",
      onClick: function onClick(e) {
        return _utils_analyticsAdapter__WEBPACK_IMPORTED_MODULE_7__["default"].recordLinkClick({
          type: "npm"
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "My NPM Modules"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
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
      lineNumber: 98
    },
    __self: this
  }));
});

var CenterWrap = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Intro__CenterWrap",
  componentId: "sc-7vr4ik-0"
})(["display:block;margin:0 auto;width:100%;"]);
var StyledAnd = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_components_Schematics_And_js__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "Intro__StyledAnd",
  componentId: "sc-7vr4ik-1"
})(["  transform:rotate(", "deg);margin:0 auto;display:block;height:50px;width:72px;margin-top:-12px;margin-bottom:10px;"], function (props) {
  return props.rotationDegrees || 0;
});
var IntroWrapAttachments = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Intro__IntroWrapAttachments",
  componentId: "sc-7vr4ik-2"
})(["  position:relative;div{position:absolute;display:block;height:0;width:0;span{white-space:nowrap;display:block;}}"]);
var Box = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Intro__Box",
  componentId: "sc-7vr4ik-3"
})(["border:4px solid black;border-radius:.5rem;margin:0 auto;text-align:left;padding:1rem;display:table;max-width:30rem;width:100%;line-height:1.5rem;"]);
var BubbleLink = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].a.withConfig({
  displayName: "Intro__BubbleLink",
  componentId: "sc-7vr4ik-4"
})(["background:black;font-weight:bold;color:white;display:inline-block;text-decoration:none;width:auto;padding:.05rem 1rem;border-radius:1rem;&:hover{background:#333;border-color:#333;}"]);

/***/ })

})
//# sourceMappingURL=home.js.19801282a45840b47dbb.hot-update.js.map