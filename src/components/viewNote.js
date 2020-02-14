import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteNote, editNote } from '../actions/notes'

import {
  startAdding,
  finishAdding,
  startViewing,
  finishViewing,
  startEditing,
  finishEditing
} from '../actions/notes';

class ViewNote extends Component {

  stopViewing = () => {
    this.props.stopViewing();
  }

  startEditing = () => {
    this.props.startEditing();
  }

  handleEditing = event => {
    event.preventDefault();
    this.stopViewing();
    this.startEditing();
    console.log("EDITING the note: ", this.props.note);
    console.log("CURRENT PROPS (VN):", this.props);
  }

  handleDelete = event => {
    event.preventDefault();
    this.props.addDelete(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e) } >
          <div>
            <h1>{this.props.note.title}</h1>
          </div>
          <div>
            <p>{this.props.note.details}</p>
          </div>
          <div>
            <label>
              Tags: <span>{this.props.note.tags}</span>
            </label>
          </div>
          <div>
            <button
              name="delete"
              onClick={e => this.handleEditing(e) }
            >Delete</button>
            <button
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
    editing: state.editing,
    adding: state.adding,
    viewing: state.viewing
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    delete: noteId => dispatch(deleteNote(noteId)),
    edit: note => dispatch(editNote(note)),
    stopViewing: () => dispatch(finishViewing()),
    startEditing: () => dispatch(startEditing()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewNote);

