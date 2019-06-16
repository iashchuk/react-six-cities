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
    const { favorite, setFavoriteAsync } = this.props;

    return (
      <>
        {favorite.length ? (
          <FavoritesFull
            key={favorite.size}
            favorite={favorite}
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
  setFavoriteAsync: PropTypes.func
};

export default withPrivateRoute(Favorites);
