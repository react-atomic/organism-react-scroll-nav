import dispatcher from "../scrollDispatcher";
import { scrollStore } from "./scrollStore";
import get from "get-object-value";

class fastScrollStore extends scrollStore {
  storeName = "fastScroll";

  runScrollMonitor(e) {
    this.triggerScroll(e.target);
  }
}

export default new fastScrollStore(dispatcher);
