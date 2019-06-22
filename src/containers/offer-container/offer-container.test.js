import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { OfferContainer } from "./offer-container.jsx";

configure({ adapter: new Adapter() });

const isAuthenticated = true;
const getOffer = jest.fn();
const getComments = jest.fn();
const setFavoriteAsync = jest.fn();
const sendReviewAsync = jest.fn();

describe(`OfferContainer`, () => {
  it(`renders correctly`, () => {
    const component = shallow(
        <OfferContainer
          isAuthenticated={isAuthenticated}
          getOffer={getOffer}
          getComments={getComments}
          setFavoriteAsync={setFavoriteAsync}
          sendReviewAsync={sendReviewAsync}
        />
    );
    expect(component).toMatchSnapshot();
  });
});
