import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Header from "./header.jsx";

const user = { email: `test@test.ru`, avatarUrl: `img/avatar.jpg` };

describe(`Header`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(
          <Router>
            <Header user={user} />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
