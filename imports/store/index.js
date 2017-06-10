import { Tracker } from 'meteor/tracker';
import { applyMiddleware, createStore, compose } from 'redux';
import createReactiveMiddlewares from 'meteor/samy:redux-middlewares';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '/imports/reducers';

const {
  sources,
  subscriptions,
} = createReactiveMiddlewares(Tracker);

const logger = createLogger();

const store = createStore(rootReducer, compose(
  applyMiddleware(sources, subscriptions, thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
