import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Tab = ({label, isActive}) => {
  return (
    <li className="locations__item">
      <a
        className={cx(`locations__item-link tabs__item`, {
          [`tabs__item--active`]: isActive
        })}
        href="#"
      >
        <span>{label}</span>
      </a>
    </li>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export default Tab;
