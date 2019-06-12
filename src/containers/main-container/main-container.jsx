import React from "react";
import { connect } from "react-redux";

import Main from "../../components/main/main.jsx";
import { setFavoriteAsync } from "../../redux/fetch/actions";
import { setCity } from "../../redux/hotels/actions";
import { getCityOffers, getCityCoords } from "./selectors.js";

export const MainContainer = (props) => {
  return <Main {...props} />;
};

const mapStateToProps = ({ hotels }) => {
  return {
    cities: hotels.cities,
    offers: getCityOffers([hotels.offers, hotels.city]),
    city: hotels.city,
    cityCoords: getCityCoords([hotels.locations, hotels.city])
  };
};

const mapDispatchToProps = {
  setCity,
  setFavoriteAsync
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);
