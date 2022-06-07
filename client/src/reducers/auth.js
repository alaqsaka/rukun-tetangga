/* eslint-disable no-unused-vars */
import {
  AUTH,
  LOGOUT,
  LENGKAPI_DATA_KETUA,
  LENGKAPI_DATA_WARGA
} from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };
    case LENGKAPI_DATA_KETUA:
      //const localStorageData = localStorage.getItem('profile');
      //console.log(localStorageData);
      //console.log('dispatch reducer lengkapi data');
      return { ...state, authData: action?.data };
    case LENGKAPI_DATA_WARGA:
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};

export default authReducer;
