import{_ as s}from"./chunks/标记.DFdaoILH.js";import{_ as i,a}from"./chunks/wechat.BdsPlIbf.js";import{_ as t,c as n,o as p,a4 as e}from"./chunks/framework.B358x4hV.js";const F=JSON.parse('{"title":"Notation 收费插件","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/notation.md","filePath":"plugins/notation.md"}'),l={name:"plugins/notation.md"},h=e('<h1 id="notation-收费插件" tabindex="-1">Notation 收费插件 <a class="header-anchor" href="#notation-收费插件" aria-label="Permalink to &quot;Notation 收费插件&quot;">​</a></h1><p>Notation 插件提供单个节点的标记功能，也就是可以在单个节点上加个手绘风格的圈、背景、删除线等等，支持动画效果，就像下面这样：</p><img src="'+s+'" style="width:900px;"><h2 id="收费" tabindex="-1">收费 <a class="header-anchor" href="#收费" aria-label="Permalink to &quot;收费&quot;">​</a></h2><blockquote><p>暂不支持购买单个插件，只能打包购买所有收费插件。</p></blockquote><p>价格：￥999，包含所有收费插件。</p><p>扫码转账备注：插件购买。以及你的邮箱地址（如果达到文字上限，那么你可以分两次付款），然后会将插件文件发送到你的邮箱。购买请在充分的使用和考虑后进行，如果你对前端开发不太熟悉，不知道如何使用插件，那么请谨慎考虑购买，没有特殊原因不会退费。如果你发现了 bug，或者有需求，可以提交相关的 issue。</p><p style="display:flex;align-items:flex-end;"><img src="'+i+'" style="width:300px;"><img src="'+a+`" style="width:300px;"></p><h2 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h2><p>1.引用打包后的文件：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MindMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Notation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;notation.cjs.min.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或 import Notation from &#39;notation.esm.min.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果你想要iife格式的打包文件，可以在插件的package.json的build命令中添加：esbuild ./index.js --bundle --minify --external:buffer --format=iife --outfile=./dist/xxx.iife.min.js --global-name=xxx，然后再执行一次npm run build即可生成</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Notation)</span></span></code></pre></div><p>2.引用未打包的源码</p><p>可以先进入到插件目录执行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span></span></code></pre></div><p>然后进入到你的项目根目录执行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> simple-mind-map-plugin-notation</span></span></code></pre></div><p>然后就可以直接导入进行使用：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MindMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Notation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map-plugin-notation&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Notation)</span></span></code></pre></div><p>注册完且实例化<code>MindMap</code>后可通过<code>mindMap.notation</code>获取到该实例。</p><p>如果你是使用 mindMap.addPlugin 方法来动态注册的组件，那么需要调用一次重新渲染的方法：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Notation)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reRender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><p>注册了本插件后会在思维导图实例上新增<code>SET_NOTATION</code>命令，给节点添加标记使用该命令：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SET_NOTATION&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, appointNodes, show, config)</span></span></code></pre></div><p>该命令可以传递三个参数：</p><ul><li><p><code>appointNodes</code>：给指定的节点实例添加标记，可以传单个节点实例，也可以传递一个节点实例数组，如果传空数组，则会给当前激活的节点添加标记；</p></li><li><p><code>show</code>：Boolean，必传，是否显示标记；</p></li><li><p><code>config</code>：Object，可选，标记配置，对象格式，对象的详细字段如下：</p></li></ul><table tabindex="0"><thead><tr><th>字段名称</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>circle</td><td>标记类型，可选值：underline（下划线）、box（边框）、circle（圆）、highlight（高亮）、strike-through（删除线）、crossed-off（叉）</td></tr><tr><td>color</td><td>String</td><td>思维导图实例化选项中的hoverRectColor配置</td><td>颜色</td></tr><tr><td>strokeWidth</td><td>Number</td><td>1</td><td>线宽</td></tr><tr><td>padding</td><td>Number</td><td>20</td><td>内边距</td></tr><tr><td>animate</td><td>Boolean</td><td>true</td><td>是否开启动画</td></tr></tbody></table><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 给当前激活的节点添加一个圆类型的标记</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SET_NOTATION&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;circle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;red&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>添加标记后数据会以<code>notation</code>为名称保存到节点的<code>data</code>数据中。</p>`,30),d=[h];function o(k,r,c,g,E,m){return p(),n("div",null,d)}const C=t(l,[["render",o]]);export{F as __pageData,C as default};
