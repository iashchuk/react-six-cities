import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BASE_URL = `https://es31-server.appspot.com/six-cities`;

const Header = ({ user, isAuthenticated }) => {
  const { email, avatarUrl } = user;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to="/favorites"
              className="header__logo-link header__logo-link--active"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  to="/login"
                  className="header__nav-link header__nav-link--profile"
                >
                  {!isAuthenticated ? (
                    <>
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__user-name user__name">
                        Sign in
                      </span>
                    </>
                  ) : (
                    <>
                      <div
                        className="header__avatar-wrapper user__avatar-wrapper"
                        style={{
                          backgroundImage: `url(${BASE_URL}${avatarUrl})`,
                          borderRadius: `50px`
                        }}
                      />
                      <span className="header__user-name user__name">
                        {email}
                      </span>
                    </>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

export default Header;
