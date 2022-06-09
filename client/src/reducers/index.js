import { combineReducers } from 'redux';
import activities from './activities';
import auth from './auth';
import dataWargaReducer from './dataWarga';
export default combineReducers({
  activities,
  auth,
  dataWargaReducer
});
