# Constructor

## Static methods

### defineTheme(name, config)

> v0.2.23+

Define new theme.

`name`：New theme name

`config`：New theme config

`Simple-mind-map ` Built-in many themes. In addition, you can register new theme. It is recommended to register before instantiation, so that you can directly use the newly registered theme during instantiation. Use example:

```js
import MindMap from 'simple-mind-map'
// 注册新主题
MindMap.defineTheme('Theme name', {})

// 1.实例化时使用新注册的主题
const mindMap = new MindMap({
    theme: 'Theme name'
})

// 2.动态切换新主题
mindMap.setTheme('Theme name')
```

For all configurations of theme, please refer to [Default Topic](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/default.js). The `defineTheme`method will merge the configuration you passed in with the default configuration. Most of the themes  do not need custom many parts. For a typical customized theme configuration, please refer to [blueSky](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/blueSky.js).

### removeTheme(name)

> v0.12.0+

- `name`：Theme name

Remove the registered theme.

### usePlugin(plugin, opt = {})

> v0.3.0+

- `opt`：v0.4.0+，Plugin options. If a plugin supports custom options, it can be passed in through this parameter.

If you need to use some non-core functions, such as mini map, watermark, etc, you can register plugin through this method. Can be called in chain.

Note: The plugin needs to be registered before instantiating `MindMap`.

### hasPlugin(plugin)

> v0.4.0+

Get whether a plugin is registered, The index of the plugin in the registered plugin list is returned, If it is `-1`, it means that the plugin is not registered.

## Instance methods

### getElRectInfo()

Update the position and size information of container elements. Be sure to call this method to update information when the position of container elements on the page changes. If the size of container elements has also changed, please call the 'resize' method.

### updateData(data)

> v0.9.9+

Update canvas data. If the new data is formed by adding, deleting, modifying, and querying based on the current canvas node data, this method can be used to update the canvas data. The performance will be better, and not all nodes will be recreated, but rather reused as much as possible.

### clearDraw()

> v0.8.0+

Clear `lineDraw`、`associativeLineDraw`、`nodeDraw`、`otherDraw` containers.

### destroy()

> v0.6.0+

Destroy mind maps. It will remove registered plugins, remove listening events, and delete all nodes on the canvas.

### getSvgData({ paddingX = 0, paddingY = 0, ignoreWatermark = false, addContentToHeader, addContentToFooter, node })

> v0.3.0+

`paddingX`: Padding x

`paddingY`: Padding y

`ignoreWatermark`：v0.8.0+, Do not draw watermarks. If you do not need to draw watermarks, you can pass 'true' because drawing watermarks is very slow

`addContentToHeader`：v0.9.9+, Function, You can return the custom content to be added to the header, as detailed in the configuration in 【Instantiation options】

`addContentToFooter`：v0.9.9+, Function, You can return the custom content to be added to the tail, as detailed in the configuration in 【Instantiation options】

`node`: v0.9.11+, Node instance, if passed, only export the content of that node

Get the `svg` data and return an object. The detailed structure is as follows:

```js
{
  svg, // Element, the overall svg element of the mind map graphics, including: svg (canvas container), g (actual mind map group)
  svgHTML, // String, svg string, i.e. html string, can be directly rendered to the small map container you prepared
  rect: // Object, position, size, etc. of mind map graphics before zoom
  origWidth, // Number, canvas width
  origHeight, // Number, canvas height
  scaleX, // Number, horizontal zoom value of mind map graphics
  scaleY, // Number, vertical zoom value of mind map graphics
  clipData// v0.9.11+，If node is passed, that is, the content of the specified node is exported, then this field will be returned, Represents the position coordinate data of the node region cropped from the complete image
}
```

### render(callback)

- `callback`: `v0.3.2+`, `Function`, Called when the re-rendering is complete

Triggers a full rendering, which will reuse nodes for better performance. If
only the node positions have changed, this method can be called to `reRender`.

### reRender(callback)

- `callback`: `v0.3.2+`, `Function`, Called when the re-rendering is complete

Performs a full re-render, clearing the canvas and creating new nodes. This has
poor performance and should be used sparingly.

### resize()

After the container size has changed, this method should be called to adjust.

### setMode(mode)

> v0.1.7+

Switches between readonly and edit mode.

`mode`：readonly、edit

### on(event, fn)

Listen to an event. Event list:

| Event Name                       | Description                                                              | Callback Parameters                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| data_change                      | Tree rendering data change, listen to this method to get the latest data | data (current tree rendering data)                                                                              |
| view_data_change（v0.1.1+）      | View change data, such as when dragging or zooming                       | data (current view state data)                                                                                  |
| back_forward                     | Forward or backward                                                      | activeHistoryIndex (current index in the history data array), length (current length of the history data array) |
| draw_click                       | Canvas click event                                                       | e (event object)                                                                                                |
| svg_mousedown                    | svg canvas mouse down event                                              | e (event object)                                                                                                |
| mousedown                        | el element mouse down event                                              | e (event object), this (Event event class instance)                                                             |
| mousemove                        | el element mouse move event                                              | e (event object), this (Event event class instance)                                                             |
| drag                             | If it is a drag event while holding down the left button                 | e (event object), this (Event event class instance)                                                             |
| mouseup                          | el element mouse up event                                                | e (event object), this (Event event class instance)                                                             |
| mousewheel                       | Mouse scroll event                                                       | e (event object), dir (up or down scroll. v0.9.2+ changed to dirs, array type, which supports saving multiple directions simultaneously), this (Event event class instance) 、isTouchPad（v0.6.1+, Is it an event triggered by the touchpad）                                   |
| contextmenu                      | svg canvas right mouse button menu event                                 | e (event object)                                                                                                |
| node_click                       | Node click event                                                         | this (node instance), e (event object)                                                                          |
| node_mousedown                   | Node mouse down event                                                    | this (node instance), e (event object)                                                                          |
| node_mouseup                     | node mouseup event                                                       | this (node instance), e (event object)                                                                          |
| node_mouseup                     | Node mouseup event                                                       | this (node instance), e (event object)                                                                          |
| node_dblclick                    | Node double-click event                                                  | this (node instance), e (event object)                                                                          |
| node_contextmenu                 | Node right-click menu event                                              | e (event object), this (node instance)                                                                          |
| node_mouseenter（v0.4.1+）       | Node mouseenter event     | this (node instance), e (event object)            |
| node_mouseleave（v0.4.1+）       | Node mouseleave event     | this (node instance), e (event object)            |
| before_node_active               | Event before node activation                                             | this (node instance), activeNodeList (current list of active nodes)                                             |
| node_active                      | Node activation event                                                    | this (node instance), activeNodeList (current list of active nodes)                                             |
| expand_btn_click                 | Node expand or collapse event                                            | this (node instance)                                                                                            |
| before_show_text_edit            | Event before node text edit box opens                                    |                                                                                                                 |
| hide_text_edit                   | Node text edit box close event【The end of text editing for the associated line will also trigger this event, and there are no callback parameters at this time, so defensive programming is necessary】    | textEditNode (text edit box DOM node), activeNodeList (current list of active nodes) 、node（v0.10.2+, Node instance for current text editing）                 |
| scale                            | Canvas zoom event                                                               | scale (zoom ratio)                                            |
| translate（v0.9.10+）         |   Canvas movement event           | x（translate x）、y（translate y）                     |
| node_img_dblclick（v0.2.15+）    | Node image double-click event                                            | this (node instance), e (event object)                                                                          |
| node_img_mouseenter（v0.6.5+）    |  Node image mouseenter event                    | this（node instance）、imgNode（img node）、e（event object）                              |
| node_img_mouseleave（v0.6.5+）    |  Node image mouseleave event                    | this（node instance）、imgNode（img node）、e（event object）                              |
| node_img_mousemove（v0.6.5+）    |  Node image mousemove event                      | this（node instance）、imgNode（img node）、e（event object）                              |
| node_tree_render_end（v0.2.16+） | Node tree render end event              |          |
| node_tree_render_start（v0.10.0+） | Node tree start rendering event  |           |
| rich_text_selection_change（v0.4.0+）         |  Available when the `RichText` plugin is registered. Triggered when the text selection area changes when the node is edited         |  hasRange（Whether there is a selection）、rectInfo（Size and location information of the selected area）、formatInfo（Text formatting information of the selected area）            |
| transforming-dom-to-images（v0.4.0+）         |  Available when the `RichText` plugin is registered. When there is a `DOM` node in `svg`, the `DOM` node will be converted to an image when exporting to an image. This event will be triggered during the conversion process. You can use this event to prompt the user about the node to which you are currently converting         |  index（Index of the node currently converted to）、len（Total number of nodes to be converted）            |
| node_dragging（v0.4.5+）    | Triggered when a node is dragged   |  node(The currently dragged node)           |
| node_dragend（v0.4.5+）    | Triggered when the node is dragged and ends   | { overlapNodeUid, prevNodeUid, nextNodeUid }（v0.6.12+，The node uid to which the node is moved this time, for example, if it is moved to node A, then the overlayNodeUid is the uid of node A. If it is moved to the front of node B, then the nextNodeUid is the uid of node B. You can obtain the node instance through the mindMap. extender.findNodeByUid(uid) method）            |
| associative_line_click（v0.4.5+）    |  Triggered when an associated line is clicked  |  path(Connector node)、clickPath(Invisible click line node)、node(Start node)、toNode(Target node)          |
| svg_mouseenter（v0.5.1+）    | Triggered when the mouse moves into the SVG canvas   | e（event object）  |
| svg_mouseleave（v0.5.1+）    | Triggered when the mouse moves out of the SVG canvas   | e（event object）  |
| node_icon_click（v0.6.10+）    | Triggered when clicking on an icon within a node   | this（node instance）、item（Click on the icon name）、e（event object）、node(Icon node, v0.9.9+)   |
| node_icon_mouseenter（v0.9.9+）    |  Triggered when the mouse moves into an icon within a node  | this（node instance）、item（Click on the icon name）、e（event object）、node(Icon node)  |
| node_icon_mouseleave（v0.9.9+）    |  Triggered when the mouse moves out of the icon within the node  | this（node instance）、item（Click on the icon name）、e（event object）、node(Icon node)  |
| view_theme_change（v0.6.12+）    | Triggered after calling the setTheme method to set the theme   | theme（theme name）  |
| set_data（v0.7.3+）    |  Triggered when the setData method is called to dynamically set mind map data  | data（New Mind Map Data）  |
| resize（v0.8.0+）    | Triggered after the container size changes, actually when the 'resize' method of the mind map instance is called   |   |
| beforeDestroy（v0.9.0+）    |  Triggered before destroying the mind map, i.e. triggered by calling the destroy method  |   |
| body_mousedown（v0.9.2+）    | Mousedown event of document.body                      | e（event object）      |
| body_click    | Click event of document.body                       | e（event object）      |
| data_change_detail（v0.9.3+）    |  The detailed changes in rendering tree data will return an array, with each item representing an update point and each item being an object, There is a 'type' attribute that represents the type of detail, Including 'create' (create node), 'update' (update node), 'delete' (delete node), There is a 'data' attribute that represents the current updated node data. If it is of the 'update' type, there will also be an 'oldData' attribute that saves the data of the node before the update  | arr（Detail data）      |
| layout_change（v0.9.4+）    |  Triggered when modifying the structure, i.e. when the mindMap.setLayout() method is called | layout（New layout）      |
| node_cooperate_avatar_click（v0.9.9+）    | Triggered when the mouse clicks on a person's avatar during collaborative editing  |  userInfo(User info)、 this(Current node instance)、 node(Avatar node)、 e(Event Object)      |
| node_cooperate_avatar_mouseenter（v0.9.9+）    |  Triggered when the mouse moves over a person's avatar during collaborative editing |  userInfo(User info)、 this(Current node instance)、 node(Avatar node)、 e(Event Object)    |
| node_cooperate_avatar_mouseleave（v0.9.9+）    |  Triggered when removing personnel avatars with the mouse during collaborative editing |  userInfo(User info)、 this(Current node instance)、 node(Avatar node)、 e(Event Object)   |
| exit_demonstrate（v0.9.11+）    | Triggered when exiting demonstration mode  |     |
| demonstrate_jump（v0.9.11+）    | Trigger when switching steps in demonstration mode  |  currentStepIndex（The index of the steps currently played, counting from 0）、stepLength（Total number of playback steps）   |
| node_tag_click（v0.9.12+）    | Click events on node labels | this(Current node instance)、item（Content of clicked tags）、index（v0.10.3+，The index of this tag in the tag list）、tagNode（v0.10.3+，Tag node, G instance of @svgdotjs/svg.js library, Can be used to obtain label position and size information）     |
| node_layout_end（v0.10.1+）    | Event where the content layout of a single node is completed | this(Current node instance)  |
| node_attachmentClick（v0.9.10+）    | Click event for node attachment icon | this(Current node instance)、e（Event Object）、node（Icon node）  |
| node_attachmentContextmenu（v0.9.10+）    | Right click event on node attachment icon | this(Current node instance)、e（Event Object）、node（Icon node）  |
| before_update_config（v0.10.4+）    | Triggered before updating the configuration, that is, when the 'mindMap.updateConfig' method is called to update the configuration | opt（The configuration object before updating refers to an object, not a copy, so when the after_uupdate_comfig event is triggered, the object will also change synchronously. Therefore, it is necessary to cache a certain configuration field that you need）  |
| after_update_config（v0.10.4+）    | Triggered after updating configuration |  opt（Updated configuration object）、lastOpt（v0.12.1+，The previous configuration object can be used to compare with opt whether a certain configuration has changed, but it should be noted that only option fields with simple values can be compared） |
| node_note_click（v0.10.6+）    | Click event of node note icon | this(Current node instance)、e（Event Object）、node（Icon node）  |
| search_match_node_list_change（v0.11.0+）    | Search plugin: Triggered when the list of matched nodes changes during search | list（The matching node list, please note that the data in the array items may be node instances or node data, and it is necessary to make a good judgment）  |
| node_text_edit_change（v0.11.1+）    | Triggered when the input text changes in node text editing | { node, text, richText } The meanings of the fields are: the node instance currently being edited, the latest text, and whether it is rich text |

### emit(event, ...args)

Trigger an event, which can be one of the events listed above or a custom event.

### off(event, fn)

Unbind an event.

### setTheme(theme, notRender = false)

- `notRender`: v0.8.0+, Is not call the render method to update the canvas.

Switches the theme. Available themes can be found in the options table above.

### getTheme()

Gets the current theme.

### setThemeConfig(config, notRender = false)

- `notRender`: v0.8.0+, Is not call the render method to update the canvas.

Sets the theme configuration. `config` is the same as the `themeConfig` option
in the options table above.

### getCustomThemeConfig()

Gets the custom theme configuration.

### getThemeConfig(prop)

Gets the value of a specific theme configuration property.

### getConfig(*prop*)

> 0.2.24+

`prop`：Get the value of the specified configuration, and return the entire configuration if not passed

Get config, That is,  `opt` of `new MindMap (opt)`

### updateConfig(*opt* = {})

> 0.2.24+

`opt`：Configuration to update

Update config，That is update `opt` of `new MindMap(opt)`，You can only update some data, such as:

```js
mindMap.updateConfig({
    enableFreeDrag: true// 开启节点自由拖拽
})
```

This method only updates the configuration and has no other side effects, such as triggering canvas re-rendering

### getLayout()

Gets the current layout structure.

### setLayout(layout, notRender = false)

- `notRender`: v0.8.0+, Is not call the render method to update the canvas.

Sets the layout structure. Available values can be found in the `layout` field
in the options table above.

### execCommand(name, ...args)

Executes a command, which will add a record to the history stack for undo or
redo. All commands are as follows:

| Command name                       | Description                                                  | Parameters                                                   |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| SELECT_ALL                         | Select all                                                   |                                                              |
| BACK                               | Go back a specified number of steps                          | step (the number of steps to go back, default is 1)          |
| FORWARD                            | Go forward a specified number of steps                       | step (the number of steps to go forward, default is 1)       |
| INSERT_NODE                        | Insert a sibling node, the active node or appoint node will be the operation node. If there are multiple active nodes, only the first one will be effective（v0.7.2+Supports simultaneous insertion of sibling nodes into multiple active nodes） | openEdit（v0.4.6+, Whether to activate the newly inserted node and enter editing mode, default is `true`） 、 appointNodes（v0.4.7+, Optional, appoint node, Specifying multiple nodes can pass an array）、 appointData（Optional, Specify the data for the newly created node, Such as {text: 'xxx', ...}, Detailed structure can be referred to [exampleData.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js) ）、 appointChildren（v0.6.14+, Optional, Specify the child nodes of the newly created node, array type）                                                           |
| INSERT_CHILD_NODE                  | Insert a child node, the active node or appoint node will be the operation node |  openEdit（v0.4.6+, Whether to activate the newly inserted node and enter editing mode, default is `true`）、 appointNodes（v0.4.7+, Optional, appoint node, Specifying multiple nodes can pass an array）、 appointData（Optional, Specify the data for the newly created node, Such as {text: 'xxx', ...}, Detailed structure can be referred to [exampleData.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js) ）、 appointChildren（v0.6.14+, Optional, Specify the child nodes of the newly created node, array type）                                                            |
| UP_NODE                            | Move node up, the active node will be the operation node. If there are multiple active nodes, only the first one will be effective. Using this command on the root node or the first node in the list will be invalid |                                                              |
| DOWN_NODE                          | Move node down, the active node will be the operation node. If there are multiple active nodes, only the first one will be effective. Using this command on the root node or the last node in the list will be invalid |                                                              |
| REMOVE_NODE                        | Remove node, the active node or appoint node will be the operation node      |  appointNodes（v0.4.7+, Optional, appoint node, Specifying multiple nodes can pass an array）                                                            |
| PASTE_NODE                         | Paste node to a node, the active node will be the operation node | data (the node data to paste, usually obtained through the renderer.copyNode() and renderer.cutNode() methods) |
| SET_NODE_STYLE                     | Modify node single style                                            | node (the node to set the style of), prop (style property), value (style property value), isActive (v0.7.0+has been abandoned, boolean, whether the style being set is for the active state) |
| SET_NODE_STYLES（v0.6.12+）       |  Modify multiple styles of nodes   | node（the node to set the style of）、style（Style object，key is style prop，value is style value）、isActive（v0.7.0+has been abandoned, boolean, whether the style being set is for the active state） |
| SET_NODE_ACTIVE                    | Set whether the node is active(This command only updates the activation fields and node activation styles in the node data. If you want to achieve the same effect as clicking on a node with the mouse, please use the 'active()' method of the node instance directly.)   | node (the node to set), active (boolean, whether to activate) |
| CLEAR_ACTIVE_NODE                  | Clear the active state of the currently active node(s), the active node will be the operation node |                                                              |
| SET_NODE_EXPAND                    | Set whether the node is expanded                             | node (the node to set), expand (boolean, whether to expand)  |
| EXPAND_ALL    | Expand all nodes   |  uid（v0.11.1+，Expand only all descendant nodes under the specified UID node）        |
| UNEXPAND_ALL      | Collapse all nodes  | isSetRootNodeCenter（v0.9.11+，default is true，Will the root node be moved to the center after retracting all nodes）、uid（v0.11.1+，Only retract all descendant nodes of the specified UID node）  |
| UNEXPAND_TO_LEVEL (v0.2.8+)        | Expand to a specified level                                  | level (the level to expand to, 1, 2, 3...)                   |
| SET_NODE_DATA                      | Update node data, that is, update the data in the data object of the node data object. Note that this command will not trigger view updates | node (the node to set), data (object, the data to update, e.g. `{expand: true}`) |
| SET_NODE_TEXT                      | Set node text                                                | node (the node to set), text (the new text for the node), richText（v0.4.0+, If you want to set a rich text character, you need to set it to `true`）、resetRichText（v0.6.10+Do you want to reset rich text? The default is false. If true is passed, the style of the rich text node will be reset） |
| SET_NODE_IMAGE                     | Set Node Image                                               | node (node to set), imgData (object, image information, structured as: `{url, title, width, height}`, the width and height of the image must be passed) |
| SET_NODE_ICON                      | Set Node Icon                                                | node (node to set), icons (array, predefined image names array, available icons can be obtained in the nodeIconList list in the [icons.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/svg/icons.js) file, icon name is type_name, such as ['priority_1']) |
| SET_NODE_HYPERLINK                 | Set Node Hyperlink                                           | node (node to set), link (hyperlink address), title (hyperlink name, optional) |
| SET_NODE_NOTE                      | Set Node Note                                                | node (node to set), note (note text)                         |
| SET_NODE_ATTACHMENT（v0.9.10+）                       |   Set node attachment               | node（node to set）、url（attachment url）、name（attachment name, optional）                       |
| SET_NODE_TAG                       | Set Node Tag                                                 | node (node to set), tag (Previous versions before v0.10.3 only support string arrays, i.e. ['tag'], while v0.10.3+versions support object arrays, i.e. [{text: 'tag', style: {} }]) |
| INSERT_AFTER (v0.1.5+)             | Move Node to After Another Node | node (node to move, (v0.7.2+supports passing node arrays to move multiple nodes simultaneously)), exist (target node)                     |
| INSERT_BEFORE (v0.1.5+)            | Move Node to Before Another Node | node (node to move, (v0.7.2+supports passing node arrays to move multiple nodes simultaneously)), exist (target node)                     |
| MOVE_NODE_TO (v0.1.5+)             | Move a node as a child of another node       | node (the node to move, (v0.7.2+supports passing node arrays to move multiple nodes simultaneously)), toNode (the target node)            |
| ADD_GENERALIZATION (v0.2.0+)       | Add a node summary                                           | data (the data for the summary, in object format, all numerical fields of the node are supported, default is `{text: 'summary'}`)、openEdit（v0.9.11+，Default is true，Whether to enter text editing status by default） |
| REMOVE_GENERALIZATION (v0.2.0+)    | Remove a node summary                                        |                                                              |
| SET_NODE_CUSTOM_POSITION (v0.2.0+) | Set a custom position for a node                             | node (the node to set), left (custom x coordinate, default is undefined), top (custom y coordinate, default is undefined) |
| RESET_LAYOUT (v0.2.0+)             | Arrange layout with one click                                |                                                              |
| SET_NODE_SHAPE (v0.2.4+)           | Set the shape of a node                                      | node (the node to set), shape (the shape, all shapes: [Shape.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/core/render/node/Shape.js)) |
| GO_TARGET_NODE（v0.6.7+）           |  Navigate to a node, and if the node is collapsed, it will automatically expand to that node   | node（Node instance or node uid to locate）、callback（v0.6.9+, Callback function after positioning completion, v0.9.8+receives a parameter representing the target node instance） |
| INSERT_MULTI_NODE（v0.7.2+）           |  Insert multiple sibling nodes into the specified node at the same time, with the operating node being the currently active node or the specified node   | appointNodes（Optional, specify nodes, specify multiple nodes to pass an array）, nodeList（Data list of newly inserted nodes, array type） |
| INSERT_MULTI_CHILD_NODE（v0.7.2+）           |  Insert multiple child nodes into the specified node simultaneously, with the operation node being the currently active node or the specified node   | appointNodes（Optional, specify nodes, specify multiple nodes to pass an array）, childList（Data list of newly inserted nodes, array type） |
| INSERT_FORMULA（v0.7.2+）           |  Insert mathematical formulas into nodes, operate on the currently active node or specified node   | formula（Mathematical formula to insert, LaTeX syntax）, appointNodes（Optional, specify the node to insert the formula into. Multiple nodes can be passed as arrays, otherwise it defaults to the currently active node） |
| INSERT_PARENT_NODE（v0.8.0+）           |  Insert a parent node into the specified node, with the operation node being the currently active node or the specified node   | openEdit（Activate the newly inserted node and enter editing mode, default to 'true'`）、 appointNodes（Optional, specify the node to insert into the parent node, and specify that multiple nodes can pass an array）、 appointData（Optional, specify the data for the newly created node, such as {text: 'xxx', ...}, Detailed structure can be referenced [exampleData.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js)） |
| REMOVE_CURRENT_NODE（v0.8.0+）           |  Delete only the current node, operate on the currently active node or specified node    | appointNodes（Optional, specify the nodes to be deleted, and multiple nodes can be passed as an array） |
| MOVE_UP_ONE_LEVEL（v0.9.6+）           | Move the specified node up one level     | node（Optional, specify the node to move up the hierarchy, if not passed, it will be the first node in the current active node） |
| REMOVE_CUSTOM_STYLES（v0.9.7+）           |  One click removal of custom styles for a node    | node（Optional, specify the node to clear the custom style, otherwise it will be the first one in the current active node） |
| REMOVE_ALL_NODE_CUSTOM_STYLES（v0.9.7+）           |   One click removal of multiple nodes or custom styles for all nodes   | appointNodes（Optional, node instance array, specifying multiple nodes to remove custom styles from. If not passed, the custom styles of all nodes on the current canvas will be removed） |

### setData(data)

Dynamic setting of mind map data, pure node data

`data`: mind map structure data. V0.9.9+ supports passing empty objects or null, and the canvas will display blank space.

### setFullData(_data_)

> v0.2.7+

Dynamic setting of mind map data, including node data, layout, theme, view

`data`: complete data, structure can refer to
[exportFullData](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exportFullData.json)

### getData(withConfig)

> v0.2.9+

Gets mind map data

`withConfig`: `Boolean`, default is `false`, that is, the obtained data only
includes the node tree, if `true` is passed, it will also include theme, layout,
view, etc. data

### export(type, isDownload, fileName)

> You need to register the `Export` plugin first

Export

`type`: the type to be exported, optional values: png, svg, json, pdf (v0.2.1+),
smm (essentially also json)

`isDownload`: whether to directly trigger download, Boolean value, default is
`false`

`fileName`: (v0.1.6+) the name of the exported file, default is `思维导图` (mind
map).

If it is exported as `png`, the fourth parameter can be passed:

`transparent`: v0.5.7+, `Boolean`, default is `false`, Specify whether the background of the exported image is transparent

If it is exported as `svg`, the fourth parameter can be passed:

`plusCssText`: Additional `CSS` style. If there is a `dom` node in `svg`, you can pass in some styles specific to the node through this parameter

If it is exported as `json` or `smm`, the fourth parameter can be passed:

`withConfig`: `Boolean`, default is `true`, Specify whether the exported data includes configuration data, otherwise only pure node tree data will be exported

### toPos(x, y)

> v0.1.5+

Convert the coordinates of the browser's visible window to coordinates relative
to the canvas.

### addPlugin(plugin, opt)

> v0.4.0+

Register plugin, Use `MindMap.usePlugin` to register plugin only before instantiation, The registered plugin will not take effect after instantiation, So if you want to register the plugin after instantiation, you can use the `addPlugin` method of the instance.

### removePlugin(plugin)

> v0.4.0+

Remove registered plugin, Plugins registered through the `usePlugin` or `addPlugin` methods can be removed.

### appendCss(key, str)

> v0.12.0+

- `key`: The unique identifier is required for removal.

- `str`: CSS style string.

Add necessary CSS styles. This style will be dynamically added to the page during instantiation, and will also be added to the SVG source code when exported as SVG.

### removeAppendCss(key)

> v0.12.0+

- `key`: The unique identifier.

Remove the added CSS styles.