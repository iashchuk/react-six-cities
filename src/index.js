import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";
import { store, history } from "./redux/index.js";
import AppContainer from "./containers/app-container/app-container.jsx";
import { checkLoginAsync } from "./redux/auth/actions";

store.dispatch(checkLoginAsync());

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <AppContainer />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
