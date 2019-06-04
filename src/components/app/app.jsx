import React, { Component } from "react";
import PropTypes from "prop-types";
import MainContainer from "../../containers/main-container/main-container.jsx";
import Header from "../header/header.jsx";
import SignIn from "../sign-in/sign-in.jsx";

class App extends Component {
  render() {
    const {
      isAuthorizationRequired,
      loginAsync,
      setAuthRequired,
      removeAuthRequired
    } = this.props;
    return (
      <>
        <Header setAuthRequired={setAuthRequired} />
        {isAuthorizationRequired ? (
          <SignIn
            loginAsync={loginAsync}
            removeAuthRequired={removeAuthRequired}
          />
        ) : (
          <MainContainer />
        )}
      </>
    );
  }
}

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool,
  loginAsync: PropTypes.func,
  setAuthRequired: PropTypes.func,
  removeAuthRequired: PropTypes.func
};

export default App;
