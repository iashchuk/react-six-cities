import React from "react";
import PropTypes from "prop-types";

import Tab from "../tab/tab.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

const TabsList = ({ tabs, city, activeItem, setActiveItem, setCity }) => {
  const getTabs = () => {
    return tabs.map((item, index) => {
      const id = `${item}-${index}`;
      const isActive = activeItem === id || item === city;

      return (
        <Tab
          key={id}
          label={item}
          isActive={isActive}
          setActiveItem={() => setActiveItem(id)}
          setCity={() => setCity(item)}
        />
      );
    });
  };

  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">{getTabs()}</ul>
      </section>
    </div>
  );
};

TabsList.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string,
  activeItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setActiveItem: PropTypes.func,
  setCity: PropTypes.func
};

export default withActiveItem(TabsList);
