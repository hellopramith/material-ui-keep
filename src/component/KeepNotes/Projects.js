import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const styles = {
    CardContent : {
        position: 'relative',
        paddingBottom: '60px'
    },
    BottomNavigation : {
        position: 'absolute',
        background: '#EEEEEE',
        width: '100%',
        bottom: 0,
        left: 0
    },
    pre : {
        fontFamily: 'Roboto'
    }
}


export default class Projects extends Component {

    render() {
        return <Grid item xs={4}>
        <Card>
            <CardContent style={styles.CardContent}>
                Projects
            </CardContent>
        </Card>
        </Grid>
    }
}