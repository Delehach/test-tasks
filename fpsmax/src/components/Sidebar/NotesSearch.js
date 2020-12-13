import React from "react";
import {useDispatch} from "react-redux";
import {setSearchVal} from "../../store/actions/notesActions";

export default function NotesSearch() {
  const dispatch = useDispatch();

  return <input
    className="search-input"
    type="text"
    placeholder={"Search everywhere"}
    onChange={event => dispatch(setSearchVal(event.target.value))}
  />
}
