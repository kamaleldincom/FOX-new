(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/components/carousels/LoginCarousel.js":
/*!***************************************************!*\
  !*** ./src/components/carousels/LoginCarousel.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");

 // import loginLogo from '../assets/icons/signed-logo.png'

var slides = ['data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E', 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E', 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'];

var LoginCarousel = function LoginCarousel() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], {
    alignHorizontal: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    md: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CImg"], {
    width: "100%",
    src: "/static/front/images/signed-logo.png",
    className: "mb-2"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], {
    alignHorizontal: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    md: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCarousel"], {
    animate: true,
    autoSlide: 5000
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCarouselIndicators"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCarouselInner"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCarouselItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "d-block w-100",
    src: slides[0],
    alt: "slide 1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCarouselCaption"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Slide 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Slide 1"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCarouselItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "d-block w-100",
    src: slides[1],
    alt: "slide 2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCarouselCaption"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Slide 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Slide 2"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCarouselItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "d-block w-100",
    src: slides[2],
    alt: "slide 3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCarouselCaption"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Slide 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Slide 3"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginCarousel);

/***/ }),

/***/ "./src/components/carousels/index.js":
/*!*******************************************!*\
  !*** ./src/components/carousels/index.js ***!
  \*******************************************/
/*! exports provided: LoginCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginCarousel */ "./src/components/carousels/LoginCarousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginCarousel", function() { return _LoginCarousel__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/components/containers/AuthContainer.js":
/*!****************************************************!*\
  !*** ./src/components/containers/AuthContainer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _carousels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carousels */ "./src/components/carousels/index.js");




var AuthContainer = function AuthContainer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-app c-default-layout flex-row align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CContainer"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], {
    className: "login-canvas justify-content-center align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    className: "login-left justify-content-center",
    md: "6"
  }, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    className: "login-right justify-content-center align-items-center",
    md: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousels__WEBPACK_IMPORTED_MODULE_2__["LoginCarousel"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (AuthContainer);

/***/ }),

/***/ "./src/components/containers/index.js":
/*!********************************************!*\
  !*** ./src/components/containers/index.js ***!
  \********************************************/
/*! exports provided: AuthContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthContainer */ "./src/components/containers/AuthContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthContainer", function() { return _AuthContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/components/pages/Register.js":
/*!******************************************!*\
  !*** ./src/components/pages/Register.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms */ "./src/components/forms/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers */ "./src/components/containers/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // const loading = (
//     <div className="pt-3 text-center">
//         <CSpinner size="sm" variant="grow" style={{ width: '4rem', height: '4rem' }} />
//     </div>
// )

var Register = /*#__PURE__*/function (_Component) {
  _inherits(Register, _Component);

  var _super = _createSuper(Register);

  function Register() {
    var _this;

    _classCallCheck(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.props.userRegisterValidationFetch(_this.props.token);
    });

    return _this;
  }

  _createClass(Register, [{
    key: "render",
    value: function render() {
      return !this.props.registerAllowed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/login"
      }) :
      /*#__PURE__*/
      // <Suspense fallback={loading}>
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers__WEBPACK_IMPORTED_MODULE_6__["AuthContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms__WEBPACK_IMPORTED_MODULE_4__["FoxRegisterForm"], {
        username: this.props.username
      })) // </Suspense>
      ;
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userRegistered: state.userRegistered,
    registerAllowed: state.registerAllowed
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    userRegisterValidationFetch: function userRegisterValidationFetch(token) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["userRegisterValidationFetch"])(token));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Register));

/***/ })

}]);
//# sourceMappingURL=8.main.js.map