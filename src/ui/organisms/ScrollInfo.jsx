// @ts-check

import ScrollSpy from "../organisms/ScrollSpy";
import ScrollReceiver from "../organisms/ScrollReceiver";
import * as React from "react";

const ScrollInfo = ({ children = null, ...others }) => (
  <ScrollSpy {...others}>
    <ScrollReceiver>{children}</ScrollReceiver>
  </ScrollSpy>
);

export default ScrollInfo;
