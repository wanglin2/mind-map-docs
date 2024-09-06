# Notation chargeable plugin

Notation plugin that provides tagging functionality for individual nodes, allowing for the addition of hand drawn circles, backgrounds, strikethrough lines, and more. It supports animation effects, such as the following:

<img src="../../assets/img/标记.jpg" style="width: 900px" />

You can also experience it in the online version by activating the node first, and then clicking the 【notation】 button above to add a notation.

The internal implementation is done through the [rough-notation](https://github.com/rough-stuff/rough-notation) library, so if you have the energy, you can also implement this plugin based on this library yourself.

## Charge

Scanning the code and transferring money, please note the plugin you want to purchase and your email address(If you reach the maximum text limit, you can make the payment in two installments), and then the plugin file will be sent to your email. Purchase should be made after full use and consideration. If you are not familiar with front-end development and do not know how to use plugins, please consider purchasing carefully. There will be no refund unless there are special reasons. If you find bugs or have requirements, you can submit relevant issues.

Price:￥ 29.9, including unpackaged source code and packaged files.

<p style="display:flex;align-items: flex-end;">

<img src="../../assets/img/alipay.jpg" style="width: 300px" />
<img src="../../assets/img/wechat.jpg" style="width: 300px" />

</p>

## Register

1.Referencing packaged files:

```js
import MindMap from 'simple-mind-map'
import Notation from 'notation.cjs.min.js'
// 或 import Notation from 'notation.esm.min.js'

MindMap.usePlugin(Notation)
```

2.Referencing Unpackaged Source Code

You can first enter the plugin directory to execute:

```bash
npm link
```

Then enter your project root directory to execute:

```bash
npm link simple-mind-map-plugin-handdrawnlikestyle
```

Then you can directly import it for use:

```js
import MindMap from 'simple-mind-map'
import Notation from 'simple-mind-map-plugin-notation'

MindMap.usePlugin(Notation)
```

After registration and instantiation of `MindMap`, the instance can be obtained through `mindMap.notation`.

If you are using the mindMap.addPlugin method to dynamically register a component, you will need to call the method for re rendering once:

```js
mindMap.addPlugin(Notation)
mindMap.reRender()
```

## Command

After registering this plugin, the 'SET_NOTATION' command will be added to the mind map instance to set node numbers. Use this command:

```js
mindMap.execCommand('SET_NOTATION', appointNodes, show, config)
```

This command can pass three parameters:

- `appointNodes`：Assign a number to a specified node instance, which can be passed as a single node instance or as an array of node instances. If an empty array is passed, a notation will be added to the currently activated node;

- `show`：Boolean，Required transmission, whether to display the notation;

- `config`：Object，Optional, notation configuration, object format, detailed fields of the object are as follows:

| Field name | Type  | Default | Desc |
| ------- | ----- | ----- | ---- |
| type | String | circle | Tag type, optional values: underline, box, circle, highlight, strike-through, crossed-off |
| color | String | 'hoverRectColor' configuration in mind map instantiation options | Color |
| strokeWidth | Number | 1 | Line width |
| padding | Number | 20 | Padding |
| animate | Boolean | true | Is enable animation |

Example:

```js
// Add a circular marker to the currently activated node
mindMap.execCommand('SET_NOTATION', [], true, {
    type: 'circle',
    color: 'red'
})
```

After adding tags, the data will be saved to the node's 'data'under the name 'notation'.