import React, { useContext } from "react";
import Note from "../Note/Note";
import "./NoteList.scss";
import NotesContext from "../../NotesContext";

export default function NoteList() {
  const { notes } = useContext(NotesContext);
  if (notes.length == 0)
    return <label>No notes. Type new note in input and press Enter</label>;
  return (
    <ul className="note-list">
      {notes.map((note) => {
        return (
          <li className="note-list__item" key={note.id}>
            <Note
              id={note.id}
              text={note.text}
              dateTime={note.dateTime}
              temp={note.temp}
              icon={note.icon}
            ></Note>
          </li>
        );
      })}
    </ul>
  );
}
