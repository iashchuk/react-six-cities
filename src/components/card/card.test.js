import React from "react";
import Card from "./card.jsx";
import renderer from "react-test-renderer";

const card = {
  title: `Beautiful & luxurious apartment at great location`,
  image: `apartment-01.jpg`,
  type: `Apartment`,
  price: 120,
  rating: 93,
  isPremium: true
};

describe(`Card`, () => {
  it(`renders correctly`, () => {
    const onCardTitleClick = jest.fn();
    const onCardHover = jest.fn();
    const component = renderer
      .create(
          <Card
            title={card.title}
            image={card.image}
            type={card.type}
            price={card.price}
            rating={card.rating}
            isPremium={card.isPremium}
            onCardTitleClick={onCardTitleClick}
            onCardHover={onCardHover}
          />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
