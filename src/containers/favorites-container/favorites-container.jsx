import React from "react";
import { connect } from "react-redux";

import Favorites from "../../components/favorites/favorites.jsx";

import { getFavoritesOffers } from "./selectors";

export const FavoritesContainer = (props) => {
  return <Favorites {...props} />;
};

const mapStateToProps = ({ auth, hotels }) => {
  const { user } = auth;
  return {
    offers: getFavoritesOffers(hotels.offers),
    isAuthenticated: auth.isAuthenticated,
    isAuthorizationRequired: auth.isAuthorizationRequired,
    avatarUrl: user.avatarUrl,
    email: user.email
  };
};

export default connect(mapStateToProps)(FavoritesContainer);
