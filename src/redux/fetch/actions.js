import * as types from "./types.js";
import { loadHotels, updateOffers, loadFavorite } from "../hotels/actions.js";
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

export const getFavorite = () => (dispatch, _getState, api) => {
  dispatch(loadingStart());
  return api.get(`/favorite`).then((response) => {
    dispatch(loadFavorite(response.data));
    dispatch(loadingFinish());
  });
};

export const setFavoriteAsync = (hotelId, status) => (
    dispatch,
    _getState,
    api
) => {
  return api
    .post(`/favorite/${hotelId}/${status}`)
    .then((response) => {
      if (response.data) {
        dispatch(updateOffers(response.data));
      }
    })
    .catch((error) => {
      throw error;
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
