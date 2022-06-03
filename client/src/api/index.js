import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });
//const url = 'http://localhost:5000/activities';

export const fetchActivities = () => API.get(`/posts`);
export const createActivity = (newActivity) => API.post('/posts', newActivity);
export const getComments = (postId) => API.get(`/comments/${postId}`);

// fungsi untuk mengupdate kegiatan, ngirim id sama update-an dari yang user masukin ke form
// manggil api dari /activities/:id -> ada di routes folder server
export const updateActivity = (id, updatedActivity) =>
  API.patch(`/activities/${id}`, updatedActivity);

// fungsi untuk menghapus kegiatan, ngirim id kegiatan sebagai params
// manggil api dari /activities/:id -> ada di routes folder server
export const deleteActivity = (id) => API.delete(`/posts/${id}`);
export const fetchPost = (id) => API.get(`/posts/${id}`);
// fungsi untuk like kegiatan, ngirim id kegiatan sebagai params
// manggil api dari /activities/:id -> ada di routes folder server
export const likeActivity = (id) => API.patch(`/activities/${id}/likeActivity`);
export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);
export const lengkapi_data_ketua = (formData, id) =>
  API.patch(`/user/lengkapi-data-ketua/${id}`, formData);
