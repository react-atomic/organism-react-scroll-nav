'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'reshow-flux';
import getScrollInfo from 'get-scroll-info';
import {isOnScreen} from 'get-window-offset';
import getOffset from 'getoffset';

import dispatcher, {scrollDispatch} from '../scrollDispatcher';
import testForPassiveScroll from '../testForPassiveScroll';

let incNum = 0;

class ScrollStore extends ReduceStore
{
  getInitialState()
  {
      const self = this;
      self.spys = Immutable.Set();
      self.margins = Immutable.Set();
      if ('undefined' !== typeof window) {
          const win = window;
          if (win.addEventListener) {
            const supportsPassive = testForPassiveScroll();
            win.addEventListener(
                'scroll',
                self.scrollMonitor.bind(self),
                supportsPassive ? { passive: true } : false
            );
            win.addEventListener('resize', self.scrollMonitor.bind(self));
          } else {
            win.attachEvent('onscroll', self.scrollMonitor.bind(self));
            win.attachEvent('resize', self.scrollMonitor.bind(self));
          }
          setTimeout(()=>{
                self.scrollMonitor.call(self);
          });
          setTimeout(()=>{
                //for lazy content 
                self.scrollMonitor.call(self);
          },777);
      }
      return Immutable.Map({
        scrollDelay: 50,
        scrollMargin: 0
      });
  }

  scrollMonitor()
  {
    clearTimeout(this._scrollTimeout);
    const self = this;
    const delay = self.getState().get('scrollDelay');
    self._scrollTimeout = setTimeout(()=>{
        self._triggerScroll.call(self);
    }, delay);
  }

  _triggerScroll()
  {
    const defaultMargin = this.getState().get('scrollMargin');
    let scroll = getScrollInfo();
    let actives = { mdefault: null };
    let offsetCache = {};
    let scrollTop = scroll.top + defaultMargin;
    let arrMonitorScroll = [];
    let margin;
    this.spys.forEach((node)=>{
        let pos = getOffset(node.getOffsetEl());
        if (node.props.monitorScroll) {
            if (scrollTop>=pos.top && scrollTop<pos.bottom) {
                actives.mdefault = node.id;
            }
            arrMonitorScroll.push(node);    
        }
        margin = (node.scrollMargin) ? node.scrollMargin : defaultMargin;
        pos = isOnScreen(pos, scroll, margin);
        offsetCache[node.id] = pos;
    });
    this.margins.forEach((margin)=>{
        scrollTop = scroll.top + margin;
        actives['m'+margin] = null;
        arrMonitorScroll.every((node)=>{
            let pos = offsetCache[node.id];
            if (scrollTop>=pos.top && scrollTop<pos.bottom) {
                actives['m'+margin] = node.id;
                return false;
            }
            return true;
        });
    });
    this.margins = this.margins.clear();
    scrollDispatch({
       ...actives,
       nodes  : offsetCache,
       scroll : scroll
    });
  }

  getNode(id)
  {
      let item = false;
      this.spys.some((node)=>{
          if (id===node.id) {
             item = node;
          }
          return item;
      });
      return item;
  }

  getOffset(id)
  {
      const nodes = this.getMap('nodes');
      if (nodes[id]) {
        return nodes[id];
      }
  }
  
  attach(node)
  {
      if (!node.id) {
          if (node.props.id) {
              node.id = node.props.id;
          } else {
              node.id = 'spy-'+incNum;
              incNum++;
          }
      }
      this.spys = this.spys.add(node);
      return node.id;
  }

  detach(node)
  {
      this.spys = this.spys.remove(node);
  }

  addMargin(num)
  {
      this.margins = this.margins.add(num);
  }

  deleteMargin(num)
  {
      this.margins = this.margins.remove(num);
  }

  reduce (state, action)
  {
    return state.merge( action );
  }

}

export default new ScrollStore(dispatcher);
