import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";
import Map from "../map/map.jsx";

const offersData = [
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

const locationsData = [
  {
    city: `Paris`,
    isActive: false
  },
  {
    city: `Cologne`,
    isActive: false
  },
  {
    city: `Amsterdam`,
    isActive: true
  }
];

describe(`Main`, () => {
  it(`renders correctly`, () => {
    const onCardTitleClick = jest.fn();
    const onCardHover = jest.fn();
    Map.prototype.componentDidMount = jest.fn();
    const component = renderer
      .create(
          <Main
            cards={offersData}
            locations={locationsData}
            onCardTitleClick={onCardTitleClick}
            onCardHover={onCardHover}
          />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
