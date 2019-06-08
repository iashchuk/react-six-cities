import * as types from "./types.js";
import { parseOffer } from "../../helpers/parseOffer.js";

export const loadOffer = (id, hotels) => {
  const offer = parseOffer(id, hotels);

  return {
    type: types.LOAD_OFFER,
    payload: offer
  };
};
