import React, {Component} from 'react';
import { connect } from 'reshow-flux';
import {
    SemanticUI
} from 'react-atomic-molecule';

import { scrollStore } from '../../src/index';

class ScrollReceiver extends Component
{
     static defaultProps = {
            scrollMargin: 'default',
            isScrollReceiver: true
     };

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
         return {
            ...pos,
            active: active,
            isShown: isShown
         };
     }

     render()
     {
         const {
            atom,
            container,
            scrollMargin,
            targetId,
            isScrollReceiver,
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
         return React.cloneElement(
             container,
             {
                ...reset,
                targetInfo: targetInfo
             }
        );
     }
}

export default connect(ScrollReceiver, { withProps:true });
