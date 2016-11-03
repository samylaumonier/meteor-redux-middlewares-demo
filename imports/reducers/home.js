import {
  HOME_POSTS_SUBSCRIPTION_READY,
  HOME_POSTS_SUBSCRIPTION_CHANGED,
} from '/imports/actions/home/posts/load';

const initialState = {
  ready: false,
  posts: [],
};

export function home(state = initialState, action) {
  switch (action.type) {
    case HOME_POSTS_SUBSCRIPTION_READY:
      return {
        ...state,
        ready: action.payload.ready,
      };
    case HOME_POSTS_SUBSCRIPTION_CHANGED:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}
