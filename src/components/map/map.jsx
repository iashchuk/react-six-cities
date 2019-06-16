import React, { Component } from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends Component {
  constructor(props) {
    super(props);
    this.settings = {
      center: props.city,
      zoom: 12,
      zoomControl: false,
      marker: true
    };
  }
  componentDidMount() {
    this._initMap();
  }

  componentDidUpdate(prevProps) {
    if (
      (this.props.activeItem !== prevProps.activeItem ||
        this.props.cards !== prevProps.cards,
      this.props.city !== prevProps.city)
    ) {
      this._layerGroup.clearLayers();
      this._map.setView(this.props.city, this.settings.zoom);
      this._addMarkers();
    }
  }

  get _icon() {
    return leaflet.icon({
      iconUrl: `img/icon-pin.svg`,
      iconSize: [30, 30]
    });
  }

  get _activeIcon() {
    return leaflet.icon({
      iconUrl: `img/icon-pin-active.svg`,
      iconSize: [30, 30]
    });
  }

  _addMarkers() {
    const { cards, activeItem } = this.props;
    const getIcon = (id) => (id === activeItem ? this._activeIcon : this._icon);
    this._layerGroup = leaflet.layerGroup().addTo(this._map);

    cards.map(({ id, location: { latitude, longitude }, title }) =>
      leaflet
        .marker([latitude, longitude], { icon: getIcon(id), title })
        .addTo(this._layerGroup)
    );
  }

  _initMap() {
    const { city } = this.props;
    this._map = leaflet.map(`map`, this.settings);
    this._map.setView(city, this.settings.zoom);
    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }
      )
      .addTo(this._map);
    this._addMarkers();
  }

  render() {
    return <div id="map" className={`cities-map`} />;
  }
}

Map.propTypes = {
  cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        type: PropTypes.string,
        price: PropTypes.number,
        currency: PropTypes.string,
        rating: PropTypes.number,
        isPremium: PropTypes.bool
      })
  ),
  city: PropTypes.arrayOf(PropTypes.number),
  activeItem: PropTypes.number
};

export default Map;
