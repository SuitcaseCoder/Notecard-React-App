// import logo from './logo.svg';
import './App.css';
// import Board from './components/Board';

import BoardRedux from './components/BoardRedux';

function App() {
  return (
    <div className="App">
      <h1>My Notes App</h1>
      <p>Create, Edit, and Delete Notes using this incredible (and simple) React App.</p>
        {/* <Board /> */}
        <BoardRedux />
      <p>Enjoy :) </p>
    </div>
  );
}

export default App;
