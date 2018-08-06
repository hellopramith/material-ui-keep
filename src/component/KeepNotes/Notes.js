import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Note from './Note';

export default class Notes extends Component {
    render() {
        return <Grid container spacing={24}>
            {this.props.notes.map(n => <Note key={n.id} onDelete={this.props.onDelete} note={n}/>)}
        </Grid>
    }
}