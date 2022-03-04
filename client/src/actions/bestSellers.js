import { GOT_BEST_SELLERS } from './types';

import axios from 'axios';

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
