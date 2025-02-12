# Introduction

`simple-mind-map` 【Chinese name: 思绪思维导图】 is a simple and powerful web mind map library, not dependent on any specific framework. Can help you quickly develop mind mapping products.

`simple-mind-map`【Chinese name: 思绪思维导图】 is a simple and powerful web mind map library and mind map software.

This project mainly includes the following contents:

1.A JS mind map library that does not rely on any framework and can be used to quickly develop web mind map products.

Development documentation: [Course](../course/course1.md).

2.A web mind map developed based on the mind map library, Vue 2. x, and ElementUI. It can manipulate local files on the computer and can be used as an online mind map application, as well as self deployment and secondary development.

Online address: [https://wanglin2.github.io/mind-map/](https://wanglin2.github.io/mind-map/).

3.In addition, it also supports using it in a client-side manner. The [uTools](https://www.u.tools/) plugin application market has been launched, and it is strongly recommended to experience it through uTools.

Plugin address: [](). [Click here to learn more](../client).

> Independent client download: Github: [releases](https://github.com/wanglin2/mind-map/releases). Baidu Cloud Drive: [address](https://pan.baidu.com/s/1huasEbKsGNH2Af68dvWiOg?pwd=3bp3).
>
> I won't invest too much effort in the independent client in the future. It is recommended to use uTools for stronger functionality and better experience.

4.【Cloud storage version】If you need to bring a cloud storage version with backend, you can try another project we have developed [lx-doc](https://github.com/wanglin2/lx-doc)。

## Features

- Pluggable architecture, in addition to core functions, other functions are provided as plugins, which can be used as needed to reduce packaging volume
- Support logical structure chart(Left and Right Logical Structure Diagram), mind map, Organizational chart, directory organization chart, timeline (horizontal and vertical), fishbone chart and other structures
- Built-in multiple themes, allowing for highly customizable styles, and supporting registration of new themes
- Node content supports text (regular text, rich text), images, icons, hyperlinks, notes, labels, summaries, and math formulas
- Nodes support drag and drop (drag and move, freely adjust), multiple node shapes, Support for expanding node content, and fully customize node content using DDM
- Support canvas dragging and scaling
- Supports two multi node selection methods: mouse button drag selection and Ctrl+left button selection
- Supoorts to export as `json`、`png`、`svg`、`pdf`、`markdown`、`xmind`、`txt`, support import from `json`、`xmind`、`markdown`
- Support shortcut keys, forward and backward, correlation lines, search and replacement, small maps, watermarks, scrollbar, Hand drawn style, and rainbow lines
- Provide rich configurations to meet various scenarios and usage habits
- Support collaborative editing
- Support demonstration mode

The official provides the many plugins, which can be introduced as needed (a certain function may not be effective because you did not introduce the corresponding plugin). 

Features that will not be implemented in this project:

> 1.Free nodes, i.e. multiple root nodes;
>
> 2.Continue adding nodes after the summary node;
>
> If you need the above features, this library may not meet your needs.

## Repository Catalog Introduction

1.`simple-mind-map`

This is a mind map library that is framework-agnostic and can be used with
frameworks such as Vue and React, or without a framework.

2.`web`

This is an online mind map built using the `simple-mind-map` library and based
on `Vue2.x` and `ElementUI`. Features include:

- Toolbar, which supports inserting and deleting nodes, and editing node
      images, icons, hyperlinks, notes, tags, and summaries
- Sidebar, with panels for basic style settings, node style settings,
      outline, theme selection, and structure selection
- Import and export functionality; data is saved in the browser's local
      storage by default, but it also supports creating, opening, and editing
      local files on the computer directly
- Right-click menu, which supports operations such as expanding, collapsing,
      and organizing layout
- Bottom bar, which supports node and word count statistics, switching
      between edit and read-only modes, zooming in and out, and switching to
      full screen, support mini map

Provide document page service.

3.`dist`

The folder containing the packaged resources for the `web` folder.

## Special Note

When applying this project to actual projects, please first experience in depth whether it can meet your needs.

This project may not have fully tested every function point, so there may be bugs. In addition, when the number of nodes is very large, there may be some performance issues. Because everyone can accept different levels of congestion, you can test the maximum number of nodes yourself. Generally speaking, within 500 nodes, it is more smooth, while over 1000 nodes have more noticeable lag.

In v0.10.4+version, a performance mode has been added to only render nodes within the visible area of the canvas, which can improve rendering speed under large data volumes. You can experience it by turning on the 'openPerformance' instantiation option, and in the online demo, you can turn on the 'Basic Styles' - 'Enable Performance Mode' switch.

If you have suggestions or find bugs, you can submit [issues](https://github.com/wanglin2/mind-map/issues) here.

The built-in themes and icons in the project part come from:[Baidu Mind Map](https://naotu.baidu.com/)、[Zhixi Mind Map](https://www.zhixi.com/)。Respect the copyright, and do not use the theme and icons directly for commercial projects.

## Why not？

1.[Zhixi](https://www.zhixi.com/)

Zhixi is a free mind mapping product that supports multi end synchronization. The UI design is beautiful and the features are complete, but it is not open source, so it can only be used as a user and cannot be used in your project.

There are many other online mind mapping products similar to Zhixi, such as [GitMind](https://gitmind.cn/)、[MindLine](http://www.mindline.cn/)、[MinMeister](https://www.mindmeister.com/zh)、[Mubu](https://mubu.com/) and so on, There are many searches on search engines, but these products either require fees or are developed by small companies, and their stability and sustainability cannot be guaranteed. Of course, the most crucial thing is that they are not open-source.

2.[kityminder-core](https://github.com/fex-team/kityminder-core)

`kityminder-core` is an open source brain mapping tool developed by Baidu. It has powerful functions and good performance, but it is no longer maintained. Therefore, the code is relatively old, and the interface beauty is relatively ordinary. In addition, bugs can only be fixed by yourself, and the functions can only be developed by yourself. It has high requirements for front-end development capabilities.

3.[jsmind](https://github.com/hizzgdev/jsmind)、[Mind-elixir](https://github.com/ssshooter/mind-elixir-core)、[my-mind](https://github.com/ondras/my-mind)、[blink-mind](https://github.com/awehook/blink-mind)、[remind](https://github.com/luvsic3/remind)、[vue3-mindmap](https://github.com/hellowuxin/vue3-mindmap)、[ZMindMap](https://github.com/zyascend/ZMindMap)、[mindmaptree](https://github.com/RockyRen/mindmaptree)...

These open-source mind maps are also good, each with its own characteristics, but they also have certain drawbacks, such as stopping updates, average interface aesthetics, less functionality, relying on a certain framework, and so on.

In summary, in open-source mind maps, it is difficult to find a better choice than `simple-mind-map`. Of course, `simple-mind-map` is far from being the best, and it also has many shortcomings. However, `simple-mind-map` has always been in a fast iteration process, and we welcome you to join and improve it together.

## Browser Compatibility

We recommend using the latest version of the `Chrome` browser.

Limited testing situation:

Normal operation: `360` extreme speed browser（v13.5.2036.0）、`opera` browser（v71.0.3770.284）、`Firefox`（v98.0.2）.

Unsupported: `IE` browser.

## License

[MIT](https://github.com/wanglin2/mind-map/blob/main/LICENSE). You can use it for commercial purposes without retaining the copyright statement of 'mind-map'. If you don't want to keep it, you can contact the author.

If you are in Hangzhou, you are also welcome to come and see me.