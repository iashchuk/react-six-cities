import * as types from "./types.js";
import { parseLocations } from "../../helpers/parse-locations.js";
import { parseOffers } from "../../helpers/parse-offers.js";
import { parseCities } from "../../helpers/parse-cities.js";
import { modifyOffer } from "../../helpers/modify-offer.js";

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
