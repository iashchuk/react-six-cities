import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AppContainer } from "./app-container.jsx";

configure({ adapter: new Adapter() });

describe(`AppContainer`, () => {
  it(`renders correctly`, () => {
    const component = shallow(<AppContainer />);
    expect(component).toMatchSnapshot();
  });
});
