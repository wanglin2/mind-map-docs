# 常见问题

## 1.在Vite中使用报错，提示xml-js依赖出错

解决方法：使用如下引入方式：

```js
import MindMap from "simple-mind-map/dist/simpleMindMap.umd.min"
```

`simple-mind-map`包提供未打包的入口字段`module`，依赖的`xml-js`包需要引入`node`环境下的包，所以在`Vite`中获取不到会报错，所以指定引入打包后的入口，相关包都已打包进产物，所以不会报错。

如果需要二次开发，也就是必须要使用未打包代码的话，如果你不需要解析`xmind`文件的话，可以去除`xmind`模块，如果需要的话那么可以尝试换成其他的解析`xml`为`json`的库。

## 2.报错`Getting bbox of element "text" is not possible: TypeError: Cannot read properties of undefined (reading 'apply')`

原因为安装的`@svgdotjs/svg.js`版本太高，手动降到`3.0.16`版本即可。

## 3.TypeError: Cannot read properties of undefined (reading 'prototype') at sax.js:222:46 

可以在打包配置文件中增加如下配置：

```js
resolve: { alias: { stream: "stream-browserify" } }
```

不同的打包工具可能具体配置不一样，原理就是排除`stream`依赖。

## 4.点击【新建】、【打开】、【另存为】按钮时提示浏览器不支持，或者非https协议。

浏览器上操作电脑本地文件使用的是[window.showOpenFilePicker](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/showOpenFilePicker)api，如果不支持，要么是浏览器不支持这个API，要么是因为页面非https协议，你可以按F12，或者在页面通过鼠标右键菜单中的【检查】打开浏览器控制台，在其中的【控制台】或【console】tab中输入`window.showOpenFilePicker`按回车，如果返回`undefined`则代表不支持，如果返回的不是这个，而页面依旧提示提示浏览器不支持，或者非https协议，那么可以提交issue，或者联系作者。

## 5.引入simple-mind-map报错，报错信息如下：

<img src="../assets/img/错误.jpg" style="width: 850px" />

这是因为你的构建环境不支持该js语法，该语法出自`@svgdotjs/svg.js`库，解决方法如下：

1.手动降低`@svgdotjs/svg.js`库的版本，你可以在你的项目中手动安装低版本，比如：`npm i @svgdotjs/svg.js@3.2.0`

2.不降低版本的话，可以通过修改你的构建工具的相关配置，修改`babel`的配置，让它编译一下`node_modules`中的`simple-mind-map`库，或`@svgdotjs/svg.js`库，如果用的是`vue-cli`或`vite`，它们也直接提供了相关配置。另外需要安装编译该语法的`babel`插件，并且配置到`babel`的配置文件中：

`@babel/plugin-proposal-nullish-coalescing-operator`、`@babel/plugin-proposal-optional-chaining`。

## 6.启动服务报quill依赖的错误

<img src="../assets/img/错误2.png" style="width: 850px" />

当前Node环境不支持用到的js语法，需要编译quill依赖。

如果你是`webpack`项目，那么需要修改`babel-loader`的配置，将`quill`加到`include`选项里。

如果你是`vue-cli`项目，那么需要将`quill`加到`vue.config.js`的`transpileDependencies`选项里。

## 7.在单应用页面或弹窗场景下创建思维导图，退出页面或关闭弹窗后再打开页面或弹窗，节点文本编辑时删除键不生效。

如果在节点文本编辑中关闭思维导图，需要在关闭前调用实例的销毁方法：

```js
mindMap.destroy()
```

## 8.富文本模式下，节点文本明显偏下，但是编辑中的文本是正常的。

节点文本明显偏下的原因一般是思维导图容器元素，或容器的任何一个祖先元素显式设置了`font-size`的样式，所以可以去除给容器元素或任何一个祖先元素设置的`font-size`样式，如果祖先元素因为一些原因无法去除，那么可以给容器元素添加如下样式：

```css
#mindMapContainer {
    font-size: initial;
}
```

至于编辑中的文本和显示文本不一致，是因为文本编辑框元素默认是插入到页面的`body`元素下，所以`font-size`没有影响到文本编辑元素，导致出现不一致，解决方法有两个：

1.给文本编辑框元素也设置同样的`font-size`样式：

```css
.smm-richtext-node-edit-wrap {
    font-size: 20px;
}
```

2.将文本编辑框元素插入到思维导图容器下，或其他可以受`font-size`样式影响的元素下：

```js
new MindMap({
    el: document.querySelector('#mindMapContainer'),
    customInnerElsAppendTo: document.querySelector('#mindMapContainer')
})
```

如果有其他会影响文本的样式处理同上。

## 9.自定义的节点内容导出图片或svg时没有样式。

`v0.12.0+`版本可以通过`appendCss`方法来插入你附加的样式：

```js
mindMap.appendCss(`
    font-size: 18px;
    background: red;
`)
```

`v0.10.1+`版本可以使用`handleBeingExportSvg`选项：

```js
new MindMap({
    handleBeingExportSvg: (svg) => {
        const el = document.createElement('style')
        el.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml')
        el.innerHTML = `
            font-size: 18px;
            background: red;
        `
        svg.add(el)
        return svg
    }
})
```

更早的版本暂时没有方便的方法来动态插入样式，建议升级版本。

## 10.跨浏览器窗口无法复制粘贴，或无法粘贴剪贴板中的数据。

在单个思维导图页面内复制和粘贴仅需要拦截Ctrl+c或Ctrl+v按键即可，复制和粘贴的数据可以简单的通过一个变量来保存，而其他情况需要读写用户剪贴板的数据，需要使用[clipboard](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/clipboard)API，该特性仅在https协议下可用。

## 11.快捷键不生效。

`v0.12.2+`版本增加了只有当按键事件的事件目标为body或库内部文本编辑框元素时才允许响应快捷键事件，所以如果使用的是该版本以上的版本，且出现了快捷键不生效的问题，那么可以尝试使用`customCheckEnableShortcut`实例化选项来传递一个自定义的判断函数：

```js
new MindMap({
    // 传递一个函数，接收按键事件对象e为参数，需要返回true或false，返回true代表允许响应快捷键事件，反之不允许，库默认当事件目标为body，或为文本编辑框元素（普通文本编辑框、富文本编辑框、关联线文本编辑框）时响应快捷键，其他不响应
    customCheckEnableShortcut: (e) => {
        return true
    }
})
```

> 一个可能的原因：
>
> 当前焦点如果不在一个明显的输入框中，按键事件的事件目标（e.target）却不是`body`，有可能是某个元素存在tabIndex属性导致捕获到聚焦状态。

## 12.思维导图容器的父容器存在滚动条时导出图片会出现节点显示不全的问题

解决方法：

1.每次当滚动条滚动后调用mindMap.getElRectInfo()方法；

2.在调导出的方法前先调mindMap.getElRectInfo()方法；