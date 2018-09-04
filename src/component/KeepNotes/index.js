import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import AddANote from './AddANote';
import Notes from './Notes';
import Projects from './Projects';
import Menu from './Menu';

const styles = {
    section : {
        margin: '4em auto',
        width: '100%',
        maxWidth: '1040px'
    }
}

export default class KeepNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    addNote(note) {
        this.setState({
            notes: [...this.state.notes, note]
        })
    }

    deleteNote(noteId) {
        this.setState({
            notes: this.state.notes.filter(n => {
                        if(n.id !== noteId){
                            return n;
                        }
                    })
        })
        
    }

    render() {
        return <Fragment>
            <Header />
            <section style={styles.section}>
            <Menu />
            <Router>
            <Switch>
                <Route exact path='/' render={(props) => <Fragment><AddANote onNewNote={this.addNote.bind(this)} /> <Notes notes={this.state.notes} onDelete={this.deleteNote.bind(this)}/></Fragment>}  />
                <Route exact path='/projects' render={(props) => <Projects />} />
            </Switch>
            </Router>
            </section>
            
        </Fragment>
    }
}