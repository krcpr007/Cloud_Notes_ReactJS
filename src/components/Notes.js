import React, { useContext, useEffect, useState, useRef } from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useHistory } from "react-router";
const Notes = (props) => {
  const context = useContext(NoteContext);
  let history = useHistory();
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      getNotes();
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Updated successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content border-success rounded"
            style={{ backgroundColor: "#0a192f", borderRadius: "5px" }}
          >
            <div className="modal-header">
              <h5
                className="modal-title"
                style={{ color: "#64ffda" }}
                id="exampleModalLabel"
              >
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3" style={{ color: "#64ffda" }}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    style={{
                      borderBottom: "2px solid #64ffda",
                      backgroundColor: "#0a192f",
                      color: "#64ffda",
                    }}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    type="text"
                    style={{
                      borderBottom: "2px solid #64ffda",
                      backgroundColor: "#0a192f",
                      color: "#64ffda",
                    }}
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    style={{
                      borderBottom: "2px solid #64ffda",
                      backgroundColor: "#0a192f",
                      color: "#64ffda",
                    }}
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary rounded-pill"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
              title="Edit Note"
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                onClick={handleClick}
                type="submit"
                className="btn rounded-pill "
                style={{ backgroundColor: "#64ffda" }}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ color: "#64ffda" }}>
        <h1 className="mt-3">Your Notes</h1>
        <div className="container row m-2" style={{ color: "#64ffda" }}>
          {notes.length === 0 && "No Notes to Display "}
          {notes.map((note) => {
            return <NoteItem key={note._id}  updateNote={updateNote}
            showAlert={props.showAlert} note={note} />
          })}
        </div>
      </div>
    </>
  );
};
export default Notes;
