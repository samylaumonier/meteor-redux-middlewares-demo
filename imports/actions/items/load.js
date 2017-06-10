import { Meteor } from 'meteor/meteor';
import { startSubscription } from 'meteor-redux-middlewares';
import { Items } from '/imports/api/collections/items';

export const ITEMS_SUBSCRIPTION_READY = 'ITEMS_SUBSCRIPTION_READY';
export const ITEMS_SUBSCRIPTION_CHANGED = 'ITEMS_SUBSCRIPTION_CHANGED';
export const ITEMS_SUB = 'items';

export const loadItems = () =>
  startSubscription({
    key: ITEMS_SUB,
    subscribe: () => Meteor.subscribe(ITEMS_SUB),
    get: () => Items.find().fetch(),
  });
