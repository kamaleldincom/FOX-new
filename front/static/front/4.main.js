(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/components/modals/DeleteModal.js":
/*!**********************************************!*\
  !*** ./src/components/modals/DeleteModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");



var DeleteModal = function DeleteModal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CModal"], {
    show: props.danger,
    onClose: props.setModalVisibility,
    color: "danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CModalHeader"], {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CModalTitle"], null, "Confirm Deletion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CModalBody"], null, "Are you sure you want to delete this ".concat(props.entity, "?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CButton"], {
    color: "danger",
    onClick: props.confirmDelete
  }, "Confirm"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CButton"], {
    color: "secondary",
    onClick: props.setModalVisibility
  }, "Cancel")));
};

/* harmony default export */ __webpack_exports__["default"] = (DeleteModal);

/***/ }),

/***/ "./src/components/modals/index.js":
/*!****************************************!*\
  !*** ./src/components/modals/index.js ***!
  \****************************************/
/*! exports provided: DeleteModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteModal */ "./src/components/modals/DeleteModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteModal", function() { return _DeleteModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/components/tables/FoxTableWithDeleteOption.js":
/*!***********************************************************!*\
  !*** ./src/components/tables/FoxTableWithDeleteOption.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _WorkStatusDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkStatusDropdown */ "./src/components/tables/WorkStatusDropdown.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals */ "./src/components/modals/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var FoxTableWithDeleteOption = /*#__PURE__*/function (_Component) {
  _inherits(FoxTableWithDeleteOption, _Component);

  var _super = _createSuper(FoxTableWithDeleteOption);

  function FoxTableWithDeleteOption() {
    var _this;

    _classCallCheck(this, FoxTableWithDeleteOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      delete_id: "",
      error: "",
      modal: false
    });

    _defineProperty(_assertThisInitialized(_this), "getEntityFromTableName", function () {
      _this.props.tableName.toLowercase();
    });

    _defineProperty(_assertThisInitialized(_this), "callDeleteModal", function (id) {
      _this.setState({
        delete_id: id
      }, _this.setModalVisibility);
    });

    _defineProperty(_assertThisInitialized(_this), "setModalVisibility", function () {
      _this.setState({
        modal: !_this.state.modal
      });
    });

    _defineProperty(_assertThisInitialized(_this), "confirmDelete", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var entity;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                entity = _this.props.tableName.toLowerCase().replace(' ', '_');
                _context.next = 3;
                return foxApi.deleteEntityOf(entity, id).then(function () {
                  _this.props.updateList(_this.props.role);

                  _this.setModalVisibility();
                }, function (error) {
                  console.error(error);

                  _this.setState({
                    error: 'Could not delete entity!' + ' Please check your input and try again!' + ' In case this problem repeats, please contact your administrator!'
                  });
                });

              case 3:
                console.log("delete entity [".concat(entity, "] ").concat(id));

              case 4:
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

    _defineProperty(_assertThisInitialized(_this), "alertOnClick", function (id, e) {
      _this.props.history.push("".concat(_this.props.match.url, "/").concat(id));
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _ref2;

      var linkName = _this.props.fields ? _this.props.fields[0] : "username";
      var _this$state = _this.state,
          delete_id = _this$state.delete_id,
          modal = _this$state.modal;
      console.log("rendered");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCol"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCardHeader"], {
        className: "d-flex justify-content-between"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCardTitle"], null, _this.props.tableName), _this.props.tableName === "Projects" && _this.props.role === "Contr" ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
        className: "btn btn-pill btn-outline-success",
        to: "".concat(_this.props.match.url, "/new")
      }, "Add new")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CDataTable"], {
        items: _this.props.tableData ? _this.props.tableData : [],
        fields: _this.props.fields,
        clickableRows: true,
        hover: true,
        striped: true,
        bordered: true,
        sorter: true,
        tableFilter: true,
        columnFilter: true,
        size: "sm",
        itemsPerPage: 10,
        itemsPerPageSelect: true,
        pagination: true,
        scopedSlots: (_ref2 = {}, _defineProperty(_ref2, linkName, function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
            to: "".concat(_this.props.match.url, "/").concat(item.id)
          }, item[linkName]));
        }), _defineProperty(_ref2, 'application_status', function application_status(item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CBadge"], {
            shape: "pill",
            color: _this.props.getBadge(item.application_status)
          }, item.application_status));
        }), _defineProperty(_ref2, 'work_status', function work_status(item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
            className: "d-flex align-items-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CBadge"], {
            shape: "pill",
            color: _this.props.getBadge(item.work_status)
          }, item.work_status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WorkStatusDropdown__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
            key: item.id,
            item: item
          }, _this.props)));
        }), _defineProperty(_ref2, 'delete_item', function delete_item(item, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CButton"], {
            color: "danger",
            variant: "ghost",
            size: "sm",
            onClick: function onClick() {
              return _this.callDeleteModal(item.id);
            },
            block: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            name: 'cilTrash'
          })));
        }), _ref2)
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modals__WEBPACK_IMPORTED_MODULE_6__["DeleteModal"], {
        setModalVisibility: _this.setModalVisibility,
        danger: modal,
        entity: "entity",
        confirmDelete: function confirmDelete() {
          return _this.confirmDelete(delete_id);
        }
      })));
    });

    return _this;
  }

  return FoxTableWithDeleteOption;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    role: state.currentUser.role
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(FoxTableWithDeleteOption));

/***/ }),

/***/ "./src/components/tables/index.js":
/*!****************************************!*\
  !*** ./src/components/tables/index.js ***!
  \****************************************/
/*! exports provided: FoxEntityListTable, WorkStatusDropdown, FoxTableWithDeleteOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FoxEntityListTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoxEntityListTable */ "./src/components/tables/FoxEntityListTable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxEntityListTable", function() { return _FoxEntityListTable__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FoxTableWithDeleteOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoxTableWithDeleteOption */ "./src/components/tables/FoxTableWithDeleteOption.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoxTableWithDeleteOption", function() { return _FoxTableWithDeleteOption__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _WorkStatusDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkStatusDropdown */ "./src/components/tables/WorkStatusDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkStatusDropdown", function() { return _WorkStatusDropdown__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ })

}]);
//# sourceMappingURL=4.main.js.map