import { hotelsReducer } from "./reducer.js";
import * as types from "./types.js";

const city = `Amsterdam`;

const data = {
  cities: [`Paris`, `Amsterdam`],
  locations: [
    {
      city: `Paris`,
      coords: { latitude: 50.846557, longitude: 4.351697, zoom: 13 }
    }
  ],
  offers: [{ city: `Paris`, offers: []}]
};

describe(`GET_HOTELS action`, () => {
  it(`should get hotels`, () => {
    const state = hotelsReducer(
        {},
        {
          type: types.GET_HOTELS,
          payload: data
        }
    );
    expect(state).toEqual({
      cities: data.cities,
      locations: data.locations,
      offers: data.offers,
      city: data.cities[0]
    });
  });
});

describe(`SET_CITY action`, () => {
  it(`should get offers`, () => {
    const state = hotelsReducer({}, { type: types.SET_CITY, payload: city });
    expect(state).toEqual({ city });
  });
});
