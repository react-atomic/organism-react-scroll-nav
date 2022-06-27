import ScrollSpy from "../organisms/ScrollSpy";
import ScrollReceiver from "../organisms/ScrollReceiver";

const ScrollInfo = ({ children, ...others }) => (
  <ScrollSpy {...others}>
    <ScrollReceiver>{children}</ScrollReceiver>
  </ScrollSpy>
);

export default ScrollInfo;
