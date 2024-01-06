import React from 'react';
import Notes from './components/notes'; 
import Allnotes from './components/allnotes'; 
import './App.css';
import { useState } from 'react';
const App = () => {

  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode,setEditMode] = useState(false);
  const [editNote, setEditNote] = useState(null);
  return (
    <div className="App">
      
      <Notes 
      noteTitle={noteTitle}
      setNoteTitle={setNoteTitle}
      editMode= {editMode}
      setEditMode={setEditMode}
      notes={notes}
      setNotes={setNotes}
      editNote={editNote}
      setEditNote={setEditNote}

      /> 
      <Allnotes
      
      setNoteTitle={setNoteTitle}
      
      setEditMode={setEditMode}
      notes={notes}
      setNotes={setNotes}
      
      setEditNote={setEditNote}
      />
    </div>
  );
};

export default App;
 