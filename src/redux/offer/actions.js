import * as types from "./types.js";
import { parseOffer } from "../../helpers/parse-offer.js";
import { parseComments } from "../../helpers/parse-comments.js";
import { modifyOffer } from "../../helpers/modify-offer.js";

export const loadOffer = (id, hotels) => {
  const offer = parseOffer(id, hotels);

  return {
    type: types.LOAD_OFFER,
    payload: offer
  };
};

export const loadComments = (data) => {
  const comments = parseComments(data);

  return {
    type: types.LOAD_COMMENTS,
    payload: comments
  };
};

export const updateOffer = (offer) => {
  return {
    type: types.UPDATE_OFFER,
    payload: modifyOffer(offer)
  };
};
