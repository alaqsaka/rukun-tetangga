import { combineReducers } from 'redux';
import activities from './activities';
import auth from './auth';
export default combineReducers({
  activities,
  auth
});
