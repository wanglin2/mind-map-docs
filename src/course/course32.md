# 如何实现单独设置某条关联线的样式

v0.12.2+版本支持单独设置某条关联线的样式，所以你可以开发一个面板来实现这个功能，本教程会介绍一下基本的开发思路。

目前支持设置的所有样式如下：

```js
const defaultStyle = {
  associativeLineColor: '',
  associativeLineWidth: 0,
  associativeLineActiveWidth: 0,
  associativeLineDasharray: '',
  associativeLineActiveColor: '',
  associativeLineTextFontSize: 0,
  associativeLineTextColor: '',
  associativeLineTextFontFamily: ''
}
```

你可以在默认主题的文件定义中查看：[default.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/theme/default.js)。

首先需要监听关联线的点击事件`associative_line_click`，然后保存一下相关的信息，同时需要获取一下该关联线当前的样式，这样就可以回显到表单中：

```js
mindMap.on('associative_line_click', onAssociativeLineClick)

let activeLineNode = null// 当前关联线的起始节点实例
let activeLineToNode = null// 当前关联线的目标节点实例
let style = {
    ...defaultStyle
}// 表单数据对象

const onAssociativeLineClick = (a, b, node, toNode) => {
    activeLineNode = node
    activeLineToNode = toNode
    // 调用关联线插件的getStyleConfig方法来获取某条关联线当前的样式
    const styleConfig = mindMap.associativeLine.getStyleConfig(node, toNode)
    Object.keys(style).forEach(item => {
        style[item] = styleConfig[item]
    })
    // 显示设置面板
}
```

关联线取消激活的事件也需要监听一下，用于关闭设置面板，复位变量：

```js
mindMap.on('associative_line_deactivate', associativeLineDeactivate)

const  associativeLineDeactivate = () => {
    // 隐藏设置面板
    activeLineNode = null
    activeLineToNode = null
    style = {
        ...defaultStyle
    }
}
```

当在表单中修改了某个样式的值时就需要更新思维导图数据和触发关联线样式的更新了，这个操作对应在节点数据中的字段为`associativeLineStyle`，它的结构如下：

```js
{
    uid1: {
        // 连接到uid为uid1节点的关联线对应的样式数据
    },
    uid2: {
        // 连接到uid为uid2节点的关联线对应的样式数据
    },
}
```

如果你需要修改节点数据的该字段的值，并且触发关联线的重新渲染。有两种方式可以实现：

1.调用节点的setStyle方法

```js
const update = (prop, value) => {
    style[prop] = value
    // 获取该关联线所属节点当前的样式数据，如果没有自定义过那么是没有值的
    const associativeLineStyle = activeLineNode.getData('associativeLineStyle') || {}
    const toNodeUid = activeLineToNode.getData('uid')
    // 先获取该关联线当前的样式，如果有的话
    const lineStyle = associativeLineStyle[toNodeUid] || {}
    // 更新样式数据，setStyle方法同时也会触发节点重新渲染
    activeLineNode.setStyle('associativeLineStyle', {
        ...associativeLineStyle,
        [toNodeUid]: {
            ...lineStyle,
            ...this.style
        }
    })
}
```

这个方法的缺点是重新渲染后关联线的激活状态会丢失，所以如果还想设置关联线的其他样式，只能重新激活该关联线。所以如果想保留关联线的激活样式，实现连续的样式设置操作，建议使用下面这种方法：

2.调用节点的setData方法

```js
const update = (prop, value) => {
    style[prop] = value
    const associativeLineStyle = activeLineNode.getData('associativeLineStyle') || {}
    const toNodeUid = activeLineToNode.getData('uid')
    const lineStyle = associativeLineStyle[toNodeUid] || {}
    activeLineNode.setData({
        associativeLineStyle: {
            ...associativeLineStyle,
            [toNodeUid]: {
                ...lineStyle,
                ...this.style
            }
        }
    })
    // 因为setData方法不会触发重新渲染，所以需要调用关联线插件的指定方法：
    mindMap.associativeLine.updateActiveLineStyle()
}
```

完整示例可以参考官方实现：[AssociativeLineStyle.vue](https://github.com/wanglin2/mind-map/blob/main/web/src/pages/Edit/components/AssociativeLineStyle.vue)。