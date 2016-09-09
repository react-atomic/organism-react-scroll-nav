import React from 'react'; 
import {
    ScrollSpy,
    ScrollReceiver
} from "../../src/index"

const MenuItem = (props) => (
   <span {...props} /> 
);

const Index = (props) => (
    <div>
        <div style={{position:'fixed', background:'#fff'}}>
            <ScrollReceiver container={<MenuItem />} target="t1">test1</ScrollReceiver>
            <ScrollReceiver container={<MenuItem />} target="t2">test2</ScrollReceiver>
            <ScrollReceiver container={<MenuItem />} target="t3">test3</ScrollReceiver>
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
);

export default Index;
