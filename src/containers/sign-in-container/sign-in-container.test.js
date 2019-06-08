import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SignInContainer } from "./sign-in-container.jsx";

configure({ adapter: new Adapter() });
const loginAsync = jest.fn();

describe(`SignInContainer`, () => {
  it(`renders correctly`, () => {
    const component = shallow(<SignInContainer loginAsync={loginAsync} />);
    expect(component).toMatchSnapshot();
  });
});
