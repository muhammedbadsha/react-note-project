import React, { useEffect, useState  } from 'react'  
import {useNavigate} from 'react-router-dom'
import '../components/css/notes.css'

function NotesContents(getallNotes) {
  const url = new URL(window.location.href);
  const id = url.pathname.split('/')[2];
  let [singlenote, setsinglenotes]  = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    console.log("second");
    getNotes()
    
  },[]); 

  let getNotes = async() => {
    let Response = await fetch(`http://127.0.0.1:8000/api/${id}`)
   
    let data = await Response.json()
    setsinglenotes(data)
  }

  console.log("first notes")
  let updateNotes = async() => {
  fetch(`http://127.0.0.1:8000/api/${id}/update`,{
    method:"PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(singlenote)
  })
  
  }

  let handleSubmit = () => {
    updateNotes()
    getallNotes()
    navigate('/')
  }

  const deleteNote = async() => {
    fetch(`http://127.0.0.1:8000/api/${id}/delete`,{method:"DELETE",headers:{"Content-Type": "application/json"}})

    navigate('/')
  }
  // console.log(note)
  return (
    <div>

  
<div className='sub-app-specific'>
      <div className='body-content-left'>
      <textarea className='headers-specific' onChange={(e) => {setsinglenotes({...singlenote,'title':e.target.value})}} defaultValue={singlenote.title}>{singlenote.title}</textarea>
      </div>
      <div className='body-content-right'>
      <button onClick={handleSubmit}>
        back
      </button>
      <button onClick={deleteNote}>delete</button>
      </div>
    </div>
    <textarea className='contents' name='body' onChange={(e)=>{setsinglenotes({...singlenote,'notes':e.target.value})}} defaultValue={singlenote.notes}></textarea>


{/* <h1>{singlenote}</h1> */}
</div>
  )
}

export default NotesContents