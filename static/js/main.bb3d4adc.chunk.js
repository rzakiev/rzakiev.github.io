(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t){t.exports={author:"malishok",values:[{ticker:"BABA",currency:"USD",targetPrice:200,risk:"medium"},{ticker:"BIDU",currency:"USD",targetPrice:230,risk:"medium"},{ticker:"SLB",currency:"USD",targetPrice:45,risk:"low"},{ticker:"FTI",currency:"USD",targetPrice:12,risk:"medium"},{ticker:"NTNX",currency:"USD",targetPrice:35,risk:"medium"},{ticker:"OIS",currency:"USD",targetPrice:8,risk:"high"},{ticker:"PAA",currency:"USD",targetPrice:16,risk:"high"},{ticker:"SABR",currency:"USD",targetPrice:15,risk:"high"},{ticker:"SPR",currency:"USD",targetPrice:45,risk:"high"},{ticker:"GAZP",currency:"RUB",targetPrice:300,risk:"low"},{ticker:"SIBN",currency:"RUB",targetPrice:500,risk:"low"},{ticker:"AFLT",currency:"RUB",targetPrice:60,risk:"low"},{ticker:"LENT",currency:"RUB",targetPrice:1800,risk:"low"},{ticker:"LKOH",currency:"RUB",targetPrice:6e3,risk:"low"},{ticker:"SBER",currency:"RUB",targetPrice:250,risk:"low"},{ticker:"VTBR",currency:"RUB",targetPrice:.05,risk:"low"},{ticker:"ALRS",currency:"RUB",targetPrice:120,risk:"low"},{ticker:"GMKN",currency:"RUB",targetPrice:25e3,risk:"low"},{ticker:"LI",currency:"USD",targetPrice:45,risk:"medium"},{ticker:"VRT",currency:"USD",targetPrice:20,risk:"medium"},{ticker:"MTLRP",currency:"RUB",targetPrice:300,risk:"high"},{ticker:"S",currency:"USD",targetPrice:63,risk:"high"},{ticker:"RASP",currency:"RUB",targetPrice:450,risk:"low"},{ticker:"AFKS",currency:"RUB",targetPrice:30,risk:"low"},{ticker:"CRWD",currency:"USD",targetPrice:250,risk:"high"},{ticker:"COUR",currency:"USD",targetPrice:30,risk:"medium"},{ticker:"PYPL",currency:"USD",targetPrice:170,risk:"medium"},{ticker:"VKCO",currency:"RUB",targetPrice:900,risk:"low"},{ticker:"META",currency:"USD",targetPrice:230,risk:"low"},{ticker:"TWTR",currency:"USD",targetPrice:60,risk:"low"},{ticker:"NOV",currency:"USD",targetPrice:25,risk:"low"},{ticker:"CRM",currency:"USD",targetPrice:330,risk:"low"},{ticker:"YNDX",currency:"RUB",targetPrice:3e3,risk:"low"},{ticker:"VET",currency:"USD",targetPrice:35,risk:"medium"}]}},28:function(t,r,e){t.exports=e(60)},36:function(t,r,e){},37:function(t,r,e){},60:function(t,r,e){"use strict";e.r(r);var n=e(2),i=e.n(n),o=e(26),a=e.n(o),c=(e(36),e(7)),u=e(10),s=e(3),h=(e(37),e(27)),l=e(6),f=e(0),p=function t(r,e,n){Object(f.a)(this,t),this.ticker=void 0,this.quote=void 0,this.marketCap=void 0,this.ticker=r,this.quote=e,this.marketCap=n},y=e(12),v=e.n(y);function d(){d=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(S){c=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var i=r&&r.prototype instanceof l?r:l,o=Object.create(i.prototype),a=new E(n||[]);return o._invoke=function(t,r,e){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return O()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var c=b(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),o}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var h={};function l(){}function f(){}function p(){}var y={};c(y,i,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(P([])));g&&g!==r&&e.call(g,i)&&(y=g);var m=p.prototype=l.prototype=Object.create(y);function w(t){["next","throw","return"].forEach(function(r){c(t,r,function(t){return this._invoke(r,t)})})}function k(t,r){var n;this._invoke=function(i,o){function a(){return new r(function(n,a){!function n(i,o,a,c){var u=s(t[i],t,o);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return n("throw",t,a,c)})}c(u.arg)}(i,o,n,a)})}return n=n?n.then(a,a):a()}}function b(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,b(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var i=n.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function x(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=p,c(m,"constructor",p),c(p,"constructor",f),f.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===f||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(k.prototype),c(k.prototype,o,function(){return this}),t.AsyncIterator=k,t.async=function(r,e,n,i,o){void 0===o&&(o=Promise);var a=new k(u(r,e,n,i),o);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(m),c(m,a,"Generator"),c(m,i,function(){return this}),c(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=e.call(o,"catchLoc"),u=e.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;x(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:P(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function g(){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(d().mark(function t(){var r,e,n;return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://iss.moex.com/iss/engines/stock/markets/shares/boards/tqbr/securities.json?iss.meta=on&iss.only=marketdata&marketdata.columns=SECID,LAST,ISSUECAPITALIZATION");case 2:if(r=t.sent,e=[],0!=(n=r.data.marketdata.data).length){t.next=7;break}return t.abrupt("return",[]);case 7:return n.forEach(function(t){if("string"===typeof t[0]&&"number"===typeof t[1]){var r=new p(t[0],t[1],t[2]);e.push(r)}}),t.abrupt("return",e);case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)}var w,k=e(1),b=function(){function t(r,e,n,i,o,a,c,u,s,h){Object(f.a)(this,t),this.author=void 0,this.ticker=void 0,this.companyName=void 0,this.currency=void 0,this.targetPrice=void 0,this.priceOnOpening=void 0,this.openingDate=void 0,this.risk=void 0,this.investmentThesis=void 0,this.upside=void 0,this.author=r,this.ticker=e,this.currency=n,this.targetPrice=i,this.priceOnOpening=a,this.openingDate=c,this.risk=o,this.companyName=s,this.investmentThesis=u}return Object(k.a)(t,[{key:"calculateUpside",value:function(t){if(!(t.quote<=0))return 100*((this.targetPrice-t.quote)/t.quote)}}]),t}();!function(t){t.USD="USD",t.RUB="RUB",t[void 0]="undefined"}(w||(w={}));var L=e(15);function x(t){for(var r=P(),e=function(e){var n=t.find(function(t){return t.ticker===r[e].ticker});if("undefined"===typeof n)return"continue";r[e].upside=r[e].calculateUpside(n)},n=0;n<r.length;n++)e(n);return r.sort(E),r}function E(t,r){return null==t.upside&&null==r.upside?0:null==t.upside&&null!=r.upside?1:null!=t.upside&&null==r.upside?-1:t.upside>r.upside?-1:1}function P(){for(var t=L,r=[],e=L.author,n=0;n<t.values.length;n++){var i=new b(e,t.values[n].ticker,"USD"==t.values[n].currency?w.USD:w.RUB,t.values[n].targetPrice,t.values[n].risk);r.push(i)}return r}var O=function t(r){Object(f.a)(this,t),this.ticker=void 0,this.quote=void 0,this.ticker=r.symbol,this.quote=r.regularMarketPrice};function S(){S=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(O){c=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var i=r&&r.prototype instanceof l?r:l,o=Object.create(i.prototype),a=new x(n||[]);return o._invoke=function(t,r,e){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return P()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),o}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var h={};function l(){}function f(){}function p(){}var y={};c(y,i,function(){return this});var v=Object.getPrototypeOf,d=v&&v(v(E([])));d&&d!==r&&e.call(d,i)&&(y=d);var g=p.prototype=l.prototype=Object.create(y);function m(t){["next","throw","return"].forEach(function(r){c(t,r,function(t){return this._invoke(r,t)})})}function w(t,r){var n;this._invoke=function(i,o){function a(){return new r(function(n,a){!function n(i,o,a,c){var u=s(t[i],t,o);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return n("throw",t,a,c)})}c(u.arg)}(i,o,n,a)})}return n=n?n.then(a,a):a()}}function k(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,k(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var i=n.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function b(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function E(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===f||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(w.prototype),c(w.prototype,o,function(){return this}),t.AsyncIterator=w,t.async=function(r,e,n,i,o){void 0===o&&(o=Promise);var a=new w(u(r,e,n,i),o);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},m(g),c(g,a,"Generator"),c(g,i,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=e.call(o,"catchLoc"),u=e.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;L(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:E(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function j(){return U.apply(this,arguments)}function U(){return(U=Object(c.a)(S().mark(function t(){var r,e;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=P().filter(function(t){return"USD"===t.currency}).map(function(t){return t.ticker}),t.next=3,_(r);case 3:return e=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function _(t){return N.apply(this,arguments)}function N(){return(N=Object(c.a)(S().mark(function t(r){var e,n,i,o;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://query1.finance.yahoo.com/v7/finance/quote?symbols="+r.join(","),t.next=3,v.a.get(e);case 3:if(n=t.sent,0!=(i=n.data.quoteResponse.result).length){t.next=7;break}return t.abrupt("return",[]);case 7:return o=[],i.forEach(function(t){if("string"===typeof t.symbol&&"number"===typeof t.regularMarketPrice){var r=new O(t);o.push(r)}}),console.log(o),t.abrupt("return",o);case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}function R(){R=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(O){c=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var i=r&&r.prototype instanceof l?r:l,o=Object.create(i.prototype),a=new x(n||[]);return o._invoke=function(t,r,e){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return P()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),o}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var h={};function l(){}function f(){}function p(){}var y={};c(y,i,function(){return this});var v=Object.getPrototypeOf,d=v&&v(v(E([])));d&&d!==r&&e.call(d,i)&&(y=d);var g=p.prototype=l.prototype=Object.create(y);function m(t){["next","throw","return"].forEach(function(r){c(t,r,function(t){return this._invoke(r,t)})})}function w(t,r){var n;this._invoke=function(i,o){function a(){return new r(function(n,a){!function n(i,o,a,c){var u=s(t[i],t,o);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return n("throw",t,a,c)})}c(u.arg)}(i,o,n,a)})}return n=n?n.then(a,a):a()}}function k(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,k(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var i=n.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function b(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function E(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===f||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(w.prototype),c(w.prototype,o,function(){return this}),t.AsyncIterator=w,t.async=function(r,e,n,i,o){void 0===o&&(o=Promise);var a=new w(u(r,e,n,i),o);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},m(g),c(g,a,"Generator"),c(g,i,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=e.call(o,"catchLoc"),u=e.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;L(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:E(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function D(){return i.a.createElement("div",null,i.a.createElement(T,null),i.a.createElement(B,null))}function T(){return i.a.createElement("nav",{className:"nav"},i.a.createElement("ul",{className:"navigation-items"},i.a.createElement("li",null,"Pricing1"),i.a.createElement("li",null,"About"),i.a.createElement("li",null,"Contact")))}function B(){var t=Object(n.useState)([]),r=Object(u.a)(t,2),e=r[0],o=r[1];Object(n.useEffect)(function(){(function(){var t=Object(c.a)(R().mark(function t(){var r,e;return R().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:r=t.sent,e=x(r).filter(function(t){return"RUB"===t.currency}),o(e);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()},[]);var a=Object(n.useState)([]),l=Object(u.a)(a,2),f=l[0],p=l[1];Object(n.useEffect)(function(){(function(){var t=Object(c.a)(R().mark(function t(){var r,e;return R().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:r=t.sent,e=x(r).filter(function(t){return"USD"===t.currency}),p(e);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()},[]);var y={labels:[].concat(Object(s.a)(e),Object(s.a)(f)).sort(E).map(function(t){return t.ticker}),datasets:[{label:"\u0410\u043f\u0441\u0430\u0439\u0434 (%)",data:[].concat(Object(s.a)(e),Object(s.a)(f)).sort(E).map(function(t){return t.upside}),backgroundColor:["rgba(173,255,47, 0.5)"],borderWidth:1}]};return console.log(y),i.a.createElement("div",{style:{height:"50vh",position:"relative",marginBottom:"1%",padding:"1%"}},i.a.createElement(h.a,{data:y,options:{maintainAspectRatio:!1}}))}l.c.register.apply(l.c,Object(s.a)(l.j));var G=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(D,null))};a.a.createRoot(document.getElementById("root")).render(i.a.createElement(G,null))}},[[28,1,2]]]);
//# sourceMappingURL=main.bb3d4adc.chunk.js.map