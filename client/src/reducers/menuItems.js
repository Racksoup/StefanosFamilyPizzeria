import {
  GOT_ALL_MENU_ITEMS,
  GOT_PIZZA_MENU_ITEMS,
  GOT_PASTA_MENU_ITEMS,
  GOT_SALAD_MENU_ITEMS,
  GOT_DESERT_MENU_ITEMS,
  GOT_BEST_SELLERS,
} from '../actions/types';

const initialState = {
  allMenuItems: [],
  pizzaMenuItems: [],
  pastaMenuItems: [],
  saladMenuItems: [],
  desertMenuItems: [],
  bestSellers: [],
};

export default function bestSellers(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GOT_ALL_MENU_ITEMS:
      return {
        ...state,
        allMenuItems: payload,
      };
    case GOT_PIZZA_MENU_ITEMS:
      return {
        ...state,
        pizzaMenuItems: payload,
      };
    case GOT_PASTA_MENU_ITEMS:
      return {
        ...state,
        pastaMenuItems: payload,
      };
    case GOT_SALAD_MENU_ITEMS:
      return {
        ...state,
        saladMenuItems: payload,
      };
    case GOT_DESERT_MENU_ITEMS:
      return {
        ...state,
        desertMenuItems: payload,
      };
    case GOT_BEST_SELLERS:
      return {
        ...state,
        bestSellers: payload,
      };
    default:
      return state;
  }
}
