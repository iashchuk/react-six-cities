import React from "react";
import App from "./app.jsx";
import renderer from "react-test-renderer";

import offersData from "../../mocks/offers";

describe(`App`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<App offersData={offersData} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
