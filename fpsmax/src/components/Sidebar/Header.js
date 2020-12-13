import React from "react";
import {useDispatch} from "react-redux";
import {createNote} from "../../store/actions/notesActions";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar-header">
      <div className="dots"/>
      <button type="button" className="create-note-btn" onClick={() => dispatch(createNote())}/>
    </div>
  )
};
