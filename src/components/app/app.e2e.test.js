import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";
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

Enzyme.configure({adapter: new Adapter()});

it(`State contains cards on mount`, () => {
  Map.prototype.componentDidMount = jest.fn();
  const component = mount(
      <App offersData={offersData} locationsData={locationsData} />
  );

  expect(component.state(`cards`)).toEqual(offersData);
});

it(`Update state for activeCard at mouseover on title`, () => {
  const CARD_TITLE_ELEMENT = `.place-card__name a`;
  const CARD_INDEX = 1;
  Map.prototype.componentDidMount = jest.fn();
  const component = mount(
      <App offersData={offersData} locationsData={locationsData} />
  );

  expect(component.state(`activeCard`)).toEqual(null);

  component
    .find(CARD_TITLE_ELEMENT)
    .at(CARD_INDEX)
    .simulate(`mouseOver`);

  expect(component.state(`activeCard`)).toEqual(CARD_INDEX);
});

it(`Update state for lastClickedCard at click on title`, () => {
  const CARD_TITLE_ELEMENT = `.place-card__name a`;
  const CARD_INDEX = 1;
  const CARD_TEXTCONTENT = `Wood and stone place`;
  Map.prototype.componentDidMount = jest.fn();
  const component = mount(
      <App offersData={offersData} locationsData={locationsData} />
  );

  expect(component.state(`lastClickedCard`)).toEqual(null);

  component
    .find(CARD_TITLE_ELEMENT)
    .at(CARD_INDEX)
    .simulate(`click`);

  expect(component.state(`lastClickedCard`)).toEqual(CARD_TEXTCONTENT);
});
