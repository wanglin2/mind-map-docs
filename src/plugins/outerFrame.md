# OuterFrame 插件

> v0.10.2+

该插件用于实现外框功能。

`v0.14.0+`版本新增了外框文本编辑和显示。

## 注册

```js
import MindMap from 'simple-mind-map'
import OuterFrame from 'simple-mind-map/src/plugins/OuterFrame.js'
MindMap.usePlugin(OuterFrame)
```

注册完且实例化`MindMap`后可通过`mindMap.outerFrame`获取到该实例。

应用使用可参考Demo该部分的代码：[NodeOuterFrame.vue](https://github.com/wanglin2/mind-map/blob/main/web/src/pages/Edit/components/NodeOuterFrame.vue)。

## 命令

该插件会向思维导图注册`ADD_OUTER_FRAME`命令，用于给节点添加外框：

```js
mindMap.execCommand('ADD_OUTER_FRAME', appointNodes, config = {})
```

- `appointNodes`：指定要添加外框的节点实例节点，可以是单个节点实例，也可以是节点实例数组，如果传递`[]`或`null`，则会向画布当前激活的节点添加外框

- `config`：外框配置，对象格式，字段如下：

| 字段名称            | 类型    | 默认值           | 描述         |
| ------------------ | ------- | --------------- | ------------|
| radius | Number | 5 | 外框圆角大小 |
| strokeWidth | Number | 2 | 外框边框宽度 |
| strokeColor | String | #0984e3 | 外框边框颜色 |
| strokeDasharray | String | 5,5 | 外框边框虚线 |
| fill | String | rgba(9,132,227,0.05) | 外框填充颜色 |
| fontSize（v0.14.0+） | Number | 14 | 外框文字字号 |
| fontFamily（v0.14.0+） | String | 微软雅黑, Microsoft YaHei | 外框文字字体 |
| fontWeight（v0.14.0+） | String | normal | 加粗，bold |
| fontStyle（v0.14.0+） | String | normal | 斜体，italic |
| color（v0.14.0+） | String | #fff | 外框文字颜色 |
| lineHeight（v0.14.0+） | Number | 1.2 | 外框文字行高 |
| textFill（v0.14.0+） | String | #0984e3 | 外框文字背景 |
| textFillRadius（v0.14.0+） | Number | 5 | 外框文字圆角 |
| textFillPadding（v0.14.0+） | Array | [5, 5, 5, 5] | 外框文字矩内边距，左上右下 |
| textAlign（v0.14.0+） | String | left | 外框文字水平显示位置，相对于外框，可选值：left、center、right |

## 事件

### outer_frame_active

当点击激活某个外框时触发。回调函数接收三个参数：el（外框元素，@svgdotjs/svg.js库的rect元素）, node（该范围所属节点的父节点实例）, range（范围区间，相对于node）

应用可以监听该事件来获取当前激活的外框，获取到其配置回显到页面，因为范围可能包含多个节点，所以通常取第一个节点实例，如果要获取外框在页面上的位置，可以调用`el.rbox`方法：

```js
mindMap.on('outer_frame_active', (el, parentNode, range) => {
    // 取范围内第一个节点的外框样式
    const firstNode = parentNode.children[range[0]]
    const firstNodeOuterFrame = firstNode.getData('outerFrame')
    // 获取外框的位置大小信息，你可以在该位置渲染你的配置浮层
    const { x, y, width, height } = el.rbox()
})
```

### outer_frame_delete

删除画布当前激活的外框时触发。

### before_show_text_edit

> v0.14.0+

即将进入外框文本编辑时触发。

### hide_text_edit

> v0.14.0+

结束外框文本编辑时触发。

## 静态属性

### OuterFrame.defaultStyle

> v0.14.0+

外框默认的样式配置。你可以用于ui界面的回显。

## 实例属性

### activeOuterFrame

当前激活的外框信息，对象类型，包含以下内容：

```js
{
    el,// 外框容器元素，@svgdotjs/svg.js库的Rect节点实例
    node,// 当前外框所属节点实例
    range// 当前外框在所属节点实例中包含的子节点范围
    textNode// 外框文本容器元素，@svgdotjs/svg.js库的G节点实例
}
```

## 方法

### getActiveOuterFrame()

获取当前激活的外框数据。返回一个对象，结构如下：

```js
{
    el,
    node,
    range
}
```

### updateActiveOuterFrame(config = {})

更新当前激活的外框。执行了该方法后请立即隐藏你的样式面板，因为会清除当前激活的外框。

### removeActiveOuterFrame()

删除当前激活的外框。

### getRangeNodeList(node, range)

获取某个节点指定范围的带外框的子节点列表。

### clearActiveOuterFrame()

清除当前激活的外框。

### getNodeRangeFirstNode(node, range)

> v0.14.0+

获取某个节点指定范围的带外框的第一个子节点。

### getStyle(node)

> v0.14.0+

获取指定外框的样式。

### showEditTextBox(g)

> v0.14.0+

- `g`：可以通过实例属性获取，activeOuterFrame.textNode

进入外框文本编辑。

### hideEditTextBox()

> v0.14.0+

隐藏文本编辑框。也就是结束文本编辑。

### removeActiveOuterFrameText()

> v0.14.0+

删除当前激活外框的文字。

### updateOuterFrameStyle()

> v0.14.0+

更新当前激活外框的样式。