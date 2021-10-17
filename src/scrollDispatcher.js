"use strict";

import { Dispatcher } from "reshow-flux";

const instance = new Dispatcher();
export default instance;

export const scrollDispatch = instance.dispatch.bind(instance);
