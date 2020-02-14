
import React, { Component } from 'react';
import CreateNote from '../createNote'
import EditNote from '../editNote';
import ViewNote from '../viewNote';
import { connect } from 'react-redux'
import Note from '../Note';
import {
  fetchNotes,
  updateNoteInView,
  startAdding,
  finishAdding,
  startViewing,
  finishViewing,
  startEditing,
  finishEditing
} from '../../actions/notes';

class NotesContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  handleClick = note => {
    this.props.updateCurrentNote(note);
    this.startViewing();
    console.log("CURRENT PROPS:", this.props);
  }

  startViewing = () => {
    this.props.startViewing();
  }

  // stopViewing = () => {
  //   this.props.stopViewing();
  // }

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
            { this.props.viewing ?
              ((this.props.notes.length > 0 && this.props.noteInView !== null) ?
                <ViewNote note={this.props.noteInView} /> : null) :
                (this.props.adding ? <CreateNote /> : <EditNote note={this.props.noteInView} />)
            }
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.allNotes.notes,
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
    startViewing: () => dispatch(startViewing()),
    // stopViewing: () => dispatch(stopViewing()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);


