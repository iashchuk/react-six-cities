import * as types from "./types.js";
import { parseOffer } from "../../helpers/parse-offer.js";
import { parseComments } from "../../helpers/parse-comments.js";

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
