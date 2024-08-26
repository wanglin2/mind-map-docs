import{_ as e,c as s,o as t,a4 as i}from"./chunks/framework.B358x4hV.js";const k=JSON.parse('{"title":"Formula plugin","description":"","frontmatter":{},"headers":[],"relativePath":"en/plugins/formula.md","filePath":"en/plugins/formula.md"}'),a={name:"en/plugins/formula.md"},o=i(`<h1 id="formula-plugin" tabindex="-1">Formula plugin <a class="header-anchor" href="#formula-plugin" aria-label="Permalink to &quot;Formula plugin&quot;">​</a></h1><blockquote><p>v0.7.2+</p></blockquote><blockquote><p>This plugin is only supported in rich text mode, so it needs to be used after registering the RichText plugin</p></blockquote><p>This plugin is used to support inserting formulas into nodes.</p><blockquote><p>注意：公式是通过<a href="https://github.com/KaTeX/KaTeX" target="_blank" rel="noreferrer">KaTeX</a>库实现的，<code>KaTeX</code>提供了一些配置，插件默认的一个配置是：</p></blockquote><blockquote><p>Note: The formula is implemented through the <a href="https://github.com/KaTeX/KaTeX" target="_blank" rel="noreferrer">KaTeX</a> library, and &#39;KaTeX&#39; provides some configurations. The default configuration for the plugin is:</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    output</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mathml&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>This formula may not render successfully on a few browsers. If you need to be compatible with these browsers, you can consider changing the configuration to &#39;HTML&#39;. For detailed documentation, please refer to <a href="https://katex.org/docs/options" target="_blank" rel="noreferrer">Options</a>. Using this configuration may require the introduction of a &#39;KaTeX&#39; style file, which you can test on your own.</p></blockquote><blockquote><p>v0.9.3+will internally determine whether the current Chrome kernel version of the browser is lower than 100, If so, it will automatically convert &#39;output&#39; from &#39;mathml&#39; to &#39;html&#39;, At this point, the style file for &#39;KaTeX&#39; needs to be imported, but it is not imported within the library, so you need to manually import it in the project. If you introduced &#39;simple-mind-map&#39; through the &#39;npm&#39; method, you can introduce it as follows:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map/node_modules/katex/dist/katex.min.css&#39;</span></span></code></pre></div><p>If you are using packaged files such as &#39;.umd.js&#39; or &#39;.esm.js&#39;, you can import them through online CDN services, such as <code>https://unpkg.com/browse/katex@0.16.9/dist/</code>, Of course, it is best to upload the &#39;css&#39; file of the &#39;katex&#39; and the corresponding font files in the &#39;fonts&#39; directory to your own server.</p></blockquote><blockquote><p>Version v0.10.3+ will default to importing the style files of &#39;KaTeX&#39;. So you don&#39;t need to manually introduce it anymore. When the rendering mode of the Katex library is html, it depends on some font files, which are not included in the plugin. You need to use the <code>katexFontPath</code> instantiation option to set the path of the font files.</p></blockquote><h2 id="problem" tabindex="-1">Problem <a class="header-anchor" href="#problem" aria-label="Permalink to &quot;Problem&quot;">​</a></h2><p>1.On some browsers, the formula source code is displayed</p><p>This is because some browsers do not support the &#39;mathml&#39; output mode of the &#39;KaTex&#39; library. You can change the output mode to &#39;html&#39; by using the &#39;getKatexOutputType&#39; instantiation option.</p><p>2.Sometimes formulas and text may display line breaks</p><p>This is usually because formula rendering uses the &#39;html&#39; mode, which depends on the font file. Therefore, when rendering the mind map before the font file is loaded, the calculated formula content size may not match the actual formula size after loading the font file, resulting in a row change. We can find a way to make the font file load before rendering the mind map.</p><p>3.SVG files exported on one browser have inconsistent styles when opened on another browser</p><p>Because the calculation of node size depends on the proxy style of the browser, the default style of different browsers is not consistent, so the calculated node size is also inconsistent.</p><p>4.The smm or json file exported on one browser cannot be rendered properly when imported on another browser</p><p>Because some browsers may render in &#39;mathml&#39; mode, while others may render in &#39;html&#39; mode, those that support &#39;mathml&#39; mode usually support &#39;html&#39;, while the opposite is not possible.</p><p>5.Abnormal formula for exporting images when rendering in <code>html</code> mode</p><p>This is caused by not loading the font, and there is currently no solution.</p><h2 id="register" tabindex="-1">Register <a class="header-anchor" href="#register" aria-label="Permalink to &quot;Register&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MindMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Formula </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map/src/plugins/Formula.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Formula)</span></span></code></pre></div><p>After registration and instantiation of <code>MindMap</code>, the instance can be obtained through <code>mindMap.formula</code>.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>After registering the plugin, you can use the command &#39;INSERT_FORMULA&#39; to insert the specified formula for the node:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;INSERT_FORMULA&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a^2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>The above command will insert the &#39;a^2&#39; formula into the currently active node.</p><p>If you want to assign a formula to a node or nodes, you can pass the second parameter:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;INSERT_FORMULA&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a^2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [Node])</span></span></code></pre></div><p>Pass in the specified node instance through the second parameter.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getkatexconfig" tabindex="-1">getKatexConfig() <a class="header-anchor" href="#getkatexconfig" aria-label="Permalink to &quot;getKatexConfig()&quot;">​</a></h3><p>Get the current configuration passed to <code>Katex</code>.</p>`,34),n=[o];function l(r,h,p,d,c,u){return t(),s("div",null,n)}const g=e(a,[["render",l]]);export{k as __pageData,g as default};