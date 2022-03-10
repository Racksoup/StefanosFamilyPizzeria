import {
  GOT_ALL_BLOGS,
  SET_ONE_BLOG,
  SET_SEARCHED_BLOGS,
  UPDATED_BLOG,
  CREATED_BLOG,
  REMOVED_BLOG,
} from '../actions/types';

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

export const setSearchedBlogs = (blogs) => (dispatch) => {
  dispatch({
    type: SET_SEARCHED_BLOGS,
    payload: blogs,
  });
};

export const updateBlog = (item, file) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const oldItem = await axios.get(`/api/blogs/${item._id}`);
    if (file !== '' && file !== null && file !== undefined) {
      let data = new FormData();
      data.append('file', file);
      const fileConfig = {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        },
      };
      await axios.delete(`/api/blogs/deleteImage/${oldItem.data.image_filename}`);
      const newImage = await axios.post('/api/blogs/uploadimage', data, fileConfig);
      item.image_filename = newImage.data.file.filename;
    }
    if (item) {
      await axios.put(`/api/blogs/${item._id}`, item, config);
      const res = await axios.get(`/api/blogs/${item._id}`);
      console.log(res);
      dispatch({
        type: UPDATED_BLOG,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const removeBlog = (item) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/blogs/${item._id}`);
    await axios.delete(`api/blogs/deleteimage/${item.image_filename}`);
    dispatch({
      type: REMOVED_BLOG,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createBlog = (item, file) => async (dispatch) => {
  let data = new FormData();
  if (file) {
    data.append('file', file);
  }
  data.append('title', item.title);
  data.append('text', item.text);
  data.append('category', item.category);
  data.append('poster', item.poster);
  data.append('date', item.date);
  data.append('favorite', item.favorite);

  try {
    const config = {
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      },
    };
    const res = await axios.post('api/blogs', data, config);
    dispatch({
      type: CREATED_BLOG,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
