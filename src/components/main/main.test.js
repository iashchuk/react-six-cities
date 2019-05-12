import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";

import offersData from "../../mocks/offers";

describe(`Main`, () => {
  it(`renders correctly`, () => {
    const _onCardTitleClick = jest.fn();
    const _onCardHover = jest.fn();
    const component = renderer
      .create(
          <Main
            cards={offersData}
            _onCardTitleClick={_onCardTitleClick}
            _onCardHover={_onCardHover}
          />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
