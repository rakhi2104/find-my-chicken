import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, LinearProgress } from '@material-ui/core';

export default class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Card>
                <CardContent>
                    <Typography component="h2">
                        Please Wait ...
                    </Typography>
                    <LinearProgress></LinearProgress>
                </CardContent>
            </Card>
        )

    }
}