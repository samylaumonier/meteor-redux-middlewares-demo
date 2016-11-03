import { Meteor } from 'meteor/meteor';
import { startSubscription } from 'meteor-redux-middlewares';
import { Posts } from '/imports/api/collections/posts';

export const HOME_POSTS_SUBSCRIPTION_READY = 'HOME_POSTS_SUBSCRIPTION_READY';
export const HOME_POSTS_SUBSCRIPTION_CHANGED = 'HOME_POSTS_SUBSCRIPTION_CHANGED';
export const HOME_POSTS_SUB = 'home.posts';

export const loadHomePosts = () =>
  startSubscription({
    key: HOME_POSTS_SUB,
    subscribe: () => Meteor.subscribe(HOME_POSTS_SUB),
    get: () => Posts.find().fetch(),
  });
