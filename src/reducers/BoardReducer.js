import { combineReducers } from 'redux'
import { BoardActionTypes } from '../actions/BoardActions'


// REDUCERS ARE JUST FUNCTIONS
// passing in initial state (current state), which we are defining as an empty array,
// passing in an action (whenever an action being triggered)

function notesReducer(currentNotes = [], action) {

    // check against the action being passed in's type. 
  switch (action.type){
    //   in case (if) action type is == add new note
    case BoardActionTypes.ADD_NEW_NOTE:
        //  pass along the new updated note as an object 
        let newNote = {
            id: Date.now(),
            title: "New Note",
            body: "Sample note body text"
        };
        // to the state, we're going to return the existing list of notes + the new updated note we've created 
        return [...currentNotes, newNote];

        // if action type = delete note
    case BoardActionTypes.DELETE_NOTE:
        // then we're going to filter through our notes, and find the id of the note we clicked, and if that id matches the note we're one, we're not going to return it in the array being created
      return currentNotes.filter((note) => note.id !== action.id);

    //   if it's neither add note or delete note, 
    default:

    // return the state of current Notes as is
      return currentNotes;
  }
}

export default combineReducers({
  notes: notesReducer
});