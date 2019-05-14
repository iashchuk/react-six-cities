import React, {Component} from "react";

import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

import offersData from "../../mocks/offers";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: offersData,
      activeCard: null,
      lastClickedCard: null
    };

    this._onCardTitleClick = this._onCardTitleClick.bind(this);
    this._onCardHover = this._onCardHover.bind(this);
  }

  _onCardTitleClick(evt) {
    evt.preventDefault();
    this.setState({
      lastClickedCard: evt.target.textContent
    });
  }

  _onCardHover(index) {
    this.setState({
      activeCard: index
    });
  }

  render() {
    return (
      <>
        <Header />
        <Main
          cards={offersData}
          onCardTitleClick={this._onCardTitleClick}
          onCardHover={this._onCardHover}
        />
        ;
      </>
    );
  }
}

export default App;
