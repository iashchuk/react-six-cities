import React from "react";
import Form from "./form.jsx";
import renderer from "react-test-renderer";

describe(`Form`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<Form />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
