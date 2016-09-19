import React, {Component} from 'react'; 
import {
    ScrollSpy,
    ScrollReceiver,
    SmoothScrollLink,
    scrollDispatch
} from "../../src/index"

scrollDispatch({
    scrollMargin: 67
});

import {assign, reactStyle, SemanticUI} from 'react-atomic-molecule';


class Index extends Component
{
    render()
    {
    return (
    <SemanticUI>
        <div id="nav-parent" style={Styles.nav}>
            <SmoothScrollLink
                scrollRefId="nav-parent"
                container={<MenuItem />}
                targetId="t1"
                style={{background:'#3498DB'}}
            >
                test1
            </SmoothScrollLink>
            
            <SmoothScrollLink
                scrollRefId="nav-parent"
                container={<MenuItem />}
                targetId="t2"
                style={{background:'#F1C40F'}}
            >
                test2
            </SmoothScrollLink>
            
            <SmoothScrollLink
                scrollRefId="nav-parent"
                container={<MenuItem />}
                targetId="t3"
                style={{background:'#2ECC71'}}
            >
                test3
            </SmoothScrollLink>
        </div>
        <div style={{padding:'30px 0 0'}}>
            <ScrollSpy id="t1" style={assign({}, Styles.content, {background:"#3498DB"})}>
               test111
            </ScrollSpy>
            <ScrollSpy id="t2" style={assign({}, Styles.content, {background:"#F1C40F"})}>
               <ScrollReceiver
                    targetId="t4"
                    testScrollTo={false}
                    style={{border:"1px solid #fff"}}
                    container={<ScrollSpy id="t4" />}
                >
                    test222
                </ScrollReceiver>
            </ScrollSpy>
            <ScrollSpy id="t3" style={assign({}, Styles.content, {background:"#2ECC71"})}>
               test333
            </ScrollSpy>
        </div>
    </SemanticUI>
    )
    }
}

export default Index;

class MenuItem extends Component
{
    render()
    {
        const { active, isOnScreen, style, ...reset } = this.props;
        let activeStyle = null;
        if (active) {
            activeStyle = Styles.active;
        }
        return (<div style={assign(
            {},
            Styles.link,
            style,
            activeStyle
        )} {...reset}  />);
    }
}

const Styles = {
    content: {
        height:"500px",
        textAlign:"center",
        paddingTop: "10%",
        fontSize: "4rem",
        color:"#fff"
    },
    link: {
        display: "inline-block",
        padding: "0.3rem 0.5rem",
        fontSize: "2rem",
        color: "#fff",
        marginRight: "10px",
        opacity: "0.5",
        cursor: "pointer",
    },
    active: {
        opacity: 1
    },
    body: reactStyle({
        margin: 0
    }, 'body'),
    nav: {
        position:'fixed',
        background:'#fff',
        textAlign:'center',
        width:"100%",
        padding: "10px 0"
    }
};

