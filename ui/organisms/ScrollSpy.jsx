import React, {Component} from 'react';
import { scrollStore } from '../../src/index';
import getOffset from 'getoffset';
import { assign } from 'react-atomic-molecule';

class ScrollSpy extends Component
{

    static defaultProps = {
        testScrollTo: true,
    }

    constructor(props)
    {
        super(props);
        this.state = {
            id: this.props.id
        };
    }

    componentDidMount()
    {
        let id = this.attach(this);
        this.setState({
            id: id
        });
    }

    componentWillUnmount()
    {
        this.detach();
    }

    getOffset()
    {
        return getOffset(this.el);
    }

    attach()
    {
        return scrollStore.attach(this);
    }

    detach()
    {
        return scrollStore.detach(this);
    }

    isScrollReceiver(el)
    {
        if (React.isValidElement(el)){
            let type = el.type;
            if (type.displayName
                && -1 !== type.displayName.indexOf('ScrollReceiver')
            ) {
                return true;
            }
        }
        return false;
    }

    render()
    {
        const {testScrollTo, children, ...others} = this.props;
        const isScrollReceiver = this.isScrollReceiver(children);
        let cookChildren;
        if (isScrollReceiver) {
             cookChildren = React.cloneElement(
                 children,
                 assign(
                    {targetId: this.state.id},
                    children.props
                 )
             );
        } else {
            cookChildren = children;
        }
        return (
            <div ref={dom=>this.el=dom} {...others}>
                {cookChildren}
            </div>
        );
    }
}

export default ScrollSpy;
