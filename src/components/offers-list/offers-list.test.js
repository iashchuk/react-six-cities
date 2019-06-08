import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";

const city = `Amsterdam`;

const cards = [
  {
    id: 1,
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
    id: 2,
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
      .create(
          <Router>
            <OffersList cards={cards} city={city} />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
