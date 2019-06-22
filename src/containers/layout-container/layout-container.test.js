import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { LayoutContainer } from "./layout-container.jsx";

configure({ adapter: new Adapter() });

const isAuthenticated = true;
const getDataAsync = jest.fn();
const checkLoginAsync = jest.fn();

describe(`LayoutContainer`, () => {
  it(`renders correctly`, () => {
    const component = shallow(
        <LayoutContainer
          isAuthenticated={isAuthenticated}
          getDataAsync={getDataAsync}
          checkLoginAsync={checkLoginAsync}
        />
    );
    expect(component).toMatchSnapshot();
  });
});
