// @ts-check

import * as React from "react";
const { useEffect, useState, useCallback, useRef } = React;
import smoothScrollTo from "smooth-scroll-to";
import getOffset, { OffsetType } from "getoffset";
import callfunc from "call-func";
import { doc } from "win-doc";
import { getAnchorPath } from "reshow-url";

import { ScrollReceiver } from "../../index";
import scrollStore from "../../stores/scrollStore";
import fastScrollStore from "../../stores/fastScrollStore";

let scollTimer = null;
const resetTimer = () => {
  if (scollTimer) {
    clearTimeout(scollTimer);
    scollTimer = null;
  }
};

/**
 * @typedef {object} SmoothScrollLinkProps
 */

/**
 * @param {SmoothScrollLinkProps} props
 */
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

  /**
   * @type {[scrollRefElement, setScrollRefElement]}
   */
  const [scrollRefElement, setScrollRefElement] = useState();

  /** @type {any} */
  const lastScroll = useRef();

  /**
   * @param {number=} duringTime
   */
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
      setTimeout(() => (lastScroll.current = to));
      smoothScrollTo(to, duringTime, undefined, () => {
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
      const refOffset = /**@type OffsetType*/ (getOffset(scrollRefElement));
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
    /**
     * @param {object} e
     */
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

/**
 * @param {SmoothScrollLinkProps} props
 */
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
