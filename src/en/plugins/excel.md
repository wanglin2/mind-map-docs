# Excel chargeable plugin

> Current Latest Version: v1.0.1
>
> Changelog:
>
> v1.0.1:
>
> 1.When exporting a node to Excel with mathematical formulas, only the formula source code is retained;

This plugin can be used to import and export Excel software in .xlsx file format.

You can experience it in the online version.

## Charge

Scanning the code and transferring money, please note the plugin you want to purchase and your email address(If you reach the maximum text limit, you can make the payment in two installments), and then the plugin file will be sent to your email. Purchase should be made after full use and consideration. If you are not familiar with front-end development and do not know how to use plugins, please consider purchasing carefully. There will be no refund unless there are special reasons. If you find bugs or have requirements, you can submit relevant issues.

Price: ￥ 29.9, including unpackaged source code and packaged files.

<p style="display:flex;align-items: flex-end;">

<img src="../../assets/img/alipay.jpg" style="width: 300px" />
<img src="../../assets/img/wechat.jpg" style="width: 300px" />

</p>

## Register

1.Referencing packaged files:

```js
import MindMap from 'simple-mind-map'
import Excel from 'excel.cjs.min.js'
// 或 import Excel from 'excel.esm.min.js'

MindMap.usePlugin(Excel)
```

2.Referencing Unpackaged Source Code

You can first enter the plugin directory to execute:

```bash
npm link
```

Then enter your project root directory to execute:

```bash
npm link simple-mind-map-plugin-excel
```

Then you can directly import it for use:

```js
import MindMap from 'simple-mind-map'
import Excel from 'simple-mind-map-plugin-excel'

MindMap.usePlugin(Excel)
```

## Usage

### Import .xlsx file

Keep only text, hyperlinks, and comments when importing.

To import .xlsx files, you need to use the plugin's 'excelTo' method, which can be obtained in the following ways.

1.Directly import file

```js
import { excelTo } from 'simple-mind-map-plugin-excel/excelTo.js'
```

2.Through plugin class

```js
import MindMap from 'simple-mind-map'
import Excel from 'simple-mind-map-plugin-excel'

Excel.excelTo
```

Usage example:

```js
import Excel from 'simple-mind-map-plugin-excel'

const res = await Excel.excelTo(file)// File object, which is obtained through <input type="file">
const mindMap = new MindMap()
mindMap.setData(res)
```

### Export as .xlsx file

Keep only text, hyperlinks, and notes when exporting. Merge cells for easy viewing.

After registering the plugin, you can directly call the 'export' method of the mind map instance to export:

```js
mindMap.export('xlsx', true, 'Filename')
```

Of course, it also supports passing some parameters:

```js
mindMap.export('xlsx', true, 'Filename', {
    maxColWidth: 30,// The maximum width of each column in the table is 30 by default, measured in characters
    transformNote: (note) => { return note }, // Convert node note data, as note data does not have any format restrictions, you may use markdown or HTML, so you can perform the conversion here and return the processed note string
    bookType: 'xlsx'// The exported file format defaults to xlsx. For other supported formats, please refer to: https://docs.sheetjs.com/docs/api/write-options#supported-output-formats。
})
```

In addition to using the `mindMap.export` method, you can also directly call the `toExcel` method of the plugin, which are also two methods to obtain:

1.Directly import file

```js
import { toExcel } from 'simple-mind-map-plugin-excel/toExcel.js'
```

2.Through plugin class

```js
import MindMap from 'simple-mind-map'
import Excel from 'simple-mind-map-plugin-excel'

Excel.toExcel
```

Usage example:

```js
import MindMap from 'simple-mind-map'
import Excel from 'simple-mind-map-plugin-excel'

const mindMap = new MindMap()
const data = mindMap.getData()// Mind map data
const res = Excel.toExcel('Filename', data, opt)// The returned res is data in the format of an ArrayBuffer
```
