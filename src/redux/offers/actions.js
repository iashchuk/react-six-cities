import * as types from "./types";

import { getLocations, getOffers } from "../../helpers";

export const fillLocations = () => {
  const locations = getLocations();
  return {
    type: types.GET_LOCATIONS,
    payload: locations
  };
};

export const fillOffers = (city) => {
  const offers = getOffers(city);
  return {
    type: types.GET_OFFERS,
    payload: { city, offers }
  };
};
