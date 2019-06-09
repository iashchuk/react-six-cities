import * as types from "./types.js";
import { loadHotels } from "../hotels/actions.js";
import { loadOffer, loadComments } from "../offer/actions.js";

export const getData = () => (dispatch, _getState, api) => {
  dispatch(loadingStart());
  return api.get(`/hotels`).then((response) => {
    dispatch(loadHotels(response.data));
    dispatch(loadingFinish());
  });
};

export const getOffer = (id) => (dispatch, _getState, api) => {
  dispatch(loadingStart());
  return api.get(`/hotels`).then((response) => {
    dispatch(loadOffer(id, response.data));
    dispatch(loadingFinish());
  });
};

export const getComments = (id) => (dispatch, _getState, api) => {
  dispatch(loadingStart());
  return api.get(`/comments/${id}`).then((response) => {
    dispatch(loadComments(response.data));
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
