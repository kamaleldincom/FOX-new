(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
  return "Choose ".concat(makeLabel(inputString), " info");
};

var getValueFromOptions = function getValueFromOptions(value, options) {
  return options.find(function (option) {
    return option.value === value;
  });
};

var FoxReactSelectFormGroup = function FoxReactSelectFormGroup(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLabel"], {
    htmlFor: props.inputInfo
  }, makeLabel(props.inputInfo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CLabel"], {
    htmlFor: props.inputInfo
  }, makeLabel(props.inputInfo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CSelect"], {
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
/*! exports provided: FoxFormGroupWithUpload, FoxSelectFormGroup, FoxReactSelectFormGroup, FoxFormGroupInputDownloadUpload, FoxFormGroupDownloadUpload, FoxProjectDocumentDownloadUploadFormGroup */
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
//# sourceMappingURL=2.main.js.map