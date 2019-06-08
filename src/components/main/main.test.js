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
const email = `test@test.ru`;
const avatarUrl = `img/avatar.jpg`;
const isAuthenticated = true;

const offers = [
  {
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
    const getData = jest.fn();
    const setCity = jest.fn();
    Map.prototype.componentDidMount = jest.fn();
    const component = renderer
      .create(
          <Router>
            <Main
              email={email}
              avatarUrl={avatarUrl}
              isAuthenticated={isAuthenticated}
              city={city}
              cityCoords={cityCoords}
              offers={offers}
              cities={cities}
              setCity={setCity}
              getData={getData}
            />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
