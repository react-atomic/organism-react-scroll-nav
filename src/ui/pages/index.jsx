// @ts-check
import { Checkbox } from "react-atomic-organism";
import { useLazyInject } from "react-atomic-molecule";
import { useState } from "react";

/**
 * Production please use
 * import {xxx} from 'organism-react-scroll-nav';
 */
import ScrollSpy from "../organisms/ScrollSpy";
import ScrollReceiver from "../organisms/ScrollReceiver";
import SmoothScrollLink from "../organisms/SmoothScrollLink";

const MenuItem = ({ targetInfo, style, ...reset }) => {
  let activeStyle = null;
  if (targetInfo.active) {
    activeStyle = Styles.active;
  }
  return (
    <div
      style={{
        ...Styles.link,
        ...style,
        ...activeStyle,
      }}
      {...reset}
    />
  );
};
const Index = () => {
  injects = useLazyInject(InjectStyles, injects);
  const [isMonitor, setIsMonitor] = useState(false);
  /**
   * @param {object} e
   */
  const handleEnable = (e) => {
    if (e.checked) {
      setIsMonitor(true);
    } else {
      setIsMonitor(false);
    }
  };
  return (
    <div>
      <div id="nav-parent" style={Styles.nav}>
        <SmoothScrollLink
          scrollRefId="nav-parent"
          container={MenuItem}
          targetId="t1"
          style={{ background: "#3498DB" }}
        >
          test1
        </SmoothScrollLink>

        <SmoothScrollLink
          scrollRefId="nav-parent"
          container={MenuItem}
          targetId="t2"
          style={{ background: "#F1C40F" }}
        >
          test2
        </SmoothScrollLink>

        <SmoothScrollLink
          scrollRefId="nav-parent"
          container={MenuItem}
          targetId="t3"
          style={{ background: "#2ECC71" }}
        >
          test3
        </SmoothScrollLink>
      </div>
      <div style={{ paddingTop: 66 }}>
        <ScrollSpy id="t1" style={{ ...Styles.content, background: "#3498DB" }}>
          test111
        </ScrollSpy>
        <ScrollSpy id="t2" style={{ ...Styles.content, background: "#F1C40F" }}>
          {/*An example for detect and get scrollinfo only*/}
          <ScrollSpy monitorScroll={isMonitor}>
            <ScrollReceiver style={{ border: "1px solid #fff" }}>
              {({ targetInfo, refCb }) => (
                <div
                  ref={refCb}
                  style={{
                    border: "1px solid hsl(242, 100%, 50%)",
                  }}
                >
                  {`test222 scrollUp: ${targetInfo.scrollInfo.isScrollUp} scrollDown: ${targetInfo.scrollInfo.isScrollDown}`}
                  <div style={{ fontSize: "1.2rem" }}>
                    <Checkbox
                      label="enable monitor this area"
                      toggle
                      onChange={handleEnable}
                    />
                    When enable and you scroll over here will make test2 button
                    miss actived.
                  </div>
                </div>
              )}
            </ScrollReceiver>
          </ScrollSpy>
        </ScrollSpy>
        <ScrollSpy id="t3" style={{ ...Styles.content, background: "#2ECC71" }}>
          test333
        </ScrollSpy>
      </div>
    </div>
  );
};

export default Index;

/**
 * @type {Object}
*/
const Styles = {
  content: {
    height: "110vh",
    textAlign: "center",
    paddingTop: "10%",
    fontSize: "4rem",
    color: "#fff",
  },
  link: {
    display: "inline-block",
    padding: "0.3rem 0.5rem",
    fontSize: "2rem",
    color: "#fff",
    marginRight: "10px",
    opacity: "0.5",
    cursor: "pointer",
  },
  active: {
    opacity: 1,
  },
  nav: {
    position: "fixed",
    background: "#fff",
    textAlign: "center",
    width: "100%",
    padding: "10px 0",
    top: 0,
    zIndex: 999,
  },
};

let injects;
const InjectStyles = {
  body: [
    {
      margin: 0,
      padding: 0,
    },
    "body",
  ],
};
