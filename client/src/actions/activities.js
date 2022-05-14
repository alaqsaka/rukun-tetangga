import * as api from '../api';

// Action Creators
export const getActivities = () => async (dispatch) => {
  try {
    const { data } = await api.fetchActivities();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createActivity = (activity) => async (dispatch) => {
  try {
    const { data } = await api.createActivity(activity);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateActivity = (id, activity) => async (dispatch) => {
  try {
    const { data } = await api.updateActivity(id, activity);
    // API ini mengembalikan data kegiatan yang udah di-update

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteActivity = (id) => async (dispatch) => {
  try {
    await api.deleteActivity(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error);
  }
};
