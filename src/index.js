import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app/app.jsx";
import { store } from "./redux/index.js";

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
