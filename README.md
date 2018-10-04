# scroll-class.js

scroll-class.js is a small ES6 module that lets you toggle classes on elements when they appear in the viewport.

  - ES6 ready
  - No dependencies
  - Performant and lightweight - 1.86 KB (unminified and no gzip)

### Development

```
import ScrollClass from './scroll-class';

const elements  = [
    {
    	element: document.querySelector('.your-element'),
    	classesToToggle: ['hello'],
    	once: true,
    	enabled: true,
    	events: true,
    	threshold: 100
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
     - `events [bool]`: do you want events with that? See below for more info.
     - `threshold: [int]`: threshold from top (without px postfix) - default is 0.


 - `frequency [bool] (default: true)` : the amount of time between checks. (throttling - useful for performance)

### Events

Each element can also receive an `insideViewport` and `outsideViewport` event.<br />
(use these before your `new ScrollClass` block if you don't want to miss the initial event)

```
document.querySelector('.your-element').addEventListener('insideViewport', function(){
     console.log(`I see you! ${this}`);
});

document.querySelector('.your-element').addEventListener('outsideViewport', function(){
    console.log(`I can't see you. ${this}`);
});
```

License
----

MIT

**Free Software, Hell Yeah!**
