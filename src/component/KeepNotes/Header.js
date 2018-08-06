import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NoteIcon from '@material-ui/icons/Note';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#3f51b5' }, // Purple and green play nicely together.
      secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
  });

export default class Header extends Component {
    render() {
        return <MuiThemeProvider theme={theme}>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                <IconButton color="inherit" aria-label="Menu">
                    <NoteIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                    My Notes (Keep)
                </Typography>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>;
    }
}