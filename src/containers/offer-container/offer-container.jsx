import React from "react";
import { connect } from "react-redux";

import Offer from "../../components/offer/offer.jsx";
import { getOfferAsync, getCommentsAsync } from "../../redux/offer/actions";
import { setFavoriteAsync } from "../../redux/hotels/actions";
import { sendReviewAsync } from "../../redux/offer/actions";
import { getOfferNeighbourhoods } from "./selectors.js";

export const OfferContainer = (props) => {
  return <Offer {...props} />;
};

const mapStateToProps = ({ offer, hotels, auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    isFormSending: offer.isFormSending,
    offer: offer.currentOffer,
    offers: getOfferNeighbourhoods([hotels.offers, offer.currentOffer]),
    comments: offer.comments,
    sendFormError: offer.errors.sendForm
  };
};

const mapDispatchToProps = {
  getOfferAsync,
  getCommentsAsync,
  setFavoriteAsync,
  sendReviewAsync
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferContainer);
