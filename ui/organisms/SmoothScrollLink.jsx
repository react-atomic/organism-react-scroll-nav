import { useEffect, useState, useCallback, useRef } from "react";
import smoothScrollTo from "smooth-scroll-to";
import getOffset from "getoffset";
import callfunc from "call-func";
import { doc } from "win-doc";
import { getAnchorPath } from "reshow-url";

import { ScrollReceiver } from "../../src/index";
import scrollStore from "../../src/stores/scrollStore";
import fastScrollStore from "../../src/stores/fastScrollStore";

let scollTimer = null;
const resetTimer = () => {
  if (scollTimer) {
    clearTimeout(scollTimer);
    scollTimer = null;
  }
};

const useSmoothScrollLink = (props) => {
  const {
    targetId,
    scrollRefLoc = "bottom",
    scrollRefId = "",
    scrollMargin,
    style,
    preventDefault = true,
    noDelay = false,
    onClick,
    ...restProps
  } = props;

  const [scrollRefElement, setScrollRefElement] = useState();
  const lastScroll = useRef();

  const scrollTo = (duringTime) => {
    const getStore = () => (noDelay ? fastScrollStore : scrollStore);
    const offset = getStore().scroller.getOffset(targetId);
    if (offset) {
      const margin = getMargin();
      const to = offset.top - margin;
      /**
       * Let user could cancel scroll with different direction.
       */
      if (lastScroll.current === to) {
        return;
      }
      setTimeout(()=>lastScroll.current = to);
      smoothScrollTo(to, duringTime, null, () => {
        resetTimer();
        scollTimer = setTimeout(() => scrollTo(duringTime), 800);
      });
    }
  };

  useEffect(() => {
    const dom = doc().getElementById(scrollRefId);
    if (dom) {
      setScrollRefElement(dom);
    }
    if (getAnchorPath().anchor.substring(1) === targetId) {
      setTimeout(() => scrollTo(1));
    }
    return () => {
      resetTimer();
    };
  }, []);

  /**
   * When modify getMargin number, should also take care store isActive logic.
   *
   * https://github.com/react-atomic/organism-react-scroll-nav/blob/main/src/stores/scrollStore.js#L119
   */
  const getMargin = useCallback(() => {
    let margin = 0;
    if (scrollRefElement) {
      const refOffset = getOffset(scrollRefElement, false);
      switch (scrollRefLoc) {
        case "bottom":
          margin += refOffset.bottom - refOffset.top;
          break;
        default:
        case "top":
          break;
      }
    }
    if (!isNaN(scrollMargin)) {
      margin += scrollMargin;
    }
    margin -= 2;
    return margin;
  }, [scrollRefLoc, scrollMargin, scrollRefElement]);

  const handler = {
    click: (e) => {
      lastScroll.current = null;
      if (preventDefault) {
        e.preventDefault();
      }
      callfunc(onClick);
      scrollTo();
    },
  };

  return {
    restProps,
    handler,
    targetId,
    margin: getMargin(),
    style,
  };
};

const SmoothScrollLink = (props) => {
  const { restProps, handler, margin, style, targetId } =
    useSmoothScrollLink(props);
  return (
    <ScrollReceiver
      atom="a"
      {...restProps}
      targetId={targetId}
      scrollMargin={margin}
      style={{ ...Styles.link, ...style }}
      onClick={handler.click}
    />
  );
};
export default SmoothScrollLink;

const Styles = {
  link: {
    cursor: "pointer",
  },
};
