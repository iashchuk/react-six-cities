import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { LayoutContainer } from "./layout-container.jsx";

configure({ adapter: new Adapter() });

const isAuthenticated = true;
const getData = jest.fn();
const checkLoginAsync = jest.fn();

describe(`LayoutContainer`, () => {
  it(`renders correctly`, () => {
    const component = shallow(
        <LayoutContainer
          isAuthenticated={isAuthenticated}
          getData={getData}
          checkLoginAsync={checkLoginAsync}
        />
    );
    expect(component).toMatchSnapshot();
  });
});
