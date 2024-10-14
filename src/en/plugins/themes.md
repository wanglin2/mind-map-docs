# Themes plugin

> v0.12.0+

Starting from v0.12.0+, all themes from the library and demo have been separated into separate plugins, and the library only has one default theme, 'default'.

If you need a theme other than the default theme, you can install this plugin.

## Install

```bash
npm i simple-mind-map-plugin-themes
```

## Usage

```js
import MindMap from 'simple-mind-map'
import Themes from 'simple-mind-map-plugin-themes'

// Registration Theme
Themes.init(MindMap)

// Instantiate
new MindMap({
    theme: 'dark7'
})
```

For more information about plugins, please visit the plugin repository: [simple-mind-map-plugin-themes](https://github.com/wanglin2/simple-mind-map-plugin-themes).