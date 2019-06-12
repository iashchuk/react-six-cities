import React from "react";
import { connect } from "react-redux";

import Layout from "../../components/layout/layout.jsx";
import { getData } from "../../redux/fetch/actions";
import { checkLoginAsync } from "../../redux/auth/actions";

export const LayoutContainer = (props) => {
  return <Layout {...props} />;
};

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    user: auth.user
  };
};

const mapDispatchToProps = {
  checkLoginAsync,
  getData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutContainer);
