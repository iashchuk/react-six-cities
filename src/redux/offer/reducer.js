import * as types from "./types";

const initialState = {
  currentOffer: null,
  comments: []
};

export const offerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_OFFER:
      return {
        ...state,
        currentOffer: payload
      };

    case types.LOAD_COMMENTS:
      return {
        ...state,
        comments: payload
      };

    case types.UPDATE_OFFER:
      return {
        ...state,
        currentOffer: {
          ...state.currentOffer,
          isFavorite: !state.currentOffer.isFavorite
        }
      };

    default:
      return state;
  }
};
