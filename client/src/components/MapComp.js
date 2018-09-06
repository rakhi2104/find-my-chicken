import React, {Component} from 'react';
import mapboxgl, { Marker } from 'mapbox-gl';
import IPCard from './IPCard';

mapboxgl.accessToken = "pk.eyJ1IjoicmFraGkyMTA0IiwiYSI6ImNqbG04aHNrcDEyNG4za2wxc3NsYnhzaGQifQ.bdS6WhHrWfDE11LrybUoNw"

class MapComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 17.424903,
            lng: 78.474371,
            zoom: 9.5,
            height: 480
        };
    }
    
    componentDidMount() {
        const {lng, lat, zoom} = this.state;

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/dark-v9',
            interactive: false,
            center: [lng, lat],
            zoom
        });

        // const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);


        map.on('move', () => {
            const {lng, lat} = map.getCenter();

            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

        

    }

    render() {
        // const {lat, lng, zoom}= this.state;
        return (
            <div style={{zIndex: -11000}}>
                <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
            </div>
        );
    }
}

export default MapComp;