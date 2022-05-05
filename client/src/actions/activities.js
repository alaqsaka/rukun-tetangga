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
