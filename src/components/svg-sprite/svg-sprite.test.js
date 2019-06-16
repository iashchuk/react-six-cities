import React from "react";

import renderer from "react-test-renderer";
import SvgSprite from "./svg-sprite.jsx";

describe(`SvgSprite`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<SvgSprite />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
