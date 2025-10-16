//@ts-check

import { mergeMap, Set, Map, ImmutableStore } from "reshow-flux";
import getScrollInfo from "get-scroll-info";
import { isOnScreen } from "get-window-offset";
import getOffset from "getoffset";
import get from "get-object-value";
import callfunc, { debounce } from "call-func";
import { win } from "win-doc";
import { NEW_OBJ, DEFAULT } from "reshow-constant";
import query from "css-query-selector";

import testForPassiveScroll from "../testForPassiveScroll";

let incNum = 0;
const DEFAULT_SCROLL_ID = -1;

class Scroller {
  /** @type {string} */
  storeName = "delayScroll";

  /** @type {boolean} */
  isInitResizeEvent = false;

  /** @type {any} */
  store;

  /** @type {function(any): void} */
  dispatch;

  /** @type {function({delay: number, args: any[]}): void} */
  scrollDebounce;

  /**
   * Initialize resize event listener on window
   */
  initResizeEvent() {
    const oWin = /** @type {any} */ (win());
    if (!oWin.__null) {
      this.isInitResizeEvent = true;
      if (oWin.addEventListener) {
        oWin.addEventListener("resize", this.bindHandleResize);
      } else {
        oWin.attachEvent("onresize", this.bindHandleResize);
      }
    }
  }

  /**
   * Initialize scroll event listener on an element
   * @param {any} el - The element to attach scroll listener to
   * @param {number} retry - Number of retry attempts for lazy content
   */
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

  /**
   * Remove scroll event listener from an element
   * @param {any} el - The element to remove scroll listener from
   */
  removeEvent(el) {
    if (el?.removeEventListener) {
      el.removeEventListener("scroll", this.scrollMonitor);
    } else {
      el?.deachEvent("onscroll", this.scrollMonitor);
    }
  }

  /**
   * Handle window resize event
   */
  handleResize() {
    this.spys.keySeq().forEach((/** @type {any} */ scrollId) => {
      this.scrollMonitor({ target: { id: scrollId } });
    });
  }

  /**
   * Run scroll monitor with debounce
   * @param {any} e - The scroll event
   */
  runScrollMonitor(e) {
    const delay = this.store.getState().get("scrollDelay");
    this.scrollDebounce({ delay, args: [e?.target] });
  }

  /**
   * Check if a position is active based on scroll position
   * @param {number} scrollTop - The current scroll top position
   * @param {any} pos - The position object with top and bottom values
   * @returns {boolean} True if position is active
   */
  checkIsActive = (scrollTop, pos) => {
    return scrollTop >= pos.top - 1 && scrollTop <= pos.bottom - 2;
  };

  /**
   * Trigger scroll calculation and update active states
   * @param {any} scrollNode - The scroll container node
   */
  triggerScroll(scrollNode) {
    const scrollId = get(scrollNode, ["id"]) || DEFAULT_SCROLL_ID;
    const defaultMargin = this.store.getState().get("scrollMargin");
    const actives = NEW_OBJ();
    const offsetCache = NEW_OBJ();
    const allMonitorNode = NEW_OBJ();
    const scroll = getScrollInfo();
    const scrollTop = scroll.top + defaultMargin;
    (this.spys.get(scrollId) || []).forEach((/** @type {any} */ node) => {
      const nodeEl = node.getOffsetEl();
      if (!nodeEl) {
        return;
      }
      const nodeId = this.getNodeId(node);
      const monitorScroll = callfunc(node.getMonitorScroll);
      const scrollMargin = callfunc(node.getScrollMargin);
      const margin = scrollMargin ? scrollMargin : defaultMargin;

      let pos = getOffset(nodeEl);
      if (monitorScroll) {
        const active_id = `${nodeId}_${DEFAULT}`;
        actives[active_id] = null;
        const isActive = this.checkIsActive(scrollTop, pos);
        if (isActive) {
          actives[active_id] = nodeId;
        }
        if (!allMonitorNode[margin]) {
          allMonitorNode[margin] = [];
        }
        allMonitorNode[margin].unshift(node);
      }
      pos = isOnScreen(/**@type any*/ (pos), scroll, margin);
      offsetCache[nodeId] = pos;
    });
    this.margins.forEach((/** @type {any} */ margin) => {
      const scrollTop = scroll.top + margin;
      let i = allMonitorNode[margin]?.length || 0;
      while (i--) {
        const node = allMonitorNode[margin][i];
        const nodeId = this.getNodeId(node);
        const active_id = `${nodeId}_${margin}`;
        actives[active_id] = null;
        const pos = offsetCache[nodeId];
        const isActive = this.checkIsActive(scrollTop, pos);
        if (isActive) {
          actives[active_id] = nodeId;
          break;
        }
      }
    });
    this.margins = this.margins.clear();
    this.dispatch({
      actives,
      offsetCache,
      scroll,
      storeName: this.storeName,
    });
  }

  /**
   * Get offset position for a node by ID
   * @param {string} id - The node ID to get offset for
   * @returns {any} The position object or undefined
   */
  getOffset(id) {
    const offset = get(this.store.getMap("offsetCache"), [id]);
    if (offset && (offset.h || offset.w)) {
      return offset;
    } else {
      const node = this.getNode(id) || {};
      const dom = callfunc(node.getOffsetEl) || query.one("#" + id);
      /**
       * @type {any}
       */
      let domOffset = dom && getOffset(dom);
      if (domOffset) {
        const scrollInfo = getScrollInfo();
        const defaultMargin = this.store.getState().get("scrollMargin");
        const margin = callfunc(node.getScrollMargin) || defaultMargin;
        domOffset = isOnScreen(domOffset, scrollInfo, margin);
        domOffset.isOnScreen = false; // before scroll render
        return domOffset;
      } else {
        return offset;
      }
    }
  }

  /**
   * Check if a node has been attached to a scroll destination
   * @param {any} node - The node to check
   * @returns {string|number|boolean} The attach destination ID or false
   */
  hasAttach(node) {
    const attachDestId = this.getAttachDestId(node);
    const attachDest = this.spys.get(attachDestId);
    if (attachDest && attachDest.has(node)) {
      return attachDestId;
    } else {
      return false;
    }
  }

  /**
   * Get or generate a node ID
   * @param {any} node - The node to get ID for
   * @returns {string|number} The node ID
   */
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

  /**
   * Set a unique ID for a node
   * @param {any} node - The node to set ID for
   * @returns {string} The generated node ID
   */
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

  /**
   * Get the attach destination ID for a node
   * @param {any} node - The node to get attach destination for
   * @returns {string|number} The attach destination ID
   */
  getAttachDestId(node) {
    const attachDest = callfunc(node.getAttachDest);
    let attachDestId;
    if (attachDest) {
      attachDestId = this.getNodeId(attachDest);
    } else {
      const oWin = /** @type {any} */ (win());
      if (!oWin.__null) {
        node.setAttachDest(oWin);
      }
      attachDestId = DEFAULT_SCROLL_ID;
    }
    return attachDestId;
  }

  /**
   * Get a node by its ID
   * @param {string} nodeId - The node ID to retrieve
   * @returns {any} The node or undefined
   */
  getNode(nodeId) {
    const node = this.arrNode.get(nodeId);
    return node;
  }

  /**
   * Attach a node to a scroll destination for monitoring
   * @param {any} node - The node to attach
   * @returns {string|number} The node ID
   */
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

  /**
   * Detach a node from scroll monitoring
   * @param {any} node - The node to detach
   */
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

  /**
   * Add a margin value to track for active state calculation
   * @param {number} num - The margin value to add
   */
  addMargin(num) {
    this.margins = this.margins.add(num);
  }

  /**
   * Remove a margin value from tracking
   * @param {number} num - The margin value to remove
   */
  deleteMargin(num) {
    this.margins = this.margins.remove(num);
  }

  /**
   * Clear the initialization timer
   */
  clearInitTimer() {
    if (this.initTimer) {
      clearInterval(this.initTimer);
      this.initTimer = null;
    }
  }

  /**
   * Get the initial state for the store
   * @returns {import('reshow-flux').Map<string, any>} The initial state map
   */
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

  /**
   * Reducer function to update state
   * @param {any} state - Current state
   * @param {any} action - Action to apply
   * @returns {any} Updated state
   */
  reduce(state, action) {
    return mergeMap(state, action);
  }
}

const oDelayScroller = new Scroller();

const [store, delayScrollDispatch] = ImmutableStore(
  oDelayScroller.reduce.bind(oDelayScroller),
  oDelayScroller.getInitialState.bind(oDelayScroller)
);

const scrollStore = {
  ...store,
  scroller: oDelayScroller,
};

oDelayScroller.dispatch = delayScrollDispatch;
oDelayScroller.store = store;

export default scrollStore;
export { Scroller };
