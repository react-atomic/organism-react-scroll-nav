export default scrollStore;
declare const scrollStore: {
    scroller: Scroller;
    getMap: (arg0: import("reshow-flux/types/ImmutableStore").MapKeyType) => any;
    reset: () => import("reshow-flux/types/ImmutableStore").StateMap;
    getState: () => import("reshow-flux/types/ImmutableStore").StateMap;
    addListener: import("reshow-flux-base/types/type").EmitterAddCall<import("reshow-flux/types/ImmutableStore").StateMap, import("reshow-flux/types/ImmutableStore").ImmutableAction>;
    removeListener: import("reshow-flux-base/types/type").EmitterRemoveCall<import("reshow-flux/types/ImmutableStore").StateMap, import("reshow-flux/types/ImmutableStore").ImmutableAction>;
};
export class Scroller {
    storeName: string;
    isInitResizeEvent: boolean;
    initResizeEvent(): void;
    initEvent(el: any, retry: any): void;
    initTimer: NodeJS.Timer;
    removeEvent(el: any): void;
    handleResize(): void;
    runScrollMonitor(e: any): void;
    checkIsActive: (scrollTop: any, pos: any) => boolean;
    triggerScroll(scrollNode: any): void;
    margins: any;
    getOffset(id: any): any;
    hasAttach(node: any): any;
    getNodeId(node: any): any;
    setNodeId(node: any): string;
    getAttachDestId(node: any): any;
    getNode(nodeId: any): any;
    attach(node: any): any;
    spys: any;
    arrNode: any;
    isInitEvent: any;
    detach(node: any): void;
    addMargin(num: any): void;
    deleteMargin(num: any): void;
    clearInitTimer(): void;
    getInitialState(): Map<string, number>;
    trigger: any;
    scrollMonitor: any;
    scrollDebounce: (option: any) => void;
    bindHandleResize: any;
    reduce(state: any, action: any): import("reshow-flux/types/ImmutableStore").StateMap;
}
import { Map } from "reshow-flux";
