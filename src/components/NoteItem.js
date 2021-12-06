import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3 my-2">
      <div className="card">
      <span   title="#tag" class="badge p-2 m-1  ">{note.tag.length===0?"Tag Not Entered":note.tag}</span>
        <div className="card-body">
          <div className="d-flex align-item-center">
            <h3 title="Note Title" className="card-title text-uppercase">{note.title}</h3>
            <i title="Delete Note"
              className="fas fa-trash m-2 mx-3"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted Successfully", "success");
              }}
            ></i>
            <i title="Edit Note"
              className="fas fa-edit m-2 "
              onClick={() => {
                updateNote(note)
              }}
            ></i>
          </div>
          <p style={{color:"#CCD6F6"}} className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
