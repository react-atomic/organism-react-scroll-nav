import { ImmutableStore } from "reshow-flux";
import { Scroller } from "./scrollStore";

class FastScroller extends Scroller {
  storeName = "fastScroll";

  runScrollMonitor(e) {
    this.triggerScroll(e.target);
  }
}

const oFastScroller = new FastScroller();

const [store, fastScrollDispatch] = ImmutableStore(
  oFastScroller.reduce.bind(oFastScroller),
  oFastScroller.getInitialState.bind(oFastScroller)
);

const scrollStore = {
  ...store,
  scroller: oFastScroller,
}; 

oFastScroller.dispatch = fastScrollDispatch;
oFastScroller.store = store;

export default scrollStore;
