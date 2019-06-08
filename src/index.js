import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux/index.js";
import AppContainer from "./containers/app-container/app-container.jsx";

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <Router>
          <AppContainer />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
