import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Menu extends Component {

    render() {
        return <List component="nav">
        <ListItem >
          <a href="/">Notes</a>
        </ListItem>
        <ListItem >
          <a href="/projects">Projects</a>
        </ListItem>
      </List>
    }
}