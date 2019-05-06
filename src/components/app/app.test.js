import React from "react";
import App from "./app.jsx";
import renderer from "react-test-renderer";

describe(`App`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<App />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
