import React from "react";

import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

import cardsData from "../../mocks/offers";

const App = () => {
  const onCardTitleClick = (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(`You are clicked on -> ${evt.target.textContent}`);
  };

  return (
    <>
      <Header />
      <Main cards={cardsData} onCardTitleClick={onCardTitleClick} />;
    </>
  );
};

export default App;
