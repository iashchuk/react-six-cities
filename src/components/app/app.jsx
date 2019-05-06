import React from "react";

import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

import cardData from "../../mock/cards";

const App = () => {
  return (
    <>
      <Header />
      <Main cards={cardData} />;
    </>
  );
};

export default App;
