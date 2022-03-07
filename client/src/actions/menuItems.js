import {
  GOT_ALL_MENU_ITEMS,
  GOT_PIZZA_MENU_ITEMS,
  GOT_PASTA_MENU_ITEMS,
  GOT_SALAD_MENU_ITEMS,
  GOT_DESERT_MENU_ITEMS,
  GOT_BEST_SELLERS,
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
