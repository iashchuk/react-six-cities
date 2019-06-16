import { createSelector } from "reselect";

export const getOfferNeighbourhoods = createSelector(
    (f) => f,
    ([offers, offer]) => {
      if (!offer) {
        return [];
      }
      return offers.get(offer.city).slice(0, 3) || [];
    }
);
