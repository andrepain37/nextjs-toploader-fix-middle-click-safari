"use client";var X=Object.create;var y=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var G=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty;var a=(r,o)=>y(r,"name",{value:o,configurable:!0});var V=(r,o)=>{for(var i in o)y(r,i,{get:o[i],enumerable:!0})},M=(r,o,i,m)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of D(o))!Q.call(r,c)&&c!==i&&y(r,c,{get:()=>o[c],enumerable:!(m=_(o,c))||m.enumerable});return r};var N=(r,o,i)=>(i=r!=null?X(G(r)):{},M(o||!r||!r.__esModule?y(i,"default",{value:r,enumerable:!0}):i,r)),Y=r=>M(y({},"__esModule",{value:!0}),r);var ee={};V(ee,{default:()=>Z});module.exports=Y(ee);var t=N(require("prop-types")),T=N(require("react")),s=N(require("nprogress"));var K=a(({color:r,height:o,showSpinner:i,crawl:m,crawlSpeed:c,initialPosition:L,easing:v,speed:E,shadow:x,template:k,zIndex:H=1600,showAtBottom:S=!1,showForHashAnchor:O=!0})=>{let z="#29d",g=r!=null?r:z,C=o!=null?o:3,W=!x&&x!==void 0?"":x?`box-shadow:${x}`:`box-shadow:0 0 10px ${g},0 0 5px ${g}`,j=T.createElement("style",null,`#nprogress{pointer-events:none}#nprogress .bar{background:${g};position:fixed;z-index:${H};${S?"bottom: 0;":"top: 0;"}left:0;width:100%;height:${C}px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;${W};opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:${H};${S?"bottom: 15px;":"top: 15px;"}right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:${g};border-left-color:${g};border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`),u=a(h=>new URL(h,window.location.href).href,"toAbsoluteURL"),B=a((h,f)=>{let l=new URL(u(h)),b=new URL(u(f));return l.href.split("#")[0]===b.href.split("#")[0]},"isHashAnchor"),F=a((h,f)=>{let l=new URL(u(h)),b=new URL(u(f));return l.hostname.replace(/^www\./,"")===b.hostname.replace(/^www\./,"")},"isSameHostName");return T.useEffect(()=>{s.configure({showSpinner:i!=null?i:!0,trickle:m!=null?m:!0,trickleSpeed:c!=null?c:200,minimum:L!=null?L:.08,easing:v!=null?v:"ease",speed:E!=null?E:200,template:k!=null?k:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'});function h(e,d){let n=new URL(e),p=new URL(d);if(n.hostname===p.hostname&&n.pathname===p.pathname&&n.search===p.search){let P=n.hash,w=p.hash;return P!==w&&n.href.replace(P,"")===p.href.replace(w,"")}return!1}a(h,"isAnchorOfCurrentUrl");var f=document.querySelectorAll("html");let l=a(()=>f.forEach(e=>e.classList.remove("nprogress-busy")),"removeNProgressClass");function b(e){for(;e&&e.tagName.toLowerCase()!=="a";)e=e.parentElement;return e}a(b,"findClosestAnchor");function A(e){try{let d=e.target,n=b(d),p=n==null?void 0:n.href,P=e.ctrlKey||e.metaKey;if(p){let w=window.location.href,q=n.target==="_blank",I=["tel:","mailto:","sms:","blob:","download:"].some(J=>p.startsWith(J));if(!F(window.location.href,n.href))return;let $=h(w,p)||B(window.location.href,n.href);if(!O&&$)return;p===w||q||I||$||e.ctrlKey||e.metaKey||P||e.shiftKey||e.altKey||!u(n.href).startsWith("http")?(s.start(),s.done(),l()):s.start()}}catch(d){s.start(),s.done()}}a(A,"handleClick"),(e=>{let d=e.pushState;e.pushState=(...n)=>(s.done(),l(),d.apply(e,n))})(window.history),(e=>{let d=e.replaceState;e.replaceState=(...n)=>(s.done(),l(),d.apply(e,n))})(window.history);function R(){s.done(),l()}a(R,"handlePageHide");function U(){s.done()}return a(U,"handleBackAndForth"),window.addEventListener("popstate",U),document.addEventListener("click",A),window.addEventListener("pagehide",R),()=>{document.removeEventListener("click",A),window.removeEventListener("pagehide",R),window.removeEventListener("popstate",U)}},[]),j},"NextTopLoader"),Z=K;K.propTypes={color:t.string,height:t.number,showSpinner:t.bool,crawl:t.bool,crawlSpeed:t.number,initialPosition:t.number,easing:t.string,speed:t.number,template:t.string,shadow:t.oneOfType([t.string,t.bool]),zIndex:t.number,showAtBottom:t.bool};
/**
 *
 * NextTopLoader
 * @license MIT
 * @param {NextTopLoaderProps} props The properties to configure NextTopLoader
 * @returns {React.JSX.Element}
 *
 */
//# sourceMappingURL=index.js.map