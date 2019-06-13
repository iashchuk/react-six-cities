import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty.jsx";

const city = `Paris`;

describe(`MainEmpty`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<MainEmpty city={city} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
