import { Meteor } from 'meteor/meteor';
import { Posts } from '/imports/api/collections/posts';
import { HOME_POSTS_SUB } from '/imports/actions/home/posts/load';

Meteor.publish(HOME_POSTS_SUB, () => Posts.find());
