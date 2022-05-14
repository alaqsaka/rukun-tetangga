import axios from 'axios';

const url = 'http://localhost:5000/activities';

export const fetchActivities = () => axios.get(url);
export const createActivity = (newActivity) => axios.post(url, newActivity);

// fungsi untuk mengupdate kegiatan, ngirim id sama update-an dari yang user masukin ke form
// manggil api dari /activities/:id -> ada di routes folder server
export const updateActivity = (id, updatedActivity) =>
  axios.patch(`${url}/${id}`, updatedActivity);

// fungsi untuk menghapus kegiatan, ngirim id kegiatan sebagai params
// manggil api dari /activities/:id -> ada di routes folder server
export const deleteActivity = (id) => axios.delete(`${url}/${id}`);

// fungsi untuk like kegiatan, ngirim id kegiatan sebagai params
// manggil api dari /activities/:id -> ada di routes folder server
export const likeActivity = (id) => axios.patch(`${url}/${id}/likeActivity`);
