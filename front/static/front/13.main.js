(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{729:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(95),c=n(632),i=n.n(c),l=n(166),u=n(165),s=n(29),f=n(663);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n,r,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){h(a,r,o,c,i,"next",e)}function i(e){h(a,r,o,c,i,"throw",e)}c(void 0)}))}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=new s.a,O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(n,e);var t=g(n);function n(){var e;b(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return _(k(e=t.call.apply(t,[this].concat(a))),"state",{description:"",created:"",last_resolved:"",status:"",project:"",manager:"",error:"",filename:"",file_id:"",current_worker_id:"",current_worker_info:""}),_(k(e),"handleChange",(function(t){e.setState(_({},t.target.name,t.target.value))})),_(k(e),"handleWorkerSelect",(function(t){e.state.current_worker_id===t.target.name?e.setState({current_worker_id:""}):e.setState({current_worker_id:t.target.name})})),_(k(e),"handleSubmit",function(){var t=y(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"Rejected"!==e.state.status||e.state.description){t.next=5;break}e.setState({error:"Rejections reason was not provided! Please, specify the rejection reason!"}),t.next=13;break;case 5:return e.formData=e.state,delete e.formData.error,delete e.formData.created,delete e.formData.last_resolved,delete e.formData.current_worker_id,delete e.formData.current_worker_info,t.next=13,j.patchEntityOf("approvals",e.props.match.params.id,e.formData).then((function(){e.props.history.goBack()})).catch((function(t){console.error(t),e.setState({error:"Project update failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),_(k(e),"downloadFile",function(){var t=y(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({filename:n.target.value,file_id:n.target.name},(function(){j.downloadDocument(e.state.file_id).then((function(t){var n=window.URL.createObjectURL(new Blob([t])),r=document.createElement("a");r.href=n;var o=e.state.filename.split("/").pop();r.setAttribute("download",o),document.body.appendChild(r),r.click(),r.parentNode.removeChild(r)})).then((function(){console.log("file downloaded")})).catch((function(e){console.error("File download failed!"),console.error(e)}))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),_(k(e),"componentDidMount",y(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return j.getDetailsOf("approvals",e.props.match.params.id)})).then((function(t){return e.setState(d({},t),(function(){e.props.getDocumentList({project_id:e.state.project},!0),e.props.getWorkerList({project_id:e.state.project},!1)}))}));case 2:case"end":return t.stop()}}),t)})))),_(k(e),"render",(function(){return o.a.createElement(u.P,null,o.a.createElement(u.k,null,o.a.createElement(u.f,null,o.a.createElement(u.i,null,"Attached Documents"),o.a.createElement(u.g,null,e.props.documents?e.props.documents.map((function(t,n){return o.a.createElement(o.a.Fragment,{key:n},o.a.createElement("h6",null,t.name),t.url_to_doc?o.a.createElement(u.L,{key:"dl-".concat(t.id),href:t.url_to_doc,target:"_blank",className:"btn btn-ghost-primary"},"Open this document in Google Docs"):o.a.createElement(o.a.Fragment,null,o.a.createElement(u.e,{variant:"outline",color:"primary",key:"cb-".concat(t.id),id:t.id,name:t.id,value:t.filename,onClick:e.downloadFile},"Download document"),o.a.createElement(f.a,{document:t})))})):null)),o.a.createElement(u.f,null,o.a.createElement(u.i,null,"Workers"),o.a.createElement(u.g,null,e.props.workers?e.props.workers.map((function(t,n){return o.a.createElement(u.f,{key:"card-".concat(n),className:"mb-0"},o.a.createElement(u.i,{key:"ch-".concat(n),id:t.id},o.a.createElement("h5",{key:"h5-".concat(n),className:"m-0 p-0"},t.name),o.a.createElement("h6",{key:"h6-".concat(n),className:"m-0 p-0"},t.position_in_company),o.a.createElement(u.e,{key:"btn-".concat(n),block:!0,color:"link",className:"text-left m-0 p-0",id:t.id,value:t.id,name:t.id,onClick:e.handleWorkerSelect},"Display Details")),o.a.createElement(u.l,{key:"clps-".concat(n),show:e.state.current_worker_id===t.id.toString()},o.a.createElement(u.g,{key:"cbody-".concat(n)},o.a.createElement(f.c,{workerId:t.id}))))})):null)),o.a.createElement(u.f,null,o.a.createElement(u.g,null,o.a.createElement(u.v,{onSubmit:e.handleSubmit},o.a.createElement(i.a,null),o.a.createElement(u.w,null,o.a.createElement(u.K,{htmlFor:"description"},"Reject reason:"),o.a.createElement(u.bb,{id:"description",name:"description",value:e.state.description?e.state.description:"",onChange:e.handleChange})),o.a.createElement(u.w,null,o.a.createElement(u.e,{className:"mr-3",type:"submit",name:"status",value:"Approved",color:"success",variant:"outline",onClick:e.handleChange},"Approve"),o.a.createElement(u.e,{type:"submit",name:"status",value:"Rejected",color:"danger",variant:"outline",onClick:e.handleChange},"Reject")),e.state.error?o.a.createElement("p",null,e.state.error):null)))))})),e}return n}(r.Component);t.default=Object(a.b)((function(e){return{documents:e.additionalEntityListTable.tableData,workers:e.entityListTable.tableData}}),(function(e){return{getProfileFetch:function(){return e(Object(l.g)())},getDocumentList:function(t,n){return e(Object(l.f)(t,n))},getWorkerList:function(t,n){return e(Object(l.i)(t,n))}}}))(O)}}]);
//# sourceMappingURL=13.main.js.map