import React, { useEffect, useState, useCallback, useRef } from "react";
import smoothScrollTo from "smooth-scroll-to";
import getOffset from "getoffset";
import { doc } from "win-doc";

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
    ...others
  } = props;

  const [scrollRefElement, setScrollRefElement] = useState();

  useEffect(() => {
    const oDoc = doc();
    if (!oDoc.__null) {
      const dom = oDoc.getElementById(scrollRefId);
      if (dom) {
        setScrollRefElement(dom);
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
      const store = getStore();
      if (preventDefault) {
        e.preventDefault();
      }
      resetTimer();
      let offset = store.scroller.getOffset(targetId);
      if (offset) {
        let margin = getMargin();
        smoothScrollTo(offset.top - margin, null, null, () => {
          scollTimer = setTimeout(() => {
            margin = getMargin();
            offset = store.scroller.getOffset(targetId);
            smoothScrollTo(offset.top - margin, 100);
          }, 500);
        });
      }
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
