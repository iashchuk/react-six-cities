import React, { Component } from "react";
import PropTypes from "prop-types";

import TabsList from "../tabs-list/tabs-list.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import Form from "../form/form.jsx";
import Map from "../map/map.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";

import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import withSortOffers from "../../hocs/with-sort-offers/with-sort-offers.js";

import { compose } from "../../helpers/compose.js";

class Main extends Component {
  render() {
    const {
      isSortMenuOpen,
      sortType,
      setSortType,
      toggleSortMenu,
      activeItem,
      city,
      cityCoords,
      cities,
      offers,
      setCity,
      setFavoriteAsync,
      sortOffers,
      setActiveItem
    } = this.props;

    const sortedOffers = sortOffers(offers, sortType);

    return (
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <TabsList tabs={cities} city={city} setCity={setCity} />
        {sortedOffers.length ? (
          <div className="cities__places-wrapper">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${
                  sortedOffers.length
                } places to stay in ${city}`}</b>
                <Form
                  isSortMenuOpen={isSortMenuOpen}
                  sortType={sortType}
                  setSortType={setSortType}
                  toggleSortMenu={toggleSortMenu}
                />
                <OffersList
                  key={sortType}
                  activeItem={activeItem}
                  cards={sortedOffers}
                  city={city}
                  setActiveItem={setActiveItem}
                  setFavoriteAsync={setFavoriteAsync}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map map--main">
                  <Map
                    activeItem={activeItem}
                    cards={offers}
                    city={[cityCoords.latitude, cityCoords.longitude]}
                  />
                </section>
              </div>
            </div>
          </div>
        ) : (
          <MainEmpty city={city} />
        )}
      </main>
    );
  }
}

Main.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        rating: PropTypes.number,
        isPremium: PropTypes.bool
      })
  ),
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  isSortMenuOpen: PropTypes.bool,
  sortType: PropTypes.string,
  cities: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string,
  cityCoords: PropTypes.object,
  activeItem: PropTypes.number,
  setCity: PropTypes.func,
  setFavoriteAsync: PropTypes.func,
  setSortType: PropTypes.func,
  toggleSortMenu: PropTypes.func,
  sortOffers: PropTypes.func,
  setActiveItem: PropTypes.func
};

export default compose(
    withActiveItem,
    withSortOffers
)(Main);
