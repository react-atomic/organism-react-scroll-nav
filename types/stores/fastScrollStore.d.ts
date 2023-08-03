export default scrollStore;
declare const scrollStore: {
    scroller: FastScroller;
    getMap: (arg0: import("reshow-flux/types/ImmutableStore").MapKeyType) => any;
    reset: () => import("reshow-flux/types/ImmutableStore").StateMap;
    getState: () => import("reshow-flux/types/ImmutableStore").StateMap;
    addListener: import("reshow-flux-base/types/type").EmitterAddCall<import("reshow-flux/types/ImmutableStore").StateMap, import("reshow-flux/types/ImmutableStore").ImmutableAction>;
    removeListener: import("reshow-flux-base/types/type").EmitterRemoveCall<import("reshow-flux/types/ImmutableStore").StateMap, import("reshow-flux/types/ImmutableStore").ImmutableAction>;
};
declare class FastScroller extends Scroller {
}
import { Scroller } from "./scrollStore";
