(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"#content {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: aliceblue;\n}\n#header,\n#footer {\n  background-color: antiquewhite;\n  height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n\n#main {\n  display: flex;\n  justify-content: center;\n  flex: auto;\n}\n#footer {\n  font-weight: bold;\n  justify-self: end;\n}\n\nul {\n  text-align: center;\n  font-size: large;\n  padding: 0;\n  list-style: none;\n}\n.menuTittle {\n    font-weight: bold;\n    margin: 0.2rem;\n}\n\n.headerNav {\n  background-color: aliceblue;\n  padding: 1rem 3rem;\n  border-radius: 5px;\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(c[u]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var u=e[i],s=r.base?u[0]+r.base:u[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var p=n(l),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var u=r(e,o),s=0;s<a.length;s++){var d=n(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{document.querySelector("#content"),document.querySelector("#main"),document.querySelector("#header"),document.querySelector("#footer");var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),u=n.n(i),s=n(216),d=n.n(s),l=n(589),p=n.n(l),f=n(426),m={};function v(e,t){const n=document.createElement("ul"),r=document.createElement("li");return r.classList.add("menuTittle"),r.textContent=e,n.appendChild(r),t.forEach((e=>{const t=document.createElement("li");t.textContent=e,n.appendChild(t)})),n}m.styleTagTransform=p(),m.setAttributes=u(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");t.setAttribute("id","header"),n.setAttribute("id","main"),r.setAttribute("id","footer"),r.textContent="The Restaurant 2023",e.append(t,n,r)}(),function(){const e=document.querySelector("#header"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");t.classList.add("headerNav"),t.setAttribute("id","menu"),n.classList.add("headerNav"),n.setAttribute("id","home"),r.classList.add("headerNav"),r.setAttribute("id","contact"),t.textContent="Menu",n.textContent="Home",r.textContent="Contact",e.append(t,n,r)}();const h=document.querySelector("#main");document.querySelector("#menu").addEventListener("click",(function(){h.innerHTML="",h.append(function(){const e=document.createElement("div"),t=v("Starters",["Salad   -   USD 8","Chips   -   USD 7","Croquettes   -   USD 9"]),n=v("Main Dishes",["Chicken   -   USD 9","Beef   -   USD 11","Fish   -   USD 12"]),r=v("Desserts",["Cake   -   USD 7","Flan   -   USD 6","Icecream   -   USD 5"]);return e.append(t,n,r),e}())}))})()})();