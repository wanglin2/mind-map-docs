# 简介

`simple-mind-map`【中文名：思绪思维导图】是一个简单&强大的Web思维导图库和思维导图软件。

本项目主要包含以下内容：

- 一个 `js` 思维导图库，不依赖任何框架，可以用来快速完成 `Web` 思维导图产品的开发。

> 开发文档：[教程](../course/course1.md)

- 一个 `Web` 思维导图，基于思维导图库、`Vue2.x`、`ElementUI` 开发，支持操作电脑本地文件，可以当做一个在线版思维导图应用使用，也可以自部署和二次开发。

> 在线地址：[https://wanglin2.github.io/mind-map/](https://wanglin2.github.io/mind-map/)

- 客户端和插件

> 1. 独立客户端，支持`Windows`、`Mac`及`Linux`系统。
>
> 下载地址：[Github](https://github.com/wanglin2/mind-map/releases)、[百度云盘](https://pan.baidu.com/s/1huasEbKsGNH2Af68dvWiOg?pwd=3bp3)

> 2. `uTools`插件，现已上架[uTools](https://www.u.tools/)插件应用市场。
>
> 可直接在`uTools`插件应用市场中搜索思绪进行安装，也可以直接访问该地址：[主页](https://www.u-tools.cn/plugins/detail/%E6%80%9D%E7%BB%AA%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE/)，点击右侧的【启动】按钮进行安装。[点此了解更多](../client)。

- 云存储版本，如果你需要带后端的云存储版本，可以尝试我们开发的另一个项目[理想文档](https://github.com/wanglin2/lx-doc)。

## 特性

- 插件化架构，除核心功能外，其他功能作为插件提供，按需使用，减小打包体积
- 支持逻辑结构图（向左、向右逻辑结构图）、思维导图、组织结构图、目录组织图、时间轴（横向、竖向）、鱼骨图等结构
- 内置多种主题，允许高度自定义样式，支持注册新主题
- 节点内容支持文本（普通文本、富文本）、图片、图标、超链接、备注、标签、概要、数学公式
- 节点支持拖拽（拖拽移动、自由调整）、多种节点形状；支持扩展节点内容、支持使用 DDM 完全自定义节点内容
- 支持画布拖动、缩放
- 支持鼠标按键拖动选择和 Ctrl+左键两种多选节点方式
- 支持导出为`json`、`png`、`svg`、`pdf`、`markdown`、`xmind`、`txt`，支持从`json`、`xmind`、`markdown`导入
- 支持快捷键、前进后退、关联线、搜索替换、小地图、水印、滚动条、手绘风格、彩虹线条
- 提供丰富的配置，满足各种场景各种使用习惯
- 支持协同编辑
- 支持演示模式

官方提供了很多插件，可根据需求按需引入（某个功能不生效大概率是因为你没有引入对应的插件）。

本项目不会实现的特性：

> 1.自由节点，即多个根节点；
>
> 2.概要节点后面继续添加节点；
>
> 如果你需要以上特性，那么本库可能无法满足你的需求。

## 仓库目录介绍

1.`simple-mind-map`

思维导图库，框架无关，`Vue`、`React`等框架或无框架都可以使用。

2.`web`

使用`simple-mind-map`库，基于`vue2.x`、`ElementUI`搭建的在线思维导图。特性：

-  工具栏，支持插入节点、删除节点；编辑节点图片、图标、超链接、备注、标签、概要
- 侧边栏，基础样式设置面板、节点样式设置面板、大纲面板、主题选择面板、结构选择面板
- 导入导出功能；数据默认保存在浏览器本地存储，也支持直接创建、打开、编辑电脑本地文件
- 右键菜单，支持展开、收起、整理布局等操作
- 底部栏，支持节点数量、字数统计；支持切换编辑和只读模式；支持放大缩小；支持全屏切换；支持小地图

提供文档页面服务。

3.`dist`

打包`web`后的资源文件夹。

## 仓库分支介绍

- `main`：主分支，当前发布版本所在分支；

- `feature`：开发分支，当前正在开发中的分支，如你想要提交`pr`，请提交到该分支；

- `electron`：客户端分支；

- `utools`：`uTools`插件分支；

## 特别说明

将本项目用于实际项目时请先深度体验一下是否能满足您的需求。

本项目可能没有完整测试到每一个功能点，可能存在bug，另外，当节点数量非常多的时候，性能也存在一些问题，因为每个人能接受的卡顿程度不一样，所以你可以自行测试节点数量上限。一般来说，500个节点以内比较流畅，1000个节点以上卡顿比较明显。

在v0.10.4+版本新增了性能模式，只渲染画布可视区域内的节点，可以提升大数据量下的渲染速度，可以通过开启`openPerformance`实例化选项进行体验，在线Demo里可以通过打开【基础样式】-【开启性能模式】开关进行体验。

如果有建议或发现了bug，可以在此提交[issues](https://github.com/wanglin2/mind-map/issues)。

项目内置的主题和图标部分来自于：[百度脑图](https://naotu.baidu.com/)、[知犀思维导图](https://www.zhixi.com/)。尊重版权，主题和图标请勿直接用于商业项目。

## 为什么不是？

1.[知犀](https://www.zhixi.com/)

知犀是一个免费的思维导图产品，支持多端同步，ui设计很漂亮，功能也很齐全，但是它并不开源，所以只能作为一个用户，而无法在你的项目中使用。

类似知犀的其他在线思维导图产品还有很多，比如[GitMind](https://gitmind.cn/)、[MindLine](http://www.mindline.cn/)、[MinMeister](https://www.mindmeister.com/zh)、[幕布](https://mubu.com/)等等，搜索引擎上搜索一下非常多，但是这些产品或者是要收费，或者是小公司开发的，稳定性和持续性无法保证，当然最关键的就是它们都不开源。

2.[kityminder-core](https://github.com/fex-team/kityminder-core)

`kityminder-core`是百度开发的开源的脑图工具，功能很强大，性能也很好，但是它已经不维护了，所以代码比较陈旧，界面美观度也比较一般，另外bug只能自己修，功能只能自己开发，对前端开发能力要求比较高。

3.[jsmind](https://github.com/hizzgdev/jsmind)、[Mind-elixir](https://github.com/ssshooter/mind-elixir-core)、[my-mind](https://github.com/ondras/my-mind)、[blink-mind](https://github.com/awehook/blink-mind)、[remind](https://github.com/luvsic3/remind)、[vue3-mindmap](https://github.com/hellowuxin/vue3-mindmap)、[ZMindMap](https://github.com/zyascend/ZMindMap)、[mindmaptree](https://github.com/RockyRen/mindmaptree)...

这些开源的思维导图也都不错，各有各的特点，但是它们也都有一定缺点，比如停止更新、界面美观度一般、功能比较少、依赖某个框架等等。

综上，在开源的思维导图中，你很难找到一个比`simple-mind-map`更好的选择。当然，`simple-mind-map`也远远谈不上最好，它也有很多不足，不过`simple-mind-map`一直处于快速迭代中，欢迎你加入进来一起完善它。

## 浏览器兼容性

推荐使用最新版`chrome`浏览器。

有限测试情况：

正常运行：`360`极速浏览器（v13.5.2036.0）、`opera`浏览器（v71.0.3770.284）、`Firefox`（v98.0.2）。

不支持：`IE`浏览器。

## License

[MIT](https://github.com/wanglin2/mind-map/blob/main/LICENSE)。保留`mind-map`版权声明的情况下可随意商用。如不想保留可联系作者。

## 微信交流群

微信添加wanglinguanfang拉你入群。根据过往的经验，大部分问题都可以通过查看issue列表或文档解决，所以提问前请确保你已经阅读完了所有文档，文档里没有的可在群里提问，不必私聊作者，如果你一定要私聊，请先发红包（￥9.9+每次）。

如果你在杭州，也欢迎来找我面基。