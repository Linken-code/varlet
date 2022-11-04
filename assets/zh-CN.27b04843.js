import{_ as c,p as n,f as d,h as r,M as t,q as e,S as l,P as s,as as h}from"./vue-router.esm-bundler.124ec336.js";const p={components:{}},o={class:"varlet-site-doc"},i=t("h1",null,"\u6B65\u9AA4\u6761",-1),j=t("div",{class:"card"},[t("h3",null,"\u4ECB\u7ECD"),t("p",null,"\u5F15\u5BFC\u7528\u6237\u6309\u7167\u6D41\u7A0B\u5B8C\u6210\u4EFB\u52A1\u7684\u5BFC\u822A\u6761\u3002")],-1),v={class:"card"},m=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),g=t("p",null,[s("\u901A\u8FC7 "),t("code",null,"active"),s(" \u5C5E\u6027\u63A7\u5236\u5F53\u524D\u6B65\u9AA4\u6761\u7684\u8FDB\u5EA6\uFF0C\u503C\u4E3A\u5F53\u524D "),t("code",null,"step"),s(" \u7684\u7D22\u5F15\uFF0C\u4ECE "),t("code",null,"0"),s(" \u8D77\u8BA1\u3002")],-1),u=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" active = ref("),t("span",{class:"hljs-number"},"0"),s(`)

`),t("span",{class:"hljs-keyword"},"const"),s(" next = "),t("span",{class:"hljs-function"},"() =>"),s(` {
  active.value = (active.value + `),t("span",{class:"hljs-number"},"1"),s(") % "),t("span",{class:"hljs-number"},"4"),s(`
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-steps"),s(),t("span",{class:"hljs-attr"},":active"),s("="),t("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("\u6B65\u9AA41"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("\u6B65\u9AA42"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("\u6B65\u9AA43"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("\u6B65\u9AA44"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-steps"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"next"'),s(">")]),s("\u4E0B\u4E00\u6B65"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_={class:"card"},f=t("h3",null,"\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" active = ref("),t("span",{class:"hljs-number"},"0"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-steps"),s(`
    `),t("span",{class:"hljs-attr"},":active"),s("="),t("span",{class:"hljs-string"},'"active"'),s(`
    `),t("span",{class:"hljs-attr"},"active-color"),s("="),t("span",{class:"hljs-string"},'"#f44336"'),s(`
    `),t("span",{class:"hljs-attr"},"inactive-color"),s("="),t("span",{class:"hljs-string"},'"#e99eb4"'),s(`
  >`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(),t("span",{class:"hljs-attr"},"active-icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(),t("span",{class:"hljs-attr"},"current-icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"inactive-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(">")]),s(`
      \u6B65\u9AA41
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(),t("span",{class:"hljs-attr"},"active-icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(),t("span",{class:"hljs-attr"},"current-icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"inactive-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(">")]),s(`
      \u6B65\u9AA42
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(),t("span",{class:"hljs-attr"},"active-icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(),t("span",{class:"hljs-attr"},"current-icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"inactive-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(">")]),s(`
      \u6B65\u9AA43
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(),t("span",{class:"hljs-attr"},"active-icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(),t("span",{class:"hljs-attr"},"current-icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"inactive-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(">")]),s(`
      \u6B65\u9AA44
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-steps"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},k=t("h3",null,"\u5782\u76F4\u6A21\u5F0F",-1),x=t("p",null,[s("\u901A\u8FC7 "),t("code",null,"direction"),s(" \u5C5E\u6027\u6539\u53D8\u6B65\u9AA4\u6761\u7684\u663E\u793A\u65B9\u5411\u3002")],-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" active = ref("),t("span",{class:"hljs-number"},"0"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-steps"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"vertical"'),s(),t("span",{class:"hljs-attr"},":active"),s("="),t("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("\u6B65\u9AA41"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("\u6B65\u9AA42"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("\u6B65\u9AA43"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("\u6B65\u9AA44"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-steps"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z=h('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><h4>Steps Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>active</code></td><td>\u5F53\u524D\u6B65\u9AA4</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>direction</code></td><td>\u663E\u793A\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>active-color</code></td><td>\u6FC0\u6D3B\u72B6\u6001\u989C\u8272</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>inactive-color</code></td><td>\u672A\u6FC0\u6D3B\u72B6\u6001\u989C\u8272</td><td><em>string</em></td><td><code>#9e9e9e</code></td></tr></tbody></table><h4>Step Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>active-icon</code></td><td>\u6FC0\u6D3B\u72B6\u6001\u56FE\u6807</td><td><em>string</em></td><td><code>check</code></td></tr><tr><td><code>current-icon</code></td><td>\u5F53\u524D\u6B65\u9AA4\u65F6\u7684\u56FE\u6807</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-icon</code></td><td>\u672A\u6FC0\u6D3B\u72B6\u6001\u56FE\u6807</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><h4>Steps Events</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click-step</code></td><td>\u70B9\u51FB\u6B65\u9AA4\u7684\u6807\u9898\u6216\u56FE\u6807\u65F6\u89E6\u53D1</td><td><code>index: number</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><h4>Steps Slots</h4><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>steps \u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table><h4>Step Slots</h4><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>step \u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--step-tag-size</code></td><td><code>20px</code></td></tr><tr><td><code>--step-tag-background</code></td><td><code>#9e9e9e</code></td></tr><tr><td><code>--step-tag-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--step-tag-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--step-tag-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--step-tag-margin</code></td><td><code>4px 0</code></td></tr><tr><td><code>--step-tag-icon-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--step-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--step-content-color</code></td><td><code>rgba(0, 0, 0, 0.38)</code></td></tr><tr><td><code>--step-content-active-color</code></td><td><code>#000</code></td></tr><tr><td><code>--step-line-background</code></td><td><code>#000</code></td></tr><tr><td><code>--step-vertical-min-height</code></td><td><code>30px</code></td></tr><tr><td><code>--step-vertical-tag-margin</code></td><td><code>0 4px</code></td></tr><tr><td><code>--step-vertical-line-height</code></td><td><code>calc(100% - 30px)</code></td></tr><tr><td><code>--step-vertical-line-min-height</code></td><td><code>20px</code></td></tr></tbody></table></div>',5);function S(N,P,C,V,$,B){const a=n("var-site-code-example");return d(),r("div",o,[i,j,t("div",v,[m,g,e(a,null,{default:l(()=>[u]),_:1})]),t("div",_,[f,e(a,null,{default:l(()=>[b]),_:1})]),t("div",y,[k,x,e(a,null,{default:l(()=>[w]),_:1})]),z])}const q=c(p,[["render",S]]);export{q as default};
