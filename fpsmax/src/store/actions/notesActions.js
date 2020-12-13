import {
  CREATE_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  FETCH_NOTES,
  MOVE_NOTE_TO_TRASH,
  SELECT_NOTE,
  SET_SEARCH_VAL
} from "../types";

const actionsCreatorHelper = (type, payload) => ({type, payload});

export const fetchNotes = () => async dispatch => {
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    const notes = await data.json();

    dispatch(actionsCreatorHelper(FETCH_NOTES, notes));
  } catch (e) {
    console.error(`Fetch notes failed with error: ${e.message}`);
  }
};

export const setSearchVal = value => actionsCreatorHelper(SET_SEARCH_VAL, value);

export const selectNote = id => actionsCreatorHelper(SELECT_NOTE, id);

export const createNote = () => actionsCreatorHelper(CREATE_NOTE);

export const editNote = (key, value) => actionsCreatorHelper(EDIT_NOTE, {key, value});

export const moveNoteToTrash = id => actionsCreatorHelper(MOVE_NOTE_TO_TRASH, id);

export const deleteNote = id => actionsCreatorHelper(DELETE_NOTE, id);
