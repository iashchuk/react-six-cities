import * as types from "./types.js";

export const getData = () => (dispatch, _getState, api) => {
  return api.get(`/hotels`).then((response) => {
    dispatch(loadHotels(response.data));
  });
};

const loadHotels = (hotels) => {
  return {
    type: types.GET_HOTELS,
    payload: hotels
  };
};
