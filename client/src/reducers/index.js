import { combineReducers } from 'redux';
import menuItems from './menuItems';
import blogs from './blogs';
import saleImages from './saleImages';

export default combineReducers({
  menuItems,
  blogs,
  saleImages,
});
