import React, { Component } from "react";
import PropTypes from "prop-types";
import withPrivateRoute from "../../hocs/with-private/with-private.js";
import FavoritesFull from "../favorites-full/favorites-full.jsx";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";

class Favorites extends Component {
  componentDidMount() {
    this.props.getFavorite();
  }

  render() {
    const { favorite, setCity, setFavoriteAsync } = this.props;

    return (
      <>
        {favorite.length ? (
          <FavoritesFull
            key={favorite.size}
            favorite={favorite}
            setCity={setCity}
            setFavoriteAsync={setFavoriteAsync}
          />
        ) : (
          <FavoritesEmpty />
        )}
      </>
    );
  }
}

Favorites.propTypes = {
  favorite: PropTypes.array,
  getFavorite: PropTypes.func,
  setFavoriteAsync: PropTypes.func,
  setCity: PropTypes.func
};

export default withPrivateRoute(Favorites);
