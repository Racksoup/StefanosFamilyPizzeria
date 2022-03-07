import { GOT_ALL_BLOGS } from '../actions/types';

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
