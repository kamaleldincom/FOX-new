(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{725:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(164),c=r(94),u=r(24),i=r(660),s=r.n(i),l=r(165);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,e);var t,r,n,c=b(u);function u(){var e;p(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return g(d(e=c.call.apply(c,[this].concat(r))),"state",{username:"",password:"",password2:""}),g(d(e),"handleChange",(function(t){e.setState(g({},t.target.name,t.target.value),(function(){e.state.password!==e.state.password2?e.props.registerError():e.props.allowRegistration(e.props.registrationToken)}))})),g(d(e),"handleSubmit",(function(t){t.preventDefault(),e.props.userRegisterFetch({password:e.state.password,token:e.props.registrationToken})})),e}return t=u,(r=[{key:"render",value:function(){return console.log(this.props.errorMessage),o.a.createElement(a.i,{fluid:!0},o.a.createElement(a.E,{className:"mt-2 mb-2"},o.a.createElement(a.h,{sm:"8",className:"mx-auto"},o.a.createElement(a.o,{onSubmit:this.handleSubmit},o.a.createElement(s.a,null),o.a.createElement(a.p,null,o.a.createElement(a.B,{htmlFor:"username"},"Name"),o.a.createElement(a.w,{id:"username",name:"username",placeholder:"Enter your name",value:this.state.username,onChange:this.handleChange,readOnly:!0,required:!0})),o.a.createElement(a.p,null,o.a.createElement(a.B,{htmlFor:"nf-password"},"Password"),o.a.createElement(a.w,{type:"password",id:"password",name:"password",placeholder:"Enter Password..",value:this.state.password,onChange:this.handleChange,required:!0}),o.a.createElement(a.B,{htmlFor:"nf-password"},"Confirm Password"),o.a.createElement(a.w,{type:"password",id:"password2",name:"password2",placeholder:"Confirm Password..",value:this.state.password2,onChange:this.handleChange,required:!0})),o.a.createElement(a.p,null,o.a.createElement(a.w,{type:"submit",value:"Submit",color:"info",disabled:this.state.password!==this.state.password2})),this.props.registerErrorFlag?o.a.createElement("p",null,this.props.errorMessage?this.props.errorMessage:"INVALID CREDENTIALS! PLEASE, CHECK YOUR PASSWORD AND PASSWORD CONFIRMATION FIELDS!"):null))))}}])&&y(t.prototype,r),n&&y(t,n),u}(n.Component),v=Object(c.b)((function(e){return{registerErrorFlag:e.registerError,registrationToken:e.registrationToken,errorMessage:e.errorMessage}}),(function(e){return{userRegisterFetch:function(t){return e(Object(l.f)(t))},registerError:function(){return e(Object(l.d)())},allowRegistration:function(t){return e(Object(l.a)(t))}}}))(E);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _(this,r)}}function _(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(u,e);var t,r,n,c=P(u);function u(){return S(this,u),c.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){return o.a.createElement(a.f,null,o.a.createElement(a.g,{color:"dark",textColor:"light"},"Register"),o.a.createElement(v,null))}}])&&R(t.prototype,r),n&&R(t,n),u}(n.Component);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=I(e);if(t){var o=I(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return x(this,r)}}function x(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var q=o.a.createElement("div",{className:"pt-3 text-center"},o.a.createElement(a.N,{size:"sm",variant:"grow",style:{width:"4rem",height:"4rem"}})),B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(s,e);var t,r,c,i=F(s);function s(){var e;A(this,s);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return L(M(e=i.call.apply(i,[this].concat(r))),"componentDidMount",(function(){e.props.userRegisterValidationFetch(e.props.token)})),e}return t=s,(r=[{key:"render",value:function(){return this.props.registerAllowed?o.a.createElement(n.Suspense,{fallback:q},o.a.createElement("div",{className:"c-app c-default-layout flex-row align-items-center"},o.a.createElement(a.i,null,o.a.createElement(a.E,{className:"justify-content-center"},o.a.createElement(a.h,{md:"6"},o.a.createElement(k,null)))))):o.a.createElement(u.a,{to:"/login"})}}])&&N(t.prototype,r),c&&N(t,c),s}(n.Component);t.default=Object(c.b)((function(e){return{userRegistered:e.userRegistered,registerAllowed:e.registerAllowed}}),(function(e){return{userRegisterValidationFetch:function(t){return e(Object(l.g)(t))}}}))(B)}}]);
//# sourceMappingURL=5.main.js.map