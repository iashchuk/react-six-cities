import MockAdapter from "axios-mock-adapter";
import { createAPI } from "../../api";
import { getData } from "./actions";

const data = [
  {
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    previewImage: `https://es31-server.appspot.com/six-cities/static/hotel/4.jpg`,
    images: [
      `https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/12.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/11.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/15.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/10.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/4.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/6.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/1.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/5.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/18.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/17.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://es31-server.appspot.com/six-cities/static/hotel/7.jpg`
    ],
    title: `The house among olive `,
    isFavorite: false,
    isPremium: false,
    rating: 3.4,
    type: `room`,
    bedrooms: 1,
    maxAdults: 3,
    price: 117,
    goods: [
      `Washer`,
      `Towels`,
      `Laptop friendly workspace`,
      `Baby seat`,
      `Air conditioning`,
      `Breakfast`
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    location: {
      latitude: 50.867557,
      longitude: 4.339697,
      zoom: 16
    },
    id: 1
  }
];

describe(`Reducer works correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);

    apiMock.onGet(`/hotels`).reply(200, data);

    return getData()(dispatch, getState, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});
