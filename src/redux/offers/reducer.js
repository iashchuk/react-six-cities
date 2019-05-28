import * as types from "./types";

const initialState = {
  locations: [],
  city: `Amsterdam`,
  cards: []
};

export const offersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_OFFERS:
      return {
        ...state,
        city: payload.city,
        cards: payload.offers
      };

    case types.GET_LOCATIONS:
      return {
        ...state,
        locations: payload
      };

    default:
      return state;
  }
};
