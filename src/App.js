
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import NotesContainer from './components/containers/NotesContainer';
import Login from './components/Login';
import Logout from './components/Logout';
import CreateNote from './components/createNote';
import NavBar from './components/navBar';
import ViewNote from './components/viewNote';

const App = (props) => {
  return (
    <Router>
      <div className="container App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={NotesContainer} />
          <Route exact path="/notes/:id" render={(props) => {
              let notePosition = props.location.pathname.replace('/notes/', '');
              return (
                <ViewNote
                  note={props.allNotes.notes[notePosition]}
                />
              )
            }} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/new-note" component={CreateNote} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;