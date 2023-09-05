(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"#content {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: aliceblue;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n#header,\n#footer {\n  background-color: antiquewhite;\n  height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n#footer {\n  font-weight: bold;\n  justify-self: end;\n}\n\n.headerNav {\n  background-color: aliceblue;\n  padding: 1rem 3rem;\n  border-radius: 5px;\n}\n#main {\n  display: flex;\n  justify-content: center;\n  flex: auto;\n  padding: 2rem 8rem;\n  \n}\n\nul {\n  text-align: center;\n  font-size: large;\n  padding: 0;\n  list-style: none;\n}\n.menuTittle {\n  font-weight: bold;\n  margin: 0.2rem;\n}\n\n .contact {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  text-align: center;\n  gap: 2rem;\n  \n}\n\n.homeText {\n  text-align: center;\n  margin-top: 1.5rem;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var f=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var p=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:p,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=n(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{document.querySelector("#content"),document.querySelector("#main"),document.querySelector("#header"),document.querySelector("#footer");var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),u=n(216),d=n.n(u),l=n(589),f=n.n(l),m=n(426),p={};function h(e,t){const n=document.createElement("ul"),r=document.createElement("li");return r.classList.add("menuTittle"),r.textContent=e,n.appendChild(r),t.forEach((e=>{const t=document.createElement("li");t.textContent=e,n.appendChild(t)})),n}function y(){const e=document.createElement("div");return e.classList.add("homeText"),e.append("Welcome to 'El Secreto', your gateway to the exquisite flavors of Uruguay, right here in Punta del Este. We invite you to embark on a culinary journey that captures the essence of this South American gem, renowned for its hearty and delicious cuisine.\n    Our Uruguayan restaurant is a warm and inviting haven where you can experience the heart and soul of Uruguayan gastronomy. Step inside, and you'll be greeted by an ambiance that reflects the rustic charm and coastal beauty of Uruguay.\n    \n    Wooden accents, nautical elements, and earthy tones create an atmosphere reminiscent of a cozy Uruguayan estancia by the sea.\n    At 'El Secreto', we take pride in offering an authentic taste of Uruguay, from traditional recipes passed down through generations to modern interpretations that honor the country's culinary heritage.\n    Our talented Chef Damian is dedicated to sourcing the finest locally grown ingredients to create dishes that transport you to the sun-soaked shores of Uruguay. Whether you're craving the famous Uruguayan barbecue, known as \"asado,\" or looking to savor the delights of \"chivito\" sandwiches or \"milanesa,\" our menu showcases the diverse flavors of Uruguay.\n    Indulge in our tender, wood-grilled cuts of beef, seasoned to perfection and served with chimichurri sauce, or relish the flavors of fresh seafood inspired by the Atlantic coast."),e}p.styleTagTransform=f(),p.setAttributes=s(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=d(),t()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals,function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");t.setAttribute("id","header"),n.setAttribute("id","main"),r.setAttribute("id","footer"),r.textContent="El Secreto 2023",e.append(t,n,r)}(),function(){const e=document.querySelector("#header"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");t.classList.add("headerNav"),t.setAttribute("id","menu"),n.classList.add("headerNav"),n.setAttribute("id","home"),r.classList.add("headerNav"),r.setAttribute("id","contact"),t.textContent="Menu",n.textContent="Home",r.textContent="Contact",e.append(n,t,r)}();const v=document.querySelector("#main");v.append(y());const g=document.querySelector("#home"),b=document.querySelector("#menu"),x=document.querySelector("#contact");b.addEventListener("click",(function(){v.innerHTML="",v.append(function(){const e=document.createElement("div"),t=h("Starters",["Salad   -   USD 8","Chips   -   USD 7","Croquettes   -   USD 9"]),n=h("Main Dishes",["Chicken   -   USD 9","Beef   -   USD 11","Fish   -   USD 12"]),r=h("Desserts",["Cake   -   USD 7","Flan   -   USD 6","Icecream   -   USD 5"]);return e.append(t,n,r),e}())})),g.addEventListener("click",(function(){v.innerHTML="",v.append(y())})),x.addEventListener("click",(function(){v.innerHTML="",v.append(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("h3"),n=document.createElement("h3"),r=document.createElement("h3");return t.textContent="El Secreto",n.textContent="+5989812399",r.textContent="info@elsecreto.resto",e.append(t,n,r),e}())}))})()})();