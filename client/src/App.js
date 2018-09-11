import "@material-ui/core";
import React, { Component } from "react";
import MainLayout from "./components/MainLayout";
require("dotenv").config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout />
      </div>
    );
  }
}

export default App;
