export default (activities = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...activities, action.payload];
    default:
      return activities;
  }
};
