# 内置工具方法

## 基础工具方法

引用：

```js
import {walk, ...} from 'simple-mind-map/src/utils'
```

### resizeImgSizeByOriginRatio(width, height, newWidth, newHeight)

> v0.6.5+

`width`: 图片原始的宽度

`height`：图片原始的高度

`newWidth`：要缩放到的宽度

`newHeight`：要缩放到的高度

按比例缩放图片。在保持图片原始宽高比的情况下缩放到指定的`newWidth`、`newHeight`大小。

### walk(root, parent, beforeCallback, afterCallback, isRoot, layerIndex = 0, index = 0, ancestors = [])

深度优先遍历树

`root`：要遍历的树的根节点

`parent`：父节点

`beforeCallback`：前序遍历回调函数，回调参数为：root, parent, isRoot, layerIndex, index, ancestors

`afterCallback`：后序遍历回调函数，回调参数为：root, parent, isRoot, layerIndex, index, ancestors

`isRoot`：是否是根节点

`layerIndex`：节点层级

`index`：节点在同级节点里的索引

`ancestors`：v0.10.6+，当前节点的所有祖先节点列表

示例：

```js
walk(
  tree,
  null,
  () => {},
  () => {},
  false,
  0,
  0
)
```

### bfsWalk(root, callback)

广度优先遍历树

### resizeImgSize(width, height, maxWidth, maxHeight)

缩放图片的尺寸

`width`：图片原本的宽

`height`：图片原本的高

`maxWidth`：要缩放到的宽

`maxHeight`：要缩放到的高

`maxWidth`和`maxHeight`可以同时都传，也可以只传一个

### resizeImg(imgUrl, maxWidth, maxHeight)

缩放图片，内部先加载图片，然后调用`resizeImgSize`方法，返回一个`promise`

### simpleDeepClone(data)

极简的深拷贝方法，只能针对全是基本数据的对象，否则会报错

### copyRenderTree(tree, root)

复制渲染树数据，示例：

```js
copyRenderTree({}, this.mindMap.renderer.renderTree)
```

### copyNodeTree(tree, root, removeActiveState, removeId)

- `removeActiveState`：`Boolean`，默认为`false`，是否移除节点的激活状态

- `removeId`：v0.7.3-fix.1+，是否移除节点数据中的 uid，默认为`true`

> - `keepId`： （原第四个参数）`Boolean`，默认为`false`，是否保留被复制节点的`id`，默认会删除`id`防止节点`id`重复，但是对于移动节点的场景，节点原`id`需要保留。

复制节点树数据，主要是剔除其中的引用`node`实例的`_node`，然后复制`data`对象的数据，示例：

```js
copyNodeTree({}, node)
```

### imgToDataUrl(src, returnBlob = false)

- `src`：图片url

- `returnBlob`：v0.10.2+，是否以Blob格式返回结果，默认为DataURL格式

图片转成 dataURL

### downloadFile(file, fileName)

下载文件

### throttle(fn, time = 300, ctx)

节流函数

### asyncRun(taskList, callback = () => {})

异步执行任务队列，多个任务是同步执行的，没有先后顺序

### degToRad(deg)

> v0.2.24+

角度转弧度

### camelCaseToHyphen(str)

> v0.2.24+

驼峰转连字符

### joinFontStr({ italic, bold, fontSize, fontFamily })

> v0.3.4+

拼接`css`字体的`font`属性值

### measureText(text, { italic, bold, fontSize, fontFamily })

> v0.3.4+

测量文本的宽高，返回值：

```js
{
  width, height
}
```

### getTextFromHtml(html)

提取 html 字符串里的纯文本内容。

### readBlob(blob)

> v0.5.9+

将`blob`数据转成`data:url`数据。

### parseDataUrl(data)

> v0.6.6+

解析`data:url`数据，返回：

```js
{
  type, // 数据的文件类型
    base64 // base64数据
}
```

### getImageSize(src)

> v0.6.6+

- `src`：图片的 url

获取图片的大小。返回：

```js
{
  width, height
}
```

### loadImage(imgFile)

> v0.6.8+

- `imgFile`：图片类型的 File 对象

加载图片，返回：

```js
{
  url, // DataUrl
    size // { width, height } 图片宽高
}
```

### getType(data)

> v0.6.9+

获取一个数据的类型，比如`Boolean`、`Array`等。

### removeHtmlStyle(html)

> v0.6.10+

移除 html 字符串中节点的内联样式。

### addHtmlStyle(html, tag, style)

> v0.6.10+

给 html 标签中指定的标签添加内联样式。

### checkIsRichText(str)

> v0.6.10+

检查一个字符串是否是富文本字符。

### isWhite(color)

> v0.6.11+

判断一个颜色是否是白色。

### isTransparent(color)

> v0.6.11+

判断一个颜色是否是透明。

### nodeRichTextToTextWithWrap(html)

> v0.6.12+

将`<p><span></span><p>`形式的节点富文本内容转换成`\n`换行的文本。

### textToNodeRichTextWithWrap(html)

> v0.6.12+

将`<br>`换行的文本转换成`<p><span></span><p>`形式的节点富文本内容。

### isMobile()

> v0.6.13+

判断是否是移动端环境。

### getTopAncestorsFomNodeList(list)

> v0.7.2+

- `list`：Arrray，节点实例列表。

从节点实例列表里找出最顶层的节点列表。

### checkTwoRectIsOverlap(minx1, maxx1, miny1, maxy1, minx2, maxx2, miny2, maxy2)

> v0.7.2+

参数为两个矩形的位置。

判断两个矩形是否重叠。

### focusInput(el)

> v0.7.2+

- `el`：DOM 节点，可聚焦的元素，一般为输入框元素。

聚焦指定输入框。

### selectAllInput(el)

> v0.7.2+

- `el`：DOM 节点，可聚焦的元素，一般为输入框元素。

聚焦并全选指定输入框。

### addDataToAppointNodes(appointNodes, data = {})

> v0.7.2+

- `appointNodes`：节点实例列表，数组类型。

- `data`：要附加到指定节点实例列表树中所有节点的数据中的数据。

给指定的节点列表树数据添加附加数据，会修改原数据。

### createUidForAppointNodes(appointNodes, createNewId, handle)

> v0.7.2+

- `appointNodes`：节点实例列表，数组类型。

- `createNewId`：v0.7.3-fix.1+，`Boolean`，默认为`false`，即如果节点不存在`uid`的话，会创建新的`uid`。如果传`true`，那么无论节点数据原来是否存在`uid`，都会创建新的`uid`

- `handle`：v0.10.5+，`null、Function`，默认为`null`，可以传递一个函数，遍历到每个节点时会调用该函数，回调参数为当前遍历到的节点。

给指定的节点列表树数据添加 uid（如果 uid 不存在的话），会修改原数据。

### getNodeIndex(node)

> v0.7.2+

- `node`：节点实例。

获取节点在同级里的位置索引。

### mergerIconList(list)

> v0.7.2+

- `list`：要合并到库内部的节点图标数组。

```js
// const data = [
//   { type: 'priority', name: '优先级图标', list: [{ name: '1', icon: 'a' }, { name: 2, icon: 'b' }] },
//   { type: 'priority', name: '优先级图标', list: [{ name: '2', icon: 'c' }, { name: 3, icon: 'd' }] },
// ];

// mergerIconList(data) 结果

// [
//   { type: 'priority', name: '优先级图标', list: [{ name: '1', icon: 'a' }, { name: 2, icon: 'c' }, { name: 3, icon: 'd' }] },
// ]
```

合并图标数组。

### generateColorByContent(str)

> v0.7.2+

- `str`：字符串。

根据传入的内容生成颜色，同样的内容会生成同样的颜色。

### htmlEscape(str)

> v0.7.2+

- `str`：字符串。

转义传入的字符串，目前会转义如下三个字符：

```
& -> &amp;
< -> &lt;
> -> &gt;
```

### isSameObject(a, b)

> v0.7.3+

- `a`、`b`：Object | Array, 要进行对比的两个对象

判断两个对象是否相同，只处理对象或数组。

### getNodeDataIndex(node)

> v0.8.0+

获取节点在兄弟节点中的位置索引。

### getNodeIndexInNodeList(node, nodeList)

> v0.8.0+

从一个节点列表里找出某个节点的索引。

### setDataToClipboard(data)

> v0.8.0+

- `data`：Object | Array

将数据设置到用户剪切板中。

### getDataFromClipboard()

> v0.8.0+

从用户剪贴板中读取文字和图片，返回：

```js
{
  text, img
}
```

### removeFromParentNodeData(node)

> v0.8.0+

从节点的父节点的`nodeData.children`列表中移除该节点的数据。

### checkHasSupSubRelation()

> v0.8.1+

从给定的节点实例列表里判断是否存在上下级关系。

### handleSelfCloseTags(str)

> v0.9.1+

- `str`：html 字符串

给 html 自闭合标签添加闭合状态，`<div><img src="xxx"></div>` -> `<div><img src="xxx" /></div>`。

### checkNodeListIsEqual(list1, list2)

> v0.9.1+

- `list1/list2`：节点实例列表

检查两个节点实例列表包含的节点是否是一样的。

### getChromeVersion()

> v0.9.3+

获取当前浏览器使用的`Chrome`内核版本。如果当前浏览器使用的不是 `Chrome`内核，那么会返回空字符串。

### transformTreeDataToObject(data)

> v0.9.3+

- `data`：思维导图节点数据。

将思维导图树结构转平级对象。

```js
{
        data: {
            uid: 'xxx'
        },
        children: [
            {
                data: {
                    uid: 'xxx'
                },
                children: []
            }
        ]
    }
```

转为：

```js
    {
        uid: {
            children: [uid1, uid2],
            data: {}
        }
    }
```

### transformObjectToTreeData(data)

> v0.9.3+

将平级对象转树结构。transformTreeDataToObject 方法的反向操作。

### removeHtmlNodeByClass(html, selector)

> v0.9.6+

- `html`：html 字符串

- `selector`：节点选择器，比如类选择器，id 选择器

去除指定 html 字符串中指定选择器的节点，然后返回处理后的 html 字符串。

### getOnfullscreEnevt()

> v0.9.11+

检测当前浏览器可用的全屏事件。可以这样使用：

```js
const fullscrrenEvent = getOnfullscreEnevt()

// 监听全屏事件
document.addEventListener(fullscrrenEvent, () => {
  // 根据document.fullscreenElement是否为null判断当前是否处于全屏状态
})
```

### fullScreen(element)

> v0.9.11+

让指定的DOM元素进入全屏状态。

### exitFullScreen()

> v0.9.11+

退出全屏状态。

### defenseXSS(htmlStr)

> v0.10.0+

- `htmlStr`：需要过滤的html字符串

返回：过滤后的html字符串

防御 XSS 攻击，过滤恶意 HTML 标签和属性。你可以在将节点数据传递给SimpleMindMap前递归遍历树数据，通过该方法处理节点富文本内容，避免 XSS 攻击。

### addXmlns(el)

- `el`：DOM节点

给DOM节点添加命名空间属性：`xmlns='http://www.w3.org/1999/xhtml'`。

### compareVersion(a, b)

> v0.13.0+

- `a`、`b`：要进行比较的两个版本号，字符串类型，比如：'0.1.0'、'1.0'、'1'等

判断两个版本号的关系。

```
a > b 返回 >
a < b 返回 <
a = b 返回 =
```

### debounce(fn, wait = 300, ctx)

> v0.13.0+

- `fn`：需要防抖的函数

- `wait`：延迟执行函数的时间，单位：ms

- `ctx`：`fn`函数的上下文对象

返回一个新函数。

防抖函数。

## 在 canvas 中模拟 css 的背景属性

引入：

```js
import drawBackgroundImageToCanvas from 'simple-mind-map/src/utils/simulateCSSBackgroundInCanvas'
```

使用：

```js
let width = 500
let height = 500
let img = '/1.jpg'
let canvas = document.createElement('canvas')
canvas.width = width
canvas.height = height
drawBackgroundImageToCanvas(
  ctx,
  width,
  height,
  img,
  {
    backgroundRepeat: 'repeat-y',
    backgroundSize: '60%',
    backgroundPosition: 'center center'
  },
  err => {
    if (err) {
      // 失败
    } else {
      // 成功
    }
  }
)
```

## LRU 缓存类

> v0.5.10+

引入：

```js
import Lru from 'simple-mind-map/src/utils/Lru.js'
```

### 构造函数

```js
let lru = new Lru(max)
```

`max`：指定最大缓存数量。

### 实例属性

#### size

当前缓存的数量。

#### pool

获取缓存池。

### 实例方法

#### add(key, value)

添加缓存。

#### delete(key)

删除指定缓存。

#### has(key)

检查某个缓存是否存在。

#### get(key)

获取某个缓存的值。

#### clear()

> v0.9.2+

清空缓存池。
