import * as types from "./types.js";
import { request } from "../../api/index.js";

import { loadingStart, loadingFinish, setLoadingError } from "../fetch/actions.js";
import { updateOffer } from "../offer/actions.js";
import { history } from "../index";
import { parseLocations } from "../../helpers/parse-locations.js";
import { parseOffers } from "../../helpers/parse-offers.js";
import { parseCities } from "../../helpers/parse-cities.js";
import { modifyOffer } from "../../helpers/modify-offer.js";

const FORBIDDEN_REQUEST_STATUS = 403;

export const setRedirect = (error) => {
  if (error.response) {
    if (error.response.status === FORBIDDEN_REQUEST_STATUS) {
      history.push(`/login`);
    }
  }
};

export const getDataAsync = () => (dispatch, _getState, api) => {
  dispatch(loadingStart());
  return api
    .get(request.get.hotels())
    .then((response) => {
      dispatch(loadHotels(response.data));
      dispatch(loadingFinish());
    })
    .catch((error) => {
      const loadingError = (error.response && error.response.data) || {};
      dispatch(setLoadingError(`getData: ${loadingError.error || error.message}`));
    });
};

export const getFavoriteAsync = () => (dispatch, _getState, api) => {
  dispatch(loadingStart());
  return api
    .get(request.get.favorite())
    .then((response) => {
      dispatch(loadFavorite(response.data));
      dispatch(loadingFinish());
    })
    .catch((error) => {
      const loadingError = (error.response && error.response.data) || {};
      dispatch(setLoadingError(`getFavorite: ${loadingError.error || error.message}`));
    });
};

export const setFavoriteAsync = (hotelId, status) => (dispatch, _getState, api) => {
  const { currentOffer } = _getState().offer;
  const { offers } = _getState().hotels;
  return api
    .post(request.post.favorite(hotelId, status))
    .then((response) => {
      if (response.data) {
        if (offers) {
          dispatch(updateOffers(response.data));
        }
        if (currentOffer && currentOffer.id === hotelId) {
          dispatch(updateOffer(response.data));
        }
      }
    })
    .catch((error) => {
      setRedirect(error);
    });
};

export const loadHotels = (hotels) => {
  const cities = parseCities(hotels);
  const locations = parseLocations(cities, hotels);
  const offers = parseOffers(cities, hotels);

  return {
    type: types.GET_HOTELS,
    payload: { cities, locations, offers }
  };
};

export const setCity = (city) => {
  return {
    type: types.SET_CITY,
    payload: city
  };
};

export const updateOffers = (offer) => {
  return {
    type: types.UPDATE_OFFERS,
    payload: modifyOffer(offer)
  };
};

export const loadFavorite = (favorite) => {
  const cities = parseCities(favorite);
  const modifiedFavorite = parseOffers(cities, favorite);

  return {
    type: types.GET_FAVORITE,
    payload: modifiedFavorite
  };
};
