(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{635:function(e,n,t){"use strict";var a=t(1),r=t.n(a),o=t(165);n.a=function(e){return r.a.createElement(o.f,null,r.a.createElement(o.g,null,r.a.createElement(o.x,{key:"fg-".concat(e.document.id)},r.a.createElement(o.L,{key:"lb-".concat(e.document.id),htmlFor:e.document.id},r.a.createElement("h5",null,e.document.name)," "),e.document.url_to_doc?r.a.createElement(o.V,null,r.a.createElement(o.l,null,r.a.createElement(o.M,{key:"dl-".concat(e.document.id),href:e.document.url_to_doc,target:"_blank",className:"btn btn-ghost-primary"},"Open this document in Google Docs"))):r.a.createElement(o.V,null,r.a.createElement(o.l,{md:"3"},r.a.createElement(o.e,{variant:"outline",color:"primary",key:"cb-".concat(e.document.id),id:e.document.id,name:e.document.id,value:e.document.filename,onClick:e.downloadFile},"Download template for this document")),r.a.createElement(o.l,{md:"5"},r.a.createElement(o.L,{key:"lb-".concat(e.document.id),htmlFor:e.document.id},r.a.createElement("strong",null,"Upload filled up document:")," "),r.a.createElement(o.G,{key:"of-".concat(e.document.id),id:"file-".concat(e.document.id),name:"".concat(e.document.id),onChange:e.handleFileUpload}))))))}},639:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"e",(function(){return c})),t.d(n,"d",(function(){return m})),t.d(n,"b",(function(){return p})),t.d(n,"a",(function(){return h}));var a=t(1),r=t.n(a),o=t(165),l=function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},i=function(e){return r.a.createElement(o.x,null,r.a.createElement(o.V,null,r.a.createElement(o.l,{md:"6"},r.a.createElement(o.L,{htmlFor:e.inputInfo},l(e.inputInfo)),r.a.createElement(o.E,{id:e.inputInfo,name:e.inputInfo,placeholder:(n=e.inputInfo,"Enter ".concat(l(n)," info")),value:e.inputValue,onChange:e.handleChange,required:!0})),r.a.createElement(o.l,{md:"6"},r.a.createElement(o.L,{htmlFor:e.uploadInfo},l(e.uploadInfo)),r.a.createElement(o.G,{id:e.uploadInfo,name:e.uploadInfo,onChange:e.handleFileUpload,required:!0}))));var n},c=function(e){return r.a.createElement(o.x,null,r.a.createElement(o.W,{id:e.inputInfo,name:e.inputInfo,placeholder:(n=e.inputInfo,"Choose ".concat(function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}(n)," info")),value:e.inputValue,onChange:e.handleChange,required:!0},e.options.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.position)}))));var n},u=t(651),d=function(e,n){if(n)return n.find((function(n){return n.value===e}))},m=function(e){return r.a.createElement(o.x,null,r.a.createElement(u.a,{id:e.inputInfo,name:e.inputInfo,placeholder:(n=e.inputInfo,"Choose ".concat(function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}(n))),value:d(e.inputValue,e.options),onChange:e.handleChange,options:e.options,required:!0}));var n},s=function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},p=function(e){return r.a.createElement(o.x,null,r.a.createElement(o.V,null,r.a.createElement(o.l,{md:"5"},r.a.createElement(o.L,{htmlFor:e.inputInfo},s(e.inputInfo)),r.a.createElement(o.E,{id:e.inputInfo,name:e.inputInfo,placeholder:(n=e.inputInfo,"Enter ".concat(s(n)," info")),value:e.inputValue,onChange:e.handleChange})),r.a.createElement(o.l,{md:"2",className:"d-flex align-items-center"},r.a.createElement(o.e,{variant:"outline",color:"info",id:e.downloadValue,name:e.uploadInfo,value:e.downloadValue,onClick:e.downloadFile},"Download scan")),r.a.createElement(o.l,{md:"5"},r.a.createElement(o.L,{htmlFor:e.uploadInfo},"New ".concat(s(e.uploadInfo))),r.a.createElement(o.G,{id:e.uploadInfo,name:e.uploadInfo,onChange:e.handleFileUpload}))));var n},f=function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},h=function(e){return r.a.createElement(o.x,null,r.a.createElement(o.V,null,r.a.createElement(o.l,{md:"1"},r.a.createElement(o.L,{htmlFor:e.inputInfo},f(e.inputInfo))),r.a.createElement(o.l,{md:"2"},r.a.createElement(o.e,{variant:"outline",color:"info",id:e.downloadValue,name:e.uploadInfo,value:e.downloadValue,onClick:e.downloadFile},e.buttonText?e.buttonText:"Download scan")),r.a.createElement(o.l,{md:"5"},r.a.createElement(o.L,{htmlFor:e.uploadInfo},"New ".concat(f(e.uploadInfo))),r.a.createElement(o.G,{id:e.uploadInfo,name:e.uploadInfo,onChange:e.handleFileUpload}))))};t(635)},670:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return r}));var a=[{value:-1,label:"Choose worker position"},{value:"Weld",label:"Welder"},{value:"Fit",label:"Fitter"},{value:"Help",label:"Helper"},{value:"Rig",label:"Rigger"},{value:"SafeOff",label:"Safety Officer"},{value:"Plumb",label:"Plumber"},{value:"Tech",label:"Technician"},{value:"Electr",label:"Electrician"},{value:"FlrInst",label:"Flooring Installer"},{value:"HVACInst",label:"HVAC Installer"},{value:"InsInst",label:"Insulation Installer"},{value:"Surv",label:"Surveyor"},{value:"BrcMans",label:"Brick Manson"},{value:"Roof",label:"Roofer"},{value:"SiteSuper",label:"Site Supervisor"},{value:"Other",label:"Other"}],r=[{id:-1,position:"Choose trade competency"},{id:"Civ",position:"Civil"},{id:"Electr",position:"Electrical"},{id:"Mech",position:"Mechanical"},{id:"Infra",position:"Infra"},{id:"Gen",position:"General"},{id:"Safe",position:"Safety"},{id:"Secur",position:"Security"}]},747:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(634),l=t.n(o),i=t(95),c=t(165),u=t(166),d=t(29),m=t(639),s=t(670);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(t.push(l.value),!n||t.length!==n);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function b(e,n,t,a,r,o,l){try{var i=e[o](l),c=i.value}catch(e){return void t(e)}i.done?n(c):Promise.resolve(c).then(a,r)}function y(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function l(e){b(o,a,r,l,i,"next",e)}function i(e){b(o,a,r,l,i,"throw",e)}l(void 0)}))}}function E(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function v(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=I(e);if(n){var r=I(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return _(this,t)}}function _(e,n){return!n||"object"!==p(n)&&"function"!=typeof n?C(e):n}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var S=new d.a,k=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(t,e);var n=v(t);function t(){var e;E(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return w(C(e=n.call.apply(n,[this].concat(o))),"state",{name:"",contractor:e.props.contractor,birthday:"",phone_number:"",card_number_id:"",license_number:"",license_scan:"",passport:"",passport_scan:"",safety_green_card:"",safety_green_card_scan:"",position_in_company:-1,safety_quiz_answer:"",personal_declaration:"",submitCallback:"",registration_number:"",trade_competency:-1,error:!1}),w(C(e),"handleChange",(function(n){e.setState(w({},n.target.name,n.target.value))})),w(C(e),"handleReactSelect",(function(n,t){e.setState(w({},t.name,n.value))})),w(C(e),"handleFileUpload",(function(n){e.setState(w({},n.target.name,n.target.files[0]))})),w(C(e),"handleSubmit",function(){var n=y(regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),console.log("you are here"),-1!==e.state.position_in_company){n.next=6;break}e.setState({error:"Worker position in company was not selected! Please, choose position form the list"}),n.next=16;break;case 6:if(-1!==e.state.trade_competency){n.next=10;break}e.setState({error:"Trade competency was not selected! Please, choose competency form the list"}),n.next=16;break;case 10:return e.requestData=e.state,delete e.requestData.error,e.formData=new FormData,Object.entries(e.requestData).forEach((function(n){var t=f(n,2),a=t[0],r=t[1];e.formData.append(a,r)})),n.next=16,S.createEntityWithFile("workers",e.formData).then((function(n){e.state.submitCallback(n.id)}),(function(n){console.error(n),e.setState({error:"Worker creation failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),w(C(e),"handleSimpleSubmit",(function(n){e.setState({submitCallback:function(n){return e.props.history.goBack()}})})),w(C(e),"handleSubmitWithCompetencies",(function(n){e.setState({submitCallback:function(n){e.props.history.push("/workers/".concat(n,"/competencies/new"))}})})),w(C(e),"componentDidMount",y(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.props.getProfileFetch();case 2:case"end":return n.stop()}}),n)})))),w(C(e),"render",(function(){return r.a.createElement(c.V,null,r.a.createElement(c.l,null,r.a.createElement(c.f,null,r.a.createElement(c.i,null,r.a.createElement(c.k,null,"New Worker"),r.a.createElement(c.j,null,"Fill up the form below to add a new Worker")),r.a.createElement(c.g,null,r.a.createElement(c.w,{onSubmit:e.handleSubmit},r.a.createElement(l.a,null),r.a.createElement(c.x,null,r.a.createElement(c.E,{id:"name",name:"name",placeholder:"Name",value:e.state.name,onChange:e.handleChange,required:!0})),r.a.createElement(c.x,null,r.a.createElement(c.L,{htmlFor:"birthday"},"Birthday"),r.a.createElement(c.E,{type:"date",id:"birthday",name:"birthday",value:e.state.birthday,onChange:e.handleChange,required:!0})),r.a.createElement(c.x,null,r.a.createElement(c.E,{id:"phone_number",name:"phone_number",placeholder:"Phone number",value:e.state.phone_number,onChange:e.handleChange})),r.a.createElement(m.d,{options:s.a,inputInfo:"position_in_company",inputValue:e.state.position_in_company,handleChange:e.handleReactSelect}),r.a.createElement(m.e,{options:s.b,inputInfo:"trade_competency",inputValue:e.state.trade_competency,handleChange:e.handleChange}),r.a.createElement(c.x,null,r.a.createElement(c.E,{id:"card_number_id",name:"card_number_id",placeholder:"Card number ID",value:e.state.card_number_id,onChange:e.handleChange,required:!0})),r.a.createElement(m.c,{inputValue:e.state.license_number,handleChange:e.handleChange,handleFileUpload:e.handleFileUpload,inputInfo:"license_number",uploadInfo:"license_scan"}),r.a.createElement(m.c,{inputValue:e.state.passport,handleChange:e.handleChange,handleFileUpload:e.handleFileUpload,inputInfo:"passport",uploadInfo:"passport_scan"}),r.a.createElement(m.c,{inputValue:e.state.safety_green_card,handleChange:e.handleChange,handleFileUpload:e.handleFileUpload,inputInfo:"safety_green_card",uploadInfo:"safety_green_card_scan"}),r.a.createElement(c.x,null,r.a.createElement(c.E,{id:"registration_number",name:"registration_number",placeholder:"Registration number",value:e.state.registration_number,onChange:e.handleChange,required:!0})),r.a.createElement(c.x,null,r.a.createElement(c.L,{htmlFor:"safety_quiz_answer"},"Safety quiz answer"),r.a.createElement(c.G,{id:"safety_quiz_answer",name:"safety_quiz_answer",onChange:e.handleFileUpload,required:!0})),r.a.createElement(c.x,null,r.a.createElement(c.L,{htmlFor:"personal_declaration"},"Personal declaration"),r.a.createElement(c.G,{id:"personal_declaration",name:"personal_declaration",onChange:e.handleFileUpload,required:!0})),r.a.createElement(c.x,null,r.a.createElement(c.V,null,r.a.createElement(c.l,{md:"6"},r.a.createElement(c.e,{onClick:e.handleSimpleSubmit,shape:"pill",type:"submit",color:"dark",variant:"outline",block:!0},"Create Worker")),r.a.createElement(c.l,{md:"6"},r.a.createElement(c.e,{onClick:e.handleSubmitWithCompetencies,shape:"pill",type:"submit",color:"primary",variant:"outline",block:!0},"Create Worker and add special competencies")))),e.state.error?r.a.createElement("p",null,e.state.error):null)))))})),e}return t}(a.Component);n.default=Object(i.b)((function(e){return{contractor:e.currentUser.id}}),(function(e){return{getProfileFetch:function(){return e(Object(u.g)())}}}))(k)}}]);
//# sourceMappingURL=14.main.js.map