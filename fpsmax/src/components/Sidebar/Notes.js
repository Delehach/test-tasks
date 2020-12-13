import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteNote, moveNoteToTrash, selectNote} from "../../store/actions/notesActions";

export default function Notes({status = 'active'}) {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.allNotes);
  const searchVal = useSelector(state => state.notes.searchVal);
  const selectedNoteID = useSelector(state => state.notes.selectedNoteID);
  const visibleNotes = notes.filter(note => {
    if (searchVal) {
      return note.status === status && note.title.toLowerCase().includes(searchVal.toLowerCase());
    }
    return note.status === status;
  });

  const deleteNoteHandler = (event, {status, id}) => {
    event.stopPropagation();
    if (status === 'active') {
      dispatch(moveNoteToTrash(id));
      return;
    }
    dispatch(deleteNote(id));
  };

  return (
    <ul className="notes-list">
      {visibleNotes.map(note => {
        const isActive = note.id === selectedNoteID ? 'is-active' : '';
        return (
          <li
            key={note.id}
            className={isActive}
            title={note.title}
            onClick={() => dispatch(selectNote(note.id))}
          >
            <span>{note.title}</span>
            <button type="button" onClick={event => deleteNoteHandler(event, note)}/>
          </li>
        )
      })}
    </ul>
  )
};
