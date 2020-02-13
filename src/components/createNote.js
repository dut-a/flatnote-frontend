import React, { Component } from 'react'
import { connect } from 'react-redux';
import uuid from "uuid";
import { addNote } from '../actions/notes'

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
      id: uuid(),
      ...this.state
    }
    this.props.addNote(note);
  }

  render() {
    return(
      <div>
        <div>Add Note</div>
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

const mapDispatchToProps = dispatch => {
  return {
    addNote: note => dispatch(addNote(note))
  };
};

export default connect(null, mapDispatchToProps)(CreateNote);