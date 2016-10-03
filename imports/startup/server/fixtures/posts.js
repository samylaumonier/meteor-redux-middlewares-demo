import { Meteor } from 'meteor/meteor';

import { Posts } from '/imports/api/collections/posts';

Meteor.startup(() => {
  if (Posts.find().count() === 0) {
    for (let i = 0; i < 20; i++) {
      Posts.insert({
        title: getTitle(),
      });
    }
  }

  setInterval(Meteor.bindEnvironment(() => {
    Posts.find().fetch().forEach(post => {
      Posts.update(post._id, {
        $set: {
          title: getTitle(),
        },
      });
    });
  }), 2 * 1000);
});

function getTitle() {
  return `Post ${Random.id(5).toUpperCase()}`;
}
