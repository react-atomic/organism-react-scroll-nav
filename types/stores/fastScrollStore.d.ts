export default scrollStore;
declare const scrollStore: {
    scroller: FastScroller;
    reset: Function;
    getState: Function;
    addListener: Function;
    removeListener: Function;
    getMap: Function;
};
declare class FastScroller extends Scroller {
}
import { Scroller } from "./scrollStore";
