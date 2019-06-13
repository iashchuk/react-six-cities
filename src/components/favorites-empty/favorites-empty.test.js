import React from "react";
import renderer from "react-test-renderer";
import FavoritesEmpty from "./favorites-empty.jsx";

describe(`FavoritesEmpty`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<FavoritesEmpty />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
