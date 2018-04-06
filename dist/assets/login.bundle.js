!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=27)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.token=sessionStorage.getItem("token"),o=t.exists=function(){return void 0!==n&&" Bearer undefined"!==n};t.inOrOut=function(){var e=document.getElementsByClassName("in_or_out")[0];o()?e.textContent="Abmelden":e.textContent="Anmelden",e.addEventListener("click",function(){o()&&(sessionStorage.removeItem("token"),sessionStorage.removeItem("user"))})}},2:function(e,t,r){"use strict";var n=r(5),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=r(0),s={getURL:function(e){return"https://leftloversgateway.azurewebsites.net/"+e},headerToken:function(){return!1!==(arguments.length>0&&void 0!==arguments[0]&&arguments[0])?(0,i.exists)()?new Headers({"content-type":"application/json",Authorization:i.token}):new Headers({"content-type":"application/json"}):(0,i.exists)()?{headers:new Headers({Authorization:i.token})}:void 0},getRequest:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return""===t?(0,o.default)(s.getURL(e),s.headerToken()):(0,o.default)(s.getURL(e)+"?"+t,s.headerToken())},postRequest:function(e,t){return(0,o.default)(s.getURL(e),{method:"POST",headers:s.headerToken(!0),body:t})},checkForExceptions:function(e){e.status>=200&&e.status<=300?console.log(e.headers):console.error(e)}};e.exports=s},27:function(e,t,r){"use strict";var n=r(28),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=r(2),s=r(3),a=function(){var e=!0,t=document.getElementById("login_benutzer"),r=document.getElementById("login_passwort");""!==t.value&&t.value?(0,s.remove_div)("! Gib einen Benutzernamen an"):((0,s.create_div)(t,"! Gib einen Benutzernamen an"),e=!1),""!==r.value&&r.value?(0,s.remove_div)("! Gib ein Passwort an"):((0,s.create_div)(r,"! Gib ein Passwort an"),e=!1),e&&((0,s.create_div)(r,"einen Moment...",!1),(0,i.postRequest)("UAAService/login",JSON.stringify(new o.default(t.value,r.value))).then(function(e){return(0,s.remove_div)("einen Moment..."),200!==e.status?((0,s.create_div)(r,"! Benutzername oder Passwort falsch"),new Error(e.statusText)):((0,s.remove_div)("! Benutzername oder Passwort falsch"),e.json())}).then(function(e){return sessionStorage.setItem("token"," Bearer "+e.token),alert("token: "+e.token),void 0!=e.token&&(window.location.href="./search.html"),e}).catch(function(e){return console.log(e)}))};window.addEventListener("load",function(){var e=document.getElementById("anmelde_button"),t=document.getElementById("login_passwort");e.addEventListener("click",function(){return a()}),t.addEventListener("keypress",function(e){13===e.keyCode&&a()})})},28:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function e(t,r){n(this,e),this.username=t,this.password=r};e.exports=o},3:function(e,t,r){"use strict";var n={create_div:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("DIV"!==e.nextElementSibling.nodeName){var n=document.createElement("div");r&&n.classList.add("error_div"),n.setAttribute("id",t),n.textContent=t,e.parentNode.insertBefore(n,e.nextSibling)}},remove_div:function(e){document.getElementById(e)&&document.getElementById(e).parentNode.removeChild(document.getElementById(e))}};e.exports=n},5:function(e,t,r){r(7),e.exports=self.fetch.bind(self)},7:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return m.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function s(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function a(e){var t=new FileReader,r=s(t);return t.readAsArrayBuffer(e),r}function u(e){var t=new FileReader,r=s(t);return t.readAsText(e),r}function d(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function f(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function c(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(m.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(m.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(m.arrayBuffer&&m.blob&&w(e))this._bodyArrayBuffer=f(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!_(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(d(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(e){var t=e.toUpperCase();return g.indexOf(t)>-1?t:e}function l(e,t){t=t||{};var r=t.body;if(e instanceof l){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=h(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function y(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function p(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var m={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(e){return e&&DataView.prototype.isPrototypeOf(e)},_=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this,{body:this._bodyInit})},c.call(l.prototype),c.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var B=[301,302,303,307,308];b.redirect=function(e,t){if(-1===B.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=l,e.Response=b,e.fetch=function(e,t){return new Promise(function(r,n){var o=new l(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:p(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new b(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}});
//# sourceMappingURL=login.bundle.js.map