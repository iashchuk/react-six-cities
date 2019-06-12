import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import SvgSprite from "../svg-sprite/svg-sprite.jsx";

class Layout extends Component {
  componentDidMount() {
    this.props.checkLoginAsync();
    this.props.getData();
  }

  render() {
    const { children, location, isAuthenticated, user } = this.props;
    const isLoginPage = location.pathname === `/login`;
    return (
      <div className={cn(`page page--gray`, { [`page--login`]: isLoginPage })}>
        <SvgSprite />
        <Header isAuthenticated={isAuthenticated} user={user} />
        {children}
        {!isLoginPage && <Footer />}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  getData: PropTypes.func,
  checkLoginAsync: PropTypes.func
};

export default Layout;
