export default (activities = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...activities, action.payload];
    case 'UPDATE':
      return activities.map((activity) =>
        activity._id === action.payload._id ? action.payload : activity
      );
    case 'DELETE':
      return activities.filter((activity) => activity._id !== action.payload);
    default:
      return activities;
  }
};
