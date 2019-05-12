import React from "react";
import OffersList from "./offers-list.jsx";
import renderer from "react-test-renderer";

import cards from "../../mocks/offers";

describe(`OffersList`, () => {
  it(`renders correctly`, () => {
    const _onCardTitleClick = jest.fn();
    const _onCardHover = jest.fn();
    const component = renderer
      .create(
          <OffersList
            cards={cards}
            _onCardTitleClick={_onCardTitleClick}
            _onCardHover={_onCardHover}
          />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
