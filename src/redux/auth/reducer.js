import * as types from "./types";

const initialState = {
  isAuthorizationRequired: false,
  isAuthenticated: false,
  user: {},
  authError: null
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
        user: payload,
        authError: null
      };

    case types.SET_AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        authError: payload
      };

    default:
      return state;
  }
};
