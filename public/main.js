(()=>{var r={744:(r,t,n)=>{"use strict";var e=n(379),o=n.n(e),i=n(795),a=n.n(i),c=n(569),s=n.n(c),u=n(565),l=n.n(u),f=n(216),p=n.n(f),h=n(589),d=n.n(h),v=n(556),m={};function g(r,t,n,e,o,i,a){try{var c=r[i](a),s=c.value}catch(r){return void n(r)}c.done?t(s):Promise.resolve(s).then(e,o)}m.styleTagTransform=d(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),o()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals,n(666);var y=document.querySelector(".photo"),x=document.querySelector(".name"),b=document.querySelector(".profession"),w=document.querySelector(".comments"),L=document.querySelector(".fa-angle-right"),E=document.querySelector(".fa-angle-left"),C=document.querySelector(".random"),S=0;(function(){var r,t=(r=regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("../src/data/users.json");case 2:return t=r.sent,r.next=5,t.json();case 5:return n=r.sent,r.abrupt("return",n);case 7:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){g(i,e,o,a,c,"next",r)}function c(r){g(i,e,o,a,c,"throw",r)}a(void 0)}))});return function(){return t.apply(this,arguments)}})()().then((function(r){j(r),k(r)})).catch((function(r){return console.log(r)}));var j=function(r){var t=r[S];y.src=t.profile,x.textContent=t.name,b.textContent=t.profession,w.textContent=t.comment},k=function(r){L.addEventListener("click",(function(){++S>r.length-1&&(S=0),j(r)})),E.addEventListener("click",(function(){--S<0&&(S=r.length-1),j(r)})),C.addEventListener("click",(function(){S=Math.floor(Math.random()*r.length),j(r)}))}},556:(r,t,n)=>{"use strict";n.d(t,{Z:()=>c});var e=n(81),o=n.n(e),i=n(645),a=n.n(i)()(o());a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap);"]),a.push([r.id,":root {\r\n    --bgColor: #f2ffed;\r\n    --textColor: #36b807;\r\n    --btnColor: #36b80711;\r\n    --commentsBGColor: #ffffff;\r\n    --boxShadowContainer: -1px 5px 14px 3px #696969;\r\n    --boxShadowIMG: 12px -6px 0px -2px #36b807;\r\n    --paragraColor: #5c5c5c;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: var(--bgColor);\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 16px;\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.container {\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.title {\r\n    font-size: 2.5rem;\r\n    font-weight: 600;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.underline {\r\n    color: var(--textColor);\r\n    text-decoration: underline;\r\n}\r\n\r\n.container-comments {\r\n    background-color: var(--commentsBGColor);\r\n    border-radius: 10px;\r\n    padding: 30px;\r\n    box-shadow: var(--boxShadowContainer);\r\n}\r\n\r\n.photo {\r\n    border-radius: 50%;\r\n    box-shadow: var(--boxShadowIMG);\r\n    margin-bottom: 0.8rem;\r\n    -webkit-user-drag: none;\r\n}\r\n\r\n.img-container {\r\n    position: relative;\r\n}\r\n\r\n.fa-quote-right {\r\n    padding: 10px;\r\n    color: var(--commentsBGColor);\r\n    background-color: var(--textColor);\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    font-size: 1.4rem;\r\n\r\n}\r\n\r\n.name {\r\n    font-size: 1.3rem;\r\n    font-weight: 700;\r\n    letter-spacing: 0.1rem;\r\n}\r\n\r\n.profession {\r\n    text-transform: uppercase;\r\n    color: var(--textColor);\r\n}\r\n\r\n.comments {\r\n    margin: 0.8rem 0;\r\n    color: var(--paragraColor);\r\n}\r\n\r\n.fa-angle-left {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.arrow i {\r\n    font-size: 1.5rem;\r\n    color: var(--textColor);\r\n    cursor: pointer;\r\n}\r\n\r\n.btn {\r\n    margin-top: 1rem;\r\n    padding: 8px 15px;\r\n    border: 1px solid var(--textColor);\r\n    color: var(--textColor);\r\n    background-color: var(--btnColor);\r\n    border-radius: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 425px) {\r\n    .title {\r\n        margin-bottom: 1.5rem;\r\n    }\r\n\r\n    .container-comments {\r\n        width: 90vw;\r\n        padding: 30px 5px;\r\n    }\r\n\r\n    .arrow i {\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    .btn {\r\n        font-size: 1.2rem;\r\n    }\r\n}",""]);const c=a},645:r=>{"use strict";r.exports=function(r){var t=[];return t.toString=function(){return this.map((function(t){var n="",e=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),e&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=r(t),e&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(r,n,e,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<r.length;u++){var l=[].concat(r[u]);e&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:r=>{"use strict";r.exports=function(r){return r[1]}},666:r=>{var t=function(r){"use strict";var t,n=Object.prototype,e=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(r,t,n){return Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),r[t]}try{s({},"")}catch(r){s=function(r,t,n){return r[t]=n}}function u(r,t,n,e){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),a=new _(e||[]);return i._invoke=function(r,t,n){var e=f;return function(o,i){if(e===h)throw new Error("Generator is already running");if(e===d){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===f)throw e=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=h;var s=l(r,t,n);if("normal"===s.type){if(e=n.done?d:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(e=d,n.method="throw",n.arg=s.arg)}}}(r,n,a),i}function l(r,t,n){try{return{type:"normal",arg:r.call(t,n)}}catch(r){return{type:"throw",arg:r}}}r.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function m(){}function g(){}function y(){}var x={};s(x,i,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==n&&e.call(w,i)&&(x=w);var L=y.prototype=m.prototype=Object.create(x);function E(r){["next","throw","return"].forEach((function(t){s(r,t,(function(r){return this._invoke(t,r)}))}))}function C(r,t){function n(o,i,a,c){var s=l(r[o],r,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&e.call(f,"__await")?t.resolve(f.__await).then((function(r){n("next",r,a,c)}),(function(r){n("throw",r,a,c)})):t.resolve(f).then((function(r){u.value=r,a(u)}),(function(r){return n("throw",r,a,c)}))}c(s.arg)}var o;this._invoke=function(r,e){function i(){return new t((function(t,o){n(r,e,t,o)}))}return o=o?o.then(i,i):i()}}function S(r,n){var e=r.iterator[n.method];if(e===t){if(n.delegate=null,"throw"===n.method){if(r.iterator.return&&(n.method="return",n.arg=t,S(r,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(e,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[r.resultName]=i.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(r){var t={tryLoc:r[0]};1 in r&&(t.catchLoc=r[1]),2 in r&&(t.finallyLoc=r[2],t.afterLoc=r[3]),this.tryEntries.push(t)}function k(r){var t=r.completion||{};t.type="normal",delete t.arg,r.completion=t}function _(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(j,this),this.reset(!0)}function O(r){if(r){var n=r[i];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:T}}function T(){return{value:t,done:!0}}return g.prototype=y,s(L,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),r.isGeneratorFunction=function(r){var t="function"==typeof r&&r.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,y):(r.__proto__=y,s(r,c,"GeneratorFunction")),r.prototype=Object.create(L),r},r.awrap=function(r){return{__await:r}},E(C.prototype),s(C.prototype,a,(function(){return this})),r.AsyncIterator=C,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new C(u(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(r){return r.done?r.value:a.next()}))},E(L),s(L,c,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),r.keys=function(r){var t=[];for(var n in r)t.push(n);return t.reverse(),function n(){for(;t.length;){var e=t.pop();if(e in r)return n.value=e,n.done=!1,n}return n.done=!0,n}},r.values=O,_.prototype={constructor:_,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),u=e.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(r,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===r||"continue"===r)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=r,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(r,t){if("throw"===r.type)throw r.arg;return"break"===r.type||"continue"===r.type?this.next=r.arg:"return"===r.type?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):"normal"===r.type&&t&&(this.next=t),v},finish:function(r){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===r)return this.complete(n.completion,n.afterLoc),k(n),v}},catch:function(r){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===r){var e=n.completion;if("throw"===e.type){var o=e.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:O(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),v}},r}(r.exports);try{regeneratorRuntime=t}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},379:r=>{"use strict";var t=[];function n(r){for(var n=-1,e=0;e<t.length;e++)if(t[e].identifier===r){n=e;break}return n}function e(r,e){for(var i={},a=[],c=0;c<r.length;c++){var s=r[c],u=e.base?s[0]+e.base:s[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var p=n(f),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var d=o(h,e);e.byIndex=c,t.splice(c,0,{identifier:f,updater:d,references:1})}a.push(f)}return a}function o(r,t){var n=t.domAPI(t);return n.update(r),function(t){if(t){if(t.css===r.css&&t.media===r.media&&t.sourceMap===r.sourceMap&&t.supports===r.supports&&t.layer===r.layer)return;n.update(r=t)}else n.remove()}}r.exports=function(r,o){var i=e(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=e(r,o),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:r=>{"use strict";var t={};r.exports=function(r,n){var e=function(r){if(void 0===t[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}t[r]=n}return t[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}},216:r=>{"use strict";r.exports=function(r){var t=document.createElement("style");return r.setAttributes(t,r.attributes),r.insert(t,r.options),t}},565:(r,t,n)=>{"use strict";r.exports=function(r){var t=n.nc;t&&r.setAttribute("nonce",t)}},795:r=>{"use strict";r.exports=function(r){var t=r.insertStyleElement(r);return{update:function(n){!function(r,t,n){var e="";n.supports&&(e+="@supports (".concat(n.supports,") {")),n.media&&(e+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(e+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),e+=n.css,o&&(e+="}"),n.media&&(e+="}"),n.supports&&(e+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(e,r,t.options)}(t,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(t)}}}},589:r=>{"use strict";r.exports=function(r,t){if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,exports:{}};return r[e](i,i.exports,n),i.exports}n.n=r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return n.d(t,{a:t}),t},n.d=(r,t)=>{for(var e in t)n.o(t,e)&&!n.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:t[e]})},n.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),n(666),n(744)})();
