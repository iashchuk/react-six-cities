import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Tab = ({ label, isActive, setActiveItem, setCity }) => {
  const onClick = (evt) => {
    evt.preventDefault();
    setActiveItem();
    setCity();
  };

  return (
    <li className="locations__item">
      <a
        className={cn(`locations__item-link tabs__item`, {
          [`tabs__item--active`]: isActive
        })}
        onClick={onClick}
      >
        <span>{label}</span>
      </a>
    </li>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  setActiveItem: PropTypes.func,
  setCity: PropTypes.func
};

export default Tab;
