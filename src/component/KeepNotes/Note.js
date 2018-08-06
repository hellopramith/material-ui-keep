import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DeleteIcon from '@material-ui/icons/Delete';

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


export default class Note extends Component {

    deleteNote(e) {
        e.preventDefault();
        this.props.onDelete(this.props.note.id);
    }

    render() {
        return <Grid item xs={4}>
        <Card>
            <CardContent style={styles.CardContent}>
                <h4>{this.props.note.title}</h4>
                <pre style={styles.pre}>{this.props.note.note}</pre>
                <BottomNavigation showLabels style={styles.BottomNavigation} >
                    <BottomNavigationAction data-id={this.props.note.id}  onClick={this.deleteNote.bind(this)} label="Delete" icon={<DeleteIcon />} />
                </BottomNavigation>
            </CardContent>
        </Card>
        </Grid>
    }
}