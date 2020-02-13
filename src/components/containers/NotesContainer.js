
import React, { Component } from 'react';
import CreateNote from '../createNote'
import EditNote from '../editNote';
import ViewNote from '../viewNote';
import { connect } from 'react-redux'
import Note from '../Note';

class NotesContainer extends Component {
  renderNotes = () => this.props.notes.map(note => {
    return <Note
              key={note.id}
              note={note}
            />
  });
  noNotes = () => <p>No notes added yet...</p>;
  
  render() {
    // let noteCount = this.props.notes.length;
    return (
      <div className="note-list">
      <div className="container">
        <div className="row">
          <div className="col-5">
            Notes list
            { this.props.notes.length > 0 ?
              this.renderNotes() : this.noNotes() }
          </div>
          <div className="col-7">
            Adding/Viewing/Editing
            <CreateNote />
            {this.props.editing ? <EditNote /> :
            this.props.notes.length > 0 ?
            <ViewNote note={this.props.notes[0]} /> : null }
          </div>
        </div>
      </div>


        {/* {this.state.editing ? <EditNote /> : <CreateNote /> } */}
        {/* <ListNotes notes={this.props.notes}/> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("notesContainer:", state)
  return {
    notes: state.allNotes.notes,
    editing: state.editing
  }
}

export default connect(mapStateToProps)(NotesContainer);