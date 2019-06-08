import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const withLogin = (Component) => {
  class WithLogin extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleInputChange(evt) {
      const { value, name } = evt.target;

      this.setState({
        [name]: value
      });
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();

      const { email, password } = this.state;
      const { loginAsync } = this.props;

      loginAsync(email, password);
    }

    render() {
      return (
        <Component
          {...this.props}
          handleInputChange={this._handleInputChange}
          handleFormSubmit={this._handleFormSubmit}
        />
      );
    }
  }

  WithLogin.propTypes = {
    loginAsync: PropTypes.func.isRequired
  };

  return WithLogin;
};

export default withLogin;
