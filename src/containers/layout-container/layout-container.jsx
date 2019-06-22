import React from "react";
import { connect } from "react-redux";

import Layout from "../../components/layout/layout.jsx";
import { getDataAsync } from "../../redux/hotels/actions";
import { checkLoginAsync } from "../../redux/auth/actions";

export const LayoutContainer = (props) => {
  return <Layout {...props} />;
};

const mapStateToProps = ({ auth, router, hotels }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    location: router.location,
    offers: hotels.offers
  };
};

const mapDispatchToProps = {
  checkLoginAsync,
  getDataAsync
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutContainer);
