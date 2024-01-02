import { useState } from 'react';
import React from 'react';
import '../App.css';


const Notes = () => { 
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode,setEditMode] = useState(false);
  const [editNote, setEditNote] = useState(null);


  const submitHandler=(event) => {
    event.preventDefault();
    editMode? update():createHanddler();
  };

  const createHanddler=()=>{
    if (!noteTitle) {
			return alert(`Please provide a valid note title`);
		}
    const note={
      id: Date.now() + "",
      title:noteTitle,
    }
    setNotes([...notes,note]);
    setNoteTitle("");
  }

  const editHandler=(note)=>{
    setEditMode(true);
    setNoteTitle(note.title);
    setEditNote(note);
    

  }

  const update=()=>{
       const updated = notes.map((note)=>{
        if(note.id===editNote.id){
          return {...note,title:noteTitle};
         }
         return note;
       }
         
       )
       setNotes(updated);
       setEditMode(false);
		   setEditNote(null);
		   setNoteTitle("");
  }

  const remove=(noteID) => {
      const updated=notes.filter(note=>note.id !== noteID);
      setNotes(updated);
  };
  
  return (
    <div >
      <form >
        <input placeholder='Input your notes' type="text" value={noteTitle} onChange={(event)=>setNoteTitle(event.target.value)} />
        <button className="add" onClick={submitHandler}>{editMode  ? "Update":"Add Note"}</button>
      </form>
      <div className="all-notes">
        <ul>
            {notes.map((note) =>
              <li key={note.id}>{note.title}
              <button className="edit" onClick={()=>editHandler(note)}>Edit</button>
              <button className="remove" onClick={()=>remove(note.id)}>Remove</button>
              </li>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
