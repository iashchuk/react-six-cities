import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const card = {
  title: `Beautiful & luxurious apartment at great location`,
  image: `apartment-01`,
  imageExtension: `jpg`,
  type: `Apartment`,
  price: 120,
  currency: `€`,
  rating: 93,
  isPremium: true,
  coords: [52.3909553943508, 4.85309666406198]
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
            imageExtension={card.imageExtension}
            type={card.type}
            price={card.price}
            currency={card.currency}
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
