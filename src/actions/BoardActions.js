
// ACTION TYPES --> DEFINING ACTION TYPES / ACTION NAMES
export const BoardActionTypes = {
    ADD_NEW_NOTE: 'ADD_NEW_NOTE',
    DELETE_NOTE: 'DELETE_NOTE'
}

// PASSING IN ID FROM NOTE BEING DELETED, ALONG WITH TYPE OF ACTION WE WANT TO HAPPEN, ID OF THE NOTE TO UPDATE OUR STATE
const deleteNoteUnsafe = (id) => {
    return {
        type: BoardActionTypes.DELETE_NOTE,
        id
    }
}

// PASSING IN AN ID
//  DISPATCH (ACTION --> REDUCER)
//  ACTION - GETTING STATE FROM CURRENT STATE
export const deleteNote = (id) => (dispatch, getState) => {
    // SEND OFF DELETENOTEUNSAFE(ID);
    dispatch(deleteNoteUnsafe(id));
}

const addNewNoteUnsafe = () => {
    return {
        type: BoardActionTypes.ADD_NEW_NOTE
    }
}

export const addNewNote = () => (dispatch, getState) => {
    dispatch(addNewNoteUnsafe());
}
