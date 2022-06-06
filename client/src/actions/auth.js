/* eslint-disable no-unused-vars */
import * as api from '../api';
import { AUTH, LENGKAPI_DATA_KETUA } from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in the user ...
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up the user ...
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const lengkapi_data_ketua =
  (formData, id, history) => async (dispatch) => {
    try {
      console.log(formData);
      console.log('action lengkapi data');
      const { data } = await api.lengkapi_data_ketua(formData, id);
      let localStorageData = JSON.parse(localStorage.getItem('profile'));
      console.log(localStorageData.result);

      localStorageData.result['community_address'] = formData.community_address;
      localStorageData.result['community_id'] = formData.community_id;
      localStorageData.result['community_nama'] = formData.community_nama;

      console.log(localStorageData);
      localStorage.setItem('profile', JSON.stringify(localStorageData));
      dispatch({ type: LENGKAPI_DATA_KETUA, data });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
