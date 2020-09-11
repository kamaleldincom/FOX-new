(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/components/tables/ExtendedListTable.js":
/*!****************************************************!*\
  !*** ./src/components/tables/ExtendedListTable.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _WorkStatusDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkStatusDropdown */ "./src/components/tables/WorkStatusDropdown.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ExtendedListTable = /*#__PURE__*/function (_Component) {
  _inherits(ExtendedListTable, _Component);

  var _super = _createSuper(ExtendedListTable);

  function ExtendedListTable() {
    var _this;

    _classCallCheck(this, ExtendedListTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "alertOnClick", function (id, e) {
      _this.props.history.push("".concat(_this.props.match.url, "/").concat(id));
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCardHeader"], {
        className: "d-flex justify-content-between"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCardTitle"], null, _this.props.tableName), _this.props.tableName === "Projects" && _this.props.role === "Contr" ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
        className: "btn btn-outline-success",
        to: "".concat(_this.props.match.url, "/new")
      }, "Add new")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CDataTable"], {
        items: _this.props.tableData ? _this.props.tableData : [],
        fields: _this.props.fields ? _this.props.fields : [],
        clickableRows: true,
        hover: true,
        striped: true,
        bordered: true,
        sorter: true,
        footer: true,
        tableFilter: true,
        columnFilter: true,
        size: "sm",
        itemsPerPage: 10,
        itemsPerPageSelect: true,
        pagination: true,
        scopedSlots: {
          'name': function name(item) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
              to: "".concat(_this.props.match.url, "/").concat(item.id)
            }, item.name));
          },
          'application_status': function application_status(item) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CBadge"], {
              color: _this.props.getBadge(item.application_status)
            }, item.application_status));
          },
          'work_status': function work_status(item) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
              className: "d-flex align-items-center"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CBadge"], {
              color: _this.props.getBadge(item.work_status)
            }, item.work_status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WorkStatusDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
              key: item.id,
              item: item
            }, _this.props)));
          }
        }
      })))));
    });

    return _this;
  }

  return ExtendedListTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    role: state.currentUser.role
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(ExtendedListTable));

/***/ }),

/***/ "./src/components/tables/FoxEntityListTable.js":
/*!*****************************************************!*\
  !*** ./src/components/tables/FoxEntityListTable.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var FoxEntityListTable = /*#__PURE__*/function (_Component) {
  _inherits(FoxEntityListTable, _Component);

  var _super = _createSuper(FoxEntityListTable);

  function FoxEntityListTable() {
    var _this;

    _classCallCheck(this, FoxEntityListTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "alertOnClick", function (id, e) {
      _this.props.history.push("".concat(_this.props.match.url, "/").concat(id));
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCardHeader"], {
        className: "d-flex justify-content-between"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCardTitle"], null, _this.props.tableName), _this.props.tableName === "Projects" && _this.props.role === "Contr" ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
        className: "btn btn-outline-success",
        to: "".concat(_this.props.match.url, "/new")
      }, "Add new")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CDataTable"], {
        items: _this.props.tableData ? _this.props.tableData : [],
        fields: _this.props.fields ? _this.props.fields : [],
        clickableRows: true,
        hover: true,
        striped: true,
        bordered: true,
        sorter: true,
        footer: true,
        tableFilter: true,
        columnFilter: true,
        size: "sm",
        itemsPerPage: 10,
        itemsPerPageSelect: true,
        pagination: true,
        scopedSlots: {
          'username': function username(item) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CButton"], {
              color: "link",
              onClick: function onClick(e) {
                _this.alertOnClick(item.id, e);
              }
            }, item.username));
          },
          'project_name': function project_name(item) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CButton"], {
              color: "link",
              onClick: function onClick(e) {
                _this.alertOnClick(item.id, e);
              }
            }, item.project_name));
          }
        }
      })))));
    });

    return _this;
  }

  return FoxEntityListTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    role: state.currentUser.role
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(FoxEntityListTable));

/***/ }),

/***/ "./src/components/tables/WorkStatusDropdown.js":
/*!*****************************************************!*\
  !*** ./src/components/tables/WorkStatusDropdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var foxApi = new _services__WEBPACK_IMPORTED_MODULE_2__["FoxApiService"]();
var choices = [{
  Works_started: 'Works started'
}, {
  Works_finished: 'Works finished'
}, {
  Extended: 'Extended'
}, {
  Closed: 'Closed'
}];

var handleClick = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, event) {
    var value, props;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            value = _ref.value, props = _ref.props;
            _context.next = 3;
            return foxApi.patchEntityOf("projects", props.item.id, {
              status: value
            }).then(function () {
              props.getProjectList();
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleClick(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

var WorkStatusDropdown = function WorkStatusDropdown(props) {
  return props.role === "CliAdm" && props.item.work_status !== "Application processing" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["CDropdown"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["CDropdownToggle"], {
    className: "project-table-toggle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      margin: "0"
    },
    className: "table-dropdown-icon",
    name: 'cilSettings'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["CDropdownMenu"], {
    className: "p-0",
    placement: "bottom-end"
  }, choices.map(function (choice, idx) {
    var _Object$entries$ = _slicedToArray(Object.entries(choice)[0], 2),
        value = _Object$entries$[0],
        name = _Object$entries$[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_4__["CDropdownItem"], {
      key: idx,
      value: value,
      onClick: function onClick(event) {
        return handleClick({
          value: value,
          props: props
        }, event);
      }
    }, name);
  }))) : null;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    role: state.currentUser.role
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getProjectList: function getProjectList() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["getProjectList"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(WorkStatusDropdown));

/***/ }),

/***/ "./src/components/tables/index.js":
/*!****************************************!*\
  !*** ./src/components/tables/index.js ***!
  \****************************************/
/*! exports provided: FoxEntityListTable, ExtendedListTable, WorkStatusDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FoxEntityListTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoxEntityListTable */ "./src/components/tables/FoxEntityListTable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxEntityListTable", function() { return _FoxEntityListTable__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _WorkStatusDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkStatusDropdown */ "./src/components/tables/WorkStatusDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkStatusDropdown", function() { return _WorkStatusDropdown__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ExtendedListTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExtendedListTable */ "./src/components/tables/ExtendedListTable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendedListTable", function() { return _ExtendedListTable__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ })

}]);
//# sourceMappingURL=3.main.js.map