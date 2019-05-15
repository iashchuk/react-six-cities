import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({adapter: new Adapter()});

const card = {
  title: `Beautiful & luxurious apartment at great location`,
  image: `apartment-01`,
  imageExtension: `jpg`,
  type: `Apartment`,
  price: 120,
  currency: `€`,
  rating: 93,
  isPremium: true
};

it(`Card title test handler`, () => {
  const CARD_TITLE_ELEMENT = `.place-card__name a`;
  const onCardTitleClick = jest.fn();
  const onCardHover = jest.fn();

  const component = shallow(
      <Card
        title={card.title}
        image={card.image}
        imageExtension={card.imageExtension}
        type={card.type}
        price={card.price}
        currency={card.currency}
        rating={card.rating}
        isPremium={card.isPremium}
        onCardTitleClick={onCardTitleClick}
        onCardHover={onCardHover}
      />
  );

  component.find(CARD_TITLE_ELEMENT).simulate(`click`);
  expect(onCardTitleClick).toHaveBeenCalledTimes(1);
});
