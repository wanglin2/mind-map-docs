import{_ as a,c as e,o,a4 as i}from"./chunks/framework.B358x4hV.js";const y=JSON.parse('{"title":"Command 实例","description":"","frontmatter":{},"headers":[],"relativePath":"api/command.md","filePath":"api/command.md"}'),t={name:"api/command.md"},d=i(`<h1 id="command-实例" tabindex="-1">Command 实例 <a class="header-anchor" href="#command-实例" aria-label="Permalink to &quot;Command 实例&quot;">​</a></h1><p><code>command</code>实例负责命令的添加及执行，内置了很多命令，也可以自行添加，命令指需要在历史堆栈数据里添加副本的操作。可通过<code>mindMap.command</code>获取到该实例</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="history" tabindex="-1">history <a class="header-anchor" href="#history" aria-label="Permalink to &quot;history&quot;">​</a></h3><p>当前所有的历史数据列表。不要手动修改该数组。</p><h3 id="activehistoryindex" tabindex="-1">activeHistoryIndex <a class="header-anchor" href="#activehistoryindex" aria-label="Permalink to &quot;activeHistoryIndex&quot;">​</a></h3><p>当前所在的历史数据索引。不要手动修改该属性。</p><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><p>前进后退请使用命令<code>BACK</code>或<code>FORWARD</code>。</p><h3 id="pause" tabindex="-1">pause() <a class="header-anchor" href="#pause" aria-label="Permalink to &quot;pause()&quot;">​</a></h3><blockquote><p>v0.9.11+</p></blockquote><p>暂停收集历史数据。</p><h3 id="recovery" tabindex="-1">recovery() <a class="header-anchor" href="#recovery" aria-label="Permalink to &quot;recovery()&quot;">​</a></h3><blockquote><p>v0.9.11+</p></blockquote><p>恢复收集历史数据。</p><h3 id="add-name-fn" tabindex="-1">add(name, fn) <a class="header-anchor" href="#add-name-fn" aria-label="Permalink to &quot;add(name, fn)&quot;">​</a></h3><p>添加命令。</p><p><code>name</code>：命令名称</p><p><code>fn</code>：命令要执行的方法</p><h3 id="remove-name-fn" tabindex="-1">remove(name, fn) <a class="header-anchor" href="#remove-name-fn" aria-label="Permalink to &quot;remove(name, fn)&quot;">​</a></h3><p>移除命令。</p><p><code>name</code>：要移除的命令名称</p><p><code>fn</code>：要移除的方法，不传的话移除该命令所有的方法</p><h3 id="getcopydata" tabindex="-1">getCopyData() <a class="header-anchor" href="#getcopydata" aria-label="Permalink to &quot;getCopyData()&quot;">​</a></h3><p>获取渲染树数据副本。即当前画布的数据。</p><h3 id="clearhistory" tabindex="-1">clearHistory() <a class="header-anchor" href="#clearhistory" aria-label="Permalink to &quot;clearHistory()&quot;">​</a></h3><p>清空历史堆栈数据</p><h3 id="addhistory" tabindex="-1">addHistory() <a class="header-anchor" href="#addhistory" aria-label="Permalink to &quot;addHistory()&quot;">​</a></h3><p>触发一次历史堆栈数据添加操作。注意，该方法会延迟执行，延迟时间可通过实例化选项<code>addHistoryTime</code>来设置。</p><h3 id="originaddhistory" tabindex="-1">originAddHistory () <a class="header-anchor" href="#originaddhistory" aria-label="Permalink to &quot;originAddHistory ()&quot;">​</a></h3><blockquote><p>v0.12.1+</p></blockquote><p>功能同<code>addHistory</code>方法，不过该方法会立即执行，不会延迟。</p><h3 id="extendkeymap-key-code" tabindex="-1">extendKeyMap(key, code) <a class="header-anchor" href="#extendkeymap-key-code" aria-label="Permalink to &quot;extendKeyMap(key, code)&quot;">​</a></h3><blockquote><p>v0.12.2+</p></blockquote><p><code>key</code>：要扩展的按键标识，比如键盘上可能存在多个<code>/</code>按键，库默认已经定义了一个，那么你可以新定义一个，名字可以自己随便取，比如：<code>/2</code></p><p><code>code</code>：该按键的键值</p><p>扩展按键映射。</p><p>使用示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.keyCommand.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">extendKeyMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">111</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.keyCommand.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addShortcut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, mindMap.renderer.toggleActiveExpand)</span></span></code></pre></div><h3 id="removekeymap-key" tabindex="-1">removeKeyMap(key) <a class="header-anchor" href="#removekeymap-key" aria-label="Permalink to &quot;removeKeyMap(key)&quot;">​</a></h3><blockquote><p>v0.12.2+</p></blockquote><p>从按键映射中删除某个键。</p>`,42),s=[d];function r(n,h,c,p,l,k){return o(),e("div",null,s)}const u=a(t,[["render",r]]);export{y as __pageData,u as default};