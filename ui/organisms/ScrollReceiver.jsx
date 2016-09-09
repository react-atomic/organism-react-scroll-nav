import React, {Component} from 'react';

import { Container } from 'flux/utils';

import { scrollStore } from '../../src/index';

import {
    SemanticUI
} from 'react-atomic-molecule';

class ScrollReceiver extends Component
{
   static getStores()
   {
       return [scrollStore];
   }

   static calculateState(prevState)
   {
        const state = scrollStore.getState();
   }

   render()
   {
        const {container, ...props} = this.props; 
        let el;
        if (React.isValidElement(container)) {
          el = React.cloneElement(
            container,
            props
        );
        } else {
          el = (
            <SemanticUI {...props}/>
          );
        }
        return el;
   }
}
const ScrollReceiverContainer = Container.create(ScrollReceiver);

export default ScrollReceiverContainer;
