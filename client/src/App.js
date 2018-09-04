import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
// import Card from '@material-ui/core/Card'
// import { CardContent } from '@material-ui/core';

import IPCard from './components/IPCard';
import MapComp from './components/MapComp';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Welcome to React</h1>
          <Button variant="contained" color="primary">Alert</Button>
          <MapComp></MapComp>
      </div>
    );
  }
}

export default App;
