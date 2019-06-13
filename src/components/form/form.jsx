import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { SortCases } from "../../helpers/sort-cases.js";

const Form = ({ isSortMenuOpen, sortType, setSortType, toggleSortMenu }) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={toggleSortMenu}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={cn(`places__options places__options--custom`, {
          [`places__options--opened`]: isSortMenuOpen
        })}
      >
        <li
          className={cn(`places__option`, {
            [`places__option--active`]: sortType === SortCases.POPULAR
          })}
          tabIndex="0"
          onClick={setSortType}
        >
          Popular
        </li>
        <li
          className={cn(`places__option`, {
            [`places__option--active`]: sortType === SortCases.PRICE_LOW
          })}
          tabIndex="0"
          onClick={setSortType}
        >
          Price: low to high
        </li>
        <li
          className={cn(`places__option`, {
            [`places__option--active`]: sortType === SortCases.PRICE_HIGH
          })}
          tabIndex="0"
          onClick={setSortType}
        >
          Price: high to low
        </li>
        <li
          className={cn(`places__option`, {
            [`places__option--active`]: sortType === SortCases.TOP_RATED
          })}
          tabIndex="0"
          onClick={setSortType}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
};

Form.propTypes = {
  isSortMenuOpen: PropTypes.bool,
  sortType: PropTypes.string,
  setSortType: PropTypes.func,
  toggleSortMenu: PropTypes.func
};

export default Form;
