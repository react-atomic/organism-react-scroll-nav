'use strict';

import dispatcher from '../scrollDispatcher';
import {scrollStore} from './scrollStore';

class fastScrollStore extends scrollStore
{
  scrollMonitor()
  {
    this.triggerScroll();
  }
}

export default new fastScrollStore(dispatcher);
