import React, { useContext } from "react";
import "./Note.scss";
import NotesContext from "../../NotesContext";

export default function Note({ id, text, icon, temp, dateTime }) {
  const { onNoteDelete } = useContext(NotesContext);

  const date = new Date(dateTime);

  const dateStr =
    date.getDate() +
    " " +
    date.toLocaleString("en", { month: "short" }) +
    " " +
    date.getFullYear();
  const timeStr = date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const onDeleteClick = () => {
    onNoteDelete(id);
  };

  return (
    <div className="note">
      <div className="note-text">{text}</div>
      <div className="note-meta">
        <div className="note-meta__weather-icon">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
        </div>
        <div className="note-meta__weather-temp">{temp} C</div>
        <div className="note-meta__weather-date">{dateStr}</div>
        <div className="note-meta__weather-time">{timeStr}</div>
      </div>
      <button onClick={onDeleteClick} className="note-close-button">
        &times;
      </button>
    </div>
  );
}
