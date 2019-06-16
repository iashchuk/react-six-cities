import { createSelector } from "reselect";

export const getCityOffers = createSelector(
    (f) => f,
    ([offers, city]) => {
      return offers.get(city) || [];
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
