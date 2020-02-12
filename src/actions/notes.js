import C from '../constants'
import fetch from 'isomorphic-fetch'

export function addNote(note) {
  return { type: C.ADD_NOTE, note }
}

export const editNote = noteId => {
  return { type: C.EDIT_NOTE, noteId }
}

export const deleteNote = function(noteId) {
  return { type: C.DELETE_NOTE, noteId }
}

export const fetchNotes = () => dispatch => {
  dispatch({ type: C.FETCH_NOTES });
  fetch(C.URLS.FLATNOTES_API)
    .then(response => response.json())
    .then(notes => {
      console.log("from API:", notes)
    })
    .catch(error => {
      dispatch(addError(error.message));
      dispatch({ type: C.CANCEL_FETCHING });
    });
}

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


