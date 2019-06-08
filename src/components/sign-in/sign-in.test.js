import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";

const loginAsync = jest.fn();
const removeAuthRequired = jest.fn();

describe(`SignIn`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(
          <Router>
            <SignIn
              loginAsync={loginAsync}
              removeAuthRequired={removeAuthRequired}
            />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
