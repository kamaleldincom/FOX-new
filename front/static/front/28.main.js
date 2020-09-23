(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{744:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(166),i=n(95),l=n(165),c=n(634),u=n.n(c),s=n(29);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){p(o,r,a,i,l,"next",e)}function l(e){p(o,r,a,i,l,"throw",e)}i(void 0)}))}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var a=E(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=[{id:-1,position:"Choose manager position"},{id:"SafeMan",position:"Safety Manager"},{id:"SecMan",position:"Security Manager"},{id:"SecOff",position:"Security Officer"},{id:"SiteOwn",position:"Site Owner"},{id:"WorkOwn",position:"Owner of Work"},{id:"SecGrd",position:"Security Guards"}],S=new s.a,C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(n,e);var t=y(n);function n(){var e;d(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return w(g(e=t.call.apply(t,[this].concat(o))),"state",{username:"",name:"",email:"",position:-1,department:"",company:e.props.company,role:"CliMan",error:!1}),w(g(e),"handleChange",(function(t){e.setState(w({},t.target.name,t.target.value))})),w(g(e),"handleSubmit",function(){var t=m(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),-1!==parseInt(e.state.position)){t.next=5;break}e.setState({error:"Client manager position was not selected! Please, choose position form the list"}),t.next=9;break;case 5:return e.formData=e.state,delete e.formData.error,t.next=9,S.createEntityOf("client_managers",e.formData).then((function(){e.props.history.goBack()}),(function(t){console.error(t),e.setState({error:"Client manager creation failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),w(g(e),"componentDidMount",(function(){e.props.getProfileFetch()})),w(g(e),"render",(function(){return a.a.createElement(l.V,null,a.a.createElement(l.l,null,a.a.createElement(l.f,null,a.a.createElement(l.i,null,a.a.createElement(l.k,null,"New Manager"),a.a.createElement(l.j,null,"Fill up the form below to add a new Manager")),a.a.createElement(l.g,null,a.a.createElement(l.w,{onSubmit:e.handleSubmit},a.a.createElement(u.a,null),a.a.createElement(l.x,null,a.a.createElement(l.E,{id:"username",name:"username",placeholder:"Username. This will be used for login",value:e.state.username,onChange:e.handleChange,required:!0})),a.a.createElement(l.x,null,a.a.createElement(l.E,{id:"name",name:"name",placeholder:"Verbose name",value:e.state.name,onChange:e.handleChange,required:!0})),a.a.createElement(l.x,null,a.a.createElement(l.E,{id:"email",type:"email",name:"email",placeholder:"Email",value:e.state.email,onChange:e.handleChange,required:!0})),a.a.createElement(l.x,null,a.a.createElement(l.W,{id:"position",name:"position",placeholder:"Choose position",value:e.state.position,onChange:e.handleChange,required:!0},v.map((function(e){return a.a.createElement("option",{key:e.id,value:e.id},e.position)})))),a.a.createElement(l.x,null,a.a.createElement(l.E,{id:"department",name:"department",placeholder:"Department",value:e.state.department,onChange:e.handleChange,required:!0})),a.a.createElement(l.x,null,a.a.createElement(l.e,{shape:"pill",type:"submit",color:"dark",variant:"outline",block:!0},"Create client manager")),e.state.error?a.a.createElement("p",null,e.state.error):null)))))})),e}return n}(r.Component);t.default=Object(i.b)((function(e){return{company:e.currentUser.company}}),(function(e){return{getProfileFetch:function(){return e(Object(o.g)())}}}))(C)}}]);
//# sourceMappingURL=28.main.js.map