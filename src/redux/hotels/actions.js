import * as types from "./types.js";
import { parseLocations } from "../../helpers/parseLocations.js";
import { parseOffers } from "../../helpers/parseOffers.js";
import { parseCities } from "../../helpers/parseCities.js";

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
