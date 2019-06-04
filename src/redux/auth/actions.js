import * as types from "./types";
import { parseAuthData } from "../../helpers/parseAuthData.js";

export const loginAsync = (email, password) => (dispatch, _getState, api) => {
  return api.post(`/login`, { email, password }).then((response) => {
    dispatch(login(response.data));
  });
};

export const login = (authData) => {
  const credentials = parseAuthData(authData);
  return {
    type: types.LOGIN,
    payload: credentials
  };
};

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
