import { CREATED_SALE_IMAGE, GOT_SALE_IMAGES, REMOVED_SALE_IMAGE } from '../actions/types';

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
    case REMOVED_SALE_IMAGE:
      return {
        ...state,
        saleImages: state.saleImages.filter((item) => item._id !== payload._id),
      };
    case CREATED_SALE_IMAGE:
      return {
        ...state,
        saleImages: [...state.saleImages, payload],
      };
    default:
      return state;
  }
}
