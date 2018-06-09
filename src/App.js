import React, { Component } from 'react';
import Note from './components/Note';
import NoteGrid from './components/NoteGrid';
import NoteEditor from './components/NoteEditor';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>NotesApp</h2>

        <NoteEditor/>
        <NoteGrid />
      </div>
    );
  }
}

export default App;
