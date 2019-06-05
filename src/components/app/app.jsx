import React, { Component } from "react";
import PropTypes from "prop-types";
import MainContainer from "../../containers/main-container/main-container.jsx";
import Header from "../header/header.jsx";
import SignIn from "../sign-in/sign-in.jsx";

class App extends Component {
  render() {
    const {
      email,
      avatarUrl,
      isAuth,
      isAuthorizationRequired,
      loginAsync,
      setAuthRequired,
      removeAuthRequired
    } = this.props;
    return (
      <>
        <Header
          email={email}
          avatarUrl={avatarUrl}
          isAuth={isAuth}
          setAuthRequired={setAuthRequired}
        />
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
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
  isAuth: PropTypes.bool,
  isAuthorizationRequired: PropTypes.bool,
  loginAsync: PropTypes.func,
  setAuthRequired: PropTypes.func,
  removeAuthRequired: PropTypes.func
};

export default App;
