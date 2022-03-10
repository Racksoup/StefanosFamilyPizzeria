import { GOT_SALE_IMAGES, REMOVED_SALE_IMAGE, CREATED_SALE_IMAGE } from './types.js';

import axios from 'axios';

export const getSaleImages = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/saleimages');
    dispatch({
      type: GOT_SALE_IMAGES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeSaleImage = (item) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/saleimages/${item._id}`);
    await axios.delete(`api/saleimages/deleteimage/${item.image_filename}`);
    dispatch({
      type: REMOVED_SALE_IMAGE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createSaleImage = (file) => async (dispatch) => {
  let data = new FormData();
  if (file) {
    data.append('file', file);
  }
  try {
    const config = {
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      },
    };
    const res = await axios.post('api/saleimages', data, config);
    dispatch({
      type: CREATED_SALE_IMAGE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
