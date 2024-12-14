# Lineflow 插件

> v0.12.2+

该插件用于支持节点连线的流动效果，流动效果仅在连线为虚线的情况下生效，效果如下：

<img src="../assets/img/lineflow.gif" style="width: 400px" />

你可以在在线版中进行体验，【基础样式】或【节点样式】侧边栏中均可设置。

## 收费

扫码转账备注你要购买的插件，以及你的邮箱地址（如果达到文字上限，那么你可以分两次付款），然后会将插件文件发送到你的邮箱。购买请在充分的使用和考虑后进行，如果你对前端开发不太熟悉，不知道如何使用插件，那么请谨慎考虑购买，没有特殊原因不会退费。如果你发现了 bug，或者有需求，可以提交相关的 issue。

价格：￥ 29.9，包含未打包的源码和打包后的文件。

<p style="display:flex;align-items: flex-end;">

<img src="../assets/img/alipay.jpg" style="width: 300px" />
<img src="../assets/img/wechat.jpg" style="width: 300px" />

</p>

## 注册

1.引用打包后的文件：

```js
import MindMap from 'simple-mind-map'
import Lineflow from 'lineflow.cjs.min.js'
// 或 import Lineflow from 'lineflow.esm.min.js'

MindMap.usePlugin(Lineflow)
```

2.引用未打包的源码

可以先进入到插件目录执行：

```bash
npm link
```

然后进入到你的项目根目录执行：

```bash
npm link simple-mind-map-plugin-lineflow
```

然后就可以直接导入进行使用：

```js
import MindMap from 'simple-mind-map'
import Lineflow from 'simple-mind-map-plugin-lineflow'

MindMap.usePlugin(Lineflow)
```

注册完且实例化`MindMap`后可通过`mindMap.lineflow`获取到该实例。

如果你是使用 mindMap.addPlugin 方法来动态注册的组件，那么需要调用一次重新渲染的方法：

```js
mindMap.addPlugin(Lineflow)
mindMap.reRender()
```

## 说明

### 配置

流动效果配置最终反映到的是主题上的三个字段：

```js
{
   // 否开启流动效果，仅在虚线时有效
  lineFlow: false,
  // 流动效果一个周期的时间，单位：s
  lineFlowDuration: 1,
  // 流动方向是否是正方向，即从父节点到子节点
  lineFlowForward: true
}
```

### 温馨提醒

1.如果要开启所有虚线的流动效果，可以通过修改主题配置的相关方法；

2.单个节点自身的设置优先级高于整体的设置；

3.对于较复杂的虚线效果可能流动效果会出现跳动；

4.目录组织图、组织结构图，水平线的流动会有问题；

## 使用方法

### 开启或更新所有连线的流动效果

要实现这个功能实际上就是修改主题配置中的流动效果相关字段。

```js
const customConfig = {
    lineFlow: false,
    lineFlowDuration: 1,
    lineFlowForward: true
    // 其他主题配置...
}

const update = (prop, value) => {
    customConfig[prop] = value
    mindMap.setThemeConfig({
        ...customConfig
    })
}

// 开启流动效果
update('lineFlow', true)
```

要获取当前配置的话可以通过`getThemeConfig`方法：

```js
Object.keys(customConfig).forEach(key => {
    customConfig[key] = mindMap.getThemeConfig(key)
})
```

### 开启或更新指定节点的流动效果

要实现这个功能实际上就是更新节点自身的数据：

```js
let activeNodes = []
mindMap.on('node_active', (node, nodeList) => {
    activeNodes = [...nodeList]
})

const nodeConfig = {
    lineFlow: false,
    lineFlowDuration: 1,
    lineFlowForward: true
    // 其他节点配置...
}
const update = (prop, value) =>  {
    nodeConfig[prop] = value
    activeNodes.forEach(node => {
        node.setStyle(prop, value)
    })
}
```

要回显数据的话可以通过节点的`getStyle`方法：

```js
Object.keys(nodeConfig).forEach(item => {
    nodeConfig[item] = activeNodes[0].getStyle(item, false)
})
```

当然，插件也提供了一个方法来更新：

```js
mindMap.lineflow.updateNodeLineFlow(activeNodes, {
    ...nodeConfig
})
```

## 方法

### updateNodeLineFlow(appointNodes, config = {})

- `appointNodes`：单个节点实例，或节点实例数组，可以传递空数组，代表给当前激活的节点设置

- `config`：流动效果设置，对象类型，可以只传递部分字段，结构如下：

```js
{
    lineFlow: false,// 虚线连线是否开启流动效果
    lineFlowDuration: 1,// 连线动画一个周期的时间，单位：s
    lineFlowForward: true,// 流动方向是否是从父节点到子节点
}
```

更新指定节点的流动效果设置。