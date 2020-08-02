(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/cards/FoxLoginCard.js":
/*!**********************************************!*\
  !*** ./src/components/cards/FoxLoginCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _forms_FoxLoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms/FoxLoginForm */ "./src/components/forms/FoxLoginForm.js");
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





var FoxLoginCard = /*#__PURE__*/function (_Component) {
  _inherits(FoxLoginCard, _Component);

  var _super = _createSuper(FoxLoginCard);

  function FoxLoginCard() {
    _classCallCheck(this, FoxLoginCard);

    return _super.apply(this, arguments);
  }

  _createClass(FoxLoginCard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CContainer"], {
        fluid: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CRow"], {
        className: "mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCol"], {
        sm: "4",
        className: "mx-auto align-self-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CCardHeader"], {
        color: "dark",
        textColor: "light"
      }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_FoxLoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
    }
  }]);

  return FoxLoginCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FoxLoginCard);

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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var django_react_csrftoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! django-react-csrftoken */ "./node_modules/django-react-csrftoken/index.js");
/* harmony import */ var django_react_csrftoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(django_react_csrftoken__WEBPACK_IMPORTED_MODULE_3__);
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






var FoxLoginForm = /*#__PURE__*/function (_Component) {
  _inherits(FoxLoginForm, _Component);

  var _super = _createSuper(FoxLoginForm);

  function FoxLoginForm() {
    _classCallCheck(this, FoxLoginForm);

    return _super.apply(this, arguments);
  }

  _createClass(FoxLoginForm, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CContainer"], {
        fluid: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], {
        className: "mt-2 mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
        sm: "8",
        className: "mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CForm"], {
        action: "api/login",
        method: "POST"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(django_react_csrftoken__WEBPACK_IMPORTED_MODULE_3___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLabel"], {
        htmlFor: "username"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CInput"], {
        id: "username",
        name: "username",
        placeholder: "Enter your name",
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLabel"], {
        htmlFor: "nf-password"
      }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CInput"], {
        type: "password",
        id: "password",
        name: "password",
        placeholder: "Enter Password..",
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CInput"], {
        type: "submit",
        value: "Submit",
        color: "info"
      }))))));
    }
  }]);

  return FoxLoginForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FoxLoginForm);

/***/ }),

/***/ "./src/components/pages/Login.js":
/*!***************************************!*\
  !*** ./src/components/pages/Login.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _cards_FoxLoginCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/FoxLoginCard */ "./src/components/cards/FoxLoginCard.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");






var Login = function Login() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-app c-default-layout flex-row align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], {
    className: "justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], {
    md: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_FoxLoginCard__WEBPACK_IMPORTED_MODULE_3__["default"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9Gb3hMb2dpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvRm94TG9naW5Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL0xvZ2luLmpzIl0sIm5hbWVzIjpbIkZveExvZ2luQ2FyZCIsIkNvbXBvbmVudCIsIkZveExvZ2luRm9ybSIsIkxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsMEJBQ0ksMkRBQUMsd0RBQUQ7QUFBWSxhQUFLLEVBQUU7QUFBbkIsc0JBQ0ksMkRBQUMsa0RBQUQ7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLHNCQUNJLDJEQUFDLGtEQUFEO0FBQU0sVUFBRSxFQUFDLEdBQVQ7QUFBYSxpQkFBUyxFQUFDO0FBQXZCLHNCQUNJLDJEQUFDLG1EQUFELHFCQUNJLDJEQUFDLHlEQUFEO0FBQWEsYUFBSyxFQUFDLE1BQW5CO0FBQTBCLGlCQUFTLEVBQUM7QUFBcEMsaUJBREosZUFJSSwyREFBQywyREFBRCxPQUpKLENBREosQ0FESixDQURKLENBREo7QUFnQkg7Ozs7RUFsQnNCQywrQzs7QUFxQlpELDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUUsWTs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLDBCQUNFLDJEQUFDLHdEQUFEO0FBQVksYUFBSyxFQUFFO0FBQW5CLHNCQUNFLDJEQUFDLGtEQUFEO0FBQU0saUJBQVMsRUFBQztBQUFoQixzQkFDRSwyREFBQyxrREFBRDtBQUFNLFVBQUUsRUFBQyxHQUFUO0FBQWEsaUJBQVMsRUFBQztBQUF2QixzQkFDRSwyREFBQyxtREFBRDtBQUFPLGNBQU0sRUFBQyxXQUFkO0FBQTBCLGNBQU0sRUFBQztBQUFqQyxzQkFDRSwyREFBQyw2REFBRCxPQURGLGVBRUUsMkRBQUMsd0RBQUQscUJBQ0UsMkRBQUMsb0RBQUQ7QUFBUSxlQUFPLEVBQUM7QUFBaEIsZ0JBREYsZUFFRSwyREFBQyxvREFBRDtBQUFRLFVBQUUsRUFBQyxVQUFYO0FBQXNCLFlBQUksRUFBQyxVQUEzQjtBQUFzQyxtQkFBVyxFQUFDLGlCQUFsRDtBQUFvRSxnQkFBUTtBQUE1RSxRQUZGLENBRkYsZUFNRSwyREFBQyx3REFBRCxxQkFDRSwyREFBQyxvREFBRDtBQUFRLGVBQU8sRUFBQztBQUFoQixvQkFERixlQUVFLDJEQUFDLG9EQUFEO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxVQUFFLEVBQUMsVUFGTDtBQUdFLFlBQUksRUFBQyxVQUhQO0FBSUUsbUJBQVcsRUFBQyxrQkFKZDtBQUtFLGdCQUFRO0FBTFYsUUFGRixDQU5GLGVBZ0JFLDJEQUFDLHdEQUFELHFCQUNFLDJEQUFDLG9EQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBSyxFQUFDLFFBQTVCO0FBQXFDLGFBQUssRUFBQztBQUEzQyxRQURGLENBaEJGLENBREYsQ0FERixDQURGLENBREY7QUE0QkQ7Ozs7RUE5QndCRCwrQzs7QUFpQ1pDLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWNBO0FBQ0E7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLDJEQUFDLHdEQUFELHFCQUNFLDJEQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFDO0FBQWhCLGtCQUNFLDJEQUFDLGtEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsa0JBK0NFLDJEQUFDLDJEQUFELE9BL0NGLENBREYsQ0FERixDQURGLENBREY7QUF5REQsQ0ExREQ7O0FBNERlQSxvRUFBZixFIiwiZmlsZSI6IjIubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENDb250YWluZXIsIENSb3csIENDb2wsIENDYXJkLCBDQ2FyZEhlYWRlciwgQ0NhcmRCb2R5LCBDQ2FyZEZvb3RlciB9IGZyb20gXCJAY29yZXVpL3JlYWN0XCI7XHJcbmltcG9ydCBGb3hMb2dpbkZvcm0gZnJvbSBcIi4uL2Zvcm1zL0ZveExvZ2luRm9ybVwiXHJcblxyXG5jbGFzcyBGb3hMb2dpbkNhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDQ29udGFpbmVyIGZsdWlkPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxDUm93IGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q0NvbCBzbT1cIjRcIiBjbGFzc05hbWU9XCJteC1hdXRvIGFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDQ2FyZEhlYWRlciBjb2xvcj0nZGFyaycgdGV4dENvbG9yPSdsaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm94TG9naW5Gb3JtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9DUm93PlxyXG5cclxuICAgICAgICAgICAgPC9DQ29udGFpbmVyPlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZveExvZ2luQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBDRm9ybSwgQ0Zvcm1Hcm91cCwgQ0lucHV0LCBDTGFiZWwsIENDb250YWluZXIsIENSb3csIENDb2wgfSBmcm9tIFwiQGNvcmV1aS9yZWFjdFwiO1xyXG5pbXBvcnQgRGphbmdvQ1NSRlRva2VuIGZyb20gJ2RqYW5nby1yZWFjdC1jc3JmdG9rZW4nXHJcblxyXG5cclxuY2xhc3MgRm94TG9naW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q0NvbnRhaW5lciBmbHVpZD17dHJ1ZX0+XHJcbiAgICAgICAgPENSb3cgY2xhc3NOYW1lPVwibXQtMiBtYi0yXCI+XHJcbiAgICAgICAgICA8Q0NvbCBzbT1cIjhcIiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxDRm9ybSBhY3Rpb249XCJhcGkvbG9naW5cIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICAgICAgPERqYW5nb0NTUkZUb2tlbiAvPlxyXG4gICAgICAgICAgICAgIDxDRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPENMYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5OYW1lPC9DTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Q0lucHV0IGlkPVwidXNlcm5hbWVcIiBuYW1lPSd1c2VybmFtZScgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgIDwvQ0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Q0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxDTGFiZWwgaHRtbEZvcj1cIm5mLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L0NMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxDSW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmQuLlwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Q0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxDSW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgY29sb3I9XCJpbmZvXCIgLz5cclxuICAgICAgICAgICAgICA8L0NGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDwvQ0Zvcm0+XHJcbiAgICAgICAgICA8L0NDb2w+XHJcbiAgICAgICAgPC9DUm93PlxyXG4gICAgICA8L0NDb250YWluZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3hMb2dpbkZvcm0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQge1xyXG4gIENCdXR0b24sXHJcbiAgQ0NhcmQsXHJcbiAgQ0NhcmRCb2R5LFxyXG4gIENDYXJkR3JvdXAsXHJcbiAgQ0NvbCxcclxuICBDQ29udGFpbmVyLFxyXG4gIENGb3JtLFxyXG4gIENJbnB1dCxcclxuICBDSW5wdXRHcm91cCxcclxuICBDSW5wdXRHcm91cFByZXBlbmQsXHJcbiAgQ0lucHV0R3JvdXBUZXh0LFxyXG4gIENSb3dcclxufSBmcm9tICdAY29yZXVpL3JlYWN0J1xyXG5pbXBvcnQgRm94TG9naW5DYXJkIGZyb20gXCIuLi9jYXJkcy9Gb3hMb2dpbkNhcmRcIjtcclxuaW1wb3J0IENJY29uIGZyb20gJ0Bjb3JldWkvaWNvbnMtcmVhY3QnXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjLWFwcCBjLWRlZmF1bHQtbGF5b3V0IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8Q0NvbnRhaW5lcj5cclxuICAgICAgICA8Q1JvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8Q0NvbCBtZD1cIjhcIj5cclxuICAgICAgICAgICAgey8qIDxDQ2FyZEdyb3VwPlxyXG4gICAgICAgICAgICAgIDxDQ2FyZCBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxDQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxDRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5TaWduIEluIHRvIHlvdXIgYWNjb3VudDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8Q0lucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENJbnB1dEdyb3VwUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q0ljb24gbmFtZT1cImNpbC11c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NJbnB1dEdyb3VwUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDSW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgYXV0b0NvbXBsZXRlPVwidXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDSW5wdXRHcm91cFByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENJY29uIG5hbWU9XCJjaWwtbG9jay1sb2NrZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ0lucHV0R3JvdXBQcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Q1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDQ29sIHhzPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q0J1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJweC00XCI+TG9naW48L0NCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q0NvbCB4cz1cIjZcIiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDQnV0dG9uIGNvbG9yPVwibGlua1wiIGNsYXNzTmFtZT1cInB4LTBcIj5Gb3Jnb3QgcGFzc3dvcmQ/PC9DQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ1Jvdz5cclxuICAgICAgICAgICAgICAgICAgPC9DRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvQ0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPENDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctcHJpbWFyeSBweS01IGQtbWQtZG93bi1ub25lXCIgc3R5bGU9e3sgd2lkdGg6ICc0NCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPENDYXJkQm9keSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TaWduIHVwPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwibXQtM1wiIGFjdGl2ZSB0YWJJbmRleD17LTF9PlJlZ2lzdGVyIE5vdyE8L0NCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ0NhcmQ+XHJcbiAgICAgICAgICAgIDwvQ0NhcmRHcm91cD4gKi99XHJcbiAgICAgICAgICAgIDxGb3hMb2dpbkNhcmQgLz5cclxuICAgICAgICAgIDwvQ0NvbD5cclxuICAgICAgICA8L0NSb3c+XHJcbiAgICAgIDwvQ0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwic291cmNlUm9vdCI6IiJ9