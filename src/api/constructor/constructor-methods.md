# 构造函数

## 静态方法

### defineTheme(name, config)

> v0.2.23+

定义新主题。

`name`：新主题名称

`config`：主题数据

`simple-mind-map`内置了众多主题，另外你也可以注册新主题，建议在实例化之前进行注册，这样在实例化时可以直接使用新注册的主题，使用示例：

```js
import MindMap from 'simple-mind-map'
// 注册新主题
MindMap.defineTheme('主题名称', {})

// 1.实例化时使用新注册的主题
const mindMap = new MindMap({
    theme: '主题名称'
})

// 2.动态切换新主题
mindMap.setTheme('主题名称')
```

主题的所有配置可以参考[默认主题](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/default.js)。`defineTheme`方法会把你传入的配置和默认配置做合并。大部分主题其实需要自定义的部分不是很多，一个典型的自定义主题配置可以参考[blueSky](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/blueSky.js)。

### removeTheme(name)

> v0.12.0+

- `name`：主题名称

移除注册的主题。

### usePlugin(plugin, opt = {})

> v0.3.0+

- `opt`：v0.4.0+，插件参数。如果某个插件支持自定义选项的话可以通过这个参数传入。


注册插件，如果需要使用非核心的一些功能，比如小地图、水印等，可以通过该方法进行注册。可链式调用。

注意：插件需要在实例化`MindMap`前注册。

### hasPlugin(plugin)

> v0.4.0+

获取是否注册了某个插件，返回的是插件在注册插件列表里的索引，为`-1`则代表插件没有注册。


## 实例方法

### getElRectInfo()

更新容器元素的位置和大小信息。当容器元素在页面中的位置发生了改变之后务必调用该方法更新信息。如果容器元素大小也发生了改变，那么请调用`resize`方法。

### updateData(data)

> v0.9.9+

更新画布数据，如果新的数据是在当前画布节点数据基础上增删改查后形成的，那么可以使用该方法来更新画布数据。性能会更好，不会重新创建所有节点，而是会尽可能的复用。

### clearDraw()

> v0.8.0+

清空`lineDraw`、`associativeLineDraw`、`nodeDraw`、`otherDraw`容器。

### destroy()

> v0.6.0+

销毁思维导图。会移除注册的插件、移除监听的事件、删除画布的所有节点。

### getSvgData({ paddingX = 0, paddingY = 0, ignoreWatermark = false, addContentToHeader, addContentToFooter, node })

> v0.3.0+

`paddingX`：水平内边距

`paddingY`：垂直内边距

`ignoreWatermark`：v0.8.0+，不要绘制水印，如果不需要绘制水印的场景可以传`true`，因为绘制水印非常慢

`addContentToHeader`：v0.9.9+，Function，可以返回要追加到头部的自定义内容，详细介绍见【实例化选项】中的该配置

`addContentToFooter`：v0.9.9+，Function，可以返回要追加到尾部的自定义内容，详细介绍见【实例化选项】中的该配置

`node`: v0.9.11+, 节点实例，如果传了，那么仅导出该节点的内容

获取`svg`数据，返回一个对象，详细结构如下：

```js
{
  svg, // Element，思维导图图形的整体svg元素，包括：svg（画布容器）、g（实际的思维导图组）
  svgHTML, // String，svg字符串，即html字符串，可以直接渲染到你准备的小地图容器内
  rect: // Object，思维导图图形未缩放时的位置尺寸等信息
  origWidth, // Number，画布宽度
  origHeight, // Number，画布高度
  scaleX, // Number，思维导图图形的水平缩放值
  scaleY, // Number，思维导图图形的垂直缩放值
  clipData// v0.9.11+，如果传了node，即导出指定节点的内容，那么会返回该字段，代表从完整的图片中裁剪出该节点区域的位置坐标数据
}
```

### render(callback)

- `callback`：`v0.3.2+`，`Function`，当重新渲染完成时调用

触发整体渲染，会进行节点复用，性能较`reRender`会更好一点，如果只是节点位置变化了可以调用该方法进行渲染

### reRender(callback)

- `callback`：`v0.3.2+`，`Function`，当重新渲染完成时调用

整体重新渲染，会清空画布，节点也会重新创建，性能不好，慎重使用

### resize()

容器尺寸变化后，需要调用该方法进行适应

### setMode(mode)

> v0.1.7+

切换模式为只读或编辑。

`mode`：readonly、edit

### on(event, fn)

监听事件，事件列表：

| 事件名称                         | 描述                                       | 回调参数                                                     |
| -------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| data_change                      | 渲染树数据变化，可以监听该方法获取最新数据 | data（当前渲染树数据）                                       |
| view_data_change（v0.1.1+）      | 视图变化数据，比如拖动或缩放时会触发       | data（当前视图状态数据）                                     |
| back_forward                     | 前进或回退                                 | activeHistoryIndex（当前在历史数据数组里的索引）、length（当前历史数据数组的长度） |
| draw_click                       | *画布的单击事件*                           | e（事件对象）                                                |
| svg_mousedown                    | svg画布的鼠标按下事件                      | e（事件对象）                                                |
| mousedown                        | el元素的鼠标按下事件                       | e（事件对象）、this（Event事件类实例）                       |
| mousemove                        | el元素的鼠标移动事件                       | e（事件对象）、this（Event事件类实例）                       |
| drag                             | 如果是按住左键拖动的话会触发拖动事件       | e（事件对象）、this（Event事件类实例）                       |
| mouseup                          | el元素的鼠标松开事件                       | e（事件对象）、this（Event事件类实例）                       |
| mousewheel                       | 鼠标滚动事件                               | e（事件对象）、dir（向上up还是向下down滚动。v0.9.2+已改为dirs，数组类型，即支持同时保存多个方向）、this（Event事件类实例）、isTouchPad（v0.6.1+，是否是触控板触发的事件） |
| contextmenu                      | svg画布的鼠标右键菜单事件                  | e（事件对象）                                                |
| node_click                       | 节点的单击事件                             | this（节点实例）、e（事件对象）                              |
| node_mousedown                   | 节点的鼠标按下事件                         | this（节点实例）、e（事件对象）                              |
| node_mouseup                     | 节点的鼠标松开事件                         | this（节点实例）、e（事件对象）                              |
| node_dblclick                    | 节点的双击事件                             | this（节点实例）、e（事件对象）                              |
| node_contextmenu                 | 节点的右键菜单事件                         | e（事件对象）、this（节点实例）                              |
| node_mouseenter（v0.4.1+）       | 节点的鼠标移入事件     | this（节点实例）、e（事件对象）            |
| node_mouseleave（v0.4.1+）       | 节点的鼠标移出事件     | this（节点实例）、e（事件对象）            |
| before_node_active               | 节点激活前事件                             | this（节点实例）、activeNodeList（当前激活的所有节点列表）   |
| node_active                      | 节点激活事件                               | this（节点实例）、activeNodeList（当前激活的所有节点列表）   |
| expand_btn_click                 | 节点展开或收缩事件                         | this（节点实例）                                             |
| before_show_text_edit            | 节点文本编辑框即将打开事件                 |                                                              |
| hide_text_edit                   | 节点文本编辑框关闭事件【关联线的文本编辑结束也会触发该事件，此时没有回调参数，所以需要做好防御性编程】                     | textEditNode（文本编辑框DOM节点）、activeNodeList（当前激活的所有节点列表）、node（v0.10.2+，当前文本编辑的节点实例） |
| scale                            | 画布放大缩小事件                               | scale（缩放比例）                                            |
| translate（v0.9.10+）               | 画布移动事件              | x（水平位移）、y（垂直位移）                     |
| node_img_dblclick（v0.2.15+）    | 节点内图片的双击事件                       | this（节点实例）、e（事件对象）                              |
| node_img_mouseenter（v0.6.5+）    |  节点内图片的鼠标移入事件                      | this（节点实例）、imgNode（图片节点）、e（事件对象）                              |
| node_img_mouseleave（v0.6.5+）    |  节点内图片的鼠标移出事件                      | this（节点实例）、imgNode（图片节点）、e（事件对象）                              |
| node_img_mousemove（v0.6.5+）    |  节点内图片的鼠标移动事件                      | this（节点实例）、imgNode（图片节点）、e（事件对象）                              |
| node_tree_render_end（v0.2.16+） | 节点树渲染完毕事件   |           |
| node_tree_render_start（v0.10.0+） | 节点树开始渲染事件   |           |
| rich_text_selection_change（v0.4.0+）         |  当注册了`RichText`插件时可用。当节点编辑时，文本选区发生改变时触发         |  hasRange（是否存在选区）、rectInfo（选区的尺寸和位置信息）、formatInfo（选区的文本格式化信息）            |
| transforming-dom-to-images（v0.4.0+）         |  当注册了`RichText`插件时可用。当`svg`中存在`DOM`节点时，导出为图片时会将`DOM`节点转换为图片，转换过程中会触发该事件，可用通过该事件给用户提示，告知目前转换到的节点         |  index（当前转换到的节点索引）、len（一共需要转换的节点数量）            |
| node_dragging（v0.4.5+）    | 当某个节点被拖拽时触发   |  node（当前被拖拽的节点）           |
| node_dragend（v0.4.5+）    | 节点被拖拽结束时触发   |  { overlapNodeUid, prevNodeUid, nextNodeUid }（v0.6.12+，本次节点移动到的节点uid，比如本次移动到了节点A上，那么overlapNodeUid就是节点A的uid，如果移动到了B节点的前面，那么nextNodeUid就是节点B的uid，你可以通过mindMap.renderer.findNodeByUid(uid)方法来获取节点实例）           |
| associative_line_click（v0.4.5+）    |  点击某条关联线时触发  |  path（连接线节点）、clickPath（不可见的点击线节点）、node（起始节点）、toNode（目标节点）           |
| svg_mouseenter（v0.5.1+）    | 鼠标移入svg画布时触发   | e（事件对象）  |
| svg_mouseleave（v0.5.1+）    | 鼠标移出svg画布时触发   | e（事件对象）  |
| node_icon_click（v0.6.10+）    | 点击节点内的图标时触发   | this（节点实例）、item（点击的图标名称）、e（事件对象）、node(图标节点，v0.9.9+)  |
| node_icon_mouseenter（v0.9.9+）    |  鼠标移入节点内的图标时触发  | this（节点实例）、item（点击的图标名称）、e（事件对象）、node(图标节点)  |
| node_icon_mouseleave（v0.9.9+）    |  鼠标移出节点内的图标时触发  | this（节点实例）、item（点击的图标名称）、e（事件对象）、node(图标节点)  |
| view_theme_change（v0.6.12+）    | 调用了setTheme方法设置主题后触发   | theme（设置的新主题名称）  |
| set_data（v0.7.3+）    | 调用了setData方法动态设置思维导图数据时触发   | data（新的思维导图数据）  |
| resize（v0.8.0+）    |  容器尺寸改变后触发，实际上是当思维导图实例的`resize`方法被调用后触发  |   |
| beforeDestroy（v0.9.0+）    |  思维导图销毁前触发，即调用了destroy方法触发  |   |
| body_mousedown（v0.9.2+）    | document.body的鼠标按下事件                      | e（事件对象）      |
| body_click    | document.body的点击事件                      | e（事件对象）      |
| data_change_detail（v0.9.3+）    |  渲染树数据变化的明细，会返回一个数组，每一项代表一个更新点，每一项都是一个对象，存在一个`type`属性，代表明细的类型，包含`create`（创建节点）、`update`（更新节点）、`delete`（删除节点），存在一个`data`属性，代表当前更新的节点数据，如果是`update`类型，还会存在一个`oldData`属性，保存了更新前该节点的数据  | arr（明细数据）      |
| layout_change（v0.9.4+）    | 修改结构时触发，即调用了mindMap.setLayout()方法时触发  | layout（新的结构）      |
| node_cooperate_avatar_click（v0.9.9+）    | 协同编辑时，鼠标点击人员头像时触发  |  userInfo(人员信息)、 this(当前节点实例)、 node(头像节点)、 e(事件对象)      |
| node_cooperate_avatar_mouseenter（v0.9.9+）    | 协同编辑时，鼠标移入人员头像时触发  |  userInfo(人员信息)、 this(当前节点实例)、 node(头像节点)、 e(事件对象)     |
| node_cooperate_avatar_mouseleave（v0.9.9+）    | 协同编辑时，鼠标移除人员头像时触发  |  userInfo(人员信息)、 this(当前节点实例)、 node(头像节点)、 e(事件对象)      |
| exit_demonstrate（v0.9.11+）    | 退出演示模式时触发  |     |
| demonstrate_jump（v0.9.11+）    | 演示模式中，切换步骤时触发  |  currentStepIndex（当前播放到的步骤索引，从0开始计数）、stepLength（总的播放步骤数量）   |
| node_tag_click（v0.9.12+）    | 节点标签的点击事件 | this(当前节点实例)、item（点击的标签内容）、index（v0.10.3+，该标签在标签列表里的索引）、tagNode（v0.10.3+，标签节点，@svgdotjs/svg.js库的G实例，可以用于获取标签位置和大小信息）    |
| node_layout_end（v0.10.1+）    | 单个节点内容布局完成的事件 | this(当前节点实例)  |
| node_attachmentClick（v0.9.10+）    | 节点附件图标的点击事件 | this(当前节点实例)、e（事件对象）、node（图标节点）  |
| node_attachmentContextmenu（v0.9.10+）    | 节点附件图标的右键点击事件 | this(当前节点实例)、e（事件对象）、node（图标节点）  |
| before_update_config（v0.10.4+）    | 更新配置前触发，即当调用了`mindMap.updateConfig`方法更新配置时触发 | opt（未更新前的配置对象，引用对象，而非拷贝，所以当after_update_config事件触发后，该对象也会同步变化，所以需要缓存你需要的某个配置字段）  |
| after_update_config（v0.10.4+）    | 更新配置后触发 |  opt（更新后的配置对象）、lastOpt（v0.12.1+，上一次的配置对象，可以用于和opt进行比对某个配置是否发生了改变，不过需要注意的是值为简单类型的选项字段才可以比对） |
| node_note_click（v0.10.6+）    | 节点备注图标的点击事件 | this(当前节点实例)、e（事件对象）、node（图标节点）  |
| search_match_node_list_change（v0.11.0+）    | 搜索插件：当搜索匹配的节点列表改变时触发 | list（匹配的节点列表，请注意，数组项里的数据可能是节点实例也可能是节点数据，需要做好判断）  |
| node_text_edit_change（v0.11.1+）    | 节点文本编辑中当输入的文本改变时触发 | { node, text, richText } 字段含义依次为：当前正在编辑的节点实例、当前最新的文本、是否是富文本 |

### emit(event, ...args)

触发事件，可以是上面表格里的事件，也可以是自定义事件

### off(event, fn)

解绑事件

### setTheme(theme, notRender = false)

- `notRender`：v0.8.0+，是否不要调用render方法更新画布。

切换主题，可选主题见上面的选项表格

### getTheme()

获取当前主题

### setThemeConfig(config, notRender = false)

- `notRender`：v0.8.0+，是否不要调用render方法更新画布。

设置主题配置，`config`同上面选项表格里的选项`themeConfig`

### getCustomThemeConfig()

获取自定义主题配置

### getThemeConfig(prop)

获取某个主题配置属性值

### getConfig(*prop*)

> 0.2.24+

`prop`：获取指定配置的值，不传则返回整个配置

获取配置，即`new MindMap(opt)`的`opt`

### updateConfig(*opt* = {})

> 0.2.24+

`opt`：要更新的配置

更新配置，即更新`new MindMap(opt)`的`opt`，可以只更新部分数据，比如：

```js
mindMap.updateConfig({
    enableFreeDrag: true// 开启节点自由拖拽
})
```

该方法只做更新配置的事情，没有其他副作用，比如触发画布重新渲染之类的

### getLayout()

获取当前的布局结构

### setLayout(layout, notRender = false)

- `notRender`：v0.8.0+，是否不要调用render方法更新画布。

设置布局结构，可选值见上面选项表格的`layout`字段

### execCommand(name, ...args)

执行命令，每执行一个命令就会在历史堆栈里添加一条记录用于回退或前进。所有命令如下：

| 命令名称                            | 描述                                                         | 参数                                                         |
| ----------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| SELECT_ALL                          | 全选                                                         |                                                              |
| BACK                                | 回退指定的步数                                               | step（要回退的步数，默认为1）                                |
| FORWARD                             | 前进指定的步数                                               | step（要前进的步数，默认为1）                                |
| INSERT_NODE                         | 插入同级节点，操作节点为当前激活的节点或指定节点，如果有多个激活节点，只会对第一个有效（v0.7.2+支持对多个激活节点同时插入兄弟节点） | openEdit（v0.4.6+，是否激活新插入的节点并进入编辑模式，默认为`true`）、 appointNodes（v0.4.7+，可选，指定要插入兄弟节点的节点，指定多个节点可以传一个数组）、 appointData（可选，指定新创建节点的数据，比如{text: 'xxx', ...}，详细结构可以参考[exampleData.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js)）、 appointChildren（v0.6.14+，可选，指定新创建节点的子节点，数组类型）     |
| INSERT_CHILD_NODE                   | 插入子节点，操作节点为当前激活的节点或指定节点                         |   openEdit（v0.4.6+，是否激活新插入的节点并进入编辑模式，默认为`true`）、 appointNodes（v0.4.7+，可选，指定节点，指定多个节点可以传一个数组）、 appointData（可选，指定新创建节点的数据，比如{text: 'xxx', ...}，详细结构可以参考[exampleData.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js)）、 appointChildren（v0.6.14+，可选，指定新创建节点的子节点，数组类型）                                                          |
| UP_NODE                             | 上移节点，操作节点为当前激活的节点，如果有多个激活节点，只会对第一个有效，对根节点或在列表里的第一个节点使用无效 |                                                              |
| DOWN_NODE                           | 操作节点为当前激活的节点，如果有多个激活节点，只会对第一个有效，对根节点或在列表里的最后一个节点使用无效 |                                                              |
| REMOVE_NODE                         | 删除节点，操作节点为当前激活的节点或指定节点                         |   appointNodes（v0.4.7+，可选，指定节点，指定多个节点可以传一个数组）                                                           |
| PASTE_NODE                          | 粘贴节点到节点，操作节点为当前激活的节点                     | data（要粘贴的节点数据，一般通过`renderer.copyNode()`方法和`renderer.cutNode()`方法获取） |
| CUT_NODE                            | 剪切节点，操作节点为当前激活的节点，如果有多个激活节点，只会对第一个有效，对根节点使用无效 | callback(回调函数，剪切的节点数据会通过调用该函数并通过参数返回) |
| SET_NODE_STYLE                      | 修改节点单个样式                                                 | node（要设置样式的节点）、style（样式属性）、value（样式属性值）、isActive（v0.7.0+已废弃，布尔值，是否设置的是激活状态的样式） |
| SET_NODE_STYLES（v0.6.12+）                      | 修改节点多个样式                                                 | node（要设置样式的节点）、style（样式对象，key为样式属性，value为样式值）、isActive（v0.7.0+已废弃，布尔值，是否设置的是激活状态的样式） |
| SET_NODE_ACTIVE                     | 设置节点是否激活（该命令仅更新节点数据中的激活字段和节点激活样式，如果你想实现和鼠标点击节点激活的效果，请直接使用节点实例的`active()`方法）   | node（要设置的节点）、active（布尔值，是否激活）             |
| CLEAR_ACTIVE_NODE                   | 清除当前已激活节点的激活状态，操作节点为当前激活的节点       |                                                              |
| SET_NODE_EXPAND                     | 设置节点是否展开                                             | node（要设置的节点）、expand（布尔值，是否展开）             |
| EXPAND_ALL     | 展开所有节点      |   uid（v0.11.1+，只展开指定uid节点下的所有子孙节点）           |
| UNEXPAND_ALL     | 收起所有节点       | isSetRootNodeCenter（v0.9.11+，默认为true，收起所有节点后是否将根节点移至中心）、uid（v0.11.1+，只收起指定uid节点的所有子孙节点） |
| UNEXPAND_TO_LEVEL（v0.2.8+）        | 展开到指定层级                                               | level（要展开到的层级，1、2、3...）                          |
| SET_NODE_DATA                       | 更新节点数据，即更新节点数据对象里`data`对象的数据，注意这个命令不会触发视图的更新           | node（要设置的节点）、data（对象，要更新的数据，如`{expand: true}`） |
| SET_NODE_TEXT                       | 设置节点文本                                                 | node（要设置的节点）、text（要设置的文本字符串，换行可以使用`\n`）、richText（v0.4.0+，如果要设置的是富文本字符，需要设为`true`）、resetRichText（v0.6.10+是否要复位富文本，默认为false，如果传true那么会重置富文本节点的样式） |
| SET_NODE_IMAGE                      | 设置节点图片                                                 | node（要设置的节点）、imgData（对象，图片信息，结构为：`{url, title, width, height}`，图片的宽高必须要传） |
| SET_NODE_ICON                       | 设置节点图标                                                 | node（要设置的节点）、icons（数组，预定义的图片名称组成的数组，可用图标可在[icons.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/svg/icons.js)文件里的`nodeIconList`列表里获取到，图标名称为`type_name`，如`['priority_1']`） |
| SET_NODE_HYPERLINK                  | 设置节点超链接                                               | node（要设置的节点）、link（超链接地址）、title（超链接名称，可选） |
| SET_NODE_NOTE                       | 设置节点备注                                                 | node（要设置的节点）、note（备注文字）                       |
| SET_NODE_ATTACHMENT（v0.9.10+）                       | 设置节点附件                                                 | node（要设置的节点）、url（附件url）、name（附件名称，可选）                       |
| SET_NODE_TAG                        | 设置节点标签                                                 | node（要设置的节点）、tag（v0.10.3以前的版本只支持字符串数组，即['标签']，v0.10.3+版本支持对象数组，即[{ text: '标签', style: {} }]） |
| INSERT_AFTER（v0.1.5+）             | 将节点移动到另一个节点的后面    | node（要移动的节点，（v0.7.2+支持传递节点数组实现同时移动多个节点））、 exist（目标节点）                     |
| INSERT_BEFORE（v0.1.5+）            | 将节点移动到另一个节点的前面，（v0.7.2+支持传递节点数组实现同时移动多个节点）   | node（要移动的节点）、 exist（目标节点）                     |
| MOVE_NODE_TO（v0.1.5+）             | 移动节点作为另一个节点的子节点，（v0.7.2+支持传递节点数组实现同时移动多个节点）   | node（要移动的节点）、 toNode（目标节点）                    |
| ADD_GENERALIZATION（v0.2.0+）       | 添加节点概要                                                 | data（概要的数据，对象格式，节点的数字段都支持，默认为{text: '概要'}）、openEdit（v0.9.11+，默认为true，是否默认进入文本编辑状态） |
| REMOVE_GENERALIZATION（v0.2.0+）    | 删除节点概要                                                 |                                                              |
| SET_NODE_CUSTOM_POSITION（v0.2.0+） | 设置节点自定义位置                                           | node（要设置的节点）、 left（自定义的x坐标，默认为undefined）、 top（自定义的y坐标，默认为undefined） |
| RESET_LAYOUT（v0.2.0+）             | 一键整理布局                                                 |                                                              |
| SET_NODE_SHAPE（v0.2.4+）           | 设置节点形状                                                 | node（要设置的节点）、shape（形状，全部形状：[Shape.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/core/render/node/Shape.js)） |
| GO_TARGET_NODE（v0.6.7+）           |  定位到某个节点，如果该节点被收起，那么会自动展开到该节点   | node（要定位到的节点实例或节点uid）、callback（v0.6.9+，定位完成后的回调函数，v0.9.8+接收一个参数，代表目标节点实例） |
| INSERT_MULTI_NODE（v0.7.2+）           |  给指定的节点同时插入多个同级节点，操作节点为当前激活的节点或指定节点   | appointNodes（可选，指定节点，指定多个节点可以传一个数组）, nodeList（新插入节点的数据列表，数组类型） |
| INSERT_MULTI_CHILD_NODE（v0.7.2+）           |  给指定的节点同时插入多个子节点，操作节点为当前激活的节点或指定节点   | appointNodes（可选，指定节点，指定多个节点可以传一个数组）, childList（新插入节点的数据列表，数组类型） |
| INSERT_FORMULA（v0.7.2+）           |  给节点插入数学公式，操作节点为当前激活的节点或指定节点   | formula（要插入的数学公式，LaTeX 语法）, appointNodes（可选，指定要插入公式的节点，多个节点可以传数组，否则默认为当前激活的节点） |
| INSERT_PARENT_NODE（v0.8.0+）           |  给指定的节点插入父节点，操作节点为当前激活的节点或指定节点   | openEdit（是否激活新插入的节点并进入编辑模式，默认为`true`）、 appointNodes（可选，指定要插入父节点的节点，指定多个节点可以传一个数组）、 appointData（可选，指定新创建节点的数据，比如{text: 'xxx', ...}，详细结构可以参考[exampleData.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js)） |
| REMOVE_CURRENT_NODE（v0.8.0+）           |   仅删除当前节点，操作节点为当前激活的节点或指定节点   | appointNodes（可选，指定要删除的节点，指定多个节点可以传一个数组） |
| MOVE_UP_ONE_LEVEL（v0.9.6+）           |  将指定节点上移一个层级    | node（可选，指定要上移层级的节点，不传则为当前激活节点中的第一个） |
| REMOVE_CUSTOM_STYLES（v0.9.7+）           |  一键去除某个节点的自定义样式    | node（可选，指定要清除自定义样式的节点，不传则为当前激活节点中的第一个） |
| REMOVE_ALL_NODE_CUSTOM_STYLES（v0.9.7+）           |  一键去除多个节点或所有节点的自定义样式    | appointNodes（可选，节点实例数组，指定要去除自定义样式的多个节点，如果不传则会去除当前画布所有节点的自定义样式） |

### setData(data)

动态设置思维导图数据，纯节点数据

`data`：思维导图结构数据。v0.9.9+支持传空对象或者null，画布会显示空白。

### setFullData(*data*)

> v0.2.7+

动态设置思维导图数据，包括节点数据、布局、主题、视图

`data`：完整数据，结构可参考[exportFullData](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exportFullData.json)

### getData(withConfig)

> v0.2.9+

获取思维导图数据

`withConfig`：`Boolean`，默认为`false`，即获取的数据只包括节点树，如果传`true`则会包含主题、布局、视图等数据

### export(type, isDownload, fileName)

> 需要先注册`Export`插件

导出

`type`：要导出的类型，可选值：png、svg、json、pdf（v0.2.1+）、smm（本质也是json）

`isDownload`：是否需要直接触发下载，布尔值，默认为`false`

`fileName`：（v0.1.6+）导出文件的名称，默认为`思维导图`

如果是导出为`png`，那么可以传递第四个参数：

`transparent`：v0.5.7+, `Boolean`，默认为`false`，指定导出图片的背景是否是透明的

如果是导出为`svg`，那么可以传递第四个参数：

`plusCssText`：附加的`css`样式，如果`svg`中存在`dom`节点，想要设置一些针对节点的样式可以通过这个参数传入

如果是导出为`json`或`smm`，那么可以传递第四个参数：

`withConfig`：`Boolean`，默认为`true`，指定导出的数据中是否包含配置数据，否则只导出纯节点树数据

### toPos(x, y)

> v0.1.5+

将浏览器可视窗口的坐标转换成相对于画布的坐标

### addPlugin(plugin, opt)

> v0.4.0+

注册插件，使用`MindMap.usePlugin`注册插件只能在实例化之前，实例化后注册的插件是不会生效的，所以如果想在实例化后注册插件可以使用实例的`addPlugin`方法。

### removePlugin(plugin)

> v0.4.0+

移除注册的插件，无论是通过`usePlugin`还是`addPlugin`方法注册的插件都可以移除。

### appendCss(key, str)

> v0.12.0+

- `key`：唯一的标识，移除需要使用该标识。

- `str`：css样式字符串。

追加必要的css样式。该样式在实例化时会动态添加到页面，同时导出为svg时也会添加到svg源码中。

### removeAppendCss(key)

> v0.12.0+

- `key`：唯一的标识。

移除追加的css样式。