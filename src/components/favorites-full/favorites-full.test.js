import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import FavoritesFull from "./favorites-full.jsx";

const favorite = [
  {
    city: `Amsterdam`,
    offers: [
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
    ]
  }
];

describe(`FavoritesFull`, () => {
  it(`renders correctly`, () => {
    const getFavorite = jest.fn();
    const setCity = jest.fn();

    const component = renderer
      .create(
          <Router>
            <FavoritesFull
              favorite={favorite}
              getFavorite={getFavorite}
              setCity={setCity}
            />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
