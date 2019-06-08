import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import withLogin from "../../hocs/with-login/with-login.js";

const SignIn = ({
  authError,
  email,
  avatarUrl,
  isAuthenticated,
  handleInputChange,
  handleFormSubmit
}) => {
  return (
    <>
      <Header
        email={email}
        avatarUrl={avatarUrl}
        isAuthenticated={isAuthenticated}
      />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  onChange={handleInputChange}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  onChange={handleInputChange}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
              <span>{authError}</span>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

SignIn.propTypes = {
  authError: PropTypes.string,
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  isAuthorizationRequired: PropTypes.bool,
  loginAsync: PropTypes.func,
  setAuthRequired: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleFormSubmit: PropTypes.func
};

export default withLogin(SignIn);
