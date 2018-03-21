'use strict';

import dispatcher from '../scrollDispatcher';
import {scrollStore} from './scrollStore';

class fastScrollStore extends scrollStore
{
  storeName = 'fastScroll'

  _scrollMonitor()
  {
    this.triggerScroll();
  }
}

export default new fastScrollStore(dispatcher);
