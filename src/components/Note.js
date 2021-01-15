import React, {Component} from 'react';
import '../css/Note.css';


class Note extends Component {
  constructor(props) {
    super(props);
    this.titleContent = React.createRef();
    this.bodyContent = React.createRef(); 
    this.state = {
      title: this.props.title,
      body: this.props.body,
      editMode: false
    }
    // this.handleEdit = this.handleEdit.bind(this);   
    // this.handleSave = this.handleSave.bind(this);
  }

  handleEdit() {
    this.setState({
      editMode: true
    });
  }

  handleSave() {
    this.setState({
      title: this.titleContent.current.value,
      body: this.bodyContent.current.value,
      editMode: false
    });
  }

  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }

  render(){
    //   assigning elements to be renedered as variables
    let titleElement, bodyElement, buttonArea;
    // if editMode is true (if user clicked on edit button)
    if (this.state.editMode){
        // then display two text areas and a button to save whatever's been edited
      titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
      bodyElement = <textarea ref={this.bodyContent} className="body-textarea" defaultValue={this.state.body}></textarea>;
      buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
    }
    // else, if editMode is false (edit button has not been clicked)
    else{
        // then display simple card with its title and body 
      titleElement = <h5 className="card-title">{this.state.title}</h5>;
      bodyElement = <p>{this.state.body}</p>; 
    //   adding a button that gives the user an option to edit the info on the card if necessary
      buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button>
      {/* also have a delete button iin case user wants to delete it */}
      <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button></div>;
    }
    return (
          <div className='col-sm-6'>
          <div className="card card-view">
              <div className="card-body">
                {titleElement}
                {bodyElement}
                {buttonArea}
                </div>
            </div>
        </div>
    );
  }



//   render() {
//     return (
//       <div className="col-sm-6">
//         <div className="card card-view">
//           <div className="card-body">
//             <h5 className="card-title">{this.props.title}</h5>
//             <p>{this.props.body}</p>
//             <button className="btn btn-info">Edit</button>
//             <button className="btn btn-danger">Delete</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
}

export default Note;