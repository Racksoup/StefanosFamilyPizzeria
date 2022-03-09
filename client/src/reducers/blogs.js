import { GOT_ALL_BLOGS, SET_ONE_BLOG, SET_SEARCHED_BLOGS } from '../actions/types';

const initialState = {
  blogs: [],
  blog: null,
  searchedBlogs: null,
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
    case SET_SEARCHED_BLOGS:
      return {
        ...state,
        searchedBlogs: payload,
      };
    default:
      return state;
  }
}
