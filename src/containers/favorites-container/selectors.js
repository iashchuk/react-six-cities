import { createSelector } from "reselect";

export const getFavoritesOffers = createSelector(
    (f) => f,
    ([offers]) => {
      return Array.from(offers).map(([city, cards]) => {
        return {
          city,
          offers: cards
        };
      });
    }
);
