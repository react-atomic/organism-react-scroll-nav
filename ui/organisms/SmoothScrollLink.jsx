'use strict';

import React, {Component} from 'react';
import { ScrollReceiver } from '../../src/index';
import smoothScrollTo from 'smooth-scroll-to';
import { scrollStore } from '../../src/index';

class SmoothScrollLink extends Component 
{
    render()
    {
        return (
            <ScrollReceiver {...props}
                onClick={()=>{
                
                }}
            />
        );
    }
}
