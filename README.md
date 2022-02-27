[![CircleCI](https://circleci.com/gh/react-atomic/organism-react-scroll-nav/tree/main.svg?style=svg)](https://circleci.com/gh/react-atomic/organism-react-scroll-nav/tree/main)

React Scroll Spy Library (organism-react-scroll-nav) 
===============
   * GIT
      * https://github.com/react-atomic/organism-react-scroll-nav
   * NPM
      * https://www.npmjs.com/package/organism-react-scroll-nav

## Example Usage
* Code: https://github.com/react-atomic/organism-react-scroll-nav/blob/main/ui/pages/index.jsx

### Live Demo Url
* https://react-atomic.github.io/organism-react-scroll-nav

### Test in local
```
./compile.sh s
```

Go to http://localhost:3000

## dispatch

### fast store
```js
import {fastScrollStore} from "organism-react-scroll-nav";
fastScrollStore.scroller.dispatch(/* xxx */);
```

### slow store
```js
import {scrollStore} from "organism-react-scroll-nav";
scrollStore.scroller.dispatch(/* xxx */);
```



## Inspire
* https://github.com/fisshy/react-scroll
* https://github.com/klyngbaek/react-scroll-nav
* https://github.com/stutrek/scrollMonitor
* https://github.com/yui/yui3/blob/master/src/node-scroll-info/js/node-scroll-info.js

