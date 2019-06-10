import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";

const Layout = ({ children, isAuthenticated, user }) => {
  return (
    <>
      <Header isAuthenticated={isAuthenticated} user={user} />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

export default Layout;
