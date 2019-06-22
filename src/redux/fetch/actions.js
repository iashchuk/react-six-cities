import * as types from "./types.js";

export const loadingStart = () => {
  return {
    type: types.LOADING_START
  };
};

export const loadingFinish = () => {
  return {
    type: types.LOADING_FINISH
  };
};

export const setLoadingError = (error) => {
  return {
    type: types.SET_LOADING_ERROR,
    payload: error
  };
};
