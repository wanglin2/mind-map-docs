# Command instance

The `command` instance is responsible for adding and executing commands. It
includes many built-in commands and can also be added manually. A command refers
to an operation that needs to add a copy to the history stack data. The
`mindMap.command` instance can be obtained through this."

## Props

### history

The current list of all historical data. Do not manually modify the array.

Before `v0.14.0`, the array stores historical data objects, while in later versions, serialized strings are stored. If you want to use them, they need to be deserialized.

### activeHistoryIndex

The current historical data index. Do not manually modify this property.

## Methods

Please use the command 'Back' or 'FORWARD' to move forward or backward.

### pause()

> v0.9.11+

Pause collecting historical data.

### recovery()

> v0.9.11+

Restore the collection of historical data.

### add(name, fn)

Add a command.

`name`: Command name

`fn`: Method to be executed by the command

### remove(name, fn)

Remove a command.

`name`: Name of the command to be removed

`fn`: Method to be removed, if not provided all methods for the command will be
removed

### getCopyData()

Get a copy of the rendering tree data. That is, the data of the current canvas.

### clearHistory()

Clear the history stack data

### addHistory()

Trigger a historical stack data addition operation. Note that this method will delay execution, and the delay time can be set through the instantiation option 'addHistoryTime'.

### originAddHistory ()

> v0.12.1+

The function is the same as the 'addHistory' method, but this method will execute immediately without delay.

### extendKeyMap(key, code)

> v0.12.2+

`key`：The key identifier to be extended, for example, there may be multiple `/` keys on the keyboard, and the library has already defined one by default. You can define a new one and choose the name you want, for example: `/2`

`code`：The key value of this button

Expand key mapping.

Usage example:

```js
mindMap.keyCommand.extendKeyMap('/2', 111)
mindMap.keyCommand.addShortcut('/2', mindMap.renderer.toggleActiveExpand)
```

### removeKeyMap(key)

> v0.12.2+

Remove a key from the key mapping.