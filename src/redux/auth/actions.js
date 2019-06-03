import * as types from "./types";

export const setAuthRequired = () => {
  return {
    type: types.SET_AUTH_REQUIRED
  };
};

export const removeAuthRequired = () => {
  return {
    type: types.REMOVE_AUTH_REQUIRED
  };
};
