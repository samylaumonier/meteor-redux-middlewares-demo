import { Meteor } from 'meteor/meteor';
import { Items } from '/imports/api/collections/items';
import { ITEMS_SUB } from '/imports/actions/items/load';

Meteor.publish(ITEMS_SUB, () => Items.find());
