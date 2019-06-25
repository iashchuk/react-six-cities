import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import FavoritesFull from "../favorites-full/favorites-full.jsx";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";
import withPrivateRoute from "../../hocs/with-private/with-private.js";
class Favorites extends PureComponent {
  componentDidMount() {
    this.props.getFavoriteAsync();
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
  getFavoriteAsync: PropTypes.func,
  setFavoriteAsync: PropTypes.func,
  setCity: PropTypes.func
};

export default withPrivateRoute(Favorites);
