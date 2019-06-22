import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Favorites from "./favorites.jsx";

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

const isAuthenticated = true;

const match = {
  url: `/favorites`
};

describe(`Favorites`, () => {
  it(`renders correctly`, () => {
    const getFavoriteAsync = jest.fn();
    const setFavoriteAsync = jest.fn();
    const setCity = jest.fn();

    const component = renderer
      .create(
          <Router>
            <Favorites
              isAuthenticated={isAuthenticated}
              match={match}
              favorite={favorite}
              getFavoriteAsync={getFavoriteAsync}
              setFavoriteAsync={setFavoriteAsync}
              setCity={setCity}
            />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
