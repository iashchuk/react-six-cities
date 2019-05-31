import { offersReducer } from "./reducer";
import * as types from "./types";

const data = {
  city: `Paris`,
  offers: [
    {
      title: `Beautiful & luxurious apartment at great location`,
      image: `apartment-01`,
      imageExtension: `jpg`,
      type: `Apartment`,
      price: 120,
      currency: `€`,
      rating: 93,
      isPremium: true,
      coords: [52.3909553943508, 4.85309666406198]
    }
  ]
};

const locations = [
  {
    name: `Amsterdam`,
    coords: [52.38333, 4.9]
  },
  {
    name: `Cologne`,
    coords: [50.940667, 6.966584]
  }
];

describe(`GET_OFFERS action`, () => {
  it(`should get offers`, () => {
    const state = offersReducer({}, { type: types.GET_OFFERS, payload: data });
    expect(state).toEqual({ city: data.city, cards: data.offers });
  });
});

describe(`GET_LOCATIONS action`, () => {
  it(`should get loactions`, () => {
    const state = offersReducer(
        {},
        { type: types.GET_LOCATIONS, payload: locations }
    );
    expect(state).toEqual({ locations });
  });
});
