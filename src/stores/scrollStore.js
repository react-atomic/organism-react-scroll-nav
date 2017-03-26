'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'reduce-flux';
import dispatcher, {dispatch} from '../actions/dispatcher';
import getScrollInfo from 'get-scroll-info';
import { assign } from 'react-atomic-molecule';
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
            win.addEventListener('scroll', self.scrollMonitor.bind(self));
            win.addEventListener('resize', self.scrollMonitor.bind(self));
          } else {
            win.attachEvent('onscroll', self.scrollMonitor.bind(self));
            win.attachEvent('resize', self.scrollMonitor.bind(self));
          }
          setTimeout(()=>{
                self.scrollMonitor.call(self);
          });
          setTimeout(()=>{
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
    let scroll = getScrollInfo(null, 0);
    let actives = { mdefault: null };
    let offsetCache = {};
    let scrollTop = scroll.top + defaultMargin;
    let arrTestScrollTo = [];
    let margin;
    this.spys.forEach((node)=>{
        let pos = node.getOffset();
        if (node.props.testScrollTo) {
            if (scrollTop>=pos.top && scrollTop<pos.bottom) {
                actives.mdefault = node.id;
            }
            arrTestScrollTo.push(node);    
        }
        margin = (node.scrollMargin) ? node.scrollMargin : defaultMargin;
        pos.atTop = pos.bottom <= scroll.top + margin;
        pos.atRight = pos.left >= scroll.right - margin;
        pos.atBottom = pos.top >= scroll.bottom - margin;
        pos.atLeft = pos.right <= scroll.left + margin;
        pos.isOnScreen = !(
            pos.atTop
            || pos.atRight
            || pos.atBottom
            || pos.atLeft
        );
        offsetCache[node.id] = pos;
    });
    this.margins.forEach((margin)=>{
        scrollTop = scroll.top + margin;
        actives['m'+margin] = null;
        arrTestScrollTo.every((node)=>{
            let pos = offsetCache[node.id];
            if (scrollTop>=pos.top && scrollTop<pos.bottom) {
                actives['m'+margin] = node.id;
                return false;
            }
            return true;
        });
    });
    this.margins = this.margins.clear();
    dispatch(assign(
        actives,
        {
           nodes  : offsetCache,
           scroll : scroll
        }
    ));
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
      const node = this.getNode(id);
      if (node) {
        return node.getOffset();
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

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new ScrollStore(dispatcher);
export default instance;
