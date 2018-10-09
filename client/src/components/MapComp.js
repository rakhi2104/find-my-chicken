import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGl from "mapbox-gl/dist/mapbox-gl.js";
import React, { Component } from "react";

const TOKEN =
  "pk.eyJ1IjoicmFraGkyMTA0IiwiYSI6ImNqbG04aHNrcDEyNG4za2wxc3NsYnhzaGQifQ.bdS6WhHrWfDE11LrybUoNw";

export default class MapComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 17.740426,
      lng: 83.217264,
      zoom: 12,
      width: "100%",
      height: "100%",
      themeStyle: this.props.mapTheme
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mapTheme !== this.state.themeStyle) {
      this.setState({
        themeStyle: this.props.mapTheme
      });
    }
  }

  componentDidMount() {
    const { lat, lng } = this.props.location;
    const { zoom } = this.state;
    MapboxGl.accessToken = TOKEN;

    const map = new MapboxGl.Map({
      container: this.container,
      // style:
      //   "mapbox://styles/mapbox/" +
      //   (this.props.themeStyle ? "dark" : "light") +
      //   "-v9",
      center: [lng, lat],
      // interactive: false,
      zoom
    });
    map.setStyle(
      "mapbox://styles/mapbox/" +
        (this.props.themeStyle ? "dark" : "light") +
        "-v9"
    );

    const tooltip = new MapboxGl.Marker(this.tooltipContainer, {
      offset: [0, 0]
    })
      .setLngLat([0, 0])
      .addTo(map);

    // map.on('mousemove', (e) => {
    //   const features = map.queryRenderedFeatures(e.point);
    //   tooltip.setLngLat(e.lngLat);
    //   map.getCanvas().style.cursor = features.length ? 'pointer' : '';
    //   // this.setTooltip(features);
    // });

    // const marker = new MapboxGl.Marker({
    //     setLngLat: [this.state.lat, this.state.lng]
    // }).addTo(map)
  }

  render() {
    // const {lat, lng, zoom} = this.state;
    console.log(this.props.location);
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
