import React, {useEffect, useState} from 'react'
import '../components/css/style.css'
import Header from '../components/Header'
import ListNotes from '../components/ListNotes'
const ListOfNotes = () => {
  let [notes, setnotes] = useState([])

  useEffect(() => {
    getNotes()
  },[])

  let getNotes = async() => {
    let Response = await fetch('http://127.0.0.1:8000/api/list_of_notes')
    let data = await Response.json()
    console.log('data', data);
    setnotes(data)
  }

  return (
    <div className='sub-app'>
      
      <Header fun = {getNotes}/>
      {notes.map((note)=>(
      
        <ListNotes 
        key={note.id}
        note = {note}
        />
       ))}
       </div>
  )
}

export default ListOfNotes