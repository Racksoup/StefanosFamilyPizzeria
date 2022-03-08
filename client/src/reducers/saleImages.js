import { GOT_SALE_IMAGES } from '../actions/types';

const initialState = {
  saleImages: [],
};

export default function saleImages(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GOT_SALE_IMAGES:
      return {
        ...state,
        saleImages: payload,
      };
    default:
      return state;
  }
}
