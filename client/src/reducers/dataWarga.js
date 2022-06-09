/* eslint-disable no-unused-vars */
import { GET_DATA_WARGA } from '../constants/actionTypes';

const dataWargaReducer = (data = [], action) => {
  switch (action.type) {
    case GET_DATA_WARGA:
      return action.data;
    default:
      return data;
  }
};

export default dataWargaReducer;
