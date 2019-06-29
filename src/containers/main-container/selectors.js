import { createSelector } from "reselect";

export const getCityOffers = createSelector(
    (cb) => cb,
    ([offers, city]) => {
      return offers.get(city) || [];
    }
);

export const getCityCoords = createSelector(
    (cb) => cb,
    ([locations, city]) => {
      const currentCity = locations.find((item) => item.city === city);
      if (!currentCity) {
        return {};
      }

      return currentCity.coords;
    }
);
