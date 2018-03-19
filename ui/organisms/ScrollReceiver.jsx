import React, {Component} from 'react';
import { connect } from 'reshow-flux';
import {
    SemanticUI
} from 'react-atomic-molecule';

import scrollStore from '../../src/stores/scrollStore';
import fastScrollStore from '../../src/stores/fastScrollStore';

class ScrollReceiver extends Component
{
     static defaultProps = {
        scrollMargin: 'default',
        isScrollReceiver: true,
        noDelay: false
     };

     static getStores(props)
     {
         return (props.noDelay) ? [fastScrollStore] : [scrollStore];
     }

     static calculateState(prevState, props)
     {
         const state = scrollStore.getState();
         const targetId = props.targetId;
         let isShown = prevState && prevState.isShown || false;
         const pos = scrollStore.getOffset(targetId) || {};
         if (pos.isOnScreen) {
             isShown = true;
         }
         const active =
            'undefined' !== typeof targetId &&
             targetId === state.get('m'+props.scrollMargin);
         if (!isNaN(props.scrollMargin)) {
             scrollStore.addMargin(props.scrollMargin);
         }
         return {
            ...pos,
            active,
            isShown
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
            noDelay,
            ...reset
         } = this.props; 
         if (!React.isValidElement(container)) {
            return <SemanticUI {...reset} />;   
         }
         const {
            active,
            isOnScreen,
            isShown,
            atTop,
            atRight,
            atBottom,
            atLeft
         } = this.state;
         const targetInfo = {
            active,
            isOnScreen,
            targetId,
            isShown,
            atTop,
            atRight,
            atBottom,
            atLeft
         }
         return React.cloneElement(
             container,
             {
                ...reset,
                targetInfo
             }
        );
     }
}

export default connect(ScrollReceiver, { withProps:true });
