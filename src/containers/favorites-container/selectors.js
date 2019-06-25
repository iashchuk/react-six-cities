import { createSelector } from "reselect";

export const getFavoritesOffers = createSelector(
    (cb) => cb,
    ([offers]) => {
      return Array.from(offers).map(([city, cards]) => {
        return {
          city,
          offers: cards
        };
      });
    }
);
