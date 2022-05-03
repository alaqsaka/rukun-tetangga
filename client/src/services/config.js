/* eslint-disable no-alert */
import axios from 'axios';
import { getToken } from '../utils';

// API URL
const API_URL = process.env.REACT_APP_API_URL;

const fullURL = (path) => {
  return `${API_URL}/${path}`;
};

const isToken = getToken();

axios.interceptors.request.use(
  (config) => {
    if (isToken) {
      config.headers.Authorization = `Token ${isToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      if (isToken) localStorage.removeItem('token');
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);

export const handleNetworkError = (error) => {
  if (error.message === 'Network request failed') {
    alert(
      'Kesalahan Jaringan',
      'Silakan periksa koneksi Anda dan coba kembali.',
      'iconNoInet'
    );
  }
  throw error;
};

export const handleCommonError = (error) => {
  if (error && error.data.msg === 'invalid token') {
    alert(
      'Session kamu telah habis',
      'Silakan login kembali dengan akun kamu yg telah terdaftar'
    );
    throw new Error({
      logout: true
    });
  } else {
    throw error;
  }
};

const post =
  (api) =>
  (data, params, timemout = true) => {
    return axios.post(
      fullURL(api),
      data,
      {
        method: 'POST',
        headers: {
          Authorization: `Token ${isToken}`
        },
        params
      },
      timemout
    );
  };

const postWithoutHeader =
  (api) =>
  (data, timemout = true) => {
    return axios.post(
      fullURL(api),
      data,
      {
        method: 'POST'
      },
      timemout
    );
  };

const putWithSlug =
  (api) =>
  (slug, data, timemout = true) => {
    return axios.patch(
      `${fullURL(api)}${slug}/`,
      data,
      {
        method: 'POST',
        headers: {
          Authorization: `Token ${isToken}`
        }
      },
      timemout
    );
  };

const put =
  (api) =>
  (data, timemout = true) => {
    return axios.put(
      fullURL(api),
      data,
      {
        method: 'POST',
        headers: {
          Authorization: `Token ${isToken}`
        }
      },
      timemout
    );
  };

const get =
  (api) =>
  (params, timemout = true) => {
    return axios(
      fullURL(api),
      {
        method: 'GET',
        headers: {
          Authorization: `Token ${isToken}`
        },
        params
      },
      { handleNetworkError, handleCommonError },
      timemout
    );
  };

const getWithSlug =
  (api) =>
  (slug, params, timemout = true) => {
    return axios(
      `${fullURL(api)}${slug}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Token ${isToken}`
        },
        params
      },
      { handleNetworkError, handleCommonError },
      timemout
    );
  };

const deleteWithSlug =
  (api) =>
  (slug, data, timeout = true) => {
    return axios.delete(
      `${fullURL(api)}${slug}/`,
      data,
      {
        headers: {
          Authorization: `Token ${isToken}`
        }
      },
      timeout
    );
  };

export {
  postWithoutHeader,
  post,
  get,
  getWithSlug,
  put,
  putWithSlug,
  deleteWithSlug
};
