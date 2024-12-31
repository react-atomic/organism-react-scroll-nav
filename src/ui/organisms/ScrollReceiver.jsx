//@ts-check

import React from "react";
const {isValidElement, useRef} = React;
import { useReturn } from "reshow-return";
import { build } from "react-atomic-molecule";
import { UNDEFINED, DEFAULT } from "reshow-constant";

import scrollStore from "../../stores/scrollStore";
import fastScrollStore from "../../stores/fastScrollStore";

/**
 * @typedef {any} ScrollReceiverProps
 */

/**
 * @param {ScrollReceiverProps} props
 */
const useScrollReceiver = (props) => {
  const {
    scrollMargin = DEFAULT,
    noDelay = false,
    targetId,
    container,
    children,
    ...restProps
  } = props;

  /** @type {React.RefObject<boolean>} */
  const lastIsShown = useRef(false);
  const store = noDelay ? fastScrollStore : scrollStore;
  const { scroll: scrollInfo = {} } = useReturn(["scroll"], store);
  const activeId = store.getState().get("m" + scrollMargin);
  const scrollTop = scrollInfo.top;
  const pos = store.scroller.getOffset(targetId) || {};
  const isShown = lastIsShown.current || false;
  const active = UNDEFINED !== typeof targetId && targetId === activeId;
  const targetInfo = {
    ...pos,
    active,
    scrollTop,
    scrollInfo,
    scrollMargin,
    isShown,
    targetId,
  };
  if (pos.isOnScreen) {
    targetInfo.isShown = true;
    lastIsShown.current = true;
  }
  if (!isNaN(scrollMargin)) {
    store.scroller.addMargin(scrollMargin);
  }
  return {
    targetInfo,
    container,
    children,
    restProps,
  };
};

/**
 * @param {ScrollReceiverProps} props
 */
const ScrollReceiver = (props) => {
  const { targetInfo, container, children, restProps } =
    useScrollReceiver(props);
  let nextContainer = container;
  let nextChildren = children;
  if (!nextContainer) {
    nextContainer = children;
    nextChildren = null;
  }
  if (!nextChildren && isValidElement(nextContainer)) {
    nextChildren = nextContainer.props.children;
  }
  return build(nextContainer)(
    {
      ...restProps,
      targetInfo,
    },
    /**
     * sould not use build here, let nextContainer handle children by itself.
     */
    nextChildren
  );
};

ScrollReceiver.displayName = "ScrollReceiver";

export default ScrollReceiver;
