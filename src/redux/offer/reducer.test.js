import { offerReducer } from "./reducer.js";
import * as types from "./types.js";

const initialState = {
  currentOffer: {
    isFavorite: false
  },
  comments: [],
  errors: {
    sendForm: null
  }
};

const sendFormError = `Some send form error`;

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

describe(`LOAD_OFFER action`, () => {
  it(`should load offer`, () => {
    const state = offerReducer(
        { ...initialState },
        { type: types.LOAD_OFFER, payload: offer }
    );
    expect(state).toEqual({
      ...initialState,
      currentOffer: offer
    });
  });
});

describe(`LOAD_COMMENTS action`, () => {
  it(`should load offer`, () => {
    const state = offerReducer(
        { ...initialState },
        { type: types.LOAD_COMMENTS, payload: comments }
    );
    expect(state).toEqual({
      ...initialState,
      comments
    });
  });
});

describe(`UPDATE_OFFER action`, () => {
  it(`should load offer`, () => {
    const state = offerReducer(
        { ...initialState },
        { type: types.UPDATE_OFFER }
    );
    expect(state).toEqual({
      ...initialState,
      currentOffer: {
        ...initialState.currentOffer,
        isFavorite: !initialState.currentOffer.isFavorite
      }
    });
  });
});

describe(`UPDATE_COMMENTS action`, () => {
  it(`should load offer`, () => {
    const state = offerReducer(
        { ...initialState },
        { type: types.UPDATE_COMMENTS, payload: comments }
    );
    expect(state).toEqual({
      ...initialState,
      comments,
      errors: {
        ...initialState.errors,
        sendForm: null
      }
    });
  });
});

describe(`SET_REVIEW_FORM_ERROR: action`, () => {
  it(`should load offer`, () => {
    const state = offerReducer(
        { ...initialState },
        { type: types.SET_REVIEW_FORM_ERROR, payload: sendFormError }
    );
    expect(state).toEqual({
      ...initialState,
      errors: {
        ...state.errors,
        sendForm: sendFormError
      }
    });
  });
});
