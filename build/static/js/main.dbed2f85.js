/*! For license information please see main.dbed2f85.js.LICENSE.txt */
(()=>{var e={43:(e,t,r)=>{"use strict";e.exports=r(202)},153:(e,t,r)=>{"use strict";var n=r(43),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:d,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function y(){}function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,f(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var i,a={},o=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)j.call(t,i)&&!k.hasOwnProperty(i)&&(a[i]=t[i]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:r,type:e,key:o,ref:s,props:a,_owner:S.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return o=o(l=e),e=""===a?"."+T(l,0):a,w(o)?(i="",null!=e&&(i=e.replace(E,"$&/")+"/"),A(o,t,i,"",(function(e){return e}))):null!=o&&(P(o)&&(o=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(E,"$&/")+"/")+e)),t.push(o)),1;if(l=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var d=a+T(s=e[c],c);l+=A(s,t,i,d,o)}else if(d=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)l+=A(s=s.value,t,i,d=a+T(s,c++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function z(e,t,r){if(null==e)return e;var n=[],i=0;return A(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},L={transition:null},R={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,r){z(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=o,t.PureComponent=x,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.act=M,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=f({},e.props),a=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)j.call(t,c)&&!k.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:r,type:e.type,key:a,ref:o,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,r){return D.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,r){return D.current.useReducer(e,t,r)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return D.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return D.current.useTransition()},t.version="18.3.1"},219:(e,t,r)=>{"use strict";var n=r(763),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return n.isMemo(e)?o:s[e.$$typeof]||i}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=o;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(m){var i=h(r);i&&i!==m&&e(t,i,n)}var o=d(r);u&&(o=o.concat(u(r)));for(var s=l(t),f=l(r),g=0;g<o.length;++g){var v=o[g];if(!a[v]&&(!n||!n[v])&&(!f||!f[v])&&(!s||!s[v])){var y=p(r,v);try{c(t,v,y)}catch(x){}}}}return t}},234:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,i=e[n];if(!(0<a(i,t)))break e;e[n]=t,e[r]=i,r=n}}function n(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,i=e.length,o=i>>>1;n<o;){var s=2*(n+1)-1,l=e[s],c=s+1,d=e[c];if(0>a(l,r))c<i&&0>a(d,l)?(e[n]=d,e[c]=r,n=c):(e[n]=l,e[s]=r,n=s);else{if(!(c<i&&0>a(d,r)))break e;e[n]=d,e[c]=r,n=c}}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],d=[],u=1,p=null,h=3,m=!1,f=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=n(d);null!==t;){if(null===t.callback)i(d);else{if(!(t.startTime<=e))break;i(d),t.sortIndex=t.expirationTime,r(c,t)}t=n(d)}}function w(e){if(g=!1,b(e),!f)if(null!==n(c))f=!0,L(j);else{var t=n(d);null!==t&&R(w,t.startTime-e)}}function j(e,r){f=!1,g&&(g=!1,y(P),P=-1),m=!0;var a=h;try{for(b(r),p=n(c);null!==p&&(!(p.expirationTime>r)||e&&!A());){var o=p.callback;if("function"===typeof o){p.callback=null,h=p.priorityLevel;var s=o(p.expirationTime<=r);r=t.unstable_now(),"function"===typeof s?p.callback=s:p===n(c)&&i(c),b(r)}else i(c);p=n(c)}if(null!==p)var l=!0;else{var u=n(d);null!==u&&R(w,u.startTime-r),l=!1}return l}finally{p=null,h=a,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,k=!1,C=null,P=-1,E=5,T=-1;function A(){return!(t.unstable_now()-T<E)}function z(){if(null!==C){var e=t.unstable_now();T=e;var r=!0;try{r=C(!0,e)}finally{r?S():(k=!1,C=null)}}else k=!1}if("function"===typeof x)S=function(){x(z)};else if("undefined"!==typeof MessageChannel){var I=new MessageChannel,D=I.port2;I.port1.onmessage=z,S=function(){D.postMessage(null)}}else S=function(){v(z,0)};function L(e){C=e,k||(k=!0,S())}function R(e,r){P=v((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){f||m||(f=!0,L(j))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var r=h;h=t;try{return e()}finally{h=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=h;h=e;try{return t()}finally{h=r}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:u++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,r(d,e),null===n(c)&&e===n(d)&&(g?(y(P),P=-1):g=!0,R(w,a-o))):(e.sortIndex=s,r(c,e),f||m||(f=!0,L(j))),e},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(e){var t=h;return function(){var r=h;h=t;try{return e.apply(this,arguments)}finally{h=r}}}},324:e=>{e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var d=e[c],u=t[c];if(!1===(i=r?r.call(n,d,u,c):void 0)||void 0===i&&d!==u)return!1}return!0}},391:(e,t,r)=>{"use strict";var n=r(950);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},528:(e,t)=>{"use strict";var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler");Symbol.for("react.provider");var s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.for("react.view_transition"),f=Symbol.for("react.client.reference");function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case o:case a:case d:case u:case m:return e;default:switch(e=e&&e.$$typeof){case l:case c:case h:case p:case s:return e;default:return t}}case n:return t}}}t.Hy=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===o||e===a||e===d||e===u||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===p||e.$$typeof===l||e.$$typeof===s||e.$$typeof===c||e.$$typeof===f||void 0!==e.getModuleId)},t.QP=g},579:(e,t,r)=>{"use strict";e.exports=r(153)},730:(e,t,r)=>{"use strict";var n=r(43),i=r(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var d=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),u=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},m={};function f(e,t,r,n,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new f(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new f(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new f(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new f(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new f(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new f(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new f(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new f(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new f(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,r,n){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,i,n)&&(r=null),n||null===i?function(e){return!!u.call(m,e)||!u.call(h,e)&&(p.test(e)?m[e]=!0:(h[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=null===r?3!==i.type&&"":r:(t=i.attributeName,n=i.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(i=i.type)||4===i&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new f(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new f(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new f(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new f(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new f("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new f(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),j=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),E=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),D=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var R=Symbol.iterator;function M(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=R&&e[R]||e["@@iterator"])?e:null}var O,_=Object.assign;function N(e){if(void 0===O)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return"\n"+O+e}var F=!1;function V(e,t){if(!e||F)return"";F=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),a=n.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?N(e):""}function B(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function $(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case j:return"Portal";case C:return"Profiler";case k:return"StrictMode";case A:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case E:return(e.displayName||"Context")+".Consumer";case P:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case I:return null!==(t=e.displayName||null)?t:$(e.type)||"Memo";case D:t=e._payload,e=e._init;try{return $(e(t))}catch(r){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(t);case 8:return t===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=H(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var r=t.checked;return _({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function K(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=W(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function J(e,t){X(e,t);var r=W(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,r):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function ee(e,t,r){"number"===t&&Y(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var te=Array.isArray;function re(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+W(r),t=null,i=0;i<e.length;i++){if(e[i].value===r)return e[i].selected=!0,void(n&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ne(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return _({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(a(92));if(te(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:W(r)}}function ae(e,t){var r=W(t.value),n=W(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,ue=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction((function(){return de(e,t)}))}:de);function pe(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function fe(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ge(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),i=fe(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}Object.keys(he).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]}))}));var ve=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var je=null,Se=null,ke=null;function Ce(e){if(e=xi(e)){if("function"!==typeof je)throw Error(a(280));var t=e.stateNode;t&&(t=wi(t),je(e.stateNode,e.type,t))}}function Pe(e){Se?ke?ke.push(e):ke=[e]:Se=e}function Ee(){if(Se){var e=Se,t=ke;if(ke=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Te(e,t){return e(t)}function Ae(){}var ze=!1;function Ie(e,t,r){if(ze)return e(t,r);ze=!0;try{return Te(e,t,r)}finally{ze=!1,(null!==Se||null!==ke)&&(Ae(),Ee())}}function De(e,t){var r=e.stateNode;if(null===r)return null;var n=wi(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(a(231,t,typeof r));return r}var Le=!1;if(d)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){Le=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch(de){Le=!1}function Me(e,t,r,n,i,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(d){this.onError(d)}}var Oe=!1,_e=null,Ne=!1,Fe=null,Ve={onError:function(e){Oe=!0,_e=e}};function Be(e,t,r,n,i,a,o,s,l){Oe=!1,_e=null,Me.apply(Ve,arguments)}function $e(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function Ue(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if($e(e)!==e)throw Error(a(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=$e(e)))throw Error(a(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(n=i.return)){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return We(i),e;if(o===n)return We(i),t;o=o.sibling}throw Error(a(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s)throw Error(a(189))}}if(r.alternate!==n)throw Error(a(190))}if(3!==r.tag)throw Error(a(188));return r.stateNode.current===r?e:t}(e))?Ge(e):null}function Ge(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ge(e);if(null!==t)return t;e=e.sibling}return null}var qe=i.unstable_scheduleCallback,Ye=i.unstable_cancelCallback,Qe=i.unstable_shouldYield,Ke=i.unstable_requestPaint,Xe=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,rt=i.unstable_LowPriority,nt=i.unstable_IdlePriority,it=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,dt=4194304;function ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&r;if(0!==o){var s=o&~i;0!==s?n=ut(s):0!==(a&=o)&&(n=ut(a))}else 0!==(o=r&~i)?n=ut(o):0!==a&&(n=ut(a));if(0===n)return 0;if(0!==t&&t!==n&&0===(t&i)&&((i=n&-n)>=(a=t&-t)||16===i&&0!==(4194240&a)))return t;if(0!==(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)i=1<<(r=31-ot(t)),n|=e[r],t&=~i;return n}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ft(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function vt(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=r}function yt(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ot(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,jt,St,kt,Ct,Pt=!1,Et=[],Tt=null,At=null,zt=null,It=new Map,Dt=new Map,Lt=[],Rt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":It.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dt.delete(t.pointerId)}}function Ot(e,t,r,n,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=xi(t))&&jt(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function _t(e){var t=yi(e.target);if(null!==t){var r=$e(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=Ue(r)))return e.blockedOn=t,void Ct(e.priority,(function(){St(r)}))}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function Nt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=xi(r))&&jt(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);be=n,r.target.dispatchEvent(n),be=null,t.shift()}return!0}function Ft(e,t,r){Nt(e)&&r.delete(t)}function Vt(){Pt=!1,null!==Tt&&Nt(Tt)&&(Tt=null),null!==At&&Nt(At)&&(At=null),null!==zt&&Nt(zt)&&(zt=null),It.forEach(Ft),Dt.forEach(Ft)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Pt||(Pt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Vt)))}function $t(e){function t(t){return Bt(t,e)}if(0<Et.length){Bt(Et[0],e);for(var r=1;r<Et.length;r++){var n=Et[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==Tt&&Bt(Tt,e),null!==At&&Bt(At,e),null!==zt&&Bt(zt,e),It.forEach(t),Dt.forEach(t),r=0;r<Lt.length;r++)(n=Lt[r]).blockedOn===e&&(n.blockedOn=null);for(;0<Lt.length&&null===(r=Lt[0]).blockedOn;)_t(r),null===r.blockedOn&&Lt.shift()}var Ut=b.ReactCurrentBatchConfig,Wt=!0;function Ht(e,t,r,n){var i=xt,a=Ut.transition;Ut.transition=null;try{xt=1,qt(e,t,r,n)}finally{xt=i,Ut.transition=a}}function Gt(e,t,r,n){var i=xt,a=Ut.transition;Ut.transition=null;try{xt=4,qt(e,t,r,n)}finally{xt=i,Ut.transition=a}}function qt(e,t,r,n){if(Wt){var i=Qt(e,t,r,n);if(null===i)Wn(e,t,n,Yt,r),Mt(e,n);else if(function(e,t,r,n,i){switch(t){case"focusin":return Tt=Ot(Tt,e,t,r,n,i),!0;case"dragenter":return At=Ot(At,e,t,r,n,i),!0;case"mouseover":return zt=Ot(zt,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return It.set(a,Ot(It.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Dt.set(a,Ot(Dt.get(a)||null,e,t,r,n,i)),!0}return!1}(i,e,t,r,n))n.stopPropagation();else if(Mt(e,n),4&t&&-1<Rt.indexOf(e)){for(;null!==i;){var a=xi(i);if(null!==a&&wt(a),null===(a=Qt(e,t,r,n))&&Wn(e,t,n,Yt,r),a===i)break;i=a}null!==i&&n.stopPropagation()}else Wn(e,t,n,null,r)}}var Yt=null;function Qt(e,t,r,n){if(Yt=null,null!==(e=yi(e=we(n))))if(null===(t=$e(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=Ue(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Kt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case rt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Xt=null,Jt=null,Zt=null;function er(){if(Zt)return Zt;var e,t,r=Jt,n=r.length,i="value"in Xt?Xt.value:Xt.textContent,a=i.length;for(e=0;e<n&&r[e]===i[e];e++);var o=n-e;for(t=1;t<=o&&r[n-t]===i[a-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function nr(){return!1}function ir(e){function t(t,r,n,i,a){for(var o in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?rr:nr,this.isPropagationStopped=nr,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var ar,or,sr,lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=ir(lr),dr=_({},lr,{view:0,detail:0}),ur=ir(dr),pr=_({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&"mousemove"===e.type?(ar=e.screenX-sr.screenX,or=e.screenY-sr.screenY):or=ar=0,sr=e),ar)},movementY:function(e){return"movementY"in e?e.movementY:or}}),hr=ir(pr),mr=ir(_({},pr,{dataTransfer:0})),fr=ir(_({},dr,{relatedTarget:0})),gr=ir(_({},lr,{animationName:0,elapsedTime:0,pseudoElement:0})),vr=_({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yr=ir(vr),xr=ir(_({},lr,{data:0})),br={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=jr[e])&&!!t[e]}function kr(){return Sr}var Cr=_({},dr,{key:function(e){if(e.key){var t=br[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kr,charCode:function(e){return"keypress"===e.type?tr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pr=ir(Cr),Er=ir(_({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tr=ir(_({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kr})),Ar=ir(_({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0})),zr=_({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ir=ir(zr),Dr=[9,13,27,32],Lr=d&&"CompositionEvent"in window,Rr=null;d&&"documentMode"in document&&(Rr=document.documentMode);var Mr=d&&"TextEvent"in window&&!Rr,Or=d&&(!Lr||Rr&&8<Rr&&11>=Rr),_r=String.fromCharCode(32),Nr=!1;function Fr(e,t){switch(e){case"keyup":return-1!==Dr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vr(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Br=!1;var $r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!$r[e.type]:"textarea"===t}function Wr(e,t,r,n){Pe(n),0<(t=Gn(t,"onChange")).length&&(r=new cr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Hr=null,Gr=null;function qr(e){Nn(e,0)}function Yr(e){if(q(bi(e)))return e}function Qr(e,t){if("change"===e)return t}var Kr=!1;if(d){var Xr;if(d){var Jr="oninput"in document;if(!Jr){var Zr=document.createElement("div");Zr.setAttribute("oninput","return;"),Jr="function"===typeof Zr.oninput}Xr=Jr}else Xr=!1;Kr=Xr&&(!document.documentMode||9<document.documentMode)}function en(){Hr&&(Hr.detachEvent("onpropertychange",tn),Gr=Hr=null)}function tn(e){if("value"===e.propertyName&&Yr(Gr)){var t=[];Wr(t,Gr,e,we(e)),Ie(qr,t)}}function rn(e,t,r){"focusin"===e?(en(),Gr=r,(Hr=t).attachEvent("onpropertychange",tn)):"focusout"===e&&en()}function nn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yr(Gr)}function an(e,t){if("click"===e)return Yr(t)}function on(e,t){if("input"===e||"change"===e)return Yr(t)}var sn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function ln(e,t){if(sn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!u.call(t,i)||!sn(e[i],t[i]))return!1}return!0}function cn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dn(e,t){var r,n=cn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cn(n)}}function un(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?un(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pn(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=Y((e=t.contentWindow).document)}return t}function hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mn(e){var t=pn(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&un(r.ownerDocument.documentElement,r)){if(null!==n&&hn(r))if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=void 0===n.end?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=dn(r,a);var o=dn(r,n);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fn=d&&"documentMode"in document&&11>=document.documentMode,gn=null,vn=null,yn=null,xn=!1;function bn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;xn||null==gn||gn!==Y(n)||("selectionStart"in(n=gn)&&hn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},yn&&ln(yn,n)||(yn=n,0<(n=Gn(vn,"onSelect")).length&&(t=new cr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gn)))}function wn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var jn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},Sn={},kn={};function Cn(e){if(Sn[e])return Sn[e];if(!jn[e])return e;var t,r=jn[e];for(t in r)if(r.hasOwnProperty(t)&&t in kn)return Sn[e]=r[t];return e}d&&(kn=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);var Pn=Cn("animationend"),En=Cn("animationiteration"),Tn=Cn("animationstart"),An=Cn("transitionend"),zn=new Map,In="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,t){zn.set(e,t),l(t,[e])}for(var Ln=0;Ln<In.length;Ln++){var Rn=In[Ln];Dn(Rn.toLowerCase(),"on"+(Rn[0].toUpperCase()+Rn.slice(1)))}Dn(Pn,"onAnimationEnd"),Dn(En,"onAnimationIteration"),Dn(Tn,"onAnimationStart"),Dn("dblclick","onDoubleClick"),Dn("focusin","onFocus"),Dn("focusout","onBlur"),Dn(An,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),On=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function _n(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,i,o,s,l,c){if(Be.apply(this,arguments),Oe){if(!Oe)throw Error(a(198));var d=_e;Oe=!1,_e=null,Ne||(Ne=!0,Fe=d)}}(n,t,void 0,e),e.currentTarget=null}function Nn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;_n(i,s,c),a=l}else for(o=0;o<n.length;o++){if(l=(s=n[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;_n(i,s,c),a=l}}}if(Ne)throw e=Fe,Ne=!1,Fe=null,e}function Fn(e,t){var r=t[fi];void 0===r&&(r=t[fi]=new Set);var n=e+"__bubble";r.has(n)||(Un(t,e,2,!1),r.add(n))}function Vn(e,t,r){var n=0;t&&(n|=4),Un(r,e,n,t)}var Bn="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[Bn]){e[Bn]=!0,o.forEach((function(t){"selectionchange"!==t&&(On.has(t)||Vn(t,!1,e),Vn(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Bn]||(t[Bn]=!0,Vn("selectionchange",!1,t))}}function Un(e,t,r,n){switch(Kt(t)){case 1:var i=Ht;break;case 4:i=Gt;break;default:i=qt}r=i.bind(null,t,r,e),i=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),n?void 0!==i?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):void 0!==i?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Wn(e,t,r,n,i){var a=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var o=n.tag;if(3===o||4===o){var s=n.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=n.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=yi(s)))return;if(5===(l=o.tag)||6===l){n=a=o;continue e}s=s.parentNode}}n=n.return}Ie((function(){var n=a,i=we(r),o=[];e:{var s=zn.get(e);if(void 0!==s){var l=cr,c=e;switch(e){case"keypress":if(0===tr(r))break e;case"keydown":case"keyup":l=Pr;break;case"focusin":c="focus",l=fr;break;case"focusout":c="blur",l=fr;break;case"beforeblur":case"afterblur":l=fr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Tr;break;case Pn:case En:case Tn:l=gr;break;case An:l=Ar;break;case"scroll":l=ur;break;case"wheel":l=Ir;break;case"copy":case"cut":case"paste":l=yr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Er}var d=0!==(4&t),u=!d&&"scroll"===e,p=d?null!==s?s+"Capture":null:s;d=[];for(var h,m=n;null!==m;){var f=(h=m).stateNode;if(5===h.tag&&null!==f&&(h=f,null!==p&&(null!=(f=De(m,p))&&d.push(Hn(m,f,h)))),u)break;m=m.return}0<d.length&&(s=new l(s,c,null,r,i),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||r===be||!(c=r.relatedTarget||r.fromElement)||!yi(c)&&!c[mi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=n,null!==(c=(c=r.relatedTarget||r.toElement)?yi(c):null)&&(c!==(u=$e(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=n),l!==c)){if(d=hr,f="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=Er,f="onPointerLeave",p="onPointerEnter",m="pointer"),u=null==l?s:bi(l),h=null==c?s:bi(c),(s=new d(f,m+"leave",l,r,i)).target=u,s.relatedTarget=h,f=null,yi(i)===n&&((d=new d(p,m+"enter",c,r,i)).target=h,d.relatedTarget=u,f=d),u=f,l&&c)e:{for(p=c,m=0,h=d=l;h;h=qn(h))m++;for(h=0,f=p;f;f=qn(f))h++;for(;0<m-h;)d=qn(d),m--;for(;0<h-m;)p=qn(p),h--;for(;m--;){if(d===p||null!==p&&d===p.alternate)break e;d=qn(d),p=qn(p)}d=null}else d=null;null!==l&&Yn(o,s,l,d,!1),null!==c&&null!==u&&Yn(o,u,c,d,!0)}if("select"===(l=(s=n?bi(n):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Qr;else if(Ur(s))if(Kr)g=on;else{g=nn;var v=rn}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=an);switch(g&&(g=g(e,n))?Wr(o,g,r,i):(v&&v(e,s,n),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=n?bi(n):window,e){case"focusin":(Ur(v)||"true"===v.contentEditable)&&(gn=v,vn=n,yn=null);break;case"focusout":yn=vn=gn=null;break;case"mousedown":xn=!0;break;case"contextmenu":case"mouseup":case"dragend":xn=!1,bn(o,r,i);break;case"selectionchange":if(fn)break;case"keydown":case"keyup":bn(o,r,i)}var y;if(Lr)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Br?Fr(e,r)&&(x="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(x="onCompositionStart");x&&(Or&&"ko"!==r.locale&&(Br||"onCompositionStart"!==x?"onCompositionEnd"===x&&Br&&(y=er()):(Jt="value"in(Xt=i)?Xt.value:Xt.textContent,Br=!0)),0<(v=Gn(n,x)).length&&(x=new xr(x,e,null,r,i),o.push({event:x,listeners:v}),y?x.data=y:null!==(y=Vr(r))&&(x.data=y))),(y=Mr?function(e,t){switch(e){case"compositionend":return Vr(t);case"keypress":return 32!==t.which?null:(Nr=!0,_r);case"textInput":return(e=t.data)===_r&&Nr?null:e;default:return null}}(e,r):function(e,t){if(Br)return"compositionend"===e||!Lr&&Fr(e,t)?(e=er(),Zt=Jt=Xt=null,Br=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Or&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(n=Gn(n,"onBeforeInput")).length&&(i=new xr("onBeforeInput","beforeinput",null,r,i),o.push({event:i,listeners:n}),i.data=y))}Nn(o,t)}))}function Hn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Gn(e,t){for(var r=t+"Capture",n=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=De(e,r))&&n.unshift(Hn(e,a,i)),null!=(a=De(e,t))&&n.push(Hn(e,a,i))),e=e.return}return n}function qn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yn(e,t,r,n,i){for(var a=t._reactName,o=[];null!==r&&r!==n;){var s=r,l=s.alternate,c=s.stateNode;if(null!==l&&l===n)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=De(r,a))&&o.unshift(Hn(r,l,s)):i||null!=(l=De(r,a))&&o.push(Hn(r,l,s))),r=r.return}0!==o.length&&e.push({event:t,listeners:o})}var Qn=/\r\n?/g,Kn=/\u0000|\uFFFD/g;function Xn(e){return("string"===typeof e?e:""+e).replace(Qn,"\n").replace(Kn,"")}function Jn(e,t,r){if(t=Xn(t),Xn(e)!==t&&r)throw Error(a(425))}function Zn(){}var ei=null,ti=null;function ri(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ni="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,ai="function"===typeof Promise?Promise:void 0,oi="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ai?function(e){return ai.resolve(null).then(e).catch(si)}:ni;function si(e){setTimeout((function(){throw e}))}function li(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&8===i.nodeType)if("/$"===(r=i.data)){if(0===n)return e.removeChild(i),void $t(t);n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=i}while(r);$t(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function di(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var ui=Math.random().toString(36).slice(2),pi="__reactFiber$"+ui,hi="__reactProps$"+ui,mi="__reactContainer$"+ui,fi="__reactEvents$"+ui,gi="__reactListeners$"+ui,vi="__reactHandles$"+ui;function yi(e){var t=e[pi];if(t)return t;for(var r=e.parentNode;r;){if(t=r[mi]||r[pi]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=di(e);null!==e;){if(r=e[pi])return r;e=di(e)}return t}r=(e=r).parentNode}return null}function xi(e){return!(e=e[pi]||e[mi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function wi(e){return e[hi]||null}var ji=[],Si=-1;function ki(e){return{current:e}}function Ci(e){0>Si||(e.current=ji[Si],ji[Si]=null,Si--)}function Pi(e,t){Si++,ji[Si]=e.current,e.current=t}var Ei={},Ti=ki(Ei),Ai=ki(!1),zi=Ei;function Ii(e,t){var r=e.type.contextTypes;if(!r)return Ei;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in r)a[i]=t[i];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Di(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Li(){Ci(Ai),Ci(Ti)}function Ri(e,t,r){if(Ti.current!==Ei)throw Error(a(168));Pi(Ti,t),Pi(Ai,r)}function Mi(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var i in n=n.getChildContext())if(!(i in t))throw Error(a(108,U(e)||"Unknown",i));return _({},r,n)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ei,zi=Ti.current,Pi(Ti,e),Pi(Ai,Ai.current),!0}function _i(e,t,r){var n=e.stateNode;if(!n)throw Error(a(169));r?(e=Mi(e,t,zi),n.__reactInternalMemoizedMergedChildContext=e,Ci(Ai),Ci(Ti),Pi(Ti,e)):Ci(Ai),Pi(Ai,r)}var Ni=null,Fi=!1,Vi=!1;function Bi(e){null===Ni?Ni=[e]:Ni.push(e)}function $i(){if(!Vi&&null!==Ni){Vi=!0;var e=0,t=xt;try{var r=Ni;for(xt=1;e<r.length;e++){var n=r[e];do{n=n(!0)}while(null!==n)}Ni=null,Fi=!1}catch(i){throw null!==Ni&&(Ni=Ni.slice(e+1)),qe(Ze,$i),i}finally{xt=t,Vi=!1}}return null}var Ui=[],Wi=0,Hi=null,Gi=0,qi=[],Yi=0,Qi=null,Ki=1,Xi="";function Ji(e,t){Ui[Wi++]=Gi,Ui[Wi++]=Hi,Hi=e,Gi=t}function Zi(e,t,r){qi[Yi++]=Ki,qi[Yi++]=Xi,qi[Yi++]=Qi,Qi=e;var n=Ki;e=Xi;var i=32-ot(n)-1;n&=~(1<<i),r+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Ki=1<<32-ot(t)+i|r<<i|n,Xi=a+e}else Ki=1<<a|r<<i|n,Xi=e}function ea(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function ta(e){for(;e===Hi;)Hi=Ui[--Wi],Ui[Wi]=null,Gi=Ui[--Wi],Ui[Wi]=null;for(;e===Qi;)Qi=qi[--Yi],qi[Yi]=null,Xi=qi[--Yi],qi[Yi]=null,Ki=qi[--Yi],qi[Yi]=null}var ra=null,na=null,ia=!1,aa=null;function oa(e,t){var r=Ic(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function sa(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,na=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,na=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==Qi?{id:Ki,overflow:Xi}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=Ic(18,null,null,0)).stateNode=t,r.return=e,e.child=r,ra=e,na=null,!0);default:return!1}}function la(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(ia){var t=na;if(t){var r=t;if(!sa(e,t)){if(la(e))throw Error(a(418));t=ci(r.nextSibling);var n=ra;t&&sa(e,t)?oa(n,r):(e.flags=-4097&e.flags|2,ia=!1,ra=e)}}else{if(la(e))throw Error(a(418));e.flags=-4097&e.flags|2,ia=!1,ra=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function ua(e){if(e!==ra)return!1;if(!ia)return da(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ri(e.type,e.memoizedProps)),t&&(t=na)){if(la(e))throw pa(),Error(a(418));for(;t;)oa(e,t),t=ci(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){na=ci(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}na=null}}else na=ra?ci(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=na;e;)e=ci(e.nextSibling)}function ha(){na=ra=null,ia=!1}function ma(e){null===aa?aa=[e]:aa.push(e)}var fa=b.ReactCurrentBatchConfig;function ga(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(a(309));var n=r.stateNode}if(!n)throw Error(a(147,e));var i=n,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!r._owner)throw Error(a(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ya(e){return(0,e._init)(e._payload)}function xa(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Lc(e,t)).index=0,e.sibling=null,e}function o(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,r,n){return null===t||6!==t.tag?((t=_c(r,e.mode,n)).return=e,t):((t=i(t,r)).return=e,t)}function c(e,t,r,n){var a=r.type;return a===S?u(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===D&&ya(a)===t.type)?((n=i(t,r.props)).ref=ga(e,t,r),n.return=e,n):((n=Rc(r.type,r.key,r.props,null,e.mode,n)).ref=ga(e,t,r),n.return=e,n)}function d(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Nc(r,e.mode,n)).return=e,t):((t=i(t,r.children||[])).return=e,t)}function u(e,t,r,n,a){return null===t||7!==t.tag?((t=Mc(r,e.mode,n,a)).return=e,t):((t=i(t,r)).return=e,t)}function p(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=_c(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(r=Rc(t.type,t.key,t.props,null,e.mode,r)).ref=ga(e,null,t),r.return=e,r;case j:return(t=Nc(t,e.mode,r)).return=e,t;case D:return p(e,(0,t._init)(t._payload),r)}if(te(t)||M(t))return(t=Mc(t,e.mode,r,null)).return=e,t;va(e,t)}return null}function h(e,t,r,n){var i=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r)return null!==i?null:l(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return r.key===i?c(e,t,r,n):null;case j:return r.key===i?d(e,t,r,n):null;case D:return h(e,t,(i=r._init)(r._payload),n)}if(te(r)||M(r))return null!==i?null:u(e,t,r,n,null);va(e,r)}return null}function m(e,t,r,n,i){if("string"===typeof n&&""!==n||"number"===typeof n)return l(t,e=e.get(r)||null,""+n,i);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return c(t,e=e.get(null===n.key?r:n.key)||null,n,i);case j:return d(t,e=e.get(null===n.key?r:n.key)||null,n,i);case D:return m(e,t,r,(0,n._init)(n._payload),i)}if(te(n)||M(n))return u(t,e=e.get(r)||null,n,i,null);va(t,n)}return null}function f(i,a,s,l){for(var c=null,d=null,u=a,f=a=0,g=null;null!==u&&f<s.length;f++){u.index>f?(g=u,u=null):g=u.sibling;var v=h(i,u,s[f],l);if(null===v){null===u&&(u=g);break}e&&u&&null===v.alternate&&t(i,u),a=o(v,a,f),null===d?c=v:d.sibling=v,d=v,u=g}if(f===s.length)return r(i,u),ia&&Ji(i,f),c;if(null===u){for(;f<s.length;f++)null!==(u=p(i,s[f],l))&&(a=o(u,a,f),null===d?c=u:d.sibling=u,d=u);return ia&&Ji(i,f),c}for(u=n(i,u);f<s.length;f++)null!==(g=m(u,i,f,s[f],l))&&(e&&null!==g.alternate&&u.delete(null===g.key?f:g.key),a=o(g,a,f),null===d?c=g:d.sibling=g,d=g);return e&&u.forEach((function(e){return t(i,e)})),ia&&Ji(i,f),c}function g(i,s,l,c){var d=M(l);if("function"!==typeof d)throw Error(a(150));if(null==(l=d.call(l)))throw Error(a(151));for(var u=d=null,f=s,g=s=0,v=null,y=l.next();null!==f&&!y.done;g++,y=l.next()){f.index>g?(v=f,f=null):v=f.sibling;var x=h(i,f,y.value,c);if(null===x){null===f&&(f=v);break}e&&f&&null===x.alternate&&t(i,f),s=o(x,s,g),null===u?d=x:u.sibling=x,u=x,f=v}if(y.done)return r(i,f),ia&&Ji(i,g),d;if(null===f){for(;!y.done;g++,y=l.next())null!==(y=p(i,y.value,c))&&(s=o(y,s,g),null===u?d=y:u.sibling=y,u=y);return ia&&Ji(i,g),d}for(f=n(i,f);!y.done;g++,y=l.next())null!==(y=m(f,i,g,y.value,c))&&(e&&null!==y.alternate&&f.delete(null===y.key?g:y.key),s=o(y,s,g),null===u?d=y:u.sibling=y,u=y);return e&&f.forEach((function(e){return t(i,e)})),ia&&Ji(i,g),d}return function e(n,a,o,l){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,d=a;null!==d;){if(d.key===c){if((c=o.type)===S){if(7===d.tag){r(n,d.sibling),(a=i(d,o.props.children)).return=n,n=a;break e}}else if(d.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===D&&ya(c)===d.type){r(n,d.sibling),(a=i(d,o.props)).ref=ga(n,d,o),a.return=n,n=a;break e}r(n,d);break}t(n,d),d=d.sibling}o.type===S?((a=Mc(o.props.children,n.mode,l,o.key)).return=n,n=a):((l=Rc(o.type,o.key,o.props,null,n.mode,l)).ref=ga(n,a,o),l.return=n,n=l)}return s(n);case j:e:{for(d=o.key;null!==a;){if(a.key===d){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){r(n,a.sibling),(a=i(a,o.children||[])).return=n,n=a;break e}r(n,a);break}t(n,a),a=a.sibling}(a=Nc(o,n.mode,l)).return=n,n=a}return s(n);case D:return e(n,a,(d=o._init)(o._payload),l)}if(te(o))return f(n,a,o,l);if(M(o))return g(n,a,o,l);va(n,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(r(n,a.sibling),(a=i(a,o)).return=n,n=a):(r(n,a),(a=_c(o,n.mode,l)).return=n,n=a),s(n)):r(n,a)}}var ba=xa(!0),wa=xa(!1),ja=ki(null),Sa=null,ka=null,Ca=null;function Pa(){Ca=ka=Sa=null}function Ea(e){var t=ja.current;Ci(ja),e._currentValue=t}function Ta(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Aa(e,t){Sa=e,Ca=ka=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xs=!0),e.firstContext=null)}function za(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},null===ka){if(null===Sa)throw Error(a(308));ka=e,Sa.dependencies={lanes:0,firstContext:e}}else ka=ka.next=e;return t}var Ia=null;function Da(e){null===Ia?Ia=[e]:Ia.push(e)}function La(e,t,r,n){var i=t.interleaved;return null===i?(r.next=r,Da(t)):(r.next=i.next,i.next=r),t.interleaved=r,Ra(e,n)}function Ra(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var Ma=!1;function Oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _a(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Na(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&Tl)){var i=n.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Ra(e,r)}return null===(i=n.interleaved)?(t.next=t,Da(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ra(e,r)}function Va(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,yt(e,r)}}function Ba(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var i=null,a=null;if(null!==(r=r.firstBaseUpdate)){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===a?i=a=o:a=a.next=o,r=r.next}while(null!==r);null===a?i=a=t:a=a.next=t}else i=a=t;return r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function $a(e,t,r,n){var i=e.updateQueue;Ma=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var d=e.alternate;null!==d&&((s=(d=d.updateQueue).lastBaseUpdate)!==o&&(null===s?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(null!==a){var u=i.baseState;for(o=0,d=c=l=null,s=a;;){var p=s.lane,h=s.eventTime;if((n&p)===p){null!==d&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,f=s;switch(p=t,h=r,f.tag){case 1:if("function"===typeof(m=f.payload)){u=m.call(h,u,p);break e}u=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=f.payload)?m.call(h,u,p):m)||void 0===p)break e;u=_({},u,p);break e;case 2:Ma=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===d?(c=d=h,l=u):d=d.next=h,o|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===d&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Ol|=o,e.lanes=o,e.memoizedState=u}}function Ua(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(null!==i){if(n.callback=null,n=r,"function"!==typeof i)throw Error(a(191,i));i.call(n)}}}var Wa={},Ha=ki(Wa),Ga=ki(Wa),qa=ki(Wa);function Ya(e){if(e===Wa)throw Error(a(174));return e}function Qa(e,t){switch(Pi(qa,t),Pi(Ga,e),Pi(Ha,Wa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Ha),Pi(Ha,t)}function Ka(){Ci(Ha),Ci(Ga),Ci(qa)}function Xa(e){Ya(qa.current);var t=Ya(Ha.current),r=le(t,e.type);t!==r&&(Pi(Ga,e),Pi(Ha,r))}function Ja(e){Ga.current===e&&(Ci(Ha),Ci(Ga))}var Za=ki(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function ro(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var no=b.ReactCurrentDispatcher,io=b.ReactCurrentBatchConfig,ao=0,oo=null,so=null,lo=null,co=!1,uo=!1,po=0,ho=0;function mo(){throw Error(a(321))}function fo(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!sn(e[r],t[r]))return!1;return!0}function go(e,t,r,n,i,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=null===e||null===e.memoizedState?Zo:es,e=r(n,i),uo){o=0;do{if(uo=!1,po=0,25<=o)throw Error(a(301));o+=1,lo=so=null,t.updateQueue=null,no.current=ts,e=r(n,i)}while(uo)}if(no.current=Jo,t=null!==so&&null!==so.next,ao=0,lo=so=oo=null,co=!1,t)throw Error(a(300));return e}function vo(){var e=0!==po;return po=0,e}function yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===lo?oo.memoizedState=lo=e:lo=lo.next=e,lo}function xo(){if(null===so){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===lo?oo.memoizedState:lo.next;if(null!==t)lo=t,so=e;else{if(null===e)throw Error(a(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===lo?oo.memoizedState=lo=e:lo=lo.next=e}return lo}function bo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=xo(),r=t.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=e;var n=so,i=n.baseQueue,o=r.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(null!==i){o=i.next,n=n.baseState;var l=s=null,c=null,d=o;do{var u=d.lane;if((ao&u)===u)null!==c&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};null===c?(l=c=p,s=n):c=c.next=p,oo.lanes|=u,Ol|=u}d=d.next}while(null!==d&&d!==o);null===c?s=n:c.next=l,sn(n,t.memoizedState)||(xs=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=c,r.lastRenderedState=n}if(null!==(e=r.interleaved)){i=e;do{o=i.lane,oo.lanes|=o,Ol|=o,i=i.next}while(i!==e)}else null===i&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function jo(e){var t=xo(),r=t.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(null!==i){r.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);sn(o,t.memoizedState)||(xs=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function So(){}function ko(e,t){var r=oo,n=xo(),i=t(),o=!sn(n.memoizedState,i);if(o&&(n.memoizedState=i,xs=!0),n=n.queue,Oo(Eo.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||null!==lo&&1&lo.memoizedState.tag){if(r.flags|=2048,Io(9,Po.bind(null,r,n,i,t),void 0,null),null===Al)throw Error(a(349));0!==(30&ao)||Co(r,t,i)}return i}function Co(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function Po(e,t,r,n){t.value=r,t.getSnapshot=n,To(t)&&Ao(e)}function Eo(e,t,r){return r((function(){To(t)&&Ao(e)}))}function To(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!sn(e,r)}catch(n){return!0}}function Ao(e){var t=Ra(e,1);null!==t&&rc(t,e,1,-1)}function zo(e){var t=yo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},t.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[t.memoizedState,e]}function Io(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function Do(){return xo().memoizedState}function Lo(e,t,r,n){var i=yo();oo.flags|=e,i.memoizedState=Io(1|t,r,void 0,void 0===n?null:n)}function Ro(e,t,r,n){var i=xo();n=void 0===n?null:n;var a=void 0;if(null!==so){var o=so.memoizedState;if(a=o.destroy,null!==n&&fo(n,o.deps))return void(i.memoizedState=Io(t,r,a,n))}oo.flags|=e,i.memoizedState=Io(1|t,r,a,n)}function Mo(e,t){return Lo(8390656,8,e,t)}function Oo(e,t){return Ro(2048,8,e,t)}function _o(e,t){return Ro(4,2,e,t)}function No(e,t){return Ro(4,4,e,t)}function Fo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Vo(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Ro(4,4,Fo.bind(null,t,e),r)}function Bo(){}function $o(e,t){var r=xo();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&fo(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Uo(e,t){var r=xo();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&fo(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Wo(e,t,r){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,xs=!0),e.memoizedState=r):(sn(r,t)||(r=ft(),oo.lanes|=r,Ol|=r,e.baseState=!0),t)}function Ho(e,t){var r=xt;xt=0!==r&&4>r?r:4,e(!0);var n=io.transition;io.transition={};try{e(!1),t()}finally{xt=r,io.transition=n}}function Go(){return xo().memoizedState}function qo(e,t,r){var n=tc(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Qo(e))Ko(t,r);else if(null!==(r=La(e,t,r,n))){rc(r,e,n,ec()),Xo(r,t,n)}}function Yo(e,t,r){var n=tc(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Qo(e))Ko(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,r);if(i.hasEagerState=!0,i.eagerState=s,sn(s,o)){var l=t.interleaved;return null===l?(i.next=i,Da(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(r=La(e,t,i,n))&&(rc(r,e,n,i=ec()),Xo(r,t,n))}}function Qo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Ko(e,t){uo=co=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Xo(e,t,r){if(0!==(4194240&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,yt(e,r)}}var Jo={readContext:za,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useInsertionEffect:mo,useLayoutEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useMutableSource:mo,useSyncExternalStore:mo,useId:mo,unstable_isNewReconciler:!1},Zo={readContext:za,useCallback:function(e,t){return yo().memoizedState=[e,void 0===t?null:t],e},useContext:za,useEffect:Mo,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Lo(4194308,4,Fo.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var r=yo();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=yo();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=qo.bind(null,oo,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},yo().memoizedState=e},useState:zo,useDebugValue:Bo,useDeferredValue:function(e){return yo().memoizedState=e},useTransition:function(){var e=zo(!1),t=e[0];return e=Ho.bind(null,e[1]),yo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=oo,i=yo();if(ia){if(void 0===r)throw Error(a(407));r=r()}else{if(r=t(),null===Al)throw Error(a(349));0!==(30&ao)||Co(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Mo(Eo.bind(null,n,o,e),[e]),n.flags|=2048,Io(9,Po.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=yo(),t=Al.identifierPrefix;if(ia){var r=Xi;t=":"+t+"R"+(r=(Ki&~(1<<32-ot(Ki)-1)).toString(32)+r),0<(r=po++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=ho++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:za,useCallback:$o,useContext:za,useEffect:Oo,useImperativeHandle:Vo,useInsertionEffect:_o,useLayoutEffect:No,useMemo:Uo,useReducer:wo,useRef:Do,useState:function(){return wo(bo)},useDebugValue:Bo,useDeferredValue:function(e){return Wo(xo(),so.memoizedState,e)},useTransition:function(){return[wo(bo)[0],xo().memoizedState]},useMutableSource:So,useSyncExternalStore:ko,useId:Go,unstable_isNewReconciler:!1},ts={readContext:za,useCallback:$o,useContext:za,useEffect:Oo,useImperativeHandle:Vo,useInsertionEffect:_o,useLayoutEffect:No,useMemo:Uo,useReducer:jo,useRef:Do,useState:function(){return jo(bo)},useDebugValue:Bo,useDeferredValue:function(e){var t=xo();return null===so?t.memoizedState=e:Wo(t,so.memoizedState,e)},useTransition:function(){return[jo(bo)[0],xo().memoizedState]},useMutableSource:So,useSyncExternalStore:ko,useId:Go,unstable_isNewReconciler:!1};function rs(e,t){if(e&&e.defaultProps){for(var r in t=_({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}function ns(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:_({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&$e(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ec(),i=tc(e),a=Na(n,i);a.payload=t,void 0!==r&&null!==r&&(a.callback=r),null!==(t=Fa(e,a,i))&&(rc(t,e,i,n),Va(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ec(),i=tc(e),a=Na(n,i);a.tag=1,a.payload=t,void 0!==r&&null!==r&&(a.callback=r),null!==(t=Fa(e,a,i))&&(rc(t,e,i,n),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ec(),n=tc(e),i=Na(r,n);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Fa(e,i,n))&&(rc(t,e,n,r),Va(t,e,n))}};function as(e,t,r,n,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!ln(r,n)||!ln(i,a))}function os(e,t,r){var n=!1,i=Ei,a=t.contextType;return"object"===typeof a&&null!==a?a=za(a):(i=Di(t)?zi:Ti.current,a=(n=null!==(n=t.contextTypes)&&void 0!==n)?Ii(e,i):Ei),t=new t(r,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ss(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Oa(e);var a=t.contextType;"object"===typeof a&&null!==a?i.context=za(a):(a=Di(t)?zi:Ti.current,i.context=Ii(e,a)),i.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(ns(e,t,a,r),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),$a(e,r,i,n),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var r="",n=t;do{r+=B(n),n=n.return}while(n);var i=r}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function ds(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function us(e,t){try{console.error(t.value)}catch(r){setTimeout((function(){throw r}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function hs(e,t,r){(r=Na(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Wl||(Wl=!0,Hl=n),us(0,t)},r}function ms(e,t,r){(r=Na(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){us(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(r.callback=function(){us(0,t),"function"!==typeof n&&(null===Gl?Gl=new Set([this]):Gl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}function fs(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new ps;var i=new Set;n.set(t,i)}else void 0===(i=n.get(t))&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Cc.bind(null,e,t,r),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,r,n,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=Na(-1,1)).tag=2,Fa(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=b.ReactCurrentOwner,xs=!1;function bs(e,t,r,n){t.child=null===e?wa(t,null,r,n):ba(t,e.child,r,n)}function ws(e,t,r,n,i){r=r.render;var a=t.ref;return Aa(t,i),n=go(e,t,r,n,a,i),r=vo(),null===e||xs?(ia&&r&&ea(t),t.flags|=1,bs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function js(e,t,r,n,i){if(null===e){var a=r.type;return"function"!==typeof a||Dc(a)||void 0!==a.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=Rc(r.type,null,n,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ss(e,t,a,n,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((r=null!==(r=r.compare)?r:ln)(o,n)&&e.ref===t.ref)return Ws(e,t,i)}return t.flags|=1,(e=Lc(a,n)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,r,n,i){if(null!==e){var a=e.memoizedProps;if(ln(a,n)&&e.ref===t.ref){if(xs=!1,t.pendingProps=n=a,0===(e.lanes&i))return t.lanes=e.lanes,Ws(e,t,i);0!==(131072&e.flags)&&(xs=!0)}}return Ps(e,t,r,n,i)}function ks(e,t,r){var n=t.pendingProps,i=n.children,a=null!==e?e.memoizedState:null;if("hidden"===n.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pi(Ll,Dl),Dl|=r;else{if(0===(1073741824&r))return e=null!==a?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pi(Ll,Dl),Dl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==a?a.baseLanes:r,Pi(Ll,Dl),Dl|=n}else null!==a?(n=a.baseLanes|r,t.memoizedState=null):n=r,Pi(Ll,Dl),Dl|=n;return bs(e,t,i,r),t.child}function Cs(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ps(e,t,r,n,i){var a=Di(r)?zi:Ti.current;return a=Ii(t,a),Aa(t,i),r=go(e,t,r,n,a,i),n=vo(),null===e||xs?(ia&&n&&ea(t),t.flags|=1,bs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function Es(e,t,r,n,i){if(Di(r)){var a=!0;Oi(t)}else a=!1;if(Aa(t,i),null===t.stateNode)Us(e,t),os(t,r,n),ls(t,r,n,i),n=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=r.contextType;"object"===typeof c&&null!==c?c=za(c):c=Ii(t,c=Di(r)?zi:Ti.current);var d=r.getDerivedStateFromProps,u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate;u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==n||l!==c)&&ss(t,o,n,c),Ma=!1;var p=t.memoizedState;o.state=p,$a(t,n,o,i),l=t.memoizedState,s!==n||p!==l||Ai.current||Ma?("function"===typeof d&&(ns(t,r,d,n),l=t.memoizedState),(s=Ma||as(t,r,s,n,p,l,c))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=c,n=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,_a(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:rs(t.type,s),o.props=c,u=t.pendingProps,p=o.context,"object"===typeof(l=r.contextType)&&null!==l?l=za(l):l=Ii(t,l=Di(r)?zi:Ti.current);var h=r.getDerivedStateFromProps;(d="function"===typeof h||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==u||p!==l)&&ss(t,o,n,l),Ma=!1,p=t.memoizedState,o.state=p,$a(t,n,o,i);var m=t.memoizedState;s!==u||p!==m||Ai.current||Ma?("function"===typeof h&&(ns(t,r,h,n),m=t.memoizedState),(c=Ma||as(t,r,c,n,p,m,l)||!1)?(d||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(n,m,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(n,m,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),o.props=n,o.state=m,o.context=l,n=c):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Ts(e,t,r,n,a,i)}function Ts(e,t,r,n,i,a){Cs(e,t);var o=0!==(128&t.flags);if(!n&&!o)return i&&_i(t,r,!1),Ws(e,t,a);n=t.stateNode,ys.current=t;var s=o&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&o?(t.child=ba(t,e.child,null,a),t.child=ba(t,null,s,a)):bs(e,t,s,a),t.memoizedState=n.state,i&&_i(t,r,!0),t.child}function As(e){var t=e.stateNode;t.pendingContext?Ri(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ri(0,t.context,!1),Qa(e,t.containerInfo)}function zs(e,t,r,n,i){return ha(),ma(i),t.flags|=256,bs(e,t,r,n),t.child}var Is,Ds,Ls,Rs,Ms={dehydrated:null,treeContext:null,retryLane:0};function Os(e){return{baseLanes:e,cachePool:null,transitions:null}}function _s(e,t,r){var n,i=t.pendingProps,o=Za.current,s=!1,l=0!==(128&t.flags);if((n=l)||(n=(null===e||null!==e.memoizedState)&&0!==(2&o)),n?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Pi(Za,1&o),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Oc(l,i,0,null),e=Mc(e,i,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Os(r),t.memoizedState=Ms,e):Ns(t,l));if(null!==(o=e.memoizedState)&&null!==(n=o.dehydrated))return function(e,t,r,n,i,o,s){if(r)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,n=ds(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Oc({mode:"visible",children:n.children},i,0,null),(o=Mc(o,i,s,null)).flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,0!==(1&t.mode)&&ba(t,e.child,null,s),t.child.memoizedState=Os(s),t.memoizedState=Ms,o);if(0===(1&t.mode))return Fs(e,t,s,null);if("$!"===i.data){if(n=i.nextSibling&&i.nextSibling.dataset)var l=n.dgst;return n=l,Fs(e,t,s,n=ds(o=Error(a(419)),n,void 0))}if(l=0!==(s&e.childLanes),xs||l){if(null!==(n=Al)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(n.suspendedLanes|s))?0:i)&&i!==o.retryLane&&(o.retryLane=i,Ra(e,i),rc(n,e,i,-1))}return fc(),Fs(e,t,s,n=ds(Error(a(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Ec.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,na=ci(i.nextSibling),ra=t,ia=!0,aa=null,null!==e&&(qi[Yi++]=Ki,qi[Yi++]=Xi,qi[Yi++]=Qi,Ki=e.id,Xi=e.overflow,Qi=t),t=Ns(t,n.children),t.flags|=4096,t)}(e,t,l,i,n,o,r);if(s){s=i.fallback,l=t.mode,n=(o=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Lc(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==n?s=Lc(n,s):(s=Mc(s,l,r,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Os(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=Ms,i}return e=(s=e.child).sibling,i=Lc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=r),i.return=t,i.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Ns(e,t){return(t=Oc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,r,n){return null!==n&&ma(n),ba(t,e.child,null,r),(e=Ns(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vs(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),Ta(e.return,t,r)}function Bs(e,t,r,n,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function $s(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(bs(e,t,n.children,r),0!==(2&(n=Za.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vs(e,r,t);else if(19===e.tag)Vs(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Pi(Za,n),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;null!==r;)null!==(e=r.alternate)&&null===eo(e)&&(i=r),r=r.sibling;null===(r=i)?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Bs(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Bs(t,!0,r,null,a);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Us(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Ol|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(r=Lc(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Lc(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Hs(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Gs(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=14680064&i.subtreeFlags,n|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function qs(e,t,r){var n=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gs(t),null;case 1:case 17:return Di(t.type)&&Li(),Gs(t),null;case 3:return n=t.stateNode,Ka(),Ci(Ai),Ci(Ti),ro(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ua(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(oc(aa),aa=null))),Ds(e,t),Gs(t),null;case 5:Ja(t);var i=Ya(qa.current);if(r=t.type,null!==e&&null!=t.stateNode)Ls(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(a(166));return Gs(t),null}if(e=Ya(Ha.current),ua(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[pi]=t,n[hi]=o,e=0!==(1&t.mode),r){case"dialog":Fn("cancel",n),Fn("close",n);break;case"iframe":case"object":case"embed":Fn("load",n);break;case"video":case"audio":for(i=0;i<Mn.length;i++)Fn(Mn[i],n);break;case"source":Fn("error",n);break;case"img":case"image":case"link":Fn("error",n),Fn("load",n);break;case"details":Fn("toggle",n);break;case"input":K(n,o),Fn("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Fn("invalid",n);break;case"textarea":ie(n,o),Fn("invalid",n)}for(var l in ye(r,o),i=null,o)if(o.hasOwnProperty(l)){var c=o[l];"children"===l?"string"===typeof c?n.textContent!==c&&(!0!==o.suppressHydrationWarning&&Jn(n.textContent,c,e),i=["children",c]):"number"===typeof c&&n.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Jn(n.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Fn("scroll",n)}switch(r){case"input":G(n),Z(n,o,!0);break;case"textarea":G(n),oe(n);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(n.onclick=Zn)}n=i,t.updateQueue=n,null!==n&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),"select"===r&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[pi]=t,e[hi]=n,Is(e,t,!1,!1),t.stateNode=e;e:{switch(l=xe(r,n),r){case"dialog":Fn("cancel",e),Fn("close",e),i=n;break;case"iframe":case"object":case"embed":Fn("load",e),i=n;break;case"video":case"audio":for(i=0;i<Mn.length;i++)Fn(Mn[i],e);i=n;break;case"source":Fn("error",e),i=n;break;case"img":case"image":case"link":Fn("error",e),Fn("load",e),i=n;break;case"details":Fn("toggle",e),i=n;break;case"input":K(e,n),i=Q(e,n),Fn("invalid",e);break;case"option":default:i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=_({},n,{value:void 0}),Fn("invalid",e);break;case"textarea":ie(e,n),i=ne(e,n),Fn("invalid",e)}for(o in ye(r,i),c=i)if(c.hasOwnProperty(o)){var d=c[o];"style"===o?ge(e,d):"dangerouslySetInnerHTML"===o?null!=(d=d?d.__html:void 0)&&ue(e,d):"children"===o?"string"===typeof d?("textarea"!==r||""!==d)&&pe(e,d):"number"===typeof d&&pe(e,""+d):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(s.hasOwnProperty(o)?null!=d&&"onScroll"===o&&Fn("scroll",e):null!=d&&x(e,o,d,l))}switch(r){case"input":G(e),Z(e,n,!1);break;case"textarea":G(e),oe(e);break;case"option":null!=n.value&&e.setAttribute("value",""+W(n.value));break;case"select":e.multiple=!!n.multiple,null!=(o=n.value)?re(e,!!n.multiple,o,!1):null!=n.defaultValue&&re(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Gs(t),null;case 6:if(e&&null!=t.stateNode)Rs(e,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(a(166));if(r=Ya(qa.current),Ya(Ha.current),ua(t)){if(n=t.stateNode,r=t.memoizedProps,n[pi]=t,(o=n.nodeValue!==r)&&null!==(e=ra))switch(e.tag){case 3:Jn(n.nodeValue,r,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jn(n.nodeValue,r,0!==(1&e.mode))}o&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[pi]=t,t.stateNode=n}return Gs(t),null;case 13:if(Ci(Za),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==na&&0!==(1&t.mode)&&0===(128&t.flags))pa(),ha(),t.flags|=98560,o=!1;else if(o=ua(t),null!==n&&null!==n.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[pi]=t}else ha(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gs(t),o=!1}else null!==aa&&(oc(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=r,t):((n=null!==n)!==(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Za.current)?0===Rl&&(Rl=3):fc())),null!==t.updateQueue&&(t.flags|=4),Gs(t),null);case 4:return Ka(),Ds(e,t),null===e&&$n(t.stateNode.containerInfo),Gs(t),null;case 10:return Ea(t.type._context),Gs(t),null;case 19:if(Ci(Za),null===(o=t.memoizedState))return Gs(t),null;if(n=0!==(128&t.flags),null===(l=o.rendering))if(n)Hs(o,!1);else{if(0!==Rl||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=eo(e))){for(t.flags|=128,Hs(o,!1),null!==(n=l.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)e=n,(o=r).flags&=14680066,null===(l=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Pi(Za,1&Za.current|2),t.child}e=e.sibling}null!==o.tail&&Xe()>$l&&(t.flags|=128,n=!0,Hs(o,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=eo(l))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Hs(o,!0),null===o.tail&&"hidden"===o.tailMode&&!l.alternate&&!ia)return Gs(t),null}else 2*Xe()-o.renderingStartTime>$l&&1073741824!==r&&(t.flags|=128,n=!0,Hs(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(null!==(r=o.last)?r.sibling=l:t.child=l,o.last=l)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xe(),t.sibling=null,r=Za.current,Pi(Za,n?1&r|2:1&r),t):(Gs(t),null);case 22:case 23:return uc(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!==(1&t.mode)?0!==(1073741824&Dl)&&(Gs(t),6&t.subtreeFlags&&(t.flags|=8192)):Gs(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Ys(e,t){switch(ta(t),t.tag){case 1:return Di(t.type)&&Li(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ka(),Ci(Ai),Ci(Ti),ro(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Ci(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(Za),null;case 4:return Ka(),null;case 10:return Ea(t.type._context),null;case 22:case 23:return uc(),null;default:return null}}Is=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ds=function(){},Ls=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Ya(Ha.current);var a,o=null;switch(r){case"input":i=Q(e,i),n=Q(e,n),o=[];break;case"select":i=_({},i,{value:void 0}),n=_({},n,{value:void 0}),o=[];break;case"textarea":i=ne(e,i),n=ne(e,n),o=[];break;default:"function"!==typeof i.onClick&&"function"===typeof n.onClick&&(e.onclick=Zn)}for(d in ye(r,n),r=null,i)if(!n.hasOwnProperty(d)&&i.hasOwnProperty(d)&&null!=i[d])if("style"===d){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else"dangerouslySetInnerHTML"!==d&&"children"!==d&&"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(s.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in n){var c=n[d];if(l=null!=i?i[d]:void 0,n.hasOwnProperty(d)&&c!==l&&(null!=c||null!=l))if("style"===d)if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(o||(o=[]),o.push(d,r)),r=c;else"dangerouslySetInnerHTML"===d?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(o=o||[]).push(d,c)):"children"===d?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(d,""+c):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&(s.hasOwnProperty(d)?(null!=c&&"onScroll"===d&&Fn("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}r&&(o=o||[]).push("style",r);var d=o;(t.updateQueue=d)&&(t.flags|=4)}},Rs=function(e,t,r,n){r!==n&&(t.flags|=4)};var Qs=!1,Ks=!1,Xs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var r=e.ref;if(null!==r)if("function"===typeof r)try{r(null)}catch(n){kc(e,t,n)}else r.current=null}function el(e,t,r){try{r()}catch(n){kc(e,t,n)}}var tl=!1;function rl(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&el(t,r,a)}i=i.next}while(i!==n)}}function nl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function il(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"===typeof t?t(e):t.current=e}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[hi],delete t[fi],delete t[gi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ol(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Zn));else if(4!==n&&null!==(e=e.child))for(ll(e,t,r),e=e.sibling;null!==e;)ll(e,t,r),e=e.sibling}function cl(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(cl(e,t,r),e=e.sibling;null!==e;)cl(e,t,r),e=e.sibling}var dl=null,ul=!1;function pl(e,t,r){for(r=r.child;null!==r;)hl(e,t,r),r=r.sibling}function hl(e,t,r){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(it,r)}catch(s){}switch(r.tag){case 5:Ks||Zs(r,t);case 6:var n=dl,i=ul;dl=null,pl(e,t,r),ul=i,null!==(dl=n)&&(ul?(e=dl,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):dl.removeChild(r.stateNode));break;case 18:null!==dl&&(ul?(e=dl,r=r.stateNode,8===e.nodeType?li(e.parentNode,r):1===e.nodeType&&li(e,r),$t(e)):li(dl,r.stateNode));break;case 4:n=dl,i=ul,dl=r.stateNode.containerInfo,ul=!0,pl(e,t,r),dl=n,ul=i;break;case 0:case 11:case 14:case 15:if(!Ks&&(null!==(n=r.updateQueue)&&null!==(n=n.lastEffect))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&el(r,t,o),i=i.next}while(i!==n)}pl(e,t,r);break;case 1:if(!Ks&&(Zs(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){kc(r,t,s)}pl(e,t,r);break;case 21:pl(e,t,r);break;case 22:1&r.mode?(Ks=(n=Ks)||null!==r.memoizedState,pl(e,t,r),Ks=n):pl(e,t,r);break;default:pl(e,t,r)}}function ml(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new Xs),t.forEach((function(t){var n=Tc.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}}function fl(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,ul=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,ul=!0;break e}l=l.return}if(null===dl)throw Error(a(160));hl(o,s,i),dl=null,ul=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(d){kc(i,t,d)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fl(t,e),vl(e),4&n){try{rl(3,e,e.return),nl(3,e)}catch(g){kc(e,e.return,g)}try{rl(5,e,e.return)}catch(g){kc(e,e.return,g)}}break;case 1:fl(t,e),vl(e),512&n&&null!==r&&Zs(r,r.return);break;case 5:if(fl(t,e),vl(e),512&n&&null!==r&&Zs(r,r.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){kc(e,e.return,g)}}if(4&n&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==r?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===o.type&&null!=o.name&&X(i,o),xe(l,s);var d=xe(l,o);for(s=0;s<c.length;s+=2){var u=c[s],p=c[s+1];"style"===u?ge(i,p):"dangerouslySetInnerHTML"===u?ue(i,p):"children"===u?pe(i,p):x(i,u,p,d)}switch(l){case"input":J(i,o);break;case"textarea":ae(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;null!=m?re(i,!!o.multiple,m,!1):h!==!!o.multiple&&(null!=o.defaultValue?re(i,!!o.multiple,o.defaultValue,!0):re(i,!!o.multiple,o.multiple?[]:"",!1))}i[hi]=o}catch(g){kc(e,e.return,g)}}break;case 6:if(fl(t,e),vl(e),4&n){if(null===e.stateNode)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){kc(e,e.return,g)}}break;case 3:if(fl(t,e),vl(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{$t(t.containerInfo)}catch(g){kc(e,e.return,g)}break;case 4:default:fl(t,e),vl(e);break;case 13:fl(t,e),vl(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(Bl=Xe())),4&n&&ml(e);break;case 22:if(u=null!==r&&null!==r.memoizedState,1&e.mode?(Ks=(d=Ks)||u,fl(t,e),Ks=d):fl(t,e),vl(e),8192&n){if(d=null!==e.memoizedState,(e.stateNode.isHidden=d)&&!u&&0!==(1&e.mode))for(Js=e,u=e.child;null!==u;){for(p=Js=u;null!==Js;){switch(m=(h=Js).child,h.tag){case 0:case 11:case 14:case 15:rl(4,h,h.return);break;case 1:Zs(h,h.return);var f=h.stateNode;if("function"===typeof f.componentWillUnmount){n=h,r=h.return;try{t=n,f.props=t.memoizedProps,f.state=t.memoizedState,f.componentWillUnmount()}catch(g){kc(n,r,g)}}break;case 5:Zs(h,h.return);break;case 22:if(null!==h.memoizedState){wl(p);continue}}null!==m?(m.return=h,Js=m):wl(p)}u=u.sibling}e:for(u=null,p=e;;){if(5===p.tag){if(null===u){u=p;try{i=p.stateNode,d?"function"===typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=fe("display",s))}catch(g){kc(e,e.return,g)}}}else if(6===p.tag){if(null===u)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(g){kc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:fl(t,e),vl(e),4&n&&ml(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(ol(r)){var n=r;break e}r=r.return}throw Error(a(160))}switch(n.tag){case 5:var i=n.stateNode;32&n.flags&&(pe(i,""),n.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var o=n.stateNode.containerInfo;ll(e,sl(e),o);break;default:throw Error(a(161))}}catch(s){kc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,r){Js=e,xl(e,t,r)}function xl(e,t,r){for(var n=0!==(1&e.mode);null!==Js;){var i=Js,a=i.child;if(22===i.tag&&n){var o=null!==i.memoizedState||Qs;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Ks;s=Qs;var c=Ks;if(Qs=o,(Ks=l)&&!c)for(Js=i;null!==Js;)l=(o=Js).child,22===o.tag&&null!==o.memoizedState?jl(i):null!==l?(l.return=o,Js=l):jl(i);for(;null!==a;)Js=a,xl(a,t,r),a=a.sibling;Js=i,Qs=s,Ks=c}bl(e)}else 0!==(8772&i.subtreeFlags)&&null!==a?(a.return=i,Js=a):bl(e)}}function bl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var r=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ks||nl(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!Ks)if(null===r)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:rs(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ua(t,o,n);break;case 3:var s=t.updateQueue;if(null!==s){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Ua(t,s,r)}break;case 5:var l=t.stateNode;if(null===r&&4&t.flags){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var d=t.alternate;if(null!==d){var u=d.memoizedState;if(null!==u){var p=u.dehydrated;null!==p&&$t(p)}}}break;default:throw Error(a(163))}Ks||512&t.flags&&il(t)}catch(h){kc(t,t.return,h)}}if(t===e){Js=null;break}if(null!==(r=t.sibling)){r.return=t.return,Js=r;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var r=t.sibling;if(null!==r){r.return=t.return,Js=r;break}Js=t.return}}function jl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{nl(4,t)}catch(l){kc(t,r,l)}break;case 1:var n=t.stateNode;if("function"===typeof n.componentDidMount){var i=t.return;try{n.componentDidMount()}catch(l){kc(t,i,l)}}var a=t.return;try{il(t)}catch(l){kc(t,a,l)}break;case 5:var o=t.return;try{il(t)}catch(l){kc(t,o,l)}}}catch(l){kc(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,kl=Math.ceil,Cl=b.ReactCurrentDispatcher,Pl=b.ReactCurrentOwner,El=b.ReactCurrentBatchConfig,Tl=0,Al=null,zl=null,Il=0,Dl=0,Ll=ki(0),Rl=0,Ml=null,Ol=0,_l=0,Nl=0,Fl=null,Vl=null,Bl=0,$l=1/0,Ul=null,Wl=!1,Hl=null,Gl=null,ql=!1,Yl=null,Ql=0,Kl=0,Xl=null,Jl=-1,Zl=0;function ec(){return 0!==(6&Tl)?Xe():-1!==Jl?Jl:Jl=Xe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Tl)&&0!==Il?Il&-Il:null!==fa.transition?(0===Zl&&(Zl=ft()),Zl):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Kt(e.type)}function rc(e,t,r,n){if(50<Kl)throw Kl=0,Xl=null,Error(a(185));vt(e,r,n),0!==(2&Tl)&&e===Al||(e===Al&&(0===(2&Tl)&&(_l|=r),4===Rl&&sc(e,Il)),nc(e,n),1===r&&0===Tl&&0===(1&t.mode)&&($l=Xe()+500,Fi&&$i()))}function nc(e,t){var r=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),s=1<<o,l=i[o];-1===l?0!==(s&r)&&0===(s&n)||(i[o]=ht(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var n=pt(e,e===Al?Il:0);if(0===n)null!==r&&Ye(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(null!=r&&Ye(r),1===t)0===e.tag?function(e){Fi=!0,Bi(e)}(lc.bind(null,e)):Bi(lc.bind(null,e)),oi((function(){0===(6&Tl)&&$i()})),r=null;else{switch(bt(n)){case 1:r=Ze;break;case 4:r=et;break;case 16:default:r=tt;break;case 536870912:r=nt}r=Ac(r,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ic(e,t){if(Jl=-1,Zl=0,0!==(6&Tl))throw Error(a(327));var r=e.callbackNode;if(jc()&&e.callbackNode!==r)return null;var n=pt(e,e===Al?Il:0);if(0===n)return null;if(0!==(30&n)||0!==(n&e.expiredLanes)||t)t=gc(e,n);else{t=n;var i=Tl;Tl|=2;var o=mc();for(Al===e&&Il===t||(Ul=null,$l=Xe()+500,pc(e,t));;)try{yc();break}catch(l){hc(e,l)}Pa(),Cl.current=o,Tl=i,null!==zl?t=0:(Al=null,Il=0,t=Rl)}if(0!==t){if(2===t&&(0!==(i=mt(e))&&(n=i,t=ac(e,i))),1===t)throw r=Ml,pc(e,0),sc(e,n),nc(e,Xe()),r;if(6===t)sc(e,n);else{if(i=e.current.alternate,0===(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!sn(a(),i))return!1}catch(s){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,n))&&(0!==(o=mt(e))&&(n=o,t=ac(e,o))),1===t))throw r=Ml,pc(e,0),sc(e,n),nc(e,Xe()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,Vl,Ul);break;case 3:if(sc(e,n),(130023424&n)===n&&10<(t=Bl+500-Xe())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&n)!==n){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ni(wc.bind(null,e,Vl,Ul),t);break}wc(e,Vl,Ul);break;case 4:if(sc(e,n),(4194240&n)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-ot(n);o=1<<s,(s=t[s])>i&&(i=s),n&=~o}if(n=i,10<(n=(120>(n=Xe()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*kl(n/1960))-n)){e.timeoutHandle=ni(wc.bind(null,e,Vl,Ul),n);break}wc(e,Vl,Ul);break;default:throw Error(a(329))}}}return nc(e,Xe()),e.callbackNode===r?ic.bind(null,e):null}function ac(e,t){var r=Fl;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Vl,Vl=r,null!==t&&oc(t)),e}function oc(e){null===Vl?Vl=e:Vl.push.apply(Vl,e)}function sc(e,t){for(t&=~Nl,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ot(t),n=1<<r;e[r]=-1,t&=~n}}function lc(e){if(0!==(6&Tl))throw Error(a(327));jc();var t=pt(e,0);if(0===(1&t))return nc(e,Xe()),null;var r=gc(e,t);if(0!==e.tag&&2===r){var n=mt(e);0!==n&&(t=n,r=ac(e,n))}if(1===r)throw r=Ml,pc(e,0),sc(e,t),nc(e,Xe()),r;if(6===r)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Vl,Ul),nc(e,Xe()),null}function cc(e,t){var r=Tl;Tl|=1;try{return e(t)}finally{0===(Tl=r)&&($l=Xe()+500,Fi&&$i())}}function dc(e){null!==Yl&&0===Yl.tag&&0===(6&Tl)&&jc();var t=Tl;Tl|=1;var r=El.transition,n=xt;try{if(El.transition=null,xt=1,e)return e()}finally{xt=n,El.transition=r,0===(6&(Tl=t))&&$i()}}function uc(){Dl=Ll.current,Ci(Ll)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,ii(r)),null!==zl)for(r=zl.return;null!==r;){var n=r;switch(ta(n),n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&Li();break;case 3:Ka(),Ci(Ai),Ci(Ti),ro();break;case 5:Ja(n);break;case 4:Ka();break;case 13:case 19:Ci(Za);break;case 10:Ea(n.type._context);break;case 22:case 23:uc()}r=r.return}if(Al=e,zl=e=Lc(e.current,null),Il=Dl=t,Rl=0,Ml=null,Nl=_l=Ol=0,Vl=Fl=null,null!==Ia){for(t=0;t<Ia.length;t++)if(null!==(n=(r=Ia[t]).interleaved)){r.interleaved=null;var i=n.next,a=r.pending;if(null!==a){var o=a.next;a.next=i,n.next=o}r.pending=n}Ia=null}return e}function hc(e,t){for(;;){var r=zl;try{if(Pa(),no.current=Jo,co){for(var n=oo.memoizedState;null!==n;){var i=n.queue;null!==i&&(i.pending=null),n=n.next}co=!1}if(ao=0,lo=so=oo=null,uo=!1,po=0,Pl.current=null,null===r||null===r.return){Rl=1,Ml=t,zl=null;break}e:{var o=e,s=r.return,l=r,c=t;if(t=Il,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var d=c,u=l,p=u.tag;if(0===(1&u.mode)&&(0===p||11===p||15===p)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=gs(s);if(null!==m){m.flags&=-257,vs(m,s,l,0,t),1&m.mode&&fs(o,d,t),c=d;var f=(t=m).updateQueue;if(null===f){var g=new Set;g.add(c),t.updateQueue=g}else f.add(c);break e}if(0===(1&t)){fs(o,d,t),fc();break e}c=Error(a(426))}else if(ia&&1&l.mode){var v=gs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),ma(cs(c,l));break e}}o=c=cs(c,l),4!==Rl&&(Rl=2),null===Fl?Fl=[o]:Fl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ba(o,hs(0,c,t));break e;case 1:l=c;var y=o.type,x=o.stateNode;if(0===(128&o.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Gl||!Gl.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t,Ba(o,ms(o,l,t));break e}}o=o.return}while(null!==o)}bc(r)}catch(b){t=b,zl===r&&null!==r&&(zl=r=r.return);continue}break}}function mc(){var e=Cl.current;return Cl.current=Jo,null===e?Jo:e}function fc(){0!==Rl&&3!==Rl&&2!==Rl||(Rl=4),null===Al||0===(268435455&Ol)&&0===(268435455&_l)||sc(Al,Il)}function gc(e,t){var r=Tl;Tl|=2;var n=mc();for(Al===e&&Il===t||(Ul=null,pc(e,t));;)try{vc();break}catch(i){hc(e,i)}if(Pa(),Tl=r,Cl.current=n,null!==zl)throw Error(a(261));return Al=null,Il=0,Rl}function vc(){for(;null!==zl;)xc(zl)}function yc(){for(;null!==zl&&!Qe();)xc(zl)}function xc(e){var t=Sl(e.alternate,e,Dl);e.memoizedProps=e.pendingProps,null===t?bc(e):zl=t,Pl.current=null}function bc(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(r=qs(r,t,Dl)))return void(zl=r)}else{if(null!==(r=Ys(r,t)))return r.flags&=32767,void(zl=r);if(null===e)return Rl=6,void(zl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(zl=t);zl=t=e}while(null!==t);0===Rl&&(Rl=5)}function wc(e,t,r){var n=xt,i=El.transition;try{El.transition=null,xt=1,function(e,t,r,n){do{jc()}while(null!==Yl);if(0!==(6&Tl))throw Error(a(327));r=e.finishedWork;var i=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-ot(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}(e,o),e===Al&&(zl=Al=null,Il=0),0===(2064&r.subtreeFlags)&&0===(2064&r.flags)||ql||(ql=!0,Ac(tt,(function(){return jc(),null}))),o=0!==(15990&r.flags),0!==(15990&r.subtreeFlags)||o){o=El.transition,El.transition=null;var s=xt;xt=1;var l=Tl;Tl|=4,Pl.current=null,function(e,t){if(ei=Wt,hn(e=pn())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch(w){r=null;break e}var s=0,l=-1,c=-1,d=0,u=0,p=e,h=null;t:for(;;){for(var m;p!==r||0!==i&&3!==p.nodeType||(l=s+i),p!==o||0!==n&&3!==p.nodeType||(c=s+n),3===p.nodeType&&(s+=p.nodeValue.length),null!==(m=p.firstChild);)h=p,p=m;for(;;){if(p===e)break t;if(h===r&&++d===i&&(l=s),h===o&&++u===n&&(c=s),null!==(m=p.nextSibling))break;h=(p=h).parentNode}p=m}r=-1===l||-1===c?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ti={focusedElem:e,selectionRange:r},Wt=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var f=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==f){var g=f.memoizedProps,v=f.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:rs(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(a(163))}}catch(w){kc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}f=tl,tl=!1}(e,r),gl(r,e),mn(ti),Wt=!!ei,ti=ei=null,e.current=r,yl(r,e,i),Ke(),Tl=l,xt=s,El.transition=o}else e.current=r;if(ql&&(ql=!1,Yl=e,Ql=i),o=e.pendingLanes,0===o&&(Gl=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(r.stateNode),nc(e,Xe()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,e=Hl,Hl=null,e;0!==(1&Ql)&&0!==e.tag&&jc(),o=e.pendingLanes,0!==(1&o)?e===Xl?Kl++:(Kl=0,Xl=e):Kl=0,$i()}(e,t,r,n)}finally{El.transition=i,xt=n}return null}function jc(){if(null!==Yl){var e=bt(Ql),t=El.transition,r=xt;try{if(El.transition=null,xt=16>e?16:e,null===Yl)var n=!1;else{if(e=Yl,Yl=null,Ql=0,0!==(6&Tl))throw Error(a(331));var i=Tl;for(Tl|=4,Js=e.current;null!==Js;){var o=Js,s=o.child;if(0!==(16&Js.flags)){var l=o.deletions;if(null!==l){for(var c=0;c<l.length;c++){var d=l[c];for(Js=d;null!==Js;){var u=Js;switch(u.tag){case 0:case 11:case 15:rl(8,u,o)}var p=u.child;if(null!==p)p.return=u,Js=p;else for(;null!==Js;){var h=(u=Js).sibling,m=u.return;if(al(u),u===d){Js=null;break}if(null!==h){h.return=m,Js=h;break}Js=m}}}var f=o.alternate;if(null!==f){var g=f.child;if(null!==g){f.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Js=o}}if(0!==(2064&o.subtreeFlags)&&null!==s)s.return=o,Js=s;else e:for(;null!==Js;){if(0!==(2048&(o=Js).flags))switch(o.tag){case 0:case 11:case 15:rl(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,Js=y;break e}Js=o.return}}var x=e.current;for(Js=x;null!==Js;){var b=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Js=b;else e:for(s=x;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:nl(9,l)}}catch(j){kc(l,l.return,j)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(Tl=i,$i(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(it,e)}catch(j){}n=!0}return n}finally{xt=r,El.transition=t}}return!1}function Sc(e,t,r){e=Fa(e,t=hs(0,t=cs(r,t),1),1),t=ec(),null!==e&&(vt(e,1,t),nc(e,t))}function kc(e,t,r){if(3===e.tag)Sc(e,e,r);else for(;null!==t;){if(3===t.tag){Sc(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Gl||!Gl.has(n))){t=Fa(t,e=ms(t,e=cs(r,e),1),1),e=ec(),null!==t&&(vt(t,1,e),nc(t,e));break}}t=t.return}}function Cc(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&r,Al===e&&(Il&r)===r&&(4===Rl||3===Rl&&(130023424&Il)===Il&&500>Xe()-Bl?pc(e,0):Nl|=r),nc(e,t)}function Pc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=dt,0===(130023424&(dt<<=1))&&(dt=4194304)));var r=ec();null!==(e=Ra(e,t))&&(vt(e,t,r),nc(e,r))}function Ec(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),Pc(e,r)}function Tc(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;null!==i&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(a(314))}null!==n&&n.delete(t),Pc(e,r)}function Ac(e,t){return qe(e,t)}function zc(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ic(e,t,r,n){return new zc(e,t,r,n)}function Dc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lc(e,t){var r=e.alternate;return null===r?((r=Ic(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Rc(e,t,r,n,i,o){var s=2;if(n=e,"function"===typeof e)Dc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Mc(r.children,i,o,t);case k:s=8,i|=8;break;case C:return(e=Ic(12,r,t,2|i)).elementType=C,e.lanes=o,e;case A:return(e=Ic(13,r,t,i)).elementType=A,e.lanes=o,e;case z:return(e=Ic(19,r,t,i)).elementType=z,e.lanes=o,e;case L:return Oc(r,i,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case P:s=10;break e;case E:s=9;break e;case T:s=11;break e;case I:s=14;break e;case D:s=16,n=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Ic(s,r,t,i)).elementType=e,t.type=n,t.lanes=o,t}function Mc(e,t,r,n){return(e=Ic(7,e,n,t)).lanes=r,e}function Oc(e,t,r,n){return(e=Ic(22,e,n,t)).elementType=L,e.lanes=r,e.stateNode={isHidden:!1},e}function _c(e,t,r){return(e=Ic(6,e,null,t)).lanes=r,e}function Nc(e,t,r){return(t=Ic(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,r,n,i,a,o,s,l){return e=new Fc(e,t,r,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Ic(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oa(a),e}function Bc(e){if(!e)return Ei;e:{if($e(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Di(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var r=e.type;if(Di(r))return Mi(e,r,t)}return t}function $c(e,t,r,n,i,a,o,s,l){return(e=Vc(r,n,!0,e,0,a,0,s,l)).context=Bc(null),r=e.current,(a=Na(n=ec(),i=tc(r))).callback=void 0!==t&&null!==t?t:null,Fa(r,a,i),e.current.lanes=i,vt(e,i,n),nc(e,n),e}function Uc(e,t,r,n){var i=t.current,a=ec(),o=tc(i);return r=Bc(r),null===t.context?t.context=r:t.pendingContext=r,(t=Na(a,o)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=Fa(i,t,o))&&(rc(e,i,o,a),Va(e,i,o)),o}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function Gc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}Sl=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ai.current)xs=!0;else{if(0===(e.lanes&r)&&0===(128&t.flags))return xs=!1,function(e,t,r){switch(t.tag){case 3:As(t),ha();break;case 5:Xa(t);break;case 1:Di(t.type)&&Oi(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;Pi(ja,n._currentValue),n._currentValue=i;break;case 13:if(null!==(n=t.memoizedState))return null!==n.dehydrated?(Pi(Za,1&Za.current),t.flags|=128,null):0!==(r&t.child.childLanes)?_s(e,t,r):(Pi(Za,1&Za.current),null!==(e=Ws(e,t,r))?e.sibling:null);Pi(Za,1&Za.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(128&e.flags)){if(n)return $s(e,t,r);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pi(Za,Za.current),n)break;return null;case 22:case 23:return t.lanes=0,ks(e,t,r)}return Ws(e,t,r)}(e,t,r);xs=0!==(131072&e.flags)}else xs=!1,ia&&0!==(1048576&t.flags)&&Zi(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Us(e,t),e=t.pendingProps;var i=Ii(t,Ti.current);Aa(t,r),i=go(null,t,n,e,i,r);var o=vo();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Di(n)?(o=!0,Oi(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Oa(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,n,e,r),t=Ts(null,t,n,!0,o,r)):(t.tag=0,ia&&o&&ea(t),bs(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Us(e,t),e=t.pendingProps,n=(i=n._init)(n._payload),t.type=n,i=t.tag=function(e){if("function"===typeof e)return Dc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===I)return 14}return 2}(n),e=rs(n,e),i){case 0:t=Ps(null,t,n,e,r);break e;case 1:t=Es(null,t,n,e,r);break e;case 11:t=ws(null,t,n,e,r);break e;case 14:t=js(null,t,n,rs(n.type,e),r);break e}throw Error(a(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,Ps(e,t,n,i=t.elementType===n?i:rs(n,i),r);case 1:return n=t.type,i=t.pendingProps,Es(e,t,n,i=t.elementType===n?i:rs(n,i),r);case 3:e:{if(As(t),null===e)throw Error(a(387));n=t.pendingProps,i=(o=t.memoizedState).element,_a(e,t),$a(t,n,null,r);var s=t.memoizedState;if(n=s.element,o.isDehydrated){if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=zs(e,t,n,r,i=cs(Error(a(423)),t));break e}if(n!==i){t=zs(e,t,n,r,i=cs(Error(a(424)),t));break e}for(na=ci(t.stateNode.containerInfo.firstChild),ra=t,ia=!0,aa=null,r=wa(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(ha(),n===i){t=Ws(e,t,r);break e}bs(e,t,n,r)}t=t.child}return t;case 5:return Xa(t),null===e&&ca(t),n=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,ri(n,i)?s=null:null!==o&&ri(n,o)&&(t.flags|=32),Cs(e,t),bs(e,t,s,r),t.child;case 6:return null===e&&ca(t),null;case 13:return _s(e,t,r);case 4:return Qa(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=ba(t,null,n,r):bs(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,ws(e,t,n,i=t.elementType===n?i:rs(n,i),r);case 7:return bs(e,t,t.pendingProps,r),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Pi(ja,n._currentValue),n._currentValue=s,null!==o)if(sn(o.value,s)){if(o.children===i.children&&!Ai.current){t=Ws(e,t,r);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var c=l.firstContext;null!==c;){if(c.context===n){if(1===o.tag){(c=Na(-1,r&-r)).tag=2;var d=o.updateQueue;if(null!==d){var u=(d=d.shared).pending;null===u?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}o.lanes|=r,null!==(c=o.alternate)&&(c.lanes|=r),Ta(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=r,null!==(l=s.alternate)&&(l.lanes|=r),Ta(s,r,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}bs(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Aa(t,r),n=n(i=za(i)),t.flags|=1,bs(e,t,n,r),t.child;case 14:return i=rs(n=t.type,t.pendingProps),js(e,t,n,i=rs(n.type,i),r);case 15:return Ss(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:rs(n,i),Us(e,t),t.tag=1,Di(n)?(e=!0,Oi(t)):e=!1,Aa(t,r),os(t,n,i),ls(t,n,i,r),Ts(null,t,n,!0,e,r);case 19:return $s(e,t,r);case 22:return ks(e,t,r)}throw Error(a(156,t.tag))};var qc="function"===typeof reportError?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function Kc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,r,n,i){var a=r._reactRootContainer;if(a){var o=a;if("function"===typeof i){var s=i;i=function(){var e=Wc(o);s.call(e)}}Uc(t,o,e,i)}else o=function(e,t,r,n,i){if(i){if("function"===typeof n){var a=n;n=function(){var e=Wc(o);a.call(e)}}var o=$c(t,n,e,0,null,!1,0,"",Jc);return e._reactRootContainer=o,e[mi]=o.current,$n(8===e.nodeType?e.parentNode:e),dc(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof n){var s=n;n=function(){var e=Wc(l);s.call(e)}}var l=Vc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[mi]=l.current,$n(8===e.nodeType?e.parentNode:e),dc((function(){Uc(t,l,r,n)})),l}(r,t,e,i,n);return Wc(o)}Qc.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Uc(e,t,null,null)},Qc.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;dc((function(){Uc(null,e,null,null)})),t[mi]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Lt.length&&0!==t&&t<Lt[r].priority;r++);Lt.splice(r,0,e),0===r&&_t(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ut(t.pendingLanes);0!==r&&(yt(t,1|r),nc(t,Xe()),0===(6&Tl)&&($l=Xe()+500,$i()))}break;case 13:dc((function(){var t=Ra(e,1);if(null!==t){var r=ec();rc(t,e,1,r)}})),Gc(e,1)}},jt=function(e){if(13===e.tag){var t=Ra(e,134217728);if(null!==t)rc(t,e,134217728,ec());Gc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),r=Ra(e,t);if(null!==r)rc(r,e,t,ec());Gc(e,t)}},kt=function(){return xt},Ct=function(e,t){var r=xt;try{return xt=e,t()}finally{xt=r}},je=function(e,t,r){switch(t){case"input":if(J(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=wi(n);if(!i)throw Error(a(90));q(n),J(n,i)}}}break;case"textarea":ae(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},Te=cc,Ae=dc;var ed={usingClientEntryPoint:!1,Events:[xi,bi,wi,Pe,Ee,cc]},td={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rd={bundleType:td.bundleType,version:td.version,rendererPackageName:td.rendererPackageName,rendererConfig:td.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:td.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var nd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nd.isDisabled&&nd.supportsFiber)try{it=nd.inject(rd),at=nd}catch(de){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ed,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Kc(t))throw Error(a(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:j,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.createRoot=function(e,t){if(!Kc(e))throw Error(a(299));var r=!1,n="",i=qc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,0,r,0,n,i),e[mi]=t.current,$n(8===e.nodeType?e.parentNode:e),new Yc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return dc(e)},t.hydrate=function(e,t,r){if(!Xc(t))throw Error(a(200));return Zc(null,e,t,!0,r)},t.hydrateRoot=function(e,t,r){if(!Kc(e))throw Error(a(405));var n=null!=r&&r.hydratedSources||null,i=!1,o="",s=qc;if(null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(i=!0),void 0!==r.identifierPrefix&&(o=r.identifierPrefix),void 0!==r.onRecoverableError&&(s=r.onRecoverableError)),t=$c(t,null,e,1,null!=r?r:null,i,0,o,s),e[mi]=t.current,$n(e),n)for(e=0;e<n.length;e++)i=(i=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Qc(t)},t.render=function(e,t,r){if(!Xc(t))throw Error(a(200));return Zc(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(a(40));return!!e._reactRootContainer&&(dc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[mi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Xc(r))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zc(e,t,r,!1,n)},t.version="18.3.1-next-f1338f8080-20240426"},763:(e,t,r)=>{"use strict";e.exports=r(983)},853:(e,t,r)=>{"use strict";e.exports=r(234)},950:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(730)},983:(e,t)=>{"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,f=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,y=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case u:case a:case s:case o:case h:return e;default:switch(e=e&&e.$$typeof){case c:case p:case g:case f:case l:return e;default:return t}}case i:return t}}}function j(e){return w(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=l,t.Element=n,t.ForwardRef=p,t.Fragment=a,t.Lazy=g,t.Memo=f,t.Portal=i,t.Profiler=s,t.StrictMode=o,t.Suspense=h,t.isAsyncMode=function(e){return j(e)||w(e)===d},t.isConcurrentMode=j,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===f},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===u||e===s||e===o||e===h||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===f||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===y||e.$$typeof===x||e.$$typeof===b||e.$$typeof===v)},t.typeOf=w}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"===typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>n[e]));return o.default=()=>n,r.d(a,o),a}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0,(()=>{"use strict";var e,t=r(43),n=r.t(t,2),i=r(391);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const o="popstate";function s(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function l(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(r){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,r,n){return void 0===r&&(r=null),a({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function u(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function p(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function h(t,r,n,i){void 0===i&&(i={});let{window:l=document.defaultView,v5Compat:p=!1}=i,h=l.history,m=e.Pop,f=null,g=v();function v(){return(h.state||{idx:null}).idx}function y(){m=e.Pop;let t=v(),r=null==t?null:t-g;g=t,f&&f({action:m,location:b.location,delta:r})}function x(e){let t="null"!==l.location.origin?l.location.origin:l.location.href,r="string"===typeof e?e:u(e);return r=r.replace(/ $/,"%20"),s(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==g&&(g=0,h.replaceState(a({},h.state,{idx:g}),""));let b={get action(){return m},get location(){return t(l,h)},listen(e){if(f)throw new Error("A history only accepts one active listener");return l.addEventListener(o,y),f=e,()=>{l.removeEventListener(o,y),f=null}},createHref:e=>r(l,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,r){m=e.Push;let i=d(b.location,t,r);n&&n(i,t),g=v()+1;let a=c(i,g),o=b.createHref(i);try{h.pushState(a,"",o)}catch(s){if(s instanceof DOMException&&"DataCloneError"===s.name)throw s;l.location.assign(o)}p&&f&&f({action:m,location:b.location,delta:1})},replace:function(t,r){m=e.Replace;let i=d(b.location,t,r);n&&n(i,t),g=v();let a=c(i,g),o=b.createHref(i);h.replaceState(a,"",o),p&&f&&f({action:m,location:b.location,delta:0})},go:e=>h.go(e)};return b}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function f(e,t,r){return void 0===r&&(r="/"),g(e,t,r,!1)}function g(e,t,r,n){let i=z(("string"===typeof t?p(t):t).pathname||"/",r);if(null==i)return null;let a=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=A(i);o=E(a[s],e,n)}return o}function v(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(s(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(n.length));let l=M([n,o.relativePath]),c=r.concat(o);e.children&&e.children.length>0&&(s(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),v(e.children,t,c,l)),(null!=e.path||e.index)&&t.push({path:l,score:P(l,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let n of y(e.path))i(e,t,n);else i(e,t)})),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(0===n.length)return i?[a,""]:[a];let o=y(n.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const x=/^:[\w-]+$/,b=3,w=2,j=1,S=10,k=-2,C=e=>"*"===e;function P(e,t){let r=e.split("/"),n=r.length;return r.some(C)&&(n+=k),t&&(n+=w),r.filter((e=>!C(e))).reduce(((e,t)=>e+(x.test(t)?b:""===t?j:S)),n)}function E(e,t,r){void 0===r&&(r=!1);let{routesMeta:n}=e,i={},a="/",o=[];for(let s=0;s<n.length;++s){let e=n[s],l=s===n.length-1,c="/"===a?t:t.slice(a.length)||"/",d=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),u=e.route;if(!d&&l&&r&&!n[n.length-1].route.index&&(d=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:M([a,d.pathname]),pathnameBase:O(M([a,d.pathnameBase])),route:u}),"/"!==d.pathnameBase&&(a=M([a,d.pathnameBase]))}return o}function T(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);l("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(n.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,n]}(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1),c=n.reduce(((e,t,r)=>{let{paramName:n,isOptional:i}=t;if("*"===n){let e=s[r]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[r];return e[n]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:c,pathname:a,pathnameBase:o,pattern:e}}function A(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return l(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function z(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function I(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function D(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function L(e,t){let r=D(e);return t?r.map(((e,t)=>t===r.length-1?e.pathname:e.pathnameBase)):r.map((e=>e.pathnameBase))}function R(e,t,r,n){let i;void 0===n&&(n=!1),"string"===typeof e?i=p(e):(i=a({},e),s(!i.pathname||!i.pathname.includes("?"),I("?","pathname","search",i)),s(!i.pathname||!i.pathname.includes("#"),I("#","pathname","hash",i)),s(!i.search||!i.search.includes("#"),I("#","search","hash",i)));let o,l=""===e||""===i.pathname,c=l?"/":i.pathname;if(null==c)o=r;else{let e=t.length-1;if(!n&&c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let d=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:i=""}="string"===typeof e?p(e):e,a=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:a,search:_(n),hash:N(i)}}(i,o),u=c&&"/"!==c&&c.endsWith("/"),h=(l||"."===c)&&r.endsWith("/");return d.pathname.endsWith("/")||!u&&!h||(d.pathname+="/"),d}const M=e=>e.join("/").replace(/\/\/+/g,"/"),O=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",N=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const V=["post","put","patch","delete"],B=(new Set(V),["get",...V]);new Set(B),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$.apply(this,arguments)}const U=t.createContext(null);const W=t.createContext(null);const H=t.createContext(null);const G=t.createContext(null);const q=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Y=t.createContext(null);function Q(){return null!=t.useContext(G)}function K(){return Q()||s(!1),t.useContext(G).location}function X(e){t.useContext(H).static||t.useLayoutEffect(e)}function J(){let{isDataRoute:e}=t.useContext(q);return e?function(){let{router:e}=ce(se.UseNavigateStable),r=ue(le.UseNavigateStable),n=t.useRef(!1);X((()=>{n.current=!0}));let i=t.useCallback((function(t,i){void 0===i&&(i={}),n.current&&("number"===typeof t?e.navigate(t):e.navigate(t,$({fromRouteId:r},i)))}),[e,r]);return i}():function(){Q()||s(!1);let e=t.useContext(U),{basename:r,future:n,navigator:i}=t.useContext(H),{matches:a}=t.useContext(q),{pathname:o}=K(),l=JSON.stringify(L(a,n.v7_relativeSplatPath)),c=t.useRef(!1);return X((()=>{c.current=!0})),t.useCallback((function(t,n){if(void 0===n&&(n={}),!c.current)return;if("number"===typeof t)return void i.go(t);let a=R(t,JSON.parse(l),o,"path"===n.relative);null==e&&"/"!==r&&(a.pathname="/"===a.pathname?r:M([r,a.pathname])),(n.replace?i.replace:i.push)(a,n.state,n)}),[r,i,l,o,e])}()}function Z(){let{matches:e}=t.useContext(q),r=e[e.length-1];return r?r.params:{}}function ee(e,r){let{relative:n}=void 0===r?{}:r,{future:i}=t.useContext(H),{matches:a}=t.useContext(q),{pathname:o}=K(),s=JSON.stringify(L(a,i.v7_relativeSplatPath));return t.useMemo((()=>R(e,JSON.parse(s),o,"path"===n)),[e,s,o,n])}function te(r,n,i,a){Q()||s(!1);let{navigator:o,static:l}=t.useContext(H),{matches:c}=t.useContext(q),d=c[c.length-1],u=d?d.params:{},h=(d&&d.pathname,d?d.pathnameBase:"/");d&&d.route;let m,g=K();if(n){var v;let e="string"===typeof n?p(n):n;"/"===h||(null==(v=e.pathname)?void 0:v.startsWith(h))||s(!1),m=e}else m=g;let y=m.pathname||"/",x=y;if("/"!==h){let e=h.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=!l&&i&&i.matches&&i.matches.length>0?i.matches:f(r,{pathname:x});let w=oe(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:M([h,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?h:M([h,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,i,a);return n&&w?t.createElement(G.Provider,{value:{location:$({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:e.Pop}},w):w}function re(){let e=function(){var e;let r=t.useContext(Y),n=de(le.UseRouteError),i=ue(le.UseRouteError);if(void 0!==r)return r;return null==(e=n.errors)?void 0:e[i]}(),r=F(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},r),n?t.createElement("pre",{style:a},n):null,null)}const ne=t.createElement(re,null);class ie extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(q.Provider,{value:this.props.routeContext},t.createElement(Y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:r,match:n,children:i}=e,a=t.useContext(U);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),t.createElement(q.Provider,{value:r},i)}function oe(e,r,n,i){var a;if(void 0===r&&(r=[]),void 0===n&&(n=null),void 0===i&&(i=null),null==e){var o;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(o=i)&&o.v7_partialHydration&&0===r.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let l=e,c=null==(a=n)?void 0:a.errors;if(null!=c){let e=l.findIndex((e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id])));e>=0||s(!1),l=l.slice(0,Math.min(l.length,e+1))}let d=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=t),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){d=!0,l=u>=0?l.slice(0,u+1):[l[0]];break}}}return l.reduceRight(((e,i,a)=>{let o,s=!1,p=null,h=null;var m;n&&(o=c&&i.route.id?c[i.route.id]:void 0,p=i.route.errorElement||ne,d&&(u<0&&0===a?(m="route-fallback",!1||pe[m]||(pe[m]=!0),s=!0,h=null):u===a&&(s=!0,h=i.route.hydrateFallbackElement||null)));let f=r.concat(l.slice(0,a+1)),g=()=>{let r;return r=o?p:s?h:i.route.Component?t.createElement(i.route.Component,null):i.route.element?i.route.element:e,t.createElement(ae,{match:i,routeContext:{outlet:e,matches:f,isDataRoute:null!=n},children:r})};return n&&(i.route.ErrorBoundary||i.route.errorElement||0===a)?t.createElement(ie,{location:n.location,revalidation:n.revalidation,component:p,error:o,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()}),null)}var se=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(se||{}),le=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(le||{});function ce(e){let r=t.useContext(U);return r||s(!1),r}function de(e){let r=t.useContext(W);return r||s(!1),r}function ue(e){let r=function(){let e=t.useContext(q);return e||s(!1),e}(),n=r.matches[r.matches.length-1];return n.route.id||s(!1),n.route.id}const pe={};function he(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}n.startTransition;function me(e){let{to:r,replace:n,state:i,relative:a}=e;Q()||s(!1);let{future:o,static:l}=t.useContext(H),{matches:c}=t.useContext(q),{pathname:d}=K(),u=J(),p=R(r,L(c,o.v7_relativeSplatPath),d,"path"===a),h=JSON.stringify(p);return t.useEffect((()=>u(JSON.parse(h),{replace:n,state:i,relative:a})),[u,h,a,n,i]),null}function fe(e){s(!1)}function ge(r){let{basename:n="/",children:i=null,location:a,navigationType:o=e.Pop,navigator:l,static:c=!1,future:d}=r;Q()&&s(!1);let u=n.replace(/^\/*/,"/"),h=t.useMemo((()=>({basename:u,navigator:l,static:c,future:$({v7_relativeSplatPath:!1},d)})),[u,d,l,c]);"string"===typeof a&&(a=p(a));let{pathname:m="/",search:f="",hash:g="",state:v=null,key:y="default"}=a,x=t.useMemo((()=>{let e=z(m,u);return null==e?null:{location:{pathname:e,search:f,hash:g,state:v,key:y},navigationType:o}}),[u,m,f,g,v,y,o]);return null==x?null:t.createElement(H.Provider,{value:h},t.createElement(G.Provider,{children:i,value:x}))}function ve(e){let{children:t,location:r}=e;return te(ye(t),r)}new Promise((()=>{}));t.Component;function ye(e,r){void 0===r&&(r=[]);let n=[];return t.Children.forEach(e,((e,i)=>{if(!t.isValidElement(e))return;let a=[...r,i];if(e.type===t.Fragment)return void n.push.apply(n,ye(e.props.children,a));e.type!==fe&&s(!1),e.props.index&&e.props.children&&s(!1);let o={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=ye(e.props.children,a)),n.push(o)})),n}var xe=r(579);const be=(0,t.createContext)(),we=()=>(0,t.useContext)(be),je=e=>{let{children:r}=e;const[n,i]=(0,t.useState)((()=>localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"))),[a,o]=(0,t.useState)((()=>{const e=localStorage.getItem("sidebarOpen");return!e||JSON.parse(e)}));(0,t.useEffect)((()=>{localStorage.setItem("theme",n),document.documentElement.setAttribute("data-theme",n)}),[n]),(0,t.useEffect)((()=>{localStorage.setItem("sidebarOpen",JSON.stringify(a))}),[a]);return(0,xe.jsx)(be.Provider,{value:{theme:n,toggleTheme:()=>{i((e=>"light"===e?"dark":"light"))},sidebarOpen:a,toggleSidebar:()=>{o((e=>!e))}},children:r})};var Se=r(950),ke=r.t(Se,2);function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ce.apply(this,arguments)}function Pe(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const Ee=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(Ub){}new Map;const Te=n.startTransition;ke.flushSync,n.useId;function Ae(e){let{basename:r,children:n,future:i,window:a}=e,o=t.useRef();var s;null==o.current&&(o.current=(void 0===(s={window:a,v5Compat:!0})&&(s={}),h((function(e,t){let{pathname:r,search:n,hash:i}=e.location;return d("",{pathname:r,search:n,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:u(t)}),null,s)));let l=o.current,[c,p]=t.useState({action:l.action,location:l.location}),{v7_startTransition:m}=i||{},f=t.useCallback((e=>{m&&Te?Te((()=>p(e))):p(e)}),[p,m]);return t.useLayoutEffect((()=>l.listen(f)),[l,f]),t.useEffect((()=>he(i)),[i]),t.createElement(ge,{basename:r,children:n,location:c.location,navigationType:c.action,navigator:l,future:i})}const ze="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ie=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,De=t.forwardRef((function(e,r){let n,{onClick:i,relative:a,reloadDocument:o,replace:l,state:c,target:d,to:p,preventScrollReset:h,viewTransition:m}=e,f=Pe(e,Ee),{basename:g}=t.useContext(H),v=!1;if("string"===typeof p&&Ie.test(p)&&(n=p,ze))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),r=z(t.pathname,g);t.origin===e.origin&&null!=r?p=r+t.search+t.hash:v=!0}catch(Ub){}let y=function(e,r){let{relative:n}=void 0===r?{}:r;Q()||s(!1);let{basename:i,navigator:a}=t.useContext(H),{hash:o,pathname:l,search:c}=ee(e,{relative:n}),d=l;return"/"!==i&&(d="/"===l?i:M([i,l])),a.createHref({pathname:d,search:c,hash:o})}(p,{relative:a}),x=function(e,r){let{target:n,replace:i,state:a,preventScrollReset:o,relative:s,viewTransition:l}=void 0===r?{}:r,c=J(),d=K(),p=ee(e,{relative:s});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let r=void 0!==i?i:u(d)===u(p);c(e,{replace:r,state:a,preventScrollReset:o,relative:s,viewTransition:l})}}),[d,c,p,i,a,n,e,o,s,l])}(p,{replace:l,state:c,target:d,preventScrollReset:h,relative:a,viewTransition:m});return t.createElement("a",Ce({},f,{href:n||y,onClick:v||o?i:function(e){i&&i(e),e.defaultPrevented||x(e)},ref:r,target:d}))}));var Le,Re;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Le||(Le={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Re||(Re={}));var Me=r(528),Oe=r(324),_e=r.n(Oe);const Ne=function(e){function t(e,n,l,c,p){for(var h,m,f,g,b,j=0,S=0,k=0,C=0,P=0,D=0,R=f=h=0,O=0,_=0,N=0,F=0,V=l.length,B=V-1,$="",U="",W="",H="";O<V;){if(m=l.charCodeAt(O),O===B&&0!==S+C+k+j&&(0!==S&&(m=47===S?10:47),C=k=j=0,V++,B++),0===S+C+k+j){if(O===B&&(0<_&&($=$.replace(u,"")),0<$.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:$+=l.charAt(O)}m=59}switch(m){case 123:for(h=($=$.trim()).charCodeAt(0),f=1,F=++O;O<V;){switch(m=l.charCodeAt(O)){case 123:f++;break;case 125:f--;break;case 47:switch(m=l.charCodeAt(O+1)){case 42:case 47:e:{for(R=O+1;R<B;++R)switch(l.charCodeAt(R)){case 47:if(42===m&&42===l.charCodeAt(R-1)&&O+2!==R){O=R+1;break e}break;case 10:if(47===m){O=R+1;break e}}O=R}}break;case 91:m++;case 40:m++;case 34:case 39:for(;O++<B&&l.charCodeAt(O)!==m;);}if(0===f)break;O++}if(f=l.substring(F,O),0===h&&(h=($=$.replace(d,"").trim()).charCodeAt(0)),64===h){switch(0<_&&($=$.replace(u,"")),m=$.charCodeAt(1)){case 100:case 109:case 115:case 45:_=n;break;default:_=I}if(F=(f=t(n,_,f,m,p+1)).length,0<L&&(b=s(3,f,_=r(I,$,N),n,T,E,F,m,p,c),$=_.join(""),void 0!==b&&0===(F=(f=b.trim()).length)&&(m=0,f="")),0<F)switch(m){case 115:$=$.replace(w,o);case 100:case 109:case 45:f=$+"{"+f+"}";break;case 107:f=($=$.replace(v,"$1 $2"))+"{"+f+"}",f=1===z||2===z&&a("@"+f,3)?"@-webkit-"+f+"@"+f:"@"+f;break;default:f=$+f,112===c&&(U+=f,f="")}else f=""}else f=t(n,r(n,$,N),f,c,p+1);W+=f,f=N=_=R=h=0,$="",m=l.charCodeAt(++O);break;case 125:case 59:if(1<(F=($=(0<_?$.replace(u,""):$).trim()).length))switch(0===R&&(h=$.charCodeAt(0),45===h||96<h&&123>h)&&(F=($=$.replace(" ",":")).length),0<L&&void 0!==(b=s(1,$,n,e,T,E,U.length,c,p,c))&&0===(F=($=b.trim()).length)&&($="\0\0"),h=$.charCodeAt(0),m=$.charCodeAt(1),h){case 0:break;case 64:if(105===m||99===m){H+=$+l.charAt(O);break}default:58!==$.charCodeAt(F-1)&&(U+=i($,h,m,$.charCodeAt(2)))}N=_=R=h=0,$="",m=l.charCodeAt(++O)}}switch(m){case 13:case 10:47===S?S=0:0===1+h&&107!==c&&0<$.length&&(_=1,$+="\0"),0<L*M&&s(0,$,n,e,T,E,U.length,c,p,c),E=1,T++;break;case 59:case 125:if(0===S+C+k+j){E++;break}default:switch(E++,g=l.charAt(O),m){case 9:case 32:if(0===C+j+S)switch(P){case 44:case 58:case 9:case 32:g="";break;default:32!==m&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===C+S+j&&(_=N=1,g="\f"+g);break;case 108:if(0===C+S+j+A&&0<R)switch(O-R){case 2:112===P&&58===l.charCodeAt(O-3)&&(A=P);case 8:111===D&&(A=D)}break;case 58:0===C+S+j&&(R=O);break;case 44:0===S+k+C+j&&(_=1,g+="\r");break;case 34:case 39:0===S&&(C=C===m?0:0===C?m:C);break;case 91:0===C+S+k&&j++;break;case 93:0===C+S+k&&j--;break;case 41:0===C+S+j&&k--;break;case 40:if(0===C+S+j){if(0===h)if(2*P+3*D===533);else h=1;k++}break;case 64:0===S+k+C+j+R+f&&(f=1);break;case 42:case 47:if(!(0<C+j+k))switch(S){case 0:switch(2*m+3*l.charCodeAt(O+1)){case 235:S=47;break;case 220:F=O,S=42}break;case 42:47===m&&42===P&&F+2!==O&&(33===l.charCodeAt(F+2)&&(U+=l.substring(F,O+1)),g="",S=0)}}0===S&&($+=g)}D=P,P=m,O++}if(0<(F=U.length)){if(_=n,0<L&&(void 0!==(b=s(2,U,_,e,T,E,F,c,p,c))&&0===(U=b).length))return H+U+W;if(U=_.join(",")+"{"+U+"}",0!==z*A){switch(2!==z||a(U,2)||(A=0),A){case 111:U=U.replace(x,":-moz-$1")+U;break;case 112:U=U.replace(y,"::-webkit-input-$1")+U.replace(y,"::-moz-$1")+U.replace(y,":-ms-input-$1")+U}A=0}}return H+U+W}function r(e,t,r){var i=t.trim().split(f);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<a;++s)t[s]=n(e,t[s],r).trim();break;default:var l=s=0;for(t=[];s<a;++s)for(var c=0;c<o;++c)t[l++]=n(e[c]+" ",i[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,r,n){var o=e+";",s=2*t+3*r+4*n;if(944===s){e=o.indexOf(":",9)+1;var l=o.substring(e,o.length-1).trim();return l=o.substring(0,e).trim()+l+";",1===z||2===z&&a(l,1)?"-webkit-"+l+l:l}if(0===z||2===z&&!a(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(P,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(l=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+l+o;case 1005:return h.test(o)?o.replace(p,":-webkit-")+o.replace(p,":-moz-")+o:o;case 1e3:switch(t=(l=o.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=o.replace(b,"tb");break;case 232:l=o.replace(b,"tb-rl");break;case 220:l=o.replace(b,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+l+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(l=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:o=o.replace(l,"-webkit-"+l)+";"+o;break;case 207:case 102:o=o.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(l,"-webkit-"+l)+";"+o.replace(l,"-ms-"+l+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return l=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+l+"-ms-flex-"+l+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(S,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(S,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):o.replace(l,"-webkit-"+l)+o.replace(l,"-moz-"+l.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+n&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+o}return o}function a(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),R(2!==t?n:n.replace(k,"$1"),r,t)}function o(e,t){var r=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(j," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,i,a,o,s,l,d){for(var u,p=0,h=t;p<L;++p)switch(u=D[p].call(c,e,h,r,n,i,a,o,s,l,d)){case void 0:case!1:case!0:case null:break;default:h=u}if(h!==t)return h}function l(e){return void 0!==(e=e.prefix)&&(R=null,e?"function"!==typeof e?z=1:(z=2,R=e):z=0),l}function c(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<L){var i=s(-1,r,n,n,T,E,0,0,0,0);void 0!==i&&"string"===typeof i&&(r=i)}var a=t(I,n,r,0,0);return 0<L&&(void 0!==(i=s(-2,a,n,n,T,E,a.length,0,0,0))&&(a=i)),A=0,E=T=1,a}var d=/^\0+/g,u=/[\0\r\f]/g,p=/: */g,h=/zoo|gra/,m=/([,: ])(transform)/g,f=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,x=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,j=/([\s\S]*?);/g,S=/-self|flex-/g,k=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,P=/([^-])(image-set\()/,E=1,T=1,A=0,z=1,I=[],D=[],L=0,R=null,M=0;return c.use=function e(t){switch(t){case void 0:case null:L=D.length=0;break;default:if("function"===typeof t)D[L++]=t;else if("object"===typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else M=0|!!t}return e},c.set=l,void 0!==e&&l(e),c};const Fe={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ve(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var Be=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,$e=Ve((function(e){return Be.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),Ue=r(219),We=r.n(Ue);function He(){return(He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Ge=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},qe=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,Me.QP)(e)},Ye=Object.freeze([]),Qe=Object.freeze({});function Ke(e){return"function"==typeof e}function Xe(e){return e.displayName||e.name||"Component"}function Je(e){return e&&"string"==typeof e.styledComponentId}var Ze="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",et="undefined"!=typeof window&&"HTMLElement"in window,tt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)));function rt(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var nt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)(i<<=1)<0&&rt(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=n;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,l=t.length;s<l;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,a=n;a<i;a++)t+=this.tag.getRule(a)+"/*!sc*/\n";return t},e}(),it=new Map,at=new Map,ot=1,st=function(e){if(it.has(e))return it.get(e);for(;at.has(ot);)ot++;var t=ot++;return it.set(e,t),at.set(t,e),t},lt=function(e){return at.get(e)},ct=function(e,t){t>=ot&&(ot=t+1),it.set(e,t),at.set(t,e)},dt="style["+Ze+'][data-styled-version="5.3.11"]',ut=new RegExp("^"+Ze+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),pt=function(e,t,r){for(var n,i=r.split(","),a=0,o=i.length;a<o;a++)(n=i[a])&&e.registerName(t,n)},ht=function(e,t){for(var r=(t.textContent||"").split("/*!sc*/\n"),n=[],i=0,a=r.length;i<a;i++){var o=r[i].trim();if(o){var s=o.match(ut);if(s){var l=0|parseInt(s[1],10),c=s[2];0!==l&&(ct(c,l),pt(e,c,s[3]),e.getTag().insertRules(l,n)),n.length=0}else n.push(o)}}},mt=function(){return r.nc},ft=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(Ze))return n}}(r),a=void 0!==i?i.nextSibling:null;n.setAttribute(Ze,"active"),n.setAttribute("data-styled-version","5.3.11");var o=mt();return o&&n.setAttribute("nonce",o),r.insertBefore(n,a),n},gt=function(){function e(e){var t=this.element=ft(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}rt(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),vt=function(){function e(e){var t=this.element=ft(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),yt=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),xt=et,bt={isServer:!et,useCSSOMInjection:!tt},wt=function(){function e(e,t,r){void 0===e&&(e=Qe),void 0===t&&(t={}),this.options=He({},bt,{},e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&et&&xt&&(xt=!1,function(e){for(var t=document.querySelectorAll(dt),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(Ze)&&(ht(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return st(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(He({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,i=t.target,e=r?new yt(i):n?new gt(i):new vt(i),new nt(e)));var e,t,r,n,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(st(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(st(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(st(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++){var a=lt(i);if(void 0!==a){var o=e.names.get(a),s=t.getGroup(i);if(o&&s&&o.size){var l=Ze+".g"+i+'[id="'+a+'"]',c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+=e+",")})),n+=""+s+l+'{content:"'+c+'"}/*!sc*/\n'}}}return n}(this)},e}(),jt=/(a)(d)/gi,St=function(e){return String.fromCharCode(e+(e>25?39:97))};function kt(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=St(t%52)+r;return(St(t%52)+r).replace(jt,"$1-$2")}var Ct=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Pt=function(e){return Ct(5381,e)};function Et(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ke(r)&&!Je(r))return!1}return!0}var Tt=Pt("5.3.11"),At=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Et(e),this.componentId=t,this.baseHash=Ct(Tt,t),this.baseStyle=r,wt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var a=qt(this.rules,e,t,r).join(""),o=kt(Ct(this.baseHash,a)>>>0);if(!t.hasNameForId(n,o)){var s=r(a,"."+o,void 0,n);t.insertRules(n,o,s)}i.push(o),this.staticRulesId=o}else{for(var l=this.rules.length,c=Ct(this.baseHash,r.hash),d="",u=0;u<l;u++){var p=this.rules[u];if("string"==typeof p)d+=p;else if(p){var h=qt(p,e,t,r),m=Array.isArray(h)?h.join(""):h;c=Ct(c,m+u),d+=m}}if(d){var f=kt(c>>>0);if(!t.hasNameForId(n,f)){var g=r(d,"."+f,void 0,n);t.insertRules(n,f,g)}i.push(f)}}return i.join(" ")},e}(),zt=/^\s*\/\/.*$/gm,It=[":","[",".","#"];function Dt(e){var t,r,n,i,a=void 0===e?Qe:e,o=a.options,s=void 0===o?Qe:o,l=a.plugins,c=void 0===l?Ye:l,d=new Ne(s),u=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,i,a,o,s,l,c,d,u){switch(r){case 1:if(0===d&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===c)return n+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(i[0]+n),"";default:return n+(0===u?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){u.push(e)})),h=function(e,n,a){return 0===n&&-1!==It.indexOf(a[r.length])||a.match(i)?e:"."+t};function m(e,a,o,s){void 0===s&&(s="&");var l=e.replace(zt,""),c=a&&o?o+" "+a+" { "+l+" }":l;return t=s,r=a,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),d(o||!a?"":a,c)}return d.use([].concat(c,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,h))},p,function(e){if(-2===e){var t=u;return u=[],t}}])),m.hash=c.length?c.reduce((function(e,t){return t.name||rt(15),Ct(e,t.name)}),5381).toString():"",m}var Lt=t.createContext(),Rt=(Lt.Consumer,t.createContext()),Mt=(Rt.Consumer,new wt),Ot=Dt();function _t(){return(0,t.useContext)(Lt)||Mt}function Nt(){return(0,t.useContext)(Rt)||Ot}function Ft(e){var r=(0,t.useState)(e.stylisPlugins),n=r[0],i=r[1],a=_t(),o=(0,t.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),s=(0,t.useMemo)((function(){return Dt({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return(0,t.useEffect)((function(){_e()(n,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),t.createElement(Lt.Provider,{value:o},t.createElement(Rt.Provider,{value:s},e.children))}var Vt=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Ot);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return rt(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=Ot),this.name+e.hash},e}(),Bt=/([A-Z])/,$t=/([A-Z])/g,Ut=/^ms-/,Wt=function(e){return"-"+e.toLowerCase()};function Ht(e){return Bt.test(e)?e.replace($t,Wt).replace(Ut,"-ms-"):e}var Gt=function(e){return null==e||!1===e||""===e};function qt(e,t,r,n){if(Array.isArray(e)){for(var i,a=[],o=0,s=e.length;o<s;o+=1)""!==(i=qt(e[o],t,r,n))&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}return Gt(e)?"":Je(e)?"."+e.styledComponentId:Ke(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:qt(e(t),t,r,n):e instanceof Vt?r?(e.inject(r,n),e.getName(n)):e:qe(e)?function e(t,r){var n,i,a=[];for(var o in t)t.hasOwnProperty(o)&&!Gt(t[o])&&(Array.isArray(t[o])&&t[o].isCss||Ke(t[o])?a.push(Ht(o)+":",t[o],";"):qe(t[o])?a.push.apply(a,e(t[o],o)):a.push(Ht(o)+": "+(n=o,(null==(i=t[o])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||n in Fe||n.startsWith("--")?String(i).trim():i+"px")+";")));return r?[r+" {"].concat(a,["}"]):a}(e):e.toString();var l}var Yt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Qt(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Ke(e)||qe(e)?Yt(qt(Ge(Ye,[e].concat(r)))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:Yt(qt(Ge(e,r)))}new Set;var Kt=function(e,t,r){return void 0===r&&(r=Qe),e.theme!==r.theme&&e.theme||t||r.theme},Xt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jt=/(^-|-$)/g;function Zt(e){return e.replace(Xt,"-").replace(Jt,"")}var er=function(e){return kt(Pt(e)>>>0)};function tr(e){return"string"==typeof e&&!0}var rr=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},nr=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ir(e,t,r){var n=e[r];rr(t)&&rr(n)?ar(n,t):e[r]=t}function ar(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var i=0,a=r;i<a.length;i++){var o=a[i];if(rr(o))for(var s in o)nr(s)&&ir(e,o[s],s)}return e}var or=t.createContext();or.Consumer;var sr={};function lr(e,r,n){var i=Je(e),a=!tr(e),o=r.attrs,s=void 0===o?Ye:o,l=r.componentId,c=void 0===l?function(e,t){var r="string"!=typeof e?"sc":Zt(e);sr[r]=(sr[r]||0)+1;var n=r+"-"+er("5.3.11"+r+sr[r]);return t?t+"-"+n:n}(r.displayName,r.parentComponentId):l,d=r.displayName,u=void 0===d?function(e){return tr(e)?"styled."+e:"Styled("+Xe(e)+")"}(e):d,p=r.displayName&&r.componentId?Zt(r.displayName)+"-"+r.componentId:r.componentId||c,h=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,m=r.shouldForwardProp;i&&e.shouldForwardProp&&(m=r.shouldForwardProp?function(t,n,i){return e.shouldForwardProp(t,n,i)&&r.shouldForwardProp(t,n,i)}:e.shouldForwardProp);var f,g=new At(n,p,i?e.componentStyle:void 0),v=g.isStatic&&0===s.length,y=function(e,r){return function(e,r,n,i){var a=e.attrs,o=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,c=e.shouldForwardProp,d=e.styledComponentId,u=e.target,p=function(e,t,r){void 0===e&&(e=Qe);var n=He({},t,{theme:e}),i={};return r.forEach((function(e){var t,r,a,o=e;for(t in Ke(o)&&(o=o(n)),o)n[t]=i[t]="className"===t?(r=i[t],a=o[t],r&&a?r+" "+a:r||a):o[t]})),[n,i]}(Kt(r,(0,t.useContext)(or),s)||Qe,r,a),h=p[0],m=p[1],f=function(e,t,r){var n=_t(),i=Nt();return t?e.generateAndInjectStyles(Qe,n,i):e.generateAndInjectStyles(r,n,i)}(o,i,h),g=n,v=m.$as||r.$as||m.as||r.as||u,y=tr(v),x=m!==r?He({},r,{},m):r,b={};for(var w in x)"$"!==w[0]&&"as"!==w&&("forwardedAs"===w?b.as=x[w]:(c?c(w,$e,v):!y||$e(w))&&(b[w]=x[w]));return r.style&&m.style!==r.style&&(b.style=He({},r.style,{},m.style)),b.className=Array.prototype.concat(l,d,f!==d?f:null,r.className,m.className).filter(Boolean).join(" "),b.ref=g,(0,t.createElement)(v,b)}(f,e,r,v)};return y.displayName=u,(f=t.forwardRef(y)).attrs=h,f.componentStyle=g,f.displayName=u,f.shouldForwardProp=m,f.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ye,f.styledComponentId=p,f.target=i?e.target:e,f.withComponent=function(e){var t=r.componentId,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(r,["componentId"]),a=t&&t+"-"+(tr(e)?e:Zt(Xe(e)));return lr(e,He({},i,{attrs:h,componentId:a}),n)},Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=i?ar({},e.defaultProps,t):t}}),Object.defineProperty(f,"toString",{value:function(){return"."+f.styledComponentId}}),a&&We()(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),f}var cr=function(e){return function e(t,r,n){if(void 0===n&&(n=Qe),!(0,Me.Hy)(r))return rt(1,String(r));var i=function(){return t(r,n,Qt.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,r,He({},n,{},i))},i.attrs=function(i){return e(t,r,He({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i}(lr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){cr[e]=cr(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Et(e),wt.registerId(this.componentId+1)}var t=e.prototype;t.createStyles=function(e,t,r,n){var i=n(qt(this.rules,t,r,n).join(""),""),a=this.componentId+e;r.insertRules(a,a,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&wt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();function dr(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=Qt.apply(void 0,[e].concat(r)).join(""),a=er(i);return new Vt(a,i)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=mt();return"<style "+[r&&'nonce="'+r+'"',Ze+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?rt(2):e._emitSheetCSS()},this.getStyleElement=function(){var r;if(e.sealed)return rt(2);var n=((r={})[Ze]="",r["data-styled-version"]="5.3.11",r.dangerouslySetInnerHTML={__html:e.instance.toString()},r),i=mt();return i&&(n.nonce=i),[t.createElement("style",He({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new wt({isServer:!0}),this.sealed=!1}var r=e.prototype;r.collectStyles=function(e){return this.sealed?rt(2):t.createElement(Ft,{sheet:this.instance},e)},r.interleaveWithNodeStream=function(e){return rt(3)}}();const ur=cr,pr=(0,t.createContext)(),hr=()=>(0,t.useContext)(pr),mr=e=>{let{children:r}=e;const[n,i]=(0,t.useState)(null),[a,o]=(0,t.useState)(!0),[s,l]=(0,t.useState)(null);(0,t.useEffect)((()=>{const e=localStorage.getItem("currentUser");if(e)try{i(JSON.parse(e))}catch(t){console.error("Failed to parse stored user data",t),localStorage.removeItem("currentUser")}o(!1)}),[]),(0,t.useEffect)((()=>{n?localStorage.setItem("currentUser",JSON.stringify(n)):localStorage.removeItem("currentUser")}),[n]);return(0,xe.jsx)(pr.Provider,{value:{currentUser:n,loading:a,error:s,login:async(e,t)=>{o(!0),l(null);try{return new Promise((r=>{setTimeout((()=>{if("student@example.com"===e&&"password"===t){const e={id:"1",name:"Demo Student",email:"student@example.com",role:"student",school:"Code School",cohort:"May 2025",avatar:"https://via.placeholder.com/150",completedCourses:["AI School"],currentProjects:["Character Creator Tool"]};i(e),o(!1),r(e)}else if("creator@example.com"===e&&"password"===t){const e={id:"2",name:"Demo Creator",email:"creator@example.com",role:"creator",avatar:"https://via.placeholder.com/150",createdAssets:["Fantasy Character","Magic Sword"],ownedNFTs:["eth:0x123...456:1"]};i(e),o(!1),r(e)}else l("Invalid email or password"),o(!1),r(null)}),1e3)}))}catch(r){return l("Login failed"),o(!1),null}},logout:()=>{i(null)},register:async e=>{o(!0),l(null);try{return new Promise((t=>{setTimeout((()=>{const r={id:Date.now().toString(),...e,avatar:"https://via.placeholder.com/150",createdAt:(new Date).toISOString()};i(r),o(!1),t(r)}),1e3)}))}catch(t){return l("Registration failed"),o(!1),null}},updateProfile:e=>{i((t=>({...t,...e})))}},children:r})},fr=ur.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: var(--surface);
  box-shadow: var(--shadow-md);
  z-index: var(--z-index-fixed);
  transition: all var(--transition-normal);
`,gr=ur.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 var(--spacing-lg);
`,vr=ur(De)`
  display: flex;
  align-items: center;
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
  
  span {
    color: var(--text-primary);
  }
`,yr=ur.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 992px) {
    display: none;
  }
`,xr=ur(De)`
  padding: var(--spacing-md);
  color: ${e=>"true"===e.active?"var(--primary)":"var(--text-primary)"};
  font-weight: ${e=>"true"===e.active?"600":"400"};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${e=>"true"===e.active?"20px":"0"};
    height: 3px;
    background-color: var(--primary);
    transition: width var(--transition-fast);
  }
  
  &:hover {
    color: var(--primary);
    
    &:after {
      width: 20px;
    }
  }
`,br=ur.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`,wr=ur.button`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: var(--font-size-lg);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-circle);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`,jr=ur.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: var(--font-size-md);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  img {
    width: 32px;
    height: 32px;
    border-radius: var(--border-radius-circle);
    object-fit: cover;
  }
`,Sr=ur.div`
  display: flex;
  gap: var(--spacing-sm);
`,kr=ur(De)`
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`,Cr=ur(De)`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border: 1px solid var(--primary);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: transparent;
    color: var(--primary);
  }
`,Pr=ur.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: var(--font-size-xl);
  cursor: pointer;
  
  @media (max-width: 992px) {
    display: block;
  }
`,Er=ur.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--surface);
  z-index: var(--z-index-fixed);
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg);
  transform: ${e=>e.isOpen?"translateX(0)":"translateX(100%)"};
  transition: transform var(--transition-normal);
`,Tr=ur(De)`
  padding: var(--spacing-md);
  color: ${e=>"true"===e.active?"var(--primary)":"var(--text-primary)"};
  font-weight: ${e=>"true"===e.active?"600":"400"};
  font-size: var(--font-size-lg);
  border-bottom: 1px solid var(--border);
  transition: all var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
`,Ar=ur.div`
  position: relative;
  display: inline-block;
`,zr=ur.button`
  padding: var(--spacing-sm) var(--spacing-md);
  color: ${e=>"true"===e.active?"var(--primary)":"var(--text-primary)"};
  font-weight: ${e=>"true"===e.active?"600":"400"};
  background: none;
  border: none;
  font-size: var(--font-size-md);
  cursor: pointer;
  border-bottom: 2px solid ${e=>"true"===e.active?"var(--primary)":"transparent"};
  transition: all var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
  
  &:after {
    content: '▼';
    font-size: 0.7em;
    margin-left: 0.5em;
  }
`,Ir=ur.div`
  display: ${e=>e.isOpen?"block":"none"};
  position: absolute;
  background-color: var(--surface);
  min-width: 250px;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-sm) 0;
  z-index: var(--z-index-dropdown);
`,Dr=ur(De)`
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--text-primary);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: var(--primary);
  }
`,Lr=ur.div`
  padding: var(--spacing-sm) var(--spacing-md);
  font-weight: 600;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: ${e=>e.first?"0":"var(--spacing-sm)"};
`,Rr=()=>{const e=K(),{theme:r,toggleTheme:n,toggleSidebar:i}=we(),{currentUser:a,logout:o}=hr(),[s,l]=(0,t.useState)(!1),[c,d]=(0,t.useState)(!1),[u,p]=(0,t.useState)(!1),h=t=>e.pathname===t;return(0,xe.jsxs)(fr,{children:[(0,xe.jsxs)(gr,{children:[(0,xe.jsxs)(vr,{to:"/",children:["Alphabet",(0,xe.jsx)("span",{children:"Schools"})]}),(0,xe.jsxs)(yr,{children:[(0,xe.jsx)(xr,{to:"/",active:h("/")?"true":"false",children:"Home"}),(0,xe.jsx)(xr,{to:"/schools",active:h("/schools")?"true":"false",children:"Schools"}),(0,xe.jsx)(xr,{to:"/tools",active:h("/tools")?"true":"false",children:"Tools"}),(0,xe.jsx)(xr,{to:"/assets",active:h("/assets")?"true":"false",children:"Assets"}),(0,xe.jsx)(xr,{to:"/projects",active:h("/projects")?"true":"false",children:"Projects"}),(0,xe.jsxs)(Ar,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[(0,xe.jsx)(zr,{active:["/docs","/api","/tutorials","/roadmap","/contribute"].some((t=>e.pathname.startsWith(t)))?"true":"false",onClick:()=>{d(!c)},children:"Documentation"}),(0,xe.jsxs)(Ir,{isOpen:c,children:[(0,xe.jsx)(Lr,{first:!0,children:"Platform"}),(0,xe.jsx)(Dr,{to:"/docs/getting-started",children:"Getting Started"}),(0,xe.jsx)(Dr,{to:"/docs/architecture",children:"Architecture"}),(0,xe.jsx)(Dr,{to:"/docs/asset-protocol",children:"Asset Protocol"}),(0,xe.jsx)(Lr,{children:"Development"}),(0,xe.jsx)(Dr,{to:"/docs/tool-development",children:"Tool Development"}),(0,xe.jsx)(Dr,{to:"/docs/api-reference",children:"API Reference"}),(0,xe.jsx)(Dr,{to:"/docs/tutorials",children:"Tutorials"}),(0,xe.jsx)(Lr,{children:"Community"}),(0,xe.jsx)(Dr,{to:"/contribute",children:"How to Contribute"}),(0,xe.jsx)(Dr,{to:"/roadmap",children:"Roadmap"}),(0,xe.jsx)(Dr,{to:"/docs/faq",children:"FAQ"})]})]}),(0,xe.jsxs)(Ar,{onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[(0,xe.jsx)(zr,{active:["/contribute","/alumni-payments","/apply-to-lead"].some((t=>e.pathname.startsWith(t)))?"true":"false",onClick:()=>{p(!u)},children:"Community"}),(0,xe.jsxs)(Ir,{isOpen:u,children:[(0,xe.jsx)(Dr,{to:"/contribute",children:"How to Contribute"}),(0,xe.jsx)(Dr,{to:"/alumni-payments",children:"Alumni Payments"}),(0,xe.jsx)(Dr,{to:"/apply-to-lead",children:"Apply to Lead a School"}),(0,xe.jsx)(Dr,{to:"/projects",children:"Project Showcase"})]})]})]}),(0,xe.jsxs)(br,{children:[(0,xe.jsx)(wr,{onClick:n,children:"dark"===r?"\u2600\ufe0f":"\ud83c\udf19"}),a?(0,xe.jsxs)(jr,{onClick:()=>{},children:[(0,xe.jsx)("img",{src:a.avatar,alt:a.name}),a.name]}):(0,xe.jsxs)(Sr,{children:[(0,xe.jsx)(kr,{to:"/login",children:"Log In"}),(0,xe.jsx)(Cr,{to:"/signup",children:"Sign Up"})]}),(0,xe.jsx)(Pr,{onClick:()=>{l(!s)},children:s?"\u2715":"\u2630"})]})]}),(0,xe.jsxs)(Er,{isOpen:s,children:[(0,xe.jsx)(Tr,{to:"/",active:h("/")?"true":"false",onClick:()=>l(!1),children:"Home"}),(0,xe.jsx)(Tr,{to:"/schools",active:h("/schools")?"true":"false",onClick:()=>l(!1),children:"Schools"}),(0,xe.jsx)(Tr,{to:"/tools",active:h("/tools")?"true":"false",onClick:()=>l(!1),children:"Tools"}),(0,xe.jsx)(Tr,{to:"/assets",active:h("/assets")?"true":"false",onClick:()=>l(!1),children:"Assets"}),(0,xe.jsx)(Tr,{to:"/projects",active:h("/projects")?"true":"false",onClick:()=>l(!1),children:"Projects"}),(0,xe.jsx)(Tr,{to:"/docs/getting-started",active:h("/docs/getting-started")?"true":"false",onClick:()=>l(!1),children:"Documentation"}),(0,xe.jsx)(Tr,{to:"/contribute",active:h("/contribute")?"true":"false",onClick:()=>l(!1),children:"Contribute"}),(0,xe.jsx)(Tr,{to:"/alumni-payments",active:h("/alumni-payments")?"true":"false",onClick:()=>l(!1),children:"Alumni Payments"}),(0,xe.jsx)(Tr,{to:"/apply-to-lead",active:h("/apply-to-lead")?"true":"false",onClick:()=>l(!1),children:"Apply to Lead"}),(0,xe.jsx)(Tr,{to:"/roadmap",active:h("/roadmap")?"true":"false",onClick:()=>l(!1),children:"Roadmap"}),!a&&(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)(Tr,{to:"/login",active:h("/login")?"true":"false",onClick:()=>l(!1),children:"Log In"}),(0,xe.jsx)(Tr,{to:"/signup",active:h("/signup")?"true":"false",onClick:()=>l(!1),children:"Sign Up"})]})]})]})},Mr=ur.footer`
  background-color: var(--surface);
  border-top: 1px solid var(--border);
  padding: var(--spacing-xl) 0;
  margin-top: auto;
`,Or=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`,_r=ur.div`
  display: flex;
  flex-direction: column;
`,Nr=ur(De)`
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--spacing-md);
  
  span {
    color: var(--text-primary);
  }
`,Fr=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
`,Vr=ur.div`
  display: flex;
  gap: var(--spacing-md);
`,Br=ur.a`
  color: var(--text-secondary);
  font-size: var(--font-size-lg);
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
`,$r=ur.h4`
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
`,Ur=ur.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`,Wr=ur(De)`
  color: var(--text-secondary);
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
`,Hr=ur.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: var(--spacing-xl) auto 0;
  padding: var(--spacing-lg) var(--spacing-lg) 0;
  border-top: 1px solid var(--border);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
`,Gr=ur.p`
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
`,qr=ur.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`,Yr=ur(De)`
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
`,Qr=()=>(0,xe.jsxs)(Mr,{children:[(0,xe.jsxs)(Or,{children:[(0,xe.jsxs)(_r,{children:[(0,xe.jsxs)(Nr,{to:"/",children:["Alphabet",(0,xe.jsx)("span",{children:"Schools"})]}),(0,xe.jsx)(Fr,{children:"An innovative open-source platform where students learn by building interconnected asset creation tools."}),(0,xe.jsxs)(Vr,{children:[(0,xe.jsx)(Br,{href:"https://github.com/alphabet-schools",target:"_blank",rel:"noopener noreferrer",children:(0,xe.jsx)("span",{role:"img","aria-label":"GitHub",children:"\ud83d\udcc2"})}),(0,xe.jsx)(Br,{href:"https://twitter.com/alphabetschools",target:"_blank",rel:"noopener noreferrer",children:(0,xe.jsx)("span",{role:"img","aria-label":"Twitter",children:"\ud83d\udc26"})}),(0,xe.jsx)(Br,{href:"https://discord.gg/alphabetschools",target:"_blank",rel:"noopener noreferrer",children:(0,xe.jsx)("span",{role:"img","aria-label":"Discord",children:"\ud83d\udcac"})}),(0,xe.jsx)(Br,{href:"https://youtube.com/alphabetschools",target:"_blank",rel:"noopener noreferrer",children:(0,xe.jsx)("span",{role:"img","aria-label":"YouTube",children:"\ud83d\udcfa"})})]})]}),(0,xe.jsxs)(_r,{children:[(0,xe.jsx)($r,{children:"Schools"}),(0,xe.jsxs)(Ur,{children:[(0,xe.jsx)(Wr,{to:"/schools/ai",children:"AI School"}),(0,xe.jsx)(Wr,{to:"/schools/business",children:"Business School"}),(0,xe.jsx)(Wr,{to:"/schools/code",children:"Code School"}),(0,xe.jsx)(Wr,{to:"/schools/dedication",children:"Dedication School"}),(0,xe.jsx)(Wr,{to:"/schools/earn",children:"Earn School"}),(0,xe.jsx)(Wr,{to:"/schools/all",children:"View All Schools"})]})]}),(0,xe.jsxs)(_r,{children:[(0,xe.jsx)($r,{children:"Tools & Assets"}),(0,xe.jsxs)(Ur,{children:[(0,xe.jsx)(Wr,{to:"/tools",children:"Browse Tools"}),(0,xe.jsx)(Wr,{to:"/assets",children:"Asset Gallery"}),(0,xe.jsx)(Wr,{to:"/tools/category/map-makers",children:"Map Makers"}),(0,xe.jsx)(Wr,{to:"/tools/category/character-creators",children:"Character Creators"}),(0,xe.jsx)(Wr,{to:"/tools/category/town-simulators",children:"Town Simulators"}),(0,xe.jsx)(Wr,{to:"/tools/category/rpg-engines",children:"RPG Engines"})]})]}),(0,xe.jsxs)(_r,{children:[(0,xe.jsx)($r,{children:"Documentation"}),(0,xe.jsxs)(Ur,{children:[(0,xe.jsx)(Wr,{to:"/docs/getting-started",children:"Getting Started"}),(0,xe.jsx)(Wr,{to:"/docs/architecture",children:"Architecture"}),(0,xe.jsx)(Wr,{to:"/docs/asset-protocol",children:"Asset Protocol"}),(0,xe.jsx)(Wr,{to:"/docs/tool-development",children:"Tool Development"}),(0,xe.jsx)(Wr,{to:"/docs/api-reference",children:"API Reference"}),(0,xe.jsx)(Wr,{to:"/docs/tutorials",children:"Tutorials"})]})]}),(0,xe.jsxs)(_r,{children:[(0,xe.jsx)($r,{children:"Community"}),(0,xe.jsxs)(Ur,{children:[(0,xe.jsx)(Wr,{to:"/contribute",children:"How to Contribute"}),(0,xe.jsx)(Wr,{to:"/roadmap",children:"Roadmap"}),(0,xe.jsx)(Wr,{to:"/showcase",children:"Community Showcase"}),(0,xe.jsx)(Wr,{to:"/events",children:"Events & Meetups"}),(0,xe.jsx)(Wr,{to:"/blog",children:"Blog"}),(0,xe.jsx)(Wr,{to:"/contact",children:"Contact Us"})]})]})]}),(0,xe.jsxs)(Hr,{children:[(0,xe.jsxs)(Gr,{children:["\xa9 ",(new Date).getFullYear()," Alphabet Schools. All rights reserved."]}),(0,xe.jsxs)(qr,{children:[(0,xe.jsx)(Yr,{to:"/terms",children:"Terms of Service"}),(0,xe.jsx)(Yr,{to:"/privacy",children:"Privacy Policy"}),(0,xe.jsx)(Yr,{to:"/cookies",children:"Cookie Policy"}),(0,xe.jsx)(Yr,{to:"/licenses",children:"Licenses"})]})]})]}),Kr=ur.aside`
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: var(--surface);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  z-index: var(--z-index-fixed);
  transition: all var(--transition-normal);
  
  @media (max-width: 768px) {
    display: none;
  }
`,Xr=ur.div`
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border);
`,Jr=ur.h3`
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  letter-spacing: 1px;
`,Zr=ur(De)`
  display: flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  margin-bottom: var(--spacing-xs);
  color: ${e=>"true"===e.active?"var(--primary)":"var(--text-primary)"};
  font-weight: ${e=>"true"===e.active?"600":"400"};
  border-radius: var(--border-radius-md);
  background-color: ${e=>"true"===e.active?"rgba(52, 152, 219, 0.1)":"transparent"};
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(52, 152, 219, 0.05);
    color: var(--primary);
  }
  
  svg {
    margin-right: var(--spacing-sm);
    font-size: 1.2em;
  }
`,en=ur.div`
  margin-left: var(--spacing-md);
`,tn=ur.div`
  margin-bottom: var(--spacing-md);
`,rn=ur.div`
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`,nn=ur(De)`
  display: block;
  padding: var(--spacing-xs) 0;
  color: ${e=>e.active?"var(--primary)":"var(--text-secondary)"};
  font-size: var(--font-size-sm);
  font-weight: ${e=>e.active?"600":"400"};
  transition: all var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
`,an=()=>{const e=K(),{theme:t}=we(),r=t=>e.pathname===t,n=t=>e.pathname===t,i=()=>e.pathname.startsWith("/schools"),a=()=>e.pathname.startsWith("/tools");return(0,xe.jsxs)(Kr,{children:[(0,xe.jsxs)(Xr,{children:[(0,xe.jsx)(Jr,{children:"Navigation"}),(0,xe.jsxs)(Zr,{to:"/",active:r("/")?"true":"false",children:[(0,xe.jsx)("span",{children:"\ud83c\udfe0"})," Home"]}),(0,xe.jsxs)(Zr,{to:"/schools",active:i()?"true":"false",children:[(0,xe.jsx)("span",{children:"\ud83c\udf93"})," Schools"]}),(0,xe.jsxs)(Zr,{to:"/tools",active:a()?"true":"false",children:[(0,xe.jsx)("span",{children:"\ud83d\udee0\ufe0f"})," Tools"]}),(0,xe.jsxs)(Zr,{to:"/assets",active:r("/assets")?"true":"false",children:[(0,xe.jsx)("span",{children:"\ud83d\uddbc\ufe0f"})," Assets"]}),(0,xe.jsxs)(Zr,{to:"/contribute",active:r("/contribute")?"true":"false",children:[(0,xe.jsx)("span",{children:"\ud83d\udc65"})," Contribute"]}),(0,xe.jsxs)(Zr,{to:"/roadmap",active:r("/roadmap")?"true":"false",children:[(0,xe.jsx)("span",{children:"\ud83d\uddfa\ufe0f"})," Roadmap"]})]}),e.pathname.startsWith("/docs")&&(0,xe.jsxs)(Xr,{children:[(0,xe.jsx)(Jr,{children:"Documentation"}),(0,xe.jsxs)(en,{children:[(0,xe.jsxs)(tn,{children:[(0,xe.jsx)(rn,{children:"Getting Started"}),(0,xe.jsx)(nn,{to:"/docs/getting-started",active:n("/docs/getting-started"),children:"Introduction"}),(0,xe.jsx)(nn,{to:"/docs/quick-start",active:n("/docs/quick-start"),children:"Quick Start Guide"}),(0,xe.jsx)(nn,{to:"/docs/architecture",active:n("/docs/architecture"),children:"Architecture Overview"})]}),(0,xe.jsxs)(tn,{children:[(0,xe.jsx)(rn,{children:"Asset Protocol"}),(0,xe.jsx)(nn,{to:"/docs/asset-protocol",active:n("/docs/asset-protocol"),children:"Protocol Overview"}),(0,xe.jsx)(nn,{to:"/docs/asset-types",active:n("/docs/asset-types"),children:"Asset Types"}),(0,xe.jsx)(nn,{to:"/docs/asset-properties",active:n("/docs/asset-properties"),children:"Asset Properties"}),(0,xe.jsx)(nn,{to:"/docs/asset-storage",active:n("/docs/asset-storage"),children:"Storage System"})]}),(0,xe.jsxs)(tn,{children:[(0,xe.jsx)(rn,{children:"Tool Development"}),(0,xe.jsx)(nn,{to:"/docs/tool-development",active:n("/docs/tool-development"),children:"Tool Development Guide"}),(0,xe.jsx)(nn,{to:"/docs/tool-integration",active:n("/docs/tool-integration"),children:"Integration with Platform"}),(0,xe.jsx)(nn,{to:"/docs/tool-api",active:n("/docs/tool-api"),children:"Tool API"})]}),(0,xe.jsxs)(tn,{children:[(0,xe.jsx)(rn,{children:"NFT Integration"}),(0,xe.jsx)(nn,{to:"/docs/nft-overview",active:n("/docs/nft-overview"),children:"NFT Overview"}),(0,xe.jsx)(nn,{to:"/docs/minting-process",active:n("/docs/minting-process"),children:"Minting Process"}),(0,xe.jsx)(nn,{to:"/docs/ownership-model",active:n("/docs/ownership-model"),children:"Ownership Model"})]})]})]}),i()&&(0,xe.jsxs)(Xr,{children:[(0,xe.jsx)(Jr,{children:"Schools"}),(0,xe.jsx)(Zr,{to:"/schools/ai",active:r("/schools/ai")?"true":"false",children:"AI School"}),(0,xe.jsx)(Zr,{to:"/schools/business",active:r("/schools/business")?"true":"false",children:"Business School"}),(0,xe.jsx)(Zr,{to:"/schools/code",active:r("/schools/code")?"true":"false",children:"Code School"}),(0,xe.jsx)(Zr,{to:"/schools/dedication",active:r("/schools/dedication")?"true":"false",children:"Dedication School"}),(0,xe.jsx)(Zr,{to:"/schools/earn",active:r("/schools/earn")?"true":"false",children:"Earn School"}),(0,xe.jsx)(Zr,{to:"/schools/financial",active:r("/schools/financial")?"true":"false",children:"Financial School"}),(0,xe.jsx)(Zr,{to:"/schools/gratitude",active:r("/schools/gratitude")?"true":"false",children:"Gratitude School"}),(0,xe.jsx)(Zr,{to:"/schools/hosting",active:r("/schools/hosting")?"true":"false",children:"Hosting School"}),(0,xe.jsx)(Zr,{to:"/schools/innovation",active:r("/schools/innovation")?"true":"false",children:"Innovation School"}),(0,xe.jsx)(Zr,{to:"/schools/all",active:r("/schools/all")?"true":"false",children:"View All Schools"})]}),a()&&(0,xe.jsxs)(Xr,{children:[(0,xe.jsx)(Jr,{children:"Tool Categories"}),(0,xe.jsx)(Zr,{to:"/tools/category/map-makers",active:r("/tools/category/map-makers")?"true":"false",children:"Map Makers"}),(0,xe.jsx)(Zr,{to:"/tools/category/character-creators",active:r("/tools/category/character-creators")?"true":"false",children:"Character Creators"}),(0,xe.jsx)(Zr,{to:"/tools/category/town-simulators",active:r("/tools/category/town-simulators")?"true":"false",children:"Town Simulators"}),(0,xe.jsx)(Zr,{to:"/tools/category/rpg-engines",active:r("/tools/category/rpg-engines")?"true":"false",children:"RPG Engines"}),(0,xe.jsx)(Zr,{to:"/tools/category/asset-editors",active:r("/tools/category/asset-editors")?"true":"false",children:"Asset Editors"}),(0,xe.jsx)(Zr,{to:"/tools/category/all",active:r("/tools/category/all")?"true":"false",children:"All Categories"})]})]})},on=dr`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,sn=ur.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--primary) 0%, #9b59b6 100%);
  color: white;
`,ln=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,cn=ur.h1`
  font-size: 3.5rem;
  margin-bottom: var(--spacing-lg);
  animation: ${on} 0.8s ease forwards;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,dn=ur.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: var(--spacing-xl);
  max-width: 700px;
  opacity: 0;
  animation: ${on} 0.8s ease forwards;
  animation-delay: 0.3s;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,un=ur.div`
  display: flex;
  gap: var(--spacing-md);
  opacity: 0;
  animation: ${on} 0.8s ease forwards;
  animation-delay: 0.6s;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,pn=ur(De)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: white;
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,hn=ur(De)`
  padding: var(--spacing-md) var(--spacing-lg);
  border: 2px solid white;
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`,mn=ur.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.1;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTRtMC0xMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNG0xMCA1YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00bS0xMC01YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00bS0xMCA1YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00Ii8+PC9nPjwvZz48L3N2Zz4=');
`,fn=dr`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`,gn=ur.div`
  position: absolute;
  font-size: 2.5rem;
  opacity: 0.5;
  animation: ${fn} 3s ease-in-out infinite;
  z-index: 1;
`,vn=ur.section`
  padding: var(--spacing-xxl) var(--spacing-lg);
  background-color: var(--background);
`,yn=ur.div`
  max-width: 1200px;
  margin: 0 auto;
`,xn=ur.div`
  margin-bottom: var(--spacing-lg);
`,bn=ur.h2`
  text-align: center;
  margin-bottom: var(--spacing-md);
  font-size: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,wn=ur.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xxl);
  color: var(--text-secondary);
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,jn=ur.div`
  margin-bottom: var(--spacing-xxl);
`,Sn=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
`,kn=ur.div`
  flex: 1;
`,Cn=ur.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
`,Pn=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
`,En=ur(De)`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  font-size: 0.9rem;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--secondary);
  }
`,Tn=ur.div`
  margin-left: var(--spacing-lg);
  font-size: 3rem;
  color: var(--primary);
`,An=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
`,zn=ur(De)`
  background-color: var(--background);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  text-decoration: none;
  color: var(--text-primary);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,In=ur.div`
  padding: var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`,Dn=ur.span`
  font-size: 2rem;
  margin-right: var(--spacing-sm);
`,Ln=ur.span`
  background-color: var(--secondary);
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-md);
  font-size: 0.8rem;
  margin-left: var(--spacing-sm);
`,Rn=ur.div`
  padding: var(--spacing-lg);
`,Mn=ur.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.25rem;
`,On=ur.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
`,_n=ur(De)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all var(--transition-fast);
  display: block;
  text-align: center;
  margin-top: var(--spacing-lg);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,Nn=ur.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
`,Fn=ur.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${e=>"true"===e.active?"var(--primary)":"var(--background)"};
  color: ${e=>"true"===e.active?"white":"var(--text-primary)"};
  border-radius: var(--border-radius-md);
  font-size: 0.9rem;
  transition: all var(--transition-fast);
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>"true"===e.active?"var(--secondary)":"var(--surface)"};
  }
`,Vn=ur(De)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  text-decoration: none;
  color: var(--text-primary);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,Bn=ur.div`
  padding: var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`,$n=ur.span`
  font-size: 2rem;
  margin-right: var(--spacing-sm);
`,Un=ur.div`
  padding: var(--spacing-lg);
`,Wn=ur.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.25rem;
`,Hn=ur.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
`,Gn=ur.section`
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  text-align: center;
`,qn=ur.div`
  max-width: 800px;
  margin: 0 auto;
`,Yn=ur.h2`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Qn=ur.p`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Kn=ur.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-lg);
`,Xn=ur(De)`
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: white;
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  display: inline-block;
  margin-right: var(--spacing-md);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,Jn=ur(De)`
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--secondary);
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  display: inline-block;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,Zn=()=>{const[e,r]=(0,t.useState)("all");return(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsxs)(sn,{children:[(0,xe.jsxs)(ln,{children:[(0,xe.jsx)(cn,{children:"Learn by Building"}),(0,xe.jsx)(dn,{children:"Join a community of creators building the next generation of tools for education, creativity, and practical applications."}),(0,xe.jsxs)(un,{children:[(0,xe.jsx)(pn,{to:"/schools",children:"Explore Schools"}),(0,xe.jsx)(hn,{to:"/projects",children:"View Projects"})]})]}),(0,xe.jsxs)(mn,{children:[(0,xe.jsx)(gn,{style:{top:"10%",left:"10%",animationDelay:"0s"},children:"\ud83c\udfa8"}),(0,xe.jsx)(gn,{style:{top:"20%",right:"15%",animationDelay:"0.5s"},children:"\ud83d\udcbb"}),(0,xe.jsx)(gn,{style:{bottom:"15%",left:"20%",animationDelay:"1s"},children:"\ud83d\udcc2"}),(0,xe.jsx)(gn,{style:{bottom:"30%",right:"10%",animationDelay:"1.5s"},children:"\ud83d\udccb"}),(0,xe.jsx)(gn,{style:{top:"40%",left:"30%",animationDelay:"2s"},children:"\ud83e\udd16"})]})]}),(0,xe.jsx)(vn,{children:(0,xe.jsxs)(yn,{children:[(0,xe.jsxs)(xn,{children:[(0,xe.jsx)(bn,{children:"Featured Schools"}),(0,xe.jsx)(wn,{children:"Our alphabet of schools teaches different aspects of creation and development. Students learn by building actual tools used by the community."})]}),(0,xe.jsx)(jn,{children:(0,xe.jsxs)(Sn,{children:[(0,xe.jsxs)(kn,{children:[(0,xe.jsx)(Cn,{children:"New: Directory & Listing Schools"}),(0,xe.jsx)(Pn,{children:"Build practical applications using the Google Places API. Learn to create directory and listing tools that connect users with businesses, services, and locations while showcasing your creative assets."}),(0,xe.jsx)(En,{to:"/projects",children:"View Sample Projects"})]}),(0,xe.jsxs)(Tn,{children:[(0,xe.jsx)("span",{style:{fontSize:"3rem",marginRight:"1rem"},children:"\ud83d\udcc2"}),(0,xe.jsx)("span",{style:{fontSize:"3rem"},children:"\ud83d\udccb"})]})]})}),(0,xe.jsx)(An,{children:[{id:"ai",name:"AI School",emoji:"\ud83e\udd16",color:"#3498db",description:"Learn to integrate AI into creative tools and workflows. Explore machine learning, natural language processing, and computer vision to enhance creative applications."},{id:"directory",name:"Directory School",emoji:"\ud83d\udcc2",color:"#9b59b6",description:"Learn to build comprehensive directory applications using the Google Places API. Create location-based tools that help users discover and navigate places of interest.",featured:!0},{id:"code",name:"Code School",emoji:"\ud83d\udcbb",color:"#e74c3c",description:"Develop core programming skills for creative applications. Focus on software architecture, performance optimization, and cross-platform development."},{id:"listing",name:"Listing School",emoji:"\ud83d\udccb",color:"#27ae60",description:"Specialize in creating listing applications with the Google Places API. Build practical tools that connect users with businesses, services, and locations.",featured:!0}].map((e=>(0,xe.jsxs)(zn,{to:`/schools/${e.id}`,children:[(0,xe.jsxs)(In,{style:{backgroundColor:e.color},children:[(0,xe.jsx)(Dn,{children:e.emoji}),e.featured&&(0,xe.jsx)(Ln,{children:"Featured"})]}),(0,xe.jsxs)(Rn,{children:[(0,xe.jsx)(Mn,{children:e.name}),(0,xe.jsx)(On,{children:e.description})]})]},e.id)))}),(0,xe.jsx)(_n,{to:"/schools",children:"View All Schools"})]})}),(0,xe.jsx)(vn,{style:{backgroundColor:"var(--background)"},children:(0,xe.jsxs)(yn,{children:[(0,xe.jsxs)(xn,{children:[(0,xe.jsx)(bn,{children:"Featured Tools"}),(0,xe.jsx)(wn,{children:"Explore tools created by our students and alumni. These tools are used by the community and showcase the skills learned in our schools."})]}),(0,xe.jsxs)(Nn,{children:[(0,xe.jsx)(Fn,{active:"all"===e?"true":"false",onClick:()=>r("all"),children:"All Tools"}),(0,xe.jsx)(Fn,{active:"creative"===e?"true":"false",onClick:()=>r("creative"),children:"Creative"}),(0,xe.jsx)(Fn,{active:"practical"===e?"true":"false",onClick:()=>r("practical"),children:"Practical"})]}),(0,xe.jsx)(An,{children:[{id:"asset-creator",name:"Asset Creator",icon:"\ud83c\udfa8",description:"Create and manage digital assets with support for multiple formats and collaborative editing."},{id:"directory-builder",name:"Directory Builder",icon:"\ud83d\udcc2",description:"Build powerful directory applications with Google Places API integration and customizable search features.",featured:!0},{id:"code-playground",name:"Code Playground",icon:"\ud83d\udcbb",description:"Experiment with code in a safe environment with real-time collaboration and version control."},{id:"listing-forge",name:"Listing Forge",icon:"\ud83d\udccb",description:"Create detailed listing applications with rich content, reviews, and business information integration.",featured:!0}].map((e=>(0,xe.jsxs)(Vn,{to:`/tools/${e.id}`,children:[(0,xe.jsxs)(Bn,{children:[(0,xe.jsx)($n,{children:e.icon}),e.featured&&(0,xe.jsx)(Ln,{children:"Featured"})]}),(0,xe.jsxs)(Un,{children:[(0,xe.jsx)(Wn,{children:e.name}),(0,xe.jsx)(Hn,{children:e.description})]})]},e.id)))}),(0,xe.jsx)(_n,{to:"/tools",children:"View All Tools"})]})}),(0,xe.jsx)(Gn,{children:(0,xe.jsxs)(qn,{children:[(0,xe.jsx)(Yn,{children:"Build While You Learn"}),(0,xe.jsx)(Qn,{children:"Join our community of creators and build real tools that solve practical problems. Learn by doing and earn income while you develop your skills."}),(0,xe.jsxs)(Kn,{children:[(0,xe.jsx)(Xn,{to:"/apply",children:"Apply Now"}),(0,xe.jsx)(Jn,{to:"/alumni-payments",children:"Learn About Alumni Payments"})]})]})})]})},ei=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,ti=ur.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
`,ri=ur.h1`
  margin-bottom: var(--spacing-md);
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,ni=ur.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,ii=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`,ai=ur(De)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  text-decoration: none;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,oi=ur.div`
  height: 160px;
  background-color: ${e=>e.color||"var(--primary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`,si=ur.div`
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
`,li=ur.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
`,ci=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  flex: 1;
`,di=ur.div`
  display: flex;
  justify-content: space-between;
  color: var(--text-secondary);
  font-size: 0.9rem;
  border-top: 1px solid var(--border);
  padding-top: var(--spacing-md);
`,ui=ur.section`
  text-align: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xxl);
`,pi=ur.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 2.5rem;
`,hi=ur.p`
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  font-size: 1.2rem;
  opacity: 0.9;
`,mi=ur(De)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: white;
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,fi=ur.div`
  margin-bottom: var(--spacing-xxl);
`,gi=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,vi=ur.div``,yi=ur.h2`
  margin-bottom: var(--spacing-md);
  font-size: 2rem;
`,xi=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`,bi=ur.ul`
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`,wi=ur.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`,ji=ur.div`
  background-color: #f0f0f0;
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: var(--primary);
`,Si=ur.h2`
  margin-bottom: var(--spacing-md);
  font-size: 2rem;
`,ki=()=>{const e=[{id:"ai",name:"AI School",emoji:"\ud83e\udd16",color:"#3498db",description:"Learn to integrate AI into creative tools and workflows. Explore machine learning, natural language processing, and computer vision to enhance creative applications.",duration:"6 months",nextCohort:"June 2025"},{id:"business",name:"Business School",emoji:"\ud83d\udcbc",color:"#2ecc71",description:"Master the business aspects of digital product development. Learn product management, marketing, and monetization strategies for creative tools.",duration:"6 months",nextCohort:"July 2025"},{id:"code",name:"Code School",emoji:"\ud83d\udcbb",color:"#e74c3c",description:"Develop core programming skills for creative applications. Focus on software architecture, performance optimization, and cross-platform development.",duration:"12 months",nextCohort:"May 2025"},{id:"directory",name:"Directory School",emoji:"\ud83d\udcc2",color:"#9b59b6",description:"Learn to build comprehensive directory applications using the Google Places API. Create location-based tools that help users discover and navigate places of interest.",duration:"6 months",nextCohort:"June 2025",featured:!0},{id:"dedication",name:"Dedication School",emoji:"\u23f0",color:"#f39c12",description:"Build commitment and project management strategies. Learn techniques for maintaining focus, overcoming obstacles, and seeing projects through to completion.",duration:"6 months",nextCohort:"August 2025"},{id:"earn",name:"Earn School",emoji:"\ud83d\udcb0",color:"#9b59b6",description:"Explore revenue models and creator economics. Understand different monetization strategies, pricing models, and sustainable income approaches.",duration:"6 months",nextCohort:"September 2025"},{id:"financial",name:"Financial School",emoji:"\ud83d\udcca",color:"#1abc9c",description:"Master funding, budgeting, and financial planning for creative projects and businesses. Learn investment strategies, cost management, and financial forecasting.",duration:"6 months",nextCohort:"October 2025"},{id:"gratitude",name:"Gratitude School",emoji:"\ud83d\ude4f",color:"#34495e",description:"Learn the art of appreciation and giving back to the community. Explore how gratitude enhances creativity, collaboration, and personal fulfillment.",duration:"6 months",nextCohort:"November 2025"},{id:"hosting",name:"Hosting School",emoji:"\ud83c\udf10",color:"#16a085",description:"Master deployment, scaling, and maintenance of creative tools. Learn cloud infrastructure, performance optimization, and reliability engineering.",duration:"6 months",nextCohort:"December 2025"},{id:"innovation",name:"Innovation School",emoji:"\ud83d\udca1",color:"#d35400",description:"Explore advanced concepts and future technologies in creative tools. Learn design thinking, rapid prototyping, and emerging technology integration.",duration:"6 months",nextCohort:"January 2026"},{id:"journey",name:"Journey School",emoji:"\ud83e\udded",color:"#8e44ad",description:"Navigate personal and professional growth through storytelling and narrative techniques. Map your path and guide others on their creative journeys.",duration:"6 months",nextCohort:"February 2026",status:"recruiting-leaders"},{id:"kindness",name:"Kindness School",emoji:"\u2764\ufe0f",color:"#e74c3c",description:"Build empathetic design practices and community-focused development approaches. Create tools that prioritize user wellbeing and positive social impact.",duration:"6 months",nextCohort:"March 2026",status:"recruiting-leaders"},{id:"listing",name:"Listing School",emoji:"\ud83d\udccb",color:"#27ae60",description:"Specialize in creating listing applications with the Google Places API. Build practical tools that connect users with businesses, services, and locations.",duration:"6 months",nextCohort:"April 2026",featured:!0},{id:"leadership",name:"Leadership School",emoji:"\ud83d\udc51",color:"#f1c40f",description:"Develop leadership skills for creative teams and communities. Learn to inspire, guide, and grow teams while fostering innovation and collaboration.",duration:"6 months",nextCohort:"April 2026",status:"recruiting-leaders"},{id:"mastery",name:"Mastery School",emoji:"\ud83c\udfc6",color:"#2980b9",description:"Refine your skills to an expert level in your chosen domain. Focus on deliberate practice, feedback loops, and continuous improvement methodologies.",duration:"6 months",nextCohort:"May 2026",status:"recruiting-leaders"},{id:"network",name:"Network School",emoji:"\ud83d\udd04",color:"#27ae60",description:"Build meaningful professional connections and collaborative relationships. Learn community building, networking strategies, and partnership development.",duration:"6 months",nextCohort:"June 2026",status:"recruiting-leaders"},{id:"opportunity",name:"Opportunity School",emoji:"\ud83d\udeaa",color:"#3498db",description:"Identify and create opportunities in the creative tools market. Learn to spot gaps, validate ideas, and transform concepts into viable products.",duration:"6 months",nextCohort:"July 2026",status:"recruiting-leaders"},{id:"purpose",name:"Purpose School",emoji:"\ud83e\uddff",color:"#8e44ad",description:"Align your work with your deeper values and mission. Develop tools with intention and create meaningful impact through your creative projects.",duration:"6 months",nextCohort:"August 2026",status:"recruiting-leaders"},{id:"quietude",name:"Quietude School",emoji:"\ud83e\uddd8",color:"#95a5a6",description:"Cultivate focus, mindfulness, and deep work practices. Learn to create in states of flow and maintain creative energy through mindful practices.",duration:"6 months",nextCohort:"September 2026",status:"recruiting-leaders"},{id:"resilience",name:"Resilience School",emoji:"\ud83d\udee1\ufe0f",color:"#e67e22",description:"Build mental toughness and adaptability for creative challenges. Develop strategies for overcoming setbacks and thriving through uncertainty.",duration:"6 months",nextCohort:"October 2026",status:"recruiting-leaders"}];return(0,xe.jsxs)(ei,{children:[(0,xe.jsxs)(ti,{children:[(0,xe.jsx)(ri,{children:"Our Schools"}),(0,xe.jsx)(ni,{children:"Progress through our alphabet of schools, each focusing on different aspects of creation and development. Students learn by building actual tools used by the community."})]}),(0,xe.jsxs)(ui,{children:[(0,xe.jsx)(pi,{children:"Lead a School, Build Your Product"}),(0,xe.jsx)(hi,{children:"We're recruiting leaders for upcoming schools! As a school leader, you'll earn income while building your own product. Alumni can direct payments to you as you guide the next generation of creators."}),(0,xe.jsx)(mi,{to:"/apply-to-lead",children:"Apply to Lead a School"})]}),(0,xe.jsx)(Si,{children:"Featured Schools"}),(0,xe.jsx)(ii,{children:e.filter((e=>e.featured)).map((e=>(0,xe.jsxs)(ai,{to:`/schools/${e.id}`,children:[(0,xe.jsx)(oi,{color:e.color,children:e.emoji}),(0,xe.jsxs)(si,{children:[(0,xe.jsx)(li,{children:e.name}),(0,xe.jsx)(ci,{children:e.description}),(0,xe.jsxs)(di,{children:[(0,xe.jsxs)("span",{children:["Duration: ",e.duration]}),(0,xe.jsx)("span",{children:"recruiting-leaders"===e.status?"\ud83d\udc51 Seeking Leaders":`Next: ${e.nextCohort}`})]})]})]},e.id)))}),(0,xe.jsx)(Si,{children:"All Schools"}),(0,xe.jsx)(ii,{children:e.map((e=>(0,xe.jsxs)(ai,{to:`/schools/${e.id}`,children:[(0,xe.jsx)(oi,{color:e.color,children:e.emoji}),(0,xe.jsxs)(si,{children:[(0,xe.jsx)(li,{children:e.name}),(0,xe.jsx)(ci,{children:e.description}),(0,xe.jsxs)(di,{children:[(0,xe.jsxs)("span",{children:["Duration: ",e.duration]}),(0,xe.jsx)("span",{children:"recruiting-leaders"===e.status?"\ud83d\udc51 Seeking Leaders":`Next: ${e.nextCohort}`})]})]})]},e.id)))}),(0,xe.jsx)(fi,{children:(0,xe.jsxs)(gi,{children:[(0,xe.jsxs)(vi,{children:[(0,xe.jsx)(yi,{children:"Alumni Payment System"}),(0,xe.jsx)(xi,{children:"Our unique alumni payment system ensures that those who contribute to the education of others are fairly compensated for their expertise and time."}),(0,xe.jsxs)(bi,{children:[(0,xe.jsx)(wi,{children:"Alumni receive direct payments from students they mentor"}),(0,xe.jsx)(wi,{children:"School leaders earn income while building their products"}),(0,xe.jsx)(wi,{children:"Revenue sharing model creates sustainable income streams"}),(0,xe.jsx)(wi,{children:"Transparent payment tracking through the platform"}),(0,xe.jsx)(wi,{children:"Optional cryptocurrency and NFT integration for global payments"})]}),(0,xe.jsx)(mi,{to:"/alumni-payments",children:"Learn More"})]}),(0,xe.jsx)(ji,{children:"\ud83d\udcb8"})]})})]})},Ci=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,Pi=ur.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,Ei=ur.h1`
  margin-bottom: var(--spacing-md);
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Ti=ur.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Ai=ur.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,zi=ur.div`
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,Ii=ur.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${e=>e.active?"var(--primary)":"transparent"};
  color: ${e=>e.active?"white":"var(--text-primary)"};
  border: 1px solid ${e=>e.active?"var(--primary)":"var(--border)"};
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${e=>e.active?"var(--primary)":"rgba(0, 0, 0, 0.05)"};
  }
`,Di=ur.div`
  position: relative;
  width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,Li=ur.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  padding-left: calc(var(--spacing-md) * 2 + 1em);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--surface);
  color: var(--text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`,Ri=ur.span`
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,Mi=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`,Oi=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,_i=ur.div`
  height: 200px;
  background-color: ${e=>e.color||"#f0f0f0"};
  background-image: ${e=>e.image?`url(${e.image})`:"none"};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
`,Ni=ur.div`
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
`,Fi=ur.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
`,Vi=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  flex: 1;
`,Bi=ur.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
`,$i=ur.span`
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(52, 152, 219, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
`,Ui=ur.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border);
  padding-top: var(--spacing-md);
`,Wi=ur(De)`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--secondary);
  }
`,Hi=ur.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`,Gi=ur.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xl);
`,qi=ur.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-circle);
  border: 1px solid ${e=>e.active?"var(--primary)":"var(--border)"};
  background-color: ${e=>e.active?"var(--primary)":"transparent"};
  color: ${e=>e.active?"white":"var(--text-primary)"};
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${e=>e.active?"var(--primary)":"rgba(0, 0, 0, 0.05)"};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Yi=()=>{const[e,r]=(0,t.useState)("all"),[n,i]=(0,t.useState)(""),[a,o]=(0,t.useState)(1),s=[{id:"fantasy-map-maker",name:"Fantasy Map Maker",description:"Create beautiful fantasy maps for RPGs, novels, and world-building with an intuitive drag-and-drop interface.",creator:"AI School Alumni",image:null,icon:"\ud83d\uddfa\ufe0f",color:"#3498db",category:"map-makers",tags:["maps","fantasy","rpg"]},{id:"character-creator",name:"Character Creator",description:"Design detailed characters with customizable attributes, appearances, and backstories for your games and stories.",creator:"Code School Alumni",image:null,icon:"\ud83d\udc64",color:"#e74c3c",category:"character-creators",tags:["characters","rpg","customization"]},{id:"medieval-town-simulator",name:"Medieval Town Simulator",description:"Build and simulate medieval towns with dynamic economies, populations, and events that evolve over time.",creator:"Business School Alumni",image:null,icon:"\ud83c\udff0",color:"#f39c12",category:"town-simulators",tags:["simulation","medieval","economy"]},{id:"pixel-art-studio",name:"Pixel Art Studio",description:"Create beautiful pixel art for games, animations, and digital collectibles with specialized tools and palettes.",creator:"Code School Alumni",image:null,icon:"\ud83c\udfa8",color:"#9b59b6",category:"asset-editors",tags:["pixel art","graphics","animation"]},{id:"tabletop-rpg-engine",name:"Tabletop RPG Engine",description:"Run tabletop RPG campaigns online with integrated character sheets, dice rolling, and storytelling tools.",creator:"Innovation School Alumni",image:null,icon:"\ud83c\udfb2",color:"#2ecc71",category:"rpg-engines",tags:["rpg","tabletop","multiplayer"]},{id:"npc-generator",name:"NPC Generator",description:"Generate detailed non-player characters with personalities, backgrounds, and dialogue for your games and stories.",creator:"AI School Alumni",image:null,icon:"\ud83e\uddd9",color:"#1abc9c",category:"character-creators",tags:["npc","generator","ai"]},{id:"dungeon-designer",name:"Dungeon Designer",description:"Design intricate dungeons with traps, treasures, and monsters for tabletop or digital RPGs.",creator:"Code School Alumni",image:null,icon:"\ud83c\udfd4\ufe0f",color:"#34495e",category:"map-makers",tags:["dungeons","rpg","level design"]},{id:"fantasy-economy-simulator",name:"Fantasy Economy Simulator",description:"Simulate complex economic systems for fantasy worlds with trade routes, resources, and market dynamics.",creator:"Financial School Alumni",image:null,icon:"\ud83d\udcb0",color:"#16a085",category:"town-simulators",tags:["economy","simulation","fantasy"]}].filter((t=>{const r="all"===e||t.category===e,i=""===n||t.name.toLowerCase().includes(n.toLowerCase())||t.description.toLowerCase().includes(n.toLowerCase())||t.tags.some((e=>e.toLowerCase().includes(n.toLowerCase())));return r&&i})),l=6*a,c=l-6,d=s.slice(c,l),u=Math.ceil(s.length/6),p=e=>{o(e),window.scrollTo(0,0)};return(0,xe.jsxs)(Ci,{children:[(0,xe.jsxs)(Pi,{children:[(0,xe.jsx)(Ei,{children:"Creative Tools"}),(0,xe.jsx)(Ti,{children:"Explore tools created by our students that work together in the Alphabet Schools ecosystem. All tools share assets seamlessly, allowing for a frictionless creative experience."})]}),(0,xe.jsxs)(Ai,{children:[(0,xe.jsx)(zi,{children:[{id:"all",name:"All Tools"},{id:"map-makers",name:"Map Makers"},{id:"character-creators",name:"Character Creators"},{id:"town-simulators",name:"Town Simulators"},{id:"rpg-engines",name:"RPG Engines"},{id:"asset-editors",name:"Asset Editors"}].map((t=>(0,xe.jsx)(Ii,{active:e===t.id,onClick:()=>{r(t.id),o(1)},children:t.name},t.id)))}),(0,xe.jsxs)(Di,{children:[(0,xe.jsx)(Ri,{children:"\ud83d\udd0d"}),(0,xe.jsx)(Li,{type:"text",placeholder:"Search tools...",value:n,onChange:e=>{i(e.target.value),o(1)}})]})]}),d.length>0?(0,xe.jsx)(Mi,{children:d.map((e=>(0,xe.jsxs)(Oi,{children:[(0,xe.jsx)(_i,{color:e.color,children:e.icon}),(0,xe.jsxs)(Ni,{children:[(0,xe.jsx)(Fi,{children:e.name}),(0,xe.jsx)(Vi,{children:e.description}),(0,xe.jsx)(Bi,{children:e.tags.map((e=>(0,xe.jsx)($i,{children:e},e)))}),(0,xe.jsxs)(Ui,{children:[(0,xe.jsx)(Wi,{to:`/tools/${e.id}`,children:"Try It"}),(0,xe.jsxs)(Hi,{children:["By: ",e.creator]})]})]})]},e.id)))}):(0,xe.jsxs)("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:[(0,xe.jsx)("h3",{children:"No tools found matching your criteria"}),(0,xe.jsx)("p",{style:{color:"var(--text-secondary)"},children:"Try adjusting your filters or search query"})]}),u>1&&(0,xe.jsxs)(Gi,{children:[(0,xe.jsx)(qi,{disabled:1===a,onClick:()=>p(a-1),children:"\u2190"}),[...Array(u)].map(((e,t)=>(0,xe.jsx)(qi,{active:a===t+1,onClick:()=>p(t+1),children:t+1},t))),(0,xe.jsx)(qi,{disabled:a===u,onClick:()=>p(a+1),children:"\u2192"})]})]})},Qi=(0,t.createContext)(),Ki=()=>(0,t.useContext)(Qi),Xi=e=>{let{children:r}=e;const[n,i]=(0,t.useState)([]),[a,o]=(0,t.useState)(!1),[s,l]=(0,t.useState)(null),c=async()=>{o(!0);try{setTimeout((()=>{i([{id:"1",name:"Fantasy Character",type:"character",creator:"student1",imgUrl:"https://via.placeholder.com/300/3498db/ffffff?text=Character",properties:{race:"Elf",class:"Ranger",level:5},ownedByNFT:!0,nftId:"eth:0x123...456:1"},{id:"2",name:"Medieval Town",type:"map",creator:"student2",imgUrl:"https://via.placeholder.com/300/2ecc71/ffffff?text=Town+Map",properties:{size:"medium",biome:"temperate",population:"medium"},ownedByNFT:!1},{id:"3",name:"Magic Sword",type:"item",creator:"student3",imgUrl:"https://via.placeholder.com/300/e74c3c/ffffff?text=Magic+Item",properties:{damage:"1d8+2",type:"slashing",magical:!0},ownedByNFT:!0,nftId:"eth:0x789...012:42"}]),o(!1)}),1e3)}catch(e){l("Failed to fetch assets"),o(!1)}};return(0,t.useEffect)((()=>{c()}),[]),(0,xe.jsx)(Qi.Provider,{value:{assets:n,loading:a,error:s,createAsset:e=>{const t={id:Date.now().toString(),...e,ownedByNFT:!1};return i((e=>[...e,t])),t},updateAsset:(e,t)=>{i((r=>r.map((r=>r.id===e?{...r,...t}:r))))},deleteAsset:e=>{i((t=>t.filter((t=>t.id!==e))))},mintAssetAsNFT:e=>{i((t=>t.map((t=>t.id===e?{...t,ownedByNFT:!0,nftId:`eth:0x${Math.random().toString(16).slice(2,10)}...${Math.random().toString(16).slice(2,10)}:${Math.floor(1e3*Math.random())}`}:t))))},refreshAssets:c},children:r})},Ji=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,Zi=ur.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,ea=ur.h1`
  margin-bottom: var(--spacing-md);
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,ta=ur.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,ra=ur.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,na=ur.div`
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,ia=ur.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${e=>e.active?"var(--primary)":"transparent"};
  color: ${e=>e.active?"white":"var(--text-primary)"};
  border: 1px solid ${e=>e.active?"var(--primary)":"var(--border)"};
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${e=>e.active?"var(--primary)":"rgba(0, 0, 0, 0.05)"};
  }
`,aa=ur.div`
  position: relative;
  width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,oa=ur.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  padding-left: calc(var(--spacing-md) * 2 + 1em);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--surface);
  color: var(--text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`,sa=ur.span`
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,la=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xxl);
`,ca=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,da=ur.div`
  height: 200px;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
  position: relative;
`,ua=ur.div`
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  text-transform: capitalize;
`,pa=ur.div`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(155, 89, 182, 0.9);
  color: white;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 5px;
`,ha=ur.div`
  padding: var(--spacing-md);
`,ma=ur.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
`,fa=ur.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
`,ga=ur.div`
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border);
`,va=ur.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-xs);
  font-size: 0.9rem;
`,ya=ur.span`
  color: var(--text-secondary);
`,xa=ur.span`
  color: var(--text-primary);
  font-weight: 500;
`,ba=ur.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
`,wa=ur.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  color: var(--text-secondary);
`,ja=()=>{const{assets:e,loading:r,error:n}=Ki(),[i,a]=(0,t.useState)("all"),[o,s]=(0,t.useState)(""),l=e.filter((e=>{const t="all"===i||e.type===i,r=""===o||e.name.toLowerCase().includes(o.toLowerCase())||e.creator.toLowerCase().includes(o.toLowerCase());return t&&r})),c=e=>"boolean"===typeof e?e?"Yes":"No":"object"===typeof e?JSON.stringify(e).substring(0,20)+"...":e;return r?(0,xe.jsxs)(Ji,{children:[(0,xe.jsx)(Zi,{children:(0,xe.jsx)(ea,{children:"Asset Gallery"})}),(0,xe.jsxs)(wa,{children:[(0,xe.jsx)("h3",{children:"Loading assets..."}),(0,xe.jsx)("p",{children:"Please wait while we fetch the latest assets"})]})]}):n?(0,xe.jsxs)(Ji,{children:[(0,xe.jsx)(Zi,{children:(0,xe.jsx)(ea,{children:"Asset Gallery"})}),(0,xe.jsxs)(ba,{children:[(0,xe.jsx)("h3",{children:"Error loading assets"}),(0,xe.jsx)("p",{children:n})]})]}):(0,xe.jsxs)(Ji,{children:[(0,xe.jsxs)(Zi,{children:[(0,xe.jsx)(ea,{children:"Asset Gallery"}),(0,xe.jsx)(ta,{children:"Browse assets created with our platform tools. All assets can be used seamlessly across different tools without manual exports or imports."})]}),(0,xe.jsxs)(ra,{children:[(0,xe.jsx)(na,{children:[{id:"all",name:"All Assets"},{id:"character",name:"Characters"},{id:"map",name:"Maps"},{id:"item",name:"Items"}].map((e=>(0,xe.jsx)(ia,{active:i===e.id,onClick:()=>a(e.id),children:e.name},e.id)))}),(0,xe.jsxs)(aa,{children:[(0,xe.jsx)(sa,{children:"\ud83d\udd0d"}),(0,xe.jsx)(oa,{type:"text",placeholder:"Search assets...",value:o,onChange:e=>s(e.target.value)})]})]}),l.length>0?(0,xe.jsx)(la,{children:l.map((e=>{return(0,xe.jsxs)(ca,{children:[(0,xe.jsxs)(da,{src:e.imgUrl,children:[(0,xe.jsx)(ua,{children:e.type}),e.ownedByNFT&&(0,xe.jsxs)(pa,{children:[(0,xe.jsx)("span",{children:"NFT"}),(0,xe.jsx)("span",{children:"\ud83d\udd12"})]})]}),(0,xe.jsxs)(ha,{children:[(0,xe.jsx)(ma,{children:e.name}),(0,xe.jsxs)(fa,{children:["Created by: ",e.creator]}),(0,xe.jsx)(ga,{children:(t=e.properties,Object.entries(t).slice(0,3)).map((e=>{let[t,r]=e;return(0,xe.jsxs)(va,{children:[(0,xe.jsxs)(ya,{children:[t,":"]}),(0,xe.jsx)(xa,{children:c(r)})]},t)}))})]})]},e.id);var t}))}):(0,xe.jsxs)(ba,{children:[(0,xe.jsx)("h3",{children:"No assets found"}),(0,xe.jsx)("p",{children:"Try adjusting your filters or search query"})]})]})},Sa=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ka=(0,t.createContext)({}),Ca=(0,t.createContext)(null),Pa="undefined"!==typeof document,Ea=Pa?t.useLayoutEffect:t.useEffect,Ta=(0,t.createContext)({strict:!1}),Aa=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),za="data-"+Aa("framerAppearId");function Ia(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function Da(e){return"string"===typeof e||Array.isArray(e)}function La(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const Ra=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ma=["initial",...Ra];function Oa(e){return La(e.animate)||Ma.some((t=>Da(e[t])))}function _a(e){return Boolean(Oa(e)||e.variants)}function Na(e){const{initial:r,animate:n}=function(e,t){if(Oa(e)){const{initial:t,animate:r}=e;return{initial:!1===t||Da(t)?t:void 0,animate:Da(r)?r:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(ka));return(0,t.useMemo)((()=>({initial:r,animate:n})),[Fa(r),Fa(n)])}function Fa(e){return Array.isArray(e)?e.join(" "):e}const Va={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ba={};for(const r in Va)Ba[r]={isEnabled:e=>Va[r].some((t=>!!e[t]))};const $a=(0,t.createContext)({}),Ua=(0,t.createContext)({}),Wa=Symbol.for("motionComponentSymbol");function Ha(e){let{preloadedFeatures:r,createVisualElement:n,useRender:i,useVisualState:a,Component:o}=e;r&&function(e){for(const t in e)Ba[t]={...Ba[t],...e[t]}}(r);const s=(0,t.forwardRef)((function(e,s){let l;const c={...(0,t.useContext)(Sa),...e,layoutId:Ga(e)},{isStatic:d}=c,u=Na(e),p=a(e,d);if(!d&&Pa){u.visualElement=function(e,r,n,i){const{visualElement:a}=(0,t.useContext)(ka),o=(0,t.useContext)(Ta),s=(0,t.useContext)(Ca),l=(0,t.useContext)(Sa).reducedMotion,c=(0,t.useRef)();i=i||o.renderer,!c.current&&i&&(c.current=i(e,{visualState:r,parent:a,props:n,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const d=c.current;(0,t.useInsertionEffect)((()=>{d&&d.update(n,s)}));const u=(0,t.useRef)(Boolean(n[za]&&!window.HandoffComplete));return Ea((()=>{d&&(d.render(),u.current&&d.animationState&&d.animationState.animateChanges())})),(0,t.useEffect)((()=>{d&&(d.updateFeatures(),!u.current&&d.animationState&&d.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))})),d}(o,p,c,n);const e=(0,t.useContext)(Ua),i=(0,t.useContext)(Ta).strict;u.visualElement&&(l=u.visualElement.loadFeatures(c,i,r,e))}return t.createElement(ka.Provider,{value:u},l&&u.visualElement?t.createElement(l,{visualElement:u.visualElement,...c}):null,i(o,e,function(e,r,n){return(0,t.useCallback)((t=>{t&&e.mount&&e.mount(t),r&&(t?r.mount(t):r.unmount()),n&&("function"===typeof n?n(t):Ia(n)&&(n.current=t))}),[r])}(p,u.visualElement,s),p,d,u.visualElement))}));return s[Wa]=o,s}function Ga(e){let{layoutId:r}=e;const n=(0,t.useContext)($a).id;return n&&void 0!==r?n+"-"+r:r}function qa(e){function t(t){return Ha(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const r=new Map;return new Proxy(t,{get:(e,n)=>(r.has(n)||r.set(n,t(n)),r.get(n))})}const Ya=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qa(e){return"string"===typeof e&&!e.includes("-")&&!!(Ya.indexOf(e)>-1||/[A-Z]/.test(e))}const Ka={};const Xa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ja=new Set(Xa);function Za(e,t){let{layout:r,layoutId:n}=t;return Ja.has(e)||e.startsWith("origin")||(r||void 0!==n)&&(!!Ka[e]||"opacity"===e)}const eo=e=>Boolean(e&&e.getVelocity),to={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ro=Xa.length;const no=e=>t=>"string"===typeof t&&t.startsWith(e),io=no("--"),ao=no("var(--"),oo=(e,t)=>t&&"number"===typeof e?t.transform(e):e,so=(e,t,r)=>Math.min(Math.max(r,e),t),lo={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},co={...lo,transform:e=>so(0,1,e)},uo={...lo,default:1},po=e=>Math.round(1e5*e)/1e5,ho=/(-)?([\d]*\.?[\d])+/g,mo=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,fo=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function go(e){return"string"===typeof e}const vo=e=>({test:t=>go(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),yo=vo("deg"),xo=vo("%"),bo=vo("px"),wo=vo("vh"),jo=vo("vw"),So={...xo,parse:e=>xo.parse(e)/100,transform:e=>xo.transform(100*e)},ko={...lo,transform:Math.round},Co={borderWidth:bo,borderTopWidth:bo,borderRightWidth:bo,borderBottomWidth:bo,borderLeftWidth:bo,borderRadius:bo,radius:bo,borderTopLeftRadius:bo,borderTopRightRadius:bo,borderBottomRightRadius:bo,borderBottomLeftRadius:bo,width:bo,maxWidth:bo,height:bo,maxHeight:bo,size:bo,top:bo,right:bo,bottom:bo,left:bo,padding:bo,paddingTop:bo,paddingRight:bo,paddingBottom:bo,paddingLeft:bo,margin:bo,marginTop:bo,marginRight:bo,marginBottom:bo,marginLeft:bo,rotate:yo,rotateX:yo,rotateY:yo,rotateZ:yo,scale:uo,scaleX:uo,scaleY:uo,scaleZ:uo,skew:yo,skewX:yo,skewY:yo,distance:bo,translateX:bo,translateY:bo,translateZ:bo,x:bo,y:bo,z:bo,perspective:bo,transformPerspective:bo,opacity:co,originX:So,originY:So,originZ:bo,zIndex:ko,fillOpacity:co,strokeOpacity:co,numOctaves:ko};function Po(e,t,r,n){const{style:i,vars:a,transform:o,transformOrigin:s}=e;let l=!1,c=!1,d=!0;for(const u in t){const e=t[u];if(io(u)){a[u]=e;continue}const r=Co[u],n=oo(e,r);if(Ja.has(u)){if(l=!0,o[u]=n,!d)continue;e!==(r.default||0)&&(d=!1)}else u.startsWith("origin")?(c=!0,s[u]=n):i[u]=n}if(t.transform||(l||n?i.transform=function(e,t,r,n){let{enableHardwareAcceleration:i=!0,allowTransformNone:a=!0}=t,o="";for(let s=0;s<ro;s++){const t=Xa[s];void 0!==e[t]&&(o+=`${to[t]||t}(${e[t]}) `)}return i&&!e.z&&(o+="translateZ(0)"),o=o.trim(),n?o=n(e,r?"":o):a&&r&&(o="none"),o}(e.transform,r,d,n):i.transform&&(i.transform="none")),c){const{originX:e="50%",originY:t="50%",originZ:r=0}=s;i.transformOrigin=`${e} ${t} ${r}`}}const Eo=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function To(e,t,r){for(const n in t)eo(t[n])||Za(n,r)||(e[n]=t[n])}function Ao(e,r,n){const i={};return To(i,e.style||{},e),Object.assign(i,function(e,r,n){let{transformTemplate:i}=e;return(0,t.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return Po(e,r,{enableHardwareAcceleration:!n},i),Object.assign({},e.vars,e.style)}),[r])}(e,r,n)),e.transformValues?e.transformValues(i):i}function zo(e,t,r){const n={},i=Ao(e,t,r);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const Io=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Do(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Io.has(e)}let Lo=e=>!Do(e);try{(Ro=require("@emotion/is-prop-valid").default)&&(Lo=e=>e.startsWith("on")?!Do(e):Ro(e))}catch(Wb){}var Ro;function Mo(e,t,r){return"string"===typeof e?e:bo.transform(t+r*e)}const Oo={offset:"stroke-dashoffset",array:"stroke-dasharray"},_o={offset:"strokeDashoffset",array:"strokeDasharray"};function No(e,t,r,n,i){let{attrX:a,attrY:o,attrScale:s,originX:l,originY:c,pathLength:d,pathSpacing:u=1,pathOffset:p=0,...h}=t;if(Po(e,h,r,i),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:m,style:f,dimensions:g}=e;m.transform&&(g&&(f.transform=m.transform),delete m.transform),g&&(void 0!==l||void 0!==c||f.transform)&&(f.transformOrigin=function(e,t,r){return`${Mo(t,e.x,e.width)} ${Mo(r,e.y,e.height)}`}(g,void 0!==l?l:.5,void 0!==c?c:.5)),void 0!==a&&(m.x=a),void 0!==o&&(m.y=o),void 0!==s&&(m.scale=s),void 0!==d&&function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?Oo:_o;e[a.offset]=bo.transform(-n);const o=bo.transform(t),s=bo.transform(r);e[a.array]=`${o} ${s}`}(m,d,u,p,!1)}const Fo=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Vo=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Bo(e,r,n,i){const a=(0,t.useMemo)((()=>{const t={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return No(t,r,{enableHardwareAcceleration:!1},Vo(i),e.transformTemplate),{...t.attrs,style:{...t.style}}}),[r]);if(e.style){const t={};To(t,e.style,e),a.style={...t,...a.style}}return a}function $o(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(r,n,i,a,o)=>{let{latestValues:s}=a;const l=(Qa(r)?Bo:zo)(n,s,o,r),c=function(e,t,r){const n={};for(const i in e)"values"===i&&"object"===typeof e.values||(Lo(i)||!0===r&&Do(i)||!t&&!Do(i)||e.draggable&&i.startsWith("onDrag"))&&(n[i]=e[i]);return n}(n,"string"===typeof r,e),d={...c,...l,ref:i},{children:u}=n,p=(0,t.useMemo)((()=>eo(u)?u.get():u),[u]);return(0,t.createElement)(r,{...d,children:p})}}function Uo(e,t,r,n){let{style:i,vars:a}=t;Object.assign(e.style,i,n&&n.getProjectionStyles(r));for(const o in a)e.style.setProperty(o,a[o])}const Wo=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ho(e,t,r,n){Uo(e,t,void 0,n);for(const i in t.attrs)e.setAttribute(Wo.has(i)?i:Aa(i),t.attrs[i])}function Go(e,t){const{style:r}=e,n={};for(const i in r)(eo(r[i])||t.style&&eo(t.style[i])||Za(i,e))&&(n[i]=r[i]);return n}function qo(e,t){const r=Go(e,t);for(const n in e)if(eo(e[n])||eo(t[n])){r[-1!==Xa.indexOf(n)?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n]=e[n]}return r}function Yo(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==r?r:e.custom,n,i)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==r?r:e.custom,n,i)),t}const Qo=e=>Array.isArray(e),Ko=e=>Qo(e)?e[e.length-1]||0:e;function Xo(e){const t=eo(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const Jo=e=>(r,n)=>{const i=(0,t.useContext)(ka),a=(0,t.useContext)(Ca),o=()=>function(e,t,r,n){let{scrapeMotionValuesFromProps:i,createRenderState:a,onMount:o}=e;const s={latestValues:Zo(t,r,n,i),renderState:a()};return o&&(s.mount=e=>o(t,e,s)),s}(e,r,i,a);return n?o():function(e){const r=(0,t.useRef)(null);return null===r.current&&(r.current=e()),r.current}(o)};function Zo(e,t,r,n){const i={},a=n(e,{});for(const p in a)i[p]=Xo(a[p]);let{initial:o,animate:s}=e;const l=Oa(e),c=_a(e);t&&c&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let d=!!r&&!1===r.initial;d=d||!1===o;const u=d?s:o;if(u&&"boolean"!==typeof u&&!La(u)){(Array.isArray(u)?u:[u]).forEach((t=>{const r=Yo(e,t);if(!r)return;const{transitionEnd:n,transition:a,...o}=r;for(const e in o){let t=o[e];if(Array.isArray(t)){t=t[d?t.length-1:0]}null!==t&&(i[e]=t)}for(const e in n)i[e]=n[e]}))}return i}const es=e=>e;class ts{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const rs=["prepare","read","update","preRender","render","postRender"];const{schedule:ns,cancel:is,state:as,steps:os}=function(e,t){let r=!1,n=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=rs.reduce(((e,t)=>(e[t]=function(e){let t=new ts,r=new ts,n=0,i=!1,a=!1;const o=new WeakSet,s={schedule:function(e){const a=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i,s=a?t:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),s.add(e)&&a&&i&&(n=t.order.length),e},cancel:e=>{r.remove(e),o.delete(e)},process:l=>{if(i)a=!0;else{if(i=!0,[t,r]=[r,t],r.clear(),n=t.order.length,n)for(let r=0;r<n;r++){const n=t.order[r];n(l),o.has(n)&&(s.schedule(n),e())}i=!1,a&&(a=!1,s.process(l))}}};return s}((()=>r=!0)),e)),{}),o=e=>a[e].process(i),s=()=>{const a=performance.now();r=!1,i.delta=n?1e3/60:Math.max(Math.min(a-i.timestamp,40),1),i.timestamp=a,i.isProcessing=!0,rs.forEach(o),i.isProcessing=!1,r&&t&&(n=!1,e(s))},l=rs.reduce(((t,o)=>{const l=a[o];return t[o]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r||(r=!0,n=!0,i.isProcessing||e(s)),l.schedule(t,a,o)},t}),{});return{schedule:l,cancel:e=>rs.forEach((t=>a[t].cancel(e))),state:i,steps:a}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:es,!0),ss={useVisualState:Jo({scrapeMotionValuesFromProps:qo,createRenderState:Fo,onMount:(e,t,r)=>{let{renderState:n,latestValues:i}=r;ns.read((()=>{try{n.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(Ub){n.dimensions={x:0,y:0,width:0,height:0}}})),ns.render((()=>{No(n,i,{enableHardwareAcceleration:!1},Vo(t.tagName),e.transformTemplate),Ho(t,n)}))}})},ls={useVisualState:Jo({scrapeMotionValuesFromProps:Go,createRenderState:Eo})};function cs(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r)}const ds=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function us(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function ps(e,t,r,n){return cs(e,t,(e=>t=>ds(t)&&e(t,us(t)))(r),n)}const hs=(e,t)=>r=>t(e(r)),ms=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(hs)};function fs(e){let t=null;return()=>{const r=()=>{t=null};return null===t&&(t=e,r)}}const gs=fs("dragHorizontal"),vs=fs("dragVertical");function ys(e){let t=!1;if("y"===e)t=vs();else if("x"===e)t=gs();else{const e=gs(),r=vs();e&&r?t=()=>{e(),r()}:(e&&e(),r&&r())}return t}function xs(){const e=ys(!0);return!e||(e(),!1)}class bs{constructor(e){this.isMounted=!1,this.node=e}update(){}}function ws(e,t){const r="pointer"+(t?"enter":"leave"),n="onHover"+(t?"Start":"End");return ps(e.current,r,((r,i)=>{if("touch"===r.pointerType||xs())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[n]&&ns.update((()=>a[n](r,i)))}),{passive:!e.getProps()[n]})}const js=(e,t)=>!!t&&(e===t||js(e,t.parentElement));function Ss(e,t){if(!t)return;const r=new PointerEvent("pointer"+e);t(r,us(r))}const ks=new WeakMap,Cs=new WeakMap,Ps=e=>{const t=ks.get(e.target);t&&t(e)},Es=e=>{e.forEach(Ps)};function Ts(e,t,r){const n=function(e){let{root:t,...r}=e;const n=t||document;Cs.has(n)||Cs.set(n,{});const i=Cs.get(n),a=JSON.stringify(r);return i[a]||(i[a]=new IntersectionObserver(Es,{root:t,...r})),i[a]}(t);return ks.set(e,r),n.observe(e),()=>{ks.delete(e),n.unobserve(e)}}const As={some:0,all:1};const zs={inView:{Feature:class extends bs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:n="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:r,threshold:"number"===typeof n?n:As[n]};return Ts(this.node.current,a,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:r,onViewportLeave:n}=this.node.getProps(),a=t?r:n;a&&a(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,r=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:r={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==r[e]}(e,t));r&&this.startObserver()}unmount(){}}},tap:{Feature:class extends bs{constructor(){super(...arguments),this.removeStartListeners=es,this.removeEndListeners=es,this.removeAccessibleListeners=es,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),n=ps(window,"pointerup",((e,t)=>{if(!this.checkPressEnd())return;const{onTap:r,onTapCancel:n,globalTapTarget:i}=this.node.getProps();ns.update((()=>{i||js(this.node.current,e.target)?r&&r(e,t):n&&n(e,t)}))}),{passive:!(r.onTap||r.onPointerUp)}),i=ps(window,"pointercancel",((e,t)=>this.cancelPress(e,t)),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=ms(n,i),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=cs(this.node.current,"keydown",(e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=cs(this.node.current,"keyup",(e=>{"Enter"===e.key&&this.checkPressEnd()&&Ss("up",((e,t)=>{const{onTap:r}=this.node.getProps();r&&ns.update((()=>r(e,t)))}))})),Ss("down",((e,t)=>{this.startPress(e,t)}))})),t=cs(this.node.current,"blur",(()=>{this.isPressing&&Ss("cancel",((e,t)=>this.cancelPress(e,t)))}));this.removeAccessibleListeners=ms(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:r,whileTap:n}=this.node.getProps();n&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ns.update((()=>r(e,t)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!xs()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ns.update((()=>r(e,t)))}mount(){const e=this.node.getProps(),t=ps(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=cs(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ms(t,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends bs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Ub){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ms(cs(this.node.current,"focus",(()=>this.onFocus())),cs(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends bs{mount(){this.unmount=ms(ws(this.node,!0),ws(this.node,!1))}unmount(){}}}};function Is(e,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Ds(e,t,r){const n=e.getProps();return Yo(n,t,void 0!==r?r:n.custom,function(e){const t={};return e.values.forEach(((e,r)=>t[r]=e.get())),t}(e),function(e){const t={};return e.values.forEach(((e,r)=>t[r]=e.getVelocity())),t}(e))}let Ls=es,Rs=es;const Ms=e=>1e3*e,Os=e=>e/1e3,_s=!1,Ns=e=>Array.isArray(e)&&"number"===typeof e[0];function Fs(e){return Boolean(!e||"string"===typeof e&&Bs[e]||Ns(e)||Array.isArray(e)&&e.every(Fs))}const Vs=e=>{let[t,r,n,i]=e;return`cubic-bezier(${t}, ${r}, ${n}, ${i})`},Bs={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Vs([0,.65,.55,1]),circOut:Vs([.55,0,1,.45]),backIn:Vs([.31,.01,.66,-.59]),backOut:Vs([.33,1.53,.69,.99])};function $s(e){if(e)return Ns(e)?Vs(e):Array.isArray(e)?e.map($s):Bs[e]}const Us=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e;function Ws(e,t,r,n){if(e===t&&r===n)return es;const i=t=>function(e,t,r,n,i){let a,o,s=0;do{o=t+(r-t)/2,a=Us(o,n,i)-e,a>0?r=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,r);return e=>0===e||1===e?e:Us(i(e),t,n)}const Hs=Ws(.42,0,1,1),Gs=Ws(0,0,.58,1),qs=Ws(.42,0,.58,1),Ys=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Qs=e=>t=>1-e(1-t),Ks=e=>1-Math.sin(Math.acos(e)),Xs=Qs(Ks),Js=Ys(Ks),Zs=Ws(.33,1.53,.69,.99),el=Qs(Zs),tl=Ys(el),rl={linear:es,easeIn:Hs,easeInOut:qs,easeOut:Gs,circIn:Ks,circInOut:Js,circOut:Xs,backIn:el,backInOut:tl,backOut:Zs,anticipate:e=>(e*=2)<1?.5*el(e):.5*(2-Math.pow(2,-10*(e-1)))},nl=e=>{if(Array.isArray(e)){Rs(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,r,n,i]=e;return Ws(t,r,n,i)}return"string"===typeof e?(Rs(void 0!==rl[e],`Invalid easing type '${e}'`),rl[e]):e},il=(e,t)=>r=>Boolean(go(r)&&fo.test(r)&&r.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(r,t)),al=(e,t,r)=>n=>{if(!go(n))return n;const[i,a,o,s]=n.match(ho);return{[e]:parseFloat(i),[t]:parseFloat(a),[r]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},ol={...lo,transform:e=>Math.round((e=>so(0,255,e))(e))},sl={test:il("rgb","red"),parse:al("red","green","blue"),transform:e=>{let{red:t,green:r,blue:n,alpha:i=1}=e;return"rgba("+ol.transform(t)+", "+ol.transform(r)+", "+ol.transform(n)+", "+po(co.transform(i))+")"}};const ll={test:il("#"),parse:function(e){let t="",r="",n="",i="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),i=e.substring(4,5),t+=t,r+=r,n+=n,i+=i),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}},transform:sl.transform},cl={test:il("hsl","hue"),parse:al("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:r,lightness:n,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+xo.transform(po(r))+", "+xo.transform(po(n))+", "+po(co.transform(i))+")"}},dl={test:e=>sl.test(e)||ll.test(e)||cl.test(e),parse:e=>sl.test(e)?sl.parse(e):cl.test(e)?cl.parse(e):ll.parse(e),transform:e=>go(e)?e:e.hasOwnProperty("red")?sl.transform(e):cl.transform(e)},ul=(e,t,r)=>-r*e+r*t+e;function pl(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}const hl=(e,t,r)=>{const n=e*e;return Math.sqrt(Math.max(0,r*(t*t-n)+n))},ml=[ll,sl,cl];function fl(e){const t=(e=>ml.find((t=>t.test(e))))(e);Rs(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let r=t.parse(e);return t===cl&&(r=function(e){let{hue:t,saturation:r,lightness:n,alpha:i}=e;t/=360,r/=100,n/=100;let a=0,o=0,s=0;if(r){const e=n<.5?n*(1+r):n+r-n*r,i=2*n-e;a=pl(i,e,t+1/3),o=pl(i,e,t),s=pl(i,e,t-1/3)}else a=o=s=n;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(r)),r}const gl=(e,t)=>{const r=fl(e),n=fl(t),i={...r};return e=>(i.red=hl(r.red,n.red,e),i.green=hl(r.green,n.green,e),i.blue=hl(r.blue,n.blue,e),i.alpha=ul(r.alpha,n.alpha,e),sl.transform(i))};const vl={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:es},yl={regex:mo,countKey:"Colors",token:"${c}",parse:dl.parse},xl={regex:ho,countKey:"Numbers",token:"${n}",parse:lo.parse};function bl(e,t){let{regex:r,countKey:n,token:i,parse:a}=t;const o=e.tokenised.match(r);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(r,i),e.values.push(...o.map(a)))}function wl(e){const t=e.toString(),r={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&bl(r,vl),bl(r,yl),bl(r,xl),r}function jl(e){return wl(e).values}function Sl(e){const{values:t,numColors:r,numVars:n,tokenised:i}=wl(e),a=t.length;return e=>{let t=i;for(let i=0;i<a;i++)t=i<n?t.replace(vl.token,e[i]):i<n+r?t.replace(yl.token,dl.transform(e[i])):t.replace(xl.token,po(e[i]));return t}}const kl=e=>"number"===typeof e?0:e;const Cl={test:function(e){var t,r;return isNaN(e)&&go(e)&&((null===(t=e.match(ho))||void 0===t?void 0:t.length)||0)+((null===(r=e.match(mo))||void 0===r?void 0:r.length)||0)>0},parse:jl,createTransformer:Sl,getAnimatableNone:function(e){const t=jl(e);return Sl(e)(t.map(kl))}},Pl=(e,t)=>r=>`${r>0?t:e}`;function El(e,t){return"number"===typeof e?r=>ul(e,t,r):dl.test(e)?gl(e,t):e.startsWith("var(")?Pl(e,t):zl(e,t)}const Tl=(e,t)=>{const r=[...e],n=r.length,i=e.map(((e,r)=>El(e,t[r])));return e=>{for(let t=0;t<n;t++)r[t]=i[t](e);return r}},Al=(e,t)=>{const r={...e,...t},n={};for(const i in r)void 0!==e[i]&&void 0!==t[i]&&(n[i]=El(e[i],t[i]));return e=>{for(const t in n)r[t]=n[t](e);return r}},zl=(e,t)=>{const r=Cl.createTransformer(t),n=wl(e),i=wl(t);return n.numVars===i.numVars&&n.numColors===i.numColors&&n.numNumbers>=i.numNumbers?ms(Tl(n.values,i.values),r):(Ls(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),Pl(e,t))},Il=(e,t,r)=>{const n=t-e;return 0===n?1:(r-e)/n},Dl=(e,t)=>r=>ul(e,t,r);function Ll(e,t,r){const n=[],i=r||function(e){return"number"===typeof e?Dl:"string"===typeof e?dl.test(e)?gl:zl:Array.isArray(e)?Tl:"object"===typeof e?Al:Dl}(e[0]),a=e.length-1;for(let o=0;o<a;o++){let r=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||es:t;r=ms(e,r)}n.push(r)}return n}function Rl(e,t){let{clamp:r=!0,ease:n,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(Rs(a===t.length,"Both input and output ranges must be the same length"),1===a)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=Ll(t,n,i),s=o.length,l=t=>{let r=0;if(s>1)for(;r<e.length-2&&!(t<e[r+1]);r++);const n=Il(e[r],e[r+1],t);return o[r](n)};return r?t=>l(so(e[0],e[a-1],t)):l}function Ml(e){const t=[0];return function(e,t){const r=e[e.length-1];for(let n=1;n<=t;n++){const i=Il(0,t,n);e.push(ul(r,1,i))}}(t,e.length-1),t}function Ol(e){let{duration:t=300,keyframes:r,times:n,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(nl):nl(i),o={done:!1,value:r[0]},s=function(e,t){return e.map((e=>e*t))}(n&&n.length===r.length?n:Ml(r),t),l=Rl(s,r,{ease:Array.isArray(a)?a:(c=r,d=a,c.map((()=>d||qs)).splice(0,c.length-1))});var c,d;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}function _l(e,t){return t?e*(1e3/t):0}function Nl(e,t,r){const n=Math.max(t-5,0);return _l(r-e(n),t-n)}const Fl=.001;function Vl(e){let t,r,{duration:n=800,bounce:i=.25,velocity:a=0,mass:o=1}=e;Ls(n<=Ms(10),"Spring duration must be 10 seconds or less");let s=1-i;s=so(.05,1,s),n=so(.01,10,Os(n)),s<1?(t=e=>{const t=e*s,r=t*n,i=t-a,o=$l(e,s),l=Math.exp(-r);return Fl-i/o*l},r=e=>{const r=e*s*n,i=r*a+a,o=Math.pow(s,2)*Math.pow(e,2)*n,l=Math.exp(-r),c=$l(Math.pow(e,2),s);return(-t(e)+Fl>0?-1:1)*((i-o)*l)/c}):(t=e=>Math.exp(-e*n)*((e-a)*n+1)-.001,r=e=>Math.exp(-e*n)*(n*n*(a-e)));const l=function(e,t,r){let n=r;for(let i=1;i<Bl;i++)n-=e(n)/t(n);return n}(t,r,5/n);if(n=Ms(n),isNaN(l))return{stiffness:100,damping:10,duration:n};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:n}}}const Bl=12;function $l(e,t){return e*Math.sqrt(1-t*t)}const Ul=["duration","bounce"],Wl=["stiffness","damping","mass"];function Hl(e,t){return t.some((t=>void 0!==e[t]))}function Gl(e){let{keyframes:t,restDelta:r,restSpeed:n,...i}=e;const a=t[0],o=t[t.length-1],s={done:!1,value:a},{stiffness:l,damping:c,mass:d,duration:u,velocity:p,isResolvedFromDuration:h}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Hl(e,Wl)&&Hl(e,Ul)){const r=Vl(e);t={...t,...r,mass:1},t.isResolvedFromDuration=!0}return t}({...i,velocity:-Os(i.velocity||0)}),m=p||0,f=c/(2*Math.sqrt(l*d)),g=o-a,v=Os(Math.sqrt(l/d)),y=Math.abs(g)<5;let x;if(n||(n=y?.01:2),r||(r=y?.005:.5),f<1){const e=$l(v,f);x=t=>{const r=Math.exp(-f*v*t);return o-r*((m+f*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===f)x=e=>o-Math.exp(-v*e)*(g+(m+v*g)*e);else{const e=v*Math.sqrt(f*f-1);x=t=>{const r=Math.exp(-f*v*t),n=Math.min(e*t,300);return o-r*((m+f*v*g)*Math.sinh(n)+e*g*Math.cosh(n))/e}}return{calculatedDuration:h&&u||null,next:e=>{const t=x(e);if(h)s.done=e>=u;else{let i=m;0!==e&&(i=f<1?Nl(x,e,t):0);const a=Math.abs(i)<=n,l=Math.abs(o-t)<=r;s.done=a&&l}return s.value=s.done?o:t,s}}}function ql(e){let{keyframes:t,velocity:r=0,power:n=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:d=.5,restSpeed:u}=e;const p=t[0],h={done:!1,value:p},m=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let f=n*r;const g=p+f,v=void 0===s?g:s(g);v!==g&&(f=v-p);const y=e=>-f*Math.exp(-e/i),x=e=>v+y(e),b=e=>{const t=y(e),r=x(e);h.done=Math.abs(t)<=d,h.value=h.done?v:r};let w,j;const S=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(h.value)&&(w=e,j=Gl({keyframes:[h.value,m(h.value)],velocity:Nl(x,e,h.value),damping:a,stiffness:o,restDelta:d,restSpeed:u}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return j||void 0!==w||(t=!0,b(e),S(e)),void 0!==w&&e>w?j.next(e-w):(!t&&b(e),h)}}}const Yl=e=>{const t=t=>{let{timestamp:r}=t;return e(r)};return{start:()=>ns.update(t,!0),stop:()=>is(t),now:()=>as.isProcessing?as.timestamp:performance.now()}};function Ql(e){let t=0;let r=e.next(t);for(;!r.done&&t<2e4;)t+=50,r=e.next(t);return t>=2e4?1/0:t}const Kl={decay:ql,inertia:ql,tween:Ol,keyframes:Ol,spring:Gl};function Xl(e){let t,r,{autoplay:n=!0,delay:i=0,driver:a=Yl,keyframes:o,type:s="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:d="loop",onPlay:u,onStop:p,onComplete:h,onUpdate:m,...f}=e,g=1,v=!1;const y=()=>{r=new Promise((e=>{t=e}))};let x;y();const b=Kl[s]||Ol;let w;b!==Ol&&"number"!==typeof o[0]&&(w=Rl([0,100],o,{clamp:!1}),o=[0,100]);const j=b({...f,keyframes:o});let S;"mirror"===d&&(S=b({...f,keyframes:[...o].reverse(),velocity:-(f.velocity||0)}));let k="idle",C=null,P=null,E=null;null===j.calculatedDuration&&l&&(j.calculatedDuration=Ql(j));const{calculatedDuration:T}=j;let A=1/0,z=1/0;null!==T&&(A=T+c,z=A*(l+1)-c);let I=0;const D=e=>{if(null===P)return;g>0&&(P=Math.min(P,e)),g<0&&(P=Math.min(e-z/g,P)),I=null!==C?C:Math.round(e-P)*g;const t=I-i*(g>=0?1:-1),r=g>=0?t<0:t>z;I=Math.max(t,0),"finished"===k&&null===C&&(I=z);let n=I,a=j;if(l){const e=Math.min(I,z)/A;let t=Math.floor(e),r=e%1;!r&&e>=1&&(r=1),1===r&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===d?(r=1-r,c&&(r-=c/A)):"mirror"===d&&(a=S)),n=so(0,1,r)*A}const s=r?{done:!1,value:o[0]}:a.next(n);w&&(s.value=w(s.value));let{done:u}=s;r||null===T||(u=g>=0?I>=z:I<=0);const p=null===C&&("finished"===k||"running"===k&&u);return m&&m(s.value),p&&M(),s},L=()=>{x&&x.stop(),x=void 0},R=()=>{k="idle",L(),t(),y(),P=E=null},M=()=>{k="finished",h&&h(),L(),t()},O=()=>{if(v)return;x||(x=a(D));const e=x.now();u&&u(),null!==C?P=e-C:P&&"finished"!==k||(P=e),"finished"===k&&y(),E=P,C=null,k="running",x.start()};n&&O();const _={then:(e,t)=>r.then(e,t),get time(){return Os(I)},set time(e){e=Ms(e),I=e,null===C&&x&&0!==g?P=x.now()-e/g:C=e},get duration(){const e=null===j.calculatedDuration?Ql(j):j.calculatedDuration;return Os(e)},get speed(){return g},set speed(e){e!==g&&x&&(g=e,_.time=Os(I))},get state(){return k},play:O,pause:()=>{k="paused",C=I},stop:()=>{v=!0,"idle"!==k&&(k="idle",p&&p(),R())},cancel:()=>{null!==E&&D(E),R()},complete:()=>{k="finished"},sample:e=>(P=0,D(e))};return _}const Jl=function(e){let t;return()=>(void 0===t&&(t=e()),t)}((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),Zl=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function ec(e,t,r){let{onUpdate:n,onComplete:i,...a}=r;if(!(Jl()&&Zl.has(t)&&!a.repeatDelay&&"mirror"!==a.repeatType&&0!==a.damping&&"inertia"!==a.type))return!1;let o,s,l=!1,c=!1;const d=()=>{s=new Promise((e=>{o=e}))};d();let{keyframes:u,duration:p=300,ease:h,times:m}=a;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!Fs(t.ease))(t,a)){const e=Xl({...a,repeat:0,delay:0});let t={done:!1,value:u[0]};const r=[];let n=0;for(;!t.done&&n<2e4;)t=e.sample(n),r.push(t.value),n+=10;m=void 0,u=r,p=n-10,h="linear"}const f=function(e,t,r){let{delay:n=0,duration:i,repeat:a=0,repeatType:o="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:r};l&&(c.offset=l);const d=$s(s);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:n,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"})}(e.owner.current,t,u,{...a,duration:p,ease:h,times:m}),g=()=>{c=!1,f.cancel()},v=()=>{c=!0,ns.update(g),o(),d()};f.onfinish=()=>{c||(e.set(function(e,t){let{repeat:r,repeatType:n="loop"}=t;return e[r&&"loop"!==n&&r%2===1?0:e.length-1]}(u,a)),i&&i(),v())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(f.timeline=e,f.onfinish=null,es),get time(){return Os(f.currentTime||0)},set time(e){f.currentTime=Ms(e)},get speed(){return f.playbackRate},set speed(e){f.playbackRate=e},get duration(){return Os(p)},play:()=>{l||(f.play(),is(g))},pause:()=>f.pause(),stop:()=>{if(l=!0,"idle"===f.playState)return;const{currentTime:t}=f;if(t){const r=Xl({...a,autoplay:!1});e.setWithVelocity(r.sample(t-10).value,r.sample(t).value,10)}v()},complete:()=>{c||f.finish()},cancel:v}}const tc={type:"spring",stiffness:500,damping:25,restSpeed:10},rc={type:"keyframes",duration:.8},nc={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ic=(e,t)=>{let{keyframes:r}=t;return r.length>2?rc:Ja.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===r[1]?2*Math.sqrt(550):30,restSpeed:10}:tc:nc},ac=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!Cl.test(t)&&"0"!==t||t.startsWith("url("))),oc=new Set(["brightness","contrast","saturate","opacity"]);function sc(e){const[t,r]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[n]=r.match(ho)||[];if(!n)return e;const i=r.replace(n,"");let a=oc.has(t)?1:0;return n!==r&&(a*=100),t+"("+a+i+")"}const lc=/([a-z-]*)\(.*?\)/g,cc={...Cl,getAnimatableNone:e=>{const t=e.match(lc);return t?t.map(sc).join(" "):e}},dc={...Co,color:dl,backgroundColor:dl,outlineColor:dl,fill:dl,stroke:dl,borderColor:dl,borderTopColor:dl,borderRightColor:dl,borderBottomColor:dl,borderLeftColor:dl,filter:cc,WebkitFilter:cc},uc=e=>dc[e];function pc(e,t){let r=uc(e);return r!==cc&&(r=Cl),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const hc=e=>/^0[^.\s]+$/.test(e);function mc(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||hc(e):void 0}function fc(e,t){return e[t]||e.default||e}const gc=!1,vc=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i=>{const a=fc(n,e)||{},o=a.delay||n.delay||0;let{elapsed:s=0}=n;s-=Ms(o);const l=function(e,t,r,n){const i=ac(t,r);let a;a=Array.isArray(r)?[...r]:[null,r];const o=void 0!==n.from?n.from:e.get();let s;const l=[];for(let c=0;c<a.length;c++)null===a[c]&&(a[c]=0===c?o:a[c-1]),mc(a[c])&&l.push(c),"string"===typeof a[c]&&"none"!==a[c]&&"0"!==a[c]&&(s=a[c]);if(i&&l.length&&s)for(let c=0;c<l.length;c++)a[l[c]]=pc(t,s);return a}(t,e,r,a),c=l[0],d=l[l.length-1],u=ac(e,c),p=ac(e,d);Ls(u===p,`You are trying to animate ${e} from "${c}" to "${d}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${d} via the \`style\` property.`);let h={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-s,onUpdate:e=>{t.set(e),a.onUpdate&&a.onUpdate(e)},onComplete:()=>{i(),a.onComplete&&a.onComplete()}};if(function(e){let{when:t,delay:r,delayChildren:n,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:d,...u}=e;return!!Object.keys(u).length}(a)||(h={...h,...ic(e,h)}),h.duration&&(h.duration=Ms(h.duration)),h.repeatDelay&&(h.repeatDelay=Ms(h.repeatDelay)),!u||!p||_s||!1===a.type||gc)return function(e){let{keyframes:t,delay:r,onUpdate:n,onComplete:i}=e;const a=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:es,pause:es,stop:es,then:e=>(e(),Promise.resolve()),cancel:es,complete:es});return r?Xl({keyframes:[0,1],duration:0,delay:r,onComplete:a}):a()}(_s?{...h,delay:0}:h);if(!n.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const r=ec(t,e,h);if(r)return r}return Xl(h)}};function yc(e){return Boolean(eo(e)&&e.add)}const xc=e=>/^\-?\d*\.?\d+$/.test(e);function bc(e,t){-1===e.indexOf(t)&&e.push(t)}function wc(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}class jc{constructor(){this.subscriptions=[]}add(e){return bc(this.subscriptions,e),()=>wc(this.subscriptions,e)}notify(e,t,r){const n=this.subscriptions.length;if(n)if(1===n)this.subscriptions[0](e,t,r);else for(let i=0;i<n;i++){const n=this.subscriptions[i];n&&n(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Sc={current:void 0};class kc{constructor(e){var t=this;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:n,timestamp:i}=as;t.lastUpdated!==i&&(t.timeDelta=n,t.lastUpdated=i,ns.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),r&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>ns.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(n=this.current,!isNaN(parseFloat(n))),this.owner=r.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new jc);const r=this.events[e].add(t);return"change"===e?()=>{r(),ns.read((()=>{this.events.change.getSize()||this.stop()}))}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,r){this.set(t),this.prev=e,this.timeDelta=r}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Sc.current&&Sc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?_l(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Cc(e,t){return new kc(e,t)}const Pc=e=>t=>t.test(e),Ec=[lo,bo,xo,yo,jo,wo,{test:e=>"auto"===e,parse:e=>e}],Tc=e=>Ec.find(Pc(e)),Ac=[...Ec,dl,Cl],zc=e=>Ac.find(Pc(e));function Ic(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,Cc(r))}function Dc(e,t){const r=Ds(e,t);let{transitionEnd:n={},transition:i={},...a}=r?e.makeTargetAnimatable(r,!1):{};a={...a,...n};for(const o in a){Ic(e,o,Ko(a[o]))}}function Lc(e,t){if(!t)return;return(t[e]||t.default||t).from}function Rc(e,t){let{protectedKeys:r,needsAnimating:n}=e;const i=r.hasOwnProperty(t)&&!0!==n[t];return n[t]=!1,i}function Mc(e,t){const r=e.get();if(!Array.isArray(t))return r!==t;for(let n=0;n<t.length;n++)if(t[n]!==r)return!0}function Oc(e,t){let{delay:r=0,transitionOverride:n,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");n&&(a=n);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const u in s){const t=e.getValue(u),n=s[u];if(!t||void 0===n||d&&Rc(d,u))continue;const i={delay:r,elapsed:0,...fc(a||{},u)};if(window.HandoffAppearAnimations){const r=e.getProps()[za];if(r){const e=window.HandoffAppearAnimations(r,u,t,ns);null!==e&&(i.elapsed=e,i.isHandoff=!0)}}let o=!i.isHandoff&&!Mc(t,n);if("spring"===i.type&&(t.getVelocity()||i.velocity)&&(o=!1),t.animation&&(o=!1),o)continue;t.start(vc(u,t,n,e.shouldReduceMotion&&Ja.has(u)?{type:!1}:i));const p=t.animation;yc(l)&&(l.add(u),p.then((()=>l.remove(u)))),c.push(p)}return o&&Promise.all(c).then((()=>{o&&Dc(e,o)})),c}function _c(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=Ds(e,t,r.custom);let{transition:i=e.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(i=r.transitionOverride);const a=n?()=>Promise.all(Oc(e,n,r)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*n,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*n}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*n};return Array.from(e.variantChildren).sort(Nc).forEach(((e,n)=>{e.notify("AnimationStart",t),o.push(_c(e,t,{...a,delay:r+l(n)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(o)}(e,t,a+n,o,s,r)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then((()=>t()))}return Promise.all([a(),o(r.delay)])}function Nc(e,t){return e.sortNodePosition(t)}const Fc=[...Ra].reverse(),Vc=Ra.length;function Bc(e){return t=>Promise.all(t.map((t=>{let{animation:r,options:n}=t;return function(e,t){let r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>_c(e,t,n)));r=Promise.all(i)}else if("string"===typeof t)r=_c(e,t,n);else{const i="function"===typeof t?Ds(e,t,n.custom):t;r=Promise.all(Oc(e,i,n))}return r.then((()=>e.notify("AnimationComplete",t)))}(e,r,n)})))}function $c(e){let t=Bc(e);const r={animate:Wc(!0),whileInView:Wc(),whileHover:Wc(),whileTap:Wc(),whileDrag:Wc(),whileFocus:Wc(),exit:Wc()};let n=!0;const i=(t,r)=>{const n=Ds(e,r);if(n){const{transition:e,transitionEnd:r,...i}=n;t={...t,...i,...r}}return t};function a(a,o){const s=e.getProps(),l=e.getVariantContext(!0)||{},c=[],d=new Set;let u={},p=1/0;for(let t=0;t<Vc;t++){const h=Fc[t],m=r[h],f=void 0!==s[h]?s[h]:l[h],g=Da(f),v=h===o?m.isActive:null;!1===v&&(p=t);let y=f===l[h]&&f!==s[h]&&g;if(y&&n&&e.manuallyAnimateOnMount&&(y=!1),m.protectedKeys={...u},!m.isActive&&null===v||!f&&!m.prevProp||La(f)||"boolean"===typeof f)continue;let x=Uc(m.prevProp,f)||h===o&&m.isActive&&!y&&g||t>p&&g,b=!1;const w=Array.isArray(f)?f:[f];let j=w.reduce(i,{});!1===v&&(j={});const{prevResolvedValues:S={}}=m,k={...S,...j},C=e=>{x=!0,d.has(e)&&(b=!0,d.delete(e)),m.needsAnimating[e]=!0};for(const e in k){const t=j[e],r=S[e];if(u.hasOwnProperty(e))continue;let n=!1;n=Qo(t)&&Qo(r)?!Is(t,r):t!==r,n?void 0!==t?C(e):d.add(e):void 0!==t&&d.has(e)?C(e):m.protectedKeys[e]=!0}m.prevProp=f,m.prevResolvedValues=j,m.isActive&&(u={...u,...j}),n&&e.blockInitialAnimation&&(x=!1),!x||y&&!b||c.push(...w.map((e=>({animation:e,options:{type:h,...a}}))))}if(d.size){const t={};d.forEach((r=>{const n=e.getBaseTarget(r);void 0!==n&&(t[r]=n)})),c.push({animation:t})}let h=Boolean(c.length);return!n||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(h=!1),n=!1,h?t(c):Promise.resolve()}return{animateChanges:a,setActive:function(t,n,i){var o;if(r[t].isActive===n)return Promise.resolve();null===(o=e.variantChildren)||void 0===o||o.forEach((e=>{var r;return null===(r=e.animationState)||void 0===r?void 0:r.setActive(t,n)})),r[t].isActive=n;const s=a(i,t);for(const e in r)r[e].protectedKeys={};return s},setAnimateFunction:function(r){t=r(e)},getState:()=>r}}function Uc(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Is(t,e)}function Wc(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let Hc=0;const Gc={animation:{Feature:class extends bs{constructor(e){super(e),e.animationState||(e.animationState=$c(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),La(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends bs{constructor(){super(...arguments),this.id=Hc++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:r}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const i=this.node.animationState.setActive("exit",!e,{custom:null!==r&&void 0!==r?r:this.node.getProps().custom});t&&!e&&i.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},qc=(e,t)=>Math.abs(e-t);class Yc{constructor(e,t){let{transformPagePoint:r,contextWindow:n,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Xc(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,r=function(e,t){const r=qc(e.x,t.x),n=qc(e.y,t.y);return Math.sqrt(r**2+n**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!r)return;const{point:n}=e,{timestamp:i}=as;this.history.push({...n,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Qc(t,this.transformPagePoint),ns.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:r,onSessionEnd:n,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Xc("pointercancel"===e.type?this.lastMoveEventInfo:Qc(t,this.transformPagePoint),this.history);this.startEvent&&r&&r(e,a),n&&n(e,a)},!ds(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=r,this.contextWindow=n||window;const a=Qc(us(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=as;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Xc(a,this.history)),this.removeListeners=ms(ps(this.contextWindow,"pointermove",this.handlePointerMove),ps(this.contextWindow,"pointerup",this.handlePointerUp),ps(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),is(this.updatePoint)}}function Qc(e,t){return t?{point:t(e.point)}:e}function Kc(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Xc(e,t){let{point:r}=e;return{point:r,delta:Kc(r,Zc(t)),offset:Kc(r,Jc(t)),velocity:ed(t,.1)}}function Jc(e){return e[0]}function Zc(e){return e[e.length-1]}function ed(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null;const i=Zc(e);for(;r>=0&&(n=e[r],!(i.timestamp-n.timestamp>Ms(t)));)r--;if(!n)return{x:0,y:0};const a=Os(i.timestamp-n.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-n.x)/a,y:(i.y-n.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function td(e){return e.max-e.min}function rd(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=r}function nd(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=n,e.originPoint=ul(t.min,t.max,e.origin),e.scale=td(r)/td(t),(rd(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ul(r.min,r.max,e.origin)-e.originPoint,(rd(e.translate)||isNaN(e.translate))&&(e.translate=0)}function id(e,t,r,n){nd(e.x,t.x,r.x,n?n.originX:void 0),nd(e.y,t.y,r.y,n?n.originY:void 0)}function ad(e,t,r){e.min=r.min+t.min,e.max=e.min+td(t)}function od(e,t,r){e.min=t.min-r.min,e.max=e.min+td(t)}function sd(e,t,r){od(e.x,t.x,r.x),od(e.y,t.y,r.y)}function ld(e,t,r){return{min:void 0!==t?e.min+t:void 0,max:void 0!==r?e.max+r-(e.max-e.min):void 0}}function cd(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}const dd=.35;function ud(e,t,r){return{min:pd(e,t),max:pd(e,r)}}function pd(e,t){return"number"===typeof e?e:e[t]||0}function hd(e){return[e("x"),e("y")]}function md(e){let{top:t,left:r,right:n,bottom:i}=e;return{x:{min:r,max:n},y:{min:t,max:i}}}function fd(e){return void 0===e||1===e}function gd(e){let{scale:t,scaleX:r,scaleY:n}=e;return!fd(t)||!fd(r)||!fd(n)}function vd(e){return gd(e)||yd(e)||e.z||e.rotate||e.rotateX||e.rotateY}function yd(e){return xd(e.x)||xd(e.y)}function xd(e){return e&&"0%"!==e}function bd(e,t,r){return r+t*(e-r)}function wd(e,t,r,n,i){return void 0!==i&&(e=bd(e,i,n)),bd(e,r,n)+t}function jd(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=wd(e.min,t,r,n,i),e.max=wd(e.max,t,r,n,i)}function Sd(e,t){let{x:r,y:n}=t;jd(e.x,r.translate,r.scale,r.originPoint),jd(e.y,n.translate,n.scale,n.originPoint)}function kd(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Cd(e,t){e.min=e.min+t,e.max=e.max+t}function Pd(e,t,r){let[n,i,a]=r;const o=void 0!==t[a]?t[a]:.5,s=ul(e.min,e.max,o);jd(e,t[n],t[i],s,t.scale)}const Ed=["x","scaleX","originX"],Td=["y","scaleY","originY"];function Ad(e,t){Pd(e.x,t,Ed),Pd(e.y,t,Td)}function zd(e,t){return md(function(e,t){if(!t)return e;const r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}(e.getBoundingClientRect(),t))}const Id=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},Dd=new WeakMap;class Ld{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;const{dragSnapToOrigin:n}=this.getProps();this.panSession=new Yc(e,{onSessionStart:e=>{const{dragSnapToOrigin:r}=this.getProps();r?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(us(e,"page").point)},onStart:(e,t)=>{const{drag:r,dragPropagation:n,onDragStart:i}=this.getProps();if(r&&!n&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=ys(r),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),hd((e=>{let t=this.getAxisMotionValue(e).get()||0;if(xo.test(t)){const{projection:r}=this.visualElement;if(r&&r.layout){const n=r.layout.layoutBox[e];if(n){t=td(n)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&ns.update((()=>i(e,t)),!1,!0);const{animationState:a}=this.visualElement;a&&a.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:r,dragDirectionLock:n,onDirectionLock:i,onDrag:a}=this.getProps();if(!r&&!this.openGlobalLock)return;const{offset:o}=t;if(n&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=null;Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x");return r}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>hd((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:n,contextWindow:Id(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:n}=t;this.startAnimation(n);const{onDragEnd:i}=this.getProps();i&&ns.update((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:n}=this.getProps();if(!r||!Rd(e,n,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(a=function(e,t,r){let{min:n,max:i}=t;return void 0!==n&&e<n?e=r?ul(n,e,r.min):Math.max(e,n):void 0!==i&&e>i&&(e=r?ul(i,e,r.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&Ia(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!n)&&function(e,t){let{top:r,left:n,bottom:i,right:a}=t;return{x:ld(e.x,n,a),y:ld(e.y,r,i)}}(n.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dd;return!1===e?e=0:!0===e&&(e=dd),{x:ud(e,"left","right"),y:ud(e,"top","bottom")}}(r),i!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&hd((e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const r={};return void 0!==t.min&&(r.min=t.min-e.min),void 0!==t.max&&(r.max=t.max-e.min),r}(n.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ia(e))return!1;const r=e.current;Rs(null!==r,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:n}=this.visualElement;if(!n||!n.layout)return!1;const i=function(e,t,r){const n=zd(e,r),{scroll:i}=t;return i&&(Cd(n.x,i.offset.x),Cd(n.y,i.offset.y)),n}(r,n.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:cd(e.x,t.x),y:cd(e.y,t.y)}}(n.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:r}=e;return{top:r.min,right:t.max,bottom:r.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=md(e))}return a}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:n,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=hd((o=>{if(!Rd(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const c=n?200:1e6,d=n?40:1e7,u={type:"inertia",velocity:r?e[o]:0,bounceStiffness:c,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,u)}));return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return r.start(vc(e,r,0,t))}stopAnimation(){hd((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){hd((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),n=r[t];return n||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){hd((t=>{const{drag:r}=this.getProps();if(!Rd(t,r,this.currentDirection))return;const{projection:n}=this.visualElement,i=this.getAxisMotionValue(t);if(n&&n.layout){const{min:r,max:a}=n.layout.layoutBox[t];i.set(e[t]-ul(r,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Ia(t)||!r||!this.constraints)return;this.stopAnimation();const n={x:0,y:0};hd((e=>{const t=this.getAxisMotionValue(e);if(t){const r=t.get();n[e]=function(e,t){let r=.5;const n=td(e),i=td(t);return i>n?r=Il(t.min,t.max-n,e.min):n>i&&(r=Il(e.min,e.max-i,t.min)),so(0,1,r)}({min:r,max:r},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),hd((t=>{if(!Rd(t,e,null))return;const r=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];r.set(ul(i,a,n[t]))}))}addListeners(){if(!this.visualElement.current)return;Dd.set(this.visualElement,this);const e=ps(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:r=!0}=this.getProps();t&&r&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Ia(e)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,n=r.addEventListener("measure",t);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),t();const i=cs(window,"resize",(()=>this.scalePositionWithinConstraints())),a=r.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:r}=e;this.isDragging&&r&&(hd((e=>{const r=this.getAxisMotionValue(e);r&&(this.originPoint[e]+=t[e].translate,r.set(r.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),n(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:n=!1,dragConstraints:i=!1,dragElastic:a=dd,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:n,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function Rd(e,t,r){return(!0===t||t===e)&&(null===r||r===e)}const Md=e=>(t,r)=>{e&&ns.update((()=>e(t,r)))};const Od={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function _d(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Nd={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!bo.test(e))return e;e=parseFloat(e)}return`${_d(e,t.target.x)}% ${_d(e,t.target.y)}%`}},Fd={correct:(e,t)=>{let{treeScale:r,projectionDelta:n}=t;const i=e,a=Cl.parse(e);if(a.length>5)return i;const o=Cl.createTransformer(e),s="number"!==typeof a[0]?1:0,l=n.x.scale*r.x,c=n.y.scale*r.y;a[0+s]/=l,a[1+s]/=c;const d=ul(l,c,.5);return"number"===typeof a[2+s]&&(a[2+s]/=d),"number"===typeof a[3+s]&&(a[3+s]/=d),o(a)}};class Vd extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:n}=this.props,{projection:i}=e;var a;a=$d,Object.assign(Ka,a),i&&(t.group&&t.group.add(i),r&&r.register&&n&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Od.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:n,isPresent:i}=this.props,a=r.projection;return a?(a.isPresent=i,n||e.layoutDependency!==t||void 0===t?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||ns.postRender((()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:n}=e;n&&(n.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(n),r&&r.deregister&&r.deregister(n))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Bd(e){const[r,n]=function(){const e=(0,t.useContext)(Ca);if(null===e)return[!0,null];const{isPresent:r,onExitComplete:n,register:i}=e,a=(0,t.useId)();return(0,t.useEffect)((()=>i(a)),[]),!r&&n?[!1,()=>n&&n(a)]:[!0]}(),i=(0,t.useContext)($a);return t.createElement(Vd,{...e,layoutGroup:i,switchLayoutGroup:(0,t.useContext)(Ua),isPresent:r,safeToRemove:n})}const $d={borderRadius:{...Nd,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Nd,borderTopRightRadius:Nd,borderBottomLeftRadius:Nd,borderBottomRightRadius:Nd,boxShadow:Fd},Ud=["TopLeft","TopRight","BottomLeft","BottomRight"],Wd=Ud.length,Hd=e=>"string"===typeof e?parseFloat(e):e,Gd=e=>"number"===typeof e||bo.test(e);function qd(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Yd=Kd(0,.5,Xs),Qd=Kd(.5,.95,es);function Kd(e,t,r){return n=>n<e?0:n>t?1:r(Il(e,t,n))}function Xd(e,t){e.min=t.min,e.max=t.max}function Jd(e,t){Xd(e.x,t.x),Xd(e.y,t.y)}function Zd(e,t,r,n,i){return e=bd(e-=t,1/r,n),void 0!==i&&(e=bd(e,1/i,n)),e}function eu(e,t,r,n,i){let[a,o,s]=r;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;xo.test(t)&&(t=parseFloat(t),t=ul(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=ul(a.min,a.max,n);e===a&&(s-=t),e.min=Zd(e.min,t,r,s,i),e.max=Zd(e.max,t,r,s,i)}(e,t[a],t[o],t[s],t.scale,n,i)}const tu=["x","scaleX","originX"],ru=["y","scaleY","originY"];function nu(e,t,r,n){eu(e.x,t,tu,r?r.x:void 0,n?n.x:void 0),eu(e.y,t,ru,r?r.y:void 0,n?n.y:void 0)}function iu(e){return 0===e.translate&&1===e.scale}function au(e){return iu(e.x)&&iu(e.y)}function ou(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function su(e){return td(e.x)/td(e.y)}class lu{constructor(){this.members=[]}add(e){bc(this.members,e),e.scheduleRender()}remove(e){if(wc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let r;for(let n=t;n>=0;n--){const e=this.members[n];if(!1!==e.isPresent){r=e;break}}return!!r&&(this.promote(r),!0)}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:n}=e.options;!1===n&&r.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function cu(e,t,r){let n="";const i=e.x.translate/t.x,a=e.y.translate/t.y;if((i||a)&&(n=`translate3d(${i}px, ${a}px, 0) `),1===t.x&&1===t.y||(n+=`scale(${1/t.x}, ${1/t.y}) `),r){const{rotate:e,rotateX:t,rotateY:i}=r;e&&(n+=`rotate(${e}deg) `),t&&(n+=`rotateX(${t}deg) `),i&&(n+=`rotateY(${i}deg) `)}const o=e.x.scale*t.x,s=e.y.scale*t.y;return 1===o&&1===s||(n+=`scale(${o}, ${s})`),n||"none"}const du=(e,t)=>e.depth-t.depth;class uu{constructor(){this.children=[],this.isDirty=!1}add(e){bc(this.children,e),this.isDirty=!0}remove(e){wc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(du),this.isDirty=!1,this.children.forEach(e)}}const pu=["","X","Y","Z"],hu={visibility:"hidden"};let mu=0;const fu={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function gu(e){let{attachResizeListener:t,defaultParent:r,measureScroll:n,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===r||void 0===r?void 0:r();this.id=mu++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,fu.totalNodes=fu.resolvedTargetDeltas=fu.recalculatedProjection=0,this.nodes.forEach(xu),this.nodes.forEach(Pu),this.nodes.forEach(Eu),this.nodes.forEach(bu),function(e){window.MotionDebug&&window.MotionDebug.record(e)}(fu)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let r=0;r<this.path.length;r++)this.path[r].shouldResetTransform=!0;this.root===this&&(this.nodes=new uu)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new jc),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];t&&t.notify(...n)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var n;this.isSVG=(n=e)instanceof SVGElement&&"svg"!==n.tagName,this.instance=e;const{layoutId:i,layout:a,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),r&&(a||i)&&(this.isLayoutDirty=!0),t){let r;const n=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,r&&r(),r=function(e,t){const r=performance.now(),n=i=>{let{timestamp:a}=i;const o=a-r;o>=t&&(is(n),e(o-t))};return ns.read(n,!0),()=>is(n)}(n,250),Od.hasAnimatedSinceResize&&(Od.hasAnimatedSinceResize=!1,this.nodes.forEach(Cu))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||a)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:r,hasRelativeTargetChanged:n,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||o.getDefaultTransition()||Lu,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),c=!this.targetLayout||!ou(this.targetLayout,i)||n,d=!r&&n;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||d||r&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,d);const e={...fc(a,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else r||Cu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,is(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Tu),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:r}=this.options;if(void 0===t&&!r)return;const n=this.getTransformTemplate();this.prevTransformTemplateValue=n?n(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(ju);this.isUpdating||this.nodes.forEach(Su),this.isUpdating=!1,this.nodes.forEach(ku),this.nodes.forEach(vu),this.nodes.forEach(yu),this.clearAllSnapshots();const e=performance.now();as.delta=so(0,1e3/60,e-as.timestamp),as.timestamp=e,as.isProcessing=!0,os.update.process(as),os.preRender.process(as),os.render.process(as),as.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask((()=>this.update())))}clearAllSnapshots(){this.nodes.forEach(wu),this.sharedNodes.forEach(Au)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ns.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ns.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let r=0;r<this.path.length;r++){this.path[r].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!au(this.projectionDelta),r=this.getTransformTemplate(),n=r?r(this.latestValues,""):void 0,i=n!==this.prevTransformTemplateValue;e&&(t||vd(this.latestValues)||i)&&(a(this.instance,n),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let r=this.removeElementScroll(t);var n;return e&&(r=this.removeTransform(r)),Ou((n=r).x),Ou(n.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:r,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:r}=this.root;return r&&(Cd(t.x,r.offset.x),Cd(t.y,r.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Jd(t,e);for(let r=0;r<this.path.length;r++){const n=this.path[r],{scroll:i,options:a}=n;if(n!==this.root&&i&&a.layoutScroll){if(i.isRoot){Jd(t,e);const{scroll:r}=this.root;r&&(Cd(t.x,-r.offset.x),Cd(t.y,-r.offset.y))}Cd(t.x,i.offset.x),Cd(t.y,i.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r={x:{min:0,max:0},y:{min:0,max:0}};Jd(r,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Ad(r,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),vd(e.latestValues)&&Ad(r,e.latestValues)}return vd(this.latestValues)&&Ad(r,this.latestValues),r}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Jd(t,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];if(!e.instance)continue;if(!vd(e.latestValues))continue;gd(e.latestValues)&&e.updateSnapshot();const n={x:{min:0,max:0},y:{min:0,max:0}};Jd(n,e.measurePageBox()),nu(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,n)}return vd(this.latestValues)&&nu(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==as.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const r=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=r.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=r.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=r.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==r;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:i,layoutId:a}=this.options;if(this.layout&&(i||a)){if(this.resolvedRelativeTargetAt=as.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},sd(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Jd(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var o,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,l=this.relativeParent.target,ad(o.x,s.x,l.x),ad(o.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Jd(this.target,this.layout.layoutBox),Sd(this.target,this.targetDelta)):Jd(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},sd(this.relativeTargetOrigin,this.target,e.target),Jd(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}fu.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!gd(this.parent.latestValues)&&!yd(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),r=Boolean(this.resumingFrom)||this!==t;let n=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(n=!1),r&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===as.timestamp&&(n=!1),n)return;const{layout:i,layoutId:a}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!a)return;Jd(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,s=this.treeScale.y;!function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=r.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=r[s],o=a.projectionDelta;const i=a.instance;i&&i.style&&"contents"===i.style.display||(n&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Ad(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Sd(e,o)),n&&vd(a.latestValues)&&Ad(e,a.latestValues))}t.x=kd(t.x),t.y=kd(t.y)}(this.layoutCorrected,this.treeScale,this.path,r),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const c=this.projectionTransform;id(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=cu(this.projectionDelta,this.treeScale),this.projectionTransform===c&&this.treeScale.x===o&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),fu.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=this.snapshot,n=r?r.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,d=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(Du));let u;this.animationProgress=0,this.mixTargetDelta=t=>{const r=t/1e3;var l,p,h,m;zu(a.x,e.x,r),zu(a.y,e.y,r),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(sd(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),l=this.relativeTarget,p=this.relativeTargetOrigin,h=o,m=r,Iu(l.x,p.x,h.x,m),Iu(l.y,p.y,h.y,m),u&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,u)&&(this.isProjectionDirty=!1),u||(u={x:{min:0,max:0},y:{min:0,max:0}}),Jd(u,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,r,n,i,a){i?(e.opacity=ul(0,void 0!==r.opacity?r.opacity:1,Yd(n)),e.opacityExit=ul(void 0!==t.opacity?t.opacity:1,0,Qd(n))):a&&(e.opacity=ul(void 0!==t.opacity?t.opacity:1,void 0!==r.opacity?r.opacity:1,n));for(let o=0;o<Wd;o++){const i=`border${Ud[o]}Radius`;let a=qd(t,i),s=qd(r,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||Gd(a)===Gd(s)?(e[i]=Math.max(ul(Hd(a),Hd(s),n),0),(xo.test(s)||xo.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||r.rotate)&&(e.rotate=ul(t.rotate||0,r.rotate||0,n))}(i,n,this.latestValues,r,d,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=r},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(is(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ns.update((()=>{Od.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,r){const n=eo(e)?e:Cc(e);return n.start(vc("",n,t,r)),n.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:r,layout:n,latestValues:i}=e;if(t&&r&&n){if(this!==e&&this.layout&&n&&_u(this.options.animationType,this.layout.layoutBox,n.layoutBox)){r=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=td(this.layout.layoutBox.x);r.x.min=e.target.x.min,r.x.max=r.x.min+t;const n=td(this.layout.layoutBox.y);r.y.min=e.target.y.min,r.y.max=r.y.min+n}Jd(t,r),Ad(t,i),id(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new lu);this.sharedNodes.get(e).add(t);const r=t.options.initialPromotionConfig;t.promote({transition:r?r.transition:void 0,preserveFollowOpacity:r&&r.shouldPreserveFollowOpacity?r.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=this.getStack();n&&n.promote(this,r),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:r}=e;if((r.rotate||r.rotateX||r.rotateY||r.rotateZ)&&(t=!0),!t)return;const n={};for(let i=0;i<pu.length;i++){const t="rotate"+pu[i];r[t]&&(n[t]=r[t],e.setStaticValue(t,0))}e.render();for(const i in n)e.setStaticValue(i,n[i]);e.scheduleRender()}getProjectionStyles(e){var t,r;if(!this.instance||this.isSVG)return;if(!this.isVisible)return hu;const n={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,n.opacity="",n.pointerEvents=Xo(null===e||void 0===e?void 0:e.pointerEvents)||"",n.transform=i?i(this.latestValues,""):"none",n;const a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=Xo(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!vd(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const o=a.animationValues||a.latestValues;this.applyTransformsToTarget(),n.transform=cu(this.projectionDeltaWithTransform,this.treeScale,o),i&&(n.transform=i(o,n.transform));const{x:s,y:l}=this.projectionDelta;n.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,a.animationValues?n.opacity=a===this?null!==(r=null!==(t=o.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==r?r:1:this.preserveOpacity?this.latestValues.opacity:o.opacityExit:n.opacity=a===this?void 0!==o.opacity?o.opacity:"":void 0!==o.opacityExit?o.opacityExit:0;for(const c in Ka){if(void 0===o[c])continue;const{correct:e,applyTo:t}=Ka[c],r="none"===n.transform?o[c]:e(o[c],a);if(t){const e=t.length;for(let i=0;i<e;i++)n[t[i]]=r}else n[c]=r}return this.options.layoutId&&(n.pointerEvents=a===this?Xo(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),n}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(ju),this.root.sharedNodes.clear()}}}function vu(e){e.updateLayout()}function yu(e){var t;const r=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:n}=e.layout,{animationType:i}=e.options,a=r.source!==e.layout.source;"size"===i?hd((e=>{const n=a?r.measuredBox[e]:r.layoutBox[e],i=td(n);n.min=t[e].min,n.max=n.min+i})):_u(i,r.layoutBox,t)&&hd((n=>{const i=a?r.measuredBox[n]:r.layoutBox[n],o=td(t[n]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[n].max=e.relativeTarget[n].min+o)}));const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};id(o,t,r.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?id(s,e.applyTransform(n,!0),r.measuredBox):id(s,t,r.layoutBox);const l=!au(o);let c=!1;if(!e.resumeFrom){const n=e.getClosestProjectingParent();if(n&&!n.resumeFrom){const{snapshot:i,layout:a}=n;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};sd(o,r.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};sd(s,t,a.layoutBox),ou(o,s)||(c=!0),n.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=n)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:r,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function xu(e){fu.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function bu(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function wu(e){e.clearSnapshot()}function ju(e){e.clearMeasurements()}function Su(e){e.isLayoutDirty=!1}function ku(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Cu(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Pu(e){e.resolveTargetDelta()}function Eu(e){e.calcProjection()}function Tu(e){e.resetRotation()}function Au(e){e.removeLeadSnapshot()}function zu(e,t,r){e.translate=ul(t.translate,0,r),e.scale=ul(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function Iu(e,t,r,n){e.min=ul(t.min,r.min,n),e.max=ul(t.max,r.max,n)}function Du(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Lu={duration:.45,ease:[.4,0,.1,1]},Ru=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),Mu=Ru("applewebkit/")&&!Ru("chrome/")?Math.round:es;function Ou(e){e.min=Mu(e.min),e.max=Mu(e.max)}function _u(e,t,r){return"position"===e||"preserve-aspect"===e&&!rd(su(t),su(r),.2)}const Nu=gu({attachResizeListener:(e,t)=>cs(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Fu={current:void 0},Vu=gu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Fu.current){const e=new Nu({});e.mount(window),e.setOptions({layoutScroll:!0}),Fu.current=e}return Fu.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Bu={pan:{Feature:class extends bs{constructor(){super(...arguments),this.removePointerDownListener=es}onPointerDown(e){this.session=new Yc(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Id(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:n}=this.node.getProps();return{onSessionStart:Md(e),onStart:Md(t),onMove:r,onEnd:(e,t)=>{delete this.session,n&&ns.update((()=>n(e,t)))}}}mount(){this.removePointerDownListener=ps(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends bs{constructor(e){super(e),this.removeGroupControls=es,this.removeListeners=es,this.controls=new Ld(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||es}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Vu,MeasureLayout:Bd}},$u=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Uu(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Rs(r<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[n,i]=function(e){const t=$u.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]}(e);if(!n)return;const a=window.getComputedStyle(t).getPropertyValue(n);if(a){const e=a.trim();return xc(e)?parseFloat(e):e}return ao(i)?Uu(i,t,r+1):i}const Wu=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Hu=e=>Wu.has(e),Gu=e=>e===lo||e===bo,qu=(e,t)=>parseFloat(e.split(", ")[t]),Yu=(e,t)=>(r,n)=>{let{transform:i}=n;if("none"===i||!i)return 0;const a=i.match(/^matrix3d\((.+)\)$/);if(a)return qu(a[1],t);{const t=i.match(/^matrix\((.+)\)$/);return t?qu(t[1],e):0}},Qu=new Set(["x","y","z"]),Ku=Xa.filter((e=>!Qu.has(e)));const Xu={width:(e,t)=>{let{x:r}=e,{paddingLeft:n="0",paddingRight:i="0"}=t;return r.max-r.min-parseFloat(n)-parseFloat(i)},height:(e,t)=>{let{y:r}=e,{paddingTop:n="0",paddingBottom:i="0"}=t;return r.max-r.min-parseFloat(n)-parseFloat(i)},top:(e,t)=>{let{top:r}=t;return parseFloat(r)},left:(e,t)=>{let{left:r}=t;return parseFloat(r)},bottom:(e,t)=>{let{y:r}=e,{top:n}=t;return parseFloat(n)+(r.max-r.min)},right:(e,t)=>{let{x:r}=e,{left:n}=t;return parseFloat(n)+(r.max-r.min)},x:Yu(4,13),y:Yu(5,14)};Xu.translateX=Xu.x,Xu.translateY=Xu.y;const Ju=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},n={...n};const i=Object.keys(t).filter(Hu);let a=[],o=!1;const s=[];if(i.forEach((i=>{const l=e.getValue(i);if(!e.hasValue(i))return;let c=r[i],d=Tc(c);const u=t[i];let p;if(Qo(u)){const e=u.length,t=null===u[0]?1:0;c=u[t],d=Tc(c);for(let r=t;r<e&&null!==u[r];r++)p?Rs(Tc(u[r])===p,"All keyframes must be of the same type"):(p=Tc(u[r]),Rs(p===d||Gu(d)&&Gu(p),"Keyframes must be of the same dimension as the current value"))}else p=Tc(u);if(d!==p)if(Gu(d)&&Gu(p)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof u?t[i]=parseFloat(u):Array.isArray(u)&&p===bo&&(t[i]=u.map(parseFloat))}else(null===d||void 0===d?void 0:d.transform)&&(null===p||void 0===p?void 0:p.transform)&&(0===c||0===u)?0===c?l.set(p.transform(c)):t[i]=d.transform(u):(o||(a=function(e){const t=[];return Ku.forEach((r=>{const n=e.getValue(r);void 0!==n&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))})),t.length&&e.render(),t}(e),o=!0),s.push(i),n[i]=void 0!==n[i]?n[i]:t[i],l.jump(u))})),s.length){const r=s.indexOf("height")>=0?window.pageYOffset:null,i=((e,t,r)=>{const n=t.measureViewportBox(),i=t.current,a=getComputedStyle(i),{display:o}=a,s={};"none"===o&&t.setStaticValue("display",e.display||"block"),r.forEach((e=>{s[e]=Xu[e](n,a)})),t.render();const l=t.measureViewportBox();return r.forEach((r=>{const n=t.getValue(r);n&&n.jump(s[r]),e[r]=Xu[r](l,a)})),e})(t,e,s);return a.length&&a.forEach((t=>{let[r,n]=t;e.getValue(r).set(n)})),e.render(),Pa&&null!==r&&window.scrollTo({top:r}),{target:i,transitionEnd:n}}return{target:t,transitionEnd:n}};function Zu(e,t,r,n){return(e=>Object.keys(e).some(Hu))(t)?Ju(e,t,r,n):{target:t,transitionEnd:n}}const ep=(e,t,r,n)=>{const i=function(e,t,r){let{...n}=t;const i=e.current;if(!(i instanceof Element))return{target:n,transitionEnd:r};r&&(r={...r}),e.values.forEach((e=>{const t=e.get();if(!ao(t))return;const r=Uu(t,i);r&&e.set(r)}));for(const a in n){const e=n[a];if(!ao(e))continue;const t=Uu(e,i);t&&(n[a]=t,r||(r={}),void 0===r[a]&&(r[a]=e))}return{target:n,transitionEnd:r}}(e,t,n);return Zu(e,t=i.target,r,n=i.transitionEnd)},tp={current:null},rp={current:!1};const np=new WeakMap,ip=Object.keys(Ba),ap=ip.length,op=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],sp=Ma.length;class lp{constructor(e){let{parent:t,props:r,presenceContext:n,reducedMotionConfig:i,visualState:a}=e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ns.render(this.render,!1,!0);const{latestValues:s,renderState:l}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=r.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=r,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=Oa(r),this.isVariantNode=_a(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(r,{});for(const u in d){const e=d[u];void 0!==s[u]&&eo(e)&&(e.set(s[u],!1),yc(c)&&c.add(u))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,np.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),rp.current||function(){if(rp.current=!0,Pa)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>tp.current=e.matches;e.addListener(t),t()}else tp.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||tp.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){np.delete(this.current),this.projection&&this.projection.unmount(),is(this.notifyUpdate),is(this.render),this.valueSubscriptions.forEach((e=>e())),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const r=Ja.has(e),n=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&ns.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,(()=>{n(),i()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,r,n){let i,a,{children:o,...s}=e;for(let l=0;l<ap;l++){const e=ip[l],{isEnabled:t,Feature:r,ProjectionNode:n,MeasureLayout:o}=Ba[e];n&&(i=n),t(s)&&(!this.features[e]&&r&&(this.features[e]=new r(this)),o&&(a=o))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&i){this.projection=new i(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:r,dragConstraints:a,layoutScroll:o,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(r)||a&&Ia(a),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:n,layoutScroll:o,layoutRoot:l})}return a}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<op.length;r++){const t=op[r];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const n=e["on"+t];n&&(this.propEventSubscriptions[t]=this.on(t,n))}this.prevMotionValues=function(e,t,r){const{willChange:n}=t;for(const i in t){const a=t[i],o=r[i];if(eo(a))e.addValue(i,a),yc(n)&&n.add(i);else if(eo(o))e.addValue(i,Cc(a,{owner:e})),yc(n)&&n.remove(i);else if(o!==a)if(e.hasValue(i)){const t=e.getValue(i);!t.hasAnimated&&t.set(a)}else{const t=e.getStaticValue(i);e.addValue(i,Cc(void 0!==t?t:a,{owner:e}))}}for(const i in r)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<sp;t++){const r=Ma[t],n=this.props[r];(Da(n)||!1===n)&&(e[r]=n)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return void 0===r&&void 0!==t&&(r=Cc(t,{owner:this}),this.addValue(e,r)),r}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props,n="string"===typeof r||"object"===typeof r?null===(t=Yo(this.props,r))||void 0===t?void 0:t[e]:void 0;if(r&&void 0!==n)return n;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||eo(i)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new jc),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.events[e].notify(...r)}}}class cp extends lp{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:r,style:n}=t;delete r[e],delete n[e]}makeTargetAnimatableFromInstance(e,t,r){let{transition:n,transitionEnd:i,...a}=e,{transformValues:o}=t,s=function(e,t,r){const n={};for(const i in e){const e=Lc(i,t);if(void 0!==e)n[i]=e;else{const e=r.getValue(i);e&&(n[i]=e.get())}}return n}(a,n||{},this);if(o&&(i&&(i=o(i)),a&&(a=o(a)),s&&(s=o(s))),r){!function(e,t,r){var n,i;const a=Object.keys(t).filter((t=>!e.hasValue(t))),o=a.length;if(o)for(let s=0;s<o;s++){const o=a[s],l=t[o];let c=null;Array.isArray(l)&&(c=l[0]),null===c&&(c=null!==(i=null!==(n=r[o])&&void 0!==n?n:e.readValue(o))&&void 0!==i?i:t[o]),void 0!==c&&null!==c&&("string"===typeof c&&(xc(c)||hc(c))?c=parseFloat(c):!zc(c)&&Cl.test(l)&&(c=pc(o,l)),e.addValue(o,Cc(c,{owner:e})),void 0===r[o]&&(r[o]=c),null!==c&&e.setBaseTarget(o,c))}}(this,a,s);const e=ep(this,a,s,i);i=e.transitionEnd,a=e.target}return{transition:n,transitionEnd:i,...a}}}class dp extends cp{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(Ja.has(t)){const e=uc(t);return e&&e.default||0}{const n=(r=e,window.getComputedStyle(r)),i=(io(t)?n.getPropertyValue(t):n[t])||0;return"string"===typeof i?i.trim():i}var r}measureInstanceViewportBox(e,t){let{transformPagePoint:r}=t;return zd(e,r)}build(e,t,r,n){Po(e,t,r,n.transformTemplate)}scrapeMotionValuesFromProps(e,t){return Go(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;eo(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}renderInstance(e,t,r,n){Uo(e,t,r,n)}}class up extends cp{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ja.has(t)){const e=uc(t);return e&&e.default||0}return t=Wo.has(t)?t:Aa(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return qo(e,t)}build(e,t,r,n){No(e,t,r,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,r,n){Ho(e,t,0,n)}mount(e){this.isSVGTag=Vo(e.tagName),super.mount(e)}}const pp=(e,t)=>Qa(e)?new up(t,{enableHardwareAcceleration:!1}):new dp(t,{enableHardwareAcceleration:!0}),hp={...Gc,...zs,...Bu,...{layout:{ProjectionNode:Vu,MeasureLayout:Bd}}},mp=qa(((e,t)=>function(e,t,r,n){let{forwardMotionProps:i=!1}=t;return{...Qa(e)?ss:ls,preloadedFeatures:r,useRender:$o(i),createVisualElement:n,Component:e}}(e,t,hp,pp)));const fp=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,gp=ur.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
`,vp=ur.h1`
  margin-bottom: var(--spacing-md);
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,yp=ur.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,xp=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`,bp=ur(mp.div)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,wp=ur.div`
  background: linear-gradient(135deg, var(--primary) 0%, #9b59b6 100%);
  color: white;
  padding: var(--spacing-lg);
  position: relative;
`,jp=ur.div`
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
`,Sp=ur.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
`,kp=ur.p`
  opacity: 0.8;
`,Cp=ur.div`
  padding: var(--spacing-lg);
  flex: 1;
`,Pp=ur.p`
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
`,Ep=ur.ul`
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-lg);
`,Tp=ur.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`,Ap=ur.div`
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  margin-top: auto;
`,zp=ur(De)`
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--secondary);
  }
`,Ip=ur.section`
  margin-bottom: var(--spacing-xxl);
`,Dp=ur.h2`
  margin-bottom: var(--spacing-lg);
  text-align: center;
  font-size: 2rem;
`,Lp=ur.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: var(--border);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`,Rp=ur.div`
  padding: var(--spacing-lg) 0;
  position: relative;
  width: 50%;
  left: ${e=>"left"===e.position?"0":"50%"};
  
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding-left: 70px;
  }
`,Mp=ur.div`
  padding: var(--spacing-lg);
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  position: relative;
  margin: 0 var(--spacing-xl);
  
  @media (max-width: 768px) {
    margin: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: var(--primary);
    border: 4px solid var(--surface);
    border-radius: 50%;
    top: 50%;
    ${e=>"left"===e.position?"right: -17px;":"left: -17px;"}
    transform: translateY(-50%);
    z-index: 1;
    
    @media (max-width: 768px) {
      left: -50px;
      right: auto;
    }
  }
`,Op=ur.div`
  color: var(--primary);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,_p=ur.h3`
  margin-bottom: var(--spacing-sm);
`,Np=ur.p`
  color: var(--text-secondary);
`,Fp=ur.section`
  margin-bottom: var(--spacing-xxl);
`,Vp=ur.div`
  max-width: 800px;
  margin: 0 auto;
`,Bp=ur.div`
  margin-bottom: var(--spacing-md);
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  overflow: hidden;
`,$p=ur.button`
  width: 100%;
  text-align: left;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--surface);
  border: none;
  border-bottom: ${e=>e.isOpen?"1px solid var(--border)":"none"};
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: var(--text-primary);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
  
  &:after {
    content: '${e=>e.isOpen?"\u2212":"+"}';
    font-size: 1.2rem;
    font-weight: 700;
  }
`,Up=ur.div`
  padding: ${e=>e.isOpen?"var(--spacing-lg)":"0 var(--spacing-lg)"};
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: all var(--transition-normal);
  color: var(--text-secondary);
`,Wp=ur.section`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xxl);
`,Hp=ur.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 2.5rem;
`,Gp=ur.p`
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  font-size: 1.2rem;
  opacity: 0.9;
`,qp=ur(De)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: white;
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,Yp=()=>{const[e,r]=t.useState(null),n={hidden:{opacity:0,y:20},visible:e=>({opacity:1,y:0,transition:{delay:.1*e,duration:.5}})};return(0,xe.jsxs)(fp,{children:[(0,xe.jsxs)(gp,{children:[(0,xe.jsx)(vp,{children:"Contribute to Alphabet Schools Studio"}),(0,xe.jsx)(yp,{children:"Join our community of creators, developers, and educators to build the future of creative tools and education."})]}),(0,xe.jsx)(xp,{children:[{icon:"\ud83e\uddd1\u200d\ud83d\udcbb",title:"Tool Development",subtitle:"Build creative tools for the ecosystem",description:"Create new tools that integrate with our asset protocol, allowing users to create and modify assets in innovative ways.",items:["Character creators","Map makers","Town simulators","RPG engines","Asset editors"],link:"/docs/tool-development",linkText:"Development Guide"},{icon:"\ud83c\udfa8",title:"Asset Creation",subtitle:"Create assets for the community",description:"Design and share assets that can be used across the platform's tools, from character sprites to environment textures.",items:["Character designs","Environment assets","UI elements","Sound effects","Animations"],link:"/assets/contribute",linkText:"Asset Guidelines"},{icon:"\ud83d\udcdd",title:"Documentation",subtitle:"Help document the platform",description:"Contribute to our documentation, tutorials, and guides to help others understand and use the platform effectively.",items:["API documentation","Tutorials","User guides","Code examples","Best practices"],link:"/docs/contributing",linkText:"Documentation Guide"},{icon:"\ud83d\udd0d",title:"Quality Assurance",subtitle:"Test and improve the platform",description:"Help identify and fix bugs, improve performance, and ensure the platform works smoothly across different devices and browsers.",items:["Bug reporting","Feature testing","Performance optimization","Accessibility testing","Cross-browser compatibility"],link:"/qa/contribute",linkText:"QA Guidelines"},{icon:"\ud83c\udf0d",title:"Community Building",subtitle:"Grow and nurture our community",description:"Help build a vibrant and supportive community through events, forums, social media, and other community initiatives.",items:["Organizing events","Moderating forums","Creating tutorials","Mentoring newcomers","Social media management"],link:"/community/contribute",linkText:"Community Guidelines"},{icon:"\ud83d\udcda",title:"School Curriculum",subtitle:"Help develop our educational content",description:"Contribute to the curriculum of our various schools, creating lessons, exercises, and projects that help students learn effectively.",items:["Lesson plans","Coding exercises","Project ideas","Assessment methods","Learning resources"],link:"/schools/contribute",linkText:"Curriculum Guidelines"}].map(((e,t)=>(0,xe.jsxs)(bp,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},variants:n,children:[(0,xe.jsxs)(wp,{children:[(0,xe.jsx)(jp,{children:e.icon}),(0,xe.jsx)(Sp,{children:e.title}),(0,xe.jsx)(kp,{children:e.subtitle})]}),(0,xe.jsxs)(Cp,{children:[(0,xe.jsx)(Pp,{children:e.description}),(0,xe.jsx)(Ep,{children:e.items.map(((e,t)=>(0,xe.jsx)(Tp,{children:e},t)))})]}),(0,xe.jsx)(Ap,{children:(0,xe.jsx)(zp,{to:e.link,children:e.linkText})})]},t)))}),(0,xe.jsxs)(Ip,{children:[(0,xe.jsx)(Dp,{children:"Project Roadmap"}),(0,xe.jsx)(Lp,{children:[{date:"Q2 2025",title:"Platform Launch",description:"Initial launch of the Alphabet Schools Studio platform with core functionality and first set of tools.",position:"left"},{date:"Q3 2025",title:"Asset Protocol v1.0",description:"Stable release of the Asset Protocol with comprehensive documentation and validation tools.",position:"right"},{date:"Q4 2025",title:"Community Marketplace",description:"Launch of the marketplace for sharing and trading assets created with platform tools.",position:"left"},{date:"Q1 2026",title:"Advanced Tool Framework",description:"Enhanced framework for tool development with more integration options and capabilities.",position:"right"},{date:"Q2 2026",title:"Mobile Support",description:"Expanded platform support for mobile devices, allowing asset viewing and basic editing on the go.",position:"left"},{date:"Q3 2026",title:"Enterprise Features",description:"Advanced features for professional teams and studios, including team collaboration tools.",position:"right"}].map(((e,t)=>(0,xe.jsx)(Rp,{position:e.position,children:(0,xe.jsxs)(Mp,{position:e.position,children:[(0,xe.jsx)(Op,{children:e.date}),(0,xe.jsx)(_p,{children:e.title}),(0,xe.jsx)(Np,{children:e.description})]})},t)))})]}),(0,xe.jsxs)(Wp,{children:[(0,xe.jsx)(Hp,{children:"Ready to Make an Impact?"}),(0,xe.jsx)(Gp,{children:"Your contributions help shape the future of creative tools and education for the next generation of creators."}),(0,xe.jsx)(qp,{to:"/signup",children:"Join Our Community"})]}),(0,xe.jsxs)(Fp,{children:[(0,xe.jsx)(Dp,{children:"Frequently Asked Questions"}),(0,xe.jsx)(Vp,{children:[{question:"How do I get started contributing to Alphabet Schools Studio?",answer:"The best way to get started is to explore the platform, understand the asset protocol, and identify an area where you'd like to contribute. Then, check out our contribution guides for specific instructions on how to contribute in your chosen area. If you're a developer, you might want to start by building a simple tool that integrates with our asset protocol."},{question:"Do I need to be a student to contribute?",answer:"No, anyone can contribute to the platform! While our educational programs are structured around schools and cohorts, the platform itself is open to contributions from developers, artists, writers, and enthusiasts of all backgrounds."},{question:"How does the review process work for contributions?",answer:"All contributions go through a peer review process. For code contributions, this involves code review by maintainers. For assets, documentation, and other contributions, the review process varies depending on the type of contribution. The goal is to ensure quality, consistency, and alignment with the platform's goals and standards."},{question:"Can I contribute if I'm not a programmer?",answer:"Absolutely! We need contributions in many areas beyond programming, including asset creation, documentation, quality assurance, community building, and curriculum development. Everyone has valuable skills to offer!"},{question:"How do I get recognition for my contributions?",answer:"All contributors are recognized in our CONTRIBUTORS.md file and on our website. Significant contributions may be highlighted in release notes, community showcases, and social media. We also have a badge system that recognizes different types and levels of contributions."},{question:"Is there a code of conduct for contributors?",answer:"Yes, we have a Code of Conduct that all contributors are expected to follow. It ensures that our community is respectful, inclusive, and welcoming to everyone. You can find it in our CONTRIBUTING.md file and on our website."}].map(((t,n)=>(0,xe.jsxs)(Bp,{children:[(0,xe.jsx)($p,{isOpen:e===n,onClick:()=>(t=>{r(e===t?null:t)})(n),children:t.question}),(0,xe.jsx)(Up,{isOpen:e===n,children:t.answer})]},n)))})]})]})},Qp=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,Kp=ur.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
`,Xp=ur.h1`
  margin-bottom: var(--spacing-md);
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Jp=ur.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Zp=ur.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto var(--spacing-xxl);
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: var(--border);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`,eh=ur.div`
  padding: var(--spacing-lg) 0;
  position: relative;
  width: 50%;
  left: ${e=>"left"===e.position?"0":"50%"};
  
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding-left: 70px;
  }
`,th=ur(mp.div)`
  padding: var(--spacing-lg);
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  position: relative;
  margin: 0 var(--spacing-xl);
  
  @media (max-width: 768px) {
    margin: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: var(--primary);
    border: 4px solid var(--surface);
    border-radius: 50%;
    top: 50%;
    ${e=>"left"===e.position?"right: -17px;":"left: -17px;"}
    transform: translateY(-50%);
    z-index: 1;
    
    @media (max-width: 768px) {
      left: -50px;
      right: auto;
    }
  }
`,rh=ur.div`
  color: var(--primary);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,nh=ur.h3`
  margin-bottom: var(--spacing-sm);
`,ih=ur.p`
  color: var(--text-secondary);
`,ah=ur.ul`
  margin-top: var(--spacing-md);
  padding-left: var(--spacing-lg);
`,oh=ur.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`,sh=ur.h2`
  text-align: center;
  margin-bottom: var(--spacing-lg);
  font-size: 2rem;
`,lh=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`,ch=ur(mp.div)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,dh=ur.div`
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary);
`,uh=ur.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
`,ph=ur.p`
  color: var(--text-secondary);
`,hh=ur.section`
  text-align: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-lg);
`,mh=ur.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 2.5rem;
`,fh=ur.p`
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  font-size: 1.2rem;
  opacity: 0.9;
`,gh=ur.a`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: white;
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,vh=()=>{const e={hidden:{opacity:0,y:20},visible:e=>({opacity:1,y:0,transition:{delay:.1*e,duration:.5}})};return(0,xe.jsxs)(Qp,{children:[(0,xe.jsxs)(Kp,{children:[(0,xe.jsx)(Xp,{children:"Platform Roadmap"}),(0,xe.jsx)(Jp,{children:"Our vision for the future of Alphabet Schools Studio and the key milestones we're working towards. This roadmap outlines our planned features and improvements over the coming years."})]}),(0,xe.jsx)(Zp,{children:[{date:"Q2 2025",title:"Platform Launch",description:"Initial launch of the Alphabet Schools Studio platform with core functionality and first set of tools.",position:"left",milestones:["Launch of the core platform infrastructure","Release of the first three student-built tools","Introduction of the shared asset protocol","Opening of AI School and Code School cohorts"]},{date:"Q3 2025",title:"Asset Protocol v1.0",description:"Stable release of the Asset Protocol with comprehensive documentation and validation tools.",position:"right",milestones:["Finalization of asset type specifications","Release of protocol validation tools","Implementation of asset versioning system","Launch of asset browsing and discovery features"]},{date:"Q4 2025",title:"Community Marketplace",description:"Launch of the marketplace for sharing and trading assets created with platform tools.",position:"left",milestones:["Asset marketplace with search and filtering","Creator profiles and portfolios","Rating and review system","Basic NFT integration for asset ownership"]},{date:"Q1 2026",title:"Advanced Tool Framework",description:"Enhanced framework for tool development with more integration options and capabilities.",position:"right",milestones:["Tool development SDK with improved documentation","Plugin system for extending existing tools","Real-time collaboration features","Advanced asset transformation capabilities"]},{date:"Q2 2026",title:"Mobile Support",description:"Expanded platform support for mobile devices, allowing asset viewing and basic editing on the go.",position:"left",milestones:["Mobile-responsive tool interfaces","Native mobile apps for iOS and Android","Offline asset access and synchronization","Mobile-specific creative tools"]},{date:"Q3 2026",title:"Enterprise Features",description:"Advanced features for professional teams and studios, including team collaboration tools.",position:"right",milestones:["Team workspaces and permission systems","Advanced asset management for large collections","Integration with professional creative workflows","Custom branding and white-label options"]}].map(((e,t)=>(0,xe.jsx)(eh,{position:e.position,children:(0,xe.jsxs)(th,{position:e.position,initial:{opacity:0,x:"left"===e.position?-50:50},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.5,delay:.1},children:[(0,xe.jsx)(rh,{children:e.date}),(0,xe.jsx)(nh,{children:e.title}),(0,xe.jsx)(ih,{children:e.description}),(0,xe.jsx)(ah,{children:e.milestones.map(((e,t)=>(0,xe.jsx)(oh,{children:e},t)))})]})},t)))}),(0,xe.jsx)(sh,{children:"Our Guiding Principles"}),(0,xe.jsx)(lh,{children:[{icon:"\ud83d\udd04",title:"Seamless Integration",description:"All tools and assets work together without manual export/import processes, creating a frictionless creative experience."},{icon:"\ud83c\udf93",title:"Learning by Building",description:"Students learn development by creating actual tools used by real users, providing practical experience and immediate feedback."},{icon:"\ud83d\udc65",title:"Community-Driven",description:"The platform grows through community contributions, with students becoming mentors and building upon each other's work."},{icon:"\ud83d\udd13",title:"Open Source",description:"Core platform components are open source, allowing for transparency, community contributions, and educational opportunities."},{icon:"\ud83d\udd12",title:"Creator Ownership",description:"Creators maintain ownership of their assets, with optional NFT integration for verifiable digital ownership."},{icon:"\ud83c\udf31",title:"Sustainable Growth",description:"The platform is designed for long-term sustainability, with a focus on building a self-sustaining educational ecosystem."}].map(((t,r)=>(0,xe.jsxs)(ch,{custom:r,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},variants:e,children:[(0,xe.jsx)(dh,{children:t.icon}),(0,xe.jsx)(uh,{children:t.title}),(0,xe.jsx)(ph,{children:t.description})]},r)))}),(0,xe.jsxs)(hh,{children:[(0,xe.jsx)(mh,{children:"Help Shape Our Future"}),(0,xe.jsx)(fh,{children:"Our roadmap is a living document that evolves with community feedback and changing needs. We invite you to contribute your ideas and help shape the future of creative tools."}),(0,xe.jsx)(gh,{href:"https://github.com/alphabet-schools/roadmap/issues",children:"Submit Feature Ideas"})]})]})},yh=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,xh=ur.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,bh=ur.div`
  width: 150px;
  height: 150px;
  border-radius: var(--border-radius-circle);
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow-md);
`,wh=ur.div`
  flex: 1;
`,jh=ur.h1`
  margin-bottom: var(--spacing-sm);
`,Sh=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
`,kh=ur.div`
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
`,Ch=ur.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,Ph=ur.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${e=>e.primary?"var(--primary)":"transparent"};
  color: ${e=>e.primary?"white":"var(--text-primary)"};
  border: 1px solid ${e=>e.primary?"var(--primary)":"var(--border)"};
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${e=>e.primary?"var(--secondary)":"rgba(0, 0, 0, 0.05)"};
  }
`,Eh=ur.div`
  margin-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border);
`,Th=ur.div`
  display: flex;
  gap: var(--spacing-md);
  overflow-x: auto;
  padding-bottom: var(--spacing-sm);
  
  @media (max-width: 768px) {
    gap: var(--spacing-sm);
  }
`,Ah=ur.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background: none;
  border: none;
  color: ${e=>e.active?"var(--primary)":"var(--text-secondary)"};
  font-weight: ${e=>e.active?"600":"400"};
  border-bottom: 2px solid ${e=>e.active?"var(--primary)":"transparent"};
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
  
  &:hover {
    color: var(--primary);
  }
`,zh=ur.div`
  margin-bottom: var(--spacing-xxl);
`,Ih=ur.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 1.5rem;
`,Dh=ur.div`
  text-align: center;
  padding: var(--spacing-xl) 0;
  color: var(--text-secondary);
`,Lh=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-lg);
`,Rh=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`,Mh=ur.div`
  height: 150px;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
  position: relative;
`,Oh=ur.div`
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  text-transform: capitalize;
`,_h=ur.div`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(155, 89, 182, 0.9);
  color: white;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 5px;
`,Nh=ur.div`
  padding: var(--spacing-md);
`,Fh=ur.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.1rem;
`,Vh=ur.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`,Bh=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`,$h=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`,Uh=ur.div`
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border);
`,Wh=ur.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
`,Hh=ur.div`
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: ${e=>{switch(e.status){case"completed":return"rgba(46, 204, 113, 0.2)";case"in-progress":return"rgba(52, 152, 219, 0.2)";case"planned":return"rgba(155, 89, 182, 0.2)";default:return"rgba(0, 0, 0, 0.1)"}}};
  color: ${e=>{switch(e.status){case"completed":return"#27ae60";case"in-progress":return"#2980b9";case"planned":return"#8e44ad";default:return"var(--text-secondary)"}}};
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
`,Gh=ur.div`
  padding: var(--spacing-md);
`,qh=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  font-size: 0.9rem;
`,Yh=ur.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--text-secondary);
`,Qh=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`,Kh=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`,Xh=ur.div`
  height: 120px;
  background-color: ${e=>e.color||"var(--primary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`,Jh=ur.div`
  padding: var(--spacing-md);
`,Zh=ur.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
`,em=ur.div`
  margin-bottom: var(--spacing-md);
`,tm=ur.div`
  height: 8px;
  background-color: var(--border);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-xs);
  overflow: hidden;
`,rm=ur.div`
  height: 100%;
  width: ${e=>e.progress}%;
  background-color: var(--primary);
  border-radius: var(--border-radius-sm);
`,nm=ur.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  display: flex;
  justify-content: space-between;
`,im=ur.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--text-secondary);
  border-top: 1px solid var(--border);
  padding-top: var(--spacing-sm);
  margin-top: var(--spacing-sm);
`,am=ur.form`
  max-width: 600px;
  margin: 0 auto;
`,om=ur.div`
  margin-bottom: var(--spacing-lg);
`,sm=ur.label`
  display: block;
  margin-bottom: var(--spacing-sm);
  font-weight: 500;
`,lm=ur.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--surface);
  color: var(--text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`,cm=ur.textarea`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--surface);
  color: var(--text-primary);
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`,dm=ur.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-md);
`,um=()=>{const{currentUser:e,logout:r,updateProfile:n}=hr(),{assets:i}=Ki(),[a,o]=(0,t.useState)("assets"),[s,l]=(0,t.useState)({name:(null===e||void 0===e?void 0:e.name)||"",email:(null===e||void 0===e?void 0:e.email)||"",bio:(null===e||void 0===e?void 0:e.bio)||""});if(!e)return(0,xe.jsx)(me,{to:"/login"});const c=i.filter((t=>t.creator===e.id)),d=e=>{const{name:t,value:r}=e.target;l((e=>({...e,[t]:r})))};return(0,xe.jsxs)(yh,{children:[(0,xe.jsxs)(xh,{children:[(0,xe.jsx)(bh,{src:e.avatar}),(0,xe.jsxs)(wh,{children:[(0,xe.jsx)(jh,{children:e.name}),(0,xe.jsx)(Sh,{children:e.email}),(0,xe.jsx)(kh,{children:"student"===e.role?`${e.school} Student`:"Creator"}),(0,xe.jsxs)(Ch,{children:[(0,xe.jsx)(Ph,{primary:!0,children:"Edit Profile"}),(0,xe.jsx)(Ph,{onClick:r,children:"Log Out"})]})]})]}),(0,xe.jsx)(Eh,{children:(0,xe.jsxs)(Th,{children:[(0,xe.jsx)(Ah,{active:"assets"===a,onClick:()=>o("assets"),children:"My Assets"}),(0,xe.jsx)(Ah,{active:"projects"===a,onClick:()=>o("projects"),children:"Projects"}),(0,xe.jsx)(Ah,{active:"courses"===a,onClick:()=>o("courses"),children:"Courses"}),(0,xe.jsx)(Ah,{active:"settings"===a,onClick:()=>o("settings"),children:"Settings"})]})}),(0,xe.jsxs)(zh,{children:["assets"===a&&(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)(Ih,{children:"My Assets"}),c.length>0?(0,xe.jsx)(Lh,{children:c.map((e=>(0,xe.jsxs)(Rh,{children:[(0,xe.jsxs)(Mh,{src:e.imgUrl,children:[(0,xe.jsx)(Oh,{children:e.type}),e.ownedByNFT&&(0,xe.jsxs)(_h,{children:[(0,xe.jsx)("span",{children:"NFT"}),(0,xe.jsx)("span",{children:"\ud83d\udd12"})]})]}),(0,xe.jsxs)(Nh,{children:[(0,xe.jsx)(Fh,{children:e.name}),(0,xe.jsxs)(Vh,{children:["Created: ",new Date(e.createdAt).toLocaleDateString()]})]})]},e.id)))}):(0,xe.jsxs)(Dh,{children:[(0,xe.jsx)("h3",{children:"No assets yet"}),(0,xe.jsx)("p",{children:"Start creating assets with our tools to see them here"})]})]}),"projects"===a&&(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)(Ih,{children:"My Projects"}),(0,xe.jsx)(Bh,{children:[{id:"p1",title:"Character Creator Tool",status:"in-progress",description:"A tool for creating and customizing RPG characters with various attributes and appearances.",school:"Code School",lastUpdated:"2 days ago"},{id:"p2",title:"Asset Protocol Documentation",status:"completed",description:"Comprehensive documentation for the asset protocol, including examples and best practices.",school:"Documentation Team",lastUpdated:"1 week ago"},{id:"p3",title:"Town Simulator Extension",status:"planned",description:"An extension for the Town Simulator tool adding economic simulation features.",school:"Business School",lastUpdated:"Not started"}].map((e=>(0,xe.jsxs)($h,{children:[(0,xe.jsxs)(Uh,{children:[(0,xe.jsx)(Wh,{children:e.title}),(0,xe.jsx)(Hh,{status:e.status,children:"completed"===e.status?"Completed":"in-progress"===e.status?"In Progress":"Planned"})]}),(0,xe.jsxs)(Gh,{children:[(0,xe.jsx)(qh,{children:e.description}),(0,xe.jsxs)(Yh,{children:[(0,xe.jsxs)("span",{children:["School: ",e.school]}),(0,xe.jsxs)("span",{children:["Updated: ",e.lastUpdated]})]})]})]},e.id)))})]}),"courses"===a&&(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)(Ih,{children:"My Courses"}),(0,xe.jsx)(Qh,{children:[{id:"c1",title:"AI School",emoji:"\ud83e\udd16",color:"#3498db",progress:100,completed:!0,cohort:"January 2025",certificate:!0},{id:"c2",title:"Code School",emoji:"\ud83d\udcbb",color:"#e74c3c",progress:75,completed:!1,cohort:"March 2025",certificate:!1},{id:"c3",title:"Business School",emoji:"\ud83d\udcbc",color:"#2ecc71",progress:0,completed:!1,cohort:"Upcoming - July 2025",certificate:!1}].map((e=>(0,xe.jsxs)(Kh,{children:[(0,xe.jsx)(Xh,{color:e.color,children:e.emoji}),(0,xe.jsxs)(Jh,{children:[(0,xe.jsx)(Zh,{children:e.title}),(0,xe.jsxs)(em,{children:[(0,xe.jsx)(tm,{children:(0,xe.jsx)(rm,{progress:e.progress})}),(0,xe.jsxs)(nm,{children:[(0,xe.jsx)("span",{children:"Progress"}),(0,xe.jsxs)("span",{children:[e.progress,"%"]})]})]}),(0,xe.jsxs)(im,{children:[(0,xe.jsxs)("span",{children:["Cohort: ",e.cohort]}),(0,xe.jsx)("span",{children:e.certificate?"\ud83c\udfc6 Certified":""})]})]})]},e.id)))})]}),"settings"===a&&(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)(Ih,{children:"Profile Settings"}),(0,xe.jsxs)(am,{onSubmit:e=>{e.preventDefault(),n(s),alert("Profile updated successfully!")},children:[(0,xe.jsxs)(om,{children:[(0,xe.jsx)(sm,{htmlFor:"name",children:"Name"}),(0,xe.jsx)(lm,{type:"text",id:"name",name:"name",value:s.name,onChange:d})]}),(0,xe.jsxs)(om,{children:[(0,xe.jsx)(sm,{htmlFor:"email",children:"Email"}),(0,xe.jsx)(lm,{type:"email",id:"email",name:"email",value:s.email,onChange:d})]}),(0,xe.jsxs)(om,{children:[(0,xe.jsx)(sm,{htmlFor:"bio",children:"Bio"}),(0,xe.jsx)(cm,{id:"bio",name:"bio",value:s.bio,onChange:d})]}),(0,xe.jsxs)(dm,{children:[(0,xe.jsx)(Ph,{type:"button",children:"Cancel"}),(0,xe.jsx)(Ph,{type:"submit",primary:!0,children:"Save Changes"})]})]})]})]})]})},pm=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,hm=ur.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,mm=ur.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,fm=ur.h1`
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,gm=ur.span`
  font-size: 4rem;
  display: block;
  margin-bottom: var(--spacing-md);
`,vm=ur.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`,ym=ur.div`
  background-color: #3498db;
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12rem;
  color: white;
  min-height: 400px;
`,xm=ur.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,bm=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  box-shadow: var(--shadow-sm);
`,wm=ur.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--spacing-sm);
`,jm=ur.div`
  color: var(--text-secondary);
  font-size: 1rem;
`,Sm=ur(De)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  text-decoration: none;
  margin-right: var(--spacing-md);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,km=ur(De)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  text-decoration: none;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`,Cm=ur.h2`
  font-size: 2.2rem;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,Pm=ur.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 800px;
  line-height: 1.6;
`,Em=ur.div`
  margin-bottom: var(--spacing-xxl);
`,Tm=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
`,Am=ur(mp.div)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
`,zm=ur.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: var(--spacing-md);
`,Im=ur.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
`,Dm=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
`,Lm=ur.ul`
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
`,Rm=ur.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`,Mm=ur.div`
  margin-bottom: var(--spacing-xxl);
`,Om=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
`,_m=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
`,Nm=ur.div`
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--primary);
`,Fm=ur.div`
  padding: var(--spacing-lg);
`,Vm=ur.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
`,Bm=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
`,$m=ur.div`
  margin-bottom: var(--spacing-xxl);
`,Um=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-xl);
`,Wm=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  text-align: center;
`,Hm=ur.div`
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: var(--primary);
`,Gm=ur.div`
  padding: var(--spacing-lg);
`,qm=ur.h3`
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
`,Ym=ur.p`
  color: var(--primary);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`,Qm=ur.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`,Km=ur.div`
  margin-bottom: var(--spacing-xxl);
`,Xm=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Jm=ur.div``,Zm=ur.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
`,ef=ur.div`
  margin-bottom: var(--spacing-lg);
`,tf=ur.div`
  display: flex;
  margin-bottom: var(--spacing-sm);
`,rf=ur.div`
  font-weight: 600;
  width: 120px;
  color: var(--text-primary);
`,nf=ur.div`
  color: var(--text-secondary);
`,af=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`,of=ur.div``,sf=ur.section`
  text-align: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xxl);
`,lf=ur.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 2.5rem;
`,cf=ur.p`
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  font-size: 1.2rem;
  opacity: 0.9;
`,df=()=>(0,xe.jsxs)(pm,{children:[(0,xe.jsxs)(hm,{children:[(0,xe.jsxs)(mm,{children:[(0,xe.jsx)(gm,{children:"\ud83e\udd16"}),(0,xe.jsx)(fm,{children:"AI School"}),(0,xe.jsx)(vm,{children:"Learn to integrate AI into creative tools and workflows. Explore machine learning, natural language processing, and computer vision to enhance creative applications and build the next generation of intelligent tools."}),(0,xe.jsxs)(xm,{children:[(0,xe.jsxs)(bm,{children:[(0,xe.jsx)(wm,{children:"6"}),(0,xe.jsx)(jm,{children:"Months Duration"})]}),(0,xe.jsxs)(bm,{children:[(0,xe.jsx)(wm,{children:"25+"}),(0,xe.jsx)(jm,{children:"Projects Built"})]}),(0,xe.jsxs)(bm,{children:[(0,xe.jsx)(wm,{children:"94%"}),(0,xe.jsx)(jm,{children:"Completion Rate"})]})]}),(0,xe.jsxs)("div",{children:[(0,xe.jsx)(Sm,{to:"/apply",children:"Apply Now"}),(0,xe.jsx)(km,{to:"/apply-to-lead",children:"Lead This School"})]})]}),(0,xe.jsx)(ym,{children:"\ud83e\udd16"})]}),(0,xe.jsxs)(Em,{children:[(0,xe.jsx)(Cm,{children:"Curriculum"}),(0,xe.jsx)(Pm,{children:"Our comprehensive curriculum covers everything from AI fundamentals to advanced generative systems, with a focus on practical applications for creative tools."}),(0,xe.jsx)(Tm,{children:[{number:1,title:"Foundations of AI in Creative Tools",description:"Learn the fundamental concepts of AI and how they apply to creative tool development.",topics:["Introduction to AI concepts and terminology","History of AI in creative applications","Ethics and responsible AI development","Setting up your AI development environment"]},{number:2,title:"Machine Learning Basics",description:"Understand core machine learning concepts and implement basic algorithms for creative applications.",topics:["Supervised vs. unsupervised learning","Training and evaluation metrics","Feature engineering for creative data","Implementing simple ML models with TensorFlow/PyTorch"]},{number:3,title:"Natural Language Processing",description:"Explore NLP techniques for text generation, analysis, and interaction in creative tools.",topics:["Text preprocessing and tokenization","Word embeddings and language models","Implementing text generation systems","Building conversational interfaces for tools"]},{number:4,title:"Computer Vision for Creators",description:"Apply computer vision techniques to analyze, generate, and manipulate visual content.",topics:["Image processing fundamentals","Object detection and recognition","Generative models for images (GANs, diffusion)","Style transfer and image manipulation"]},{number:5,title:"Generative AI Systems",description:"Build advanced generative systems that can create new content based on user inputs.",topics:["Architecture of generative models","Prompt engineering and control mechanisms","Multi-modal generation (text, image, audio)","Evaluation and fine-tuning of generative outputs"]},{number:6,title:"AI Tool Integration & Deployment",description:"Learn to integrate AI capabilities into production-ready creative tools and platforms.",topics:["API design for AI-powered features","Performance optimization and scaling","User experience considerations for AI tools","Deployment strategies and monitoring"]}].map(((e,t)=>(0,xe.jsxs)(Am,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.1*t},viewport:{once:!0},children:[(0,xe.jsx)(zm,{children:e.number}),(0,xe.jsx)(Im,{children:e.title}),(0,xe.jsx)(Dm,{children:e.description}),(0,xe.jsx)(Lm,{children:e.topics.map(((e,t)=>(0,xe.jsx)(Rm,{children:e},t)))})]},t)))})]}),(0,xe.jsxs)(Mm,{children:[(0,xe.jsx)(Cm,{children:"Student Projects"}),(0,xe.jsx)(Pm,{children:"Throughout the program, you'll build practical AI-powered tools that solve real problems for creators. Here are some example projects from previous cohorts."}),(0,xe.jsx)(Om,{children:[{title:"AI-Powered Image Editor",description:"Build an image editing tool that uses AI to enhance photos, generate backgrounds, and apply intelligent filters based on content.",icon:"\ud83d\uddbc\ufe0f"},{title:"Creative Writing Assistant",description:"Develop a tool that helps writers by generating ideas, continuing text, and providing feedback on style and structure.",icon:"\u270d\ufe0f"},{title:"Music Composition Helper",description:"Create a system that assists musicians in composing by generating melodies, harmonies, and accompaniments based on user input.",icon:"\ud83c\udfb5"},{title:"Interactive Character Generator",description:"Build a tool for game developers and storytellers to generate and animate characters based on text descriptions.",icon:"\ud83d\udc7e"}].map(((e,t)=>(0,xe.jsxs)(_m,{children:[(0,xe.jsx)(Nm,{children:e.icon}),(0,xe.jsxs)(Fm,{children:[(0,xe.jsx)(Vm,{children:e.title}),(0,xe.jsx)(Bm,{children:e.description})]})]},t)))})]}),(0,xe.jsxs)($m,{children:[(0,xe.jsx)(Cm,{children:"Your Instructors"}),(0,xe.jsx)(Pm,{children:"Learn from industry experts with deep experience in both AI research and practical applications in creative fields."}),(0,xe.jsx)(Um,{children:[{name:"Dr. Maya Chen",title:"Lead Instructor, AI Research Scientist",bio:"Former AI researcher at OpenAI with expertise in generative models and creative applications of machine learning.",avatar:"\ud83d\udc69\u200d\ud83d\udd2c"},{name:"Jamal Washington",title:"Technical Instructor, ML Engineer",bio:"Machine learning engineer with 8 years of experience building AI-powered tools for creative industries.",avatar:"\ud83d\udc68\u200d\ud83d\udcbb"},{name:"Sofia Rodriguez",title:"Guest Instructor, Creative Technologist",bio:"Award-winning artist and technologist specializing in the intersection of AI and interactive media.",avatar:"\ud83d\udc69\u200d\ud83c\udfa8"}].map(((e,t)=>(0,xe.jsxs)(Wm,{children:[(0,xe.jsx)(Hm,{children:e.avatar}),(0,xe.jsxs)(Gm,{children:[(0,xe.jsx)(qm,{children:e.name}),(0,xe.jsx)(Ym,{children:e.title}),(0,xe.jsx)(Qm,{children:e.bio})]})]},t)))})]}),(0,xe.jsxs)(Km,{children:[(0,xe.jsx)(Cm,{children:"Upcoming Cohorts"}),(0,xe.jsx)(Pm,{children:"Join one of our upcoming cohorts and start your journey to becoming an AI tool creator."}),[{title:"Summer 2025 Cohort",startDate:"June 15, 2025",endDate:"December 15, 2025",format:"Hybrid (Online + 2 In-Person Workshops)",status:"Open for Applications",spots:"25 spots available",description:"Our summer cohort focuses on building AI tools for visual artists and designers. Perfect for those interested in computer vision and generative image models."},{title:"Fall 2025 Cohort",startDate:"September 10, 2025",endDate:"March 10, 2026",format:"Fully Online",status:"Coming Soon",spots:"30 spots will be available",description:"The fall cohort will emphasize natural language processing and text generation tools. Ideal for those interested in writing assistants and conversational interfaces."}].map(((e,t)=>(0,xe.jsxs)(Xm,{children:[(0,xe.jsxs)(Jm,{children:[(0,xe.jsx)(Zm,{children:e.title}),(0,xe.jsxs)(ef,{children:[(0,xe.jsxs)(tf,{children:[(0,xe.jsx)(rf,{children:"Start Date:"}),(0,xe.jsx)(nf,{children:e.startDate})]}),(0,xe.jsxs)(tf,{children:[(0,xe.jsx)(rf,{children:"End Date:"}),(0,xe.jsx)(nf,{children:e.endDate})]}),(0,xe.jsxs)(tf,{children:[(0,xe.jsx)(rf,{children:"Format:"}),(0,xe.jsx)(nf,{children:e.format})]}),(0,xe.jsxs)(tf,{children:[(0,xe.jsx)(rf,{children:"Status:"}),(0,xe.jsx)(nf,{children:e.status})]}),(0,xe.jsxs)(tf,{children:[(0,xe.jsx)(rf,{children:"Availability:"}),(0,xe.jsx)(nf,{children:e.spots})]})]}),(0,xe.jsx)(af,{children:e.description})]}),(0,xe.jsx)(of,{children:"Open for Applications"===e.status?(0,xe.jsx)(Sm,{to:"/apply",children:"Apply Now"}):(0,xe.jsx)(km,{to:"/notify-me",children:"Get Notified"})})]},t)))]}),(0,xe.jsxs)(sf,{children:[(0,xe.jsx)(lf,{children:"Lead the AI School"}),(0,xe.jsx)(cf,{children:"Are you an AI expert passionate about education? Apply to lead the next AI School cohort. As a school leader, you'll earn income while building your own AI product with the support of motivated students."}),(0,xe.jsx)(Sm,{to:"/apply-to-lead",children:"Apply to Lead"})]})]}),uf=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,pf=ur.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,hf=ur.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,mf=ur.h1`
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,ff=ur.span`
  font-size: 4rem;
  display: block;
  margin-bottom: var(--spacing-md);
`,gf=ur.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`,vf=ur.div`
  background-color: #9b59b6;
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12rem;
  color: white;
  min-height: 400px;
`,yf=ur.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,xf=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  box-shadow: var(--shadow-sm);
`,bf=ur.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--spacing-sm);
`,wf=ur.div`
  color: var(--text-secondary);
  font-size: 1rem;
`,jf=ur(De)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  text-decoration: none;
  margin-right: var(--spacing-md);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,Sf=ur(De)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  text-decoration: none;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`,kf=ur.h2`
  font-size: 2.2rem;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,Cf=ur.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 800px;
  line-height: 1.6;
`,Pf=ur.div`
  margin-bottom: var(--spacing-xxl);
`,Ef=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
`,Tf=ur(mp.div)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
`,Af=ur.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: var(--spacing-md);
`,zf=ur.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
`,If=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
`,Df=ur.ul`
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
`,Lf=ur.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`,Rf=ur.div`
  margin-bottom: var(--spacing-xxl);
`,Mf=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
`,Of=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
`,_f=ur.div`
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--primary);
`,Nf=ur.div`
  padding: var(--spacing-lg);
`,Ff=ur.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
`,Vf=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
`,Bf=ur.div`
  margin-bottom: var(--spacing-xxl);
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
`,$f=ur.h3`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-md);
`,Uf=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`,Wf=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`,Hf=ur.div`
  background-color: var(--background);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
`,Gf=ur.h4`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`,qf=ur.span`
  font-size: 1.5rem;
`,Yf=ur.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`,Qf=ur.pre`
  background-color: var(--code-background);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin-bottom: var(--spacing-lg);
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--code-text);
`,Kf=ur.div`
  margin-bottom: var(--spacing-xxl);
`,Xf=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-xl);
`,Jf=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  text-align: center;
`,Zf=ur.div`
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: var(--primary);
`,eg=ur.div`
  padding: var(--spacing-lg);
`,tg=ur.h3`
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
`,rg=ur.p`
  color: var(--primary);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`,ng=ur.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`,ig=ur.section`
  text-align: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xxl);
`,ag=ur.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 2.5rem;
`,og=ur.p`
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  font-size: 1.2rem;
  opacity: 0.9;
`,sg=()=>(0,xe.jsxs)(uf,{children:[(0,xe.jsxs)(pf,{children:[(0,xe.jsxs)(hf,{children:[(0,xe.jsx)(ff,{children:"\ud83d\udcc2"}),(0,xe.jsx)(mf,{children:"Directory School"}),(0,xe.jsx)(gf,{children:"Learn to build comprehensive directory applications using the Google Places API. Create location-based tools that help users discover and navigate places of interest while developing practical skills that solve real-world problems."}),(0,xe.jsxs)(yf,{children:[(0,xe.jsxs)(xf,{children:[(0,xe.jsx)(bf,{children:"6"}),(0,xe.jsx)(wf,{children:"Months Duration"})]}),(0,xe.jsxs)(xf,{children:[(0,xe.jsx)(bf,{children:"20+"}),(0,xe.jsx)(wf,{children:"Projects Built"})]}),(0,xe.jsxs)(xf,{children:[(0,xe.jsx)(bf,{children:"92%"}),(0,xe.jsx)(wf,{children:"Job Placement"})]})]}),(0,xe.jsxs)("div",{children:[(0,xe.jsx)(jf,{to:"/apply",children:"Apply Now"}),(0,xe.jsx)(Sf,{to:"/apply-to-lead",children:"Lead This School"})]})]}),(0,xe.jsx)(vf,{children:"\ud83d\udcc2"})]}),(0,xe.jsxs)(Bf,{children:[(0,xe.jsx)($f,{children:"Google Places API Integration"}),(0,xe.jsx)(Uf,{children:"The Directory School focuses on mastering the Google Places API to build powerful directory applications. You'll learn to leverage this robust API to create tools that connect users with businesses, services, and locations around the world."}),(0,xe.jsx)(Wf,{children:[{title:"Place Search",description:"Find places based on user queries, location, and specific criteria.",icon:"\ud83d\udd0d"},{title:"Place Details",description:"Retrieve comprehensive information about specific places including photos, reviews, and hours.",icon:"\ud83d\udccb"},{title:"Place Photos",description:"Access high-quality photos of places to enhance your directory listings.",icon:"\ud83d\udcf8"},{title:"Autocomplete",description:"Implement predictive search to help users quickly find what they're looking for.",icon:"\u270d\ufe0f"},{title:"Geocoding",description:"Convert addresses to geographic coordinates and vice versa for mapping functionality.",icon:"\ud83c\udf10"},{title:"Distance Matrix",description:"Calculate travel times and distances between locations for enhanced user experience.",icon:"\ud83d\udccf"}].map(((e,t)=>(0,xe.jsxs)(Hf,{children:[(0,xe.jsxs)(Gf,{children:[(0,xe.jsx)(qf,{children:e.icon}),e.title]}),(0,xe.jsx)(Yf,{children:e.description})]},t)))}),(0,xe.jsx)(Qf,{children:'// Sample Google Places API request\nconst getNearbyRestaurants = async (location) => {\n  try {\n    const response = await fetch(\n      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=1500&type=restaurant&key=YOUR_API_KEY`\n    );\n    const data = await response.json();\n    return data.results;\n  } catch (error) {\n    console.error("Error fetching nearby restaurants:", error);\n    return [];\n  }\n};'})]}),(0,xe.jsxs)(Pf,{children:[(0,xe.jsx)(kf,{children:"Curriculum"}),(0,xe.jsx)(Cf,{children:"Our comprehensive curriculum covers everything from directory fundamentals to advanced Google Places API integration, with a focus on building practical, user-friendly directory applications."}),(0,xe.jsx)(Ef,{children:[{number:1,title:"Directory Fundamentals",description:"Learn the core concepts of directory applications and location-based services.",topics:["Introduction to directory applications","Types of directories and their use cases","Location-based services overview","Setting up your development environment"]},{number:2,title:"Google Places API Essentials",description:"Master the Google Places API and its core features for building directory applications.",topics:["Google Places API overview and setup","Authentication and API keys","Basic place search and details","Handling API responses and errors"]},{number:3,title:"Advanced Place Search",description:"Implement sophisticated search functionality for directory applications.",topics:["Nearby search implementation","Text search and autocomplete","Filtering and sorting results","Pagination and result management"]},{number:4,title:"Maps Integration",description:"Combine Google Maps with Places API to create visual directory interfaces.",topics:["Google Maps JavaScript API basics","Displaying places on maps","Custom markers and info windows","Interactive map features for directories"]},{number:5,title:"User Experience & UI Design",description:"Design intuitive and engaging interfaces for directory applications.",topics:["Directory UX best practices","Mobile-first design for location apps","Search and filter UI patterns","Accessibility considerations for directory apps"]},{number:6,title:"Directory App Deployment",description:"Launch and scale your directory application for real-world usage.",topics:["Performance optimization for directory apps","Caching strategies for API requests","Deployment and hosting options","Analytics and user behavior tracking"]}].map(((e,t)=>(0,xe.jsxs)(Tf,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.1*t},viewport:{once:!0},children:[(0,xe.jsx)(Af,{children:e.number}),(0,xe.jsx)(zf,{children:e.title}),(0,xe.jsx)(If,{children:e.description}),(0,xe.jsx)(Df,{children:e.topics.map(((e,t)=>(0,xe.jsx)(Lf,{children:e},t)))})]},t)))})]}),(0,xe.jsxs)(Rf,{children:[(0,xe.jsx)(kf,{children:"Student Projects"}),(0,xe.jsx)(Cf,{children:"Throughout the program, you'll build practical directory applications that solve real problems for users. Here are some example projects from previous cohorts."}),(0,xe.jsx)(Mf,{children:[{title:"Local Restaurant Finder",description:"Build a directory application that helps users discover and filter restaurants based on cuisine, price range, and ratings.",icon:"\ud83c\udf7d\ufe0f"},{title:"Service Provider Directory",description:"Create a comprehensive directory of service providers like plumbers, electricians, and home cleaners with reviews and availability.",icon:"\ud83d\udd27"},{title:"Tourist Attraction Guide",description:"Develop an interactive guide to tourist attractions with custom categories, visit planning, and offline capabilities.",icon:"\ud83c\udfdb\ufe0f"},{title:"Specialty Store Locator",description:"Build a specialized directory for niche retail stores with inventory search and availability checking.",icon:"\ud83c\udfea"}].map(((e,t)=>(0,xe.jsxs)(Of,{children:[(0,xe.jsx)(_f,{children:e.icon}),(0,xe.jsxs)(Nf,{children:[(0,xe.jsx)(Ff,{children:e.title}),(0,xe.jsx)(Vf,{children:e.description})]})]},t)))})]}),(0,xe.jsxs)(Kf,{children:[(0,xe.jsx)(kf,{children:"Your Instructors"}),(0,xe.jsx)(Cf,{children:"Learn from industry experts with deep experience in location-based services, directory applications, and the Google Places API."}),(0,xe.jsx)(Xf,{children:[{name:"Alex Thompson",title:"Lead Instructor, GIS Specialist",bio:"Former Google Maps engineer with expertise in location-based services and geospatial applications.",avatar:"\ud83d\udc68\u200d\ud83d\udcbb"},{name:"Priya Sharma",title:"Technical Instructor, Full-Stack Developer",bio:"Full-stack developer who has built multiple successful directory applications for various industries.",avatar:"\ud83d\udc69\u200d\ud83d\udcbb"},{name:"Marcus Chen",title:"Guest Instructor, UX Designer",bio:"UX designer specializing in location-based applications with a focus on intuitive search and discovery experiences.",avatar:"\ud83d\udc68\u200d\ud83c\udfa8"}].map(((e,t)=>(0,xe.jsxs)(Jf,{children:[(0,xe.jsx)(Zf,{children:e.avatar}),(0,xe.jsxs)(eg,{children:[(0,xe.jsx)(tg,{children:e.name}),(0,xe.jsx)(rg,{children:e.title}),(0,xe.jsx)(ng,{children:e.bio})]})]},t)))})]}),(0,xe.jsxs)(ig,{children:[(0,xe.jsx)(ag,{children:"Lead the Directory School"}),(0,xe.jsx)(og,{children:"Are you experienced with the Google Places API and passionate about building directory applications? Apply to lead the next Directory School cohort. As a school leader, you'll earn income while building your own directory product with the support of motivated students."}),(0,xe.jsx)(jf,{to:"/apply-to-lead",children:"Apply to Lead"})]})]}),lg=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,cg=ur.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,dg=ur.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,ug=ur.h1`
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,pg=ur.span`
  font-size: 4rem;
  display: block;
  margin-bottom: var(--spacing-md);
`,hg=ur.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`,mg=ur.div`
  background-color: #27ae60;
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12rem;
  color: white;
  min-height: 400px;
`,fg=ur.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,gg=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  box-shadow: var(--shadow-sm);
`,vg=ur.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--spacing-sm);
`,yg=ur.div`
  color: var(--text-secondary);
  font-size: 1rem;
`,xg=ur(De)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  text-decoration: none;
  margin-right: var(--spacing-md);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,bg=ur(De)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  text-decoration: none;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`,wg=ur.h2`
  font-size: 2.2rem;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,jg=ur.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 800px;
  line-height: 1.6;
`,Sg=ur.div`
  margin-bottom: var(--spacing-xxl);
`,kg=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
`,Cg=ur(mp.div)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
`,Pg=ur.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: var(--spacing-md);
`,Eg=ur.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
`,Tg=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
`,Ag=ur.ul`
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
`,zg=ur.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`,Ig=ur.div`
  margin-bottom: var(--spacing-xxl);
`,Dg=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
`,Lg=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
`,Rg=ur.div`
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--primary);
`,Mg=ur.div`
  padding: var(--spacing-lg);
`,Og=ur.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
`,_g=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
`,Ng=ur.div`
  margin-bottom: var(--spacing-xxl);
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
`,Fg=ur.h3`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-md);
`,Vg=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`,Bg=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`,$g=ur.div`
  background-color: var(--background);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
`,Ug=ur.h4`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`,Wg=ur.span`
  font-size: 1.5rem;
`,Hg=ur.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`,Gg=ur.pre`
  background-color: var(--code-background);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin-bottom: var(--spacing-lg);
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--code-text);
`,qg=ur.div`
  margin-bottom: var(--spacing-xxl);
`,Yg=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
`,Qg=ur.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--primary);
  color: white;
  font-weight: 600;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Kg=ur.div`
  padding: var(--spacing-lg);
  text-align: center;
  font-size: 1.2rem;
`,Xg=ur.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Jg=ur.div`
  padding: var(--spacing-lg);
  
  &:first-child {
    font-weight: 600;
    background-color: var(--background);
  }
  
  @media (max-width: 768px) {
    border-bottom: ${e=>e.isLast?"none":"1px solid var(--border)"};
  }
`,Zg=ur.div`
  margin-bottom: var(--spacing-xxl);
`,ev=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-xl);
`,tv=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  text-align: center;
`,rv=ur.div`
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: var(--primary);
`,nv=ur.div`
  padding: var(--spacing-lg);
`,iv=ur.h3`
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
`,av=ur.p`
  color: var(--primary);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`,ov=ur.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`,sv=ur.section`
  text-align: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xxl);
`,lv=ur.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 2.5rem;
`,cv=ur.p`
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  font-size: 1.2rem;
  opacity: 0.9;
`,dv=()=>(0,xe.jsxs)(lg,{children:[(0,xe.jsxs)(cg,{children:[(0,xe.jsxs)(dg,{children:[(0,xe.jsx)(pg,{children:"\ud83d\udccb"}),(0,xe.jsx)(ug,{children:"Listing School"}),(0,xe.jsx)(hg,{children:"Specialize in creating listing applications with the Google Places API. Build practical tools that connect users with businesses, services, and locations while developing marketable skills that solve real business problems."}),(0,xe.jsxs)(fg,{children:[(0,xe.jsxs)(gg,{children:[(0,xe.jsx)(vg,{children:"6"}),(0,xe.jsx)(yg,{children:"Months Duration"})]}),(0,xe.jsxs)(gg,{children:[(0,xe.jsx)(vg,{children:"15+"}),(0,xe.jsx)(yg,{children:"Projects Built"})]}),(0,xe.jsxs)(gg,{children:[(0,xe.jsx)(vg,{children:"88%"}),(0,xe.jsx)(yg,{children:"Revenue Success"})]})]}),(0,xe.jsxs)("div",{children:[(0,xe.jsx)(xg,{to:"/apply",children:"Apply Now"}),(0,xe.jsx)(bg,{to:"/apply-to-lead",children:"Lead This School"})]})]}),(0,xe.jsx)(mg,{children:"\ud83d\udccb"})]}),(0,xe.jsxs)(Ng,{children:[(0,xe.jsx)(Fg,{children:"Google Places API for Listing Applications"}),(0,xe.jsx)(Vg,{children:"The Listing School focuses on leveraging the Google Places API to build powerful listing applications. You'll learn to create specialized tools that connect users with businesses and services through robust search and discovery features."}),(0,xe.jsx)(Bg,{children:[{title:"Business Details",description:"Access comprehensive business information including contact details, hours, and attributes.",icon:"\ud83d\udcdd"},{title:"Reviews & Ratings",description:"Integrate authentic user reviews and ratings to build trust in your listings.",icon:"\u2b50"},{title:"Business Photos",description:"Display high-quality photos of businesses and locations to enhance your listings.",icon:"\ud83d\udcf8"},{title:"Category Search",description:"Enable users to browse listings by specific categories and subcategories.",icon:"\ud83d\udd0d"},{title:"Opening Hours",description:"Show accurate business hours and real-time open/closed status.",icon:"\ud83d\udd52"},{title:"Attribute Filtering",description:"Allow users to filter listings based on specific attributes like price level, accessibility, etc.",icon:"\ud83d\udd22"}].map(((e,t)=>(0,xe.jsxs)($g,{children:[(0,xe.jsxs)(Ug,{children:[(0,xe.jsx)(Wg,{children:e.icon}),e.title]}),(0,xe.jsx)(Hg,{children:e.description})]},t)))}),(0,xe.jsx)(Gg,{children:"// Sample code for fetching and displaying business details\nconst getBusinessDetails = async (placeId) => {\n  try {\n    const response = await fetch(\n      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,formatted_phone_number,opening_hours,rating,reviews,photos,price_level&key=YOUR_API_KEY`\n    );\n    const data = await response.json();\n    return data.result;\n  } catch (error) {\n    console.error(\"Error fetching business details:\", error);\n    return null;\n  }\n};\n\n// Display business hours with open/closed status\nconst renderBusinessHours = (openingHours) => {\n  const today = new Date().getDay();\n  const isOpen = openingHours.open_now;\n  \n  return (\n    <div className=\"business-hours\">\n      <div className=\"status ${isOpen ? 'open' : 'closed'}\">\n        {isOpen ? 'Open Now' : 'Closed'}\n      </div>\n      <div className=\"hours-list\">\n        {openingHours.weekday_text.map((day, index) => (\n          <div key={index} className={`day ${index === today ? 'today' : ''}`}>\n            {day}\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};"})]}),(0,xe.jsxs)(qg,{children:[(0,xe.jsx)(wg,{children:"Directory vs. Listing Applications"}),(0,xe.jsx)(jg,{children:"While both Directory School and Listing School use the Google Places API, they focus on different aspects of location-based applications. Understanding these differences will help you choose the right specialization for your interests and career goals."}),(0,xe.jsxs)(Yg,{children:[(0,xe.jsxs)(Qg,{children:[(0,xe.jsx)(Kg,{children:"Directory Applications"}),(0,xe.jsx)(Kg,{children:"Listing Applications"})]}),(0,xe.jsxs)(Xg,{children:[(0,xe.jsx)(Jg,{children:"Focus on comprehensive collections of places"}),(0,xe.jsx)(Jg,{children:"Focus on detailed individual listings with rich content"})]}),(0,xe.jsxs)(Xg,{children:[(0,xe.jsx)(Jg,{children:"Emphasis on search and discovery"}),(0,xe.jsx)(Jg,{children:"Emphasis on detailed information and user engagement"})]}),(0,xe.jsxs)(Xg,{children:[(0,xe.jsx)(Jg,{children:"Often location-centric (maps, proximity)"}),(0,xe.jsx)(Jg,{children:"Often category-centric (filters, attributes)"})]}),(0,xe.jsxs)(Xg,{children:[(0,xe.jsx)(Jg,{children:"Examples: City guides, store locators"}),(0,xe.jsx)(Jg,{children:"Examples: Real estate listings, job boards"})]}),(0,xe.jsxs)(Xg,{children:[(0,xe.jsx)(Jg,{children:"Revenue models: Advertising, premium listings"}),(0,xe.jsx)(Jg,{children:"Revenue models: Subscriptions, commissions, featured placement"})]})]})]}),(0,xe.jsxs)(Sg,{children:[(0,xe.jsx)(wg,{children:"Curriculum"}),(0,xe.jsx)(jg,{children:"Our comprehensive curriculum covers everything from listing application fundamentals to advanced monetization strategies, with a focus on building practical, revenue-generating listing platforms."}),(0,xe.jsx)(kg,{children:[{number:1,title:"Listing Application Fundamentals",description:"Learn the core concepts of listing applications and their role in connecting users with services and businesses.",topics:["Introduction to listing applications","Types of listings and business models","User needs and expectations for listings","Setting up your development environment"]},{number:2,title:"Google Places API for Listings",description:"Master the Google Places API features specifically relevant to creating robust listing applications.",topics:["Google Places API overview and authentication","Place details and business information","Reviews and ratings integration","Photos and visual content management"]},{number:3,title:"Search & Discovery",description:"Build powerful search and discovery features for your listing applications.",topics:["Implementing advanced search functionality","Filtering and sorting mechanisms","Category-based discovery","Personalized recommendations"]},{number:4,title:"User-Generated Content",description:"Integrate user-generated content to enhance your listing applications.",topics:["User reviews and ratings systems","Photo uploads and management","Comment and discussion features","Moderation and content quality"]},{number:5,title:"Monetization Strategies",description:"Explore various monetization approaches for listing applications.",topics:["Subscription models for listing apps","Featured listings and premium placement","Commission and referral systems","Advertising integration"]},{number:6,title:"Scaling & Growth",description:"Learn to scale your listing application and grow your user base.",topics:["Performance optimization for listing apps","Database design for scalability","User acquisition strategies","Analytics and growth metrics"]}].map(((e,t)=>(0,xe.jsxs)(Cg,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.1*t},viewport:{once:!0},children:[(0,xe.jsx)(Pg,{children:e.number}),(0,xe.jsx)(Eg,{children:e.title}),(0,xe.jsx)(Tg,{children:e.description}),(0,xe.jsx)(Ag,{children:e.topics.map(((e,t)=>(0,xe.jsx)(zg,{children:e},t)))})]},t)))})]}),(0,xe.jsxs)(Ig,{children:[(0,xe.jsx)(wg,{children:"Student Projects"}),(0,xe.jsx)(jg,{children:"Throughout the program, you'll build practical listing applications that connect users with businesses and services. Here are some example projects from previous cohorts."}),(0,xe.jsx)(Dg,{children:[{title:"Real Estate Listings",description:"Build a comprehensive real estate listing application with property details, neighborhood information, and agent contacts.",icon:"\ud83c\udfe0"},{title:"Job Board Platform",description:"Create a specialized job listing platform with company profiles, application tracking, and skill matching.",icon:"\ud83d\udcbc"},{title:"Event Discovery App",description:"Develop an event listing application with ticket purchasing, venue information, and personalized recommendations.",icon:"\ud83c\udfad"},{title:"Marketplace Directory",description:"Build a local marketplace listing app connecting buyers with sellers of products and services in their area.",icon:"\ud83d\uded2"}].map(((e,t)=>(0,xe.jsxs)(Lg,{children:[(0,xe.jsx)(Rg,{children:e.icon}),(0,xe.jsxs)(Mg,{children:[(0,xe.jsx)(Og,{children:e.title}),(0,xe.jsx)(_g,{children:e.description})]})]},t)))})]}),(0,xe.jsxs)(Zg,{children:[(0,xe.jsx)(wg,{children:"Your Instructors"}),(0,xe.jsx)(jg,{children:"Learn from industry experts with deep experience in listing applications, marketplace platforms, and the Google Places API."}),(0,xe.jsx)(ev,{children:[{name:"Sarah Johnson",title:"Lead Instructor, Product Manager",bio:"Former product manager at Yelp with expertise in listing applications and marketplace platforms.",avatar:"\ud83d\udc69\u200d\ud83d\udcbc"},{name:"David Rodriguez",title:"Technical Instructor, Backend Developer",bio:"Backend developer specialized in API integration and database design for high-traffic listing platforms.",avatar:"\ud83d\udc68\u200d\ud83d\udcbb"},{name:"Aisha Patel",title:"Guest Instructor, UX Researcher",bio:"UX researcher focused on user behavior in search and discovery interfaces for listing applications.",avatar:"\ud83d\udc69\u200d\ud83d\udd2c"}].map(((e,t)=>(0,xe.jsxs)(tv,{children:[(0,xe.jsx)(rv,{children:e.avatar}),(0,xe.jsxs)(nv,{children:[(0,xe.jsx)(iv,{children:e.name}),(0,xe.jsx)(av,{children:e.title}),(0,xe.jsx)(ov,{children:e.bio})]})]},t)))})]}),(0,xe.jsxs)(sv,{children:[(0,xe.jsx)(lv,{children:"Lead the Listing School"}),(0,xe.jsx)(cv,{children:"Are you experienced with building listing applications and passionate about teaching others? Apply to lead the next Listing School cohort. As a school leader, you'll earn income while building your own listing product with the support of motivated students."}),(0,xe.jsx)(xg,{to:"/apply-to-lead",children:"Apply to Lead"})]})]}),uv=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,pv=ur.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,hv=ur.div`
  width: 120px;
  height: 120px;
  border-radius: var(--border-radius-lg);
  background-color: ${e=>e.color||"var(--primary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
`,mv=ur.div`
  flex: 1;
`,fv=ur.h1`
  margin-bottom: var(--spacing-sm);
`,gv=ur.div`
  display: flex;
  gap: var(--spacing-md);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,vv=ur.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`,yv=ur.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,xv=ur(De)`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${e=>e.primary?"var(--primary)":"transparent"};
  color: ${e=>e.primary?"white":"var(--text-primary)"};
  border: 1px solid ${e=>e.primary?"var(--primary)":"var(--border)"};
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${e=>e.primary?"var(--secondary)":"rgba(0, 0, 0, 0.05)"};
  }
`,bv=ur.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,wv=ur.div``,jv=ur.h2`
  margin-bottom: var(--spacing-md);
  font-size: 1.8rem;
`,Sv=ur.div`
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
`,kv=ur.p`
  margin-bottom: var(--spacing-md);
`,Cv=ur.div`
  margin-bottom: var(--spacing-xl);
`,Pv=ur.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`,Ev=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-sm);
`,Tv=ur.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`,Av=ur.h3`
  font-size: 1.2rem;
`,zv=ur.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`,Iv=ur.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-sm);
`,Dv=ur.ul`
  padding-left: var(--spacing-lg);
`,Lv=ur.li`
  margin-bottom: var(--spacing-xs);
  font-size: 0.9rem;
`,Rv=ur.div``,Mv=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-lg);
`,Ov=ur.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.2rem;
`,_v=(ur.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`,ur.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
`),Nv=ur.div`
  font-weight: 500;
`,Fv=ur.div`
  font-size: 0.9rem;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  background-color: ${e=>{switch(e.status){case"open":return"rgba(46, 204, 113, 0.2)";case"full":return"rgba(231, 76, 60, 0.2)";case"upcoming":return"rgba(52, 152, 219, 0.2)";default:return"rgba(0, 0, 0, 0.1)"}}};
  color: ${e=>{switch(e.status){case"open":return"#27ae60";case"full":return"#c0392b";case"upcoming":return"#2980b9";default:return"var(--text-secondary)"}}};
`,Vv=(ur.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`,ur.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-sm);
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
`),Bv=ur.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-right: var(--spacing-sm);
`,$v=ur.div`
  display: flex;
  flex-direction: column;
`,Uv=ur.div`
  font-weight: 600;
`,Wv=ur.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`,Hv=ur.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`,Gv=ur(De)`
  padding: var(--spacing-sm);
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  color: var(--text-primary);
  font-weight: 500;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`,qv=e=>({business:"\ud83d\udcbc",code:"\ud83d\udcbb",dedication:"\u23f0",earn:"\ud83d\udcb0",financial:"\ud83d\udcca",gratitude:"\ud83d\ude4f",hosting:"\ud83c\udf10",innovation:"\ud83d\udca1",journey:"\ud83e\udded",kindness:"\u2764\ufe0f",leadership:"\ud83d\udc51",mastery:"\ud83c\udfc6",network:"\ud83d\udd04",opportunity:"\ud83d\udeaa",purpose:"\ud83e\uddff",quietude:"\ud83e\uddd8",resilience:"\ud83d\udee1\ufe0f"}[e]||"\ud83c\udf93"),Yv=e=>({business:"#2ecc71",code:"#e74c3c",dedication:"#f39c12",earn:"#9b59b6",financial:"#1abc9c",gratitude:"#34495e",hosting:"#16a085",innovation:"#d35400",journey:"#8e44ad",kindness:"#e74c3c",leadership:"#f1c40f",mastery:"#2980b9",network:"#27ae60",opportunity:"#3498db",purpose:"#8e44ad",quietude:"#95a5a6",resilience:"#e67e22"}[e]||"#3498db"),Qv=()=>{const{schoolId:e}=Z(),t={ai:df,directory:sg,listing:dv};if(t[e]){const r=t[e];return(0,xe.jsx)(r,{})}const r={id:e,name:e.charAt(0).toUpperCase()+e.slice(1)+" School",emoji:qv(e),color:Yv(e),description:"This school focuses on teaching students the skills needed to build and contribute to the Alphabet Schools ecosystem.",duration:"6 months",nextCohort:"Coming Soon",instructors:[{name:"Lead Instructor",role:"Curriculum Designer",avatar:"\ud83d\udc68\u200d\ud83c\udfeb"},{name:"Assistant Instructor",role:"Technical Mentor",avatar:"\ud83d\udc69\u200d\ud83c\udfeb"}],modules:[{title:"Introduction",duration:"2 weeks",description:"Learn the fundamentals and get familiar with the tools and concepts.",topics:["Overview","Setup","Basic concepts"]},{title:"Core Skills",duration:"8 weeks",description:"Develop the core skills needed for this discipline.",topics:["Fundamental techniques","Best practices","Practical exercises"]},{title:"Advanced Topics",duration:"8 weeks",description:"Explore advanced concepts and specialized areas.",topics:["Advanced techniques","Specialized tools","Case studies"]},{title:"Final Project",duration:"6 weeks",description:"Apply your skills to build a comprehensive project.",topics:["Project planning","Implementation","Presentation"]}],cohorts:[{name:"Upcoming Cohort",startDate:"TBD",format:"Online",status:"Coming Soon"}]};return(0,xe.jsxs)(uv,{children:[(0,xe.jsxs)(pv,{children:[(0,xe.jsx)(hv,{color:r.color,children:r.emoji}),(0,xe.jsxs)(mv,{children:[(0,xe.jsx)(fv,{children:r.name}),(0,xe.jsxs)(gv,{children:[(0,xe.jsxs)(vv,{children:[(0,xe.jsx)("span",{children:"\u23f1\ufe0f"}),(0,xe.jsx)("span",{children:r.duration})]}),(0,xe.jsxs)(vv,{children:[(0,xe.jsx)("span",{children:"\ud83d\udcc5"}),(0,xe.jsxs)("span",{children:["Next cohort: ",r.nextCohort]})]})]}),(0,xe.jsxs)(yv,{children:[(0,xe.jsx)(xv,{to:"/apply",primary:!0,children:"Apply Now"}),(0,xe.jsx)(xv,{to:"/apply-to-lead",children:"Lead This School"})]})]})]}),(0,xe.jsxs)(bv,{children:[(0,xe.jsxs)(wv,{children:[(0,xe.jsxs)(Sv,{children:[(0,xe.jsx)(kv,{children:r.description}),(0,xe.jsx)(kv,{children:"Students in this school will learn by building real tools that are used by the community. The curriculum is project-based and focuses on practical skills that can be immediately applied."})]}),(0,xe.jsxs)(Cv,{children:[(0,xe.jsx)(jv,{children:"Curriculum"}),(0,xe.jsx)(Pv,{children:r.modules.map(((e,t)=>(0,xe.jsxs)(Ev,{children:[(0,xe.jsxs)(Tv,{children:[(0,xe.jsx)(Av,{children:e.title}),(0,xe.jsx)(zv,{children:e.duration})]}),(0,xe.jsx)(Iv,{children:e.description}),(0,xe.jsx)(Dv,{children:e.topics.map(((e,t)=>(0,xe.jsx)(Lv,{children:e},t)))})]},t)))})]})]}),(0,xe.jsxs)(Rv,{children:[(0,xe.jsxs)(Mv,{children:[(0,xe.jsx)(Ov,{children:"Upcoming Cohorts"}),r.cohorts.map(((e,t)=>(0,xe.jsxs)(_v,{children:[(0,xe.jsx)(Nv,{children:e.startDate}),(0,xe.jsx)(Fv,{status:e.status,children:e.status.charAt(0).toUpperCase()+e.status.slice(1)})]},t)))]}),(0,xe.jsxs)(Mv,{children:[(0,xe.jsx)(Ov,{children:"Instructors"}),r.instructors.map(((e,t)=>(0,xe.jsxs)(Vv,{children:[(0,xe.jsx)(Bv,{children:e.avatar}),(0,xe.jsxs)($v,{children:[(0,xe.jsx)(Uv,{children:e.name}),(0,xe.jsx)(Wv,{children:e.role})]})]},t)))]}),(0,xe.jsxs)(Mv,{children:[(0,xe.jsx)(Ov,{children:"Related Schools"}),(0,xe.jsxs)(Hv,{children:[(0,xe.jsx)(Gv,{to:"/schools/ai",children:"AI School"}),(0,xe.jsx)(Gv,{to:"/schools/directory",children:"Directory School"}),(0,xe.jsx)(Gv,{to:"/schools/listing",children:"Listing School"})]})]})]})]})]})},Kv=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,Xv=ur.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,Jv=ur.div`
  width: 120px;
  height: 120px;
  border-radius: var(--border-radius-lg);
  background-color: ${e=>e.color||"var(--primary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
`,Zv=ur.div`
  flex: 1;
`,ey=ur.h1`
  margin-bottom: var(--spacing-sm);
`,ty=ur.div`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
`,ry=ur.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,ny=ur.span`
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(52, 152, 219, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
`,iy=ur.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,ay=ur.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${e=>e.primary?"var(--primary)":"transparent"};
  color: ${e=>e.primary?"white":"var(--text-primary)"};
  border: 1px solid ${e=>e.primary?"var(--primary)":"var(--border)"};
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${e=>e.primary?"var(--secondary)":"rgba(0, 0, 0, 0.05)"};
  }
`,oy=ur.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,sy=ur.div``,ly=ur.h2`
  margin-bottom: var(--spacing-md);
  font-size: 1.8rem;
`,cy=ur.div`
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
`,dy=ur.p`
  margin-bottom: var(--spacing-md);
`,uy=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-xl);
`,py=ur.div`
  padding: var(--spacing-md);
  background-color: var(--primary);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,hy=ur.h3`
  font-size: 1.2rem;
`,my=ur.div`
  display: flex;
  gap: var(--spacing-sm);
`,fy=ur.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${e=>e.color};
  cursor: pointer;
`,gy=ur.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: var(--text-secondary);
  font-size: 1.2rem;
`,vy=ur.div`
  margin-bottom: var(--spacing-xl);
`,yy=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-lg);
`,xy=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
`,by=ur.div`
  font-size: 2rem;
  margin-bottom: var(--spacing-sm);
  color: var(--primary);
`,wy=ur.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
`,jy=ur.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,Sy=ur.div``,ky=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-lg);
`,Cy=ur.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.2rem;
`,Py=ur.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`,Ey=ur.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
`,Ty=ur.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`,Ay=ur.span`
  font-size: 1.2rem;
`,zy=ur.div`
  font-size: 0.8rem;
  display: flex;
  gap: 5px;
`,Iy=ur.span`
  padding: 2px 6px;
  border-radius: var(--border-radius-sm);
  background-color: ${e=>"create"===e.type?"rgba(46, 204, 113, 0.2)":"edit"===e.type?"rgba(52, 152, 219, 0.2)":"rgba(155, 89, 182, 0.2)"};
  color: ${e=>"create"===e.type?"#27ae60":"edit"===e.type?"#2980b9":"#8e44ad"};
`,Dy=ur.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`,Ly=ur(De)`
  display: flex;
  gap: var(--spacing-md);
  text-decoration: none;
  color: var(--text-primary);
  
  &:hover {
    h4 {
      color: var(--primary);
    }
  }
`,Ry=ur.div`
  width: 50px;
  height: 50px;
  border-radius: var(--border-radius-md);
  background-color: ${e=>e.color||"var(--primary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
`,My=ur.div`
  flex: 1;
`,Oy=ur.h4`
  margin-bottom: 5px;
  transition: color var(--transition-fast);
`,_y=ur.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`,Ny=ur.div`
  margin-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border);
`,Fy=ur.div`
  display: flex;
  gap: var(--spacing-md);
  overflow-x: auto;
  padding-bottom: var(--spacing-sm);
`,Vy=ur.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background: none;
  border: none;
  color: ${e=>e.active?"var(--primary)":"var(--text-secondary)"};
  font-weight: ${e=>e.active?"600":"400"};
  border-bottom: 2px solid ${e=>e.active?"var(--primary)":"transparent"};
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
`,By=()=>{const{toolId:e}=Z(),[r,n]=(0,t.useState)("overview"),i={"fantasy-map-maker":{name:"Fantasy Map Maker",description:"Create beautiful fantasy maps for RPGs, novels, and world-building with an intuitive drag-and-drop interface.",longDescription:"Fantasy Map Maker is a powerful tool for creating detailed fantasy maps for your RPGs, novels, and world-building projects. With an intuitive drag-and-drop interface, you can easily create mountains, forests, rivers, cities, and more. The tool includes a variety of pre-made assets and styles, allowing you to create maps in different artistic styles from hand-drawn to realistic. Maps created with this tool can be seamlessly used in other Alphabet Schools Studio tools, such as the Tabletop RPG Engine or Town Simulator.",creator:"AI School Alumni",image:null,icon:"\ud83d\uddfa\ufe0f",color:"#3498db",category:"map-makers",tags:["maps","fantasy","rpg","world-building"],features:[{icon:"\ud83d\udd8c\ufe0f",title:"Intuitive Drawing Tools",description:"Easy-to-use brushes and tools for creating terrain, landmarks, and details."},{icon:"\ud83c\udfd4\ufe0f",title:"Terrain Generation",description:"Procedural terrain generation with customizable parameters for mountains, forests, and more."},{icon:"\ud83c\udfd9\ufe0f",title:"Settlement Builder",description:"Create detailed cities, towns, and villages with automatic building placement."},{icon:"\ud83c\udfa8",title:"Multiple Art Styles",description:"Choose from various art styles, from hand-drawn to realistic."},{icon:"\ud83d\udce4",title:"Asset Integration",description:"Maps integrate with other tools in the ecosystem, allowing characters and items to be placed on them."},{icon:"\ud83d\udd0d",title:"Zoom Levels",description:"Create maps with multiple zoom levels, from world maps to detailed city layouts."}],assetTypes:[{name:"Map",icon:"\ud83d\uddfa\ufe0f",capabilities:["create","edit","view"]},{name:"Location",icon:"\ud83d\udccd",capabilities:["create","edit","view"]},{name:"Terrain",icon:"\ud83c\udfd4\ufe0f",capabilities:["create","edit","view"]},{name:"Character",icon:"\ud83d\udc64",capabilities:["view","place"]},{name:"Item",icon:"\ud83d\udde1\ufe0f",capabilities:["view","place"]}],relatedTools:[{id:"tabletop-rpg-engine",name:"Tabletop RPG Engine",description:"Run RPG campaigns using maps created in Fantasy Map Maker",icon:"\ud83c\udfb2",color:"#2ecc71"},{id:"dungeon-designer",name:"Dungeon Designer",description:"Create detailed dungeon maps with traps and treasures",icon:"\ud83c\udfd4\ufe0f",color:"#34495e"},{id:"medieval-town-simulator",name:"Medieval Town Simulator",description:"Simulate towns that can be placed on your fantasy maps",icon:"\ud83c\udff0",color:"#f39c12"}]}}[e]||{name:"Tool Not Found",description:"The requested tool could not be found.",longDescription:"Please check the URL and try again, or browse our available tools.",creator:"Unknown",icon:"\u2753",color:"#95a5a6",category:"unknown",tags:[],features:[],assetTypes:[],relatedTools:[]};return(0,xe.jsxs)(Kv,{children:[(0,xe.jsxs)(Xv,{children:[(0,xe.jsx)(Jv,{color:i.color,children:i.icon}),(0,xe.jsxs)(Zv,{children:[(0,xe.jsx)(ey,{children:i.name}),(0,xe.jsxs)(ty,{children:["Created by: ",i.creator]}),(0,xe.jsx)(ry,{children:i.tags.map(((e,t)=>(0,xe.jsx)(ny,{children:e},t)))}),(0,xe.jsxs)(iy,{children:[(0,xe.jsx)(ay,{primary:!0,children:"Launch Tool"}),(0,xe.jsx)(ay,{children:"View Source"})]})]})]}),(0,xe.jsx)(Ny,{children:(0,xe.jsxs)(Fy,{children:[(0,xe.jsx)(Vy,{active:"overview"===r,onClick:()=>n("overview"),children:"Overview"}),(0,xe.jsx)(Vy,{active:"documentation"===r,onClick:()=>n("documentation"),children:"Documentation"}),(0,xe.jsx)(Vy,{active:"examples"===r,onClick:()=>n("examples"),children:"Examples"}),(0,xe.jsx)(Vy,{active:"community"===r,onClick:()=>n("community"),children:"Community"})]})}),"overview"===r&&(0,xe.jsxs)(oy,{children:[(0,xe.jsxs)(sy,{children:[(0,xe.jsxs)(cy,{children:[(0,xe.jsxs)(ly,{children:["About ",i.name]}),(0,xe.jsx)(dy,{children:i.longDescription})]}),(0,xe.jsxs)(uy,{children:[(0,xe.jsxs)(py,{children:[(0,xe.jsxs)(hy,{children:[i.name," Preview"]}),(0,xe.jsxs)(my,{children:[(0,xe.jsx)(fy,{color:"#e74c3c"}),(0,xe.jsx)(fy,{color:"#f39c12"}),(0,xe.jsx)(fy,{color:"#2ecc71"})]})]}),(0,xe.jsxs)(gy,{children:[i.name," Interface Preview"]})]}),(0,xe.jsxs)(vy,{children:[(0,xe.jsx)(ly,{children:"Features"}),(0,xe.jsx)(yy,{children:i.features.map(((e,t)=>(0,xe.jsxs)(xy,{children:[(0,xe.jsx)(by,{children:e.icon}),(0,xe.jsx)(wy,{children:e.title}),(0,xe.jsx)(jy,{children:e.description})]},t)))})]})]}),(0,xe.jsxs)(Sy,{children:[(0,xe.jsxs)(ky,{children:[(0,xe.jsx)(Cy,{children:"Supported Asset Types"}),(0,xe.jsx)(Py,{children:i.assetTypes.map(((e,t)=>(0,xe.jsxs)(Ey,{children:[(0,xe.jsxs)(Ty,{children:[(0,xe.jsx)(Ay,{children:e.icon}),(0,xe.jsx)("span",{children:e.name})]}),(0,xe.jsx)(zy,{children:e.capabilities.map(((e,t)=>(0,xe.jsx)(Iy,{type:e,children:e},t)))})]},t)))})]}),(0,xe.jsxs)(ky,{children:[(0,xe.jsx)(Cy,{children:"Related Tools"}),(0,xe.jsx)(Dy,{children:i.relatedTools.map(((e,t)=>(0,xe.jsxs)(Ly,{to:`/tools/${e.id}`,children:[(0,xe.jsx)(Ry,{color:e.color,children:e.icon}),(0,xe.jsxs)(My,{children:[(0,xe.jsx)(Oy,{children:e.name}),(0,xe.jsx)(_y,{children:e.description})]})]},t)))})]})]})]}),"documentation"===r&&(0,xe.jsxs)("div",{children:[(0,xe.jsx)(ly,{children:"Documentation"}),(0,xe.jsxs)(dy,{children:["Detailed documentation for ",i.name," is coming soon."]})]}),"examples"===r&&(0,xe.jsxs)("div",{children:[(0,xe.jsx)(ly,{children:"Examples"}),(0,xe.jsxs)(dy,{children:["Example projects created with ",i.name," will be displayed here."]})]}),"community"===r&&(0,xe.jsxs)("div",{children:[(0,xe.jsx)(ly,{children:"Community"}),(0,xe.jsxs)(dy,{children:["Community discussions and contributions related to ",i.name," will be shown here."]})]})]})},$y=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,Uy=ur.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
`,Wy=ur.h1`
  margin-bottom: var(--spacing-md);
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Hy=ur.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Gy=ur.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 2.2rem;
  text-align: center;
`,qy=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-xl);
`,Yy=ur.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
  color: var(--primary);
`,Qy=ur.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`,Ky=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`,Xy=ur(mp.div)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  height: 100%;
`,Jy=ur.div`
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary);
`,Zy=ur.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
`,ex=ur.p`
  color: var(--text-secondary);
  line-height: 1.6;
  flex: 1;
`,tx=ur.section`
  text-align: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xxl);
`,rx=ur.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 2.5rem;
`,nx=ur.p`
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  font-size: 1.2rem;
  opacity: 0.9;
`,ix=ur(De)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: white;
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,ax=ur.div`
  margin-bottom: var(--spacing-xxl);
`,ox=ur.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`,sx=ur.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
`,lx=ur.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
`,cx=ur.div`
  flex: 1;
`,dx=ur.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.3rem;
`,ux=ur.p`
  color: var(--text-secondary);
  line-height: 1.6;
`,px=ur.div`
  margin-bottom: var(--spacing-xxl);
`,hx=ur.div`
  margin-bottom: var(--spacing-lg);
`,mx=ur.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.3rem;
  color: var(--primary);
`,fx=ur.p`
  color: var(--text-secondary);
  line-height: 1.6;
`,gx=()=>(0,xe.jsxs)($y,{children:[(0,xe.jsxs)(Uy,{children:[(0,xe.jsx)(Wy,{children:"Alumni Payment System"}),(0,xe.jsx)(Hy,{children:"Our innovative payment system ensures that alumni who contribute to the education of others are fairly compensated for their expertise and time."})]}),(0,xe.jsxs)(qy,{children:[(0,xe.jsx)(Yy,{children:"Build While You Earn"}),(0,xe.jsx)(Qy,{children:"The Alphabet Schools Studio is built on the principle that education should be mutually beneficial. Our alumni payment system allows graduates to earn income while continuing to build their own products and contribute to the educational ecosystem. Whether you're leading a school, mentoring students, or creating tools, you'll be fairly compensated for the value you provide."})]}),(0,xe.jsx)(Gy,{children:"Key Features"}),(0,xe.jsx)(Ky,{children:[{icon:"\ud83d\udcb0",title:"Direct Payments",description:"Receive payments directly from students you mentor or from users of tools you've created within the platform."},{icon:"\ud83d\udc51",title:"School Leadership",description:"Lead a school cohort and earn income while building your own product with the support of students and the community."},{icon:"\ud83d\udd04",title:"Revenue Sharing",description:"Participate in our revenue sharing model where a percentage of platform fees goes back to alumni who contribute to the ecosystem."},{icon:"\ud83d\udcca",title:"Transparent Tracking",description:"Access detailed analytics and payment tracking through your dashboard to monitor your income streams."},{icon:"\ud83c\udf10",title:"Global Payments",description:"Receive payments from anywhere in the world through traditional payment methods or cryptocurrency options."},{icon:"\ud83d\udd10",title:"NFT Integration",description:"Monetize your digital assets and educational content through NFTs, with built-in royalty mechanisms for ongoing income."}].map(((e,t)=>(0,xe.jsxs)(Xy,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.1*t},viewport:{once:!0},children:[(0,xe.jsx)(Jy,{children:e.icon}),(0,xe.jsx)(Zy,{children:e.title}),(0,xe.jsx)(ex,{children:e.description})]},t)))}),(0,xe.jsxs)(tx,{children:[(0,xe.jsx)(rx,{children:"Ready to Lead and Earn?"}),(0,xe.jsx)(nx,{children:"Apply now to lead one of our upcoming schools. As a leader, you'll earn income while building your product with the support of motivated students and our community of creators."}),(0,xe.jsx)(ix,{to:"/apply-to-lead",children:"Apply to Lead a School"})]}),(0,xe.jsxs)(ax,{children:[(0,xe.jsx)(Gy,{children:"How It Works"}),(0,xe.jsx)(ox,{children:[{title:"Complete a School Program",description:"Graduate from one or more of our alphabet schools to qualify for the alumni payment system."},{title:"Create Value in the Ecosystem",description:"Contribute by leading courses, creating tools, mentoring students, or developing educational content."},{title:"Set Up Your Payment Profile",description:"Configure your payment preferences, including payout methods, revenue sharing options, and NFT settings."},{title:"Promote Your Contributions",description:"Market your tools, courses, or mentorship services within the platform to attract students and users."},{title:"Receive Direct Payments",description:"Get paid directly when users access your premium content, use your tools, or enroll in your courses."},{title:"Earn Ongoing Royalties",description:"Continue to earn from your contributions through our royalty system, even as you develop new projects."}].map(((e,t)=>(0,xe.jsxs)(sx,{children:[(0,xe.jsx)(lx,{children:t+1}),(0,xe.jsxs)(cx,{children:[(0,xe.jsx)(dx,{children:e.title}),(0,xe.jsx)(ux,{children:e.description})]})]},t)))})]}),(0,xe.jsxs)(px,{children:[(0,xe.jsx)(Gy,{children:"Frequently Asked Questions"}),[{question:"How much can I earn as a school leader?",answer:"School leaders typically earn between $3,000-$8,000 per cohort, depending on enrollment numbers and the specific school. Additionally, you'll be building your own product with student support, which can generate its own revenue stream."},{question:"Do I need technical skills to lead a school?",answer:"Different schools require different skill sets. While technical schools like Code School require programming expertise, others like Business School or Purpose School focus more on strategy, creativity, and leadership. We match leaders to schools that align with their strengths."},{question:"How are payments distributed?",answer:"Payments are processed bi-weekly through your chosen payment method (bank transfer, PayPal, or cryptocurrency). Our platform automatically calculates your earnings based on student enrollments, tool usage, and other contributions."},{question:"What percentage of revenue do alumni receive?",answer:"Alumni typically receive 70-80% of direct revenue from their courses and tools. For platform-wide revenue sharing, alumni receive a portion based on their level of contribution and engagement with the ecosystem."},{question:"How does the NFT integration work?",answer:"Alumni can mint educational assets as NFTs, which students can purchase or earn. Each time an NFT is resold on the secondary market, the creator receives automatic royalties (typically 5-10%) through smart contracts."},{question:"Can I lead multiple schools simultaneously?",answer:"While possible, we generally recommend focusing on one school at a time to ensure quality. However, experienced leaders may run concurrent cohorts for complementary schools (e.g., AI School and Code School) after demonstrating success."}].map(((e,t)=>(0,xe.jsxs)(hx,{children:[(0,xe.jsx)(mx,{children:e.question}),(0,xe.jsx)(fx,{children:e.answer})]},t)))]})]}),vx=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,yx=ur.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
`,xx=ur.h1`
  margin-bottom: var(--spacing-md);
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,bx=ur.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,wx=ur.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,jx=ur.div``,Sx=ur.div``,kx=ur.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 1.8rem;
  color: var(--primary);
`,Cx=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-xl);
`,Px=ur.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
`,Ex=ur.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`,Tx=ur.ul`
  padding-left: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
`,Ax=ur.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-secondary);
  line-height: 1.6;
`,zx=ur.form`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
`,Ix=ur.div`
  margin-bottom: var(--spacing-lg);
`,Dx=ur.label`
  display: block;
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
`,Lx=ur.input`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--background);
  color: var(--text-primary);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`,Rx=ur.textarea`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--background);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`,Mx=ur.select`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--background);
  color: var(--text-primary);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`,Ox=ur.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`,_x=ur.input`
  margin-right: var(--spacing-sm);
`,Nx=ur.label`
  color: var(--text-secondary);
`,Fx=ur(mp.button)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background-color: var(--disabled);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Vx=ur(mp.div)`
  background-color: var(--success);
  color: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  margin-top: var(--spacing-lg);
  text-align: center;
`,Bx=()=>{const[e,r]=(0,t.useState)({name:"",email:"",linkedIn:"",portfolio:"",preferredSchool:"",alternateSchool:"",experience:"",productIdea:"",availability:"",interests:[]}),[n,i]=(0,t.useState)(!1),a=t=>{const{name:n,value:i}=t.target;r({...e,[n]:i})},o=t=>{const{value:n,checked:i}=t.target;r(i?{...e,interests:[...e.interests,n]}:{...e,interests:e.interests.filter((e=>e!==n))})},s=[{id:"journey",name:"Journey School"},{id:"kindness",name:"Kindness School"},{id:"leadership",name:"Leadership School"},{id:"mastery",name:"Mastery School"},{id:"network",name:"Network School"},{id:"opportunity",name:"Opportunity School"},{id:"purpose",name:"Purpose School"},{id:"quietude",name:"Quietude School"},{id:"resilience",name:"Resilience School"}];return(0,xe.jsxs)(vx,{children:[(0,xe.jsxs)(yx,{children:[(0,xe.jsx)(xx,{children:"Apply to Lead a School"}),(0,xe.jsx)(bx,{children:"Lead a school cohort, earn income, and build your product with the support of motivated students and our community of creators."})]}),(0,xe.jsxs)(wx,{children:[(0,xe.jsxs)(jx,{children:[(0,xe.jsx)(kx,{children:"Why Lead a School?"}),(0,xe.jsxs)(Cx,{children:[(0,xe.jsx)(Px,{children:"Build While You Earn"}),(0,xe.jsx)(Ex,{children:"As a school leader, you'll guide a cohort of students through a structured curriculum while simultaneously building your own product with their support and feedback."}),(0,xe.jsxs)(Tx,{children:[(0,xe.jsx)(Ax,{children:"Earn $3,000-$8,000 per cohort, depending on enrollment"}),(0,xe.jsx)(Ax,{children:"Develop your product with the help of motivated students"}),(0,xe.jsx)(Ax,{children:"Establish yourself as an authority in your field"}),(0,xe.jsx)(Ax,{children:"Create a sustainable income stream through alumni payments"}),(0,xe.jsx)(Ax,{children:"Access our network of creators, investors, and industry experts"})]})]}),(0,xe.jsxs)(Cx,{children:[(0,xe.jsx)(Px,{children:"What Makes a Great School Leader?"}),(0,xe.jsx)(Ex,{children:"We're looking for passionate individuals who have expertise in their field and a desire to share their knowledge while building something meaningful."}),(0,xe.jsxs)(Tx,{children:[(0,xe.jsx)(Ax,{children:"Domain expertise in the school's subject area"}),(0,xe.jsx)(Ax,{children:"A clear vision for a product you want to build"}),(0,xe.jsx)(Ax,{children:"Strong communication and mentorship skills"}),(0,xe.jsx)(Ax,{children:"Commitment to student success and community values"}),(0,xe.jsx)(Ax,{children:"Entrepreneurial mindset and problem-solving abilities"})]})]}),(0,xe.jsxs)(Cx,{children:[(0,xe.jsx)(Px,{children:"The Selection Process"}),(0,xe.jsx)(Ex,{children:"After submitting your application, here's what you can expect:"}),(0,xe.jsxs)(Tx,{children:[(0,xe.jsx)(Ax,{children:"Initial application review (1-2 weeks)"}),(0,xe.jsx)(Ax,{children:"Video interview with our school coordination team"}),(0,xe.jsx)(Ax,{children:"Product idea presentation and curriculum review"}),(0,xe.jsx)(Ax,{children:"Final selection and onboarding (if accepted)"}),(0,xe.jsx)(Ax,{children:"Pre-cohort preparation (4 weeks before launch)"})]})]})]}),(0,xe.jsxs)(Sx,{children:[(0,xe.jsx)(kx,{children:"Application Form"}),n?(0,xe.jsxs)(Vx,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,xe.jsx)("h3",{children:"Application Submitted!"}),(0,xe.jsx)("p",{children:"Thank you for applying to lead a school. We'll review your application and get back to you within 1-2 weeks."})]}):(0,xe.jsxs)(zx,{onSubmit:t=>{t.preventDefault(),console.log("Form submitted:",e),i(!0)},children:[(0,xe.jsxs)(Ix,{children:[(0,xe.jsx)(Dx,{htmlFor:"name",children:"Full Name *"}),(0,xe.jsx)(Lx,{type:"text",id:"name",name:"name",value:e.name,onChange:a,required:!0})]}),(0,xe.jsxs)(Ix,{children:[(0,xe.jsx)(Dx,{htmlFor:"email",children:"Email Address *"}),(0,xe.jsx)(Lx,{type:"email",id:"email",name:"email",value:e.email,onChange:a,required:!0})]}),(0,xe.jsxs)(Ix,{children:[(0,xe.jsx)(Dx,{htmlFor:"linkedIn",children:"LinkedIn Profile"}),(0,xe.jsx)(Lx,{type:"url",id:"linkedIn",name:"linkedIn",value:e.linkedIn,onChange:a,placeholder:"https://linkedin.com/in/yourprofile"})]}),(0,xe.jsxs)(Ix,{children:[(0,xe.jsx)(Dx,{htmlFor:"portfolio",children:"Portfolio/Website"}),(0,xe.jsx)(Lx,{type:"url",id:"portfolio",name:"portfolio",value:e.portfolio,onChange:a,placeholder:"https://yourwebsite.com"})]}),(0,xe.jsxs)(Ix,{children:[(0,xe.jsx)(Dx,{htmlFor:"preferredSchool",children:"Preferred School to Lead *"}),(0,xe.jsxs)(Mx,{id:"preferredSchool",name:"preferredSchool",value:e.preferredSchool,onChange:a,required:!0,children:[(0,xe.jsx)("option",{value:"",children:"Select a school"}),s.map((e=>(0,xe.jsx)("option",{value:e.id,children:e.name},e.id)))]})]}),(0,xe.jsxs)(Ix,{children:[(0,xe.jsx)(Dx,{htmlFor:"alternateSchool",children:"Alternate School Choice"}),(0,xe.jsxs)(Mx,{id:"alternateSchool",name:"alternateSchool",value:e.alternateSchool,onChange:a,children:[(0,xe.jsx)("option",{value:"",children:"Select a school"}),s.map((e=>(0,xe.jsx)("option",{value:e.id,children:e.name},e.id)))]})]}),(0,xe.jsxs)(Ix,{children:[(0,xe.jsx)(Dx,{htmlFor:"experience",children:"Relevant Experience *"}),(0,xe.jsx)(Rx,{id:"experience",name:"experience",value:e.experience,onChange:a,placeholder:"Describe your background and experience relevant to the school you want to lead.",required:!0})]}),(0,xe.jsxs)(Ix,{children:[(0,xe.jsx)(Dx,{htmlFor:"productIdea",children:"Product Idea *"}),(0,xe.jsx)(Rx,{id:"productIdea",name:"productIdea",value:e.productIdea,onChange:a,placeholder:"Describe the product you want to build while leading this school.",required:!0})]}),(0,xe.jsxs)(Ix,{children:[(0,xe.jsx)(Dx,{htmlFor:"availability",children:"Availability *"}),(0,xe.jsxs)(Mx,{id:"availability",name:"availability",value:e.availability,onChange:a,required:!0,children:[(0,xe.jsx)("option",{value:"",children:"Select availability"}),(0,xe.jsx)("option",{value:"immediate",children:"Immediate (next 1-2 months)"}),(0,xe.jsx)("option",{value:"soon",children:"Soon (3-4 months)"}),(0,xe.jsx)("option",{value:"later",children:"Later (5-6 months)"}),(0,xe.jsx)("option",{value:"flexible",children:"Flexible/Open to discussion"})]})]}),(0,xe.jsxs)(Ix,{children:[(0,xe.jsx)(Dx,{children:"Areas of Interest"}),[{value:"teaching",label:"Teaching & Mentorship"},{value:"product",label:"Product Development"},{value:"community",label:"Community Building"},{value:"content",label:"Content Creation"},{value:"research",label:"Research & Innovation"},{value:"business",label:"Business Development"}].map((t=>(0,xe.jsxs)(Ox,{children:[(0,xe.jsx)(_x,{type:"checkbox",id:t.value,name:"interests",value:t.value,checked:e.interests.includes(t.value),onChange:o}),(0,xe.jsx)(Nx,{htmlFor:t.value,children:t.label})]},t.value)))]}),(0,xe.jsx)(Fx,{type:"submit",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Submit Application"})]})]})]})]})},$x=ur.div`
  max-width: 900px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,Ux=ur.div`
  margin-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--border);
  padding-bottom: var(--spacing-lg);
`,Wx=ur.h1`
  margin-bottom: var(--spacing-md);
`,Hx=ur.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
`,Gx=ur.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`,qx=ur.div`
  line-height: 1.7;
`,Yx=ur.section`
  margin-bottom: var(--spacing-xl);
`,Qx=ur.h2`
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--border);
`,Kx=ur.h3`
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
`,Xx=ur.p`
  margin-bottom: var(--spacing-md);
`,Jx=ur.pre`
  background-color: ${e=>"dark"===e.theme?"#2d2d2d":"#f5f5f5"};
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  overflow-x: auto;
  margin-bottom: var(--spacing-md);
  font-family: var(--font-family-mono);
  font-size: 0.9rem;
`,Zx=ur.code`
  font-family: var(--font-family-mono);
  background-color: ${e=>"dark"===e.theme?"#2d2d2d":"#f5f5f5"};
  padding: 0.2em 0.4em;
  border-radius: var(--border-radius-sm);
  font-size: 0.9em;
`,eb=ur.ul`
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-lg);
`,tb=ur.li`
  margin-bottom: var(--spacing-sm);
`,rb=ur.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--spacing-lg);
`,nb=ur.th`
  text-align: left;
  padding: var(--spacing-sm);
  border-bottom: 2px solid var(--border);
`,ib=ur.td`
  padding: var(--spacing-sm);
  border-bottom: 1px solid var(--border);
`,ab=ur.div`
  background-color: rgba(52, 152, 219, 0.1);
  border-left: 4px solid var(--primary);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border-radius: var(--border-radius-sm);
`,ob=ur.div`
  background-color: rgba(231, 76, 60, 0.1);
  border-left: 4px solid var(--accent);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border-radius: var(--border-radius-sm);
`,sb=ur.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border);
`,lb=ur(De)`
  display: flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--primary);
    color: white;
    border-color: var(--primary);
  }
`,cb=()=>(0,xe.jsxs)($x,{children:[(0,xe.jsxs)(Ux,{children:[(0,xe.jsx)(Wx,{children:"Asset Protocol Documentation"}),(0,xe.jsx)(Hx,{children:"Understanding how assets are shared across the Alphabet Schools Studio ecosystem"}),(0,xe.jsx)(Gx,{children:"Last updated: May 3, 2025"})]}),(0,xe.jsxs)(qx,{children:[(0,xe.jsxs)(Yx,{children:[(0,xe.jsx)(Qx,{children:"Introduction"}),(0,xe.jsx)(Xx,{children:"The Asset Protocol is the foundation of the Alphabet Schools Studio ecosystem. It defines how creative assets are structured, stored, and shared between different tools created by students. This protocol ensures that assets created in one tool (such as a character designer) can be seamlessly used in another tool (such as a map maker) without requiring manual export/import processes."}),(0,xe.jsx)(Xx,{children:"By adhering to this protocol, student-built tools can participate in a unified creative ecosystem, providing users with a frictionless experience across the entire platform."})]}),(0,xe.jsxs)(Yx,{children:[(0,xe.jsx)(Qx,{children:"Core Concepts"}),(0,xe.jsx)(Kx,{children:"Asset Identity"}),(0,xe.jsx)(Xx,{children:"Each asset in the system has a unique identifier that remains consistent across all tools. This identifier is used to reference the asset regardless of which tool is currently using it."}),(0,xe.jsx)(Jx,{children:'// Example asset identifier\n{\n  "id": "asset_c7f8e9d2-3b5a-4f16-8a9c-1d2e3f4a5b6c",\n  "type": "character",\n  "version": "1.2.0",\n  "creator": "user_8a7b6c5d-4e3f-2a1b-9c8d-7e6f5d4c3b2a"\n}'}),(0,xe.jsx)(Kx,{children:"Asset Types"}),(0,xe.jsx)(Xx,{children:"The protocol defines several standard asset types, each with its own set of required and optional properties. Tools can extend these types with additional properties while maintaining compatibility with the core protocol."}),(0,xe.jsxs)(eb,{children:[(0,xe.jsxs)(tb,{children:[(0,xe.jsx)(Zx,{children:"character"})," - Characters for RPGs, stories, or games"]}),(0,xe.jsxs)(tb,{children:[(0,xe.jsx)(Zx,{children:"map"})," - Maps, locations, or environments"]}),(0,xe.jsxs)(tb,{children:[(0,xe.jsx)(Zx,{children:"item"})," - Items, equipment, or objects"]}),(0,xe.jsxs)(tb,{children:[(0,xe.jsx)(Zx,{children:"texture"})," - Textures, patterns, or materials"]}),(0,xe.jsxs)(tb,{children:[(0,xe.jsx)(Zx,{children:"sound"})," - Sound effects or music"]}),(0,xe.jsxs)(tb,{children:[(0,xe.jsx)(Zx,{children:"animation"})," - Character or object animations"]}),(0,xe.jsxs)(tb,{children:[(0,xe.jsx)(Zx,{children:"story"})," - Narrative elements or scripts"]})]}),(0,xe.jsx)(Kx,{children:"Property Schema"}),(0,xe.jsx)(Xx,{children:"Each asset type has a defined schema of properties. Properties can be primitive values (strings, numbers, booleans) or complex objects (nested properties, arrays)."}),(0,xe.jsxs)(rb,{children:[(0,xe.jsx)("thead",{children:(0,xe.jsxs)("tr",{children:[(0,xe.jsx)(nb,{children:"Property Type"}),(0,xe.jsx)(nb,{children:"Description"}),(0,xe.jsx)(nb,{children:"Example"})]})}),(0,xe.jsxs)("tbody",{children:[(0,xe.jsxs)("tr",{children:[(0,xe.jsx)(ib,{children:"Primitive"}),(0,xe.jsx)(ib,{children:"Basic data types"}),(0,xe.jsx)(ib,{children:(0,xe.jsx)(Zx,{children:'name: "Elven Ranger"'})})]}),(0,xe.jsxs)("tr",{children:[(0,xe.jsx)(ib,{children:"Reference"}),(0,xe.jsx)(ib,{children:"Reference to another asset"}),(0,xe.jsx)(ib,{children:(0,xe.jsx)(Zx,{children:'equippedItem: "asset_1a2b3c4d"'})})]}),(0,xe.jsxs)("tr",{children:[(0,xe.jsx)(ib,{children:"Image"}),(0,xe.jsx)(ib,{children:"URL or data URI for images"}),(0,xe.jsx)(ib,{children:(0,xe.jsx)(Zx,{children:'portrait: "https://..."'})})]}),(0,xe.jsxs)("tr",{children:[(0,xe.jsx)(ib,{children:"Geometry"}),(0,xe.jsx)(ib,{children:"Spatial information"}),(0,xe.jsx)(ib,{children:(0,xe.jsxs)(Zx,{children:["position: ","{","x: 10, y: 20","}"]})})]}),(0,xe.jsxs)("tr",{children:[(0,xe.jsx)(ib,{children:"Collection"}),(0,xe.jsx)(ib,{children:"Arrays of values or objects"}),(0,xe.jsx)(ib,{children:(0,xe.jsx)(Zx,{children:"inventory: [...]"})})]})]})]})]}),(0,xe.jsxs)(Yx,{children:[(0,xe.jsx)(Qx,{children:"Storage and Persistence"}),(0,xe.jsx)(Kx,{children:"Shared Storage"}),(0,xe.jsx)(Xx,{children:"Assets are stored in a shared storage system accessible to all tools in the ecosystem. This storage system provides:"}),(0,xe.jsxs)(eb,{children:[(0,xe.jsxs)(tb,{children:[(0,xe.jsx)("strong",{children:"Persistence"})," - Assets remain available across user sessions"]}),(0,xe.jsxs)(tb,{children:[(0,xe.jsx)("strong",{children:"Versioning"})," - Changes to assets are tracked with version history"]}),(0,xe.jsxs)(tb,{children:[(0,xe.jsx)("strong",{children:"Access Control"})," - Permissions determine who can view or modify assets"]}),(0,xe.jsxs)(tb,{children:[(0,xe.jsx)("strong",{children:"Conflict Resolution"})," - Mechanisms to handle simultaneous edits"]})]}),(0,xe.jsx)(Kx,{children:"Local vs. Cloud Storage"}),(0,xe.jsx)(Xx,{children:"The protocol supports both local storage (for offline use and personal assets) and cloud storage (for shared and collaborative assets). Tools should implement both storage types and provide synchronization between them."}),(0,xe.jsxs)(ab,{children:["When implementing local storage, ensure that assets are stored in a standardized location that other tools can access. The recommended path is ",(0,xe.jsx)(Zx,{children:"~/AlphabetSchools/assets/"})," with subdirectories for each asset type."]})]}),(0,xe.jsxs)(Yx,{children:[(0,xe.jsx)(Qx,{children:"Asset Lifecycle"}),(0,xe.jsx)(Kx,{children:"Creation"}),(0,xe.jsx)(Xx,{children:"When a new asset is created, the tool must generate a unique identifier and initialize the asset with required properties for its type. The tool should then register the asset with the shared storage system."}),(0,xe.jsx)(Jx,{children:'// Example asset creation\nfunction createCharacterAsset(name, race, characterClass) {\n  const assetId = generateUniqueId();\n  \n  const asset = {\n    id: assetId,\n    type: "character",\n    version: "1.0.0",\n    creator: getCurrentUserId(),\n    createdAt: new Date().toISOString(),\n    properties: {\n      name,\n      race,\n      class: characterClass,\n      level: 1,\n      attributes: {\n        strength: 10,\n        dexterity: 10,\n        constitution: 10,\n        intelligence: 10,\n        wisdom: 10,\n        charisma: 10\n      },\n      inventory: [],\n      imgUrl: getDefaultCharacterImage(race, characterClass)\n    }\n  };\n  \n  // Register with storage system\n  AssetStorage.register(asset);\n  \n  return assetId;\n}'}),(0,xe.jsx)(Kx,{children:"Modification"}),(0,xe.jsx)(Xx,{children:"When modifying an asset, tools should create a new version rather than directly mutating the existing one. This ensures that other tools using the asset aren't affected by unexpected changes."}),(0,xe.jsx)(Kx,{children:"Sharing"}),(0,xe.jsx)(Xx,{children:"Assets can be shared between users through the platform's sharing mechanisms. When an asset is shared, the recipient receives a copy or a reference depending on the sharing settings."}),(0,xe.jsx)(ob,{children:"Tools should never modify assets created by other tools unless they have explicit permission to do so. Instead, they should create derived assets that reference the original."})]}),(0,xe.jsxs)(Yx,{children:[(0,xe.jsx)(Qx,{children:"NFT Integration"}),(0,xe.jsx)(Xx,{children:"The Asset Protocol includes optional integration with blockchain technology to provide verifiable ownership through NFTs (Non-Fungible Tokens)."}),(0,xe.jsx)(Kx,{children:"Minting Process"}),(0,xe.jsx)(Xx,{children:"Users can choose to mint their assets as NFTs, which creates a permanent record of ownership on the blockchain. The minting process:"}),(0,xe.jsxs)(eb,{children:[(0,xe.jsx)(tb,{children:"Generates a unique token ID on the selected blockchain"}),(0,xe.jsx)(tb,{children:"Creates metadata that links to the asset's content"}),(0,xe.jsx)(tb,{children:"Records the transaction in the asset's history"}),(0,xe.jsx)(tb,{children:"Updates the asset with its NFT information"})]}),(0,xe.jsx)(Kx,{children:"Ownership Verification"}),(0,xe.jsx)(Xx,{children:"Tools can verify ownership of assets by checking the blockchain record. This is particularly useful for premium assets or assets that grant special permissions within tools."}),(0,xe.jsx)(ab,{children:"NFT integration is entirely optional. Users can create, share, and use assets without ever interacting with blockchain technology."})]}),(0,xe.jsxs)(Yx,{children:[(0,xe.jsx)(Qx,{children:"Implementing the Protocol"}),(0,xe.jsx)(Kx,{children:"Required Endpoints"}),(0,xe.jsx)(Xx,{children:"Tools must implement the following endpoints to participate in the asset ecosystem:"}),(0,xe.jsxs)(eb,{children:[(0,xe.jsxs)(tb,{children:[(0,xe.jsx)(Zx,{children:"listSupportedAssetTypes()"})," - Returns the asset types the tool can work with"]}),(0,xe.jsxs)(tb,{children:[(0,xe.jsx)(Zx,{children:"importAsset(assetId)"})," - Imports an asset from the shared storage"]}),(0,xe.jsxs)(tb,{children:[(0,xe.jsx)(Zx,{children:"exportAsset(assetId)"})," - Exports an asset to the shared storage"]}),(0,xe.jsxs)(tb,{children:[(0,xe.jsx)(Zx,{children:"getAssetCapabilities(assetType)"})," - Returns what the tool can do with a given asset type"]})]}),(0,xe.jsx)(Kx,{children:"Testing Compatibility"}),(0,xe.jsx)(Xx,{children:"Before submitting your tool to the platform, use the Asset Protocol Validator to ensure compatibility with the ecosystem. The validator checks that your tool correctly implements all required endpoints and handles assets according to the protocol."}),(0,xe.jsx)(Jx,{children:"// Example validation command\n$ alphabet-schools validate-tool --path ./my-tool --asset-types character,item"})]}),(0,xe.jsxs)(sb,{children:[(0,xe.jsx)(lb,{to:"/docs/architecture",children:"\u2190 Architecture Overview"}),(0,xe.jsx)(lb,{to:"/docs/tool-development",children:"Tool Development \u2192"})]})]})]}),db=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`,ub=ur.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
`,pb=ur.h1`
  margin-bottom: var(--spacing-md);
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,hb=ur.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,mb=ur.h2`
  font-size: 2.2rem;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,fb=ur.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 800px;
  line-height: 1.6;
`,gb=ur.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`,vb=ur(mp.div)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  height: 100%;
  display: flex;
  flex-direction: column;
`,yb=ur.div`
  height: 200px;
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
`,xb=ur.div`
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
`,bb=ur.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
`,wb=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
  flex: 1;
`,jb=ur.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`,Sb=ur.div`
  display: flex;
  gap: var(--spacing-xs);
`,kb=ur.span`
  background-color: ${e=>e.bgColor||"var(--primary-light)"};
  color: ${e=>e.color||"var(--primary)"};
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  font-weight: 600;
`,Cb=ur(De)`
  color: var(--primary);
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`,Pb=ur.div`
  margin-bottom: var(--spacing-xxl);
`,Eb=ur.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-xl);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Tb=ur.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Ab=ur.h3`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-md);
`,zb=ur.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`,Ib=ur.ul`
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`,Db=ur.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`,Lb=ur.div`
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: white;
  min-height: 300px;
`,Rb=ur.section`
  text-align: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xxl);
`,Mb=ur.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 2.5rem;
`,Ob=ur.p`
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  font-size: 1.2rem;
  opacity: 0.9;
`,_b=ur(De)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: white;
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,Nb=()=>(0,xe.jsxs)(db,{children:[(0,xe.jsxs)(ub,{children:[(0,xe.jsx)(pb,{children:"Project Showcase"}),(0,xe.jsx)(hb,{children:"Explore how our students combine the creative asset side with practical listing applications to build powerful tools that solve real-world problems."})]}),(0,xe.jsx)(Pb,{children:(0,xe.jsxs)(Eb,{children:[(0,xe.jsxs)(Tb,{children:[(0,xe.jsx)(Ab,{children:"Bridging Creativity and Practicality"}),(0,xe.jsx)(zb,{children:"The Alphabet Schools Studio platform uniquely combines creative asset creation with practical listing applications powered by the Google Places API. This dual approach allows students to build comprehensive solutions that are both visually appealing and functionally robust."}),(0,xe.jsxs)(Ib,{children:[(0,xe.jsx)(Db,{children:"Students learn to create polished visual assets in creative schools"}),(0,xe.jsx)(Db,{children:"Directory School teaches building location-based discovery tools"}),(0,xe.jsx)(Db,{children:"Listing School focuses on detailed business and service listings"}),(0,xe.jsx)(Db,{children:"Projects combine these skills for complete, market-ready applications"})]}),(0,xe.jsx)(Cb,{to:"/schools",children:"Explore Our Schools \u2192"})]}),(0,xe.jsx)(Lb,{bgColor:"linear-gradient(135deg, #9b59b6 0%, #27ae60 100%)",children:"\ud83d\udd04"})]})}),(0,xe.jsx)(mb,{children:"Featured Projects"}),(0,xe.jsx)(fb,{children:"These projects showcase how students have combined their skills from different schools to create comprehensive applications that leverage both creative assets and the Google Places API."}),(0,xe.jsx)(gb,{children:[{title:"Local Eats Explorer",description:"A comprehensive restaurant directory application that combines beautiful food photography assets with the Google Places API to help users discover local dining options.",icon:"\ud83c\udf7d\ufe0f",bgColor:"#e74c3c",tags:[{name:"Directory",bgColor:"#9b59b6",color:"white"},{name:"Listing",bgColor:"#27ae60",color:"white"}]},{title:"Artisan Marketplace",description:"A platform connecting local artisans with customers, featuring high-quality product photography and detailed business listings powered by the Google Places API.",icon:"\ud83c\udfa8",bgColor:"#3498db",tags:[{name:"Listing",bgColor:"#27ae60",color:"white"},{name:"AI",bgColor:"#3498db",color:"white"}]},{title:"TourGuide Pro",description:"An interactive tourist guide application with stunning visual assets of attractions combined with detailed location information from the Google Places API.",icon:"\ud83d\uddfa\ufe0f",bgColor:"#f39c12",tags:[{name:"Directory",bgColor:"#9b59b6",color:"white"},{name:"Code",bgColor:"#e74c3c",color:"white"}]},{title:"Service Finder",description:"A comprehensive directory of local service providers with verified reviews, appointment booking, and professional profile assets for businesses.",icon:"\ud83d\udd27",bgColor:"#2ecc71",tags:[{name:"Directory",bgColor:"#9b59b6",color:"white"},{name:"Business",bgColor:"#2ecc71",color:"white"}]},{title:"Event Horizon",description:"An event discovery platform featuring professional event photography assets and detailed venue information powered by the Google Places API.",icon:"\ud83c\udfad",bgColor:"#9b59b6",tags:[{name:"Listing",bgColor:"#27ae60",color:"white"},{name:"Innovation",bgColor:"#d35400",color:"white"}]},{title:"Real Estate Showcase",description:"A property listing application with professional real estate photography and virtual tours combined with neighborhood data from the Google Places API.",icon:"\ud83c\udfe0",bgColor:"#34495e",tags:[{name:"Listing",bgColor:"#27ae60",color:"white"},{name:"Directory",bgColor:"#9b59b6",color:"white"}]}].map(((e,t)=>(0,xe.jsxs)(vb,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.1*t},viewport:{once:!0},children:[(0,xe.jsx)(yb,{bgColor:e.bgColor,children:e.icon}),(0,xe.jsxs)(xb,{children:[(0,xe.jsx)(bb,{children:e.title}),(0,xe.jsx)(wb,{children:e.description}),(0,xe.jsxs)(jb,{children:[(0,xe.jsx)(Sb,{children:e.tags.map(((e,t)=>(0,xe.jsx)(kb,{bgColor:e.bgColor,color:e.color,children:e.name},t)))}),(0,xe.jsx)(Cb,{to:"/projects",children:"View Details"})]})]})]},t)))}),(0,xe.jsxs)(Pb,{children:[(0,xe.jsx)(mb,{children:"How It Works"}),(0,xe.jsx)(fb,{children:"Our unique educational approach combines creative asset development with practical listing applications to create a comprehensive learning experience."}),(0,xe.jsxs)(Eb,{children:[(0,xe.jsx)(Lb,{bgColor:"#9b59b6",children:"\ud83d\udcc2"}),(0,xe.jsxs)(Tb,{children:[(0,xe.jsx)(Ab,{children:"Directory School"}),(0,xe.jsx)(zb,{children:"In Directory School, students learn to build comprehensive directory applications using the Google Places API. These applications help users discover and navigate places of interest through intuitive interfaces and powerful search capabilities."}),(0,xe.jsxs)(Ib,{children:[(0,xe.jsx)(Db,{children:"Master the Google Places API for location-based services"}),(0,xe.jsx)(Db,{children:"Build search and discovery features for directories"}),(0,xe.jsx)(Db,{children:"Create map-based interfaces with custom markers and info windows"}),(0,xe.jsx)(Db,{children:"Implement filtering and sorting mechanisms for better user experience"})]}),(0,xe.jsx)(Cb,{to:"/schools/directory",children:"Learn More About Directory School \u2192"})]})]}),(0,xe.jsxs)(Eb,{children:[(0,xe.jsxs)(Tb,{children:[(0,xe.jsx)(Ab,{children:"Listing School"}),(0,xe.jsx)(zb,{children:"Listing School focuses on creating detailed listing applications with the Google Places API. Students learn to build platforms that connect users with businesses, services, and locations through rich, detailed listings with advanced features."}),(0,xe.jsxs)(Ib,{children:[(0,xe.jsx)(Db,{children:"Create comprehensive business and service listings"}),(0,xe.jsx)(Db,{children:"Implement reviews, ratings, and user-generated content"}),(0,xe.jsx)(Db,{children:"Build category-based browsing and advanced filtering"}),(0,xe.jsx)(Db,{children:"Develop monetization strategies for listing platforms"})]}),(0,xe.jsx)(Cb,{to:"/schools/listing",children:"Learn More About Listing School \u2192"})]}),(0,xe.jsx)(Lb,{bgColor:"#27ae60",children:"\ud83d\udccb"})]}),(0,xe.jsxs)(Eb,{children:[(0,xe.jsx)(Lb,{bgColor:"linear-gradient(135deg, #3498db 0%, #e74c3c 100%)",children:"\ud83c\udfa8"}),(0,xe.jsxs)(Tb,{children:[(0,xe.jsx)(Ab,{children:"Creative Asset Development"}),(0,xe.jsx)(zb,{children:"Complementing our directory and listing applications, students also learn to create high-quality visual assets through our creative schools. These assets enhance the user experience and make applications more engaging and professional."}),(0,xe.jsxs)(Ib,{children:[(0,xe.jsx)(Db,{children:"Develop photography, illustration, and design skills"}),(0,xe.jsx)(Db,{children:"Create branded visual elements for applications"}),(0,xe.jsx)(Db,{children:"Build interactive and animated components"}),(0,xe.jsx)(Db,{children:"Implement consistent visual language across platforms"})]}),(0,xe.jsx)(Cb,{to:"/schools",children:"Explore Creative Schools \u2192"})]})]})]}),(0,xe.jsxs)(Rb,{children:[(0,xe.jsx)(Mb,{children:"Build Your Own Project"}),(0,xe.jsx)(Ob,{children:"Ready to combine creative assets with practical listing applications? Join one of our schools and start building your own project with the support of our community and instructors."}),(0,xe.jsx)(_b,{to:"/apply",children:"Apply Now"})]})]}),Fb=ur.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${e=>"dark"===e.theme?"#121212":"#f8f9fa"};
  color: ${e=>"dark"===e.theme?"#e0e0e0":"#212529"};
  transition: all 0.3s ease;
`,Vb=ur.main`
  flex: 1;
  display: flex;
  padding-top: 70px; // For fixed navbar
`,Bb=ur.div`
  flex: 1;
  padding: 2rem;
  margin-left: ${e=>e.sidebarOpen?"250px":"0"};
  transition: margin-left 0.3s ease;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;const $b=function(){const{theme:e,sidebarOpen:t}=we();return(0,xe.jsxs)(Fb,{theme:e,children:[(0,xe.jsx)(Rr,{}),(0,xe.jsxs)(Vb,{children:[t&&(0,xe.jsx)(an,{}),(0,xe.jsx)(Bb,{sidebarOpen:t,children:(0,xe.jsxs)(ve,{children:[(0,xe.jsx)(fe,{path:"/",element:(0,xe.jsx)(Zn,{})}),(0,xe.jsx)(fe,{path:"/schools",element:(0,xe.jsx)(ki,{})}),(0,xe.jsx)(fe,{path:"/schools/:schoolId",element:(0,xe.jsx)(Qv,{})}),(0,xe.jsx)(fe,{path:"/tools",element:(0,xe.jsx)(Yi,{})}),(0,xe.jsx)(fe,{path:"/tools/:toolId",element:(0,xe.jsx)(By,{})}),(0,xe.jsx)(fe,{path:"/assets",element:(0,xe.jsx)(ja,{})}),(0,xe.jsx)(fe,{path:"/contribute",element:(0,xe.jsx)(Yp,{})}),(0,xe.jsx)(fe,{path:"/roadmap",element:(0,xe.jsx)(vh,{})}),(0,xe.jsx)(fe,{path:"/profile",element:(0,xe.jsx)(um,{})}),(0,xe.jsx)(fe,{path:"/docs/asset-protocol",element:(0,xe.jsx)(cb,{})}),(0,xe.jsx)(fe,{path:"/alumni-payments",element:(0,xe.jsx)(gx,{})}),(0,xe.jsx)(fe,{path:"/apply-to-lead",element:(0,xe.jsx)(Bx,{})}),(0,xe.jsx)(fe,{path:"/projects",element:(0,xe.jsx)(Nb,{})})]})})]}),(0,xe.jsx)(Qr,{})]})};i.createRoot(document.getElementById("root")).render((0,xe.jsx)(t.StrictMode,{children:(0,xe.jsx)(Ae,{children:(0,xe.jsx)(je,{children:(0,xe.jsx)(mr,{children:(0,xe.jsx)(Xi,{children:(0,xe.jsx)($b,{})})})})})}))})()})();
//# sourceMappingURL=main.dbed2f85.js.map