# uTools插件

`uTools`插件继承了独立客户端所有功能的同时还增加以下功能：

1.支持多选文件进行删除，包括删除源文件，和从列表中删除；

2.支持打开指定目录，自动扫描目录下的思维导图文件，一般来说，我们都会把相关的思维导图文件都放到同一个目录下，所以有了这个功能，就能方便的切换同个目录下的其他文件进行编辑；

3.主界面也支持了暗黑模式，并且设置里也增加了暗黑模式的设置选项；

## 安装

### 安装uTools

如果你已安装`uTools`，那么可以忽略这一步。

安装`uTools`很简单，打开其官网，下载文件然后根据步骤安装即可。

官网：[https://www.u.tools/](https://www.u.tools/)

### 安装思绪思维导图插件

安装完`uTools`，你应该可以在你电脑的状态栏上看到其图标。

可以直接访问该地址：[在utools中搜索](https://www.u-tools.cn/plugins/search/?t=%E6%80%9D%E7%BB%AA%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE)，点击右侧的【启动】按钮进行安装。

也可以在任何界面都可以通过`ALT+空格`键唤出其搜索框，然后进入插件应用商店：

<img src="../assets/img/client/utools1.png" style="width: 800px" />

输入思绪搜索即可找到思绪思维导图插件:

<img src="../assets/img/client/utools2.png" style="width: 800px" />

点击右侧的【获取】按钮即可安装。

<img src="../assets/img/client/utools3.png" style="width: 800px" />

安装完后就可以点击【打开】进入使用了~

后续要使用只需要通过`ALT+空格`键唤出搜索框，输入【思绪】然后按回车就可以打开了：

<img src="../assets/img/client/utools4.png" style="width: 800px" />

### 使用小技巧

1.设置为自动分离为独立窗口

<img src="../assets/img/client/utools5.png" style="width: 800px" />

这样下次打开就会以独立的窗口打开，如果之前调整过窗口大小，那么再次打开就会默认显示为之前的大小，不用每次都手动调整。

2.关闭超级面板

编辑思维导图时，多选节点是通过按住鼠标右键拖动进行框选，这和uTools的超级面板功能冲突，导致无法框选，就像下面这样：

<img src="../assets/img/client/utools6.png" style="width: 800px" />

所以建议关闭这个功能，或者修改它的触发方式，设置路径为：点击搜索框右侧的头像进入个人中心 -> 点击左下角的个人中心 -> 点击设置 -> 关闭超级面板。

# 独立客户端

本项目也提供了独立客户端版本，使用[Electron](https://www.electronjs.org/)开发。支持`Windows`、`Mac`及`Linux`。

> 因为作为uTools插件能实现独立客户端的大部分功能，并且跨平台的工作也都交给它了，我不用再自己去打包成各个系统的安装包，所以更新版本会更加方便，后续会将主要精力都放在插件的更新上，独立客户端的更新频率会降低，强烈建议使用客户端的朋友都切换为uTools。

目前功能比较简单：

1.支持新建、打开文件进行编辑；

2.支持查看最近编辑文件列表；

3.支持文件的复制、删除、重命名；

## 下载

> 客户端版本会落后于在线版本，要尝试新功能请优先使用在线版。

你可以直接下载对应的客户端安装使用，提供了两个下载地址：

Github：[releases](https://github.com/wanglin2/mind-map/releases)。

百度云盘：[地址](https://pan.baidu.com/s/1huasEbKsGNH2Af68dvWiOg?pwd=3bp3)。

## 开发

如果有需要，你也可以进行二次开发。

### clone

```bash
git clone https://github.com/wanglin2/mind-map.git
cd mind-map
git checkout electron
```

### 启动服务

在项目根目录下执行：

```bash
cd simple-mind-map
npm i
npm link
cd ..
cd web
npm i
npm link simple-mind-map
npm run electron:serve
```

### 打包客户端

你至少需要两台电脑，一台`Windows`和一台`Mac`。

打包`Windows`应用：

```bash
npm run electron:build-win
```

打包`Mac`应用：

```bash
npm run electron:build-mac
```

打包`Linux`应用：

```bash
npm run electron:build-linux
```

打包全部应用：

```bash
npm run electron:build-all
```

根据你的电脑系统自动打包：

```bash
npm run electron:build
```