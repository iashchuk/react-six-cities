import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const card = {
  id: 1,
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
          <Router>
            <Card
              id={card.id}
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
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
