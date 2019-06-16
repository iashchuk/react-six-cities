import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";
import Map from "../map/map.jsx";

const offer = {
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  rating: 93,
  isPremium: true,
  isFavorite: false,
  images: [
    `https://es31-server.appspot.com/six-cities/static/hotel/2.jpg`,
    `https://es31-server.appspot.com/six-cities/static/hotel/5.jpg`,
    `https://es31-server.appspot.com/six-cities/static/hotel/16.jpg`
  ],
  host: {
    id: 25,
    name: `Angelina`,
    isPro: true,
    avatarUrl: `img/avatar-angelina.jpg`
  },
  maxAdults: 2,
  bedrooms: 1,
  goods: [
    `Baby seat`,
    `Breakfast`,
    `Air conditioning`,
    `Laptop friendly workspace`,
    `Washer`
  ],
  description: `Relax, rejuvenate and unplug in this ultimate`,
  cityLocation: [52.3909553943508, 4.85309666406198]
};

const offers = [
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
  },
  {
    id: 2,
    title: `Wood and stone place`,
    image: `room.jpg`,
    type: `Private room`,
    price: 80,
    currency: `€`,
    rating: 80,
    isPremium: false,
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198 }
  }
];

const comments = [
  {
    id: 1,
    user: {
      id: 17,
      isPro: false,
      name: `Emely`,
      avatarUrl: `https://es31-server.appspot.com/six-cities/static/avatar/8.jpg`
    },
    rating: 3,
    comment: `We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)`,
    date: `2019-06-03T11:42:26.499Z`
  }
];

const isAuthenticated = true;

const match = {
  params: {
    id: 3
  }
};

describe(`Offer`, () => {
  it(`renders correctly`, () => {
    const getOffer = jest.fn();
    const getComments = jest.fn();
    const setFavoriteAsync = jest.fn();
    Map.prototype.componentDidMount = jest.fn();
    const component = renderer
      .create(
          <Router>
            <Offer
              isAuthenticated={isAuthenticated}
              match={match}
              offer={offer}
              offers={offers}
              comments={comments}
              getOffer={getOffer}
              getComments={getComments}
              setFavoriteAsync={setFavoriteAsync}
            />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
