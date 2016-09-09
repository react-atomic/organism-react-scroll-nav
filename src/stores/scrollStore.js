'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import dispatcher from '../actions/dispatcher';
import getScrollInfo from 'get-scroll-info';

class ScrollStore extends ReduceStore
{
  getInitialState()
  {
      this.spys = Immutable.Set();
      this.margins = Immutable.Set(['default']);
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
    let info = getScrollInfo(null, 0);
    let scrollTop;
    let actives = {};
    this.margins.toJS().forEach((margin)=>{
        if ('default' === margin) {
            margin = this.getState().get('scrollMargin');
        }
        scrollTop = info.scrollTop+ margin;
        this.spys.toJS().every((node)=>{
            let pos = node.getOffset();
            if (scrollTop>=pos.top && scrollTop<pos.bottom) {
                actives[margin] = node.id;
                return false;
            }
            return true;
        });
    });
    console.log(actives);
  }

  update(state, action)
  {

  }
  
  attach(node)
  {
    this.spys = this.spys.add(node);
  }

  detach(node)
  {
    this.spys = this.spys.remove(node);
  }

  addMergin()
  {

  }

  reduce (state, action)
  {
        switch (action.type)
        {
            case 'update':
               return this.update(state, action);
            case 'config/set':
               return state.merge(action.params);
            default:
                return state;
        }
  }

}

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new ScrollStore(dispatcher);
export default instance;
