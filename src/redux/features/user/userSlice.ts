import { AuthProvider, signInWithPopup } from 'firebase/auth';
import isEqual from 'lodash/isEqual';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Role, ROLES } from '../../../enums/role';
import { auth } from '../../../lib/firebase';
import { discordCodePrefix } from '../../../utils/constants';
import { jsCookie } from '../../../utils/jsCookie';
import { axiosIns } from '../../api/axiosInstance';

type UserState = {
  auth: AuthenticatedUser;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

type Credentials = {
  email: string;
  password: string;
};

export const ExtraAuthProviders = {
  DISCORD: 'discord',
} as const;

export type ExtraAuthProvider =
  (typeof ExtraAuthProviders)[keyof typeof ExtraAuthProviders];

export type AuthenticatedUser = {
  [key: string]: string;
  // uid: string;
  // email: string;
  // id: string;
  role: Role;
  accessToken: string;
};

export const EMPTY_USER_AUTH: AuthenticatedUser = {
  accessToken: '',
  role: ROLES.VISITOR,
};
const initialState: UserState = {
  auth: EMPTY_USER_AUTH,
  isLoading: false,
  isError: false,
  error: null,
};

/**
 * The function `getDiscordCodeFromMessage` listens for a message event and resolves with the Discord
 * code extracted from the event data if it contains the specified prefix.
 * @param {string} prefix - The `prefix` parameter is a string that represents the prefix used in the
 * message to identify the Discord code.
 * @returns The function `getDiscordCodeFromMessage` returns a Promise that resolves to a string.
 */
const getDiscordCodeFromMessage = (prefix: string): Promise<string> => {
  return new Promise<string>((resolve) => {
    const handleMessageEvent = (event: MessageEvent) => {
      if (typeof event?.data !== 'string' || !event?.data.includes(prefix))
        return;

      const discordCode = event?.data?.split(prefix)?.pop();
      if (discordCode) {
        window.removeEventListener('message', handleMessageEvent);
        resolve(discordCode);
      }
    };

    window.addEventListener('message', handleMessageEvent, false);
  });
};

/**
 * The function sets authentication cookies using the payload data.
 * @param {AuthenticatedUser} payload - The payload parameter is an object of type IAuthenticatedUser.
 */
export const setAuthCookies = (payload: AuthenticatedUser) => {
  Object.keys(payload).forEach((key) => {
    if (isEqual(payload, EMPTY_USER_AUTH)) {
      jsCookie.remove(key);
    } else {
      jsCookie.set(key, payload[key], { expires: 1 });
    }
  });
};

export const createNewUserWithEmailAndPassword = createAsyncThunk(
  'user/createUser',
  async ({ email, password }: Credentials) => {
    const data = await axiosIns.post('/auth', {
      email,
      password,
    });
    const validUser: AuthenticatedUser = {
      accessToken: data?.data?.data?.accessToken,
      role: data?.data?.data?.data?.role,
    };
    return validUser;
  }
);

export const signInUserWithEmailAndPassword = createAsyncThunk(
  'user/signInUser',
  async ({ email, password }: Credentials) => {
    const data = await axiosIns.post('/auth/login', {
      email,
      password,
    });
    const validUser: AuthenticatedUser = {
      accessToken: data?.data?.data?.accessToken,
      role: data?.data?.data?.data?.role,
    };
    return validUser;
  }
);

export const signInUserWithSocialCredential = createAsyncThunk(
  'user/signInUser/social',
  async (provider: AuthProvider | ExtraAuthProvider) => {
    let result;
    if (typeof provider === 'string') {
      switch (provider) {
        case ExtraAuthProviders.DISCORD:
          result = await axiosIns.post('/auth/discord/redirect', {
            code: await getDiscordCodeFromMessage(discordCodePrefix),
          });
          break;

        default:
          throw new Error('Invalid provider');
      }
    } else {
      const { user, providerId } = await signInWithPopup(auth, provider);
      result = await axiosIns.post(
        `/auth/login/${providerId?.replace('.com', '')}`,
        {
          email: user?.email,
        }
      );
    }

    const validUser: AuthenticatedUser = {
      accessToken: result?.data?.data?.accessToken,
      role: result?.data?.data?.data?.role,
    };

    return validUser;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<AuthenticatedUser>) => {
      state.auth = action.payload;
      setAuthCookies(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    // createNewUserWithEmailAndPassword
    builder
      .addCase(createNewUserWithEmailAndPassword.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
        state.auth = initialState.auth;
        setAuthCookies(initialState.auth);
      })
      .addCase(createNewUserWithEmailAndPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.auth = action.payload;
        setAuthCookies(action.payload);
      })
      .addCase(createNewUserWithEmailAndPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message as string;
        state.auth = initialState.auth;
        setAuthCookies(initialState.auth);
      });
    // signInUserWithEmailAndPassword
    builder
      .addCase(signInUserWithEmailAndPassword.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
        state.auth = initialState.auth;
        setAuthCookies(initialState.auth);
      })
      .addCase(signInUserWithEmailAndPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.auth = action.payload;
        setAuthCookies(action.payload);
      })
      .addCase(signInUserWithEmailAndPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message as string;
        state.auth = initialState.auth;
        setAuthCookies(initialState.auth);
      });
    // signInUserSocial
    builder
      .addCase(signInUserWithSocialCredential.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
        state.auth = initialState.auth;
        setAuthCookies(initialState.auth);
      })
      .addCase(signInUserWithSocialCredential.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.auth = action.payload;
        setAuthCookies(action.payload);
      })
      .addCase(signInUserWithSocialCredential.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message as string;
        state.auth = initialState.auth;
        setAuthCookies(initialState.auth);
      });
  },
});
export const { setUserAuth, setLoading } = userSlice.actions;
export const userReducer = userSlice.reducer;
