import * as types from "./types.js";
import { loadHotels } from "../hotels/actions.js";

export const getData = () => (dispatch, _getState, api) => {
  dispatch(loadingStart());
  return api.get(`/hotels`).then((response) => {
    dispatch(loadHotels(response.data));
    dispatch(loadingFinish());
  });
};

const loadingStart = () => {
  return {
    type: types.LOADING_START
  };
};

const loadingFinish = () => {
  return {
    type: types.LOADING_FINISH
  };
};
