import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import get from "get-object-value";
import {
  mixClass,
  build,
  getDisplayName,
  SemanticUI,
} from "react-atomic-molecule";
import { useDebounce } from "reshow-hooks";

import scrollStore from "../../src/stores/scrollStore";
import fastScrollStore from "../../src/stores/fastScrollStore";

const useScrollSpy = (props) => {
  /**
   * monitorScroll use in store, in component just for reset props.
   */
  const {
    noDelay = false,
    monitorScroll = true,
    id,
    scrollMargin,
    children,
    container,
    className,
    attachTo,
    ...others
  } = props;

  const [targetId, setTargetId] = useState(id);

  const lastEl = useRef();

  const lastConfig = useRef({});
  lastConfig.current = {
    ...lastConfig.current,
    id: targetId,
    attachTo,
    monitorScroll,
    scrollMargin,
  };

  const thisClassName = useMemo(
    () => mixClass(className, "spy-tar-" + targetId),
    [targetId, className]
  );

  useEffect(() => {
    const store = noDelay ? fastScrollStore : scrollStore;
    const id = store.scroller.attach(expose);
    setTargetId(id);
    return () => {
      store.scroller.detach(expose);
    };
  }, []);

  const warnDebounce = useDebounce((args) => {
    // for lazy render component, that warn delay 1 secs.
    if (!lastEl.current) {
      console.warn(
        'Please use SemanticUI. props.container -> import {SemanticUI} from "react-atomic-molecule"',
        args
      );
    }
  }, 1000);

  const getOffsetEl = useCallback(() => {
    if (lastEl.current) {
      return lastEl.current;
    } else {
      warnDebounce({ thisClassName, nextContainer });
    }
  }, [thisClassName, nextContainer]);

  const expose = {
    getOffsetEl,
    getId: () => lastConfig.current.id,
    setId: setTargetId,
    getAttachTo: () => lastConfig.current.attachTo,
    setAttachTo: (attachTo) => (lastConfig.current.attachTo = attachTo),
    getMonitorScroll: () => lastConfig.current.monitorScroll,
    getScrollMargin: () => lastConfig.current.scrollMargin,
  };

  const hasScrollReceiver = useMemo(
    () => ("ScrollReceiver" === getDisplayName(children) ? true : false),
    [children]
  );

  let nextContainer;
  let nextProps;
  const allProps = {
    ...others,
    refCb: (el) => el && (lastEl.current = el),
    className: thisClassName,
    id: targetId,
  };
  if (hasScrollReceiver) {
    nextContainer = children;
    nextProps = {
      ...children.props,
      ...allProps,
      targetId,
      container,
      noDelay,
    };
  } else {
    nextContainer = container || SemanticUI;
    nextProps = {
      ...allProps,
      children,
    };
  }

  return { nextContainer, nextProps };
};

const ScrollSpy = (props) => {
  const { nextContainer, nextProps } = useScrollSpy(props);
  return build(nextContainer)(nextProps);
};

export default ScrollSpy;
