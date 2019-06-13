import React from "react";
import PropTypes from "prop-types";

import Card from "../card/card.jsx";

const OffersList = ({
  cards,
  city,
  activeItem,
  setActiveItem,
  setFavoriteAsync
}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((item) => {
        const isActive = activeItem === item.id;

        return (
          <Card
            key={item.id}
            id={item.id}
            city={city}
            title={item.title}
            image={item.image}
            type={item.type}
            price={item.price}
            currency={item.currency}
            rating={item.rating}
            isPremium={item.isPremium}
            isActive={isActive}
            isFavorite={item.isFavorite}
            setActiveItem={() => setActiveItem(item.id)}
            setFavoriteAsync={() => setFavoriteAsync(item.id, 1)}
          />
        );
      })}
    </div>
  );
};

OffersList.propTypes = {
  cards: PropTypes.arrayOf(
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
  city: PropTypes.string,
  activeItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setActiveItem: PropTypes.func,
  setFavoriteAsync: PropTypes.func
};

export default OffersList;
