import React from "react";
import Header from "./header.jsx";
import renderer from "react-test-renderer";

describe(`Header`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<Header />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
