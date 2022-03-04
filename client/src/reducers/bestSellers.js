import { GOT_BEST_SELLERS } from '../actions/types';

const initialState = {
  bestSellers: [],
};

export default function bestSellers(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GOT_BEST_SELLERS:
      return {
        ...state,
        bestSellers: payload,
      };
    default:
      return state;
  }
}
