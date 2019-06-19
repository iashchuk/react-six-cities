import * as types from "./types";

const initialState = {
  isLoading: false,
  error: null
};

export const fetchReducer = (state = initialState, { type, payload }) => {
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

    case types.SET_LOADING_ERROR:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
};
