import React from "react";
import { connect } from "react-redux";
import Main from "../components/main/main.jsx";

import { fillLocations, fillOffers } from "../redux/offers/actions";

const MainContainer = (props) => {
  return <Main {...props} />;
};

const mapStateToProps = ({ offers }) => {
  return {
    locations: offers.locations,
    city: offers.city,
    cards: offers.cards
  };
};

const mapDispatchToProps = {
  fillLocations,
  fillOffers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);
