import React from "react";
import TabsList from "./tabs-list.jsx";
import renderer from "react-test-renderer";

const locations = [
  {
    city: `Paris`,
    isActive: false
  },
  {
    city: `Cologne`,
    isActive: false
  },
  {
    city: `Amsterdam`,
    isActive: true
  }
];

describe(`TabsList`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<TabsList tabs={locations} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
