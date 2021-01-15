import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Note from '../components/Note'
import { deleteNote } from '../actions/BoardActions'


// passing in id, title, body, deleteNote action from the state
const NoteContainer = ({ id, title, body, deleteNote }) => (
    // display/render NoteRedux component assign those properties to the current of that property from the state setting the function that ahandles the dlete button to call on the deleteNote action
  <Note
    id={id}
    title={title}
    body={body}
    onDeleteClicked={() => {
      deleteNote(id);
    }}
  />
)

NoteContainer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default connect(null, {
  deleteNote
})(NoteContainer)
