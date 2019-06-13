import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const user = {
  name: `Zak`,
  avatarUrl: `img/avatar.src`
};
const rating = 80;
const comment = `Bathed in the nature. Completely unplugged. Unforgettable`;
const date = `1995-12-17T03:24:00`;

describe(`Review`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(
          <Review user={user} rating={rating} comment={comment} date={date} />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
