// @flow

import { createStore } from 'redux';
import reducers from 'app/src/modules/rootReducer';

export default () => createStore(reducers);
