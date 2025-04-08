# NodeLink chargeable plugin

> Compatible with simple-mind-map of v0.14.0 and above.

The NodeLink plugin is used to provide node linking functionality. You can link node 'b' to node 'a', and after successful addition, a link icon will be displayed on node 'a'. Clicking on the icon will redirect you to and activate node 'b'.

You can activate a node in the online version by right clicking and selecting 'Link to specified node' from the right-click menu.

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
import NodeLink from 'nodeLink.cjs.min.js'
// 或 import NodeLink from 'nodeLink.esm.min.js'

MindMap.usePlugin(NodeLink, opt)
```

2.Referencing Unpackaged Source Code

You can first enter the plugin directory to execute:

```bash
npm link
```

Then enter your project root directory to execute:

```bash
npm link simple-mind-map-plugin-node-link
```

Then you can directly import it for use:

```js
import MindMap from 'simple-mind-map'
import NodeLink from 'simple-mind-map-plugin-node-link'

MindMap.usePlugin(NodeLink, opt)
```

After registration and instantiation of `MindMap`, the instance can be obtained through `mindMap.nodeLink`.

When registering plugins, it is supported to pass in some configuration items 'opt':

| Field name | Type  | Default | Desc |
| ------- | ----- | ----- | ---- |
| width | Number | 20 | The size of the icon |
| height | Number | 20 | The size of the icon |
| icon | String |  | Icon, SVG string. If not specified, the default icon will be used. It is important to remove the fill attribute from the SVG string, otherwise the color may not take effect |
| colorIsFollowNode | Boolean | true | Does the icon color follow the color of the node text |
| color | String | #3f9cfc | If colorIsFollowNode is set to false, this color will be used |
| handleIconClick | Function |  | The click event of the custom link icon will locate and activate the link node by default |

## Command

After registering this plugin, the 'SET_NODE_LINK' command will be added to the mind map instance to set links for nodes using this command:

```js
mindMap.execCommand('SET_NODE_LINK', appointNodes, uid, isAddReturn)
```

This command can pass three parameters:

- `appointNodes`：Set link data for a specified node instance, which can be passed as a single node instance or as an array of node instances. If an empty array is passed, it will be added to the currently activated node;

- `uid`：String，The 'uid' of the node to be linked to;

- `isAddReturn`：Boolean，Optional, whether to add a backlink to the linked node, default is 'false'. If 'appointNodes' passes multiple node instances, the backlink will point to the first one;

Example:

```js
// Add a link to the node activated on the current canvas, linking to the node with UID 'xxxx'
mindMap.execCommand('SET_NODE_LINK', [], 'xxxx')

// Delete Link
mindMap.execCommand('SET_NODE_LINK', [], null)
```

After setting the number, the data will be saved to the node's' data 'under the name 'nodeLink'.

## Event

### node_link_not_find

When a node is linked to another node, if it is deleted by the linked node, clicking the link icon will trigger the event of not knowing the node. You can monitor the event to remind the user whether to delete the link.