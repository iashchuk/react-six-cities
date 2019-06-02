import * as types from "./types";

const initialState = {
  locations: [],
  locationsCoords: [],
  offers: [],
  city: null
};

export const hotelsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_HOTELS:
      return {
        ...state,
        locations: payload.locations,
        locationsCoords: payload.locationsCoords,
        offers: payload.offers,
        city: payload.locations[0]
      };

    case types.SET_CITY:
      return {
        ...state,
        city: payload
      };

    default:
      return state;
  }
};
