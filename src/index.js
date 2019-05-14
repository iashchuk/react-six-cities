import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

import offersData from "./mocks/offers";

const init = (data) => {
  ReactDOM.render(<App offersData={data} />, document.querySelector(`#root`));
};

init(offersData);
