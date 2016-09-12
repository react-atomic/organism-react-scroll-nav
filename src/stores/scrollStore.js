'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import dispatcher, {dispatch} from '../actions/dispatcher';
import getScrollInfo from 'get-scroll-info';

class ScrollStore extends ReduceStore
{
  getInitialState()
  {
      this.spys = Immutable.Set();
      this.margins = Immutable.Set();
      if (window) {
          if (window.addEventListener) {
            window.addEventListener('scroll', this.scrollMonitor.bind(this));
          } else {
            window.attachEvent('onscroll', this.scrollMonitor.bind(this));
          }
      }
      return Immutable.Map({
        scrollDelay: 50,
        scrollMargin: 50
      });
  }

  scrollMonitor(e)
  {
    clearTimeout(this._scrollTimeout);
    const self = this;
    const delay = self.getState().get('scrollDelay');
    self._scrollTimeout = setTimeout(()=>{
        self._triggerScroll.call(self,e);
    }, delay);
  }

  _triggerScroll()
  {
    let scroll = getScrollInfo(null, 0);
    let actives = {};
    let offsetCache = {};
    let margin = this.getState().get('scrollMargin');
    let scrollTop = scroll.top+ margin;
    this.spys.toJS().forEach((node)=>{
        let pos = node.getOffset();
        if (scrollTop>=pos.top && scrollTop<pos.bottom) {
            actives['default'] = node.id;
        }
        pos.isElementOnScreen = !(pos.top > scroll.bottom
            || pos.bottom < scroll.top
            || pos.right < scroll.left
            || pos.left > scroll.right);
        offsetCache[node.id] = pos;
    });
    this.margins.forEach((margin)=>{
        scrollTop = scroll.top+ margin;
        this.spys.every((node)=>{
            let pos = offsetCache[node.id];
            if (scrollTop>=pos.top && scrollTop<pos.bottom) {
                actives[margin] = node.id;
                return false;
            }
            return true;
        });
    });
    dispatch({
       nodes  : offsetCache,
       actives: actives,
       scroll : scroll
    });
  }

  getOffset(id)
  {
      let offset = false;
      this.spys.some((node)=>{
          if (id===node.id) {
             offset = node.getOffset();
          }
          return offset;
      });
      return offset;
  }
  
  attach(node)
  {
      this.spys = this.spys.add(node);
  }

  detach(node)
  {
      this.spys = this.spys.remove(node);
  }

  addMargin(num)
  {
      this.margins.add(num);
  }

  deleteMargin(num)
  {
      this.margins.remove(num);
  }

  reduce (state, action)
  {
    return state.merge(
        action.actives,
        {
            nodes : action.nodes,
            scroll: action.scroll
        }
    );
  }

}

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new ScrollStore(dispatcher);
export default instance;
