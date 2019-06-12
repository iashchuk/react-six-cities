import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./main.jsx";
import Map from "../map/map.jsx";

const city = `Amsterdam`;
const cityCoords = {
  latitude: 52.3909553943508,
  longitude: 4.85309666406198,
  zoom: 13
};

const offers = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    image: `apartment-01.jpg`,
    type: `Apartment`,
    price: 120,
    currency: `€`,
    rating: 93,
    isPremium: true,
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198 }
  },
  {
    id: 2,
    title: `Wood and stone place`,
    image: `room.jpg`,
    type: `Private room`,
    price: 80,
    currency: `€`,
    rating: 80,
    isPremium: false,
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198 }
  }
];

const cities = [`Amsterdam`, `Cologne`, `Dusseldorf`];

describe(`Main`, () => {
  it(`renders correctly`, () => {
    const setCity = jest.fn();
    Map.prototype.componentDidMount = jest.fn();
    const component = renderer
      .create(
          <Router>
            <Main
              city={city}
              cityCoords={cityCoords}
              offers={offers}
              cities={cities}
              setCity={setCity}
            />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
