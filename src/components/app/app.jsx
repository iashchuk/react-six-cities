import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainContainer from "../../containers/main-container/main-container.jsx";
import SignInContainer from "../../containers/sign-in-container/sign-in-container.jsx";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={MainContainer} exact />
        <Route path="/login" component={SignInContainer} />
      </Switch>
    );
  }
}

export default App;
