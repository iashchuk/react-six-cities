import * as types from "./types";

const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {
    setAuth: null,
    checkAuth: null
  }
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        errors: { ...state.errors, checkAuth: null, setAuth: null }
      };

    case types.SET_AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        errors: { ...state.errors, setAuth: payload }
      };

    case types.SET_CHECK_AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        errors: { ...state.errors, checkAuth: payload }
      };

    default:
      return state;
  }
};
