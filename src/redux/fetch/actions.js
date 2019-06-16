import * as types from "./types.js";
import { loadHotels, updateOffers, loadFavorite } from "../hotels/actions.js";
import { updateOffer } from "../offer/actions.js";
import { loadOffer, loadComments } from "../offer/actions.js";
import { history } from "../index";

const FORBIDDEN_REQUEST_STATUS = 403;

export const setRedirect = (error) => {
  if (error.response) {
    if (error.response.status === FORBIDDEN_REQUEST_STATUS) {
      history.push(`/login`);
    }
  }
};

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
        dispatch(updateOffer(response.data));
      }
    })
    .catch((error) => {
      setRedirect(error);
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
