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
         scrollMargin: 'default',
         targetId: ''
     }

     static getStores()
     {
         return [scrollStore];
     }

     static calculateState(prevState, props)
     {
         const state = scrollStore.getState();
         let isOnScreen = false;
         let nodes = state.get('nodes');
         let target = props.targetId;
         if (nodes) {
             nodes = nodes.toJS();
             if (nodes && nodes[target]) {
                isOnScreen = 
                    nodes[target].
                    isElementOnScreen;
             }
         }
         let active = 
            target === 
            state.get('m'+props.scrollMargin);
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
         let el;
         let props = assign({}, reset, {
            active: this.state.active,
            isOnScreen: this.state.isOnScreen
         });
         if (React.isValidElement(container)) {
             el = React.cloneElement(
                 container,
                 props
            );
         } else {
             el = (
                <SemanticUI {...props} />
             );
         }
         return el;
     }
}

const ScrollReceiverContainer = Container.create(
    ScrollReceiver,
    { withProps:true }
);

export default ScrollReceiverContainer;
