'use strict';

import {Dispatcher} from 'reshow-flux';

const instance = new Dispatcher();
export default instance;

export const dispatch = instance.dispatch.bind(instance);
