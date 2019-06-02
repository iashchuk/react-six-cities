import * as types from "./types";

const initialState = {
  isLoading: false
};

export const fetchReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.LOADING_START:
      return {
        ...state,
        isLoading: true
      };

    case types.LOADING_FINISH:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
