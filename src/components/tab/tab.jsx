import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Tab = ({ label, city, fillOffers }) => {
  return (
    <li className="locations__item">
      <a
        className={cx(`locations__item-link tabs__item`, {
          [`tabs__item--active`]: label === city
        })}
        href="#"
        onClick={(evt) => {
          evt.preventDefault();

          fillOffers();
        }}
      >
        <span>{label}</span>
      </a>
    </li>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  fillOffers: PropTypes.func
};

export default Tab;
