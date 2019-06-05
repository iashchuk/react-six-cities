import React from "react";
import PropTypes from "prop-types";

import Card from "../card/card.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

const OffersList = ({ cards, city, activeItem, setActiveItem }) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((item, index) => {
        const id = `${item.title}-${city}-${index}`;
        const isActive = activeItem === id;

        return (
          <Card
            key={id}
            title={item.title}
            image={item.image}
            type={item.type}
            price={item.price}
            currency={item.currency}
            rating={item.rating}
            isPremium={item.isPremium}
            isActive={isActive}
            setActiveItem={() => setActiveItem(id)}
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
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func
};

export default withActiveItem(OffersList);
