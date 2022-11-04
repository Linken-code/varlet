import{a as f,ae as y,aA as S,f as h,h as F,q as l,S as u,an as e,F as z,P as a,Q as i,aB as p,i as m,j as _}from"./vue-router.esm-bundler.124ec336.js";import{C as o}from"./index.4699f3ff.js";import{I as r}from"./index.eb07b9e6.js";import{S as n}from"./index.340a9c0b.js";import{d as A}from"./index.8b4f1b33.js";import{u as w,a as E,_ as D,b as v,c as k}from"./index.fee16a60.js";import"./components.0836e209.js";import"./elements.35d8dfd2.js";import"./shared.a5d25d0b.js";/* empty css               */const N={chipType:"\u7EB8\u7247\u7C7B\u578B",defaultChip:"\u9ED8\u8BA4\u7EB8\u7247",primaryChip:"\u4E3B\u8981\u7EB8\u7247",infoChip:"\u4FE1\u606F\u7EB8\u7247",successChip:"\u6210\u529F\u7EB8\u7247",warningChip:"\u8B66\u544A\u7EB8\u7247",dangerChip:"\u5371\u9669\u7EB8\u7247",plainChip:"\u7A7A\u5FC3\u7EB8\u7247",nonRoundChip:"\u975E\u5706\u89D2\u7EB8\u7247",chipSize:"\u7EB8\u7247\u5C3A\u5BF8",largeChip:"\u5927\u578B\u7EB8\u7247",normalChip:"\u5E38\u89C4\u7EB8\u7247",smallChip:"\u5C0F\u578B\u7EB8\u7247",miniChip:"\u8FF7\u4F60\u7EB8\u7247",blockChip:"\u5757\u7EA7\u7EB8\u7247",canCloseChip:"\u53EF\u5173\u95ED\u7EB8\u7247",customCloseIcon:"\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",chip:"\u7EB8\u7247",addSlot:"\u6DFB\u52A0\u63D2\u69FD",leftSlot:"\u5DE6\u4FA7\u63D2\u69FD",rightSlot:"\u53F3\u4FA7\u63D2\u69FD",leftAndRightSlot:"\u5DE6\u53F3\u4E24\u4FA7\u63D2\u69FD"},R={chipType:"Chip Type",defaultChip:"Default Chip",primaryChip:"Primary Chip",infoChip:"Info Chip",successChip:"Success Chip",warningChip:"Warning Chip",dangerChip:"Danger Chip",plainChip:"Plain Chip",nonRoundChip:"Non Round Chip",chipSize:"Chip Size",largeChip:"Large Chip",normalChip:"Normal Chip",smallChip:"Small Chip",miniChip:"Mini Chip",blockChip:"Block Chip",canCloseChip:"Can Close Chip",customCloseIcon:"Custom Close Icon",customColor:"Custom Color",chip:"Chip",addSlot:"Add Slot",leftSlot:"Left Slot",rightSlot:"Right Slot",leftAndRightSlot:"Left And Right Slot"},{add:B,use:b,pack:t,packs:W,merge:G}=w(),x=C=>{k(C),b(C)};E("zh-CN",D);E("en-US",v);B("zh-CN",N);B("en-US",R);const H={setup(C){const c=f(!0),d=f(!0);return y(x),S(A),(I,s)=>(h(),F(z,null,[l(e(p),null,{default:u(()=>[a(i(e(t).chipType),1)]),_:1}),l(e(n),{size:["2.666vw","2.666vw"]},{default:u(()=>[l(e(o),null,{default:u(()=>[a(i(e(t).defaultChip),1)]),_:1}),l(e(o),{type:"primary"},{default:u(()=>[a(i(e(t).primaryChip),1)]),_:1}),l(e(o),{type:"success"},{default:u(()=>[a(i(e(t).successChip),1)]),_:1}),l(e(o),{type:"danger"},{default:u(()=>[a(i(e(t).dangerChip),1)]),_:1}),l(e(o),{type:"warning"},{default:u(()=>[a(i(e(t).warningChip),1)]),_:1}),l(e(o),{type:"info"},{default:u(()=>[a(i(e(t).infoChip),1)]),_:1})]),_:1},8,["size"]),l(e(p),null,{default:u(()=>[a(i(e(t).plainChip),1)]),_:1}),l(e(o),{plain:"",type:"primary"},{default:u(()=>[a(i(e(t).plainChip),1)]),_:1}),l(e(p),null,{default:u(()=>[a(i(e(t).nonRoundChip),1)]),_:1}),l(e(o),{round:!1,type:"primary"},{default:u(()=>[a(i(e(t).nonRoundChip),1)]),_:1}),l(e(p),null,{default:u(()=>[a(i(e(t).chipSize),1)]),_:1}),l(e(n),{align:"center",size:["2.666vw","2.666vw"]},{default:u(()=>[l(e(o),{type:"primary"},{default:u(()=>[a(i(e(t).normalChip),1)]),_:1}),l(e(o),{type:"success",size:"small"},{default:u(()=>[a(i(e(t).smallChip),1)]),_:1}),l(e(o),{type:"warning",size:"mini"},{default:u(()=>[a(i(e(t).miniChip),1)]),_:1}),l(e(o),{type:"danger",size:"large"},{default:u(()=>[a(i(e(t).largeChip),1)]),_:1})]),_:1},8,["size"]),l(e(p),null,{default:u(()=>[a(i(e(t).blockChip),1)]),_:1}),l(e(o),{type:"primary",block:""},{default:u(()=>[a(i(e(t).blockChip),1)]),_:1}),l(e(p),null,{default:u(()=>[a(i(e(t).canCloseChip),1)]),_:1}),l(e(n),{size:["2.666vw","2.666vw"]},{default:u(()=>[c.value?(h(),m(e(o),{key:0,closable:"",onClose:s[0]||(s[0]=g=>c.value=!1)},{default:u(()=>[a(i(e(t).canCloseChip),1)]),_:1})):_("",!0),d.value?(h(),m(e(o),{key:1,closable:"","icon-name":"delete",onClose:s[1]||(s[1]=g=>d.value=!1)},{default:u(()=>[a(i(e(t).customCloseIcon),1)]),_:1})):_("",!0)]),_:1},8,["size"]),l(e(p),null,{default:u(()=>[a(i(e(t).customColor),1)]),_:1}),l(e(n),{size:["2.666vw","2.666vw"]},{default:u(()=>[l(e(o),{color:"#009688","text-color":"#fff"},{default:u(()=>[a(i(e(t).chip),1)]),_:1}),l(e(o),{color:"#009688",plain:""},{default:u(()=>[a(i(e(t).chip),1)]),_:1}),l(e(o),{color:"#faecd8","text-color":"#e6a23c",plain:""},{default:u(()=>[a(i(e(t).chip),1)]),_:1}),l(e(o),{color:"#faecd8","text-color":"#e6a23c"},{default:u(()=>[a(i(e(t).chip),1)]),_:1})]),_:1},8,["size"]),l(e(p),null,{default:u(()=>[a(i(e(t).addSlot),1)]),_:1}),l(e(n),{size:["2.666vw","2.666vw"]},{default:u(()=>[l(e(o),null,{left:u(()=>[l(e(r),{name:"star"})]),default:u(()=>[a(i(e(t).leftSlot)+" ",1)]),_:1}),l(e(o),null,{right:u(()=>[l(e(r),{name:"fire"})]),default:u(()=>[a(i(e(t).rightSlot)+" ",1)]),_:1}),l(e(o),null,{left:u(()=>[l(e(r),{name:"account-circle"})]),right:u(()=>[l(e(r),{name:"cake-variant"})]),default:u(()=>[a(i(e(t).leftAndRightSlot)+" ",1)]),_:1})]),_:1},8,["size"])],64))}};export{H as default};
