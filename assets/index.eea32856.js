import{S as w}from"./index.13133b3b.js";import{u as _}from"./provide.8fdc8278.js";import{c as I,e as S}from"./components.0836e209.js";import{d as C,a as g,w as d,_ as T,p as y,f as $,i as B,S as N,O as x,N as A}from"./vue-router.esm-bundler.124ec336.js";const P={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},"onUpdate:active":{type:Function}},{n:k}=I("tabs-items"),U=C({name:"VarTabsItems",components:{VarSwipe:w},props:P,setup(e){const o=g(null),{tabItemList:n,bindTabItem:l,length:p}=_(),u=t=>n.find(({name:a})=>t===a.value),c=t=>n.find(({index:a})=>t===a.value),f=t=>u(t)||c(t),m=t=>{var s;const a=f(t);!a||(n.forEach(({setCurrent:r})=>r(!1)),a.setCurrent(!0),(s=o.value)==null||s.to(a.index.value))},v=t=>{var r;const a=n.find(({index:b})=>b.value===t),s=(r=a.name.value)!=null?r:a.index.value;S(e["onUpdate:active"],s)},h=()=>o.value;return l({}),d(()=>e.active,m),d(()=>p.value,()=>m(e.active)),{swipe:o,n:k,handleSwipeChange:v,getSwipe:h}}});function V(e,o,n,l,p,u){const c=y("var-swipe");return $(),B(c,{class:A(e.n()),ref:"swipe",loop:e.loop,touchable:e.canSwipe,indicator:!1,onChange:e.handleSwipeChange},{default:N(()=>[x(e.$slots,"default")]),_:3},8,["class","loop","touchable","onChange"])}const i=T(U,[["render",V]]);i.install=function(e){e.component(i.name,i)};export{i as T};