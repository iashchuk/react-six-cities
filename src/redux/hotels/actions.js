import * as types from "./types.js";
import { parseLocations } from "../../helpers/parseLocations.js";
import { parseOffers } from "../../helpers/parseOffers.js";

export const getData = () => (dispatch, _getState, api) => {
  api.get(`/hotels`).then((response) => {
    dispatch(loadHotels(response.data));
  });
};

export const loadHotels = (hotels) => {
  const cities = [...new Set(hotels.map((item) => item.city.name))];
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
