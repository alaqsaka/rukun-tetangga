import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
//const url = 'http://localhost:5000/activities';

export const fetchActivities = () => API.get(`/activities`);
export const createActivity = (newActivity) =>
  API.post('/activities', newActivity);

// fungsi untuk mengupdate kegiatan, ngirim id sama update-an dari yang user masukin ke form
// manggil api dari /activities/:id -> ada di routes folder server
export const updateActivity = (id, updatedActivity) =>
  API.patch(`/activities/${id}`, updatedActivity);

// fungsi untuk menghapus kegiatan, ngirim id kegiatan sebagai params
// manggil api dari /activities/:id -> ada di routes folder server
export const deleteActivity = (id) => API.delete(`/activities/${id}`);

// fungsi untuk like kegiatan, ngirim id kegiatan sebagai params
// manggil api dari /activities/:id -> ada di routes folder server
export const likeActivity = (id) => API.patch(`/activities/${id}/likeActivity`);
export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);
