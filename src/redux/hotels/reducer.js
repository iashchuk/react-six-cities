import * as types from "./types";

const initialState = {
  cities: [],
  locations: [],
  offers: null,
  city: null,
  favorite: new Map()
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
      return {
        ...state,
        offers: updateFavoritesOffers(payload, state.offers),
        favorite: updateFavoritesOffers(payload, state.favorite)
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

const updateFavoritesOffers = (offer, offers) => {
  const cityOffers = offers.get(offer.city) || [];
  const offerIndex = cityOffers.findIndex((item) => item.id === offer.id);
  return offers.set(offer.city, [
    ...cityOffers.slice(0, offerIndex),
    offer,
    ...cityOffers.slice(offerIndex + 1)
  ]);
};
