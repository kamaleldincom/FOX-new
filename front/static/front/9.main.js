(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/components/views/managers/ManagerList.js":
/*!******************************************************!*\
  !*** ./src/components/views/managers/ManagerList.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tables_FoxEntityListTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tables/FoxEntityListTable */ "./src/components/tables/FoxEntityListTable.js");


var usersData = [{
  id: 0,
  name: 'John Doe',
  registered: '2018/01/01',
  role: 'Guest',
  status: 'Pending'
}, {
  id: 1,
  name: 'Samppa Nori',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 2,
  name: 'Estavan Lykos',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}];

var getBadge = function getBadge(status) {
  switch (status) {
    case 'Active':
      return 'success';

    case 'Inactive':
      return 'secondary';

    case 'Pending':
      return 'warning';

    case 'Banned':
      return 'danger';

    default:
      return 'primary';
  }
};

var fields = ['name', 'registered', 'role', 'status'];

var alertOnClick = function alertOnClick() {
  alert('Clicked!');
};

var ManagerList = function ManagerList() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tables_FoxEntityListTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    tableName: "Managers",
    fields: fields,
    getBadge: getBadge,
    usersData: usersData,
    onRowClick: alertOnClick
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManagerList);

/***/ }),

/***/ "./src/components/views/managers/index.js":
/*!************************************************!*\
  !*** ./src/components/views/managers/index.js ***!
  \************************************************/
/*! exports provided: ManagerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManagerList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManagerList */ "./src/components/views/managers/ManagerList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagerList", function() { return _ManagerList__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ })

}]);
//# sourceMappingURL=9.main.js.map