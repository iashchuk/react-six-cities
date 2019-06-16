import * as types from "./types";

const initialState = {
  cities: [],
  locations: [],
  offers: null,
  city: null,
  favorite: []
};

export const hotelsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_HOTELS:
      return {
        ...state,
        cities: payload.cities,
        locations: payload.locations,
        offers: payload.offers,
        city: payload.cities[0]
      };

    case types.SET_CITY:
      return {
        ...state,
        city: payload
      };

    case types.UPDATE_OFFERS:
      const cityOffers = state.offers.find(
          (item) => item.city === payload.city
      );
      const idxCity = state.offers.findIndex(
          (item) => item.city === payload.city
      );

      const idx = cityOffers.offers.findIndex((item) => item.id === payload.id);
      const before = cityOffers.offers.slice(0, idx);
      const after = cityOffers.offers.slice(idx + 1);

      return {
        ...state,
        offers: [
          ...state.offers.slice(0, idxCity),
          { city: cityOffers.city, offers: [...before, payload, ...after]},
          ...state.offers.slice(idxCity + 1)
        ]
      };

    case types.GET_FAVORITE:
      return {
        ...state,
        favorite: payload
      };

    default:
      return state;
  }
};
