import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Header from "./header.jsx";

describe(`Header`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(
          <Router>
            <Header />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
