export const parseLocations = (cities, hotels) => {
  return cities.map((city) => {
    const currentLocation = hotels.find((hotel) => hotel.city.name === city);

    if (!currentLocation || !currentLocation.city) {
      return {
        city,
        coords: {}
      };
    }
    return {
      city,
      coords: currentLocation.city.location
    };
  });
};
