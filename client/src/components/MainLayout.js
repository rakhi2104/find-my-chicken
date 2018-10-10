import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import InvertColors from "@material-ui/icons/InvertColors";
import axios from "axios";
import React, { Component } from "react";
import Credits from "./Credits";
import IPCard from "./IPCard";
import Loading from "./Loading";
import MapComp from "./MapComp";
import RecipeCard from "./RecipeCard";
import publicIp from 'public-ip'
import { detect } from 'detect-browser'

export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.browser = detect()
    this.state = {
      cardData: {
        ip: null,
        
      },
      loading: true,
      location: null,
      mapTheme: false,
      error: null,
      pos: {
        lat: 17.740426,
        lng: 83.217264,
      },
      zoom: 12,
      width: "100%",
      height: "100%",
      themeStyle: 'light',
    };

    this.getLocation = this.getLocation.bind(this);
    this.changeMapTheme = this.changeMapTheme.bind(this);
  }

  getLocation(ipAddr) {
    axios
      .get(`https://ipapi.co/${ipAddr}/json/`)
      .then(resp => {
        // console.log(resp.data);
        this.setState({
          location: resp.data,
          loading: false,
          error: false,
          pos: {
            lat: resp.data.latitude,
            lng: resp.data.longitude
          }
        });
        // console.log(this.state);
      })
      .catch(err => {
        this.setState({
          error: `${err}`,
          loading: false
        });
      });
    // this.pos = [this.state.location.latitude, this.state.location.longitude];
  }

  changeMapTheme() {
    this.setState({
      themeStyle: this.state.themeStyle === 'light' ? 'dark' : 'light',
    });
  }

  componentDidMount() {
    publicIp.v4()
    .then(ip => {
      this.getLocation(ip)
      this.setState({
        cardData: {
          ip,
          language: "en-GB,en-US;q=0.9,en;q=0.8",
          software: {
            name: this.browser.name,
            os: this.browser.os,
            version: this.browser.version
          }
        }
      })
    })

  }

  render() {
    const { loading, pos, zoom, cardData, location, themeStyle } = this.state;
    if (loading) {
      return <Loading />;
    }

    if (!loading) {
      return (
        <div>
          <Grid container className="root">
            <Grid item sm={1} className="darker">
              <IPCard cardData={cardData} />
              <RecipeCard
                className="small-margins"
                location={location}
                cardData={cardData}
              />
              <Credits />
              <Button
                variant="fab"
                color="secondary"
                className="fabButton"
                onClick={() => this.changeMapTheme()}
              >
                <InvertColors />
              </Button>
            </Grid>
            <Grid item sm={11} className="deep-back">
              <MapComp
                location={pos}
                themeStyle={themeStyle}
                zoom={zoom}
              />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}
