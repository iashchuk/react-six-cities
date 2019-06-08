import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const withPrivateRoute = (Component) => {
  class WithPrivate extends PureComponent {
    render() {
      const { isAuthenticated } = this.props;

      if (!isAuthenticated) {
        return <Redirect to="/login" />;
      }

      return <Component {...this.props} />;
    }
  }

  WithPrivate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  return WithPrivate;
};

export default withPrivateRoute;
