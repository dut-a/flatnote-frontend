import React, { Component } from 'react'
import { connect } from 'react-redux';


/** TODO: Unused, implement it as a child of "NotesContainerc" */
class ListNotes extends Component {

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
        <div>All notes</div>
        {this.props.notes.map(note => {
          return (
            <div>
              <h1>{note.title}</h1>
              <p>{note.details}</p>
            </div>
          );
        }
        )}
      </div>
    )
  }
}

export default connect()(ListNotes);

