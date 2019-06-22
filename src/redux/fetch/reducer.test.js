import { fetchReducer } from "./reducer.js";
import * as types from "./types.js";

const initialState = {
  isLoading: false,
  error: null
};

const loadingError = `Some fetch error`;

describe(`LOADING_START action`, () => {
  it(`should set check auth error`, () => {
    const state = fetchReducer(
        { ...initialState },
        { type: types.LOADING_START }
    );
    expect(state).toEqual({
      ...initialState,
      isLoading: true
    });
  });
});

describe(`LOADING_FINISH action`, () => {
  it(`should set check auth error`, () => {
    const state = fetchReducer(
        { ...initialState },
        { type: types.LOADING_FINISH }
    );
    expect(state).toEqual({
      ...initialState,
      isLoading: false
    });
  });
});

describe(`SET_LOADING_ERROR action`, () => {
  it(`should set check auth error`, () => {
    const state = fetchReducer(
        { ...initialState },
        { type: types.SET_LOADING_ERROR, payload: loadingError }
    );
    expect(state).toEqual({
      ...initialState,
      error: loadingError
    });
  });
});
