# 客户端

## obsidian插件

首个版本已发布，下载地址：[https://github.com/wanglin2/obsidian-simplemindmap/releases](https://github.com/wanglin2/obsidian-simplemindmap/releases)

上架obsidian插件市场正在审核中，审核通过之前下载安装方式如下：

1.下载`main.js`、`manifest.json`、`styles.css`三个文件到本地；

2.打开obsidian，在设置-第三方插件-已安装插件右侧点击【目录】图标按钮打开插件目录，

3.新建一个文件夹，名称为：obsidian-simplemindma，将下载好的三个文件复制到该目录下；

4.重启ob，或在设置-第三方插件-已安装插件右侧点击【刷新】图标按钮，然后找到`Simple mind map`，点击【启用】按钮即可启用该插件。

功能可以参考：[https://github.com/wanglin2/obsidian-simplemindmap?tab=readme-ov-file#simplemindmap-obsidian-plugin](https://github.com/wanglin2/obsidian-simplemindmap?tab=readme-ov-file#simplemindmap-obsidian-plugin)。

## 独立客户端

本项目也提供了独立客户端版本，使用[Electron](https://www.electronjs.org/)开发。支持`Windows`、`Mac`及`Linux`系统。

> v0.13.1+版本的客户端支持AI功能。

功能简介：

1.支持新建、打开文件进行编辑；

2.支持查看最近编辑文件列表；

3.支持文件的复制、删除、重命名；

`v0.13.1+`版本新增如下特性：

1.支持多选文件进行删除，包括删除源文件，和从列表中删除；

2.支持打开指定目录，自动扫描目录下的思维导图文件，一般来说，我们都会把相关的思维导图文件都放到同一个目录下，所以有了这个功能，就能方便的切换同个目录下的其他文件进行编辑；

3.主界面也支持了暗黑模式，并且设置里也增加了暗黑模式的设置选项；

### 下载

> 客户端版本会落后于在线版本，要尝试新功能请优先使用在线版。

你可以直接下载对应的客户端安装使用，提供了两个下载地址：

1.[Github](https://github.com/wanglin2/mind-map/releases)

2.[百度云盘](https://pan.baidu.com/s/1huasEbKsGNH2Af68dvWiOg?pwd=3bp3)

3.[夸克网盘](https://pan.quark.cn/s/d1594add58d8)

Linux 用户也可以通过 Flathub 下载：

[![下载应用，请到 Flathub](https://flathub.org/api/badge?svg&locale=zh-Hans)](https://flathub.org/apps/io.github.wanglin2.mind-map)

## uTools 插件

`uTools`插件继承了独立客户端所有功能的同时还增加以下功能：

1.支持多选文件进行删除，包括删除源文件，和从列表中删除；

2.支持打开指定目录，自动扫描目录下的思维导图文件，一般来说，我们都会把相关的思维导图文件都放到同一个目录下，所以有了这个功能，就能方便的切换同个目录下的其他文件进行编辑；

3.主界面也支持了暗黑模式，并且设置里也增加了暗黑模式的设置选项；

### 安装

#### 安装 uTools

如果你已安装`uTools`，那么可以忽略这一步。

安装`uTools`很简单，打开其官网，下载文件然后根据步骤安装即可。

官网：[https://www.u.tools/](https://www.u.tools/)

#### 安装思绪思维导图插件

安装完`uTools`，你应该可以在你电脑的状态栏上看到其图标。

可以直接访问该地址：[主页](https://www.u-tools.cn/plugins/detail/%E6%80%9D%E7%BB%AA%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE/)，点击右侧的【启动】按钮进行安装。

也可以在任何界面都可以通过`ALT+空格`键唤出其搜索框，然后进入插件应用商店：

<img src="./assets/img/client/utools1.png" style="width: 800px" />

输入思绪搜索即可找到思绪思维导图插件:

<img src="./assets/img/client/utools2.png" style="width: 800px" />

点击右侧的【获取】按钮即可安装。

<img src="./assets/img/client/utools3.png" style="width: 800px" />

安装完后就可以点击【打开】进入使用了~

后续要使用只需要通过`ALT+空格`键唤出搜索框，输入【思绪】然后按回车就可以打开了：

<img src="./assets/img/client/utools4.png" style="width: 800px" />

#### 使用小技巧

1.设置为自动分离为独立窗口

<img src="./assets/img/client/utools5.png" style="width: 800px" />

这样下次打开就会以独立的窗口打开，如果之前调整过窗口大小，那么再次打开就会默认显示为之前的大小，不用每次都手动调整。

2.关闭超级面板

编辑思维导图时，多选节点是通过按住鼠标右键拖动进行框选，这和 uTools 的超级面板功能冲突，导致无法框选，就像下面这样：

<img src="./assets/img/client/utools6.png" style="width: 800px" />

所以建议关闭这个功能，或者修改它的触发方式，设置路径为：点击搜索框右侧的头像进入个人中心 -> 点击左下角的个人中心 -> 点击设置 -> 关闭超级面板。

## 更多

我们在积极探索和开发各个软件的插件，如你有建议，欢迎issue留言。