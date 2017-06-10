import { STOP_SUBSCRIPTION } from 'meteor/samy:redux-middlewares';

import {
  ITEMS_SUBSCRIPTION_READY,
  ITEMS_SUBSCRIPTION_CHANGED,
  ITEMS_SUB,
} from '/imports/actions/items/load';

const initialState = {
  ready: false,
  docs: [],
};

export function items(state = initialState, action) {
  switch (action.type) {
    case ITEMS_SUBSCRIPTION_READY:
      return {
        ...state,
        ready: action.payload.ready,
      };
    case ITEMS_SUBSCRIPTION_CHANGED:
      return {
        ...state,
        docs: action.payload,
      };
    case STOP_SUBSCRIPTION:
      return action.payload === ITEMS_SUB
        ? initialState
        : state;
    default:
      return state;
  }
}
