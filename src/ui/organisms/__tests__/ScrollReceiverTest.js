import { expect } from "chai";
import { render } from "reshow-unit";

import ScrollReceiver from "../ScrollReceiver";

describe("Test ScrollReceiver", () => {
  const TestEl = () => <div />;

  it("test simple ScrollReceiver", () => {
    const vDom = <ScrollReceiver container={TestEl} />;
    const uFake = render(vDom);
    expect(uFake.html()).to.be.equal("<div></div>");
  });
});
