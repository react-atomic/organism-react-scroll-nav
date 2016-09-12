import React, {Component} from 'react'; 
import {
    ScrollSpy,
    SmoothScrollLink,
    ScrollReceiver
} from "../../src/index"


class MenuItem extends Component
{
    render()
    {
        const { active, isOnScreen, ...reset } = this.props;
        return (<span {...reset} />);
    }
}

class Index extends Component
{
    render()
    {
    return (
    <div>
        <div id="nav-parent" style={{position:'fixed', background:'#fff'}}>
            <SmoothScrollLink
                scrollRefId="nav-parent"
                container={<MenuItem />}
                targetId="t1"
            >
                test1
            </SmoothScrollLink>
            
            <SmoothScrollLink
                scrollRefId="nav-parent"
                container={<MenuItem />}
                targetId="t2"
            >
                test2
            </SmoothScrollLink>
            
            <SmoothScrollLink
                scrollRefId="nav-parent"
                container={<MenuItem />}
                targetId="t3"
            >
                test3
            </SmoothScrollLink>
        </div>
        <div style={{padding:'30px 0 0'}}>
            <ScrollSpy id="t1" style={{height:"500px",width:"2000px"}}>
               test111
            </ScrollSpy>
            <ScrollSpy id="t2" style={{height:"500px"}}>
               test222
            </ScrollSpy>
            <ScrollSpy id="t3" style={{height:"500px"}}>
               test333
            </ScrollSpy>
        </div>
    </div>
    )
    }
}
export default Index;
