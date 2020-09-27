(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./src/components/views/projects/ProjectCreate.js":
/*!********************************************************!*\
  !*** ./src/components/views/projects/ProjectCreate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var django_react_csrftoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! django-react-csrftoken */ "./node_modules/django-react-csrftoken/index.js");
/* harmony import */ var django_react_csrftoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(django_react_csrftoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services */ "./src/services/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../forms */ "./src/components/forms/index.js");
/* harmony import */ var _optionsLists__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./optionsLists */ "./src/components/views/projects/optionsLists.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var ProjectCreate = /*#__PURE__*/function (_Component) {
  _inherits(ProjectCreate, _Component);

  var _super = _createSuper(ProjectCreate);

  function ProjectCreate() {
    var _this;

    _classCallCheck(this, ProjectCreate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      name: "",
      location: "",
      description: "",
      start_date: "",
      end_date: "",
      company: _this.props.company,
      contractor: "-1",
      work_at_height: false,
      lifting_work: false,
      confined_space: false,
      hot_work: false,
      chemical_handling: false,
      work_alone: false,
      work_at_sensitive_area: false,
      cold_work: false,
      error: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleCheck", function (event) {
      console.log(event);

      _this.setState(_defineProperty({}, event.target.name, event.target.checked));
    });

    _defineProperty(_assertThisInitialized(_this), "handleReactSelect", function (option, event) {
      _this.setState(_defineProperty({}, event.name, option.value));
    });

    _defineProperty(_assertThisInitialized(_this), "silenceSubmit", function (event) {
      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCreateProject", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.handleSubmit().then(function () {
                _this.props.history.goBack();
              }).catch(function (error) {
                console.error(error);

                _this.setState({
                  error: 'Project creation failed!' + ' Please check your input and try again!' + ' In case this problem repeats, please contact your administrator!'
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleDocumentCreationRedirect", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.handleSubmit().then(function (data) {
                _this.props.history.push("/projects/".concat(data.id, "/documents/new"));
              }).catch(function (error) {
                console.error(error);

                _this.setState({
                  error: 'Project creation failed!' + ' Please check your input and try again!' + ' In case this problem repeats, please contact your administrator!'
                });
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(parseInt(_this.state.contractor) < 0)) {
                _context3.next = 4;
                break;
              }

              _this.setState({
                error: 'Contractor was not selected! Please, choose contractor form the list'
              });

              _context3.next = 9;
              break;

            case 4:
              _this.formData = _this.state;
              delete _this.formData.error;
              _context3.next = 8;
              return foxApi.createEntityOf('projects', _this.formData);

            case 8:
              return _context3.abrupt("return", _context3.sent);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this.props.getProfileFetch().then(function () {
                return _this.props.getContractorList();
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var options = _this.props.options ? _this.props.options.map(function (option) {
        return {
          value: option.id,
          label: option.username
        };
      }) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCol"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardTitle"], null, "Add New Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardSubtitle"], null, "Fill up the form below to add a new Project")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CForm"], {
        onSubmit: _this.silenceSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(django_react_csrftoken__WEBPACK_IMPORTED_MODULE_4___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CInput"], {
        id: "name",
        name: "name",
        placeholder: "Project Name",
        value: _this.state.name,
        onChange: _this.handleChange,
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CInput"], {
        id: "location ",
        name: "location",
        placeholder: "Project Works Location",
        value: _this.state.location,
        onChange: _this.handleChange,
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CTextarea"], {
        id: "description",
        name: "description",
        placeholder: "Short Project Description",
        value: _this.state.description,
        onChange: _this.handleChange,
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCol"], {
        lg: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CLabel"], {
        htmlFor: "start_date"
      }, "Start Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CInput"], {
        type: "datetime-local",
        id: "start_date",
        placeholder: "Start date",
        name: "start_date",
        value: _this.state.start_date,
        onChange: _this.handleChange,
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCol"], {
        lg: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CLabel"], {
        htmlFor: "end_date"
      }, "End Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CInput"], {
        type: "datetime-local",
        id: "end_date",
        name: "end_date",
        placeholder: "date",
        value: _this.state.end_date,
        onChange: _this.handleChange,
        required: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms__WEBPACK_IMPORTED_MODULE_7__["FoxReactSelectFormGroup"], {
        options: options,
        inputInfo: "contractor",
        inputValue: _this.state.contractor,
        handleChange: _this.handleReactSelect
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils__WEBPACK_IMPORTED_MODULE_6__["FoxSwitchGroup"], {
        groupLabel: "Choose the related hazardous work from the list below:",
        options: _optionsLists__WEBPACK_IMPORTED_MODULE_8__["permitOptions"],
        handleCheck: _this.handleCheck,
        parentState: _this.state
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CButton"], {
        shape: "pill",
        onClick: _this.handleDocumentCreationRedirect,
        color: "dark",
        variant: "outline",
        block: true
      }, "Create Project and go to document creation"), _this.state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _this.state.error) : null)))));
    });

    return _this;
  }

  return ProjectCreate;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    company: state.currentUser.company,
    options: state.entityListTable.tableData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getProfileFetch: function getProfileFetch() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getProfileFetch"])());
    },
    getContractorList: function getContractorList() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getContractorList"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ProjectCreate));

/***/ }),

/***/ "./src/components/views/projects/optionsLists.js":
/*!*******************************************************!*\
  !*** ./src/components/views/projects/optionsLists.js ***!
  \*******************************************************/
/*! exports provided: permitOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permitOptions", function() { return permitOptions; });
var permitOptions = ["work_at_height", "lifting_work", "confined_space", "hot_work", "chemical_handling", "work_alone", "work_at_sensitive_area", "cold_work"];


/***/ })

}]);
//# sourceMappingURL=16.main.js.map