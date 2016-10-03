import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  setInterval(Meteor.bindEnvironment(() => {
    Meteor.users.find().forEach(user => {
      Meteor.users.remove(user._id);
    });
  }), 5 * 60 * 1000);
});
