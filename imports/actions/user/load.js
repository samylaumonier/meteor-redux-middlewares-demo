import { Meteor } from 'meteor/meteor';

export const USER = 'USER';
export const USER_CHANGED = 'USER_CHANGED';

export function loadUser() {
  return {
    type: USER,
    meteor: {
      get: () => Meteor.user() || {},
    },
  };
}
