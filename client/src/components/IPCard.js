import { Grid, Tooltip } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Help from "@material-ui/icons/Help";
import PropTypes from "prop-types";
import React, { Component, cloneElement } from "react";

const styles = theme => ({
  card: {
    minWidth: 480
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

const bull = <span className="bullet">•</span>;

class IPCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    const { classes } = this.props;
    const ip = this.props.cardData.ip.split('.');
    // const ip = "8.8.8.8".split(".");
    // console.log(bull);
    return (
      <Card className="abs-out top-margin">
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Your IP Address
            <span role="img" aria-label="chicken">
              🐔
            </span>
          </Typography>
          <Grid container>
            <Grid item sm={11}>
              <Typography variant="h5" component="h2">
                {ip.reduce((res, item, key) => {
                  let _bull = cloneElement(bull, { key })
                  return [...res, _bull, item];
                })}
              </Typography>
            </Grid>
            <Grid item sm={1}>
              <Tooltip
                placement="right"
                title="An Internet Protocol address (IP address) is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication"
              >
                <Help color="disabled" />
              </Tooltip>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

IPCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IPCard);
