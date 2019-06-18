import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewForm from "../review-form/review-form.jsx";

class Offer extends Component {
  componentDidMount() {
    const { match, getOffer, getComments } = this.props;
    const id = match.params.id;
    getOffer(id);
    getComments(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getOffer(this.props.match.params.id);
    }
  }

  render() {
    const {
      offers,
      offer,
      comments,
      isAuthenticated,
      setFavoriteAsync,
      sendReviewAsync
    } = this.props;

    if (!offer) {
      return `Загрузка...`;
    }

    const {
      id,
      cityLocation,
      bedrooms,
      rating,
      maxAdults,
      isPremium,
      isFavorite,
      images,
      title,
      type,
      host,
      goods,
      price,
      description
    } = offer;

    return (
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
                  className={cn(`property__bookmark-button button`, {
                    [`property__bookmark-button--active`]: isFavorite
                  })}
                  type="button"
                  onClick={() =>
                    setFavoriteAsync(this.props.match.params.id, 1)
                  }
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
                  {type}
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
              <ReviewsList comments={comments} />
              {isAuthenticated && (
                <ReviewForm hotelId={id} sendReviewAsync={sendReviewAsync} />
              )}
            </div>
          </div>
          <section className="property__map map map--offer">
            <Map
              activePin={id}
              cards={offers.concat([offer])}
              city={[cityLocation.latitude, cityLocation.longitude]}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList cards={offers} setFavoriteAsync={setFavoriteAsync} />
          </section>
        </div>
      </main>
    );
  }
}

Offer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
  offer: PropTypes.object,
  offers: PropTypes.array,
  comments: PropTypes.array,
  match: PropTypes.object,
  getData: PropTypes.func,
  getOffer: PropTypes.func,
  getComments: PropTypes.func,
  setFavoriteAsync: PropTypes.func
};

export default Offer;
