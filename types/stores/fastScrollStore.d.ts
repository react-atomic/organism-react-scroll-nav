export default scrollStore;
declare const scrollStore: {
    scroller: FastScroller;
    reset: () => any;
    getState: () => any;
    addListener: import("reshow-flux-base/types/type").EmitterAddCall<any, import("reshow-flux/types/ImmutableStore").MaybeMapType>;
    removeListener: import("reshow-flux-base/types/type").EmitterRemoveCall<any, import("reshow-flux/types/ImmutableStore").MaybeMapType>;
    getMap: (arg0: import("reshow-flux/types/ImmutableStore").MapKeyType) => any;
};
declare class FastScroller extends Scroller {
}
import { Scroller } from "./scrollStore";
