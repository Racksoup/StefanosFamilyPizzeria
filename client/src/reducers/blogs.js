import { GOT_ALL_BLOGS } from '../actions/types';

const initialState = {
  blogs: [],
};

export default function blogs(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GOT_ALL_BLOGS:
      return {
        ...state,
        blogs: payload,
      };
    default:
      return state;
  }
}
