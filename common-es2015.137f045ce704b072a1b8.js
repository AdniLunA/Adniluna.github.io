(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+veT":function(n,e,t){"use strict";t.d(e,"a",(function(){return v})),t.d(e,"b",(function(){return E})),t.d(e,"c",(function(){return b})),t.d(e,"d",(function(){return y})),t.d(e,"e",(function(){return l}));var r=t("dSyh"),o=t("kBU6");const l=n=>new Promise((e,t)=>{Object(r.m)(()=>{i(n),a(n).then(t=>{t.animation&&t.animation.destroy(),c(n),e(t)},e=>{c(n),t(e)})})}),i=n=>{const e=n.enteringEl,t=n.leavingEl;M(e,t,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),y(e,!1),t&&y(t,!1)},a=async n=>{const e=await u(n);return e?s(e,n):d(n)},c=n=>{const e=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},u=async n=>{if(n.leavingEl&&n.animated&&0!==n.duration)return n.animationBuilder?n.animationBuilder:"ios"===n.mode?(await(()=>t.e(102).then(t.bind(null,"Lu00")))()).iosTransitionAnimation:(await(()=>t.e(103).then(t.bind(null,"wxTh")))()).mdTransitionAnimation},s=async(n,e)=>{let r;await h(e,!0);try{const o=await t.e(5).then(t.bind(null,"gHMO"));r=await o.create(n,e.baseEl,e)}catch(l){r=n(e.baseEl,e)}m(e.enteringEl,e.leavingEl);const o=await p(r,e);return e.progressCallback&&e.progressCallback(void 0),o&&g(e.enteringEl,e.leavingEl),{hasCompleted:o,animation:r}},d=async n=>{const e=n.enteringEl,t=n.leavingEl;return await h(n,!1),m(e,t),g(e,t),{hasCompleted:!0}},h=async(n,e)=>{const t=(void 0!==n.deepWait?n.deepWait:e)?[v(n.enteringEl),v(n.leavingEl)]:[w(n.enteringEl),w(n.leavingEl)];await Promise.all(t),await f(n.viewIsReady,n.enteringEl)},f=async(n,e)=>{n&&await n(e)},p=(n,e)=>{const t=e.progressCallback,r=new Promise(e=>{n.onFinish(t=>{"number"==typeof t?e(1===t):void 0!==n.hasCompleted&&e(n.hasCompleted)})});return t?(n.progressStart(!0),t(n)):n.play(),r},m=(n,e)=>{b(e,o.c),b(n,o.a)},g=(n,e)=>{b(n,o.b),b(e,o.d)},b=(n,e)=>{if(n){const t=new CustomEvent(e,{bubbles:!1,cancelable:!1});n.dispatchEvent(t)}},w=n=>n&&n.componentOnReady?n.componentOnReady():Promise.resolve(),v=async n=>{const e=n;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(v))}},y=(n,e)=>{e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},M=(n,e,t)=>{void 0!==n&&(n.style.zIndex="back"===t?"99":"101"),void 0!==e&&(e.style.zIndex="100")},E=n=>n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n},D0kh:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));class r{transform(n){return"company"===n?"Unternehmen":"Kandidat"}}},Dl6n:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return l})),t.d(e,"c",(function(){return r})),t.d(e,"d",(function(){return a}));const r=(n,e)=>null!==e.closest(n),o=n=>"string"==typeof n&&n.length>0?{"ion-color":!0,[`ion-color-${n}`]:!0}:void 0,l=n=>{const e={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(n).forEach(n=>e[n]=!0),e},i=/^[a-z][a-z0-9+\-.]*:/,a=async(n,e,t)=>{if(null!=n&&"#"!==n[0]&&!i.test(n)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(n,t)}return!1}},QoAl:function(n,e,t){"use strict";var r=t("8Y7J"),o=t("oBZk"),l=t("ZZ/e"),i=t("SVse");t("320Y"),t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return u}));var a=r.pb({encapsulation:0,styles:[[".header[_ngcontent-%COMP%]{background-color:wheat;display:-webkit-box;display:flex;line-height:42px;-webkit-box-pack:justify;justify-content:space-between;padding:7px}.header__logo[_ngcontent-%COMP%]{height:42px}.header__title[_ngcontent-%COMP%]{font-weight:700;font-size:18px}.header__end[_ngcontent-%COMP%]{width:100px;height:40px}.header__user[_ngcontent-%COMP%]{font-size:40px;float:right}"]],data:{}});function c(n){return r.Lb(0,[(n()(),r.rb(0,0,null,null,1,"ion-icon",[["class","header__user"],["name","contact"]],null,[[null,"click"]],(function(n,e,t){var r=!0;return"click"===e&&(r=!1!==n.component.openPage("user")&&r),r}),o.A,o.h)),r.qb(1,49152,null,0,l.A,[r.h,r.k,r.x],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"contact")}),null)}function u(n){return r.Lb(0,[(n()(),r.rb(0,0,null,null,9,"div",[["class","header"]],null,null,null,null,null)),(n()(),r.rb(1,0,null,null,0,"img",[["alt","logo"],["class","header__logo"],["src","assets/icon/logo.png"]],null,[[null,"click"]],(function(n,e,t){var r=!0;return"click"===e&&(r=!1!==n.component.openPage("kangoo-net")&&r),r}),null,null)),(n()(),r.rb(2,0,null,null,4,"div",[["class","header__title"]],null,null,null,null,null)),(n()(),r.rb(3,0,null,null,1,"ion-icon",[["name","arrow-back"]],null,[[null,"click"]],(function(n,e,t){var r=!0;return"click"===e&&(r=!1!==n.component.back()&&r),r}),o.A,o.h)),r.qb(4,49152,null,0,l.A,[r.h,r.k,r.x],{name:[0,"name"]},null),(n()(),r.rb(5,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),r.Jb(6,null,["",""])),(n()(),r.rb(7,0,null,null,2,"div",[["class","header__end"]],null,null,null,null,null)),(n()(),r.gb(16777216,null,null,1,null,c)),r.qb(9,16384,null,0,i.i,[r.M,r.J],{ngIf:[0,"ngIf"]},null)],(function(n,e){var t=e.component;n(e,4,0,"arrow-back"),n(e,9,0,t.isLoggedIn)}),(function(n,e){n(e,6,0,e.component.title)}))}},SMAq:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return c}));var r=t("8Y7J"),o=t("0L9S"),l=t("SVse"),i=r.pb({encapsulation:2,styles:[],data:{}});function a(n){return r.Lb(0,[(n()(),r.rb(0,16777216,null,null,1,"canvas",[],null,null,null,null,null)),r.qb(1,540672,null,0,o.c,[r.M],{value:[0,"value"],errorCorrectionLevel:[1,"errorCorrectionLevel"],width:[2,"width"],height:[3,"height"]},null),(n()(),r.gb(0,null,null,0))],(function(n,e){var t=e.component;n(e,1,0,t.value,t.errorCorrectionLevel,t.size,t.size)}),null)}function c(n){return r.Lb(0,[(n()(),r.gb(16777216,null,null,1,null,a)),r.qb(1,16384,null,0,l.i,[r.M,r.J],{ngIf:[0,"ngIf"]},null)],(function(n,e){n(e,1,0,e.component.value)}),null)}},YtD4:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));const r=n=>{try{if("string"!=typeof n||""===n)return n;const e=document.createDocumentFragment(),t=document.createElement("div");e.appendChild(t),t.innerHTML=n,a.forEach(n=>{const t=e.querySelectorAll(n);for(let r=t.length-1;r>=0;r--){const n=t[r];n.parentNode?n.parentNode.removeChild(n):e.removeChild(n);const i=l(n);for(let e=0;e<i.length;e++)o(i[e])}});const r=l(e);for(let n=0;n<r.length;n++)o(r[n]);const i=document.createElement("div");i.appendChild(e);const c=i.querySelector("div");return null!==c?c.innerHTML:i.innerHTML}catch(e){return console.error(e),""}},o=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let t=n.attributes.length-1;t>=0;t--){const e=n.attributes.item(t),r=e.name;if(!i.includes(r.toLowerCase())){n.removeAttribute(r);continue}const o=e.value;null!=o&&o.toLowerCase().includes("javascript:")&&n.removeAttribute(r)}const e=l(n);for(let t=0;t<e.length;t++)o(e[t])},l=n=>null!=n.children?n.children:n.childNodes,i=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},m9yc:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o}));const r=async(n,e,t,r,o)=>{if(n)return n.attachViewToDom(e,t,o,r);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const l="string"==typeof t?e.ownerDocument&&e.ownerDocument.createElement(t):t;return r&&r.forEach(n=>l.classList.add(n)),o&&Object.assign(l,o),e.appendChild(l),l.componentOnReady&&await l.componentOnReady(),l},o=(n,e)=>{if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"nN+u":function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return r}));const r=(n,e,t)=>{const r=new MutationObserver(n=>{t(o(n,e))});return r.observe(n,{childList:!0,subtree:!0}),r},o=(n,e)=>{let t;return n.forEach(n=>{for(let r=0;r<n.addedNodes.length;r++)t=l(n.addedNodes[r],e)||t}),t},l=(n,e)=>{if(1===n.nodeType)return(n.tagName===e.toUpperCase()?[n]:Array.from(n.querySelectorAll(e))).find(n=>!0===n.checked)}},opz7:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return l})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return r}));const r=()=>{const n=window.TapticEngine;n&&n.selection()},o=()=>{const n=window.TapticEngine;n&&n.gestureSelectionStart()},l=()=>{const n=window.TapticEngine;n&&n.gestureSelectionChanged()},i=()=>{const n=window.TapticEngine;n&&n.gestureSelectionEnd()}},qaSm:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o}));class r{constructor(n,e){this.x=n,this.y=e}}const o=(n,e,t,r,o)=>{const a=i(n.y,e.y,t.y,r.y,o);return l(n.x,e.x,t.x,r.x,a[0])},l=(n,e,t,r,o)=>o*(3*e*Math.pow(o-1,2)+o*(-3*t*o+3*t+r*o))-n*Math.pow(o-1,3),i=(n,e,t,r,o)=>a((r-=o)-3*(t-=o)+3*(e-=o)-(n-=o),3*t-6*e+3*n,3*e-3*n,n).filter(n=>n>=0&&n<=1),a=(n,e,t,r)=>{if(0===n)return((n,e,t)=>{const r=e*e-4*n*t;return r<0?[]:[(-e+Math.sqrt(r))/(2*n),(-e-Math.sqrt(r))/(2*n)]})(e,t,r);const o=(3*(t/=n)-(e/=n)*e)/3,l=(2*e*e*e-9*e*t+27*(r/=n))/27;if(0===o)return[Math.pow(-l,1/3)];if(0===l)return[Math.sqrt(-o),-Math.sqrt(-o)];const i=Math.pow(l/2,2)+Math.pow(o/3,3);if(0===i)return[Math.pow(l/2,.5)-e/3];if(i>0)return[Math.pow(-l/2+Math.sqrt(i),1/3)-Math.pow(l/2+Math.sqrt(i),1/3)-e/3];const a=Math.sqrt(Math.pow(-o/3,3)),c=Math.acos(-l/(2*Math.sqrt(Math.pow(-o/3,3)))),u=2*Math.pow(a,1/3);return[u*Math.cos(c/3)-e/3,u*Math.cos((c+2*Math.PI)/3)-e/3,u*Math.cos((c+4*Math.PI)/3)-e/3]}}}]);