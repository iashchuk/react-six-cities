import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";
import { store, history } from "./redux/index.js";
import App from "./components/app/app.jsx";

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
