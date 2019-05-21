import { types } from "./types";

import { getLocations, getOffers } from "../../../mocks/helpers";

export const fillLocations = () => {
  const locations = getLocations();
  return {
    type: types.FILL_LOCATIONS,
    payload: locations
  };
};

export const fillOffers = (city) => {
  const offers = getOffers(city);
  return {
    type: types.FILL_OFFERS,
    payload: { city, offers }
  };
};
