import React, { Component } from 'react';
import MapboxGl from 'mapbox-gl/dist/mapbox-gl.js';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = "pk.eyJ1IjoicmFraGkyMTA0IiwiYSI6ImNqbG04aHNrcDEyNG4za2wxc3NsYnhzaGQifQ.bdS6WhHrWfDE11LrybUoNw";

export default class MapComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 17.740426,
            lng: 83.217264,
            zoom: 12,
            width: '100%',
            height: '100%',
            themeStyle: this.props.mapTheme
        }

    }

    componentDidMount() {
        const {lat, lng} = this.props.location;
        const {zoom} = this.state;
        MapboxGl.accessToken = TOKEN;
        const map = new MapboxGl.Map({
            container: this.container,
            style: 'mapbox://styles/mapbox/'+ (this.state.themeStyle ? 'dark' : 'light') +'-v9',
            center: [lng, lat],
            interactive: false,
            zoom
        });
        // const marker = new MapboxGl.Marker({
        //     setLngLat: [this.state.lat, this.state.lng]
        // }).addTo(map)
    }

    render() {
        // const {lat, lng, zoom} = this.state;
        console.log(this.props.location)
        return (
            <div className="deep-back">
                <div ref={el => this.container = el} className="Map absolute top right left bottom" />
             </div>
        )
    }
}