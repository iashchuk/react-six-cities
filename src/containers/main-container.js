import React from "react";
import { connect } from "react-redux";
import Main from "../components/main/main.jsx";

import { fillLocations, fillOffers } from "../redux/offers/actions";
import { getData } from "../redux/fetch/actions";

const MainContainer = (props) => {
  return <Main {...props} />;
};

const mapStateToProps = ({ fetch, offers }) => {
  return {
    locations: offers.locations,
    city: offers.city,
    cards: offers.cards,
    hotels: fetch.hotels
  };
};

const mapDispatchToProps = {
  fillLocations,
  fillOffers,
  getData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);
