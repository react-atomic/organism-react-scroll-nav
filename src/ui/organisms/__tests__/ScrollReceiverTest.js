import { expect } from "chai";
import { render, sleep, act, waitFor } from "reshow-unit";

import ScrollReceiver from "../ScrollReceiver";
import ScrollSpy from "../ScrollSpy";

describe("Test ScrollReceiver", () => {
  const TestEl = () => <div />;

  it("test simple ScrollReceiver", async () => {
    const vDom = (
      <ScrollSpy>
        <ScrollReceiver container={TestEl} />
      </ScrollSpy>
    );
    let wrap = render(vDom);
    act(undefined, 500);
    await sleep(() => {}, 350);
    await waitFor(() => {
      expect(wrap.html()).to.have.string("<div></div>");
    });
  });
});
