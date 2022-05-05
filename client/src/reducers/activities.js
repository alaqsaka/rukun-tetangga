export default (activities = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE_CATEGORY':
      return activities;
    default:
      return activities;
  }
};
