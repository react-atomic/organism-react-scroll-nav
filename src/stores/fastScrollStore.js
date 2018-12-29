import dispatcher from '../scrollDispatcher';
import {scrollStore, DEFAULT_SCROLL_ID} from './scrollStore';
import get from 'get-object-value';

class fastScrollStore extends scrollStore {
  storeName = 'fastScroll';

  runScrollMonitor(e) {
    const scrollId = get(e, ['target', 'id'], DEFAULT_SCROLL_ID);
    this.triggerScroll(scrollId);
  }
}

export default new fastScrollStore(dispatcher);
