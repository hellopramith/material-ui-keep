import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import NoteAddIcon from '@material-ui/icons/NoteAdd';


const styles = {
    paper : {
        padding: '0 1em .2em',
        margin: '0 auto 36px',
        maxWidth: '50%',
        minWidth: '320px'
    },
    icon : {
        marginRight: '5px'
    }
}

export default class AddANote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            note: '',
            title: ''
        }
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    handleChangeNote(event) {
        this.setState({note: event.target.value});
    }

    handleSubmitNote(event) {
        event.preventDefault();
        let note = {
            'id' : Math.floor(100000 + Math.random() * 900000),
            'note' : this.state.note,
            'title' : this.state.title,
        }
        if (this.state.note){
            this.props.onNewNote(note);

            this.setState({
                expanded: false,
                note: '',
                title: ''
            })
        }
    }

    handleExpand() {
        this.setState({expanded:true});
    }

    render() {
        return <Paper style={styles.paper}>
            <form noValidate onSubmit={this.handleSubmitNote.bind(this)} autoComplete="off">
                {this.state.expanded ? <TextField
                    label="Title"
                    value={this.state.title}
                    fullWidth
                    margin="normal"
                    onChange={this.handleChangeTitle.bind(this)}
                /> : null}
                <TextField
                    label="Take a Note"
                    value={this.state.note}
                    fullWidth
                    multiline
                    rowsMax="4"
                    onChange={this.handleChangeNote.bind(this)}
                    onClick={this.handleExpand.bind(this)}
                    margin="normal"
                />
                 <Button variant="contained" color="primary" onClick={this.handleSubmitNote.bind(this)}><NoteAddIcon style={styles.icon} />   Add Note </Button>
            </form>
        </Paper>
    }
}