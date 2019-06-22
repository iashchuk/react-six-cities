import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import FavoritesCard from "./favorites-card.jsx";

const id = 1;
const title = `Beautiful & luxurious apartment at great location`;
const image = `apartment-01.jpg`;
const type = `Apartment`;
const price = 120;
const rating = 93;
const isFavorite = true;

describe(`FavoritesCard`, () => {
  it(`renders correctly`, () => {
    const setFavoriteAsync = jest.fn();

    const component = renderer
      .create(
          <Router>
            <FavoritesCard
              id={id}
              title={title}
              price={price}
              rating={rating}
              image={image}
              type={type}
              isFavorite={isFavorite}
              setFavoriteAsync={setFavoriteAsync}
            />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
