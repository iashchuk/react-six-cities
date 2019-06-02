import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MainContainer } from "./main-container.jsx";

configure({ adapter: new Adapter() });

describe(`MainContainer`, () => {
  it(`renders correctly`, () => {
    const component = shallow(<MainContainer />);
    expect(component).toMatchSnapshot();
  });
});
