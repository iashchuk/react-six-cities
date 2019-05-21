import React from "react";
import PropTypes from "prop-types";

import Tab from "../tab/tab.jsx";

const TabsList = ({ tabs, city, fillOffers }) => {
  const getTabs = () => {
    return tabs.map((item, index) => {
      return (
        <Tab
          key={`tab-city-${index}`}
          label={item}
          city={city}
          fillOffers={() => fillOffers(item)}
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
  city: PropTypes.string.isRequired,
  fillOffers: PropTypes.func
};
export default TabsList;
