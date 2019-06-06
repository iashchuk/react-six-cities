import React from "react";
import { connect } from "react-redux";
import {
  loginAsync,
  setAuthRequired,
  removeAuthRequired
} from "../../redux/auth/actions.js";

import SignIn from "../../components/sign-in/sign-in.jsx";

export const SignInContainer = (props) => {
  return <SignIn {...props} />;
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
)(SignInContainer);
