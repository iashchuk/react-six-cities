import React from "react";
import TabsList from "./tabs-list.jsx";
import renderer from "react-test-renderer";

const city = `Amsterdam`;
const locations = [
  {
    name: `Amsterdam`,
    coords: [52.38333, 4.9]
  },
  {
    name: `Cologne`,
    coords: [50.940667, 6.966584]
  },
  {
    name: `Dusseldorf`,
    coords: [51.226723, 6.772435]
  }
];

describe(`TabsList`, () => {
  it(`renders correctly`, () => {
    const fillOffers = jest.fn();
    const component = renderer
      .create(<TabsList city={city} tabs={locations} fillOffers={fillOffers} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
