import {
  DELETE,
  FETCH_ALL,
  CREATE,
  UPDATE,
  LIKE,
  GET_COMMENTS
} from '../constants/actionTypes';

export default (activities = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...activities, action.payload];
    case UPDATE:
    case LIKE:
      return activities.map((activity) =>
        activity._id === action.payload._id ? action.payload : activity
      );
    case GET_COMMENTS:
      return action.payload;
    case DELETE:
      return activities.filter((activity) => activity._id !== action.payload);
    default:
      return activities;
  }
};
