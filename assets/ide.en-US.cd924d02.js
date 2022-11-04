import{_ as s,p as n,f as i,h as a,M as e,q as r,S as l,as as c,P as t}from"./vue-router.esm-bundler.124ec336.js";const d={components:{}},p={class:"varlet-site-doc"},h=c('<h1>IDE Code Support</h1><div class="card"><h3>Intro</h3><p>The component library provides the ability to highlight the component syntax for <code>webstorm</code> and <code>vscode</code>. the <code>Syntax highlight</code>, <code>Code completion</code>, <code>Documentation popup</code>, can be obtained through plugins and Settings. The component library provides a separate helper plugin for <code>vscode</code>, which can be downloaded from the extension market</p></div><div class="card"><h3>Webstorm</h3><p>Open the library properties documentation by setting <code>Editor -&gt; General -&gt; Code Completion -&gt; Show the documentation popup in ___ ms</code> .</p><img style="width:100%;margin-top:10px;border-radius:5px;" src="https://varlet.gitee.io/varlet-ui/hl_wb_setting.png" alt="webstorm setting"><img style="width:100%;margin-top:10px;border-radius:5px;" src="https://varlet.gitee.io/varlet-ui/hl_wb.jpg" alt="webstorm highlight"></div>',3),g={class:"card"},_=e("h3",null,"VSCode",-1),u=e("p",null,[t("Install the "),e("code",null,"Volar"),t(" plugin and configure "),e("code",null,"tsconfig.json"),t(" as follows to get type hints in the template.")],-1),m=e("pre",{class:"hljs"},[e("code",null,[t(`{
  `),e("span",{class:"hljs-attr"},'"compilerOptions"'),t(`: {
    `),e("span",{class:"hljs-attr"},'"types"'),t(": ["),e("span",{class:"hljs-string"},'"@varlet/ui/types"'),t(`]
  }
}
`)])],-1),v=e("img",{style:{width:"100%","margin-top":"10px","border-radius":"5px"},src:"https://varlet.gitee.io/varlet-ui/hl_vsc_setting.png",alt:"vscode setting"},null,-1),x=e("img",{style:{width:"100%","margin-top":"10px","border-radius":"5px"},src:"https://varlet.gitee.io/varlet-ui/hl_vsc.png",alt:"vscode highlight"},null,-1),b=e("div",{class:"card"},[e("h3",null,"VSCode Extension"),e("p",null,[t("Search the "),e("code",null,"varlet-vscode-extension"),t(" installation in the "),e("code",null,"vscode"),t(" plugin market. When you hover over the component name, you can go directly to the component\u2019s document address via a link")]),e("img",{style:{width:"50%","margin-top":"10px","border-radius":"5px"},src:"https://varlet.gitee.io/varlet-ui/ext_vsc.png",alt:"vscode ext"}),e("img",{style:{width:"78%","margin-top":"10px","border-radius":"5px"},src:"https://varlet.gitee.io/varlet-ui/ext_vsc_link.png",alt:"vscode ext link"})],-1);function y(w,f,S,C,k,V){const o=n("var-site-code-example");return i(),a("div",p,[h,e("div",g,[_,u,r(o,{"playground-ignore":""},{default:l(()=>[m]),_:1}),v,x]),b])}const E=s(d,[["render",y]]);export{E as default};
