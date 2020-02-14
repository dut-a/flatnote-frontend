import React from 'react'
import { Link } from 'react-router-dom';
 
const Note = props => {
  return (
    // <Link to={`/notes/${props.note.id}`} onClick={() => props.handleClick(props.note)}>
      <div className="note-list" onClick={() => props.handleClick(props.note)}>
        <h1>{props.note.title}</h1>
        <p>{`${props.note.details.substr(0, 50)}...`}</p>
      </div>
    // </Link>
  );
};

// eslint-disable-next-line
const mapStateToProps = state => {
  // console.log("notesContainer:", state)
  return {
    noteInView: this.state
  }
}
 
export default Note;

