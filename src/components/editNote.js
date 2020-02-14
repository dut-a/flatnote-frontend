import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editNoteOnApi } from '../actions/notes'

class EditNote extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     title: this.props.note.title,
  //     details: this.props.note.details,
  //     tags: this.props.note.tags
  //   };
  // }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let note = this.state;
    this.props.editNoteOnApi(note);
  }

  render() {
    return(
      <div>
        <div>Edit Note</div>
        <form onSubmit={e => this.handleSubmit(e) } >
          <div>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={this.props.note.title}
                onChange={e => this.handleChange(e)}
              />&nbsp;
            </label>
          </div>

          <div>
            <label>
              Details:
              <textarea
                name="details"
                value={this.props.note.details}
                onChange={e => this.handleChange(e)}
              />
            </label>
          </div>

          <div>
            <label>
              Tags:
              <input
                type="text"
                name="tags"
                value={this.props.note.tags}
                onChange={e => this.handleChange(e)}
              />&nbsp;
            </label>
          </div>

          <div>
            <input type="submit" value="Save" />
          </div>
       </form>
      </div>
    )
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    // note: state.noteInView.data,
    note: state.allNotes,
    fetching: state.fetching,
    editing: state.editing,
    adding: state.adding,
    viewing: state.viewing
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    // delete: noteId => dispatch(deleteNote(noteId)),
    // edit: note => dispatch(editNote(note)),
    // stopViewing: () => dispatch(finishViewing()),
    // startEditing: () => dispatch(startEditing()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);

// export default connect(null, { editNoteOnApi })(EditNote);


