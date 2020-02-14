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
      <div style={{marginTop: "5px"}}>
        <form onSubmit={e => this.handleSubmit(e) } >
          <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="note-title">Title</span>
              </div>
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Enter title"
                aria-label="Title"
                aria-describedby="note-title"
                value={this.props.note.title}
                onChange={e => this.handleChange(e)}
              />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Details</span>
            </div>
            <textarea
              style={{height: "140px"}}
              className="form-control"
              aria-label="Note details"
              name="details"
              placeholder="Enter note details"
              cols="20"
              value={this.props.note.details}
              onChange={e => this.handleChange(e)}></textarea>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="note-tags">Tags</span>
            </div>
            <input
              type="text"
              name="tags"
              value={this.props.note.tags}
              onChange={e => this.handleChange(e)}
              className="form-control"
              placeholder="Enter tags"
              aria-label="Tags"
              aria-describedby="note-tags"
              />
          </div>
          <div>
            <input
              className="btn btn-success btn-sm btn-note"
              type="submit" value="Save"
            />
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


