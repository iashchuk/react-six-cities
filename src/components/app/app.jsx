import React, { Component } from "react";

import Header from "../header/header.jsx";
import MainContainer from "../../containers/main-container.js";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainContainer />
      </>
    );
  }
}

export default App;
