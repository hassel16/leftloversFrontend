!function(e){function t(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=30)}({30:function(e,t,n){"use strict";var s=n(31),i=function(e){return e&&e.__esModule?e:{default:e}}(s);window.addEventListener("load",function(){alert("gelade, signin");var e=void 0,t=new google.maps.places.Autocomplete(document.getElementById("city"),{componentRestrictions:{country:"de"}});google.maps.event.addListener(t,"place_changed",function(){var n=t.getPlace();e=n,console.log(n.formatted_address),console.log(n.url),console.log(n.geometry.location)}),document.getElementById("submit_button").addEventListener("click",function(){var t=document.getElementById("city"),n=document.getElementById("email"),s=document.getElementById("uname"),a=document.getElementById("psw"),r=document.getElementById("psw_repeat"),o=new i.default("invalid city",n.value,s.value,a.value,r.value),c=function(e,t){if("DIV"!==e.nextElementSibling.nodeName){var n=document.createElement("div");n.classList.add("error_div"),n.setAttribute("id",t),n.textContent=t,e.parentNode.insertBefore(n,e.nextSibling)}},l=function(e){document.getElementById(e)&&document.getElementById(e).parentNode.removeChild(document.getElementById(e))};t.value&&""!==t.value?(l("! Keine Stadt gesucht"),void 0===e||""===e?(o.setFlag(),c(t,"! Keine Stadt aus den Vorschlägen ausgewählt")):(l("! Keine Stadt aus den Vorschlägen ausgewählt"),o.city=e)):(o.setFlag(),c(t,"! Keine Stadt gesucht")),o.check_userName()?l("! Ungültiger Benutzername"):(o.setFlag(),c(s,"! Ungültiger Benutzername"),s.value=""),o.check_email()?l("! Ungültige E-Mail Adresse"):(o.setFlag(),c(n,"! Ungültige E-Mail Adresse")),o.check_passwordLength()?l("! Ungültiges Passwort"):(o.setFlag(),c(a,"! Ungültiges Passwort"),a.value="",r.value=""),o.same_passwords()?l("! Passwörter sind nicht identisch"):(o.setFlag(),c(r,"! Passwörter sind nicht identisch"),a.value="",r.value=""),console.log("city: "+JSON.stringify(o.city.formatted_address)),console.log("register: "+JSON.stringify(o)),o.flag&&(alert("alles fine"),fetch("https://leftloversgateway.azurewebsites.net/UAAService",{method:"POST",body:JSON.stringify(o),headers:{}}).then(function(e){return e.json()}).then(function(e){return console.log("responsetext: "+e),e.actTemp}).catch(function(e){return console.error(e)}))})})},31:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),a=function(){function e(t,n,i,a,r){s(this,e),this.city=r,this.email=t,this.user=n,this.pw=i,this.pw_repeat=a,this.flag=!0,this.check_city=this.check_city.bind(this),this.check_email=this.check_email.bind(this),this.check_userName=this.check_userName.bind(this),this.check_passwordLenghth=this.check_passwordLength.bind(this),this.same_passwords=this.same_passwords.bind(this),this.setFlag=this.setFlag.bind(this)}return i(e,[{key:"check_city",value:function(){}},{key:"check_email",value:function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email.toLowerCase())}},{key:"check_userName",value:function(){return/^[a-zA-Z\d]{6,64}$/.test(this.user)}},{key:"check_passwordLength",value:function(){return this.pw.length>7}},{key:"same_passwords",value:function(){return this.pw===this.pw_repeat}},{key:"setFlag",value:function(){this.flag=!1}}]),e}();e.exports=a}});
//# sourceMappingURL=signin.bundle.js.map