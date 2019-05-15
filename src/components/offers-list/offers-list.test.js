import React from "react";
import OffersList from "./offers-list.jsx";
import renderer from "react-test-renderer";

import cards from "../../mocks/offers";

describe(`OffersList`, () => {
  it(`renders correctly`, () => {
    const onCardTitleClick = jest.fn();
    const onCardHover = jest.fn();
    const component = renderer
      .create(
          <OffersList
            cards={cards}
            onCardTitleClick={onCardTitleClick}
            onCardHover={onCardHover}
          />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
