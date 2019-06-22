import * as types from "./types.js";
import {
  loadingStart,
  loadingFinish,
  setLoadingError
} from "../fetch/actions.js";
import { parseOffer } from "../../helpers/parse-offer.js";
import { parseComments } from "../../helpers/parse-comments.js";
import { modifyOffer } from "../../helpers/modify-offer.js";

export const getOfferAsync = (id) => (dispatch, _getState, api) => {
  dispatch(loadingStart());
  return api
    .get(`/hotels`)
    .then((response) => {
      dispatch(loadOffer(id, response.data));
      dispatch(loadingFinish());
    })
    .catch((error) => {
      const loadingError = (error.response && error.response.data) || {};
      dispatch(
          setLoadingError(`getOffer: ${loadingError.error || error.message}`)
      );
    });
};

export const getCommentsAsync = (id) => (dispatch, _getState, api) => {
  dispatch(loadingStart());
  return api
    .get(`/comments/${id}`)
    .then((response) => {
      dispatch(loadComments(response.data));
      dispatch(loadingFinish());
    })
    .catch((error) => {
      const loadingError = (error.response && error.response.data) || {};
      dispatch(
          setLoadingError(`getComments: ${loadingError.error || error.message}`)
      );
    });
};

export const sendReviewAsync = (hotelId, rating, comment) => (
    dispatch,
    _getState,
    api
) => {
  return api
    .post(`/comments/${hotelId}`, { rating, comment })
    .then((response) => {
      if (response.data) {
        dispatch(updateComments(response.data));
      }
    })
    .catch((error) => {
      const formError = (error.response && error.response.data) || {};
      dispatch(setReviewFormError(formError.error || error.message));
    });
};

export const loadOffer = (id, hotels) => {
  const offer = parseOffer(id, hotels);

  return {
    type: types.LOAD_OFFER,
    payload: offer
  };
};

export const loadComments = (data) => {
  const comments = parseComments(data);

  return {
    type: types.LOAD_COMMENTS,
    payload: comments
  };
};

export const updateOffer = (offer) => {
  return {
    type: types.UPDATE_OFFER,
    payload: modifyOffer(offer)
  };
};

export const updateComments = (data) => {
  const comments = parseComments(data);
  return {
    type: types.UPDATE_COMMENTS,
    payload: comments
  };
};

export const setReviewFormError = (error) => {
  return {
    type: types.SET_REVIEW_FORM_ERROR,
    payload: error
  };
};
