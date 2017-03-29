import React, {Component} from 'react';
import getOffset from 'getoffset';
import get from 'get-object-value';
import { SemanticUI } from 'react-atomic-molecule';
import { scrollStore } from '../../src/index';

class ScrollSpy extends Component
{

    static defaultProps = {
        monitorScroll: true,
    }

    constructor(props)
    {
        super(props);
        this.scrollMargin = props.scrollMargin;
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
        if (this.el) {
            return getOffset(this.el);
        } else {
            console.warn('Please use SemanticUI. props.container -> import {SemanticUI} from "react-atomic-molecule"');
        }
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
        if (get(el,['props','isScrollReceiver'])) {
            return true;
        }
        return false;
    }

    render()
    {
        /**
         * monitorScroll use in store, in component just for reset props.
         */ 
        const {monitorScroll, children, container, ...others} = this.props;
        const isScrollReceiver = this.isScrollReceiver(children);
        let cookChildren;
        let thisContainer;
        let thisProps;
        if (isScrollReceiver) {
            thisContainer = children;
            thisProps = {
                targetId: this.state.id,
                container: container,
                ...others,
                ...children.props
            };
        } else {
            thisProps = {
                children: children,
                ...others
            };
            if (container) {
                thisContainer = container;
            } else {
                thisContainer = <SemanticUI />;
            }
        }
        thisProps = {
            ...thisProps,
            refCb: (el)=>this.el=el
        };
        return React.cloneElement(
             thisContainer,
             thisProps
        );
    }
}

export default ScrollSpy;
