import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNoteToApi } from '../actions/notes'

class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      details: '',
      tags: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let note = {
      ...this.state,
      user_id: 9
    }
    this.props.addNoteToApi(note);
  }

  render() {
    return(
      <div style={{width: "70%", margin: "0 auto", marginTop: "2%"}}>
        <h3>Add new note</h3>
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
                value={this.state.title}
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
              value={this.state.details}
              onChange={e => this.handleChange(e)}></textarea>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="note-tags">Tags</span>
            </div>
            <input
              type="text"
              name="tags"
              value={this.state.tags}
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

// const mapDispatchToProps = dispatch => {
//   return {
//     addNote: note => dispatch(addNote(note))
//   };
// };

export default connect(null, { addNoteToApi })(CreateNote);