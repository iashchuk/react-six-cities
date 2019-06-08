import { createSelector } from "reselect";

export const getOfferNeighbourhoods = createSelector(
    (f) => f,
    ([offers, city]) => {
      const currentCity = offers.find((item) => item.city === city);
      if (!currentCity) {
        return [];
      }
      return currentCity.offers.slice(0, 3);
    }
);
