(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{748:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),c=n(95),u=n(24),i=n(166),f=n(165);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(n,t);var e=s(n);function n(){var t;l(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return h(b(t=e.call.apply(e,[this].concat(c))),"componentDidMount",(function(){t.props.getProfileFetch(),console.log(t.props)})),h(b(t),"render",(function(){return o.a.createElement(f.P,null,o.a.createElement(f.k,null,t.props.username?o.a.createElement(f.t,{ratio:"16by9"},o.a.createElement("iframe",{src:"https://www.youtube.com/embed/ORUJ6gWBhrY",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):o.a.createElement(u.a,{to:""})))})),t}return n}(r.Component);e.default=Object(c.b)((function(t){return{username:t.currentUser.username}}),(function(t){return{getProfileFetch:function(){return t(Object(i.g)())}}}))(w)}}]);
//# sourceMappingURL=25.main.js.map