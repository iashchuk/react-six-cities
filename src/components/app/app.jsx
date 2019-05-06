import React from "react";

import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

import cardData from "../../mock/cards";

const App = () => {
  const onCardTitleClick = (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(`You are clicked on -> ${evt.target.textContent}`);
  };

  return (
    <>
      <Header />
      <Main cards={cardData} onCardTitleClick={onCardTitleClick} />;
    </>
  );
};

export default App;
