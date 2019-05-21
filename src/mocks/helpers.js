import offers from "./offers";
import locations from "./locations";

export const getOffers = (city) => {
  return offers.find((item) => item.city === city).offers;
};

export const getLocations = () => {
  return [...locations];
};
