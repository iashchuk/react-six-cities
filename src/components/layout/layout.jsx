import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import SvgSprite from "../svg-sprite/svg-sprite.jsx";

class Layout extends Component {
  componentDidMount() {
    this.props.checkLoginAsync();
    this.props.getData();
  }

  render() {
    const { children, isAuthenticated, user } = this.props;
    return (
      <>
        <SvgSprite />
        <Header isAuthenticated={isAuthenticated} user={user} />
        {children}
        <Footer />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  getData: PropTypes.func,
  checkLoginAsync: PropTypes.func
};

export default Layout;
