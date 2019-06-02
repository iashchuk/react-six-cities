import { createSelector } from "reselect";

export const getCityOffers = createSelector(
    (f) => f,
    ([offers, city]) => {
      const currentCity = offers.find((item) => item.city === city);
      if (!currentCity) {
        return [];
      }
      return currentCity.offers;
    }
);

export const getCityCoords = createSelector(
    (f) => f,
    ([locations, city]) => {
      const currentCity = locations.find((item) => item.city === city);
      if (!currentCity) {
        return {};
      }

      return currentCity.coords;
    }
);
