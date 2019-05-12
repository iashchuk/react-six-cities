import React from "react";
import PropTypes from "prop-types";

const Card = ({
  title,
  image,
  type,
  price,
  rating,
  isPremium,
  _onCardTitleClick,
  _onCardHover
}) => {
  return (
    <article className="cities__place-card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={`img/${image}`}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            href="#"
            onClick={(evt) => _onCardTitleClick(evt)}
            onMouseOver={_onCardHover}
          >
            {title}
          </a>
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
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  isPremium: PropTypes.bool,
  _onCardTitleClick: PropTypes.func,
  _onCardHover: PropTypes.func
};

export default Card;
