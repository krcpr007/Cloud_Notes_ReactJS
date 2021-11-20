import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";
const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleAddNote = (e) => {
    e.preventDefault();
    console.log("working");
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container ">
      <div style={{ color: "#64ffda" }}>
        <h1 className="mt-5">Add a Note </h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Note title
            </label>
            <input
              style={{ color: "#64ffda", backgroundColor: "#0a192f" }}
              value={note.title}
              placeholder="Title"
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              name="title"
              onChange={onChange}
              minLength={5}
              required
            />
            <div id="emailHelp" className="form-text">
              <span>We'll never share your Notes with anyone else.</span>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              style={{ color: "#64ffda", backgroundColor: "#0a192f" }}
              value={note.description}
              placeholder="Your Note..."
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3 ">
            <label className="form-label" htmlFor="tag">
              Tag#
            </label>
            <input
              style={{ color: "#64ffda", backgroundColor: "#0a192f" }}
              value={note.tag}
              type="text"
              placeholder="#Tag"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            style={{ color: "#64ffda", backgroundColor: "#0a192f" }}
            type="submit"
            className="btn btn-success"
            onClick={handleAddNote}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
