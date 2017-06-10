import { combineReducers } from 'redux';

import { home } from './home';
import { items } from './items';
import { user } from './user';

const rootReducer = combineReducers({
  home,
  items,
  user,
});

export default rootReducer;
