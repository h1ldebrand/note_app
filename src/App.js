import React, { Component } from 'react';
import NoteGrid from './components/NoteGrid';
import NoteEditor from './components/NoteEditor';

import './App.css';

class App extends Component {

  constructor(props){
      super(props);

      this.state = {
          notes: [
              {id:1, color: 'yellow', text: 'Hi I am the first note here!'},
              {id:2, color: 'yellow', text: 'Hi I am the second note here!'}
              ]
      }

      this.handleNoteAdd = this.handleNoteAdd.bind(this);
  }

  handleNoteAdd(newNote){
      this.setState({
        notes: [newNote, ...this.state.notes]
      })
  }

  render() {
    return (
      <div className="app">
        <h2 className="app__header">NotesApp</h2>

        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <NoteGrid notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
