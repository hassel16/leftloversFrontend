!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=32)}({32:function(e,n,t){"use strict";var o=t(33),r=function(e){return e&&e.__esModule?e:{default:e}}(o);window.addEventListener("load",function(){document.getElementById("anmelde_button").addEventListener("click",function(){var e=document.getElementById("login_benutzer"),n=document.getElementById("login_passwort");console.log(JSON.stringify(new r.default(e.value,n.value))),fetch("https://leftloversgateway.azurewebsites.net/UAAService/login",{method:"POST",body:new r.default(e.value,n.value),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log("responsetext: "+e),e}).catch(function(e){return console.log(e)})})})},33:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function e(n,t){o(this,e),this.username=n,this.password=t};e.exports=r}});
//# sourceMappingURL=login.bundle.js.map