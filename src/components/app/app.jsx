import React, { Component } from "react";
import MainContainer from "../../containers/main-container/main-container.jsx";
import SignInContainer from "../../containers/sign-in-container/sign-in-container.jsx";

class App extends Component {
  render() {
    return (
      <>
        <SignInContainer />
        <MainContainer />
      </>
    );
  }
}

export default App;
