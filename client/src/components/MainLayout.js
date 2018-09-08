import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MapComp from './MapComp';
import IPCard from './IPCard';
import RecipeCard from './RecipeCard';
import Credits from './Credits';

import axios from 'axios';
import Loading from './Loading';
import { Card, Typography } from '@material-ui/core';

// const styles = theme => ({
//     button: {
//       margin: theme.spacing.unit,
//     },
//     extendedIcon: {
//       marginRight: theme.spacing.unit,
//     },
//   });

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData:{
                "ip": "127.0.0.1",
                "language": "en-GB,en-US;q=0.9,en;q=0.8",
                "software": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36"
            },
            loading: true,
            location: null,
            mapTheme: 0,
            error: null,
            pos: null
        }

        const pos = null;

        this.getIP = this.getIP.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }

    getIP = () => {
        // axios.get('http://localhost:5000/api/').then((x) => {
        //     this.setState({
        //         cardData: x
        //     })
        //     this.getLocation(x.ip);
        // });

        this.getLocation('8.8.8.8');

    }

    getLocation(ipAddr) {
        axios.get(`https://ipapi.co/${ipAddr}/json/`).then((resp) => {
            console.log(resp.data);
            this.setState({
                location: resp.data,
                loading: false,
                error: false,
                pos: { 
                    "lat": resp.data.latitude, 
                    "lng": resp.data.longitude
                }
            })
            console.log(this.state);
        }).catch(err => {
            this.setState({
                error: `${err}`,
                loading: false
            })
        })

        // this.pos = [this.state.location.latitude, this.state.location.longitude];
    }

    componentDidMount() {
        this.getIP();
    }

    render() {
        const { loading } = this.state;
        if( loading ) {
            return (
                <Loading/>
            )
        }

        if(!loading) {
            return (
                <div>
                    <Grid container className="root">
                        <Grid item sm={1} className="darker" >
                            {/* <Grid container>
                                <Grid item sm={6}>
                                    <Card>
                                        <img width="120" height="120" src="chicken.jpg"/>
                                    </Card>
                                    <Typography>
                                        Find My Chicken
                                    </Typography>
                                </Grid>
                                <Grid item sm={6}>
                                </Grid>
                            </Grid> */}
                            <IPCard cardData={this.state.cardData}></IPCard>
                            <RecipeCard location={this.state.location} cardData={this.state.cardData}></RecipeCard>
                            <Credits></Credits>
                        </Grid> 
                        <Grid item sm={11} className="deep-back">
                            <MapComp location={this.state.pos} mapTheme="0"/>
                        </Grid>
                    </Grid>
                </div>

            )
        }

    }
}