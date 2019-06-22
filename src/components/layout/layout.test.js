import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Layout from "./layout.jsx";

const user = { email: `test@test.ru`, avatarUrl: `img/avatar.jpg` };
const offers = new Map([
  [
    `Paris`,
    [
      {
        id: 1,
        title: `Beautiful & luxurious apartment at great location`,
        image: `apartment-01.jpg`,
        type: `Apartment`,
        price: 120,
        currency: `€`,
        rating: 93,
        isPremium: true,
        location: { latitude: 52.3909553943508, longitude: 4.85309666406198 }
      }
    ]
  ]
]);

const isAuthenticated = true;

const location = {
  pathname: `/login`
};

const checkLoginAsync = jest.fn();
const getData = jest.fn();

describe(`Layout`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(
          <Router>
            <Layout
              isAuthenticated={isAuthenticated}
              location={location}
              user={user}
              offers={offers}
              getData={getData}
              checkLoginAsync={checkLoginAsync}
            />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
