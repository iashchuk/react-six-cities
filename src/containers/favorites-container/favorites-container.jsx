import React from "react";
import { connect } from "react-redux";

import Favorites from "../../components/favorites/favorites.jsx";

import { getFavorite, setFavoriteAsync } from "../../redux/fetch/actions.js";
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
    email: user.email,
    favorite: hotels.favorite
  };
};

const mapDispatchToProps = {
  getFavorite,
  setFavoriteAsync
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesContainer);
