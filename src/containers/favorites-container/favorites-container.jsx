import React from "react";
import { connect } from "react-redux";

import Favorites from "../../components/favorites/favorites.jsx";

export const FavoritesContainer = (props) => {
  return <Favorites {...props} />;
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return {
    isAuthenticated: auth.isAuthenticated,
    isAuthorizationRequired: auth.isAuthorizationRequired,
    avatarUrl: user.avatarUrl,
    email: user.email
  };
};

export default connect(mapStateToProps)(FavoritesContainer);
