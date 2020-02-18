import React from 'react';
 
const Note = props => {
  return (
    <div className="note-list" onClick={() => props.handleClick(props.note)}>
      <h1>{props.note.title}</h1>
      <p>{`${props.note.details.substr(0, 50)}...`}</p>
    </div>
  );
};
 
export default Note;

