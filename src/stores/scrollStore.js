import {Set, Map} from 'immutable';
import {ReduceStore} from 'reshow-flux';
import getScrollInfo from 'get-scroll-info';
import {isOnScreen} from 'get-window-offset';
import getOffset from 'getoffset';
import get, {toJS} from 'get-object-value';

import dispatcher, {scrollDispatch} from '../scrollDispatcher';
import testForPassiveScroll from '../testForPassiveScroll';

let incNum = 0;
const DEFAULT_SCROLL_ID = -1;
const keys = Object.keys;

class scrollStore extends ReduceStore {
  storeName = 'delayScroll';
  isInitEvent = {};
  isInitResizeEvent = false;
  spys = {};

  getInitialState() {
    this.trigger = this.triggerScroll.bind(this);
    this.arrNode = Map();
    this.margins = Set();
    this.scrollMonitor = this.runScrollMonitor.bind(this);
    this.bindHandleResize = this.handleResize.bind(this);
    return Map({
      scrollDelay: 50,
      scrollMargin: 0,
    });
  }

  initResizeEvent() {
    if ('undefined' !== typeof window) {
      this.isInitResizeEvent = true;
      const win = window;
      if (win.addEventListener) {
        win.addEventListener('resize', this.bindHandleResize);
      } else {
        win.attachEvent('onresize', this.bindHandleResize);
      }
    }
  }

  initEvent(el) {
    if ('undefined' !== typeof el) {
      if (el.addEventListener) {
        const supportsPassive = testForPassiveScroll();
        el.addEventListener(
          'scroll',
          this.scrollMonitor,
          supportsPassive ? {passive: true} : false,
        );
      } else {
        el.attachEvent('onscroll', this.scrollMonitor);
      }
      setTimeout(() => {
        this.trigger(el);
        //for lazy content
        setTimeout(() => this.trigger(el), 777);
      });
      if (!this.isInitResizeEvent) {
        this.initResizeEvent();
      }
    }
  }

  removeEvent(el) {
    el.removeEventListener('scroll', this.scrollMonitor);
  }

  handleResize() {
    keys(this.spys).forEach(scrollId =>
      this.scrollMonitor({target: {id: scrollId}}),
    );
  }

  runScrollMonitor(e) {
    clearTimeout(this._scrollTimeout);
    const self = this;
    const delay = self.getState().get('scrollDelay');
    self._scrollTimeout = setTimeout(() => this.trigger(e && e.target), delay);
  }

  triggerScroll(scrollNode) {
    const scrollId = get(scrollNode, ['id']) || DEFAULT_SCROLL_ID;
    const defaultMargin = this.getState().get('scrollMargin');
    const actives = {mdefault: null};
    const offsetCache = {};
    const arrMonitorScroll = [];
    let scroll = getScrollInfo();
    let scrollTop = scroll.top + defaultMargin;
    let margin;
    (this.spys[scrollId] || []).forEach(node => {
      const nodeEl = node.getOffsetEl();
      if (!nodeEl) {
          return;
      }
      const {monitorScroll, scrollMargin} = get(node, ['props'], {});
      let pos = getOffset(nodeEl);
      if (monitorScroll) {
        if (scrollTop >= pos.top && scrollTop < pos.bottom) {
          actives.mdefault = node.id;
        }
        arrMonitorScroll.push(node);
      }
      margin = scrollMargin ? scrollMargin : defaultMargin;
      pos = isOnScreen(pos, scroll, margin);
      offsetCache[node.id] = pos;
    });
    this.margins.forEach(margin => {
      scrollTop = scroll.top + margin;
      actives['m' + margin] = null;
      arrMonitorScroll.every(node => {
        let pos = offsetCache[node.id];
        if (scrollTop >= pos.top && scrollTop < pos.bottom-1) {
          actives['m' + margin] = node.id;
          return false;
        }
        return true;
      });
    });
    this.margins = this.margins.clear();
    scrollDispatch({
      ...actives,
      nodes: offsetCache,
      scroll,
      storeName: this.storeName,
    });
  }

  getNode(id) {
    if (this.arrMap && this.arrMap.get) {
      return toJS(this.arrMap.get(id));
    }
  }

  getOffset(id, callName) {
    const nodes = this.getMap('nodes');
    return nodes[id];
  }

  hasAttach(node) {
    const attachToId = this.getAttachToId(node);
    if (this.spys[attachToId] && this.spys[attachToId].has(node)) {
      return attachToId;
    } else {
      return false;
    }
  }

  getNodeId(node) {
    if (!node.id) {
      if (node.props && node.props.id) {
        node.id = node.props.id;
      } else {
        node.id = 'spy-' + incNum;
        incNum++;
      }
    }
    return node.id;
  }

  getAttachToId(node) {
    const attachTo = get(node, ['props', 'attachTo']);
    let attachToId;
    if (attachTo) {
      node.attachTo = attachTo;
      attachToId = this.getNodeId(attachTo);
    } else {
      if ('undefined' !== typeof window) {
        node.attachTo = window;
      }
      attachToId = DEFAULT_SCROLL_ID;
    }
    return attachToId;
  }

  attach(node) {
    const nodeId = this.getNodeId(node);
    const attachToId = this.getAttachToId(node);
    if (!this.spys[attachToId]) {
      this.spys[attachToId] = Set().add(node);
    } else {
      this.spys[attachToId] = this.spys[attachToId].add(node);
    }
    this.arrNode = this.arrNode.set(nodeId, node);
    if (!this.isInitEvent[attachToId]) {
      this.isInitEvent[attachToId] = true;
      this.initEvent(node.attachTo);
    }
    return nodeId;
  }

  detach(node) {
    const attachToId = this.hasAttach(node);
    if (attachToId) {
      this.spys[attachToId] = this.spys[attachToId].remove(node);
      this.arrNode = this.arrNode.delete(node.id);
      if (!this.spys[attachToId].size) {
        this.removeEvent(node.attachTo);
        delete this.spys[attachToId];
        this.isInitEvent[attachToId] = false;
      }
    }
  }

  addMargin(num) {
    this.margins = this.margins.add(num);
  }

  deleteMargin(num) {
    this.margins = this.margins.remove(num);
  }

  reduce(state, action) {
    const storeName = get(action, ['storeName'], 'delayScroll');
    if (storeName === this.storeName) {
      return state.merge(action);
    } else {
      return state;
    }
  }
}

export default new scrollStore(dispatcher);
export {scrollStore};
