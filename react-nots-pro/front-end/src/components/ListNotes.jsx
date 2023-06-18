import React from 'react';
import './css/style.css';
import { Link } from 'react-router-dom';


function ListNotes({note}) {
  console.log('this is ',note.id);
  
  return (
    <Link to={`notes/${note.id}`}>
    <div className='List-notes'>
       <ul>
      
        <li className='note'>{note.title}</li>
     
       </ul>
    </div>
    </Link>
  )
}

export default ListNotes