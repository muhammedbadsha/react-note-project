import './css/style.css'
import React  from 'react'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import ListOfNotes from '../pages/ListOfNotes'
import NotesContents from '../pages/NotesContents'
import AddNewNotes from '../pages/AddNewNotes';


function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<ListOfNotes />} />
        <Route path='/notes/:id' element={<NotesContents />} />
        <Route path='/addnewnote/' element={<AddNewNotes />}/>
        </Routes>
      </Router>
      
     </div>
  );
}

export default App;
