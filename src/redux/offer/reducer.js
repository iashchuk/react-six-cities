import * as types from "./types";

const initialState = {
  offer: null,
  city: ``
};

export const offerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_OFFER:
      return {
        ...state,
        offer: payload,
        city: payload.city
      };

    default:
      return state;
  }
};
