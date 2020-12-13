import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import NoteEditor from "./NoteEditor";

export default function App() {
  return (
    <div className="container">
      <div className="notes-wrapper">
        <Sidebar/>
        <NoteEditor/>
      </div>
    </div>
  );
};
