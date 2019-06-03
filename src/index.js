import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppContainer from "./containers/app-container/app-container.jsx";
import { store } from "./redux/index.js";

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
