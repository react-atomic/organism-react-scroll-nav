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
         const target = props.targetId;
         let isOnScreen = false;
         let nodes = state.get('nodes');
         if (nodes) {
             nodes = nodes.toJS();
             if (nodes && nodes[target]) {
                isOnScreen = 
                    nodes[target].
                    isElementOnScreen;
             }
         }
         const active = 'undefined' !== typeof target &&
             target === state.get('m'+props.scrollMargin);
         if (!isNaN(props.scrollMargin)) {
             scrollStore.addMargin(props.scrollMargin);
         }
         return {
             active: active,
             isOnScreen: isOnScreen
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
         if (!React.isValidElement(container)) {
            return <SemanticUI {...reset} />;   
         }
         if (this.state.isOnScreen) {
            this.isShown = true;
         }
         const scrollInfo = {
            active: this.state.active,
            isOnScreen: this.state.isOnScreen,
            targetId: targetId,
            isShown: this.isShown
         }
         let props = assign({}, reset, {scrollInfo:scrollInfo});
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
