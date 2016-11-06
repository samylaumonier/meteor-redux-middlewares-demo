import { Meteor } from 'meteor/meteor';

import { Posts } from '/imports/api/collections/posts';

function getTitle() {
  return `Post ${Random.id(5).toUpperCase()}`;
}

Meteor.startup(() => {
  if (Posts.find().count() === 0) {
    for (let i = 0; i < 20; i += 1) {
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
