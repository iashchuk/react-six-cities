import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";

const city = `Amsterdam`;

const cards = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    image: `apartment-01.jpg`,
    type: `Apartment`,
    price: 120,
    currency: `€`,
    rating: 93,
    isPremium: true,
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198 }
  },
  {
    title: `Wood and stone place`,
    image: `room.jpg`,
    type: `Private room`,
    price: 80,
    currency: `€`,
    rating: 80,
    isPremium: false,
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198 }
  }
];

describe(`OffersList`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<OffersList cards={cards} city={city} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
