import { CardContent, LinearProgress, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import React, { Component } from "react";

export default class Loading extends Component {

  render() {
    return (
      <Card>
        <CardContent>
          <Typography component="h2">Please Wait ...</Typography>
          <LinearProgress />
        </CardContent>
      </Card>
    );
  }
}
