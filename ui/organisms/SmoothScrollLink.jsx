'use strict';

import React, {Component} from 'react';
import { ScrollReceiver } from '../../src/index';
import smoothScrollTo from 'smooth-scroll-to';
import { scrollStore } from '../../src/index';
import getOffset from 'getoffset';

class SmoothScrollLink extends Component 
{
    static defaultProps = {
        scrollRefId: '',
        scrollRefLoc: 'bottom'
    }

    constructor(props) {
        super(props);
        this.state = {
             scrollRef: ''
        };
    }

    componentDidMount()
    {
        let dom = document.getElementById(this.props.scrollRefId);
        if (dom) {
            this.setState({
                scrollRef: dom
            });
        }
    }

    render()
    {
        const {
            targetId,
            scrollRefId,
            scrollRefLoc,
            ...props
        } = this.props;
        let margin = 0;
        if (this.state.scrollRef) {
            let offset = getOffset(this.state.scrollRef);
            margin = offset[scrollRefLoc];
        }
        if (!isNaN(props.scrollMargin)) {
            margin += props.scrollMargin;
        }
        return (
            <ScrollReceiver
                atom="a"
                targetId={targetId}
                {...props}
                onClick={(e)=>{
                    let offset = scrollStore.getOffset(targetId);
                    smoothScrollTo((offset.top - margin));
                    e.preventDefault();
                }}
            />
        );
    }
}

export default SmoothScrollLink;
