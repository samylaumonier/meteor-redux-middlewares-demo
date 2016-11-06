import { USER_REACTIVE_SOURCE_CHANGED } from '/imports/actions/user/load';

const initialState = {
  ready: false,
};

export function user(state = initialState, action) {
  switch (action.type) {
    case USER_REACTIVE_SOURCE_CHANGED:
      return {
        ...action.payload,
        ready: true,
      };
    default:
      return state;
  }
}
