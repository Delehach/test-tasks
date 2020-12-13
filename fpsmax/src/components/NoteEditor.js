import React from "react";
import ContentEditable from "react-contenteditable";
import {useDispatch, useSelector} from "react-redux";
import {editNote} from "../store/actions/notesActions";

export default function NoteEditor() {
  const dispatch = useDispatch();
  const selectedNoteID = useSelector(state => state.notes.selectedNoteID);
  const note = useSelector(state => state.notes.allNotes.find(note => note.id === selectedNoteID));

  const handleChange = event => {
    const title = event.target.value.replaceAll(/(<([^>]+)>)/gi, ''); // remove html tags
    dispatch(editNote('title', title));
  };

  return (
    !note ? null :
      <div className="notes-editor">
        <ContentEditable
          html={note.title}
          tagName={'h3'}
          onChange={handleChange}
          className="notes-editor-title"
        />
        <ContentEditable
          html={note.text}
          onChange={event => dispatch(editNote('text', event.target.value))}
          className="notes-editor-text"
        />
      </div>
  )
};
