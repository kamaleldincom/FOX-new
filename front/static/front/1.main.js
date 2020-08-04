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
  icon: 'cil-industry',
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " HELLO TO YOU, STRANGEER!!!!!"))));
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
//# sourceMappingURL=1.main.js.map