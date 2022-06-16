/* eslint-disable no-unused-vars */
import * as api from '../api';
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  GET_COMMENTS
  // LIKE
} from '../constants/actionTypes';

// Action Creators
export const getActivities = (community_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchActivities(community_id);
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createActivity = (activity) => async (dispatch) => {
  try {
    const { data } = await api.createActivity(activity);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateActivity = (id, activity) => async (dispatch) => {
  try {
    const { data } = await api.updateActivity(id, activity);
    // API ini mengembalikan data kegiatan yang udah di-update

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteActivity = (id) => async (dispatch) => {
  try {
    await api.deleteActivity(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likeActivity = (id) => async (dispatch) => {
  try {
    let accessToken = JSON.parse(localStorage.getItem('profile'));
    accessToken = accessToken.accessToken;

    const data = await api.likeActivity(id, accessToken).then((response) => {
      alert(response.data);
      console.log(response);
    });

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getComments = (postId) => async (dispatch) => {
  try {
    const { data } = await api.getComments(postId);

    dispatch({ type: GET_COMMENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
