import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";

class Offer extends Component {
  componentDidMount() {
    const { match, getData, getOffer } = this.props;
    const id = match.params.id;
    getData();
    getOffer(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getOffer(this.props.match.params.id);
    }
  }

  render() {
    const { offers, offer, email, avatarUrl, isAuthenticated } = this.props;

    if (!offer || !offers.length) {
      return `Загрузка...`;
    }

    const {
      location,
      bedrooms,
      rating,
      maxAdults,
      isPremium,
      images,
      title,
      host,
      goods,
      price,
      description
    } = offer;

    return (
      <>
        <Header
          email={email}
          avatarUrl={avatarUrl}
          isAuthenticated={isAuthenticated}
        />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((item, index) => {
                  return (
                    <div key={index} className="property__image-wrapper">
                      <img
                        className="property__image"
                        src={item}
                        alt="Photo studio"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button
                    className="property__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${(rating / 5) * 100}%` }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    Entire place
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((item, index) => {
                      return (
                        <li key={index} className="property__inside-item">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">{host.name}</span>
                    {host.isPro && (
                      <span className="property__user-status">Pro</span>
                    )}
                  </div>
                  <div className="property__description">
                    <p className="property__text">{description}</p>
                  </div>
                </div>
              </div>
            </div>
            <section className="property__map map" style={{ height: `500px` }}>
              <Map
                cards={[offer]}
                city={[location.latitude, location.longitude]}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <OffersList cards={offers} />
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

Offer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
  offer: PropTypes.object,
  offers: PropTypes.array,
  match: PropTypes.object,
  getData: PropTypes.func,
  getOffer: PropTypes.func
};

export default Offer;
