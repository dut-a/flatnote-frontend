import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  finishViewing,
  startDeleting,
  finishDeleting,
  startEditing,
  finishEditing,
  deleteNoteFromApi
} from '../actions/notes';

class ViewNote extends Component {

  stopViewing = () => this.props.stopViewing();

  startEditing = () => this.props.startEditing();
  stopEditing = () => this.props.stopEditing();

  startDeleting = () => this.props.startDeleting();
  stopDeleting = () => this.props.stopDeleting();

  handleEditing = event => {
    event.preventDefault();
    // stop everything else
    this.stopViewing();
    this.stopDeleting();

    // start editing
    this.startEditing();
  }

  handleDelete = event => {
    event.preventDefault();
    // stop everything else
    this.stopViewing();
    this.stopEditing();

    // start editing
    this.startDeleting();
    console.log("deleting noteId: ", this.props.note.id);
    this.props.deleteNote(this.props.note.id);
  }

  render() {
    return(
      <div className="note-detail">
        <form onSubmit={e => this.handleSubmit(e) } >
          <div>
            <h1>{this.props.note.title}</h1>
          </div>
          <div className="note-body">
            <p>{this.props.note.details}</p>
          </div>
          <div>
            <p className="note-tags-label">Tags</p>
            <p id="note-tags-body">{this.props.note.tags}</p>
          </div>
          <div id="note-body-buttons">
            <button
              className="btn btn-danger btn-sm btn-note"
              name="delete"
              onClick={e => this.handleDelete(e) }
            >Delete</button>
            <button
              className="btn btn-info btn-sm btn-note"
              name="edit"
              onClick={e => this.handleEditing(e) }
            >Edit</button>
          </div>
       </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    note: state.noteInView.data,
    fetching: state.fetching,
    viewing: state.viewing,
    editing: state.editing,
    deleting: state.deleting
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    stopViewing: () => dispatch(finishViewing()),
    startEditing: () => dispatch(startEditing()),
    stopEditing: () => dispatch(finishEditing()),
    startDeleting: () => dispatch(startDeleting()),
    stopDeleting: () => dispatch(finishDeleting()),
    deleteNote: noteId => dispatch(deleteNoteFromApi(noteId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewNote);

