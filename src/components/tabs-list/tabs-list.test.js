import React from "react";
import TabsList from "./tabs-list.jsx";
import renderer from "react-test-renderer";

const city = `Amsterdam`;
const locations = [`Paris`, `Cologne`, `Amsterdam`];

describe(`TabsList`, () => {
  it(`renders correctly`, () => {
    const fillOffers = jest.fn();
    const component = renderer
      .create(<TabsList city={city} tabs={locations} fillOffers={fillOffers} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
