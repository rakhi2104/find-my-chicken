import React, { Component } from 'react'
// import {Button} from '@material-ui/core'

export default class Toggle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleOn: false
        }
        this.switchToggle = this.switchToggle.bind(this);
    }

    switchToggle() {
        this.setState(state => ({
            toggleOn: !state.toggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.switchToggle}>
                { this.state.toggleOn ? "On" : "Off"}
            </button>
        )
    }
}