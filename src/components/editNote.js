import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editNoteOnApi } from '../actions/notes'

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.note.id,
      title: props.note.title,
	    details: props.note.details,
	    tags: props.note.tags,
	    user_id: 6 // make this dynamic (currently logged in user)
    }
  }

  updateValues = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  performEdit = event => {
    event.preventDefault();
    this.props.editNote(this.state);
  }

  render() {
    return(
      <div style={{marginTop: "5px"}}>
        <h3>Edit note</h3>
        <form onSubmit={e => this.performEdit(e) } >
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
                value={this.state.title}
                onChange={e => this.updateValues(e)}
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
              value={this.state.details}
              onChange={e => this.updateValues(e)}></textarea>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="note-tags">Tags</span>
            </div>
            <input
              type="text"
              name="tags"
              value={this.state.tags}
              onChange={e => this.updateValues(e)}
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
    editNote: note => dispatch(editNoteOnApi(note))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);


