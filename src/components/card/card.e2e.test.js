import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({adapter: new Adapter()});

const card = {
  title: `Beautiful & luxurious apartment at great location`,
  image: `apartment-01.jpg`,
  type: `Apartment`,
  price: 120,
  rating: 93,
  isPremium: true
};

it(`Card title test handler`, () => {
  const CARD_TITLE_ELEMENT = `.place-card__name a`;
  const _onCardTitleClick = jest.fn();

  const component = shallow(
      <Card
        title={card.title}
        image={card.image}
        type={card.type}
        price={card.price}
        rating={card.rating}
        isPremium={card.isPremium}
        _onCardTitleClick={_onCardTitleClick}
      />
  );

  component.find(CARD_TITLE_ELEMENT).simulate(`click`);
  expect(_onCardTitleClick).toHaveBeenCalledTimes(1);
});
