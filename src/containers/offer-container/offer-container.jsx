import React from "react";
import { connect } from "react-redux";

import Offer from "../../components/offer/offer.jsx";
import { getData, getOffer, getComments } from "../../redux/fetch/actions";
import { getOfferNeighbourhoods } from "./selectors.js";

export const OfferContainer = (props) => {
  return <Offer {...props} />;
};

const mapStateToProps = ({ offer, hotels, auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    offer: offer.offer,
    offers: getOfferNeighbourhoods([hotels.offers, offer.city]),
    comments: offer.comments
  };
};

const mapDispatchToProps = {
  getOffer,
  getData,
  getComments
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferContainer);
