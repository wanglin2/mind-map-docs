# Excel 收费插件

该插件可以用于导入和导出Excel软件的格式，即.xlsx文件格式。

你可以在在线版中进行体验。

## 更新记录

> v1.0.1
>
> 1.节点存在数学公式时导出为Excel时只保留公式源码；

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
import Excel from 'excel.cjs.min.js'
// 或 import Excel from 'excel.esm.min.js'

MindMap.usePlugin(Excel)
```

2.引用未打包的源码

可以先进入到插件目录执行：

```bash
npm link
```

然后进入到你的项目根目录执行：

```bash
npm link simple-mind-map-plugin-excel
```

然后就可以直接导入进行使用：

```js
import MindMap from 'simple-mind-map'
import Excel from 'simple-mind-map-plugin-excel'

MindMap.usePlugin(Excel)
```

## 使用

### 导入.xlsx文件

导入时仅保留文本、超链接和注释。

要导入.xlsx文件需要使用插件的`excelTo`方法，这个方法可以通过如下几种方式获取到。

1.直接引入文件

```js
import { excelTo } from 'simple-mind-map-plugin-excel/excelTo.js'
```

2.通过插件类

```js
import MindMap from 'simple-mind-map'
import Excel from 'simple-mind-map-plugin-excel'

Excel.excelTo
```

使用示例：

```js
import Excel from 'simple-mind-map-plugin-excel'

const res = await Excel.excelTo(file)// 文件对象，即通过<input type="file">获取到的
const mindMap = new MindMap()
mindMap.setData(res)
```

### 导出为.xlsx文件

导出时仅保留文本、超链接和备注。会合并单元格方便查看。

注册了该插件后，可以直接调用思维导图实例的`export`方法导出：

```js
mindMap.export('xlsx', true, '文件名')
```

当然，也支持传递一些参数：

```js
mindMap.export('xlsx', true, '文件名', {
    maxColWidth: 30,// 表格每列最大的宽度，默认为30，单位：字符
    transformNote: (note) => { return note }, // 转换节点备注数据，因为备注数据不限制格式，你可能使用markdown，或者html，所以可以在这里进行转换，需要返回处理后的备注字符串
    bookType: 'xlsx'// 导出的文件格式，默认为xlsx，其他支持的格式请参考：https://docs.sheetjs.com/docs/api/write-options#supported-output-formats。
})
```

除了使用`mindMap.export`方法，也可以直接调用插件的`toExcel`方法，同样也是两种方法获取：

1.直接引入文件

```js
import { toExcel } from 'simple-mind-map-plugin-excel/toExcel.js'
```

2.通过插件类

```js
import MindMap from 'simple-mind-map'
import Excel from 'simple-mind-map-plugin-excel'

Excel.toExcel
```

使用示例：

```js
import MindMap from 'simple-mind-map'
import Excel from 'simple-mind-map-plugin-excel'

const mindMap = new MindMap()
const data = mindMap.getData()// 思维导图数据
const res = Excel.toExcel('文件名称', data, opt)// 返回的res为ArrayBuffer格式的数据
```
