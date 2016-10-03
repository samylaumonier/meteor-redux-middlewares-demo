import { Meteor } from 'meteor/meteor';

import { Posts } from '/imports/api/collections/posts';

Meteor.publish('home.posts', () => Posts.find());
