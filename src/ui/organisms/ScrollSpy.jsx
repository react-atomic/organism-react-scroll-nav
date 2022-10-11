//@ts-check
import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import {
  mixClass,
  build,
  getDisplayName,
  SemanticUI,
} from "react-atomic-molecule";
import { useDebounce, useMounted } from "reshow-hooks";

import scrollStore from "../../stores/scrollStore";
import fastScrollStore from "../../stores/fastScrollStore";

/**
 * @typedef {object} ScrollSpyProps
 */

/**
 * @param {ScrollSpyProps} props
 */
const useScrollSpy = (props) => {
  /**
   * monitorScroll use in store, in component just for reset props.
   */
  const {
    noDelay = false,
    monitorScroll = true,
    attachDestRetry = 20,
    id,
    scrollMargin,
    children,
    container,
    className,
    attachDest,
    ...restProps
  } = props;

  const [targetId, setTargetId] = useState(id);

  const _mount = useMounted();
  const lastEl = useRef();

  /** @type {React.MutableRefObject<object>} */
  const lastConfig = useRef({});
  lastConfig.current = {
    ...lastConfig.current,
    id: targetId,
    attachDest: lastConfig.current.attachDest || attachDest,
    monitorScroll,
    scrollMargin,
  };

  const nextContainer = useRef();

  useEffect(() => {
    const store = noDelay ? fastScrollStore : scrollStore;
    const id = store.scroller.attach(expose);
    lastConfig.current.store = store;
    setTargetId(id);
    return () => {
      store.scroller.detach(expose);
    };
  }, []);

  const warnDebounce = useDebounce(
    /**
     * @param {object} args
     */
    (args) => {
      // for lazy render component, that warn delay 1.5 secs.
      if (!lastEl.current && _mount()) {
        // maybe could get lastEl late.
        console.warn(
          'Please use SemanticUI. props.container -> import {SemanticUI} from "react-atomic-molecule"',
          args
        );
      }
    },
    1500
  );

  const getOffsetEl = useCallback(() => {
    if (lastEl.current) {
      return lastEl.current;
    } else {
      warnDebounce({ targetId, container: nextContainer.current });
    }
  }, [targetId]);

  const expose = {
    lastConfig,
    getOffsetEl,
    detach: () => lastConfig.current.store.scroller.detach(expose),
    getId: () => lastConfig.current.id,
    setId: setTargetId,
    getAttachDest: () => lastConfig.current.attachDest,
    /**
     * @param {object} attachDest the scroll-node
     */
    setAttachDest: (attachDest) => (lastConfig.current.attachDest = attachDest),
    getMonitorScroll: () => lastConfig.current.monitorScroll,
    getScrollMargin: () => lastConfig.current.scrollMargin,
    getAttachDestRetry: () => attachDestRetry,
  };
  restProps.id = targetId;
  restProps.refCb = lastEl;
  restProps.className = mixClass(className, "spy-tar-" + targetId);
  return {
    targetId,
    className,
    children,
    container,
    noDelay,
    nextContainer,
    restProps,
  };
};

/**
 * @param {ScrollSpyProps} props
 */
const ScrollSpy = (props) => {
  const { targetId, children, container, noDelay, nextContainer, restProps } =
    useScrollSpy(props);

  return useMemo(() => {
    const hasScrollReceiver =
      "ScrollReceiver" === getDisplayName(children) ? true : false;
    let nextProps;
    if (hasScrollReceiver) {
      nextContainer.current = children;
      nextProps = {
        ...children.props,
        ...restProps,
        targetId,
        container,
        noDelay,
      };
    } else {
      nextContainer.current = container || SemanticUI;
      nextProps = {
        ...restProps,
        children,
      };
    }
    return build(nextContainer.current)(nextProps);
  }, [children, targetId]);
};

export default ScrollSpy;
