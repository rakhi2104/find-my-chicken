import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGl from "mapbox-gl/dist/mapbox-gl.js";
import React, { Component } from "react";
import PropTypes from 'prop-types';

const TOKEN =
  "pk.eyJ1IjoicmFraGkyMTA0IiwiYSI6ImNqbG04aHNrcDEyNG4za2wxc3NsYnhzaGQifQ.bdS6WhHrWfDE11LrybUoNw";
MapboxGl.accessToken = TOKEN;

export default class MapComp extends Component {
  constructor(props) {
    super(props);
    this.map = undefined;
    this.container = undefined;
    this.tooltip = undefined;
  }

  componentDidUpdate(oldProps) {
    if (oldProps.mapTheme !== this.props.themeStyle) {
      this.map.setStyle(
        "mapbox://styles/mapbox/" + this.props.themeStyle + "-v9"
      );
    }
  }

  componentDidMount() {
    const { location: { lat, lng }, zoom } = this.props;

    this.map = new MapboxGl.Map({
      container: this.container,
      center: [lng, lat],
      // interactive: false,
      style: "mapbox://styles/mapbox/" + this.props.themeStyle + "-v9",
      zoom
    });

    this.tooltip = new MapboxGl.Marker(this.tooltipContainer, {
      offset: [0, 0]
    })
      .setLngLat([0, 0])
      .addTo(this.map);

    // map.on('mousemove', (e) => {
    //   const features = map.queryRenderedFeatures(e.point);
    //   tooltip.setLngLat(e.lngLat);
    //   map.getCanvas().style.cursor = features.length ? 'pointer' : '';
    //   // this.setTooltip(features);
    // });

    // const marker = new MapboxGl.Marker({
    //     setLngLat: [lat, lng]
    // }).addTo(map)
  }

  render() {
    return (
      <div className="deep-back">
        <div
          ref={el => (this.container = el)}
          className="Map absolute top right left bottom"
        />
      </div>
    );
  }
}

MapComp.proptypes = {
  location: PropTypes.shape({
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  themeStyle: PropTypes.string.isRequired,
};
