import React, { PureComponent } from "react";
import { SortCases } from "../../helpers/sort-cases.js";

const withSortOffers = (Component) => {
  class WithSortOffers extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isSortMenuOpen: false,
        sortType: SortCases.POPULAR
      };

      this.sortOptions = {
        [SortCases.PRICE_LOW]: (a, b) => a.price - b.price,
        [SortCases.PRICE_HIGH]: (a, b) => b.price - a.price,
        [SortCases.TOP_RATED]: (a, b) => b.rating - a.rating
      };

      this._toggleSortMenu = this._toggleSortMenu.bind(this);
      this._closeSortMenu = this._closeSortMenu.bind(this);
      this._setSortType = this._setSortType.bind(this);
      this._sortOffers = this._sortOffers.bind(this);
    }

    componentWillUnmount() {
      this._closeSortMenu();
    }

    _toggleSortMenu() {
      this.setState({
        isSortMenuOpen: !this.state.isSortMenuOpen
      });
    }

    _closeSortMenu() {
      this.setState({
        isSortMenuOpen: false
      });
    }

    _setSortType(evt) {
      this.setState({ sortType: evt.target.textContent });
      this._closeSortMenu();
    }

    _sortOffers(offers, type) {
      if (type === SortCases.POPULAR) {
        return offers;
      }

      return [...offers].sort((a, b) => this.sortOptions[type](a, b));
    }

    render() {
      const { isSortMenuOpen, sortType } = this.state;

      return (
        <Component
          {...this.props}
          isSortMenuOpen={isSortMenuOpen}
          sortType={sortType}
          toggleSortMenu={this._toggleSortMenu}
          setSortType={this._setSortType}
          sortOffers={this._sortOffers}
        />
      );
    }
  }

  return WithSortOffers;
};

export default withSortOffers;
