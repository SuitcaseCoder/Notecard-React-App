import React, { Component } from "react";
import "../css/Board.css";
import Note from './Note';

class Board extends Component {
  constructor() {
    super();
    this.state = {
        notes: [
            // {
            //   title: "Class Notes",
            //   body: "Always use constructors when extending another class"
            // },
            // {
            //   title: "My New Address",
            //   body: "2001 N Lonhill Phoenix, AZ 81234"
            // },
            // {
            //   title: "React Notes",
            //   body: "Everything in React is a component"
            // }
          ]
    }
  }

  addNote() {
    //   ADDS TO END OF AN ARRAY
    this.state.notes.push(
      {
        title: "Edit Me",
        body: "Change Me",
        id: Date.now()
      }
    );
    // .SETSTATE() DOES TWO THINGS
    //  -- UPDATES THE STATE WITH THE NEW INFORMATION
    // -- RE-RENDERS THE COMPONENT WITH THE UPDATED STATE
    this.setState(
      {
        notes: this.state.notes
      }
    );
  }

//   delete function 
// takes in an id of the 'card' from which the dlt button will be clicked
  deleteNote(id){
    //   creating a new variable to hold the new array of notes, without the one we're gonna delte
    let newNoteArr = this.state.notes;
    // map through the array of notes from our current state
    newNoteArr.map((note, index) => {
        // if the id of the card that was clicked matches the id of the note we're on
      if (id === note.id) {
        //   then remove it from the array
        newNoteArr.splice(index,1);
      }
    });
    // reset the state with the new array that doesn't hold the card we just deleted
    this.setState(
      {
        notes: newNoteArr
      }
    );
  }

  render() {
    return (
        // JSX
      <div>
        <div className="div-board">
        <div className="row">
            {
            this.state.notes.map(item => {
                return <Note title={item.title} body={item.body} key={item.id} id={item.id} deleteHandler={this.deleteNote.bind(this)} />
              })
            }
          
        </div> 
        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add</button>
        </div>
      </div>
    );
  }
}

export default Board;
