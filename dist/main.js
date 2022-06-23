(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),r=n.n(o),a=n(645),c=n.n(a),i=n(667),d=n.n(i),s=new URL(n(371),n.b),l=c()(r()),p=d()(s);l.push([e.id,":root {\n    --body-background-color: green;\n    --content-background-color: rgb(228, 228, 15);\n    --main-background-color: #2ed113;\n}\n\nbody,\nhtml {\n    height: 100%;\n    background-color: var(--body-background-color);\n    background-image: url("+p+");\n}\n\n.content {\n    display: flex;\n    position: relative;\n    left: 470px;\n    border-radius: 110px;\n    padding: 45px;\n    width: 50%;\n    height: 100%;\n    background-color: var(--content-background-color);\n    flex-direction: column;\n    align-items: center;\n    border: 2px solid black;\n    box-shadow: 0px 0px 20px 4px black;\n}\n\n.tabs button {\n    border: none;\n    background-color: var(--body-background-color);\n    color: white;\n    height: 35px;\n    width: 120px;\n    border-radius: 20px;\n    box-shadow: inset 1px 1px 20px 0px rgb(46 44 29);    \n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    color: #005a00;\n    width: 50%;\n    align-items: center;\n}\n\ndiv.card {\n    width: 20rem;\n    padding: 35px;\n    border-radius: 50px;\n    box-shadow: inset 1px 1px 3px 5px #005a00;\n    font-size: 20px;\n    margin: 5px;\n}\n\ndiv.title {\n    display: flex;\n    width: 40rem;\n    margin: 6px;\n    font-size: 42px;\n}\n\ndiv.subtitle {\n    position: relative;\n    bottom: 60px;\n    left: 100px;\n}\n\n.logo {\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    left: 285px;\n}",""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},371:(e,t,n)=>{e.exports=n.p+"40cd125dcdeda8efbb05.svg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),d=n.n(i),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=()=>{(()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("main"),e.appendChild(t)})(),(()=>{const e=document.querySelector(".main"),t=document.createElement("div");t.classList.add("title");const n=document.createElement("h1");n.textContent="Taco Palace",t.appendChild(n),e.appendChild(t)})(),(()=>{const e=document.querySelector(".main"),t=document.createElement("div");t.classList.add("subtitle");const n=document.createElement("p");n.textContent="The guac isn't extra",t.appendChild(n),e.appendChild(t)})(),(()=>{const e=document.querySelector(".main"),t=document.createElement("div");t.classList.add("card"),document.createElement("h1").textContent="Hours";const n=document.createElement("p");n.textContent="Sunday: 8am - 5pm",t.appendChild(n);const o=document.createElement("p");o.textContent="Monday: 8am - 10pm",t.appendChild(o);const r=document.createElement("p");r.textContent="Tuesday: 8am - 10pm",t.appendChild(r);const a=document.createElement("p");a.textContent="Wednesday: 8am - 10pm",t.appendChild(a);const c=document.createElement("p");c.textContent="Thursday: 8am - 10pm",t.appendChild(c);const i=document.createElement("p");i.textContent="Friday: 8am - 10pm",t.appendChild(i);const d=document.createElement("p");d.textContent="Saturday: 8am - 10pm",t.appendChild(d),e.appendChild(t)})(),(()=>{const e=document.querySelector(".main"),t=document.createElement("div");t.classList.add("card");const n=document.createElement("p");n.textContent='"Gee wiz they really do have the best tacos." -Customer',t.appendChild(n);const o=document.createElement("p");o.textContent="\"Lol I don't think I've ever seen free guacamole before.\" -Another Customer",t.appendChild(o),e.appendChild(t)})()};(()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("tabs");const n=document.createElement("button");n.textContent="Home";const o=document.createElement("button");o.textContent="Menu";const r=document.createElement("button");r.textContent="Contact",t.appendChild(n),t.appendChild(o),t.appendChild(r),e.append(t)})(),document.querySelectorAll(".tabs button").forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".main")&&document.querySelector(".main").remove(),"Home"===e.textContent&&f()}))})),f()})()})();