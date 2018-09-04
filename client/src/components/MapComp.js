import React, {Component} from 'react';
import MapGL, {NavigationControl} from 'mapbox-gl';

const TOKEN = process.env.MAPBOX_TOKEN;
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

class MapComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 37.785164,
                longitude: -100,
                zoom: 2.8,
                bearing: 0,
                pitch: 0,
                width: 500,
                height: 500,
            }
        };
    }
    render() {
        return (
            <div>
                <MapGL
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxApiAccessToken={TOKEN}>
                    <div className="nav" style={navStyle}>
                        <NavigationControl/>
                    </div>
                </MapGL>
            </div> 
        );
    }
}

export default MapComp;