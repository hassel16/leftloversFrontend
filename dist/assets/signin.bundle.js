!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=20)}([,,,,,function(e,t,r){"use strict";var n=r(6),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i={getURL:function(e){return"https://leftloversgateway.azurewebsites.net/"+e},getRequest:function(e){return i.getURL(e)},postRequest:function(e,t){return(0,o.default)(i.getURL(e),{method:"POST",headers:{"content-type":"application/json"},body:t})},checkForExceptions:function(e){201===e.status?console.log(e.headers):400===e.status||console.error(e)}};e.exports=i},function(e,t,r){r(7),e.exports=self.fetch.bind(self)},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return v.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function s(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function a(e){var t=new FileReader,r=s(t);return t.readAsArrayBuffer(e),r}function u(e){var t=new FileReader,r=s(t);return t.readAsText(e),r}function c(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function l(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(v.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(v.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(v.arrayBuffer&&v.blob&&g(e))this._bodyArrayBuffer=l(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!_(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(e){var t=e.toUpperCase();return w.indexOf(t)>-1?t:e}function h(e,t){t=t||{};var r=t.body;if(e instanceof h){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=f(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function y(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function m(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var v={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(v.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(e){return e&&DataView.prototype.isPrototypeOf(e)},_=ArrayBuffer.isView||function(e){return e&&b.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},v.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},d.call(h.prototype),d.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},m.error=function(){var e=new m(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];m.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new m(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=h,e.Response=m,e.fetch=function(e,t){return new Promise(function(r,n){var o=new h(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new m(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&v.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(e,t,r){"use strict";var n={create_div:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("DIV"!==e.nextElementSibling.nodeName){var n=document.createElement("div");r&&n.classList.add("error_div"),n.setAttribute("id",t),n.textContent=t,e.parentNode.insertBefore(n,e.nextSibling)}},remove_div:function(e){document.getElementById(e)&&document.getElementById(e).parentNode.removeChild(document.getElementById(e))}};e.exports=n},,,,,,,,,,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(21),i=n(o),s=r(22),a=n(s),u=r(5),c=r(8),l=void 0,d=function(){var e=document.getElementById("city"),t=document.getElementById("email"),r=document.getElementById("uname"),n=document.getElementById("psw"),o=document.getElementById("psw_repeat"),s=new i.default("invalid city",t.value,r.value,n.value,o.value);if(console.log("frisch erzeugtes Registerobjekt: "+JSON.stringify(s)),e.value&&""!==e.value)if((0,c.remove_div)("! Keine Stadt gesucht"),void 0===l||""===l)s.setFlag(),(0,c.create_div)(e,"! Keine Stadt aus den Vorschlägen ausgewählt");else{(0,c.remove_div)("! Keine Stadt aus den Vorschlägen ausgewählt");var d=l.address_components.filter(function(e){return"locality"===e.types[0]})[0].long_name,f=l.geometry.location.lat(),h=l.geometry.location.lng();s.city=new a.default(d,f,h)}else s.setFlag(),(0,c.create_div)(e,"! Keine Stadt gesucht");s.check_username()?(0,c.remove_div)("! Ungültiger Benutzername"):(s.setFlag(),(0,c.create_div)(r,"! Ungültiger Benutzername"),r.value=""),s.check_email()?(0,c.remove_div)("! Ungültige E-Mail Adresse"):(s.setFlag(),(0,c.create_div)(t,"! Ungültige E-Mail Adresse")),s.check_passwordLength()?(0,c.remove_div)("! Ungültiges Passwort"):(s.setFlag(),(0,c.create_div)(n,"! Ungültiges Passwort"),n.value="",o.value=""),s.same_passwords()?(0,c.remove_div)("! Passwörter sind nicht identisch"):(s.setFlag(),(0,c.create_div)(o,"! Passwörter sind nicht identisch"),n.value="",o.value=""),s.flag&&((0,c.create_div)(o,"einen Moment...",!1),(0,u.postRequest)("UAAService/signup",JSON.stringify(s)).then(function(e){return(0,c.remove_div)("einen Moment..."),console.log("status: "+e.status),e.json()}).then(function(e){return e.exception?(JSON.stringify(e.exception).includes("UsernameTakenException")?((0,c.create_div)(r,"! Benutzername ist bereits vergeben"),s.setFlag()):(0,c.remove_div)("! Benutzername ist bereits vergeben"),JSON.stringify(e.exception).includes("EmailTakenException")?((0,c.create_div)(t,"! Email ist bereits vergeben"),s.setFlag()):(0,c.remove_div)("! Email ist bereits vergeben")):((0,c.remove_div)("! Benutzername ist bereits vergebe"),(0,c.remove_div)("! Email ist bereits vergeben")),console.log("flag: "+s.flag),s.flag&&console.log("registrieren hat funktioniert"),e}).catch(function(e){return console.error(e)}))};window.addEventListener("load",function(){var e=new google.maps.places.Autocomplete(document.getElementById("city"),{componentRestrictions:{country:"de"}});google.maps.event.addListener(e,"place_changed",function(){var t=e.getPlace();l=t}),document.getElementById("submit_button").addEventListener("click",function(){return d()}),document.getElementById("psw_repeat").addEventListener("keypress",function(e){13===e.keyCode&&d()})}),e.exports={create_div:c.create_div,remove_div:c.remove_div}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(t,r,o,i,s){n(this,e),this.city=t,this.email=r,this.username=o,this.password=i,this.password_repeat=s,this.flag=!0,this.check_email=this.check_email.bind(this),this.check_username=this.check_username.bind(this),this.check_passwordLenghth=this.check_passwordLength.bind(this),this.same_passwords=this.same_passwords.bind(this),this.setFlag=this.setFlag.bind(this)}return o(e,[{key:"check_email",value:function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email.toLowerCase())}},{key:"check_username",value:function(){return/^[a-zA-Z\d]{6,64}$/.test(this.username)}},{key:"check_passwordLength",value:function(){return this.password.length>7}},{key:"same_passwords",value:function(){return this.password===this.password_repeat}},{key:"setFlag",value:function(){this.flag=!1}}]),e}();e.exports=i},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function e(t,r,o){n(this,e),this.long_name=t,this.lat=r,this.lng=o};e.exports=o}]);
//# sourceMappingURL=signin.bundle.js.map