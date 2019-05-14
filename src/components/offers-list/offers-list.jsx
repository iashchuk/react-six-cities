import React from "react";
import PropTypes from "prop-types";

import Card from "../card/card.jsx";

const OffersList = ({cards, onCardTitleClick, onCardHover}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            type={item.type}
            price={item.price}
            rating={item.rating}
            isPremium={item.isPremium}
            onCardTitleClick={onCardTitleClick}
            onCardHover={() => onCardHover(index)}
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
        rating: PropTypes.number,
        isPremium: PropTypes.bool
      })
  ),
  onCardTitleClick: PropTypes.func,
  onCardHover: PropTypes.func
};

export default OffersList;
