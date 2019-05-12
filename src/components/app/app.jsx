import React, {Component} from "react";

import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

import offersData from "../../mocks/offers";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: offersData
    };

    this._onCardTitleClick = this._onCardTitleClick.bind(this);
  }

  _onCardTitleClick(evt) {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(`You are clicked on -> ${evt.target.textContent}`);
  }

  render() {
    return (
      <>
        <Header />
        <Main cards={offersData} _onCardTitleClick={this._onCardTitleClick} />;
      </>
    );
  }
}

export default App;
