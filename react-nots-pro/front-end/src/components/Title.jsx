import { Link } from 'react-router-dom';
import React from 'react'
import './css/notes.css'
function Title({note}) {
  console.log(note);
  return (
    <div className='sub-app-specific'>
      <div className='body-content-left'>
      <h1 className='headers-specific'>{note.title}</h1>
      </div>
      <div className='body-content-right'>
      <Link to='/'>
        back
      </Link>
      <Link to='/'>delete</Link>
      </div>
    </div>
  )
}

export default Title