import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Tab = ({ label, city, fillOffers }) => {
  const isActive = label === city;

  const onClick = (evt) => {
    evt.preventDefault();
    fillOffers();
  };

  return (
    <li className="locations__item">
      <a
        className={cn(`locations__item-link tabs__item`, {
          [`tabs__item--active`]: isActive
        })}
        href="#"
        onClick={onClick}
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
