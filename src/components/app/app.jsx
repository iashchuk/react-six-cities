import React, { Component } from "react";
import PropTypes from "prop-types";
import MainContainer from "../../containers/main-container/main-container.jsx";
import Header from "../header/header.jsx";
import SignIn from "../sign-in/sign-in.jsx";

class App extends Component {
  render() {
    const { isAuthorizationRequired } = this.props;
    return (
      <>
        <Header />
        {isAuthorizationRequired ? <SignIn /> : <MainContainer />}
      </>
    );
  }
}

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool
};

export default App;
