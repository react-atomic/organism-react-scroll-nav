import React, {Component, isValidElement} from 'react';
import {connect} from 'reshow-flux';
import {build, SemanticUI} from 'react-atomic-molecule';

import scrollStore from '../../src/stores/scrollStore';
import fastScrollStore from '../../src/stores/fastScrollStore';

class ScrollReceiver extends Component {
  static defaultProps = {
    scrollMargin: 'default',
    isScrollReceiver: true,
    noDelay: false,
  };

  static getStores(props) {
    return props.noDelay ? [fastScrollStore] : [scrollStore];
  }

  static calculateState(prevState, props) {
    const {noDelay, targetId, scrollMargin} = props;
    const store = noDelay ? fastScrollStore : scrollStore;
    const state = store.getState();
    let isShown = (prevState && prevState.isShown) || false;
    const pos = store.getOffset(targetId, store.storeName) || {};
    const scrollInfo = store.getMap('scroll');
    const scrollTop = scrollInfo.top;
    if (pos.isOnScreen) {
      isShown = true;
    }
    const active =
      'undefined' !== typeof targetId &&
      targetId === state.get('m' + scrollMargin);
    if (!isNaN(scrollMargin)) {
      store.addMargin(scrollMargin);
    }
    return {
      ...pos,
      active,
      scrollTop,
      scrollInfo,
      isShown,
    };
  }

  render() {
    const {
      atom,
      container,
      scrollMargin,
      targetId,
      isScrollReceiver,
      noDelay,
      children,
      ...resetProps
    } = this.props;
    if (!container) {
      return <SemanticUI {...resetProps}>{children}</SemanticUI>;
    }
    const targetInfo = {
      ...this.state,
      targetId,
    };
    let thisChildren = children;
    if (!thisChildren && isValidElement(container)) {
      thisChildren = container.props.children;
    }
    return build( container )(
      {
        ...resetProps,
        targetInfo,
      },
      thisChildren,
    );
  }
}

export default connect(
  ScrollReceiver,
  {withProps: true},
);
