(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const r=`${e*t/n-e}ms`,o=2*Math.PI*t/n;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const r=t/n,o=`${e*r-e}ms`,i=2*Math.PI*r;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:`${9-9*t}px`,"animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/n-e}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/n-e}ms`}})}}},DnKK:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("XNiG"),o=n("l7GE"),i=n("ZUHj");class s{constructor(e){this.notifier=e}call(e,t){const n=new c(e),r=Object(i.a)(n,this.notifier);return r&&!n.seenValue?(n.add(r),t.subscribe(n)):n}}class c extends o.a{constructor(e){super(e),this.seenValue=!1}notifyNext(e,t,n,r,o){this.seenValue=!0,this.complete()}notifyComplete(){}}function l(e){return"function"==typeof e}const a=(e,t="ngOnDestroy")=>n=>{const o=e[t];if(!1===l(o))throw new Error(`${e.constructor.name} is using untilDestroyed but doesn't implement ${t}`);return e.__takeUntilDestroy||(e.__takeUntilDestroy=new r.a,e[t]=function(){l(o)&&o.apply(this,arguments),e.__takeUntilDestroy.next(!0),e.__takeUntilDestroy.complete()}),n.pipe((i=e.__takeUntilDestroy,e=>e.lift(new s(i))));var i}},KwJk:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c}));const r=(e,t)=>null!==t.closest(e),o=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,[`ion-color-${e}`]:!0}:void 0,i=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},s=/^[a-z][a-z0-9+\-.]*:/,c=async(e,t,n)=>{if(null!=e&&"#"!==e[0]&&!s.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,n)}return!1}},NqGI:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));const r=async(e,t,n,r,o)=>{if(e)return e.attachViewToDom(t,n,o,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return r&&r.forEach(e=>i.classList.add(e)),o&&Object.assign(i,o),t.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},o=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},Uwmq:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>{try{if("string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,c.forEach(e=>{const n=t.querySelectorAll(e);for(let r=n.length-1;r>=0;r--){const e=n[r];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const s=i(e);for(let t=0;t<s.length;t++)o(s[t])}});const r=i(t);for(let e=0;e<r.length;e++)o(r[e]);const s=document.createElement("div");s.appendChild(t);const l=s.querySelector("div");return null!==l?l.innerHTML:s.innerHTML}catch(t){return console.error(t),""}},o=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),r=t.name;if(!s.includes(r.toLowerCase())){e.removeAttribute(r);continue}const o=t.value;null!=o&&o.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const t=i(e);for(let n=0;n<t.length;n++)o(t[n])},i=e=>null!=e.children?e.children:e.childNodes,s=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},fzvj:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return r}));const r=()=>{const e=window.TapticEngine;e&&e.selection()},o=()=>{const e=window.TapticEngine;e&&e.gestureSelectionStart()},i=()=>{const e=window.TapticEngine;e&&e.gestureSelectionChanged()},s=()=>{const e=window.TapticEngine;e&&e.gestureSelectionEnd()}}}]);