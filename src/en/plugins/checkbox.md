# Checkbox chargeable plugin

The Checkbox plugin provides a to-do function, which means adding a checkbox to a node. Clicking on the checkbox can switch between completed and incomplete states.

<img src="../../assets/img/待办.png" style="width: 800px" />

You can experience it in the online version by right clicking on the node and clicking on 'Add ToDo'.

## Charge

Scanning the code and transferring money, please note the plugin you want to purchase and your email address(If you reach the maximum text limit, you can make the payment in two installments), and then the plugin file will be sent to your email. Purchase should be made after full use and consideration. If you are not familiar with front-end development and do not know how to use plugins, please consider purchasing carefully. There will be no refund unless there are special reasons. If you find bugs or have requirements, you can submit relevant issues.

Price: ￥ 29.9, including unpackaged source code and packaged files.

> If you buy 4 or more fee-based plug-ins at a time, you will get a 20% discount. If you want to take action ~

<p style="display:flex;align-items: flex-end;">

<img src="../../assets/img/alipay.jpg" style="width: 300px" />
<img src="../../assets/img/wechat.jpg" style="width: 300px" />

</p>

## Register

1.Referencing packaged files:

```js
import MindMap from 'simple-mind-map'
import Checkbox from 'checkbox.cjs.min.js'
// 或 import Checkbox from 'checkbox.esm.min.js'

MindMap.usePlugin(Checkbox)
```

2.Referencing Unpackaged Source Code

You can first enter the plugin directory to execute:

```bash
npm link
```

Then enter your project root directory to execute:

```bash
npm link simple-mind-map-plugin-checkbox
```

Then you can directly import it for use:

```js
import MindMap from 'simple-mind-map'
import Checkbox from 'simple-mind-map-plugin-checkbox'

MindMap.usePlugin(Checkbox, opt)
```

After registration and instantiation of `MindMap`, the instance can be obtained through `mindMap.checkbox`.

When registering plugins, it is supported to pass in some configuration items 'opt':

| Field name | Type  | Default | Desc |
| ------- | ----- | ----- | ---- |
| width | Number | 20 | The size of the to-do icon |
| height | Number | 20 | The size of the to-do icon |
| checkedIcon | String |  | To do completed icon, SVG string. If not specified, the default icon will be used. It is important to remove the fill attribute from the SVG string, otherwise the color may not take effect |
| unCheckedIcon | String |  | Icon for pending tasks, SVG string |
| colorIsFollowNode | Boolean | true | Does the icon color follow the color of the node text |
| color | String | #3f9cfc | If colorIsRollowNode is set to false, this color will be used |

## Command

After registering this plugin, the 'SET_CHECKBOX' command will be added to the mind map instance to set node numbers. Use this command:

```js
mindMap.execCommand('SET_CHECKBOX', appointNodes, checkboxData)
```

This command can pass two parameters:

- `appointNodes`：Set to-do data for a specified node instance, which can be passed as a single node instance or as an array of node instances. If an empty array is passed, a to-do will be added to the currently activated node;

- `checkboxData`：To set the to-do data, if 'null' is passed, it means deleting the to-do. Otherwise, please pass an object with the following detailed fields:

| Field name | Type  | Desc |
| ------- | ----- | ---- |
| done | Boolean | Has the to-do list been completed |

Example:

```js
mindMap.execCommand('SET_CHECKBOX', [], {
   done: false
})
```

After setting the number, the data will be saved to the node's' data 'under the name 'checkbox'.