import React from "react";
import Notes from "./Notes";
import {useSelector} from "react-redux";

export default function DeletedNotes() {
  const deletedNotes = useSelector(state => state.notes.allNotes.filter(note => note.status === 'deleted'));
  return (
    !deletedNotes.length ? null :
      <>
        <div className="deleted-counter">
          <span>{deletedNotes.length} trashed {deletedNotes.length === 1 ? 'note' : 'notes'}</span>
        </div>
        <Notes status={'deleted'}/>
      </>
  )
};
