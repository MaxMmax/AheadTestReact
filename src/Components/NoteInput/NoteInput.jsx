import React, { useState, useContext } from "react";
import NotesContext from "../../NotesContext";
import "./NoteInput.scss";
import axios from "axios";

export default function NoteInput({ label, maxLength }) {
  const { onNoteAdd } = useContext(NotesContext);
  const onChange = (event) => {
    setValue(event.currentTarget.value);
  };

  const onKeyPress = async (event) => {
    if (event.code == "Enter" && value.length > 0 && !isError) {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=25&lon=119&appid=1ca0982c7a14b7518464ee8008f617b1"
        );
        const note = {
          id: Date.now(),
          temp: Math.round(response.data.main.temp - 273.15),
          icon: response.data.weather[0].icon,
          text: value,
          dateTime: new Date().toISOString(),
        };
        onNoteAdd(note);
        setValue("");
        window.scrollTo(0,document.body.scrollHeight);
      } catch (error) {
        alert(error);
        return;
      }
    }
  };
  const [value, setValue] = useState("");

  const isError = value.length > maxLength;

  return (
    <div className="note-input">
      <label className="note-input__label" htmlFor="noteinput">
        {label}
      </label>
      <input
        className={isError ? 'note-input__error' : 'note-input__input'}
        id="noteinput"
        type="text"
        onKeyPress={onKeyPress}
        value={value}
        onChange={onChange}
      ></input>
      {isError ? (
        <span className="note-input-span__error">Max length exceeded</span>
      ) : null}
    </div>
  );
}
