import {
  CREATE_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  FETCH_NOTES,
  MOVE_NOTE_TO_TRASH,
  SELECT_NOTE,
  SET_SEARCH_VAL
} from "../types";

const initialState = {
  allNotes: [],
  noteTemplate: {
    id: null,
    title: 'New note',
    text: '',
    status: 'active',
  },
  searchVal: '',
  selectedNoteID: 1,
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state, allNotes: action.payload.map(note => ({
          id: note.id,
          title: note.title,
          text: note.body,
          status: 'active',
        }))
      };

    case SELECT_NOTE:
      return {...state, selectedNoteID: parseInt(action.payload)};

    case CREATE_NOTE:
      const newNote = {...state.noteTemplate, id: Date.now()};
      return {
        ...state,
        allNotes: [newNote, ...state.allNotes],
        selectedNoteID: newNote.id
      };

    case EDIT_NOTE:
      return {
        ...state, allNotes: state.allNotes.map(note => {
          if (note.id === state.selectedNoteID) {
            return {
              ...note,
              [action.payload.key]: action.payload.value,
            }
          }
          return note;
        })
      };

    case MOVE_NOTE_TO_TRASH:
      return {
        ...state, allNotes: state.allNotes.map(note => {
          if (note.id === action.payload) {
            return {
              ...note,
              status: 'deleted',
            }
          }
          return note;
        })
      };

    case DELETE_NOTE:
      return {...state, allNotes: state.allNotes.filter(note => note.id !== action.payload)};

    case SET_SEARCH_VAL:
      return {...state, searchVal: action.payload};

    default:
      return state;
  }
};
