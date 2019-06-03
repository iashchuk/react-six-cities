import * as types from "./types";

const initialState = {
  isAuthorizationRequired: true
};

export const authReducer = (state = initialState, { type }) => {
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

    default:
      return state;
  }
};
