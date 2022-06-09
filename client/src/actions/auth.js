/* eslint-disable no-unused-vars */
import * as api from '../api';
import {
  AUTH,
  GET_DATA_WARGA,
  LENGKAPI_DATA_KETUA,
  LENGKAPI_DATA_WARGA
} from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in the user ...
    const { data } = await api.signIn(formData);
    if (data.error) {
      alert(data.error);
    } else {
      dispatch({ type: AUTH, data });

      history.push('/');
    }
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up the user ...
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push('/lengkapi-data');
  } catch (error) {
    console.log(error);
  }
};

export const lengkapi_data_ketua = (formData, history) => async (dispatch) => {
  try {
    console.log(formData);
    console.log('action lengkapi data');
    const { data } = await api.lengkapi_data_ketua(formData);
    let localStorageData = JSON.parse(localStorage.getItem('profile'));
    console.log(localStorageData.result);

    console.log(localStorageData);
    localStorageData.result = { ...localStorageData.result, ...formData };
    console.log(localStorageData);
    localStorage.setItem('profile', JSON.stringify(localStorageData));
    dispatch({ type: LENGKAPI_DATA_KETUA, data });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const lengkapi_data_warga = (formData, history) => async (dispatch) => {
  try {
    console.log(formData);
    console.log('action lengkapi data');
    const { data } = await api.lengkapi_data_warga(formData);
    let localStorageData = JSON.parse(localStorage.getItem('profile'));
    console.log(localStorageData.result);

    console.log(localStorageData);
    localStorageData.result = { ...localStorageData.result, ...formData };
    console.log(localStorageData);
    localStorage.setItem('profile', JSON.stringify(localStorageData));
    dispatch({ type: LENGKAPI_DATA_WARGA, data });
    history.push('/');
    console.log('action kelar');
  } catch (error) {
    console.log(error);
  }
};

export const get_data_warga = (community_id) => async (dispatch) => {
  console.log(community_id);
  try {
    const { data } = await api.getDataWarga(community_id);
    console.log('get_data_warga ', data);
    dispatch({ type: GET_DATA_WARGA, data });
  } catch (error) {
    console.log(error);
  }
};
