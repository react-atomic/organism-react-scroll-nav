'use strict';

import React, {Component} from 'react';
import smoothScrollTo from 'smooth-scroll-to';
import getOffset from 'getoffset';
import { assign } from 'react-atomic-molecule';
import { ScrollReceiver } from '../../src/index';
import { scrollStore } from '../../src/index';

class SmoothScrollLink extends Component 
{
    static defaultProps = {
        scrollRefId: '',
        scrollRefLoc: 'bottom',
        preventDefault: true
    }

    constructor(props) {
        super(props);
        this.state = {
             scrollRefElement: ''
        };
    }

    componentDidMount()
    {
        let dom = document.getElementById(this.props.scrollRefId);
        if (dom) {
            this.setState({
                scrollRefElement: dom
            });
        }
    }

    getMargin(props, ref)
    {
        const {
            scrollRefLoc,
        } = props;
        let margin = 0;
        if (ref) {
            let offset = getOffset(ref);
            margin = offset[scrollRefLoc];
        }
        if (!isNaN(props.scrollMargin)) {
            margin += props.scrollMargin;
        }
        return margin;
    }

    render()
    {
        const self = this;
        const props = self.props;
        const {
            targetId,
            scrollRefLoc,
            scrollMargin,
            scrollRefId,
            preventDefault,
            ...others
        } = props;
        let margin = self.getMargin(
            props,
            self.state.scrollRefElement
        );
        return (
            <ScrollReceiver
                atom="a"
                targetId={targetId}
                {...others}
                scrollMargin={margin}
                style={assign({}, Styles.link, props.style)}
                onClick={(e)=>{
                    let offset = scrollStore.getOffset(targetId);
                    if (offset) {
                        margin = self.getMargin(
                            props,
                            self.state.scrollRefElement
                        );
                        smoothScrollTo(
                            (offset.top - margin),
                            null,
                            null,
                            () => {
                                setTimeout(()=>{
                                    offset = scrollStore.getOffset(targetId);
                                    margin = self.getMargin(
                                        props,
                                        self.state.scrollRefElement
                                    );
                                    smoothScrollTo((offset.top - margin),100);
                                },500);
                            }
                        );
                        if (preventDefault) {
                            e.preventDefault();
                        }
                    }
                }}
            />
        );
    }
}

export default SmoothScrollLink;

const Styles = {
    link: {
        cursor: 'pointer'
    }
};
