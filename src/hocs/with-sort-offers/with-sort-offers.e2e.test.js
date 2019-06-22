import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withSortOffers from "./with-sort-offers.js";
import { SortCases } from "../../helpers/sort-cases.js";

configure({ adapter: new Adapter() });

const Component = () => <div>This is a component!</div>;
const WithSortOffers = withSortOffers(Component);

it(`should set sort type`, () => {
  const component = shallow(<WithSortOffers />);
  expect(component.props().sortType).toEqual(SortCases.POPULAR);
  component
    .props()
    .setSortType({ target: { textContent: `Price: high to low` }});
  expect(component.props().sortType).toEqual(SortCases.PRICE_HIGH);
});

it(`should set disabled form`, () => {
  const component = shallow(<WithSortOffers />);
  expect(component.state().isSortMenuOpen).toEqual(false);
  component.props().toggleSortMenu();
  expect(component.state().isSortMenuOpen).toEqual(true);
});
