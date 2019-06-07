import React from "react";
import { connect } from "react-redux";
import { setAuthRequired } from "../../redux/auth/actions.js";

import Favorites from "../../components/favorites/favorites.jsx";

export const FavoritesContainer = (props) => {
  return <Favorites {...props} />;
};

const mapStateToProps = ({ auth }) => {
  return {
    isAuth: auth.isAuth,
    isAuthorizationRequired: auth.isAuthorizationRequired,
    avatarUrl: auth.avatarUrl,
    email: auth.email
  };
};

const mapDispatchToProps = {
  setAuthRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesContainer);
