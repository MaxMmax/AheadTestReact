import React, { useState } from "react";
import NoteInput from "./Components/NoteInput/NoteInput";
import NoteList from "./Components/NoteList/NoteList";
import NotesContext from "./NotesContext";
import "./styles/App.scss";

function App() {
  const [notes, setNotes] = useState([]);
  const onNoteAdd = (note) => {
    setNotes([...notes, note]);
  };
  const onNoteDelete = (id) => {
    setNotes(notes.filter((note) => note.id != id));
  };

  return (
    <NotesContext.Provider value={{ notes, onNoteAdd, onNoteDelete }}>
      <div className="App">
        <div className="App-list">
          <NoteList />
        </div>
        <div className="App-input">
          <NoteInput label={"Add note..."} maxLength={300}></NoteInput>
        </div>
      </div>
    </NotesContext.Provider>
  );
}

export default App;
