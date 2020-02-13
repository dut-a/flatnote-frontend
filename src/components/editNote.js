import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editNote } from '../actions/notes'

class EditNote extends Component {
  constructor() {
    super();
    this.state = {
      id: this.props.note.id,
      title: this.props.note.title,
      details: this.props.note.details,
      tags: this.props.note.tags
    };
  }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.addNote(this.state);
  // }

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
                value={this.state.title}
                onChange={e => this.handleChange(e)}
              />&nbsp;
            </label>
          </div>

          <div>
            <label>
              Details:
              <textarea
                name="details"
                value={this.state.details}
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
                value={this.state.tags}
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

const mapStateToProps = (state, note) => {
  console.log("editNote:", state)
  return {
    note
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editNote: note => dispatch(editNote(note))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);