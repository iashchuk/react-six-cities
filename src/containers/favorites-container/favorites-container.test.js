import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { FavoritesContainer } from "./favorites-container.jsx";

configure({ adapter: new Adapter() });

const isAuthenticated = true;
const match = {
  url: `/favorites`
};

const setCity = jest.fn();
const getFavoriteAsync = jest.fn();
const setFavoriteAsync = jest.fn();

describe(`FavoritesContainer`, () => {
  it(`renders correctly`, () => {
    const component = shallow(
        <FavoritesContainer
          isAuthenticated={isAuthenticated}
          match={match}
          setCity={setCity}
          getFavoriteAsync={getFavoriteAsync}
          setFavoriteAsync={setFavoriteAsync}
        />
    );
    expect(component).toMatchSnapshot();
  });
});
