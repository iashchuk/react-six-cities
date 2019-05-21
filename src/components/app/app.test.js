import React from "react";
import App from "./app.jsx";
import renderer from "react-test-renderer";
import Map from "../map/map.jsx";

describe(`App`, () => {
  it(`renders correctly`, () => {
    Map.prototype.componentDidMount = jest.fn();
    const component = renderer.create(<App />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
