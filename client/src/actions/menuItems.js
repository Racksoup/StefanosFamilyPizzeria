import {
  GOT_ALL_MENU_ITEMS,
  GOT_PIZZA_MENU_ITEMS,
  GOT_PASTA_MENU_ITEMS,
  GOT_SALAD_MENU_ITEMS,
  GOT_DESERT_MENU_ITEMS,
  GOT_BEST_SELLERS,
  UPDATE_MENU_ITEM,
  REMOVED_MENU_ITEM,
  CREATE_MENU_ITEM,
} from '../actions/types';

import axios from 'axios';

export const getAllMenuItems = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/menuitems/');
    dispatch({
      type: GOT_ALL_MENU_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPizzaMenuItems = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/menuitems/category/pizza');
    dispatch({
      type: GOT_PIZZA_MENU_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPastaMenuItems = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/menuitems/category/pasta');
    dispatch({
      type: GOT_PASTA_MENU_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSaladMenuItems = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/menuitems/category/salad');
    dispatch({
      type: GOT_SALAD_MENU_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getDesertMenuItems = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/menuitems/category/desert');
    dispatch({
      type: GOT_DESERT_MENU_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getBestSellers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/menuitems/best-seller');
    dispatch({
      type: GOT_BEST_SELLERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateMenuItemFunc = (item, file) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const oldItem = await axios.get(`/api/menuitems/${item._id}`);
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
      await axios.delete(`/api/menuitems/deleteImage/${oldItem.data.image_filename}`);
      const newImage = await axios.post('/api/menuitems/uploadimage', data, fileConfig);
      item.image_filename = newImage.data.file.filename;
    }
    if (item) {
      await axios.put(`/api/menuitems/${item._id}`, item, config);
      const res = await axios.get(`/api/menuitems/${item._id}`);
      console.log(res);
      dispatch({
        type: UPDATE_MENU_ITEM,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const removeMenuItem = (item) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/menuitems/${item._id}`);
    await axios.delete(`api/menuitems/deleteimage/${item.image_filename}`);
    dispatch({
      type: REMOVED_MENU_ITEM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createMenuItem = (item, file) => async (dispatch) => {
  let data = new FormData();
  if (file) {
    data.append('file', file);
  }
  data.append('title', item.title);
  data.append('text', item.text);
  data.append('category', item.category);
  data.append('bestSeller', item.bestSeller);
  data.append('price', item.price);

  try {
    const config = {
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      },
    };
    const res = await axios.post('api/menuitems', data, config);
    dispatch({
      type: CREATE_MENU_ITEM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
