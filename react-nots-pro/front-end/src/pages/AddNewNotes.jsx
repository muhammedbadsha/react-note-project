import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/css/add_button.css'
const AddNewNotes = () => {
  const [newtext , setnewtext] = useState({
    "title": '',
    "notes": ''
  })
  
  const navigate = useNavigate()
// const useEffect = (state) =>{

// }
let sentadded = () =>{
  fetch("http://127.0.0.1:8000/api/create",{
    method:"POST",
    headers:
    {
      "Content-Type": "application/json"
  },
  body:JSON.stringify(newtext)
  })
}

  let notesubmit = () =>{
    sentadded()
    navigate('/')
  }
  let addNewNote = e => {
    e.preventDefault();
    let newval = {...newtext}
    newval[e.target.name] = e.target.value
    setnewtext(newval)
    console.log(newval);
   
    // newval[e.target.name] = 

    // setnewtext(newval)
    // console.log(newval);
  }
  return (
    <div>
      <form onSubmit={notesubmit} >
        <div className='text-area '>
        <textarea name="title" onChange={addNewNote} value={newtext.title} className='header-text-area' placeholder='Enter head in here....' cols="30" rows="10"></textarea>
        <textarea name="notes" onChange={addNewNote} value={newtext.notes} cols="30" rows="10" className='body-of-note' placeholder='Enter body here ....'></textarea>
        </div>
        <div className='button-div' >
        <button className='btn' value="none" >submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddNewNotes