import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LayoutContainer from "../../containers/layout-container/layout-container.jsx";
import MainContainer from "../../containers/main-container/main-container.jsx";
import SignInContainer from "../../containers/sign-in-container/sign-in-container.jsx";
import FavoritesContainer from "../../containers/favorites-container/favorites-container.jsx";
import OfferContainer from "../../containers/offer-container/offer-container.jsx";

class App extends Component {
  render() {
    return (
      <LayoutContainer>
        <Switch>
          <Route path="/" component={MainContainer} exact />
          <Route path="/login" component={SignInContainer} />
          <Route path="/favorites" component={FavoritesContainer} />
          <Route path="/offer/:id" component={OfferContainer} />
          <Redirect to="/" />
        </Switch>
      </LayoutContainer>
    );
  }
}

export default App;
