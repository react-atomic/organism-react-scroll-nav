export default scrollStore;
declare const scrollStore: {
    scroller: Scroller;
    reset: () => any;
    getState: () => any;
    addListener: import("reshow-flux-base/types/type").EmitterAddCall<any, import("reshow-flux/types/ImmutableStore").MaybeMapType>;
    removeListener: import("reshow-flux-base/types/type").EmitterRemoveCall<any, import("reshow-flux/types/ImmutableStore").MaybeMapType>;
    getMap: (arg0: import("reshow-flux/types/ImmutableStore").MapKeyType) => any;
};
export class Scroller {
    /** @type {string} */
    storeName: string;
    /** @type {boolean} */
    isInitResizeEvent: boolean;
    /** @type {any} */
    store: any;
    /** @type {function(any): void} */
    dispatch: (arg0: any) => void;
    /** @type {function({delay: number, args: any[]}): void} */
    scrollDebounce: (arg0: {
        delay: number;
        args: any[];
    }) => void;
    /**
     * Initialize resize event listener on window
     */
    initResizeEvent(): void;
    /**
     * Initialize scroll event listener on an element
     * @param {any} el - The element to attach scroll listener to
     * @param {number} retry - Number of retry attempts for lazy content
     */
    initEvent(el: any, retry: number): void;
    initTimer: NodeJS.Timeout;
    /**
     * Remove scroll event listener from an element
     * @param {any} el - The element to remove scroll listener from
     */
    removeEvent(el: any): void;
    /**
     * Handle window resize event
     */
    handleResize(): void;
    /**
     * Run scroll monitor with debounce
     * @param {any} e - The scroll event
     */
    runScrollMonitor(e: any): void;
    /**
     * Check if a position is active based on scroll position
     * @param {number} scrollTop - The current scroll top position
     * @param {any} pos - The position object with top and bottom values
     * @returns {boolean} True if position is active
     */
    checkIsActive: (scrollTop: number, pos: any) => boolean;
    /**
     * Trigger scroll calculation and update active states
     * @param {any} scrollNode - The scroll container node
     */
    triggerScroll(scrollNode: any): void;
    margins: any;
    /**
     * Get offset position for a node by ID
     * @param {string} id - The node ID to get offset for
     * @returns {any} The position object or undefined
     */
    getOffset(id: string): any;
    /**
     * Check if a node has been attached to a scroll destination
     * @param {any} node - The node to check
     * @returns {string|number|boolean} The attach destination ID or false
     */
    hasAttach(node: any): string | number | boolean;
    /**
     * Get or generate a node ID
     * @param {any} node - The node to get ID for
     * @returns {string|number} The node ID
     */
    getNodeId(node: any): string | number;
    /**
     * Set a unique ID for a node
     * @param {any} node - The node to set ID for
     * @returns {string} The generated node ID
     */
    setNodeId(node: any): string;
    /**
     * Get the attach destination ID for a node
     * @param {any} node - The node to get attach destination for
     * @returns {string|number} The attach destination ID
     */
    getAttachDestId(node: any): string | number;
    /**
     * Get a node by its ID
     * @param {string} nodeId - The node ID to retrieve
     * @returns {any} The node or undefined
     */
    getNode(nodeId: string): any;
    /**
     * Attach a node to a scroll destination for monitoring
     * @param {any} node - The node to attach
     * @returns {string|number} The node ID
     */
    attach(node: any): string | number;
    spys: any;
    arrNode: any;
    isInitEvent: any;
    /**
     * Detach a node from scroll monitoring
     * @param {any} node - The node to detach
     */
    detach(node: any): void;
    /**
     * Add a margin value to track for active state calculation
     * @param {number} num - The margin value to add
     */
    addMargin(num: number): void;
    /**
     * Remove a margin value from tracking
     * @param {number} num - The margin value to remove
     */
    deleteMargin(num: number): void;
    /**
     * Clear the initialization timer
     */
    clearInitTimer(): void;
    /**
     * Get the initial state for the store
     * @returns {import('reshow-flux').Map<string, any>} The initial state map
     */
    getInitialState(): import("reshow-flux").Map<string, any>;
    trigger: any;
    scrollMonitor: any;
    bindHandleResize: any;
    /**
     * Reducer function to update state
     * @param {any} state - Current state
     * @param {any} action - Action to apply
     * @returns {any} Updated state
     */
    reduce(state: any, action: any): any;
}
