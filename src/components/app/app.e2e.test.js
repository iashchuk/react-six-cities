import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

import offersData from "../../mocks/offers";

Enzyme.configure({adapter: new Adapter()});

it(`State contains cards on mount`, () => {
  const component = mount(<App />);
  expect(component.state(`cards`)).toEqual(offersData);
});

it(`Update state for activeCard at mouseover on title`, () => {
  const CARD_TITLE_ELEMENT = `.place-card__name a`;
  const CARD_INDEX = 1;

  const component = mount(<App />);
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

  const component = mount(<App />);
  expect(component.state(`lastClickedCard`)).toEqual(null);

  component
    .find(CARD_TITLE_ELEMENT)
    .at(CARD_INDEX)
    .simulate(`click`);

  expect(component.state(`lastClickedCard`)).toEqual(CARD_TEXTCONTENT);
});
