import React from "react";
import renderer from "react-test-renderer";
import Tab from "./tab.jsx";

const item = `Paris`;
const city = `Amsterdam`;

describe(`Tab`, () => {
  it(`renders correctly`, () => {
    const fillOffers = jest.fn();
    const component = renderer
      .create(<Tab label={item} city={city} fillOffers={fillOffers} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
