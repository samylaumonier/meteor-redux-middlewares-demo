import { Meteor } from 'meteor/meteor';
import { startSubscription } from 'meteor-redux-middlewares';
import { Posts } from '/imports/api/collections/posts';

export const HOME_POSTS_SUBSCRIPTION_READY = 'HOME_POSTS_SUBSCRIPTION_READY';
export const HOME_POSTS_SUBSCRIPTION_CHANGED = 'HOME_POSTS_SUBSCRIPTION_CHANGED';
const subName = 'home.posts';

export const loadHomePosts = () =>
  startSubscription({
    key: subName,
    subscribe: () => Meteor.subscribe(subName),
    get: () => Posts.find().fetch(),
  });
