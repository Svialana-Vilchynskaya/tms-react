import { combineReducers } from 'redux';

import basketReducer from './basketReducer';
import loadReducer from './loadReducer';
import productsReducer from './productReducer';
import valueBYNReducer from './valueBYNReducer';

const reducers = combineReducers({
  ...basketReducer,
  ...loadReducer,
  ...productsReducer,
  ...valueBYNReducer,
});

export default reducers;