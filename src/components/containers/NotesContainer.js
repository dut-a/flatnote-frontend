
import React, { Component } from 'react';
import EditNote from '../editNote';
import ViewNote from '../viewNote';
import { connect } from 'react-redux'
import Note from '../Note';
import {
  fetchNotes,
  updateNoteInView,
  startViewing
} from '../../actions/notes';

class NotesContainer extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  handleClick = note => {
    this.props.updateCurrentNote(note);
    this.startViewing();
    console.log("notesContainer(), CURRENT PROPS:", this.props);
  }

  startViewing = () => {
    this.props.startViewing();
  }

  renderNotes = () => this.props.notes.map(note => {
    return <Note key={note.id} note={note} handleClick={this.handleClick} />
  });

  noNotes = () => <p>No notes added yet...</p>;
  
  handleLoading = () => {
    if(this.props.fetching) {
      return <div>Loading Data...</div>
    } else {
      return this.renderNotes();
    }
  }

  handleDetailPane = () => {
    if (this.props.viewing) {
      if (this.props.notes.length > 0 && this.props.noteInView !== null) {
        return <ViewNote note={this.props.noteInView} />;
      } else {
        return null;
      }
    } else if (this.props.editing) {
      console.log("notesContainer() version called...")
      return <EditNote note={this.props.note} />;
    } else {
      return null;
    }
  }
  
  render() {
    return (
      <div className="note-list">
      <div className="container">
        <div className="row">
          <div className="col-5 note-list-container" style={{}}>
            { this.props.notes.length > 0 ?
              this.handleLoading() : this.noNotes() }
          </div>
          <div className="col-7">
            { this.handleDetailPane() }
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  /* TODO:
    1. Refresh notes list after delete (deleted note shouldn't appear again).
    2. Look into why 'state.allNotes.notes' doesn't come back as is after 'delete'.
  */
  let currentNotes = state.allNotes.notes;
  if (currentNotes === undefined) {
    currentNotes = state.allNotes;
  }
  return {
    notes: currentNotes,
    fetching: state.fetching,
    editing: state.editing,
    adding: state.adding,
    viewing: state.viewing,
    noteInView: state.noteInView
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    updateCurrentNote: note => dispatch(updateNoteInView(note)),
    startViewing: () => dispatch(startViewing())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);


