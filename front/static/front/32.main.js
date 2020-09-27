(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./src/components/views/projects/ProposalSubmit.js":
/*!*********************************************************!*\
  !*** ./src/components/views/projects/ProposalSubmit.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services */ "./src/services/index.js");
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







var workflow = new _services__WEBPACK_IMPORTED_MODULE_5__["ProjectWorkflowService"]();
var foxApi = new _services__WEBPACK_IMPORTED_MODULE_5__["FoxApiService"]();

var ProposalSubmit = /*#__PURE__*/function (_Component) {
  _inherits(ProposalSubmit, _Component);

  var _super = _createSuper(ProposalSubmit);

  function ProposalSubmit() {
    var _this;

    _classCallCheck(this, ProposalSubmit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      status: "Created",
      error: ""
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(_this.props);
              _context.next = 3;
              return workflow.submitProposal(_this.props.match.params.id).then(_this.props.history.goBack()).catch(function (error) {
                console.error(error);

                _this.setState({
                  error: 'Proposal submit failed!' + ' Please check your input and try again!' + ' In case this problem repeats, please contact your administrator!'
                });
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.props.getProfileFetch().then(function () {
                return foxApi.getDetailsOf('projects', _this.props.match.params.id);
              }).then(function (data) {
                _this.setState({
                  status: data.status
                });
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return (// this.state.status === "Created" || this.state.status === "Rejected"
        ['Created', 'Rejected'].includes(_this.state.status) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCol"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Rules and Regulations to Comply")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "The person in charge/contractor\u2019s supervisor will be wholly responsible and accountable for the behavior and safety of his worker and implement all safety measures."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "By acknowledging this he/she shall be responsible for any incident or accident and hereby agreed upon all of the above terms and conditions. The University shall have the authority to stop work immediately if the regulations are not met."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "Please attach this permit with a list of workers\u2019 name & identification number (IC/work permit/passport) as well as risk assessment, method statement, HIRAC or any other relevant document as requested by the university."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "Contractor shall not plug in any gadget or laptop to the university\u2019s network or power point unless permitted."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "Contractor's PIC must give instructions to workers and be present at site at all time to supervise the work."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "Contractor must wear employee pass and suitable PPE at all time whenever they are at site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "Work on weekend or public holidays will need approval from the authorizing person from the Client\u2019s department."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "30km/h speed limits for vehicle should apply and priority to pedestrian."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "Contractor is forbidden to enter areas in which not stated in the permit."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "Any usage of fire extinguishing equipment must be report to the university immediately."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "Any damages done to the university\u2019s property shall be reported immediately and if in any case damages not reported, additional penalty will be imposed to the contractor on top of the rectification cost."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "Contractor should not store any equipment, machinery or tools within the university\u2019s premises. If there is a need, contractor must clarify and liaise with Head of Engineering Services for temporary storage."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "Smoking is prohibited unless at the designated area."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "The workplace must be kept clean and tidy after the work completed or stopped and needs to resume the next day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "Malaysia\u2019s OSHA 1994 of safety regulation for hot work, working at height, excavation and lock-out, LOTO and confined spaces shall apply."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "Work must be stopped at 5.30 pm unless permitted by the university. Doors must be locked and lights turned off."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "All vehicle should park at the designated parking area."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "The validity of each permit is 7 days from the date of issuance."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "The university will not be liable for any accident occurred at site after issuing this permit."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CListGroupItem"], null, "The permit to work should be submitted 3 working days prior commencement of work.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardBody"], null, "I certify that I understand and will comply with all the requirement of this application to work and strictly comply with the company\u2019s rules and regulation as well as Malaysia\u2019s OSHA Act 1994. Intolerable risk subjected to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "any violation of this application\u2019s requirement may cause work process being stopped"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CCardFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["CButton"], {
          type: "submit",
          color: "dark",
          variant: "outline",
          block: true,
          onClick: _this.handleSubmit
        }, "Submit Proposal"), _this.state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _this.state.error) : null)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/projects/".concat(_this.props.match.params.id, "/application_status")
        })
      );
    });

    return _this;
  }

  return ProposalSubmit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getProfileFetch: function getProfileFetch() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getProfileFetch"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(ProposalSubmit));

/***/ })

}]);
//# sourceMappingURL=32.main.js.map