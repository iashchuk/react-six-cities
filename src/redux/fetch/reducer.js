import * as types from "./types";

const initialState = {
  hotels: []
};

export const fetchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_HOTELS:
      return {
        ...state,
        hotels: payload
      };

    default:
      return state;
  }
};
