import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import withPrivateRoute from "../../hocs/with-private/with-private.js";
import SvgSprite from "../svg-sprite/svg-sprite.jsx";
import FavoritesFull from "../favorites-full/favorites-full.jsx";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";

class Favorites extends Component {
  componentDidMount() {
    this.props.getFavorite();
  }

  render() {
    const {
      email,
      avatarUrl,
      isAuthenticated,
      favorite,
      setFavoriteAsync
    } = this.props;
    return (
      <>
        <SvgSprite />
        <Header
          email={email}
          avatarUrl={avatarUrl}
          isAuthenticated={isAuthenticated}
        />
        {favorite.length ? (
          <FavoritesFull
            favorite={favorite}
            setFavoriteAsync={setFavoriteAsync}
          />
        ) : (
          <FavoritesEmpty />
        )}

        <Footer />
      </>
    );
  }
}

Favorites.propTypes = {
  favorite: PropTypes.array,
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  getFavorite: PropTypes.func
};

export default withPrivateRoute(Favorites);
