import React from "react";
import PropTypes from "prop-types";

import FavoritesCard from "../favorites-card/favorites-card.jsx";

const FavoritesItem = ({ city, offers }) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((item) => {
          return (
            <FavoritesCard
              key={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              type={item.type}
            />
          );
        })}
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  offers: PropTypes.array,
  city: PropTypes.string
};

export default FavoritesItem;
