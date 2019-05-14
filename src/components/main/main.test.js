import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";

import offersData from "../../mocks/offers";

describe(`Main`, () => {
  it(`renders correctly`, () => {
    const onCardTitleClick = jest.fn();
    const onCardHover = jest.fn();
    const component = renderer
      .create(
          <Main
            cards={offersData}
            onCardTitleClick={onCardTitleClick}
            onCardHover={onCardHover}
          />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
