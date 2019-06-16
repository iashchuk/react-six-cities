import React from "react";
import { connect } from "react-redux";

import Offer from "../../components/offer/offer.jsx";
import { getOffer, getComments } from "../../redux/fetch/actions";
import { getOfferNeighbourhoods } from "./selectors.js";

export const OfferContainer = (props) => {
  return <Offer {...props} />;
};

const mapStateToProps = ({ offer, hotels, auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    offer: offer.currentOffer,
    offers: getOfferNeighbourhoods([hotels.offers, offer.currentOffer]),
    comments: offer.comments
  };
};

const mapDispatchToProps = {
  getOffer,
  getComments
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferContainer);
