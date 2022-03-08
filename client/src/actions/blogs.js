import { GOT_ALL_BLOGS, SET_ONE_BLOG } from '../actions/types';

import axios from 'axios';

export const getAllBlogs = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/blogs/');
    dispatch({
      type: GOT_ALL_BLOGS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setOneBlog = (blog) => (dispatch) => {
  dispatch({
    type: SET_ONE_BLOG,
    payload: blog,
  });
};
