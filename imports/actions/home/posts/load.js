import { Meteor } from 'meteor/meteor';

import { Posts } from '/imports/api/collections/posts';

export const HOME_POSTS_SUBSCRIPTION = 'HOME_POSTS_SUBSCRIPTION';
export const HOME_POSTS_SUBSCRIPTION_READY = 'HOME_POSTS_SUBSCRIPTION_READY';
export const HOME_POSTS_SUBSCRIPTION_CHANGED = 'HOME_POSTS_SUBSCRIPTION_CHANGED';
export const HOME_POSTS_SUBSCRIPTION_STOPPED = 'HOME_POSTS_SUBSCRIPTION_STOPPED';

export function loadHomePosts() {
  return {
    type: HOME_POSTS_SUBSCRIPTION,
    meteor: {
      subscribe: () => Meteor.subscribe('home.posts'),
      get: () => Posts.find().fetch(),
    },
  };
}
