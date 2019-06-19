import * as types from "./types";

const initialState = {
  currentOffer: null,
  comments: [],
  errors: {
    sendForm: null
  }
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
    case types.UPDATE_COMMENTS:
      return {
        ...state,
        comments: payload,
        errors: {
          ...state.errors,
          sendForm: null
        }
      };

    case types.SET_REVIEW_FORM_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          sendForm: payload
        }
      };

    default:
      return state;
  }
};
