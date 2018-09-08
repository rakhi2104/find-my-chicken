import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InvertColors from '@material-ui/icons/InvertColors';

const styles = theme => ({
    card: {
        minWidth: 480,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
      },
    media: {
        height: 48,
        width: 48,
        // paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    }
})

class Credits extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <Card className="abs-out">
                <CardContent>
                    <Grid container className="root">
                        <Grid item sm={11} className="pad-top">
                            <Typography className="no-underline" color="textSecondary">
                                Made With ❤ using &nbsp;
                                    <a href="https://reactjs.org/">React JS</a> 
                                    + <a href="https://www.mapbox.com/">Mapbox</a>
                                    + <a href="https://material-ui.com/">Material-UI</a>
                                    + <a href="https://ipapi.co/">ipapi</a>
                            </Typography>
                        </Grid> 
                        {/* <Grid item sm={1}>
                            <IconButton className="">
                                <InvertColors/>
                            </IconButton>
                        </Grid> */}

                    </Grid>
                    <Grid container>
                        <Grid item sm={12} className="authors">
                            <Typography className={classes.heading}>
                                    <a href="https://github.com/rakhi2104"> Rakesh Peela </a> &amp; <a href="https://github.com/sakethramanujam"> Saketha Ramanujam </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }

}

Credits.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Credits);