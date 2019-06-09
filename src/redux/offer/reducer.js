import * as types from "./types";

const initialState = {
  offer: null,
  city: ``,
  comments: []
};

export const offerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_OFFER:
      return {
        ...state,
        offer: payload,
        city: payload.city
      };

    case types.LOAD_COMMENTS:
      return {
        ...state,
        comments: payload
      };

    default:
      return state;
  }
};
