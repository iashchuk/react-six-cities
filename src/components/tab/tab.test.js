import React from "react";
import Tab from "./tab.jsx";
import renderer from "react-test-renderer";

const item = {
  city: `Amsterdam`,
  isActive: true
};

describe(`Tab`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<Tab label={item.city} isActive={item.isActive} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
