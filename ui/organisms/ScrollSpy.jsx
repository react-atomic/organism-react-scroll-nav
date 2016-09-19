import React, {Component} from 'react';
import { scrollStore } from '../../src/index';
import getOffset from 'getoffset';

let incNum = 0;

class ScrollSpy extends Component
{

    static defaultProps = {
        testScrollTo: true
    }

    componentDidMount()
    {
        if (this.props.id) {
            this.id = this.props.id;
        } else {
            this.id = 'spy-'+incNum;
            incNum++;
        }
        this.testScrollTo = this.props.testScrollTo;
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
        const {active, isOnScreen, testScrollTo, ...others} = this.props;
        return (
            <div ref={dom=>this.el=dom} {...others} />
        );
    }
}

export default ScrollSpy;
