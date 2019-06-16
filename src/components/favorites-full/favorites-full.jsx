import React from "react";
import PropTypes from "prop-types";

import FavoritesItem from "../favorites-item/favorites-item.jsx";

const FavoritesFull = ({ favorite, setFavoriteAsync }) => {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favorite.map((item) => {
              return (
                <FavoritesItem
                  key={item.city}
                  city={item.city}
                  offers={item.offers}
                  setFavoriteAsync={setFavoriteAsync}
                />
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
};

FavoritesFull.propTypes = {
  favorite: PropTypes.array,
  setFavoriteAsync: PropTypes.func
};

export default FavoritesFull;
