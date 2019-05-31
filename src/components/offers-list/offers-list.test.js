import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";

const cards = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    image: `apartment-01`,
    imageExtension: `jpg`,
    type: `Apartment`,
    price: 120,
    currency: `€`,
    rating: 93,
    isPremium: true,
    coords: [52.3909553943508, 4.85309666406198]
  },
  {
    title: `Wood and stone place`,
    image: `room`,
    imageExtension: `jpg`,
    type: `Private room`,
    price: 80,
    currency: `€`,
    rating: 80,
    isPremium: false,
    coords: [52.369553943508, 4.85309666406198]
  }
];

describe(`OffersList`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<OffersList cards={cards} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
