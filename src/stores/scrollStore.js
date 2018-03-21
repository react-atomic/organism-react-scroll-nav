'use strict';

import {Set, Map} from 'immutable';
import {ReduceStore} from 'reshow-flux';
import getScrollInfo from 'get-scroll-info';
import {isOnScreen} from 'get-window-offset';
import getOffset from 'getoffset';
import get from 'get-object-value';

import dispatcher, {scrollDispatch} from '../scrollDispatcher';
import testForPassiveScroll from '../testForPassiveScroll';

let incNum = 0;

class scrollStore extends ReduceStore
{
  storeName = 'delayScroll';
  isInitEvent = false;

  getInitialState()
  {
      this.spys = Set();
      this.margins = Set();
      return Map({
        scrollDelay: 50,
        scrollMargin: 0
      });
  }

  initEvent()
  {
      if ('undefined' !== typeof window) {
          const self = this;
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
          setTimeout( ()=> self.scrollMonitor.call(self));

          //for lazy content 
          setTimeout( ()=> self.scrollMonitor.call(self), 777);
          self.isInitEvent = true;
      }
  }

  removeEvent()
  {
        const self = this;
        win.removeEventListener(
            'scroll',
            self.scrollMonitor.bind(self)
        );
        win.removeEventListener('resize', self.scrollMonitor.bind(self));
        self.isInitEvent = false;
  }

  scrollMonitor()
  {
    clearTimeout(this._scrollTimeout);
    const self = this;
    const delay = self.getState().get('scrollDelay');
    self._scrollTimeout = setTimeout( ()=> self.triggerScroll.call(self), delay);
  }

  triggerScroll()
  {
    const defaultMargin = this.getState().get('scrollMargin');
    let scroll = getScrollInfo();
    let actives = { mdefault: null };
    let offsetCache = {};
    let scrollTop = scroll.top + defaultMargin;
    let arrMonitorScroll = [];
    let margin;
    this.spys.forEach( node => {
        const nodeEl = node.getOffsetEl();
        let pos = getOffset(nodeEl);
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
       nodes : offsetCache,
       scroll,
       storeName: this.storeName
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

  getOffset(id, callName)
  {
      const nodes = this.getMap('nodes');
      return nodes[id];
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
      if (!this.isInitEvent) {
        this.initEvent();
      }
      return node.id;
  }

  detach(node)
  {
      this.spys = this.spys.remove(node);
      if (!this.spys.size) {
        this.removeEvent();
      }
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
    const storeName = get(action, ['storeName']);
    if (storeName === this.storeName) {
        return state.merge( action );
    } else {
        return state;
    }
  }

}

export default new scrollStore(dispatcher);
export {scrollStore};
