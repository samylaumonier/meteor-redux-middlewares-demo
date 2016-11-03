import { USER_CHANGED } from '/imports/actions/user/load';

const initialState = {
  ready: false,
};

export function user(state = initialState, action) {
  switch (action.type) {
    case USER_CHANGED:
      return {
        ...action.payload,
        ready: true,
      };
    default:
      return state;
  }
}
