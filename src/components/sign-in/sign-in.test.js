import React from "react";
import SignIn from "./sign-in.jsx";
import renderer from "react-test-renderer";

const loginAsync = jest.fn();
const removeAuthRequired = jest.fn();

describe(`SignIn`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(
          <SignIn
            loginAsync={loginAsync}
            removeAuthRequired={removeAuthRequired}
          />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
