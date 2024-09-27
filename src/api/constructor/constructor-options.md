# 构造函数

## 基本使用

```html
<div id="mindMapContainer"></div>
```

```js
import MindMap from "simple-mind-map";

const mindMap = new MindMap({
  el: document.getElementById('mindMapContainer'),
  data: {
    "data": {
        "text": "根节点"
    },
    "children": []
  }
});
```

### 特别提醒

节点树渲染是一个异步的操作，所以不能实例化完后立即调用一些需要节点渲染完成才能执行的操作，否则会发生错误和一些未知的现象，你需要监听`node_tree_render_end`事件，在节点树渲染完成后再进行。除了实例化，其他诸如：`setData`、`updateData`、`render`等方法都是异步的，也需要这样处理。

## 实例化选项

### 1.基本

| 字段名称       | 描述       | 类型    | 默认值           |
| --------- | ------- | ---------------- | ------- |
| el                               | 容器元素，必传，必须为DOM元素（当容器元素在页面上的位置发生了改变，但大小没有改变的情况下必须调用`getElRectInfo()`方法更新库内部的相关信息；当大小也发生了改变后必须调用`resize()`方法，否则会造成一些功能异常）              | Element |                  |
| data                             | 思维导图数据，可参考下方【数据结构】介绍。v0.9.9+支持传空对象或者null，画布会显示空白 | Object 、 null  |   |
| viewData   | 视图数据，可以用于恢复画布的位置和缩放。该数据可以通过`mindMap.view.getTransformData()`方法获取 | Object 、 null  |   |
| layout                           | 布局类型，可选列表：logicalStructure（逻辑结构图）、logicalStructureLeft（v0.10.2+，向左逻辑结构图）、mindMap（思维导图）、catalogOrganization（目录组织图）、organizationStructure（组织结构图）、timeline（v0.5.4+，时间轴）、timeline2（v0.5.4+，上下交替型时间轴）、fishbone（v0.5.4+，鱼骨图） | String  | logicalStructure |
| fishboneDeg（v0.5.4+）                      |  设置鱼骨结构图的斜线角度               | Number |  45          |
| theme                            | 主题，可选列表：default（默认）、classic（脑图经典）、minions（小黄人）、pinkGrape（粉红葡萄）、mint（薄荷）、gold（金色vip）、vitalityOrange（活力橙）、greenLeaf（绿叶）、dark2（暗色2）、skyGreen（天清绿）、classic2（脑图经典2）、classic3（脑图经典3）、classic4（脑图经典4，v0.2.0+）、classicGreen（经典绿）、classicBlue（经典蓝）、blueSky（天空蓝）、brainImpairedPink（脑残粉）、dark（暗色）、earthYellow（泥土黄）、freshGreen（清新绿）、freshRed（清新红）、romanticPurple（浪漫紫）、simpleBlack（v0.5.4+简约黑）、courseGreen（v0.5.4+课程绿）、coffee（v0.5.4+咖啡）、redSpirit（v0.5.4+红色精神）、blackHumour（v0.5.4+黑色幽默）、lateNightOffice（v0.5.4+深夜办公室）、blackGold（v0.5.4+黑金）、avocado（v.5.10-fix.2+牛油果）、autumn（v.5.10-fix.2+秋天）、orangeJuice（v.5.10-fix.2+橙汁） | String  | default          |
| themeConfig                      | 主题配置，会和所选择的主题进行合并，可用字段可参考：[default.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/default.js) | Object  | {}               |
| scaleRatio                       | 放大缩小的增量比例       | Number  | 0.1              |
| translateRatio（v0.11.2+）       | 平移的步长比例，只在鼠标滚轮和触控板触发的平移中应用      | Number  |      1         |
| minZoomRatio（v0.11.2+）         | 最小缩小值，百分数，最小为0，该选项只会影响view.narrow方法（影响的行为为Ctrl+-快捷键、鼠标滚轮及触控板），不会影响其他方法，比如view.setScale，需要你自行限制传入的大小       | Number  |      20         |
| maxZoomRatio（v0.11.2+）         |  最大放大值，百分数，传-1代表不限制，否则传0以上数字，，该选项只会影响view.enlarge方法      | Number  |      400        |
| customCheckIsTouchPad（v0.11.2+）   | 自定义判断wheel事件是否来自电脑的触控板，默认是通过判断e.deltaY的值是否小于10，显然这种方法是不准确的，当鼠标滚动的很慢，或者触摸移动的很快时判断就失效了，如果你有更好的方法，欢迎提交issue，如果你希望自己来判断，那么可以传递一个函数，接收一个参数e（事件对象），需要返回true或false，代表是否是来自触控板    | Function、Null  |              |
| maxTag                           | 节点里最多显示的标签数量，多余的会被丢弃     | Number  | 5                |
| tagPosition（v0.10.3+）      | 标签显示的位置，相对于节点文本，bottom（下方）、right（右侧）  | String  | right      |
| imgTextMargin                    | 节点里图片和文字的间距 | Number  | 5                |
| textContentMargin                | 节点里各种文字信息的间距，如图标和文字的间距 | Number  | 2                |
| customNoteContentShow（v0.1.6+） | 自定义节点备注内容显示，Object类型，结构为：{show: (noteContent, left, top, node) => {// 你的显示节点备注逻辑。node为v0.8.1+版本新增的回参，代表节点实例 }, hide: () => {// 你的隐藏节点备注逻辑 } } | Object  | null             |
| readonly（v0.1.7+）              | 是否是只读模式 | Boolean | false            |
| textAutoWrapWidth（v0.3.4+）     |   节点内每行文本达到该宽度后自动换行               | Number  | 500 |
| customHandleMousewheel（v0.4.3+）     | 自定义鼠标滚轮事件处理，可以传一个函数，回调参数为事件对象 | Function  | null |
| mousewheelAction（v0.4.3+）     | 鼠标滚轮的行为，`zoom`（放大缩小）、`move`（上下移动）。如果`customHandleMousewheel`传了自定义函数，这个属性不生效 | String  | zoom（v0.9.1+默认改为move） |
| mousewheelMoveStep（v0.4.3+）     | 当`mousewheelAction`设为`move`时，可以通过该属性控制鼠标滚动一下视图移动的步长，单位`px` | Number  | 100 |
| mousewheelZoomActionReverse（v0.6.5+）     |  当mousewheelAction设为zoom时，或者按住Ctrl键时，默认向前滚动是缩小，向后滚动是放大，如果该属性设为true，那么会反过来  | Boolean  | false（v0.9.1+默认改为true） |
| defaultInsertSecondLevelNodeText（v0.4.7+）     | 默认插入的二级节点的文字               | String  | 二级节点 |
| defaultInsertBelowSecondLevelNodeText（v0.4.7+）     | 默认插入的二级以下节点的文字   | String  | 分支主题 |
| expandBtnStyle（v0.5.0+）     | 展开收起按钮的颜色，（fontSize及strokeColor字段为0.7.0+版本新增的，用于设置收起时显示节点数量的文字样式）  | Object  | \{ color: '#808080', fill: '#fff', fontSize: 13, strokeColor: '#333333' \} |
| expandBtnIcon（v0.5.0+）     | 自定义展开收起按钮的图标，可以传图标的svg字符串（节点收起时渲染open图标，展开时渲染close图标）  | Object  | \{ open: '', close: '' \} |
| expandBtnNumHandler（v0.7.0+）     | 用于自定义收起时显示节点数量的内容，可以传递一个函数，v0.11.1之前的版本接收一个参数，代表收起的节点所有子孙节点的总数量，v0.11.1+版本接收两个参数，第一个还是有子孙节点的总数量，第二个为该节点实例。需要返回一个数字或字符串，代表最终显示的内容，比如你可以当数量大于99时，显示99+  | Function  |  |
| isShowExpandNum（v0.7.0+）     | 节点收起时是否显示收起的数量  | Boolean  | true |
| enableShortcutOnlyWhenMouseInSvg（v0.5.1+）     | 是否只有当鼠标在画布内才响应快捷键事件  | Boolean  | true |
| enableNodeTransitionMove（v0.5.1+）（v0.6.7+已去除该特性）     | 是否开启节点动画过渡  | Boolean  | true |
| nodeTransitionMoveDuration（v0.5.1+）（v0.6.7+已去除该特性）     | 如果开启节点动画过渡，可以通过该属性设置过渡的时间，单位ms  | Number  | 300 |
| initRootNodePosition（v0.5.3+）     | 初始根节点的位置，可传一个数组，默认为`['center', 'center']`，代表根节点处于画布中心位置，除了`center`，关键词还可以设置`left`、`top`、`right`、`bottom`，除了可以传关键词，数组的每项还可以传递一个数字，代表具体的像素，可以传递一个百分比字符串，比如`['40%', '60%']`，代表水平位置在画布宽度的`40%`的位置，垂直位置在画布高度的`60%`的位置  | Array  | null |
| nodeTextEditZIndex（v0.5.5+）     | 节点文本编辑框元素的z-index  | Number  | 3000 |
| nodeNoteTooltipZIndex（v0.5.5+）     | 节点备注浮层元素的z-index  | Number  | 3000 |
| isEndNodeTextEditOnClickOuter（v0.5.5+）     |  是否在点击了画布外的区域时结束节点文本的编辑状态 | Boolean  | true |
| maxHistoryCount（v0.5.6+）     | 最大历史记录数  | Number  | 1000（v0.9.2+改为500） |
| alwaysShowExpandBtn（v0.5.8+）     | 是否一直显示节点的展开收起按钮，默认为鼠标移上去和激活时才显示  | Boolean  | false |
| iconList（v0.5.8+）     | 扩展节点可插入的图标，数组的每一项为一个对象，对象详细结构请参考下方【图标配置】表格  | Array  | [] |
| maxNodeCacheCount（v0.5.10+）     | 节点最大缓存数量。为了优化性能，内部会维护一个节点缓存池，用来复用节点，通过该属性可以指定池的最大缓存数量  |  Number | 1000 |
| fitPadding（v0.6.0+）     |  思维导图适应画布大小时的内边距，单位：px |  Number | 50 |
| enableCtrlKeyNodeSelection（v0.6.0+）     | 是否开启按住ctrl键多选节点的功能  | Boolean  | true |
| useLeftKeySelectionRightKeyDrag（v0.6.0+）     | 设置为左键多选节点，右键拖动画布  | Boolean  | false |
| beforeTextEdit（v0.6.0+）     | 节点即将进入编辑前的回调方法，如果该方法返回true以外的值，那么将取消编辑，函数可以返回一个值，或一个Promise，回调参数为节点实例  |  Function/null | null |
| isUseCustomNodeContent（v0.6.3+）     | 是否自定义节点内容  |  Boolean | false |
| customCreateNodeContent（v0.6.3+）     | 如果`isUseCustomNodeContent`设为`true`，那么需要使用该选项传入一个方法，接收节点实例`node`为参数（如果要获取该节点的数据，可以通过`node.nodeData.data`），需要返回自定义节点内容元素，也就是DOM节点，如果某个节点不需要自定义，那么返回`null`即可 |  Function/null | null |
| mouseScaleCenterUseMousePosition（v0.6.4-fix.1+）     | 鼠标缩放是否以鼠标当前位置为中心点，否则以画布中心点 | Boolean  | true |
| customInnerElsAppendTo（v0.6.12+）     | 指定内部一些元素（节点文本编辑元素、节点备注显示元素、关联线文本编辑元素、节点图片调整按钮元素）添加到的位置，默认添加到document.body下 | null/HTMLElement  | null |
| enableCreateHiddenInput（v0.6.13+）（v0.6.14+版本已去除该特性）     | 是否允许创建一个隐藏的输入框，该输入框会在节点激活时聚焦，用于粘贴数据和自动进入文本编辑状态 | Boolean  | true |
| enableAutoEnterTextEditWhenKeydown（v0.6.13+）     | 是否在存在一个激活节点时，当按下中文、英文、数字按键时自动进入文本编辑模式 | Boolean  | true |
| customHandleClipboardText（v0.6.14+）     | 自定义对剪贴板文本的处理。当按ctrl+v粘贴时会读取用户剪贴板中的文本和图片，默认只会判断文本是否是普通文本和simple-mind-map格式的节点数据，如果你想处理其他思维导图的数据，比如processon、zhixi等，那么可以传递一个函数，接受当前剪贴板中的文本为参数，返回处理后的数据，可以返回两种类型：1.返回一个纯文本，那么会直接以该文本创建一个子节点；2.返回一个节点对象，格式如下：{ simpleMindMap: true, data: { data: { text: '' }, children: [] } }，代表是simple-mind-map格式的数据，节点数据同simple-mind-map节点数据格式，如果你的处理逻辑存在异步逻辑，也可以返回一个promise | Function  | null |
| errorHandler（v0.6.15+）     | 自定义错误处理函数，目前只会抛出一些异步逻辑出错的情况。可以传递一个函数，会接收两个参数，第一个为错误的类型，第二个为错误对象 | Function  |  |
| disableMouseWheelZoom（v0.6.15+）     | 禁止鼠标滚轮缩放，你仍旧可以使用api进行缩放 | Boolean  | false |
| enableDblclickReset（v0.6.17+）（v0.8.0+已删除该属性）     | 开启鼠标双击复位思维导图位置及缩放 | Boolean  | true（v0.7.0+改为false）  |
| enableDblclickBackToRootNode（v0.8.0+）     | 是否在鼠标双击时回到根节点，也就是让根节点居中显示 | Boolean  | false  |
| hoverRectColor（v0.7.0+）     | 节点鼠标hover和激活时显示的矩形边框颜色，hover时会添加0.6的透明度 | String  | rgb(94, 200, 248)  |
| hoverRectPadding（v0.7.0+）     | 节点鼠标hover和激活时显示的矩形边框距节点内容的距离 | Number  | 2  |
| selectTextOnEnterEditText（v0.7.0+）     | 双击节点进入节点文本编辑时是否默认选中文本，默认只在创建新节点时会选中 | Boolean  | true  |
| deleteNodeActive（v0.7.1+）     | 是否开启删除节点后自动激活节点相邻节点或父节点的功能 | Boolean  | true  |
| fit（v0.7.1-fix.2+）     | 首次渲染时是否缩放至适应画布大小 | Boolean  | false  |
| tagsColorMap（v0.7.2+）     | 自定义节点标签的颜色，可传一个对象，key为要指定颜色的标签内容，value为该标签内容的颜色，如果不传内部会根据标签内容生成对应的颜色 | Object  | \{\}  |
| cooperateStyle（v0.7.3+）     | 节点协作编辑时的人员头像样式配置，字段含义分别为：头像大小、如果是文字头像，那么文字的大小 | Object  | \{ avatarSize: 22, fontSize: 12 \}  |
| onlyOneEnableActiveNodeOnCooperate（v0.9.8+）     | 协同编辑时，同一个节点不能同时被多人选中 | Boolean | false  |
| defaultGeneralizationText（v0.8.0+）     | 插入概要的默认文本 |  String | 概要  |
| handleIsSplitByWrapOnPasteCreateNewNode（v0.8.0+）     | 粘贴文本的方式创建新节点时，控制是否按换行自动分割节点，即如果存在换行，那么会根据换行创建多个节点，否则只会创建一个节点，可以传递一个函数，返回promise，resolve代表根据换行分割，reject代表忽略换行 | Function / null | null  |
| addHistoryTime（v0.8.0+）     | 指定时间内只允许添加一次历史记录，避免添加没有必要的中间状态，单位：ms  | Number | 100  |
| isDisableDrag（v0.8.1+）     | 是否禁止拖动画布  | Boolean | false  |
| highlightNodeBoxStyle（v0.9.0+）（v0.11.1+已移除）     | 鼠标移入概要高亮所属节点时的高亮框样式  | Object | \{ stroke: 'rgb(94, 200, 248)', fill: 'transparent' \}  |
| createNewNodeBehavior（v0.9.1+）     | 创建新节点时的行为。default（默认会激活新创建的节点，并且进入编辑模式。如果同时创建了多个新节点，那么只会激活而不会进入编辑模式）、notActive（不激活新创建的节点）、activeOnly（只激活新创建的节点，不进入编辑模式）  | String | default  |
| defaultNodeImage（v0.9.1-fix.2+）     | 图片地址，当节点图片加载失败时显示的默认图片  | String |   |
| handleNodePasteImg（v0.9.2+）     | 在节点上粘贴剪贴板中的图片的处理方法，默认是转换为data:url数据插入到节点中，你可以通过该方法来将图片数据上传到服务器，实现保存图片的url。可以传递一个异步方法，接收Blob类型的图片数据，需要返回指定结构：{ url, size: {width, height} }  | null 或 Function | null  |
| isLimitMindMapInCanvas（v0.9.2+）     | 是否将思维导图限制在画布内。比如向右拖动时，思维导图图形的最左侧到达画布中心时将无法继续向右拖动，其他同理 | Boolean |  false |
| beforeShortcutRun（v0.9.9+）     | 快捷键操作即将执行前的生命周期函数，返回true可以阻止操作执行。函数接收两个参数：key（快捷键）、activeNodeList（当前激活的节点列表） | Function、null | null  |
| resetScaleOnMoveNodeToCenter（v0.9.12+）     | 移动节点到画布中心、回到根节点等操作时是否将缩放层级复位为100%（该选项实际影响的是render.moveNodeToCenter方法，moveNodeToCenter方法本身也存在第二个参数resetScale来设置是否复位，如果resetScale参数没有传递，那么使用resetScaleOnMoveNodeToCenter配置，否则使用resetScale配置）。 | Boolean |  false |
| createNodePrefixContent（v0.9.12+）     | 添加附加的节点前置内容。前置内容指和文本同一行的区域中的前置内容，不包括节点图片部分。可以传递一个函数，这个函数接收一个节点实例的参数，可以返回{el, width, height}格式的对象，el为DOM节点对象，width和height代表内容的宽高，数字类型，如果不需要自定义内容，也可以返回null | Function、null | null  |
| createNodePostfixContent（v0.9.12+）     | 添加附加的节点后置内容。后置内容指和文本同一行的区域中的后置内容，不包括节点图片部分。用法同createNodePrefixContent | Function、null | null  |
| disabledClipboard（v0.10.2+）     | 是否禁止粘贴用户剪贴板中的数据，禁止将复制的节点数据写入用户的剪贴板中，此时只能复制和粘贴画布内的节点数据 | Boolean | false |
| customHyperlinkJump（v0.10.2+）     | 自定义超链接的跳转。如果不传，默认会以新窗口的方式打开超链接，可以传递一个函数，函数接收两个参数：link（超链接的url）、node（所属节点实例），只要传递了函数，就会阻止默认的跳转 | null、Function | false |
| openPerformance（v0.10.4+）     | 是否开启性能模式，默认情况下所有节点都会直接渲染，无论是否处于画布可视区域，这样当节点数量比较多时（1000+）会比较卡，如果你的数据量比较大，那么可以通过该配置开启性能模式，即只渲染画布可视区域内的节点，超出的节点不渲染，这样会大幅提高渲染速度，当然同时也会带来一些其他问题，比如：1.当拖动或是缩放画布时会实时计算并渲染未节点的节点，所以会带来一定卡顿；2.导出图片、svg、pdf时需要先渲染全部节点，所以会比较慢；3.其他目前未发现的问题 | Boolean | false |
| performanceConfig（v0.10.4+）     | 性能优化模式配置。time（当视图改变后多久刷新一次节点，单位：ms）、padding（超出画布四周指定范围内依旧渲染节点）、removeNodeWhenOutCanvas（节点移出画布可视区域后是否从画布删除） | Object | \{ time: 250,  padding: 100, removeNodeWhenOutCanvas: true \} |
| notShowExpandBtn（v0.10.6+）     | 不显示展开收起按钮，优先级比alwaysShowExpandBtn配置高 | Boolean | false |
| emptyTextMeasureHeightText（v0.11.1+）     | 如果节点文本为空，那么为了避免空白节点高度塌陷，会用该字段指定的文本测量一个高度 | String | abc123我和你 |
| openRealtimeRenderOnNodeTextEdit（v0.11.1+）     | 是否在进行节点文本编辑时实时更新节点大小和节点位置，开启后当节点数量比较多时可能会造成卡顿 | Boolean | false |
| mousedownEventPreventDefault（v0.11.2+）     | 默认会给容器元素el绑定mousedown事件，并且会阻止其默认事件，这会带来一定问题，比如你聚焦在思维导图外的其他输入框，点击画布就不会触发其失焦，可以通过该选项关闭阻止。关闭后也会带来一定问题，比如鼠标框选节点时可能会选中节点文字，看你如何取舍 | Boolean | true |

#### 1.1数据结构

基本的数据结构如下：

```js
{
  data: {
    text: '', // 节点的文本，可以是富文本，也就是html格式的，此时richText要设为true
    richText: false, // 节点的文本是否是富文本模式
    expand: true, // 节点是否展开
    uid: '',// 节点唯一的id，可不传，内部会生成
    icon: [], // 图标，格式可参考教程里的【插入和扩展节点图标】章节
    image: '', // 图片的url
    imageTitle: '', // 图片的标题，可为空
    imageSize: { // 图片的尺寸
      width: 100, // 图片的宽度，必传
      height: 100, // 图片的高度，必传
      custom: false // 如果设为true，图片的显示大小不受主题控制，以imageSize.width和imageSize.height为准
    },
    hyperlink: '', // 超链接地址
    hyperlinkTitle: '', // 超链接的标题
    note: '', // 备注的内容
    attachmentUrl: '',// v0.9.10+，附件url
    attachmentName: '',// v0.9.10+，附件名称
    tag: [], // 标签列表，v0.10.3以前的版本只支持字符串数组，即['标签']，v0.10.3+版本支持对象数组，即[{text: '标签', style: {}}]，具体支持的标签样式可参考下方【标签的样式】
    generalization: [{// （0.9.0以下版本不支持数组，只能设置单个概要数据）节点的概要，如果没有概要generalization设为null即可
      text: '', // 概要的文本
      richText: false, // 节点的文本是否是富文本模式
      // ...其他普通节点的字段都支持，但是不支持children
    }],
    associativeLineTargets: [''],// 如果存在关联线，那么为目标节点的uid列表
    associativeLineText: '',// 关联线文本
    // ...其他样式字段，可以参考主题
  },
  children [// 子节点，结构和根节点一致
    {
      data: {},
      children: []
    }
  ]
}
```

如果你要添加自定义的字段，可以添加到`data`、`children`同级，如果你要添加到`data`对象里，那么请使用`_`开头来命名你的自定义字段，内部会通过这个来判断是否是自定义字段。

##### 标签的样式

标签的样式`style`对象支持以下属性：

| 字段名称 | 类型   | 默认值     | 描述        |
| ----------- | ------ | -------- | ----------- |
| radius | Number | 3 | 标签矩形的圆角大小 |
| fontSize | Number | 12 | 字号，建议文字高度不要大于height |
| fill | String |  | 标签矩形的背景颜色 | 
| height | Number | 20 | 标签矩形的高度 |
| paddingX | Number | 8 | 水平内边距，如果设置了width，将忽略该配置 |
| width | Number |  | 标签矩形的宽度，如果不设置，默认以文字的宽度+paddingX*2为宽度 |

#### 1.2图标配置

| 字段名称    | 类型   | 默认值                                      | 描述                                 |
| ----------- | ------ | ------------------------------------------- | ------------------------------------ |
| name        | String |                                           | 图标分组的名称 |
| type        | String |                                           | 图标分组的值 |
| list        | Array  |                                           | 分组下的图标列表，数组的每一项为一个对象，`{ name: '', icon: '' }`，`name`代表图标的名称，`icon`代表图标，可以是`svg`图标，比如`<svg ...><path></path></svg>`，也可以是图片`url`，或者是`base64`图标，比如`data:image/png;base64,...` |


### 2.Export插件

| 字段名称                         | 类型    | 默认值           | 描述                                                         |
| -------------------------------- | ------- | ---------------- | ------------------------------------------------------------ |
| exportPadding（已废除）       | Number  | 20               | 导出图片时的内边距          |
| exportPaddingX（v0.5.5+）     |  Number | 10 | 导出png、svg、pdf时的图形水平内边距  |
| exportPaddingY（v0.5.5+）     | Number  | 10 | 导出png、svg、pdf时的图形垂直内边距  |
| resetCss（v0.6.16+）     | String  |  * \{ margin: 0; padding: 0; box-sizing: border-box; \} | 设置导出图片和svg时，针对富文本节点内容，也就是嵌入到svg中的html节点的默认样式覆盖，如果不覆盖，节点内容会发生偏移 |
| minExportImgCanvasScale（v0.7.0+）     | Number  | 2  | 导出图片和pdf时canvas的缩放倍数，该配置会和window.devicePixelRatio值取最大值，用于提升图片清晰度 |
| addContentToHeader（v0.9.9+）     | Function、null | null  | 导出png、svg、pdf时在头部添加自定义内容。可传递一个函数，这个函数可以返回null代表不添加内容，也可以返回一个对象，详细介绍请参考下方【导出时如何添加自定义内容】 |
| addContentToFooter（v0.9.9+）     | Function、null | null  | 基本释义同addContentToHeader，在尾部添加自定义内容 |
| handleBeingExportSvg（v0.10.1+）     | Function、null | null  | 导出png、svg、pdf时会获取画布上的svg数据进行克隆，然后通过该克隆的元素进行导出，如果你想对该克隆元素做一些处理，比如新增、替换、修改其中的一些元素，那么可以通过该参数传递一个处理函数，接收svg元素对象，处理后，需要返回原svg元素对象。（需要注意的是svg对象指的是@svgdotjs/svg.js库的元素对象，所以你需要阅读该库的文档来操作该对象） |
| maxCanvasSize（v0.11.2+）     | Number | 16384  | 图片或pdf都是通过canvas将svg绘制出来再进行导出，所以如果思维导图尺寸特别大，宽高可能会超出canvas支持的上限，所以会进行缩放，这个上限可以通过该参数设置，代表canvas宽和高的最大值 |

#### 2.1导出时如何添加自定义内容

`addContentToHeader`和`addContentToFooter`两个实例化选项可以用于在导出`png`、`svg`、`pdf`时在头部和尾部添加自定义的内容，默认为`null`，代表不配置，可以传递一个函数，函数可以返回`null`，代表不添加内容，如果要添加内容那么需要返回如下的结构：

```
{
  el,// 要追加的自定义DOM节点，样式可内联
  cssText,// 可选，如果样式不想内联，可以传递该值，一个css字符串
  height: 50// 返回的DOM节点的高度，必须传递
}
```

一个简单的示例：

```js
new MindMap({
  addContentToFooter: () => {
    const el = document.createElement('div')
    el.className = 'footer'
    el.innerHTML = '来自：simple-mind-map'
    const cssText = `
      .footer {
        width: 100%;
        height: 30px;
      }
    `
    return {
      el,
      cssText,
      height: 30
    }
  }
})
```

### 3.Select插件

| 字段名称                         | 类型    | 默认值           | 描述                                                         |
| -------------------------------- | ------- | ---------------- | ------------------------------------------------------------ |
| selectTranslateStep              | Number  | 3                | 多选节点时鼠标移动到边缘时的画布移动偏移量                   |
| selectTranslateLimit             | Number  | 20               | 多选节点时鼠标移动距边缘多少距离时开始偏移                   |

### 4.Drag插件

| 字段名称      | 描述      | 类型    | 默认值           |
| ---------- | ------- | ---------------- | ------- |
| enableFreeDrag（v0.2.4+）        | 是否开启节点自由拖拽（自由拖拽即可以把节点拖拽到画布的任意位置，注意不是拖拽节点成为其他节点的子节点兄弟节点的功能，自由拖拽的连线会存在一定问题，所以该特性最好不要使用）                                         | Boolean | false            |
| nodeDragPlaceholderMaxSize（v0.6.12+）（v0.10.0+已废除）     | 拖拽元素时，指示元素新位置的块的最大高度 | Number  | 20 |
| autoMoveWhenMouseInEdgeOnDrag（v0.7.1+）     | 拖拽节点时鼠标移动到画布边缘是否开启画布自动移动 | Boolean  | true  |
| dragMultiNodeRectConfig（v0.7.2+）     | 拖拽多个节点时随鼠标移动的示意矩形的样式配置，传递一个对象，字段含义分别为矩形的宽、高、填充色 | Object  | \{ width: 40, height: 20, fill: 'rgb(94, 200, 248)' \}  |
| dragPlaceholderRectFill（v0.7.2+）     | 节点拖拽时新位置的示意矩形的填充颜色 |  String | rgb(94, 200, 248)  |
| dragPlaceholderLineConfig（v0.10.0+）     | 节点拖拽时新位置的示意连线的样式配置 |  Object | \{ color: 'rgb(94, 200, 248)',  width: 2 \}  |
| dragOpacityConfig（v0.7.2+）     | 节点拖拽时的透明度配置，传递一个对象，字段含义分别为：跟随鼠标移动的克隆节点或矩形的透明度、被拖拽节点的透明度 | Object  | \{ cloneNodeOpacity: 0.5, beingDragNodeOpacity: 0.3 \}  |
| beforeDragEnd（v0.10.1+）     | 即将拖拽完成前调用该函数，函数接收一个对象作为参数：\{overlapNodeUid,prevNodeUid,nextNodeUid,beingDragNodeList\}，代表拖拽信息，如果要阻止本次拖拽，那么可以返回true，此时node_dragend事件不会再触发。函数可以是异步函数，返回Promise实例。beingDragNodeList为v0.10.2+新增的回调参数，为当前被拖拽的节点列表 | null、Function  | null  |
| handleDragCloneNode（v0.10.1+）     | 拖拽单个节点时会克隆被拖拽节点，如果想修改该克隆节点，那么可以通过该选项提供一个处理函数，函数接收克隆节点对象。（需要注意的是节点对象指的是@svgdotjs/svg.js库的元素对象，所以你需要阅读该库的文档来操作该对象） | null、Function  | null  |
| beforeDragStart（v0.10.2+）     | 即将开始拖拽节点前调用该函数，函数接收当前即将被拖拽的节点实例列表作为参数，如果要阻止本次拖拽，那么可以返回true。可以是异步函数，返回一个Promise实例 | null、Function（(nodeList) => \{\}）  | null  |

### 5.Watermark插件

| 字段名称                         | 类型    | 默认值           | 描述                                                         |
| -------------------------------- | ------- | ---------------- | ------------------------------------------------------------ |
| watermarkConfig（v0.2.4+）       | Object  |                  | 水印配置，详细配置请参考下方表格【水印配置】                 |

#### 5.1水印配置

| 字段名称    | 类型   | 默认值                                      | 描述                                 |
| ----------- | ------ | ------------------------------------------- | ------------------------------------ |
| text        | String | ''                                          | 水印文字，如果为空字符串则不显示水印 |
| lineSpacing | Number | 100                                         | 水印每行之间的间距                   |
| textSpacing | Number | 100                                         | 同一行水印之间的间距                 |
| angle       | Number | 30                                          | 水印的倾斜角度，范围：[0, 90]        |
| textStyle   | Object | \{color: '#999', opacity: 0.5, fontSize: 14\} | 水印文字样式                         |
| onlyExport（v0.9.2+）   | Boolean | false | 是否仅在导出时添加水印                         |
| belowNode（v0.10.0+）   | Boolean | false | 水印是否显示在节点下方                         |

### 6.AssociativeLine插件

| 字段名称                         | 类型    | 默认值           | 描述                                                         |
| -------------------------------- | ------- | ---------------- | ------------------------------------------------------------ |
| defaultAssociativeLineText（v0.5.11+）     |  String | 关联 |  关联线默认文字 |
| associativeLineIsAlwaysAboveNode（v0.8.0+）     |  Boolean | true  | 关联线是否始终显示在节点上层，如果设为false，那么创建关联线和激活关联线时处于最顶层，其他情况下处于节点下方 |
| associativeLineInitPointsPosition（v0.9.5+）     | null / \{ from, to \} | \{ from: '', to: '' \}  | 默认情况下，新创建的关联线两个端点的位置是根据两个节点中心点的相对位置来计算的，如果你想固定位置，可以通过这个选项来配置。from和to都不传，则都自动计算，如果只传一个，另一个则会自动计算。from和to可选值：left、top、bottom、right |
| enableAdjustAssociativeLinePoints（v0.9.5+）     | Boolean | true  | 是否允许调整关联线两个端点的位置 |

### 7.RichText插件

| 字段名称                         | 类型    | 默认值           | 描述                                                         |
| -------------------------------- | ------- | ---------------- | ------------------------------------------------------------ |
| richTextEditFakeInPlace（v0.6.13+）     | Boolean  | false | 设置富文本节点编辑框和节点大小一致，形成伪原地编辑的效果，需要注意的是，只有当节点内只有文本、且形状是矩形才会有比较好的效果 |
| transformRichTextOnEnterEdit（v0.10.0+）     | null、Function  | null | 转换富文本内容，可以传递一个函数，当进入富文本编辑时会调用该函数，函数接收即将被编辑的富文本内容，需要返回你处理后的富文本内容 |
| beforeHideRichTextEdit（v0.10.0+）     | null、Function  | null | 可以传递一个函数，即将结束富文本编辑前会执行该函数，函数接收richText实例，所以你可以在此时机更新quill文档数据 |

### 8.TouchEvent插件

| 字段名称                         | 类型    | 默认值           | 描述                                                         |
| -------------------------------- | ------- | ---------------- | ------------------------------------------------------------ |
| disableTouchZoom（v0.8.1+）     | Boolean | false  | 禁止双指缩放，你仍旧可以使用api进行缩放，对TouchEvent插件生效  |
| minTouchZoomScale（v0.10.1+）     | Number | 20  | 允许最大和最小的缩放值，百分数，传-1代表不限制  |
| maxTouchZoomScale（v0.10.1+）     | Number | -1  |  同minTouchZoomScale |

### 9.Scrollbar插件

| 字段名称                         | 类型    | 默认值           | 描述                                                         |
| -------------------------------- | ------- | ---------------- | ------------------------------------------------------------ |
| isLimitMindMapInCanvasWhenHasScrollbar（v0.9.2+）     | Boolean |  true | 当注册了滚动条插件（Scrollbar）时，是否将思维导图限制在画布内，isLimitMindMapInCanvas配置不再起作用 |

### 10.Search插件

| 字段名称                         | 类型    | 默认值           | 描述                                                         |
| -------------------------------- | ------- | ---------------- | ------------------------------------------------------------ |
| isOnlySearchCurrentRenderNodes（v0.9.8+）     | Boolean | false  | 是否仅搜索当前渲染的节点，被收起的节点不会被搜索到 |

### 11.Cooperate插件

| 字段名称                         | 类型    | 默认值           | 描述                                                         |
| -------------------------------- | ------- | ---------------- | ------------------------------------------------------------ |
| beforeCooperateUpdate（v0.9.8+）     | Function、null | null  | 协同编辑时，节点操作即将更新到其他客户端前的生命周期函数。函数接收一个对象作为参数：\{ type: 【createOrUpdate（创建节点或更新节点）、delete（删除节点）】, list: 【数组类型，1.当type=createOrUpdate时，代表被创建或被更新的节点数据，即将同步到其他客户端，所以你可以修改该数据；2.当type=delete时，代表被删除的节点数据】 \} |

### 12.RainbowLines插件

| 字段名称                         | 类型    | 默认值           | 描述                                                         |
| -------------------------------- | ------- | ---------------- | ------------------------------------------------------------ |
| rainbowLinesConfig（v0.9.9+）     | Object | \{ open: false, colorsList: [] \}  | 彩虹线条配置，需要先注册RainbowLines插件。对象类型，结构：\{ open: false【是否开启彩虹线条】, colorsList: []【自定义彩虹线条的颜色列表，如果不设置，会使用默认颜色列表】 \} |

### 13.Demonstrate插件

| 字段名称                         | 类型    | 默认值           | 描述                                                         |
| -------------------------------- | ------- | ---------------- | ------------------------------------------------------------ |
| demonstrateConfig（v0.9.11+）     | Object、null | null  | 演示插件Demonstrate的配置。不传则使用默认配置，可传递一个对象，如果只配置某个属性，可以只设置该属性，其他没有设置的同样会使用默认配置，完整配置请参考下方【演示插件配置】小节 |

#### 13.1演示插件配置

| 字段名称    | 类型   | 默认值                                      | 描述                                 |
| ----------- | ------ | ------------------------------------------- | ------------------------------------ |
| boxShadowColor | String  | rgba(0, 0, 0, 0.8)  | 高亮框四周区域的颜色 |
| borderRadius   | String  | 5px                 | 高亮框的圆角大小 |
| transition     | String  | all 0.3s ease-out   | 高亮框动画的过渡属性，CSS的transition属性 |
| zIndex         | Number  | 9999                | 高亮框元素的层级 |
| padding        | Number  | 20                  | 高亮框的内边距 |
| margin         | Number  | 50                  | 高亮框的外边距 |
| openBlankMode（v0.9.12+） | Boolean | true     | 是否开启填空模式，即带下划线的文本默认不显示，按回车键才依次显示 |

### 14.Formula插件

| 字段名称       | 描述         | 类型    | 默认值           |
| ------------- | ------- | ---------------- | ------- |
| enableEditFormulaInRichTextEdit（v0.10.0+）     | 是否开启在富文本编辑框中直接编辑数学公式 | Boolean  | true |
| katexFontPath（v0.10.3+）     | katex库的字体文件的请求路径。仅当katex的output配置为html时才会请求字体文件。可以通过mindMap.formula.getKatexConfig()方法来获取当前的配置。字体文件可以从node_modules中找到：katex/dist/fonts/。可以上传到你的服务器或cdn。最终的字体请求路径为`${katexFontPath}fonts/KaTeX_AMS-Regular.woff2`，可以自行拼接进行测试是否可以访问 | String  | https://unpkg.com/katex@0.16.11/dist |
| getKatexOutputType（v0.10.3+）     | 自定义katex库的输出模式。默认当Chrome内核100以下会使用html方式，否则使用mathml方式，如果你有自己的规则，那么可以传递一个函数，函数返回值为：mathml或html | Function、null  | null |

### 15.OuterFrame插件

| 字段名称                         | 类型    | 默认值           | 描述    |
| -------------------------------- | ------- | ---------------- | ------- |
| outerFramePaddingX（v0.10.3+）     | Number  | 10 | 外框的水平内边距 |
| outerFramePaddingY（v0.10.3+）     | Number  | 10 | 外框的垂直内边距 |

### 16.Painter插件

| 字段名称                         | 类型    | 默认值           | 描述      |
| -------------------------------- | ------- | ---------------- | ------ |
| onlyPainterNodeCustomStyles（v0.11.1+）     | Boolean  | false | 是否只格式刷节点手动设置的样式，忽略节点通过主题应用的样式 |

### 17.NodeImgAdjust插件

| 字段名称                         | 类型    | 默认值           | 描述      |
| -------------------------------- | ------- | ---------------- | ------ |
| beforeDeleteNodeImg（v0.11.1+）     | Function  | null | 拦截节点图片的删除，点击节点图片上的删除按钮删除图片前会调用该函数，如果函数返回true则取消删除，可以是异步函数，返回一个Promise实例 |