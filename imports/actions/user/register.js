import { Accounts } from 'meteor/accounts-base';

export function register() {
  return () => {
    Accounts.createUser({
      username: Random.id(10).toLowerCase(),
      password: Random.id(),
    }, err => {
      if (err) {
        console.log(err);
      }
    });
  };
}
