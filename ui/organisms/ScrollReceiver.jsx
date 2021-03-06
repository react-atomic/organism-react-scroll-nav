import React, { isValidElement, useRef } from "react";
import Return from "reshow-return";
import { build, SemanticUI } from "react-atomic-molecule";
import { UNDEFINED } from "reshow-constant";

import scrollStore from "../../src/stores/scrollStore";
import fastScrollStore from "../../src/stores/fastScrollStore";

const ScrollReceiver = (props) => {
  const {
    isScrollReceiver,
    children,
    noDelay,
    targetId,
    scrollMargin,
    container,
    ...resetProps
  } = props;
  const lastIsShown = useRef();
  const store = noDelay ? fastScrollStore : scrollStore;

  return (
    <Return stores={[store]} initStates={["scroll"]}>
      {({ scroll: scrollInfo = {} }) => {
        const activeId = store.getState().get("m" + scrollMargin);
        const scrollTop = scrollInfo.top;
        const pos = store.getOffset(targetId, store.storeName) || {};
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
          isShown,
          targetId,
        };
        if (!isNaN(scrollMargin)) {
          store.addMargin(scrollMargin);
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

ScrollReceiver.defaultProps = {
  scrollMargin: "default",
  isScrollReceiver: true,
  noDelay: false,
};

export default ScrollReceiver;
