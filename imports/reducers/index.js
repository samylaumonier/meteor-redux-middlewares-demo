import { combineReducers } from 'redux';

import { home } from './home';
import { user } from './user';

const rootReducer = combineReducers({
  home,
  user,
});

export default rootReducer;
