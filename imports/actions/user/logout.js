import { Meteor } from 'meteor/meteor';

export function logout() {
  return () => {
    Meteor.logout();
  };
}
