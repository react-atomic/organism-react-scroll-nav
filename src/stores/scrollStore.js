import { ReduceStore, Set, Map } from "reshow-flux";
import getScrollInfo from "get-scroll-info";
import { isOnScreen } from "get-window-offset";
import getOffset from "getoffset";
import get, { toJS } from "get-object-value";
import { KEYS } from "reshow-constant";
import callfunc, { debounce } from "call-func";
import { win } from "win-doc";

import dispatcher, { scrollDispatch } from "../scrollDispatcher";
import testForPassiveScroll from "../testForPassiveScroll";

let incNum = 0;
const DEFAULT_SCROLL_ID = -1;

class scrollStore extends ReduceStore {
  storeName = "delayScroll";
  isInitEvent = {};
  isInitResizeEvent = false;
  spys = {};

  getInitialState() {
    this.trigger = this.triggerScroll.bind(this);
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

  initEvent(el) {
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
    if (el?.removeEventListener) {
      el.removeEventListener("scroll", this.scrollMonitor);
    } else {
      el?.deachEvent("onscroll", this.scrollMonitor);
    }
  }

  handleResize() {
    KEYS(this.spys).forEach((scrollId) =>
      this.scrollMonitor({ target: { id: scrollId } })
    );
  }

  runScrollMonitor(e) {
    const delay = this.getState().get("scrollDelay");
    this.scrollDebounce({ delay, args: [e?.target] });
  }

  triggerScroll(scrollNode) {
    const scrollId = get(scrollNode, ["id"]) || DEFAULT_SCROLL_ID;
    const defaultMargin = this.getState().get("scrollMargin");
    const actives = { mdefault: null };
    const offsetCache = {};
    const arrMonitorScroll = [];
    let scroll = getScrollInfo();
    let scrollTop = scroll.top + defaultMargin;
    let margin;
    (this.spys[scrollId] || []).forEach((node) => {
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
        arrMonitorScroll.push(node);
      }
      margin = scrollMargin ? scrollMargin : defaultMargin;
      pos = isOnScreen(pos, scroll, margin);
      offsetCache[nodeId] = pos;
    });
    this.margins.forEach((margin) => {
      scrollTop = scroll.top + margin;
      actives["m" + margin] = null;
      arrMonitorScroll.every((node) => {
        const nodeId = this.getNodeId(node);
        const pos = offsetCache[nodeId];
        if (scrollTop >= pos.top && scrollTop < pos.bottom - 1) {
          actives["m" + margin] = nodeId;
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
    const nodes = this.getMap("nodes");
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
    const id = callfunc(node.getId) || node.id;
    if (!id) {
      return this.setNodeId(node);
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

  getAttachToId(node) {
    const attachTo = callfunc(node.getAttachTo);
    let attachToId;
    if (attachTo) {
      attachToId = this.getNodeId(attachTo);
    } else {
      const oWin = win();
      if (!oWin.__null) {
        node.setAttachTo(oWin);
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
      this.initEvent(callfunc(node.getAttachTo));
    }
    return nodeId;
  }

  detach(node) {
    const attachToId = this.hasAttach(node);
    if (attachToId) {
      this.spys[attachToId] = this.spys[attachToId].remove(node);
      this.arrNode = this.arrNode.delete(this.getNodeId(node));
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
    const storeName = get(action, ["storeName"], "delayScroll");
    if (storeName === this.storeName) {
      return this.mergeMap(state, action);
    } else {
      return state;
    }
  }
}

export default new scrollStore(dispatcher);
export { scrollStore };
