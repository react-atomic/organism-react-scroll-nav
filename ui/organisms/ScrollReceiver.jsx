import React, {Component} from 'react';
import { Container } from 'reduce-flux';
import {
    SemanticUI,
    assign
} from 'react-atomic-molecule';

import { scrollStore } from '../../src/index';

class ScrollReceiver extends Component
{
     static defaultProps = {
         scrollMargin: 'default'
     }

     static getStores()
     {
         return [scrollStore];
     }

     static calculateState(prevState, props)
     {
         const state = scrollStore.getState();
         const targetId = props.targetId;
         let isShown = prevState && prevState.isShown || false;
         let pos = {};
         let nodes = state.get('nodes');
         if (nodes) {
             nodes = nodes.toJS();
         }
         if (nodes && nodes[targetId]) {
            pos = nodes[targetId];
            if (pos.isOnScreen) {
                isShown = true;
            }
         }
         const active =
            'undefined' !== typeof targetId &&
             targetId === state.get('m'+props.scrollMargin);
         if (!isNaN(props.scrollMargin)) {
             scrollStore.addMargin(props.scrollMargin);
         }
         return assign(pos, {
             active: active,
             isShown: isShown,
         });
     }

     render()
     {
         const {
            atom,
            container,
            scrollMargin,
            targetId,
            ...reset
         } = this.props; 
         const state = this.state;
         if (!React.isValidElement(container)) {
            return <SemanticUI {...reset} />;   
         }
         const targetInfo = {
            active: state.active,
            isOnScreen: state.isOnScreen,
            targetId: targetId,
            isShown: state.isShown,
            atTop: state.atTop,
            atRight: state.atRight,
            atBottom: state.atBottom,
            atLeft: state.atLeft
         }
         let props = assign({}, reset, {targetInfo: targetInfo});
         return React.cloneElement(
             container,
             props
        );
     }
}

const ScrollReceiverContainer = Container.create(
    ScrollReceiver,
    { withProps:true }
);

export default ScrollReceiverContainer;
