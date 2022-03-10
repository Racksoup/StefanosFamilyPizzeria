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
    case UPDATE_MENU_ITEM:
      return {
        ...state,
        allMenuItems: [...state.allMenuItems.filter((item) => item._id !== payload._id), payload],
      };
    case REMOVED_MENU_ITEM:
      return {
        ...state,
        allMenuItems: state.allMenuItems.filter((item) => item._id !== payload._id),
      };
    case CREATE_MENU_ITEM:
      return {
        ...state,
        allMenuItems: [...state.allMenuItems, payload],
      };
    default:
      return state;
  }
}
