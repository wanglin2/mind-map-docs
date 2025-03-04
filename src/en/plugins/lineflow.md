# Lineflow chargeable plugin

> v0.12.2+

This plugin is used to support the flow effect of node connections. The flow effect only takes effect when the connection is dashed, and the effect is as follows:

<img src="../../assets/img/lineflow.gif" style="width: 400px" />

You can experience it in the online version, which can be set in the "Basic Style" or "Node Style" sidebar.

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
import Lineflow from 'lineflow.cjs.min.js'
// Or import Lineflow from 'lineflow.esm.min.js'

MindMap.usePlugin(Lineflow)
```

2.Referencing Unpackaged Source Code

You can first enter the plugin directory to execute:

```bash
npm link
```

Then enter your project root directory to execute:

```bash
npm link simple-mind-map-plugin-lineflow
```

Then you can directly import it for use:

```js
import MindMap from 'simple-mind-map'
import Lineflow from 'simple-mind-map-plugin-lineflow'

MindMap.usePlugin(Lineflow)
```

After registration and instantiation of `MindMap`, the instance can be obtained through `mindMap.lineflow`.

If you are using the mindMap.addPlugin method to dynamically register a component, you will need to call the method for re rendering once:

```js
mindMap.addPlugin(Lineflow)
mindMap.reRender()
```

## Describe

### Config

The flow effect configuration ultimately reflects three fields on the theme:

```js
{
   // Whether to activate the flow effect, only valid when dashed
  lineFlow: false,
  // The duration of one cycle of flow effect, unit: s
  lineFlowDuration: 1,
  // Is the flow direction positive, from the parent node to the child node
  lineFlowForward: true
}
```

### Warm reminder

1. If you want to activate the flow effect of all dashed lines, you can modify the relevant methods of theme configuration;

2. The priority of individual node settings is higher than the overall settings;

3. For more complex dashed lines, there may be fluctuations in the flow effect;

4. There may be issues with the flow of directory organization charts, organizational structure charts, and horizontal lines;

## Usage

### Enable or update the flow effect of all connections

To achieve this function, it is actually to modify the flow effect related fields in the theme configuration.

```js
const customConfig = {
    lineFlow: false,
    lineFlowDuration: 1,
    lineFlowForward: true
    // Other theme config...
}

const update = (prop, value) => {
    customConfig[prop] = value
    mindMap.setThemeConfig({
        ...customConfig
    })
}

// Activate the flow effect
update('lineFlow', true)
```

To obtain the current configuration, you can use the `getThemeConfig` method:

```js
Object.keys(customConfig).forEach(key => {
    customConfig[key] = mindMap.getThemeConfig(key)
})
```

### Enable or update the flow effect of specified nodes

To achieve this function, it is actually to update the data of the node itself:

```js
let activeNodes = []
mindMap.on('node_active', (node, nodeList) => {
    activeNodes = [...nodeList]
})

const nodeConfig = {
    lineFlow: false,
    lineFlowDuration: 1,
    lineFlowForward: true
    // Other node config...
}
const update = (prop, value) =>  {
    nodeConfig[prop] = value
    activeNodes.forEach(node => {
        node.setStyle(prop, value)
    })
}
```

To retrieve data, you can use the 'getStyle' method of the node:

```js
Object.keys(nodeConfig).forEach(item => {
    nodeConfig[item] = activeNodes[0].getStyle(item, false)
})
```

Of course, plugins also provide a method to update:

```js
mindMap.lineflow.updateNodeLineFlow(activeNodes, {
    ...nodeConfig
})
```

## Methods

### updateNodeLineFlow(appointNodes, config = {})

- `appointNodes`: A single node instance, or an array of node instances, can pass an empty array representing the settings for the currently activated node

- `config`: Flow effect setting, object type, can only pass partial fields, structure as follows:

```js
{
    lineFlow: false,// Does the dashed line enable the flow effect
    lineFlowDuration: 1,// The duration of one cycle of a connected animation, unit: s
    lineFlowForward: true,// Is the flow direction from the parent node to the child node
}
```

Update the flow effect settings for the specified node.