import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/containers/NotesContainer';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <NotesContainer />
      </div>
    );
  }
}

export default App;