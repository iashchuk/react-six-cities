import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item.js";

configure({ adapter: new Adapter() });

const Component = () => <div>This is a component!</div>;
const WithActiveItem = withActiveItem(Component);

it(`should set activeItem`, () => {
  const component = shallow(<WithActiveItem />);
  expect(component.props().activeItem).toEqual(-1);
  component.props().setActiveItem(`Paris`);
  expect(component.props().activeItem).toEqual(`Paris`);
});
