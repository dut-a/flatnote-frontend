import React, { Component } from 'react';
import CreateNote from './components/createNote'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <CreateNote />
      </div>
    );
  }
}

export default App;