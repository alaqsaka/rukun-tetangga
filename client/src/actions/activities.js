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
