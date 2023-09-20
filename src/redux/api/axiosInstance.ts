import axios from 'axios';

import { store } from '../store';

import { API_BASE_URL, BEARER_PREFIX } from './apiSlice';

export const axiosIns = axios.create({
  baseURL: API_BASE_URL,
  // Other default configurations, such as headers, can be added here
});

// Add an interceptor to set the authorization header
axiosIns.interceptors.request.use((config) => {
  const state = store.getState(); // Get the Redux state
  const { accessToken } = state.user.auth;

  // If an accessToken exists, add the authorization header
  if (accessToken) {
    config.headers.Authorization = `${BEARER_PREFIX} ${accessToken}`;
  }

  return config;
});
