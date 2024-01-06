
import React from 'react';
import '../App.css';


const Notes = (props) => { 
  
  const {noteTitle,setNoteTitle,editMode,setEditMode,notes,setNotes,editNote,setEditNote} =props

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

  
  
  return (
    <div >
      <form >
        <input placeholder='Input your notes' type="text" value={noteTitle} onChange={(event)=>setNoteTitle(event.target.value)} />
        <button className="add" onClick={submitHandler}>{editMode  ? "Update":"Add Note"}</button>
      </form>
      
    </div>
  );
};

export default Notes;
