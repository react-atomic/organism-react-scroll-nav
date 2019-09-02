import React, {PureComponent} from 'react';

import {expect} from 'chai';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ScrollReceiver from '../ScrollReceiver';

describe('Test ScrollReceiver', ()=>{ 
   class TestEl extends PureComponent 
   {
        render()
        {
            return <div />;
        }
   }

   it('test simple ScrollReceiver', ()=>{
       const vDom = <ScrollReceiver container={TestEl} />;
       const uFake  = mount(vDom);
       expect(uFake.html()).to.be.equal('<div></div>');
   });
});
