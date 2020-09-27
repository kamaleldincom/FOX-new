(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/components/views/workers/WorkerCreate.js":
/*!******************************************************!*\
  !*** ./src/components/views/workers/WorkerCreate.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var django_react_csrftoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! django-react-csrftoken */ "./node_modules/django-react-csrftoken/index.js");
/* harmony import */ var django_react_csrftoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(django_react_csrftoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services */ "./src/services/index.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../forms */ "./src/components/forms/index.js");
/* harmony import */ var _optionLists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./optionLists */ "./src/components/views/workers/optionLists.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var foxApi = new _services__WEBPACK_IMPORTED_MODULE_5__["FoxApiService"]();

var WorkerCreate = /*#__PURE__*/function (_Component) {
  _inherits(WorkerCreate, _Component);

  var _super = _createSuper(WorkerCreate);

  function WorkerCreate() {
    var _this;

    _classCallCheck(this, WorkerCreate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      name: "",
      contractor: _this.props.contractor,
      birthday: "",
      phone_number: "",
      card_number_id: "",
      license_number: "",
      license_scan: "",
      passport: "",
      passport_scan: "",
      safety_green_card: "",
      safety_green_card_scan: "",
      position_in_company: -1,
      safety_quiz_answer: "",
      personal_declaration: "",
      submitCallback: "",
      registration_number: "",
      trade_competency: -1,
      error: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleReactSelect", function (option, event) {
      _this.setState(_defineProperty({}, event.name, option.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleFileUpload", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.files[0]));
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                console.log("you are here");

                if (!(_this.state.position_in_company === -1)) {
                  _context.next = 6;
                  break;
                }

                _this.setState({
                  error: 'Worker position in company was not selected! Please, choose position form the list'
                });

                _context.next = 16;
                break;

              case 6:
                if (!(_this.state.trade_competency === -1)) {
                  _context.next = 10;
                  break;
                }

                _this.setState({
                  error: 'Trade competency was not selected! Please, choose competency form the list'
                });

                _context.next = 16;
                break;

              case 10:
                _this.requestData = _this.state;
                delete _this.requestData.error;
                _this.formData = new FormData();
                Object.entries(_this.requestData).forEach(function (_ref2) {
                  var _ref3 = _slicedToArray(_ref2, 2),
                      key = _ref3[0],
                      value = _ref3[1];

                  _this.formData.append(key, value);
                });
                _context.next = 16;
                return foxApi.createEntityWithFile('workers', _this.formData).then(function (data) {
                  _this.state.submitCallback(data.id);
                }, function (error) {
                  console.error(error);

                  _this.setState({
                    error: 'Worker creation failed!' + ' Please check your input and try again!' + ' In case this problem repeats, please contact your administrator!'
                  });
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleSimpleSubmit", function (event) {
      _this.setState({
        submitCallback: function submitCallback(id) {
          return _this.props.history.goBack();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmitWithCompetencies", function (event) {
      _this.setState({
        submitCallback: function submitCallback(id) {
          _this.props.history.push("/workers/".concat(id, "/competencies/new"));
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.props.getProfileFetch();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var preventDefaultSubmit = function preventDefaultSubmit(e) {
        e.preventDefault();
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCol"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardTitle"], null, "New Worker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardSubtitle"], null, "Fill up the form below to add a new Worker")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CForm"], {
        onSubmit: _this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(django_react_csrftoken__WEBPACK_IMPORTED_MODULE_1___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CInput"], {
        id: "name",
        name: "name",
        placeholder: "Name",
        value: _this.state.name,
        onChange: _this.handleChange,
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CLabel"], {
        htmlFor: "birthday"
      }, "Birthday"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CInput"], {
        type: "date",
        id: "birthday",
        name: "birthday",
        value: _this.state.birthday,
        onChange: _this.handleChange,
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CInput"], {
        id: "phone_number",
        name: "phone_number",
        placeholder: "Phone number",
        value: _this.state.phone_number,
        onChange: _this.handleChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms__WEBPACK_IMPORTED_MODULE_6__["FoxReactSelectFormGroup"], {
        options: _optionLists__WEBPACK_IMPORTED_MODULE_7__["positions"],
        inputInfo: "position_in_company",
        inputValue: _this.state.position_in_company,
        handleChange: _this.handleReactSelect
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms__WEBPACK_IMPORTED_MODULE_6__["FoxSelectFormGroup"], {
        options: _optionLists__WEBPACK_IMPORTED_MODULE_7__["tradeCompetencies"],
        inputInfo: "trade_competency",
        inputValue: _this.state.trade_competency,
        handleChange: _this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CInput"], {
        id: "card_number_id",
        name: "card_number_id",
        placeholder: "Card number ID",
        value: _this.state.card_number_id,
        onChange: _this.handleChange,
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms__WEBPACK_IMPORTED_MODULE_6__["FoxFormGroupWithUpload"], {
        inputValue: _this.state.license_number,
        handleChange: _this.handleChange,
        handleFileUpload: _this.handleFileUpload,
        inputInfo: "license_number",
        uploadInfo: "license_scan"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms__WEBPACK_IMPORTED_MODULE_6__["FoxFormGroupWithUpload"], {
        inputValue: _this.state.passport,
        handleChange: _this.handleChange,
        handleFileUpload: _this.handleFileUpload,
        inputInfo: "passport",
        uploadInfo: "passport_scan"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms__WEBPACK_IMPORTED_MODULE_6__["FoxFormGroupWithUpload"], {
        inputValue: _this.state.safety_green_card,
        handleChange: _this.handleChange,
        handleFileUpload: _this.handleFileUpload,
        inputInfo: "safety_green_card",
        uploadInfo: "safety_green_card_scan"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CInput"], {
        id: "registration_number",
        name: "registration_number",
        placeholder: "Registration number",
        value: _this.state.registration_number,
        onChange: _this.handleChange,
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CLabel"], {
        htmlFor: "safety_quiz_answer"
      }, "Safety quiz answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CInputFile"], {
        id: "safety_quiz_answer",
        name: "safety_quiz_answer",
        onChange: _this.handleFileUpload,
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CLabel"], {
        htmlFor: "personal_declaration"
      }, "Personal declaration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CInputFile"], {
        id: "personal_declaration",
        name: "personal_declaration",
        onChange: _this.handleFileUpload,
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCol"], {
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CButton"], {
        onClick: _this.handleSimpleSubmit,
        shape: "pill",
        type: "submit",
        color: "dark",
        variant: "outline",
        block: true
      }, "Create Worker")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCol"], {
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CButton"], {
        onClick: _this.handleSubmitWithCompetencies,
        shape: "pill",
        type: "submit",
        color: "primary",
        variant: "outline",
        block: true
      }, "Create Worker and add special competencies")))), _this.state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _this.state.error) : null)))));
    });

    return _this;
  }

  return WorkerCreate;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    contractor: state.currentUser.id
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getProfileFetch: function getProfileFetch() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getProfileFetch"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(WorkerCreate));

/***/ }),

/***/ "./src/components/views/workers/optionLists.js":
/*!*****************************************************!*\
  !*** ./src/components/views/workers/optionLists.js ***!
  \*****************************************************/
/*! exports provided: positions, tradeCompetencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positions", function() { return positions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tradeCompetencies", function() { return tradeCompetencies; });
var positions = [{
  value: -1,
  label: "Choose worker position"
}, {
  value: "Weld",
  label: "Welder"
}, {
  value: "Fit",
  label: "Fitter"
}, {
  value: "Help",
  label: "Helper"
}, {
  value: "Rig",
  label: "Rigger"
}, {
  value: "SafeOff",
  label: "Safety Officer"
}, {
  value: "Plumb",
  label: "Plumber"
}, {
  value: "Tech",
  label: "Technician"
}, {
  value: "Electr",
  label: "Electrician"
}, {
  value: "FlrInst",
  label: "Flooring Installer"
}, {
  value: "HVACInst",
  label: "HVAC Installer"
}, {
  value: "InsInst",
  label: "Insulation Installer"
}, {
  value: "Surv",
  label: "Surveyor"
}, {
  value: "BrcMans",
  label: "Brick Manson"
}, {
  value: "Roof",
  label: "Roofer"
}, {
  value: "SiteSuper",
  label: "Site Supervisor"
}, {
  value: "Other",
  label: "Other"
}];
var tradeCompetencies = [{
  id: -1,
  position: "Choose trade competency"
}, {
  id: "Civ",
  position: "Civil"
}, {
  id: "Electr",
  position: "Electrical"
}, {
  id: "Mech",
  position: "Mechanical"
}, {
  id: "Infra",
  position: "Infra"
}, {
  id: "Gen",
  position: "General"
}, {
  id: "Safe",
  position: "Safety"
}, {
  id: "Secur",
  position: "Security"
}];


/***/ })

}]);
//# sourceMappingURL=17.main.js.map