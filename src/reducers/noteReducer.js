import C from '../constants'
import { combineReducers } from 'redux'

export const allNotes = function(state = { notes: [] }, action) {
  switch (action.type) {
    case C.ADD_NOTE:
      return {
        notes: state.notes.concat(action.note)
      };
    case C.EDIT_NOTE:
      const newNotes = state.notes.map(note => {
        if (note.id === action.note.id) {
          return {
            ...note,
            title: action.note.title,
            details: action.note.details,
            tags: action.note.tags
          }
        } else {
          return note
        }
      });
      console.log("edit: ", { notes: newNotes });
      return {
        notes: newNotes
      };
    case C.DELETE_NOTE:
      console.log("DELETE, note Id: ", action.noteId);
      return state.notes.filter(note => note.id !== action.noteId);
    default:
      return state;
  }
}

export const errors = (state = [], action) => {
  switch(action.type) {
    case C.ADD_ERROR:
    	return [
        ...state,
        action.message
    	];
    case C.CLEAR_ERROR: 
      return state.filter((message, i) => i !== action.errorId);
  	default: 
  		return state;
  }
}

export const fetching = (state=false, action) => {
  switch(action.type) {
    case C.FETCH_NOTES:
      return true
    case C.CANCEL_FETCHING:
      return false
    default:
      return state
  }
}

/** for conditional display and editing */
export const noteInView = function(state = null, action) {
  switch (action.type) {
    case C.NOTE_IN_VIEW:
      return {
        data: action.note
      };
    default:
      return state
  }
}

export const adding = (state = false, action) => {
  switch(action.type) {
    case C.ACTIONS.ADDING:
      return true
    case C.ACTIONS.FINISH_ADDING:
      return false
    default:
      return state
  }
}

export const viewing = (state = false, action) => {
  switch(action.type) {
    case C.ACTIONS.VIEWING:
      return true
      case C.ACTIONS.FINISH_VIEWING:
        return false
    default:
      return state
  }
}

export const deleting = (state = false, action) => {
  switch(action.type) {
    case C.ACTIONS.DELETING:
      return true
      case C.ACTIONS.FINISH_DELETING:
        return false
    default:
      return state
  }
}

export const editing = (state = false, action) => {
  switch(action.type) {
    case C.ACTIONS.EDITING:
      return true
      case C.ACTIONS.FINISH_EDITING:
        return false
    default:
      return state
  }
}

export default combineReducers({
  allNotes,
  noteInView,
  errors,
  fetching,
  adding,
  viewing,
  deleting,
  editing
})


