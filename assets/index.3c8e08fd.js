import{c as Ie,e as Y}from"./components.0836e209.js";import{d as xe,t as re}from"./elements.35d8dfd2.js";import{u as qe}from"./zIndex.ff304851.js";import{d as Ge,a as ue,w as H,o as Ze,u as Je,_ as Ke,f as Me,h as Qe,O as ke,i as _e,q as et,S as tt,D as rt,E as nt,M as ot,R as at,N as Ee,aj as it,G as st,T as ft}from"./vue-router.esm-bundler.124ec336.js";var lt={left:"right",right:"left",bottom:"top",top:"bottom"};function oe(e){return e.replace(/left|right|bottom|top/g,function(t){return lt[t]})}var A="top",T="bottom",V="right",R="left",ve="auto",ae=[A,T,V,R],ie="start",Z="end",ut="clippingParents",Re="viewport",I="popper",ct="reference",Ce=ae.reduce(function(e,t){return e.concat([t+"-"+ie,t+"-"+Z])},[]),De=[].concat(ae,[ve]).reduce(function(e,t){return e.concat([t,t+"-"+ie,t+"-"+Z])},[]),dt="beforeRead",pt="read",vt="afterRead",ht="beforeMain",gt="main",mt="afterMain",yt="beforeWrite",bt="write",wt="afterWrite",Ot=[dt,pt,vt,ht,gt,mt,yt,bt,wt];function D(e){return e.split("-")[0]}var xt={start:"end",end:"start"};function Se(e){return e.replace(/start|end/g,function(t){return xt[t]})}function P(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function F(e){var t=P(e).Element;return e instanceof t||e instanceof Element}function S(e){var t=P(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function he(e){if(typeof ShadowRoot>"u")return!1;var t=P(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function W(e){return((F(e)?e.ownerDocument:e.document)||window.document).documentElement}var q=Math.max,Pe=Math.min,z=Math.round;function de(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Te(){return!/^((?!chrome|android).)*safari/i.test(de())}function X(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&S(e)&&(o=e.offsetWidth>0&&z(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&z(n.height)/e.offsetHeight||1);var f=F(e)?P(e):window,i=f.visualViewport,s=!Te()&&r,c=(n.left+(s&&i?i.offsetLeft:0))/o,l=(n.top+(s&&i?i.offsetTop:0))/a,m=n.width/o,y=n.height/a;return{width:m,height:y,top:l,right:c+m,bottom:l+y,left:c,x:c,y:l}}function ge(e){var t=P(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function me(e){return X(W(e)).left+ge(e).scrollLeft}function Mt(e,t){var r=P(e),n=W(e),o=r.visualViewport,a=n.clientWidth,f=n.clientHeight,i=0,s=0;if(o){a=o.width,f=o.height;var c=Te();(c||!c&&t==="fixed")&&(i=o.offsetLeft,s=o.offsetTop)}return{width:a,height:f,x:i+me(e),y:s}}function L(e){return P(e).getComputedStyle(e)}function kt(e){var t,r=W(e),n=ge(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=q(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=q(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),i=-n.scrollLeft+me(e),s=-n.scrollTop;return L(o||r).direction==="rtl"&&(i+=q(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:f,x:i,y:s}}function j(e){return e?(e.nodeName||"").toLowerCase():null}function se(e){return j(e)==="html"?e:e.assignedSlot||e.parentNode||(he(e)?e.host:null)||W(e)}function ye(e){var t=L(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function We(e){return["html","body","#document"].indexOf(j(e))>=0?e.ownerDocument.body:S(e)&&ye(e)?e:We(se(e))}function G(e,t){var r;t===void 0&&(t=[]);var n=We(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=P(n),f=o?[a].concat(a.visualViewport||[],ye(n)?n:[]):n,i=t.concat(f);return o?i:i.concat(G(se(f)))}function Et(e){return["table","td","th"].indexOf(j(e))>=0}function $e(e){return!S(e)||L(e).position==="fixed"?null:e.offsetParent}function Ct(e){var t=/firefox/i.test(de()),r=/Trident/i.test(de());if(r&&S(e)){var n=L(e);if(n.position==="fixed")return null}var o=se(e);for(he(o)&&(o=o.host);S(o)&&["html","body"].indexOf(j(o))<0;){var a=L(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function be(e){for(var t=P(e),r=$e(e);r&&Et(r)&&L(r).position==="static";)r=$e(r);return r&&(j(r)==="html"||j(r)==="body"&&L(r).position==="static")?t:r||Ct(e)||t}function St(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&he(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Pt(e,t){var r=X(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Be(e,t,r){return t===Re?pe(Mt(e,r)):F(t)?Pt(t,r):pe(kt(W(e)))}function $t(e){var t=G(se(e)),r=["absolute","fixed"].indexOf(L(e).position)>=0,n=r&&S(e)?be(e):e;return F(n)?t.filter(function(o){return F(o)&&St(o,n)&&j(o)!=="body"}):[]}function Bt(e,t,r,n){var o=t==="clippingParents"?$t(e):[].concat(t),a=[].concat(o,[r]),f=a[0],i=a.reduce(function(s,c){var l=Be(e,c,n);return s.top=q(l.top,s.top),s.right=Pe(l.right,s.right),s.bottom=Pe(l.bottom,s.bottom),s.left=q(l.left,s.left),s},Be(e,f,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function J(e){return e.split("-")[1]}function jt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ne(e){var t=e.reference,r=e.element,n=e.placement,o=n?D(n):null,a=n?J(n):null,f=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(o){case A:s={x:f,y:t.y-r.height};break;case T:s={x:f,y:t.y+t.height};break;case V:s={x:t.x+t.width,y:i};break;case R:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var c=o?jt(o):null;if(c!=null){var l=c==="y"?"height":"width";switch(a){case ie:s[c]=s[c]-(t[l]/2-r[l]/2);break;case Z:s[c]=s[c]+(t[l]/2-r[l]/2);break}}return s}function At(){return{top:0,right:0,bottom:0,left:0}}function Lt(e){return Object.assign({},At(),e)}function Rt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}function He(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,f=a===void 0?e.strategy:a,i=r.boundary,s=i===void 0?ut:i,c=r.rootBoundary,l=c===void 0?Re:c,m=r.elementContext,y=m===void 0?I:m,d=r.altBoundary,w=d===void 0?!1:d,v=r.padding,p=v===void 0?0:v,O=Lt(typeof p!="number"?p:Rt(p,ae)),x=y===I?ct:I,b=e.rects.popper,h=e.elements[w?x:y],g=Bt(F(h)?h:h.contextElement||W(e.elements.popper),s,l,f),u=X(e.elements.reference),M=Ne({reference:u,element:b,strategy:"absolute",placement:o}),$=pe(Object.assign({},b,M)),k=y===I?$:u,E={top:g.top-k.top+O.top,bottom:k.bottom-g.bottom+O.bottom,left:g.left-k.left+O.left,right:k.right-g.right+O.right},B=e.modifiersData.offset;if(y===I&&B){var N=B[o];Object.keys(E).forEach(function(C){var K=[V,T].indexOf(C)>=0?1:-1,Q=[A,T].indexOf(C)>=0?"y":"x";E[C]+=N[Q]*K})}return E}function Dt(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,f=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,c=s===void 0?De:s,l=J(n),m=l?i?Ce:Ce.filter(function(w){return J(w)===l}):ae,y=m.filter(function(w){return c.indexOf(w)>=0});y.length===0&&(y=m);var d=y.reduce(function(w,v){return w[v]=He(e,{placement:v,boundary:o,rootBoundary:a,padding:f})[D(v)],w},{});return Object.keys(d).sort(function(w,v){return d[w]-d[v]})}function Tt(e){if(D(e)===ve)return[];var t=oe(e);return[Se(e),t,Se(t)]}function Wt(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,i=f===void 0?!0:f,s=r.fallbackPlacements,c=r.padding,l=r.boundary,m=r.rootBoundary,y=r.altBoundary,d=r.flipVariations,w=d===void 0?!0:d,v=r.allowedAutoPlacements,p=t.options.placement,O=D(p),x=O===p,b=s||(x||!w?[oe(p)]:Tt(p)),h=[p].concat(b).reduce(function(te,U){return te.concat(D(U)===ve?Dt(t,{placement:U,boundary:l,rootBoundary:m,padding:c,flipVariations:w,allowedAutoPlacements:v}):U)},[]),g=t.rects.reference,u=t.rects.popper,M=new Map,$=!0,k=h[0],E=0;E<h.length;E++){var B=h[E],N=D(B),C=J(B)===ie,K=[A,T].indexOf(N)>=0,Q=K?"width":"height",fe=He(t,{placement:B,boundary:l,rootBoundary:m,altBoundary:y,padding:c}),_=K?C?V:R:C?T:A;g[Q]>u[Q]&&(_=oe(_));var Ve=oe(_),ee=[];if(a&&ee.push(fe[N]<=0),i&&ee.push(fe[_]<=0,fe[Ve]<=0),ee.every(function(te){return te})){k=B,$=!1;break}M.set(B,ee)}if($)for(var Fe=w?3:1,ze=function(U){var we=h.find(function(Ue){var Oe=M.get(Ue);if(Oe)return Oe.slice(0,U).every(function(Ye){return Ye})});if(we)return k=we,"break"},le=Fe;le>0;le--){var Xe=ze(le);if(Xe==="break")break}t.placement!==k&&(t.modifiersData[n]._skip=!0,t.placement=k,t.reset=!0)}}const Nt={name:"flip",enabled:!0,phase:"main",fn:Wt,requiresIfExists:["offset"],data:{_skip:!1}};function Ht(e,t,r){var n=D(e),o=[R,A].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=a[0],i=a[1];return f=f||0,i=(i||0)*o,[R,V].indexOf(n)>=0?{x:i,y:f}:{x:f,y:i}}function Vt(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,f=De.reduce(function(l,m){return l[m]=Ht(m,t.rects,a),l},{}),i=f[t.placement],s=i.x,c=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=f}const Ft={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Vt};function zt(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Xt(e){return e===P(e)||!S(e)?ge(e):zt(e)}function Ut(e){var t=e.getBoundingClientRect(),r=z(t.width)/e.offsetWidth||1,n=z(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Yt(e,t,r){r===void 0&&(r=!1);var n=S(t),o=S(t)&&Ut(t),a=W(t),f=X(e,o,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((j(t)!=="body"||ye(a))&&(i=Xt(t)),S(t)?(s=X(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=me(a))),{x:f.left+i.scrollLeft-s.x,y:f.top+i.scrollTop-s.y,width:f.width,height:f.height}}function It(e){var t=X(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function qt(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var f=[].concat(a.requires||[],a.requiresIfExists||[]);f.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&o(s)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function Gt(e){var t=qt(e);return Ot.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Zt(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Jt(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var je={placement:"bottom",modifiers:[],strategy:"absolute"};function Ae(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Kt(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?je:o;return function(i,s,c){c===void 0&&(c=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},je,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},m=[],y=!1,d={state:l,setOptions:function(O){var x=typeof O=="function"?O(l.options):O;v(),l.options=Object.assign({},a,l.options,x),l.scrollParents={reference:F(i)?G(i):i.contextElement?G(i.contextElement):[],popper:G(s)};var b=Gt(Jt([].concat(n,l.options.modifiers)));return l.orderedModifiers=b.filter(function(h){return h.enabled}),w(),d.update()},forceUpdate:function(){if(!y){var O=l.elements,x=O.reference,b=O.popper;if(!!Ae(x,b)){l.rects={reference:Yt(x,be(b),l.options.strategy==="fixed"),popper:It(b)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(E){return l.modifiersData[E.name]=Object.assign({},E.data)});for(var h=0;h<l.orderedModifiers.length;h++){if(l.reset===!0){l.reset=!1,h=-1;continue}var g=l.orderedModifiers[h],u=g.fn,M=g.options,$=M===void 0?{}:M,k=g.name;typeof u=="function"&&(l=u({state:l,options:$,name:k,instance:d})||l)}}}},update:Zt(function(){return new Promise(function(p){d.forceUpdate(),p(l)})}),destroy:function(){v(),y=!0}};if(!Ae(i,s))return d;d.setOptions(c).then(function(p){!y&&c.onFirstUpdate&&c.onFirstUpdate(p)});function w(){l.orderedModifiers.forEach(function(p){var O=p.name,x=p.options,b=x===void 0?{}:x,h=p.effect;if(typeof h=="function"){var g=h({state:l,name:O,instance:d,options:b}),u=function(){};m.push(g||u)}})}function v(){m.forEach(function(p){return p()}),m=[]}return d}}var ne={passive:!0};function Qt(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,f=n.resize,i=f===void 0?!0:f,s=P(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(l){l.addEventListener("scroll",r.update,ne)}),i&&s.addEventListener("resize",r.update,ne),function(){a&&c.forEach(function(l){l.removeEventListener("scroll",r.update,ne)}),i&&s.removeEventListener("resize",r.update,ne)}}const _t={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Qt,data:{}};function er(e){var t=e.state,r=e.name;t.modifiersData[r]=Ne({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const tr={name:"popperOffsets",enabled:!0,phase:"read",fn:er,data:{}};var rr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function nr(e){var t=e.x,r=e.y,n=window,o=n.devicePixelRatio||1;return{x:z(t*o)/o||0,y:z(r*o)/o||0}}function Le(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,f=e.offsets,i=e.position,s=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,m=e.isFixed,y=f.x,d=y===void 0?0:y,w=f.y,v=w===void 0?0:w,p=typeof l=="function"?l({x:d,y:v}):{x:d,y:v};d=p.x,v=p.y;var O=f.hasOwnProperty("x"),x=f.hasOwnProperty("y"),b=R,h=A,g=window;if(c){var u=be(r),M="clientHeight",$="clientWidth";if(u===P(r)&&(u=W(r),L(u).position!=="static"&&i==="absolute"&&(M="scrollHeight",$="scrollWidth")),u=u,o===A||(o===R||o===V)&&a===Z){h=T;var k=m&&u===g&&g.visualViewport?g.visualViewport.height:u[M];v-=k-n.height,v*=s?1:-1}if(o===R||(o===A||o===T)&&a===Z){b=V;var E=m&&u===g&&g.visualViewport?g.visualViewport.width:u[$];d-=E-n.width,d*=s?1:-1}}var B=Object.assign({position:i},c&&rr),N=l===!0?nr({x:d,y:v}):{x:d,y:v};if(d=N.x,v=N.y,s){var C;return Object.assign({},B,(C={},C[h]=x?"0":"",C[b]=O?"0":"",C.transform=(g.devicePixelRatio||1)<=1?"translate("+d+"px, "+v+"px)":"translate3d("+d+"px, "+v+"px, 0)",C))}return Object.assign({},B,(t={},t[h]=x?v+"px":"",t[b]=O?d+"px":"",t.transform="",t))}function or(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,f=a===void 0?!0:a,i=r.roundOffsets,s=i===void 0?!0:i,c={placement:D(t.placement),variation:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Le(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Le(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const ar={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:or,data:{}};function ir(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!S(a)||!j(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(f){var i=o[f];i===!1?a.removeAttribute(f):a.setAttribute(f,i===!0?"":i)}))})}function sr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],a=t.attributes[n]||{},f=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=f.reduce(function(s,c){return s[c]="",s},{});!S(o)||!j(o)||(Object.assign(o.style,i),Object.keys(a).forEach(function(s){o.removeAttribute(s)}))})}}const fr={name:"applyStyles",enabled:!0,phase:"write",fn:ir,effect:sr,requires:["computeStyles"]};var lr=[_t,tr,ar,fr],ur=Kt({defaultModifiers:lr});function cr(e){return["click","hover"].includes(e)}function dr(e){return["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end","cover-top","cover-top-start","cover-top-end","cover-bottom","cover-bottom-start","cover-bottom-end","cover-left","cover-right"].includes(e)}const pr={show:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},trigger:{type:String,default:"click",validator:cr},placement:{type:String,default:"cover-top-start",validator:dr},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:[String,Object],default:"body"},defaultStyle:{type:Boolean,default:!0},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},"onUpdate:show":{type:Function}},{n:vr,classes:hr}=Ie("menu"),gr=Ge({name:"VarMenu",props:pr,setup(e){const t=ue(null),r=ue(null),n=ue(!1),{zIndex:o}=qe(()=>n.value,1);let a=null,f=!1,i=!1,s=!1,c={width:0,height:0};const l=()=>{const{width:u,height:M}=getComputedStyle(t.value);c={width:re(u),height:re(M)}},m=()=>{e.trigger==="hover"&&(s=!0,h())},y=async()=>{e.trigger==="hover"&&(s=!1,await xe(),!i&&g())},d=()=>{e.trigger==="hover"&&(i=!0)},w=async()=>{e.trigger==="hover"&&(i=!1,await xe(),!s&&g())},v=()=>{h(),f=!0},p=()=>{if(f){f=!1;return}n.value=!1,Y(e["onUpdate:show"],!1)},O=()=>{l();const u={x:re(e.offsetX),y:re(e.offsetY)};switch(e.placement){case"cover-top":return{placement:"bottom",skidding:u.x,distance:u.y-c.height};case"cover-top-start":return{placement:"bottom-start",skidding:u.x,distance:u.y-c.height};case"cover-top-end":return{placement:"bottom-end",skidding:u.x,distance:u.y-c.height};case"cover-bottom":return{placement:"top",skidding:u.x,distance:-u.y-c.height};case"cover-bottom-start":return{placement:"top-start",skidding:u.x,distance:-u.y-c.height};case"cover-bottom-end":return{placement:"top-end",skidding:u.x,distance:-u.y-c.height};case"cover-left":return{placement:"right",skidding:u.y,distance:u.x-c.width};case"cover-right":return{placement:"left",skidding:u.y,distance:-u.x-c.width};case"left":case"left-start":case"left-end":return{placement:e.placement,skidding:u.y,distance:-u.x};case"top":case"top-start":case"top-end":return{placement:e.placement,skidding:u.x,distance:-u.y};case"bottom":case"bottom-start":case"bottom-end":return{placement:e.placement,skidding:u.x,distance:u.y};case"right":case"right-start":case"right-end":return{placement:e.placement,skidding:u.y,distance:u.x}}},x=()=>{const{placement:u,skidding:M,distance:$}=O();return{placement:u,modifiers:[{...Nt,enabled:n.value},{...Ft,options:{offset:[M,$]}}]}},b=()=>{a.setOptions(x())},h=()=>{const{disabled:u}=e;u||(n.value=!0,Y(e["onUpdate:show"],!0))},g=()=>{n.value=!1,Y(e["onUpdate:show"],!1)};return H(()=>e.show,u=>{n.value=u!=null?u:!1},{immediate:!0}),H(()=>e.offsetX,b),H(()=>e.offsetY,b),H(()=>e.placement,b),H(()=>n.value,u=>{u?(b(),Y(e.onOpen)):Y(e.onClose)}),H(()=>e.trigger,u=>{u==="click"?document.addEventListener("click",p):document.removeEventListener("click",p)}),H(()=>e.disabled,g),Ze(()=>{a=ur(t.value,r.value,x()),e.trigger==="click"&&document.addEventListener("click",p)}),Je(()=>{document.removeEventListener("click",p),a.destroy()}),{menu:r,host:t,hostSize:c,show:n,zIndex:o,n:vr,classes:hr,handleClick:v,handleMenuClose:p,handleMouseenter:m,handleMouseleave:y,handleMenuMouseenter:d,handleMenuMouseleave:w,resize:b,open:h,close:g}}});function mr(e,t,r,n,o,a){return Me(),Qe("div",{ref:"host",class:Ee(e.n()),onClick:t[3]||(t[3]=(...f)=>e.handleClick&&e.handleClick(...f)),onMouseenter:t[4]||(t[4]=(...f)=>e.handleMouseenter&&e.handleMouseenter(...f)),onMouseleave:t[5]||(t[5]=(...f)=>e.handleMouseleave&&e.handleMouseleave(...f))},[ke(e.$slots,"default"),(Me(),_e(ft,{to:e.teleport},[et(st,{name:e.n(),onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:tt(()=>[rt(ot("div",{ref:"menu",style:at({zIndex:e.zIndex}),class:Ee(e.classes(e.n("menu"),[e.defaultStyle,`${e.n("--menu-background-color")} var-elevation--3`])),onClick:t[0]||(t[0]=it(()=>{},["stop"])),onMouseenter:t[1]||(t[1]=(...f)=>e.handleMenuMouseenter&&e.handleMenuMouseenter(...f)),onMouseleave:t[2]||(t[2]=(...f)=>e.handleMenuMouseleave&&e.handleMenuMouseleave(...f))},[ke(e.$slots,"menu")],38),[[nt,e.show]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to"]))],34)}const ce=Ke(gr,[["render",mr]]);ce.install=function(e){e.component(ce.name,ce)};export{ce as M};
