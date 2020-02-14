import React from 'react'
 
const Note = props => {
  return (
    <div onClick={() => props.handleClick(props.note)}>
      <h1>{props.note.title}</h1>
      <p>{props.note.details}</p>
    </div>
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

