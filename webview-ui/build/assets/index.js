var pp=Object.defineProperty;var fp=(t,e,n)=>e in t?pp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Qa=(t,e,n)=>fp(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function vp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Eu={exports:{}},Wi={},$u={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rr=Symbol.for("react.element"),mp=Symbol.for("react.portal"),gp=Symbol.for("react.fragment"),yp=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),bp=Symbol.for("react.provider"),xp=Symbol.for("react.context"),wp=Symbol.for("react.forward_ref"),kp=Symbol.for("react.suspense"),Cp=Symbol.for("react.memo"),Sp=Symbol.for("react.lazy"),Ya=Symbol.iterator;function Ep(t){return t===null||typeof t!="object"?null:(t=Ya&&t[Ya]||t["@@iterator"],typeof t=="function"?t:null)}var Iu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pu=Object.assign,Ru={};function go(t,e,n){this.props=t,this.context=e,this.refs=Ru,this.updater=n||Iu}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ou(){}Ou.prototype=go.prototype;function Fl(t,e,n){this.props=t,this.context=e,this.refs=Ru,this.updater=n||Iu}var jl=Fl.prototype=new Ou;jl.constructor=Fl;Pu(jl,go.prototype);jl.isPureReactComponent=!0;var Ga=Array.isArray,zu=Object.prototype.hasOwnProperty,Hl={current:null},Au={key:!0,ref:!0,__self:!0,__source:!0};function Tu(t,e,n){var o,r={},i=null,s=null;if(e!=null)for(o in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(i=""+e.key),e)zu.call(e,o)&&!Au.hasOwnProperty(o)&&(r[o]=e[o]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}if(t&&t.defaultProps)for(o in l=t.defaultProps,l)r[o]===void 0&&(r[o]=l[o]);return{$$typeof:Rr,type:t,key:i,ref:s,props:r,_owner:Hl.current}}function $p(t,e){return{$$typeof:Rr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ul(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rr}function Ip(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xa=/\/+/g;function ms(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ip(""+t.key):e.toString(36)}function oi(t,e,n,o,r){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Rr:case mp:s=!0}}if(s)return s=t,r=r(s),t=o===""?"."+ms(s,0):o,Ga(r)?(n="",t!=null&&(n=t.replace(Xa,"$&/")+"/"),oi(r,e,n,"",function(c){return c})):r!=null&&(Ul(r)&&(r=$p(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Xa,"$&/")+"/")+t)),e.push(r)),1;if(s=0,o=o===""?".":o+":",Ga(t))for(var l=0;l<t.length;l++){i=t[l];var a=o+ms(i,l);s+=oi(i,e,n,a,r)}else if(a=Ep(t),typeof a=="function")for(t=a.call(t),l=0;!(i=t.next()).done;)i=i.value,a=o+ms(i,l++),s+=oi(i,e,n,a,r);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Vr(t,e,n){if(t==null)return t;var o=[],r=0;return oi(t,o,"","",function(i){return e.call(n,i,r++)}),o}function Pp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},ri={transition:null},Rp={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:ri,ReactCurrentOwner:Hl};function Nu(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Vr,forEach:function(t,e,n){Vr(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vr(t,function(){e++}),e},toArray:function(t){return Vr(t,function(e){return e})||[]},only:function(t){if(!Ul(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};A.Component=go;A.Fragment=gp;A.Profiler=_p;A.PureComponent=Fl;A.StrictMode=yp;A.Suspense=kp;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;A.act=Nu;A.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=Pu({},t.props),r=t.key,i=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,s=Hl.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)zu.call(e,a)&&!Au.hasOwnProperty(a)&&(o[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:Rr,type:t.type,key:r,ref:i,props:o,_owner:s}};A.createContext=function(t){return t={$$typeof:xp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bp,_context:t},t.Consumer=t};A.createElement=Tu;A.createFactory=function(t){var e=Tu.bind(null,t);return e.type=t,e};A.createRef=function(){return{current:null}};A.forwardRef=function(t){return{$$typeof:wp,render:t}};A.isValidElement=Ul;A.lazy=function(t){return{$$typeof:Sp,_payload:{_status:-1,_result:t},_init:Pp}};A.memo=function(t,e){return{$$typeof:Cp,type:t,compare:e===void 0?null:e}};A.startTransition=function(t){var e=ri.transition;ri.transition={};try{t()}finally{ri.transition=e}};A.unstable_act=Nu;A.useCallback=function(t,e){return Ae.current.useCallback(t,e)};A.useContext=function(t){return Ae.current.useContext(t)};A.useDebugValue=function(){};A.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};A.useEffect=function(t,e){return Ae.current.useEffect(t,e)};A.useId=function(){return Ae.current.useId()};A.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};A.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};A.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};A.useMemo=function(t,e){return Ae.current.useMemo(t,e)};A.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};A.useRef=function(t){return Ae.current.useRef(t)};A.useState=function(t){return Ae.current.useState(t)};A.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};A.useTransition=function(){return Ae.current.useTransition()};A.version="18.3.1";$u.exports=A;var Ki=$u.exports;const B=vp(Ki);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=Ki,zp=Symbol.for("react.element"),Ap=Symbol.for("react.fragment"),Tp=Object.prototype.hasOwnProperty,Np=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lp={key:!0,ref:!0,__self:!0,__source:!0};function Lu(t,e,n){var o,r={},i=null,s=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(o in e)Tp.call(e,o)&&!Lp.hasOwnProperty(o)&&(r[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)r[o]===void 0&&(r[o]=e[o]);return{$$typeof:zp,type:t,key:i,ref:s,props:r,_owner:Np.current}}Wi.Fragment=Ap;Wi.jsx=Lu;Wi.jsxs=Lu;Eu.exports=Wi;var Wo=Eu.exports,Bu={exports:{}},Ye={},Du={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(S,O){var z=S.length;S.push(O);e:for(;0<z;){var le=z-1>>>1,ve=S[le];if(0<r(ve,O))S[le]=O,S[z]=ve,z=le;else break e}}function n(S){return S.length===0?null:S[0]}function o(S){if(S.length===0)return null;var O=S[0],z=S.pop();if(z!==O){S[0]=z;e:for(var le=0,ve=S.length,Br=ve>>>1;le<Br;){var hn=2*(le+1)-1,vs=S[hn],pn=hn+1,Dr=S[pn];if(0>r(vs,z))pn<ve&&0>r(Dr,vs)?(S[le]=Dr,S[pn]=z,le=pn):(S[le]=vs,S[hn]=z,le=hn);else if(pn<ve&&0>r(Dr,z))S[le]=Dr,S[pn]=z,le=pn;else break e}}return O}function r(S,O){var z=S.sortIndex-O.sortIndex;return z!==0?z:S.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var a=[],c=[],m=1,d=null,f=3,g=!1,y=!1,w=!1,F=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(S){for(var O=n(c);O!==null;){if(O.callback===null)o(c);else if(O.startTime<=S)o(c),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(c)}}function b(S){if(w=!1,v(S),!y)if(n(a)!==null)y=!0,ps(k);else{var O=n(c);O!==null&&fs(b,O.startTime-S)}}function k(S,O){y=!1,w&&(w=!1,h(I),I=-1),g=!0;var z=f;try{for(v(O),d=n(a);d!==null&&(!(d.expirationTime>O)||S&&!at());){var le=d.callback;if(typeof le=="function"){d.callback=null,f=d.priorityLevel;var ve=le(d.expirationTime<=O);O=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(a)&&o(a),v(O)}else o(a);d=n(a)}if(d!==null)var Br=!0;else{var hn=n(c);hn!==null&&fs(b,hn.startTime-O),Br=!1}return Br}finally{d=null,f=z,g=!1}}var E=!1,$=null,I=-1,ee=5,T=-1;function at(){return!(t.unstable_now()-T<ee)}function $o(){if($!==null){var S=t.unstable_now();T=S;var O=!0;try{O=$(!0,S)}finally{O?Io():(E=!1,$=null)}}else E=!1}var Io;if(typeof u=="function")Io=function(){u($o)};else if(typeof MessageChannel<"u"){var qa=new MessageChannel,hp=qa.port2;qa.port1.onmessage=$o,Io=function(){hp.postMessage(null)}}else Io=function(){F($o,0)};function ps(S){$=S,E||(E=!0,Io())}function fs(S,O){I=F(function(){S(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,ps(k))},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<S?Math.floor(1e3/S):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(S){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var z=f;f=O;try{return S()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(S,O){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var z=f;f=S;try{return O()}finally{f=z}},t.unstable_scheduleCallback=function(S,O,z){var le=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?le+z:le):z=le,S){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=z+ve,S={id:m++,callback:O,priorityLevel:S,startTime:z,expirationTime:ve,sortIndex:-1},z>le?(S.sortIndex=z,e(c,S),n(a)===null&&S===n(c)&&(w?(h(I),I=-1):w=!0,fs(b,z-le))):(S.sortIndex=ve,e(a,S),y||g||(y=!0,ps(k))),S},t.unstable_shouldYield=at,t.unstable_wrapCallback=function(S){var O=f;return function(){var z=f;f=O;try{return S.apply(this,arguments)}finally{f=z}}}})(Vu);Du.exports=Vu;var Bp=Du.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=Ki,Qe=Bp;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mu=new Set,or={};function Dn(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(or[t]=e,t=0;t<e.length;t++)Mu.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qs=Object.prototype.hasOwnProperty,Vp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Za={},Ja={};function Mp(t){return Qs.call(Ja,t)?!0:Qs.call(Za,t)?!1:Vp.test(t)?Ja[t]=!0:(Za[t]=!0,!1)}function Fp(t,e,n,o){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jp(t,e,n,o){if(e===null||typeof e>"u"||Fp(t,e,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Te(t,e,n,o,r,i,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=s}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new Te(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new Te(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new Te(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new Te(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new Te(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new Te(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new Te(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new Te(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new Te(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wl=/[\-:]([a-z])/g;function Kl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wl,Kl);we[e]=new Te(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wl,Kl);we[e]=new Te(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wl,Kl);we[e]=new Te(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new Te(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new Te(t,1,!1,t.toLowerCase(),null,!0,!0)});function ql(t,e,n,o){var r=we.hasOwnProperty(e)?we[e]:null;(r!==null?r.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jp(e,n,r,o)&&(n=null),o||r===null?Mp(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,o=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?t.setAttributeNS(o,e,n):t.setAttribute(e,n))))}var Ft=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mr=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Ql=Symbol.for("react.strict_mode"),Ys=Symbol.for("react.profiler"),Fu=Symbol.for("react.provider"),ju=Symbol.for("react.context"),Yl=Symbol.for("react.forward_ref"),Gs=Symbol.for("react.suspense"),Xs=Symbol.for("react.suspense_list"),Gl=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),Hu=Symbol.for("react.offscreen"),ec=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=ec&&t[ec]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,gs;function Mo(t){if(gs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gs=e&&e[1]||""}return`
`+gs+t}var ys=!1;function _s(t,e){if(!t||ys)return"";ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var o=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){o=c}t.call(e.prototype)}else{try{throw Error()}catch(c){o=c}t()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=o.stack.split(`
`),s=r.length-1,l=i.length-1;1<=s&&0<=l&&r[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(r[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||r[s]!==i[l]){var a=`
`+r[s].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=s&&0<=l);break}}}finally{ys=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mo(t):""}function Hp(t){switch(t.tag){case 5:return Mo(t.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return t=_s(t.type,!1),t;case 11:return t=_s(t.type.render,!1),t;case 1:return t=_s(t.type,!0),t;default:return""}}function Zs(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kn:return"Fragment";case Wn:return"Portal";case Ys:return"Profiler";case Ql:return"StrictMode";case Gs:return"Suspense";case Xs:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ju:return(t.displayName||"Context")+".Consumer";case Fu:return(t._context.displayName||"Context")+".Provider";case Yl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gl:return e=t.displayName||null,e!==null?e:Zs(t.type)||"Memo";case Ut:e=t._payload,t=t._init;try{return Zs(t(e))}catch{}}return null}function Up(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zs(e);case 8:return e===Ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uu(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wp(t){var e=Uu(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){o=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(s){o=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fr(t){t._valueTracker||(t._valueTracker=Wp(t))}function Wu(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),o="";return t&&(o=Uu(t)?t.checked?"true":"false":t.value),t=o,t!==n?(e.setValue(t),!0):!1}function gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Js(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tc(t,e){var n=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;n=sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:o,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ku(t,e){e=e.checked,e!=null&&ql(t,"checked",e,!1)}function el(t,e){Ku(t,e);var n=sn(e.value),o=e.type;if(n!=null)o==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tl(t,e.type,n):e.hasOwnProperty("defaultValue")&&tl(t,e.type,sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tl(t,e,n){(e!=="number"||gi(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fo=Array.isArray;function oo(t,e,n,o){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&o&&(t[n].defaultSelected=!0)}else{for(n=""+sn(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,o&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function nl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function oc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Fo(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sn(n)}}function qu(t,e){var n=sn(e.value),o=sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),o!=null&&(t.defaultValue=""+o)}function rc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qu(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qu(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jr,Yu=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,o,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,o,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function rr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kp=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){Kp.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function Gu(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function Xu(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=Gu(n,e[n],o);n==="float"&&(n="cssFloat"),o?t.setProperty(n,r):t[n]=r}}var qp=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(t,e){if(e){if(qp[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function il(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function Xl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ll=null,ro=null,io=null;function ic(t){if(t=Ar(t)){if(typeof ll!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Xi(e),ll(t.stateNode,t.type,e))}}function Zu(t){ro?io?io.push(t):io=[t]:ro=t}function Ju(){if(ro){var t=ro,e=io;if(io=ro=null,ic(t),e)for(t=0;t<e.length;t++)ic(e[t])}}function ed(t,e){return t(e)}function td(){}var bs=!1;function nd(t,e,n){if(bs)return t(e,n);bs=!0;try{return ed(t,e,n)}finally{bs=!1,(ro!==null||io!==null)&&(td(),Ju())}}function ir(t,e){var n=t.stateNode;if(n===null)return null;var o=Xi(n);if(o===null)return null;n=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var al=!1;if(At)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){al=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{al=!1}function Qp(t,e,n,o,r,i,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(m){this.onError(m)}}var qo=!1,yi=null,_i=!1,cl=null,Yp={onError:function(t){qo=!0,yi=t}};function Gp(t,e,n,o,r,i,s,l,a){qo=!1,yi=null,Qp.apply(Yp,arguments)}function Xp(t,e,n,o,r,i,s,l,a){if(Gp.apply(this,arguments),qo){if(qo){var c=yi;qo=!1,yi=null}else throw Error(x(198));_i||(_i=!0,cl=c)}}function Vn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function od(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sc(t){if(Vn(t)!==t)throw Error(x(188))}function Zp(t){var e=t.alternate;if(!e){if(e=Vn(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,o=e;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return sc(r),t;if(i===o)return sc(r),e;i=i.sibling}throw Error(x(188))}if(n.return!==o.return)n=r,o=i;else{for(var s=!1,l=r.child;l;){if(l===n){s=!0,n=r,o=i;break}if(l===o){s=!0,o=r,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,o=r;break}if(l===o){s=!0,o=i,n=r;break}l=l.sibling}if(!s)throw Error(x(189))}}if(n.alternate!==o)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function rd(t){return t=Zp(t),t!==null?id(t):null}function id(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=id(t);if(e!==null)return e;t=t.sibling}return null}var sd=Qe.unstable_scheduleCallback,lc=Qe.unstable_cancelCallback,Jp=Qe.unstable_shouldYield,ef=Qe.unstable_requestPaint,ae=Qe.unstable_now,tf=Qe.unstable_getCurrentPriorityLevel,Zl=Qe.unstable_ImmediatePriority,ld=Qe.unstable_UserBlockingPriority,bi=Qe.unstable_NormalPriority,nf=Qe.unstable_LowPriority,ad=Qe.unstable_IdlePriority,qi=null,xt=null;function of(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(qi,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:lf,rf=Math.log,sf=Math.LN2;function lf(t){return t>>>=0,t===0?32:31-(rf(t)/sf|0)|0}var Hr=64,Ur=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xi(t,e){var n=t.pendingLanes;if(n===0)return 0;var o=0,r=t.suspendedLanes,i=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~r;l!==0?o=jo(l):(i&=s,i!==0&&(o=jo(i)))}else s=n&~r,s!==0?o=jo(s):i!==0&&(o=jo(i));if(o===0)return 0;if(e!==0&&e!==o&&!(e&r)&&(r=o&-o,i=e&-e,r>=i||r===16&&(i&4194240)!==0))return e;if(o&4&&(o|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)n=31-pt(e),r=1<<n,o|=t[n],e&=~r;return o}function af(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cf(t,e){for(var n=t.suspendedLanes,o=t.pingedLanes,r=t.expirationTimes,i=t.pendingLanes;0<i;){var s=31-pt(i),l=1<<s,a=r[s];a===-1?(!(l&n)||l&o)&&(r[s]=af(l,e)):a<=e&&(t.expiredLanes|=l),i&=~l}}function ul(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cd(){var t=Hr;return Hr<<=1,!(Hr&4194240)&&(Hr=64),t}function xs(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Or(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pt(e),t[e]=n}function uf(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-pt(n),i=1<<r;e[r]=0,o[r]=-1,t[r]=-1,n&=~i}}function Jl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var o=31-pt(n),r=1<<o;r&e|t[o]&e&&(t[o]|=e),n&=~r}}var U=0;function ud(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dd,ea,hd,pd,fd,dl=!1,Wr=[],Gt=null,Xt=null,Zt=null,sr=new Map,lr=new Map,Kt=[],df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ac(t,e){switch(t){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":sr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(e.pointerId)}}function Oo(t,e,n,o,r,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},e!==null&&(e=Ar(e),e!==null&&ea(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function hf(t,e,n,o,r){switch(e){case"focusin":return Gt=Oo(Gt,t,e,n,o,r),!0;case"dragenter":return Xt=Oo(Xt,t,e,n,o,r),!0;case"mouseover":return Zt=Oo(Zt,t,e,n,o,r),!0;case"pointerover":var i=r.pointerId;return sr.set(i,Oo(sr.get(i)||null,t,e,n,o,r)),!0;case"gotpointercapture":return i=r.pointerId,lr.set(i,Oo(lr.get(i)||null,t,e,n,o,r)),!0}return!1}function vd(t){var e=bn(t.target);if(e!==null){var n=Vn(e);if(n!==null){if(e=n.tag,e===13){if(e=od(n),e!==null){t.blockedOn=e,fd(t.priority,function(){hd(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ii(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);sl=o,n.target.dispatchEvent(o),sl=null}else return e=Ar(n),e!==null&&ea(e),t.blockedOn=n,!1;e.shift()}return!0}function cc(t,e,n){ii(t)&&n.delete(e)}function pf(){dl=!1,Gt!==null&&ii(Gt)&&(Gt=null),Xt!==null&&ii(Xt)&&(Xt=null),Zt!==null&&ii(Zt)&&(Zt=null),sr.forEach(cc),lr.forEach(cc)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,dl||(dl=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,pf)))}function ar(t){function e(r){return zo(r,t)}if(0<Wr.length){zo(Wr[0],t);for(var n=1;n<Wr.length;n++){var o=Wr[n];o.blockedOn===t&&(o.blockedOn=null)}}for(Gt!==null&&zo(Gt,t),Xt!==null&&zo(Xt,t),Zt!==null&&zo(Zt,t),sr.forEach(e),lr.forEach(e),n=0;n<Kt.length;n++)o=Kt[n],o.blockedOn===t&&(o.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)vd(n),n.blockedOn===null&&Kt.shift()}var so=Ft.ReactCurrentBatchConfig,wi=!0;function ff(t,e,n,o){var r=U,i=so.transition;so.transition=null;try{U=1,ta(t,e,n,o)}finally{U=r,so.transition=i}}function vf(t,e,n,o){var r=U,i=so.transition;so.transition=null;try{U=4,ta(t,e,n,o)}finally{U=r,so.transition=i}}function ta(t,e,n,o){if(wi){var r=hl(t,e,n,o);if(r===null)Os(t,e,o,ki,n),ac(t,o);else if(hf(r,t,e,n,o))o.stopPropagation();else if(ac(t,o),e&4&&-1<df.indexOf(t)){for(;r!==null;){var i=Ar(r);if(i!==null&&dd(i),i=hl(t,e,n,o),i===null&&Os(t,e,o,ki,n),i===r)break;r=i}r!==null&&o.stopPropagation()}else Os(t,e,o,null,n)}}var ki=null;function hl(t,e,n,o){if(ki=null,t=Xl(o),t=bn(t),t!==null)if(e=Vn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=od(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ki=t,null}function md(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tf()){case Zl:return 1;case ld:return 4;case bi:case nf:return 16;case ad:return 536870912;default:return 16}default:return 16}}var Qt=null,na=null,si=null;function gd(){if(si)return si;var t,e=na,n=e.length,o,r="value"in Qt?Qt.value:Qt.textContent,i=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(o=1;o<=s&&e[n-o]===r[i-o];o++);return si=r.slice(t,1<o?1-o:void 0)}function li(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Kr(){return!0}function uc(){return!1}function Ge(t){function e(n,o,r,i,s){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kr:uc,this.isPropagationStopped=uc,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oa=Ge(yo),zr=oe({},yo,{view:0,detail:0}),mf=Ge(zr),ws,ks,Ao,Qi=oe({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(ws=t.screenX-Ao.screenX,ks=t.screenY-Ao.screenY):ks=ws=0,Ao=t),ws)},movementY:function(t){return"movementY"in t?t.movementY:ks}}),dc=Ge(Qi),gf=oe({},Qi,{dataTransfer:0}),yf=Ge(gf),_f=oe({},zr,{relatedTarget:0}),Cs=Ge(_f),bf=oe({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),xf=Ge(bf),wf=oe({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kf=Ge(wf),Cf=oe({},yo,{data:0}),hc=Ge(Cf),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ef={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$f={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function If(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$f[t])?!!e[t]:!1}function ra(){return If}var Pf=oe({},zr,{key:function(t){if(t.key){var e=Sf[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=li(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ef[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(t){return t.type==="keypress"?li(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?li(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rf=Ge(Pf),Of=oe({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pc=Ge(Of),zf=oe({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),Af=Ge(zf),Tf=oe({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nf=Ge(Tf),Lf=oe({},Qi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bf=Ge(Lf),Df=[9,13,27,32],ia=At&&"CompositionEvent"in window,Qo=null;At&&"documentMode"in document&&(Qo=document.documentMode);var Vf=At&&"TextEvent"in window&&!Qo,yd=At&&(!ia||Qo&&8<Qo&&11>=Qo),fc=" ",vc=!1;function _d(t,e){switch(t){case"keyup":return Df.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qn=!1;function Mf(t,e){switch(t){case"compositionend":return bd(e);case"keypress":return e.which!==32?null:(vc=!0,fc);case"textInput":return t=e.data,t===fc&&vc?null:t;default:return null}}function Ff(t,e){if(qn)return t==="compositionend"||!ia&&_d(t,e)?(t=gd(),si=na=Qt=null,qn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yd&&e.locale!=="ko"?null:e.data;default:return null}}var jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jf[t.type]:e==="textarea"}function xd(t,e,n,o){Zu(o),e=Ci(e,"onChange"),0<e.length&&(n=new oa("onChange","change",null,n,o),t.push({event:n,listeners:e}))}var Yo=null,cr=null;function Hf(t){zd(t,0)}function Yi(t){var e=Gn(t);if(Wu(e))return t}function Uf(t,e){if(t==="change")return e}var wd=!1;if(At){var Ss;if(At){var Es="oninput"in document;if(!Es){var gc=document.createElement("div");gc.setAttribute("oninput","return;"),Es=typeof gc.oninput=="function"}Ss=Es}else Ss=!1;wd=Ss&&(!document.documentMode||9<document.documentMode)}function yc(){Yo&&(Yo.detachEvent("onpropertychange",kd),cr=Yo=null)}function kd(t){if(t.propertyName==="value"&&Yi(cr)){var e=[];xd(e,cr,t,Xl(t)),nd(Hf,e)}}function Wf(t,e,n){t==="focusin"?(yc(),Yo=e,cr=n,Yo.attachEvent("onpropertychange",kd)):t==="focusout"&&yc()}function Kf(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yi(cr)}function qf(t,e){if(t==="click")return Yi(e)}function Qf(t,e){if(t==="input"||t==="change")return Yi(e)}function Yf(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mt=typeof Object.is=="function"?Object.is:Yf;function ur(t,e){if(mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Qs.call(e,r)||!mt(t[r],e[r]))return!1}return!0}function _c(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bc(t,e){var n=_c(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=e&&o>=e)return{node:n,offset:e-t};t=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_c(n)}}function Cd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sd(){for(var t=window,e=gi();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gi(t.document)}return e}function sa(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gf(t){var e=Sd(),n=t.focusedElem,o=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cd(n.ownerDocument.documentElement,n)){if(o!==null&&sa(n)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,i=Math.min(o.start,r);o=o.end===void 0?i:Math.min(o.end,r),!t.extend&&i>o&&(r=o,o=i,i=r),r=bc(n,i);var s=bc(n,o);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),i>o?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xf=At&&"documentMode"in document&&11>=document.documentMode,Qn=null,pl=null,Go=null,fl=!1;function xc(t,e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||Qn==null||Qn!==gi(o)||(o=Qn,"selectionStart"in o&&sa(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Go&&ur(Go,o)||(Go=o,o=Ci(pl,"onSelect"),0<o.length&&(e=new oa("onSelect","select",null,e,n),t.push({event:e,listeners:o}),e.target=Qn)))}function qr(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yn={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionend:qr("Transition","TransitionEnd")},$s={},Ed={};At&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Gi(t){if($s[t])return $s[t];if(!Yn[t])return t;var e=Yn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ed)return $s[t]=e[n];return t}var $d=Gi("animationend"),Id=Gi("animationiteration"),Pd=Gi("animationstart"),Rd=Gi("transitionend"),Od=new Map,wc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(t,e){Od.set(t,e),Dn(e,[t])}for(var Is=0;Is<wc.length;Is++){var Ps=wc[Is],Zf=Ps.toLowerCase(),Jf=Ps[0].toUpperCase()+Ps.slice(1);cn(Zf,"on"+Jf)}cn($d,"onAnimationEnd");cn(Id,"onAnimationIteration");cn(Pd,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(Rd,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ev=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function kc(t,e,n){var o=t.type||"unknown-event";t.currentTarget=n,Xp(o,e,void 0,t),t.currentTarget=null}function zd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],r=o.event;o=o.listeners;e:{var i=void 0;if(e)for(var s=o.length-1;0<=s;s--){var l=o[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==i&&r.isPropagationStopped())break e;kc(r,l,c),i=a}else for(s=0;s<o.length;s++){if(l=o[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==i&&r.isPropagationStopped())break e;kc(r,l,c),i=a}}}if(_i)throw t=cl,_i=!1,cl=null,t}function Q(t,e){var n=e[_l];n===void 0&&(n=e[_l]=new Set);var o=t+"__bubble";n.has(o)||(Ad(e,t,2,!1),n.add(o))}function Rs(t,e,n){var o=0;e&&(o|=4),Ad(n,t,o,e)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function dr(t){if(!t[Qr]){t[Qr]=!0,Mu.forEach(function(n){n!=="selectionchange"&&(ev.has(n)||Rs(n,!1,t),Rs(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qr]||(e[Qr]=!0,Rs("selectionchange",!1,e))}}function Ad(t,e,n,o){switch(md(e)){case 1:var r=ff;break;case 4:r=vf;break;default:r=ta}n=r.bind(null,e,n,t),r=void 0,!al||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),o?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Os(t,e,n,o,r){var i=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var l=o.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(s===4)for(s=o.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;s=s.return}for(;l!==null;){if(s=bn(l),s===null)return;if(a=s.tag,a===5||a===6){o=i=s;continue e}l=l.parentNode}}o=o.return}nd(function(){var c=i,m=Xl(n),d=[];e:{var f=Od.get(t);if(f!==void 0){var g=oa,y=t;switch(t){case"keypress":if(li(n)===0)break e;case"keydown":case"keyup":g=Rf;break;case"focusin":y="focus",g=Cs;break;case"focusout":y="blur",g=Cs;break;case"beforeblur":case"afterblur":g=Cs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Af;break;case $d:case Id:case Pd:g=xf;break;case Rd:g=Nf;break;case"scroll":g=mf;break;case"wheel":g=Bf;break;case"copy":case"cut":case"paste":g=kf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=pc}var w=(e&4)!==0,F=!w&&t==="scroll",h=w?f!==null?f+"Capture":null:f;w=[];for(var u=c,v;u!==null;){v=u;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,h!==null&&(b=ir(u,h),b!=null&&w.push(hr(u,b,v)))),F)break;u=u.return}0<w.length&&(f=new g(f,y,null,n,m),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==sl&&(y=n.relatedTarget||n.fromElement)&&(bn(y)||y[Tt]))break e;if((g||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?bn(y):null,y!==null&&(F=Vn(y),y!==F||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(w=dc,b="onMouseLeave",h="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(w=pc,b="onPointerLeave",h="onPointerEnter",u="pointer"),F=g==null?f:Gn(g),v=y==null?f:Gn(y),f=new w(b,u+"leave",g,n,m),f.target=F,f.relatedTarget=v,b=null,bn(m)===c&&(w=new w(h,u+"enter",y,n,m),w.target=v,w.relatedTarget=F,b=w),F=b,g&&y)t:{for(w=g,h=y,u=0,v=w;v;v=Hn(v))u++;for(v=0,b=h;b;b=Hn(b))v++;for(;0<u-v;)w=Hn(w),u--;for(;0<v-u;)h=Hn(h),v--;for(;u--;){if(w===h||h!==null&&w===h.alternate)break t;w=Hn(w),h=Hn(h)}w=null}else w=null;g!==null&&Cc(d,f,g,w,!1),y!==null&&F!==null&&Cc(d,F,y,w,!0)}}e:{if(f=c?Gn(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var k=Uf;else if(mc(f))if(wd)k=Qf;else{k=Kf;var E=Wf}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=qf);if(k&&(k=k(t,c))){xd(d,k,n,m);break e}E&&E(t,f,c),t==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&tl(f,"number",f.value)}switch(E=c?Gn(c):window,t){case"focusin":(mc(E)||E.contentEditable==="true")&&(Qn=E,pl=c,Go=null);break;case"focusout":Go=pl=Qn=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,xc(d,n,m);break;case"selectionchange":if(Xf)break;case"keydown":case"keyup":xc(d,n,m)}var $;if(ia)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else qn?_d(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(yd&&n.locale!=="ko"&&(qn||I!=="onCompositionStart"?I==="onCompositionEnd"&&qn&&($=gd()):(Qt=m,na="value"in Qt?Qt.value:Qt.textContent,qn=!0)),E=Ci(c,I),0<E.length&&(I=new hc(I,t,null,n,m),d.push({event:I,listeners:E}),$?I.data=$:($=bd(n),$!==null&&(I.data=$)))),($=Vf?Mf(t,n):Ff(t,n))&&(c=Ci(c,"onBeforeInput"),0<c.length&&(m=new hc("onBeforeInput","beforeinput",null,n,m),d.push({event:m,listeners:c}),m.data=$))}zd(d,e)})}function hr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ci(t,e){for(var n=e+"Capture",o=[];t!==null;){var r=t,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=ir(t,n),i!=null&&o.unshift(hr(t,i,r)),i=ir(t,e),i!=null&&o.push(hr(t,i,r))),t=t.return}return o}function Hn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cc(t,e,n,o,r){for(var i=e._reactName,s=[];n!==null&&n!==o;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===o)break;l.tag===5&&c!==null&&(l=c,r?(a=ir(n,i),a!=null&&s.unshift(hr(n,a,l))):r||(a=ir(n,i),a!=null&&s.push(hr(n,a,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var tv=/\r\n?/g,nv=/\u0000|\uFFFD/g;function Sc(t){return(typeof t=="string"?t:""+t).replace(tv,`
`).replace(nv,"")}function Yr(t,e,n){if(e=Sc(e),Sc(t)!==e&&n)throw Error(x(425))}function Si(){}var vl=null,ml=null;function gl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yl=typeof setTimeout=="function"?setTimeout:void 0,ov=typeof clearTimeout=="function"?clearTimeout:void 0,Ec=typeof Promise=="function"?Promise:void 0,rv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ec<"u"?function(t){return Ec.resolve(null).then(t).catch(iv)}:yl;function iv(t){setTimeout(function(){throw t})}function zs(t,e){var n=e,o=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){t.removeChild(r),ar(e);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);ar(e)}function Jt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $c(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),bt="__reactFiber$"+_o,pr="__reactProps$"+_o,Tt="__reactContainer$"+_o,_l="__reactEvents$"+_o,sv="__reactListeners$"+_o,lv="__reactHandles$"+_o;function bn(t){var e=t[bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tt]||n[bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$c(t);t!==null;){if(n=t[bt])return n;t=$c(t)}return e}t=n,n=t.parentNode}return null}function Ar(t){return t=t[bt]||t[Tt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Xi(t){return t[pr]||null}var bl=[],Xn=-1;function un(t){return{current:t}}function Y(t){0>Xn||(t.current=bl[Xn],bl[Xn]=null,Xn--)}function K(t,e){Xn++,bl[Xn]=t.current,t.current=e}var ln={},Ie=un(ln),Me=un(!1),En=ln;function uo(t,e){var n=t.type.contextTypes;if(!n)return ln;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=e[i];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Fe(t){return t=t.childContextTypes,t!=null}function Ei(){Y(Me),Y(Ie)}function Ic(t,e,n){if(Ie.current!==ln)throw Error(x(168));K(Ie,e),K(Me,n)}function Td(t,e,n){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in e))throw Error(x(108,Up(t)||"Unknown",r));return oe({},n,o)}function $i(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ln,En=Ie.current,K(Ie,t),K(Me,Me.current),!0}function Pc(t,e,n){var o=t.stateNode;if(!o)throw Error(x(169));n?(t=Td(t,e,En),o.__reactInternalMemoizedMergedChildContext=t,Y(Me),Y(Ie),K(Ie,t)):Y(Me),K(Me,n)}var It=null,Zi=!1,As=!1;function Nd(t){It===null?It=[t]:It.push(t)}function av(t){Zi=!0,Nd(t)}function dn(){if(!As&&It!==null){As=!0;var t=0,e=U;try{var n=It;for(U=1;t<n.length;t++){var o=n[t];do o=o(!0);while(o!==null)}It=null,Zi=!1}catch(r){throw It!==null&&(It=It.slice(t+1)),sd(Zl,dn),r}finally{U=e,As=!1}}return null}var Zn=[],Jn=0,Ii=null,Pi=0,Ze=[],Je=0,$n=null,Rt=1,Ot="";function mn(t,e){Zn[Jn++]=Pi,Zn[Jn++]=Ii,Ii=t,Pi=e}function Ld(t,e,n){Ze[Je++]=Rt,Ze[Je++]=Ot,Ze[Je++]=$n,$n=t;var o=Rt;t=Ot;var r=32-pt(o)-1;o&=~(1<<r),n+=1;var i=32-pt(e)+r;if(30<i){var s=r-r%5;i=(o&(1<<s)-1).toString(32),o>>=s,r-=s,Rt=1<<32-pt(e)+r|n<<r|o,Ot=i+t}else Rt=1<<i|n<<r|o,Ot=t}function la(t){t.return!==null&&(mn(t,1),Ld(t,1,0))}function aa(t){for(;t===Ii;)Ii=Zn[--Jn],Zn[Jn]=null,Pi=Zn[--Jn],Zn[Jn]=null;for(;t===$n;)$n=Ze[--Je],Ze[Je]=null,Ot=Ze[--Je],Ze[Je]=null,Rt=Ze[--Je],Ze[Je]=null}var qe=null,Ke=null,Z=!1,ht=null;function Bd(t,e){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qe=t,Ke=Jt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qe=t,Ke=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$n!==null?{id:Rt,overflow:Ot}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qe=t,Ke=null,!0):!1;default:return!1}}function xl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wl(t){if(Z){var e=Ke;if(e){var n=e;if(!Rc(t,e)){if(xl(t))throw Error(x(418));e=Jt(n.nextSibling);var o=qe;e&&Rc(t,e)?Bd(o,n):(t.flags=t.flags&-4097|2,Z=!1,qe=t)}}else{if(xl(t))throw Error(x(418));t.flags=t.flags&-4097|2,Z=!1,qe=t}}}function Oc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qe=t}function Gr(t){if(t!==qe)return!1;if(!Z)return Oc(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gl(t.type,t.memoizedProps)),e&&(e=Ke)){if(xl(t))throw Dd(),Error(x(418));for(;e;)Bd(t,e),e=Jt(e.nextSibling)}if(Oc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ke=Jt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ke=null}}else Ke=qe?Jt(t.stateNode.nextSibling):null;return!0}function Dd(){for(var t=Ke;t;)t=Jt(t.nextSibling)}function ho(){Ke=qe=null,Z=!1}function ca(t){ht===null?ht=[t]:ht.push(t)}var cv=Ft.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var o=n.stateNode}if(!o)throw Error(x(147,t));var r=o,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var l=r.refs;s===null?delete l[i]:l[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Xr(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zc(t){var e=t._init;return e(t._payload)}function Vd(t){function e(h,u){if(t){var v=h.deletions;v===null?(h.deletions=[u],h.flags|=16):v.push(u)}}function n(h,u){if(!t)return null;for(;u!==null;)e(h,u),u=u.sibling;return null}function o(h,u){for(h=new Map;u!==null;)u.key!==null?h.set(u.key,u):h.set(u.index,u),u=u.sibling;return h}function r(h,u){return h=on(h,u),h.index=0,h.sibling=null,h}function i(h,u,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<u?(h.flags|=2,u):v):(h.flags|=2,u)):(h.flags|=1048576,u)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function l(h,u,v,b){return u===null||u.tag!==6?(u=Ms(v,h.mode,b),u.return=h,u):(u=r(u,v),u.return=h,u)}function a(h,u,v,b){var k=v.type;return k===Kn?m(h,u,v.props.children,b,v.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ut&&zc(k)===u.type)?(b=r(u,v.props),b.ref=To(h,u,v),b.return=h,b):(b=fi(v.type,v.key,v.props,null,h.mode,b),b.ref=To(h,u,v),b.return=h,b)}function c(h,u,v,b){return u===null||u.tag!==4||u.stateNode.containerInfo!==v.containerInfo||u.stateNode.implementation!==v.implementation?(u=Fs(v,h.mode,b),u.return=h,u):(u=r(u,v.children||[]),u.return=h,u)}function m(h,u,v,b,k){return u===null||u.tag!==7?(u=Sn(v,h.mode,b,k),u.return=h,u):(u=r(u,v),u.return=h,u)}function d(h,u,v){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ms(""+u,h.mode,v),u.return=h,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Mr:return v=fi(u.type,u.key,u.props,null,h.mode,v),v.ref=To(h,null,u),v.return=h,v;case Wn:return u=Fs(u,h.mode,v),u.return=h,u;case Ut:var b=u._init;return d(h,b(u._payload),v)}if(Fo(u)||Po(u))return u=Sn(u,h.mode,v,null),u.return=h,u;Xr(h,u)}return null}function f(h,u,v,b){var k=u!==null?u.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:l(h,u,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Mr:return v.key===k?a(h,u,v,b):null;case Wn:return v.key===k?c(h,u,v,b):null;case Ut:return k=v._init,f(h,u,k(v._payload),b)}if(Fo(v)||Po(v))return k!==null?null:m(h,u,v,b,null);Xr(h,v)}return null}function g(h,u,v,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(v)||null,l(u,h,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Mr:return h=h.get(b.key===null?v:b.key)||null,a(u,h,b,k);case Wn:return h=h.get(b.key===null?v:b.key)||null,c(u,h,b,k);case Ut:var E=b._init;return g(h,u,v,E(b._payload),k)}if(Fo(b)||Po(b))return h=h.get(v)||null,m(u,h,b,k,null);Xr(u,b)}return null}function y(h,u,v,b){for(var k=null,E=null,$=u,I=u=0,ee=null;$!==null&&I<v.length;I++){$.index>I?(ee=$,$=null):ee=$.sibling;var T=f(h,$,v[I],b);if(T===null){$===null&&($=ee);break}t&&$&&T.alternate===null&&e(h,$),u=i(T,u,I),E===null?k=T:E.sibling=T,E=T,$=ee}if(I===v.length)return n(h,$),Z&&mn(h,I),k;if($===null){for(;I<v.length;I++)$=d(h,v[I],b),$!==null&&(u=i($,u,I),E===null?k=$:E.sibling=$,E=$);return Z&&mn(h,I),k}for($=o(h,$);I<v.length;I++)ee=g($,h,I,v[I],b),ee!==null&&(t&&ee.alternate!==null&&$.delete(ee.key===null?I:ee.key),u=i(ee,u,I),E===null?k=ee:E.sibling=ee,E=ee);return t&&$.forEach(function(at){return e(h,at)}),Z&&mn(h,I),k}function w(h,u,v,b){var k=Po(v);if(typeof k!="function")throw Error(x(150));if(v=k.call(v),v==null)throw Error(x(151));for(var E=k=null,$=u,I=u=0,ee=null,T=v.next();$!==null&&!T.done;I++,T=v.next()){$.index>I?(ee=$,$=null):ee=$.sibling;var at=f(h,$,T.value,b);if(at===null){$===null&&($=ee);break}t&&$&&at.alternate===null&&e(h,$),u=i(at,u,I),E===null?k=at:E.sibling=at,E=at,$=ee}if(T.done)return n(h,$),Z&&mn(h,I),k;if($===null){for(;!T.done;I++,T=v.next())T=d(h,T.value,b),T!==null&&(u=i(T,u,I),E===null?k=T:E.sibling=T,E=T);return Z&&mn(h,I),k}for($=o(h,$);!T.done;I++,T=v.next())T=g($,h,I,T.value,b),T!==null&&(t&&T.alternate!==null&&$.delete(T.key===null?I:T.key),u=i(T,u,I),E===null?k=T:E.sibling=T,E=T);return t&&$.forEach(function($o){return e(h,$o)}),Z&&mn(h,I),k}function F(h,u,v,b){if(typeof v=="object"&&v!==null&&v.type===Kn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Mr:e:{for(var k=v.key,E=u;E!==null;){if(E.key===k){if(k=v.type,k===Kn){if(E.tag===7){n(h,E.sibling),u=r(E,v.props.children),u.return=h,h=u;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ut&&zc(k)===E.type){n(h,E.sibling),u=r(E,v.props),u.ref=To(h,E,v),u.return=h,h=u;break e}n(h,E);break}else e(h,E);E=E.sibling}v.type===Kn?(u=Sn(v.props.children,h.mode,b,v.key),u.return=h,h=u):(b=fi(v.type,v.key,v.props,null,h.mode,b),b.ref=To(h,u,v),b.return=h,h=b)}return s(h);case Wn:e:{for(E=v.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===v.containerInfo&&u.stateNode.implementation===v.implementation){n(h,u.sibling),u=r(u,v.children||[]),u.return=h,h=u;break e}else{n(h,u);break}else e(h,u);u=u.sibling}u=Fs(v,h.mode,b),u.return=h,h=u}return s(h);case Ut:return E=v._init,F(h,u,E(v._payload),b)}if(Fo(v))return y(h,u,v,b);if(Po(v))return w(h,u,v,b);Xr(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,u!==null&&u.tag===6?(n(h,u.sibling),u=r(u,v),u.return=h,h=u):(n(h,u),u=Ms(v,h.mode,b),u.return=h,h=u),s(h)):n(h,u)}return F}var po=Vd(!0),Md=Vd(!1),Ri=un(null),Oi=null,eo=null,ua=null;function da(){ua=eo=Oi=null}function ha(t){var e=Ri.current;Y(Ri),t._currentValue=e}function kl(t,e,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===n)break;t=t.return}}function lo(t,e){Oi=t,ua=eo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(De=!0),t.firstContext=null)}function ot(t){var e=t._currentValue;if(ua!==t)if(t={context:t,memoizedValue:e,next:null},eo===null){if(Oi===null)throw Error(x(308));eo=t,Oi.dependencies={lanes:0,firstContext:t}}else eo=eo.next=t;return e}var xn=null;function pa(t){xn===null?xn=[t]:xn.push(t)}function Fd(t,e,n,o){var r=e.interleaved;return r===null?(n.next=n,pa(e)):(n.next=r.next,r.next=n),e.interleaved=n,Nt(t,o)}function Nt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wt=!1;function fa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function en(t,e,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,L&2){var r=o.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),o.pending=e,Nt(t,n)}return r=o.interleaved,r===null?(e.next=e,pa(o)):(e.next=r.next,r.next=e),o.interleaved=e,Nt(t,n)}function ai(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,Jl(t,n)}}function Ac(t,e){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?r=i=e:i=i.next=e}else r=i=e;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zi(t,e,n,o){var r=t.updateQueue;Wt=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?i=c:s.next=c,s=a;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==s&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=a))}if(i!==null){var d=r.baseState;s=0,m=c=a=null,l=i;do{var f=l.lane,g=l.eventTime;if((o&f)===f){m!==null&&(m=m.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,w=l;switch(f=e,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=oe({},d,f);break e;case 2:Wt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=g,a=d):m=m.next=g,s|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(m===null&&(a=d),r.baseState=a,r.firstBaseUpdate=c,r.lastBaseUpdate=m,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else i===null&&(r.shared.lanes=0);Pn|=s,t.lanes=s,t.memoizedState=d}}function Tc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(x(191,r));r.call(o)}}}var Tr={},wt=un(Tr),fr=un(Tr),vr=un(Tr);function wn(t){if(t===Tr)throw Error(x(174));return t}function va(t,e){switch(K(vr,e),K(fr,t),K(wt,Tr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ol(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ol(e,t)}Y(wt),K(wt,e)}function fo(){Y(wt),Y(fr),Y(vr)}function Hd(t){wn(vr.current);var e=wn(wt.current),n=ol(e,t.type);e!==n&&(K(fr,t),K(wt,n))}function ma(t){fr.current===t&&(Y(wt),Y(fr))}var te=un(0);function Ai(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ts=[];function ga(){for(var t=0;t<Ts.length;t++)Ts[t]._workInProgressVersionPrimary=null;Ts.length=0}var ci=Ft.ReactCurrentDispatcher,Ns=Ft.ReactCurrentBatchConfig,In=0,ne=null,he=null,me=null,Ti=!1,Xo=!1,mr=0,uv=0;function Se(){throw Error(x(321))}function ya(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mt(t[n],e[n]))return!1;return!0}function _a(t,e,n,o,r,i){if(In=i,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ci.current=t===null||t.memoizedState===null?fv:vv,t=n(o,r),Xo){i=0;do{if(Xo=!1,mr=0,25<=i)throw Error(x(301));i+=1,me=he=null,e.updateQueue=null,ci.current=mv,t=n(o,r)}while(Xo)}if(ci.current=Ni,e=he!==null&&he.next!==null,In=0,me=he=ne=null,Ti=!1,e)throw Error(x(300));return t}function ba(){var t=mr!==0;return mr=0,t}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ne.memoizedState=me=t:me=me.next=t,me}function rt(){if(he===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=he.next;var e=me===null?ne.memoizedState:me.next;if(e!==null)me=e,he=t;else{if(t===null)throw Error(x(310));he=t,t={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},me===null?ne.memoizedState=me=t:me=me.next=t}return me}function gr(t,e){return typeof e=="function"?e(t):e}function Ls(t){var e=rt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var o=he,r=o.baseQueue,i=n.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}o.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,o=o.baseState;var l=s=null,a=null,c=i;do{var m=c.lane;if((In&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:t(o,c.action);else{var d={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=d,s=o):a=a.next=d,ne.lanes|=m,Pn|=m}c=c.next}while(c!==null&&c!==i);a===null?s=o:a.next=l,mt(o,e.memoizedState)||(De=!0),e.memoizedState=o,e.baseState=s,e.baseQueue=a,n.lastRenderedState=o}if(t=n.interleaved,t!==null){r=t;do i=r.lane,ne.lanes|=i,Pn|=i,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bs(t){var e=rt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var o=n.dispatch,r=n.pending,i=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do i=t(i,s.action),s=s.next;while(s!==r);mt(i,e.memoizedState)||(De=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,o]}function Ud(){}function Wd(t,e){var n=ne,o=rt(),r=e(),i=!mt(o.memoizedState,r);if(i&&(o.memoizedState=r,De=!0),o=o.queue,xa(Qd.bind(null,n,o,t),[t]),o.getSnapshot!==e||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,yr(9,qd.bind(null,n,o,r,e),void 0,null),ge===null)throw Error(x(349));In&30||Kd(n,e,r)}return r}function Kd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qd(t,e,n,o){e.value=n,e.getSnapshot=o,Yd(e)&&Gd(t)}function Qd(t,e,n){return n(function(){Yd(e)&&Gd(t)})}function Yd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mt(t,n)}catch{return!0}}function Gd(t){var e=Nt(t,1);e!==null&&ft(e,t,1,-1)}function Nc(t){var e=_t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:t},e.queue=t,t=t.dispatch=pv.bind(null,ne,t),[e.memoizedState,t]}function yr(t,e,n,o){return t={tag:t,create:e,destroy:n,deps:o,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,e.lastEffect=t)),t}function Xd(){return rt().memoizedState}function ui(t,e,n,o){var r=_t();ne.flags|=t,r.memoizedState=yr(1|e,n,void 0,o===void 0?null:o)}function Ji(t,e,n,o){var r=rt();o=o===void 0?null:o;var i=void 0;if(he!==null){var s=he.memoizedState;if(i=s.destroy,o!==null&&ya(o,s.deps)){r.memoizedState=yr(e,n,i,o);return}}ne.flags|=t,r.memoizedState=yr(1|e,n,i,o)}function Lc(t,e){return ui(8390656,8,t,e)}function xa(t,e){return Ji(2048,8,t,e)}function Zd(t,e){return Ji(4,2,t,e)}function Jd(t,e){return Ji(4,4,t,e)}function eh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function th(t,e,n){return n=n!=null?n.concat([t]):null,Ji(4,4,eh.bind(null,e,t),n)}function wa(){}function nh(t,e){var n=rt();e=e===void 0?null:e;var o=n.memoizedState;return o!==null&&e!==null&&ya(e,o[1])?o[0]:(n.memoizedState=[t,e],t)}function oh(t,e){var n=rt();e=e===void 0?null:e;var o=n.memoizedState;return o!==null&&e!==null&&ya(e,o[1])?o[0]:(t=t(),n.memoizedState=[t,e],t)}function rh(t,e,n){return In&21?(mt(n,e)||(n=cd(),ne.lanes|=n,Pn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n)}function dv(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var o=Ns.transition;Ns.transition={};try{t(!1),e()}finally{U=n,Ns.transition=o}}function ih(){return rt().memoizedState}function hv(t,e,n){var o=nn(t);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},sh(t))lh(e,n);else if(n=Fd(t,e,n,o),n!==null){var r=ze();ft(n,t,o,r),ah(n,e,o)}}function pv(t,e,n){var o=nn(t),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(sh(t))lh(e,r);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,l=i(s,n);if(r.hasEagerState=!0,r.eagerState=l,mt(l,s)){var a=e.interleaved;a===null?(r.next=r,pa(e)):(r.next=a.next,a.next=r),e.interleaved=r;return}}catch{}finally{}n=Fd(t,e,r,o),n!==null&&(r=ze(),ft(n,t,o,r),ah(n,e,o))}}function sh(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function lh(t,e){Xo=Ti=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ah(t,e,n){if(n&4194240){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,Jl(t,n)}}var Ni={readContext:ot,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},fv={readContext:ot,useCallback:function(t,e){return _t().memoizedState=[t,e===void 0?null:e],t},useContext:ot,useEffect:Lc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ui(4194308,4,eh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ui(4194308,4,t,e)},useInsertionEffect:function(t,e){return ui(4,2,t,e)},useMemo:function(t,e){var n=_t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var o=_t();return e=n!==void 0?n(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=hv.bind(null,ne,t),[o.memoizedState,t]},useRef:function(t){var e=_t();return t={current:t},e.memoizedState=t},useState:Nc,useDebugValue:wa,useDeferredValue:function(t){return _t().memoizedState=t},useTransition:function(){var t=Nc(!1),e=t[0];return t=dv.bind(null,t[1]),_t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var o=ne,r=_t();if(Z){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),ge===null)throw Error(x(349));In&30||Kd(o,e,n)}r.memoizedState=n;var i={value:n,getSnapshot:e};return r.queue=i,Lc(Qd.bind(null,o,i,t),[t]),o.flags|=2048,yr(9,qd.bind(null,o,i,n,e),void 0,null),n},useId:function(){var t=_t(),e=ge.identifierPrefix;if(Z){var n=Ot,o=Rt;n=(o&~(1<<32-pt(o)-1)).toString(32)+n,e=":"+e+"R"+n,n=mr++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vv={readContext:ot,useCallback:nh,useContext:ot,useEffect:xa,useImperativeHandle:th,useInsertionEffect:Zd,useLayoutEffect:Jd,useMemo:oh,useReducer:Ls,useRef:Xd,useState:function(){return Ls(gr)},useDebugValue:wa,useDeferredValue:function(t){var e=rt();return rh(e,he.memoizedState,t)},useTransition:function(){var t=Ls(gr)[0],e=rt().memoizedState;return[t,e]},useMutableSource:Ud,useSyncExternalStore:Wd,useId:ih,unstable_isNewReconciler:!1},mv={readContext:ot,useCallback:nh,useContext:ot,useEffect:xa,useImperativeHandle:th,useInsertionEffect:Zd,useLayoutEffect:Jd,useMemo:oh,useReducer:Bs,useRef:Xd,useState:function(){return Bs(gr)},useDebugValue:wa,useDeferredValue:function(t){var e=rt();return he===null?e.memoizedState=t:rh(e,he.memoizedState,t)},useTransition:function(){var t=Bs(gr)[0],e=rt().memoizedState;return[t,e]},useMutableSource:Ud,useSyncExternalStore:Wd,useId:ih,unstable_isNewReconciler:!1};function ut(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cl(t,e,n,o){e=t.memoizedState,n=n(o,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var es={isMounted:function(t){return(t=t._reactInternals)?Vn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var o=ze(),r=nn(t),i=zt(o,r);i.payload=e,n!=null&&(i.callback=n),e=en(t,i,r),e!==null&&(ft(e,t,r,o),ai(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var o=ze(),r=nn(t),i=zt(o,r);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=en(t,i,r),e!==null&&(ft(e,t,r,o),ai(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),o=nn(t),r=zt(n,o);r.tag=2,e!=null&&(r.callback=e),e=en(t,r,o),e!==null&&(ft(e,t,o,n),ai(e,t,o))}};function Bc(t,e,n,o,r,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,i,s):e.prototype&&e.prototype.isPureReactComponent?!ur(n,o)||!ur(r,i):!0}function ch(t,e,n){var o=!1,r=ln,i=e.contextType;return typeof i=="object"&&i!==null?i=ot(i):(r=Fe(e)?En:Ie.current,o=e.contextTypes,i=(o=o!=null)?uo(t,r):ln),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=es,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=i),e}function Dc(t,e,n,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,o),e.state!==t&&es.enqueueReplaceState(e,e.state,null)}function Sl(t,e,n,o){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},fa(t);var i=e.contextType;typeof i=="object"&&i!==null?r.context=ot(i):(i=Fe(e)?En:Ie.current,r.context=uo(t,i)),r.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Cl(t,e,i,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&es.enqueueReplaceState(r,r.state,null),zi(t,n,r,o),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function vo(t,e){try{var n="",o=e;do n+=Hp(o),o=o.return;while(o);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:r,digest:null}}function Ds(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function El(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gv=typeof WeakMap=="function"?WeakMap:Map;function uh(t,e,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var o=e.value;return n.callback=function(){Bi||(Bi=!0,Ll=o),El(t,e)},n}function dh(t,e,n){n=zt(-1,n),n.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var r=e.value;n.payload=function(){return o(r)},n.callback=function(){El(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){El(t,e),typeof o!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Vc(t,e,n){var o=t.pingCache;if(o===null){o=t.pingCache=new gv;var r=new Set;o.set(e,r)}else r=o.get(e),r===void 0&&(r=new Set,o.set(e,r));r.has(n)||(r.add(n),t=Ov.bind(null,t,e,n),e.then(t,t))}function Mc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fc(t,e,n,o,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zt(-1,1),e.tag=2,en(n,e,1))),n.lanes|=1),t)}var yv=Ft.ReactCurrentOwner,De=!1;function Oe(t,e,n,o){e.child=t===null?Md(e,null,n,o):po(e,t.child,n,o)}function jc(t,e,n,o,r){n=n.render;var i=e.ref;return lo(e,r),o=_a(t,e,n,o,i,r),n=ba(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Lt(t,e,r)):(Z&&n&&la(e),e.flags|=1,Oe(t,e,o,r),e.child)}function Hc(t,e,n,o,r){if(t===null){var i=n.type;return typeof i=="function"&&!Ra(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,hh(t,e,i,o,r)):(t=fi(n.type,null,o,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&r)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:ur,n(s,o)&&t.ref===e.ref)return Lt(t,e,r)}return e.flags|=1,t=on(i,o),t.ref=e.ref,t.return=e,e.child=t}function hh(t,e,n,o,r){if(t!==null){var i=t.memoizedProps;if(ur(i,o)&&t.ref===e.ref)if(De=!1,e.pendingProps=o=i,(t.lanes&r)!==0)t.flags&131072&&(De=!0);else return e.lanes=t.lanes,Lt(t,e,r)}return $l(t,e,n,o,r)}function ph(t,e,n){var o=e.pendingProps,r=o.children,i=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(no,We),We|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(no,We),We|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:n,K(no,We),We|=o}else i!==null?(o=i.baseLanes|n,e.memoizedState=null):o=n,K(no,We),We|=o;return Oe(t,e,r,n),e.child}function fh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $l(t,e,n,o,r){var i=Fe(n)?En:Ie.current;return i=uo(e,i),lo(e,r),n=_a(t,e,n,o,i,r),o=ba(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Lt(t,e,r)):(Z&&o&&la(e),e.flags|=1,Oe(t,e,n,r),e.child)}function Uc(t,e,n,o,r){if(Fe(n)){var i=!0;$i(e)}else i=!1;if(lo(e,r),e.stateNode===null)di(t,e),ch(e,n,o),Sl(e,n,o,r),o=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=ot(c):(c=Fe(n)?En:Ie.current,c=uo(e,c));var m=n.getDerivedStateFromProps,d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==o||a!==c)&&Dc(e,s,o,c),Wt=!1;var f=e.memoizedState;s.state=f,zi(e,o,s,r),a=e.memoizedState,l!==o||f!==a||Me.current||Wt?(typeof m=="function"&&(Cl(e,n,m,o),a=e.memoizedState),(l=Wt||Bc(e,n,l,o,f,a,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=a),s.props=o,s.state=a,s.context=c,o=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{s=e.stateNode,jd(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:ut(e.type,l),s.props=c,d=e.pendingProps,f=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=ot(a):(a=Fe(n)?En:Ie.current,a=uo(e,a));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||f!==a)&&Dc(e,s,o,a),Wt=!1,f=e.memoizedState,s.state=f,zi(e,o,s,r);var y=e.memoizedState;l!==d||f!==y||Me.current||Wt?(typeof g=="function"&&(Cl(e,n,g,o),y=e.memoizedState),(c=Wt||Bc(e,n,c,o,f,y,a)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(o,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(o,y,a)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=y),s.props=o,s.state=y,s.context=a,o=c):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),o=!1)}return Il(t,e,n,o,i,r)}function Il(t,e,n,o,r,i){fh(t,e);var s=(e.flags&128)!==0;if(!o&&!s)return r&&Pc(e,n,!1),Lt(t,e,i);o=e.stateNode,yv.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&s?(e.child=po(e,t.child,null,i),e.child=po(e,null,l,i)):Oe(t,e,l,i),e.memoizedState=o.state,r&&Pc(e,n,!0),e.child}function vh(t){var e=t.stateNode;e.pendingContext?Ic(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ic(t,e.context,!1),va(t,e.containerInfo)}function Wc(t,e,n,o,r){return ho(),ca(r),e.flags|=256,Oe(t,e,n,o),e.child}var Pl={dehydrated:null,treeContext:null,retryLane:0};function Rl(t){return{baseLanes:t,cachePool:null,transitions:null}}function mh(t,e,n){var o=e.pendingProps,r=te.current,i=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),K(te,r&1),t===null)return wl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=o.children,t=o.fallback,i?(o=e.mode,i=e.child,s={mode:"hidden",children:s},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=os(s,o,0,null),t=Sn(t,o,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Rl(n),e.memoizedState=Pl,t):ka(e,s));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return _v(t,e,s,o,l,r,n);if(i){i=o.fallback,s=e.mode,r=t.child,l=r.sibling;var a={mode:"hidden",children:o.children};return!(s&1)&&e.child!==r?(o=e.child,o.childLanes=0,o.pendingProps=a,e.deletions=null):(o=on(r,a),o.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=on(l,i):(i=Sn(i,s,n,null),i.flags|=2),i.return=e,o.return=e,o.sibling=i,e.child=o,o=i,i=e.child,s=t.child.memoizedState,s=s===null?Rl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=t.childLanes&~n,e.memoizedState=Pl,o}return i=t.child,t=i.sibling,o=on(i,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=n),o.return=e,o.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=o,e.memoizedState=null,o}function ka(t,e){return e=os({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zr(t,e,n,o){return o!==null&&ca(o),po(e,t.child,null,n),t=ka(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _v(t,e,n,o,r,i,s){if(n)return e.flags&256?(e.flags&=-257,o=Ds(Error(x(422))),Zr(t,e,s,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=o.fallback,r=e.mode,o=os({mode:"visible",children:o.children},r,0,null),i=Sn(i,r,s,null),i.flags|=2,o.return=e,i.return=e,o.sibling=i,e.child=o,e.mode&1&&po(e,t.child,null,s),e.child.memoizedState=Rl(s),e.memoizedState=Pl,i);if(!(e.mode&1))return Zr(t,e,s,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var l=o.dgst;return o=l,i=Error(x(419)),o=Ds(i,o,void 0),Zr(t,e,s,o)}if(l=(s&t.childLanes)!==0,De||l){if(o=ge,o!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|s)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Nt(t,r),ft(o,t,r,-1))}return Pa(),o=Ds(Error(x(421))),Zr(t,e,s,o)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zv.bind(null,t),r._reactRetry=e,null):(t=i.treeContext,Ke=Jt(r.nextSibling),qe=e,Z=!0,ht=null,t!==null&&(Ze[Je++]=Rt,Ze[Je++]=Ot,Ze[Je++]=$n,Rt=t.id,Ot=t.overflow,$n=e),e=ka(e,o.children),e.flags|=4096,e)}function Kc(t,e,n){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),kl(t.return,e,n)}function Vs(t,e,n,o,r){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=n,i.tailMode=r)}function gh(t,e,n){var o=e.pendingProps,r=o.revealOrder,i=o.tail;if(Oe(t,e,o.children,n),o=te.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kc(t,n,e);else if(t.tag===19)Kc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(K(te,o),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ai(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vs(e,!1,r,n,i);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ai(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vs(e,!0,n,null,i);break;case"together":Vs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function di(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=on(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=on(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bv(t,e,n){switch(e.tag){case 3:vh(e),ho();break;case 5:Hd(e);break;case 1:Fe(e.type)&&$i(e);break;case 4:va(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,r=e.memoizedProps.value;K(Ri,o._currentValue),o._currentValue=r;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(K(te,te.current&1),e.flags|=128,null):n&e.child.childLanes?mh(t,e,n):(K(te,te.current&1),t=Lt(t,e,n),t!==null?t.sibling:null);K(te,te.current&1);break;case 19:if(o=(n&e.childLanes)!==0,t.flags&128){if(o)return gh(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),K(te,te.current),o)break;return null;case 22:case 23:return e.lanes=0,ph(t,e,n)}return Lt(t,e,n)}var yh,Ol,_h,bh;yh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ol=function(){};_h=function(t,e,n,o){var r=t.memoizedProps;if(r!==o){t=e.stateNode,wn(wt.current);var i=null;switch(n){case"input":r=Js(t,r),o=Js(t,o),i=[];break;case"select":r=oe({},r,{value:void 0}),o=oe({},o,{value:void 0}),i=[];break;case"textarea":r=nl(t,r),o=nl(t,o),i=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=Si)}rl(n,o);var s;n=null;for(c in r)if(!o.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(or.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in o){var a=o[c];if(l=r!=null?r[c]:void 0,o.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(or.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Q("scroll",t),i||l===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};bh=function(t,e,n,o){n!==o&&(e.flags|=4)};function No(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=o,t.childLanes=n,e}function xv(t,e,n){var o=e.pendingProps;switch(aa(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return Fe(e.type)&&Ei(),Ee(e),null;case 3:return o=e.stateNode,fo(),Y(Me),Y(Ie),ga(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Gr(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ht!==null&&(Vl(ht),ht=null))),Ol(t,e),Ee(e),null;case 5:ma(e);var r=wn(vr.current);if(n=e.type,t!==null&&e.stateNode!=null)_h(t,e,n,o,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(x(166));return Ee(e),null}if(t=wn(wt.current),Gr(e)){o=e.stateNode,n=e.type;var i=e.memoizedProps;switch(o[bt]=e,o[pr]=i,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",o),Q("close",o);break;case"iframe":case"object":case"embed":Q("load",o);break;case"video":case"audio":for(r=0;r<Ho.length;r++)Q(Ho[r],o);break;case"source":Q("error",o);break;case"img":case"image":case"link":Q("error",o),Q("load",o);break;case"details":Q("toggle",o);break;case"input":tc(o,i),Q("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Q("invalid",o);break;case"textarea":oc(o,i),Q("invalid",o)}rl(n,i),r=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?o.textContent!==l&&(i.suppressHydrationWarning!==!0&&Yr(o.textContent,l,t),r=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Yr(o.textContent,l,t),r=["children",""+l]):or.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Q("scroll",o)}switch(n){case"input":Fr(o),nc(o,i,!0);break;case"textarea":Fr(o),rc(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Si)}o=r,e.updateQueue=o,o!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qu(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=s.createElement(n,{is:o.is}):(t=s.createElement(n),n==="select"&&(s=t,o.multiple?s.multiple=!0:o.size&&(s.size=o.size))):t=s.createElementNS(t,n),t[bt]=e,t[pr]=o,yh(t,e,!1,!1),e.stateNode=t;e:{switch(s=il(n,o),n){case"dialog":Q("cancel",t),Q("close",t),r=o;break;case"iframe":case"object":case"embed":Q("load",t),r=o;break;case"video":case"audio":for(r=0;r<Ho.length;r++)Q(Ho[r],t);r=o;break;case"source":Q("error",t),r=o;break;case"img":case"image":case"link":Q("error",t),Q("load",t),r=o;break;case"details":Q("toggle",t),r=o;break;case"input":tc(t,o),r=Js(t,o),Q("invalid",t);break;case"option":r=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},r=oe({},o,{value:void 0}),Q("invalid",t);break;case"textarea":oc(t,o),r=nl(t,o),Q("invalid",t);break;default:r=o}rl(n,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?Xu(t,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Yu(t,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&rr(t,a):typeof a=="number"&&rr(t,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(or.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Q("scroll",t):a!=null&&ql(t,i,a,s))}switch(n){case"input":Fr(t),nc(t,o,!1);break;case"textarea":Fr(t),rc(t);break;case"option":o.value!=null&&t.setAttribute("value",""+sn(o.value));break;case"select":t.multiple=!!o.multiple,i=o.value,i!=null?oo(t,!!o.multiple,i,!1):o.defaultValue!=null&&oo(t,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)bh(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(x(166));if(n=wn(vr.current),wn(wt.current),Gr(e)){if(o=e.stateNode,n=e.memoizedProps,o[bt]=e,(i=o.nodeValue!==n)&&(t=qe,t!==null))switch(t.tag){case 3:Yr(o.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yr(o.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[bt]=e,e.stateNode=o}return Ee(e),null;case 13:if(Y(te),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&Ke!==null&&e.mode&1&&!(e.flags&128))Dd(),ho(),e.flags|=98560,i=!1;else if(i=Gr(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error(x(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[bt]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),i=!1}else ht!==null&&(Vl(ht),ht=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||te.current&1?pe===0&&(pe=3):Pa())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return fo(),Ol(t,e),t===null&&dr(e.stateNode.containerInfo),Ee(e),null;case 10:return ha(e.type._context),Ee(e),null;case 17:return Fe(e.type)&&Ei(),Ee(e),null;case 19:if(Y(te),i=e.memoizedState,i===null)return Ee(e),null;if(o=(e.flags&128)!==0,s=i.rendering,s===null)if(o)No(i,!1);else{if(pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ai(t),s!==null){for(e.flags|=128,No(i,!1),o=s.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=n,n=e.child;n!==null;)i=n,t=o,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,t=s.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(te,te.current&1|2),e.child}t=t.sibling}i.tail!==null&&ae()>mo&&(e.flags|=128,o=!0,No(i,!1),e.lanes=4194304)}else{if(!o)if(t=Ai(s),t!==null){if(e.flags|=128,o=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),No(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Z)return Ee(e),null}else 2*ae()-i.renderingStartTime>mo&&n!==1073741824&&(e.flags|=128,o=!0,No(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(n=i.last,n!==null?n.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ae(),e.sibling=null,n=te.current,K(te,o?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return Ia(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?We&1073741824&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function wv(t,e){switch(aa(e),e.tag){case 1:return Fe(e.type)&&Ei(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fo(),Y(Me),Y(Ie),ga(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ma(e),null;case 13:if(Y(te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(te),null;case 4:return fo(),null;case 10:return ha(e.type._context),null;case 22:case 23:return Ia(),null;case 24:return null;default:return null}}var Jr=!1,$e=!1,kv=typeof WeakSet=="function"?WeakSet:Set,C=null;function to(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){se(t,e,o)}else n.current=null}function zl(t,e,n){try{n()}catch(o){se(t,e,o)}}var qc=!1;function Cv(t,e){if(vl=wi,t=Sd(),sa(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,c=0,m=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(l=s+r),d!==i||o!==0&&d.nodeType!==3||(a=s+o),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++c===r&&(l=s),f===i&&++m===o&&(a=s),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ml={focusedElem:t,selectionRange:n},wi=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,F=y.memoizedState,h=e.stateNode,u=h.getSnapshotBeforeUpdate(e.elementType===e.type?w:ut(e.type,w),F);h.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(b){se(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return y=qc,qc=!1,y}function Zo(t,e,n){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&t)===t){var i=r.destroy;r.destroy=void 0,i!==void 0&&zl(e,n,i)}r=r.next}while(r!==o)}}function ts(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var o=n.create;n.destroy=o()}n=n.next}while(n!==e)}}function Al(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xh(t){var e=t.alternate;e!==null&&(t.alternate=null,xh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bt],delete e[pr],delete e[_l],delete e[sv],delete e[lv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wh(t){return t.tag===5||t.tag===3||t.tag===4}function Qc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tl(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Si));else if(o!==4&&(t=t.child,t!==null))for(Tl(t,e,n),t=t.sibling;t!==null;)Tl(t,e,n),t=t.sibling}function Nl(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(Nl(t,e,n),t=t.sibling;t!==null;)Nl(t,e,n),t=t.sibling}var be=null,dt=!1;function Ht(t,e,n){for(n=n.child;n!==null;)kh(t,e,n),n=n.sibling}function kh(t,e,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(qi,n)}catch{}switch(n.tag){case 5:$e||to(n,e);case 6:var o=be,r=dt;be=null,Ht(t,e,n),be=o,dt=r,be!==null&&(dt?(t=be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(dt?(t=be,n=n.stateNode,t.nodeType===8?zs(t.parentNode,n):t.nodeType===1&&zs(t,n),ar(t)):zs(be,n.stateNode));break;case 4:o=be,r=dt,be=n.stateNode.containerInfo,dt=!0,Ht(t,e,n),be=o,dt=r;break;case 0:case 11:case 14:case 15:if(!$e&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&zl(n,e,s),r=r.next}while(r!==o)}Ht(t,e,n);break;case 1:if(!$e&&(to(n,e),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(l){se(n,e,l)}Ht(t,e,n);break;case 21:Ht(t,e,n);break;case 22:n.mode&1?($e=(o=$e)||n.memoizedState!==null,Ht(t,e,n),$e=o):Ht(t,e,n);break;default:Ht(t,e,n)}}function Yc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kv),e.forEach(function(o){var r=Av.bind(null,t,o);n.has(o)||(n.add(o),o.then(r,r))})}}function ct(t,e){var n=e.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var i=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,dt=!1;break e;case 3:be=l.stateNode.containerInfo,dt=!0;break e;case 4:be=l.stateNode.containerInfo,dt=!0;break e}l=l.return}if(be===null)throw Error(x(160));kh(i,s,r),be=null,dt=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(c){se(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ch(e,t),e=e.sibling}function Ch(t,e){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ct(e,t),yt(t),o&4){try{Zo(3,t,t.return),ts(3,t)}catch(w){se(t,t.return,w)}try{Zo(5,t,t.return)}catch(w){se(t,t.return,w)}}break;case 1:ct(e,t),yt(t),o&512&&n!==null&&to(n,n.return);break;case 5:if(ct(e,t),yt(t),o&512&&n!==null&&to(n,n.return),t.flags&32){var r=t.stateNode;try{rr(r,"")}catch(w){se(t,t.return,w)}}if(o&4&&(r=t.stateNode,r!=null)){var i=t.memoizedProps,s=n!==null?n.memoizedProps:i,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ku(r,i),il(l,s);var c=il(l,i);for(s=0;s<a.length;s+=2){var m=a[s],d=a[s+1];m==="style"?Xu(r,d):m==="dangerouslySetInnerHTML"?Yu(r,d):m==="children"?rr(r,d):ql(r,m,d,c)}switch(l){case"input":el(r,i);break;case"textarea":qu(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?oo(r,!!i.multiple,g,!1):f!==!!i.multiple&&(i.defaultValue!=null?oo(r,!!i.multiple,i.defaultValue,!0):oo(r,!!i.multiple,i.multiple?[]:"",!1))}r[pr]=i}catch(w){se(t,t.return,w)}}break;case 6:if(ct(e,t),yt(t),o&4){if(t.stateNode===null)throw Error(x(162));r=t.stateNode,i=t.memoizedProps;try{r.nodeValue=i}catch(w){se(t,t.return,w)}}break;case 3:if(ct(e,t),yt(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ar(e.containerInfo)}catch(w){se(t,t.return,w)}break;case 4:ct(e,t),yt(t);break;case 13:ct(e,t),yt(t),r=t.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Ea=ae())),o&4&&Yc(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?($e=(c=$e)||m,ct(e,t),$e=c):ct(e,t),yt(t),o&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!m&&t.mode&1)for(C=t,m=t.child;m!==null;){for(d=C=m;C!==null;){switch(f=C,g=f.child,f.tag){case 0:case 11:case 14:case 15:Zo(4,f,f.return);break;case 1:to(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){o=f,n=f.return;try{e=o,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){se(o,n,w)}}break;case 5:to(f,f.return);break;case 22:if(f.memoizedState!==null){Xc(d);continue}}g!==null?(g.return=f,C=g):Xc(d)}m=m.sibling}e:for(m=null,d=t;;){if(d.tag===5){if(m===null){m=d;try{r=d.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Gu("display",s))}catch(w){se(t,t.return,w)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){se(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ct(e,t),yt(t),o&4&&Yc(t);break;case 21:break;default:ct(e,t),yt(t)}}function yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wh(n)){var o=n;break e}n=n.return}throw Error(x(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(rr(r,""),o.flags&=-33);var i=Qc(t);Nl(t,i,r);break;case 3:case 4:var s=o.stateNode.containerInfo,l=Qc(t);Tl(t,l,s);break;default:throw Error(x(161))}}catch(a){se(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sv(t,e,n){C=t,Sh(t)}function Sh(t,e,n){for(var o=(t.mode&1)!==0;C!==null;){var r=C,i=r.child;if(r.tag===22&&o){var s=r.memoizedState!==null||Jr;if(!s){var l=r.alternate,a=l!==null&&l.memoizedState!==null||$e;l=Jr;var c=$e;if(Jr=s,($e=a)&&!c)for(C=r;C!==null;)s=C,a=s.child,s.tag===22&&s.memoizedState!==null?Zc(r):a!==null?(a.return=s,C=a):Zc(r);for(;i!==null;)C=i,Sh(i),i=i.sibling;C=r,Jr=l,$e=c}Gc(t)}else r.subtreeFlags&8772&&i!==null?(i.return=r,C=i):Gc(t)}}function Gc(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$e||ts(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!$e)if(n===null)o.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ut(e.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Tc(e,i,o);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tc(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&ar(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}$e||e.flags&512&&Al(e)}catch(f){se(e,e.return,f)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function Xc(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function Zc(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ts(4,e)}catch(a){se(e,n,a)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var r=e.return;try{o.componentDidMount()}catch(a){se(e,r,a)}}var i=e.return;try{Al(e)}catch(a){se(e,i,a)}break;case 5:var s=e.return;try{Al(e)}catch(a){se(e,s,a)}}}catch(a){se(e,e.return,a)}if(e===t){C=null;break}var l=e.sibling;if(l!==null){l.return=e.return,C=l;break}C=e.return}}var Ev=Math.ceil,Li=Ft.ReactCurrentDispatcher,Ca=Ft.ReactCurrentOwner,tt=Ft.ReactCurrentBatchConfig,L=0,ge=null,ce=null,xe=0,We=0,no=un(0),pe=0,_r=null,Pn=0,ns=0,Sa=0,Jo=null,Be=null,Ea=0,mo=1/0,$t=null,Bi=!1,Ll=null,tn=null,ei=!1,Yt=null,Di=0,er=0,Bl=null,hi=-1,pi=0;function ze(){return L&6?ae():hi!==-1?hi:hi=ae()}function nn(t){return t.mode&1?L&2&&xe!==0?xe&-xe:cv.transition!==null?(pi===0&&(pi=cd()),pi):(t=U,t!==0||(t=window.event,t=t===void 0?16:md(t.type)),t):1}function ft(t,e,n,o){if(50<er)throw er=0,Bl=null,Error(x(185));Or(t,n,o),(!(L&2)||t!==ge)&&(t===ge&&(!(L&2)&&(ns|=n),pe===4&&qt(t,xe)),je(t,o),n===1&&L===0&&!(e.mode&1)&&(mo=ae()+500,Zi&&dn()))}function je(t,e){var n=t.callbackNode;cf(t,e);var o=xi(t,t===ge?xe:0);if(o===0)n!==null&&lc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(n!=null&&lc(n),e===1)t.tag===0?av(Jc.bind(null,t)):Nd(Jc.bind(null,t)),rv(function(){!(L&6)&&dn()}),n=null;else{switch(ud(o)){case 1:n=Zl;break;case 4:n=ld;break;case 16:n=bi;break;case 536870912:n=ad;break;default:n=bi}n=Ah(n,Eh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Eh(t,e){if(hi=-1,pi=0,L&6)throw Error(x(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var o=xi(t,t===ge?xe:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=Vi(t,o);else{e=o;var r=L;L|=2;var i=Ih();(ge!==t||xe!==e)&&($t=null,mo=ae()+500,Cn(t,e));do try{Pv();break}catch(l){$h(t,l)}while(!0);da(),Li.current=i,L=r,ce!==null?e=0:(ge=null,xe=0,e=pe)}if(e!==0){if(e===2&&(r=ul(t),r!==0&&(o=r,e=Dl(t,r))),e===1)throw n=_r,Cn(t,0),qt(t,o),je(t,ae()),n;if(e===6)qt(t,o);else{if(r=t.current.alternate,!(o&30)&&!$v(r)&&(e=Vi(t,o),e===2&&(i=ul(t),i!==0&&(o=i,e=Dl(t,i))),e===1))throw n=_r,Cn(t,0),qt(t,o),je(t,ae()),n;switch(t.finishedWork=r,t.finishedLanes=o,e){case 0:case 1:throw Error(x(345));case 2:gn(t,Be,$t);break;case 3:if(qt(t,o),(o&130023424)===o&&(e=Ea+500-ae(),10<e)){if(xi(t,0)!==0)break;if(r=t.suspendedLanes,(r&o)!==o){ze(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yl(gn.bind(null,t,Be,$t),e);break}gn(t,Be,$t);break;case 4:if(qt(t,o),(o&4194240)===o)break;for(e=t.eventTimes,r=-1;0<o;){var s=31-pt(o);i=1<<s,s=e[s],s>r&&(r=s),o&=~i}if(o=r,o=ae()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Ev(o/1960))-o,10<o){t.timeoutHandle=yl(gn.bind(null,t,Be,$t),o);break}gn(t,Be,$t);break;case 5:gn(t,Be,$t);break;default:throw Error(x(329))}}}return je(t,ae()),t.callbackNode===n?Eh.bind(null,t):null}function Dl(t,e){var n=Jo;return t.current.memoizedState.isDehydrated&&(Cn(t,e).flags|=256),t=Vi(t,e),t!==2&&(e=Be,Be=n,e!==null&&Vl(e)),t}function Vl(t){Be===null?Be=t:Be.push.apply(Be,t)}function $v(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],i=r.getSnapshot;r=r.value;try{if(!mt(i(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qt(t,e){for(e&=~Sa,e&=~ns,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pt(e),o=1<<n;t[n]=-1,e&=~o}}function Jc(t){if(L&6)throw Error(x(327));ao();var e=xi(t,0);if(!(e&1))return je(t,ae()),null;var n=Vi(t,e);if(t.tag!==0&&n===2){var o=ul(t);o!==0&&(e=o,n=Dl(t,o))}if(n===1)throw n=_r,Cn(t,0),qt(t,e),je(t,ae()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gn(t,Be,$t),je(t,ae()),null}function $a(t,e){var n=L;L|=1;try{return t(e)}finally{L=n,L===0&&(mo=ae()+500,Zi&&dn())}}function Rn(t){Yt!==null&&Yt.tag===0&&!(L&6)&&ao();var e=L;L|=1;var n=tt.transition,o=U;try{if(tt.transition=null,U=1,t)return t()}finally{U=o,tt.transition=n,L=e,!(L&6)&&dn()}}function Ia(){We=no.current,Y(no)}function Cn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ov(n)),ce!==null)for(n=ce.return;n!==null;){var o=n;switch(aa(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ei();break;case 3:fo(),Y(Me),Y(Ie),ga();break;case 5:ma(o);break;case 4:fo();break;case 13:Y(te);break;case 19:Y(te);break;case 10:ha(o.type._context);break;case 22:case 23:Ia()}n=n.return}if(ge=t,ce=t=on(t.current,null),xe=We=e,pe=0,_r=null,Sa=ns=Pn=0,Be=Jo=null,xn!==null){for(e=0;e<xn.length;e++)if(n=xn[e],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,i=n.pending;if(i!==null){var s=i.next;i.next=r,o.next=s}n.pending=o}xn=null}return t}function $h(t,e){do{var n=ce;try{if(da(),ci.current=Ni,Ti){for(var o=ne.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Ti=!1}if(In=0,me=he=ne=null,Xo=!1,mr=0,Ca.current=null,n===null||n.return===null){pe=1,_r=e,ce=null;break}e:{var i=t,s=n.return,l=n,a=e;if(e=xe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=l,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=Mc(s);if(g!==null){g.flags&=-257,Fc(g,s,l,i,e),g.mode&1&&Vc(i,c,e),e=g,a=c;var y=e.updateQueue;if(y===null){var w=new Set;w.add(a),e.updateQueue=w}else y.add(a);break e}else{if(!(e&1)){Vc(i,c,e),Pa();break e}a=Error(x(426))}}else if(Z&&l.mode&1){var F=Mc(s);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Fc(F,s,l,i,e),ca(vo(a,l));break e}}i=a=vo(a,l),pe!==4&&(pe=2),Jo===null?Jo=[i]:Jo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var h=uh(i,a,e);Ac(i,h);break e;case 1:l=a;var u=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(tn===null||!tn.has(v)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=dh(i,l,e);Ac(i,b);break e}}i=i.return}while(i!==null)}Rh(n)}catch(k){e=k,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function Ih(){var t=Li.current;return Li.current=Ni,t===null?Ni:t}function Pa(){(pe===0||pe===3||pe===2)&&(pe=4),ge===null||!(Pn&268435455)&&!(ns&268435455)||qt(ge,xe)}function Vi(t,e){var n=L;L|=2;var o=Ih();(ge!==t||xe!==e)&&($t=null,Cn(t,e));do try{Iv();break}catch(r){$h(t,r)}while(!0);if(da(),L=n,Li.current=o,ce!==null)throw Error(x(261));return ge=null,xe=0,pe}function Iv(){for(;ce!==null;)Ph(ce)}function Pv(){for(;ce!==null&&!Jp();)Ph(ce)}function Ph(t){var e=zh(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?Rh(t):ce=e,Ca.current=null}function Rh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wv(n,e),n!==null){n.flags&=32767,ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,ce=null;return}}else if(n=xv(n,e,We),n!==null){ce=n;return}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);pe===0&&(pe=5)}function gn(t,e,n){var o=U,r=tt.transition;try{tt.transition=null,U=1,Rv(t,e,n,o)}finally{tt.transition=r,U=o}return null}function Rv(t,e,n,o){do ao();while(Yt!==null);if(L&6)throw Error(x(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(uf(t,i),t===ge&&(ce=ge=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ei||(ei=!0,Ah(bi,function(){return ao(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tt.transition,tt.transition=null;var s=U;U=1;var l=L;L|=4,Ca.current=null,Cv(t,n),Ch(n,t),Gf(ml),wi=!!vl,ml=vl=null,t.current=n,Sv(n),ef(),L=l,U=s,tt.transition=i}else t.current=n;if(ei&&(ei=!1,Yt=t,Di=r),i=t.pendingLanes,i===0&&(tn=null),of(n.stateNode),je(t,ae()),e!==null)for(o=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(Bi)throw Bi=!1,t=Ll,Ll=null,t;return Di&1&&t.tag!==0&&ao(),i=t.pendingLanes,i&1?t===Bl?er++:(er=0,Bl=t):er=0,dn(),null}function ao(){if(Yt!==null){var t=ud(Di),e=tt.transition,n=U;try{if(tt.transition=null,U=16>t?16:t,Yt===null)var o=!1;else{if(t=Yt,Yt=null,Di=0,L&6)throw Error(x(331));var r=L;for(L|=4,C=t.current;C!==null;){var i=C,s=i.child;if(C.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(C=c;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Zo(8,m,i)}var d=m.child;if(d!==null)d.return=m,C=d;else for(;C!==null;){m=C;var f=m.sibling,g=m.return;if(xh(m),m===c){C=null;break}if(f!==null){f.return=g,C=f;break}C=g}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var F=w.sibling;w.sibling=null,w=F}while(w!==null)}}C=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,C=s;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zo(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,C=h;break e}C=i.return}}var u=t.current;for(C=u;C!==null;){s=C;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,C=v;else e:for(s=u;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ts(9,l)}}catch(k){se(l,l.return,k)}if(l===s){C=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,C=b;break e}C=l.return}}if(L=r,dn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(qi,t)}catch{}o=!0}return o}finally{U=n,tt.transition=e}}return!1}function eu(t,e,n){e=vo(n,e),e=uh(t,e,1),t=en(t,e,1),e=ze(),t!==null&&(Or(t,1,e),je(t,e))}function se(t,e,n){if(t.tag===3)eu(t,t,n);else for(;e!==null;){if(e.tag===3){eu(e,t,n);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(tn===null||!tn.has(o))){t=vo(n,t),t=dh(e,t,1),e=en(e,t,1),t=ze(),e!==null&&(Or(e,1,t),je(e,t));break}}e=e.return}}function Ov(t,e,n){var o=t.pingCache;o!==null&&o.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(xe&n)===n&&(pe===4||pe===3&&(xe&130023424)===xe&&500>ae()-Ea?Cn(t,0):Sa|=n),je(t,e)}function Oh(t,e){e===0&&(t.mode&1?(e=Ur,Ur<<=1,!(Ur&130023424)&&(Ur=4194304)):e=1);var n=ze();t=Nt(t,e),t!==null&&(Or(t,e,n),je(t,n))}function zv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Oh(t,n)}function Av(t,e){var n=0;switch(t.tag){case 13:var o=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(x(314))}o!==null&&o.delete(e),Oh(t,n)}var zh;zh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)De=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return De=!1,bv(t,e,n);De=!!(t.flags&131072)}else De=!1,Z&&e.flags&1048576&&Ld(e,Pi,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;di(t,e),t=e.pendingProps;var r=uo(e,Ie.current);lo(e,n),r=_a(null,e,o,t,r,n);var i=ba();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fe(o)?(i=!0,$i(e)):i=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fa(e),r.updater=es,e.stateNode=r,r._reactInternals=e,Sl(e,o,t,n),e=Il(null,e,o,!0,i,n)):(e.tag=0,Z&&i&&la(e),Oe(null,e,r,n),e=e.child),e;case 16:o=e.elementType;e:{switch(di(t,e),t=e.pendingProps,r=o._init,o=r(o._payload),e.type=o,r=e.tag=Nv(o),t=ut(o,t),r){case 0:e=$l(null,e,o,t,n);break e;case 1:e=Uc(null,e,o,t,n);break e;case 11:e=jc(null,e,o,t,n);break e;case 14:e=Hc(null,e,o,ut(o.type,t),n);break e}throw Error(x(306,o,""))}return e;case 0:return o=e.type,r=e.pendingProps,r=e.elementType===o?r:ut(o,r),$l(t,e,o,r,n);case 1:return o=e.type,r=e.pendingProps,r=e.elementType===o?r:ut(o,r),Uc(t,e,o,r,n);case 3:e:{if(vh(e),t===null)throw Error(x(387));o=e.pendingProps,i=e.memoizedState,r=i.element,jd(t,e),zi(e,o,null,n);var s=e.memoizedState;if(o=s.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){r=vo(Error(x(423)),e),e=Wc(t,e,o,n,r);break e}else if(o!==r){r=vo(Error(x(424)),e),e=Wc(t,e,o,n,r);break e}else for(Ke=Jt(e.stateNode.containerInfo.firstChild),qe=e,Z=!0,ht=null,n=Md(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),o===r){e=Lt(t,e,n);break e}Oe(t,e,o,n)}e=e.child}return e;case 5:return Hd(e),t===null&&wl(e),o=e.type,r=e.pendingProps,i=t!==null?t.memoizedProps:null,s=r.children,gl(o,r)?s=null:i!==null&&gl(o,i)&&(e.flags|=32),fh(t,e),Oe(t,e,s,n),e.child;case 6:return t===null&&wl(e),null;case 13:return mh(t,e,n);case 4:return va(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=po(e,null,o,n):Oe(t,e,o,n),e.child;case 11:return o=e.type,r=e.pendingProps,r=e.elementType===o?r:ut(o,r),jc(t,e,o,r,n);case 7:return Oe(t,e,e.pendingProps,n),e.child;case 8:return Oe(t,e,e.pendingProps.children,n),e.child;case 12:return Oe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(o=e.type._context,r=e.pendingProps,i=e.memoizedProps,s=r.value,K(Ri,o._currentValue),o._currentValue=s,i!==null)if(mt(i.value,s)){if(i.children===r.children&&!Me.current){e=Lt(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var a=l.firstContext;a!==null;){if(a.context===o){if(i.tag===1){a=zt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),kl(i.return,n,e),l.lanes|=n;break}a=a.next}}else if(i.tag===10)s=i.type===e.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(x(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kl(s,n,e),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Oe(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,o=e.pendingProps.children,lo(e,n),r=ot(r),o=o(r),e.flags|=1,Oe(t,e,o,n),e.child;case 14:return o=e.type,r=ut(o,e.pendingProps),r=ut(o.type,r),Hc(t,e,o,r,n);case 15:return hh(t,e,e.type,e.pendingProps,n);case 17:return o=e.type,r=e.pendingProps,r=e.elementType===o?r:ut(o,r),di(t,e),e.tag=1,Fe(o)?(t=!0,$i(e)):t=!1,lo(e,n),ch(e,o,r),Sl(e,o,r,n),Il(null,e,o,!0,t,n);case 19:return gh(t,e,n);case 22:return ph(t,e,n)}throw Error(x(156,e.tag))};function Ah(t,e){return sd(t,e)}function Tv(t,e,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(t,e,n,o){return new Tv(t,e,n,o)}function Ra(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nv(t){if(typeof t=="function")return Ra(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yl)return 11;if(t===Gl)return 14}return 2}function on(t,e){var n=t.alternate;return n===null?(n=et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fi(t,e,n,o,r,i){var s=2;if(o=t,typeof t=="function")Ra(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Kn:return Sn(n.children,r,i,e);case Ql:s=8,r|=8;break;case Ys:return t=et(12,n,e,r|2),t.elementType=Ys,t.lanes=i,t;case Gs:return t=et(13,n,e,r),t.elementType=Gs,t.lanes=i,t;case Xs:return t=et(19,n,e,r),t.elementType=Xs,t.lanes=i,t;case Hu:return os(n,r,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fu:s=10;break e;case ju:s=9;break e;case Yl:s=11;break e;case Gl:s=14;break e;case Ut:s=16,o=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=et(s,n,e,r),e.elementType=t,e.type=o,e.lanes=i,e}function Sn(t,e,n,o){return t=et(7,t,o,e),t.lanes=n,t}function os(t,e,n,o){return t=et(22,t,o,e),t.elementType=Hu,t.lanes=n,t.stateNode={isHidden:!1},t}function Ms(t,e,n){return t=et(6,t,null,e),t.lanes=n,t}function Fs(t,e,n){return e=et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Lv(t,e,n,o,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Oa(t,e,n,o,r,i,s,l,a){return t=new Lv(t,e,n,l,a),e===1?(e=1,i===!0&&(e|=8)):e=0,i=et(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fa(i),t}function Bv(t,e,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:o==null?null:""+o,children:t,containerInfo:e,implementation:n}}function Th(t){if(!t)return ln;t=t._reactInternals;e:{if(Vn(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Fe(n))return Td(t,n,e)}return e}function Nh(t,e,n,o,r,i,s,l,a){return t=Oa(n,o,!0,t,r,i,s,l,a),t.context=Th(null),n=t.current,o=ze(),r=nn(n),i=zt(o,r),i.callback=e??null,en(n,i,r),t.current.lanes=r,Or(t,r,o),je(t,o),t}function rs(t,e,n,o){var r=e.current,i=ze(),s=nn(r);return n=Th(n),e.context===null?e.context=n:e.pendingContext=n,e=zt(i,s),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=en(r,e,s),t!==null&&(ft(t,r,s,i),ai(t,r,s)),s}function Mi(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function za(t,e){tu(t,e),(t=t.alternate)&&tu(t,e)}function Dv(){return null}var Lh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Aa(t){this._internalRoot=t}is.prototype.render=Aa.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));rs(t,e,null,null)};is.prototype.unmount=Aa.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rn(function(){rs(null,t,null,null)}),e[Tt]=null}};function is(t){this._internalRoot=t}is.prototype.unstable_scheduleHydration=function(t){if(t){var e=pd();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kt.length&&e!==0&&e<Kt[n].priority;n++);Kt.splice(n,0,t),n===0&&vd(t)}};function Ta(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ss(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nu(){}function Vv(t,e,n,o,r){if(r){if(typeof o=="function"){var i=o;o=function(){var c=Mi(s);i.call(c)}}var s=Nh(e,o,t,0,null,!1,!1,"",nu);return t._reactRootContainer=s,t[Tt]=s.current,dr(t.nodeType===8?t.parentNode:t),Rn(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof o=="function"){var l=o;o=function(){var c=Mi(a);l.call(c)}}var a=Oa(t,0,!1,null,null,!1,!1,"",nu);return t._reactRootContainer=a,t[Tt]=a.current,dr(t.nodeType===8?t.parentNode:t),Rn(function(){rs(e,a,n,o)}),a}function ls(t,e,n,o,r){var i=n._reactRootContainer;if(i){var s=i;if(typeof r=="function"){var l=r;r=function(){var a=Mi(s);l.call(a)}}rs(e,s,t,r)}else s=Vv(n,e,t,r,o);return Mi(s)}dd=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jo(e.pendingLanes);n!==0&&(Jl(e,n|1),je(e,ae()),!(L&6)&&(mo=ae()+500,dn()))}break;case 13:Rn(function(){var o=Nt(t,1);if(o!==null){var r=ze();ft(o,t,1,r)}}),za(t,1)}};ea=function(t){if(t.tag===13){var e=Nt(t,134217728);if(e!==null){var n=ze();ft(e,t,134217728,n)}za(t,134217728)}};hd=function(t){if(t.tag===13){var e=nn(t),n=Nt(t,e);if(n!==null){var o=ze();ft(n,t,e,o)}za(t,e)}};pd=function(){return U};fd=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};ll=function(t,e,n){switch(e){case"input":if(el(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var o=n[e];if(o!==t&&o.form===t.form){var r=Xi(o);if(!r)throw Error(x(90));Wu(o),el(o,r)}}}break;case"textarea":qu(t,n);break;case"select":e=n.value,e!=null&&oo(t,!!n.multiple,e,!1)}};ed=$a;td=Rn;var Mv={usingClientEntryPoint:!1,Events:[Ar,Gn,Xi,Zu,Ju,$a]},Lo={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fv={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rd(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||Dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ti.isDisabled&&ti.supportsFiber)try{qi=ti.inject(Fv),xt=ti}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv;Ye.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ta(e))throw Error(x(200));return Bv(t,e,null,n)};Ye.createRoot=function(t,e){if(!Ta(t))throw Error(x(299));var n=!1,o="",r=Lh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Oa(t,1,!1,null,null,n,!1,o,r),t[Tt]=e.current,dr(t.nodeType===8?t.parentNode:t),new Aa(e)};Ye.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=rd(e),t=t===null?null:t.stateNode,t};Ye.flushSync=function(t){return Rn(t)};Ye.hydrate=function(t,e,n){if(!ss(e))throw Error(x(200));return ls(null,t,e,!0,n)};Ye.hydrateRoot=function(t,e,n){if(!Ta(t))throw Error(x(405));var o=n!=null&&n.hydratedSources||null,r=!1,i="",s=Lh;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Nh(e,null,t,1,n??null,r,!1,i,s),t[Tt]=e.current,dr(t),o)for(t=0;t<o.length;t++)n=o[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new is(e)};Ye.render=function(t,e,n){if(!ss(e))throw Error(x(200));return ls(null,t,e,!1,n)};Ye.unmountComponentAtNode=function(t){if(!ss(t))throw Error(x(40));return t._reactRootContainer?(Rn(function(){ls(null,null,t,!1,function(){t._reactRootContainer=null,t[Tt]=null})}),!0):!1};Ye.unstable_batchedUpdates=$a;Ye.unstable_renderSubtreeIntoContainer=function(t,e,n,o){if(!ss(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return ls(t,e,n,!1,o)};Ye.version="18.3.1-next-f1338f8080-20240426";function Bh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bh)}catch(t){console.error(t)}}Bh(),Bu.exports=Ye;var jv=Bu.exports,Dh,ou=jv;Dh=ou.createRoot,ou.hydrateRoot;class Hv{constructor(){Qa(this,"vsCodeApi");typeof acquireVsCodeApi=="function"&&(this.vsCodeApi=acquireVsCodeApi())}postMessage(e){this.vsCodeApi?this.vsCodeApi.postMessage(e):console.log(e)}getState(){if(this.vsCodeApi)return this.vsCodeApi.getState();{const e=localStorage.getItem("vscodeState");return e?JSON.parse(e):void 0}}setState(e){return this.vsCodeApi?this.vsCodeApi.setState(e):(localStorage.setItem("vscodeState",JSON.stringify(e)),e)}}const Uv=new Hv;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wv=new Set(["children","localName","ref","style","className"]),ru=new WeakMap,iu=(t,e,n,o,r)=>{const i=r==null?void 0:r[e];i===void 0?(t[e]=n,n==null&&e in HTMLElement.prototype&&t.removeAttribute(e)):n!==o&&((s,l,a)=>{let c=ru.get(s);c===void 0&&ru.set(s,c=new Map);let m=c.get(l);a!==void 0?m===void 0?(c.set(l,m={handleEvent:a}),s.addEventListener(l,m)):m.handleEvent=a:m!==void 0&&(c.delete(l),s.removeEventListener(l,m))})(t,i,n)},D=({react:t,tagName:e,elementClass:n,events:o,displayName:r})=>{const i=new Set(Object.keys(o??{})),s=t.forwardRef((l,a)=>{const c=t.useRef(new Map),m=t.useRef(null),d={},f={};for(const[g,y]of Object.entries(l))Wv.has(g)?d[g==="className"?"class":g]=y:i.has(g)||g in n.prototype?f[g]=y:d[g]=y;return t.useLayoutEffect(()=>{if(m.current===null)return;const g=new Map;for(const y in f)iu(m.current,y,l[y],c.current.get(y),o),c.current.delete(y),g.set(y,l[y]);for(const[y,w]of c.current)iu(m.current,y,void 0,w,o);c.current=g}),t.useLayoutEffect(()=>{var g;(g=m.current)==null||g.removeAttribute("defer-hydration")},[]),d.suppressHydrationWarning=!0,t.createElement(e,{...d,ref:t.useCallback(g=>{m.current=g,typeof a=="function"?a(g):a!==null&&(a.current=g)},[a])})});return s.displayName=r??n.name,s};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=globalThis,Na=vi.ShadowRoot&&(vi.ShadyCSS===void 0||vi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,La=Symbol(),su=new WeakMap;let Vh=class{constructor(e,n,o){if(this._$cssResult$=!0,o!==La)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Na&&e===void 0){const o=n!==void 0&&n.length===1;o&&(e=su.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&su.set(n,e))}return e}toString(){return this.cssText}};const Kv=t=>new Vh(typeof t=="string"?t:t+"",void 0,La),N=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((o,r,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new Vh(n,t,La)},qv=(t,e)=>{if(Na)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const o=document.createElement("style"),r=vi.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=n.cssText,t.appendChild(o)}},lu=Na?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const o of e.cssRules)n+=o.cssText;return Kv(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Qv,defineProperty:Yv,getOwnPropertyDescriptor:Gv,getOwnPropertyNames:Xv,getOwnPropertySymbols:Zv,getPrototypeOf:Jv}=Object,rn=globalThis,au=rn.trustedTypes,em=au?au.emptyScript:"",js=rn.reactiveElementPolyfillSupport,tr=(t,e)=>t,Fi={toAttribute(t,e){switch(e){case Boolean:t=t?em:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ba=(t,e)=>!Qv(t,e),cu={attribute:!0,type:String,converter:Fi,reflect:!1,hasChanged:Ba};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),rn.litPropertyMetadata??(rn.litPropertyMetadata=new WeakMap);class Un extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=cu){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,n);r!==void 0&&Yv(this.prototype,e,r)}}static getPropertyDescriptor(e,n,o){const{get:r,set:i}=Gv(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return r==null?void 0:r.call(this)},set(s){const l=r==null?void 0:r.call(this);i.call(this,s),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??cu}static _$Ei(){if(this.hasOwnProperty(tr("elementProperties")))return;const e=Jv(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(tr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tr("properties"))){const n=this.properties,o=[...Xv(n),...Zv(n)];for(const r of o)this.createProperty(r,n[r])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[o,r]of n)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[n,o]of this.elementProperties){const r=this._$Eu(n,o);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const r of o)n.unshift(lu(r))}else e!==void 0&&n.push(lu(e));return n}static _$Eu(e,n){const o=n.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const o of n.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qv(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var o;return(o=n.hostConnected)==null?void 0:o.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var o;return(o=n.hostDisconnected)==null?void 0:o.call(n)})}attributeChangedCallback(e,n,o){this._$AK(e,o)}_$EC(e,n){var i;const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(r!==void 0&&o.reflect===!0){const s=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:Fi).toAttribute(n,o.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,n){var i;const o=this.constructor,r=o._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=o.getPropertyOptions(r),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:Fi;this._$Em=r,this[r]=l.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??Ba)(this[e],n))return;this.P(e,n,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,o){this._$AL.has(e)||this._$AL.set(e,n),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(o=this._$EO)==null||o.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(n)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}}Un.elementStyles=[],Un.shadowRootOptions={mode:"open"},Un[tr("elementProperties")]=new Map,Un[tr("finalized")]=new Map,js==null||js({ReactiveElement:Un}),(rn.reactiveElementVersions??(rn.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nr=globalThis,ji=nr.trustedTypes,uu=ji?ji.createPolicy("lit-html",{createHTML:t=>t}):void 0,Da="$lit$",Pt=`lit$${Math.random().toFixed(9).slice(2)}$`,Va="?"+Pt,tm=`<${Va}>`,On=document,br=()=>On.createComment(""),xr=t=>t===null||typeof t!="object"&&typeof t!="function",Ma=Array.isArray,Mh=t=>Ma(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Hs=`[ 	
\f\r]`,Bo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,du=/-->/g,hu=/>/g,fn=RegExp(`>|${Hs}(?:([^\\s"'>=/]+)(${Hs}*=${Hs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pu=/'/g,fu=/"/g,Fh=/^(?:script|style|textarea|title)$/i,nm=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),_=nm(1),Bt=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),vu=new WeakMap,kn=On.createTreeWalker(On,129);function jh(t,e){if(!Ma(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return uu!==void 0?uu.createHTML(e):e}const Hh=(t,e)=>{const n=t.length-1,o=[];let r,i=e===2?"<svg>":e===3?"<math>":"",s=Bo;for(let l=0;l<n;l++){const a=t[l];let c,m,d=-1,f=0;for(;f<a.length&&(s.lastIndex=f,m=s.exec(a),m!==null);)f=s.lastIndex,s===Bo?m[1]==="!--"?s=du:m[1]!==void 0?s=hu:m[2]!==void 0?(Fh.test(m[2])&&(r=RegExp("</"+m[2],"g")),s=fn):m[3]!==void 0&&(s=fn):s===fn?m[0]===">"?(s=r??Bo,d=-1):m[1]===void 0?d=-2:(d=s.lastIndex-m[2].length,c=m[1],s=m[3]===void 0?fn:m[3]==='"'?fu:pu):s===fu||s===pu?s=fn:s===du||s===hu?s=Bo:(s=fn,r=void 0);const g=s===fn&&t[l+1].startsWith("/>")?" ":"";i+=s===Bo?a+tm:d>=0?(o.push(c),a.slice(0,d)+Da+a.slice(d)+Pt+g):a+Pt+(d===-2?l:g)}return[jh(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class wr{constructor({strings:e,_$litType$:n},o){let r;this.parts=[];let i=0,s=0;const l=e.length-1,a=this.parts,[c,m]=Hh(e,n);if(this.el=wr.createElement(c,o),kn.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=kn.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Da)){const f=m[s++],g=r.getAttribute(d).split(Pt),y=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:y[2],strings:g,ctor:y[1]==="."?Wh:y[1]==="?"?Kh:y[1]==="@"?qh:Nr}),r.removeAttribute(d)}else d.startsWith(Pt)&&(a.push({type:6,index:i}),r.removeAttribute(d));if(Fh.test(r.tagName)){const d=r.textContent.split(Pt),f=d.length-1;if(f>0){r.textContent=ji?ji.emptyScript:"";for(let g=0;g<f;g++)r.append(d[g],br()),kn.nextNode(),a.push({type:2,index:++i});r.append(d[f],br())}}}else if(r.nodeType===8)if(r.data===Va)a.push({type:2,index:i});else{let d=-1;for(;(d=r.data.indexOf(Pt,d+1))!==-1;)a.push({type:7,index:i}),d+=Pt.length-1}i++}}static createElement(e,n){const o=On.createElement("template");return o.innerHTML=e,o}}function zn(t,e,n=t,o){var s,l;if(e===Bt)return e;let r=o!==void 0?(s=n._$Co)==null?void 0:s[o]:n._$Cl;const i=xr(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),i===void 0?r=void 0:(r=new i(t),r._$AT(t,n,o)),o!==void 0?(n._$Co??(n._$Co=[]))[o]=r:n._$Cl=r),r!==void 0&&(e=zn(t,r._$AS(t,e.values),r,o)),e}let Uh=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:o}=this._$AD,r=((e==null?void 0:e.creationScope)??On).importNode(n,!0);kn.currentNode=r;let i=kn.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new bo(i,i.nextSibling,this,e):a.type===1?c=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(c=new Qh(i,this,e)),this._$AV.push(c),a=o[++l]}s!==(a==null?void 0:a.index)&&(i=kn.nextNode(),s++)}return kn.currentNode=On,r}p(e){let n=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,n),n+=o.strings.length-2):o._$AI(e[n])),n++}};class bo{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,o,r){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=zn(this,e,n),xr(e)?e===P||e==null||e===""?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==Bt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Mh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&xr(this._$AH)?this._$AA.nextSibling.data=e:this.T(On.createTextNode(e)),this._$AH=e}$(e){var i;const{values:n,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=wr.createElement(jh(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(n);else{const s=new Uh(r,this),l=s.u(this.options);s.p(n),this.T(l),this._$AH=s}}_$AC(e){let n=vu.get(e.strings);return n===void 0&&vu.set(e.strings,n=new wr(e)),n}k(e){Ma(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let o,r=0;for(const i of e)r===n.length?n.push(o=new bo(this.O(br()),this.O(br()),this,this.options)):o=n[r],o._$AI(i),r++;r<n.length&&(this._$AR(o&&o._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,n);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class Nr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,o,r,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=P}_$AI(e,n=this,o,r){const i=this.strings;let s=!1;if(i===void 0)e=zn(this,e,n,0),s=!xr(e)||e!==this._$AH&&e!==Bt,s&&(this._$AH=e);else{const l=e;let a,c;for(e=i[0],a=0;a<i.length-1;a++)c=zn(this,l[o+a],n,a),c===Bt&&(c=this._$AH[a]),s||(s=!xr(c)||c!==this._$AH[a]),c===P?e=P:e!==P&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}s&&!r&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Wh extends Nr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}}class Kh extends Nr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}}class qh extends Nr{constructor(e,n,o,r,i){super(e,n,o,r,i),this.type=5}_$AI(e,n=this){if((e=zn(this,e,n,0)??P)===Bt)return;const o=this._$AH,r=e===P&&o!==P||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==P&&(o===P||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class Qh{constructor(e,n,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){zn(this,e)}}const om={M:Da,P:Pt,A:Va,C:1,L:Hh,R:Uh,D:Mh,V:zn,I:bo,H:Nr,N:Kh,U:qh,B:Wh,F:Qh},Us=nr.litHtmlPolyfillSupport;Us==null||Us(wr,bo),(nr.litHtmlVersions??(nr.litHtmlVersions=[])).push("3.2.1");const rm=(t,e,n)=>{const o=(n==null?void 0:n.renderBefore)??e;let r=o._$litPart$;if(r===void 0){const i=(n==null?void 0:n.renderBefore)??null;o._$litPart$=r=new bo(e.insertBefore(br(),i),i,void 0,n??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vt=class extends Un{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rm(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Bt}};var Su;vt._$litElement$=!0,vt.finalized=!0,(Su=globalThis.litElementHydrateSupport)==null||Su.call(globalThis,{LitElement:vt});const Ws=globalThis.litElementPolyfillSupport;Ws==null||Ws({LitElement:vt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const im={attribute:!0,type:String,converter:Fi,reflect:!1,hasChanged:Ba},sm=(t=im,e,n)=>{const{kind:o,metadata:r}=n;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(n.name,t),o==="accessor"){const{name:s}=n;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,t)},init(l){return l!==void 0&&this.P(s,void 0,t),l}}}if(o==="setter"){const{name:s}=n;return function(l){const a=this[s];e.call(this,l),this.requestUpdate(s,a,t)}}throw Error("Unsupported decorator location: "+o)};function p(t){return(e,n)=>typeof n=="object"?sm(t,e,n):((o,r,i)=>{const s=r.hasOwnProperty(i);return r.constructor.createProperty(i,s?{...o,wrapped:!0}:o),s?Object.getOwnPropertyDescriptor(r,i):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(t){return p({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fa=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ne(t,e){return(n,o,r)=>{const i=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(t))??null};return Fa(n,o,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lm;function am(t){return(e,n)=>Fa(e,n,{get(){return(this.renderRoot??lm??(lm=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Et(t){return(e,n)=>{const{slot:o,selector:r}=t??{},i="slot"+(o?`[name=${o}]`:":not([name])");return Fa(e,n,{get(){var a;const s=(a=this.renderRoot)==null?void 0:a.querySelector(i),l=(s==null?void 0:s.assignedElements(t))??[];return r===void 0?l:l.filter(c=>c.matches(r))}})}}class j extends vt{constructor(){super(...arguments),this._version="1.7.1"}get version(){return this._version}}const M=N`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`,cm=[M,N`
    :host {
      background-color: var(--vscode-badge-background);
      border: 1px solid var(--vscode-contrastBorder, transparent);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-badge-foreground);
      display: inline-block;
      font-family: var(--vscode-font-family);
      font-size: 11px;
      font-weight: 400;
      line-height: 14px;
      min-width: 18px;
      padding: 2px 3px;
      text-align: center;
      white-space: nowrap;
    }

    :host([variant='counter']) {
      border-radius: 11px;
      box-sizing: border-box;
      height: 18px;
      line-height: 1;
      padding: 3px 5px;
    }

    :host([variant='activity-bar-counter']) {
      background-color: var(--vscode-activityBarBadge-background);
      border-radius: 20px;
      color: var(--vscode-activityBarBadge-foreground);
      font-size: 9px;
      font-weight: 600;
      line-height: 16px;
      padding: 0 4px;
    }
  `];var Yh=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let kr=class extends j{constructor(){super(...arguments),this.variant="default"}render(){return _` <slot></slot> `}};kr.styles=cm;Yh([p({reflect:!0})],kr.prototype,"variant",void 0);kr=Yh([V("vscode-badge")],kr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ja={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ha=t=>(...e)=>({_$litDirective$:t,values:e});let Ua=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,o){this._$Ct=e,this._$AM=n,this._$Ci=o}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=Ha(class extends Ua{constructor(t){var e;if(super(t),t.type!==ja.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((o=this.nt)!=null&&o.has(i))&&this.st.add(i);return this.render(e)}const n=t.element.classList;for(const i of this.st)i in e||(n.remove(i),this.st.delete(i));for(const i in e){const s=!!e[i];s===this.st.has(i)||(r=this.nt)!=null&&r.has(i)||(s?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return Bt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gh="important",um=" !"+Gh,Ve=Ha(class extends Ua{constructor(t){var e;if(super(t),t.type!==ja.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const r=e[o];if(r!=null){this.ft.add(o);const i=typeof r=="string"&&r.endsWith(um);o.includes("-")||i?n.setProperty(o,i?r.slice(0,-11):r,i?Gh:""):n[o]=r}}return Bt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=t=>t??P,dm=[M,N`
    :host {
      color: var(--vscode-icon-foreground);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(--vscode-toolbar-hoverBackground);
    }

    .button:active {
      background-color: var(--vscode-toolbar-activeBackground);
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `];var Mn=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},Uo;let it=Uo=class extends j{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=e=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}}))}}connectedCallback(){super.connectedCallback();const{href:e,nonce:n}=this._getStylesheetConfig();Uo.stylesheetHref=e,Uo.nonce=n}_getStylesheetConfig(){const e=document.getElementById("vscode-codicon-stylesheet"),n=(e==null?void 0:e.getAttribute("href"))||void 0;return{nonce:(e==null?void 0:e.getAttribute("nonce"))||void 0,href:n}}render(){const{stylesheetHref:e,nonce:n}=Uo,o=_`<span
      class="${q({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}"
      style="${Ve({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}"
    ></span>`,r=this.actionIcon?_` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${o}
        </button>`:_` <span class="icon" aria-hidden="true" role="presentation"
          >${o}</span
        >`;return _`
      <link
        rel="stylesheet"
        href="${X(e)}"
        nonce="${X(n)}"
      />
      ${r}
    `}};it.styles=dm;it.stylesheetHref="";it.nonce="";Mn([p()],it.prototype,"label",void 0);Mn([p({type:String})],it.prototype,"name",void 0);Mn([p({type:Number})],it.prototype,"size",void 0);Mn([p({type:Boolean,reflect:!0})],it.prototype,"spin",void 0);Mn([p({type:Number,attribute:"spin-duration"})],it.prototype,"spinDuration",void 0);Mn([p({type:Boolean,reflect:!0,attribute:"action-icon"})],it.prototype,"actionIcon",void 0);it=Uo=Mn([V("vscode-icon")],it);const hm=[M,N`
    :host {
      background-color: var(--vscode-button-background);
      border-color: var(--vscode-button-border, var(--vscode-button-background));
      border-style: solid;
      border-radius: 2px;
      border-width: 1px;
      color: var(--vscode-button-foreground);
      cursor: pointer;
      display: inline-block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 22px;
      overflow: hidden;
      padding: 1px 13px;
      user-select: none;
      white-space: nowrap;
    }

    :host([secondary]) {
      color: var(--vscode-button-secondaryForeground);
      background-color: var(--vscode-button-secondaryBackground);
      border-color: var(--vscode-button-border, var(--vscode-button-secondaryBackground));
    }

    :host([disabled]) {
      cursor: default;
      opacity: 0.4;
      pointer-events: none;
    }

    :host(:hover) {
      background-color: var(--vscode-button-hoverBackground);
    }

    :host([disabled]:hover) {
      background-color: var(--vscode-button-background);
    }

    :host([secondary]:hover) {
      background-color: var(--vscode-button-secondaryHoverBackground);
    }

    :host([secondary][disabled]:hover) {
      background-color: var(--vscode-button-secondaryBackground);
    }

    :host(:focus),
    :host(:active) {
      outline: none;
    }

    :host(:focus) {
      background-color: var(--vscode-button-hoverBackground);
      outline: 1px solid var(--vscode-focusBorder);
      outline-offset: 2px;
    }

    :host([disabled]:focus) {
      background-color: var(--vscode-button-background);
      outline: 0;
    }

    :host([secondary]:focus) {
      background-color: var(--vscode-button-secondaryHoverBackground);
    }

    :host([secondary][disabled]:focus) {
      background-color: var(--vscode-button-secondaryBackground);
    }

    ::slotted(*) {
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }

    ::slotted(*:first-child) {
      margin-left: 0;
    }

    ::slotted(vscode-icon) {
      color: inherit;
    }

    .wrapper {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
    }

    slot {
      align-items: center;
      display: flex;
      height: 100%;
    }

    .icon {
      color: inherit;
      display: block;
      margin-right: 3px;
    }

    .icon-after {
      color: inherit;
      display: block;
      margin-left: 3px;
    }
  `];var Pe=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ue=class extends j{get form(){return this._internals.form}constructor(){super(),this.autofocus=!1,this.tabIndex=0,this.secondary=!1,this.role="button",this.disabled=!1,this.icon="",this.iconSpin=!1,this.iconAfter="",this.iconAfterSpin=!1,this.focused=!1,this.name=void 0,this.type="button",this.value="",this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.autofocus&&(this.tabIndex<0&&(this.tabIndex=0),this.updateComplete.then(()=>{this.focus(),this.requestUpdate()})),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}update(e){super.update(e),e.has("value")&&this._internals.setFormValue(this.value),e.has("disabled")&&(this.disabled?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):this.tabIndex=this._prevTabindex)}_executeAction(){this.type==="submit"&&this._internals.form&&this._internals.form.requestSubmit(),this.type==="reset"&&this._internals.form&&this._internals.form.reset()}_handleKeyDown(e){(e.key==="Enter"||e.key===" ")&&!this.hasAttribute("disabled")&&(this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:new MouseEvent("click")}})),this._executeAction())}_handleClick(e){this.hasAttribute("disabled")||(this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}})),this._executeAction())}render(){const e=this.icon!=="",n=this.iconAfter!=="",o={wrapper:!0,"has-icon-before":e,"has-icon-after":n},r=e?_`<vscode-icon
          name="${this.icon}"
          ?spin="${this.iconSpin}"
          spin-duration="${X(this.iconSpinDuration)}"
          class="icon"
        ></vscode-icon>`:P,i=n?_`<vscode-icon
          name="${this.iconAfter}"
          ?spin="${this.iconAfterSpin}"
          spin-duration="${X(this.iconAfterSpinDuration)}"
          class="icon-after"
        ></vscode-icon>`:P;return _`
      <span class="${q(o)}">
        ${r}
        <slot></slot>
        ${i}
      </span>
    `}};ue.styles=hm;ue.formAssociated=!0;Pe([p({type:Boolean,reflect:!0})],ue.prototype,"autofocus",void 0);Pe([p({type:Number,reflect:!0})],ue.prototype,"tabIndex",void 0);Pe([p({type:Boolean,reflect:!0})],ue.prototype,"secondary",void 0);Pe([p({reflect:!0})],ue.prototype,"role",void 0);Pe([p({type:Boolean,reflect:!0})],ue.prototype,"disabled",void 0);Pe([p()],ue.prototype,"icon",void 0);Pe([p({type:Boolean,reflect:!0,attribute:"icon-spin"})],ue.prototype,"iconSpin",void 0);Pe([p({type:Number,reflect:!0,attribute:"icon-spin-duration"})],ue.prototype,"iconSpinDuration",void 0);Pe([p({attribute:"icon-after"})],ue.prototype,"iconAfter",void 0);Pe([p({type:Boolean,reflect:!0,attribute:"icon-after-spin"})],ue.prototype,"iconAfterSpin",void 0);Pe([p({type:Number,reflect:!0,attribute:"icon-after-spin-duration"})],ue.prototype,"iconAfterSpinDuration",void 0);Pe([p({type:Boolean,reflect:!0})],ue.prototype,"focused",void 0);Pe([p({type:String,reflect:!0})],ue.prototype,"name",void 0);Pe([p({reflect:!0})],ue.prototype,"type",void 0);Pe([p()],ue.prototype,"value",void 0);ue=Pe([V("vscode-button")],ue);const mu="__vscode-webview-elements_custom-properties__";let Ks;const pm=t=>/rgba\([0-9, .]+\)/g.test(t),fm=(t,e)=>{const n=parseInt(t.substring(1,3),16),o=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16);return`rgba(${n}, ${o}, ${r}, ${e})`},vm=()=>{Xh(Zh())},Xh=t=>{var n;const e=document.getElementById(mu);if(e)e.innerHTML=t;else{const o=document.createElement("style");o.setAttribute("id",mu),o.innerHTML=t,(n=document.querySelector("head"))==null||n.appendChild(o)}},Zh=()=>{const t=document.documentElement.style.getPropertyValue("--vscode-foreground");let e="";return t?pm(t)?e=t:e=fm(t.trim(),.9):e="rgba(0, 0, 0, 0.9)",`:root{--vsc-foreground-translucent: ${e};}`};function Jh(){Ks||(Ks=new MutationObserver(vm),Ks.observe(document.documentElement,{attributes:!0,attributeFilter:["style"]})),Xh(Zh())}var mm=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};class Wa extends j{constructor(){super(),this.focused=!1,this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},Jh()}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}attributeChangedCallback(e,n,o){super.attributeChangedCallback(e,n,o),e==="disabled"&&this.hasAttribute("disabled")?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):e==="disabled"&&!this.hasAttribute("disabled")&&(this.tabIndex=this._prevTabindex)}}mm([p({type:Boolean,reflect:!0})],Wa.prototype,"focused",void 0);var gm=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const ep=t=>{class e extends t{constructor(){super(...arguments),this._label="",this._slottedText=""}set label(o){this._label=o,this._slottedText===""&&this.setAttribute("aria-label",o)}get label(){return this._label}_handleSlotChange(){this._slottedText=this.textContent?this.textContent.trim():"",this._slottedText!==""&&this.setAttribute("aria-label",this._slottedText)}_renderLabelAttribute(){return this._slottedText===""?_`<span class="label-attr">${this._label}</span>`:_`${P}`}}return gm([p()],e.prototype,"label",null),e},tp=[N`
    :host {
      color: var(--vsc-foreground-translucent);
      display: inline-block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 18px;
    }

    :host(:focus) {
      outline: none;
    }

    :host([disabled]) {
      opacity: 0.4;
    }

    .wrapper {
      cursor: pointer;
      display: block;
      font-size: var(--vscode-font-size);
      margin-bottom: 4px;
      margin-top: 4px;
      min-height: 18px;
      position: relative;
      user-select: none;
    }

    :host([disabled]) .wrapper {
      cursor: default;
    }

    input {
      position: absolute;
      height: 1px;
      left: 9px;
      margin: 0;
      top: 17px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap;
    }

    .icon {
      align-items: center;
      background-color: var(--vscode-settings-checkboxBackground);
      background-size: 16px;
      border: 1px solid var(--vscode-settings-checkboxBorder);
      box-sizing: border-box;
      color: var(--vscode-settings-checkboxForeground);
      display: flex;
      height: 18px;
      justify-content: center;
      left: 0;
      margin-left: 0;
      margin-right: 9px;
      padding: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 18px;
    }

    .icon.before-empty-label {
      margin-right: 0;
    }

    .label {
      cursor: pointer;
      display: block;
      min-height: 18px;
      min-width: 18px;
    }

    .label-inner {
      display: block;
      padding-left: 27px;
    }

    .label-inner.empty {
      padding-left: 0;
    }

    :host([disabled]) .label {
      cursor: default;
    }
  `],as=N`
  ::slotted(*) {
    margin: 0;
  }

  ::slotted(a) {
    color: var(--vscode-textLink-foreground);
    text-decoration: none;
  }

  ::slotted(code) {
    color: var(--vscode-textPreformat-foreground);
    line-height: 15px;
  }

  ::slotted(.error) {
    color: var(--vscode-errorForeground);
  }
`,ym=[M,tp,N`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 3px;
    }

    .indeterminate-icon {
      background-color: currentColor;
      position: absolute;
      height: 1px;
      width: 12px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--focus-border);
      outline-offset: -1px;
    }
  `,as];var lt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ke=class extends ep(Wa){set checked(e){this._checked=e,this._manageRequired(),this.requestUpdate()}get checked(){return this._checked}set required(e){this._required=e,this._manageRequired(),this.requestUpdate()}get required(){return this._required}get form(){return this._internals.form}get type(){return"checkbox"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.autofocus=!1,this._checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name=void 0,this.role="checkbox",this.value="",this.disabled=!1,this.indeterminate=!1,this._required=!1,this._handleClick=e=>{e.preventDefault(),!this.disabled&&this._toggleState()},this._handleKeyDown=e=>{var n;!this.disabled&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key===" "&&this._toggleState(),e.key==="Enter"&&((n=this._internals.form)==null||n.requestSubmit()))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.updateComplete.then(()=>{this._manageRequired(),this._setActualFormValue()})}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown)}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=this.checked?"true":"false")}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(e,n){e&&(this.checked=!0)}_setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null,this._internals.setFormValue(e)}_toggleState(){this.checked=!this.checked,this.indeterminate=!1,this._setActualFormValue(),this._manageRequired(),this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_manageRequired(){!this.checked&&this.required?this._internals.setValidity({valueMissing:!0},"Please check this box if you want to proceed.",this._inputEl??void 0):this._internals.setValidity({})}render(){const e=q({icon:!0,checked:this.checked,indeterminate:this.indeterminate}),n=q({"label-inner":!0}),o=_`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="check-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
      />
    </svg>`,r=this.checked&&!this.indeterminate?o:P,i=this.indeterminate?_`<span class="indeterminate-icon"></span>`:P;return _`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="checkbox"
          type="checkbox"
          ?checked="${this.checked}"
          value="${this.value}"
        />
        <div class="${e}">${i}${r}</div>
        <label for="input" class="label" @click="${this._handleClick}">
          <span class="${n}">
            ${this._renderLabelAttribute()}
            <slot @slotchange="${this._handleSlotChange}"></slot>
          </span>
        </label>
      </div>
    `}};ke.styles=ym;ke.formAssociated=!0;ke.shadowRootOptions={...vt.shadowRootOptions,delegatesFocus:!0};lt([p({type:Boolean,reflect:!0})],ke.prototype,"autofocus",void 0);lt([p({type:Boolean,reflect:!0})],ke.prototype,"checked",null);lt([p({type:Boolean,reflect:!0,attribute:"default-checked"})],ke.prototype,"defaultChecked",void 0);lt([p({type:Boolean,reflect:!0})],ke.prototype,"invalid",void 0);lt([p({reflect:!0})],ke.prototype,"name",void 0);lt([p({reflect:!0})],ke.prototype,"role",void 0);lt([p()],ke.prototype,"value",void 0);lt([p({type:Boolean,reflect:!0})],ke.prototype,"disabled",void 0);lt([p({type:Boolean,reflect:!0})],ke.prototype,"indeterminate",void 0);lt([p({type:Boolean,reflect:!0})],ke.prototype,"required",null);lt([Ne("#input")],ke.prototype,"_inputEl",void 0);ke=lt([V("vscode-checkbox")],ke);const _m=[M,N`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-checkbox) {
      margin-right: 20px;
    }

    ::slotted(vscode-checkbox:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox:last-child) {
      margin-bottom: 0;
    }
  `,as];var Ka=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let An=class extends j{constructor(){super(...arguments),this.role="group",this.variant="horizontal"}render(){return _`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};An.styles=_m;Ka([p({reflect:!0})],An.prototype,"role",void 0);Ka([p({reflect:!0})],An.prototype,"variant",void 0);An=Ka([V("vscode-checkbox-group")],An);const bm=[M,N`
    .collapsible {
      background-color: var(--vscode-sideBar-background);
    }

    .collapsible-header {
      align-items: center;
      background-color: var(--vscode-sideBarSectionHeader-background);
      cursor: pointer;
      display: flex;
      height: 22px;
      line-height: 22px;
      user-select: none;
    }

    .collapsible-header:focus {
      opacity: 1;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
      outline-color: var(--vscode-focusBorder);
    }

    .title {
      color: var(--vscode-sideBarTitle-foreground);
      display: block;
      font-family: var(--vscode-font-family);
      font-size: 11px;
      font-weight: 700;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .title .description {
      font-weight: 400;
      margin-left: 10px;
      text-transform: none;
      opacity: .6;
    }

    .header-icon {
      color: var(--vscode-icon-foreground);
      display: block;
      flex-shrink: 0;
      margin: 0 3px;
    }

    .collapsible.open .header-icon {
      transform: rotate(90deg);
    }

    .header-slots {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: auto;
      margin-right: 4px;
    }

    .actions {
      display: none;
    }

    .collapsible.open .actions {
      display: block;
    }

    .header-slots slot {
      display: flex;
      max-height: 22px;
      overflow: hidden;
    }

    .header-slots slot::slotted(div) {
      align-items: center;
      display: flex;
    }

    .collapsible-body {
      display: none;
      overflow: hidden;
    }

    .collapsible.open .collapsible-body {
      display: block;
    }
  `];var cs=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Tn=class extends j{constructor(){super(...arguments),this.title="",this.description="",this.open=!1}_emitToggleEvent(){this.dispatchEvent(new CustomEvent("vsc-collapsible-toggle",{detail:{open:this.open}}))}_onHeaderClick(){this.open=!this.open,this._emitToggleEvent()}_onHeaderKeyDown(e){e.key==="Enter"&&(this.open=!this.open,this._emitToggleEvent())}render(){const e=q({collapsible:!0,open:this.open}),n=_`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="header-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
      />
    </svg>`,o=this.description?_`<span class="description">${this.description}</span>`:P;return _`
      <div class="${e}">
        <div
          class="collapsible-header"
          tabindex="0"
          title="${this.title}"
          @click="${this._onHeaderClick}"
          @keydown="${this._onHeaderKeyDown}"
        >
          ${n}
          <h3 class="title">${this.title}${o}</h3>
          <div class="header-slots">
            <div class="actions"><slot name="actions"></slot></div>
            <div class="decorations"><slot name="decorations"></slot></div>
          </div>
        </div>
        <div class="collapsible-body" part="body">
          <slot></slot>
        </div>
      </div>
    `}};Tn.styles=bm;cs([p({type:String})],Tn.prototype,"title",void 0);cs([p()],Tn.prototype,"description",void 0);cs([p({type:Boolean,reflect:!0})],Tn.prototype,"open",void 0);Tn=cs([V("vscode-collapsible")],Tn);const xm=[M,N`
    :host {
      display: block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 1.4em;
      outline: none;
      position: relative;
    }

    .context-menu-item {
      background-color: var(--vscode-menu-background);
      color: var(--vscode-menu-foreground);
      display: flex;
      user-select: none;
      white-space: nowrap;
    }

    .ruler {
      border-bottom: 1px solid var(--vscode-menu-separatorBackground);
      display: block;
      margin: 0 0 4px;
      padding-top: 4px;
      width: 100%;
    }

    .context-menu-item a {
      align-items: center;
      border-color: transparent;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-menu-foreground);
      cursor: default;
      display: flex;
      flex: 1 1 auto;
      height: 2em;
      margin-left: 4px;
      margin-right: 4px;
      outline: none;
      position: relative;
      text-decoration: inherit;
    }

    :host([selected]) .context-menu-item a {
      background-color: var(--vscode-menu-selectionBackground);
      border-color: var(--vscode-menu-selectionBorder, var(--vscode-menu-selectionBackground));
      color: var(--vscode-menu-selectionForeground);
    }

    .label {
      background: none;
      display: flex;
      flex: 1 1 auto;
      font-size: 12px;
      line-height: 1;
      padding: 0 22px;
      text-decoration: none;
    }

    .keybinding {
      display: block;
      flex: 2 1 auto;
      line-height: 1;
      padding: 0 22px;
      text-align: right;
    }
  `];var xo=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Dt=class extends j{constructor(){super(...arguments),this.label="",this.keybinding="",this.value="",this.separator=!1,this.tabindex=0}onItemClick(){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{label:this.label,keybinding:this.keybinding,value:this.value||this.label,separator:this.separator,tabindex:this.tabindex},bubbles:!0,composed:!0}))}render(){return _`
      ${this.separator?_`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          `:_`
            <div class="context-menu-item">
              <a @click="${this.onItemClick}">
                ${this.label?_`<span class="label">${this.label}</span>`:P}
                ${this.keybinding?_`<span class="keybinding">${this.keybinding}</span>`:P}
              </a>
            </div>
          `}
    `}};Dt.styles=xm;xo([p({type:String})],Dt.prototype,"label",void 0);xo([p({type:String})],Dt.prototype,"keybinding",void 0);xo([p({type:String})],Dt.prototype,"value",void 0);xo([p({type:Boolean,reflect:!0})],Dt.prototype,"separator",void 0);xo([p({type:Number})],Dt.prototype,"tabindex",void 0);Dt=xo([V("vscode-context-menu-item")],Dt);const wm=[M,N`
    :host {
      display: block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 1.4em;
      position: relative;
    }

    .context-menu {
      background-color: var(--vscode-menu-background);
      border-color: var(--vscode-menu-border);
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow);
      color: var(--vscode-menu-foreground);
      padding: 4px 0;
      white-space: nowrap;
    }

    .context-menu:focus {
      outline: 0;
    }
  `];var Fn=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let kt=class extends j{set data(e){this._data=e;const n=[];e.forEach((o,r)=>{o.separator||n.push(r)}),this._clickableItemIndexes=n}get data(){return this._data}set show(e){this._show=e,this._selectedClickableItemIndex=-1,e&&this.updateComplete.then(()=>{this._wrapperEl&&this._wrapperEl.focus(),requestAnimationFrame(()=>{document.addEventListener("click",this._onClickOutsideBound,{once:!0})})})}get show(){return this._show}constructor(){super(),this.tabIndex=0,this._selectedClickableItemIndex=-1,this._show=!1,this._data=[],this._clickableItemIndexes=[],this._onClickOutsideBound=this._onClickOutside.bind(this),this.addEventListener("keydown",this._onKeyDown)}_onClickOutside(e){e.composedPath().includes(this)||(this._show=!1)}_onKeyDown(e){const{key:n}=e;switch((n==="ArrowUp"||n==="ArrowDown"||n==="Escape"||n==="Enter")&&e.preventDefault(),n){case"ArrowUp":this._handleArrowUp();break;case"ArrowDown":this._handleArrowDown();break;case"Escape":this._handleEscape();break;case"Enter":this._handleEnter();break}}_handleArrowUp(){this._selectedClickableItemIndex===0?this._selectedClickableItemIndex=this._clickableItemIndexes.length-1:this._selectedClickableItemIndex-=1}_handleArrowDown(){this._selectedClickableItemIndex+1<this._clickableItemIndexes.length?this._selectedClickableItemIndex+=1:this._selectedClickableItemIndex=0}_handleEscape(){this._show=!1,document.removeEventListener("click",this._onClickOutsideBound)}_dispatchSelectEvent(e){const{keybinding:n,label:o,value:r,separator:i,tabindex:s}=e;this.dispatchEvent(new CustomEvent("vsc-context-menu-select",{detail:{keybinding:n,label:o,separator:i,tabindex:s,value:r}}))}_dispatchLegacySelectEvent(e){const{keybinding:n,label:o,value:r,separator:i,tabindex:s}=e,l={keybinding:n,label:o,value:r,separator:i,tabindex:s};this.dispatchEvent(new CustomEvent("vsc-select",{detail:l,bubbles:!0,composed:!0}))}_handleEnter(){if(this._selectedClickableItemIndex===-1)return;const e=this._clickableItemIndexes[this._selectedClickableItemIndex],o=this._wrapperEl.querySelectorAll("vscode-context-menu-item")[e];this._dispatchLegacySelectEvent(o),this._dispatchSelectEvent(o),this._show=!1,document.removeEventListener("click",this._onClickOutsideBound)}_onItemClick(e){const n=e.currentTarget;this._dispatchLegacySelectEvent(n),this._dispatchSelectEvent(n),this._show=!1}_onItemMouseOver(e){const n=e.target,o=n.dataset.index?+n.dataset.index:-1,r=this._clickableItemIndexes.findIndex(i=>i===o);r!==-1&&(this._selectedClickableItemIndex=r)}_onItemMouseOut(){this._selectedClickableItemIndex=-1}render(){if(!this._show)return _`${P}`;const e=this._clickableItemIndexes[this._selectedClickableItemIndex];return _`
      <div class="context-menu" tabindex="0">
        ${this.data?this.data.map(({label:n="",keybinding:o="",value:r="",separator:i=!1,tabindex:s=0},l)=>_`
                <vscode-context-menu-item
                  label="${n}"
                  keybinding="${o}"
                  value="${r}"
                  ?separator="${i}"
                  ?selected="${l===e}"
                  tabindex="${s}"
                  @vsc-click="${this._onItemClick}"
                  @mouseover=${this._onItemMouseOver}
                  @mouseout=${this._onItemMouseOut}
                  data-index=${l}
                ></vscode-context-menu-item>
              `):_`<slot></slot>`}
      </div>
    `}};kt.styles=wm;Fn([p({type:Array,attribute:!1})],kt.prototype,"data",null);Fn([p({type:Boolean,reflect:!0})],kt.prototype,"show",null);Fn([p({type:Number,reflect:!0})],kt.prototype,"tabIndex",void 0);Fn([R()],kt.prototype,"_selectedClickableItemIndex",void 0);Fn([R()],kt.prototype,"_show",void 0);Fn([Ne(".context-menu")],kt.prototype,"_wrapperEl",void 0);kt=Fn([V("vscode-context-menu")],kt);const km=[M,N`
    :host {
      background-color: var(--vscode-widget-border);
      display: block;
      height: 1px;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  `];var np=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Cr=class extends j{constructor(){super(...arguments),this.role="separator"}render(){return _``}};Cr.styles=km;np([p({reflect:!0})],Cr.prototype,"role",void 0);Cr=np([V("vscode-divider")],Cr);const Cm=[M,N`
    :host {
      display: block;
      max-width: 727px;
    }
  `];var wo=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},_n;(function(t){t.HORIZONTAL="horizontal",t.VERTICAL="vertical"})(_n||(_n={}));const Sm=t=>["vscode-textfield","vscode-textarea"].includes(t.tagName.toLocaleLowerCase()),Em=t=>t.tagName.toLocaleLowerCase()==="vscode-single-select",$m=t=>t.tagName.toLocaleLowerCase()==="vscode-multi-select",gu=t=>t.tagName.toLocaleLowerCase()==="vscode-checkbox",yu=t=>t.tagName.toLocaleLowerCase()==="vscode-radio";let Vt=class extends j{constructor(){super(...arguments),this.breakpoint=490,this._responsive=!1,this._firstUpdateComplete=!1,this._resizeObserverCallbackBound=this._resizeObserverCallback.bind(this)}set responsive(e){this._responsive=e,this._firstUpdateComplete&&(e?this._activateResponsiveLayout():this._deactivateResizeObserver())}get responsive(){return this._responsive}get data(){return this._collectFormData()}_collectFormData(){const e=["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select","vscode-checkbox","vscode-radio"].join(","),n=this.querySelectorAll(e),o={};return n.forEach(r=>{if(!r.hasAttribute("name"))return;const i=r.getAttribute("name");i&&(gu(r)&&r.checked?o[i]=Array.isArray(o[i])?[...o[i],r.value]:[r.value]:$m(r)?o[i]=r.value:gu(r)&&!r.checked?o[i]=Array.isArray(o[i])?o[i]:[]:yu(r)&&r.checked||Sm(r)||Em(r)?o[i]=r.value:yu(r)&&!r.checked&&(o[i]=o[i]?o[i]:""))}),o}_toggleCompactLayout(e){this._assignedFormGroups.forEach(n=>{n.dataset.originalVariant||(n.dataset.originalVariant=n.variant);const o=n.dataset.originalVariant;e===_n.VERTICAL&&o==="horizontal"?n.variant="vertical":n.variant=o,n.querySelectorAll("vscode-checkbox-group, vscode-radio-group").forEach(i=>{i.dataset.originalVariant||(i.dataset.originalVariant=i.variant);const s=i.dataset.originalVariant;e===_n.HORIZONTAL&&s===_n.HORIZONTAL?i.variant="horizontal":i.variant="vertical"})})}_resizeObserverCallback(e){let n=0;for(const r of e)n=r.contentRect.width;const o=n<this.breakpoint?_n.VERTICAL:_n.HORIZONTAL;o!==this._currentFormGroupLayout&&(this._toggleCompactLayout(o),this._currentFormGroupLayout=o)}_activateResponsiveLayout(){this._resizeObserver=new ResizeObserver(this._resizeObserverCallbackBound),this._resizeObserver.observe(this._wrapperElement)}_deactivateResizeObserver(){var e;(e=this._resizeObserver)==null||e.disconnect(),this._resizeObserver=null}firstUpdated(){this._firstUpdateComplete=!0,this._responsive&&this._activateResponsiveLayout()}render(){return _`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Vt.styles=Cm;wo([p({type:Boolean,reflect:!0})],Vt.prototype,"responsive",null);wo([p({type:Number})],Vt.prototype,"breakpoint",void 0);wo([p({type:Object})],Vt.prototype,"data",null);wo([Ne(".wrapper")],Vt.prototype,"_wrapperElement",void 0);wo([Et({selector:"vscode-form-group"})],Vt.prototype,"_assignedFormGroups",void 0);Vt=wo([V("vscode-form-container")],Vt);const Im=[M,N`
    :host {
      --label-right-margin: 14px;
      --label-width: 150px;

      display: block;
      margin: 15px 0;
    }

    :host([variant='settings-group']) {
      margin: 0;
      padding: 12px 14px 18px;
      max-width: 727px;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper,
    :host([variant='settings-group']) .wrapper {
      display: block;
    }

    :host([variant='horizontal']) ::slotted(vscode-checkbox-group),
    :host([variant='horizontal']) ::slotted(vscode-radio-group) {
      width: calc(100% - calc(var(--label-width) + var(--label-right-margin)));
    }

    :host([variant='horizontal']) ::slotted(vscode-label) {
      margin-right: var(--label-right-margin);
      text-align: right;
      width: var(--label-width);
    }

    :host([variant='settings-group']) ::slotted(vscode-label) {
      height: 18px;
      line-height: 18px;
      margin-bottom: 4px;
      margin-right: 0;
      padding: 0;
    }

    ::slotted(vscode-form-helper) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-form-helper),
    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      display: block;
      margin-left: 0;
    }

    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      margin-bottom: 0;
      margin-top: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-label),
    :host([variant='settings-group']) ::slotted(vscode-label) {
      display: block;
      margin-left: 0;
      text-align: left;
    }

    :host([variant='settings-group']) ::slotted(vscode-inputbox),
    :host([variant='settings-group']) ::slotted(vscode-textfield),
    :host([variant='settings-group']) ::slotted(vscode-textarea),
    :host([variant='settings-group']) ::slotted(vscode-single-select),
    :host([variant='settings-group']) ::slotted(vscode-multi-select) {
      margin-top: 9px;
    }

    ::slotted(vscode-button:first-child) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-button) {
      margin-left: 0;
    }

    ::slotted(vscode-button) {
      margin-right: 4px;
    }
  `];var op=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Sr=class extends j{constructor(){super(...arguments),this.variant="horizontal"}render(){return _`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Sr.styles=Im;op([p({reflect:!0})],Sr.prototype,"variant",void 0);Sr=op([V("vscode-form-group")],Sr);const Pm=[M,N`
    :host {
      color: var(--vsc-foreground-translucent);
      display: block;
      margin-bottom: 4px;
      margin-top: 4px;
      max-width: 720px;
    }

    :host([vertical]) {
      margin-left: 0;
    }
  `,as];var Rm=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Hi=class extends j{constructor(){super(),Jh()}render(){return _`<slot></slot>`}};Hi.styles=Pm;Hi=Rm([V("vscode-form-helper")],Hi);let _u=0;const rp=(t="")=>(_u++,`${t}${_u}`),Om=[M,N`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-radio) {
      margin-right: 20px;
    }

    ::slotted(vscode-radio:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-radio) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-radio:last-child) {
      margin-bottom: 0;
    }
  `];var ko=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ct=class extends j{constructor(){super(...arguments),this.variant="horizontal",this.role="radiogroup",this._focusedRadio=-1,this._checkedRadio=-1,this._firstContentLoaded=!1,this._onKeyDownBound=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDownBound)}_uncheckPreviousChecked(e,n){e!==-1&&(this._radios[e].checked=!1),n!==-1&&(this._radios[n].tabIndex=-1)}_afterCheck(){this._focusedRadio=this._checkedRadio,this._radios[this._checkedRadio].checked=!0,this._radios[this._checkedRadio].tabIndex=0,this._radios[this._checkedRadio].focus()}_checkPrev(){const e=this._radios.findIndex(r=>r.checked),n=this._radios.findIndex(r=>r.focused),o=n!==-1?n:e;this._uncheckPreviousChecked(e,n),o===-1?this._checkedRadio=this._radios.length-1:o-1>=0?this._checkedRadio=o-1:this._checkedRadio=this._radios.length-1,this._afterCheck()}_checkNext(){const e=this._radios.findIndex(r=>r.checked),n=this._radios.findIndex(r=>r.focused),o=n!==-1?n:e;this._uncheckPreviousChecked(e,n),o===-1?this._checkedRadio=0:o+1<this._radios.length?this._checkedRadio=o+1:this._checkedRadio=0,this._afterCheck()}_onKeyDown(e){const{key:n}=e;["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(n)&&e.preventDefault(),(n==="ArrowRight"||n==="ArrowDown")&&this._checkNext(),(n==="ArrowLeft"||n==="ArrowUp")&&this._checkPrev()}_onChange(e){const n=this._radios.findIndex(o=>o===e.target);n!==-1&&(this._focusedRadio!==-1&&(this._radios[this._focusedRadio].tabIndex=-1),this._checkedRadio!==-1&&this._checkedRadio!==n&&(this._radios[this._checkedRadio].checked=!1),this._focusedRadio=n,this._checkedRadio=n,this._radios[n].tabIndex=0)}_onSlotChange(){if(!this._firstContentLoaded){const e=this._radios.findIndex(n=>n.autofocus);e>-1&&(this._focusedRadio=e),this._firstContentLoaded=!0}this._radios.forEach((e,n)=>{this._focusedRadio>-1?e.tabIndex=n===this._focusedRadio?0:-1:e.tabIndex=n===0?0:-1})}render(){return _`
      <div class="wrapper">
        <slot
          @slotchange=${this._onSlotChange}
          @vsc-change=${this._onChange}
        ></slot>
      </div>
    `}};Ct.styles=Om;ko([p({reflect:!0})],Ct.prototype,"variant",void 0);ko([p({reflect:!0})],Ct.prototype,"role",void 0);ko([Et({selector:"vscode-radio"})],Ct.prototype,"_radios",void 0);ko([R()],Ct.prototype,"_focusedRadio",void 0);ko([R()],Ct.prototype,"_checkedRadio",void 0);Ct=ko([V("vscode-radio-group")],Ct);const zm=[M,N`
    :host {
      display: inline-block;
      height: 40px;
      position: relative;
      width: 320px;
    }

    :host([cols]) {
      width: auto;
    }

    :host([rows]) {
      height: auto;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow) 0 6px 6px -6px inset;
      display: none;
      inset: 0 0 auto 0;
      height: 6px;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    textarea {
      background-color: var(--vscode-settings-textInputBackground);
      border-color: var(--vscode-settings-textInputBorder, var(--vscode-settings-textInputBackground));
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground);
      display: block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      height: 100%;
      width: 100%;
    }

    :host([cols]) textarea {
      width: auto;
    }

    :host([rows]) textarea {
      height: auto;
    }

    :host([invalid]) textarea,
    :host(:invalid) textarea {
      background-color: var(--vscode-inputValidation-errorBackground);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    textarea.monospace {
      background-color: var(--vscode-editor-background);
      color: var(--vscode-editor-foreground);
      font-family: var(--vscode-editor-font-family);
      font-size: var(--vscode-editor-font-size);
      font-weight: var(--vscode-editor-font-weight);
    }

    .textarea.monospace::placeholder {
      color: var(--vscode-editor-inlineValuesForeground);
    }

    textarea.cursor-pointer {
      cursor: pointer;
    }

    textarea:focus {
      border-color: var(--vscode-focusBorder);
      outline: none;
    }

    textarea::placeholder {
      color: var(--vscode-input-placeholderForeground);
      opacity: 1;
    }

    textarea::-webkit-scrollbar-track {
      background-color: transparent;
    }

    textarea::-webkit-scrollbar {
      width: 14px;
    }

    textarea::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    textarea:hover::-webkit-scrollbar-thumb {
      background-color: var(--vscode-scrollbarSlider-background);
    }

    textarea::-webkit-scrollbar-thumb:hover {
      background-color: var(--vscode-scrollbarSlider-hoverBackground);
    }

    textarea::-webkit-scrollbar-thumb:active {
      background-color: var(--vscode-scrollbarSlider-activeBackground);
    }

    textarea::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    textarea::-webkit-resizer {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJxjYMAOZuIQZ5j5//9/rJJESczEKYGsG6cEXgAAsEEefMxkua4AAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-position: right bottom;
    }
  `];var re=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let W=class extends j{set value(e){this._value=e,this._internals.setFormValue(e)}get value(){return this._value}get wrappedElement(){return this._textareaEl}get form(){return this._internals.form}get type(){return"textarea"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.invalid=!1,this.label="",this.maxLength=void 0,this.minLength=void 0,this.rows=void 0,this.cols=void 0,this.name=void 0,this.placeholder=void 0,this.readonly=!1,this.resize="none",this.required=!1,this.spellcheck=!1,this.monospace=!1,this._value="",this._textareaPointerCursor=!1,this._shadow=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._textareaEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._textareaEl.value)})}updated(e){const n=["maxLength","minLength","required"];for(const o of e.keys())if(n.includes(String(o))){this.updateComplete.then(()=>{this._setValidityFromInput()});break}}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,n){this.updateComplete.then(()=>{this._value=e})}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_setValidityFromInput(){this._internals.setValidity(this._textareaEl.validity,this._textareaEl.validationMessage,this._textareaEl)}_dataChanged(){this._value=this._textareaEl.value,this._internals.setFormValue(this._textareaEl.value)}_handleChange(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:e}}))}_handleInput(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:e.data,originalEvent:e}}))}_handleMouseMove(e){if(this._textareaEl.clientHeight>=this._textareaEl.scrollHeight){this._textareaPointerCursor=!1;return}const n=14,o=1,r=this._textareaEl.getBoundingClientRect(),i=e.clientX;this._textareaPointerCursor=i>=r.left+r.width-n-o*2}_handleScroll(){this._shadow=this._textareaEl.scrollTop>0}render(){return _`
      <div
        class=${q({shadow:!0,visible:this._shadow})}
      ></div>
      <textarea
        autocomplete=${X(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${q({monospace:this.monospace,"cursor-pointer":this._textareaPointerCursor})}
        maxlength=${X(this.maxLength)}
        minlength=${X(this.minLength)}
        rows=${X(this.rows)}
        cols=${X(this.cols)}
        name=${X(this.name)}
        placeholder=${X(this.placeholder)}
        ?readonly=${this.readonly}
        style=${Ve({resize:this.resize})}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `}};W.styles=zm;W.formAssociated=!0;W.shadowRootOptions={...vt.shadowRootOptions,delegatesFocus:!0};re([p()],W.prototype,"autocomplete",void 0);re([p({type:Boolean,reflect:!0})],W.prototype,"autofocus",void 0);re([p({attribute:"default-value"})],W.prototype,"defaultValue",void 0);re([p({type:Boolean,reflect:!0})],W.prototype,"disabled",void 0);re([p({type:Boolean,reflect:!0})],W.prototype,"invalid",void 0);re([p({attribute:!1})],W.prototype,"label",void 0);re([p({type:Number})],W.prototype,"maxLength",void 0);re([p({type:Number})],W.prototype,"minLength",void 0);re([p({type:Number})],W.prototype,"rows",void 0);re([p({type:Number})],W.prototype,"cols",void 0);re([p()],W.prototype,"name",void 0);re([p()],W.prototype,"placeholder",void 0);re([p({type:Boolean,reflect:!0})],W.prototype,"readonly",void 0);re([p()],W.prototype,"resize",void 0);re([p({type:Boolean,reflect:!0})],W.prototype,"required",void 0);re([p({type:Boolean})],W.prototype,"spellcheck",void 0);re([p({type:Boolean,reflect:!0})],W.prototype,"monospace",void 0);re([p()],W.prototype,"value",null);re([Ne("#textarea")],W.prototype,"_textareaEl",void 0);re([R()],W.prototype,"_value",void 0);re([R()],W.prototype,"_textareaPointerCursor",void 0);re([R()],W.prototype,"_shadow",void 0);W=re([V("vscode-textarea")],W);const Am=[M,N`
    :host {
      align-items: center;
      background-color: var(--vscode-settings-textInputBackground);
      border-color: var(--vscode-settings-textInputBorder, var(--vscode-settings-textInputBackground));
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground);
      display: inline-flex;
      max-width: 100%;
      position: relative;
      width: 320px;
    }

    :host([focused]) {
      border-color: var(--vscode-focusBorder);
    }

    :host([invalid]),
    :host(:invalid) {
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([invalid]) input,
    :host(:invalid) input {
      background-color: var(--vscode-inputValidation-errorBackground);
    }

    ::slotted([slot='content-before']) {
      display: block;
      margin-left: 2px;
    }

    ::slotted([slot='content-after']) {
      display: block;
      margin-right: 2px;
    }

    slot[name='content-before'],
    slot[name='content-after'] {
      align-items: center;
      display: flex;
    }

    input {
      background-color: var(--vscode-settings-textInputBackground);
      border: 0;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground);
      display: block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 18px;
      outline: none;
      padding-bottom: 3px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 3px;
      width: 100%;
    }

    input:read-only:not([type="file"]) {
      cursor: not-allowed;
    }

    input::placeholder {
      color: var(--vscode-input-placeholderForeground);
      opacity: 1;
    }

    input[type='file'] {
      line-height: 24px;
      padding-bottom: 0;
      padding-left: 2px;
      padding-top: 0;
    }

    input[type='file']::file-selector-button {
      background-color: var(--vscode-button-background);
      border: 0;
      border-radius: 2px;
      color: var(--vscode-button-foreground);
      cursor: pointer;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground);
    }
  `];var J=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let H=class extends j{set type(e){const n=["color","date","datetime-local","email","file","month","number","password","search","tel","text","time","url","week"];this._type=n.includes(e)?e:"text"}get type(){return this._type}set value(e){this.type!=="file"&&(this._value=e,this._internals.setFormValue(e)),this.updateComplete.then(()=>{this._setValidityFromInput()})}get value(){return this._value}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._setValidityFromInput(),this._internals.checkValidity()}reportValidity(){return this._setValidityFromInput(),this._internals.reportValidity()}get wrappedElement(){return this._inputEl}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.focused=!1,this.invalid=!1,this.label="",this.max=void 0,this.maxLength=void 0,this.min=void 0,this.minLength=void 0,this.multiple=!1,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.step=void 0,this._value="",this._type="text",this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._inputEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._inputEl.value)})}attributeChangedCallback(e,n,o){super.attributeChangedCallback(e,n,o),["max","maxlength","min","minlength","pattern","required","step"].includes(e)&&this.updateComplete.then(()=>{this._setValidityFromInput()})}formResetCallback(){this.value=this.defaultValue,this.requestUpdate()}formStateRestoreCallback(e,n){this.value=e}_dataChanged(){if(this._value=this._inputEl.value,this.type==="file"&&this._inputEl.files)for(const e of this._inputEl.files)this._internals.setFormValue(e);else this._internals.setFormValue(this._inputEl.value)}_setValidityFromInput(){this._inputEl&&this._internals.setValidity(this._inputEl.validity,this._inputEl.validationMessage,this._inputEl)}_onInput(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:e.data,originalEvent:e}}))}_onChange(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:e}}))}_onFocus(){this.focused=!0}_onBlur(){this.focused=!1}_onKeyDown(e){var n;e.key==="Enter"&&this._internals.form&&((n=this._internals.form)==null||n.requestSubmit())}render(){return _`
      <slot name="content-before"></slot>
      <input
        id="input"
        type=${this.type}
        ?autofocus=${this.autofocus}
        autocomplete=${X(this.autocomplete)}
        aria-label=${this.label}
        ?disabled=${this.disabled}
        max=${X(this.max)}
        maxlength=${X(this.maxLength)}
        min=${X(this.min)}
        minlength=${X(this.minLength)}
        ?multiple=${this.multiple}
        name=${X(this.name)}
        pattern=${X(this.pattern)}
        placeholder=${X(this.placeholder)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        step=${X(this.step)}
        .value=${X(this.type!=="file"?this._value:void 0)}
        @blur=${this._onBlur}
        @change=${this._onChange}
        @focus=${this._onFocus}
        @input=${this._onInput}
        @keydown=${this._onKeyDown}
      />
      <slot name="content-after"></slot>
    `}};H.styles=Am;H.formAssociated=!0;H.shadowRootOptions={...vt.shadowRootOptions,delegatesFocus:!0};J([p()],H.prototype,"autocomplete",void 0);J([p({type:Boolean,reflect:!0})],H.prototype,"autofocus",void 0);J([p({attribute:"default-value"})],H.prototype,"defaultValue",void 0);J([p({type:Boolean,reflect:!0})],H.prototype,"disabled",void 0);J([p({type:Boolean,reflect:!0})],H.prototype,"focused",void 0);J([p({type:Boolean,reflect:!0})],H.prototype,"invalid",void 0);J([p({attribute:!1})],H.prototype,"label",void 0);J([p({type:Number})],H.prototype,"max",void 0);J([p({type:Number})],H.prototype,"maxLength",void 0);J([p({type:Number})],H.prototype,"min",void 0);J([p({type:Number})],H.prototype,"minLength",void 0);J([p({type:Boolean,reflect:!0})],H.prototype,"multiple",void 0);J([p({reflect:!0})],H.prototype,"name",void 0);J([p()],H.prototype,"pattern",void 0);J([p()],H.prototype,"placeholder",void 0);J([p({type:Boolean,reflect:!0})],H.prototype,"readonly",void 0);J([p({type:Boolean,reflect:!0})],H.prototype,"required",void 0);J([p({type:Number})],H.prototype,"step",void 0);J([p({reflect:!0})],H.prototype,"type",null);J([p()],H.prototype,"value",null);J([Ne("#input")],H.prototype,"_inputEl",void 0);J([R()],H.prototype,"_value",void 0);J([R()],H.prototype,"_type",void 0);H=J([V("vscode-textfield")],H);const Tm=16,Nm=13,Lm=Tm/Nm,Bm=[M,N`
    :host {
      color: var(--vscode-foreground);
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: 600;
      line-height: ${Lm};
      cursor: default;
      display: block;
      padding: 5px 0;
    }

    .wrapper {
      display: block;
    }

    .wrapper.required:after {
      content: ' *';
    }

    ::slotted(.normal) {
      font-weight: normal;
    }

    ::slotted(.lightened) {
      color: var(--vscode-foreground);
      opacity: 0.9;
    }
  `];var us=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Nn=class extends j{constructor(){super(...arguments),this.required=!1,this._id="",this._htmlFor="",this._connected=!1}set htmlFor(e){this._htmlFor=e,this.setAttribute("for",e),this._connected&&this._connectWithTarget()}get htmlFor(){return this._htmlFor}set id(e){this._id=e}get id(){return this._id}attributeChangedCallback(e,n,o){super.attributeChangedCallback(e,n,o)}connectedCallback(){super.connectedCallback(),this._connected=!0,this._id===""&&(this._id=rp("vscode-label-"),this.setAttribute("id",this._id)),this._connectWithTarget()}_getTarget(){let e=null;if(this._htmlFor){const n=this.getRootNode({composed:!1});n&&(e=n.querySelector(`#${this._htmlFor}`))}return e}async _connectWithTarget(){await this.updateComplete;const e=this._getTarget();(e instanceof Ct||e instanceof An)&&e.setAttribute("aria-labelledby",this._id);let n="";this.textContent&&(n=this.textContent.trim()),(e instanceof H||e instanceof W)&&(e.label=n)}_handleClick(){const e=this._getTarget();e&&"focus"in e&&e.focus()}render(){return _`
      <label
        class="${q({wrapper:!0,required:this.required})}"
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `}};Nn.styles=Bm;us([p({reflect:!0,attribute:"for"})],Nn.prototype,"htmlFor",null);us([p()],Nn.prototype,"id",null);us([p({type:Boolean,reflect:!0})],Nn.prototype,"required",void 0);Nn=us([V("vscode-label")],Nn);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Dm}=om,bu=()=>document.createComment(""),Do=(t,e,n)=>{var i;const o=t._$AA.parentNode,r=e===void 0?t._$AB:e._$AA;if(n===void 0){const s=o.insertBefore(bu(),r),l=o.insertBefore(bu(),r);n=new Dm(s,l,t,t.options)}else{const s=n._$AB.nextSibling,l=n._$AM,a=l!==t;if(a){let c;(i=n._$AQ)==null||i.call(n,t),n._$AM=t,n._$AP!==void 0&&(c=t._$AU)!==l._$AU&&n._$AP(c)}if(s!==r||a){let c=n._$AA;for(;c!==s;){const m=c.nextSibling;o.insertBefore(c,r),c=m}}}return n},vn=(t,e,n=t)=>(t._$AI(e,n),t),Vm={},Mm=(t,e=Vm)=>t._$AH=e,Fm=t=>t._$AH,qs=t=>{var o;(o=t._$AP)==null||o.call(t,!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const r=e.nextSibling;e.remove(),e=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xu=(t,e,n)=>{const o=new Map;for(let r=e;r<=n;r++)o.set(t[r],r);return o},jm=Ha(class extends Ua{constructor(t){if(super(t),t.type!==ja.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let o;n===void 0?n=e:e!==void 0&&(o=e);const r=[],i=[];let s=0;for(const l of t)r[s]=o?o(l,s):s,i[s]=n(l,s),s++;return{values:i,keys:r}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,o]){const r=Fm(t),{values:i,keys:s}=this.dt(e,n,o);if(!Array.isArray(r))return this.ut=s,i;const l=this.ut??(this.ut=[]),a=[];let c,m,d=0,f=r.length-1,g=0,y=i.length-1;for(;d<=f&&g<=y;)if(r[d]===null)d++;else if(r[f]===null)f--;else if(l[d]===s[g])a[g]=vn(r[d],i[g]),d++,g++;else if(l[f]===s[y])a[y]=vn(r[f],i[y]),f--,y--;else if(l[d]===s[y])a[y]=vn(r[d],i[y]),Do(t,a[y+1],r[d]),d++,y--;else if(l[f]===s[g])a[g]=vn(r[f],i[g]),Do(t,r[d],r[f]),f--,g++;else if(c===void 0&&(c=xu(s,g,y),m=xu(l,d,f)),c.has(l[d]))if(c.has(l[f])){const w=m.get(s[g]),F=w!==void 0?r[w]:null;if(F===null){const h=Do(t,r[d]);vn(h,i[g]),a[g]=h}else a[g]=vn(F,i[g]),Do(t,r[d],F),r[w]=null;g++}else qs(r[f]),f--;else qs(r[d]),d++;for(;g<=y;){const w=Do(t,a[y+1]);vn(w,i[g]),a[g++]=w}for(;d<=f;){const w=r[d++];w!==null&&qs(w)}return this.ut=s,Mm(t,a),Bt}}),Ui=_`
  <span class="icon">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
      />
    </svg>
  </span>
`;var Lr=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let an=class extends j{constructor(){super(...arguments),this.value="",this.description="",this.selected=!1,this.disabled=!1}render(){return _`<slot></slot>`}};an.styles=M;Lr([p({type:String})],an.prototype,"value",void 0);Lr([p({type:String})],an.prototype,"description",void 0);Lr([p({type:Boolean,reflect:!0})],an.prototype,"selected",void 0);Lr([p({type:Boolean,reflect:!0})],an.prototype,"disabled",void 0);an=Lr([V("vscode-option")],an);const Hm=(t,e)=>{const n={match:!1,ranges:[]},o=t.toLowerCase(),r=e.toLowerCase(),i=o.split(" ");let s=0;return i.forEach((l,a)=>{if(a>0&&(s+=i[a-1].length+1),n.match)return;const c=l.indexOf(r),m=r.length;c===0&&(n.match=!0,n.ranges.push([s+c,Math.min(s+c+m,t.length)]))}),n},Um=(t,e)=>{const n={match:!1,ranges:[]};return t.toLowerCase().indexOf(e.toLowerCase())===0&&(n.match=!0,n.ranges=[[0,e.length]]),n},Wm=(t,e)=>{const n={match:!1,ranges:[]},o=t.toLowerCase().indexOf(e.toLowerCase());return o>-1&&(n.match=!0,n.ranges=[[o,o+e.length]]),n},Km=(t,e)=>{const n={match:!1,ranges:[]};let o=0,r=0;const i=e.length-1,s=t.toLowerCase(),l=e.toLowerCase();for(let a=0;a<=i;a++){if(r=s.indexOf(l[a],o),r===-1)return{match:!1,ranges:[]};n.match=!0,n.ranges.push([r,r+1]),o=r+1}return n},qm=(t,e,n)=>{const o=[];return t.forEach(r=>{let i;switch(n){case"startsWithPerTerm":i=Hm(r.label,e);break;case"startsWith":i=Um(r.label,e);break;case"contains":i=Wm(r.label,e);break;default:i=Km(r.label,e)}i.match&&o.push({...r,ranges:i.ranges})}),o},ni=t=>{const e=[];return t===" "?(e.push(_`&nbsp;`),e):(t.indexOf(" ")===0&&e.push(_`&nbsp;`),e.push(_`${t.trimStart().trimEnd()}`),t.lastIndexOf(" ")===t.length-1&&e.push(_`&nbsp;`),e)},ip=(t,e)=>{const n=[],o=e.length;return o<1?_`${t}`:(e.forEach((r,i)=>{const s=t.substring(r[0],r[1]);i===0&&r[0]!==0&&n.push(...ni(t.substring(0,e[0][0]))),i>0&&i<o&&r[0]-e[i-1][1]!==0&&n.push(...ni(t.substring(e[i-1][1],r[0]))),n.push(_`<b>${ni(s)}</b>`),i===o-1&&r[1]<t.length&&n.push(...ni(t.substring(r[1],t.length)))}),n)};var ie=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const mi=10,yn=22,Qm=mi+yn+2;class G extends j{constructor(){super(...arguments),this.ariaExpanded="false",this.combobox=!1,this.invalid=!1,this.focused=!1,this.position="below",this.tabIndex=0,this._activeIndex=-1,this._currentDescription="",this._filter="fuzzy",this._filterPattern="",this._selectedIndex=-1,this._selectedIndexes=[],this._showDropdown=!1,this._options=[],this._value="",this._values=[],this._listScrollTop=0,this._multiple=!1,this._valueOptionIndexMap={},this._isHoverForbidden=!1,this._disabled=!1,this._originalTabIndex=void 0,this._onClickOutside=e=>{e.composedPath().findIndex(r=>r===this)===-1&&(this._toggleDropdown(!1),window.removeEventListener("click",this._onClickOutside))},this._onMouseMove=()=>{this._isHoverForbidden=!1,window.removeEventListener("mousemove",this._onMouseMove)}}set disabled(e){this._disabled=e,this.ariaDisabled=e?"true":"false",e===!0?(this._originalTabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this._originalTabIndex??0,this._originalTabIndex=void 0),this.requestUpdate()}get disabled(){return this._disabled}set filter(e){["contains","fuzzy","startsWith","startsWithPerTerm"].includes(e)?this._filter=e:(this._filter="fuzzy",console.warn(`[VSCode Webview Elements] Invalid filter: "${e}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`,this))}get filter(){return this._filter}set options(e){this._options=e.map((n,o)=>({...n,index:o}))}get options(){return this._options.map(({label:e,value:n,description:o,selected:r,disabled:i})=>({label:e,value:n,description:o,selected:r,disabled:i}))}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onComponentKeyDown),this.addEventListener("focus",this._onComponentFocus),this.addEventListener("blur",this._onComponentBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onComponentKeyDown),this.removeEventListener("focus",this._onComponentFocus),this.removeEventListener("blur",this._onComponentBlur)}get _filteredOptions(){return!this.combobox||this._filterPattern===""?this._options:qm(this._options,this._filterPattern,this._filter)}get _currentOptions(){return this.combobox?this._filteredOptions:this._options}_addOptionsFromSlottedElements(){const e=[];let n=0;const o=this._assignedOptions??[],r={selectedIndexes:[],values:[]};return this._valueOptionIndexMap={},o.forEach(i=>{const{innerText:s,description:l,disabled:a}=i,c=i.value??""?i.value:s.trim(),m=i.selected??!1,d={label:s.trim(),value:c,description:l,selected:m,index:n,disabled:a};n=e.push(d),m&&(r.selectedIndexes.push(e.length-1),r.values.push(c)),this._valueOptionIndexMap[d.value]=d.index}),this._options=e,r}async _toggleDropdown(e){this._showDropdown=e,this.ariaExpanded=String(e),e&&!this._multiple&&!this.combobox&&(this._activeIndex=this._selectedIndex,this._activeIndex>mi-1&&(await this.updateComplete,this._listElement.scrollTop=Math.floor(this._activeIndex*yn))),e?window.addEventListener("click",this._onClickOutside):window.removeEventListener("click",this._onClickOutside)}_dispatchChangeEvent(){this._multiple?this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndexes:this._selectedIndexes,value:this._values}})):this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndex:this._selectedIndex,value:this._value}})),this.dispatchEvent(new Event("change"))}_onFaceClick(){this._toggleDropdown(!this._showDropdown),this._multiple&&(this._activeIndex=0)}_toggleComboboxDropdown(){this._filterPattern="",this._toggleDropdown(!this._showDropdown),this._multiple&&(this._activeIndex=-1)}_onComboboxButtonClick(){this._toggleComboboxDropdown()}_onComboboxButtonKeyDown(e){e.key==="Enter"&&this._toggleComboboxDropdown()}_onOptionMouseOver(e){if(this._isHoverForbidden)return;const n=e.target;n.matches(".option")&&(this._activeIndex=Number(this.combobox?n.dataset.filteredIndex:n.dataset.index))}_onEnterKeyDown(){const e=this.combobox?this._filteredOptions:this._options,n=!this._showDropdown;this._toggleDropdown(n),!this._multiple&&!n&&this._selectedIndex!==this._activeIndex&&(this._selectedIndex=e[this._activeIndex].index,this._value=this._options[this._selectedIndex].value,this._dispatchChangeEvent()),this.combobox&&(!this._multiple&&!n&&(this._selectedIndex=this._filteredOptions[this._activeIndex].index),!this._multiple&&n&&this.updateComplete.then(()=>{this._scrollActiveElementToTop()})),this._multiple&&n&&(this._activeIndex=0)}_onSpaceKeyDown(){if(!this._showDropdown){this._toggleDropdown(!0);return}if(this._showDropdown&&this._multiple&&this._activeIndex>-1){const e=this.combobox?this._filteredOptions:this._options,{selected:n}=e[this._activeIndex];e[this._activeIndex].selected=!n,this._selectedIndexes=[],e.forEach(({index:o,selected:r})=>{r&&this._selectedIndexes.push(o)})}}_scrollActiveElementToTop(){this._listElement.scrollTop=Math.floor(this._activeIndex*yn)}async _adjustOptionListScrollPos(e){if((this.combobox?this._filteredOptions.length:this._options.length)<=mi)return;this._isHoverForbidden=!0,window.addEventListener("mousemove",this._onMouseMove),this._listElement||await this.updateComplete;const o=this._listElement.scrollTop,r=this._activeIndex*yn;e==="down"&&r+yn>=Qm+o&&(this._listElement.scrollTop=(this._activeIndex-(mi-1))*yn),e==="up"&&r<=o-yn&&this._scrollActiveElementToTop()}_onArrowUpKeyDown(){if(this._showDropdown){if(this._activeIndex<=0)return;this._activeIndex-=1,this._adjustOptionListScrollPos("up")}}_onArrowDownKeyDown(){if(this._showDropdown){if(this._activeIndex>=this._currentOptions.length-1)return;this._activeIndex+=1,this._adjustOptionListScrollPos("down")}}_onComponentKeyDown(e){[" ","ArrowUp","ArrowDown","Escape"].includes(e.key)&&(e.stopPropagation(),e.preventDefault()),e.key==="Enter"&&this._onEnterKeyDown(),e.key===" "&&this._onSpaceKeyDown(),e.key==="Escape"&&this._toggleDropdown(!1),e.key==="ArrowUp"&&this._onArrowUpKeyDown(),e.key==="ArrowDown"&&this._onArrowDownKeyDown()}_onComponentFocus(){this.focused=!0}_onComponentBlur(){this.focused=!1}_onSlotChange(){const e=this._addOptionsFromSlottedElements();e.selectedIndexes.length>0&&(this._selectedIndex=e.selectedIndexes[0],this._selectedIndexes=e.selectedIndexes,this._value=e.values[0],this._values=e.values),!this._multiple&&!this.combobox&&e.selectedIndexes.length===0&&(this._selectedIndex=0),this.requestUpdate()}_onComboboxInputFocus(e){e.target.select()}_onComboboxInputInput(e){this._filterPattern=e.target.value,this._activeIndex=-1,this._toggleDropdown(!0)}_onComboboxInputClick(){this._toggleDropdown(!0)}_renderOptions(){return[]}_renderDescription(){if(!this._options[this._activeIndex])return P;const{description:e}=this._options[this._activeIndex];return e?_`<div class="description">${e}</div>`:P}_renderSelectFace(){return _`${P}`}_renderComboboxFace(){return _`${P}`}_renderDropdownControls(){return _`${P}`}_renderDropdown(){const e=q({dropdown:!0,multiple:this._multiple});return _`
      <div class="${e}">
        ${this.position==="above"?this._renderDescription():P}
        ${this._renderOptions()} ${this._renderDropdownControls()}
        ${this.position==="below"?this._renderDescription():P}
      </div>
    `}render(){return _`
      <slot class="main-slot" @slotchange="${this._onSlotChange}"></slot>
      ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
      ${this._showDropdown?this._renderDropdown():P}
    `}}ie([p({type:String,reflect:!0,attribute:"aria-expanded"})],G.prototype,"ariaExpanded",void 0);ie([p({type:Boolean,reflect:!0})],G.prototype,"combobox",void 0);ie([p({type:Boolean,reflect:!0})],G.prototype,"disabled",null);ie([p({type:Boolean,reflect:!0})],G.prototype,"invalid",void 0);ie([p()],G.prototype,"filter",null);ie([p({type:Boolean,reflect:!0})],G.prototype,"focused",void 0);ie([p({type:Array})],G.prototype,"options",null);ie([p({reflect:!0})],G.prototype,"position",void 0);ie([p({type:Number,attribute:!0,reflect:!0})],G.prototype,"tabIndex",void 0);ie([Et({flatten:!0,selector:"vscode-option"})],G.prototype,"_assignedOptions",void 0);ie([R()],G.prototype,"_activeIndex",void 0);ie([R()],G.prototype,"_currentDescription",void 0);ie([R()],G.prototype,"_filter",void 0);ie([R()],G.prototype,"_filteredOptions",null);ie([R()],G.prototype,"_filterPattern",void 0);ie([R()],G.prototype,"_selectedIndex",void 0);ie([R()],G.prototype,"_selectedIndexes",void 0);ie([R()],G.prototype,"_showDropdown",void 0);ie([R()],G.prototype,"_options",void 0);ie([R()],G.prototype,"_value",void 0);ie([R()],G.prototype,"_values",void 0);ie([R()],G.prototype,"_listScrollTop",void 0);ie([Ne(".options")],G.prototype,"_listElement",void 0);const sp=[M,N`
    :host {
      display: inline-block;
      max-width: 100%;
      outline: none;
      position: relative;
      width: 320px;
    }

    .main-slot {
      display: none;
    }

    .select-face,
    .combobox-face {
      background-color: var(--vscode-settings-dropdownBackground);
      border-color: var(--vscode-settings-dropdownBorder);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-dropdownForeground);
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 18px;
      position: relative;
      user-select: none;
      width: 100%;
    }

    :host([invalid]) .select-face,
    :host(:invalid) .select-face,
    :host([invalid]) .combobox-face,
    :host(:invalid) .combobox-face {
      background-color: var(--vscode-inputValidation-errorBackground);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .select-face {
      cursor: pointer;
      padding: 3px 4px;
    }

    .select-face.multiselect {
      padding: 0;
    }

    .select-face-badge {
      background-color: var(--vscode-badge-background);
      border-radius: 2px;
      color: var(--vscode-badge-foreground);
      display: inline-block;
      flex-shrink: 0;
      font-size: 11px;
      line-height: 16px;
      margin: 2px;
      padding: 2px 3px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .select-face-badge.no-item {
      background-color: transparent;
      color: inherit;
    }

    .combobox-face {
      display: flex;
    }

    .empty-label-placeholder {
      display: block;
      height: 16px;
    }

    :host(:focus) .select-face,
    :host(:focus) .combobox-face,
    :host([focused]) .select-face,
    :host([focused]) .combobox-face {
      border-color: var(--vscode-focusBorder);
      outline: none;
    }

    .combobox-input {
      background-color: transparent;
      box-sizing: border-box;
      border: 0;
      color: var(--vscode-foreground);
      display: block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      line-height: 16px;
      padding: 4px;
      width: 100%;
    }

    .combobox-input:focus {
      outline: none;
    }

    .combobox-button {
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground);
      cursor: pointer;
      flex-shrink: 0;
      height: 24px;
      margin: 0;
      padding: 0;
      width: 30px;
    }

    .combobox-button:focus,
    .combobox-button:hover {
      background-color: var(--vscode-list-hoverBackground);
    }

    .combobox-button:focus {
      outline: 0;
    }

    .icon {
      color: var(--vscode-foreground);
      display: block;
      height: 14px;
      pointer-events: none;
      position: absolute;
      right: 8px;
      top: 5px;
      width: 14px;
    }

    .icon svg {
      color: var(--vscode-foreground);
      height: 100%;
      width: 100%;
    }

    .select-face:empty:before {
      content: '\\00a0';
    }

    .dropdown {
      background-color: var(--vscode-settings-dropdownBackground);
      border-color: var(--vscode-settings-dropdownListBorder);
      border-radius: 0 0 3px 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      left: 0;
      padding-bottom: 2px;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: var(--dropdown-z-index, 2);
    }

    :host([position="above"]) .dropdown {
      border-radius: 3px 3px 0 0;
      bottom: 26px;
      padding-bottom: 0;
      padding-top: 2px;
      top: auto;
    }

    :host(:focus) .dropdown,
    :host([focused]) .dropdown {
      border-color: var(--vscode-focusBorder);
    }

    .options {
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      margin: 0;
      max-height: 222px;
      overflow: auto;
      padding: 1px;
    }

    .option {
      align-items: center;
      color: var(--vscode-foreground);
      cursor: pointer;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      padding: 1px 3px;
      user-select: none;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
    }

    .option b {
      color: var(--vscode-list-highlightForeground);
    }

    .option.active b {
      color: var(--vscode-list-focusHighlightForeground);
    }

    .option:hover {
      background-color: var(--vscode-list-hoverBackground);
      color: var(--vscode-list-hoverForeground);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option:hover,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option:hover {
      border-style: dotted;
      border-color: var(--vscode-list-focusOutline);
    }

    .option.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .option.active,
    .option.active:hover {
      background-color: var(--vscode-list-activeSelectionBackground);
      color: var(--vscode-list-activeSelectionForeground);
      border-color: var(--vscode-list-activeSelectionBackground);
      border-style: solid;
      border-width: 1px;
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option.active,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option.active:hover {
      border-color: var(--vscode-list-focusOutline);
      border-style: dashed;
    }

    .option-label {
      display: block;
      pointer-events: none;
      width: 100%;
    }

    .dropdown.multiple .option.selected {
      background-color: var(--vscode-list-hoverBackground);
      border-color:  var(--vscode-list-hoverBackground);
    }

    .dropdown.multiple .option.selected.active {
      background-color: var(--vscode-list-activeSelectionBackground);
      color: var(--vscode-list-activeSelectionForeground);
      border-color:  var(--vscode-list-activeSelectionBackground);
    }

    .checkbox-icon {
      background-color: var(--vscode-settings-checkboxBackground);
      border: 1px solid currentColor;
      border-radius: 2px;
      box-sizing: border-box;
      height: 14px;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      width: 14px;
    }

    .checkbox-icon.checked:before,
    .checkbox-icon.checked:after {
      content: '';
      display: block;
      height: 5px;
      position: absolute;
      transform: rotate(-45deg);
      width: 10px;
    }

    .checkbox-icon.checked:before {
      background-color: var(--vscode-foreground);
      left: 1px;
      top: 2.5px;
    }

    .checkbox-icon.checked:after {
      background-color: var(--vscode-settings-checkboxBackground);
      left: 1px;
      top: -0.5px;
    }

    .dropdown-controls {
      display: flex;
      justify-content: flex-end;
      padding: 4px;
    }

    .dropdown-controls :not(:last-child) {
      margin-right: 4px;
    }

    .action-icon {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground);
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      width: 24px;
    }

    .action-icon:focus {
      outline: none;
    }

    .action-icon:focus-visible {
      outline: 1px solid var(--vscode-focusBorder);
      outline-offset: -1px;
    }

    .description {
      border-color: var(--vscode-settings-dropdownBorder);
      border-style: solid;
      border-width: 1px 0 0;
      color: var(--vscode-foreground);
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 1.3;
      padding: 6px 4px;
      word-wrap:break-word;
    }

    :host([position="above"]) .description {
      border-width: 0 0 1px;
    }
  `];var jn=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let st=class extends G{set selectedIndexes(e){this._selectedIndexes=e}get selectedIndexes(){return this._selectedIndexes}set value(e){const n=e.map(o=>String(o));this._values=n,this._selectedIndexes.forEach(o=>{this._options[o].selected=!1}),this._selectedIndexes=[],n.forEach(o=>{this._valueOptionIndexMap[o]&&(this._selectedIndexes.push(this._valueOptionIndexMap[o]),this._options[this._valueOptionIndexMap[o]].selected=!0)}),this._setFormValue(),this._manageRequired()}get value(){return this._values}get form(){return this._internals.form}get type(){return"select-multiple"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.defaultValue=[],this.required=!1,this.name=void 0,this._multiple=!0,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setDefaultValue(),this._manageRequired()})}formResetCallback(){this.updateComplete.then(()=>{this.value=this.defaultValue})}formStateRestoreCallback(e,n){const o=Array.from(e.entries()).map(r=>String(r[1]));this.updateComplete.then(()=>{this.value=o})}_setDefaultValue(){if(Array.isArray(this.defaultValue)&&this.defaultValue.length>0){const e=this.defaultValue.map(n=>String(n));this.value=e}}_manageRequired(){const{value:e}=this;e.length===0&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._faceElement):this._internals.setValidity({})}_setFormValue(){const e=new FormData;this._values.forEach(n=>{e.append(this.name??"",n)}),this._internals.setFormValue(e)}_onOptionClick(e){const o=e.composedPath().find(i=>"matches"in i?i.matches("li.option"):!1);if(!o)return;const r=Number(o.dataset.index);this._options[r]&&(this._options[r].selected=!this._options[r].selected),this._selectedIndexes=[],this._values=[],this._options.forEach(i=>{i.selected&&(this._selectedIndexes.push(i.index),this._values.push(i.value))}),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()}_onMultiAcceptClick(){this._toggleDropdown(!1)}_onMultiDeselectAllClick(){this._selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!1})),this._manageRequired(),this._dispatchChangeEvent()}_onMultiSelectAllClick(){this._selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!0})),this._options.forEach((e,n)=>{this._selectedIndexes.push(n),this._values.push(e.value),this._dispatchChangeEvent()}),this._setFormValue(),this._manageRequired()}_renderLabel(){switch(this._selectedIndexes.length){case 0:return _`<span class="select-face-badge no-item"
          >No items selected</span
        >`;case 1:return _`<span class="select-face-badge">1 item selected</span>`;default:return _`<span class="select-face-badge"
          >${this._selectedIndexes.length} items selected</span
        >`}}_renderSelectFace(){return _`
      <div
        class="select-face face multiselect"
        @click="${this._onFaceClick}"
        tabindex="${this.tabIndex>-1?0:-1}"
      >
        ${this._renderLabel()} ${Ui}
      </div>
    `}_renderComboboxFace(){const e=this._selectedIndex>-1?this._options[this._selectedIndex].label:"";return _`
      <div class="combobox-face face">
        ${this._renderLabel()}
        <input
          class="combobox-input"
          spellcheck="false"
          type="text"
          .value="${e}"
          @focus="${this._onComboboxInputFocus}"
          @input="${this._onComboboxInputInput}"
          @click="${this._onComboboxInputClick}"
        />
        <button
          class="combobox-button"
          type="button"
          @click="${this._onComboboxButtonClick}"
          @keydown="${this._onComboboxButtonKeyDown}"
        >
          ${Ui}
        </button>
      </div>
    `}_renderOptions(){const e=this.combobox?this._filteredOptions:this._options;return _`
      <ul
        class="options"
        @click="${this._onOptionClick}"
        @mouseover="${this._onOptionMouseOver}"
      >
        ${jm(e,n=>n.index,(n,o)=>{var l;const r=this._selectedIndexes.includes(n.index),i=q({active:o===this._activeIndex,option:!0,selected:r}),s=q({"checkbox-icon":!0,checked:r});return _`
              <li
                class="${i}"
                data-index="${n.index}"
                data-filtered-index="${o}"
              >
                <span class="${s}"></span>
                <span class="option-label"
                  >${((l=n.ranges)==null?void 0:l.length)??!1?ip(n.label,n.ranges??[]):n.label}</span
                >
              </li>
            `})}
      </ul>
    `}_renderDropdownControls(){return _`
      <div class="dropdown-controls">
        <button
          type="button"
          @click="${this._onMultiSelectAllClick}"
          title="Select all"
          class="action-icon"
          id="select-all"
        >
          <vscode-icon name="checklist"></vscode-icon>
        </button>
        <button
          type="button"
          @click="${this._onMultiDeselectAllClick}"
          title="Deselect all"
          class="action-icon"
          id="select-none"
        >
          <vscode-icon name="clear-all"></vscode-icon>
        </button>
        <vscode-button
          class="button-accept"
          @click="${this._onMultiAcceptClick}"
          >OK</vscode-button
        >
      </div>
    `}};st.styles=sp;st.shadowRootOptions={...vt.shadowRootOptions,delegatesFocus:!0};st.formAssociated=!0;jn([p({type:Array,attribute:"default-value"})],st.prototype,"defaultValue",void 0);jn([p({type:Boolean,reflect:!0})],st.prototype,"required",void 0);jn([p({reflect:!0})],st.prototype,"name",void 0);jn([p({type:Array,attribute:!1})],st.prototype,"selectedIndexes",null);jn([p({type:Array})],st.prototype,"value",null);jn([Ne(".face")],st.prototype,"_faceElement",void 0);st=jn([V("vscode-multi-select")],st);const Ym=[M,N`
    :host {
      align-items: center;
      display: block;
      height: 28px;
      margin: 0;
      outline: none;
      width: 28px;
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke: transparent;
      stroke-width: 2px;
    }

    .indeterminate-indicator-1 {
      fill: none;
      stroke: var(--vscode-progressBar-background);
      stroke-width: 2px;
      stroke-linecap: square;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `];var ds=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ln=class extends j{constructor(){super(...arguments),this.ariaLabel="Loading",this.ariaLive="assertive",this.role="alert"}render(){return _`<svg class="progress" part="progress" viewBox="0 0 16 16">
      <circle
        class="background"
        part="background"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
      <circle
        class="indeterminate-indicator-1"
        part="indeterminate-indicator-1"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
    </svg>`}};Ln.styles=Ym;ds([p({reflect:!0,attribute:"aria-label"})],Ln.prototype,"ariaLabel",void 0);ds([p({reflect:!0,attribute:"aria-live"})],Ln.prototype,"ariaLive",void 0);ds([p({reflect:!0})],Ln.prototype,"role",void 0);Ln=ds([V("vscode-progress-ring")],Ln);const Gm=[M,tp,N`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 9px;
    }

    .icon.checked:before {
      background-color: currentColor;
      border-radius: 4px;
      content: '';
      height: 8px;
      left: 50%;
      margin: -4px 0 0 -4px;
      position: absolute;
      top: 50%;
      width: 8px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder);
      outline-offset: -1px;
    }
  `,as];var Xe=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ye=class extends ep(Wa){constructor(){super(),this.autofocus=!1,this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name="",this.value="",this.disabled=!1,this.required=!1,this.role="radio",this.tabIndex=0,this._slottedText="",this._handleClick=()=>{this.disabled||this.checked||(this._checkButton(),this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0})))},this._handleKeyDown=e=>{var n;!this.disabled&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key===" "&&!this.checked&&(this.checked=!0,this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0}))),e.key==="Enter"&&((n=this._internals.form)==null||n.requestSubmit()))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("click",this._handleClick),this._handleValueChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeyDown),this.removeEventListener("click",this._handleClick)}update(e){super.update(e),e.has("checked")&&this._handleValueChange(),e.has("required")&&this._handleValueChange()}get form(){return this._internals.form}get type(){return"radio"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._getRadios().forEach(n=>{n.checked=n.defaultChecked}),this.updateComplete.then(()=>{this._handleValueChange()})}formStateRestoreCallback(e,n){this.value===e&&e!==""&&(this.checked=!0)}_dispatchCustomEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_getRadios(){const e=this.getRootNode({composed:!0});if(!e)return[];const n=e.querySelectorAll(`vscode-radio[name="${this.name}"]`);return Array.from(n)}_uncheckOthers(e){e.forEach(n=>{n!==this&&(n.checked=!1)})}_checkButton(){const e=this._getRadios();this.checked=!0,e.forEach(n=>{n!==this&&(n.checked=!1)})}setComponentValidity(e){e?this._internals.setValidity({}):this._internals.setValidity({valueMissing:!0},"Please select one of these options.",this._inputEl)}_setGroupValidity(e,n){this.updateComplete.then(()=>{e.forEach(o=>{o.setComponentValidity(n)})})}_setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null,this._internals.setFormValue(e)}_handleValueChange(){const e=this._getRadios(),n=e.some(o=>o.required);if(this._setActualFormValue(),this.checked)this._uncheckOthers(e),this._setGroupValidity(e,!0);else{const o=!!e.find(i=>i.checked),r=n&&!o;this._setGroupValidity(e,!r)}}render(){const e=q({icon:!0,checked:this.checked}),n=q({"label-inner":!0,"is-slot-empty":this._slottedText===""});return _`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="radio"
          type="checkbox"
          ?checked="${this.checked}"
          value="${this.value}"
          tabindex=${this.tabIndex}
        />
        <div class="${e}"></div>
        <label for="input" class="label" @click="${this._handleClick}">
          <span class="${n}">
            ${this._renderLabelAttribute()}
            <slot @slotchange="${this._handleSlotChange}"></slot>
          </span>
        </label>
      </div>
    `}};ye.styles=Gm;ye.formAssociated=!0;ye.shadowRootOptions={...vt.shadowRootOptions,delegatesFocus:!0};Xe([p({type:Boolean,reflect:!0})],ye.prototype,"autofocus",void 0);Xe([p({type:Boolean,reflect:!0})],ye.prototype,"checked",void 0);Xe([p({type:Boolean,reflect:!0,attribute:"default-checked"})],ye.prototype,"defaultChecked",void 0);Xe([p({type:Boolean,reflect:!0})],ye.prototype,"invalid",void 0);Xe([p({reflect:!0})],ye.prototype,"name",void 0);Xe([p()],ye.prototype,"value",void 0);Xe([p({type:Boolean,reflect:!0})],ye.prototype,"disabled",void 0);Xe([p({type:Boolean,reflect:!0})],ye.prototype,"required",void 0);Xe([p({reflect:!0})],ye.prototype,"role",void 0);Xe([p({type:Number,reflect:!0})],ye.prototype,"tabIndex",void 0);Xe([R()],ye.prototype,"_slottedText",void 0);Xe([Ne("#input")],ye.prototype,"_inputEl",void 0);ye=Xe([V("vscode-radio")],ye);var jt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let He=class extends G{set selectedIndex(e){this._selectedIndex=e,this._value=this._options[this._selectedIndex]?this._options[this._selectedIndex].value:"",this._labelText=this._options[this._selectedIndex]?this._options[this._selectedIndex].label:""}get selectedIndex(){return this._selectedIndex}set value(e){this._options[this._selectedIndex]&&(this._options[this._selectedIndex].selected=!1),this._selectedIndex=this._options.findIndex(n=>n.value===e),this._selectedIndex>-1?(this._options[this._selectedIndex].selected=!0,this._labelText=this._options[this._selectedIndex].label,this._value=e):(this._labelText="",this._value="")}get value(){var e;return this._options[this._selectedIndex]?((e=this._options[this._selectedIndex])==null?void 0:e.value)??"":""}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}updateInputValue(){if(!this.combobox)return;const e=this.renderRoot.querySelector(".combobox-input");e&&(e.value=this._options[this._selectedIndex]?this._options[this._selectedIndex].label:"")}constructor(){super(),this.defaultValue="",this.role="listbox",this.name=void 0,this.required=!1,this._labelText="",this._multiple=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._manageRequired()})}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,n){this.updateComplete.then(()=>{this.value=e})}get type(){return"select-one"}get form(){return this._internals.form}_onSlotChange(){var e;super._onSlotChange(),this._selectedIndex>-1&&(this._labelText=((e=this._options[this._selectedIndex])==null?void 0:e.label)??""),this._selectedIndex>-1&&this._options.length>0?this._internals.setFormValue(this._options[this._selectedIndex].value):this._internals.setFormValue(null)}_onArrowUpKeyDown(){super._onArrowUpKeyDown(),!(this._showDropdown||this._selectedIndex<=0)&&(this._filterPattern="",this._selectedIndex-=1,this._activeIndex=this._selectedIndex,this._labelText=this._options[this._selectedIndex].label,this._value=this._options[this._selectedIndex].value,this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_onArrowDownKeyDown(){super._onArrowDownKeyDown(),!(this._showDropdown||this._selectedIndex>=this._options.length-1)&&(this._filterPattern="",this._selectedIndex+=1,this._activeIndex=this._selectedIndex,this._labelText=this._options[this._selectedIndex].label,this._value=this._options[this._selectedIndex].value,this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_onEnterKeyDown(){super._onEnterKeyDown(),this._selectedIndex>-1&&(this._labelText=this._options[this._selectedIndex].label),this.updateInputValue(),this._internals.setFormValue(this._value),this._manageRequired()}_onOptionClick(e){const o=e.composedPath().find(r=>r==null?void 0:r.matches("li.option"));!o||o.matches(".disabled")||(this._selectedIndex=Number(o.dataset.index),this._value=this._options[this._selectedIndex].value,this._selectedIndex>-1&&(this._labelText=this._options[this._selectedIndex].label),this._toggleDropdown(!1),this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_manageRequired(){const{value:e}=this;e===""&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._face):this._internals.setValidity({})}_renderLabel(){const e=this._labelText||_`<span class="empty-label-placeholder"></span>`;return _`<span class="text">${e}</span>`}_renderSelectFace(){return _`
      <div
        class="select-face face"
        @click="${this._onFaceClick}"
        tabindex="${this.tabIndex>-1?0:-1}"
      >
        ${this._renderLabel()} ${Ui}
      </div>
    `}_renderComboboxFace(){const e=this._selectedIndex>-1?this._options[this._selectedIndex].label:"";return _`
      <div class="combobox-face face">
        <input
          class="combobox-input"
          spellcheck="false"
          type="text"
          .value="${e}"
          @focus="${this._onComboboxInputFocus}"
          @input="${this._onComboboxInputInput}"
          @click=${this._onComboboxInputClick}
        />
        <button
          class="combobox-button"
          type="button"
          @click="${this._onComboboxButtonClick}"
          @keydown="${this._onComboboxButtonKeyDown}"
        >
          ${Ui}
        </button>
      </div>
    `}_renderOptions(){const n=(this.combobox?this._filteredOptions:this._options).map((o,r)=>{var s;const i=q({option:!0,active:r===this._activeIndex&&!o.disabled,disabled:o.disabled});return _`
        <li
          class="${i}"
          data-index="${o.index}"
          data-filtered-index="${r}"
        >
          ${((s=o.ranges)==null?void 0:s.length)??!1?ip(o.label,o.ranges??[]):o.label}
        </li>
      `});return _`
      <ul
        class="options"
        @mouseover="${this._onOptionMouseOver}"
        @click="${this._onOptionClick}"
      >
        ${n}
      </ul>
    `}};He.styles=sp;He.shadowRootOptions={...vt.shadowRootOptions,delegatesFocus:!0};He.formAssociated=!0;jt([p({attribute:"default-value"})],He.prototype,"defaultValue",void 0);jt([p({type:String,attribute:!0,reflect:!0})],He.prototype,"role",void 0);jt([p({reflect:!0})],He.prototype,"name",void 0);jt([p({type:Number,attribute:"selected-index"})],He.prototype,"selectedIndex",null);jt([p({type:String})],He.prototype,"value",null);jt([p({type:Boolean,reflect:!0})],He.prototype,"required",void 0);jt([R()],He.prototype,"_labelText",void 0);jt([Ne(".face")],He.prototype,"_face",void 0);He=jt([V("vscode-single-select")],He);const Xm=[M,N`
    :host {
      display: block;
      position: relative;
    }

    .scrollable-container {
      height: 100%;
      overflow: auto;
    }

    .scrollable-container::-webkit-scrollbar {
      cursor: default;
      width: 0;
    }

    .scrollable-container {
      scrollbar-width: none;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow) 0 6px 6px -6px inset;
      display: none;
      height: 3px;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    .scrollbar-track {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
      z-index: 100;
    }

    .scrollbar-track.hidden {
      display: none;
    }

    .scrollbar-thumb {
      background-color: transparent;
      min-height: var(--min-thumb-height, 20px);
      opacity: 0;
      position: absolute;
      right: 0;
      width: 10px;
    }

    .scrollbar-thumb.visible {
      background-color: var(--vscode-scrollbarSlider-background);
      opacity: 1;
      transition: opacity 100ms;
    }

    .scrollbar-thumb.fade {
      background-color: var(--vscode-scrollbarSlider-background);
      opacity: 0;
      transition: opacity 800ms;
    }

    .scrollbar-thumb.visible:hover {
      background-color: var(--vscode-scrollbarSlider-hoverBackground);
    }

    .scrollbar-thumb.visible.active,
    .scrollbar-thumb.visible.active:hover {
      background-color: var(--vscode-scrollbarSlider-activeBackground);
    }

    .prevent-interaction {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 99;
    }

    .content {
      overflow: hidden;
    }
  `];var Le=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let _e=class extends j{constructor(){super(...arguments),this.shadow=!0,this.scrolled=!1,this._isDragging=!1,this._thumbHeight=0,this._thumbY=0,this._thumbVisible=!1,this._thumbFade=!1,this._thumbActive=!1,this._scrollThumbStartY=0,this._mouseStartY=0,this._scrollbarVisible=!0,this._scrollbarTrackZ=0,this._resizeObserverCallback=()=>{this._updateScrollbar()},this._onScrollThumbMouseMoveBound=this._onScrollThumbMouseMove.bind(this),this._onScrollThumbMouseUpBound=this._onScrollThumbMouseUp.bind(this),this._onComponentMouseOverBound=this._onComponentMouseOver.bind(this),this._onComponentMouseOutBound=this._onComponentMouseOut.bind(this)}set scrollPos(e){this._scrollableContainer.scrollTop=e}get scrollPos(){return this._scrollableContainer?this._scrollableContainer.scrollTop:0}get scrollMax(){return this._scrollableContainer?this._scrollableContainer.scrollHeight:0}connectedCallback(){super.connectedCallback(),this._hostResizeObserver=new ResizeObserver(this._resizeObserverCallback),this._contentResizeObserver=new ResizeObserver(this._resizeObserverCallback),this.requestUpdate(),this.updateComplete.then(()=>{this._scrollableContainer.addEventListener("scroll",this._onScrollableContainerScroll.bind(this)),this._hostResizeObserver.observe(this),this._contentResizeObserver.observe(this._contentElement)}),this.addEventListener("mouseover",this._onComponentMouseOverBound),this.addEventListener("mouseout",this._onComponentMouseOutBound)}disconnectedCallback(){super.disconnectedCallback(),this._hostResizeObserver.unobserve(this),this._hostResizeObserver.disconnect(),this._contentResizeObserver.unobserve(this._contentElement),this._contentResizeObserver.disconnect(),this.removeEventListener("mouseover",this._onComponentMouseOverBound),this.removeEventListener("mouseout",this._onComponentMouseOutBound)}_updateScrollbar(){const e=this.getBoundingClientRect(),n=this._contentElement.getBoundingClientRect();e.height>=n.height?this._scrollbarVisible=!1:(this._scrollbarVisible=!0,this._thumbHeight=e.height*(e.height/n.height)),this.requestUpdate()}_zIndexFix(){let e=0;this._assignedElements.forEach(n=>{if("style"in n){const o=window.getComputedStyle(n).zIndex;/([0-9-])+/g.test(o)&&(e=Number(o)>e?Number(o):e)}}),this._scrollbarTrackZ=e+1,this.requestUpdate()}_onSlotChange(){this._zIndexFix()}_onScrollThumbMouseDown(e){const n=this.getBoundingClientRect(),o=this._scrollThumbElement.getBoundingClientRect();this._mouseStartY=e.screenY,this._scrollThumbStartY=o.top-n.top,this._isDragging=!0,this._thumbActive=!0,document.addEventListener("mousemove",this._onScrollThumbMouseMoveBound),document.addEventListener("mouseup",this._onScrollThumbMouseUpBound)}_onScrollThumbMouseMove(e){const n=this._scrollThumbStartY+(e.screenY-this._mouseStartY);let o=0;const r=this.getBoundingClientRect().height,i=this._scrollThumbElement.getBoundingClientRect().height,s=this._contentElement.getBoundingClientRect().height;n<0?o=0:n>r-i?o=r-i:o=n,this._thumbY=o,this._scrollableContainer.scrollTop=o/(r-i)*(s-r)}_onScrollThumbMouseUp(e){this._isDragging=!1,this._thumbActive=!1;const n=this.getBoundingClientRect(),{x:o,y:r,width:i,height:s}=n,{pageX:l,pageY:a}=e;(l>o+i||l<o||a>r+s||a<r)&&(this._thumbFade=!0,this._thumbVisible=!1),document.removeEventListener("mousemove",this._onScrollThumbMouseMoveBound),document.removeEventListener("mouseup",this._onScrollThumbMouseUpBound)}_onScrollableContainerScroll(){const e=this._scrollableContainer.scrollTop;this.scrolled=e>0;const n=this.getBoundingClientRect().height,o=this._scrollThumbElement.getBoundingClientRect().height,i=this._contentElement.getBoundingClientRect().height-n,s=e/i;this._thumbY=s*(n-o)}_onComponentMouseOver(){this._thumbVisible=!0,this._thumbFade=!1}_onComponentMouseOut(){this._thumbActive||(this._thumbVisible=!1,this._thumbFade=!0)}render(){return _`
      <div
        class="scrollable-container"
        style="${Ve({"user-select":this._isDragging?"none":"auto"})}"
      >
        <div class="${q({shadow:!0,visible:this.scrolled})}"></div>
        ${this._isDragging?_`<div class="prevent-interaction"></div>`:P}
        <div
          class="${q({"scrollbar-track":!0,hidden:!this._scrollbarVisible})}"
          style="${Ve({"z-index":String(this._scrollbarTrackZ)})}"
        >
          <div
            class="${q({"scrollbar-thumb":!0,visible:this._thumbVisible,fade:this._thumbFade,active:this._thumbActive})}"
            style="${Ve({height:`${this._thumbHeight}px`,top:`${this._thumbY}px`})}"
            @mousedown=${this._onScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange="${this._onSlotChange}"></slot>
        </div>
      </div>
    `}};_e.styles=Xm;Le([p({type:Boolean,reflect:!0})],_e.prototype,"shadow",void 0);Le([p({type:Boolean,reflect:!0})],_e.prototype,"scrolled",void 0);Le([p({type:Number,attribute:"scroll-pos"})],_e.prototype,"scrollPos",null);Le([p({type:Number,attribute:"scroll-max"})],_e.prototype,"scrollMax",null);Le([R()],_e.prototype,"_isDragging",void 0);Le([R()],_e.prototype,"_thumbHeight",void 0);Le([R()],_e.prototype,"_thumbY",void 0);Le([R()],_e.prototype,"_thumbVisible",void 0);Le([R()],_e.prototype,"_thumbFade",void 0);Le([R()],_e.prototype,"_thumbActive",void 0);Le([Ne(".content")],_e.prototype,"_contentElement",void 0);Le([Ne(".scrollbar-thumb")],_e.prototype,"_scrollThumbElement",void 0);Le([Ne(".scrollable-container")],_e.prototype,"_scrollableContainer",void 0);Le([Et()],_e.prototype,"_assignedElements",void 0);_e=Le([V("vscode-scrollable")],_e);const Zm=[M,N`
    :host {
      --separator-border: var(--vscode-editorWidget-border, transparent);

      border: 1px solid var(--vscode-editorWidget-border);
      display: block;
      overflow: hidden;
      position: relative;
    }

    ::slotted(*) {
      height: 100%;
      width: 100%;
    }

    ::slotted(vscode-split-layout) {
      border: 0;
    }

    .start {
      box-sizing: border-box;
      left: 0;
      top: 0;
      overflow: hidden;
      position: absolute;
    }

    :host([split='vertical']) .start {
      border-right: 1px solid var(--separator-border);
    }

    :host([split='horizontal']) .start {
      border-bottom: 1px solid var(--separator-border);
    }

    .end {
      bottom: 0;
      box-sizing: border-box;
      overflow: hidden;
      position: absolute;
      right: 0;
    }

    .handle-overlay {
      display: none;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .handle-overlay.active {
      display: block;
    }

    .handle-overlay.split-vertical {
      cursor: ew-resize;
    }

    .handle-overlay.split-horizontal {
      cursor: ns-resize;
    }

    .handle {
      position: absolute;
      z-index: 2;
    }

    .handle.hover {
      background-color: var(--vscode-sash-hoverBorder);
      transition: background-color 100ms linear 300ms;
    }

    .handle.hide {
      background-color: transparent;
      transition: background-color 100ms linear;
    }

    .handle.split-vertical {
      cursor: ew-resize;
      height: 100%;
    }

    .handle.split-horizontal {
      cursor: ns-resize;
      width: 100%;
    }
  `];var Re=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},Ml;let fe=Ml=class extends j{constructor(){super(...arguments),this.split="vertical",this.resetOnDblClick=!1,this.handleSize=4,this.initialHandlePosition="50%",this._startPaneRight=0,this._startPaneBottom=0,this._endPaneTop=0,this._endPaneLeft=0,this._handleLeft=0,this._handleTop=0,this._isDragActive=!1,this._hover=!1,this._hide=!1,this._boundRect=new DOMRect,this._handleOffset=0,this._handleMouseUp=()=>{this._isDragActive=!1,window.removeEventListener("mouseup",this._handleMouseUp),window.removeEventListener("mousemove",this._handleMouseMove)},this._handleMouseMove=e=>{const{clientX:n,clientY:o}=e,{left:r,top:i,height:s,width:l}=this._boundRect;if(this.split==="vertical"){const a=n-r,c=Math.max(0,Math.min(a-this._handleOffset,l)),m=Math.max(0,l-c),d=c/l*100,f=m/l*100;this._handleLeft=d,this._startPaneRight=f,this._endPaneLeft=this._handleLeft}if(this.split==="horizontal"){const a=o-i,c=Math.max(0,Math.min(a-this._handleOffset,s)),m=Math.max(0,s-c),d=c/s*100,f=m/s*100;this._handleTop=d,this._startPaneBottom=f,this._endPaneTop=this._handleTop}}}connectedCallback(){super.connectedCallback(),this._initPosition()}initializeResizeHandler(){this._initPosition()}_initPosition(){this._boundRect=this.getBoundingClientRect();const{height:e,width:n}=this._boundRect,o=this.split==="vertical"?n:e,r=/(^[0-9.]+)(%{0,1})$/.exec(this.initialHandlePosition);let i=0,s=0;r&&(s=parseFloat(r[1])),r&&r[2]==="%"?i=Math.min(o,o/100*s):r&&r[2]!=="%"?i=Math.min(s,o):i=o/2,this.split==="vertical"&&(this._startPaneRight=(o-i)/n*100,this._endPaneLeft=i/n*100,this._handleLeft=i/n*100),this.split==="horizontal"&&(this._startPaneBottom=(o-i)/e*100,this._endPaneTop=i/e*100,this._handleTop=i/e*100)}_handleMouseOver(){this._hover=!0,this._hide=!1}_handleMouseOut(e){e.buttons!==1&&(this._hover=!1,this._hide=!0)}_handleMouseDown(e){e.stopPropagation(),e.preventDefault(),this._boundRect=this.getBoundingClientRect();const{left:n,top:o,width:r,height:i}=this._boundRect,s=(e.clientX-n)/r*100,l=(e.clientY-o)/i*100;this.split==="vertical"&&(this._handleOffset=s-this._handleLeft),this.split==="horizontal"&&(this._handleOffset=l-this._handleTop),this._boundRect=this.getBoundingClientRect(),this._isDragActive=!0,window.addEventListener("mouseup",this._handleMouseUp),window.addEventListener("mousemove",this._handleMouseMove)}_handleDblClick(){this.resetOnDblClick&&this._initPosition()}_handleSlotChange(){[...this._nestedLayoutsAtStart,...this._nestedLayoutsAtEnd].forEach(n=>{n instanceof Ml&&n.initializeResizeHandler()})}render(){const e=Ve({bottom:`${this._startPaneBottom}%`,right:`${this._startPaneRight}%`}),n=Ve({left:`${this._endPaneLeft}%`,top:`${this._endPaneTop}%`}),o={left:`${this._handleLeft}%`,top:`${this._handleTop}%`};this.split==="vertical"&&(o.marginLeft=`${0-this.handleSize/2}px`,o.width=`${this.handleSize}px`),this.split==="horizontal"&&(o.height=`${this.handleSize}px`,o.marginTop=`${0-this.handleSize/2}px`);const r=Ve(o),i=q({"handle-overlay":!0,active:this._isDragActive,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),s=q({handle:!0,hover:this._hover,hide:this._hide,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"});return _`
      <div class="start" style="${e}">
        <slot name="start" @slotchange=${this._handleSlotChange}></slot>
      </div>
      <div class="end" style="${n}">
        <slot name="end" @slotchange=${this._handleSlotChange}></slot>
      </div>
      <div class="${i}"></div>
      <div
        class="${s}"
        style="${r}"
        @mouseover="${this._handleMouseOver}"
        @mouseout="${this._handleMouseOut}"
        @mousedown="${this._handleMouseDown}"
        @dblclick="${this._handleDblClick}"
      ></div>
    `}};fe.styles=Zm;Re([p({reflect:!0})],fe.prototype,"split",void 0);Re([p({type:Boolean,reflect:!0,attribute:"reset-on-dbl-click"})],fe.prototype,"resetOnDblClick",void 0);Re([p({type:Number,reflect:!0,attribute:"handle-size"})],fe.prototype,"handleSize",void 0);Re([p({reflect:!0,attribute:"initial-handle-position"})],fe.prototype,"initialHandlePosition",void 0);Re([R()],fe.prototype,"_startPaneRight",void 0);Re([R()],fe.prototype,"_startPaneBottom",void 0);Re([R()],fe.prototype,"_endPaneTop",void 0);Re([R()],fe.prototype,"_endPaneLeft",void 0);Re([R()],fe.prototype,"_handleLeft",void 0);Re([R()],fe.prototype,"_handleTop",void 0);Re([R()],fe.prototype,"_isDragActive",void 0);Re([R()],fe.prototype,"_hover",void 0);Re([R()],fe.prototype,"_hide",void 0);Re([Et({slot:"start",selector:"vscode-split-layout"})],fe.prototype,"_nestedLayoutsAtStart",void 0);Re([Et({slot:"end",selector:"vscode-split-layout"})],fe.prototype,"_nestedLayoutsAtEnd",void 0);fe=Ml=Re([V("vscode-split-layout")],fe);const Jm=[M,N`
    :host {
      border-bottom: 1px solid transparent;
      cursor: pointer;
      display: block;
      margin-bottom: -1px;
      overflow: hidden;
      padding: 7px 8px;
      text-overflow: ellipsis;
      user-select: none;
      white-space: nowrap;
    }

    :host([active]) {
      border-bottom-color: var(--vscode-panelTitle-activeForeground);
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) {
      border-bottom: 0;
      margin-bottom: 0;
      padding: 0;
    }

    :host(:focus-visible) {
      outline: none;
    }

    .wrapper {
      align-items: center;
      color: var(--vscode-foreground);
      display: flex;
      min-height: 20px;
      overflow: inherit;
      text-overflow: inherit;
      position: relative;
    }

    .wrapper.panel {
      color: var(--vscode-panelTitle-inactiveForeground);
    }

    .wrapper.panel.active,
    .wrapper.panel:hover {
      color: var(--vscode-panelTitle-inactiveForeground);
    }

    :host([panel]) .wrapper {
      display: flex;
      font-size: 11px;
      height: 31px;
      padding: 2px 10px;
      text-transform: uppercase;
    }

    .main {
      overflow: inherit;
      text-overflow: inherit;
    }

    .active-indicator {
      display: none;
    }

    .active-indicator.panel.active {
      border-top: 1px solid var(--vscode-panelTitle-activeBorder);
      bottom: 4px;
      display: block;
      left: 8px;
      pointer-events: none;
      position: absolute;
      right: 8px;
    }

    :host(:focus-visible) .wrapper {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host(:focus-visible) .wrapper.panel {
      outline-offset: -2px;
    }

    slot[name='content-before']::slotted(vscode-badge) {
      margin-right: 8px;
    }

    slot[name='content-after']::slotted(vscode-badge) {
      margin-left: 8px;
    }
  `];var Co=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let nt=class extends j{constructor(){super(...arguments),this.active=!1,this.ariaControls="",this.panel=!1,this.role="tab",this.tabId=-1}attributeChangedCallback(e,n,o){if(super.attributeChangedCallback(e,n,o),e==="active"){const r=o!==null;this.ariaSelected=r?"true":"false",this.tabIndex=r?0:-1}}render(){return _`
      <div
        class=${q({wrapper:!0,active:this.active,panel:this.panel})}
      >
        <div class="before"><slot name="content-before"></slot></div>
        <div class="main"><slot></slot></div>
        <div class="after"><slot name="content-after"></slot></div>
        <span
          class=${q({"active-indicator":!0,active:this.active,panel:this.panel})}
        ></span>
      </div>
    `}};nt.styles=Jm;Co([p({type:Boolean,reflect:!0})],nt.prototype,"active",void 0);Co([p({reflect:!0,attribute:"aria-controls"})],nt.prototype,"ariaControls",void 0);Co([p({type:Boolean,reflect:!0})],nt.prototype,"panel",void 0);Co([p({reflect:!0})],nt.prototype,"role",void 0);Co([p({type:Number,reflect:!0,attribute:"tab-id"})],nt.prototype,"tabId",void 0);nt=Co([V("vscode-tab-header")],nt);const eg=[M,N`
    :host {
      display: block;
      overflow: hidden;
    }

    :host(:focus-visible) {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host([panel]) {
      background-color: var(--vscode-panel-background);
    }
  `];var So=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let St=class extends j{constructor(){super(...arguments),this.hidden=!1,this.ariaLabelledby="",this.panel=!1,this.role="tabpanel",this.tabIndex=0}render(){return _` <slot></slot> `}};St.styles=eg;So([p({type:Boolean,reflect:!0})],St.prototype,"hidden",void 0);So([p({reflect:!0,attribute:"aria-labelledby"})],St.prototype,"ariaLabelledby",void 0);So([p({type:Boolean,reflect:!0})],St.prototype,"panel",void 0);So([p({reflect:!0})],St.prototype,"role",void 0);So([p({type:Number,reflect:!0})],St.prototype,"tabIndex",void 0);St=So([V("vscode-tab-panel")],St);const tg=[M,N`
    :host {
      display: table;
      table-layout: fixed;
      width: 100%;
    }


      ::slotted(vscode-table-row:nth-child(even)) {
      background-color: var(--vsc-row-even-background);
    }

    ::slotted(vscode-table-row:nth-child(odd)) {
      background-color: var(--vsc-row-odd-background);
    }
  `];var lp=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Er=class extends j{constructor(){super(...arguments),this.role="rowgroup"}render(){return _` <slot></slot> `}};Er.styles=tg;lp([p({reflect:!0})],Er.prototype,"role",void 0);Er=lp([V("vscode-table-body")],Er);const ng=[M,N`
    :host {
      border-bottom-color: var(--vscode-editorGroup-border);
      border-bottom-style: solid;
      border-bottom-width: var(--vsc-row-border-bottom-width);
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      height: 24px;
      overflow: hidden;
      padding-left: 10px;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;
    }

    :host([compact]) {
      display: block;
      height: auto;
      padding-bottom: 5px;
      width: 100% !important;
    }

    :host([compact]:first-child) {
      padding-top: 10px;
    }

    :host([compact]:last-child) {
      padding-bottom: 10px;
    }

    .wrapper {
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }

    .column-label {
      font-weight: bold;
    }
  `];var hs=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Bn=class extends j{constructor(){super(...arguments),this.role="cell",this.columnLabel="",this.compact=!1}render(){const e=this.columnLabel?_`<div class="column-label" role="presentation">
          ${this.columnLabel}
        </div>`:P;return _`
      <div class="wrapper">
        ${e}
        <slot></slot>
      </div>
    `}};Bn.styles=ng;hs([p({reflect:!0})],Bn.prototype,"role",void 0);hs([p({attribute:"column-label"})],Bn.prototype,"columnLabel",void 0);hs([p({type:Boolean,reflect:!0})],Bn.prototype,"compact",void 0);Bn=hs([V("vscode-table-cell")],Bn);const og=[M,N`
    :host {
      background-color: var(--vscode-keybindingTable-headerBackground);
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  `];var ap=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let $r=class extends j{constructor(){super(...arguments),this.role="rowgroup"}render(){return _` <slot></slot> `}};$r.styles=og;ap([p({reflect:!0})],$r.prototype,"role",void 0);$r=ap([V("vscode-table-header")],$r);const rg=[M,N`
    :host {
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: bold;
      line-height: 20px;
      overflow: hidden;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 0;
      padding-top: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .wrapper {
      box-sizing: inherit;
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }
  `];var cp=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ir=class extends j{constructor(){super(...arguments),this.role="columnheader"}render(){return _`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Ir.styles=rg;cp([p({reflect:!0})],Ir.prototype,"role",void 0);Ir=cp([V("vscode-table-header-cell")],Ir);const ig=[M,N`
    :host {
      border-top-color: var(--vscode-editorGroup-border);
      border-top-style: solid;
      border-top-width: var(--vsc-row-border-top-width);
      display: var(--vsc-row-display);
      width: 100%;
    }
  `];var up=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Pr=class extends j{constructor(){super(...arguments),this.role="row"}render(){return _` <slot></slot> `}};Pr.styles=ig;up([p({reflect:!0})],Pr.prototype,"role",void 0);Pr=up([V("vscode-table-row")],Pr);const wu=(t,e)=>typeof t=="number"&&!Number.isNaN(t)?t/e*100:typeof t=="string"&&/^[0-9.]+$/.test(t)?Number(t)/e*100:typeof t=="string"&&/^[0-9.]+%$/.test(t)?Number(t.substring(0,t.length-1)):typeof t=="string"&&/^[0-9.]+px$/.test(t)?Number(t.substring(0,t.length-2))/e*100:null,sg=[M,N`
    :host {
      display: block;
      --vsc-row-even-background: transparent;
      --vsc-row-odd-background: transparent;
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 0;
      --vsc-row-display: table-row;
    }

    :host([bordered]),
    :host([bordered-rows]) {
      --vsc-row-border-bottom-width: 1px;
    }

    :host([compact]) {
      --vsc-row-display: block;
    }

    :host([bordered][compact]),
    :host([bordered-rows][compact]) {
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 1px;
    }

    :host([zebra]) {
      --vsc-row-even-background: var(--vscode-keybindingTable-rowsBackground);
    }

    :host([zebra-odd]) {
      --vsc-row-odd-background: var(--vscode-keybindingTable-rowsBackground);
    }

    ::slotted(vscode-table-row) {
      width: 100%;
    }

    .wrapper {
      height: 100%;
      max-width: 100%;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .wrapper.select-disabled {
      user-select: none;
    }

    .wrapper.resize-cursor {
      cursor: ew-resize;
    }

    .wrapper.compact-view .header-slot-wrapper {
      height: 0;
      overflow: hidden;
    }

    .scrollable {
      height: 100%;
    }

    .scrollable:before {
      background-color: transparent;
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
    }

    .wrapper:not(.compact-view) .scrollable:not([scrolled]):before {
      background-color: var(--vscode-editorGroup-border);
    }

    .sash {
      visibility: hidden;
    }

    :host([bordered-columns]) .sash,
    :host([bordered]) .sash {
      visibility: visible;
    }

    :host([resizable]) .wrapper:hover .sash {
      visibility: visible;
    }

    .sash {
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
    }

    .wrapper.compact-view .sash {
      display: none;
    }

    .sash.resizable {
      cursor: ew-resize;
    }

    .sash-visible {
      background-color: var(--vscode-editorGroup-border);
      height: 100%;
      position: absolute;
      top: 30px;
      width: 1px;
    }

    .sash.hover .sash-visible {
      background-color: var(--vscode-sash-hoverBorder);
      transition: background-color 50ms linear 300ms;
    }

    .sash .sash-clickable {
      background-color: transparent;
      height: 100%;
      left: -2px;
      position: absolute;
      width: 5px;
    }
  `];var Ce=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const ku=100;let de=class extends j{constructor(){super(...arguments),this.role="table",this.resizable=!1,this.responsive=!1,this.breakpoint=300,this.minColumnWidth="50px",this.delayedResizing=!1,this.compact=!1,this._sashPositions=[],this._isDragging=!1,this._sashHovers=[],this._columns=[],this._activeSashElementIndex=-1,this._activeSashCursorOffset=0,this._componentX=0,this._componentH=0,this._componentW=0,this._headerCells=[],this._cellsOfFirstRow=[],this._prevHeaderHeight=0,this._prevComponentHeight=0,this._componentResizeObserverCallback=()=>{this._memoizeComponentDimensions(),this._updateResizeHandlersSize(),this.responsive&&this._toggleCompactView()},this._headerResizeObserverCallback=()=>{this._updateResizeHandlersSize()},this._bodyResizeObserverCallback=()=>{let e=0,n=0;const o=this.getBoundingClientRect().height;this._assignedHeaderElements&&this._assignedHeaderElements.length&&(e=this._assignedHeaderElements[0].getBoundingClientRect().height),this._assignedBodyElements&&this._assignedBodyElements.length&&(n=this._assignedBodyElements[0].getBoundingClientRect().height);const r=n-e-o;this._scrollableElement.style.height=r>0?`${o-e}px`:"auto"},this._onResizingMouseMove=e=>{e.stopPropagation(),this._updateActiveSashPosition(e.pageX),this.delayedResizing?this._resizeColumns(!1):this._resizeColumns(!0)},this._onResizingMouseUp=e=>{this._resizeColumns(!0),this._updateActiveSashPosition(e.pageX),this._sashHovers[this._activeSashElementIndex]=!1,this._isDragging=!1,this._activeSashElementIndex=-1,document.removeEventListener("mousemove",this._onResizingMouseMove),document.removeEventListener("mouseup",this._onResizingMouseUp)}}set columns(e){this._columns=e,this.isConnected&&this._initDefaultColumnSizes()}get columns(){return this._columns}connectedCallback(){super.connectedCallback(),this._memoizeComponentDimensions(),this._initDefaultColumnSizes()}disconnectedCallback(){var e;super.disconnectedCallback(),this._componentResizeObserver.unobserve(this),this._componentResizeObserver.disconnect(),(e=this._bodyResizeObserver)==null||e.disconnect()}_px2Percent(e){return e/this._componentW*100}_percent2Px(e){return this._componentW*e/100}_memoizeComponentDimensions(){const e=this.getBoundingClientRect();this._componentH=e.height,this._componentW=e.width,this._componentX=e.x}_queryHeaderCells(){const e=this._assignedHeaderElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-header-cell")):[]}_getHeaderCells(){return this._headerCells.length||(this._headerCells=this._queryHeaderCells()),this._headerCells}_queryCellsOfFirstRow(){const e=this._assignedBodyElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-row:first-child vscode-table-cell")):[]}_getCellsOfFirstRow(){return this._cellsOfFirstRow.length||(this._cellsOfFirstRow=this._queryCellsOfFirstRow()),this._cellsOfFirstRow}_initResizeObserver(){this._componentResizeObserver=new ResizeObserver(this._componentResizeObserverCallback),this._componentResizeObserver.observe(this),this._headerResizeObserver=new ResizeObserver(this._headerResizeObserverCallback),this._headerResizeObserver.observe(this._headerElement)}_calcColWidthPercentages(){const e=this._getHeaderCells().length;let n=this.columns.slice(0,e);const o=n.filter(i=>i==="auto").length+e-n.length;let r=100;if(n=n.map(i=>{const s=wu(i,this._componentW);return s===null?"auto":(r-=s,s)}),n.length<e)for(let i=n.length;i<e;i++)n.push("auto");return n=n.map(i=>i==="auto"?r/o:i),n}_initHeaderCellSizes(e){this._getHeaderCells().forEach((n,o)=>{n.style.width=`${e[o]}%`})}_initBodyColumnSizes(e){this._getCellsOfFirstRow().forEach((n,o)=>{n.style.width=`${e[o]}%`})}_initSashes(e){const n=e.length;let o=0;this._sashPositions=[],e.forEach((r,i)=>{if(i<n-1){const s=o+r;this._sashPositions.push(s),o=s}})}_initDefaultColumnSizes(){const e=this._calcColWidthPercentages();this._initHeaderCellSizes(e),this._initBodyColumnSizes(e),this._initSashes(e)}_updateResizeHandlersSize(){const e=this._headerElement.getBoundingClientRect();if(e.height===this._prevHeaderHeight&&this._componentH===this._prevComponentHeight)return;this._prevHeaderHeight=e.height,this._prevComponentHeight=this._componentH;const n=this._componentH-e.height;this._sashVisibleElements.forEach(o=>{o.style.height=`${n}px`,o.style.top=`${e.height}px`})}_applyCompactViewColumnLabels(){const n=this._getHeaderCells().map(r=>r.innerText);this.querySelectorAll("vscode-table-row").forEach(r=>{r.querySelectorAll("vscode-table-cell").forEach((s,l)=>{s.columnLabel=n[l],s.compact=!0})})}_clearCompactViewColumnLabels(){this.querySelectorAll("vscode-table-cell").forEach(e=>{e.columnLabel="",e.compact=!1})}_toggleCompactView(){const n=this.getBoundingClientRect().width<this.breakpoint;this.compact!==n&&(this.compact=n,n?this._applyCompactViewColumnLabels():this._clearCompactViewColumnLabels())}_onHeaderSlotChange(){this._headerCells=this._queryHeaderCells()}_onBodySlotChange(){if(this._initDefaultColumnSizes(),this._initResizeObserver(),this._updateResizeHandlersSize(),!this._bodyResizeObserver){const e=this._assignedBodyElements[0]??null;e&&(this._bodyResizeObserver=new ResizeObserver(this._bodyResizeObserverCallback),this._bodyResizeObserver.observe(e))}}_onSashMouseOver(e){if(this._isDragging)return;const n=e.currentTarget,o=Number(n.dataset.index);this._sashHovers[o]=!0,this.requestUpdate()}_onSashMouseOut(e){if(e.stopPropagation(),this._isDragging)return;const n=e.currentTarget,o=Number(n.dataset.index);this._sashHovers[o]=!1,this.requestUpdate()}_onSashMouseDown(e){e.stopPropagation();const{pageX:n,currentTarget:o}=e,r=o,i=Number(r.dataset.index),l=r.getBoundingClientRect().x;this._isDragging=!0,this._activeSashElementIndex=i,this._sashHovers[this._activeSashElementIndex]=!0,this._activeSashCursorOffset=this._px2Percent(n-l);const a=this._getHeaderCells();this._headerCellsToResize=[],this._headerCellsToResize.push(a[i]),a[i+1]&&(this._headerCellsToResize[1]=a[i+1]);const m=this._bodySlot.assignedElements()[0].querySelectorAll("vscode-table-row:first-child > vscode-table-cell");this._cellsToResize=[],this._cellsToResize.push(m[i]),m[i+1]&&this._cellsToResize.push(m[i+1]),document.addEventListener("mousemove",this._onResizingMouseMove),document.addEventListener("mouseup",this._onResizingMouseUp)}_updateActiveSashPosition(e){const{prevSashPos:n,nextSashPos:o}=this._getSashPositions();let r=wu(this.minColumnWidth,this._componentW);r===null&&(r=0);const i=n?n+r:r,s=o?o-r:ku-r;let l=this._px2Percent(e-this._componentX-this._percent2Px(this._activeSashCursorOffset));l=Math.max(l,i),l=Math.min(l,s),this._sashPositions[this._activeSashElementIndex]=l,this.requestUpdate()}_getSashPositions(){const e=this._sashPositions[this._activeSashElementIndex],n=this._sashPositions[this._activeSashElementIndex-1]||0,o=this._sashPositions[this._activeSashElementIndex+1]||ku;return{sashPos:e,prevSashPos:n,nextSashPos:o}}_resizeColumns(e=!0){const{sashPos:n,prevSashPos:o,nextSashPos:r}=this._getSashPositions(),i=n-o,s=r-n,l=`${i}%`,a=`${s}%`;this._headerCellsToResize[0].style.width=l,this._headerCellsToResize[1]&&(this._headerCellsToResize[1].style.width=a),e&&(this._cellsToResize[0].style.width=l,this._cellsToResize[1]&&(this._cellsToResize[1].style.width=a))}render(){const e=this._sashPositions.map((o,r)=>{const i=q({sash:!0,hover:this._sashHovers[r],resizable:this.resizable}),s=`${o}%`;return this.resizable?_`
            <div
              class="${i}"
              data-index="${r}"
              style="${Ve({left:s})}"
              @mousedown="${this._onSashMouseDown}"
              @mouseover="${this._onSashMouseOver}"
              @mouseout="${this._onSashMouseOut}"
            >
              <div class="sash-visible"></div>
              <div class="sash-clickable"></div>
            </div>
          `:_`<div
            class="${i}"
            data-index="${r}"
            style="${Ve({left:s})}"
          >
            <div class="sash-visible"></div>
          </div>`}),n=q({wrapper:!0,"select-disabled":this._isDragging,"resize-cursor":this._isDragging,"compact-view":this.compact});return _`
      <div class="${n}">
        <div class="header" @slotchange="${this._onHeaderSlotChange}">
          <slot name="caption"></slot>
          <div class="header-slot-wrapper">
            <slot name="header"></slot>
          </div>
        </div>
        <vscode-scrollable class="scrollable">
          <div>
            <slot name="body" @slotchange="${this._onBodySlotChange}"></slot>
          </div>
        </vscode-scrollable>
        ${e}
      </div>
    `}};de.styles=sg;Ce([p({reflect:!0})],de.prototype,"role",void 0);Ce([p({type:Boolean,reflect:!0})],de.prototype,"resizable",void 0);Ce([p({type:Boolean,reflect:!0})],de.prototype,"responsive",void 0);Ce([p({type:Number})],de.prototype,"breakpoint",void 0);Ce([p({type:Array})],de.prototype,"columns",null);Ce([p({attribute:"min-column-width"})],de.prototype,"minColumnWidth",void 0);Ce([p({type:Boolean,reflect:!0,attribute:"delayed-resizing"})],de.prototype,"delayedResizing",void 0);Ce([p({type:Boolean,reflect:!0})],de.prototype,"compact",void 0);Ce([Ne('slot[name="body"]')],de.prototype,"_bodySlot",void 0);Ce([Ne(".header")],de.prototype,"_headerElement",void 0);Ce([Ne(".scrollable")],de.prototype,"_scrollableElement",void 0);Ce([am(".sash-visible")],de.prototype,"_sashVisibleElements",void 0);Ce([Et({slot:"header",flatten:!0,selector:"vscode-table-header"})],de.prototype,"_assignedHeaderElements",void 0);Ce([Et({slot:"body",flatten:!0,selector:"vscode-table-body"})],de.prototype,"_assignedBodyElements",void 0);Ce([R()],de.prototype,"_sashPositions",void 0);Ce([R()],de.prototype,"_isDragging",void 0);de=Ce([V("vscode-table")],de);const lg=[M,N`
    :host {
      display: block;
    }

    .header {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      width: 100%;
    }

    .header {
      border-bottom-color: var(--vscode-settings-headerBorder);
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    .header.panel {
      background-color: var(--vscode-panel-background);
      border-bottom-width: 0;
      box-sizing: border-box;
      padding-left: 8px;
      padding-right: 8px;
    }

    slot[name='addons'] {
      display: block;
      margin-left: auto;
    }
  `];var Eo=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Mt=class extends j{constructor(){super(),this.panel=!1,this.role="tablist",this.selectedIndex=0,this._tabHeaders=[],this._tabPanels=[],this._componentId="",this._tabFocus=0,this._componentId=rp()}attributeChangedCallback(e,n,o){super.attributeChangedCallback(e,n,o),e==="selected-index"&&this._setActiveTab(),e==="panel"&&(this._tabHeaders.forEach(r=>r.panel=o!==null),this._tabPanels.forEach(r=>r.panel=o!==null))}_dispatchSelectEvent(){this.dispatchEvent(new CustomEvent("vsc-select",{detail:{selectedIndex:this.selectedIndex},composed:!0})),this.dispatchEvent(new CustomEvent("vsc-tabs-select",{detail:{selectedIndex:this.selectedIndex},composed:!0}))}_setActiveTab(){this._tabFocus=this.selectedIndex,this._tabPanels.forEach((e,n)=>{e.hidden=n!==this.selectedIndex}),this._tabHeaders.forEach((e,n)=>{e.active=n===this.selectedIndex})}_focusPrevTab(){this._tabFocus===0?this._tabFocus=this._tabHeaders.length-1:this._tabFocus-=1}_focusNextTab(){this._tabFocus===this._tabHeaders.length-1?this._tabFocus=0:this._tabFocus+=1}_onHeaderKeyDown(e){(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","-1"),e.key==="ArrowLeft"?this._focusPrevTab():e.key==="ArrowRight"&&this._focusNextTab(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","0"),this._tabHeaders[this._tabFocus].focus()),e.key==="Enter"&&(e.preventDefault(),this.selectedIndex=this._tabFocus,this._dispatchSelectEvent())}_moveHeadersToHeaderSlot(){const e=this._mainSlotElements.filter(n=>n instanceof nt);e.length>0&&e.forEach(n=>n.setAttribute("slot","header"))}_onMainSlotChange(){this._moveHeadersToHeaderSlot(),this._tabPanels=this._mainSlotElements.filter(e=>e instanceof St),this._tabPanels.forEach((e,n)=>{e.ariaLabelledby=`t${this._componentId}-h${n}`,e.id=`t${this._componentId}-p${n}`,e.panel=this.panel}),this._setActiveTab()}_onHeaderSlotChange(){this._tabHeaders=this._headerSlotElements.filter(e=>e instanceof nt),this._tabHeaders.forEach((e,n)=>{e.tabId=n,e.id=`t${this._componentId}-h${n}`,e.ariaControls=`t${this._componentId}-p${n}`,e.panel=this.panel,e.active=n===this.selectedIndex})}_onHeaderClick(e){const o=e.composedPath().find(r=>r instanceof nt);o&&(this.selectedIndex=o.tabId,this._setActiveTab(),this._dispatchSelectEvent())}render(){return _`
      <div
        class=${q({header:!0,panel:this.panel})}
        @click="${this._onHeaderClick}"
        @keydown=${this._onHeaderKeyDown}
      >
        <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        <slot name="addons"></slot>
      </div>
      <slot @slotchange=${this._onMainSlotChange}></slot>
    `}};Mt.styles=lg;Eo([p({type:Boolean,reflect:!0})],Mt.prototype,"panel",void 0);Eo([p({reflect:!0})],Mt.prototype,"role",void 0);Eo([p({type:Number,reflect:!0,attribute:"selected-index"})],Mt.prototype,"selectedIndex",void 0);Eo([Et({slot:"header"})],Mt.prototype,"_headerSlotElements",void 0);Eo([Et()],Mt.prototype,"_mainSlotElements",void 0);Mt=Eo([V("vscode-tabs")],Mt);const ag=[M,N`
    :host {
      --hover-outline-color: transparent;
      --hover-outline-style: solid;
      --hover-outline-width: 0;
      --selected-outline-color: transparent;
      --selected-outline-style: solid;
      --selected-outline-width: 0;

      display: block;
      outline: none;
      user-select: none;
    }

    .wrapper {
      height: 100%;
    }

    li {
      list-style: none;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
    }

    ul {
      position: relative;
    }

    :host([indent-guides]) ul ul:before {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: var(--indent-guide-pos);
      top: 0;
      pointer-events: none;
      width: 1px;
      z-index: 1;
    }

    .contents {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      outline-offset: -1px;
      padding-right: 12px;
    }

    .multi .contents {
      align-items: flex-start;
    }

    .contents:hover {
      cursor: pointer;
    }

    .arrow-container {
      align-items: center;
      display: flex;
      height: 22px;
      justify-content: center;
      padding-left: 8px;
      padding-right: 6px;
      width: 16px;
    }

    .icon-arrow {
      color: currentColor;
      display: block;
    }

    .theme-icon {
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
    }

    .image-icon {
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 16px;
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
      height: 22px;
      width: 16px;
    }

    .multi .contents .theme-icon {
      margin-top: 3px;
    }

    .text-content {
      display: flex;
      line-height: 22px;
    }

    .single .text-content {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .description {
      font-size: 0.9em;
      line-height: 22px;
      margin-left: 0.5em;
      opacity: 0.95;
      white-space: pre;
    }

    .actions {
      display: none;
    }

    .contents.selected > .actions,
    .contents.focused > .actions,
    .contents:hover > .actions {
      display: flex;
    }

    .decorations {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: 5px;
    }

    .filled-circle {
      margin-right: 3px;
      opacity: 0.4;
    }

    .decoration-text {
      font-size: 90%;
      font-weight: 600;
      margin-right: 3px;
      opacity: 0.75;
    }

    .filled-circle,
    .decoration-text {
      color: var(--color, currentColor);
    }

    .contents:hover .filled-circle,
    .contents:hover .decoration-text {
      color: var(--hover-color, var(--color));
    }

    .contents.focused .filled-circle,
    .contents.focused .decoration-text {
      color: var(--focused-color, var(--color));
    }

    .contents.selected .filled-circle,
    .contents.selected .decoration-text {
      color: var(--selected-color, var(--color));
    }

    /* Theme colors */
    :host(:focus) .wrapper.has-not-focused-item {
      outline: 1px solid var(--vscode-focusBorder);
    }

    :host(:focus) .contents.selected,
    :host(:focus) .contents.focused.selected {
      color: var(--vscode-list-activeSelectionForeground);
      background-color: var(--vscode-list-activeSelectionBackground);
    }

    :host(:focus) .contents.selected .icon-arrow,
    :host(:focus) .contents.selected.focused .icon-arrow,
    :host(:focus) .contents.selected .theme-icon,
    :host(:focus) .contents.selected.focused .theme-icon,
    :host(:focus) .contents.selected .action-icon,
    :host(:focus) .contents.selected.focused .action-icon {
      color: var(--vscode-list-activeSelectionIconForeground);
    }

    :host(:focus) .contents.focused {
      color: var(--vscode-list-focusForeground);
      background-color: var(--vscode-list-focusBackground);
    }

    :host(:focus) .contents.selected.focused {
      outline-color: var(--vscode-list-focusAndSelectionOutline, var(--vscode-list-focusOutline));
    }

    .contents:hover {
      background-color: var(--vscode-list-hoverBackground);
      color: var(--vscode-list-hoverForeground);
    }

    .contents:hover,
    .contents.selected:hover {
      outline-color: var(--hover-outline-color);
      outline-style: var(--hover-outline-style);
      outline-width: var(--hover-outline-width);
    }

    .contents.selected,
    .contents.selected.focused {
      background-color: var(--vscode-list-inactiveSelectionBackground);
      color: var(--vscode-list-inactiveSelectionForeground);
    }

    .contents.selected,
    .contents.selected.focused {
      outline-color: var(--selected-outline-color);
      outline-style: var(--selected-outline-style);
      outline-width: var(--selected-outline-width);
    }

    .contents.selected .theme-icon {
      color: var(--vscode-list-inactiveSelectionIconForeground);
    }

    .contents.focused {
      background-color: var(--vscode-list-inactiveFocusBackground);
      outline: 1px dotted var(--vscode-list-inactiveFocusOutline);
    }

    :host(:focus) .contents.focused {
      outline: 1px solid var(--vscode-list-focusOutline);
    }

    :host([indent-guides]) ul ul:before {
      background-color: var(--vscode-tree-inactiveIndentGuidesStroke);
    }

    :host([indent-guides]) ul ul.has-active-item:before {
      background-color: var(--vscode-tree-indentGuidesStroke);
    }
  `];var gt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const cg=30,ug=16,Cu=3,dp=(t,e=[])=>{const n=[];return t.forEach((o,r)=>{const i=[...e,r],s={...o,path:i};o.subItems&&(s.subItems=dp(o.subItems,i)),n.push(s)}),n},Vo=t=>{var e;return!!(t.subItems&&Array.isArray(t.subItems)&&((e=t==null?void 0:t.subItems)==null?void 0:e.length)>0)};let Ue=class extends j{constructor(){super(...arguments),this.indent=8,this.arrows=!1,this.multiline=!1,this.tabindex=0,this.indentGuides=!1,this._data=[],this._selectedItem=null,this._focusedItem=null,this._selectedBranch=null,this._focusedBranch=null,this._handleComponentKeyDownBound=this._handleComponentKeyDown.bind(this)}set data(e){const n=this._data;this._data=dp(e),this.requestUpdate("data",n)}get data(){return this._data}closeAll(){this._closeSubTreeRecursively(this.data),this.requestUpdate()}deselectAll(){this._deselectItemsRecursively(this.data),this.requestUpdate()}getItemByPath(e){return this._getItemByPath(e)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleComponentKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleComponentKeyDownBound)}_getItemByPath(e){let n=this._data,o=null;return e.forEach((r,i)=>{i===e.length-1?o=n[r]:n=n[r].subItems}),o}_handleActionClick(e){e.stopPropagation();const n=e.target,o=n.dataset.itemPath,r=n.dataset.index;let i=null,s="",l="";if(o){const a=o.split("/").map(c=>Number(c));if(i=this._getItemByPath(a),i!=null&&i.actions){const c=Number(r);i.actions[c]&&(s=i.actions[c].actionId)}i!=null&&i.value&&(l=i.value)}this.dispatchEvent(new CustomEvent("vsc-run-action",{detail:{actionId:s,item:i,value:l}})),this.dispatchEvent(new CustomEvent("vsc-tree-action",{detail:{actionId:s,item:i,value:l}}))}_renderIconVariant(e){const{type:n,value:o}=e;return n==="themeicon"?_`<vscode-icon name=${o} class="theme-icon"></vscode-icon>`:_`<span
        class="image-icon"
        style="background-image: url(${o});"
      ></span>`}_renderIcon(e){const n={branch:{value:"folder",type:"themeicon"},open:{value:"folder-opened",type:"themeicon"},leaf:{value:"file",type:"themeicon"}};if(e.iconUrls)e.iconUrls.branch&&(n.branch={value:e.iconUrls.branch,type:"image"}),e.iconUrls.leaf&&(n.leaf={value:e.iconUrls.leaf,type:"image"}),e.iconUrls.open&&(n.open={value:e.iconUrls.open,type:"image"});else if(typeof e.icons=="object")e.icons.branch&&(n.branch={value:e.icons.branch,type:"themeicon"}),e.icons.leaf&&(n.leaf={value:e.icons.leaf,type:"themeicon"}),e.icons.open&&(n.open={value:e.icons.open,type:"themeicon"});else if(!e.icons)return _`${P}`;return Vo(e)?e.open?this._renderIconVariant(n.open):this._renderIconVariant(n.branch):this._renderIconVariant(n.leaf)}_renderArrow(e){if(!this.arrows||!Vo(e))return _`${P}`;const{open:n=!1}=e;return _`
      <div class="arrow-container">
        <vscode-icon name="${n?"chevron-down":"chevron-right"}" class="icon-arrow"></vscode-icon>
      </div>
    `}_renderActions(e){const n=[];return e.actions&&Array.isArray(e.actions)&&e.actions.forEach((o,r)=>{var i;if(o.icon){const s=_`<vscode-icon
            name=${o.icon}
            action-icon
            title=${X(o.tooltip)}
            data-item-path=${X((i=e.path)==null?void 0:i.join("/"))}
            data-index=${r}
            class="action-icon"
            @click=${this._handleActionClick}
          ></vscode-icon>`;n.push(s)}}),n.length>0?_`<div class="actions">${n}</div>`:_`${P}`}_renderDecorations(e){const n=[];return e.decorations&&Array.isArray(e.decorations)&&e.decorations.forEach(o=>{const{appearance:r="text",visibleWhen:i="always",content:s="",color:l="",focusedColor:a="",hoverColor:c="",selectedColor:m=""}=o,d=`visible-when-${i}`,f={};switch(l&&(f["--color"]=l),a&&(f["--focused-color"]=a),c&&(f["--hover-color"]=c),m&&(f["--selected-color"]=m),r){case"counter-badge":n.push(_`<vscode-badge
                variant="counter"
                class=${["counter-badge",d].join(" ")}
                part="counter-badge-decoration"
                >${s}</vscode-badge
              >`);break;case"filled-circle":n.push(_`<vscode-icon
                name="circle-filled"
                size="14"
                class=${["filled-circle",d].join(" ")}
                part="filled-circle-decoration"
                style=${Ve(f)}
              ></vscode-icon>`);break;case"text":n.push(_`<div
                class=${["decoration-text",d].join(" ")}
                part="caption-decoration"
                style=${Ve(f)}
              >
                ${s}
              </div>`);break}}),n.length>0?_`<div class="decorations" part="decorations">
        ${n}
      </div>`:_`${P}`}_renderTreeItem(e,n){const{open:o=!1,label:r,description:i="",tooltip:s,selected:l=!1,focused:a=!1,subItems:c=[]}=e,{path:m,itemType:d,hasFocusedItem:f=!1,hasSelectedItem:g=!1}=n,y=m.length-1,w=["contents"],F=o?["open"]:[],h=y*this.indent,u=this.arrows&&d==="leaf"?cg+h:h,v=this._renderArrow(e),b=this._renderIcon(e),k=this.arrows?h+ug:h+Cu,E=o&&d==="branch"?_`<ul
            style=${Ve({"--indent-guide-pos":`${k}px`})}
            class=${q({"has-active-item":f||g})}
          >
            ${this._renderTree(c,m)}
          </ul>`:P,$=i?_`<span class="description" part="description">${i}</span>`:P,I=this._renderActions(e),ee=this._renderDecorations(e);return F.push(d),l&&w.push("selected"),a&&w.push("focused"),_`
      <li data-path="${m.join("/")}" class="${F.join(" ")}">
        <div
          class="${w.join(" ")}"
          style="${Ve({paddingLeft:`${u+Cu}px`})}"
        >
          ${v}${b}<span
            class="text-content"
            part="text-content"
            title="${X(s)}"
            >${r}${$}</span
          >
          ${I} ${ee}
        </div>
        ${E}
      </li>
    `}_renderTree(e,n=[]){const o=[];return e?(e.forEach((r,i)=>{const s=[...n,i],l=Vo(r)?"branch":"leaf",{selected:a=!1,focused:c=!1,hasFocusedItem:m=!1,hasSelectedItem:d=!1}=r;a&&(this._selectedItem=r),c&&(this._focusedItem=r),o.push(this._renderTreeItem(r,{path:s,itemType:l,hasFocusedItem:m,hasSelectedItem:d}))}),o):P}_selectItem(e){var o,r;this._selectedItem&&(this._selectedItem.selected=!1),this._focusedItem&&(this._focusedItem.focused=!1),this._selectedItem=e,e.selected=!0,this._focusedItem=e,e.focused=!0,this._selectedBranch&&(this._selectedBranch.hasSelectedItem=!1);let n=null;if((o=e.path)!=null&&o.length&&e.path.length>1&&(n=this._getItemByPath(e.path.slice(0,-1))),Vo(e))this._selectedBranch=e,e.hasSelectedItem=!0,e.open=!e.open,e.open?(this._selectedBranch=e,e.hasSelectedItem=!0):n&&(this._selectedBranch=n,n.hasSelectedItem=!0);else if((r=e.path)!=null&&r.length&&e.path.length>1){const i=this._getItemByPath(e.path.slice(0,-1));i&&(this._selectedBranch=i,i.hasSelectedItem=!0)}else this._selectedBranch=e,e.hasSelectedItem=!0;this._emitSelectEvent(this._selectedItem,this._selectedItem.path.join("/")),this.requestUpdate()}_focusItem(e){var r,i;this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=e,e.focused=!0;const n=!!((r=e==null?void 0:e.subItems)!=null&&r.length);this._focusedBranch&&(this._focusedBranch.hasFocusedItem=!1);let o=null;(i=e.path)!=null&&i.length&&e.path.length>1&&(o=this._getItemByPath(e.path.slice(0,-1))),n?e.open?(this._focusedBranch=e,e.hasFocusedItem=!0):!e.open&&o&&(this._focusedBranch=o,o.hasFocusedItem=!0):o&&(this._focusedBranch=o,o.hasFocusedItem=!0)}_closeSubTreeRecursively(e){e.forEach(n=>{n.open=!1,n.subItems&&n.subItems.length>0&&this._closeSubTreeRecursively(n.subItems)})}_deselectItemsRecursively(e){e.forEach(n=>{n.selected&&(n.selected=!1),n.subItems&&n.subItems.length>0&&this._deselectItemsRecursively(n.subItems)})}_emitSelectEvent(e,n){const{icons:o,label:r,open:i,value:s}=e,l={icons:o,itemType:Vo(e)?"branch":"leaf",label:r,open:i||!1,value:s||r,path:n};this.dispatchEvent(new CustomEvent("vsc-select",{bubbles:!0,composed:!0,detail:l})),this.dispatchEvent(new CustomEvent("vsc-tree-select",{detail:l}))}_focusPrevItem(){var n;if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:e}=this._focusedItem;if(e&&(e==null?void 0:e.length)>0){const o=e[e.length-1],r=e.length>1;if(o>0){const i=[...e];i[i.length-1]=o-1;const s=this._getItemByPath(i);let l=s;if(s!=null&&s.open&&((n=s.subItems)!=null&&n.length)){const{subItems:a}=s;l=a[a.length-1]}this._focusItem(l)}else if(r){const i=[...e];i.pop(),this._focusItem(this._getItemByPath(i))}}else this._focusItem(this._data[0])}_focusNextItem(){if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:e,open:n}=this._focusedItem;if(n&&Array.isArray(this._focusedItem.subItems)&&this._focusedItem.subItems.length>0){this._focusItem(this._focusedItem.subItems[0]);return}const o=[...e];o[o.length-1]+=1;let r=this._getItemByPath(o);r?this._focusItem(r):(o.pop(),o.length>0&&(o[o.length-1]+=1,r=this._getItemByPath(o),r&&this._focusItem(r)))}_handleClick(e){const o=e.composedPath().find(r=>r.tagName&&r.tagName.toUpperCase()==="LI");if(o){const i=(o.dataset.path||"").split("/").map(l=>Number(l)),s=this._getItemByPath(i);this._selectItem(s)}else this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=null}_handleComponentKeyDown(e){const n=[" ","ArrowDown","ArrowUp","Enter","Escape"],o=e.key;n.includes(e.key)&&(e.stopPropagation(),e.preventDefault()),o==="Escape"&&(this._focusedItem=null),o==="ArrowUp"&&this._focusPrevItem(),o==="ArrowDown"&&this._focusNextItem(),(o==="Enter"||o===" ")&&this._focusedItem&&this._selectItem(this._focusedItem)}render(){const e=q({multi:this.multiline,single:!this.multiline,wrapper:!0,"has-not-focused-item":!this._focusedItem,"selection-none":!this._selectedItem,"selection-single":this._selectedItem!==null});return _`
      <div @click="${this._handleClick}" class="${e}">
        <ul>
          ${this._renderTree(this._data)}
        </ul>
      </div>
    `}};Ue.styles=ag;gt([p({type:Array,reflect:!1})],Ue.prototype,"data",null);gt([p({type:Number})],Ue.prototype,"indent",void 0);gt([p({type:Boolean,reflect:!0})],Ue.prototype,"arrows",void 0);gt([p({type:Boolean,reflect:!0})],Ue.prototype,"multiline",void 0);gt([p({type:Number,reflect:!0})],Ue.prototype,"tabindex",void 0);gt([p({type:Boolean,reflect:!0,attribute:"indent-guides"})],Ue.prototype,"indentGuides",void 0);gt([R()],Ue.prototype,"_selectedItem",void 0);gt([R()],Ue.prototype,"_focusedItem",void 0);gt([R()],Ue.prototype,"_selectedBranch",void 0);gt([R()],Ue.prototype,"_focusedBranch",void 0);Ue=gt([V("vscode-tree")],Ue);D({tagName:"vscode-badge",elementClass:kr,react:B,displayName:"VscodeBadge"});const dg=D({tagName:"vscode-button",elementClass:ue,react:B,displayName:"VscodeButton"});D({tagName:"vscode-checkbox",elementClass:ke,react:B,displayName:"VscodeCheckbox",events:{onChange:"change"}});D({tagName:"vscode-checkbox-group",elementClass:An,react:B,displayName:"VscodeCheckboxGroup"});D({tagName:"vscode-collapsible",elementClass:Tn,react:B,displayName:"VscodeCollapsible"});D({tagName:"vscode-context-menu",elementClass:kt,react:B,displayName:"VscodeContextMenu",events:{onVscContextMenuSelect:"vsc-context-menu-select"}});D({tagName:"vscode-context-menu-item",elementClass:Dt,react:B,displayName:"VscodeContextMenuItem"});D({tagName:"vscode-divider",elementClass:Cr,react:B,displayName:"VscodeDivider"});D({tagName:"vscode-form-container",elementClass:Vt,react:B,displayName:"VscodeFormContainer"});D({tagName:"vscode-form-group",elementClass:Sr,react:B,displayName:"VscodeFormGroup"});D({tagName:"vscode-form-helper",elementClass:Hi,react:B,displayName:"VscodeFormHelper"});D({tagName:"vscode-icon",elementClass:it,react:B,displayName:"VscodeIcon"});D({tagName:"vscode-label",elementClass:Nn,react:B,displayName:"VscodeLabel"});D({tagName:"vscode-multi-select",elementClass:st,react:B,displayName:"VscodeMultiSelect",events:{onChange:"change",onInvalid:"invalid"}});D({tagName:"vscode-option",elementClass:an,react:B,displayName:"VscodeOption"});D({tagName:"vscode-progress-ring",elementClass:Ln,react:B,displayName:"VscodeProgressRing"});D({tagName:"vscode-radio",elementClass:ye,react:B,displayName:"VscodeRadio",events:{onChange:"change",onInvalid:"invalid"}});D({tagName:"vscode-radio-group",elementClass:Ct,react:B,displayName:"VscodeRadioGroup",events:{onChange:"change"}});D({tagName:"vscode-scrollable",elementClass:_e,react:B,displayName:"VscodeScrollable"});D({tagName:"vscode-single-select",elementClass:He,react:B,displayName:"VscodeSingleSelect",events:{onChange:"change",onInvalid:"invalid"}});D({tagName:"vscode-split-layout",elementClass:fe,react:B,displayName:"VscodeSplitLayout"});D({tagName:"vscode-tab-header",elementClass:nt,react:B,displayName:"VscTabHeader"});D({tagName:"vscode-table",elementClass:de,react:B,displayName:"VscodeTable"});D({tagName:"vscode-table-body",elementClass:Er,react:B,displayName:"VscodeTableBody"});D({tagName:"vscode-table-cell",elementClass:Bn,react:B,displayName:"VscodeTableCell"});D({tagName:"vscode-table-header",elementClass:$r,react:B,displayName:"VscodeTableHeader"});D({tagName:"vscode-table-header-cell",elementClass:Ir,react:B,displayName:"VscodeTableHeaderCell"});D({tagName:"vscode-table-row",elementClass:Pr,react:B,displayName:"VscodeTableRow"});D({tagName:"vscode-tab-panel",elementClass:St,react:B,displayName:"VscodeTabPanel"});D({tagName:"vscode-tabs",elementClass:Mt,react:B,events:{onVscTabsSelect:"vsc-tabs-select"},displayName:"VscodeTabs"});D({tagName:"vscode-textarea",elementClass:W,react:B,displayName:"VscodeTextarea",events:{onChange:"change",onInput:"input",onInvalid:"invalid"}});D({tagName:"vscode-textfield",elementClass:H,react:B,displayName:"VscodeTextfield",events:{onChange:"change",onInput:"input",onInvalid:"invalid"}});D({tagName:"vscode-tree",elementClass:Ue,react:B,displayName:"VscodeTree",events:{onVscTreeAction:"vsc-tree-action",onVscTreeSelect:"vsc-tree-select"}});function hg(){function t(){Uv.postMessage({command:"hello",text:"Hey there partner! 🤠"})}return Wo.jsxs("main",{children:[Wo.jsx("h1",{children:"Hello World!!!"}),Wo.jsx(dg,{onClick:t,children:"Howdy!"})]})}Dh(document.getElementById("root")).render(Wo.jsx(Ki.StrictMode,{children:Wo.jsx(hg,{})}));
