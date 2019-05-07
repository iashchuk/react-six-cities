import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";

import cardsData from "../../mock/cards";

describe(`Main`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<Main cards={cardsData} onCardTitleClick={jest.fn()} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
