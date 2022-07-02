import { mergeMap, Set, Map, ImmutableStore } from "reshow-flux";
import getScrollInfo from "get-scroll-info";
import { isOnScreen } from "get-window-offset";
import getOffset from "getoffset";
import get, { toJS } from "get-object-value";
import { KEYS } from "reshow-constant";
import callfunc, { debounce } from "call-func";
import { win } from "win-doc";
import query from "css-query-selector";

import testForPassiveScroll from "../testForPassiveScroll";

let incNum = 0;
const DEFAULT_SCROLL_ID = -1;

class Scroller {
  storeName = "delayScroll";
  isInitResizeEvent = false;

  initResizeEvent() {
    const oWin = win();
    if (!oWin.__null) {
      this.isInitResizeEvent = true;
      if (oWin.addEventListener) {
        oWin.addEventListener("resize", this.bindHandleResize);
      } else {
        oWin.attachEvent("onresize", this.bindHandleResize);
      }
    }
  }

  initEvent(el, retry) {
    if ("undefined" !== typeof el) {
      if (el.addEventListener) {
        const supportsPassive = testForPassiveScroll();
        el.addEventListener(
          "scroll",
          this.scrollMonitor,
          supportsPassive ? { passive: true } : false
        );
      } else {
        el.attachEvent("onscroll", this.scrollMonitor);
      }
      let i = 0;
      this.clearInitTimer();
      this.initTimer = setInterval(
        //for lazy content
        () => {
          this.trigger(el);
          i++;
          if (i > retry) {
            this.clearInitTimer();
          }
        },
        300
      );
      if (!this.isInitResizeEvent) {
        this.initResizeEvent();
      }
    }
  }

  removeEvent(el) {
    if (el?.removeEventListener) {
      el.removeEventListener("scroll", this.scrollMonitor);
    } else {
      el?.deachEvent("onscroll", this.scrollMonitor);
    }
  }

  handleResize() {
    this.spys.forEach((v, scrollId) => {
      this.scrollMonitor({ target: { id: scrollId } });
    });
  }

  runScrollMonitor(e) {
    const delay = this.store.getState().get("scrollDelay");
    this.scrollDebounce({ delay, args: [e?.target] });
  }

  triggerScroll(scrollNode) {
    const scrollId = get(scrollNode, ["id"]) || DEFAULT_SCROLL_ID;
    const defaultMargin = this.store.getState().get("scrollMargin");
    const actives = { mdefault: null };
    const offsetCache = {};
    const allMonitorNode = [];
    const scroll = getScrollInfo();
    const scrollTop = scroll.top + defaultMargin;
    (this.spys.get(scrollId) || []).forEach((node) => {
      const nodeEl = node.getOffsetEl();
      if (!nodeEl) {
        return;
      }
      const nodeId = this.getNodeId(node);
      const monitorScroll = callfunc(node.getMonitorScroll);
      const scrollMargin = callfunc(node.getScrollMargin);

      let pos = getOffset(nodeEl);
      if (monitorScroll) {
        if (scrollTop >= pos.top && scrollTop < pos.bottom) {
          actives.mdefault = nodeId;
        }
        allMonitorNode.unshift(node);
      }
      const margin = scrollMargin ? scrollMargin : defaultMargin;
      pos = isOnScreen(pos, scroll, margin);
      offsetCache[nodeId] = pos;
    });
    const allMonitorNodeLen = allMonitorNode.length;
    this.margins.forEach((margin) => {
      const scrollTop = scroll.top + margin;
      actives["m" + margin] = null;
      let i = allMonitorNodeLen;
      while (i--) {
        const node = allMonitorNode[i];
        const nodeId = this.getNodeId(node);
        const pos = offsetCache[nodeId];
        const isActive = scrollTop >= pos.top - 1 && scrollTop <= pos.bottom - 2;
        if (isActive) {
          actives["m" + margin] = nodeId;
          break;
        }
      }
    });
    this.margins = this.margins.clear();
    this.dispatch({
      ...actives,
      offsetCache,
      scroll,
      storeName: this.storeName,
    });
  }

  getOffset(id) {
    const offset = this.store.getMap("offsetCache")[id];
    if (offset && offset.h && offset.w) {
      return offset;
    } else {
      const node = this.getNode(id) || {};
      const dom = callfunc(node.getOffsetEl) || query.one("#" + id);
      let domOffset = dom && getOffset(dom);
      if (domOffset) {
        const scrollInfo = getScrollInfo();
        const defaultMargin = this.store.getState().get("scrollMargin");
        const margin = callfunc(node.getScrollMargin) || defaultMargin;
        domOffset = isOnScreen(domOffset, scrollInfo, margin);
        return domOffset;
      } else {
        return offset;
      }
    }
  }

  hasAttach(node) {
    const attachDestId = this.getAttachDestId(node);
    const attachDest = this.spys.get(attachDestId);
    if (attachDest && attachDest.has(node)) {
      return attachDestId;
    } else {
      return false;
    }
  }

  getNodeId(node) {
    const id = callfunc(node.getId) || node.id;
    if (!id) {
      if (node === win()) {
        return DEFAULT_SCROLL_ID;
      } else {
        return this.setNodeId(node);
      }
    } else {
      return id;
    }
  }

  setNodeId(node) {
    const nextId = "spy-" + incNum;
    incNum++;
    if (node.setId) {
      node.setId(nextId);
    } else {
      node.id = nextId;
    }
    return nextId;
  }

  getAttachDestId(node) {
    const attachDest = callfunc(node.getAttachDest);
    let attachDestId;
    if (attachDest) {
      attachDestId = this.getNodeId(attachDest);
    } else {
      const oWin = win();
      if (!oWin.__null) {
        node.setAttachDest(oWin);
      }
      attachDestId = DEFAULT_SCROLL_ID;
    }
    return attachDestId;
  }

  getNode(nodeId) {
    const node = this.arrNode.get(nodeId);
    return node;
  }

  attach(node) {
    const nodeId = this.getNodeId(node);
    /**
     * if not set attachDest, the default attachDest is window.
     */
    const attachDestId = this.getAttachDestId(node);
    const attachDest = this.spys.get(attachDestId);
    if (!attachDest) {
      this.spys = this.spys.set(attachDestId, Set().add(node));
    } else {
      this.spys = this.spys.set(attachDestId, attachDest.add(node));
    }
    this.arrNode = this.arrNode.set(nodeId, node);
    if (!this.isInitEvent.get(attachDestId)) {
      this.isInitEvent = this.isInitEvent.set(attachDestId, true);
      this.initEvent(
        callfunc(node.getAttachDest),
        callfunc(node.getAttachDestRetry)
      );
    }
    return nodeId;
  }

  detach(node) {
    const attachDestId = this.hasAttach(node);
    if (attachDestId) {
      this.spys = this.spys.set(
        attachDestId,
        this.spys.get(attachDestId).remove(node)
      );
      this.arrNode = this.arrNode.delete(this.getNodeId(node));
      if (!this.spys.get(attachDestId).size) {
        this.removeEvent(node.attachDestId);
        this.spys = this.spys.delete(attachDestId);
        this.isInitEvent = this.isInitEvent.delete(attachDestId);
      }
    }
  }

  addMargin(num) {
    this.margins = this.margins.add(num);
  }

  deleteMargin(num) {
    this.margins = this.margins.remove(num);
  }

  clearInitTimer() {
    if (this.initTimer) {
      clearInterval(this.initTimer);
      this.initTimer = null;
    }
  }

  getInitialState() {
    this.initTimer = null;
    this.trigger = this.triggerScroll.bind(this);
    this.isInitEvent = Map();
    this.spys = Map();
    this.arrNode = Map();
    this.margins = Set();
    this.scrollMonitor = this.runScrollMonitor.bind(this);
    this.scrollDebounce = debounce(this.trigger);
    this.bindHandleResize = this.handleResize.bind(this);
    return Map({
      scrollDelay: 50,
      scrollMargin: 0,
    });
  }

  reduce(state, action) {
    return mergeMap(state, action);
  }
}

const oDelayScroller = new Scroller();

const [store, delayScrollDispatch] = ImmutableStore(
  oDelayScroller.reduce.bind(oDelayScroller),
  oDelayScroller.getInitialState.bind(oDelayScroller)
);

store.scroller = oDelayScroller;
oDelayScroller.dispatch = delayScrollDispatch;
oDelayScroller.store = store;

export default store;
export { Scroller };
