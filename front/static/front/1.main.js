(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/components/layout/FoxFooter.js":
/*!********************************************!*\
  !*** ./src/components/layout/FoxFooter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/layout/FoxHeader.js":
/*!********************************************!*\
  !*** ./src/components/layout/FoxHeader.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./src/components/routes.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./src/components/layout/index.js");



 // routes config




var FoxHeader = function FoxHeader() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var sidebarShow = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.sidebarShow;
  });

  var toggleSidebar = function toggleSidebar() {
    var val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive';
    dispatch({
      type: 'set',
      sidebarShow: val
    });
  };

  var toggleSidebarMobile = function toggleSidebarMobile() {
    var val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive';
    dispatch({
      type: 'set',
      sidebarShow: val
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeader"], {
    withSubheader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CToggler"], {
    inHeader: true,
    className: "ml-md-3 d-lg-none",
    onClick: toggleSidebarMobile
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CToggler"], {
    inHeader: true,
    className: "ml-3 d-md-down-none",
    onClick: toggleSidebar
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderBrand"], {
    className: "mx-auto d-lg-none",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "logo",
    height: "48",
    alt: "Logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNav"], {
    className: "d-md-down-none mr-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNavItem"], {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNavLink"], {
    to: "/dashboard"
  }, "Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNavItem"], {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNavLink"], {
    to: "/users"
  }, "Users")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNavItem"], {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNavLink"], null, "Settings"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNav"], {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_5__["FoxHeaderDropdownNotif"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_5__["FoxHeaderDropdownTasks"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_5__["FoxHeaderDropdownMssg"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_5__["FoxHeaderDropdown"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSubheader"], {
    className: "px-3 justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CBreadcrumbRouter"], {
    className: "border-0 c-subheader-nav m-0 px-0 px-md-3",
    routes: _routes__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-md-down-none mfe-2 c-subheader-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
    className: "c-subheader-nav-link",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cil-speech",
    alt: "Settings"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
    className: "c-subheader-nav-link",
    "aria-current": "page",
    to: "/dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cil-graph",
    alt: "Dashboard"
  }), "\xA0Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
    className: "c-subheader-nav-link",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cil-settings",
    alt: "Settings"
  }), "\xA0Settings"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FoxHeader);

/***/ }),

/***/ "./src/components/layout/FoxHeaderDropdown.js":
/*!****************************************************!*\
  !*** ./src/components/layout/FoxHeaderDropdown.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");




var TheHeaderDropdown = function TheHeaderDropdown() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdown"], {
    inNav: true,
    className: "c-header-nav-items mx-2",
    direction: "down"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownToggle"], {
    className: "c-header-nav-link",
    caret: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-user"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownMenu"], {
    className: "pt-0",
    placement: "bottom-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    header: true,
    tag: "div",
    color: "light",
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-bell",
    className: "mfe-2"
  }), "Updates", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    color: "info",
    className: "mfs-auto"
  }, "42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-envelope-open",
    className: "mfe-2"
  }), "Messages", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    color: "success",
    className: "mfs-auto"
  }, "42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-task",
    className: "mfe-2"
  }), "Tasks", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    color: "danger",
    className: "mfs-auto"
  }, "42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-comment-square",
    className: "mfe-2"
  }), "Comments", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    color: "warning",
    className: "mfs-auto"
  }, "42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    header: true,
    tag: "div",
    color: "light",
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-user",
    className: "mfe-2"
  }), "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-settings",
    className: "mfe-2"
  }), "Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-credit-card",
    className: "mfe-2"
  }), "Payments", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    color: "secondary",
    className: "mfs-auto"
  }, "42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-file",
    className: "mfe-2"
  }), "Projects", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    color: "primary",
    className: "mfs-auto"
  }, "42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    divider: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-lock-locked",
    className: "mfe-2"
  }), "Lock Account")));
};

/* harmony default export */ __webpack_exports__["default"] = (TheHeaderDropdown);

/***/ }),

/***/ "./src/components/layout/FoxHeaderDropdownMssg.js":
/*!********************************************************!*\
  !*** ./src/components/layout/FoxHeaderDropdownMssg.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");




var TheHeaderDropdownMssg = function TheHeaderDropdownMssg() {
  var itemsCount = 4;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdown"], {
    inNav: true,
    className: "c-header-nav-item mx-2",
    direction: "down"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownToggle"], {
    className: "c-header-nav-link",
    caret: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-envelope-open"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    shape: "pill",
    color: "info"
  }, itemsCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownMenu"], {
    className: "pt-0",
    placement: "bottom-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    header: true,
    tag: "div",
    color: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "You have ", itemsCount, " messages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3 mr-3 float-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CImg"], {
    src: 'avatars/7.jpg',
    className: "c-avatar-img",
    alt: "admin@bootstrapmaster.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-avatar-status bg-success"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "John Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted float-right mt-1"
  }, "Just now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-truncate font-weight-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa fa-exclamation text-danger"
  }), " Important message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small text-muted text-truncate"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3 mr-3 float-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CImg"], {
    src: 'avatars/6.jpg',
    className: "c-avatar-img",
    alt: "admin@bootstrapmaster.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-avatar-status bg-warning"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "Jane Dovve"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted float-right mt-1"
  }, "5 minutes ago")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-truncate font-weight-bold"
  }, "Lorem ipsum dolor sit amet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small text-muted text-truncate"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3 mr-3 float-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CImg"], {
    src: 'avatars/5.jpg',
    className: "c-avatar-img",
    alt: "admin@bootstrapmaster.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-avatar-status bg-danger"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "Janet Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted float-right mt-1"
  }, "1:52 PM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-truncate font-weight-bold"
  }, "Lorem ipsum dolor sit amet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small text-muted text-truncate"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3 mr-3 float-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CImg"], {
    src: 'avatars/4.jpg',
    className: "c-avatar-img",
    alt: "admin@bootstrapmaster.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-avatar-status bg-info"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "Joe Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted float-right mt-1"
  }, "4:03 AM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-truncate font-weight-bold"
  }, "Lorem ipsum dolor sit amet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small text-muted text-truncate"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    href: "#",
    className: "text-center border-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "View all messages"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TheHeaderDropdownMssg);

/***/ }),

/***/ "./src/components/layout/FoxHeaderDropdownNotif.js":
/*!*********************************************************!*\
  !*** ./src/components/layout/FoxHeaderDropdownNotif.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");




var TheHeaderDropdownNotif = function TheHeaderDropdownNotif() {
  var itemsCount = 5;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdown"], {
    inNav: true,
    className: "c-header-nav-item mx-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownToggle"], {
    className: "c-header-nav-link",
    caret: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-bell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    shape: "pill",
    color: "danger"
  }, itemsCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownMenu"], {
    placement: "bottom-end",
    className: "pt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    header: true,
    tag: "div",
    className: "text-center",
    color: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "You have ", itemsCount, " notifications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-user-follow",
    className: "mr-2 text-success"
  }), " New user registered"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-user-unfollow",
    className: "mr-2 text-danger"
  }), " User deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-chart-pie",
    className: "mr-2 text-info"
  }), " Sales report is ready"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-basket",
    className: "mr-2 text-primary"
  }), " New client"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-speedometer",
    className: "mr-2 text-warning"
  }), " Server overloaded"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    header: true,
    tag: "div",
    color: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Server")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-uppercase mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "CPU Usage"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "info",
    value: 25
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "348 Processes. 1/4 Cores.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-uppercase mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Memory Usage"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "warning",
    value: 70
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "11444GB/16384MB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-uppercase mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "SSD 1 Usage"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "danger",
    value: 90
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "243GB/256GB"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TheHeaderDropdownNotif);

/***/ }),

/***/ "./src/components/layout/FoxHeaderDropdownTasks.js":
/*!*********************************************************!*\
  !*** ./src/components/layout/FoxHeaderDropdownTasks.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");




var TheHeaderDropdownTasks = function TheHeaderDropdownTasks() {
  var itemsCount = 5;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdown"], {
    inNav: true,
    className: "c-header-nav-item mx-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownToggle"], {
    className: "c-header-nav-link",
    caret: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-list"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    shape: "pill",
    color: "warning"
  }, itemsCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownMenu"], {
    placement: "bottom-end",
    className: "pt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    header: true,
    tag: "div",
    className: "text-center",
    color: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "You have ", itemsCount, " pending tasks")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small mb-1"
  }, "Upgrade NPM & Bower ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "0%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "info",
    value: 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small mb-1"
  }, "ReactJS Version ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "25%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "danger",
    value: 25
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small mb-1"
  }, "VueJS Version ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "50%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "warning",
    value: 50
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small mb-1"
  }, "Add new layouts ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "75%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "info",
    value: 75
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small mb-1"
  }, "Angular 2 Cli Version ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "100%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "success",
    value: 100
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "text-center border-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "View all tasks"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TheHeaderDropdownTasks);

/***/ }),

/***/ "./src/components/layout/FoxSidebar.js":
/*!*********************************************!*\
  !*** ./src/components/layout/FoxSidebar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_nav */ "./src/components/layout/_nav.js");



 // sidebar nav config



var FoxSidebar = function FoxSidebar() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var show = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.sidebarShow;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebar"], {
    show: show,
    onShowChange: function onShowChange(val) {
      return dispatch({
        type: 'set',
        sidebarShow: val
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarBrand"], {
    className: "d-md-down-none",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "FOX")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarNav"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCreateElement"], {
    items: _nav__WEBPACK_IMPORTED_MODULE_4__["default"],
    components: {
      CSidebarNavDivider: _coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarNavDivider"],
      CSidebarNavDropdown: _coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarNavDropdown"],
      CSidebarNavItem: _coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarNavItem"],
      CSidebarNavTitle: _coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarNavTitle"]
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarMinimizer"], {
    className: "c-d-md-down-none"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FoxSidebar));

/***/ }),

/***/ "./src/components/layout/_nav.js":
/*!***************************************!*\
  !*** ./src/components/layout/_nav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  _tag: 'CSidebarNavItem',
  name: 'Dashboard',
  to: '/dashboard',
  icon: 'cil-speedometer'
}, {
  _tag: 'CSidebarNavTitle',
  _children: ['APPLICATION']
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Responsible Person',
  route: '/contractor/personal',
  icon: 'cil-user',
  _children: [{
    _tag: 'CSidebarNavItem',
    name: '1. Information',
    to: '/contractor/personal/info'
  }, {
    _tag: 'CSidebarNavItem',
    name: '2. Safety',
    to: '/contractor/personal/video'
  }, {
    _tag: 'CSidebarNavItem',
    name: '3. Quiz',
    to: '/contractor/personal/quiz'
  }]
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'General',
  route: '/contractor/general',
  icon: 'cis-factory',
  _children: [{
    _tag: 'CSidebarNavItem',
    name: '1. Risk Assessment',
    to: '/contractor/general/risk-assesment'
  }, {
    _tag: 'CSidebarNavItem',
    name: '2. Method of Statement',
    to: '/contractor/general/method-of-statement'
  }, {
    _tag: 'CSidebarNavItem',
    name: '3. Permit to Work',
    to: '/contractor/general/permit-to-work'
  }, {
    _tag: 'CSidebarNavItem',
    name: '4. Hazardous work permits',
    to: '/contractor/general/hazardous-work-permits'
  }, {
    _tag: 'CSidebarNavItem',
    name: '5. Workers',
    to: '/contractor/general/workers'
  }]
}, {
  _tag: 'CSidebarNavItem',
  name: 'Application status',
  to: '/contractor-application-status',
  icon: ''
}, {
  _tag: 'CSidebarNavTitle',
  _children: ['WORKS']
}, {
  _tag: 'CSidebarNavItem',
  name: 'Work status',
  to: '/contactor/work/status',
  icon: ''
}, {
  _tag: 'CSidebarNavItem',
  name: 'Workflow Notes',
  to: '/contactor/work/notes',
  icon: 'cil-bell'
}]);

/***/ }),

/***/ "./src/components/layout/index.js":
/*!****************************************!*\
  !*** ./src/components/layout/index.js ***!
  \****************************************/
/*! exports provided: FoxFooter, FoxHeader, FoxHeaderDropdown, FoxHeaderDropdownMssg, FoxHeaderDropdownNotif, FoxHeaderDropdownTasks, FoxSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FoxFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoxFooter */ "./src/components/layout/FoxFooter.js");
/* harmony import */ var _FoxFooter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FoxFooter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "FoxFooter", function() { return _FoxFooter__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _FoxHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoxHeader */ "./src/components/layout/FoxHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxHeader", function() { return _FoxHeader__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _FoxHeaderDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FoxHeaderDropdown */ "./src/components/layout/FoxHeaderDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxHeaderDropdown", function() { return _FoxHeaderDropdown__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FoxHeaderDropdownMssg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FoxHeaderDropdownMssg */ "./src/components/layout/FoxHeaderDropdownMssg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxHeaderDropdownMssg", function() { return _FoxHeaderDropdownMssg__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _FoxHeaderDropdownNotif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FoxHeaderDropdownNotif */ "./src/components/layout/FoxHeaderDropdownNotif.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxHeaderDropdownNotif", function() { return _FoxHeaderDropdownNotif__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _FoxHeaderDropdownTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FoxHeaderDropdownTasks */ "./src/components/layout/FoxHeaderDropdownTasks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxHeaderDropdownTasks", function() { return _FoxHeaderDropdownTasks__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _FoxSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FoxSidebar */ "./src/components/layout/FoxSidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxSidebar", function() { return _FoxSidebar__WEBPACK_IMPORTED_MODULE_6__["default"]; });

// import FoxContent from './TheContent'





 // import FoxLayout from './TheLayout'




/***/ }),

/***/ "./src/components/pages/Dashboard.js":
/*!*******************************************!*\
  !*** ./src/components/pages/Dashboard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout */ "./src/components/layout/index.js");
/* harmony import */ var _layout_FoxHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/FoxHeader */ "./src/components/layout/FoxHeader.js");
 // import { Link } from 'react-router-dom'





var Dashboard = function Dashboard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-app c-default-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_2__["FoxSidebar"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_FoxHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-body"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/components/routes.js":
/*!**********************************!*\
  !*** ./src/components/routes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
// const Tables = React.lazy(() => import('./views/base/tables/Tables'));
// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
// const Cards = React.lazy(() => import('./views/base/cards/Cards'));
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
// const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));
// const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
// const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
// const Navs = React.lazy(() => import('./views/base/navs/Navs'));
// const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
// const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
// const Switches = React.lazy(() => import('./views/base/switches/Switches'));
// const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
// const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
// const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
// const Charts = React.lazy(() => import('./views/charts/Charts'));
// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
// const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
// const Users = React.lazy(() => import('./views/users/Users'));
// const User = React.lazy(() => import('./views/users/User'));

var routes = [{
  path: '/',
  exact: true,
  name: 'Home'
} // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
// { path: '/theme', name: 'Theme', component: Colors, exact: true },
// { path: '/theme/colors', name: 'Colors', component: Colors },
// { path: '/theme/typography', name: 'Typography', component: Typography },
// { path: '/base', name: 'Base', component: Cards, exact: true },
// { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
// { path: '/base/cards', name: 'Cards', component: Cards },
// { path: '/base/carousels', name: 'Carousel', component: Carousels },
// { path: '/base/collapses', name: 'Collapse', component: Collapses },
// { path: '/base/forms', name: 'Forms', component: BasicForms },
// { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
// { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
// { path: '/base/navbars', name: 'Navbars', component: Navbars },
// { path: '/base/navs', name: 'Navs', component: Navs },
// { path: '/base/paginations', name: 'Paginations', component: Paginations },
// { path: '/base/popovers', name: 'Popovers', component: Popovers },
// { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
// { path: '/base/switches', name: 'Switches', component: Switches },
// { path: '/base/tables', name: 'Tables', component: Tables },
// { path: '/base/tabs', name: 'Tabs', component: Tabs },
// { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
// { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
// { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
// { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
// { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
// { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
// { path: '/charts', name: 'Charts', component: Charts },
// { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
// { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
// { path: '/icons/flags', name: 'Flags', component: Flags },
// { path: '/icons/brands', name: 'Brands', component: Brands },
// { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
// { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
// { path: '/notifications/badges', name: 'Badges', component: Badges },
// { path: '/notifications/modals', name: 'Modals', component: Modals },
// { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
// { path: '/widgets', name: 'Widgets', component: Widgets },
// { path: '/users', exact: true,  name: 'Users', component: Users },
// { path: '/users/:id', exact: true, name: 'User Details', component: User }
];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvRm94SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Gb3hIZWFkZXJEcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvRm94SGVhZGVyRHJvcGRvd25Nc3NnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Gb3hIZWFkZXJEcm9wZG93bk5vdGlmLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Gb3hIZWFkZXJEcm9wZG93blRhc2tzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Gb3hTaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9fbmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcm91dGVzLmpzIl0sIm5hbWVzIjpbIkZveEhlYWRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzaWRlYmFyU2hvdyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0b2dnbGVTaWRlYmFyIiwidmFsIiwiaW5jbHVkZXMiLCJ0eXBlIiwidG9nZ2xlU2lkZWJhck1vYmlsZSIsInJvdXRlcyIsIlRoZUhlYWRlckRyb3Bkb3duIiwiVGhlSGVhZGVyRHJvcGRvd25Nc3NnIiwiaXRlbXNDb3VudCIsIlRoZUhlYWRlckRyb3Bkb3duTm90aWYiLCJUaGVIZWFkZXJEcm9wZG93blRhc2tzIiwiRm94U2lkZWJhciIsInNob3ciLCJuYXZpZ2F0aW9uIiwiQ1NpZGViYXJOYXZEaXZpZGVyIiwiQ1NpZGViYXJOYXZEcm9wZG93biIsIkNTaWRlYmFyTmF2SXRlbSIsIkNTaWRlYmFyTmF2VGl0bGUiLCJSZWFjdCIsIm1lbW8iLCJfdGFnIiwibmFtZSIsInRvIiwiaWNvbiIsIl9jaGlsZHJlbiIsInJvdXRlIiwiRGFzaGJvYXJkIiwicGF0aCIsImV4YWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBY0E7O0FBQ0E7QUFFQTs7QUFPQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0YsV0FBVjtBQUFBLEdBQU4sQ0FBL0I7O0FBRUEsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLFFBQU1DLEdBQUcsR0FBRyxDQUFDLElBQUQsRUFBTyxZQUFQLEVBQXFCQyxRQUFyQixDQUE4QkwsV0FBOUIsSUFBNkMsS0FBN0MsR0FBcUQsWUFBakU7QUFDQUYsWUFBUSxDQUFDO0FBQUVRLFVBQUksRUFBRSxLQUFSO0FBQWVOLGlCQUFXLEVBQUVJO0FBQTVCLEtBQUQsQ0FBUjtBQUNILEdBSEQ7O0FBS0EsTUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQzlCLFFBQU1ILEdBQUcsR0FBRyxDQUFDLEtBQUQsRUFBUSxZQUFSLEVBQXNCQyxRQUF0QixDQUErQkwsV0FBL0IsSUFBOEMsSUFBOUMsR0FBcUQsWUFBakU7QUFDQUYsWUFBUSxDQUFDO0FBQUVRLFVBQUksRUFBRSxLQUFSO0FBQWVOLGlCQUFXLEVBQUVJO0FBQTVCLEtBQUQsQ0FBUjtBQUNILEdBSEQ7O0FBS0Esc0JBQ0ksMkRBQUMscURBQUQ7QUFBUyxpQkFBYTtBQUF0QixrQkFDSSwyREFBQyxzREFBRDtBQUNJLFlBQVEsTUFEWjtBQUVJLGFBQVMsRUFBQyxtQkFG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QUFBYUMsT0FBSyxFQUFFLElBQXBCO0FBQTBCUCxNQUFJLEVBQUU7QUFBaEMsQ0FEYSxDQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDYSxDQUFmO0FBMkNlaEIscUVBQWYsRSIsImZpbGUiOiIxLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge1xyXG4gICAgQ0NvbnRhaW5lcixcclxuICAgIENIZWFkZXIsXHJcbiAgICBDVG9nZ2xlcixcclxuICAgIENIZWFkZXJCcmFuZCxcclxuICAgIENIZWFkZXJOYXYsXHJcbiAgICBDSGVhZGVyTmF2SXRlbSxcclxuICAgIENIZWFkZXJOYXZMaW5rLFxyXG4gICAgQ1N1YmhlYWRlcixcclxuICAgIENCcmVhZGNydW1iUm91dGVyLFxyXG4gICAgQ0xpbmtcclxufSBmcm9tICdAY29yZXVpL3JlYWN0J1xyXG5pbXBvcnQgQ0ljb24gZnJvbSAnQGNvcmV1aS9pY29ucy1yZWFjdCdcclxuXHJcbi8vIHJvdXRlcyBjb25maWdcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMnXHJcblxyXG5pbXBvcnQge1xyXG4gICAgRm94SGVhZGVyRHJvcGRvd24sXHJcbiAgICBGb3hIZWFkZXJEcm9wZG93bk1zc2csXHJcbiAgICBGb3hIZWFkZXJEcm9wZG93bk5vdGlmLFxyXG4gICAgRm94SGVhZGVyRHJvcGRvd25UYXNrc1xyXG59IGZyb20gJy4vaW5kZXgnXHJcblxyXG5jb25zdCBGb3hIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IHNpZGViYXJTaG93ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2lkZWJhclNob3cpXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB2YWwgPSBbdHJ1ZSwgJ3Jlc3BvbnNpdmUnXS5pbmNsdWRlcyhzaWRlYmFyU2hvdykgPyBmYWxzZSA6ICdyZXNwb25zaXZlJ1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3NldCcsIHNpZGViYXJTaG93OiB2YWwgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGVTaWRlYmFyTW9iaWxlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IFtmYWxzZSwgJ3Jlc3BvbnNpdmUnXS5pbmNsdWRlcyhzaWRlYmFyU2hvdykgPyB0cnVlIDogJ3Jlc3BvbnNpdmUnXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnc2V0Jywgc2lkZWJhclNob3c6IHZhbCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENIZWFkZXIgd2l0aFN1YmhlYWRlcj5cclxuICAgICAgICAgICAgPENUb2dnbGVyXHJcbiAgICAgICAgICAgICAgICBpbkhlYWRlclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtbWQtMyBkLWxnLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlU2lkZWJhck1vYmlsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENUb2dnbGVyXHJcbiAgICAgICAgICAgICAgICBpbkhlYWRlclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMyBkLW1kLWRvd24tbm9uZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q0hlYWRlckJyYW5kIGNsYXNzTmFtZT1cIm14LWF1dG8gZC1sZy1ub25lXCIgdG89XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8Q0ljb24gbmFtZT1cImxvZ29cIiBoZWlnaHQ9XCI0OFwiIGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8L0NIZWFkZXJCcmFuZD5cclxuXHJcbiAgICAgICAgICAgIDxDSGVhZGVyTmF2IGNsYXNzTmFtZT1cImQtbWQtZG93bi1ub25lIG1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxDSGVhZGVyTmF2SXRlbSBjbGFzc05hbWU9XCJweC0zXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDSGVhZGVyTmF2TGluayB0bz1cIi9kYXNoYm9hcmRcIj5EYXNoYm9hcmQ8L0NIZWFkZXJOYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9DSGVhZGVyTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxDSGVhZGVyTmF2SXRlbSBjbGFzc05hbWU9XCJweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENIZWFkZXJOYXZMaW5rIHRvPVwiL3VzZXJzXCI+VXNlcnM8L0NIZWFkZXJOYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9DSGVhZGVyTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxDSGVhZGVyTmF2SXRlbSBjbGFzc05hbWU9XCJweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENIZWFkZXJOYXZMaW5rPlNldHRpbmdzPC9DSGVhZGVyTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvQ0hlYWRlck5hdkl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ0hlYWRlck5hdj5cclxuXHJcbiAgICAgICAgICAgIDxDSGVhZGVyTmF2IGNsYXNzTmFtZT1cInB4LTNcIj5cclxuICAgICAgICAgICAgICAgIDxGb3hIZWFkZXJEcm9wZG93bk5vdGlmIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm94SGVhZGVyRHJvcGRvd25UYXNrcyAvPlxyXG4gICAgICAgICAgICAgICAgPEZveEhlYWRlckRyb3Bkb3duTXNzZyAvPlxyXG4gICAgICAgICAgICAgICAgPEZveEhlYWRlckRyb3Bkb3duIC8+XHJcbiAgICAgICAgICAgIDwvQ0hlYWRlck5hdj5cclxuXHJcbiAgICAgICAgICAgIDxDU3ViaGVhZGVyIGNsYXNzTmFtZT1cInB4LTMganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxDQnJlYWRjcnVtYlJvdXRlclxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0wIGMtc3ViaGVhZGVyLW5hdiBtLTAgcHgtMCBweC1tZC0zXCJcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXM9e3JvdXRlc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbWQtZG93bi1ub25lIG1mZS0yIGMtc3ViaGVhZGVyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDTGluayBjbGFzc05hbWU9XCJjLXN1YmhlYWRlci1uYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDSWNvbiBuYW1lPVwiY2lsLXNwZWVjaFwiIGFsdD1cIlNldHRpbmdzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjLXN1YmhlYWRlci1uYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY3VycmVudD1cInBhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9kYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENJY29uIG5hbWU9XCJjaWwtZ3JhcGhcIiBhbHQ9XCJEYXNoYm9hcmRcIiAvPiZuYnNwO0Rhc2hib2FyZFxyXG4gICAgICAgICAgICA8L0NMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDTGluayBjbGFzc05hbWU9XCJjLXN1YmhlYWRlci1uYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDSWNvbiBuYW1lPVwiY2lsLXNldHRpbmdzXCIgYWx0PVwiU2V0dGluZ3NcIiAvPiZuYnNwO1NldHRpbmdzXHJcbiAgICAgICAgICAgIDwvQ0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DU3ViaGVhZGVyPlxyXG4gICAgICAgIDwvQ0hlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm94SGVhZGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIENCYWRnZSxcbiAgQ0Ryb3Bkb3duLFxuICBDRHJvcGRvd25JdGVtLFxuICBDRHJvcGRvd25NZW51LFxuICBDRHJvcGRvd25Ub2dnbGUsXG59IGZyb20gJ0Bjb3JldWkvcmVhY3QnXG5pbXBvcnQgQ0ljb24gZnJvbSAnQGNvcmV1aS9pY29ucy1yZWFjdCdcblxuY29uc3QgVGhlSGVhZGVyRHJvcGRvd24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENEcm9wZG93blxuICAgICAgaW5OYXZcbiAgICAgIGNsYXNzTmFtZT1cImMtaGVhZGVyLW5hdi1pdGVtcyBteC0yXCJcbiAgICAgIGRpcmVjdGlvbj1cImRvd25cIlxuICAgID5cbiAgICAgIDxDRHJvcGRvd25Ub2dnbGUgY2xhc3NOYW1lPVwiYy1oZWFkZXItbmF2LWxpbmtcIiBjYXJldD17ZmFsc2V9PlxuICAgICAgICA8Q0ljb24gbmFtZT1cImNpbC11c2VyXCIgLz5cbiAgICAgIDwvQ0Ryb3Bkb3duVG9nZ2xlPlxuICAgICAgPENEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwicHQtMFwiIHBsYWNlbWVudD1cImJvdHRvbS1lbmRcIj5cbiAgICAgICAgPENEcm9wZG93bkl0ZW1cbiAgICAgICAgICBoZWFkZXJcbiAgICAgICAgICB0YWc9XCJkaXZcIlxuICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdHJvbmc+QWNjb3VudDwvc3Ryb25nPlxuICAgICAgICA8L0NEcm9wZG93bkl0ZW0+XG4gICAgICAgIDxDRHJvcGRvd25JdGVtPlxuICAgICAgICAgIDxDSWNvbiBuYW1lPVwiY2lsLWJlbGxcIiBjbGFzc05hbWU9XCJtZmUtMlwiIC8+XG4gICAgICAgICAgVXBkYXRlc1xuICAgICAgICAgIDxDQmFkZ2UgY29sb3I9XCJpbmZvXCIgY2xhc3NOYW1lPVwibWZzLWF1dG9cIj40MjwvQ0JhZGdlPlxuICAgICAgICA8L0NEcm9wZG93bkl0ZW0+XG4gICAgICAgIDxDRHJvcGRvd25JdGVtPlxuICAgICAgICAgIDxDSWNvbiBuYW1lPVwiY2lsLWVudmVsb3BlLW9wZW5cIiBjbGFzc05hbWU9XCJtZmUtMlwiIC8+XG4gICAgICAgICAgTWVzc2FnZXNcbiAgICAgICAgICA8Q0JhZGdlIGNvbG9yPVwic3VjY2Vzc1wiIGNsYXNzTmFtZT1cIm1mcy1hdXRvXCI+NDI8L0NCYWRnZT5cbiAgICAgICAgPC9DRHJvcGRvd25JdGVtPlxuICAgICAgICA8Q0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICA8Q0ljb24gbmFtZT1cImNpbC10YXNrXCIgY2xhc3NOYW1lPVwibWZlLTJcIiAvPlxuICAgICAgICAgIFRhc2tzXG4gICAgICAgICAgPENCYWRnZSBjb2xvcj1cImRhbmdlclwiIGNsYXNzTmFtZT1cIm1mcy1hdXRvXCI+NDI8L0NCYWRnZT5cbiAgICAgICAgPC9DRHJvcGRvd25JdGVtPlxuICAgICAgICA8Q0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICA8Q0ljb24gbmFtZT1cImNpbC1jb21tZW50LXNxdWFyZVwiIGNsYXNzTmFtZT1cIm1mZS0yXCIgLz5cbiAgICAgICAgICBDb21tZW50c1xuICAgICAgICAgIDxDQmFkZ2UgY29sb3I9XCJ3YXJuaW5nXCIgY2xhc3NOYW1lPVwibWZzLWF1dG9cIj40MjwvQ0JhZGdlPlxuICAgICAgICA8L0NEcm9wZG93bkl0ZW0+XG4gICAgICAgIDxDRHJvcGRvd25JdGVtXG4gICAgICAgICAgaGVhZGVyXG4gICAgICAgICAgdGFnPVwiZGl2XCJcbiAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Ryb25nPlNldHRpbmdzPC9zdHJvbmc+XG4gICAgICAgIDwvQ0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgPENEcm9wZG93bkl0ZW0+XG4gICAgICAgICAgPENJY29uIG5hbWU9XCJjaWwtdXNlclwiIGNsYXNzTmFtZT1cIm1mZS0yXCIgLz5Qcm9maWxlXG4gICAgICAgIDwvQ0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgPENEcm9wZG93bkl0ZW0+XG4gICAgICAgICAgPENJY29uIG5hbWU9XCJjaWwtc2V0dGluZ3NcIiBjbGFzc05hbWU9XCJtZmUtMlwiIC8+XG4gICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgPC9DRHJvcGRvd25JdGVtPlxuICAgICAgICA8Q0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICA8Q0ljb24gbmFtZT1cImNpbC1jcmVkaXQtY2FyZFwiIGNsYXNzTmFtZT1cIm1mZS0yXCIgLz5cbiAgICAgICAgICBQYXltZW50c1xuICAgICAgICAgIDxDQmFkZ2UgY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9XCJtZnMtYXV0b1wiPjQyPC9DQmFkZ2U+XG4gICAgICAgIDwvQ0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgPENEcm9wZG93bkl0ZW0+XG4gICAgICAgICAgPENJY29uIG5hbWU9XCJjaWwtZmlsZVwiIGNsYXNzTmFtZT1cIm1mZS0yXCIgLz5cbiAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICAgIDxDQmFkZ2UgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwibWZzLWF1dG9cIj40MjwvQ0JhZGdlPlxuICAgICAgICA8L0NEcm9wZG93bkl0ZW0+XG4gICAgICAgIDxDRHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgPENEcm9wZG93bkl0ZW0+XG4gICAgICAgICAgPENJY29uIG5hbWU9XCJjaWwtbG9jay1sb2NrZWRcIiBjbGFzc05hbWU9XCJtZmUtMlwiIC8+XG4gICAgICAgICAgTG9jayBBY2NvdW50XG4gICAgICAgIDwvQ0Ryb3Bkb3duSXRlbT5cbiAgICAgIDwvQ0Ryb3Bkb3duTWVudT5cbiAgICA8L0NEcm9wZG93bj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVIZWFkZXJEcm9wZG93blxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgQ0JhZGdlLFxuICBDRHJvcGRvd24sXG4gIENEcm9wZG93bkl0ZW0sXG4gIENEcm9wZG93bk1lbnUsXG4gIENEcm9wZG93blRvZ2dsZSxcbiAgQ0ltZ1xufSBmcm9tICdAY29yZXVpL3JlYWN0J1xuaW1wb3J0IENJY29uIGZyb20gJ0Bjb3JldWkvaWNvbnMtcmVhY3QnXG5cbmNvbnN0IFRoZUhlYWRlckRyb3Bkb3duTXNzZyA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXNDb3VudCA9IDRcbiAgcmV0dXJuIChcbiAgICA8Q0Ryb3Bkb3duXG4gICAgICBpbk5hdlxuICAgICAgY2xhc3NOYW1lPVwiYy1oZWFkZXItbmF2LWl0ZW0gbXgtMlwiXG4gICAgICBkaXJlY3Rpb249XCJkb3duXCJcbiAgICA+XG4gICAgICA8Q0Ryb3Bkb3duVG9nZ2xlIGNsYXNzTmFtZT1cImMtaGVhZGVyLW5hdi1saW5rXCIgY2FyZXQ9e2ZhbHNlfT5cbiAgICAgICAgPENJY29uIG5hbWU9XCJjaWwtZW52ZWxvcGUtb3BlblwiIC8+PENCYWRnZSBzaGFwZT1cInBpbGxcIiBjb2xvcj1cImluZm9cIj57aXRlbXNDb3VudH08L0NCYWRnZT5cbiAgICAgIDwvQ0Ryb3Bkb3duVG9nZ2xlPlxuICAgICAgPENEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwicHQtMFwiIHBsYWNlbWVudD1cImJvdHRvbS1lbmRcIj5cbiAgICAgICAgPENEcm9wZG93bkl0ZW1cbiAgICAgICAgICBoZWFkZXJcbiAgICAgICAgICB0YWc9XCJkaXZcIlxuICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0cm9uZz5Zb3UgaGF2ZSB7aXRlbXNDb3VudH0gbWVzc2FnZXM8L3N0cm9uZz5cbiAgICAgICAgPC9DRHJvcGRvd25JdGVtPlxuICAgICAgICA8Q0Ryb3Bkb3duSXRlbSBocmVmPVwiI1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIG1yLTMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgPENJbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17J2F2YXRhcnMvNy5qcGcnfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYy1hdmF0YXItaW1nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImFkbWluQGJvb3RzdHJhcG1hc3Rlci5jb21cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYy1hdmF0YXItc3RhdHVzIGJnLXN1Y2Nlc3NcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkpvaG4gRG9lPC9zbWFsbD5cbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgZmxvYXQtcmlnaHQgbXQtMVwiPkp1c3Qgbm93PC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtZXhjbGFtYXRpb24gdGV4dC1kYW5nZXJcIj48L3NwYW4+IEltcG9ydGFudCBtZXNzYWdlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwgdGV4dC1tdXRlZCB0ZXh0LXRydW5jYXRlXCI+XG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudC4uLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ0Ryb3Bkb3duSXRlbT5cblxuICAgICAgICA8Q0Ryb3Bkb3duSXRlbSBocmVmPVwiI1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIG1yLTMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgPENJbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17J2F2YXRhcnMvNi5qcGcnfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYy1hdmF0YXItaW1nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImFkbWluQGJvb3RzdHJhcG1hc3Rlci5jb21cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYy1hdmF0YXItc3RhdHVzIGJnLXdhcm5pbmdcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkphbmUgRG92dmU8L3NtYWxsPlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmbG9hdC1yaWdodCBtdC0xXCI+NSBtaW51dGVzIGFnbzwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSBmb250LXdlaWdodC1ib2xkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwgdGV4dC1tdXRlZCB0ZXh0LXRydW5jYXRlXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50Li4uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DRHJvcGRvd25JdGVtPlxuXG4gICAgICAgIDxDRHJvcGRvd25JdGVtIGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgbXItMyBmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1hdmF0YXJcIj5cbiAgICAgICAgICAgICAgICA8Q0ltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXsnYXZhdGFycy81LmpwZyd9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjLWF2YXRhci1pbWdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiYWRtaW5AYm9vdHN0cmFwbWFzdGVyLmNvbVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjLWF2YXRhci1zdGF0dXMgYmctZGFuZ2VyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5KYW5ldCBEb2U8L3NtYWxsPlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmbG9hdC1yaWdodCBtdC0xXCI+MTo1MiBQTTwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSBmb250LXdlaWdodC1ib2xkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwgdGV4dC1tdXRlZCB0ZXh0LXRydW5jYXRlXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50Li4uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DRHJvcGRvd25JdGVtPlxuXG4gICAgICAgIDxDRHJvcGRvd25JdGVtIGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgbXItMyBmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1hdmF0YXJcIj5cbiAgICAgICAgICAgICAgICA8Q0ltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXsnYXZhdGFycy80LmpwZyd9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjLWF2YXRhci1pbWdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiYWRtaW5AYm9vdHN0cmFwbWFzdGVyLmNvbVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjLWF2YXRhci1zdGF0dXMgYmctaW5mb1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+Sm9lIERvZTwvc21hbGw+XG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZsb2F0LXJpZ2h0IG10LTFcIj40OjAzIEFNPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIGZvbnQtd2VpZ2h0LWJvbGRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCB0ZXh0LW11dGVkIHRleHQtdHJ1bmNhdGVcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQuLi5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NEcm9wZG93bkl0ZW0+XG4gICAgICAgIDxDRHJvcGRvd25JdGVtIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYm9yZGVyLXRvcFwiPjxzdHJvbmc+VmlldyBhbGwgbWVzc2FnZXM8L3N0cm9uZz48L0NEcm9wZG93bkl0ZW0+XG4gICAgICA8L0NEcm9wZG93bk1lbnU+XG4gICAgPC9DRHJvcGRvd24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlSGVhZGVyRHJvcGRvd25Nc3NnIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgQ0JhZGdlLFxuICBDRHJvcGRvd24sXG4gIENEcm9wZG93bkl0ZW0sXG4gIENEcm9wZG93bk1lbnUsXG4gIENEcm9wZG93blRvZ2dsZSxcbiAgQ1Byb2dyZXNzXG59IGZyb20gJ0Bjb3JldWkvcmVhY3QnXG5pbXBvcnQgQ0ljb24gZnJvbSAnQGNvcmV1aS9pY29ucy1yZWFjdCdcblxuY29uc3QgVGhlSGVhZGVyRHJvcGRvd25Ob3RpZiA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXNDb3VudCA9IDVcbiAgcmV0dXJuIChcbiAgICA8Q0Ryb3Bkb3duXG4gICAgICBpbk5hdlxuICAgICAgY2xhc3NOYW1lPVwiYy1oZWFkZXItbmF2LWl0ZW0gbXgtMlwiXG4gICAgPlxuICAgICAgPENEcm9wZG93blRvZ2dsZSBjbGFzc05hbWU9XCJjLWhlYWRlci1uYXYtbGlua1wiIGNhcmV0PXtmYWxzZX0+XG4gICAgICAgIDxDSWNvbiBuYW1lPVwiY2lsLWJlbGxcIi8+XG4gICAgICAgIDxDQmFkZ2Ugc2hhcGU9XCJwaWxsXCIgY29sb3I9XCJkYW5nZXJcIj57aXRlbXNDb3VudH08L0NCYWRnZT5cbiAgICAgIDwvQ0Ryb3Bkb3duVG9nZ2xlPlxuICAgICAgPENEcm9wZG93bk1lbnUgIHBsYWNlbWVudD1cImJvdHRvbS1lbmRcIiBjbGFzc05hbWU9XCJwdC0wXCI+XG4gICAgICAgIDxDRHJvcGRvd25JdGVtXG4gICAgICAgICAgaGVhZGVyXG4gICAgICAgICAgdGFnPVwiZGl2XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Ryb25nPllvdSBoYXZlIHtpdGVtc0NvdW50fSBub3RpZmljYXRpb25zPC9zdHJvbmc+XG4gICAgICAgIDwvQ0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgPENEcm9wZG93bkl0ZW0+PENJY29uIG5hbWU9XCJjaWwtdXNlci1mb2xsb3dcIiBjbGFzc05hbWU9XCJtci0yIHRleHQtc3VjY2Vzc1wiIC8+IE5ldyB1c2VyIHJlZ2lzdGVyZWQ8L0NEcm9wZG93bkl0ZW0+XG4gICAgICAgIDxDRHJvcGRvd25JdGVtPjxDSWNvbiBuYW1lPVwiY2lsLXVzZXItdW5mb2xsb3dcIiBjbGFzc05hbWU9XCJtci0yIHRleHQtZGFuZ2VyXCIgLz4gVXNlciBkZWxldGVkPC9DRHJvcGRvd25JdGVtPlxuICAgICAgICA8Q0Ryb3Bkb3duSXRlbT48Q0ljb24gbmFtZT1cImNpbC1jaGFydC1waWVcIiBjbGFzc05hbWU9XCJtci0yIHRleHQtaW5mb1wiIC8+IFNhbGVzIHJlcG9ydCBpcyByZWFkeTwvQ0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgPENEcm9wZG93bkl0ZW0+PENJY29uIG5hbWU9XCJjaWwtYmFza2V0XCIgY2xhc3NOYW1lPVwibXItMiB0ZXh0LXByaW1hcnlcIiAvPiBOZXcgY2xpZW50PC9DRHJvcGRvd25JdGVtPlxuICAgICAgICA8Q0Ryb3Bkb3duSXRlbT48Q0ljb24gbmFtZT1cImNpbC1zcGVlZG9tZXRlclwiIGNsYXNzTmFtZT1cIm1yLTIgdGV4dC13YXJuaW5nXCIgLz4gU2VydmVyIG92ZXJsb2FkZWQ8L0NEcm9wZG93bkl0ZW0+XG4gICAgICAgIDxDRHJvcGRvd25JdGVtXG4gICAgICAgICAgaGVhZGVyXG4gICAgICAgICAgdGFnPVwiZGl2XCJcbiAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdHJvbmc+U2VydmVyPC9zdHJvbmc+XG4gICAgICAgIDwvQ0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgPENEcm9wZG93bkl0ZW0gY2xhc3NOYW1lPVwiZC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgbWItMVwiPlxuICAgICAgICAgICAgPHNtYWxsPjxiPkNQVSBVc2FnZTwvYj48L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDUHJvZ3Jlc3Mgc2l6ZT1cInhzXCIgY29sb3I9XCJpbmZvXCIgdmFsdWU9ezI1fSAvPlxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+MzQ4IFByb2Nlc3Nlcy4gMS80IENvcmVzLjwvc21hbGw+XG4gICAgICAgIDwvQ0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgPENEcm9wZG93bkl0ZW0gY2xhc3NOYW1lPVwiZC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgbWItMVwiPlxuICAgICAgICAgICAgPHNtYWxsPjxiPk1lbW9yeSBVc2FnZTwvYj48L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDUHJvZ3Jlc3Mgc2l6ZT1cInhzXCIgY29sb3I9XCJ3YXJuaW5nXCIgdmFsdWU9ezcwfSAvPlxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+MTE0NDRHQi8xNjM4NE1CPC9zbWFsbD5cbiAgICAgICAgPC9DRHJvcGRvd25JdGVtPlxuICAgICAgICA8Q0Ryb3Bkb3duSXRlbSBjbGFzc05hbWU9XCJkLWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSBtYi0xXCI+XG4gICAgICAgICAgICA8c21hbGw+PGI+U1NEIDEgVXNhZ2U8L2I+PC9zbWFsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Q1Byb2dyZXNzIHNpemU9XCJ4c1wiIGNvbG9yPVwiZGFuZ2VyXCIgdmFsdWU9ezkwfSAvPlxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+MjQzR0IvMjU2R0I8L3NtYWxsPlxuICAgICAgICA8L0NEcm9wZG93bkl0ZW0+XG4gICAgICA8L0NEcm9wZG93bk1lbnU+XG4gICAgPC9DRHJvcGRvd24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlSGVhZGVyRHJvcGRvd25Ob3RpZiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIENCYWRnZSxcbiAgQ0Ryb3Bkb3duLFxuICBDRHJvcGRvd25JdGVtLFxuICBDRHJvcGRvd25NZW51LFxuICBDRHJvcGRvd25Ub2dnbGUsXG4gIENQcm9ncmVzc1xufSBmcm9tICdAY29yZXVpL3JlYWN0J1xuaW1wb3J0IENJY29uIGZyb20gJ0Bjb3JldWkvaWNvbnMtcmVhY3QnXG5cbmNvbnN0IFRoZUhlYWRlckRyb3Bkb3duVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zQ291bnQgPSA1XG4gIHJldHVybiAoXG4gICAgPENEcm9wZG93blxuICAgICAgaW5OYXZcbiAgICAgIGNsYXNzTmFtZT1cImMtaGVhZGVyLW5hdi1pdGVtIG14LTJcIlxuICAgID5cbiAgICAgIDxDRHJvcGRvd25Ub2dnbGUgY2xhc3NOYW1lPVwiYy1oZWFkZXItbmF2LWxpbmtcIiBjYXJldD17ZmFsc2V9PlxuICAgICAgICA8Q0ljb24gbmFtZT1cImNpbC1saXN0XCIgLz5cbiAgICAgICAgPENCYWRnZSBzaGFwZT1cInBpbGxcIiBjb2xvcj1cIndhcm5pbmdcIj57aXRlbXNDb3VudH08L0NCYWRnZT5cbiAgICAgIDwvQ0Ryb3Bkb3duVG9nZ2xlPlxuICAgICAgPENEcm9wZG93bk1lbnUgcGxhY2VtZW50PVwiYm90dG9tLWVuZFwiIGNsYXNzTmFtZT1cInB0LTBcIj5cbiAgICAgICAgPENEcm9wZG93bkl0ZW1cbiAgICAgICAgICBoZWFkZXJcbiAgICAgICAgICB0YWc9XCJkaXZcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcbiAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdHJvbmc+WW91IGhhdmUge2l0ZW1zQ291bnR9IHBlbmRpbmcgdGFza3M8L3N0cm9uZz5cbiAgICAgICAgPC9DRHJvcGRvd25JdGVtPlxuICAgICAgICA8Q0Ryb3Bkb3duSXRlbSBjbGFzc05hbWU9XCJkLWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCBtYi0xXCI+VXBncmFkZSBOUE0gJmFtcDsgQm93ZXIgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+PHN0cm9uZz4wJTwvc3Ryb25nPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8Q1Byb2dyZXNzIHNpemU9XCJ4c1wiIGNvbG9yPVwiaW5mb1wiIHZhbHVlPXswfSAvPlxuICAgICAgICA8L0NEcm9wZG93bkl0ZW0+XG4gICAgICAgIDxDRHJvcGRvd25JdGVtIGNsYXNzTmFtZT1cImQtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsIG1iLTFcIj5SZWFjdEpTIFZlcnNpb24gPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj48c3Ryb25nPjI1JTwvc3Ryb25nPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8Q1Byb2dyZXNzIHNpemU9XCJ4c1wiIGNvbG9yPVwiZGFuZ2VyXCIgdmFsdWU9ezI1fSAvPlxuICAgICAgICA8L0NEcm9wZG93bkl0ZW0+XG4gICAgICAgIDxDRHJvcGRvd25JdGVtIGNsYXNzTmFtZT1cImQtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsIG1iLTFcIj5WdWVKUyBWZXJzaW9uIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+PHN0cm9uZz41MCU8L3N0cm9uZz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPENQcm9ncmVzcyBzaXplPVwieHNcIiBjb2xvcj1cIndhcm5pbmdcIiB2YWx1ZT17NTB9IC8+XG4gICAgICAgIDwvQ0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgPENEcm9wZG93bkl0ZW0gY2xhc3NOYW1lPVwiZC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwgbWItMVwiPkFkZCBuZXcgbGF5b3V0cyA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPjxzdHJvbmc+NzUlPC9zdHJvbmc+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDxDUHJvZ3Jlc3Mgc2l6ZT1cInhzXCIgY29sb3I9XCJpbmZvXCIgdmFsdWU9ezc1fSAvPlxuICAgICAgICA8L0NEcm9wZG93bkl0ZW0+XG4gICAgICAgIDxDRHJvcGRvd25JdGVtIGNsYXNzTmFtZT1cImQtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsIG1iLTFcIj5Bbmd1bGFyIDIgQ2xpIFZlcnNpb24gPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj48c3Ryb25nPjEwMCU8L3N0cm9uZz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPENQcm9ncmVzcyBzaXplPVwieHNcIiBjb2xvcj1cInN1Y2Nlc3NcIiB2YWx1ZT17MTAwfSAvPlxuICAgICAgICA8L0NEcm9wZG93bkl0ZW0+XG4gICAgICAgIDxDRHJvcGRvd25JdGVtIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJvcmRlci10b3BcIj48c3Ryb25nPlZpZXcgYWxsIHRhc2tzPC9zdHJvbmc+PC9DRHJvcGRvd25JdGVtPlxuICAgICAgPC9DRHJvcGRvd25NZW51PlxuICAgIDwvQ0Ryb3Bkb3duPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZUhlYWRlckRyb3Bkb3duVGFza3MiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge1xyXG4gICAgQ0NyZWF0ZUVsZW1lbnQsXHJcbiAgICBDU2lkZWJhcixcclxuICAgIENTaWRlYmFyQnJhbmQsXHJcbiAgICBDU2lkZWJhck5hdixcclxuICAgIENTaWRlYmFyTmF2RGl2aWRlcixcclxuICAgIENTaWRlYmFyTmF2VGl0bGUsXHJcbiAgICBDU2lkZWJhck1pbmltaXplcixcclxuICAgIENTaWRlYmFyTmF2RHJvcGRvd24sXHJcbiAgICBDU2lkZWJhck5hdkl0ZW0sXHJcbn0gZnJvbSAnQGNvcmV1aS9yZWFjdCdcclxuXHJcbmltcG9ydCBDSWNvbiBmcm9tICdAY29yZXVpL2ljb25zLXJlYWN0J1xyXG5cclxuLy8gc2lkZWJhciBuYXYgY29uZmlnXHJcbmltcG9ydCBuYXZpZ2F0aW9uIGZyb20gJy4vX25hdidcclxuXHJcbmNvbnN0IEZveFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IHNob3cgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zaWRlYmFyU2hvdylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDU2lkZWJhclxyXG4gICAgICAgICAgICBzaG93PXtzaG93fVxyXG4gICAgICAgICAgICBvblNob3dDaGFuZ2U9eyh2YWwpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3NldCcsIHNpZGViYXJTaG93OiB2YWwgfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q1NpZGViYXJCcmFuZCBjbGFzc05hbWU9XCJkLW1kLWRvd24tbm9uZVwiIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkZPWDwvaDI+XHJcbiAgICAgICAgICAgIDwvQ1NpZGViYXJCcmFuZD5cclxuICAgICAgICAgICAgPENTaWRlYmFyTmF2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxDQ3JlYXRlRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtuYXZpZ2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ1NpZGViYXJOYXZEaXZpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDU2lkZWJhck5hdkRyb3Bkb3duLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDU2lkZWJhck5hdkl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENTaWRlYmFyTmF2VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DU2lkZWJhck5hdj5cclxuICAgICAgICAgICAgPENTaWRlYmFyTWluaW1pemVyIGNsYXNzTmFtZT1cImMtZC1tZC1kb3duLW5vbmVcIiAvPlxyXG4gICAgICAgIDwvQ1NpZGViYXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRm94U2lkZWJhcikiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgX3RhZzogJ0NTaWRlYmFyTmF2SXRlbScsXHJcbiAgICBuYW1lOiAnRGFzaGJvYXJkJyxcclxuICAgIHRvOiAnL2Rhc2hib2FyZCcsXHJcbiAgICBpY29uOiAnY2lsLXNwZWVkb21ldGVyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIF90YWc6ICdDU2lkZWJhck5hdlRpdGxlJyxcclxuICAgIF9jaGlsZHJlbjogWydBUFBMSUNBVElPTiddXHJcbiAgfSxcclxuICB7XHJcbiAgICBfdGFnOiAnQ1NpZGViYXJOYXZEcm9wZG93bicsXHJcbiAgICBuYW1lOiAnUmVzcG9uc2libGUgUGVyc29uJyxcclxuICAgIHJvdXRlOiAnL2NvbnRyYWN0b3IvcGVyc29uYWwnLFxyXG4gICAgaWNvbjogJ2NpbC11c2VyJyxcclxuICAgIF9jaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgX3RhZzogJ0NTaWRlYmFyTmF2SXRlbScsXHJcbiAgICAgICAgbmFtZTogJzEuIEluZm9ybWF0aW9uJyxcclxuICAgICAgICB0bzogJy9jb250cmFjdG9yL3BlcnNvbmFsL2luZm8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgX3RhZzogJ0NTaWRlYmFyTmF2SXRlbScsXHJcbiAgICAgICAgbmFtZTogJzIuIFNhZmV0eScsXHJcbiAgICAgICAgdG86ICcvY29udHJhY3Rvci9wZXJzb25hbC92aWRlbycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBfdGFnOiAnQ1NpZGViYXJOYXZJdGVtJyxcclxuICAgICAgICBuYW1lOiAnMy4gUXVpeicsXHJcbiAgICAgICAgdG86ICcvY29udHJhY3Rvci9wZXJzb25hbC9xdWl6JyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBfdGFnOiAnQ1NpZGViYXJOYXZEcm9wZG93bicsXHJcbiAgICBuYW1lOiAnR2VuZXJhbCcsXHJcbiAgICByb3V0ZTogJy9jb250cmFjdG9yL2dlbmVyYWwnLFxyXG4gICAgaWNvbjogJ2Npcy1mYWN0b3J5JyxcclxuICAgIF9jaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgX3RhZzogJ0NTaWRlYmFyTmF2SXRlbScsXHJcbiAgICAgICAgbmFtZTogJzEuIFJpc2sgQXNzZXNzbWVudCcsXHJcbiAgICAgICAgdG86ICcvY29udHJhY3Rvci9nZW5lcmFsL3Jpc2stYXNzZXNtZW50JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIF90YWc6ICdDU2lkZWJhck5hdkl0ZW0nLFxyXG4gICAgICAgIG5hbWU6ICcyLiBNZXRob2Qgb2YgU3RhdGVtZW50JyxcclxuICAgICAgICB0bzogJy9jb250cmFjdG9yL2dlbmVyYWwvbWV0aG9kLW9mLXN0YXRlbWVudCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBfdGFnOiAnQ1NpZGViYXJOYXZJdGVtJyxcclxuICAgICAgICBuYW1lOiAnMy4gUGVybWl0IHRvIFdvcmsnLFxyXG4gICAgICAgIHRvOiAnL2NvbnRyYWN0b3IvZ2VuZXJhbC9wZXJtaXQtdG8td29yaycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBfdGFnOiAnQ1NpZGViYXJOYXZJdGVtJyxcclxuICAgICAgICBuYW1lOiAnNC4gSGF6YXJkb3VzIHdvcmsgcGVybWl0cycsXHJcbiAgICAgICAgdG86ICcvY29udHJhY3Rvci9nZW5lcmFsL2hhemFyZG91cy13b3JrLXBlcm1pdHMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgX3RhZzogJ0NTaWRlYmFyTmF2SXRlbScsXHJcbiAgICAgICAgbmFtZTogJzUuIFdvcmtlcnMnLFxyXG4gICAgICAgIHRvOiAnL2NvbnRyYWN0b3IvZ2VuZXJhbC93b3JrZXJzJyxcclxuICAgICAgfVxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIF90YWc6ICdDU2lkZWJhck5hdkl0ZW0nLFxyXG4gICAgbmFtZTogJ0FwcGxpY2F0aW9uIHN0YXR1cycsXHJcbiAgICB0bzogJy9jb250cmFjdG9yLWFwcGxpY2F0aW9uLXN0YXR1cycsXHJcbiAgICBpY29uOiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIF90YWc6ICdDU2lkZWJhck5hdlRpdGxlJyxcclxuICAgIF9jaGlsZHJlbjogWydXT1JLUyddXHJcbiAgfSxcclxuICB7XHJcbiAgICBfdGFnOiAnQ1NpZGViYXJOYXZJdGVtJyxcclxuICAgIG5hbWU6ICdXb3JrIHN0YXR1cycsXHJcbiAgICB0bzogJy9jb250YWN0b3Ivd29yay9zdGF0dXMnLFxyXG4gICAgaWNvbjogJycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBfdGFnOiAnQ1NpZGViYXJOYXZJdGVtJyxcclxuICAgIG5hbWU6ICdXb3JrZmxvdyBOb3RlcycsXHJcbiAgICB0bzogJy9jb250YWN0b3Ivd29yay9ub3RlcycsXHJcbiAgICBpY29uOiAnY2lsLWJlbGwnLFxyXG4gIH0sXHJcbl1cclxuXHJcbiIsIi8vIGltcG9ydCBGb3hDb250ZW50IGZyb20gJy4vVGhlQ29udGVudCdcbmltcG9ydCBGb3hGb290ZXIgZnJvbSAnLi9Gb3hGb290ZXInXG5pbXBvcnQgRm94SGVhZGVyIGZyb20gJy4vRm94SGVhZGVyJ1xuaW1wb3J0IEZveEhlYWRlckRyb3Bkb3duIGZyb20gJy4vRm94SGVhZGVyRHJvcGRvd24nXG5pbXBvcnQgRm94SGVhZGVyRHJvcGRvd25Nc3NnIGZyb20gJy4vRm94SGVhZGVyRHJvcGRvd25Nc3NnJ1xuaW1wb3J0IEZveEhlYWRlckRyb3Bkb3duTm90aWYgZnJvbSAnLi9Gb3hIZWFkZXJEcm9wZG93bk5vdGlmJ1xuaW1wb3J0IEZveEhlYWRlckRyb3Bkb3duVGFza3MgZnJvbSAnLi9Gb3hIZWFkZXJEcm9wZG93blRhc2tzJ1xuLy8gaW1wb3J0IEZveExheW91dCBmcm9tICcuL1RoZUxheW91dCdcbmltcG9ydCBGb3hTaWRlYmFyIGZyb20gJy4vRm94U2lkZWJhcidcblxuZXhwb3J0IHtcbiAgLy8gRm94Q29udGVudCxcbiAgRm94Rm9vdGVyLFxuICBGb3hIZWFkZXIsXG4gIEZveEhlYWRlckRyb3Bkb3duLFxuICBGb3hIZWFkZXJEcm9wZG93bk1zc2csXG4gIEZveEhlYWRlckRyb3Bkb3duTm90aWYsXG4gIEZveEhlYWRlckRyb3Bkb3duVGFza3MsXG4gIC8vIEZveExheW91dCxcbiAgRm94U2lkZWJhclxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHtcclxufSBmcm9tICdAY29yZXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBGb3hTaWRlYmFyIH0gZnJvbSAnLi4vbGF5b3V0JztcclxuXHJcbmltcG9ydCBGb3hIZWFkZXIgZnJvbSBcIi4uL2xheW91dC9Gb3hIZWFkZXJcIjtcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjLWFwcCBjLWRlZmF1bHQtbGF5b3V0XCI+XHJcbiAgICAgIDxGb3hTaWRlYmFyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy13cmFwcGVyXCI+XHJcbiAgICAgICAgPEZveEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1ib2R5XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBjb25zdCBUb2FzdGVyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3Mvbm90aWZpY2F0aW9ucy90b2FzdGVyL1RvYXN0ZXInKSk7XG4vLyBjb25zdCBUYWJsZXMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9iYXNlL3RhYmxlcy9UYWJsZXMnKSk7XG5cbi8vIGNvbnN0IEJyZWFkY3J1bWJzID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvYmFzZS9icmVhZGNydW1icy9CcmVhZGNydW1icycpKTtcbi8vIGNvbnN0IENhcmRzID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvYmFzZS9jYXJkcy9DYXJkcycpKTtcbi8vIGNvbnN0IENhcm91c2VscyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL2Jhc2UvY2Fyb3VzZWxzL0Nhcm91c2VscycpKTtcbi8vIGNvbnN0IENvbGxhcHNlcyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL2Jhc2UvY29sbGFwc2VzL0NvbGxhcHNlcycpKTtcbi8vIGNvbnN0IEJhc2ljRm9ybXMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9iYXNlL2Zvcm1zL0Jhc2ljRm9ybXMnKSk7XG5cbi8vIGNvbnN0IEp1bWJvdHJvbnMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9iYXNlL2p1bWJvdHJvbnMvSnVtYm90cm9ucycpKTtcbi8vIGNvbnN0IExpc3RHcm91cHMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9iYXNlL2xpc3QtZ3JvdXBzL0xpc3RHcm91cHMnKSk7XG4vLyBjb25zdCBOYXZiYXJzID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvYmFzZS9uYXZiYXJzL05hdmJhcnMnKSk7XG4vLyBjb25zdCBOYXZzID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvYmFzZS9uYXZzL05hdnMnKSk7XG4vLyBjb25zdCBQYWdpbmF0aW9ucyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL2Jhc2UvcGFnaW5hdGlvbnMvUGFnbmF0aW9ucycpKTtcbi8vIGNvbnN0IFBvcG92ZXJzID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvYmFzZS9wb3BvdmVycy9Qb3BvdmVycycpKTtcbi8vIGNvbnN0IFByb2dyZXNzQmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvYmFzZS9wcm9ncmVzcy1iYXIvUHJvZ3Jlc3NCYXInKSk7XG4vLyBjb25zdCBTd2l0Y2hlcyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL2Jhc2Uvc3dpdGNoZXMvU3dpdGNoZXMnKSk7XG5cbi8vIGNvbnN0IFRhYnMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9iYXNlL3RhYnMvVGFicycpKTtcbi8vIGNvbnN0IFRvb2x0aXBzID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvYmFzZS90b29sdGlwcy9Ub29sdGlwcycpKTtcbi8vIGNvbnN0IEJyYW5kQnV0dG9ucyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL2J1dHRvbnMvYnJhbmQtYnV0dG9ucy9CcmFuZEJ1dHRvbnMnKSk7XG4vLyBjb25zdCBCdXR0b25Ecm9wZG93bnMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9idXR0b25zL2J1dHRvbi1kcm9wZG93bnMvQnV0dG9uRHJvcGRvd25zJykpO1xuLy8gY29uc3QgQnV0dG9uR3JvdXBzID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvYnV0dG9ucy9idXR0b24tZ3JvdXBzL0J1dHRvbkdyb3VwcycpKTtcbi8vIGNvbnN0IEJ1dHRvbnMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9idXR0b25zL2J1dHRvbnMvQnV0dG9ucycpKTtcbi8vIGNvbnN0IENoYXJ0cyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL2NoYXJ0cy9DaGFydHMnKSk7XG4vLyBjb25zdCBEYXNoYm9hcmQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9kYXNoYm9hcmQvRGFzaGJvYXJkJykpO1xuLy8gY29uc3QgQ29yZVVJSWNvbnMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9pY29ucy9jb3JldWktaWNvbnMvQ29yZVVJSWNvbnMnKSk7XG4vLyBjb25zdCBGbGFncyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL2ljb25zL2ZsYWdzL0ZsYWdzJykpO1xuLy8gY29uc3QgQnJhbmRzID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvaWNvbnMvYnJhbmRzL0JyYW5kcycpKTtcbi8vIGNvbnN0IEFsZXJ0cyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL25vdGlmaWNhdGlvbnMvYWxlcnRzL0FsZXJ0cycpKTtcbi8vIGNvbnN0IEJhZGdlcyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL25vdGlmaWNhdGlvbnMvYmFkZ2VzL0JhZGdlcycpKTtcbi8vIGNvbnN0IE1vZGFscyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL25vdGlmaWNhdGlvbnMvbW9kYWxzL01vZGFscycpKTtcbi8vIGNvbnN0IENvbG9ycyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL3RoZW1lL2NvbG9ycy9Db2xvcnMnKSk7XG4vLyBjb25zdCBUeXBvZ3JhcGh5ID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvdGhlbWUvdHlwb2dyYXBoeS9UeXBvZ3JhcGh5JykpO1xuLy8gY29uc3QgV2lkZ2V0cyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL3dpZGdldHMvV2lkZ2V0cycpKTtcbi8vIGNvbnN0IFVzZXJzID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvdXNlcnMvVXNlcnMnKSk7XG4vLyBjb25zdCBVc2VyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvdXNlcnMvVXNlcicpKTtcblxuY29uc3Qgcm91dGVzID0gW1xuICB7IHBhdGg6ICcvJywgZXhhY3Q6IHRydWUsIG5hbWU6ICdIb21lJyB9LFxuICAvLyB7IHBhdGg6ICcvZGFzaGJvYXJkJywgbmFtZTogJ0Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkIH0sXG4gIC8vIHsgcGF0aDogJy90aGVtZScsIG5hbWU6ICdUaGVtZScsIGNvbXBvbmVudDogQ29sb3JzLCBleGFjdDogdHJ1ZSB9LFxuICAvLyB7IHBhdGg6ICcvdGhlbWUvY29sb3JzJywgbmFtZTogJ0NvbG9ycycsIGNvbXBvbmVudDogQ29sb3JzIH0sXG4gIC8vIHsgcGF0aDogJy90aGVtZS90eXBvZ3JhcGh5JywgbmFtZTogJ1R5cG9ncmFwaHknLCBjb21wb25lbnQ6IFR5cG9ncmFwaHkgfSxcbiAgLy8geyBwYXRoOiAnL2Jhc2UnLCBuYW1lOiAnQmFzZScsIGNvbXBvbmVudDogQ2FyZHMsIGV4YWN0OiB0cnVlIH0sXG4gIC8vIHsgcGF0aDogJy9iYXNlL2JyZWFkY3J1bWJzJywgbmFtZTogJ0JyZWFkY3J1bWJzJywgY29tcG9uZW50OiBCcmVhZGNydW1icyB9LFxuICAvLyB7IHBhdGg6ICcvYmFzZS9jYXJkcycsIG5hbWU6ICdDYXJkcycsIGNvbXBvbmVudDogQ2FyZHMgfSxcbiAgLy8geyBwYXRoOiAnL2Jhc2UvY2Fyb3VzZWxzJywgbmFtZTogJ0Nhcm91c2VsJywgY29tcG9uZW50OiBDYXJvdXNlbHMgfSxcbiAgLy8geyBwYXRoOiAnL2Jhc2UvY29sbGFwc2VzJywgbmFtZTogJ0NvbGxhcHNlJywgY29tcG9uZW50OiBDb2xsYXBzZXMgfSxcbiAgLy8geyBwYXRoOiAnL2Jhc2UvZm9ybXMnLCBuYW1lOiAnRm9ybXMnLCBjb21wb25lbnQ6IEJhc2ljRm9ybXMgfSxcbiAgLy8geyBwYXRoOiAnL2Jhc2UvanVtYm90cm9ucycsIG5hbWU6ICdKdW1ib3Ryb25zJywgY29tcG9uZW50OiBKdW1ib3Ryb25zIH0sXG4gIC8vIHsgcGF0aDogJy9iYXNlL2xpc3QtZ3JvdXBzJywgbmFtZTogJ0xpc3QgR3JvdXBzJywgY29tcG9uZW50OiBMaXN0R3JvdXBzIH0sXG4gIC8vIHsgcGF0aDogJy9iYXNlL25hdmJhcnMnLCBuYW1lOiAnTmF2YmFycycsIGNvbXBvbmVudDogTmF2YmFycyB9LFxuICAvLyB7IHBhdGg6ICcvYmFzZS9uYXZzJywgbmFtZTogJ05hdnMnLCBjb21wb25lbnQ6IE5hdnMgfSxcbiAgLy8geyBwYXRoOiAnL2Jhc2UvcGFnaW5hdGlvbnMnLCBuYW1lOiAnUGFnaW5hdGlvbnMnLCBjb21wb25lbnQ6IFBhZ2luYXRpb25zIH0sXG4gIC8vIHsgcGF0aDogJy9iYXNlL3BvcG92ZXJzJywgbmFtZTogJ1BvcG92ZXJzJywgY29tcG9uZW50OiBQb3BvdmVycyB9LFxuICAvLyB7IHBhdGg6ICcvYmFzZS9wcm9ncmVzcy1iYXInLCBuYW1lOiAnUHJvZ3Jlc3MgQmFyJywgY29tcG9uZW50OiBQcm9ncmVzc0JhciB9LFxuICAvLyB7IHBhdGg6ICcvYmFzZS9zd2l0Y2hlcycsIG5hbWU6ICdTd2l0Y2hlcycsIGNvbXBvbmVudDogU3dpdGNoZXMgfSxcbiAgLy8geyBwYXRoOiAnL2Jhc2UvdGFibGVzJywgbmFtZTogJ1RhYmxlcycsIGNvbXBvbmVudDogVGFibGVzIH0sXG4gIC8vIHsgcGF0aDogJy9iYXNlL3RhYnMnLCBuYW1lOiAnVGFicycsIGNvbXBvbmVudDogVGFicyB9LFxuICAvLyB7IHBhdGg6ICcvYmFzZS90b29sdGlwcycsIG5hbWU6ICdUb29sdGlwcycsIGNvbXBvbmVudDogVG9vbHRpcHMgfSxcbiAgLy8geyBwYXRoOiAnL2J1dHRvbnMnLCBuYW1lOiAnQnV0dG9ucycsIGNvbXBvbmVudDogQnV0dG9ucywgZXhhY3Q6IHRydWUgfSxcbiAgLy8geyBwYXRoOiAnL2J1dHRvbnMvYnV0dG9ucycsIG5hbWU6ICdCdXR0b25zJywgY29tcG9uZW50OiBCdXR0b25zIH0sXG4gIC8vIHsgcGF0aDogJy9idXR0b25zL2J1dHRvbi1kcm9wZG93bnMnLCBuYW1lOiAnRHJvcGRvd25zJywgY29tcG9uZW50OiBCdXR0b25Ecm9wZG93bnMgfSxcbiAgLy8geyBwYXRoOiAnL2J1dHRvbnMvYnV0dG9uLWdyb3VwcycsIG5hbWU6ICdCdXR0b24gR3JvdXBzJywgY29tcG9uZW50OiBCdXR0b25Hcm91cHMgfSxcbiAgLy8geyBwYXRoOiAnL2J1dHRvbnMvYnJhbmQtYnV0dG9ucycsIG5hbWU6ICdCcmFuZCBCdXR0b25zJywgY29tcG9uZW50OiBCcmFuZEJ1dHRvbnMgfSxcbiAgLy8geyBwYXRoOiAnL2NoYXJ0cycsIG5hbWU6ICdDaGFydHMnLCBjb21wb25lbnQ6IENoYXJ0cyB9LFxuICAvLyB7IHBhdGg6ICcvaWNvbnMnLCBleGFjdDogdHJ1ZSwgbmFtZTogJ0ljb25zJywgY29tcG9uZW50OiBDb3JlVUlJY29ucyB9LFxuICAvLyB7IHBhdGg6ICcvaWNvbnMvY29yZXVpLWljb25zJywgbmFtZTogJ0NvcmVVSSBJY29ucycsIGNvbXBvbmVudDogQ29yZVVJSWNvbnMgfSxcbiAgLy8geyBwYXRoOiAnL2ljb25zL2ZsYWdzJywgbmFtZTogJ0ZsYWdzJywgY29tcG9uZW50OiBGbGFncyB9LFxuICAvLyB7IHBhdGg6ICcvaWNvbnMvYnJhbmRzJywgbmFtZTogJ0JyYW5kcycsIGNvbXBvbmVudDogQnJhbmRzIH0sXG4gIC8vIHsgcGF0aDogJy9ub3RpZmljYXRpb25zJywgbmFtZTogJ05vdGlmaWNhdGlvbnMnLCBjb21wb25lbnQ6IEFsZXJ0cywgZXhhY3Q6IHRydWUgfSxcbiAgLy8geyBwYXRoOiAnL25vdGlmaWNhdGlvbnMvYWxlcnRzJywgbmFtZTogJ0FsZXJ0cycsIGNvbXBvbmVudDogQWxlcnRzIH0sXG4gIC8vIHsgcGF0aDogJy9ub3RpZmljYXRpb25zL2JhZGdlcycsIG5hbWU6ICdCYWRnZXMnLCBjb21wb25lbnQ6IEJhZGdlcyB9LFxuICAvLyB7IHBhdGg6ICcvbm90aWZpY2F0aW9ucy9tb2RhbHMnLCBuYW1lOiAnTW9kYWxzJywgY29tcG9uZW50OiBNb2RhbHMgfSxcbiAgLy8geyBwYXRoOiAnL25vdGlmaWNhdGlvbnMvdG9hc3RlcicsIG5hbWU6ICdUb2FzdGVyJywgY29tcG9uZW50OiBUb2FzdGVyIH0sXG4gIC8vIHsgcGF0aDogJy93aWRnZXRzJywgbmFtZTogJ1dpZGdldHMnLCBjb21wb25lbnQ6IFdpZGdldHMgfSxcbiAgLy8geyBwYXRoOiAnL3VzZXJzJywgZXhhY3Q6IHRydWUsICBuYW1lOiAnVXNlcnMnLCBjb21wb25lbnQ6IFVzZXJzIH0sXG4gIC8vIHsgcGF0aDogJy91c2Vycy86aWQnLCBleGFjdDogdHJ1ZSwgbmFtZTogJ1VzZXIgRGV0YWlscycsIGNvbXBvbmVudDogVXNlciB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9