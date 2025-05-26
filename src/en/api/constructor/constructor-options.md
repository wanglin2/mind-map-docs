# Constructor

## Basic use 

```html
<div id="mindMapContainer"></div>
```

```js
import MindMap from "simple-mind-map";

const mindMap = new MindMap({
  el: document.getElementById("mindMapContainer"),
  data: {
    "data": {
        "text": "Root Node"
    },
    "children": []
  }
});
```

### Special Reminder

Node tree rendering is an asynchronous operation, so it is not possible to immediately call some operations that require node rendering to be completed after instantiation, otherwise errors and unknown phenomena may occur, You need to listen for the 'node_tree_render_end' event and wait until the node tree rendering is complete before proceeding. In addition to instantiation, other methods such as 'setData', 'updateData', 'render', etc. are asynchronous and need to be handled in this way.

## Instantiation options

### 1.Base

| Field Name   | Description        | Type    | Default Value    |
| --------- | ------- | ---------------- | --------- |
| el  | Container element, must be a DOM element（When the position of container elements on the page has changed but the size has not changed, the 'getElRectInfo()' method must be called to update the relevant information inside the library; When the size also changes, the 'resize()' method must be called, otherwise it will cause some functional exceptions）                     | Element |      |
| data       | Mind map data, Please refer to the introduction of 【Data structure】 below. V0.9.9+supports passing empty objects or null, and the canvas will display blank space |  Object 、null  |     | 
| viewData   | View data can be used to restore the position and zoom of the canvas. This data can be obtained through method `mindMap.view.getTransformData()` | Object 、 null  |   |
| layout       | Layout type, options: logicalStructure (logical structure diagram), logicalStructureLeft(v0.10.2+, Leftward logical structure diagram), mindMap (mind map), catalogOrganization (catalog organization diagram), organizationStructure (organization structure diagram)、timeline（v0.5.4+, timeline）、timeline2（v0.5.4+, up down alternating timeline）、fishbone（v0.5.4+, fishbone diagram）、fishbone2（v0.14.0+，Fish bone diagram with fish head and tail shape）、rightFishbone（v0.14.0+, Right fishbone diagram plugin, requires registration of simple-mind-map-plugin-right-fishbone plugin）、rightFishbone2（v0.14.0+，Right side fishbone diagram with fish head and tail shape，requires registration of simple-mind-map-plugin-right-fishbone plugin）、verticalTimeline（Vertical timeline, with alternating distribution of third level nodes on both sides）、verticalTimeline2（v0.14.0+，Vertical timeline, all third level nodes are distributed on the left side）、verticalTimeline3（v0.14.0+，Vertical timeline, all third level nodes are distributed on the right side） | String  | logicalStructure |
| fishboneDeg（v0.5.4+）     | Set the diagonal angle of the fishbone structure diagram        |  Number |  45    | 
| theme  | Theme, v0.12.0+ extract the built-in themes from the library into separate plugins(simple-mind-map-plugin-themes, Please refer to the plugin documentation for details), The library only has default themes(default), Version libraries below v0.12.0 have built-in optional theme lists: default, classic, minions, pinkGrape, mint, gold, vitalityOrange, greenLeaf, dark2, skyGreen, classic2, classic3, classic4(v0.2.0+), classicGreen, classicBlue, blueSky, brainImpairedPink, dark, earthYellow, freshGreen, freshRed, romanticPurple, simpleBlack(v0.5.4+), courseGreen(v0.5.4+), coffee(v0.5.4+), redSpirit(v0.5.4+), blackHumour(v0.5.4+), lateNightOffice(v0.5.4+), blackGold(v0.5.4+)、、avocado(v.5.10-fix.2+)、autumn(v.5.10-fix.2+)、orangeJuice(v.5.10-fix.2+) |  String  | default   |
| themeConfig  | Theme configuration, will be merged with the selected theme, available fields refer to: [default.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/theme/default.js) | Object  | \{\}  |
| scaleRatio  | The incremental scaling ratio   | Number  | 0.1  |
| translateRatio（v0.11.2+）       | The step size ratio of translation is only applied in the translation triggered by the mouse wheel and touchpad      | Number  |      1         |
| minZoomRatio（v0.11.2+）         | The minimum reduction value, percentage, and minimum value are 0. This option only affects the view.narrow method (affecting the behavior of Ctrl+- shortcut keys, mouse wheel, and touchpad),  It will not affect other methods, such as view.setScale, and you need to limit the size passed in by yourself      | Number  |      20         |
| maxZoomRatio（v0.11.2+）         |  Maximum amplification value, percentage, passing -1 represents no restriction, otherwise passing numbers above 0 will only affect the view.enlarge method      | Number  |      400        |
| customCheckIsTouchPad（v0.11.2+）   | Customize the judgment of whether the wheel event comes from the touchpad of the computer. The default method is to judge whether the value of e.deltaY is less than 10. Obviously, this method is inaccurate. When the mouse scrolls slowly or the touch moves quickly, the judgment fails. If you have a better method, please submit an issue. If you want to judge for yourself, you can pass a function that takes a parameter e (event object) and returns true or false, representing whether it is from the touchpad    | Function、Null  |              |
| maxTag  | The maximum number of tags displayed in the node, any additional tags will be discarded | Number  | 5 |
| tagPosition（v0.10.3+）（v0.13.1+ has been abandoned, please use the tagPlacement configuration for the theme）      | The position of the tag display relative to the node text，bottom（Below the text）、right（On the right side of the text）   | String  | right      |
| imgTextMargin  | The spacing between the image and text in the node | Number  | 5  |
| textContentMargin | The spacing between various text information in the node, such as the spacing between the icon and text | Number  | 2 |
| customNoteContentShow（v0.1.6+） | Custom node note content display, The default is to listen to the mouse move in and out events of the icon to display and hide. If you want to use other events, this option cannot be met. You can listen to other events yourself to achieve this effect, object type, structure: \{show: (noteContent, left, top, node) => {// your display node note logic. node is a new parameter added in v0.8.1+ version, representing node instances }, hide: () => \{// your hide node note logic \}\} |  Object  | null             |
| readonly（v0.1.7+）              | Whether it is read-only mode   | Boolean | false            |
| textAutoWrapWidth（v0.3.4+）     |   Each line of text in the node will wrap automatically when it reaches the width | Number  | 500 |
| customHandleMousewheel（v0.4.3+）     | User-defined mouse wheel event processing can pass a function, and the callback parameter is the event object | Function  | null |
| mousewheelAction（v0.4.3+）     | The behavior of the mouse wheel, `zoom`(Zoom in and out)、`move`(Move up and down). If `customHandleMousewheel` passes a custom function, this property will not take effect  | String  | zoom（v0.9.1+ default is move） |
| mousewheelMoveStep（v0.4.3+）     | When the `mousewheelAction` is set to `move`, you can use this attribute to control the step length of the view movement when the mouse scrolls. The unit is `px`  |  Number  | 100 |
| mousewheelZoomActionReverse（v0.6.5+）     | When `mousewheelAction` is set to `zoom`, Or when holding down the Ctrl key, the default scrolling forward is to zoom out, and scrolling backward is to zoom in. If this property is set to true, it will be reversed | Boolean  | false（v0.9.1+ default is true） |
| defaultInsertSecondLevelNodeText（v0.4.7+）     | Text of the default inserted secondary node | String  | 二级节点 |
| defaultInsertBelowSecondLevelNodeText（v0.4.7+）     | Text for nodes below the second level inserted by default  | String  | 分支主题 |
| expandBtnSize  |  Expand the size of the collapse button  |  Number | 20 |
| expandBtnStyle（v0.5.0+）     | Expand the color of the stow button, (The fontSize and strokeColor fields were added in version 0.7.0+to set the text style for displaying the number of nodes when folded) | Object  | \{ color: '#808080', fill: '#fff', fontSize: 13, strokeColor: '#333333' \} |
| expandBtnIcon（v0.5.0+）     | Customize the icon of the expand/collapse button, and you can transfer the svg string of the icon (When the node is collapsed, render the open icon, and when it is expanded, render the close icon)  | Object  | \{ open: '', close: '' \} |
| expandBtnNumHandler（v0.7.0+）     | Used to customize the display of the number of nodes when collapsed, a function can be passed. Versions before v0.11.1 receive a parameter representing the total number of all descendant nodes of the collapsed node, while versions v0.11.1+receive two parameters. The first parameter still has the total number of descendant nodes, and the second parameter is the instance of the node. Need return a number or string that represents the final displayed content. For example, when the number is greater than 99, 99 can be displayed+  | Function  |  |
| isShowExpandNum（v0.7.0+）     | Display the number of folded nodes when they are folded up  | Boolean  | true |
| enableShortcutOnlyWhenMouseInSvg（v0.5.1+）     | Only respond to shortcut key events when the mouse is inside the canvas  | Boolean  | true |
| customCheckEnableShortcut（v0.12.2+）     | Customize whether to respond to shortcut key events, with higher priority than the enableShortcutOnlyWhenMouseInSvg option. You can pass a function that takes the event object e as an argument and needs to return true or false. Returning true means that it is allowed to respond to shortcut key events, while not allowed. The library defaults to responding to shortcut keys when the event target is the body or a text editing box element, and not to others  | Function、null  | null |
| enableNodeTransitionMove（v0.5.1+）（v0.6.7+ is remove this feature）     | Whether to enable node animation transition  | Boolean  | true |
| nodeTransitionMoveDuration（v0.5.1+）（v0.6.7+ is remove this feature）     | If node animation transition is enabled, the transition time can be set using this attribute, in milliseconds  |  Number  | 300 |
| initRootNodePosition（v0.5.3+）     | The position of the initial root node can be passed as an array, default is `['center', 'center']`, Represents the root node at the center of the canvas, In addition to `center`, keywords can also be set to `left`, `top`, `right`, and `bottom`, In addition to passing keywords, each item in the array can also pass a number representing a specific pixel, Can pass a percentage string, such as `['40%', '60%']`, Represents a horizontal position at `40%` of the canvas width, and a vertical position at `60%` of the canvas height   | Array  | null |
| nodeTextEditZIndex（v0.5.5+）     | z-index of node text edit box elements         | Number  | 3000 |
| nodeNoteTooltipZIndex（v0.5.5+）     | z-index of floating layer elements in node comments  | Number  | 3000 |
| isEndNodeTextEditOnClickOuter（v0.5.5+）     | Whether to end the editing status of node text when clicking on an area outside the canvas  | Boolean  | true |
| maxHistoryCount（v0.5.6+）     | Maximum number of history records         | Number  | 1000（v0.9.2+ changed 500） |
| alwaysShowExpandBtn（v0.5.8+）     | Whether to always display the expand and collapse buttons of nodes, which are only displayed when the mouse is moved up and activated by default  | Boolean  | false |
| iconList（v0.5.8+）     | The icons that can be inserted into the extension node, and each item in the array is an object. Please refer to the "Icon Configuration" table below for the detailed structure of the object  | Array  | [] |
| maxNodeCacheCount（v0.5.10+）     | The maximum number of cached nodes. To optimize performance, an internal node cache pool is maintained to reuse nodes. This attribute allows you to specify the maximum number of caches in the pool  |  Number | 1000 |
| fitPadding（v0.6.0+）     | The padding of mind mapping when adapting to canvas size, Unit: px |   Number | 50 | 
| enableCtrlKeyNodeSelection（v0.6.0+）     |  Whether to enable the function of holding down the Ctrl key to select multiple nodes | Boolean  | true |
| useLeftKeySelectionRightKeyDrag（v0.6.0+）     | Setting to left click to select multiple nodes and right click to drag the canvas.  | Boolean  | false |
| beforeTextEdit（v0.6.0+）     | The callback method before the node is about to enter editing. If the method returns a value other than true, the editing will be canceled. The function can return a value or a promise, and the callback parameter is the node instance  |  Function/null | null |
| isUseCustomNodeContent（v0.6.3+）     |  Whether to customize node content |  Boolean | false | 
| customCreateNodeContent（v0.6.3+）     | If `isUseCustomNodeContent` is set to `true`, then this option needs to be used to pass in a method that receives the node instance `node` as a parameter (if you want to obtain data for that node, you can use `node.nodeData.data`). You need to return the custom node content element, which is the DOM node. If a node does not require customization, you can return `null` |   Function/null | null |
| mouseScaleCenterUseMousePosition（v0.6.4-fix.1+）     | Is the mouse zoom centered around the current position of the mouse, otherwise centered around the canvas | Boolean  | true |
| customInnerElsAppendTo（v0.6.12+）     |Specify the location where some internal elements (node text editing element, node note display element, associated line text editing element, node image adjustment button element) are added, and default to document.body | null/HTMLElement  | null | 
| enableCreateHiddenInput（v0.6.13+）（v0.6.14+ remove this feature）     | Is it allowed to create a hidden input box that will be focused when the node is activated for pasting data and automatically entering the text editing state |  Boolean  | true |
| enableAutoEnterTextEditWhenKeydown（v0.6.13+）     | Does it automatically enter text editing mode when pressing the Chinese, English, or numeric buttons when there is an activation node? | Boolean  | true |
| autoEmptyTextWhenKeydownEnterEdit（v0.12.2+）     | When the enableAutoEnterTextEditWhenKeydown option is enabled, does it automatically clear the original text when entering text editing through a key  | Boolean | false |
| customHandleClipboardText（v0.6.14+）     | Customize the processing of clipboard text. When pressing ctrl+v to paste, it will read the text and images from the user's clipboard. By default, it will only determine whether the text is regular text and node data in simple mind map format. If you want to process data from other mind maps, such as process, zhixi, etc., you can pass a function that takes the text from the current clipboard as a parameter and returns the processed data, which can be of two types: 1.If a pure text is returned, a child node will be directly created with that text; 2.Returns a node object in the following format: \{ simpleMindMap: true, data: \{ data: \{ text: '' \}, children: [] \} \}, The representative is data in simple bind map format, and the node data is in the same format as the simple bind map node data. If your processing logic has asynchronous logic, you can also return a promise | Function  | null |
| errorHandler（v0.6.15+）     | Custom error handling functions currently only throw some asynchronous logic errors. Can pass a function that takes two parameters, the first being the wrong type and the second being the wrong object | Function  |  |
| disableMouseWheelZoom（v0.6.15+）     | Prohibit mouse wheel scaling, you can still use the API for scaling | Boolean  | false |
| enableDblclickReset（v0.6.17+）(v0.8.0+this attribute has been deleted)     | Turn on the mouse and double-click to reset the position and zoom of the mind map |  Boolean  | true(v0.7.0+changed to false)  | 
| enableDblclickBackToRootNode（v0.8.0+）     | Whether to return to the root node when double clicking with the mouse, that is, to center the display of the root node | Boolean  | false  | 
| hoverRectColor（v0.7.0+）     | The node mouse hover and the rectangular border color displayed when activated will add a transparency of 0.6 when hovering | String  | rgb(94, 200, 248)  |
| hoverRectPadding（v0.7.0+）     | The distance between the node mouse hover and the displayed rectangular border when activated and the node content | Number  | 2  |
| selectTextOnEnterEditText（v0.7.0+）     | Is the text selected by default when double-clicking a node to enter node text editing? By default, it will only be selected when creating a new node | Boolean  | true  |
| deleteNodeActive（v0.7.1+）     | Enable the function of automatically activating adjacent nodes or parent nodes after deleting nodes | Boolean  | true  |
| fit（v0.7.1-fix.2+）     | Is the first rendering scaled to fit the canvas size | Boolean  | false  |
| tagsColorMap（v0.7.2+）     | The color of a custom node label can be transferred to an object, where key is the label content to be assigned a color, and value is the color of the label content. If not transferred internally, a corresponding color will be generated based on the label content | Object  | \{\}  |
| cooperateStyle（v0.7.3+）     | The configuration of personnel avatar style during node collaboration editing, with field meanings as follows: avatar size, and if it is a text avatar, the size of the text | Object  | \{ avatarSize: 22, fontSize: 12 \}  |
| onlyOneEnableActiveNodeOnCooperate（v0.9.8+）     | During collaborative editing, the same node cannot be selected by multiple people at the same time | Boolean | false  |
| defaultGeneralizationText（v0.8.0+）     | Insert default text for summary |  String | 概要  |
| handleIsSplitByWrapOnPasteCreateNewNode（v0.8.0+）     | When creating a new node by pasting text, control whether to automatically split the nodes based on line breaks. If there is a line break, multiple nodes will be created based on the line break. Otherwise, only one node will be created, and a function can be passed to return promise. resolve represents splitting based on line breaks, and reject represents ignoring line breaks |  Function / null  | null  |
| addHistoryTime（v0.8.0+）     | Only one historical record can be added within the specified time to avoid adding unnecessary intermediate states. Unit: ms  | Number | 100  |
| isDisableDrag（v0.8.1+）     | Is disable dragging the canvas  | Boolean | false  |
| highlightNodeBoxStyle（v0.9.0+）（v0.11.1+ has been removed）     |  Highlight box style when the mouse moves into the summary to highlight the node it belongs to |  Object | \{ stroke: 'rgb(94, 200, 248)', fill: 'transparent' \}  |
| createNewNodeBehavior（v0.9.1+）     | Behavior when creating a new node. default（By default, newly created nodes will be activated and enter editing mode. If multiple new nodes are created simultaneously, they will only be activated and will not enter editing mode）、notActive（Do not activate newly created nodes）、activeOnly（Only activate newly created nodes and do not enter editing mode）  | String | default  |
| defaultNodeImage（v0.9.1-fix.2+）     | Image address, the default image displayed when node image loading fails  |  String |   |
| handleNodePasteImg（v0.9.2+）     | The processing method for pasting images from the clipboard on a node is to convert them into data:URL data and insert them into the node by default. You can use this method to upload image data to the server and save the URL of the image. An asynchronous method can be passed to receive image data of Blob type, and the specified structure needs to be returned: \{ url, size: \{width, height\} \}  |  null or Function | null  |
| isLimitMindMapInCanvas（v0.9.2+）     | Whether to limit the mind map within the canvas. For example, when dragging to the right, the leftmost part of the mind map graphic will not be able to continue dragging to the right when it reaches the center of the canvas, and the same applies to other things | Boolean |  false |
| beforeShortcutRun（v0.9.9+）     | The lifecycle function before the shortcut operation is about to be executed, returning true can prevent the operation from executing. The function takes two parameters: key（Shortcut key）、activeNodeList（List of currently activated nodes） | Function、null | null  |
| resetScaleOnMoveNodeToCenter（v0.9.12+）     | Whether to reset the scaling level to 100% when moving nodes to the canvas center, returning to the root node, and other operations（This option actually affects the render. moveNodeToCenter method, and the moveNodeToCenter method itself also has a second parameter, resetScale, to set whether to reset. If the resetScale parameter is not passed, then use resetScaleOnMoveNodeToCenter configuration; otherwise, use resetScale configuration） | Boolean |  false |
| createNodePrefixContent（v0.9.12+）     | Add additional node pre content.Pre content refers to the pre content in the area of the same line as the text, excluding the node image section.You can pass a function that takes the parameters of a node instance, Can return objects in \{el, width, height\} format, el is a DOM node object, width and height represent the width, height, and numerical type of the content. If custom content is not required, null can also be returned  | Function、null | null  |
| createNodePostfixContent（v0.9.12+）     | Add additional node post content.Post content refers to the post content in the area of the same line as the text, excluding the node image section. The usage is the same as createNodePrefixContent |  Function、null | null  |
| disabledClipboard（v0.10.2+）     | Is prohibit pasting data from the user's clipboard and writing copied node data to the user's clipboard. At this time, only node data from the canvas can be copied and pasted |  Boolean | false |
| customHyperlinkJump（v0.10.2+）     | Customize the jump of hyperlinks. If not passed, the hyperlink will be opened as a new window by default, and a function can be passed, The function takes two parameters: link（The URL of the hyperlink）、node（Node instance to which it belongs）, As long as a function is passed, it will block the default jump | null、Function | false |
| openPerformance（v0.10.4+）     | Whether to enable performance mode or not, by default, all nodes will be rendered directly, regardless of whether they are in the visible area of the canvas. This will cause a lag when there are a large number of nodes (1000+). If your data volume is large, you can enable performance mode through this configuration, that is, only rendering nodes within the visible area of the canvas, and not rendering nodes beyond it. This will greatly improve rendering speed, but of course, it will also bring some other problems, such as: 1. When dragging or scaling the canvas, real-time calculation and rendering of nodes without nodes will be performed, which will bring some lag; When exporting images, SVG, and PDF, all nodes need to be rendered first, so it may be slower; 3. Other currently undiscovered issues | Boolean | false |
| performanceConfig（v0.10.4+）     | Performance optimization mode configuration. time（How often do nodes refresh after a view change. Unit:ms）、padding（Still rendering nodes beyond the specified range around the canvas）、removeNodeWhenOutCanvas（Is the node deleted from the canvas after being moved out of the visible area of the canvas） | Object | \{ time: 250,  padding: 100, removeNodeWhenOutCanvas: true \} |
| notShowExpandBtn（v0.10.6+）     | Is not display the expand/collapse button, higher priority than the 'alwaysShowExpandBtn' configuration |  Boolean | false |
| emptyTextMeasureHeightText（v0.11.1+）     | If the node text is empty, in order to avoid the collapse of the height of the blank node, a height will be measured using the text specified in this field | String | abc123我和你 |
| openRealtimeRenderOnNodeTextEdit（v0.11.1+）     | Is the node size and position updated in real-time during node text editing? Enabling it may cause lag when there are a large number of nodes | Boolean | false |
| mousedownEventPreventDefault（v0.11.2+）     | By default, the container element el will be bound with a mousedown event, which can be used to set whether to block its default event. If set to true, it may cause certain problems, such as focusing on other input boxes outside the mind map, and clicking on the canvas will not trigger it to lose focus | Boolean | false (versions before v0.12.2 are true) |
| onlyPasteTextWhenHasImgAndText（v0.12.0+）     | When pasting data from the user clipboard on an activated node, if both text and images exist, only the text will be pasted and the images will be ignored | Boolean | true |
| enableDragModifyNodeWidth（v0.12.0+）     |  Is it allowed to drag and drop to adjust the width of nodes? In fact, it compresses the width of the text content inside the node. When the width of the text content in the node is compressed to its minimum, it cannot be further compressed. If there is an image in the node, the minimum value is based on the maximum value of the image width and the minimum width of the text content (currently, this feature is only available in two situations: 1. Rich Text mode is enabled, that is, the RichText plugin is registered; 2. Custom node content) | Boolean | true |
| minNodeTextModifyWidth（v0.12.0+）     | When allowing drag and drop adjustment of node width, this option can be used to set the minimum compression width allowed for node text content  | Number | 20 |
| maxNodeTextModifyWidth（v0.12.0+）     |  Same as minNodeTextModifierWidth, maximum value, passing -1 represents no restriction | Number | -1 |
| customHandleLine（v0.12.2+）     | Customize the connection method for processing nodes, which can pass a function that takes three parameters: node(Node instance)、line(A connection of a node, the path object of the @svgjs library), { width, color, dasharray }，dasharray(The dashed line style of this line represents a solid line with 'none'), You can modify the line object to achieve the effect of modifying node connection styles, such as adding flow effects | Function、null | null |
| addHistoryOnInit（v0.12.2+）     |  Do you immediately perform a historical data stack operation after instantiation (i.e. call the mindMap.command.addHistory method) | Boolean | true |
| noteIcon（v0.13.0+）     |  Custom node note icon, object type, format: { icon: '', style: { size: 20, color: '' } }, Icon is a custom comment icon and SVG string. If you are not sure about using the built-in style of SVG, please remove the fill and other style attributes from it; Size is the size of the icon. If not specified, the iconSize configuration of the theme will be used; Color is the color of the icon. If not specified, the color of the node text will be used | Object | { icon: '', style: {} } |
| hyperlinkIcon（v0.13.0+）     | Customize node hyperlink icons, Object type, format same as noteIcon option | Object | { icon: '', style: {} } |
| attachmentIcon（v0.13.0+）     | Customize node attachment icons, Object type, format same as noteIcon option  | Object | { icon: '', style: {} } |
| isShowCreateChildBtnIcon（v0.13.1+）     | Whether to display the button for quickly creating child nodes  | Boolean | true |
| quickCreateChildBtnIcon（v0.13.1+）     | Customize the icon for the quick creation of child nodes button  | Object | { icon: '', style: { color: '' } }, icon(SVG string, if you are not sure to use the built-in styles of SVG, please remove the fill and other style attributes from it)、style(The icon size uses the expandBtnSize option, color Icon color, if not manually set, the color field of the expandBntStyle option will be used) |
| customQuickCreateChildBtnClick（v0.13.1+）     | Click on the custom shortcut to create child node button  | Function、null | null |
| addCustomContentToNode（v0.13.1+）     | Add custom node content that can pass an object in the following format: { create: (node) => { return { el, width, height } }, handle: ({ content, element, node }) => {} }, The create function needs to return information about the DOM element to be added （el：DOM element、width，height：element size）、The handle function is used to process the ForeignObject node instance generated by the @svgdotjs/svg.js library, and is generally used to set its position within the node（content：The data returned by the create function、element：ForeignObject node instance、node：Current node instance）  | Function、null | null |
| enableInheritAncestorLineStyle（v0.13.1+）     |  Does the node connection style allow inheritance of ancestral connection styles | Boolean | true |

#### 1.1 Data structure

The basic data structure is as follows:

```js
{
  data: {
    text: '', // The text of the node can be rich text, which is in HTML format. In this case, richText should be set to true
    richText: false, // Is the text of the node in rich text mode
    expand: true, // Whether the node is expanded
    isActive: false,// Whether is the activated state
    uid: '',// The unique ID of the node, which may not be passed, will be generated internally
    icon: [], // The format of the icon can be found in the "插入和扩展节点图标" section of the tutorial
    image: '', // URL of the image
    imageTitle: '', // The title of the image can be blank
    imageSize: { // The size of the image
      width: 100, // The width of the image, mandatory
      height: 100, // The height of the image is mandatory
      custom: false // If set to true, the display size of the image is not controlled by the theme, and is based on imageSize.width and imageSize.height
    },
    hyperlink: '', // Hyperlink address
    hyperlinkTitle: '', // Title of hyperlink
    note: '', // Content of remarks
    tag: [], // Tag list, Prior to v0.10.3, only string arrays, i.e. ['tag'], were supported. However, v0.10.3+versions support object arrays, i.e. [{text: 'tag', style: {}}]. The specific supported label styles can refer to the "Tag Styles" below
    generalization: [{// (Arrays are not supported in versions below 0.9.0, and only a single summary data can be set)The summary of the node, if there is no summary, the generalization can be set to null
      text: '', // Summary Text
      richText: false, // Is the text of the node in rich text mode
      // ...The fields of other ordinary nodes are supported, But it does not support children
    }],
    associativeLineTargets: [''],// If there are associated lines, then it is the uid list of the target node
    associativeLineText: {},// Association Line Text
    associativeLinePoint: [],// Coordinate data of associated lines
    associativeLineTargetControlOffsets: [],// Coordinate offset data of associated lines
    associativeLineStyle: {},// v0.12.2+, Style of associated lines
    customLeft: 0,// Custom position, this value will be set after enabling free drag and drop
    customTop: 0,// Custom position, this value will be set after enabling free drag and drop
    customTextWidth: 0,// v0.12.0+，Custom text width, available in rich text mode. This property will be set after dragging and adjusting the node width
    dir: '',// v0.12.2+，When [Mind Map] layout structure is used, it represents the arrangement position of secondary nodes
    // ...For other style fields, please refer to the topic
    // Some plugins also have corresponding fields
  },
  children [// Child nodes, with consistent structure and root nodes
    {
      data: {},
      children: []
    }
  ]
}
```

If you want to add custom fields, you can add them to the same level as 'data' and 'children'. If you want to add them to the 'data' object, please use the `_` Name your custom field at the beginning, and it will be used internally to determine whether it is a custom field.

##### Tag Styles

The style object of the tag supports the following properties:

| Field Name    | Type   | Default Value     | Description        |
| ----------- | ------ | -------- | ----------- |
| radius | Number | 3 | The corner size of the tag rectangle |
| fontSize | Number | 12 | Font size, it is recommended that the height of the text should not exceed height |
| fill | String |  | Background color of tag rectangle | 
| height | Number | 20 | Height of tag rectangle |
| paddingX | Number | 8 | Horizontal margin, if width is set, this configuration will be ignored |
| width | Number |  | The width of the tag rectangle, if not set, defaults to the width of the text plus paddingX * 2 |

#### 1.2 Icon Configuration

| Field Name  | Type   | Default Value  | Description  |
| ----------- | ------ | --------------| ------------ |
| name        | String |                                           | The name of the icon group |
| type        | String |                                           | Values for icon grouping |
| list        | Array  |                                           | A list of icons under grouping, with each item in the array being an object, `{ name: '', icon: '' }`，`name`represents the name of the icon, `icon`represents the icon, Can be an `svg` icon, such as `<svg ...><path></path></svg>`, also can be a image `url`, or `base64` icon, such as `data:image/png;base64,...` |

### 2.Export plugin

| Field Name    | Type    | Default Value    | Description    |
| ---------- | ------- | ---------------- | ----------------- |
| exportPadding                    | Number  | 20               | The padding for exporting images                             | 
| exportPaddingX（v0.5.5+）     |  Number | 10 | Horizontal padding of graphics when exporting PNG, SVG, and PDF  | 
| exportPaddingY（v0.5.5+）     | Number  | 10 | Vertical padding of graphics when exporting PNG, SVG, and PDF  |
| resetCss（v0.6.16+）     | String  |  * \{ margin: 0; padding: 0; box-sizing: border-box; \} | When exporting images and SVGs, the default style overlay for rich text node content, which is embedded in HTML nodes in SVGs, will occur. If not overlaid, the node content will be offset |
| minExportImgCanvasScale（v0.7.0+）     | Number  | 2  | The scaling factor of canvas when exporting images and PDFs, which is set to the maximum value of window.devicePixelRatio to improve image clarity |
| addContentToHeader（v0.9.9+）     | Function、null | null  | Add custom content to the header when exporting PNG, SVG, and PDF. Can pass a function that can return null to indicate no content is added, or it can return an object, For a detailed introduction, please refer to section 【How to add custom content when exporting】 below |
| addContentToFooter（v0.9.9+）     | Function、null | null  | The basic definition is the same as addContentToHeader, adding custom content at the end |
| handleBeingExportSvg（v0.10.1+）     | Function、null | null  | When exporting PNG, SVG, and PDF, the SVG data on the canvas will be obtained for cloning, and then exported through the cloned elements. If you want to do some processing on the cloned elements, such as adding, replacing, or modifying some of them, you can pass a processing function through this parameter to receive the SVG element object. After processing, you need to return the original SVG element object.（It should be noted that the node object refers to the element object of the @ svgdotjs/svg. js library, so you need to read the documentation of the library to operate this object） |
| maxCanvasSize（v0.11.2+）     | Number | 16384  | Images or PDFs are drawn from SVG using Canvas and then exported. Therefore, if the mind map size is particularly large, the width and height may exceed the upper limit supported by Canvas, so scaling will be performed. This upper limit can be set through this parameter to represent the maximum width and height of Canvas |

#### 2.1 How to add custom content when exporting

The two instantiation options `addContentToHeader` and `addContentToFooter` can be used to add custom content at the beginning and end when exporting `png`、`svg`、`pdf`, The default value is `null`, which means no configuration. A function can be passed and can return `null`, which means no content will be added. If you want to add content, you need to return the following structure:

```
{
  el,// Custom DOM node to be added, styles can be inline
  cssText,// Optional, if the style does not want to be inlined, you can pass this value as a CSS string
  height: 50// The height of the returned DOM node must be passed
}
```

A simple example:

```js
new MindMap({
  addContentToFooter: () => {
    const el = document.createElement('div')
    el.className = 'footer'
    el.innerHTML = 'From: simple-mind-map'
    const cssText = `
      .footer {
        width: 100%;
        height: 30px;
      }
    `
    return {
      el,
      cssText,
      height: 30
    }
  }
})
```

### 3.Select plugin

| Field Name | Type    | Default Value    | Description |
| ----------- | ------- | ---------------- | ---------- |
| selectTranslateStep              | Number  | 3                | The canvas offset when mouse moves to the edge during multi-select node |
| selectTranslateLimit             | Number  | 20               | The distance from the edge when the canvas begins to offset during multi-select node |

### 4.Drag plugin

| Field Name  | Description      | Type    | Default Value    |
| ---------- | ------- | ---------------- | --------------------- |
| enableFreeDrag（v0.2.4+）        | Enable node free(Free drag means that nodes can be dragged to any position on the canvas. Please note that it is not a function of dragging nodes to become siblings of other nodes. The connection of free drag may have certain problems, so it is best not to use this feature) drag   | Boolean | false            |
| nodeDragPlaceholderMaxSize（v0.6.12+）（v0.10.0+ has been abolished）  | When dragging an element, the maximum height of the block indicating the new position of the element |  Number  | 20 |
| autoMoveWhenMouseInEdgeOnDrag（v0.7.1+）     | Whether to enable automatic canvas movement when the mouse moves to the edge of the canvas while dragging nodes | Boolean  | true  |
| dragMultiNodeRectConfig（v0.7.2+）     | The style configuration of the schematic rectangle that moves with the mouse when dragging multiple nodes, passing an object, and the field meanings are the width, height, and fill color of the rectangle |  Object  | \{ width: 40, height: 20, fill: 'rgb(94, 200, 248)' \}  |
| dragPlaceholderRectFill（v0.7.2+）     | The filling color of the schematic rectangle for the new position when dragging nodes. |  String |  rgb(94, 200, 248) |
| dragPlaceholderLineConfig（v0.10.0+）     | Style configuration of schematic lines for new positions when dragging nodes |  Object | \{ color: 'rgb(94, 200, 248)',  width: 2 \}  |
| dragOpacityConfig（v0.7.2+）     | The transparency configuration during node dragging, passing an object, and the field meanings are: the transparency of the cloned node or rectangle that follows the mouse movement, and the transparency of the dragged node | Object  | \{ cloneNodeOpacity: 0.5, beingDragNodeOpacity: 0.3 \}  |
| beforeDragEnd（v0.10.1+）     | This function is called just before the drag is completed. The function receives an object as a parameter: \{overlapNodeUid,prevNodeUid,nextNodeUid,beingDragNodeList\}, represents drag and drop information. If you want to prevent this drag and drop, you can return true. At this time, the node.drag event will not be triggered again. Functions can be asynchronous and return Promise instances. 'beingDragNodeList' is a newly added callback parameter for v0.10.2+, which is the list of nodes that are currently being dragged |  null、Function  | null  |
| handleDragCloneNode（v0.10.1+）     | When dragging a single node, the dragged node will be cloned. If you want to modify the cloned node, you can provide a processing function through this option, which receives the cloned node object.（It should be noted that the node object refers to the element object of the @svgdotjs/svg.js library, so you need to read the documentation of the library to operate this object） | null、Function  | null  |
| beforeDragStart（v0.10.2+）     | This function is called just before the node is dragged. The function receives the list of node instances to be dragged as parameters. If you want to prevent this drag, you can return true. It can be an asynchronous function that returns a Promise instance | null、Function（(nodeList) => \{\}）  | null  |

### 5.Watermark plugin

| Field Name  | Type    | Default Value    | Description  |
| --------- | ------- | ---------------- | ---------------- |
| watermarkConfig（v0.2.4+）       | Object  |                  | Watermark config, Please refer to the table 【Watermark config】 below for detailed configuration | 

#### 5.1Watermark config

| Field Name  | Type   | Default Value | Description  |
| ----------- | ------ | ------------- | ------------- |
| text        | String | ''                                          | Watermark text. If it is an empty string, the watermark will not be displayed |
| lineSpacing | Number | 100                                         | Spacing between watermark lines                              |
| textSpacing | Number | 100                                         | Spacing between watermarks in the same row                   |
| angle       | Number | 30                                          | Tilt angle of watermark, range: [0, 90]                      |
| textStyle   | Object | \{color: '#999', opacity: 0.5, fontSize: 14\} | Watermark text style                                         |
| onlyExport（v0.9.2+）   | Boolean | false |  Is only add watermarks during export                        |
| belowNode（v0.10.0+）   | Boolean | false |   Is the watermark displayed below the node                       |

### 6.AssociativeLine plugin

| Field Name | Type    | Default Value    | Description |
| ---------- | ------- | ---------------- | ----------- |
| defaultAssociativeLineText（v0.5.11+）     |  String | 关联 | Association Line Default Text  |
| associativeLineIsAlwaysAboveNode（v0.8.0+）     |  Boolean | true  | Is the associated line always displayed above the node? If set to false, it will be at the top level when creating and activating the associated line, and in other cases, it will be below the node |
| associativeLineInitPointsPosition（v0.9.5+）     | null / \{ from, to \} | \{ from: '', to: '' \}  | By default, the position of the two endpoints of a newly created association line is calculated based on the relative position of the center points of the two nodes. If you want to fix the position, you can configure it through this option. If neither from nor to is transmitted, they will be automatically calculated. If only one is transmitted, the other will be automatically calculated. from and to optional values
：left、top、bottom、right |
| enableAdjustAssociativeLinePoints（v0.9.5+）     | Boolean | true  | Is it allowed to adjust the position of the two endpoints of the associated line |
| beforeAssociativeLineConnection（v0.12.0+）     | Function | null  | You can pass a function that is called when the association line creation is about to be completed. If you want to block this connection, you can return true. The function takes a parameter: node(Target Node Instance) |

### 7.RichText plugin

| Field Name | Type    | Default Value    | Description  |
| ----------- | ------- | ---------------- | ----------- |
| richTextEditFakeInPlace（v0.6.13+）（v0.12.2+ has been abandoned）     | Boolean  | false | Set the rich text node edit box to match the size of the node, creating a pseudo in place editing effect. It should be noted that only when there is only text within the node and the shape is rectangular, can the effect be better |
| transformRichTextOnEnterEdit（v0.10.0+）     | null、Function  | null | To convert rich text content, you can pass a function that will be called when entering rich text editing. The function receives the rich text content that is about to be edited and needs to return the processed rich text content |
| beforeHideRichTextEdit（v0.10.0+）     | null、Function  | null | You can pass a function that will be executed before the end of rich text editing. The function receives a richText instance, so you can update the kill document data at this time |

### 8.TouchEvent plugin

| Field Name | Type    | Default Value    | Description |
| ---------- | ------- | ---------------- | ------------ |
| disableTouchZoom（v0.8.1+）     | Boolean | false  |  Prohibit double finger scaling, you can still use the API for scaling, which takes effect on the TouchEvent plugin |
| minTouchZoomScale（v0.10.1+）     | Number | 20  | Allow maximum and minimum scaling values, percentage, pass -1 to indicate no restrictions  |
| maxTouchZoomScale（v0.10.1+）     | Number | -1  |  Same as minTouchZoomScale |

### 9.Scrollbar plugin

| Field Name        | Description     | Type    | Default Value    |
| ------------------ | ------- | ---------------- | --------------------- | 
| isLimitMindMapInCanvasWhenHasScrollbar（v0.9.2+）     | When registering the Scrollbar plugin, will the mind map be limited to the canvas and the isLimitMindMapInCanvas configuration no longer work | Boolean |  true |

### 10.Search plugin

| Field Name | Type    | Default Value    | Description |
| ---------- | ------- | ---------------- | ----------- |
| isOnlySearchCurrentRenderNodes（v0.9.8+）     | Boolean | false  | Is it necessary to only search for the current rendered node, and nodes that have been collapsed will not be searched for |

### 11.Cooperate plugin

| Field Name  | Type    | Default Value    | Description |
| ------- | ------- | ---------------- | ------------ |
| beforeCooperateUpdate（v0.9.8+）     | Function、null | null  | During collaborative editing, node operations are about to be updated to the lifecycle functions of other clients. The function takes an object as a parameter:\{ type: 【createOrUpdate（Create or update nodes）、delete（Delete node）】, list: 【Array type, 1.When type=createOrUpdate, it represents the node data that has been created or updated, which will be synchronized to other clients, so you can modify the data; 2.When type=delete, represents the deleted node data】 \} |

### 12.RainbowLines plugin

| Field Name  | Type    | Default Value    | Description  |
| ----------| ------- | ---------------- | -----------|
| rainbowLinesConfig（v0.9.9+）     | Object | \{ open: false, colorsList: [] \}  | Rainbow line configuration requires registering the RainbowLines plugin first. Object type, Structure: \{ open: false【Is turn on rainbow lines】, colorsList: []【Customize the color list for rainbow lines. If not set, the default color list will be used】 \} |

### 13.Demonstrate plugin

| Field Name   | Type    | Default Value    | Description      |
| -------------- | ------- | ---------------- | ---------------- |
| demonstrateConfig（v0.9.11+）     | Object、null | null  | Demonstration plugin configuration. If not transmitted, the default configuration will be used. An object can be transmitted. If only a certain property is configured, only that property can be set. Other properties that have not been set will also use the default configuration. For complete configuration, please refer to the 【Demonstration Plugin Configuration】 section below |

#### 13.1Demonstration Plugin Configuration

| Field Name  | Type   | Default Value                               | Description                          |
| ----------- | ------ | ------------------------------------------- | ------------------------------------ |
| boxShadowColor | String | rgba(0, 0, 0, 0.8)  | The color of the area around the highlighted box |
| borderRadius   | String | 5px                 | The size of the rounded corners of the highlighted box |
| transition     | String | all 0.3s ease-out   | Transition properties of highlight box animation and CSS transition properties |
| zIndex         | Number | 9999                | The hierarchy of highlighted box elements |
| padding        | Number | 20                  | The inner margin of the highlighted box |
| margin         | Number | 50                  | The outer margin of the highlighted box |
| openBlankMode（v0.9.12+） | Boolean | true     | Is enable fill in the blank mode, where underlined text is not displayed by default and only displayed sequentially by pressing the enter key |

### 14.Formula plugin

| Field Name   | Description       |  Type    | Default Value    |
| ---------- | ------- | ---------------- | ---------------- |
| enableEditFormulaInRichTextEdit（v0.10.0+）     | Is enable direct editing of mathematical formulas in the rich text editing box | Boolean  | true |
| katexFontPath（v0.10.3+）     | The request path for font files in the Katex library. Font files will only be requested when Katex's output is configured as html. The current configuration can be obtained through the mindMap.formula.getKatexConfig() method. The font file can be found in node_modules: katex/dist/fonts/. You can upload it to your server or CDN. The final font request path is `${katexFontPath}fonts/KaTeX_AMS-Regular.woff2`, which can be concatenated by oneself to test whether it can be accessed | String  | https://unpkg.com/katex@0.16.11/dist |
| getKatexOutputType（v0.10.3+）     | Customize the output mode of the Katex library. By default, when the Chrome kernel is below 100, html mode will be used. Otherwise, mathml mode will be used. If you have your own rules, you can pass a function that returns either mathml or html | Function、null  | null |

### 15.OuterFrame plugin

| Field Name         | Type    | Default Value    | Description       |
| ---------------- | ------- | ---------------- | -------------------- |
| outerFramePaddingX（v0.10.3+）     | Number  | 10 | Horizontal inner margin of the outer frame |
| outerFramePaddingY（v0.10.3+）     | Number  | 10 | Vertical inner margin of the outer frame |
| defaultOuterFrameText（v0.14.0+）     | String  | 外框 | Default Outer Frame Text |

### 16.Painter plugin

| Field Name         | Type    | Default Value    | Description       |
| -------------------------------- | ------- | ---------------- | ------ |
| onlyPainterNodeCustomStyles（v0.11.1+）     | Boolean  | false | Is only format the manually set styles for brushing nodes and ignore the styles applied by nodes through themes |

### 17.NodeImgAdjust plugin

| Field Name         | Type    | Default Value    | Description       |
| -------------------------------- | ------- | ---------------- | ------ |
| beforeDeleteNodeImg（v0.11.1+）     | Function  | null | Intercept the deletion of node images. Clicking the delete button on the node image will call this function before deleting the image. If the function returns true, the deletion will be canceled, can be an asynchronous function that returns a Promise instance |
| minImgResizeWidth（v0.12.0+）     |  Number | 50 | The minimum width allowed for scaling, please pass in a number >=0 |
| minImgResizeHeight（v0.12.0+）     |  Number | 50 | The minimum height allowed for scaling, please pass in a number >=0 |
| imgResizeBtnSize（v0.12.0+）     | Number  | 25 | Delete and resize the two buttons |
| maxImgResizeWidthInheritTheme（v0.12.0+）     |  Boolean | false | Is the maximum size allowed for scaling based on the theme's configuration, which uses the theme's imgMaxWidth and imgMaxHeight settings? If set to false, use the maxImgResizeWidth and maxImgResizeHeight options |
| maxImgResizeWidth（v0.12.0+）     |  Number | Infinity | The maximum width allowed for scaling, which takes effect when the maxImgResizeWidthInheritTheme option is set to false, does not limit the maximum value that can be passed through Infinity |
| maxImgResizeHeight（v0.12.0+）     | Number  | Infinity | The maximum height allowed for scaling, which takes effect when the maxImgResizeWidthInheritTheme option is set to false, does not limit the maximum value that can be passed through Infinity |
| customDeleteBtnInnerHTML（v0.13.1+）     | String  |  | The content of the custom delete button defaults to a built-in icon. You can pass an SVG string or other HTML string, and the overall size can be set using the minImgResizeWidth and minImgResizeHeight options above |
| customResizeBtnInnerHTML（v0.13.1+）     | String  |  | The content of the custom size adjustment button is the same as customDeleteBtnInNerHTML |