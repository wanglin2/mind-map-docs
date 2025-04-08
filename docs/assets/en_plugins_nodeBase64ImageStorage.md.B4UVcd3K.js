import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.B358x4hV.js";const k=JSON.parse('{"title":"NodeBase64ImageStorage plugin","description":"","frontmatter":{},"headers":[],"relativePath":"en/plugins/nodeBase64ImageStorage.md","filePath":"en/plugins/nodeBase64ImageStorage.md"}'),p={name:"en/plugins/nodeBase64ImageStorage.md"},i=e(`<h1 id="nodebase64imagestorage-plugin" tabindex="-1">NodeBase64ImageStorage plugin <a class="header-anchor" href="#nodebase64imagestorage-plugin" aria-label="Permalink to &quot;NodeBase64ImageStorage plugin&quot;">​</a></h1><blockquote><p>v0.14.0+</p></blockquote><p>This plugin is used to modify the storage method of node images in base64 format in the data.</p><p>Store images in base64 format as&#39; key map &#39;in the imgMap field of the root node, while other nodes only save&#39; key &#39;to avoid the problem of duplicate storage of the same image referenced by different nodes. Normal&#39; url &#39;format images are not processed.</p><p>For example, the node data before using the plugin is:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>After using this plugin, it will become:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h2 id="register" tabindex="-1">Register <a class="header-anchor" href="#register" aria-label="Permalink to &quot;Register&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MindMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NodeBase64ImageStorage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map/src/plugins/NodeBase64ImageStorage.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(NodeBase64ImageStorage)</span></span></code></pre></div><p>After registration and instantiation of <code>MindMap</code>, the instance can be obtained through <code>mindMap.nodeBase64ImageStorage</code>.</p>`,11),l=[i];function t(o,d,c,g,r,h){return n(),a("div",null,l)}const x=s(p,[["render",t]]);export{k as __pageData,x as default};
