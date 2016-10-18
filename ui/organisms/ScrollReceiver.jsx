import React, {Component} from 'react';

import { Container } from 'flux/utils';

import { scrollStore } from '../../src/index';

import {
    SemanticUI,
    assign
} from 'react-atomic-molecule';

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
         let isOnScreen = false;
         let isShown = prevState && prevState.isShown || false;
         let atTop;
         let atRight;
         let atBottom;
         let atLeft;
         let nodes = state.get('nodes');
         if (nodes) {
             nodes = nodes.toJS();
         }
         if (nodes && nodes[targetId]) {
            isOnScreen = 
                nodes[targetId].
                isElementOnScreen;
         }
         if (isOnScreen) {
            isShown = true;
         } else {
            if (isShown && nodes && nodes[targetId]) {
                const scrollbar =
                    state.get('scroll').toJS();
                const target = nodes[targetId];
                if (scrollbar.top > target.bottom) {
                    atTop = true;
                } else if (scrollbar.bottom < target.bottom) {
                    atBottom = true;
                }
                if (scrollbar.left > target.right) {
                    atLeft = true;
                } else if (scrollbar.right < target.right) {
                    atRight = true;
                }
            }
         }
         
         const active =
            'undefined' !== typeof targetId &&
             targetId === state.get('m'+props.scrollMargin);
         if (!isNaN(props.scrollMargin)) {
             scrollStore.addMargin(props.scrollMargin);
         }
         return {
             active: active,
             isOnScreen: isOnScreen,
             isShown: isShown,
             atTop: atTop,
             atRight: atRight,
             atBottom: atBottom,
             atLeft: atLeft
         };
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
