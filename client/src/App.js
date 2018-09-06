import React, { Component } from 'react';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css'

import MapComp from './components/MapComp';
import IPCard from './components/IPCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="ip-card" style={{zIndex: 10000, backgroundColor: "#fff"}}>
          <IPCard/>
        </div>
        <MapComp style={{zIndex: -1111}}/>
      </div>
    );
  }
}

export default App;
