import { createSelector } from "reselect";

export const getFavoritesOffers = createSelector(
    (f) => f,
    (offers) => {
      const test = offers.map((item) => {
        return {
          city: item.city,
          offers: item.offers.filter((offer) => offer.isFavorite)
        };
      });
      return test;
    }
);
