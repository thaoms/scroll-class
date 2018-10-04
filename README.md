# scroll-class.js

scroll-class.js is a small ES6 module that let's you toggle classes to elements when they appear in the viewport.

  - ES6 ready
  - No dependencies
  - Performant and lightweight

### Development

```
import ScrollClass from './scroll-class';

const elements  = [
    {
    	element: document.querySelector('.your-element'),
    	classesToToggle: ['hello'],
    	once: true,
    	enabled: true
    }
];

new ScrollClass({
	elements: elements,
	frequency: 500
});
```

### Options
 - `elements [array] (default: [])` : the array of objects with elements you want to check.
     - `element [DOM element]` : element (DOM) you want to track
     - `classesToToggle [array]`: class(es) you want to toggle on the given element
     - `once [bool]`: only add the class once
     - `enabled [bool]`: this one explains itself.


 - `frequency [bool] (default: true)` : the amount of time between checks. (throttling - useful for performance)

License
----

MIT

**Free Software, Hell Yeah!**
