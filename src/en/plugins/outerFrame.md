# OuterFrame plugin

> v0.10.2+

This plugin is used to implement bounding box functionality.

Version `v0.14.0+` has added the editing and display of outer frame text.

## Register

```js
import MindMap from 'simple-mind-map'
import OuterFrame from 'simple-mind-map/src/plugins/OuterFrame.js'
MindMap.usePlugin(OuterFrame)
```

After registration and instantiation of `MindMap`, the instance can be obtained through `mindMap.outerFrame`.

The application can refer to the code in this section of the demo: [NodeOuterFrame.vue](https://github.com/wanglin2/mind-map/blob/main/web/src/pages/Edit/components/NodeOuterFrame.vue)。

## Command

This plugin will register the 'ADD_OUTER_FRAME' command with the mind map to add bounding boxes to nodes:

```js
mindMap.execCommand('ADD_OUTER_FRAME', appointNodes, config = {})
```

- `appointNodes`：Specify the node instance node to add the bounding box to, which can be a single node instance or an array of node instances. If passing '[]' or 'null', the bounding box will be added to the currently active node on the canvas

- `config`：Outline configuration, object format, and fields are as follows:

| Field            | Type    | Default           | Desc         |
| ------------------ | ------- | --------------- | ------------|
| radius | Number | 5 | Size of rounded corners on the outer frame |
| strokeWidth | Number | 2 | Outer border width |
| strokeColor | String | #0984e3 | Outer border color |
| strokeDasharray | String | 5,5 | Outer border dashed line |
| fill | String | rgba(9,132,227,0.05) | Outer frame fill color |
| fontSize（v0.14.0+） | Number | 14 | Font size of outer frame text |
| fontFamily（v0.14.0+） | String | 微软雅黑, Microsoft YaHei | Font for Outer Frame Text |
| fontWeight（v0.14.0+） | String | normal | Font weight, bold |
| fontStyle（v0.14.0+） | String | normal | Font weight, italic |
| color（v0.14.0+） | String | #fff | Outer frame text color |
| lineHeight（v0.14.0+） | Number | 1.2 | Outer frame text line height |
| textFill（v0.14.0+） | String | #0984e3 | Outer frame text background |
| textFillRadius（v0.14.0+） | Number | 5 | Rounded border text |
| textFillPadding（v0.14.0+） | Array | [5, 5, 5, 5] | Outer frame text rectangle inner margin. top、left、bottom、right |
| textAlign（v0.14.0+） | String | left | Horizontal display position of outer frame text, relative to the outer frame, optional values:left、center、right |

## Event

### outer_frame_active

Triggered when clicking to activate a certain bounding box. The callback function takes three parameters: el（Outer frame elements,The rect element of library @svgdotjs/svg.js）, node（The parent node instance of the node to which this scope belongs）, range（Range interval, relative to node）

The application can listen to this event to retrieve the currently activated bounding box, retrieve its configuration, and echo it to the page. Since the scope may contain multiple nodes, the first node instance is usually taken. If you want to retrieve the position of the bounding box on the page, you can call the 'el.rbox' method:

```js
mindMap.on('outer_frame_active', (el, parentNode, range) => {
    // Take the bounding box style of the first node within the range
    const firstNode = parentNode.children[range[0]]
    const firstNodeOuterFrame = firstNode.getData('outerFrame')
    // Obtain the position and size information of the bounding box, where you can render your configuration float layer
    const { x, y, width, height } = el.rbox()
})
```

### outer_frame_delete

Triggered when deleting the currently active bounding box on the canvas.

### before_show_text_edit

> v0.14.0+

Triggered when about to enter frame text editing.

### hide_text_edit

> v0.14.0+

Triggered when the outer frame text editing ends.

## Static properties

### OuterFrame.defaultStyle

> v0.14.0+

The default style configuration for the outer frame. You can use it for UI interface rendering.

## Instance properties

### activeOuterFrame

The currently activated outer frame information, object type, includes the following content:

```js
{
    el,// Outer frame container elements, Rect node instance of @svgdotjs/svg.js library
    node,// The node instance to which the current outer frame belongs
    range// The current outer frame contains the range of child nodes in the node instance it belongs to
    textNode// Outer frame text container element, G node instance of @svgdotjs/svg.js library
}
```

## Methods

### getActiveOuterFrame()

Get the currently activated bounding box data. Return an object with the following structure:

```js
{
    el,
    node,
    range
}
```

### updateActiveOuterFrame(config = {})

Update the currently active bounding box. After executing this method, please immediately hide your style panel as it will clear the currently active bounding box.

### removeActiveOuterFrame()

Delete the currently active bounding box.

### getRangeNodeList(node, range)

Get a list of boxed child nodes within a specified range of a node.

### clearActiveOuterFrame()

Clear the currently active bounding box.

### getNodeRangeFirstNode(node, range)

> v0.14.0+

Retrieve the first child node with an outer frame within the specified range of a node.

### getStyle(node)

> v0.14.0+

Get the style of the specified outer frame.

### showEditTextBox(g)

> v0.14.0+

- `g`: It can be obtained through instance properties: activeOuterFrame.textNode

Enter the outer frame text editing.

### hideEditTextBox()

> v0.14.0+

Hide the text editing box. That is to say, end the text editing.

### removeActiveOuterFrameText()

> v0.14.0+

Delete the text of the currently activated outer frame.

### updateOuterFrameStyle()

> v0.14.0+

Update the style of the currently activated outer frame.