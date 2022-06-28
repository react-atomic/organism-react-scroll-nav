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
    scollTimer = false;
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
    ...others
  } = props;

  const [scrollRefElement, setScrollRefElement] = useState();

  const scrollTo = (lazyScrollTime = [500], duringTime) => {
    resetTimer();
    const offset = getStore().scroller.getOffset(targetId);
    if (offset) {
      const margin = getMargin();
      const to = offset.top - margin;
      smoothScrollTo(to, duringTime, null, () => {
        const nextScrollTime = lazyScrollTime.shift();
        if (null != nextScrollTime) {
          scollTimer = setTimeout(
            () => scrollTo(lazyScrollTime, 100),
            nextScrollTime
          );
        }
      });
    }
  };

  useEffect(() => {
    const oDoc = doc();
    if (!oDoc.__null) {
      const dom = oDoc.getElementById(scrollRefId);
      if (dom) {
        setScrollRefElement(dom);
      }
      if (getAnchorPath().anchor.substring(1) === targetId) {
        setTimeout(() => scrollTo([1000, 500], 100));
      }
    }
    return () => {
      resetTimer();
    };
  }, []);

  const getMargin = useCallback(() => {
    const ref = scrollRefElement;
    let margin = 0;
    if (ref) {
      const refOffset = getOffset(ref, false);
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
    margin--;
    return margin;
  }, [scrollRefLoc, scrollMargin, scrollRefElement]);

  const getStore = () => (noDelay ? fastScrollStore : scrollStore);

  const handler = {
    click: (e) => {
      if (preventDefault) {
        e.preventDefault();
      }
      callfunc(onClick);
      setTimeout(scrollTo);
    },
  };

  const margin = getMargin();

  return {
    others,
    handler,
    targetId,
    margin,
    style,
  };
};

const SmoothScrollLink = (props) => {
  const { others, handler, margin, style, targetId } =
    useSmoothScrollLink(props);
  return (
    <ScrollReceiver
      atom="a"
      {...others}
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
