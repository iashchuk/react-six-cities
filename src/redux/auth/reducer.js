import * as types from "./types";

const initialState = {
  isAuthorizationRequired: false,
  isAuthenticated: false,
  id: null,
  email: null,
  name: null,
  avatarUrl: null,
  isPro: null
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_AUTH_REQUIRED:
      return {
        ...state,
        isAuthorizationRequired: true
      };

    case types.REMOVE_AUTH_REQUIRED:
      return {
        ...state,
        isAuthorizationRequired: false
      };

    case types.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        id: payload.id,
        email: payload.email,
        name: payload.name,
        avatarUrl: payload.avatarUrl,
        isPro: payload.isPro
      };

    default:
      return state;
  }
};
