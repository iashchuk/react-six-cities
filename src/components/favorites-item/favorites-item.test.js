import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import FavoritesItem from "./favorites-item.jsx";

const city = `Amsterdam`;
const offers = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    image: `apartment-01.jpg`,
    type: `Apartment`,
    price: 120,
    currency: `€`,
    rating: 93,
    isFavorite: true
  }
];

describe(`FavoritesItem`, () => {
  it(`renders correctly`, () => {
    const setFavoriteAsync = jest.fn();
    const setCity = jest.fn();

    const component = renderer
      .create(
          <Router>
            <FavoritesItem
              city={city}
              offers={offers}
              setFavoriteAsync={setFavoriteAsync}
              setCity={setCity}
            />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
