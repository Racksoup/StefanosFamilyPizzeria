import { GOT_ALL_BLOGS, SET_ONE_BLOG } from '../actions/types';

const initialState = {
  blogs: [],
  blog: null,
};

export default function blogs(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GOT_ALL_BLOGS:
      return {
        ...state,
        blogs: payload,
      };
    case SET_ONE_BLOG:
      return {
        ...state,
        blog: payload,
      };
    default:
      return state;
  }
}
