import React, { PureComponent } from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: -1
      };

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    componentWillUnmount() {
      this.setState({
        activeItem: -1
      });
    }

    _setActiveItem(value) {
      this.setState({ activeItem: value });
    }

    render() {
      const { activeItem } = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          setActiveItem={this._setActiveItem}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
