import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.B358x4hV.js";const k=JSON.parse('{"title":"NodeBase64ImageStorage插件","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/nodeBase64ImageStorage.md","filePath":"plugins/nodeBase64ImageStorage.md"}'),e={name:"plugins/nodeBase64ImageStorage.md"},i=p(`<h1 id="nodebase64imagestorage插件" tabindex="-1">NodeBase64ImageStorage插件 <a class="header-anchor" href="#nodebase64imagestorage插件" aria-label="Permalink to &quot;NodeBase64ImageStorage插件&quot;">​</a></h1><blockquote><p>v0.14.0+</p></blockquote><p>该插件用于修改<code>base64</code>格式的节点图片在数据中的存储方式。</p><p>将<code>base64</code>格式的图片以<code>key-map</code>的形式存储在根节点的<code>imgMap</code>字段里，其他节点只保存<code>key</code>，避免不同的节点引用相同的图片重复存储的问题，普通<code>url</code>格式的图片不处理。</p><p>比如未使用该插件前的节点数据为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        text: &#39;xxx&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            data: {</span></span>
<span class="line"><span>                text: &#39;xxx2&#39;,</span></span>
<span class="line"><span>                image: &#39;data:image/png,xxx&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            data: {</span></span>
<span class="line"><span>                text: &#39;xxx3&#39;,</span></span>
<span class="line"><span>                image: &#39;data:image/png,xxx&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用该插件后会变为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        text: &#39;xxx&#39;,</span></span>
<span class="line"><span>        imgMap: {</span></span>
<span class="line"><span>            &#39;smm_img_key_xxx&#39;: &#39;data:image/png,xxx&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            data: {</span></span>
<span class="line"><span>                text: &#39;xxx2&#39;,</span></span>
<span class="line"><span>                image: &#39;smm_img_key_xxx&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            data: {</span></span>
<span class="line"><span>                text: &#39;xxx3&#39;,</span></span>
<span class="line"><span>                image: &#39;smm_img_key_xxx&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MindMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NodeBase64ImageStorage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map/src/plugins/NodeBase64ImageStorage.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(NodeBase64ImageStorage)</span></span></code></pre></div><p>注册完且实例化<code>MindMap</code>后可通过<code>mindMap.nodeBase64ImageStorage</code>获取到该实例。</p>`,11),l=[i];function t(c,o,d,g,h,r){return n(),a("div",null,l)}const x=s(e,[["render",t]]);export{k as __pageData,x as default};
