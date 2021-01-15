import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNewNote } from '../actions/BoardActions'

import BoardRedux from './BoardRedux';
import NoteContainer from './NoteContainer';

// import Board from '../components/Board'
// import NoteContainer from '../containers/NoteContainer'


// passing in (current) state, along with an action
const BoardContainer = ({ notes, addNewNote }) => (
    // importing and displaying our Board component (different component)
    // to our Board component, we are passing in (as props):
    // current state of notes as a prop, 
    // function --> is going to handle the button "add note" whenever it's clicked
    // // within that fx --> call our addNewNote action from our actions folder (redux);


    <BoardRedux
        notes={notes}
        onAddNoteClicked={() => {
            addNewNote();
        }}
    > 

    {/* map through our notes (state), and passing along the index of the note, and at each note, we're going to render (display) NoteContainer component and with that, we're passing in key, id, title, body as props */}
        {notes.map((note, index) => (
            <NoteContainer key={index} id={note.id} title={note.title} body={note.body}/>
        ))}
    </BoardRedux>
)

// identifying propTypes --> stating what is required for our action to take place / component to be rendered

BoardContainer.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })).isRequired,
    addNewNote: PropTypes.func.isRequired
}

// mappting our state to props => make sure our state is updated
const mapStateToProps = state => ({
    notes: state.boardReducer.notes
});


// export & connect mapStateToProps (which handles updated state), along with the action
export default connect(
    mapStateToProps,
    { addNewNote }
)(BoardContainer)