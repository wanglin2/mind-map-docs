# AssociativeLine plugin

> v0.4.5+

> The function of adjusting associated line control points is supported from v0.4.6+

> Relevance support for text editing starting from v0.5.11+

This plugin is used to support the addition of associative lines.

Please refer to the [Instantiation Options](../api/constructor/constructor-options.html#_6-associativeline-plugin) for configuration.

## Register

```js
import MindMap from 'simple-mind-map'
import AssociativeLine from 'simple-mind-map/src/plugins/AssociativeLine.js'
// import AssociativeLine from 'simple-mind-map/src/AssociativeLine.js' Use this path for versions below v0.6.0

MindMap.usePlugin(AssociativeLine)
```

After registration and instantiation of `MindMap`, the instance can be obtained through `mindMap.associativeLine`.

## Config

Support for modifying the thickness and color of associated lines, divided into default and active states. The configuration is as follows:

- `associativeLineWidth`: The thickness of the default state of the associated line. The default value is `2`

- `associativeLineColor`: Color of the default state of associative lines. The default value is `rgb(51, 51, 51)`

- `associativeLineActiveWidth`: The thickness of the active state of the associated line. The default value is `8`

- `associativeLineActiveColor`: The color of the active state of the associated line. The default value is `rgba(2, 167, 240, 1)`

- `associativeLineDasharray`: Line style of associated lines. The default value is `[6, 4]`

- `associativeLineTextColor`: Color of associated line text. The default value is `rgb(51, 51, 51)`

- `associativeLineTextFontSize`: Related line text size. The default value is `14`

- `associativeLineTextLineHeight`: Related line text line height. The default value is `1.2`

- `associativeLineTextFontFamily`: Font of associated line text. The default value is `微软雅黑, Microsoft YaHei`

The configuration is provided as a theme, The above default values are for the default theme, and may vary for different themes, so if you want to modify these four properties, you can modify them using the `mindMap.setThemeConfig(config)` method.

## Props

### mindMap.associativeLine.lineList

Currently, all connection line data, array types, and each item of the array are also an array:

```js
[
    path, // Connector node
    clickPath, // Invisible click line node
    text, // Text object
    node, // Start node
    toNode // Target node
]
```

### mindMap.associativeLine.activeLine

The currently active connection line, The structure is as follows:

```js
[
    path, // Connector node
    clickPath, // Invisible click line node
    text, // Text object
    node, // Start node
    toNode, // Target node
    markerPath// v0.12.2+，Arrow object
]
```

## Methods

### getStyleConfig(node, toNode)

> v0.12.2+

- `node`：Instance of the starting node of the correlation line

- `toNode`：Associated Line Target Node Instance

Return value: The style data object of the associated line.

Retrieve the style data of a certain associated line.

Priority: Custom styles for associated lines, custom styles for nodes, node hierarchy styles for themes, and outermost styles for themes.

If you have developed a view that sets the style of a certain associated line and generally need to display the current style of the associated line, you can use this method to obtain it. Official demo code implementation reference: [AssociativeLineStyle.vue](https://github.com/wanglin2/mind-map/blob/main/web/src/pages/Edit/components/AssociativeLineStyle.vue).

### updateActiveLineStyle()

> v0.12.2+

Update the style of the current active line. It is usually called after the style of node associated line is customized.

Directly calling the node.setStyle method to update the style will also trigger the style update of the associated lines, but the activation status of the associated lines will be lost.
 So if you want to keep the activation status, you can call the node.setData method to update the data, and then call the method to update the style, so that the activation status of the associated line will not be lost.
 Official demo code implementation reference: [AssociativeLineStyle.vue](https://github.com/wanglin2/mind-map/blob/main/web/src/pages/Edit/components/AssociativeLineStyle.vue).

### cancelCreateLine()

> v0.10.5+

Cancel the creation of the associated line midway.

### renderAllLines()

Re-render all associated lines.

### removeAllLines()

Remove all associated lines.

### createLineFromActiveNode()

Create an associated line from the current active node. If there are multiple active nodes, the default is the first node.

After calling this method, an association line will be rendered from the first active node to the current mouse real-time position. When a target node is clicked, it represents completion of creation. An association line will be rendered between the first active node and the clicked node.

### createLine(fromNode)

Creates an associative line starting at the specified node.

After calling this method, an association line will be rendered from the specified node to the current mouse real-time position. When a target node is clicked, it represents completion of creation, and an association line will be rendered between the specified node and the clicked node.

### addLine(fromNode, toNode)

Add an associative line directly.

Calling this method will directly create an association line from the `fromNode` to the `toNode` node.

### removeLine()

Deletes the currently active associative line. Clicking on an associated line is considered active.

### clearActiveLine()

Clears the active state of the currently active association line.

### front()

> v0.8.0+

The top-level display of the associated line.

### back()

> v0.8.0+

The associated line returns to its original level.