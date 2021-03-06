import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import FavoritesCard from "../favorites-card/favorites-card.jsx";

const FavoritesItem = ({ city, offers, onCityClick, setFavoriteAsync }) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/" onClick={() => onCityClick(city)}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((item, index) => {
          const newFavoriteStatus = Number(!item.isFavorite);
          return (
            <FavoritesCard
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              type={item.type}
              isFavorite={item.isFavorite}
              onBookmarkClick={() => setFavoriteAsync(item.id, newFavoriteStatus)}
            />
          );
        })}
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  offers: PropTypes.array,
  city: PropTypes.string,
  setFavoriteAsync: PropTypes.func,
  onCityClick: PropTypes.func
};

export default FavoritesItem;
