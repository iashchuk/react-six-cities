import React from "react";
import { connect } from "react-redux";
import {
  loginAsync,
  setAuthRequired,
  removeAuthRequired
} from "../../redux/auth/actions.js";

import App from "../../components/app/app.jsx";

export const AppContainer = (props) => {
  return <App {...props} />;
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
  loginAsync,
  setAuthRequired,
  removeAuthRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
