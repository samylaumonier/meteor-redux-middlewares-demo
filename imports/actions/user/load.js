import { Meteor } from 'meteor/meteor';
import { actions } from 'meteor-redux-middlewares';

export const USER = 'USER';
export const USER_REACTIVE_SOURCE_CHANGED = 'USER_REACTIVE_SOURCE_CHANGED';

export const loadUser = () => actions.registerReactiveSource({
  key: 'user',
  get: () => Meteor.user() || {},
});
