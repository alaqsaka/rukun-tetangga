import { combineReducers } from 'redux';

import profile from './profile/reducer';

const createRootReducer = () =>
  combineReducers({
    profile
  });

export default createRootReducer;
