import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const PATH_SIGN_IN = `/login`;

const withPrivateRoute = (Component) => {
  const WithPrivate = ({ isAuthenticated, match: { url }, ...props }) => {
    if (url === PATH_SIGN_IN) {
      if (!isAuthenticated) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/" />;
      }
    }

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return <Component {...props} />;
  };

  WithPrivate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired
  };

  return WithPrivate;
};

export default withPrivateRoute;
