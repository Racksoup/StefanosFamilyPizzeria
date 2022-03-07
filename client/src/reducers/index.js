import { combineReducers } from 'redux';
import menuItems from './menuItems';
import blogs from './blogs';

export default combineReducers({
  menuItems,
  blogs,
});
