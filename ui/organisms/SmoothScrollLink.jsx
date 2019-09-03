import React, {PureComponent} from 'react';
import smoothScrollTo from 'smooth-scroll-to';
import getOffset from 'getoffset';

import {ScrollReceiver} from '../../src/index';
import scrollStore from '../../src/stores/scrollStore';
import fastScrollStore from '../../src/stores/fastScrollStore';

let scollTimer = null;
const resetTimer = () => {
  if (scollTimer) {
    clearTimeout(scollTimer);
    scollTimer = false;
  }
};

class SmoothScrollLink extends PureComponent {
  static defaultProps = {
    scrollRefId: '',
    scrollRefLoc: 'bottom',
    preventDefault: true,
    noDelay: false,
  };

  state = {
    scrollRefElement: null,
  };

  useStore() {
    const {noDelay} = this.props;
    return noDelay ? fastScrollStore : scrollStore;
  }

  getMargin(props, ref) {
    const {scrollRefLoc, scrollMargin} = props;
    let margin = 0;
    if (ref) {
      const refOffset = getOffset(ref, false);
      switch (scrollRefLoc) {
        case 'bottom':
          margin += refOffset.bottom - refOffset.top;
          break;
        default:
        case 'top':
          break;
      }
    }
    if (!isNaN(scrollMargin)) {
      margin += scrollMargin;
    }
    margin--;
    return margin;
  }

  handleClick = e => {
    const props = this.props;
    const store = this.useStore();
    const {preventDefault, targetId} = props;
    const {scrollRefElement} = this.state;
    if (preventDefault) {
      e.preventDefault();
    }
    resetTimer();
    let offset = store.getOffset(targetId);
    if (offset) {
      let margin = this.getMargin(props, scrollRefElement);
      scollTimer = true;
      smoothScrollTo(offset.top - margin, null, null, () => {
        if (true !== scollTimer) {
          return;
        }
        scollTimer = setTimeout(() => {
          margin = this.getMargin(props, scrollRefElement);
          offset = store.getOffset(targetId);
          smoothScrollTo(offset.top - margin, 100);
        }, 500);
      });
    }
  };

  componentDidMount() {
    const dom = document.getElementById(this.props.scrollRefId);
    if (dom) {
      this.setState({
        scrollRefElement: dom,
      });
    }
  }

  componentWillUnmount() {
    resetTimer();
  }

  render() {
    const props = this.props;
    const {
      targetId,
      scrollRefLoc,
      scrollMargin,
      scrollRefId,
      style,
      preventDefault,
      ...others
    } = props;
    const {scrollRefElement} = this.state;
    const margin = this.getMargin(props, scrollRefElement);
    return (
      <ScrollReceiver
        atom="a"
        {...others}
        targetId={targetId}
        scrollMargin={margin}
        style={{...Styles.link, ...style}}
        onClick={this.handleClick}
      />
    );
  }
}

export default SmoothScrollLink;

const Styles = {
  link: {
    cursor: 'pointer',
  },
};
