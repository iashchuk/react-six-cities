import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

import offersData from "./mocks/offers";
import placesData from "./mocks/places";

const init = (data, places) => {
  ReactDOM.render(
      <App placesData={places} offersData={data} />,
      document.querySelector(`#root`)
  );
};

init(offersData, placesData);
