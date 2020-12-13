import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import Header from "./Header";
import Notes from "./Notes";
import DeletedNotes from "./DeletedNotes";
import NotesSearch from "./NotesSearch";
import {fetchNotes} from "../../store/actions/notesActions";

export default function Sidebar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotes());
  }, []);
  return (
    <div className="sidebar">
      <Header/>
      <div className="sidebar-notes-wrap">
        <Notes/>
        <DeletedNotes/>
      </div>
      <NotesSearch/>
    </div>
  )
};
