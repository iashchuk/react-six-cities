import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/app/app.jsx";

import { store } from "./redux";

import offersData from "./mocks/offers";
import locationsData from "./mocks/locations";

const init = (data, locations) => {
  ReactDOM.render(
      <Provider store={store}>
        <App locationsData={locations} offersData={data} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(offersData, locationsData);
