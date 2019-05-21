import { types } from "./types";

const initialState = {
  locations: [],
  city: `Amsterdam`,
  cards: []
};

export const offersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FILL_OFFERS:
      return {
        ...state,
        city: payload.city,
        cards: payload.offers
      };

    case types.FILL_LOCATIONS:
      return {
        ...state,
        locations: payload
      };

    default:
      return state;
  }
};
