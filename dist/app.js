"use client";var f=Object.create;var o=Object.defineProperty,v=Object.defineProperties,O=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,A=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var m=(t,s,e)=>s in t?o(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,N=(t,s)=>{for(var e in s||(s={}))g.call(s,e)&&m(t,e,s[e]);if(c)for(var e of c(s))I.call(s,e)&&m(t,e,s[e]);return t},l=(t,s)=>v(t,h(s)),P=(t,s)=>o(t,"name",{value:s,configurable:!0});var b=(t,s)=>{for(var e in s)o(t,e,{get:s[e],enumerable:!0})},R=(t,s,e,p)=>{if(s&&typeof s=="object"||typeof s=="function")for(let r of x(s))!g.call(t,r)&&r!==e&&o(t,r,{get:()=>s[r],enumerable:!(p=O(s,r))||p.enumerable});return t};var d=(t,s,e)=>(e=t!=null?f(A(t)):{},R(s||!t||!t.__esModule?o(e,"default",{value:t,enumerable:!0}):e,t)),k=t=>R(o({},"__esModule",{value:!0}),t);var E={};b(E,{useRouter:()=>C});module.exports=k(E);var u=require("next/navigation"),a=require("react"),n=d(require("nprogress"));var C=P(()=>{let t=(0,u.useRouter)(),s=(0,u.usePathname)();(0,a.useEffect)(()=>{n.done()},[s]);let e=(0,a.useCallback)((r,i)=>{r!==s&&n.start(),t.replace(r,i)},[t,s]),p=(0,a.useCallback)((r,i)=>{r!==s&&n.start(),t.push(r,i)},[t,s]);return l(N({},t),{replace:e,push:p})},"useRouter");0&&(module.exports={useRouter});
//# sourceMappingURL=app.js.map