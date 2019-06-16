import React from "react";
import { connect } from "react-redux";
import { loginAsync } from "../../redux/auth/actions.js";

import SignIn from "../../components/sign-in/sign-in.jsx";

export const SignInContainer = (props) => {
  return <SignIn {...props} />;
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return {
    isAuthenticated: auth.isAuthenticated,
    isAuthorizationRequired: auth.isAuthorizationRequired,
    avatarUrl: user.avatarUrl,
    email: user.email,
    errors: auth.errors
  };
};

const mapDispatchToProps = {
  loginAsync
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);
