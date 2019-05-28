import React from "react";
import PropTypes from "prop-types";

import Tab from "../tab/tab.jsx";
import withActiveItem from "../../hocs/with-active-item.js";

const TabsList = ({ tabs, city, activeItem, setActiveItem, fillOffers }) => {
  const getTabs = () => {
    return tabs.map((item, index) => {
      const id = `${item.name}-${index}`;
      const isActive = activeItem === id || item.name === city;

      return (
        <Tab
          key={id}
          label={item.name}
          isActive={isActive}
          setActiveItem={() => setActiveItem(id)}
          fillOffers={() => fillOffers(item.name)}
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
  tabs: PropTypes.arrayOf(PropTypes.object),
  city: PropTypes.string.isRequired,
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func,
  fillOffers: PropTypes.func
};

export default withActiveItem(TabsList);
