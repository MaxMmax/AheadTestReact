import React from "react";

const NotesContext = React.createContext({notes:[], onNoteAdd:()=>null, onNoteDelete:()=>null});
export default NotesContext;