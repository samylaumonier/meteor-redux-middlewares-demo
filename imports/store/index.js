import { sources, subscriptions } from 'meteor/samy:redux-middlewares';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '/imports/reducers';

const logger = createLogger();

const store = createStore(rootReducer, compose(
  applyMiddleware(sources, subscriptions, thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
