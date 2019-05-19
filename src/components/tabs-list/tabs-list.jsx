import React from "react";
import PropTypes from "prop-types";

import Tab from "../tab/tab.jsx";

const TabsList = ({tabs}) => {
  const getTabs = () => {
    return tabs.map((item, index) => {
      return (
        <Tab key={`tab-city-${index}`} label={item.city} isActive={item.isActive} />
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
  tabs: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
        isActive: PropTypes.bool
      })
  )
};
export default TabsList;
