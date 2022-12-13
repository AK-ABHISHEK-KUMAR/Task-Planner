import{r as v,A as ir,j as T,F as Et,R as sr,E as cr,u as $e,c as De,B as ur,g as Ne,i as fr,a as lr,b as pr,e as dr,G as vr}from"./index.c9cd9c0a.js";import{_ as mr,f as q,b as gr,g as at,o as hr,l as xe,h as yr,d as Pt,a as wr,e as br,q as it,i as xr,u as $t}from"./useWindow.5bd5445f.js";function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Te.apply(this,arguments)}function st(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Or(e){var t=Cr(e,"string");return typeof t=="symbol"?t:String(t)}function Cr(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Dt(e,t,r){var n=v.exports.useRef(e!==void 0),o=v.exports.useState(t),a=o[0],f=o[1],c=e!==void 0,s=n.current;return n.current=c,!c&&s&&a!==t&&f(t),[c?e:a,v.exports.useCallback(function(u){for(var i=arguments.length,l=new Array(i>1?i-1:0),m=1;m<i;m++)l[m-1]=arguments[m];r&&r.apply(void 0,[u].concat(l)),f(u)},[r])]}function Er(e,t){return Object.keys(t).reduce(function(r,n){var o,a=r,f=a[st(n)],c=a[n],s=mr(a,[st(n),n].map(Or)),u=t[n],i=Dt(c,f,e[u]),l=i[0],m=i[1];return Te({},s,(o={},o[n]=l,o[u]=m,o))},e)}function Pr(e,t,r,n){n===void 0&&(n=!1);var o=q(r);v.exports.useEffect(function(){var a=typeof e=="function"?e():e;return a.addEventListener(t,o,n),function(){return a.removeEventListener(t,o,n)}},[e])}var $r=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Dr=typeof document<"u";const Ar=Dr||$r?v.exports.useLayoutEffect:v.exports.useEffect,Rr=["onKeyDown"];function jr(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function kr(e){return!e||e.trim()==="#"}const At=v.exports.forwardRef((e,t)=>{let{onKeyDown:r}=e,n=jr(e,Rr);const[o]=ir(Object.assign({tagName:"a"},n)),a=q(f=>{o.onKeyDown(f),r==null||r(f)});return kr(n.href)||n.role==="button"?T("a",Object.assign({ref:t},n,o,{onKeyDown:a})):T("a",Object.assign({ref:t},n,{onKeyDown:r}))});At.displayName="Anchor";function Sr(){var e=v.exports.useReducer(function(r){return!r},!1),t=e[1];return t}const Ae=v.exports.createContext(null);var ct=Object.prototype.hasOwnProperty;function ut(e,t,r){for(r of e.keys())if(fe(r,t))return r}function fe(e,t){var r,n,o;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&fe(e[n],t[n]););return n===-1}if(r===Set){if(e.size!==t.size)return!1;for(n of e)if(o=n,o&&typeof o=="object"&&(o=ut(t,o),!o)||!t.has(o))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e)if(o=n[0],o&&typeof o=="object"&&(o=ut(t,o),!o)||!fe(n[1],t.get(o)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return n===-1}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return n===-1}if(!r||typeof e=="object"){n=0;for(r in e)if(ct.call(e,r)&&++n&&!ct.call(t,r)||!(r in t)||!fe(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!==e&&t!==t}function Mr(e){var t=gr();return[e[0],v.exports.useCallback(function(r){if(!!t())return e[1](r)},[t,e[1]])]}var B="top",W="bottom",H="right",I="left",We="auto",me=[B,W,H,I],re="start",de="end",Tr="clippingParents",Rt="viewport",ue="popper",Lr="reference",ft=me.reduce(function(e,t){return e.concat([t+"-"+re,t+"-"+de])},[]),jt=[].concat(me,[We]).reduce(function(e,t){return e.concat([t,t+"-"+re,t+"-"+de])},[]),Br="beforeRead",Ir="read",Nr="afterRead",Wr="beforeMain",Hr="main",Fr="afterMain",Kr="beforeWrite",Ur="write",Vr="afterWrite",qr=[Br,Ir,Nr,Wr,Hr,Fr,Kr,Ur,Vr];function U(e){return e.split("-")[0]}function F(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Z(e){var t=F(e).Element;return e instanceof t||e instanceof Element}function V(e){var t=F(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function He(e){if(typeof ShadowRoot>"u")return!1;var t=F(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var Q=Math.max,Pe=Math.min,ne=Math.round;function Le(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function kt(){return!/^((?!chrome|android).)*safari/i.test(Le())}function oe(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&V(e)&&(o=e.offsetWidth>0&&ne(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&ne(n.height)/e.offsetHeight||1);var f=Z(e)?F(e):window,c=f.visualViewport,s=!kt()&&r,u=(n.left+(s&&c?c.offsetLeft:0))/o,i=(n.top+(s&&c?c.offsetTop:0))/a,l=n.width/o,m=n.height/a;return{width:l,height:m,top:i,right:u+l,bottom:i+m,left:u,x:u,y:i}}function Fe(e){var t=oe(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function St(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&He(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Y(e){return e?(e.nodeName||"").toLowerCase():null}function z(e){return F(e).getComputedStyle(e)}function zr(e){return["table","td","th"].indexOf(Y(e))>=0}function _(e){return((Z(e)?e.ownerDocument:e.document)||window.document).documentElement}function Re(e){return Y(e)==="html"?e:e.assignedSlot||e.parentNode||(He(e)?e.host:null)||_(e)}function lt(e){return!V(e)||z(e).position==="fixed"?null:e.offsetParent}function Xr(e){var t=/firefox/i.test(Le()),r=/Trident/i.test(Le());if(r&&V(e)){var n=z(e);if(n.position==="fixed")return null}var o=Re(e);for(He(o)&&(o=o.host);V(o)&&["html","body"].indexOf(Y(o))<0;){var a=z(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function ge(e){for(var t=F(e),r=lt(e);r&&zr(r)&&z(r).position==="static";)r=lt(r);return r&&(Y(r)==="html"||Y(r)==="body"&&z(r).position==="static")?t:r||Xr(e)||t}function Ke(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function le(e,t,r){return Q(e,Pe(t,r))}function Yr(e,t,r){var n=le(e,t,r);return n>r?r:n}function Mt(){return{top:0,right:0,bottom:0,left:0}}function Tt(e){return Object.assign({},Mt(),e)}function Lt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var _r=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Tt(typeof t!="number"?t:Lt(t,me))};function Gr(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,f=r.modifiersData.popperOffsets,c=U(r.placement),s=Ke(c),u=[I,H].indexOf(c)>=0,i=u?"height":"width";if(!(!a||!f)){var l=_r(o.padding,r),m=Fe(a),p=s==="y"?B:I,g=s==="y"?W:H,h=r.rects.reference[i]+r.rects.reference[s]-f[s]-r.rects.popper[i],d=f[s]-r.rects.reference[s],C=ge(a),P=C?s==="y"?C.clientHeight||0:C.clientWidth||0:0,b=h/2-d/2,y=l[p],w=P-m[i]-l[g],x=P/2-m[i]/2+b,E=le(y,x,w),A=s;r.modifiersData[n]=(t={},t[A]=E,t.centerOffset=E-x,t)}}function Jr(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||!St(t.elements.popper,o)||(t.elements.arrow=o))}const Qr={name:"arrow",enabled:!0,phase:"main",fn:Gr,effect:Jr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ae(e){return e.split("-")[1]}var Zr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function en(e){var t=e.x,r=e.y,n=window,o=n.devicePixelRatio||1;return{x:ne(t*o)/o||0,y:ne(r*o)/o||0}}function pt(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,f=e.offsets,c=e.position,s=e.gpuAcceleration,u=e.adaptive,i=e.roundOffsets,l=e.isFixed,m=f.x,p=m===void 0?0:m,g=f.y,h=g===void 0?0:g,d=typeof i=="function"?i({x:p,y:h}):{x:p,y:h};p=d.x,h=d.y;var C=f.hasOwnProperty("x"),P=f.hasOwnProperty("y"),b=I,y=B,w=window;if(u){var x=ge(r),E="clientHeight",A="clientWidth";if(x===F(r)&&(x=_(r),z(x).position!=="static"&&c==="absolute"&&(E="scrollHeight",A="scrollWidth")),x=x,o===B||(o===I||o===H)&&a===de){y=W;var j=l&&x===w&&w.visualViewport?w.visualViewport.height:x[E];h-=j-n.height,h*=s?1:-1}if(o===I||(o===B||o===W)&&a===de){b=H;var R=l&&x===w&&w.visualViewport?w.visualViewport.width:x[A];p-=R-n.width,p*=s?1:-1}}var O=Object.assign({position:c},u&&Zr),$=i===!0?en({x:p,y:h}):{x:p,y:h};if(p=$.x,h=$.y,s){var D;return Object.assign({},O,(D={},D[y]=P?"0":"",D[b]=C?"0":"",D.transform=(w.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",D))}return Object.assign({},O,(t={},t[y]=P?h+"px":"",t[b]=C?p+"px":"",t.transform="",t))}function tn(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,f=a===void 0?!0:a,c=r.roundOffsets,s=c===void 0?!0:c,u={placement:U(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,pt(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,pt(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const rn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:tn,data:{}};var Oe={passive:!0};function nn(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,f=n.resize,c=f===void 0?!0:f,s=F(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach(function(i){i.addEventListener("scroll",r.update,Oe)}),c&&s.addEventListener("resize",r.update,Oe),function(){a&&u.forEach(function(i){i.removeEventListener("scroll",r.update,Oe)}),c&&s.removeEventListener("resize",r.update,Oe)}}const on={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:nn,data:{}};var an={left:"right",right:"left",bottom:"top",top:"bottom"};function Ee(e){return e.replace(/left|right|bottom|top/g,function(t){return an[t]})}var sn={start:"end",end:"start"};function dt(e){return e.replace(/start|end/g,function(t){return sn[t]})}function Ue(e){var t=F(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ve(e){return oe(_(e)).left+Ue(e).scrollLeft}function cn(e,t){var r=F(e),n=_(e),o=r.visualViewport,a=n.clientWidth,f=n.clientHeight,c=0,s=0;if(o){a=o.width,f=o.height;var u=kt();(u||!u&&t==="fixed")&&(c=o.offsetLeft,s=o.offsetTop)}return{width:a,height:f,x:c+Ve(e),y:s}}function un(e){var t,r=_(e),n=Ue(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=Q(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=Q(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-n.scrollLeft+Ve(e),s=-n.scrollTop;return z(o||r).direction==="rtl"&&(c+=Q(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:f,x:c,y:s}}function qe(e){var t=z(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Bt(e){return["html","body","#document"].indexOf(Y(e))>=0?e.ownerDocument.body:V(e)&&qe(e)?e:Bt(Re(e))}function pe(e,t){var r;t===void 0&&(t=[]);var n=Bt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=F(n),f=o?[a].concat(a.visualViewport||[],qe(n)?n:[]):n,c=t.concat(f);return o?c:c.concat(pe(Re(f)))}function Be(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function fn(e,t){var r=oe(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function vt(e,t,r){return t===Rt?Be(cn(e,r)):Z(t)?fn(t,r):Be(un(_(e)))}function ln(e){var t=pe(Re(e)),r=["absolute","fixed"].indexOf(z(e).position)>=0,n=r&&V(e)?ge(e):e;return Z(n)?t.filter(function(o){return Z(o)&&St(o,n)&&Y(o)!=="body"}):[]}function pn(e,t,r,n){var o=t==="clippingParents"?ln(e):[].concat(t),a=[].concat(o,[r]),f=a[0],c=a.reduce(function(s,u){var i=vt(e,u,n);return s.top=Q(i.top,s.top),s.right=Pe(i.right,s.right),s.bottom=Pe(i.bottom,s.bottom),s.left=Q(i.left,s.left),s},vt(e,f,n));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function It(e){var t=e.reference,r=e.element,n=e.placement,o=n?U(n):null,a=n?ae(n):null,f=t.x+t.width/2-r.width/2,c=t.y+t.height/2-r.height/2,s;switch(o){case B:s={x:f,y:t.y-r.height};break;case W:s={x:f,y:t.y+t.height};break;case H:s={x:t.x+t.width,y:c};break;case I:s={x:t.x-r.width,y:c};break;default:s={x:t.x,y:t.y}}var u=o?Ke(o):null;if(u!=null){var i=u==="y"?"height":"width";switch(a){case re:s[u]=s[u]-(t[i]/2-r[i]/2);break;case de:s[u]=s[u]+(t[i]/2-r[i]/2);break}}return s}function ve(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,f=a===void 0?e.strategy:a,c=r.boundary,s=c===void 0?Tr:c,u=r.rootBoundary,i=u===void 0?Rt:u,l=r.elementContext,m=l===void 0?ue:l,p=r.altBoundary,g=p===void 0?!1:p,h=r.padding,d=h===void 0?0:h,C=Tt(typeof d!="number"?d:Lt(d,me)),P=m===ue?Lr:ue,b=e.rects.popper,y=e.elements[g?P:m],w=pn(Z(y)?y:y.contextElement||_(e.elements.popper),s,i,f),x=oe(e.elements.reference),E=It({reference:x,element:b,strategy:"absolute",placement:o}),A=Be(Object.assign({},b,E)),j=m===ue?A:x,R={top:w.top-j.top+C.top,bottom:j.bottom-w.bottom+C.bottom,left:w.left-j.left+C.left,right:j.right-w.right+C.right},O=e.modifiersData.offset;if(m===ue&&O){var $=O[o];Object.keys(R).forEach(function(D){var k=[H,W].indexOf(D)>=0?1:-1,L=[B,W].indexOf(D)>=0?"y":"x";R[D]+=$[L]*k})}return R}function dn(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,f=r.padding,c=r.flipVariations,s=r.allowedAutoPlacements,u=s===void 0?jt:s,i=ae(n),l=i?c?ft:ft.filter(function(g){return ae(g)===i}):me,m=l.filter(function(g){return u.indexOf(g)>=0});m.length===0&&(m=l);var p=m.reduce(function(g,h){return g[h]=ve(e,{placement:h,boundary:o,rootBoundary:a,padding:f})[U(h)],g},{});return Object.keys(p).sort(function(g,h){return p[g]-p[h]})}function vn(e){if(U(e)===We)return[];var t=Ee(e);return[dt(e),t,dt(t)]}function mn(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,c=f===void 0?!0:f,s=r.fallbackPlacements,u=r.padding,i=r.boundary,l=r.rootBoundary,m=r.altBoundary,p=r.flipVariations,g=p===void 0?!0:p,h=r.allowedAutoPlacements,d=t.options.placement,C=U(d),P=C===d,b=s||(P||!g?[Ee(d)]:vn(d)),y=[d].concat(b).reduce(function(te,X){return te.concat(U(X)===We?dn(t,{placement:X,boundary:i,rootBoundary:l,padding:u,flipVariations:g,allowedAutoPlacements:h}):X)},[]),w=t.rects.reference,x=t.rects.popper,E=new Map,A=!0,j=y[0],R=0;R<y.length;R++){var O=y[R],$=U(O),D=ae(O)===re,k=[B,W].indexOf($)>=0,L=k?"width":"height",S=ve(t,{placement:O,boundary:i,rootBoundary:l,altBoundary:m,padding:u}),N=k?D?H:I:D?W:B;w[L]>x[L]&&(N=Ee(N));var ie=Ee(N),K=[];if(a&&K.push(S[$]<=0),c&&K.push(S[N]<=0,S[ie]<=0),K.every(function(te){return te})){j=O,A=!1;break}E.set(O,K)}if(A)for(var M=g?3:1,ee=function(X){var ce=y.find(function(we){var G=E.get(we);if(G)return G.slice(0,X).every(function(je){return je})});if(ce)return j=ce,"break"},se=M;se>0;se--){var ye=ee(se);if(ye==="break")break}t.placement!==j&&(t.modifiersData[n]._skip=!0,t.placement=j,t.reset=!0)}}const gn={name:"flip",enabled:!0,phase:"main",fn:mn,requiresIfExists:["offset"],data:{_skip:!1}};function mt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function gt(e){return[B,H,W,I].some(function(t){return e[t]>=0})}function hn(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,f=ve(t,{elementContext:"reference"}),c=ve(t,{altBoundary:!0}),s=mt(f,n),u=mt(c,o,a),i=gt(s),l=gt(u);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:i,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":i,"data-popper-escaped":l})}const yn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:hn};function wn(e,t,r){var n=U(e),o=[I,B].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=a[0],c=a[1];return f=f||0,c=(c||0)*o,[I,H].indexOf(n)>=0?{x:c,y:f}:{x:f,y:c}}function bn(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,f=jt.reduce(function(i,l){return i[l]=wn(l,t.rects,a),i},{}),c=f[t.placement],s=c.x,u=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=f}const xn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:bn};function On(e){var t=e.state,r=e.name;t.modifiersData[r]=It({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Cn={name:"popperOffsets",enabled:!0,phase:"read",fn:On,data:{}};function En(e){return e==="x"?"y":"x"}function Pn(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,c=f===void 0?!1:f,s=r.boundary,u=r.rootBoundary,i=r.altBoundary,l=r.padding,m=r.tether,p=m===void 0?!0:m,g=r.tetherOffset,h=g===void 0?0:g,d=ve(t,{boundary:s,rootBoundary:u,padding:l,altBoundary:i}),C=U(t.placement),P=ae(t.placement),b=!P,y=Ke(C),w=En(y),x=t.modifiersData.popperOffsets,E=t.rects.reference,A=t.rects.popper,j=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,R=typeof j=="number"?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),O=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,$={x:0,y:0};if(!!x){if(a){var D,k=y==="y"?B:I,L=y==="y"?W:H,S=y==="y"?"height":"width",N=x[y],ie=N+d[k],K=N-d[L],M=p?-A[S]/2:0,ee=P===re?E[S]:A[S],se=P===re?-A[S]:-E[S],ye=t.elements.arrow,te=p&&ye?Fe(ye):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Mt(),ce=X[k],we=X[L],G=le(0,E[S],te[S]),je=b?E[S]/2-M-G-ce-R.mainAxis:ee-G-ce-R.mainAxis,er=b?-E[S]/2+M+G+we+R.mainAxis:se+G+we+R.mainAxis,ke=t.elements.arrow&&ge(t.elements.arrow),tr=ke?y==="y"?ke.clientTop||0:ke.clientLeft||0:0,Ge=(D=O==null?void 0:O[y])!=null?D:0,rr=N+je-Ge-tr,nr=N+er-Ge,Je=le(p?Pe(ie,rr):ie,N,p?Q(K,nr):K);x[y]=Je,$[y]=Je-N}if(c){var Qe,or=y==="x"?B:I,ar=y==="x"?W:H,J=x[w],be=w==="y"?"height":"width",Ze=J+d[or],et=J-d[ar],Se=[B,I].indexOf(C)!==-1,tt=(Qe=O==null?void 0:O[w])!=null?Qe:0,rt=Se?Ze:J-E[be]-A[be]-tt+R.altAxis,nt=Se?J+E[be]+A[be]-tt-R.altAxis:et,ot=p&&Se?Yr(rt,J,nt):le(p?rt:Ze,J,p?nt:et);x[w]=ot,$[w]=ot-J}t.modifiersData[n]=$}}const $n={name:"preventOverflow",enabled:!0,phase:"main",fn:Pn,requiresIfExists:["offset"]};function Dn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function An(e){return e===F(e)||!V(e)?Ue(e):Dn(e)}function Rn(e){var t=e.getBoundingClientRect(),r=ne(t.width)/e.offsetWidth||1,n=ne(t.height)/e.offsetHeight||1;return r!==1||n!==1}function jn(e,t,r){r===void 0&&(r=!1);var n=V(t),o=V(t)&&Rn(t),a=_(t),f=oe(e,o,r),c={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((Y(t)!=="body"||qe(a))&&(c=An(t)),V(t)?(s=oe(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=Ve(a))),{x:f.left+c.scrollLeft-s.x,y:f.top+c.scrollTop-s.y,width:f.width,height:f.height}}function kn(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var f=[].concat(a.requires||[],a.requiresIfExists||[]);f.forEach(function(c){if(!r.has(c)){var s=t.get(c);s&&o(s)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function Sn(e){var t=kn(e);return qr.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Mn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Tn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var ht={placement:"bottom",modifiers:[],strategy:"absolute"};function yt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Ln(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?ht:o;return function(c,s,u){u===void 0&&(u=a);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},ht,a),modifiersData:{},elements:{reference:c,popper:s},attributes:{},styles:{}},l=[],m=!1,p={state:i,setOptions:function(C){var P=typeof C=="function"?C(i.options):C;h(),i.options=Object.assign({},a,i.options,P),i.scrollParents={reference:Z(c)?pe(c):c.contextElement?pe(c.contextElement):[],popper:pe(s)};var b=Sn(Tn([].concat(n,i.options.modifiers)));return i.orderedModifiers=b.filter(function(y){return y.enabled}),g(),p.update()},forceUpdate:function(){if(!m){var C=i.elements,P=C.reference,b=C.popper;if(!!yt(P,b)){i.rects={reference:jn(P,ge(b),i.options.strategy==="fixed"),popper:Fe(b)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(R){return i.modifiersData[R.name]=Object.assign({},R.data)});for(var y=0;y<i.orderedModifiers.length;y++){if(i.reset===!0){i.reset=!1,y=-1;continue}var w=i.orderedModifiers[y],x=w.fn,E=w.options,A=E===void 0?{}:E,j=w.name;typeof x=="function"&&(i=x({state:i,options:A,name:j,instance:p})||i)}}}},update:Mn(function(){return new Promise(function(d){p.forceUpdate(),d(i)})}),destroy:function(){h(),m=!0}};if(!yt(c,s))return p;p.setOptions(u).then(function(d){!m&&u.onFirstUpdate&&u.onFirstUpdate(d)});function g(){i.orderedModifiers.forEach(function(d){var C=d.name,P=d.options,b=P===void 0?{}:P,y=d.effect;if(typeof y=="function"){var w=y({state:i,name:C,instance:p,options:b}),x=function(){};l.push(w||x)}})}function h(){l.forEach(function(d){return d()}),l=[]}return p}}const Bn=Ln({defaultModifiers:[yn,Cn,rn,on,xn,gn,$n,Qr]}),In=["enabled","placement","strategy","modifiers"];function Nn(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const Wn={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Hn={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:r}=e.elements;if("removeAttribute"in t){const n=(t.getAttribute("aria-describedby")||"").split(",").filter(o=>o.trim()!==r.id);n.length?t.setAttribute("aria-describedby",n.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:r,reference:n}=e.elements,o=(t=r.getAttribute("role"))==null?void 0:t.toLowerCase();if(r.id&&o==="tooltip"&&"setAttribute"in n){const a=n.getAttribute("aria-describedby");if(a&&a.split(",").indexOf(r.id)!==-1)return;n.setAttribute("aria-describedby",a?`${a},${r.id}`:r.id)}}},Fn=[];function Kn(e,t,r={}){let{enabled:n=!0,placement:o="bottom",strategy:a="absolute",modifiers:f=Fn}=r,c=Nn(r,In);const s=v.exports.useRef(f),u=v.exports.useRef(),i=v.exports.useCallback(()=>{var d;(d=u.current)==null||d.update()},[]),l=v.exports.useCallback(()=>{var d;(d=u.current)==null||d.forceUpdate()},[]),[m,p]=Mr(v.exports.useState({placement:o,update:i,forceUpdate:l,attributes:{},styles:{popper:{},arrow:{}}})),g=v.exports.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:d})=>{const C={},P={};Object.keys(d.elements).forEach(b=>{C[b]=d.styles[b],P[b]=d.attributes[b]}),p({state:d,styles:C,attributes:P,update:i,forceUpdate:l,placement:d.placement})}}),[i,l,p]),h=v.exports.useMemo(()=>(fe(s.current,f)||(s.current=f),s.current),[f]);return v.exports.useEffect(()=>{!u.current||!n||u.current.setOptions({placement:o,strategy:a,modifiers:[...h,g,Wn]})},[a,o,g,n,h]),v.exports.useEffect(()=>{if(!(!n||e==null||t==null))return u.current=Bn(e,t,Object.assign({},c,{placement:o,strategy:a,modifiers:[...h,Hn,g]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,p(d=>Object.assign({},d,{attributes:{},styles:{popper:{}}})))}},[n,e,t]),m}const wt=()=>{};function Un(e){return e.button===0}function Vn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Me=e=>e&&("current"in e?e.current:e),bt={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function qn(e,t=wt,{disabled:r,clickTrigger:n="click"}={}){const o=v.exports.useRef(!1),a=v.exports.useRef(!1),f=v.exports.useCallback(u=>{const i=Me(e);o.current=!i||Vn(u)||!Un(u)||!!at(i,u.target)||a.current,a.current=!1},[e]),c=q(u=>{const i=Me(e);i&&at(i,u.target)&&(a.current=!0)}),s=q(u=>{o.current||t(u)});v.exports.useEffect(()=>{if(r||e==null)return;const u=hr(Me(e));let i=(u.defaultView||window).event,l=null;bt[n]&&(l=xe(u,bt[n],c,!0));const m=xe(u,n,f,!0),p=xe(u,n,h=>{if(h===i){i=void 0;return}s(h)});let g=[];return"ontouchstart"in u.documentElement&&(g=[].slice.call(u.body.children).map(h=>xe(h,"mousemove",wt))),()=>{l==null||l(),m(),p(),g.forEach(h=>h())}},[e,r,n,f,c,s])}function zn(e){const t={};return Array.isArray(e)?(e==null||e.forEach(r=>{t[r.name]=r}),t):e||t}function Xn(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function Yn({enabled:e,enableEvents:t,placement:r,flip:n,offset:o,fixed:a,containerPadding:f,arrowElement:c,popperConfig:s={}}){var u,i,l,m,p;const g=zn(s.modifiers);return Object.assign({},s,{placement:r,enabled:e,strategy:a?"fixed":s.strategy,modifiers:Xn(Object.assign({},g,{eventListeners:{enabled:t,options:(u=g.eventListeners)==null?void 0:u.options},preventOverflow:Object.assign({},g.preventOverflow,{options:f?Object.assign({padding:f},(i=g.preventOverflow)==null?void 0:i.options):(l=g.preventOverflow)==null?void 0:l.options}),offset:{options:Object.assign({offset:o},(m=g.offset)==null?void 0:m.options)},arrow:Object.assign({},g.arrow,{enabled:!!c,options:Object.assign({},(p=g.arrow)==null?void 0:p.options,{element:c})}),flip:Object.assign({enabled:!!n},g.flip)}))})}const _n=["children"];function Gn(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const Jn=()=>{};function Nt(e={}){const t=v.exports.useContext(Ae),[r,n]=yr(),o=v.exports.useRef(!1),{flip:a,offset:f,rootCloseEvent:c,fixed:s=!1,placement:u,popperConfig:i={},enableEventListeners:l=!0,usePopper:m=!!t}=e,p=(t==null?void 0:t.show)==null?!!e.show:t.show;p&&!o.current&&(o.current=!0);const g=x=>{t==null||t.toggle(!1,x)},{placement:h,setMenu:d,menuElement:C,toggleElement:P}=t||{},b=Kn(P,C,Yn({placement:u||h||"bottom-start",enabled:m,enableEvents:l==null?p:l,offset:f,flip:a,fixed:s,arrowElement:r,popperConfig:i})),y=Object.assign({ref:d||Jn,"aria-labelledby":P==null?void 0:P.id},b.attributes.popper,{style:b.styles.popper}),w={show:p,placement:h,hasShown:o.current,toggle:t==null?void 0:t.toggle,popper:m?b:null,arrowProps:m?Object.assign({ref:n},b.attributes.arrow,{style:b.styles.arrow}):{}};return qn(C,g,{clickTrigger:c,disabled:!p}),[y,w]}const Qn={usePopper:!0};function ze(e){let{children:t}=e,r=Gn(e,_n);const[n,o]=Nt(r);return T(Et,{children:t(n,o)})}ze.displayName="DropdownMenu";ze.defaultProps=Qn;const Wt={prefix:String(Math.round(Math.random()*1e10)),current:0},Zn=sr.createContext(Wt);let eo=Boolean(typeof window<"u"&&window.document&&window.document.createElement);function to(e){let t=v.exports.useContext(Zn);return t===Wt&&!eo&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),v.exports.useMemo(()=>e||`react-aria${t.prefix}-${++t.current}`,[e])}const Ht=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},xt=()=>{};function Ft(){const e=to(),{show:t=!1,toggle:r=xt,setToggle:n,menuElement:o}=v.exports.useContext(Ae)||{},a=v.exports.useCallback(c=>{r(!t,c)},[t,r]),f={id:e,ref:n||xt,onClick:a,"aria-expanded":!!t};return o&&Ht(o)&&(f["aria-haspopup"]=!0),[f,{show:t,toggle:r}]}function Kt({children:e}){const[t,r]=Ft();return T(Et,{children:e(t,r)})}Kt.displayName="DropdownToggle";const Ie=v.exports.createContext(null),Ot=(e,t=null)=>e!=null?String(e):t||null,Ut=v.exports.createContext(null);Ut.displayName="NavContext";const ro=["eventKey","disabled","onClick","active","as"];function no(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Vt({key:e,href:t,active:r,disabled:n,onClick:o}){const a=v.exports.useContext(Ie),f=v.exports.useContext(Ut),{activeKey:c}=f||{},s=Ot(e,t),u=r==null&&e!=null?Ot(c)===s:r;return[{onClick:q(l=>{n||(o==null||o(l),a&&!l.isPropagationStopped()&&a(s,l))}),"aria-disabled":n||void 0,"aria-selected":u,[Pt("dropdown-item")]:""},{isActive:u}]}const qt=v.exports.forwardRef((e,t)=>{let{eventKey:r,disabled:n,onClick:o,active:a,as:f=cr}=e,c=no(e,ro);const[s]=Vt({key:r,href:c.href,disabled:n,onClick:o,active:a});return T(f,Object.assign({},c,{ref:t},s))});qt.displayName="DropdownItem";function Ct(){const e=Sr(),t=v.exports.useRef(null),r=v.exports.useCallback(n=>{t.current=n,e()},[e]);return[t,r]}function he({defaultShow:e,show:t,onSelect:r,onToggle:n,itemSelector:o=`* [${Pt("dropdown-item")}]`,focusFirstItemOnShow:a,placement:f="bottom-start",children:c}){const s=wr(),[u,i]=Dt(t,e,n),[l,m]=Ct(),p=l.current,[g,h]=Ct(),d=g.current,C=br(u),P=v.exports.useRef(null),b=v.exports.useRef(!1),y=v.exports.useContext(Ie),w=v.exports.useCallback((O,$,D=$==null?void 0:$.type)=>{i(O,{originalEvent:$,source:D})},[i]),x=q((O,$)=>{r==null||r(O,$),w(!1,$,"select"),$.isPropagationStopped()||y==null||y(O,$)}),E=v.exports.useMemo(()=>({toggle:w,placement:f,show:u,menuElement:p,toggleElement:d,setMenu:m,setToggle:h}),[w,f,u,p,d,m,h]);p&&C&&!u&&(b.current=p.contains(p.ownerDocument.activeElement));const A=q(()=>{d&&d.focus&&d.focus()}),j=q(()=>{const O=P.current;let $=a;if($==null&&($=l.current&&Ht(l.current)?"keyboard":!1),$===!1||$==="keyboard"&&!/^key.+$/.test(O))return;const D=it(l.current,o)[0];D&&D.focus&&D.focus()});v.exports.useEffect(()=>{u?j():b.current&&(b.current=!1,A())},[u,b,A,j]),v.exports.useEffect(()=>{P.current=null});const R=(O,$)=>{if(!l.current)return null;const D=it(l.current,o);let k=D.indexOf(O)+$;return k=Math.max(0,Math.min(k,D.length)),D[k]};return Pr(v.exports.useCallback(()=>s.document,[s]),"keydown",O=>{var $,D;const{key:k}=O,L=O.target,S=($=l.current)==null?void 0:$.contains(L),N=(D=g.current)==null?void 0:D.contains(L);if(/input|textarea/i.test(L.tagName)&&(k===" "||k!=="Escape"&&S||k==="Escape"&&L.type==="search")||!S&&!N||k==="Tab"&&(!l.current||!u))return;P.current=O.type;const K={originalEvent:O,source:O.type};switch(k){case"ArrowUp":{const M=R(L,-1);M&&M.focus&&M.focus(),O.preventDefault();return}case"ArrowDown":if(O.preventDefault(),!u)i(!0,K);else{const M=R(L,1);M&&M.focus&&M.focus()}return;case"Tab":xr(L.ownerDocument,"keyup",M=>{var ee;(M.key==="Tab"&&!M.target||!((ee=l.current)!=null&&ee.contains(M.target)))&&i(!1,K)},{once:!0});break;case"Escape":k==="Escape"&&(O.preventDefault(),O.stopPropagation()),i(!1,K);break}}),T(Ie.Provider,{value:x,children:T(Ae.Provider,{value:E,children:c})})}he.displayName="Dropdown";he.Menu=ze;he.Toggle=Kt;he.Item=qt;const zt=v.exports.createContext({});zt.displayName="DropdownContext";const Xt=zt,Yt=v.exports.forwardRef(({bsPrefix:e,className:t,eventKey:r,disabled:n=!1,onClick:o,active:a,as:f=At,...c},s)=>{const u=$e(e,"dropdown-item"),[i,l]=Vt({key:r,href:c.href,disabled:n,onClick:o,active:a});return T(f,{...c,...i,ref:s,className:De(t,u,l.isActive&&"active",n&&"disabled")})});Yt.displayName="DropdownItem";const oo=Yt,_t=v.exports.createContext(null);_t.displayName="InputGroupContext";const Xe=_t,Gt=v.exports.createContext(null);Gt.displayName="NavbarContext";const ao=Gt;function Jt(e,t){return e}const io={flip:!0};function Qt(e,t,r){const n=r?"top-end":"top-start",o=r?"top-start":"top-end",a=r?"bottom-end":"bottom-start",f=r?"bottom-start":"bottom-end",c=r?"right-start":"left-start",s=r?"right-end":"left-end",u=r?"left-start":"right-start",i=r?"left-end":"right-end";let l=e?f:a;return t==="up"?l=e?o:n:t==="end"?l=e?i:u:t==="start"&&(l=e?s:c),l}const Ye=v.exports.forwardRef(({bsPrefix:e,className:t,align:r,rootCloseEvent:n,flip:o,show:a,renderOnMount:f,as:c="div",popperConfig:s,variant:u,...i},l)=>{let m=!1;const p=v.exports.useContext(ao),g=$e(e,"dropdown-menu"),{align:h,drop:d,isRTL:C}=v.exports.useContext(Xt);r=r||h;const P=v.exports.useContext(Xe),b=[];if(r)if(typeof r=="object"){const O=Object.keys(r);if(O.length){const $=O[0],D=r[$];m=D==="start",b.push(`${g}-${$}-${D}`)}}else r==="end"&&(m=!0);const y=Qt(m,d,C),[w,{hasShown:x,popper:E,show:A,toggle:j}]=Nt({flip:o,rootCloseEvent:n,show:a,usePopper:!p&&b.length===0,offset:[0,2],popperConfig:s,placement:y});if(w.ref=$t(Jt(l),w.ref),Ar(()=>{A&&(E==null||E.update())},[A]),!x&&!f&&!P)return null;typeof c!="string"&&(w.show=A,w.close=()=>j==null?void 0:j(!1),w.align=r);let R=i.style;return E!=null&&E.placement&&(R={...i.style,...w.style},i["x-placement"]=E.placement),T(c,{...i,...w,style:R,...(b.length||p)&&{"data-bs-popper":"static"},className:De(t,g,A&&"show",m&&`${g}-end`,u&&`${g}-${u}`,...b)})});Ye.displayName="DropdownMenu";Ye.defaultProps=io;const so=Ye,Zt=v.exports.forwardRef(({bsPrefix:e,split:t,className:r,childBsPrefix:n,as:o=ur,...a},f)=>{const c=$e(e,"dropdown-toggle"),s=v.exports.useContext(Ae),u=v.exports.useContext(Xe);n!==void 0&&(a.bsPrefix=n);const[i]=Ft();return i.ref=$t(i.ref,Jt(f)),T(o,{className:De(r,c,t&&`${c}-split`,!!u&&(s==null?void 0:s.show)&&"show"),...i,...a})});Zt.displayName="DropdownToggle";const co=Zt,uo=Ne("dropdown-header",{defaultProps:{role:"heading"}}),fo=Ne("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),lo=Ne("dropdown-item-text",{Component:"span"}),po={navbar:!1,align:"start",autoClose:!0},_e=v.exports.forwardRef((e,t)=>{const{bsPrefix:r,drop:n,show:o,className:a,align:f,onSelect:c,onToggle:s,focusFirstItemOnShow:u,as:i="div",navbar:l,autoClose:m,...p}=Er(e,{show:"onToggle"}),g=v.exports.useContext(Xe),h=$e(r,"dropdown"),d=fr(),C=x=>m===!1?x==="click":m==="inside"?x!=="rootClose":m==="outside"?x!=="select":!0,P=q((x,E)=>{E.originalEvent.currentTarget===document&&(E.source!=="keydown"||E.originalEvent.key==="Escape")&&(E.source="rootClose"),C(E.source)&&(s==null||s(x,E))}),y=Qt(f==="end",n,d),w=v.exports.useMemo(()=>({align:f,drop:n,isRTL:d}),[f,n,d]);return T(Xt.Provider,{value:w,children:T(he,{placement:y,show:o,onSelect:c,onToggle:P,focusFirstItemOnShow:u,itemSelector:`.${h}-item:not(.disabled):not(:disabled)`,children:g?p.children:T(i,{...p,ref:t,className:De(a,o&&"show",(!n||n==="down")&&h,n==="up"&&"dropup",n==="end"&&"dropend",n==="start"&&"dropstart")})})})});_e.displayName="Dropdown";_e.defaultProps=po;const Ce=Object.assign(_e,{Toggle:co,Menu:so,Item:oo,ItemText:lo,Divider:fo,Header:uo});function go(){const e=lr(r=>r.ui.showTask),t=pr();return dr(Ce,{onSelect:()=>t(vr()),children:[T(Ce.Toggle,{style:{color:"purple",textShadow:"1px 1px whitesmoke",fontFamily:"Alfa Slab One, cursive",fontSize:25},variant:"outline",id:"dropdown-basic",children:e?"Completed Task":"Pending Task"}),T(Ce.Menu,{style:{backgroundColor:"plum","--bs-dropdown-link-hover-bg":"#c393d8"},children:T(Ce.Item,{eventKey:1,children:e?"Pending Task":"Completed Task"})})]})}export{go as default};
