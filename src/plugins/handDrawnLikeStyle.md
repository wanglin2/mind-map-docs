# HandDrawnLikeStyle 收费插件

HandDrawnLikeStyle 插件的功能是提供手绘风格的样式，也就是节点的连线、形状会变成手绘的样式，就像下面这样：

<img src="../assets/img/手绘风格.png" style="width: 800px" />

你也可以在在线版中通过【基础样式】-【是否开启手绘风格】设置来开启手绘风格样式进行尝试。

内部实现是通过[rough](https://github.com/rough-stuff/rough)库，所以如果你有精力，也可以自己基于这个库来实现这个插件。

## 收费

扫码转账备注你要购买的插件，以及你的邮箱地址（如果达到文字上限，那么你可以分两次付款），然后会将插件文件发送到你的邮箱。购买请在充分的使用和考虑后进行，如果你对前端开发不太熟悉，不知道如何使用插件，那么请谨慎考虑购买，没有特殊原因不会退费。如果你发现了 bug，或者有需求，可以提交相关的 issue。

价格：￥ 29.9，包含未打包的源码和打包后的文件。

> 一次性购买4个及以上收费插件打8折，心动不如行动~

<p style="display:flex;align-items: flex-end;">

<img src="../assets/img/alipay.jpg" style="width: 300px" />
<img src="../assets/img/wechat.jpg" style="width: 300px" />

</p>

## 注册

1.引用打包后的文件：

```js
import MindMap from 'simple-mind-map'
import HandDrawnLikeStyle from 'handDrawnLikeStyle.cjs.min.js'
// 或 import HandDrawnLikeStyle from 'handDrawnLikeStyle.esm.min.js'

MindMap.usePlugin(HandDrawnLikeStyle)
```

2.引用未打包的源码

可以先进入到插件目录执行：

```bash
npm link
```

然后进入到你的项目根目录执行：

```bash
npm link simple-mind-map-plugin-handdrawnlikestyle
```

然后就可以直接导入进行使用：

```js
import MindMap from 'simple-mind-map'
import HandDrawnLikeStyle from 'simple-mind-map-plugin-handdrawnlikestyle'

MindMap.usePlugin(HandDrawnLikeStyle)
```

注册完且实例化`MindMap`后可通过`mindMap.handDrawnLikeStyle`获取到该实例。

注册该插件后，无需执行其他方法，手绘风格即可生效。

如果你是使用 mindMap.addPlugin 方法来动态注册的组件，那么需要调用一次重新渲染的方法：

```js
mindMap.addPlugin(HandDrawnLikeStyle)
mindMap.reRender()
```

## 方法

以下方法你应该不太会用到。

### createPath(svgPathStr)

- `svgPathStr`：SVG Path字符串

创建一个手绘风格的路径节点，返回SVG的Path节点。

### createPolygon(points)

- `points`：点位数组。

```js
points：[
    [x1, y1],
    ...
]
```

创建一个手绘风格的多边形节点，返回SVG的Path节点。

### transformPath(svgPathStr)

将SVG Path字符串转换成手绘风格的SVG Path字符串。