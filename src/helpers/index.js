import offers from "../mocks/offers";
import locations from "../mocks/locations";

export const getOffers = (city) => {
  return offers.find((item) => item.city === city).offers;
};

export const getLocations = () => {
  return [...locations];
};
