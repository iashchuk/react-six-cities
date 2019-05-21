import React from "react";
import PropTypes from "prop-types";

import TabsList from "../tabs-list/tabs-list.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import Form from "../form/form.jsx";
import Map from "../map/map.jsx";

class Main extends React.Component {
  componentDidMount() {
    const { city, fillLocations, fillOffers } = this.props;
    fillLocations();
    fillOffers(city);
  }

  render() {
    const { city, locations, cards, fillOffers } = this.props;

    if (!cards.length || !locations.length) {
      return `Загрузка...`;
    }

    return (
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <TabsList tabs={locations} city={city} fillOffers={fillOffers} />
        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Form />
              <OffersList cards={cards} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map cards={cards} />
              </section>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageExtension: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        rating: PropTypes.number,
        isPremium: PropTypes.bool
      })
  ),
  locations: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string.isRequired,
  fillLocations: PropTypes.func,
  fillOffers: PropTypes.func
};

export default Main;
