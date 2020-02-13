import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteNote, editNote } from '../actions/notes'

class ViewNote extends Component {
  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  // handleDelete = event => {
  //   event.preventDefault();
  //   this.props.addDelete(this.state);
  // }

  render() {
    return(
      <div>
        <div>Edit Note</div>
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
              onClick={e => {
                e.preventDefault();
                console.log("DELETING the note with Id: ", this.props.note.id);
                // this.props.delete(this.props.note.id);
              } }
            >Delete</button>
            <button
              name="edit"
              onClick={e => {
                e.preventDefault();
                console.log("EDITING the note: ", this.props.note);
                // this.props.history.push('/edit/'+this.props.note.id)
                // this.props.edit(this.props.note);
              } }
            >Edit</button>
          </div>
       </form>
      </div>
    )
  }
}

const mapStateToProps = (state, note) => {
  console.log("viewNote:", state)
  return {
    note: state.allNotes.notes[0],
    // editing: state.editing
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    delete: noteId => dispatch(deleteNote(noteId)),
    edit: note => dispatch(editNote(note))
  }
}



// const mapDispatchToProps = dispatch => {
//   return {
//     editNote: note => dispatch(editNote(note))
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(ViewNote);

