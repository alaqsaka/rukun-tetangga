import axios from 'axios';

const url = 'http://localhost:5000/activities';

export const fetchActivities = () => axios.get(url);
