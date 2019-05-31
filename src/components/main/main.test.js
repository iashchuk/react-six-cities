import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import Map from "../map/map.jsx";

const city = `Amsterdam`;

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

const locations = [
  {
    name: `Amsterdam`,
    coords: [52.38333, 4.9]
  },
  {
    name: `Cologne`,
    coords: [50.940667, 6.966584]
  },
  {
    name: `Dusseldorf`,
    coords: [51.226723, 6.772435]
  }
];

describe(`Main`, () => {
  it(`renders correctly`, () => {
    const fillLocations = jest.fn();
    const fillOffers = jest.fn();
    Map.prototype.componentDidMount = jest.fn();
    const component = renderer
      .create(
          <Main
            city={city}
            cards={cards}
            locations={locations}
            fillOffers={fillOffers}
            fillLocations={fillLocations}
          />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
