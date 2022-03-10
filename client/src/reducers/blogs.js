import {
  GOT_ALL_BLOGS,
  SET_ONE_BLOG,
  SET_SEARCHED_BLOGS,
  UPDATED_BLOG,
  REMOVED_BLOG,
  CREATED_BLOG,
} from '../actions/types';

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
    case UPDATED_BLOG:
      return {
        ...state,
        blogs: [...state.blogs.filter((item) => item._id !== payload._id), payload],
      };

    case REMOVED_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((item) => item._id !== payload._id),
      };
    case CREATED_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, payload],
      };
    default:
      return state;
  }
}
