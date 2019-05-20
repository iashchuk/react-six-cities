import React from "react";
import PropTypes from "prop-types";

import OffersList from "../offers-list/offers-list.jsx";
import TabsList from "../tabs-list/tabs-list.jsx";
import Map from "../map/map.jsx";
import Form from "../form/form.jsx";

const Main = ({cards, locations, city, onCardTitleClick, onCardHover}) => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <TabsList tabs={locations} />
      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <Form />
            <OffersList
              cards={cards}
              onCardTitleClick={onCardTitleClick}
              onCardHover={onCardHover}
            />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map cards={cards} city={city} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

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
  locations: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
        isActive: PropTypes.bool
      })
  ),
  city: PropTypes.arrayOf(PropTypes.number),
  onCardTitleClick: PropTypes.func,
  onCardHover: PropTypes.func
};

export default Main;
