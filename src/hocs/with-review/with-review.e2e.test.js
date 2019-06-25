import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withReview from "./with-review.js";

configure({ adapter: new Adapter() });

const Component = () => <div>This is a component!</div>;
const sendReviewAsync = jest.fn();
const WithReview = withReview(Component);

it(`should set rating`, () => {
  const component = shallow(<WithReview sendReviewAsync={sendReviewAsync} />);
  expect(component.props().rating).toEqual(0);
  component.props().setRating({ target: { value: 5 }});
  expect(component.props().rating).toEqual(5);
});

it(`should set comment`, () => {
  const component = shallow(<WithReview sendReviewAsync={sendReviewAsync} />);
  expect(component.props().comment).toEqual(``);
  component.props().setComment({ target: { value: `Some text` }});
  expect(component.props().comment).toEqual(`Some text`);
});
