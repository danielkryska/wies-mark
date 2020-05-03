function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function asyncGeneratorStep(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){asyncGeneratorStep(i,r,o,a,c,"next",t)}function c(t){asyncGeneratorStep(i,r,o,a,c,"throw",t)}a(void 0)}))}}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){return function(){var e,n=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var r="".concat(t*e/n-t,"ms"),o=2*Math.PI*e/n;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var r=e/n,o="".concat(t*r-t,"ms"),i=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:"".concat(9-9*e,"px"),"animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(t*e/n-t,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(t*e/n-t,"ms")}}}}}},DnKK:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("XNiG"),o=n("l7GE"),i=n("ZUHj"),a=function(){function t(e){_classCallCheck(this,t),this.notifier=e}return _createClass(t,[{key:"call",value:function(t,e){var n=new c(t),r=Object(i.a)(n,this.notifier);return r&&!n.seenValue?(n.add(r),e.subscribe(n)):n}}]),t}(),c=function(t){_inherits(n,t);var e=_createSuper(n);function n(t){var r;return _classCallCheck(this,n),(r=e.call(this,t)).seenValue=!1,r}return _createClass(n,[{key:"notifyNext",value:function(t,e,n,r,o){this.seenValue=!0,this.complete()}},{key:"notifyComplete",value:function(){}}]),n}(o.a);function u(t){return"function"==typeof t}var s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ngOnDestroy";return function(n){var o,i=t[e];if(!1===u(i))throw new Error("".concat(t.constructor.name," is using untilDestroyed but doesn't implement ").concat(e));return t.__takeUntilDestroy||(t.__takeUntilDestroy=new r.a,t[e]=function(){u(i)&&i.apply(this,arguments),t.__takeUntilDestroy.next(!0),t.__takeUntilDestroy.complete()}),n.pipe((o=t.__takeUntilDestroy,function(t){return t.lift(new a(o))}))}}},KwJk:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c}));var r=function(t,e){return null!==e.closest(t)},o=function(t){return"string"==typeof t&&t.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(t),!0):void 0},i=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,c=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||a.test(e)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),o.push(e,r)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n,r,o,i){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,r,i,o));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,o&&o.forEach((function(t){return a.classList.add(t)})),i&&Object.assign(a,i),n.appendChild(a),t.t0=a.componentOnReady,!t.t0){t.next=12;break}return t.next=12,a.componentOnReady();case 12:return t.abrupt("return",a);case 13:case"end":return t.stop()}}),t)})));return function(e,n,r,o,i){return t.apply(this,arguments)}}(),o=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},U5Sr:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s}));var r=n("lJxs"),o=n("AytR"),i=n("fXoL"),a=n("tk/3"),c=function t(e,n){var r=u(e,n.value);return console.log(e,n),r||e.isLeaf||!e.children?r:e.children.map((function(e){return t(e,n)})).some((function(t){return t}))},u=function(t,e){return!!t&&(t.value===e||!t.isLeaf&&!!t.children&&t.children.some((function(t){return t.value===e})))},s=function(){var t=function(){function t(e){var n=this;_classCallCheck(this,t),this._http=e,this.findParentCategoryBy=function(t){return n.categories$.pipe(Object(r.a)((function(e){var n=function t(e,n){var r=e.filter((function(t){return!!t&&!t.isLeaf}));return e.find((function(t){return u(t,n)}))||t(r.map((function(t){return t.children})).reduce((function(t,e){return[].concat(_toConsumableArray(t),_toConsumableArray(e))}),[]),n)}(e,t);if(!n)throw new Error("Parent couldn't be found, value: ".concat(t));return n}))).toPromise()}}return _createClass(t,[{key:"categories$",get:function(){return this._http.get("".concat(o.a.API_URL,"/categories"))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Tb(a.a))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},Uwmq:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){try{if("string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach((function(t){for(var n=e.querySelectorAll(t),r=n.length-1;r>=0;r--){var a=n[r];a.parentNode?a.parentNode.removeChild(a):e.removeChild(a);for(var c=i(a),u=0;u<c.length;u++)o(c[u])}}));for(var r=i(e),a=0;a<r.length;a++)o(r[a]);var u=document.createElement("div");u.appendChild(e);var s=u.querySelector("div");return null!==s?s.innerHTML:u.innerHTML}catch(f){return console.error(f),""}},o=function t(e){if(!e.nodeType||1===e.nodeType){for(var n=e.attributes.length-1;n>=0;n--){var r=e.attributes.item(n),o=r.name;if(a.includes(o.toLowerCase())){var c=r.value;null!=c&&c.toLowerCase().includes("javascript:")&&e.removeAttribute(o)}else e.removeAttribute(o)}for(var u=i(e),s=0;s<u.length;s++)t(u[s])}},i=function(t){return null!=t.children?t.children:t.childNodes},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},fzvj:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return r}));var r=function(){var t=window.TapticEngine;t&&t.selection()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},a=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}}}]);