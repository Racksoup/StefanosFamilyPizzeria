import { combineReducers } from 'redux';
import auth from './auth';
import menuItems from './menuItems';
import blogs from './blogs';
import saleImages from './saleImages';

export default combineReducers({
  auth,
  menuItems,
  blogs,
  saleImages,
});
