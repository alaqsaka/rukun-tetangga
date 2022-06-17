import axios from 'axios';

const API = axios.create({ baseURL: 'http://rukuntetangga-admin.my.id' });
//const url = 'http://localhost:5000/activities';

export const fetchActivities = (community_id) =>
  API.get(`/posts/${community_id}`);
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
export const likeActivity = (id, accessToken) =>
  API.post(`/likes`, { PostId: id }, { headers: { accessToken: accessToken } });
export const signIn = (formData) => API.post(`/auth/login`, formData);
export const signUp = (formData) => API.post(`/auth`, formData);
export const lengkapi_data_ketua = (formData) =>
  API.post(`/lengkapi-data`, formData);
export const lengkapi_data_warga = (formData) =>
  API.post(`/lengkapi-data/warga`, formData);

export const getDataWarga = (community_id) =>
  API.get(`/auth/data-warga/${community_id}`);

export const getCommunityDetails = (community_id) =>
  API.get(`/community/${community_id}`);
