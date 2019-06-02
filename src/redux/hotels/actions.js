import * as types from "./types.js";

export const getData = () => (dispatch, _getState, api) => {
  return api.get(`/hotels`).then((response) => {
    dispatch(loadHotels(response.data));
  });
};

const loadHotels = (hotels) => {
  const locations = [...new Set(hotels.map((item) => item.city.name))];

  const locationsCoords = locations.map((location) => {
    const currentLocation = hotels.find(
        (hotel) => hotel.city.name === location
    );

    if (!currentLocation || !currentLocation.city) {
      return {
        city: location,
        coords: {}
      };
    }
    return {
      city: location,
      coords: currentLocation.city.location
    };
  });

  const offers = locations.map((city) => {
    return {
      city,
      offers: hotels
        .filter((hotel) => hotel.city.name === city)
        .map((item) => {
          return {
            city: item.city.name,
            title: item.title,
            type: item.type,
            location: item.location,
            isFavorite: item.is_favorite,
            isPremium: item.is_premium,
            image: item.preview_image,
            price: item.price,
            currency: `€`,
            rating: (item.rating / 5) * 100
          };
        })
    };
  });

  return {
    type: types.GET_HOTELS,
    payload: { locations, locationsCoords, offers }
  };
};

export const setCity = (city) => {
  return {
    type: types.SET_CITY,
    payload: city
  };
};
