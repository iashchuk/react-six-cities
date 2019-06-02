import React from "react";
import renderer from "react-test-renderer";
import TabsList from "./tabs-list.jsx";

const city = `Amsterdam`;
const cities = [`Amsterdam`, `Cologne`, `Dusseldorf`];

describe(`TabsList`, () => {
  it(`renders correctly`, () => {
    const setCity = jest.fn();
    const component = renderer
      .create(<TabsList tabs={cities} city={city} setCity={setCity} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
