import React from 'react'

const allnotes = (props) => {

    const {setNoteTitle,setEditMode,notes,setNotes,setEditNote} =props
    const editHandler=(note)=>{
        setEditMode(true);
        setNoteTitle(note.title);
        setEditNote(note);
        
    
      }
    const remove=(noteID) => {
        const updated=notes.filter(note=>note.id !== noteID);
        setNotes(updated);
    };

    
  return (
    <div>
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
  )
}

export default allnotes
