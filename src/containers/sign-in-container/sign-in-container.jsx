import React from "react";
import { connect } from "react-redux";
import { loginAsync } from "../../redux/auth/actions.js";

import SignIn from "../../components/sign-in/sign-in.jsx";
import { setCity } from "../../redux/hotels/actions.js";

export const SignInContainer = (props) => {
  return <SignIn {...props} />;
};

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    errors: auth.errors
  };
};

const mapDispatchToProps = {
  setCity,
  loginAsync
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);
