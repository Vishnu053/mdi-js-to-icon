# mdi-js-to-icon
An easy-to-use vue3 component to render @mdi/js paths

## Installation
npm i mdi-js-to-icon

## Usage
```js 
// main.js
import mdiToIcon from 'mdi-js-to-icon'
import "mdi-js-to-icon/dist/mdi-js-to-icon.mjs.css" // for animations

createApp(App)
  .use(plugin)
  .mount('#app')

// You can also directy use the vue file, which is in src/ if you want.
  
// in your component.
import { mdiPlus } from '@mdi/js'

// You can include the icon directly from @mdi/js.
<Icon :path="mdiPlus"  :size="'12'" color="violet"/>

// ...or, you can pass in a path.
<Icon :path="'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z'"  :size="'8'" color="red"/>

// Sizing is supported by passing in values as px.
<Icon :path="mdiPlus"  :size="'8'"/>

// Icon color can be changed too. Can pass in color names or hex codes.
<Icon :path="mdiPlus"  color="indigo"/>


// Animations: Currently 2 animations are supported(spin, pulse). Fell free to add more :)
<Icon :path="mdiPlus" spin/>
<Icon :path="mdiPlus" pulse/>

```