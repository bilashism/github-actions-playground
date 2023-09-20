import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';

export const API_BASE_URL = 'http://localhost:8000/api/v1';
export const BEARER_PREFIX = 'Bearer';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = (getState() as RootState).user.auth;
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['auth', 'comment', 'currency'],

  endpoints: () => ({}),
});
