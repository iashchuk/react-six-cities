import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

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

const city = [52.38333, 4.9];

describe(`Map`, () => {
  it(`renders correctly`, () => {
    Map.prototype.componentDidMount = jest.fn();
    const component = renderer
      .create(<Map cards={cards} city={city} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
