import React from "react";
import { connect } from "react-redux";
import Main from "../components/main/main.jsx";
import { getCityOffers, getCityCoords } from "./selectors.js";

import { getData, setCity } from "../redux/hotels/actions";

const MainContainer = (props) => {
  return <Main {...props} />;
};

const mapStateToProps = ({ hotels }) => {
  return {
    locations: hotels.locations,
    offers: getCityOffers([hotels.offers, hotels.city]),
    city: hotels.city,
    cityCoords: getCityCoords([hotels.locationsCoords, hotels.city])
  };
};

const mapDispatchToProps = {
  getData,
  setCity
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);
