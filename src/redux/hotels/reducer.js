import * as types from "./types";

const initialState = {
  cities: [],
  locations: [],
  offers: [],
  city: null
};

export const hotelsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_HOTELS:
      return {
        ...state,
        cities: payload.cities,
        locations: payload.locations,
        offers: payload.offers,
        city: payload.cities[0]
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
