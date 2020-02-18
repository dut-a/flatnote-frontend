import C from '../constants'
import fetch from 'isomorphic-fetch'

export function addNote(note) {
  return { type: C.ADD_NOTE, note }
}
export function updateNoteInView(note) {
  return { type: C.NOTE_IN_VIEW, note }
}

export const editNote = note => {
  return { type: C.EDIT_NOTE, note }
}

export const deleteNote = function(noteId) {
  return { type: C.DELETE_NOTE, noteId }
}

export const startFetching = () => ({ type: C.FETCH_NOTES });
export const finishFetching = () => ({ type: C.CANCEL_FETCHING });

export const startAdding = () => ({ type: C.ACTIONS.ADDING });
export const finishAdding = () => ({ type: C.ACTIONS.FINISH_ADDING });

export const startViewing = () => ({ type: C.ACTIONS.VIEWING });
export const finishViewing = () => ({ type: C.ACTIONS.FINISH_VIEWING });

export const startDeleting = () => ({ type: C.ACTIONS.DELETING });
export const finishDeleting = () => ({ type: C.ACTIONS.FINISH_DELETING });

export const startEditing = () => ({ type: C.ACTIONS.EDITING });
export const finishEditing = () => ({ type: C.ACTIONS.FINISH_EDITING });

export const addError = errorMessage => 
  ({
    type: C.ADD_ERROR,
    message: errorMessage
  })

export const clearError = errorIndex => 
  ({
    type: C.CLEAR_ERROR,
    errorId: errorIndex
  })

// API calls
export const fetchNotes = () => dispatch => {
  dispatch(startFetching());
  fetch(C.URLS.FLATNOTES_API)
    .then(response => response.json())
    .then(notes => {
      notes.map(note => dispatch(addNote(note)));
      dispatch(finishFetching()); // TODO: should this be here?
    })
    .catch(error => {
      dispatch(addError(error.message));
      dispatch(finishFetching());
    });
}

export const addNoteToApi = note => dispatch => {
  let reqConf = {
    method: C.HTTP.POST,
    headers:  C.HTTP.HEADERS,
    body: JSON.stringify(note)
  }
  console.log("sending: ", reqConf.body);
  dispatch(startFetching());
  fetch(C.URLS.FLATNOTES_API, reqConf)
    .then(response => response.json())
    .then(data => {
      dispatch(addNote(data.note));
      console.log("Note created:", data.note);
      console.log("Note spread out:", data.note);
      dispatch(finishFetching()); // TODO: should this be here?
    })
    .catch(error => {
      dispatch(addError(error.message));
      dispatch(finishFetching());
    });
}

export const editNoteOnApi = note => dispatch => {
  let reqConf = {
    method: C.HTTP.PATCH,
    headers:  C.HTTP.HEADERS,
    body: JSON.stringify(note)
  }
  console.log("editNoteOnApi(), editing:", note);
  console.log("editNoteOnApi(), sending:", reqConf);
  fetch(C.URLS.FLATNOTES_API + `/${note.id}`, reqConf)
    .then(response => response.json())
    .then(data => {
      dispatch(editNote(data.note));
      console.log("Note edited:", data.note);
      console.log("Note spread out:", data.note);
      dispatch(finishEditing()); // TODO: should this be here?
    })
    .catch(error => {
      dispatch(addError(error.message));
      dispatch(finishEditing());
    });
}

export const deleteNoteFromApi = noteId => dispatch => {
  let reqConf = {
    method: C.HTTP.DELETE,
    headers: C.HTTP.HEADERS
  }
  console.log("deleteNoteFromApi(), deleting:", noteId);
  fetch(C.URLS.FLATNOTES_API + `/${noteId}`, reqConf)
    .then(res => res.json())
    .then(data => {
      dispatch(deleteNote(noteId));
      console.log("Returned from DELETE:", data);
      dispatch(finishDeleting());
    })
    .catch(error => {
      dispatch(addError(error.message));
      dispatch(finishDeleting());
    });
}


