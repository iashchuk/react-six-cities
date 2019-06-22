import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

const comments = [
  {
    id: 1,
    rating: 80,
    comment: `Bathed in the nature. Completely unplugged. Unforgettable`,
    date: `1995-12-17T03:24:00`,
    user: {
      name: `Zak`,
      avatarUrl: `img/avatar.src`
    }
  }
];

describe(`ReviewsList`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<ReviewsList comments={comments} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
