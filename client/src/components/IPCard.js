import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
    card: {
        minWidth: 100,
        width: 180
    },
    title: {
        marginBottom: 16,
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    },
    bull: {
        fontSize: 12,
        marginLeft: 8,
        marginRight: 8
    }
};

class IPCard extends Component {
    constructor(props) {
        super(props);
        this.bull = <span className={styles.bull}>•</span>;
    }
    
    render (){
        return(
            <Card className={styles.card}>
                <CardContent>
                    <Typography className={styles.title} variant="headline" color="textSecondary" >
                        127{this.bull}0{this.bull}0{this.bull}1
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

IPCard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(IPCard);