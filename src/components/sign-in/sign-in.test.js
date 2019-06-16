import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";

const errors = {
  setAuth: null
};
const setCity = jest.fn();
const loginAsync = jest.fn();

describe(`SignIn`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(
          <Router>
            <SignIn errors={errors} setCity={setCity} loginAsync={loginAsync} />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
