import{_ as e,c as t,o as i,a4 as a}from"./chunks/framework.B358x4hV.js";const b=JSON.parse('{"title":"TextEdit instance","description":"","frontmatter":{},"headers":[],"relativePath":"en/api/textEdit.md","filePath":"en/api/textEdit.md"}'),o={name:"en/api/textEdit.md"},n=a('<h1 id="textedit-instance" tabindex="-1">TextEdit instance <a class="header-anchor" href="#textedit-instance" aria-label="Permalink to &quot;TextEdit instance&quot;">​</a></h1><p>Node text editing instance. It can be obtained through <code>mindMap.renderer.textEdit</code>.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="isshowtextedit" tabindex="-1">isShowTextEdit() <a class="header-anchor" href="#isshowtextedit" aria-label="Permalink to &quot;isShowTextEdit()&quot;">​</a></h3><p>Get whether the current text editing box is in a display state, that is, whether it is in a text editing state.</p><h3 id="hideedittextbox" tabindex="-1">hideEditTextBox() <a class="header-anchor" href="#hideedittextbox" aria-label="Permalink to &quot;hideEditTextBox()&quot;">​</a></h3><p>Hiding the text editing box will set the content of the current text editing box as node text.</p><h3 id="registertmpshortcut" tabindex="-1">registerTmpShortcut() <a class="header-anchor" href="#registertmpshortcut" aria-label="Permalink to &quot;registerTmpShortcut()&quot;">​</a></h3><p>Register temporary shortcut keys, which means editing can be completed through the Enter and Tab keys.</p><h3 id="show-node" tabindex="-1">show({ node}) <a class="header-anchor" href="#show-node" aria-label="Permalink to &quot;show({ node})&quot;">​</a></h3><ul><li><code>node</code>：Node instance to enter for editing</li></ul><p>Manually enable node editing. By default, it will enter node editing when double clicking or pressing F2 on the node.</p><h3 id="getcurrenteditnode" tabindex="-1">getCurrentEditNode() <a class="header-anchor" href="#getcurrenteditnode" aria-label="Permalink to &quot;getCurrentEditNode()&quot;">​</a></h3><blockquote><p>v0.9.8+</p></blockquote><p>Get the node instance currently being edited.</p>',15),d=[n];function r(h,s,c,l,x,u){return i(),t("div",null,d)}const _=e(o,[["render",r]]);export{b as __pageData,_ as default};