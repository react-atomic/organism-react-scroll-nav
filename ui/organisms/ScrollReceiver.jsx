import React, { isValidElement, useRef } from "react";
import Return from "reshow-return";
import { build, SemanticUI } from "react-atomic-molecule";
import { UNDEFINED, DEFAULT } from "reshow-constant";

import scrollStore from "../../src/stores/scrollStore";
import fastScrollStore from "../../src/stores/fastScrollStore";

const ScrollReceiver = ({
  scrollMargin = DEFAULT,
  noDelay = false,
  children,
  targetId,
  container,
  ...resetProps
}) => {
  const lastIsShown = useRef();
  const store = noDelay ? fastScrollStore : scrollStore;

  return (
    <Return store={store} initStates={["scroll"]}>
      {({ scroll: scrollInfo = {} }) => {
        const activeId = store.getState().get("m" + scrollMargin);
        const scrollTop = scrollInfo.top;
        const pos = store.scroller.getOffset(targetId, store.storeName) || {};
        let isShown = lastIsShown.current || false;
        if (pos.isOnScreen) {
          isShown = true;
          lastIsShown.current = true;
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
        if (!container) {
          return <SemanticUI {...resetProps}>{children}</SemanticUI>;
        }
        let thisChildren = children;
        if (!thisChildren && isValidElement(container)) {
          thisChildren = container.props.children;
        }
        return build(container)(
          {
            ...resetProps,
            targetInfo,
          },
          thisChildren
        );
      }}
    </Return>
  );
};

ScrollReceiver.displayName = "ScrollReceiver";

export default ScrollReceiver;
