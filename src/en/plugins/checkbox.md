# Checkbox chargeable plugin

The Checkbox plugin provides a to-do function, which means adding a checkbox to a node. Clicking on the checkbox can switch between completed and incomplete states.

<img src="../../assets/img/待办.png" style="width: 800px" />

## Charge

Please switch to the Chinese documentation for this plugin to view.

## Register

1.Referencing packaged files:

```js
import MindMap from 'simple-mind-map'
import Checkbox from 'checkbox.cjs.min.js'
// Or import Checkbox from 'checkbox.esm.min.js'
// If you want a package file in iife format, you can add the following in the build command of the package.json plugin: esbuild ./index.js --bundle --minify --external:buffer --format=iife --outfile=./dist/xxx.iife.min.js --global-name=xxx, Then execute npm run build again to generate

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