import {
  HOME_POSTS_SUBSCRIPTION_READY,
  HOME_POSTS_SUBSCRIPTION_CHANGED,
  HOME_POSTS_SUBSCRIPTION_STOPPED
} from '/imports/actions/home/posts/load';

const initialState = {
  ready: false,
  posts: [],
  postsSubscriptionStopped: false,
};

export function home(state = initialState, action) {
  switch (action.type) {
    case HOME_POSTS_SUBSCRIPTION_READY:
      return {
        ...state,
        ready: action.ready,
        postsSubscriptionStopped: false,
      };
    case HOME_POSTS_SUBSCRIPTION_CHANGED:
      return {
        ...state,
        posts: action.data,
      };
    case HOME_POSTS_SUBSCRIPTION_STOPPED:
      return {
        ...state,
        postsSubscriptionStopped: true,
      };
    default:
      return state;
  }
}
