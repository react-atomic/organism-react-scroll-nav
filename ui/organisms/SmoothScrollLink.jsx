'use strict';

import React, {PureComponent} from 'react';
import smoothScrollTo from 'smooth-scroll-to';
import getOffset from 'getoffset';
import { ScrollReceiver } from '../../src/index';

import scrollStore from '../../src/stores/scrollStore';
import fastScrollStore from '../../src/stores/fastScrollStore';

let scollTimer = null
const resetTimer = () =>
{
    if (scollTimer) {
        clearTimeout(scollTimer)
        scollTimer = false
    }
}

class SmoothScrollLink extends PureComponent 
{
    static defaultProps = {
        scrollRefId: '',
        scrollRefLoc: 'bottom',
        preventDefault: true,
        noDelay: false,
    }

    state = {
        scrollRefElement: null 
    }

    useStore()
    {
        const {noDelay} = this.props;
        return (noDelay) ? fastScrollStore : scrollStore;
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


    componentDidMount()
    {
        let dom = document.getElementById(this.props.scrollRefId);
        if (dom) {
            this.setState({
                scrollRefElement: dom
            });
        }
    }

    componentWillUnmount()
    {
       resetTimer()
    }

    render()
    {
        const store = this.useStore();
        const props = this.props;
        const {
            targetId,
            scrollRefLoc,
            scrollMargin,
            scrollRefId,
            style,
            preventDefault,
            ...others
        } = props
        const {scrollRefElement} = this.state
        let margin = this.getMargin(
            props,
            scrollRefElement
        );
        return (
            <ScrollReceiver
                atom="a"
                targetId={targetId}
                {...others}
                scrollMargin={margin}
                style={{...Styles.link, ...style}}
                onClick={(e)=>{
                    resetTimer()
                    let offset = store.getOffset(targetId);
                    if (offset) {
                        margin = this.getMargin(
                            props,
                            scrollRefElement
                        );
                        scollTimer = true
                        smoothScrollTo(
                            (offset.top - margin),
                            null,
                            null,
                            () => {
                                if (true !== scollTimer) {
                                    return
                                }
                                scollTimer = setTimeout(()=>{
                                    offset = store.getOffset(targetId);
                                    margin = this.getMargin(
                                        props,
                                        scrollRefElement
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
