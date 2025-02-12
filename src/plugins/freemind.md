# Freemind 收费插件

> 当前最新版本：v1.0.1
>
> 更新记录：
>
> v1.0.1：
>
> 1.修复导出mm文件时节点的LINK属性前未加空格导致再次导入报错的问题；

该插件可以用于导入和导出Freemind软件的格式，即.mm文件格式。

你可以在在线版中进行体验。

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
import Freemind from 'freemind.cjs.min.js'
// 或 import Freemind from 'freemind.esm.min.js'

MindMap.usePlugin(Freemind)
```

2.引用未打包的源码

可以先进入到插件目录执行：

```bash
npm link
```

然后进入到你的项目根目录执行：

```bash
npm link simple-mind-map-plugin-freemind
```

然后就可以直接导入进行使用：

```js
import MindMap from 'simple-mind-map'
import Freemind from 'simple-mind-map-plugin-freemind'

MindMap.usePlugin(Freemind)
```

## 使用

### 导入.mm文件

导入时仅保留节点文本、备注、超链接和一定的样式（颜色、背景、连线的颜色和线宽、字体、字号、加粗、斜体）。

关于图片：`.mm`文件数据保存的是图片在电脑本地的路径，所以`js`是无法读取的。考虑到客户端场景可以读取，所以提供了`transformImg`选项来自定义图片加载的方法，如果没提供，那么默认是忽略图片的。

关于图标：图标是各个思维导图的私有协议，所以无法保留。

要导入`.mm`文件需要使用插件的`freemindToSmm`方法，这个方法可以通过如下几种方式获取到。

1.直接引入文件

```js
import { freemindToSmm } from 'simple-mind-map-plugin-freemind/freemindTo.js'
```

2.通过插件类

```js
import MindMap from 'simple-mind-map'
import Freemind from 'simple-mind-map-plugin-freemind'

Freemind.freemindToSmm
```

使用示例：

```js
import MindMap from 'simple-mind-map'
import Freemind from 'simple-mind-map-plugin-freemind'

const mindMap = new MindMap()

const fileReader = new FileReader()
fileReader.readAsText(file)// 文件对象，即通过<input type="file">获取到的
fileReader.onload = async evt => {
    const data = await Freemind.freemindToSmm(evt.target.result, opt)
    mindMap.setData(res)
}
```

`opt`支持以下参数：

```js
{
    transformImg: () => {},// 转换图片路径
    withStyle: false,// 是否保留样式 
}
```

官方的在线`Demo`里的`transformImg`传参示例：

```js
{
    transformImg: image => {
        return new Promise(resolve => {
            // 只保留在线图片地址
            if (/^https?:\/\//.test(image)) {
                resolve({ url: image })
            } else {
                resolve(null)
            }
        })
    }
}
```

### 导出为.mm文件

导出时只支持保留节点文本、备注（需自行提供转换方法）、超链接和一定的手动设置（不是主题提供的样式）的样式，当然，如果是富文本模式，那么内联的样式是会生效的。

关于图片：Freemind不支持base64格式，只支持在线地址的图片，所以如果你思维导图节点的图片并不是在线地址，那么是无法渲染的，可以通过transformImage选项来设置。

关于备注：Freemind备注是html格式，虽然simple-mind-map官方Demo提供的是Markdown格式，但实际上是不限格式的，所以转换方法是需要根据你的实际格式来转换的，如果你的也是html格式，那么不需要转直接透传，否则需要自行实现转换方法。

关于公式：Freemind不支持数学公式，所以默认会删除公式内容，如果你想保留，那么可以通过withFormula选项设置

注册了该插件后，可以直接调用思维导图实例的`export`方法导出：

```js
mindMap.export('mm', true, '文件名')
```

当然，也支持传递一些参数：

```js
mindMap.export('mm', true, '文件名', {
   transformNote: (note) => { return note },// 转换备注 
   transformImage: (image) => { return image },// 转换图片链接
   withStyle: false,// 是否保留样式
   withFormula: false,// 是否保留公式字符
})
```

除了使用`mindMap.export`方法，也可以直接调用插件的`smmToFreemind`方法，同样也是两种方法获取：

1.直接引入文件

```js
import { smmToFreemind } from 'simple-mind-map-plugin-excel/toFreemind.js'
```

2.通过插件类

```js
import MindMap from 'simple-mind-map'
import Freemind from 'simple-mind-map-plugin-freemind'

Freemind.smmToFreemind
```

使用示例：

```js
import MindMap from 'simple-mind-map'
import Freemind from 'simple-mind-map-plugin-freemind'

const mindMap = new MindMap()
const data = mindMap.getData()// 思维导图数据
const res = Freemind.smmToFreemind(data, opt)// 返回的res为mm格式的字符串
```
