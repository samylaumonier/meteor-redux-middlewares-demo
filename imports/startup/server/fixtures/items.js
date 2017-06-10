import { Meteor } from 'meteor/meteor';

import { Items } from '/imports/api/collections/items';

function getTitle() {
  return `Item ${Random.id(5).toUpperCase()}`;
}

Meteor.startup(() => {
  if (Items.find().count() === 0) {
    for (let i = 0; i < 20; i += 1) {
      Items.insert({
        title: getTitle(),
      });
    }
  }

  setInterval(Meteor.bindEnvironment(() => {
    Items.find().fetch().forEach(item => {
      Items.update(item._id, {
        $set: {
          title: getTitle(),
        },
      });
    });
  }), 2 * 1000);
});
