import { GOT_SALE_IMAGES } from './types.js';

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
