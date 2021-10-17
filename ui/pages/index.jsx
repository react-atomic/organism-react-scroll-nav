import React, { Component } from "react";

/**
 * Production please use
 * import {xxx} from 'organism-react-scroll-nav';
 */
import {
  ScrollSpy,
  ScrollReceiver,
  SmoothScrollLink,
  scrollDispatch,
} from "../../src/index";

/*Test only*/
scrollDispatch({
  scrollMargin: 100,
});

import { reactStyle, injectStyle } from "react-atomic-molecule";

class MenuItem extends Component {
  render() {
    const { targetInfo, style, ...reset } = this.props;
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
  }
}

class Index extends Component {
  render() {
    return (
      <div>
        <div id="nav-parent" style={Styles.nav}>
          <SmoothScrollLink
            scrollRefId="nav-parent"
            container={<MenuItem />}
            targetId="t1"
            style={{ background: "#3498DB" }}
          >
            test1
          </SmoothScrollLink>

          <SmoothScrollLink
            scrollRefId="nav-parent"
            container={<MenuItem />}
            targetId="t2"
            style={{ background: "#F1C40F" }}
          >
            test2
          </SmoothScrollLink>

          <SmoothScrollLink
            scrollRefId="nav-parent"
            container={<MenuItem />}
            targetId="t3"
            style={{ background: "#2ECC71" }}
          >
            test3
          </SmoothScrollLink>
        </div>
        <div style={{ paddingTop: 66 }}>
          <ScrollSpy
            id="t1"
            style={{ ...Styles.content, background: "#3498DB" }}
          >
            test111
          </ScrollSpy>
          <ScrollSpy
            id="t2"
            style={{ ...Styles.content, background: "#F1C40F" }}
          >
            {/*An example for detect in screen only*/}
            <ScrollSpy monitorScroll={false}>
              <ScrollReceiver style={{ border: "1px solid #fff" }}>
                test222
              </ScrollReceiver>
            </ScrollSpy>
          </ScrollSpy>
          <ScrollSpy
            id="t3"
            style={{ ...Styles.content, background: "#2ECC71" }}
          >
            test333
          </ScrollSpy>
        </div>
      </div>
    );
  }
}

export default Index;

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
  body: reactStyle(
    {
      margin: 0,
      padding: 0,
    },
    "body"
  ),
  nav: {
    position: "fixed",
    background: "#fff",
    textAlign: "center",
    width: "100%",
    padding: "10px 0",
    top: 0,
  },
};
injectStyle();
