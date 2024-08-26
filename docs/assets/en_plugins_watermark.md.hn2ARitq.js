import{_ as a,c as s,o as i,a4 as e}from"./chunks/framework.B358x4hV.js";const m=JSON.parse('{"title":"Watermark plugin","description":"","frontmatter":{},"headers":[],"relativePath":"en/plugins/watermark.md","filePath":"en/plugins/watermark.md"}'),t={name:"en/plugins/watermark.md"},n=e(`<h1 id="watermark-plugin" tabindex="-1">Watermark plugin <a class="header-anchor" href="#watermark-plugin" aria-label="Permalink to &quot;Watermark plugin&quot;">​</a></h1><blockquote><p>0.2.24+</p></blockquote><p><code>Watermark</code> instance is responsible for displaying the watermark.</p><p>Please refer to the <a href="./../api/constructor/constructor-options.html#_5-watermark-plugin">Instantiation Options</a> for configuration.</p><h2 id="register" tabindex="-1">Register <a class="header-anchor" href="#register" aria-label="Permalink to &quot;Register&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MindMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Watermark </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map/src/plugins/Watermark.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// import Watermark from &#39;simple-mind-map/src/Watermark.js&#39; Use this path for versions below v0.6.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Watermark)</span></span></code></pre></div><p>After registration and instantiation of <code>MindMap</code>, the instance can be obtained through <code>mindMap.watermark</code>.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="draw" tabindex="-1">draw() <a class="header-anchor" href="#draw" aria-label="Permalink to &quot;draw()&quot;">​</a></h3><p>Redraw the watermark.</p><p>Note: For imprecise rendering, some watermarks beyond the visible area will be drawn. If you have extreme performance requirements, it is recommended to develop the watermark function yourself.</p><h3 id="updatewatermark-config" tabindex="-1">updateWatermark(config) <a class="header-anchor" href="#updatewatermark-config" aria-label="Permalink to &quot;updateWatermark(config)&quot;">​</a></h3><p>Update watermark config. Example:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateWatermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Watermark text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lineSpacing: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    textSpacing: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    angle: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    textStyle: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      opacity: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      fontSize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="haswatermark" tabindex="-1">hasWatermark() <a class="header-anchor" href="#haswatermark" aria-label="Permalink to &quot;hasWatermark()&quot;">​</a></h3><blockquote><p>v0.3.2+</p></blockquote><p>Gets whether the watermark exists.</p><h3 id="clear" tabindex="-1">clear() <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;clear()&quot;">​</a></h3><blockquote><p>v0.9.2+</p></blockquote><p>Clear watermark.</p>`,20),r=[n];function p(l,h,k,o,d,c){return i(),s("div",null,r)}const g=a(t,[["render",p]]);export{m as __pageData,g as default};