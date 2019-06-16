import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cn from "classnames";

const Card = ({
  id,
  title,
  image,
  type,
  price,
  currency,
  rating,
  isPremium,
  isFavorite,
  isActive,
  setActiveItem,
  setFavoriteAsync
}) => {
  const onCardClick = (evt) => {
    evt.preventDefault();
    setActiveItem();
  };
  return (
    <article
      className={cn(`cities__place-card place-card`, {
        [`place-card--active`]: isActive
      })}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className="cities__image-wrapper place-card__image-wrapper"
        onClick={onCardClick}
      >
        <img
          className="place-card__image"
          src={image}
          width="260"
          height="200"
          alt="Place image"
        />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              {currency}
              {price}
            </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cn(`place-card__bookmark-button  button`, {
              [`place-card__bookmark-button--active`]: isFavorite
            })}
            type="button"
            onClick={setFavoriteAsync}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.defaultProps = {
  rating: 0,
  isPremium: false
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  rating: PropTypes.number,
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
  isActive: PropTypes.bool,
  onCardTitleClick: PropTypes.func,
  onCardHover: PropTypes.func,
  setActiveItem: PropTypes.func,
  setFavoriteAsync: PropTypes.func
};

export default Card;
