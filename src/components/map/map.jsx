import React, {Component} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends Component {
  constructor(props) {
    super(props);
  }

  _initCard() {
    const {cards} = this.props;
    const city = [52.38333, 4.9];
    const zoom = 12;
    const icon = leaflet.icon({
      iconUrl: `img/icon-pin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }
      )
      .addTo(map);

    cards.map((card) => {
      leaflet.marker(card.coords, {icon, title: card.title}).addTo(map);
    });
  }

  componentDidMount() {
    this._initCard();
  }

  render() {
    return (
      <div
        id="map"
        style={{
          height: `800px`,
          top: `170px`
        }}
      />
    );
  }
}

Map.propTypes = {
  cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageExtension: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        rating: PropTypes.number,
        isPremium: PropTypes.bool
      })
  )
};

export default Map;