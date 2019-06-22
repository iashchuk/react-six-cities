import { authReducer } from "./reducer.js";
import * as types from "./types.js";

const user = { email: `test@test.ru`, avatarUrl: `img/avatar.jpg` };
const authError = `Some authorization error`;

const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {
    setAuth: null,
    checkAuth: null
  }
};

describe(`LOGIN action`, () => {
  it(`should set auth required`, () => {
    const state = authReducer(
        { ...initialState },
        { type: types.LOGIN, payload: user }
    );
    expect(state).toEqual({
      ...initialState,
      isAuthenticated: true,
      user,
      errors: { ...state.errors, checkAuth: null, setAuth: null }
    });
  });
});

describe(`SET_AUTH_ERROR action`, () => {
  it(`should set check auth error`, () => {
    const state = authReducer(
        { ...initialState },
        { type: types.SET_AUTH_ERROR, payload: authError }
    );
    expect(state).toEqual({
      ...initialState,
      isAuthenticated: false,
      user: {},
      errors: { ...state.errors, setAuth: authError }
    });
  });
});

describe(`SET_CHECK_AUTH_ERROR action`, () => {
  it(`should set check auth error`, () => {
    const state = authReducer(
        { ...initialState },
        { type: types.SET_CHECK_AUTH_ERROR, payload: authError }
    );
    expect(state).toEqual({
      ...initialState,
      isAuthenticated: false,
      user: {},
      errors: { ...state.errors, checkAuth: authError }
    });
  });
});
