import { isValidElement, useRef } from "react";
import { useReturn } from "reshow-return";
import { build } from "react-atomic-molecule";
import { UNDEFINED, DEFAULT } from "reshow-constant";
import callfunc from "call-func";

import scrollStore from "../../src/stores/scrollStore";
import fastScrollStore from "../../src/stores/fastScrollStore";

const useScrollReceiver = (props) => {
  const {
    scrollMargin = DEFAULT,
    noDelay = false,
    targetId,
    container,
    children,
    onScreen,
    ...restProps
  } = props;
  const lastIsShown = useRef();
  const store = noDelay ? fastScrollStore : scrollStore;
  const { scroll: scrollInfo = {} } = useReturn(["scroll"], store);
  const activeId = store.getState().get("m" + scrollMargin);
  const scrollTop = scrollInfo.top;
  const pos = store.scroller.getOffset(targetId) || {};
  let isShown = lastIsShown.current || false;
  if (pos.isOnScreen) {
    isShown = true;
    lastIsShown.current = true;
    callfunc(onScreen);
  }
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
    build(nextChildren)()
  );
};

ScrollReceiver.displayName = "ScrollReceiver";

export default ScrollReceiver;
