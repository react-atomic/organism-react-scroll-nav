import React, {Component} from 'react';
import { scrollStore } from '../../src/index';
import getOffset from 'getoffset';
import { assign } from 'react-atomic-molecule';

class ScrollSpy extends Component
{

    static defaultProps = {
        testScrollTo: true
    }

    componentDidMount()
    {
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
        const {testScrollTo, children, ...others} = this.props;
        let cookChildren = children;
        if (React.isValidElement(children)) {
            let type = children.type;
            if (type.displayName
             && -1 !== type.displayName.indexOf('ScrollReceiver')
            ) {
                 cookChildren = React.cloneElement(
                     children,
                     assign(
                        {targetId: this.id},
                        children.props
                     )
                 );
            }
        } 
        return (
            <div ref={dom=>this.el=dom} {...others}>
                {cookChildren}
            </div>
        );
    }
}

export default ScrollSpy;
