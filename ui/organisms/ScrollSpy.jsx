import React, {Component} from 'react';

import { scrollStore } from '../../src/index';
import getOffset from 'getoffset';

let incNum = 0;

class ScrollSpy extends Component
{
    componentDidMount()
    {
        if (this.props.id) {
            this.id = this.props.id;
        } else {
            this.id = 'spy-'+incNum;
            incNum++;
        }
        scrollStore.attach(this);
    }

    componentWillUnmount()
    {
        scrollStore.detach(this);
    }

    getOffset()
    {
        return getOffset(this.el);
    }

    render()
    {
        return (
            <div ref={dom=>this.el=dom} {...this.props} />
        );
    }
}

export default ScrollSpy;
