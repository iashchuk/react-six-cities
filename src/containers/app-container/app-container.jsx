import React from "react";
import { connect } from "react-redux";

import App from "../../components/app/app.jsx";

export const AppContainer = (props) => {
  return <App {...props} />;
};

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(AppContainer);
