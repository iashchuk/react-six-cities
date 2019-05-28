import React from "react";
import Tab from "./tab.jsx";
import renderer from "react-test-renderer";

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
