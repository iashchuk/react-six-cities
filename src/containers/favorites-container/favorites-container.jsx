import React from "react";
import { connect } from "react-redux";

import Favorites from "../../components/favorites/favorites.jsx";

import {
  getFavoriteAsync,
  setFavoriteAsync
} from "../../redux/hotels/actions.js";
import { setCity } from "../../redux/hotels/actions.js";
import { getFavoritesOffers } from "./selectors";

export const FavoritesContainer = (props) => {
  return <Favorites {...props} />;
};

const mapStateToProps = ({ auth, hotels }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    favorite: getFavoritesOffers([hotels.favorite])
  };
};

const mapDispatchToProps = {
  setCity,
  getFavoriteAsync,
  setFavoriteAsync
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesContainer);
