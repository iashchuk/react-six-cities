import React from "react";
import { connect } from "react-redux";

import Offer from "../../components/offer/offer.jsx";
import { getData, getOffer } from "../../redux/fetch/actions";
import { getOfferNeighbourhoods } from "./selectors.js";

export const OfferContainer = (props) => {
  return <Offer {...props} />;
};

const mapStateToProps = ({ offer, auth, hotels }) => {
  const { user } = auth;
  return {
    isAuthenticated: auth.isAuthenticated,
    avatarUrl: user.avatarUrl,
    email: user.email,
    offer: offer.offer,
    offers: getOfferNeighbourhoods([hotels.offers, offer.city])
  };
};

const mapDispatchToProps = {
  getOffer,
  getData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferContainer);
