import React from "react";
import { connect } from "react-redux";

import Main from "../../components/main/main.jsx";
import { getData } from "../../redux/fetch/actions";
import { setCity } from "../../redux/hotels/actions";
import { setAuthRequired } from "../../redux/auth/actions.js";
import { getCityOffers, getCityCoords } from "./selectors.js";

export const MainContainer = (props) => {
  return <Main {...props} />;
};

const mapStateToProps = ({ hotels, auth }) => {
  return {
    isAuth: auth.isAuth,
    isAuthorizationRequired: auth.isAuthorizationRequired,
    avatarUrl: auth.avatarUrl,
    email: auth.email,
    cities: hotels.cities,
    offers: getCityOffers([hotels.offers, hotels.city]),
    city: hotels.city,
    cityCoords: getCityCoords([hotels.locations, hotels.city])
  };
};

const mapDispatchToProps = {
  getData,
  setAuthRequired,
  setCity
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);
