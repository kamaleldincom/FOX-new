(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/components/forms/FoxFormGroupDownloadUpload.js":
/*!************************************************************!*\
  !*** ./src/components/forms/FoxFormGroupDownloadUpload.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");



var makeLabel = function makeLabel(inputString) {
  return inputString.split("_").map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

var FoxFormGroupDownloadUpload = function FoxFormGroupDownloadUpload(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    md: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: props.inputInfo
  }, makeLabel(props.inputInfo))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    md: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CButton"], {
    variant: "outline",
    color: "info",
    id: props.downloadValue,
    name: props.uploadInfo,
    value: props.downloadValue,
    onClick: props.downloadFile
  }, props.buttonText ? props.buttonText : 'Download scan')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    md: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: props.uploadInfo
  }, "New ".concat(makeLabel(props.uploadInfo))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputFile"], {
    id: props.uploadInfo,
    name: props.uploadInfo,
    onChange: props.handleFileUpload
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FoxFormGroupDownloadUpload);

/***/ }),

/***/ "./src/components/forms/FoxFormGroupInputDownLoadUpload.js":
/*!*****************************************************************!*\
  !*** ./src/components/forms/FoxFormGroupInputDownLoadUpload.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");



var makeLabel = function makeLabel(inputString) {
  return inputString.split("_").map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

var makePlaceholder = function makePlaceholder(inputString) {
  return "Enter ".concat(makeLabel(inputString), " info");
};

var FoxFormGroupInputDownloadUpload = function FoxFormGroupInputDownloadUpload(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    md: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: props.inputInfo
  }, makeLabel(props.inputInfo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: props.inputInfo,
    name: props.inputInfo,
    placeholder: makePlaceholder(props.inputInfo),
    value: props.inputValue,
    onChange: props.handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    md: "2",
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CButton"], {
    variant: "outline",
    color: "info",
    id: props.downloadValue,
    name: props.uploadInfo,
    value: props.downloadValue,
    onClick: props.downloadFile
  }, "Download scan")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    md: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: props.uploadInfo
  }, "New ".concat(makeLabel(props.uploadInfo))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputFile"], {
    id: props.uploadInfo,
    name: props.uploadInfo,
    onChange: props.handleFileUpload
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FoxFormGroupInputDownloadUpload);

/***/ }),

/***/ "./src/components/forms/FoxFormGroupWithUpload.js":
/*!********************************************************!*\
  !*** ./src/components/forms/FoxFormGroupWithUpload.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");



var makeLabel = function makeLabel(inputString) {
  return inputString.split("_").map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

var makePlaceholder = function makePlaceholder(inputString) {
  return "Enter ".concat(makeLabel(inputString), " info");
};

var FoxFormGroupWithUpload = function FoxFormGroupWithUpload(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    md: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: props.inputInfo
  }, makeLabel(props.inputInfo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
    id: props.inputInfo,
    name: props.inputInfo,
    placeholder: makePlaceholder(props.inputInfo),
    value: props.inputValue,
    onChange: props.handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    md: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: props.uploadInfo
  }, makeLabel(props.uploadInfo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputFile"], {
    id: props.uploadInfo,
    name: props.uploadInfo,
    onChange: props.handleFileUpload,
    required: true
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FoxFormGroupWithUpload);

/***/ }),

/***/ "./src/components/forms/FoxLoginForm.js":
/*!**********************************************!*\
  !*** ./src/components/forms/FoxLoginForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var django_react_csrftoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! django-react-csrftoken */ "./node_modules/django-react-csrftoken/index.js");
/* harmony import */ var django_react_csrftoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(django_react_csrftoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inputs */ "./src/components/forms/inputs/index.js");
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









var FoxLoginForm = /*#__PURE__*/function (_Component) {
  _inherits(FoxLoginForm, _Component);

  var _super = _createSuper(FoxLoginForm);

  function FoxLoginForm() {
    var _this;

    _classCallCheck(this, FoxLoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      username: "",
      password: ""
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault();

      _this.props.userLoginFetch(_this.state);
    });

    return _this;
  }

  _createClass(FoxLoginForm, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          username = _this$state.username,
          password = _this$state.password;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], {
        alignHorizontal: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CContainer"], {
        fluid: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], {
        className: "mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
        md: "8",
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CImg"], {
        width: "100%",
        src: "/static/front/images/signed-logo.png",
        className: "mb-2"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], {
        className: "mt-2 mb-2",
        alignHorizontal: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "fox-login-welcome"
      }, "Welcome to FOX!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "fox-login-welcome"
      }, " Please log in to your account."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], {
        className: "mt-2 mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CForm"], {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(django_react_csrftoken__WEBPACK_IMPORTED_MODULE_4___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CInputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CInputGroupPrepend"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CInputGroupText"], {
        invalid: true,
        className: "fox-input-before".concat(this.props.loginError ? "-invalid" : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "cilUser"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CInput"], {
        id: "username",
        name: "username",
        placeholder: "Username",
        value: username,
        onChange: this.handleChange,
        invalid: this.props.loginError,
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CInputGroupAppend"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CInputGroupText"], {
        className: "fox-input-after".concat(this.props.loginError ? "-invalid" : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "blank"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inputs__WEBPACK_IMPORTED_MODULE_6__["FoxPasswordInput"], {
        inputName: "password",
        password: password,
        placeholder: "Password",
        submitError: this.props.loginError,
        handleChange: this.handleChange
      }), this.props.loginError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "fox-form-invalid-feedback"
      }, "The username or password you have entered is invalid. Please try again.") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CButton"], {
        shape: "pill",
        type: "submit",
        value: "Submit",
        color: "dark",
        block: true
      }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CButton"], {
        type: "link",
        size: "sm",
        className: "align-self-center"
      }, "Forgot password?"))))));
    }
  }]);

  return FoxLoginForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    loginError: state.loginError
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    userLoginFetch: function userLoginFetch(userInfo) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["userLoginFetch"])(userInfo));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(FoxLoginForm));

/***/ }),

/***/ "./src/components/forms/FoxProjectDocumentDownloadUploadFormGroup.js":
/*!***************************************************************************!*\
  !*** ./src/components/forms/FoxProjectDocumentDownloadUploadFormGroup.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");



var FoxProjectDocumentDownLoadUploadFormGroup = function FoxProjectDocumentDownLoadUploadFormGroup(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], {
    key: "fg-".concat(props.document.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    key: "lb-".concat(props.document.id),
    htmlFor: props.document.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, props.document.name), " "), props.document.url_to_doc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLink"], {
    key: "dl-".concat(props.document.id),
    href: props.document.url_to_doc,
    target: "_blank",
    className: "btn btn-ghost-primary"
  }, "Open this document in Google Docs"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    md: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CButton"], {
    variant: "outline",
    color: "primary",
    key: "cb-".concat(props.document.id),
    id: props.document.id,
    name: props.document.id,
    value: props.document.filename,
    onClick: props.downloadFile
  }, "Download template for this document")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
    md: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    key: "lb-".concat(props.document.id),
    htmlFor: props.document.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Upload filled up document:"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputFile"], {
    key: "of-".concat(props.document.id),
    id: "file-".concat(props.document.id),
    name: "".concat(props.document.id),
    onChange: props.handleFileUpload
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FoxProjectDocumentDownLoadUploadFormGroup);

/***/ }),

/***/ "./src/components/forms/FoxReactSelectFormGroup.js":
/*!*********************************************************!*\
  !*** ./src/components/forms/FoxReactSelectFormGroup.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");




var makeLabel = function makeLabel(inputString) {
  return inputString.split("_").map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

var makePlaceholder = function makePlaceholder(inputString) {
  return "Choose ".concat(makeLabel(inputString));
};

var getValueFromOptions = function getValueFromOptions(value, options) {
  if (options) {
    return options.find(function (option) {
      return option.value === value;
    });
  }
};

var FoxReactSelectFormGroup = function FoxReactSelectFormGroup(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: props.inputInfo,
    name: props.inputInfo,
    placeholder: makePlaceholder(props.inputInfo),
    value: getValueFromOptions(props.inputValue, props.options),
    onChange: props.handleChange,
    options: props.options,
    required: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FoxReactSelectFormGroup);

/***/ }),

/***/ "./src/components/forms/FoxRegisterForm.js":
/*!*************************************************!*\
  !*** ./src/components/forms/FoxRegisterForm.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var django_react_csrftoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! django-react-csrftoken */ "./node_modules/django-react-csrftoken/index.js");
/* harmony import */ var django_react_csrftoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(django_react_csrftoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inputs */ "./src/components/forms/inputs/index.js");
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









var FoxRegisterForm = /*#__PURE__*/function (_Component) {
  _inherits(FoxRegisterForm, _Component);

  var _super = _createSuper(FoxRegisterForm);

  function FoxRegisterForm() {
    var _this;

    _classCallCheck(this, FoxRegisterForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      username: _this.props.username,
      password: "",
      password2: ""
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value), function () {
        if (_this.state.password !== _this.state.password2) {
          _this.props.registerError();
        } else {
          _this.props.allowRegistration(_this.props.registrationToken);
        }

        ;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault();

      _this.props.userRegisterFetch({
        password: _this.state.password,
        token: _this.props.registrationToken
      });
    });

    return _this;
  }

  _createClass(FoxRegisterForm, [{
    key: "render",
    value: function render() {
      console.log(this.props.registerError);
      var _this$state = this.state,
          username = _this$state.username,
          password = _this$state.password,
          password2 = _this$state.password2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], {
        alignHorizontal: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CContainer"], {
        fluid: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], {
        className: "mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
        md: "8",
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CImg"], {
        width: "100%",
        src: "/static/front/images/signed-logo.png",
        className: "mb-2"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], {
        className: "mt-2 mb-2",
        alignHorizontal: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "fox-login-welcome"
      }, "Welcome to FOX!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "fox-login-welcome"
      }, " You are trying to register as ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, username), ".  Please, fill this form to finish your registration."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], {
        className: "mt-2 mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
        sm: "8",
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CForm"], {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(django_react_csrftoken__WEBPACK_IMPORTED_MODULE_4___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inputs__WEBPACK_IMPORTED_MODULE_6__["FoxPasswordInput"], {
        inputName: "password",
        password: password,
        placeholder: "Password",
        submitError: this.props.registerErrorFlag,
        handleChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inputs__WEBPACK_IMPORTED_MODULE_6__["FoxPasswordInput"], {
        inputName: "password2",
        password: password2,
        placeholder: "Confirm password",
        submitError: this.props.registerErrorFlag,
        handleChange: this.handleChange
      }), this.props.registerErrorFlag ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "fox-form-invalid-feedback"
      }, "The suggested password is inappropriate. Please, Try to choose more sophisticated password and try again.") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CButton"], {
        shape: "pill",
        block: true,
        type: "submit",
        color: "dark",
        disabled: this.state.password !== this.state.password2
      }, "Register"))))))));
    }
  }]);

  return FoxRegisterForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    registerErrorFlag: state.registerError,
    registrationToken: state.registrationToken,
    errorMessage: state.errorMessage
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    userRegisterFetch: function userRegisterFetch(credentials) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["userRegisterFetch"])(credentials));
    },
    registerError: function registerError() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["registerError"])());
    },
    allowRegistration: function allowRegistration(token) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["allowRegistration"])(token));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(FoxRegisterForm));

/***/ }),

/***/ "./src/components/forms/FoxSelectFormGroup.js":
/*!****************************************************!*\
  !*** ./src/components/forms/FoxSelectFormGroup.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");



var makeLabel = function makeLabel(inputString) {
  return inputString.split("_").map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

var makePlaceholder = function makePlaceholder(inputString) {
  return "Choose ".concat(makeLabel(inputString), " info");
};

var FoxSelectFormGroup = function FoxSelectFormGroup(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CSelect"], {
    id: props.inputInfo,
    name: props.inputInfo,
    placeholder: makePlaceholder(props.inputInfo),
    value: props.inputValue,
    onChange: props.handleChange,
    required: true
  }, props.options.map(function (option) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: option.id,
      value: option.id
    }, option.position);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FoxSelectFormGroup);

/***/ }),

/***/ "./src/components/forms/index.js":
/*!***************************************!*\
  !*** ./src/components/forms/index.js ***!
  \***************************************/
/*! exports provided: FoxLoginForm, FoxRegisterForm, FoxFormGroupWithUpload, FoxSelectFormGroup, FoxReactSelectFormGroup, FoxFormGroupInputDownloadUpload, FoxFormGroupDownloadUpload, FoxProjectDocumentDownloadUploadFormGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FoxFormGroupWithUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoxFormGroupWithUpload */ "./src/components/forms/FoxFormGroupWithUpload.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxFormGroupWithUpload", function() { return _FoxFormGroupWithUpload__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FoxSelectFormGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoxSelectFormGroup */ "./src/components/forms/FoxSelectFormGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxSelectFormGroup", function() { return _FoxSelectFormGroup__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _FoxReactSelectFormGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FoxReactSelectFormGroup */ "./src/components/forms/FoxReactSelectFormGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxReactSelectFormGroup", function() { return _FoxReactSelectFormGroup__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FoxFormGroupInputDownLoadUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FoxFormGroupInputDownLoadUpload */ "./src/components/forms/FoxFormGroupInputDownLoadUpload.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxFormGroupInputDownloadUpload", function() { return _FoxFormGroupInputDownLoadUpload__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _FoxFormGroupDownloadUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FoxFormGroupDownloadUpload */ "./src/components/forms/FoxFormGroupDownloadUpload.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxFormGroupDownloadUpload", function() { return _FoxFormGroupDownloadUpload__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _FoxProjectDocumentDownloadUploadFormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FoxProjectDocumentDownloadUploadFormGroup */ "./src/components/forms/FoxProjectDocumentDownloadUploadFormGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxProjectDocumentDownloadUploadFormGroup", function() { return _FoxProjectDocumentDownloadUploadFormGroup__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _FoxLoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FoxLoginForm */ "./src/components/forms/FoxLoginForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxLoginForm", function() { return _FoxLoginForm__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _FoxRegisterForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FoxRegisterForm */ "./src/components/forms/FoxRegisterForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxRegisterForm", function() { return _FoxRegisterForm__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./src/components/forms/inputs/FoxPasswordInput.js":
/*!*********************************************************!*\
  !*** ./src/components/forms/inputs/FoxPasswordInput.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
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



 // inputName
// password
// placeholder
// submitError
// handleChange

var FoxPasswordInput = /*#__PURE__*/function (_Component) {
  _inherits(FoxPasswordInput, _Component);

  var _super = _createSuper(FoxPasswordInput);

  function FoxPasswordInput() {
    var _this;

    _classCallCheck(this, FoxPasswordInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showPassword: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggleShowPassword", function () {
      _this.setState({
        showPassword: !_this.state.showPassword
      });
    });

    return _this;
  }

  _createClass(FoxPasswordInput, [{
    key: "render",
    value: function render() {
      var showPassword = this.state.showPassword;
      return showPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputGroupPrepend"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputGroupText"], {
        className: "fox-input-before".concat(this.props.submitError ? "-invalid" : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "cilLockLocked"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
        id: this.props.inputName,
        name: this.props.inputName,
        placeholder: this.props.placeholder,
        value: this.props.password,
        onChange: this.props.handleChange,
        invalid: this.props.submitError,
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputGroupAppend"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputGroupText"], {
        onClick: this.toggleShowPassword,
        className: "fox-input-after".concat(this.props.submitError ? "-invalid" : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "cilLowVision"
      }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputGroupPrepend"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputGroupText"], {
        className: "fox-input-before".concat(this.props.submitError ? "-invalid" : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "cilLockLocked"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInput"], {
        type: "password",
        id: this.props.inputName,
        name: this.props.inputName,
        placeholder: this.props.placeholder,
        value: this.props.password,
        onChange: this.props.handleChange,
        invalid: this.props.submitError,
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputGroupAppend"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CInputGroupText"], {
        onClick: this.toggleShowPassword,
        className: "fox-input-after".concat(this.props.submitError ? "-invalid" : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "cilMagnifyingGlass"
      })))));
    }
  }]);

  return FoxPasswordInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FoxPasswordInput);

/***/ }),

/***/ "./src/components/forms/inputs/index.js":
/*!**********************************************!*\
  !*** ./src/components/forms/inputs/index.js ***!
  \**********************************************/
/*! exports provided: FoxPasswordInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FoxPasswordInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoxPasswordInput */ "./src/components/forms/inputs/FoxPasswordInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxPasswordInput", function() { return _FoxPasswordInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ })

}]);
//# sourceMappingURL=3.main.js.map