# mdi-js-to-icon
An easy-to-use vue3 component to render @mdi/js paths

## Installation
npm i mdi-js-to-icon

## Usage
```js 
import Icon from 'mdi-js-to-icon'
import { mdiPlus } from '@mdi/js'

// You can include the icon directly from @mdi/js
<Icon :path="mdiPlus"  :size="'8'" color="violet"/>

// ...or, you can pass in a path
<Icon :path="'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z'"  :size="'8'" color="red"/>

// You can also directy use the vue file, which is in src/ if you want

```